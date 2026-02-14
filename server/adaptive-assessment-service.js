const ADAPTIVE_ASSESSMENT_MODEL =
  process.env.OPENAI_ASSESSMENT_MODEL ||
  process.env.OPENAI_DEEP_SCAN_MODEL ||
  process.env.OPENAI_REPORT_MODEL ||
  process.env.OPENAI_FINE_TUNED_MODEL ||
  'gpt-4o';

const ADAPTIVE_QUESTIONS_MODEL =
  process.env.OPENAI_ASSESSMENT_QUESTIONS_MODEL ||
  ADAPTIVE_ASSESSMENT_MODEL;

const PILLARS = [
  { id: 'P1', name: 'Quality & Customer Trust' },
  { id: 'P2', name: 'Engineering / Process Design & Change Control' },
  { id: 'P3', name: 'Sales / Delivery / Customer Experience' },
  { id: 'P4', name: 'Finance / Pricing / Margin / Cashflow' },
  { id: 'P5', name: 'Operations / Productivity / Flow' },
  { id: 'P6', name: 'Supply Chain / Inventory / Vendor Control' },
  { id: 'P7', name: 'People / Culture / Safety / Compliance / Continuous Improvement' }
];

const PILLAR_IDS = PILLARS.map((pillar) => pillar.id);
const LEGACY_PILLAR_BY_ADAPTIVE_ID = {
  P1: 'Risk',
  P2: 'Innovation',
  P3: 'Market',
  P4: 'Money',
  P5: 'Operations',
  P6: 'Leadership',
  P7: 'People'
};
const FALLBACK_DIMS = [
  'visibility',
  'discipline',
  'speed',
  'control',
  'prevention',
  'leverage',
  'unit-economics',
  'capacity',
  'risk',
  'alignment'
];

const ROLE_BASE_WEIGHTS = {
  executive: { P1: 3, P2: 3, P3: 3, P4: 3, P5: 3, P6: 3, P7: 3 },
  finance: { P1: 2, P2: 2, P3: 3, P4: 5, P5: 3, P6: 4, P7: 2 },
  hr: { P1: 3, P2: 3, P3: 2, P4: 2, P5: 4, P6: 2, P7: 5 },
  operations: { P1: 4, P2: 3, P3: 2, P4: 2, P5: 5, P6: 4, P7: 3 },
  quality: { P1: 5, P2: 4, P3: 2, P4: 2, P5: 4, P6: 3, P7: 3 },
  supply_chain: { P1: 3, P2: 2, P3: 2, P4: 4, P5: 3, P6: 5, P7: 2 },
  sales: { P1: 3, P2: 2, P3: 5, P4: 4, P5: 2, P6: 2, P7: 2 },
  engineering: { P1: 4, P2: 5, P3: 2, P4: 2, P5: 3, P6: 3, P7: 2 },
  pmo: { P1: 3, P2: 3, P3: 4, P4: 3, P5: 4, P6: 3, P7: 3 },
  it_data: { P1: 2, P2: 2, P3: 2, P4: 3, P5: 4, P6: 3, P7: 3 }
};

const ROLE_FAMILY_RULES = [
  {
    id: 'executive',
    label: 'Executive/GM/Owner',
    titleKeywords: [
      'founder', 'co founder', 'owner', 'proprietor', 'managing director', 'md', 'ceo', 'chief executive',
      'president', 'general manager', 'gm', 'country manager', 'regional gm', 'business unit head', 'bu manager',
      'managing partner', 'chief of staff', 'head of strategy', 'strategy director', 'head of transformation'
    ],
    departmentKeywords: ['executive', 'management', 'leadership', 'board', 'owner']
  },
  {
    id: 'finance',
    label: 'Finance/Accounting',
    titleKeywords: [
      'cfo', 'chief financial', 'finance director', 'vp finance', 'controller', 'accountant',
      'ap manager', 'ar manager', 'billing', 'payroll', 'tax manager', 'fp a', 'fp and a',
      'financial analyst', 'cost accountant', 'treasurer', 'treasury', 'credit manager', 'internal auditor'
    ],
    departmentKeywords: ['finance', 'accounting', 'treasury', 'fp a', 'audit', 'credit']
  },
  {
    id: 'hr',
    label: 'HR/People/Admin',
    titleKeywords: [
      'chro', 'human resources', 'hr director', 'hr manager', 'people ops', 'head of people',
      'talent acquisition', 'recruiter', 'l and d', 'training manager', 'organizational development',
      'culture manager', 'engagement lead', 'compensation', 'benefits', 'hris', 'personnel', 'office manager'
    ],
    departmentKeywords: ['hr', 'people', 'talent', 'learning', 'admin', 'administration']
  },
  {
    id: 'operations',
    label: 'Operations/Production/Plant',
    titleKeywords: [
      'coo', 'chief operating', 'operations director', 'head of operations', 'plant manager', 'factory manager',
      'production manager', 'production supervisor', 'shift lead', 'line leader', 'workshop manager', 'site manager',
      'service delivery manager', 'field operations manager', 'continuous improvement', 'lean manager'
    ],
    departmentKeywords: ['operations', 'production', 'manufacturing', 'plant', 'service delivery']
  },
  {
    id: 'quality',
    label: 'Quality/Compliance/EHS',
    titleKeywords: [
      'quality director', 'head of quality', 'quality manager', 'qa qc', 'quality assurance', 'quality control',
      'qc supervisor', 'quality engineer', 'regulatory affairs', 'compliance manager', 'qms manager',
      'validation engineer', 'gmp manager', 'ehs', 'hse', 'safety officer', 'environmental manager'
    ],
    departmentKeywords: ['quality', 'qa', 'qc', 'compliance', 'regulatory', 'ehs', 'hse', 'safety']
  },
  {
    id: 'supply_chain',
    label: 'Procurement/Supply Chain/Logistics',
    titleKeywords: [
      'cpo', 'chief procurement', 'supply chain director', 'head of supply chain', 'procurement director',
      'purchasing manager', 'buyer', 'sourcing specialist', 'category manager', 'vendor manager',
      'supply planner', 'demand planner', 'materials planner', 'logistics manager', 'warehouse manager',
      'distribution manager', 'transport manager', 'dispatch supervisor', 'inventory controller', 'import export'
    ],
    departmentKeywords: ['procurement', 'supply chain', 'logistics', 'warehouse', 'inventory', 'planning']
  },
  {
    id: 'sales',
    label: 'Sales/Commercial/Customer',
    titleKeywords: [
      'cro', 'chief revenue', 'sales director', 'vp sales', 'commercial director', 'head of sales',
      'head of growth', 'business development', 'account manager', 'key account', 'sales manager',
      'territory manager', 'channel manager', 'partnerships manager', 'customer success', 'customer service',
      'client relationship', 'marketing manager', 'digital marketing', 'demand generation'
    ],
    departmentKeywords: ['sales', 'commercial', 'customer success', 'customer service', 'marketing', 'growth']
  },
  {
    id: 'engineering',
    label: 'Engineering/Product/Technical',
    titleKeywords: [
      'cto', 'chief technology', 'engineering director', 'head of engineering', 'r and d', 'head of r and d',
      'product director', 'head of product', 'engineering manager', 'product manager', 'project engineer',
      'manufacturing engineer', 'process engineer', 'design engineer', 'test engineer', 'automation engineer'
    ],
    departmentKeywords: ['engineering', 'product', 'technical', 'r and d', 'process engineering']
  },
  {
    id: 'pmo',
    label: 'Project/Program/PMO',
    titleKeywords: [
      'program manager', 'project manager', 'pmo manager', 'delivery manager', 'implementation manager', 'scrum master'
    ],
    departmentKeywords: ['pmo', 'project', 'program', 'delivery']
  },
  {
    id: 'it_data',
    label: 'IT/Data/Systems',
    titleKeywords: [
      'cio', 'it director', 'head of it', 'it manager', 'systems administrator', 'network engineer',
      'cybersecurity manager', 'security analyst', 'data analyst', 'bi analyst', 'data engineer',
      'erp administrator', 'systems analyst', 'crm manager'
    ],
    departmentKeywords: ['it', 'data', 'systems', 'erp', 'security', 'technology']
  }
];

const PRIORITY_BOOSTS = {
  'increase capital cashflow': { P4: 3, P6: 2, P3: 2, P5: 1 },
  'increase sales revenue': { P3: 3, P4: 2, P1: 1 },
  'increase profit margin': { P4: 3, P5: 2, P6: 2, P1: 1 },
  'increase productivity throughput': { P5: 3, P2: 2, P6: 2 },
  'improve team efficiency': { P7: 3, P5: 2, P2: 1 },
  'reduce defects improve quality': { P1: 3, P2: 2, P5: 2 },
  'improve compliance': { P1: 3, P2: 2, P7: 2, P6: 2 },
  'reduce costs opex': { P5: 3, P6: 2, P4: 2, P2: 1 },
  'reduce waste scrap rework': { P1: 3, P2: 2, P5: 2, P6: 1 },
  'improve otif shorten lead time': { P5: 3, P6: 2, P3: 2, P2: 1 },
  'improve retention reduce churn': { P3: 3, P1: 2, P5: 1 },
  'improve customer satisfaction reduce complaints': { P3: 3, P1: 2, P2: 1, P7: 1 },
  'launch new product npi': { P2: 3, P1: 2, P5: 2, P6: 2, P3: 1 },
  'scale operations expand capacity': { P5: 3, P6: 2, P7: 2, P4: 2, P2: 1 },
  'improve working capital reduce inventory tie up': { P6: 3, P4: 2, P5: 2, P3: 1 },
  'reduce stockouts improve availability': { P6: 3, P5: 2, P3: 2, P4: 1 },
  'improve forecasting planning accuracy': { P3: 3, P6: 2, P5: 2, P4: 1 },
  'improve pricing power reduce discounting': { P4: 3, P3: 2, P1: 2, P2: 1 },
  'increase conversion close more deals': { P3: 3, P4: 2, P1: 1 },
  'improve market share growth acceleration': { P3: 3, P4: 2, P5: 2, P1: 1 },
  'improve reliability reduce field failures': { P1: 3, P2: 2, P6: 2, P5: 1 },
  'improve safety reduce incidents': { P7: 3, P5: 2, P2: 1 },
  'reduce employee turnover retain staff': { P7: 3, P5: 2, P4: 1 },
  'improve hiring speed staffing stability': { P7: 3, P5: 2 },
  'improve training skill coverage': { P7: 3, P5: 2, P2: 1 },
  'digitize ops erp visibility': { P5: 3, P6: 2, P4: 2, P7: 2, P2: 1 },
  'reduce fraud shrinkage theft': { P4: 3, P6: 2, P7: 2, P5: 1 },
  'audit readiness always ready docs': { P1: 3, P2: 2, P7: 2, P6: 2 },
  'improve supplier performance': { P6: 3, P1: 2, P2: 1, P5: 1 },
  'improve equipment uptime reduce breakdowns': { P5: 3, P2: 2, P7: 2 },
  'reduce energy costs': { P5: 3, P4: 2, P2: 1 },
  'sustainability esg': { P7: 3, P5: 2, P6: 2, P1: 1 },
  'brand trust reputation': { P1: 3, P3: 2, P7: 2 },
  'enter new markets export readiness': { P3: 3, P1: 2, P2: 2, P6: 2, P4: 1 },
  'reduce returns refunds': { P1: 3, P3: 2, P2: 2, P5: 1 }
};

const PRIORITY_ALIASES = {
  'increase cashflow': 'increase capital cashflow',
  'improve cashflow': 'increase capital cashflow',
  'increase revenue': 'increase sales revenue',
  'increase sales': 'increase sales revenue',
  'profit margin': 'increase profit margin',
  'improve margin': 'increase profit margin',
  'increase throughput': 'increase productivity throughput',
  'increase productivity': 'increase productivity throughput',
  'reduce defects': 'reduce defects improve quality',
  'improve quality': 'reduce defects improve quality',
  'reduce costs': 'reduce costs opex',
  'cut opex': 'reduce costs opex',
  'reduce scrap': 'reduce waste scrap rework',
  'reduce rework': 'reduce waste scrap rework',
  'improve otif': 'improve otif shorten lead time',
  'shorten lead time': 'improve otif shorten lead time',
  'improve customer satisfaction': 'improve customer satisfaction reduce complaints',
  'reduce complaints': 'improve customer satisfaction reduce complaints',
  'launch new product': 'launch new product npi',
  'npi': 'launch new product npi',
  'expand capacity': 'scale operations expand capacity',
  'scale operations': 'scale operations expand capacity',
  'working capital': 'improve working capital reduce inventory tie up',
  'reduce inventory': 'improve working capital reduce inventory tie up',
  'reduce stockouts': 'reduce stockouts improve availability',
  'improve availability': 'reduce stockouts improve availability',
  'improve forecasting': 'improve forecasting planning accuracy',
  'planning accuracy': 'improve forecasting planning accuracy',
  'pricing power': 'improve pricing power reduce discounting',
  'reduce discounting': 'improve pricing power reduce discounting',
  'increase conversion': 'increase conversion close more deals',
  'close more deals': 'increase conversion close more deals',
  'market share': 'improve market share growth acceleration',
  'growth acceleration': 'improve market share growth acceleration',
  'reduce field failures': 'improve reliability reduce field failures',
  'improve reliability': 'improve reliability reduce field failures',
  'improve safety': 'improve safety reduce incidents',
  'reduce incidents': 'improve safety reduce incidents',
  'reduce turnover': 'reduce employee turnover retain staff',
  'retain staff': 'reduce employee turnover retain staff',
  'improve hiring speed': 'improve hiring speed staffing stability',
  'staffing stability': 'improve hiring speed staffing stability',
  'improve training': 'improve training skill coverage',
  'skill coverage': 'improve training skill coverage',
  'digitize operations': 'digitize ops erp visibility',
  'erp': 'digitize ops erp visibility',
  'reduce fraud': 'reduce fraud shrinkage theft',
  'shrinkage': 'reduce fraud shrinkage theft',
  'audit readiness': 'audit readiness always ready docs',
  'always ready docs': 'audit readiness always ready docs',
  'supplier performance': 'improve supplier performance',
  'reduce breakdowns': 'improve equipment uptime reduce breakdowns',
  'equipment uptime': 'improve equipment uptime reduce breakdowns',
  'energy costs': 'reduce energy costs',
  'sustainability': 'sustainability esg',
  'esg': 'sustainability esg',
  'brand trust': 'brand trust reputation',
  'reputation': 'brand trust reputation',
  'export readiness': 'enter new markets export readiness',
  'new markets': 'enter new markets export readiness',
  'reduce returns': 'reduce returns refunds',
  'refunds': 'reduce returns refunds'
};

const normalizeKey = (value) =>
  String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const toString = (value, fallback = '') => (typeof value === 'string' && value.trim() ? value.trim() : fallback);

const clampText = (value, maxLen = 5000) => {
  const text = toString(value, '');
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen)}...`;
};

const firstPresent = (record, keys, fallback = '') => {
  for (const key of keys) {
    const value = record?.[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
    if (typeof value === 'number' && Number.isFinite(value)) return String(value);
    if (Array.isArray(value) && value.length > 0) return value.join(', ');
  }
  return fallback;
};

const parseList = (value, maxItems = 30) => {
  if (Array.isArray(value)) {
    return value
      .map((item) => toString(item))
      .filter(Boolean)
      .slice(0, maxItems);
  }

  const text = toString(value, '');
  if (!text) return [];

  return text
    .split(/[,\n;|]+/g)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, maxItems);
};

const roleMatchScore = (keywords, haystack) => {
  let score = 0;
  for (const keyword of keywords || []) {
    const normalizedKeyword = normalizeKey(keyword);
    if (!normalizedKeyword) continue;
    if (haystack === normalizedKeyword) score += 4;
    else if (haystack.includes(` ${normalizedKeyword} `)) score += 3;
    else if (haystack.startsWith(`${normalizedKeyword} `) || haystack.endsWith(` ${normalizedKeyword}`)) score += 2;
    else if (haystack.includes(normalizedKeyword)) score += 1;
  }
  return score;
};

const inferRoleFamily = (title, department) => {
  const titleNorm = ` ${normalizeKey(title)} `;
  const deptNorm = ` ${normalizeKey(department)} `;

  let best = null;
  for (const family of ROLE_FAMILY_RULES) {
    const titleScore = roleMatchScore(family.titleKeywords, titleNorm);
    const deptScore = roleMatchScore(family.departmentKeywords, deptNorm);
    const total = titleScore * 2 + deptScore;

    if (!best || total > best.score) {
      best = {
        id: family.id,
        label: family.label,
        score: total
      };
    }
  }

  if (!best || best.score <= 0) {
    return { id: 'executive', label: 'Executive/GM/Owner', confidence: 0.35 };
  }

  const confidence = best.score >= 8 ? 0.95 : best.score >= 5 ? 0.8 : 0.62;
  return { id: best.id, label: best.label, confidence };
};

const resolvePriorityKey = (priority) => {
  const normalized = normalizeKey(priority);
  if (!normalized) return '';

  if (PRIORITY_BOOSTS[normalized]) return normalized;
  if (PRIORITY_ALIASES[normalized]) return PRIORITY_ALIASES[normalized];

  for (const [alias, canonical] of Object.entries(PRIORITY_ALIASES)) {
    if (normalized.includes(alias)) return canonical;
  }

  for (const key of Object.keys(PRIORITY_BOOSTS)) {
    if (normalized.includes(key) || key.includes(normalized)) return key;
  }

  const inputTokens = new Set(normalized.split(' ').filter(Boolean));
  let best = '';
  let bestScore = 0;
  for (const key of Object.keys(PRIORITY_BOOSTS)) {
    const keyTokens = key.split(' ').filter(Boolean);
    let overlap = 0;
    for (const token of keyTokens) {
      if (inputTokens.has(token)) overlap += 1;
    }
    const ratio = overlap / Math.max(keyTokens.length, 1);
    if (overlap >= 2 && ratio > bestScore) {
      best = key;
      bestScore = ratio;
    }
  }

  return best;
};

const scaleBoostValue = (value, level) => {
  const raw = Number(value) || 0;
  if (level === 'high') return raw;
  if (level === 'medium') {
    if (raw >= 3) return 2;
    if (raw >= 2) return 1;
    return raw > 0 ? 1 : 0;
  }
  if (raw >= 3) return 1;
  return raw > 0 ? 1 : 0;
};

const applyBoosts = (weights, boosts, level) => {
  const out = { ...weights };
  for (const pillarId of PILLAR_IDS) {
    const delta = scaleBoostValue(boosts?.[pillarId], level);
    if (!delta) continue;
    out[pillarId] = (out[pillarId] || 0) + delta;
  }
  return out;
};

const rankPillars = (weights) =>
  [...PILLARS].sort((left, right) => {
    const leftWeight = Number(weights?.[left.id] || 0);
    const rightWeight = Number(weights?.[right.id] || 0);
    if (leftWeight !== rightWeight) return rightWeight - leftWeight;
    return left.id.localeCompare(right.id);
  });

const buildDepthPlan = (rankedPillars, forceDs20All = false) => {
  const depthByPillar = {};

  if (forceDs20All) {
    for (const pillar of PILLARS) {
      depthByPillar[pillar.id] = { label: 'QS4+DS20', deepCount: 20 };
    }
    return depthByPillar;
  }

  rankedPillars.forEach((pillar, index) => {
    if (index < 3) depthByPillar[pillar.id] = { label: 'QS4+DS20', deepCount: 20 };
    else if (index < 5) depthByPillar[pillar.id] = { label: 'QS4+DS10', deepCount: 10 };
    else depthByPillar[pillar.id] = { label: 'QS4', deepCount: 0 };
  });

  return depthByPillar;
};

const formatWeightsTable = (weights) =>
  PILLARS
    .map((pillar) => `${pillar.id} ${pillar.name}: ${Number(weights?.[pillar.id] || 0)}`)
    .join('\n');

const formatDepthPlan = (depthPlan) =>
  PILLARS
    .map((pillar) => `${pillar.id} ${pillar.name}: ${depthPlan?.[pillar.id]?.label || 'QS4'}`)
    .join('\n');

const formatVocabulary = (vocabularyList) => {
  if (!Array.isArray(vocabularyList) || vocabularyList.length === 0) return 'None provided. Infer from sub-industry context.';
  return vocabularyList.map((token) => `- ${token}`).join('\n');
};

const safeJsonParse = (text) => {
  if (typeof text !== 'string' || !text.trim()) return null;
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

const extractResponseJson = (response) => {
  if (!response) return null;

  if (typeof response.output_text === 'string') {
    const parsed = safeJsonParse(response.output_text);
    if (parsed) return parsed;
  }

  if (!Array.isArray(response.output)) return null;
  for (const item of response.output) {
    if (!item || !Array.isArray(item.content)) continue;
    for (const part of item.content) {
      if (part?.type !== 'output_text' || typeof part.text !== 'string') continue;
      const parsed = safeJsonParse(part.text);
      if (parsed) return parsed;
    }
  }

  return null;
};

const extractResponseText = (response) => {
  if (!response) return '';
  if (typeof response.output_text === 'string' && response.output_text.trim()) {
    return response.output_text.trim();
  }

  if (Array.isArray(response.output)) {
    const chunks = [];
    for (const item of response.output) {
      if (!item || !Array.isArray(item.content)) continue;
      for (const part of item.content) {
        if (part?.type === 'output_text' && typeof part.text === 'string') {
          chunks.push(part.text);
        }
      }
    }
    if (chunks.length > 0) return chunks.join('\n').trim();
  }

  return '';
};

const fallbackAssessmentText = (normalizedInput, plan) => {
  const top3 = plan.rankedPillars.slice(0, 3).map((pillar) => pillar.id).join(', ');
  const header = [
    'A) Header',
    '',
    `${normalizedInput.industry} -> ${normalizedInput.subIndustry} -> ${normalizedInput.responderTitle} -> Priority: ${normalizedInput.primaryPriority}`,
    `Top weighted pillars: ${top3}.`,
    ''
  ];

  const blocks = ['B) Pillar Blocks (fallback placeholder)'];
  for (const pillar of PILLARS) {
    const deepCount = plan.depthPlan?.[pillar.id]?.deepCount || 0;
    blocks.push(`\n### ${pillar.id}) ${pillar.name}`);
    blocks.push('Why it matters here');
    blocks.push(`Use ${normalizedInput.subIndustry} operational signals tied to ${normalizedInput.primaryPriority}.`);
    blocks.push('QS4');
    for (let i = 1; i <= 4; i += 1) {
      blocks.push(`${i}. A) Process is governed by explicit threshold and owner. B) Process is governed by supervisor judgement and periodic review. [#P=${pillar.id} | Dim=control | RoleRel=M | PriorityRel=M]`);
    }
    if (deepCount > 0) {
      blocks.push(`Deep Scan (${deepCount})`);
      for (let i = 1; i <= deepCount; i += 1) {
        blocks.push(`${i}. A) Exceptions trigger immediate logged containment with owner handoff. B) Exceptions are buffered and resolved in planned review windows. [#P=${pillar.id} | Dim=discipline | RoleRel=M | PriorityRel=M]`);
      }
    } else {
      blocks.push('Deep Scan');
      blocks.push('None (depth reduced by role-priority weighting for this responder).');
    }
  }

  const footer = [
    '',
    'C) Results Summary',
    'Strength Signals: {{AUTO_STRENGTHS}}',
    'Likely Improvement Zones: {{AUTO_IMPROVEMENTS}}',
    'Likely Profit Leaks: {{AUTO_LEAKS}}',
    '',
    'D) Action Plans',
    `7-Day Stabilize Profit aligned to ${normalizedInput.primaryPriority}:`,
    'Day 1-7: {{...}}',
    `30-Day Build Control Plan aligned to ${normalizedInput.primaryPriority}:`,
    'Week 1-4: {{...}}'
  ];

  return [...header, ...blocks, ...footer].join('\n');
};

const buildPrompts = (normalizedInput, plan) => {
  const top3Names = plan.rankedPillars.slice(0, 3).map((pillar) => `${pillar.id} ${pillar.name}`).join(', ');
  const roleContext = `${plan.roleFamily.label} (confidence ${Math.round(plan.roleFamily.confidence * 100)}%)`;

  const instructions = `
You are the Adaptive Profit Assessment Engine.
Generate the diagnostic exactly in the requested format and nowhere else.

NON-NEGOTIABLE:
1) No generic questions; all questions must reflect the exact sub-industry and vocabulary list.
2) Role relevance filter: ask only what this responder can reasonably know/control.
3) Priority alignment: at least 60% of all Deep Scan items must directly drive the Primary Priority.
4) A/B pairs must be balanced and both options plausible/professional.
5) Focus on operational truth: cadence, owner, trigger, evidence, approval, exception.
6) Use global audience language.
7) Always keep all 7 pillars in order P1->P7.
8) Every A/B pair must end with metadata tag:
[#P=Px | Dim={visibility/discipline/speed/control/prevention/leverage/unit-economics/capacity/risk/alignment} | RoleRel=H/M/L | PriorityRel=H/M/L]
9) Follow depth exactly: QS4 for every pillar, DS20 for top3, DS10 for next2, no DS for last2 unless DS20 override is true.
10) Do not include any commentary before or after sections A/B/C/D.
`.trim();

  const userInput = `
INPUTS (use all):
Industry=${normalizedInput.industry}
Sub-Industry=${normalizedInput.subIndustry}
Responder Title=${normalizedInput.responderTitle}
Responder Department=${normalizedInput.department}
Primary Priority=${normalizedInput.primaryPriority}
Secondary Priorities=${normalizedInput.secondaryPriorities.join(', ') || 'None'}
Business Variant=${normalizedInput.variant}
Compliance Mode=${normalizedInput.complianceMode}
Company Size=${normalizedInput.size}
Region/Market Context=${normalizedInput.region}
Sub-Industry Vocabulary Injector:
${formatVocabulary(normalizedInput.vocabularyList)}

Step A (resolved role family):
Role family inferred: ${roleContext}
Base pillar weights:
${formatWeightsTable(plan.baseWeights)}

Step B (priority reweight):
Primary priority matched key: ${plan.primaryPriorityKey || 'No exact key; inferred from meaning'}
Secondary matched keys: ${plan.secondaryPriorityKeys.join(', ') || 'None'}
Final pillar weights:
${formatWeightsTable(plan.finalWeights)}

Step C (depth plan):
${formatDepthPlan(plan.depthPlan)}
Top 3 weighted pillars: ${top3Names}
Force DS20 for all pillars: ${normalizedInput.forceDs20All ? 'true' : 'false'}

OUTPUT FORMAT (strict):
A) Header (2 short paragraphs):
- State: "${normalizedInput.industry} -> ${normalizedInput.subIndustry} -> ${normalizedInput.responderTitle} -> Priority: ${normalizedInput.primaryPriority}"
- Name top 3 weighted pillars and 1 sentence each for why they matter for this sub-industry + role + priority.

B) Pillar Blocks (always P1-P7 in order):
For each pillar:
1) Why it matters here (2-3 sentences using sub-industry language and/or vocabulary list)
2) QS4: exactly 4 A/B forced-choice pairs
3) Deep Scan: DS20 or DS10 or none based on depth plan
4) Add metadata tag at end of EACH A/B pair

C) Results Summary:
Strength Signals: {{AUTO_STRENGTHS}}
Likely Improvement Zones: {{AUTO_IMPROVEMENTS}}
Likely Profit Leaks: {{AUTO_LEAKS}}

D) Action Plans:
7-Day Stabilize Profit aligned to ${normalizedInput.primaryPriority}:
Day 1-7: actions with owner role, cadence, evidence/metric, expected effect.
30-Day Build Control Plan aligned to ${normalizedInput.primaryPriority}:
Week 1-4: actions with owner role, cadence, evidence/metric, expected effect.

Generate full assessment now.
`.trim();

  return { instructions, userInput };
};

const questionPairSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'textA', 'textB', 'metadataTag'],
  properties: {
    id: { type: 'string' },
    textA: { type: 'string' },
    textB: { type: 'string' },
    metadataTag: { type: 'string' }
  }
};

const adaptiveQuestionBankSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['pillars'],
  properties: {
    pillars: {
      type: 'array',
      minItems: 7,
      maxItems: 7,
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['id', 'name', 'whyItMatters', 'qs4', 'deepScan'],
        properties: {
          id: { type: 'string', enum: PILLAR_IDS },
          name: { type: 'string' },
          whyItMatters: { type: 'string' },
          qs4: {
            type: 'array',
            minItems: 4,
            maxItems: 4,
            items: questionPairSchema
          },
          deepScan: {
            type: 'array',
            items: questionPairSchema
          }
        }
      }
    }
  }
};

const buildQuestionBankPrompts = (normalizedInput, plan) => {
  const top3 = plan.rankedPillars.slice(0, 3).map((pillar) => `${pillar.id} ${pillar.name}`).join(', ');

  const instructions = `
You generate adaptive A/B diagnostic question banks.
Return JSON only that matches the schema.

Rules:
1) No generic wording. Use the exact sub-industry and vocabulary.
2) Role relevance: only ask what this responder can know/control.
3) Priority relevance: at least 60% of Deep Scan questions directly support the primary priority.
4) A/B must be balanced and both plausible; avoid obvious right/wrong language.
5) Questions must reveal operating truth: owner, cadence, trigger, record, approval, exception.
6) Keep global language.
7) Keep pillars in fixed order P1..P7.
8) Output exactly 4 quick-scan A/B pairs per pillar.
9) Deep-scan counts must follow provided plan for each pillar.
10) Metadata tag format is mandatory:
[#P=Px | Dim={visibility/discipline/speed/control/prevention/leverage/unit-economics/capacity/risk/alignment} | RoleRel=H/M/L | PriorityRel=H/M/L]
  `.trim();

  const userInput = `
Industry=${normalizedInput.industry}
Sub-Industry=${normalizedInput.subIndustry}
Responder Title=${normalizedInput.responderTitle}
Responder Department=${normalizedInput.department}
Primary Priority=${normalizedInput.primaryPriority}
Secondary Priorities=${normalizedInput.secondaryPriorities.join(', ') || 'None'}
Business Variant=${normalizedInput.variant}
Compliance Mode=${normalizedInput.complianceMode}
Company Size=${normalizedInput.size}
Region=${normalizedInput.region}
Vocabulary:
${formatVocabulary(normalizedInput.vocabularyList)}

Role Family=${plan.roleFamily.label}
Top 3 weighted pillars=${top3}
Depth Plan:
${formatDepthPlan(plan.depthPlan)}

Return JSON with pillar blocks only.
  `.trim();

  return { instructions, userInput };
};

const fallbackTag = (pillarId, idx, rankIdx, isDeep) => {
  const dim = FALLBACK_DIMS[(idx - 1) % FALLBACK_DIMS.length];
  const roleRel = rankIdx <= 2 ? 'H' : rankIdx <= 4 ? 'M' : 'L';
  const priorityRel = isDeep ? (rankIdx <= 2 ? 'H' : 'M') : (rankIdx <= 4 ? 'M' : 'L');
  return `[#P=${pillarId} | Dim=${dim} | RoleRel=${roleRel} | PriorityRel=${priorityRel}]`;
};

const getVocabToken = (normalizedInput, idx) => {
  const vocabulary = normalizedInput.vocabularyList || [];
  if (vocabulary.length > 0) {
    return vocabulary[(idx - 1) % vocabulary.length];
  }
  if (idx % 2 === 0) return normalizedInput.primaryPriority;
  return normalizedInput.subIndustry;
};

const fallbackQuestionPair = (normalizedInput, pillarId, idx, rankIdx, isDeep) => {
  const token = clampText(getVocabToken(normalizedInput, idx), 80) || 'critical workflow';
  const label = isDeep ? 'DS' : 'QS';
  const stageActionA = isDeep
    ? `${token} exceptions trigger immediate containment with same-shift logged evidence and named owner.`
    : `${token} governance runs on fixed threshold checks each shift with owner signoff.`;
  const stageActionB = isDeep
    ? `${token} exceptions continue under controlled deviation, with closure evidence verified in scheduled review.`
    : `${token} governance runs on planned variance reviews with exception logs and next-shift closure.`;

  return {
    id: `${pillarId}_${label}_${idx}`,
    textA: stageActionA,
    textB: stageActionB,
    metadataTag: fallbackTag(pillarId, idx, rankIdx, isDeep)
  };
};

const fallbackWhyItMatters = (normalizedInput, pillar) => {
  const token = clampText(getVocabToken(normalizedInput, Number(pillar.id.slice(1)) || 1), 90);
  return `${pillar.name} matters in ${normalizedInput.subIndustry} because ${token || 'daily execution'} determines whether output stays profitable under real operating pressure. For ${normalizedInput.responderTitle}, this pillar directly influences ${normalizedInput.primaryPriority} through owner clarity, review cadence, and exception control.`;
};

const matchPillarBlock = (rawBlocks, pillar) => {
  const exact = rawBlocks.find((item) => normalizeKey(item?.id) === normalizeKey(pillar.id));
  if (exact) return exact;
  return rawBlocks.find((item) => normalizeKey(item?.name) === normalizeKey(pillar.name));
};

const normalizeQuestionPair = (rawPair, fallback) => {
  if (!rawPair || typeof rawPair !== 'object') return fallback;
  const textA = clampText(toString(rawPair.textA || rawPair.a, ''), 420);
  const textB = clampText(toString(rawPair.textB || rawPair.b, ''), 420);
  if (!textA || !textB) return fallback;
  return {
    id: clampText(toString(rawPair.id, fallback.id), 80),
    textA,
    textB,
    metadataTag: clampText(toString(rawPair.metadataTag || rawPair.tag, fallback.metadataTag), 220)
  };
};

const buildFallbackQuestionBank = (normalizedInput, plan) => {
  const pillars = PILLARS.map((pillar) => {
    const rankIdx = plan.rankedPillars.findIndex((candidate) => candidate.id === pillar.id);
    const deepCount = plan.depthPlan?.[pillar.id]?.deepCount || 0;
    const qs4 = Array.from({ length: 4 }, (_, idx) =>
      fallbackQuestionPair(normalizedInput, pillar.id, idx + 1, rankIdx, false)
    );
    const deepScan = Array.from({ length: deepCount }, (_, idx) =>
      fallbackQuestionPair(normalizedInput, pillar.id, idx + 1, rankIdx, true)
    );

    return {
      id: pillar.id,
      name: pillar.name,
      legacyPillar: LEGACY_PILLAR_BY_ADAPTIVE_ID[pillar.id] || 'Operations',
      whyItMatters: fallbackWhyItMatters(normalizedInput, pillar),
      qs4,
      deepScan
    };
  });

  return { pillars };
};

const normalizeQuestionBank = (rawQuestionBank, normalizedInput, plan) => {
  const fallback = buildFallbackQuestionBank(normalizedInput, plan);
  if (!rawQuestionBank || typeof rawQuestionBank !== 'object') return fallback;

  const rawBlocks = Array.isArray(rawQuestionBank.pillars) ? rawQuestionBank.pillars : [];
  if (rawBlocks.length === 0) return fallback;

  const pillars = PILLARS.map((pillar) => {
    const rankIdx = plan.rankedPillars.findIndex((candidate) => candidate.id === pillar.id);
    const deepCount = plan.depthPlan?.[pillar.id]?.deepCount || 0;
    const rawBlock = matchPillarBlock(rawBlocks, pillar);

    const fallbackBlock = fallback.pillars.find((item) => item.id === pillar.id);
    const fallbackQs4 = fallbackBlock?.qs4 || [];
    const fallbackDeep = fallbackBlock?.deepScan || [];

    const rawQs = Array.isArray(rawBlock?.qs4) ? rawBlock.qs4 : [];
    const rawDeep = Array.isArray(rawBlock?.deepScan) ? rawBlock.deepScan : [];

    const qs4 = Array.from({ length: 4 }, (_, idx) => {
      const base = fallbackQs4[idx] || fallbackQuestionPair(normalizedInput, pillar.id, idx + 1, rankIdx, false);
      return normalizeQuestionPair(rawQs[idx], base);
    });

    const deepScan = Array.from({ length: deepCount }, (_, idx) => {
      const base = fallbackDeep[idx] || fallbackQuestionPair(normalizedInput, pillar.id, idx + 1, rankIdx, true);
      return normalizeQuestionPair(rawDeep[idx], base);
    });

    return {
      id: pillar.id,
      name: clampText(toString(rawBlock?.name, pillar.name), 140),
      legacyPillar: LEGACY_PILLAR_BY_ADAPTIVE_ID[pillar.id] || 'Operations',
      whyItMatters: clampText(toString(rawBlock?.whyItMatters, fallbackBlock?.whyItMatters || ''), 1200),
      qs4,
      deepScan
    };
  });

  return { pillars };
};

export const normalizeAdaptiveAssessmentInput = (raw = {}) => {
  const industry = clampText(firstPresent(raw, ['industry', 'Industry', 'INDUSTRY']), 180) || 'General Industry';
  const subIndustry = clampText(firstPresent(raw, ['subIndustry', 'sub_industry', 'Sub-Industry', 'SUB_INDUSTRY']), 220) || 'General Sub-Industry';
  const responderTitle = clampText(firstPresent(raw, ['responderTitle', 'title', 'Responder Title', 'RESPONDER_TITLE']), 180) || 'General Manager';
  const department = clampText(firstPresent(raw, ['department', 'responderDepartment', 'Responder Department', 'DEPARTMENT'], 'General Management'), 180);
  const primaryPriority = clampText(firstPresent(raw, ['primaryPriority', 'priority', 'Primary Priority', 'PRIORITY'], 'Increase profit margin'), 220);
  const secondaryPrioritiesRaw = raw.secondaryPriorities ?? raw.secondary_priorities ?? raw['Secondary Priorities'] ?? raw.SECONDARY_PRIORITIES;
  const secondaryPriorities = parseList(secondaryPrioritiesRaw, 12);
  const variant = clampText(firstPresent(raw, ['variant', 'businessVariant', 'Business Variant', 'VARIANT'], 'general operating model'), 180);
  const complianceMode = clampText(firstPresent(raw, ['complianceMode', 'compliance', 'Compliance Mode', 'COMPLIANCE_MODE'], 'none'), 180);
  const size = clampText(firstPresent(raw, ['size', 'companySize', 'Company Size', 'SIZE'], 'unknown'), 80);
  const region = clampText(firstPresent(raw, ['region', 'regionContext', 'Region/Market Context', 'REGION'], 'global'), 180);
  const vocabularyRaw = raw.vocabularyList ?? raw.vocabulary ?? raw['Sub-Industry Vocabulary Injector'] ?? raw.VOCABULARY_LIST;
  const vocabularyList = parseList(vocabularyRaw, 80).slice(0, 50);
  const forceDs20All = Boolean(raw.forceDs20All || raw.forceDS20All || raw.forceDeepScan20All);

  return {
    industry,
    subIndustry,
    responderTitle,
    department,
    primaryPriority,
    secondaryPriorities,
    variant,
    complianceMode,
    size,
    region,
    vocabularyList,
    forceDs20All
  };
};

export const computeAdaptiveAssessmentPlan = (normalizedInput) => {
  const roleFamily = inferRoleFamily(normalizedInput.responderTitle, normalizedInput.department);
  const baseWeights = { ...(ROLE_BASE_WEIGHTS[roleFamily.id] || ROLE_BASE_WEIGHTS.executive) };

  const primaryPriorityKey = resolvePriorityKey(normalizedInput.primaryPriority);
  let finalWeights = { ...baseWeights };

  if (primaryPriorityKey && PRIORITY_BOOSTS[primaryPriorityKey]) {
    finalWeights = applyBoosts(finalWeights, PRIORITY_BOOSTS[primaryPriorityKey], 'high');
  }

  const secondaryPriorityKeys = [];
  for (const secondary of normalizedInput.secondaryPriorities) {
    const key = resolvePriorityKey(secondary);
    if (!key || !PRIORITY_BOOSTS[key]) continue;
    secondaryPriorityKeys.push(key);
    finalWeights = applyBoosts(finalWeights, PRIORITY_BOOSTS[key], 'medium');
  }

  const rankedPillars = rankPillars(finalWeights);
  const depthPlan = buildDepthPlan(rankedPillars, normalizedInput.forceDs20All);

  return {
    roleFamily,
    baseWeights,
    finalWeights,
    rankedPillars,
    depthPlan,
    primaryPriorityKey,
    secondaryPriorityKeys
  };
};

export const generateAdaptiveAssessment = async ({ openai, rawInput }) => {
  const normalizedInput = normalizeAdaptiveAssessmentInput(rawInput);
  const plan = computeAdaptiveAssessmentPlan(normalizedInput);
  const { instructions, userInput } = buildPrompts(normalizedInput, plan);

  let assessmentText = '';
  try {
    const response = await openai.responses.create({
      model: ADAPTIVE_ASSESSMENT_MODEL,
      instructions,
      input: userInput,
      max_output_tokens: 12000,
      temperature: 0.2
    });
    assessmentText = extractResponseText(response);
  } catch (error) {
    console.error('Adaptive assessment generation failed:', error);
  }

  if (!assessmentText) {
    assessmentText = fallbackAssessmentText(normalizedInput, plan);
  }

  return {
    assessmentText,
    model: ADAPTIVE_ASSESSMENT_MODEL,
    input: normalizedInput,
    roleFamily: plan.roleFamily,
    baseWeights: plan.baseWeights,
    finalWeights: plan.finalWeights,
    rankedPillars: plan.rankedPillars.map((pillar) => ({
      id: pillar.id,
      name: pillar.name,
      weight: plan.finalWeights[pillar.id]
    })),
    depthPlan: plan.depthPlan,
    appliedPriorityKeys: {
      primary: plan.primaryPriorityKey || '',
      secondary: plan.secondaryPriorityKeys
    }
  };
};

export const generateAdaptiveQuestionBank = async ({ openai, rawInput }) => {
  const normalizedInput = normalizeAdaptiveAssessmentInput(rawInput);
  const plan = computeAdaptiveAssessmentPlan(normalizedInput);
  const { instructions, userInput } = buildQuestionBankPrompts(normalizedInput, plan);

  let questionBank = null;
  try {
    const response = await openai.responses.create({
      model: ADAPTIVE_QUESTIONS_MODEL,
      instructions,
      input: userInput,
      max_output_tokens: 9000,
      temperature: 0.2,
      text: {
        format: {
          type: 'json_schema',
          name: 'adaptive_question_bank_v1',
          schema: adaptiveQuestionBankSchema,
          strict: false
        }
      }
    });
    questionBank = extractResponseJson(response);
  } catch (error) {
    console.error('Adaptive question bank generation failed:', error);
  }

  const normalizedQuestionBank = normalizeQuestionBank(questionBank, normalizedInput, plan);

  return {
    model: ADAPTIVE_QUESTIONS_MODEL,
    input: normalizedInput,
    roleFamily: plan.roleFamily,
    baseWeights: plan.baseWeights,
    finalWeights: plan.finalWeights,
    rankedPillars: plan.rankedPillars.map((pillar) => ({
      id: pillar.id,
      name: pillar.name,
      weight: plan.finalWeights[pillar.id]
    })),
    depthPlan: plan.depthPlan,
    appliedPriorityKeys: {
      primary: plan.primaryPriorityKey || '',
      secondary: plan.secondaryPriorityKeys
    },
    questionBank: normalizedQuestionBank
  };
};

export const getAdaptiveAssessmentConfig = () => ({
  model: ADAPTIVE_ASSESSMENT_MODEL,
  questionsModel: ADAPTIVE_QUESTIONS_MODEL
});
