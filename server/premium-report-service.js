import {
  CANONICAL_PILLARS,
  formatKnowledgeContext,
  getKnowledgeBase,
  normalizePillar,
  searchKnowledgeBase
} from './knowledge-base.js';
import {
  formatRoleRoutingBlock,
  getRoleWeightForPillar,
  resolveRoleRouting,
  sortPillarsByScoreAndRoleWeight
} from './title-routing.js';

const QUICK_REPORT_MODEL = process.env.OPENAI_REPORT_MODEL || process.env.OPENAI_FINE_TUNED_MODEL || 'gpt-4o-mini';
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
  ops: 'Operations',
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

const PILLAR_KEYWORDS = {
  Operations: ['operations', 'engine', 'ops'],
  Money: ['money', 'fuel', 'finance'],
  Market: ['market', 'voice', 'customer', 'sales'],
  Leadership: ['leadership', 'brain', 'management'],
  Innovation: ['innovation', 'pulse', 'improvement'],
  Risk: ['risk', 'shield', 'compliance'],
  People: ['people', 'tribe', 'team', 'hiring']
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

const detectPillarFromText = (text = '') => {
  const lower = String(text).toLowerCase();
  for (const [pillar, words] of Object.entries(PILLAR_KEYWORDS)) {
    if (words.some((word) => lower.includes(word))) return pillar;
  }
  return '';
};

const buildAnswerBuckets = (answers = {}) => {
  const buckets = {};
  for (const pillar of CANONICAL_PILLARS) buckets[pillar] = [];

  for (const [question, answer] of Object.entries(answers || {})) {
    const matched = detectPillarFromText(question) || detectPillarFromText(String(answer));
    const value = `${question}: ${String(answer)}`;
    if (matched) buckets[matched].push(value);
    else buckets.Operations.push(value);
  }

  return buckets;
};

const dedupeDocs = (docs = []) => {
  const out = [];
  const seen = new Set();

  for (const doc of docs) {
    const sig = [
      doc.meta?.type,
      doc.meta?.libraryKind,
      doc.meta?.actionKind,
      doc.meta?.questionStage,
      doc.meta?.vocabKind,
      doc.meta?.pillar,
      doc.meta?.sourcePack,
      String(doc.text || '').slice(0, 120)
    ].join('|');

    if (seen.has(sig)) continue;
    seen.add(sig);
    out.push(doc);
  }

  return out;
};

const searchCategory = ({
  kb,
  profile,
  pillar,
  query,
  limit,
  primaryFilters,
  fallbackFilters
}) => {
  const common = {
    query,
    industry: profile?.industry || '',
    subIndustry: profile?.subIndustry || '',
    pillar,
    limit
  };

  const primary = searchKnowledgeBase(kb, {
    ...common,
    ...primaryFilters
  });

  if (!fallbackFilters || primary.length >= Math.min(2, limit)) {
    return primary;
  }

  const fallback = searchKnowledgeBase(kb, {
    ...common,
    ...fallbackFilters
  });

  return dedupeDocs([...primary, ...fallback]).slice(0, limit);
};

const collectPillarEvidenceBundle = ({
  kb,
  profile,
  roleRouting,
  pillar,
  score,
  snippets = [],
  limitPerCategory = 3
}) => {
  const roleSearchTerms = Array.isArray(roleRouting?.searchTerms)
    ? roleRouting.searchTerms.slice(0, 6).join(' ')
    : '';

  const query = [
    profile?.industry || '',
    profile?.subIndustry || '',
    profile?.userTitle || '',
    roleRouting?.familyLabel || '',
    roleSearchTerms,
    profile?.country || '',
    profile?.regionGroup || '',
    pillar,
    `score_${score}`,
    snippets.slice(0, 10).join(' ')
  ]
    .filter(Boolean)
    .join(' ');

  return {
    strengths: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['library'],
        libraryKinds: ['strength'],
        requirePillar: true
      },
      fallbackFilters: {
        documentTypes: ['library'],
        libraryKinds: ['strength']
      }
    }),
    shortcomings: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['library'],
        libraryKinds: ['leak'],
        requirePillar: true
      },
      fallbackFilters: {
        documentTypes: ['library'],
        libraryKinds: ['leak']
      }
    }),
    kpiStatements: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['library'],
        libraryKinds: ['kpi'],
        requirePillar: true
      },
      fallbackFilters: {
        documentTypes: ['library'],
        libraryKinds: ['kpi']
      }
    }),
    profitLeakVocabulary: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['vocabulary'],
        vocabKinds: ['hooks', 'leak_tokens', 'lexicons', 'quiz_tokens'],
        requirePillar: false
      }
    }),
    hookStatements: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['library'],
        libraryKinds: ['hook', 'mission_brief'],
        requirePillar: true
      },
      fallbackFilters: {
        documentTypes: ['library'],
        libraryKinds: ['hook', 'mission_brief']
      }
    }),
    actionSnippets: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['action'],
        actionKinds: ['snippet'],
        requirePillar: true
      },
      fallbackFilters: {
        documentTypes: ['action'],
        actionKinds: ['snippet']
      }
    }),
    stabilizeActions7Day: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['action'],
        actionKinds: ['fix_7_day'],
        requirePillar: true
      },
      fallbackFilters: {
        documentTypes: ['action'],
        actionKinds: ['fix_7_day']
      }
    }),
    buildControlActions30Day: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['action'],
        actionKinds: ['fix_30_day'],
        requirePillar: true
      },
      fallbackFilters: {
        documentTypes: ['action'],
        actionKinds: ['fix_30_day']
      }
    }),
    forcedPairsAB: searchCategory({
      kb,
      profile,
      pillar,
      query,
      limit: limitPerCategory,
      primaryFilters: {
        documentTypes: ['question'],
        questionStages: ['forced_pair'],
        requirePillar: true
      },
      fallbackFilters: {
        documentTypes: ['question'],
        questionStages: ['forced_pair']
      }
    })
  };
};

const formatEvidenceBlock = (title, matches, maxItems = 3) => {
  if (!Array.isArray(matches) || matches.length === 0) return `${title}\n- No direct evidence retrieved.`;
  const selected = dedupeDocs(matches).slice(0, maxItems);
  return `${title}\n${formatKnowledgeContext(selected, 300)}`;
};

const formatPillarEvidenceBundle = (pillar, bundle) => {
  const blocks = [
    formatEvidenceBlock('Strength Statements', bundle.strengths),
    formatEvidenceBlock('Shortcoming Statements', bundle.shortcomings),
    formatEvidenceBlock('KPI Measurement Statements', bundle.kpiStatements),
    formatEvidenceBlock('Profit Leak Vocabulary / Hook Phrases', [...bundle.profitLeakVocabulary, ...bundle.hookStatements]),
    formatEvidenceBlock('Action Snippet Library', bundle.actionSnippets),
    formatEvidenceBlock('7-Day Stabilize Profit Actions', bundle.stabilizeActions7Day),
    formatEvidenceBlock('30-Day Build Control Actions', bundle.buildControlActions30Day),
    formatEvidenceBlock('Industry/Species Forced Pairs (A/B)', bundle.forcedPairsAB)
  ];

  return `## ${pillar} Knowledge Bundle\n${blocks.join('\n\n')}`;
};

const clampText = (text, maxChars = 52000) => {
  const safe = sanitize(text, '');
  if (safe.length <= maxChars) return safe;
  return `${safe.slice(0, maxChars)}\n[TRUNCATED_FOR_TOKEN_BUDGET]`;
};

const toKvpString = (record) =>
  Object.entries(record || {})
    .map(([key, value]) => `- ${key}: ${String(value)}`)
    .join('\n');

const formatDeepAnswers = (answers = []) =>
  (answers || [])
    .map((item, idx) => `${idx + 1}. ${sanitize(item?.pillar, 'General')} | Q: ${sanitize(item?.question)} | A: ${sanitize(item?.answer)}`)
    .join('\n');

const profileContextBlock = (profile, archetype, roleRouting) => {
  const goals = Array.isArray(profile?.goals) && profile.goals.length > 0 ? profile.goals.join(', ') : 'None provided';
  const channels = Array.isArray(profile?.salesChannels) && profile.salesChannels.length > 0
    ? profile.salesChannels.join(', ')
    : 'Not provided';
  const products = Array.isArray(profile?.products) && profile.products.length > 0
    ? profile.products.join(', ')
    : 'Not provided';
  const roleBlock = formatRoleRoutingBlock(roleRouting);

  return [
    `- Business: ${sanitize(profile?.businessName, 'Unnamed Business')}`,
    `- Owner/Lead: ${sanitize(profile?.userName, 'Not provided')}`,
    `- Role/Title: ${sanitize(profile?.userTitle, 'Not provided')}`,
    roleBlock,
    `- Industry: ${sanitize(profile?.industry, 'General')}`,
    `- Sub-industry/Species: ${sanitize(profile?.subIndustry, 'General')}`,
    `- Team size: ${sanitize(profile?.size, 'Unknown')}`,
    `- Model: ${sanitize(profile?.model, 'Unknown')}`,
    `- Stage: ${sanitize(profile?.stage, 'Unknown')}`,
    `- Goals: ${goals}`,
    `- Pain Point: ${sanitize(profile?.pain, 'Not provided')}`,
    `- Operating model: ${sanitize(profile?.operatingModel, 'Not provided')}`,
    `- Sales channels: ${channels}`,
    `- Products: ${products}`,
    `- Country: ${sanitize(profile?.country, 'Unknown')}`,
    `- Region group: ${sanitize(profile?.regionGroup, 'Unknown')}`,
    `- Content region: ${sanitize(profile?.contentRegion, 'Unknown')}`,
    `- Locale language: ${sanitize(profile?.localeLanguage, 'Unknown')}`,
    `- Locale currency: ${sanitize(profile?.localeCurrency, 'Unknown')}`,
    `- Archetype: ${sanitize(archetype, 'Unknown')}`
  ].join('\n');
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
  const roleRouting = resolveRoleRouting(profile?.userTitle || '');
  const pillars = scoreKeysToPillars(scores);
  const answerBuckets = buildAnswerBuckets(quickScanAnswers || {});

  const knowledgeByPillar = {};
  for (const pillar of pillars) {
    const pillarScore = Number(scores?.[pillar.toLowerCase()] ?? scores?.[pillar] ?? 0);
    const snippets = answerBuckets[pillar] || [];
    const bundle = collectPillarEvidenceBundle({
      kb,
      profile,
      roleRouting,
      pillar,
      score: pillarScore,
      snippets,
      limitPerCategory: 3
    });
    knowledgeByPillar[pillar] = bundle;
  }

  const knowledgeContext = clampText(
    pillars
      .map((pillar) => formatPillarEvidenceBundle(pillar, knowledgeByPillar[pillar]))
      .join('\n\n'),
    38000
  );

  const sortedWeakest = sortPillarsByScoreAndRoleWeight(pillars, scores, roleRouting);

  const instructions = `
You are a premium management consulting AI for Profit Driven Channel.
Write with executive precision:
- diagnosis first, then impact, then action.
- no hype, no generic positivity, no filler.
- use only evidence provided in assessment inputs and knowledge bundles.
- ground each pillar in: strengths, shortcomings, KPI statements, profit-leak vocabulary/hooks, action snippets, 7-day actions, 30-day actions, and forced-pair A/B evidence.
- personalize directly to user role/title, location, industry/sub-industry, and explicit response patterns.
Return strict JSON only.
  `.trim();

  const input = clampText(`
CLIENT PROFILE
${profileContextBlock(profile, archetype, roleRouting)}

PILLAR SCORES (0-100)
${JSON.stringify(scores || {}, null, 2)}

WEAKEST PILLARS
${sortedWeakest.slice(0, 3).join(', ')}

ROLE ROUTING SUMMARY
${sanitize(roleRouting?.summary, 'No role routing summary available.')}

ALL QUICK SCAN RESPONSES
${toKvpString(quickScanAnswers || {}) || '- No quick scan responses captured.'}

PILLAR KNOWLEDGE BUNDLES
${knowledgeContext || 'No additional evidence available.'}

OUTPUT REQUIREMENTS
- executiveSummary: board-ready summary (170-260 words).
- pillars: one entry per pillar with:
  - name
  - quickScan (70-120 words)
- deepDive.theory, diagnosis, psychology, financials, prescription.
- each prescription must include clear 7-day stabilization and 30-day control actions.
- each diagnosis must reference KPI movement and likely profit leak mechanism.
- prioritize the most role-owned pillars first when sequencing actions.
  `.trim(), 52000);

  let parsed = null;
  try {
    parsed = await runStructuredPrompt({
      openai,
      model: QUICK_REPORT_MODEL,
      instructions,
      input,
      schemaName: 'premium_quick_scan_report_v2',
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

const generateSinglePillarChapter = async ({
  openai,
  profile,
  roleRouting,
  pillar,
  pillarRoleWeight,
  score,
  band,
  quickInsight,
  quickAnswerSnippets,
  deepAnswerSnippets,
  knowledgeContext
}) => {
  const instructions = `
You are a senior consulting partner writing one pillar chapter of a premium diagnostic report.
Rules:
- direct, evidence-led, commercially grounded.
- no motivational filler.
- ground recommendations in: strengths, shortcomings, KPI statements, hooks/vocabulary, snippet library, 7-day actions, 30-day actions, and forced-pair A/B signals.
- tie advice to the user profile (role/title/location/industry/sub-industry).
Return valid JSON only.
  `.trim();

  const input = clampText(`
CLIENT
${profileContextBlock(profile, '', roleRouting)}

PILLAR
- Name: ${pillar}
- Score: ${score}/100
- Band: ${sanitize(band, 'Unknown')}
- Role ownership weight: ${Math.round((pillarRoleWeight || 0) * 100)} / 100

CURRENT QUICK SCAN INSIGHT
${sanitize(quickInsight, 'No quick insight provided.')}

ALL QUICK SCAN RESPONSES FOR THIS PILLAR
${quickAnswerSnippets.length > 0 ? quickAnswerSnippets.join('\n\n') : 'No quick scan responses captured for this pillar.'}

ALL DEEP SCAN RESPONSES FOR THIS PILLAR
${deepAnswerSnippets.length > 0 ? deepAnswerSnippets.join('\n\n') : 'No deep scan responses captured for this pillar.'}

KNOWLEDGE CONTEXT
${knowledgeContext || 'No additional dataset evidence found.'}

OUTPUT REQUIREMENTS
- theory: 160-240 words.
- diagnosis: 170-260 words.
- psychology: 130-210 words.
- financials: 140-220 words.
- prescription: concrete plan split into Week 1, Days 8-30, Days 31-90.
- include specific KPIs and expected movement.
  `.trim(), 36000);

  const parsed = await runStructuredPrompt({
    openai,
    model: DEEP_SCAN_MODEL,
    instructions,
    input,
    schemaName: 'premium_deep_scan_chapter_v2',
    schema: chapterSchema,
    maxOutputTokens: 2300,
    temperature: 0.2
  });

  return parsed;
};

const generateExecutiveSummary = async ({
  openai,
  profile,
  roleRouting,
  pillarScores,
  chapterDrafts,
  quickScanResponses,
  deepAnswers
}) => {
  const instructions = `
You are writing a board-ready executive summary for a premium diagnostic report.
Use high-stakes consultant tone:
- single most critical finding first
- root causes and financial exposure next
- 7-day priority decision
- 30-day control build
- 90-day outlook
Return JSON only.
  `.trim();

  const input = clampText(`
CLIENT PROFILE
${profileContextBlock(profile, '', roleRouting)}

ROLE ROUTING SUMMARY
${sanitize(roleRouting?.summary, 'No role routing summary available.')}

PILLAR SCORES
${JSON.stringify(pillarScores, null, 2)}

ALL QUICK SCAN RESPONSES
${toKvpString(quickScanResponses || {}) || '- No quick responses available.'}

ALL DEEP SCAN RESPONSES
${formatDeepAnswers(deepAnswers || []) || '- No deep responses available.'}

CHAPTER HIGHLIGHTS
${Object.entries(chapterDrafts || {}).map(([pillar, chapter]) => {
    const diagnosis = sanitize(chapter?.diagnosis, '').slice(0, 260);
    const financials = sanitize(chapter?.financials, '').slice(0, 200);
    return `- ${pillar}: ${diagnosis}\n  Financial: ${financials}`;
  }).join('\n')}

OUTPUT
Return {"summary":"..."} in 260-420 words.
  `.trim(), 52000);

  const parsed = await runStructuredPrompt({
    openai,
    model: DEEP_SCAN_MODEL,
    instructions,
    input,
    schemaName: 'premium_deep_scan_summary_v2',
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
  const roleRouting = resolveRoleRouting(profile?.userTitle || '');
  const quickScanResponses = quickScanReport?.quickScanResponses || {};

  const quickAnswerBuckets = buildAnswerBuckets(quickScanResponses);
  const deepAnswerBuckets = groupDeepAnswersByPillar(deepScanAnswers || []);
  const sourcePillars = Array.isArray(quickScanReport?.pillars) ? quickScanReport.pillars : [];

  const requested = sourcePillars
    .map((pillar) => ({
      originalName: pillar.name,
      canonical: canonicalFromReportPillar(pillar.name),
      score: Number(pillar.score || 0),
      band: sanitize(pillar.band, 'Unknown'),
      quickInsight: sanitize(pillar?.quickScanAnalysis?.insight, pillar.hiddenCost || ''),
      roleWeight: getRoleWeightForPillar(roleRouting, canonicalFromReportPillar(pillar.name))
    }))
    .filter((item) => item.canonical)
    .sort((left, right) => {
      const leftPriority = left.score - left.roleWeight * 12;
      const rightPriority = right.score - right.roleWeight * 12;
      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      return left.score - right.score;
    });

  const chapters = {};

  for (let i = 0; i < requested.length; i += 3) {
    const batch = requested.slice(i, i + 3);

    const results = await Promise.all(batch.map(async (item) => {
      const quickSnippets = quickAnswerBuckets[item.canonical] || [];
      const deepSnippets = deepAnswerBuckets[item.canonical] || [];
      const combinedSnippets = [...quickSnippets, ...deepSnippets];

      const evidenceBundle = collectPillarEvidenceBundle({
        kb,
        profile,
        roleRouting,
        pillar: item.canonical,
        score: item.score,
        snippets: combinedSnippets,
        limitPerCategory: item.roleWeight >= 0.95 ? 5 : 4
      });

      const knowledgeContext = clampText(
        formatPillarEvidenceBundle(item.canonical, evidenceBundle),
        26000
      );

      try {
        const parsed = await generateSinglePillarChapter({
          openai,
          profile,
          roleRouting,
          pillar: item.canonical,
          pillarRoleWeight: item.roleWeight,
          score: item.score,
          band: item.band,
          quickInsight: item.quickInsight,
          quickAnswerSnippets: quickSnippets,
          deepAnswerSnippets: deepSnippets,
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
      const fallback = fallbackDeepChapter(item.canonical, item.score, profile);
      const chapter = item.chapter || fallback;

      chapters[item.originalName] = {
        theory: sanitize(chapter.theory, fallback.theory),
        diagnosis: sanitize(chapter.diagnosis, fallback.diagnosis),
        psychology: sanitize(chapter.psychology, fallback.psychology),
        financials: sanitize(chapter.financials, fallback.financials),
        prescription: sanitize(chapter.prescription, fallback.prescription)
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
      roleRouting,
      pillarScores: requested.reduce((acc, item) => {
        acc[item.canonical] = item.score;
        return acc;
      }, {}),
      chapterDrafts: chapters,
      quickScanResponses,
      deepAnswers: deepScanAnswers || []
    });
  } catch (error) {
    console.error('Deep scan executive summary generation failed:', error);
  }

  if (!executiveSummary) {
    const weak = [...requested]
      .sort((a, b) => {
        const aPriority = a.score - (a.roleWeight || 0) * 12;
        const bPriority = b.score - (b.roleWeight || 0) * 12;
        if (aPriority !== bPriority) return aPriority - bPriority;
        return a.score - b.score;
      })
      .slice(0, 2)
      .map((p) => p.canonical);
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
