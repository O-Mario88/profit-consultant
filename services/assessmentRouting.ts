import { getGoalPillars } from '../data/goalLibrary';

export const LEGACY_PILLARS = [
  'Operations',
  'Money',
  'Market',
  'Leadership',
  'Innovation',
  'Risk',
  'People'
] as const;

export type LegacyPillar = (typeof LEGACY_PILLARS)[number];

export type RoleFamilyId =
  | 'executive'
  | 'finance'
  | 'hr'
  | 'operations'
  | 'quality'
  | 'supply_chain'
  | 'sales'
  | 'engineering'
  | 'pmo'
  | 'it_data';

export type DepartmentRouteId =
  | 'executive'
  | 'finance'
  | 'sales'
  | 'marketing'
  | 'human_resources'
  | 'operations'
  | 'quality'
  | 'supply_chain'
  | 'engineering'
  | 'it_data'
  | 'pmo';

const PILLAR_NAME_ALIASES: Record<string, LegacyPillar> = {
  engine: 'Operations',
  fuel: 'Money',
  voice: 'Market',
  brain: 'Leadership',
  pulse: 'Innovation',
  shield: 'Risk',
  tribe: 'People',
  operations: 'Operations',
  money: 'Money',
  market: 'Market',
  leadership: 'Leadership',
  innovation: 'Innovation',
  risk: 'Risk',
  people: 'People',
  'quality customer trust': 'Risk',
  'engineering process design change control': 'Innovation',
  'sales delivery customer experience': 'Market',
  'finance pricing margin cashflow': 'Money',
  'operations productivity flow': 'Operations',
  'supply chain inventory vendor control': 'Leadership',
  'people culture safety compliance continuous improvement': 'People'
};

const ROLE_FAMILY_RULES: Array<{
  id: RoleFamilyId;
  titleKeywords: string[];
  departmentKeywords: string[];
}> = [
  {
    id: 'executive',
    titleKeywords: [
      'founder',
      'co founder',
      'owner',
      'proprietor',
      'managing director',
      'ceo',
      'chief executive',
      'president',
      'general manager',
      'gm',
      'store manager',
      'assistant manager',
      'floor supervisor',
      'country manager',
      'regional gm',
      'business unit head',
      'managing partner',
      'chief of staff'
    ],
    departmentKeywords: ['executive', 'management', 'leadership', 'owner', 'general management']
  },
  {
    id: 'finance',
    titleKeywords: [
      'cfo',
      'chief financial',
      'finance director',
      'finance manager',
      'vp finance',
      'controller',
      'accountant',
      'bookkeeper',
      'cashier',
      'pos attendant',
      'treasurer',
      'fp a',
      'financial analyst',
      'pricing analyst',
      'credit manager',
      'internal auditor',
      'tax manager'
    ],
    departmentKeywords: ['finance', 'accounting', 'treasury', 'fp a', 'audit', 'credit']
  },
  {
    id: 'hr',
    titleKeywords: [
      'chro',
      'human resources',
      'hr director',
      'hr manager',
      'head of people',
      'people ops',
      'talent acquisition',
      'recruiter',
      'learning and development',
      'l and d',
      'training manager',
      'organizational development',
      'hris'
    ],
    departmentKeywords: ['hr', 'human resources', 'people', 'talent', 'learning', 'admin', 'administration']
  },
  {
    id: 'operations',
    titleKeywords: [
      'coo',
      'chief operating',
      'operations director',
      'head of operations',
      'plant manager',
      'factory manager',
      'production manager',
      'production supervisor',
      'shift lead',
      'workshop manager',
      'line leader',
      'site manager',
      'service delivery manager',
      'refurb specialist',
      'used phones specialist',
      'trade in specialist'
    ],
    departmentKeywords: ['operations', 'production', 'manufacturing', 'plant', 'service delivery']
  },
  {
    id: 'quality',
    titleKeywords: [
      'quality director',
      'head of quality',
      'quality manager',
      'qa qc',
      'qa technician',
      'device tester',
      'quality assurance',
      'quality control',
      'regulatory affairs',
      'compliance manager',
      'warranty returns officer',
      'claims officer',
      'fraud risk officer',
      'loss prevention officer',
      'qms manager',
      'gmp manager',
      'ehs',
      'hse',
      'safety officer'
    ],
    departmentKeywords: ['quality', 'qa', 'qc', 'compliance', 'regulatory', 'ehs', 'hse', 'safety']
  },
  {
    id: 'supply_chain',
    titleKeywords: [
      'cpo',
      'chief procurement',
      'supply chain director',
      'head of supply chain',
      'procurement manager',
      'procurement officer',
      'purchasing manager',
      'buyer',
      'sourcing specialist',
      'stock clerk',
      'receiving officer',
      'vendor relations',
      'supply planner',
      'demand planner',
      'logistics manager',
      'warehouse manager',
      'backroom lead',
      'distribution manager',
      'inventory controller',
      'delivery coordinator',
      'rider coordinator'
    ],
    departmentKeywords: ['procurement', 'supply chain', 'logistics', 'warehouse', 'inventory', 'planning']
  },
  {
    id: 'sales',
    titleKeywords: [
      'cro',
      'chief revenue',
      'sales director',
      'vp sales',
      'commercial director',
      'head of sales',
      'head of growth',
      'sales associate',
      'senior sales rep',
      'b2b sales rep',
      'corporate sales exec',
      'business development',
      'account manager',
      'key account',
      'channel manager',
      'customer success',
      'customer service',
      'customer service rep',
      'marketing manager',
      'e commerce manager',
      'marketplace manager',
      'social media manager',
      'content creator',
      'performance marketer',
      'partnerships lead',
      'product specialist',
      'accessories specialist'
    ],
    departmentKeywords: ['sales', 'commercial', 'customer success', 'customer service', 'marketing', 'growth']
  },
  {
    id: 'engineering',
    titleKeywords: [
      'cto',
      'chief technology',
      'engineering director',
      'head of engineering',
      'r and d',
      'head of r and d',
      'product director',
      'engineering manager',
      'process engineer',
      'design engineer',
      'test engineer',
      'automation engineer',
      'phone repair technician',
      'microsoldering technician',
      'screen technician',
      'battery technician',
      'software flashing technician',
      'data transfer technician'
    ],
    departmentKeywords: ['engineering', 'product', 'technical', 'r and d', 'process engineering']
  },
  {
    id: 'pmo',
    titleKeywords: ['program manager', 'project manager', 'pmo manager', 'delivery manager', 'implementation manager'],
    departmentKeywords: ['pmo', 'project', 'program', 'delivery']
  },
  {
    id: 'it_data',
    titleKeywords: [
      'cio',
      'it director',
      'head of it',
      'it manager',
      'systems administrator',
      'it support',
      'pos admin',
      'network engineer',
      'cybersecurity',
      'security analyst',
      'data analyst',
      'bi analyst',
      'data engineer',
      'erp administrator'
    ],
    departmentKeywords: ['it', 'data', 'systems', 'erp', 'security', 'technology']
  }
];

const ROLE_BASE_WEIGHTS: Record<RoleFamilyId, Record<LegacyPillar, number>> = {
  executive: { Operations: 3, Money: 3, Market: 3, Leadership: 3, Innovation: 3, Risk: 3, People: 3 },
  finance: { Operations: 3, Money: 5, Market: 3, Leadership: 4, Innovation: 2, Risk: 2, People: 2 },
  hr: { Operations: 4, Money: 2, Market: 2, Leadership: 2, Innovation: 3, Risk: 3, People: 5 },
  operations: { Operations: 5, Money: 2, Market: 2, Leadership: 4, Innovation: 3, Risk: 4, People: 3 },
  quality: { Operations: 4, Money: 2, Market: 2, Leadership: 3, Innovation: 4, Risk: 5, People: 3 },
  supply_chain: { Operations: 3, Money: 4, Market: 2, Leadership: 5, Innovation: 2, Risk: 3, People: 2 },
  sales: { Operations: 2, Money: 4, Market: 5, Leadership: 2, Innovation: 2, Risk: 3, People: 2 },
  engineering: { Operations: 3, Money: 2, Market: 2, Leadership: 3, Innovation: 5, Risk: 4, People: 2 },
  pmo: { Operations: 4, Money: 3, Market: 4, Leadership: 3, Innovation: 3, Risk: 3, People: 3 },
  it_data: { Operations: 4, Money: 3, Market: 2, Leadership: 3, Innovation: 2, Risk: 2, People: 3 }
};

const DEPARTMENT_SYNONYMS: Record<string, DepartmentRouteId> = {
  executive: 'executive',
  management: 'executive',
  'general management': 'executive',
  finance: 'finance',
  accounting: 'finance',
  treasury: 'finance',
  sales: 'sales',
  commercial: 'sales',
  marketing: 'marketing',
  growth: 'marketing',
  'human resources': 'human_resources',
  'people operations': 'human_resources',
  hr: 'human_resources',
  people: 'human_resources',
  operations: 'operations',
  production: 'operations',
  quality: 'quality',
  compliance: 'quality',
  procurement: 'supply_chain',
  'supply chain': 'supply_chain',
  logistics: 'supply_chain',
  engineering: 'engineering',
  technical: 'engineering',
  it: 'it_data',
  data: 'it_data',
  systems: 'it_data',
  pmo: 'pmo',
  project: 'pmo'
};

const DEPARTMENT_FAMILY_MAP: Record<RoleFamilyId, DepartmentRouteId> = {
  executive: 'executive',
  finance: 'finance',
  hr: 'human_resources',
  operations: 'operations',
  quality: 'quality',
  supply_chain: 'supply_chain',
  sales: 'sales',
  engineering: 'engineering',
  pmo: 'pmo',
  it_data: 'it_data'
};

const DEPARTMENT_LABELS: Record<DepartmentRouteId, string> = {
  executive: 'Executive / General Management',
  finance: 'Finance',
  sales: 'Sales',
  marketing: 'Marketing',
  human_resources: 'Human Resources',
  operations: 'Operations',
  quality: 'Quality / Compliance',
  supply_chain: 'Supply Chain / Procurement',
  engineering: 'Engineering / Technical',
  it_data: 'IT / Data / Systems',
  pmo: 'Project / Program / PMO'
};

const DEPARTMENT_BOOSTS: Record<DepartmentRouteId, Partial<Record<LegacyPillar, number>>> = {
  executive: { Operations: 1, Money: 1, Market: 1, Leadership: 1, Innovation: 1, Risk: 1, People: 1 },
  finance: { Money: 3, Leadership: 2, Operations: 1 },
  sales: { Market: 3, Money: 2, Risk: 1 },
  marketing: { Market: 3, Money: 2, Innovation: 1 },
  human_resources: { People: 3, Operations: 2, Risk: 1 },
  operations: { Operations: 3, Leadership: 2, Risk: 1 },
  quality: { Risk: 3, Innovation: 2, Operations: 1 },
  supply_chain: { Leadership: 3, Operations: 2, Money: 1 },
  engineering: { Innovation: 3, Operations: 2, Risk: 1 },
  it_data: { Operations: 2, Leadership: 2, People: 1, Money: 1 },
  pmo: { Market: 2, Operations: 2, Leadership: 1, Money: 1 }
};

const PRIORITY_CANONICAL_BOOSTS: Record<string, Partial<Record<LegacyPillar, number>>> = {
  'increase capital cashflow': { Money: 3, Leadership: 2, Market: 2, Operations: 1 },
  'increase sales revenue': { Market: 3, Money: 2, Risk: 1 },
  'increase profit margin': { Money: 3, Operations: 2, Leadership: 2, Risk: 1 },
  'increase productivity throughput': { Operations: 3, Innovation: 2, Leadership: 2 },
  'improve team efficiency': { People: 3, Operations: 2, Innovation: 1 },
  'reduce defects improve quality': { Risk: 3, Innovation: 2, Operations: 2 },
  'improve compliance': { Risk: 3, Innovation: 2, People: 2, Leadership: 2 },
  'reduce costs opex': { Operations: 3, Leadership: 2, Money: 2, Innovation: 1 },
  'reduce waste scrap rework': { Risk: 3, Innovation: 2, Operations: 2, Leadership: 1 },
  'improve otif shorten lead time': { Operations: 3, Leadership: 2, Market: 2, Innovation: 1 },
  'improve customer satisfaction reduce complaints': { Market: 3, Risk: 2, Innovation: 1, People: 1 },
  'launch new product npi': { Innovation: 3, Risk: 2, Operations: 2, Leadership: 2, Market: 1 },
  'scale operations expand capacity': { Operations: 3, Leadership: 2, People: 2, Money: 2, Innovation: 1 },
  'improve working capital reduce inventory tie up': { Leadership: 3, Money: 2, Operations: 2, Market: 1 },
  'reduce stockouts improve availability': { Leadership: 3, Operations: 2, Market: 2, Money: 1 },
  'improve forecasting planning accuracy': { Market: 3, Leadership: 2, Operations: 2, Money: 1 },
  'improve pricing power reduce discounting': { Money: 3, Market: 2, Risk: 2, Innovation: 1 },
  'increase conversion close more deals': { Market: 3, Money: 2, Risk: 1 },
  'improve market share growth acceleration': { Market: 3, Money: 2, Operations: 2, Risk: 1 },
  'improve reliability reduce field failures': { Risk: 3, Innovation: 2, Leadership: 2, Operations: 1 },
  'improve safety reduce incidents': { People: 3, Operations: 2, Innovation: 1 },
  'reduce employee turnover retain staff': { People: 3, Operations: 2, Money: 1 },
  'improve hiring speed staffing stability': { People: 3, Operations: 2 },
  'improve training skill coverage': { People: 3, Operations: 2, Innovation: 1 },
  'digitize ops erp visibility': { Operations: 3, Leadership: 2, Money: 2, People: 2, Innovation: 1 },
  'reduce fraud shrinkage theft': { Money: 3, Leadership: 2, People: 2, Operations: 1 },
  'audit readiness always ready docs': { Risk: 3, Innovation: 2, People: 2, Leadership: 2 },
  'improve supplier performance': { Leadership: 3, Risk: 2, Innovation: 1, Operations: 1 },
  'improve equipment uptime reduce breakdowns': { Operations: 3, Innovation: 2, People: 2 },
  'reduce energy costs': { Operations: 3, Money: 2, Innovation: 1 },
  'sustainability esg': { People: 3, Operations: 2, Leadership: 2, Risk: 1 },
  'brand trust reputation': { Risk: 3, Market: 2, People: 2 },
  'enter new markets export readiness': { Market: 3, Risk: 2, Innovation: 2, Leadership: 2, Money: 1 },
  'reduce returns refunds': { Risk: 3, Market: 2, Innovation: 2, Operations: 1 }
};

const PRIORITY_ALIASES: Record<string, string> = {
  'increase cashflow': 'increase capital cashflow',
  'improve cashflow': 'increase capital cashflow',
  'increase revenue': 'increase sales revenue',
  'increase sales': 'increase sales revenue',
  'scale revenue': 'increase sales revenue',
  'increase profit': 'increase profit margin',
  'profit margin': 'increase profit margin',
  'improve margin': 'increase profit margin',
  'fix operations': 'increase productivity throughput',
  'increase throughput': 'increase productivity throughput',
  'increase productivity': 'increase productivity throughput',
  'improve team': 'improve team efficiency',
  'team performance': 'improve team efficiency',
  'reduce defects': 'reduce defects improve quality',
  'improve quality': 'reduce defects improve quality',
  'reduce costs': 'reduce costs opex',
  'cut opex': 'reduce costs opex',
  'reduce scrap': 'reduce waste scrap rework',
  'reduce rework': 'reduce waste scrap rework',
  'improve customer satisfaction': 'improve customer satisfaction reduce complaints',
  'reduce complaints': 'improve customer satisfaction reduce complaints',
  'launch new product': 'launch new product npi',
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
  erp: 'digitize ops erp visibility',
  'reduce fraud': 'reduce fraud shrinkage theft',
  shrinkage: 'reduce fraud shrinkage theft',
  'audit readiness': 'audit readiness always ready docs',
  'supplier performance': 'improve supplier performance',
  'reduce breakdowns': 'improve equipment uptime reduce breakdowns',
  'equipment uptime': 'improve equipment uptime reduce breakdowns',
  'energy costs': 'reduce energy costs',
  sustainability: 'sustainability esg',
  esg: 'sustainability esg',
  'brand trust': 'brand trust reputation',
  reputation: 'brand trust reputation',
  'export readiness': 'enter new markets export readiness',
  'new markets': 'enter new markets export readiness',
  'reduce returns': 'reduce returns refunds',
  refunds: 'reduce returns refunds'
};

const GOAL_ALIAS_TO_LEGACY: Record<string, LegacyPillar> = {
  Engine: 'Operations',
  Fuel: 'Money',
  Voice: 'Market',
  Brain: 'Leadership',
  Pulse: 'Innovation',
  Shield: 'Risk',
  Tribe: 'People'
};

export const DEPARTMENT_OPTIONS: Array<{ id: DepartmentRouteId; label: string }> = [
  { id: 'executive', label: DEPARTMENT_LABELS.executive },
  { id: 'finance', label: DEPARTMENT_LABELS.finance },
  { id: 'sales', label: DEPARTMENT_LABELS.sales },
  { id: 'marketing', label: DEPARTMENT_LABELS.marketing },
  { id: 'human_resources', label: DEPARTMENT_LABELS.human_resources },
  { id: 'operations', label: DEPARTMENT_LABELS.operations },
  { id: 'quality', label: DEPARTMENT_LABELS.quality },
  { id: 'supply_chain', label: DEPARTMENT_LABELS.supply_chain },
  { id: 'engineering', label: DEPARTMENT_LABELS.engineering },
  { id: 'it_data', label: DEPARTMENT_LABELS.it_data },
  { id: 'pmo', label: DEPARTMENT_LABELS.pmo }
];

export interface AssessmentSequencingContext {
  userTitle?: string;
  department?: string;
  industry?: string;
  subIndustry?: string;
  goals?: string[];
  primaryPriority?: string;
  secondaryPriorities?: string[];
}

interface WeightedQuestion {
  index: number;
  pillarWeight: number;
  goalWeight: number;
  textRelevance: number;
}

const normalizeText = (value: string): string =>
  String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const roleMatchScore = (keywords: string[], haystackWithPad: string): number => {
  let score = 0;
  for (const keyword of keywords) {
    const token = normalizeText(keyword);
    if (!token) continue;
    if (haystackWithPad === ` ${token} `) score += 4;
    else if (haystackWithPad.includes(` ${token} `)) score += token.length > 6 ? 3 : 2;
    else if (haystackWithPad.includes(token)) score += 1;
  }
  return score;
};

const normalizePillarKey = (value: string): string => normalizeText(value);

const mergeBoosts = (
  target: Record<LegacyPillar, number>,
  boosts: Partial<Record<LegacyPillar, number>>,
  multiplier = 1
) => {
  for (const pillar of LEGACY_PILLARS) {
    const delta = Number(boosts[pillar] || 0);
    if (!delta) continue;
    target[pillar] += delta * multiplier;
  }
};

const resolvePriorityCanonical = (value: string): string => {
  const normalized = normalizeText(value);
  if (!normalized) return '';

  if (PRIORITY_CANONICAL_BOOSTS[normalized]) return normalized;
  if (PRIORITY_ALIASES[normalized]) return PRIORITY_ALIASES[normalized];

  for (const [alias, canonical] of Object.entries(PRIORITY_ALIASES)) {
    if (normalized.includes(alias)) return canonical;
  }

  for (const key of Object.keys(PRIORITY_CANONICAL_BOOSTS)) {
    if (normalized.includes(key) || key.includes(normalized)) return key;
  }

  return '';
};

const splitTokens = (value: string): string[] => normalizeText(value).split(' ').filter(Boolean);

const toPadded = (value: string): string => ` ${normalizeText(value)} `;

const inferDepartmentFromRoleFamily = (family: RoleFamilyId): DepartmentRouteId =>
  DEPARTMENT_FAMILY_MAP[family] || 'executive';

const resolveFreeTextDepartment = (department: string): DepartmentRouteId | '' => {
  const normalized = normalizeText(department);
  if (!normalized) return '';

  if (DEPARTMENT_SYNONYMS[normalized]) return DEPARTMENT_SYNONYMS[normalized];

  for (const [keyword, id] of Object.entries(DEPARTMENT_SYNONYMS)) {
    if (normalized.includes(keyword)) return id;
  }

  return '';
};

export const toLegacyPillar = (value: string): LegacyPillar => {
  if (LEGACY_PILLARS.includes(value as LegacyPillar)) return value as LegacyPillar;
  const normalized = normalizePillarKey(value);
  return PILLAR_NAME_ALIASES[normalized] || 'Operations';
};

export const inferRoleFamily = (title = '', department = ''): RoleFamilyId => {
  const paddedTitle = toPadded(title);
  const paddedDept = toPadded(department);
  let best: { id: RoleFamilyId; score: number } = { id: 'executive', score: 0 };

  for (const family of ROLE_FAMILY_RULES) {
    const titleScore = roleMatchScore(family.titleKeywords, paddedTitle);
    const deptScore = roleMatchScore(family.departmentKeywords, paddedDept);
    const total = titleScore * 2 + deptScore;
    if (total > best.score) {
      best = { id: family.id, score: total };
    }
  }

  return best.score > 0 ? best.id : 'executive';
};

export const normalizeDepartmentId = (department = ''): DepartmentRouteId | '' => {
  if (!department) return '';
  const directMatch = DEPARTMENT_OPTIONS.find((option) => option.id === department);
  if (directMatch) return directMatch.id;

  const byLabel = DEPARTMENT_OPTIONS.find(
    (option) => normalizeText(option.label) === normalizeText(department)
  );
  if (byLabel) return byLabel.id;

  return resolveFreeTextDepartment(department);
};

export const resolveResponderDepartmentId = (department = '', title = ''): DepartmentRouteId => {
  const explicit = normalizeDepartmentId(department);
  if (explicit) return explicit;

  const roleFamily = inferRoleFamily(title, department);
  return inferDepartmentFromRoleFamily(roleFamily);
};

export const resolveResponderDepartmentLabel = (department = '', title = ''): string => {
  const id = resolveResponderDepartmentId(department, title);
  return DEPARTMENT_LABELS[id] || DEPARTMENT_LABELS.executive;
};

export const deriveGoalLegacyPillars = (goals: string[] = []): Set<LegacyPillar> => {
  const mapped = new Set<LegacyPillar>();

  for (const goal of goals) {
    const goalPillars = getGoalPillars(goal || '');
    for (const goalPillar of goalPillars) {
      const mappedLegacy = GOAL_ALIAS_TO_LEGACY[goalPillar];
      if (mappedLegacy) mapped.add(mappedLegacy);
    }
  }

  return mapped;
};

export const isPillarGoalRelevant = (pillar: string, goals: string[] = []): boolean => {
  const goalPillars = deriveGoalLegacyPillars(goals);
  return goalPillars.has(toLegacyPillar(pillar));
};

const computePillarWeights = (context: AssessmentSequencingContext): Record<LegacyPillar, number> => {
  const roleFamily = inferRoleFamily(context.userTitle || '', context.department || '');
  const base = { ...ROLE_BASE_WEIGHTS[roleFamily] };

  const departmentId = resolveResponderDepartmentId(context.department || '', context.userTitle || '');
  mergeBoosts(base, DEPARTMENT_BOOSTS[departmentId] || {}, 1);

  const primaryPriority = context.primaryPriority || context.goals?.[0] || '';
  const primaryKey = resolvePriorityCanonical(primaryPriority);
  if (primaryKey) {
    mergeBoosts(base, PRIORITY_CANONICAL_BOOSTS[primaryKey] || {}, 1);
  }

  const secondary = [
    ...(context.secondaryPriorities || []),
    ...((context.goals || []).slice(1))
  ];
  for (const candidate of secondary) {
    const key = resolvePriorityCanonical(candidate || '');
    if (!key) continue;
    mergeBoosts(base, PRIORITY_CANONICAL_BOOSTS[key] || {}, 0.65);
  }

  const goalPillars = deriveGoalLegacyPillars(context.goals || []);
  for (const pillar of goalPillars) {
    base[pillar] += 1;
  }

  return base;
};

const scoreTextRelevance = (
  text: string,
  contextTokens: Set<string>
): number => {
  if (!text || contextTokens.size === 0) return 0;

  const words = splitTokens(text);
  if (words.length === 0) return 0;

  let score = 0;
  for (const word of words) {
    if (word.length < 3) continue;
    if (contextTokens.has(word)) score += 1;
  }
  return Math.min(score, 6);
};

const buildContextTokenSet = (context: AssessmentSequencingContext): Set<string> => {
  const raw: string[] = [
    context.industry || '',
    context.subIndustry || '',
    context.userTitle || '',
    context.department || '',
    context.primaryPriority || '',
    ...(context.secondaryPriorities || []),
    ...(context.goals || [])
  ];

  const tokenSet = new Set<string>();
  for (const value of raw) {
    for (const token of splitTokens(value)) {
      if (token.length < 3) continue;
      tokenSet.add(token);
    }
  }

  return tokenSet;
};

export const sequenceAssessmentQuestions = <T extends {
  id: string;
  pillar: string;
  isGoalRelevant?: boolean;
  a?: string;
  b?: string;
}>(
  questions: T[],
  context: AssessmentSequencingContext
): T[] => {
  if (!Array.isArray(questions) || questions.length === 0) return [];

  const weights = computePillarWeights(context);
  const goalPillars = deriveGoalLegacyPillars(context.goals || []);
  const contextTokens = buildContextTokenSet(context);

  const ranked = questions.map((question, index) => {
    const legacyPillar = toLegacyPillar(question.pillar);
    const pillarWeight = weights[legacyPillar] || 0;
    const goalWeight = question.isGoalRelevant || goalPillars.has(legacyPillar) ? 1 : 0;
    const textRelevance = scoreTextRelevance(`${question.a || ''} ${question.b || ''}`, contextTokens);

    return {
      index,
      pillarWeight,
      goalWeight,
      textRelevance,
      question
    } as WeightedQuestion & { question: T };
  });

  ranked.sort((left, right) => {
    if (right.pillarWeight !== left.pillarWeight) return right.pillarWeight - left.pillarWeight;
    if (right.goalWeight !== left.goalWeight) return right.goalWeight - left.goalWeight;
    if (right.textRelevance !== left.textRelevance) return right.textRelevance - left.textRelevance;
    return left.index - right.index;
  });

  return ranked.map((item) => item.question);
};
