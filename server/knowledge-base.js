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
  money: 'Money',
  fuel: 'Money',
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
  'most', 'than', 'then', 'into', 'onto', 'also', 'only', 'just', 'like', 'such',
  'option', 'question', 'answer', 'score', 'business', 'industry'
]);

const MIN_TOKEN_LENGTH = 3;

const normalizeIndustry = (value) => {
  if (typeof value !== 'string') return '';
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
};

export const normalizePillar = (value) => {
  if (typeof value !== 'string') return '';
  const raw = value.trim().toLowerCase();
  return PILLAR_ALIASES[raw] || '';
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
    .filter((part) => typeof part === 'string' && part.trim())
    .map((part) => part.trim())
    .join('\n');

const toList = (value) => {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

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
    const text = buildDocText(item.text, item.hook_text, item.cost_text, item.cliffhanger_text, item.kpi_text);
    addDoc(docs, text, {
      type: 'library',
      pillar: normalizePillar(item.pillar),
      industry: normalizeIndustry(item.sourcePack || item.industry || ''),
      sourcePack: String(item.sourcePack || item.industry || 'unknown'),
      lineType: toList(item.line_type)
    });
  }

  for (const item of raw.questions || []) {
    const text = buildDocText(
      `Pillar: ${item.pillar || 'Unknown'}`,
      `Option A: ${item.textA || ''}`,
      `Option B: ${item.textB || ''}`
    );
    addDoc(docs, text, {
      type: 'question',
      pillar: normalizePillar(item.pillar),
      industry: normalizeIndustry(item.sourcePack || item.industry || ''),
      sourcePack: String(item.sourcePack || item.industry || 'unknown'),
      lineType: toList(item.line_type)
    });
  }

  const actionBuckets = [
    ...(raw.actions?.snippets || []),
    ...(raw.actions?.fixPlans7Day || []),
    ...(raw.actions?.fixPlans30Day || [])
  ];

  for (const item of actionBuckets) {
    const text = buildDocText(
      item.title,
      item.description,
      item.desc,
      item.objective,
      item.outcome,
      item.text,
      item.steps
    );
    addDoc(docs, text, {
      type: 'action',
      pillar: normalizePillar(item.pillar),
      industry: normalizeIndustry(item.sourcePack || item.industry || ''),
      sourcePack: String(item.sourcePack || item.industry || 'unknown'),
      lineType: toList(item.line_type)
    });
  }

  return docs;
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

  if (industry && doc.meta.industry === industry) boost += 1.6;
  if (subIndustry && doc.textLower.includes(subIndustry)) boost += 1.2;
  if (pillar && doc.meta.pillar === pillar) boost += 1.8;
  if (doc.meta.type === 'library') boost += 0.25;

  return boost;
};

export const searchKnowledgeBase = (
  kb,
  { query = '', industry = '', subIndustry = '', pillar = '', limit = 10 }
) => {
  const industryNorm = normalizeIndustry(industry);
  const subIndustryNorm = typeof subIndustry === 'string' ? subIndustry.toLowerCase() : '';
  const pillarNorm = normalizePillar(pillar);
  const terms = tokenize([query, industryNorm, subIndustryNorm, pillarNorm].join(' ')).slice(0, 48);
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

  // If lexical hits are too sparse, fall back to metadata-focused candidates.
  if (scores.size === 0) {
    for (let i = 0; i < kb.docs.length; i += 1) {
      const doc = kb.docs[i];
      if ((industryNorm && doc.meta.industry === industryNorm) || (pillarNorm && doc.meta.pillar === pillarNorm)) {
        scores.set(i, 0.25);
      }
    }
  }

  const ranked = [];
  for (const [docIndex, baseScore] of scores.entries()) {
    const doc = kb.docs[docIndex];
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

  const dedup = [];
  const seen = new Set();
  for (const item of ranked) {
    const signature = `${item.meta.type}|${item.meta.pillar}|${item.text.slice(0, 140)}`;
    if (seen.has(signature)) continue;
    seen.add(signature);
    dedup.push(item);
    if (dedup.length >= limit) break;
  }

  return dedup;
};

export const formatKnowledgeContext = (matches, maxCharsPerItem = 420) =>
  matches
    .map((match, index) => {
      const clipped = match.text.length > maxCharsPerItem
        ? `${match.text.slice(0, maxCharsPerItem).trim()}...`
        : match.text;
      const meta = `type=${match.meta.type}; industry=${match.meta.sourcePack || 'unknown'}; pillar=${match.meta.pillar || 'general'}`;
      return `[E${index + 1}] (${meta}) ${clipped}`;
    })
    .join('\n');

