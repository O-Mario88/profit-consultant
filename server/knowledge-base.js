import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEFAULT_DATASET_PATH = path.resolve(__dirname, '../data/llm_training_data.json');

export const CANONICAL_PILLARS = [
  'Operations',
  'Money',
  'Market',
  'Leadership',
  'Innovation',
  'Risk',
  'People'
];

const PILLAR_ALIASES = {
  operations: 'Operations',
  engine: 'Operations',
  ops: 'Operations',
  money: 'Money',
  fuel: 'Money',
  finance: 'Money',
  market: 'Market',
  voice: 'Market',
  leadership: 'Leadership',
  brain: 'Leadership',
  innovation: 'Innovation',
  'innovation & creativity': 'Innovation',
  pulse: 'Innovation',
  risk: 'Risk',
  shield: 'Risk',
  people: 'People',
  tribe: 'People'
};

const STOP_WORDS = new Set([
  'the', 'and', 'for', 'with', 'that', 'this', 'from', 'are', 'was', 'were', 'been',
  'into', 'your', 'you', 'our', 'their', 'they', 'them', 'have', 'has', 'had', 'will',
  'would', 'could', 'should', 'about', 'what', 'when', 'where', 'which', 'while',
  'through', 'across', 'under', 'over', 'between', 'after', 'before', 'very', 'more',
  'most', 'than', 'then', 'also', 'only', 'just', 'like', 'such', 'question', 'answer',
  'score', 'business', 'industry', 'option'
]);

const MIN_TOKEN_LENGTH = 3;

export const normalizeIndustry = (value) => {
  if (typeof value !== 'string') return '';
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
};

const normalizeLineType = (value) => normalizeIndustry(value);

export const normalizePillar = (value) => {
  if (typeof value !== 'string') return '';
  const raw = value.trim().toLowerCase();
  return PILLAR_ALIASES[raw] || '';
};

const toList = (value) => {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const normalizeList = (values, normalize = (v) => v) =>
  toList(values)
    .map((item) => (typeof item === 'string' ? normalize(item) : ''))
    .filter(Boolean);

const stringifyValue = (value) => {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) return value.map((item) => stringifyValue(item)).filter(Boolean).join('\n');
  if (typeof value === 'object') {
    return Object.entries(value)
      .map(([key, val]) => `${key}: ${stringifyValue(val)}`)
      .filter((line) => line && !line.endsWith(': '))
      .join('\n');
  }
  return '';
};

const tokenize = (input) => {
  if (!input || typeof input !== 'string') return [];
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= MIN_TOKEN_LENGTH && !STOP_WORDS.has(token));
};

const buildDocText = (...parts) =>
  parts
    .flat()
    .map((part) => (typeof part === 'string' ? part.trim() : ''))
    .filter(Boolean)
    .join('\n');

const deriveSourcePack = (item = {}) =>
  normalizeIndustry(item.sourcePack || item.source_pack || item.pack || item.industry || '');

const deriveIndustry = (item = {}) => normalizeIndustry(item.industry || '');

const derivePillar = (item = {}) => {
  const direct = normalizePillar(item.pillar || item.pillarId || item.pillar_id || item.pillarName || '');
  if (direct) return direct;

  const id = String(item.id || item.action_id || item.qid || '').toLowerCase();
  if (id.includes('ops') || id.includes('operations') || id.includes('engine')) return 'Operations';
  if (id.includes('money') || id.includes('fuel') || id.includes('finance')) return 'Money';
  if (id.includes('market') || id.includes('voice')) return 'Market';
  if (id.includes('lead') || id.includes('brain')) return 'Leadership';
  if (id.includes('innovation') || id.includes('pulse')) return 'Innovation';
  if (id.includes('risk') || id.includes('shield')) return 'Risk';
  if (id.includes('people') || id.includes('tribe')) return 'People';
  return '';
};

const inferQuestionStage = (qid) => {
  const id = String(qid || '').toUpperCase();
  if (id.startsWith('QS_')) return 'quick_scan';
  if (id.startsWith('DS_')) return 'deep_scan';
  return 'forced_pair';
};

const deriveQuestionPairKind = (qid) => {
  const id = String(qid || '').toUpperCase();
  if (id.endsWith('_A')) return 'A';
  if (id.endsWith('_B')) return 'B';
  return 'AB';
};

const normalizeSourcePackFromVocabularyKey = (key) => {
  const normalized = normalizeIndustry(key);
  return normalized
    .replace(/_hooks$/, '')
    .replace(/_leak_tokens?$/, '')
    .replace(/_lexicons?$/, '')
    .replace(/_quiz_tokens?$/, '');
};

const makeMeta = ({
  type,
  libraryKind = '',
  actionKind = '',
  questionStage = '',
  questionPairKind = '',
  questionId = '',
  vocabKind = '',
  pillar = '',
  industry = '',
  sourcePack = '',
  lineType = [],
  signalTags = []
}) => ({
  type,
  libraryKind,
  actionKind,
  questionStage,
  questionPairKind,
  questionId,
  vocabKind,
  pillar: normalizePillar(pillar),
  industry: normalizeIndustry(industry),
  sourcePack: normalizeIndustry(sourcePack),
  lineType: normalizeList(lineType, normalizeLineType),
  signalTags: normalizeList(signalTags, normalizeIndustry)
});

const addDoc = (docs, text, meta) => {
  if (typeof text !== 'string') return;
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length < 24) return;

  docs.push({
    id: `kb_${docs.length + 1}`,
    text: clean,
    textLower: clean.toLowerCase(),
    meta
  });
};

const buildDocsFromTrainingData = (raw) => {
  const docs = [];

  for (const item of raw.library || []) {
    const text = buildDocText(
      item.text,
      item.hook_text,
      item.cost_text,
      item.cliffhanger_text,
      item.kpi_text
    );

    addDoc(docs, text, makeMeta({
      type: 'library',
      libraryKind: typeof item.type === 'string' ? normalizeIndustry(item.type) : 'unknown',
      pillar: derivePillar(item),
      industry: deriveIndustry(item),
      sourcePack: deriveSourcePack(item),
      lineType: item.line_type,
      signalTags: item.signal_tags
    }));
  }

  for (const item of raw.questions || []) {
    const questionStage = inferQuestionStage(item.qid);
    const text = buildDocText(
      `Pillar: ${item.pillar || 'Unknown'} (${questionStage})`,
      item.qid ? `Question ID: ${item.qid}` : '',
      `Option A: ${item.textA || ''}`,
      `Option B: ${item.textB || ''}`,
      item.species_notes ? `Species notes: ${stringifyValue(item.species_notes)}` : ''
    );

    addDoc(docs, text, makeMeta({
      type: 'question',
      questionStage,
      questionPairKind: deriveQuestionPairKind(item.qid),
      questionId: typeof item.qid === 'string' ? item.qid : '',
      pillar: derivePillar(item),
      industry: deriveIndustry(item),
      sourcePack: deriveSourcePack(item),
      lineType: item.line_type,
      signalTags: item.signal_tags
    }));
  }

  for (const item of raw.actions?.snippets || []) {
    const text = buildDocText(
      item.title,
      item.signal ? `Signal: ${item.signal}` : '',
      item.action,
      item.text,
      item.description,
      item.desc,
      item.objective,
      item.outcome,
      item.tool ? `Tool: ${item.tool}` : '',
      item.kpi_impact ? `KPI Impact: ${item.kpi_impact}` : '',
      item.steps
    );

    addDoc(docs, text, makeMeta({
      type: 'action',
      actionKind: 'snippet',
      pillar: derivePillar(item),
      industry: deriveIndustry(item),
      sourcePack: deriveSourcePack(item),
      lineType: item.line_type,
      signalTags: item.signal_tags
    }));
  }

  for (const item of raw.actions?.fixPlans7Day || []) {
    const text = buildDocText(
      item.title,
      item.focus ? `Focus: ${item.focus}` : '',
      item.day ? `Day: ${item.day}` : '',
      item.description,
      item.profitLeak ? `Leak: ${item.profitLeak}` : '',
      item.diagnosis,
      item.tasks,
      item.steps,
      item.quickWins,
      item.kpi,
      item.winCondition
    );

    addDoc(docs, text, makeMeta({
      type: 'action',
      actionKind: 'fix_7_day',
      pillar: derivePillar(item),
      industry: deriveIndustry(item),
      sourcePack: deriveSourcePack(item),
      lineType: item.line_type,
      signalTags: item.signal_tags
    }));
  }

  for (const item of raw.actions?.fixPlans30Day || []) {
    const text = buildDocText(
      item.title,
      item.focus ? `Focus: ${item.focus}` : '',
      item.week ? `Week: ${item.week}` : '',
      item.description,
      item.profitLeak ? `Leak: ${item.profitLeak}` : '',
      item.diagnosis,
      item.tasks,
      item.steps,
      item.system30,
      item.build60,
      item.institutionalize90,
      item.kpi
    );

    addDoc(docs, text, makeMeta({
      type: 'action',
      actionKind: 'fix_30_day',
      pillar: derivePillar(item),
      industry: deriveIndustry(item),
      sourcePack: deriveSourcePack(item),
      lineType: item.line_type,
      signalTags: item.signal_tags
    }));
  }

  const vocabulary = raw.vocabulary || {};
  const vocabBuckets = [
    ['hooks', vocabulary.hooks || {}],
    ['leak_tokens', vocabulary.leakTokens || {}],
    ['lexicons', vocabulary.lexicons || {}],
    ['quiz_tokens', vocabulary.quizTokens || {}]
  ];

  for (const [vocabKind, bucket] of vocabBuckets) {
    for (const [bucketKey, payload] of Object.entries(bucket)) {
      const sourcePack = normalizeSourcePackFromVocabularyKey(bucketKey);

      if (payload && typeof payload === 'object' && !Array.isArray(payload)) {
        let emittedAny = false;

        for (const [entryKey, entryValue] of Object.entries(payload)) {
          const pillar = normalizePillar(entryKey);
          const text = buildDocText(
            `Vocabulary: ${vocabKind}`,
            `Pack key: ${bucketKey}`,
            pillar ? `Pillar: ${pillar}` : `Entry: ${entryKey}`,
            stringifyValue(entryValue)
          );

          addDoc(docs, text, makeMeta({
            type: 'vocabulary',
            vocabKind,
            pillar,
            industry: sourcePack,
            sourcePack
          }));

          emittedAny = true;
        }

        if (emittedAny) continue;
      }

      const text = buildDocText(
        `Vocabulary: ${vocabKind}`,
        `Pack key: ${bucketKey}`,
        stringifyValue(payload)
      );

      addDoc(docs, text, makeMeta({
        type: 'vocabulary',
        vocabKind,
        pillar: '',
        industry: sourcePack,
        sourcePack
      }));
    }
  }

  return docs;
};

const normalizeFilterArray = (value, normalize = (v) => v) => {
  if (!Array.isArray(value) || value.length === 0) return [];
  return value
    .map((item) => (typeof item === 'string' ? normalize(item) : ''))
    .filter(Boolean);
};

const hasIntersection = (left = [], right = []) => {
  if (!Array.isArray(left) || !Array.isArray(right) || left.length === 0 || right.length === 0) return false;
  const set = new Set(right);
  return left.some((item) => set.has(item));
};

const matchesFilter = (doc, filters = {}) => {
  const documentTypes = normalizeFilterArray(filters.documentTypes, normalizeIndustry);
  const libraryKinds = normalizeFilterArray(filters.libraryKinds, normalizeIndustry);
  const actionKinds = normalizeFilterArray(filters.actionKinds, normalizeIndustry);
  const questionStages = normalizeFilterArray(filters.questionStages, normalizeIndustry);
  const vocabKinds = normalizeFilterArray(filters.vocabKinds, normalizeIndustry);
  const industries = normalizeFilterArray(filters.industries, normalizeIndustry);
  const sourcePacks = normalizeFilterArray(filters.sourcePacks, normalizeIndustry);
  const lineTypes = normalizeFilterArray(filters.lineTypes, normalizeLineType);
  const signalTags = normalizeFilterArray(filters.signalTags, normalizeIndustry);

  const requirePillar = Boolean(filters.requirePillar);
  const pillar = normalizePillar(filters.pillar || '');

  if (documentTypes.length > 0 && !documentTypes.includes(normalizeIndustry(doc.meta.type))) return false;
  if (libraryKinds.length > 0 && !libraryKinds.includes(normalizeIndustry(doc.meta.libraryKind || ''))) return false;
  if (actionKinds.length > 0 && !actionKinds.includes(normalizeIndustry(doc.meta.actionKind || ''))) return false;
  if (questionStages.length > 0 && !questionStages.includes(normalizeIndustry(doc.meta.questionStage || ''))) return false;
  if (vocabKinds.length > 0 && !vocabKinds.includes(normalizeIndustry(doc.meta.vocabKind || ''))) return false;

  if (industries.length > 0) {
    const docIndustry = normalizeIndustry(doc.meta.industry || '');
    const docSourcePack = normalizeIndustry(doc.meta.sourcePack || '');
    if (!industries.includes(docIndustry) && !industries.includes(docSourcePack)) return false;
  }

  if (sourcePacks.length > 0 && !sourcePacks.includes(normalizeIndustry(doc.meta.sourcePack || ''))) return false;

  if (lineTypes.length > 0 && !hasIntersection(doc.meta.lineType, lineTypes)) return false;
  if (signalTags.length > 0 && !hasIntersection(doc.meta.signalTags, signalTags)) return false;

  if (requirePillar && pillar) {
    const docPillar = normalizePillar(doc.meta.pillar || '');
    if (docPillar && docPillar !== pillar) return false;
  }

  return true;
};

export const filterKnowledgeDocs = (kb, filters = {}, limit = 40) => {
  const out = [];
  for (const doc of kb.docs) {
    if (!matchesFilter(doc, filters)) continue;
    out.push(doc);
    if (out.length >= limit) break;
  }
  return out;
};

const buildIndex = (docs) => {
  const postings = new Map();

  for (let i = 0; i < docs.length; i += 1) {
    const counts = new Map();

    for (const token of tokenize(docs[i].text)) {
      counts.set(token, (counts.get(token) || 0) + 1);
    }

    docs[i].tokenCount = counts.size;
    docs[i].counts = counts;

    for (const [token, tf] of counts.entries()) {
      if (!postings.has(token)) postings.set(token, []);
      postings.get(token).push([i, tf]);
    }
  }

  return postings;
};

let cachedIndex = null;
let cachedDatasetMtime = 0;

export const getKnowledgeBase = () => {
  if (!fs.existsSync(DEFAULT_DATASET_PATH)) {
    throw new Error(`Training dataset not found at ${DEFAULT_DATASET_PATH}`);
  }

  const stat = fs.statSync(DEFAULT_DATASET_PATH);
  if (cachedIndex && cachedDatasetMtime === stat.mtimeMs) {
    return cachedIndex;
  }

  const rawText = fs.readFileSync(DEFAULT_DATASET_PATH, 'utf8');
  const raw = JSON.parse(rawText);
  const docs = buildDocsFromTrainingData(raw);
  const postings = buildIndex(docs);

  cachedDatasetMtime = stat.mtimeMs;
  cachedIndex = {
    datasetPath: DEFAULT_DATASET_PATH,
    datasetUpdatedAt: new Date(stat.mtimeMs).toISOString(),
    size: docs.length,
    docs,
    postings
  };

  return cachedIndex;
};

const scoreDoc = (doc, { industry, subIndustry, pillar }) => {
  let boost = 0;

  const docIndustry = normalizeIndustry(doc.meta.industry || '');
  const docSourcePack = normalizeIndustry(doc.meta.sourcePack || '');

  if (industry && (docIndustry === industry || docSourcePack === industry)) boost += 1.4;
  if (subIndustry && doc.textLower.includes(subIndustry)) boost += 1.1;
  if (pillar && normalizePillar(doc.meta.pillar || '') === pillar) boost += 1.8;

  if (doc.meta.type === 'library') boost += 0.25;
  if (doc.meta.type === 'vocabulary') boost += 0.2;

  return boost;
};

export const searchKnowledgeBase = (
  kb,
  {
    query = '',
    industry = '',
    subIndustry = '',
    pillar = '',
    limit = 10,
    ...filters
  }
) => {
  const industryNorm = normalizeIndustry(industry);
  const subIndustryNorm = normalizeIndustry(subIndustry);
  const pillarNorm = normalizePillar(pillar);

  const terms = tokenize([
    query,
    industryNorm,
    subIndustryNorm,
    pillarNorm,
    ...(Array.isArray(filters.sourcePacks) ? filters.sourcePacks : []),
    ...(Array.isArray(filters.industries) ? filters.industries : [])
  ].join(' ')).slice(0, 72);

  const scores = new Map();
  const totalDocs = Math.max(kb.size, 1);

  for (const term of terms) {
    const hits = kb.postings.get(term);
    if (!hits) continue;

    const df = hits.length;
    const idf = Math.log((totalDocs + 1) / (df + 1)) + 1;

    for (const [docIndex, tf] of hits) {
      const tfWeight = 1 + Math.log(1 + tf);
      scores.set(docIndex, (scores.get(docIndex) || 0) + (idf * tfWeight));
    }
  }

  // Metadata fallback if lexical hits are sparse.
  if (scores.size === 0) {
    for (let i = 0; i < kb.docs.length; i += 1) {
      const doc = kb.docs[i];
      const docIndustry = normalizeIndustry(doc.meta.industry || '');
      const docSourcePack = normalizeIndustry(doc.meta.sourcePack || '');
      const docPillar = normalizePillar(doc.meta.pillar || '');

      const metaHit =
        (industryNorm && (docIndustry === industryNorm || docSourcePack === industryNorm)) ||
        (pillarNorm && docPillar === pillarNorm);

      if (metaHit) scores.set(i, 0.2);
    }
  }

  const ranked = [];
  for (const [docIndex, baseScore] of scores.entries()) {
    const doc = kb.docs[docIndex];

    if (!matchesFilter(doc, {
      ...filters,
      pillar: pillarNorm,
      requirePillar: filters.requirePillar
    })) {
      continue;
    }

    const metaBoost = scoreDoc(doc, {
      industry: industryNorm,
      subIndustry: subIndustryNorm,
      pillar: pillarNorm
    });

    ranked.push({
      ...doc,
      relevance: baseScore + metaBoost
    });
  }

  ranked.sort((a, b) => b.relevance - a.relevance);

  const deduped = [];
  const seen = new Set();

  for (const item of ranked) {
    const signature = [
      item.meta.type,
      item.meta.libraryKind,
      item.meta.actionKind,
      item.meta.questionStage,
      item.meta.vocabKind,
      item.meta.pillar,
      item.meta.sourcePack,
      item.text.slice(0, 120)
    ].join('|');

    if (seen.has(signature)) continue;
    seen.add(signature);
    deduped.push(item);

    if (deduped.length >= limit) break;
  }

  return deduped;
};

export const formatKnowledgeContext = (matches, maxCharsPerItem = 420) =>
  (matches || [])
    .map((match, index) => {
      const clipped = match.text.length > maxCharsPerItem
        ? `${match.text.slice(0, maxCharsPerItem).trim()}...`
        : match.text;

      const kind =
        match.meta.libraryKind ||
        match.meta.actionKind ||
        match.meta.questionStage ||
        match.meta.vocabKind ||
        'generic';

      const meta = [
        `type=${match.meta.type}`,
        `kind=${kind}`,
        `pack=${match.meta.sourcePack || 'unknown'}`,
        `pillar=${match.meta.pillar || 'general'}`
      ].join('; ');

      return `[E${index + 1}] (${meta}) ${clipped}`;
    })
    .join('\n');
