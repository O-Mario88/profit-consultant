import express from 'express';
import OpenAI from 'openai';
import { getKnowledgeBase } from './knowledge-base.js';
import {
  generatePremiumDeepScanReport,
  generatePremiumQuickReport,
  getReportGenerationConfig
} from './premium-report-service.js';

const app = express();

const API_PORT = Number(process.env.API_PORT || 8787);
const NODE_ENV = process.env.NODE_ENV || 'development';
const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = openaiApiKey ? new OpenAI({ apiKey: openaiApiKey }) : null;

app.use(express.json({ limit: '2mb' }));

const notConfiguredError = (name) => ({
  error: {
    code: `${name}_NOT_CONFIGURED`,
    message: `${name} is not configured on the server.`
  }
});

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
    model,
    messages,
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
  if (Array.isArray(contents)) {
    return contents
      .map((c) => {
        if (typeof c === 'string') return c;
        if (c && typeof c.text === 'string') return c.text;
        if (c && Array.isArray(c.parts)) {
          return c.parts
            .map((p) => (typeof p?.text === 'string' ? p.text : ''))
            .filter(Boolean)
            .join('\n');
        }
        return '';
      })
      .filter(Boolean)
      .join('\n');
  }
  return '';
};

const toCanonicalPillarScores = (scores = {}) => ({
  operations: Number(scores.operations ?? scores.Operations ?? 0),
  money: Number(scores.money ?? scores.Money ?? 0),
  market: Number(scores.market ?? scores.Market ?? 0),
  leadership: Number(scores.leadership ?? scores.Leadership ?? 0),
  innovation: Number(scores.innovation ?? scores.Innovation ?? 0),
  risk: Number(scores.risk ?? scores.Risk ?? 0),
  people: Number(scores.people ?? scores.People ?? 0)
});

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
    knowledgeBase,
    reportConfig: getReportGenerationConfig()
  });
});

app.post('/api/ai/chat/completions', async (req, res) => {
  if (!openai) {
    res.status(500).json(notConfiguredError('OPENAI_API_KEY'));
    return;
  }

  try {
    const payload = normalizeChatPayload(req.body);
    if (!payload.model || !Array.isArray(payload.messages)) {
      res.status(400).json({
        error: {
          code: 'INVALID_CHAT_PAYLOAD',
          message: 'model and messages are required.'
        }
      });
      return;
    }

    const completion = await openai.chat.completions.create(payload);
    res.json(completion);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown AI error';
    res.status(500).json({
      error: {
        code: 'CHAT_COMPLETION_FAILED',
        message
      }
    });
  }
});

app.post('/api/ai/images/generate', async (req, res) => {
  if (!openai) {
    res.status(500).json(notConfiguredError('OPENAI_API_KEY'));
    return;
  }

  try {
    const payload = req.body || {};
    if (!payload.model || !payload.prompt) {
      res.status(400).json({
        error: {
          code: 'INVALID_IMAGE_PAYLOAD',
          message: 'model and prompt are required.'
        }
      });
      return;
    }

    const image = await openai.images.generate(payload);
    res.json(image);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown image generation error';
    res.status(500).json({
      error: {
        code: 'IMAGE_GENERATION_FAILED',
        message
      }
    });
  }
});

app.post('/api/ai/models/generate-content', async (req, res) => {
  if (!openai) {
    res.status(500).json(notConfiguredError('OPENAI_API_KEY'));
    return;
  }

  try {
    const body = req.body || {};
    const model = typeof body.model === 'string' ? body.model : 'gpt-4o-mini';
    const mappedModel = model.startsWith('gemini-') ? 'gpt-4o-mini' : model;
    const systemInstruction = typeof body.config?.systemInstruction === 'string'
      ? body.config.systemInstruction
      : undefined;
    const userText = extractContentAsText(body.contents);

    if (!userText) {
      res.status(400).json({
        error: {
          code: 'INVALID_GENERATE_CONTENT_PAYLOAD',
          message: 'contents is required.'
        }
      });
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
    const message = error instanceof Error ? error.message : 'Unknown model generation error';
    res.status(500).json({
      error: {
        code: 'MODEL_GENERATION_FAILED',
        message
      }
    });
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
    const message = error instanceof Error ? error.message : 'Unknown knowledge base error';
    res.status(500).json({
      error: {
        code: 'KNOWLEDGE_BASE_UNAVAILABLE',
        message
      }
    });
  }
});

app.post('/api/ai/report/generate', async (req, res) => {
  if (!openai) {
    res.status(500).json(notConfiguredError('OPENAI_API_KEY'));
    return;
  }

  try {
    const body = req.body || {};
    const profile = body.profile || {};
    const archetype = typeof body.archetype === 'string' ? body.archetype : 'Unknown';
    const quickScanAnswers = body.quickScanAnswers && typeof body.quickScanAnswers === 'object'
      ? body.quickScanAnswers
      : {};
    const scores = toCanonicalPillarScores(body.scores || {});

    if (!profile || typeof profile !== 'object') {
      res.status(400).json({
        error: {
          code: 'INVALID_REPORT_PAYLOAD',
          message: 'profile is required.'
        }
      });
      return;
    }

    const result = await generatePremiumQuickReport({
      openai,
      profile,
      scores,
      archetype,
      quickScanAnswers
    });

    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown premium report error';
    res.status(500).json({
      error: {
        code: 'PREMIUM_REPORT_FAILED',
        message
      }
    });
  }
});

app.post('/api/ai/report/deep-scan', async (req, res) => {
  if (!openai) {
    res.status(500).json(notConfiguredError('OPENAI_API_KEY'));
    return;
  }

  try {
    const body = req.body || {};
    const quickScanReport = body.quickScanReport;
    const deepScanAnswers = Array.isArray(body.deepScanAnswers) ? body.deepScanAnswers : [];

    if (!quickScanReport || typeof quickScanReport !== 'object') {
      res.status(400).json({
        error: {
          code: 'INVALID_DEEP_SCAN_PAYLOAD',
          message: 'quickScanReport is required.'
        }
      });
      return;
    }

    const result = await generatePremiumDeepScanReport({
      openai,
      quickScanReport,
      deepScanAnswers
    });

    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown deep scan generation error';
    res.status(500).json({
      error: {
        code: 'DEEP_SCAN_REPORT_FAILED',
        message
      }
    });
  }
});

app.use('/api', (_req, res) => {
  res.status(404).json({
    error: {
      code: 'API_ROUTE_NOT_FOUND',
      message: 'Route not found.'
    }
  });
});

app.listen(API_PORT, () => {
  console.log(`API server listening on http://localhost:${API_PORT}`);
  console.log(`AI configured: ${Boolean(openai)}`);
  try {
    const kb = getKnowledgeBase();
    console.log(`Knowledge base loaded (${kb.size} docs).`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Knowledge base unavailable: ${message}`);
  }
});
