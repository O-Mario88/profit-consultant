import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import express from 'express';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';
import {
  formatKnowledgeContext,
  getKnowledgeBase,
  searchKnowledgeBase
} from './knowledge-base.js';
import {
  generatePremiumDeepScanReport,
  generatePremiumQuickReport,
  getReportGenerationConfig
} from './premium-report-service.js';
import {
  generateAdaptiveAssessment,
  generateAdaptiveQuestionBank,
  getAdaptiveAssessmentConfig
} from './adaptive-assessment-service.js';

const app = express();

const API_PORT = Number(process.env.API_PORT || 8787);
const NODE_ENV = process.env.NODE_ENV || 'development';
const JSON_BODY_LIMIT = process.env.API_JSON_LIMIT || '2mb';
const SERVE_STATIC = process.env.SERVE_STATIC === 'true' || NODE_ENV === 'production';
const CORS_ORIGIN = process.env.CORS_ORIGIN || (NODE_ENV === 'development' ? '*' : '');
const RATE_WINDOW_MS = Math.max(1000, Number(process.env.API_RATE_WINDOW_MS || 60_000));
const RATE_MAX_REQUESTS = Math.max(5, Number(process.env.API_RATE_MAX || 120));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(PROJECT_ROOT, 'dist');
const INDEX_HTML_PATH = path.resolve(DIST_DIR, 'index.html');

const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = openaiApiKey ? new OpenAI({ apiKey: openaiApiKey }) : null;

const rateBuckets = new Map();
const RATE_LIMIT_PREFIXES = ['/api/ai', '/api/assessment'];
const SCORE_KEY_TO_PILLAR = {
  operations: 'Operations',
  money: 'Money',
  market: 'Market',
  leadership: 'Leadership',
  innovation: 'Innovation',
  risk: 'Risk',
  people: 'People'
};

const allowedCorsOrigins = CORS_ORIGIN
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const isOriginAllowed = (origin) => {
  if (allowedCorsOrigins.length === 0) return false;
  if (allowedCorsOrigins.includes('*')) return true;
  if (!origin) return false;
  return allowedCorsOrigins.includes(origin);
};

if (allowedCorsOrigins.length > 0) {
  app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (typeof origin === 'string' && isOriginAllowed(origin)) {
      res.setHeader('Access-Control-Allow-Origin', allowedCorsOrigins.includes('*') ? '*' : origin);
      res.setHeader('Vary', 'Origin');
    } else if (allowedCorsOrigins.includes('*')) {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Request-Id');
    if (req.method === 'OPTIONS') {
      res.status(204).end();
      return;
    }
    next();
  });
}

app.use(express.json({ limit: JSON_BODY_LIMIT }));

const isPlainObject = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value);

const asString = (value, fallback = '') => (typeof value === 'string' ? value.trim() : fallback);

const truncate = (value, maxLen = 1200) => {
  const text = typeof value === 'string' ? value : '';
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen)}...`;
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const toNumber = (value, fallback = 0) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
};

const getClientAddress = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }
  return req.ip || req.socket?.remoteAddress || 'unknown';
};

const notConfiguredError = (name) => ({
  error: {
    code: `${name}_NOT_CONFIGURED`,
    message: `${name} is not configured on the server.`
  }
});

const sendBadRequest = (res, code, message, details) => {
  res.status(400).json({
    error: {
      code,
      message,
      ...(details ? { details } : {})
    }
  });
};

const sendInternalError = (res, code, fallbackMessage, error) => {
  const message = error instanceof Error ? error.message : fallbackMessage;
  res.status(500).json({
    error: {
      code,
      message
    }
  });
};

const requireOpenAI = (res) => {
  if (openai) return true;
  res.status(500).json(notConfiguredError('OPENAI_API_KEY'));
  return false;
};

const normalizeChatPayload = (body = {}) => {
  const {
    model,
    messages,
    response_format,
    temperature,
    max_tokens,
    top_p,
    presence_penalty,
    frequency_penalty,
    n
  } = body;

  return {
    model: asString(model),
    messages: Array.isArray(messages) ? messages : null,
    response_format,
    temperature,
    max_tokens,
    top_p,
    presence_penalty,
    frequency_penalty,
    n
  };
};

const extractContentAsText = (contents) => {
  if (typeof contents === 'string') return contents;
  if (!Array.isArray(contents)) return '';

  return contents
    .map((entry) => {
      if (typeof entry === 'string') return entry;
      if (entry && typeof entry.text === 'string') return entry.text;
      if (entry && Array.isArray(entry.parts)) {
        return entry.parts
          .map((part) => (typeof part?.text === 'string' ? part.text : ''))
          .filter(Boolean)
          .join('\n');
      }
      return '';
    })
    .filter(Boolean)
    .join('\n');
};

const normalizeStringRecord = (value, {
  maxEntries = 500,
  maxKeyLength = 220,
  maxValueLength = 3000
} = {}) => {
  if (!isPlainObject(value)) return {};

  const out = {};
  for (const [rawKey, rawValue] of Object.entries(value)) {
    if (Object.keys(out).length >= maxEntries) break;

    const key = truncate(asString(rawKey), maxKeyLength);
    if (!key) continue;

    let normalizedValue = '';
    if (typeof rawValue === 'string') {
      normalizedValue = truncate(rawValue.trim(), maxValueLength);
    } else if (typeof rawValue === 'number' || typeof rawValue === 'boolean') {
      normalizedValue = String(rawValue);
    } else if (rawValue != null) {
      try {
        normalizedValue = truncate(JSON.stringify(rawValue), maxValueLength);
      } catch {
        normalizedValue = '';
      }
    }

    if (!normalizedValue) continue;
    out[key] = normalizedValue;
  }

  return out;
};

const normalizeDeepScanAnswers = (value, maxEntries = 420) => {
  if (!Array.isArray(value)) return [];

  const out = [];
  for (const entry of value) {
    if (out.length >= maxEntries) break;
    if (!isPlainObject(entry)) continue;

    const pillar = truncate(asString(entry.pillar, 'General'), 120);
    const question = truncate(asString(entry.question, 'Question not provided'), 2600);
    const answer = truncate(asString(entry.answer, 'No answer provided'), 4200);

    out.push({ pillar, question, answer });
  }

  return out;
};

const normalizeProfile = (value) => {
  if (!isPlainObject(value)) return null;

  const profile = { ...value };
  const stringFields = [
    'businessName',
    'userName',
    'userTitle',
    'industry',
    'subIndustry',
    'country',
    'regionGroup',
    'contentRegion',
    'localeLanguage',
    'localeCurrency',
    'pain',
    'stage',
    'model',
    'size',
    'operatingModel'
  ];

  for (const field of stringFields) {
    if (typeof profile[field] === 'string') {
      profile[field] = truncate(profile[field].trim(), 300);
    }
  }

  if (Array.isArray(profile.goals)) {
    profile.goals = profile.goals
      .map((goal) => truncate(asString(goal), 160))
      .filter(Boolean)
      .slice(0, 20);
  }

  if (Array.isArray(profile.salesChannels)) {
    profile.salesChannels = profile.salesChannels
      .map((channel) => truncate(asString(channel), 120))
      .filter(Boolean)
      .slice(0, 20);
  }

  if (Array.isArray(profile.products)) {
    profile.products = profile.products
      .map((product) => truncate(asString(product), 160))
      .filter(Boolean)
      .slice(0, 30);
  }

  return profile;
};

const toCanonicalPillarScores = (scores = {}) => ({
  operations: clamp(toNumber(scores.operations ?? scores.Operations, 0), 0, 100),
  money: clamp(toNumber(scores.money ?? scores.Money, 0), 0, 100),
  market: clamp(toNumber(scores.market ?? scores.Market, 0), 0, 100),
  leadership: clamp(toNumber(scores.leadership ?? scores.Leadership, 0), 0, 100),
  innovation: clamp(toNumber(scores.innovation ?? scores.Innovation, 0), 0, 100),
  risk: clamp(toNumber(scores.risk ?? scores.Risk, 0), 0, 100),
  people: clamp(toNumber(scores.people ?? scores.People, 0), 0, 100)
});

const pillarBandFromScore = (score) => {
  if (score < 45) return 'Profit Leak';
  if (score < 65) return 'Bottleneck Forming';
  return 'Controlled';
};

const buildQuickScanReportForDeepScan = ({ profile, scores, quickScanAnswers, quickScanResult }) => {
  const quickPillars = isPlainObject(quickScanResult?.pillars) ? quickScanResult.pillars : {};
  const pillars = [];
  const seen = new Set();

  for (const [scoreKey, pillarName] of Object.entries(SCORE_KEY_TO_PILLAR)) {
    const score = clamp(toNumber(scores?.[scoreKey], 0), 0, 100);
    const pillarEntry = isPlainObject(quickPillars[pillarName]) ? quickPillars[pillarName] : {};
    const deepDive = isPlainObject(pillarEntry.deepDive) ? pillarEntry.deepDive : {};
    const quickInsight = asString(pillarEntry.quickScan);

    pillars.push({
      name: pillarName,
      score,
      band: pillarBandFromScore(score),
      hiddenCost: asString(deepDive.financials, quickInsight || `${pillarName} has elevated execution risk.`),
      quickScanAnalysis: { insight: quickInsight }
    });

    seen.add(pillarName.toLowerCase());
  }

  for (const [rawPillarName, rawEntry] of Object.entries(quickPillars)) {
    const pillarName = asString(rawPillarName);
    if (!pillarName || seen.has(pillarName.toLowerCase()) || !isPlainObject(rawEntry)) continue;

    const deepDive = isPlainObject(rawEntry.deepDive) ? rawEntry.deepDive : {};
    const quickInsight = asString(rawEntry.quickScan);

    pillars.push({
      name: pillarName,
      score: 50,
      band: pillarBandFromScore(50),
      hiddenCost: asString(deepDive.financials, quickInsight || `${pillarName} has execution friction.`),
      quickScanAnalysis: { insight: quickInsight }
    });
  }

  return {
    profileContext: profile,
    quickScanResponses: quickScanAnswers,
    pillars
  };
};

const normalizeQuickReportPayload = (body = {}) => {
  const profile = normalizeProfile(body.profile);
  if (!profile) {
    return {
      error: {
        code: 'INVALID_REPORT_PAYLOAD',
        message: 'profile is required and must be an object.'
      }
    };
  }

  const scores = toCanonicalPillarScores(isPlainObject(body.scores) ? body.scores : {});
  const archetype = truncate(asString(body.archetype, 'Unknown'), 120);
  const quickScanAnswers = normalizeStringRecord(body.quickScanAnswers, {
    maxEntries: 600,
    maxKeyLength: 240,
    maxValueLength: 3600
  });

  return {
    profile,
    scores,
    archetype,
    quickScanAnswers
  };
};

const normalizeDeepScanPayload = (body = {}) => {
  if (!isPlainObject(body.quickScanReport)) {
    return {
      error: {
        code: 'INVALID_DEEP_SCAN_PAYLOAD',
        message: 'quickScanReport is required and must be an object.'
      }
    };
  }

  const quickScanReport = { ...body.quickScanReport };
  if (isPlainObject(quickScanReport.profileContext)) {
    quickScanReport.profileContext = normalizeProfile(quickScanReport.profileContext) || {};
  }
  if (isPlainObject(quickScanReport.quickScanResponses)) {
    quickScanReport.quickScanResponses = normalizeStringRecord(quickScanReport.quickScanResponses, {
      maxEntries: 700,
      maxKeyLength: 240,
      maxValueLength: 3600
    });
  }

  if (!Array.isArray(quickScanReport.pillars)) {
    return {
      error: {
        code: 'INVALID_DEEP_SCAN_PAYLOAD',
        message: 'quickScanReport.pillars must be an array.'
      }
    };
  }

  quickScanReport.pillars = quickScanReport.pillars
    .filter((pillar) => isPlainObject(pillar))
    .map((pillar) => {
      const score = clamp(toNumber(pillar.score, 50), 0, 100);
      return {
        ...pillar,
        name: truncate(asString(pillar.name, 'General'), 120),
        score,
        band: truncate(asString(pillar.band, pillarBandFromScore(score)), 80),
        hiddenCost: truncate(asString(pillar.hiddenCost, ''), 3600),
        quickScanAnalysis: isPlainObject(pillar.quickScanAnalysis)
          ? {
            ...pillar.quickScanAnalysis,
            insight: truncate(asString(pillar.quickScanAnalysis.insight, ''), 3600)
          }
          : { insight: '' }
      };
    });

  if (quickScanReport.pillars.length === 0) {
    return {
      error: {
        code: 'INVALID_DEEP_SCAN_PAYLOAD',
        message: 'quickScanReport.pillars must include at least one pillar.'
      }
    };
  }

  const deepScanAnswers = normalizeDeepScanAnswers(body.deepScanAnswers);

  return {
    quickScanReport,
    deepScanAnswers
  };
};

const shouldRateLimit = (path) =>
  RATE_LIMIT_PREFIXES.some((prefix) => path.startsWith(prefix));

app.use((req, res, next) => {
  const requestId = asString(req.headers['x-request-id']) || crypto.randomUUID();
  res.setHeader('x-request-id', requestId);
  next();
});

app.use((req, res, next) => {
  if (!shouldRateLimit(req.path)) {
    next();
    return;
  }

  const now = Date.now();
  const clientId = getClientAddress(req);
  const bucket = rateBuckets.get(clientId) || { count: 0, resetAt: now + RATE_WINDOW_MS };

  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + RATE_WINDOW_MS;
  }

  bucket.count += 1;
  rateBuckets.set(clientId, bucket);

  const remaining = Math.max(0, RATE_MAX_REQUESTS - bucket.count);
  res.setHeader('x-ratelimit-limit', String(RATE_MAX_REQUESTS));
  res.setHeader('x-ratelimit-remaining', String(remaining));
  res.setHeader('x-ratelimit-reset', String(Math.ceil(bucket.resetAt / 1000)));

  if (bucket.count > RATE_MAX_REQUESTS) {
    res.status(429).json({
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Too many requests. Please retry shortly.'
      }
    });
    return;
  }

  next();
});

setInterval(() => {
  const now = Date.now();
  for (const [clientId, bucket] of rateBuckets.entries()) {
    if (now > bucket.resetAt + RATE_WINDOW_MS) {
      rateBuckets.delete(clientId);
    }
  }
}, Math.max(30_000, RATE_WINDOW_MS)).unref();

app.get('/api/health', (_req, res) => {
  let knowledgeBase = null;
  try {
    const kb = getKnowledgeBase();
    knowledgeBase = {
      loaded: true,
      size: kb.size,
      datasetUpdatedAt: kb.datasetUpdatedAt
    };
  } catch (error) {
    knowledgeBase = {
      loaded: false,
      error: error instanceof Error ? error.message : 'Failed to load knowledge base'
    };
  }

  res.json({
    ok: true,
    env: NODE_ENV,
    aiConfigured: Boolean(openai),
    servingStaticFrontend: Boolean(SERVE_STATIC && fs.existsSync(INDEX_HTML_PATH)),
    corsOrigins: allowedCorsOrigins,
    knowledgeBase,
    reportConfig: getReportGenerationConfig(),
    rateLimit: {
      windowMs: RATE_WINDOW_MS,
      maxRequests: RATE_MAX_REQUESTS
    }
  });
});

app.post('/api/ai/chat/completions', async (req, res) => {
  if (!requireOpenAI(res)) return;

  try {
    const payload = normalizeChatPayload(req.body || {});
    if (!payload.model || !Array.isArray(payload.messages)) {
      sendBadRequest(res, 'INVALID_CHAT_PAYLOAD', 'model and messages are required.');
      return;
    }

    const completion = await openai.chat.completions.create(payload);
    res.json(completion);
  } catch (error) {
    sendInternalError(res, 'CHAT_COMPLETION_FAILED', 'Chat completion failed.', error);
  }
});

app.post('/api/ai/images/generate', async (req, res) => {
  if (!requireOpenAI(res)) return;

  try {
    const payload = isPlainObject(req.body) ? req.body : {};
    if (!asString(payload.model) || !asString(payload.prompt)) {
      sendBadRequest(res, 'INVALID_IMAGE_PAYLOAD', 'model and prompt are required.');
      return;
    }

    const image = await openai.images.generate(payload);
    res.json(image);
  } catch (error) {
    sendInternalError(res, 'IMAGE_GENERATION_FAILED', 'Image generation failed.', error);
  }
});

app.post('/api/ai/models/generate-content', async (req, res) => {
  if (!requireOpenAI(res)) return;

  try {
    const body = isPlainObject(req.body) ? req.body : {};
    const model = asString(body.model, 'gpt-4o-mini');
    const mappedModel = model.startsWith('gemini-') ? 'gpt-4o-mini' : model;
    const systemInstruction = asString(body.config?.systemInstruction, '');
    const userText = extractContentAsText(body.contents);

    if (!userText) {
      sendBadRequest(res, 'INVALID_GENERATE_CONTENT_PAYLOAD', 'contents is required.');
      return;
    }

    const completion = await openai.chat.completions.create({
      model: mappedModel,
      messages: [
        ...(systemInstruction ? [{ role: 'system', content: systemInstruction }] : []),
        { role: 'user', content: userText }
      ]
    });

    const text = completion.choices?.[0]?.message?.content || '';
    res.json({ text });
  } catch (error) {
    sendInternalError(res, 'MODEL_GENERATION_FAILED', 'Model generation failed.', error);
  }
});

app.get('/api/ai/knowledge/status', (_req, res) => {
  try {
    const kb = getKnowledgeBase();
    res.json({
      ok: true,
      size: kb.size,
      datasetPath: kb.datasetPath,
      datasetUpdatedAt: kb.datasetUpdatedAt
    });
  } catch (error) {
    sendInternalError(res, 'KNOWLEDGE_BASE_UNAVAILABLE', 'Knowledge base unavailable.', error);
  }
});

app.post('/api/ai/knowledge/search', (req, res) => {
  try {
    const body = isPlainObject(req.body) ? req.body : {};
    const query = truncate(asString(body.query), 1500);
    if (!query) {
      sendBadRequest(res, 'INVALID_KNOWLEDGE_SEARCH_PAYLOAD', 'query is required.');
      return;
    }

    const limit = clamp(Math.round(toNumber(body.limit, 8)), 1, 30);
    const kb = getKnowledgeBase();

    const matches = searchKnowledgeBase(kb, {
      query,
      industry: asString(body.industry),
      subIndustry: asString(body.subIndustry),
      pillar: asString(body.pillar),
      limit,
      documentTypes: Array.isArray(body.documentTypes) ? body.documentTypes : undefined,
      libraryKinds: Array.isArray(body.libraryKinds) ? body.libraryKinds : undefined,
      actionKinds: Array.isArray(body.actionKinds) ? body.actionKinds : undefined,
      questionStages: Array.isArray(body.questionStages) ? body.questionStages : undefined,
      vocabKinds: Array.isArray(body.vocabKinds) ? body.vocabKinds : undefined,
      requirePillar: Boolean(body.requirePillar)
    });

    res.json({
      ok: true,
      count: matches.length,
      context: formatKnowledgeContext(matches, 340),
      matches: matches.map((match) => ({
        id: match.id,
        relevance: match.relevance,
        text: match.text,
        meta: match.meta
      }))
    });
  } catch (error) {
    sendInternalError(res, 'KNOWLEDGE_SEARCH_FAILED', 'Knowledge search failed.', error);
  }
});

const handleQuickScanReportGeneration = async (req, res) => {
  if (!requireOpenAI(res)) return;

  try {
    const payload = normalizeQuickReportPayload(req.body || {});
    if (payload.error) {
      sendBadRequest(res, payload.error.code, payload.error.message);
      return;
    }

    const result = await generatePremiumQuickReport({
      openai,
      profile: payload.profile,
      scores: payload.scores,
      archetype: payload.archetype,
      quickScanAnswers: payload.quickScanAnswers
    });

    res.json(result);
  } catch (error) {
    sendInternalError(res, 'PREMIUM_REPORT_FAILED', 'Premium report generation failed.', error);
  }
};

const handleDeepScanReportGeneration = async (req, res) => {
  if (!requireOpenAI(res)) return;

  try {
    const payload = normalizeDeepScanPayload(req.body || {});
    if (payload.error) {
      sendBadRequest(res, payload.error.code, payload.error.message);
      return;
    }

    const result = await generatePremiumDeepScanReport({
      openai,
      quickScanReport: payload.quickScanReport,
      deepScanAnswers: payload.deepScanAnswers
    });

    res.json(result);
  } catch (error) {
    sendInternalError(res, 'DEEP_SCAN_REPORT_FAILED', 'Deep scan report generation failed.', error);
  }
};

app.post('/api/ai/report/generate', handleQuickScanReportGeneration);
app.post('/api/ai/report/deep-scan', handleDeepScanReportGeneration);

app.post('/api/assessment/quick-scan', handleQuickScanReportGeneration);
app.post('/api/assessment/deep-scan', handleDeepScanReportGeneration);

app.post('/api/assessment/full-report', async (req, res) => {
  if (!requireOpenAI(res)) return;

  try {
    const body = isPlainObject(req.body) ? req.body : {};
    const quickPayload = normalizeQuickReportPayload(body);
    if (quickPayload.error) {
      sendBadRequest(res, quickPayload.error.code, quickPayload.error.message);
      return;
    }

    const deepScanAnswers = normalizeDeepScanAnswers(body.deepScanAnswers, 420);
    if (deepScanAnswers.length === 0) {
      sendBadRequest(
        res,
        'INVALID_FULL_REPORT_PAYLOAD',
        'deepScanAnswers is required for full-report and must be a non-empty array.'
      );
      return;
    }

    const quickScan = await generatePremiumQuickReport({
      openai,
      profile: quickPayload.profile,
      scores: quickPayload.scores,
      archetype: quickPayload.archetype,
      quickScanAnswers: quickPayload.quickScanAnswers
    });

    const quickScanReport = buildQuickScanReportForDeepScan({
      profile: quickPayload.profile,
      scores: quickPayload.scores,
      quickScanAnswers: quickPayload.quickScanAnswers,
      quickScanResult: quickScan
    });

    const deepScan = await generatePremiumDeepScanReport({
      openai,
      quickScanReport,
      deepScanAnswers
    });

    res.json({
      quickScan,
      deepScan,
      quickScanReport
    });
  } catch (error) {
    sendInternalError(res, 'FULL_REPORT_FAILED', 'Full report generation failed.', error);
  }
});

app.post('/api/assessment/adaptive', async (req, res) => {
  if (!requireOpenAI(res)) return;

  try {
    const body = isPlainObject(req.body) ? req.body : {};
    const result = await generateAdaptiveAssessment({
      openai,
      rawInput: body
    });

    res.json({
      ok: true,
      ...result
    });
  } catch (error) {
    sendInternalError(res, 'ADAPTIVE_ASSESSMENT_FAILED', 'Adaptive assessment generation failed.', error);
  }
});

app.post('/api/assessment/adaptive/questions', async (req, res) => {
  if (!requireOpenAI(res)) return;

  try {
    const body = isPlainObject(req.body) ? req.body : {};
    const result = await generateAdaptiveQuestionBank({
      openai,
      rawInput: body
    });

    res.json({
      ok: true,
      ...result
    });
  } catch (error) {
    sendInternalError(res, 'ADAPTIVE_QUESTION_BANK_FAILED', 'Adaptive question bank generation failed.', error);
  }
});

app.use((error, _req, res, next) => {
  if (!error) {
    next();
    return;
  }

  if (error.type === 'entity.parse.failed') {
    sendBadRequest(res, 'INVALID_JSON_BODY', 'Request body must be valid JSON.');
    return;
  }

  if (error.type === 'entity.too.large') {
    res.status(413).json({
      error: {
        code: 'PAYLOAD_TOO_LARGE',
        message: `Request payload exceeded limit (${JSON_BODY_LIMIT}).`
      }
    });
    return;
  }

  sendInternalError(res, 'UNHANDLED_SERVER_ERROR', 'Unhandled server error.', error);
});

app.use('/api', (_req, res) => {
  res.status(404).json({
    error: {
      code: 'API_ROUTE_NOT_FOUND',
      message: 'Route not found.'
    }
  });
});

if (SERVE_STATIC) {
  if (fs.existsSync(INDEX_HTML_PATH)) {
    app.use(express.static(DIST_DIR, { index: false }));
    app.get(/.*/, (_req, res) => {
      res.sendFile(INDEX_HTML_PATH);
    });
  } else {
    console.warn(`Static frontend requested but dist build missing at: ${DIST_DIR}`);
  }
}

app.listen(API_PORT, () => {
  console.log(`API server listening on http://localhost:${API_PORT}`);
  console.log(`AI configured: ${Boolean(openai)}`);
  console.log(`CORS origins: ${allowedCorsOrigins.length > 0 ? allowedCorsOrigins.join(', ') : 'disabled'}`);
  console.log(`Static frontend serving: ${Boolean(SERVE_STATIC && fs.existsSync(INDEX_HTML_PATH))}`);
  console.log(`Rate limit: ${RATE_MAX_REQUESTS} requests / ${Math.round(RATE_WINDOW_MS / 1000)}s`);
  console.log(`Adaptive assessment model: ${getAdaptiveAssessmentConfig().model}`);

  try {
    const kb = getKnowledgeBase();
    console.log(`Knowledge base loaded (${kb.size} docs).`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Knowledge base unavailable: ${message}`);
  }
});
