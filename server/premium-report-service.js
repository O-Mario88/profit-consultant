import {
  CANONICAL_PILLARS,
  formatKnowledgeContext,
  getKnowledgeBase,
  normalizePillar,
  searchKnowledgeBase
} from './knowledge-base.js';

const QUICK_REPORT_MODEL = process.env.OPENAI_REPORT_MODEL || process.env.OPENAI_FINE_TUNED_MODEL || 'gpt-5.2-mini';
const DEEP_SCAN_MODEL = process.env.OPENAI_DEEP_SCAN_MODEL || QUICK_REPORT_MODEL;
const VECTOR_STORE_ID = process.env.OPENAI_VECTOR_STORE_ID || '';

const EMPTY_KNOWLEDGE_BASE = {
  size: 0,
  docs: [],
  postings: new Map()
};

const PILLAR_ALIASES = {
  operations: 'Operations',
  engine: 'Operations',
  money: 'Money',
  fuel: 'Money',
  market: 'Market',
  voice: 'Market',
  leadership: 'Leadership',
  brain: 'Leadership',
  innovation: 'Innovation',
  pulse: 'Innovation',
  risk: 'Risk',
  shield: 'Risk',
  people: 'People',
  tribe: 'People'
};

const toCanonicalPillar = (value) => {
  const normalized = normalizePillar(value);
  if (normalized) return normalized;
  if (typeof value !== 'string') return '';
  return PILLAR_ALIASES[value.trim().toLowerCase()] || '';
};

const loadKnowledgeBase = () => {
  try {
    return getKnowledgeBase();
  } catch (error) {
    console.warn('Knowledge base unavailable, continuing without corpus grounding:', error);
    return EMPTY_KNOWLEDGE_BASE;
  }
};

const sanitize = (value, fallback = '') => (typeof value === 'string' && value.trim() ? value.trim() : fallback);

const safeJsonParse = (text) => {
  if (!text || typeof text !== 'string') return null;
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start === -1 || end === -1 || end <= start) return null;
    try {
      return JSON.parse(text.slice(start, end + 1));
    } catch {
      return null;
    }
  }
};

const extractModelJson = (response) => {
  if (!response) return null;
  if (typeof response.output_text === 'string' && response.output_text.trim()) {
    return safeJsonParse(response.output_text);
  }

  if (!Array.isArray(response.output)) return null;
  for (const item of response.output) {
    if (!item || !Array.isArray(item.content)) continue;
    for (const content of item.content) {
      if (content?.type === 'output_text' && typeof content.text === 'string') {
        const parsed = safeJsonParse(content.text);
        if (parsed) return parsed;
      }
    }
  }

  return null;
};

const buildTextFormat = (name, schema) => ({
  format: {
    type: 'json_schema',
    name,
    schema,
    strict: false
  }
});

const runStructuredPrompt = async ({
  openai,
  model,
  instructions,
  input,
  schemaName,
  schema,
  maxOutputTokens = 3200,
  temperature = 0.2
}) => {
  const payload = {
    model,
    instructions,
    input,
    max_output_tokens: maxOutputTokens,
    temperature,
    text: buildTextFormat(schemaName, schema)
  };

  if (VECTOR_STORE_ID) {
    payload.tools = [
      {
        type: 'file_search',
        vector_store_ids: [VECTOR_STORE_ID],
        max_num_results: 10
      }
    ];
    payload.include = ['file_search_call.results'];
  }

  const response = await openai.responses.create(payload);
  return extractModelJson(response);
};

const scoreKeysToPillars = (scores) => {
  const output = [];
  for (const key of Object.keys(scores || {})) {
    const mapped = toCanonicalPillar(key);
    if (mapped && !output.includes(mapped)) output.push(mapped);
  }
  return output.length > 0 ? output : [...CANONICAL_PILLARS];
};

const buildAnswerBuckets = (answers = {}) => {
  const buckets = {};
  for (const pillar of CANONICAL_PILLARS) buckets[pillar] = [];

  for (const [question, answer] of Object.entries(answers)) {
    const lower = question.toLowerCase();
    let matched = '';
    for (const pillar of CANONICAL_PILLARS) {
      if (lower.includes(pillar.toLowerCase())) {
        matched = pillar;
        break;
      }
    }
    const value = `${question}: ${String(answer)}`;
    if (matched) buckets[matched].push(value);
    else buckets.Operations.push(value);
  }
  return buckets;
};

const pickEvidence = (kb, { profile, pillar, score, snippets = [], limit = 6 }) => {
  const query = [
    profile?.industry || '',
    profile?.subIndustry || '',
    pillar,
    `pillar_score_${score}`,
    snippets.slice(0, 6).join(' ')
  ]
    .filter(Boolean)
    .join(' ');

  return searchKnowledgeBase(kb, {
    query,
    industry: profile?.industry || '',
    subIndustry: profile?.subIndustry || '',
    pillar,
    limit
  });
};

const fallbackQuickPillar = (pillar, score, profile) => {
  const severity = score < 45 ? 'critical leak' : score < 65 ? 'developing bottleneck' : 'controlled but still improvable';
  return {
    quickScan: `${pillar} is currently a ${severity} for ${profile?.subIndustry || profile?.industry || 'this business'}. The immediate move is to assign a single owner, define one weekly KPI, and remove the highest-friction manual step this week.`,
    deepDive: {
      theory: `${pillar} is the control layer that determines repeatability, margin discipline, and resilience. In ${profile?.subIndustry || profile?.industry || 'this operating context'}, weak controls here usually amplify cash leakage and execution noise.`,
      diagnosis: `The score suggests inconsistent routines and reactive decision cycles inside ${pillar}. This usually appears as variable outcomes, recurring firefights, and low predictability in delivery and margin.`,
      psychology: `Teams tend to normalize exceptions when leadership accepts speed over standardization. Over time, this creates a hidden habit of short-term fixes replacing structured operating reviews.`,
      financials: `Commercial impact typically shows up as leakage in rework, discounting, delayed collections, or service failures. Until controls are stabilized, growth tends to scale complexity faster than profit.`,
      prescription: `7-day containment: define owner, KPI cadence, and top 3 failure triggers.\nDays 8-30: standardize one workflow, track compliance, and enforce exceptions log.\nDays 31-90: embed review rhythm, link actions to margin outcomes, and scale only proven controls.`
    }
  };
};

const fallbackDeepChapter = (pillar, score, profile) => ({
  theory: `${pillar} governs how consistently this business converts effort into profitable output. In ${profile?.subIndustry || profile?.industry || 'this market'}, the strongest operators treat ${pillar} as a repeatable management system, not a one-time initiative.`,
  diagnosis: `At ${score}/100, current execution likely includes recurring breakdowns, limited early-warning signals, and weak closure loops. Patterns usually include delayed responses and over-reliance on individual heroics instead of stable process controls.`,
  psychology: `Behaviorally, teams often prioritize urgent issues over root-cause correction. Leadership intent may be strong, but without visible accountability and review cadence, the organization drifts back to reactive habits.`,
  financials: `Financial drag appears through hidden rework, variability in unit economics, and lower confidence in forecasting. As complexity increases, uncontrolled variation compounds into cash stress, margin erosion, and avoidable risk exposure.`,
  prescription: `Week 1: containment actions with clear ownership, KPI baseline, and daily issue triage.\nDays 8-30: build standard workflows, escalation rules, and inspection checkpoints.\nDays 31-90: institutionalize cadence reviews, attach incentives to KPI movement, and document proven operating playbooks.`
});

const quickSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['executiveSummary', 'pillars'],
  properties: {
    executiveSummary: { type: 'string' },
    pillars: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['name', 'quickScan', 'deepDive'],
        properties: {
          name: { type: 'string' },
          quickScan: { type: 'string' },
          deepDive: {
            type: 'object',
            additionalProperties: false,
            required: ['theory', 'diagnosis', 'psychology', 'financials', 'prescription'],
            properties: {
              theory: { type: 'string' },
              diagnosis: { type: 'string' },
              psychology: { type: 'string' },
              financials: { type: 'string' },
              prescription: { type: 'string' }
            }
          }
        }
      }
    }
  }
};

const chapterSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['theory', 'diagnosis', 'psychology', 'financials', 'prescription'],
  properties: {
    theory: { type: 'string' },
    diagnosis: { type: 'string' },
    psychology: { type: 'string' },
    financials: { type: 'string' },
    prescription: { type: 'string' }
  }
};

const summarySchema = {
  type: 'object',
  additionalProperties: false,
  required: ['summary'],
  properties: {
    summary: { type: 'string' }
  }
};

const toKvpString = (record, maxEntries = 16) =>
  Object.entries(record || {})
    .slice(0, maxEntries)
    .map(([key, value]) => `- ${key}: ${String(value)}`)
    .join('\n');

const collectQuickKnowledgeContext = (kb, profile, pillars, scores, answerBuckets) => {
  const lines = [];

  for (const pillar of pillars) {
    const pillarScore = Number(scores?.[pillar.toLowerCase()] ?? scores?.[pillar] ?? 0);
    const evidence = pickEvidence(kb, {
      profile,
      pillar,
      score: pillarScore,
      snippets: answerBuckets[pillar] || [],
      limit: 5
    });
    if (evidence.length === 0) continue;
    lines.push(`## ${pillar} Evidence\n${formatKnowledgeContext(evidence)}`);
  }

  return lines.join('\n\n').slice(0, 12000);
};

const mapQuickResult = (modelOutput, profile, scores, pillars) => {
  const result = {};

  for (const pillar of pillars) {
    const score = Number(scores?.[pillar.toLowerCase()] ?? scores?.[pillar] ?? 0);
    result[pillar] = fallbackQuickPillar(pillar, score, profile);
  }

  if (!Array.isArray(modelOutput?.pillars)) return result;

  for (const item of modelOutput.pillars) {
    const pillar = toCanonicalPillar(item?.name);
    if (!pillar || !result[pillar]) continue;

    result[pillar] = {
      quickScan: sanitize(item.quickScan, result[pillar].quickScan),
      deepDive: {
        theory: sanitize(item?.deepDive?.theory, result[pillar].deepDive.theory),
        diagnosis: sanitize(item?.deepDive?.diagnosis, result[pillar].deepDive.diagnosis),
        psychology: sanitize(item?.deepDive?.psychology, result[pillar].deepDive.psychology),
        financials: sanitize(item?.deepDive?.financials, result[pillar].deepDive.financials),
        prescription: sanitize(item?.deepDive?.prescription, result[pillar].deepDive.prescription)
      }
    };
  }

  return result;
};

export const generatePremiumQuickReport = async ({
  openai,
  profile,
  scores,
  archetype,
  quickScanAnswers
}) => {
  const kb = loadKnowledgeBase();
  const pillars = scoreKeysToPillars(scores);
  const answerBuckets = buildAnswerBuckets(quickScanAnswers);
  const knowledgeContext = collectQuickKnowledgeContext(kb, profile, pillars, scores, answerBuckets);
  const sortedWeakest = [...pillars].sort((a, b) => {
    const scoreA = Number(scores?.[a.toLowerCase()] ?? scores?.[a] ?? 0);
    const scoreB = Number(scores?.[b.toLowerCase()] ?? scores?.[b] ?? 0);
    return scoreA - scoreB;
  });

  const instructions = `
You are a premium management consulting AI for Profit Driven Channel.
Write with executive precision:
- diagnosis first, then impact, then action.
- no hype, no generic positivity, no filler.
- use only evidence provided in assessment inputs and knowledge context.
- when inference is necessary, keep it conservative and operationally explicit.
Return strict JSON only.
  `.trim();

  const input = `
CLIENT PROFILE
- Business: ${sanitize(profile?.businessName, 'Unnamed Business')}
- Industry: ${sanitize(profile?.industry, 'General')}
- Sub-industry: ${sanitize(profile?.subIndustry, 'General')}
- Team size: ${sanitize(profile?.size, 'Unknown')}
- Archetype: ${sanitize(archetype, 'Unknown')}

PILLAR SCORES (0-100)
${JSON.stringify(scores || {}, null, 2)}

WEAKEST PILLARS
${sortedWeakest.slice(0, 3).join(', ')}

QUICK SCAN ANSWERS
${toKvpString(quickScanAnswers || {}, 24)}

KNOWLEDGE CONTEXT FROM DATASET
${knowledgeContext || 'No additional evidence available.'}

OUTPUT REQUIREMENTS
- executiveSummary: board-ready summary (170-260 words).
- pillars: one entry per pillar with:
  - name
  - quickScan (70-120 words)
  - deepDive.theory, diagnosis, psychology, financials, prescription.
  Keep sections practical and investment-grade.
  `.trim();

  let parsed = null;
  try {
    parsed = await runStructuredPrompt({
      openai,
      model: QUICK_REPORT_MODEL,
      instructions,
      input,
      schemaName: 'premium_quick_scan_report',
      schema: quickSchema,
      maxOutputTokens: 4600,
      temperature: 0.15
    });
  } catch (error) {
    console.error('Quick report generation failed, using fallback:', error);
  }

  const mappedPillars = mapQuickResult(parsed, profile, scores, pillars);
  const fallbackSummary = `Primary pressure is concentrated in ${sortedWeakest.slice(0, 2).join(' and ')}. Immediate priority is containment: assign single-point accountability, enforce weekly KPI reviews, and standardize the highest-risk workflow before scaling.`;

  return {
    executiveSummary: sanitize(parsed?.executiveSummary, fallbackSummary),
    pillars: mappedPillars
  };
};

const canonicalFromReportPillar = (name) => {
  const normalized = toCanonicalPillar(name);
  if (normalized) return normalized;
  return CANONICAL_PILLARS.find((pillar) => pillar.toLowerCase() === String(name || '').toLowerCase()) || '';
};

const groupDeepAnswersByPillar = (deepScanAnswers) => {
  const buckets = {};
  for (const pillar of CANONICAL_PILLARS) buckets[pillar] = [];
  for (const item of deepScanAnswers || []) {
    const pillar = canonicalFromReportPillar(item?.pillar);
    if (!pillar) continue;
    buckets[pillar].push(`Q: ${sanitize(item.question)}\nA: ${sanitize(item.answer)}`);
  }
  return buckets;
};

const buildDeepScanKnowledgeContext = (kb, profile, pillar, score, answerSnippets) => {
  const evidence = pickEvidence(kb, {
    profile,
    pillar,
    score,
    snippets: answerSnippets,
    limit: 7
  });
  return formatKnowledgeContext(evidence, 460);
};

const generateSinglePillarChapter = async ({
  openai,
  profile,
  pillar,
  score,
  band,
  quickInsight,
  answerSnippets,
  knowledgeContext
}) => {
  const instructions = `
You are a senior consulting partner writing one pillar chapter of a premium diagnostic report.
Rules:
- direct, evidence-led, commercially grounded.
- reference answer patterns and dataset evidence; do not invent facts.
- no motivational filler.
Return valid JSON only.
  `.trim();

  const input = `
CLIENT
- Industry: ${sanitize(profile?.industry, 'General')}
- Sub-industry: ${sanitize(profile?.subIndustry, 'General')}
- Team size: ${sanitize(profile?.size, 'Unknown')}

PILLAR
- Name: ${pillar}
- Score: ${score}/100
- Band: ${sanitize(band, 'Unknown')}

CURRENT QUICK SCAN INSIGHT
${sanitize(quickInsight, 'No quick insight provided.')}

DEEP SCAN ANSWERS
${answerSnippets.length > 0 ? answerSnippets.join('\n\n') : 'No pillar-specific deep scan answers provided.'}

KNOWLEDGE CONTEXT
${knowledgeContext || 'No additional dataset evidence found.'}

OUTPUT REQUIREMENTS
- theory: 160-240 words.
- diagnosis: 170-260 words.
- psychology: 130-210 words.
- financials: 140-220 words.
- prescription: concrete plan split into Week 1, Days 8-30, Days 31-90.
  `.trim();

  const parsed = await runStructuredPrompt({
    openai,
    model: DEEP_SCAN_MODEL,
    instructions,
    input,
    schemaName: 'premium_deep_scan_chapter',
    schema: chapterSchema,
    maxOutputTokens: 2200,
    temperature: 0.2
  });

  return parsed;
};

const generateExecutiveSummary = async ({
  openai,
  profile,
  pillarScores,
  chapterDrafts,
  deepAnswers
}) => {
  const instructions = `
You are writing a board-ready executive summary for a premium diagnostic report.
Use high-stakes consultant tone:
- single most critical finding first
- root causes and financial exposure next
- 7-day priority decision
- 90-day outlook
Return JSON only.
  `.trim();

  const input = `
CLIENT PROFILE
- Business: ${sanitize(profile?.businessName, 'Unnamed Business')}
- Industry: ${sanitize(profile?.industry, 'General')}
- Sub-industry: ${sanitize(profile?.subIndustry, 'General')}

PILLAR SCORES
${JSON.stringify(pillarScores, null, 2)}

DEEP ANSWER SAMPLE
${(deepAnswers || []).slice(0, 6).map((a) => `- ${a.pillar}: ${a.answer}`).join('\n')}

CHAPTER HIGHLIGHTS
${Object.entries(chapterDrafts || {}).map(([pillar, chapter]) => {
    const diagnosis = sanitize(chapter?.diagnosis, '').slice(0, 220);
    const financials = sanitize(chapter?.financials, '').slice(0, 180);
    return `- ${pillar}: ${diagnosis}\n  Financial: ${financials}`;
  }).join('\n')}

OUTPUT
Return {"summary":"..."} in 260-420 words.
  `.trim();

  const parsed = await runStructuredPrompt({
    openai,
    model: DEEP_SCAN_MODEL,
    instructions,
    input,
    schemaName: 'premium_deep_scan_summary',
    schema: summarySchema,
    maxOutputTokens: 900,
    temperature: 0.15
  });

  return sanitize(parsed?.summary, '');
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const generatePremiumDeepScanReport = async ({
  openai,
  quickScanReport,
  deepScanAnswers
}) => {
  const kb = loadKnowledgeBase();
  const profile = quickScanReport?.profileContext || {};
  const answerBuckets = groupDeepAnswersByPillar(deepScanAnswers || []);
  const sourcePillars = Array.isArray(quickScanReport?.pillars) ? quickScanReport.pillars : [];

  const requested = sourcePillars
    .map((pillar) => ({
      originalName: pillar.name,
      canonical: canonicalFromReportPillar(pillar.name),
      score: Number(pillar.score || 0),
      band: sanitize(pillar.band, 'Unknown'),
      quickInsight: sanitize(pillar?.quickScanAnalysis?.insight, pillar.hiddenCost || '')
    }))
    .filter((item) => item.canonical);

  const chapters = {};

  // Small batching keeps latency manageable while avoiding aggressive parallel bursts.
  for (let i = 0; i < requested.length; i += 3) {
    const batch = requested.slice(i, i + 3);
    const results = await Promise.all(batch.map(async (item) => {
      const answerSnippets = answerBuckets[item.canonical] || [];
      const knowledgeContext = buildDeepScanKnowledgeContext(
        kb,
        profile,
        item.canonical,
        item.score,
        answerSnippets
      );

      try {
        const parsed = await generateSinglePillarChapter({
          openai,
          profile,
          pillar: item.canonical,
          score: item.score,
          band: item.band,
          quickInsight: item.quickInsight,
          answerSnippets,
          knowledgeContext
        });

        return {
          ...item,
          chapter: parsed
        };
      } catch (error) {
        console.error(`Deep scan chapter failed for ${item.canonical}:`, error);
        return {
          ...item,
          chapter: null
        };
      }
    }));

    for (const item of results) {
      const chapter = item.chapter || fallbackDeepChapter(item.canonical, item.score, profile);
      chapters[item.originalName] = {
        theory: sanitize(chapter.theory, fallbackDeepChapter(item.canonical, item.score, profile).theory),
        diagnosis: sanitize(chapter.diagnosis, fallbackDeepChapter(item.canonical, item.score, profile).diagnosis),
        psychology: sanitize(chapter.psychology, fallbackDeepChapter(item.canonical, item.score, profile).psychology),
        financials: sanitize(chapter.financials, fallbackDeepChapter(item.canonical, item.score, profile).financials),
        prescription: sanitize(chapter.prescription, fallbackDeepChapter(item.canonical, item.score, profile).prescription)
      };
    }

    if (i + 3 < requested.length) {
      await sleep(100);
    }
  }

  let executiveSummary = '';
  try {
    executiveSummary = await generateExecutiveSummary({
      openai,
      profile,
      pillarScores: requested.reduce((acc, item) => {
        acc[item.canonical] = item.score;
        return acc;
      }, {}),
      chapterDrafts: chapters,
      deepAnswers: deepScanAnswers || []
    });
  } catch (error) {
    console.error('Deep scan executive summary generation failed:', error);
  }

  if (!executiveSummary) {
    const weak = [...requested].sort((a, b) => a.score - b.score).slice(0, 2).map((p) => p.canonical);
    executiveSummary = `The current operating risk is concentrated in ${weak.join(' and ')}. Immediate priority is a 7-day stabilization plan with named ownership, measurable controls, and weekly leadership review to prevent further margin leakage.`;
  }

  return {
    chapters,
    executiveSummary
  };
};

export const getReportGenerationConfig = () => ({
  quickReportModel: QUICK_REPORT_MODEL,
  deepScanModel: DEEP_SCAN_MODEL,
  vectorStoreConnected: Boolean(VECTOR_STORE_ID)
});
