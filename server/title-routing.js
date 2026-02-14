const CANONICAL_PILLARS = [
  'Operations',
  'Money',
  'Market',
  'Leadership',
  'Innovation',
  'Risk',
  'People'
];

const WEIGHT_LEVELS = {
  primary: 1,
  secondary: 0.82,
  supporting: 0.66,
  baseline: 0.5
};

const normalizeTitle = (value) =>
  String(value || '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const containsWholePhrase = (haystack, needle) =>
  haystack === needle ||
  haystack.startsWith(`${needle} `) ||
  haystack.endsWith(` ${needle}`) ||
  haystack.includes(` ${needle} `);

const FAMILY_DEFINITIONS = [
  {
    id: 'executive_general_management',
    label: 'Executive / General Management',
    primary: ['Leadership', 'Operations', 'Money'],
    secondary: ['Market', 'Risk'],
    supporting: ['People', 'Innovation'],
    titles: [
      'Founder',
      'Co-Founder',
      'Owner',
      'Proprietor',
      'Managing Director',
      'MD',
      'Chief Executive Officer',
      'CEO',
      'President',
      'General Manager',
      'GM',
      'Country Manager',
      'Regional GM',
      'Business Unit Head',
      'Business Unit Manager',
      'BU Manager',
      'Managing Partner',
      'Partner',
      'Director',
      'Chief of Staff',
      'Strategy Director',
      'Head of Strategy',
      'Transformation Director',
      'Head of Transformation',
      'PMO Director',
      'Head of PMO'
    ],
    keywordRegex: /\b(founder|owner|proprietor|ceo|chief executive|managing director|general manager|country manager|regional gm|business unit|chief of staff|strategy|transformation)\b/
  },
  {
    id: 'finance_accounting_treasury_audit',
    label: 'Finance, Accounting, Treasury, Audit',
    primary: ['Money'],
    secondary: ['Risk'],
    supporting: ['Leadership', 'Operations', 'Market'],
    titles: [
      'Chief Financial Officer',
      'CFO',
      'Finance Director',
      'VP Finance',
      'Financial Controller',
      'Controller',
      'Head of Accounting',
      'Accounting Manager',
      'Chief Accountant',
      'Senior Accountant',
      'Staff Accountant',
      'Junior Accountant',
      'GL Accountant',
      'Accounts Payable Manager',
      'AP Manager',
      'Accounts Payable Officer',
      'AP Officer',
      'Accounts Receivable Manager',
      'AR Manager',
      'Accounts Receivable Officer',
      'AR Officer',
      'Billing Specialist',
      'Invoicing Officer',
      'Payroll Manager',
      'Payroll Officer',
      'Tax Manager',
      'Tax Specialist',
      'FP&A Manager',
      'Financial Analyst',
      'Business Analyst',
      'Cost Accountant',
      'Management Accountant',
      'Pricing Analyst',
      'Revenue Analyst',
      'Treasurer',
      'Treasury Manager',
      'Cash Manager',
      'Internal Auditor',
      'Head of Internal Audit',
      'Compliance Officer',
      'Risk Manager',
      'Credit Manager',
      'Credit Controller'
    ],
    keywordRegex: /\b(cfo|finance|account|controller|fp a|fp and a|treasury|treasurer|auditor|tax|billing|payroll|credit|financial analyst|pricing analyst|revenue analyst)\b/
  },
  {
    id: 'hr_people_admin_learning',
    label: 'HR, People, Admin, Learning',
    primary: ['People'],
    secondary: ['Leadership'],
    supporting: ['Operations', 'Risk'],
    titles: [
      'Chief Human Resources Officer',
      'CHRO',
      'HR Director',
      'VP People',
      'Head of People',
      'People Operations Lead',
      'HR Manager',
      'HR Generalist',
      'HR Officer',
      'People Ops Manager',
      'Personnel Officer',
      'Talent Acquisition Manager',
      'Recruiter',
      'Learning and Development Manager',
      'L&D Manager',
      'Training Manager',
      'Training Coordinator',
      'Performance Management Lead',
      'Organizational Development Lead',
      'OD Lead',
      'Culture Manager',
      'Engagement Lead',
      'Administration Manager',
      'Office Manager',
      'Executive Assistant',
      'EA',
      'Facilities Manager',
      'Workplace Manager',
      'Compensation and Benefits Manager',
      'Comp and Benefits Manager',
      'Rewards Specialist',
      'HRIS Analyst',
      'People Systems Analyst'
    ],
    keywordRegex: /\b(chro|human resources|hr |people ops|talent|recruit|learning|training|organizational development|culture|engagement|compensation|benefits|hris|personnel)\b/
  },
  {
    id: 'operations_production_service_delivery',
    label: 'Operations, Production, Plant, Service Delivery',
    primary: ['Operations'],
    secondary: ['Leadership', 'People'],
    supporting: ['Money', 'Risk'],
    titles: [
      'Chief Operating Officer',
      'COO',
      'Operations Director',
      'VP Operations',
      'Head of Operations',
      'Plant Manager',
      'Factory Manager',
      'Production Manager',
      'Production Supervisor',
      'Shift Supervisor',
      'Shift Lead',
      'Line Leader',
      'Team Lead',
      'Workshop Manager',
      'Site Manager',
      'Service Delivery Manager',
      'Field Operations Manager',
      'Operations Coordinator',
      'Continuous Improvement Manager',
      'Lean Manager',
      'Six Sigma Black Belt',
      'Process Improvement Lead',
      'Industrial Engineer',
      'Methods Engineer'
    ],
    keywordRegex: /\b(coo|operations|plant|factory|production|shift|line leader|service delivery|field operations|continuous improvement|lean|six sigma|industrial engineer|methods engineer)\b/
  },
  {
    id: 'quality_compliance_ehs',
    label: 'Quality, Compliance, EHS',
    primary: ['Risk'],
    secondary: ['Operations'],
    supporting: ['Leadership', 'People'],
    titles: [
      'Quality Director',
      'Head of Quality',
      'Quality Manager',
      'QA/QC Manager',
      'Quality Assurance Manager',
      'Quality Control Manager',
      'QA Lead',
      'QC Supervisor',
      'Quality Engineer',
      'Supplier Quality Engineer',
      'SQE',
      'Quality Inspector',
      'QC Inspector',
      'Metrology Technician',
      'Calibration Technician',
      'Regulatory Affairs Manager',
      'Compliance Manager',
      'QMS Manager',
      'Document Control Manager',
      'Validation Engineer',
      'GMP Manager',
      'EHS Manager',
      'Safety Officer',
      'HSE Manager',
      'Environmental Manager'
    ],
    keywordRegex: /\b(quality|qa|qc|regulatory|compliance|qms|gmp|validation|ehs|hse|safety|environmental|metrology|calibration)\b/
  },
  {
    id: 'procurement_supply_chain_logistics',
    label: 'Procurement, Supply Chain, Logistics, Warehouse',
    primary: ['Operations', 'Money'],
    secondary: ['Risk'],
    supporting: ['Leadership'],
    titles: [
      'Chief Procurement Officer',
      'CPO',
      'Supply Chain Director',
      'Head of Supply Chain',
      'Procurement Director',
      'Purchasing Director',
      'Procurement Manager',
      'Purchasing Manager',
      'Buyer',
      'Senior Buyer',
      'Sourcing Specialist',
      'Category Manager',
      'Vendor Manager',
      'Supplier Manager',
      'Contract Manager',
      'Supply Planner',
      'Demand Planner',
      'Production Planner',
      'Materials Planner',
      'Inventory Planner',
      'Logistics Manager',
      'Warehouse Manager',
      'Distribution Manager',
      'Transport Manager',
      'Fleet Manager',
      'Shipping Supervisor',
      'Dispatch Supervisor',
      'Stores Manager',
      'Storekeeper',
      'Inventory Controller',
      'Import/Export Manager',
      'Customs Compliance Coordinator'
    ],
    keywordRegex: /\b(cpo|procurement|purchasing|buyer|sourcing|category manager|vendor|supplier|supply chain|logistics|warehouse|distribution|transport|fleet|shipping|dispatch|storekeeper|inventory|import|export|customs|planner)\b/
  },
  {
    id: 'sales_commercial_customer_success_marketing',
    label: 'Sales, Commercial, Customer Success, Marketing',
    primary: ['Market'],
    secondary: ['Money'],
    supporting: ['Leadership', 'Operations'],
    titles: [
      'Chief Revenue Officer',
      'CRO',
      'Sales Director',
      'VP Sales',
      'Commercial Director',
      'Head of Sales',
      'Head of Growth',
      'Business Development Manager',
      'BDM',
      'Business Development Executive',
      'Account Manager',
      'Key Account Manager',
      'Sales Manager',
      'Sales Representative',
      'Sales Executive',
      'Territory Manager',
      'Channel Manager',
      'Partnerships Manager',
      'Inside Sales',
      'SDR',
      'BDR',
      'Customer Success Manager',
      'CSM',
      'Customer Service Manager',
      'Client Relationship Manager',
      'Call Center Manager',
      'Marketing Manager',
      'Growth Marketing Manager',
      'Brand Manager',
      'Digital Marketing Manager',
      'Demand Generation Manager'
    ],
    keywordRegex: /\b(cro|sales|commercial|business development|account manager|territory|channel|partnership|inside sales|sdr|bdr|customer success|customer service|marketing|brand|demand generation|growth)\b/
  },
  {
    id: 'engineering_rnd_product_technical',
    label: 'Engineering, R&D, Product, Technical',
    primary: ['Innovation'],
    secondary: ['Operations'],
    supporting: ['Risk', 'Leadership'],
    titles: [
      'Chief Technology Officer',
      'CTO',
      'Engineering Director',
      'Head of Engineering',
      'R&D Director',
      'Head of R&D',
      'Product Director',
      'Head of Product',
      'Engineering Manager',
      'Product Manager',
      'Project Engineer',
      'Manufacturing Engineer',
      'Process Engineer',
      'Design Engineer',
      'Electrical Engineer',
      'Mechanical Engineer',
      'Test Engineer',
      'Automation Engineer',
      'Maintenance Engineer'
    ],
    keywordRegex: /\b(cto|engineering|r d|research and development|product manager|project engineer|manufacturing engineer|process engineer|design engineer|electrical engineer|mechanical engineer|test engineer|automation engineer|maintenance engineer)\b/
  },
  {
    id: 'it_data_security',
    label: 'IT, Data, Security',
    primary: ['Innovation'],
    secondary: ['Risk', 'Operations'],
    supporting: ['People', 'Leadership'],
    titles: [
      'Chief Information Officer',
      'CIO',
      'IT Director',
      'Head of IT',
      'IT Manager',
      'Systems Administrator',
      'Network Engineer',
      'Cybersecurity Manager',
      'Security Analyst',
      'Data Analyst',
      'BI Analyst',
      'Data Engineer',
      'ERP Administrator',
      'Systems Analyst',
      'CRM Manager'
    ],
    keywordRegex: /\b(cio|it director|head of it|it manager|systems administrator|network engineer|cybersecurity|security analyst|data analyst|bi analyst|data engineer|erp|crm)\b/
  },
  {
    id: 'project_program_pmo',
    label: 'Project / Program / PMO',
    primary: ['Leadership', 'Operations'],
    secondary: ['Money', 'Risk'],
    supporting: ['People', 'Innovation'],
    titles: [
      'Program Manager',
      'Project Manager',
      'PMO Manager',
      'Delivery Manager',
      'Implementation Manager',
      'Scrum Master'
    ],
    keywordRegex: /\b(program manager|project manager|pmo|delivery manager|implementation manager|scrum master)\b/
  },
  {
    id: 'legal_governance_risk',
    label: 'Legal, Governance, Risk',
    primary: ['Risk'],
    secondary: ['Leadership', 'Money'],
    supporting: ['Operations'],
    titles: [
      'General Counsel',
      'Legal Counsel',
      'Legal Officer',
      'Company Secretary',
      'Risk and Compliance Manager',
      'Governance Officer',
      'Contracts Manager'
    ],
    keywordRegex: /\b(general counsel|legal counsel|legal officer|company secretary|governance|risk and compliance|contracts manager)\b/
  },
  {
    id: 'retail_branch_frontline_management',
    label: 'Retail / Branch / Frontline Management',
    primary: ['Market', 'Operations'],
    secondary: ['People', 'Money'],
    supporting: ['Leadership'],
    titles: [
      'Branch Manager',
      'Store Manager',
      'Assistant Store Manager',
      'Floor Supervisor',
      'Customer Experience Manager',
      'Merchandising Manager'
    ],
    keywordRegex: /\b(branch manager|store manager|assistant store manager|floor supervisor|customer experience|merchandising)\b/
  },
  {
    id: 'hospitality_field_services_healthcare_ops',
    label: 'Hospitality / Field Services / Healthcare Ops',
    primary: ['Operations'],
    secondary: ['Market', 'People'],
    supporting: ['Risk', 'Leadership'],
    titles: [
      'Hotel Manager',
      'Restaurant Manager',
      'Clinic Manager',
      'Practice Manager',
      'Field Service Supervisor',
      'Dispatch Coordinator'
    ],
    keywordRegex: /\b(hotel manager|restaurant manager|clinic manager|practice manager|field service supervisor|dispatch coordinator)\b/
  }
];

const FAMILY_BY_ID = new Map(
  FAMILY_DEFINITIONS.map((family) => [family.id, family])
);

const TITLE_INDEX = new Map();
for (const family of FAMILY_DEFINITIONS) {
  for (const rawTitle of family.titles) {
    const normalized = normalizeTitle(rawTitle);
    if (!normalized) continue;
    if (!TITLE_INDEX.has(normalized)) {
      TITLE_INDEX.set(normalized, family.id);
    }
  }
}

const SORTED_ALIASES = [...TITLE_INDEX.keys()].sort((a, b) => b.length - a.length);

const buildPillarWeights = (family) => {
  const weights = {};
  for (const pillar of CANONICAL_PILLARS) {
    weights[pillar] = WEIGHT_LEVELS.baseline;
  }

  for (const pillar of family.primary || []) {
    weights[pillar] = Math.max(weights[pillar], WEIGHT_LEVELS.primary);
  }
  for (const pillar of family.secondary || []) {
    weights[pillar] = Math.max(weights[pillar], WEIGHT_LEVELS.secondary);
  }
  for (const pillar of family.supporting || []) {
    weights[pillar] = Math.max(weights[pillar], WEIGHT_LEVELS.supporting);
  }

  return weights;
};

const findBestAliasMatch = (normalizedTitleText) => {
  if (!normalizedTitleText) return null;

  if (TITLE_INDEX.has(normalizedTitleText)) {
    const familyId = TITLE_INDEX.get(normalizedTitleText);
    return {
      familyId,
      matchedAlias: normalizedTitleText,
      confidence: 1
    };
  }

  for (const alias of SORTED_ALIASES) {
    if (!containsWholePhrase(normalizedTitleText, alias)) continue;
    return {
      familyId: TITLE_INDEX.get(alias),
      matchedAlias: alias,
      confidence: 0.92
    };
  }

  const inputTokens = normalizedTitleText.split(' ').filter(Boolean);
  if (inputTokens.length === 0) return null;
  const inputTokenSet = new Set(inputTokens);

  let best = null;
  for (const alias of SORTED_ALIASES) {
    const aliasTokens = alias.split(' ').filter(Boolean);
    const minOverlap = aliasTokens.length >= 3 ? 2 : aliasTokens.length;
    if (minOverlap === 0) continue;

    let overlap = 0;
    for (const token of aliasTokens) {
      if (inputTokenSet.has(token)) overlap += 1;
    }

    if (overlap < minOverlap) continue;
    const ratio = overlap / aliasTokens.length;
    if (ratio < 0.75) continue;

    const confidence = Math.min(0.88, 0.62 + ratio * 0.28);
    if (!best || confidence > best.confidence || (confidence === best.confidence && alias.length > best.matchedAlias.length)) {
      best = {
        familyId: TITLE_INDEX.get(alias),
        matchedAlias: alias,
        confidence
      };
    }
  }

  return best;
};

const findRegexFamilyMatch = (normalizedTitleText) => {
  if (!normalizedTitleText) return null;
  for (const family of FAMILY_DEFINITIONS) {
    if (family.keywordRegex?.test(normalizedTitleText)) {
      return {
        familyId: family.id,
        matchedAlias: '',
        confidence: 0.58
      };
    }
  }
  return null;
};

const roleRoutingSummary = (family, tiers) => {
  const firstPrimary = tiers.primary.join(', ') || 'none';
  const firstSecondary = tiers.secondary.join(', ') || 'none';
  return `${family.label} role. Primary pillar focus: ${firstPrimary}. Secondary focus: ${firstSecondary}.`;
};

const formatMatchedAlias = (alias) =>
  alias
    .split(' ')
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ');

const buildPriorityTiers = (family) => ({
  primary: [...(family.primary || [])],
  secondary: [...(family.secondary || [])],
  supporting: [...(family.supporting || [])]
});

const getRankedPillars = (weights) =>
  [...CANONICAL_PILLARS].sort((a, b) => (weights[b] || 0) - (weights[a] || 0));

const toRoleRoutingResult = ({
  normalizedTitleText,
  family,
  matchedAlias,
  confidence
}) => {
  const tiers = buildPriorityTiers(family);
  const pillarWeights = buildPillarWeights(family);
  const rankedPillars = getRankedPillars(pillarWeights);
  const searchTerms = [
    family.label,
    ...(tiers.primary || []),
    ...(tiers.secondary || []),
    ...(matchedAlias ? [formatMatchedAlias(matchedAlias)] : [])
  ]
    .map((term) => String(term || '').trim())
    .filter(Boolean);

  return {
    normalizedTitle: normalizedTitleText,
    matchedTitle: matchedAlias ? formatMatchedAlias(matchedAlias) : '',
    confidence,
    familyId: family.id,
    familyLabel: family.label,
    tiers,
    pillarWeights,
    rankedPillars,
    searchTerms,
    summary: roleRoutingSummary(family, tiers)
  };
};

export const resolveRoleRouting = (title) => {
  const normalizedTitleText = normalizeTitle(title);

  let match = findBestAliasMatch(normalizedTitleText);
  if (!match) {
    match = findRegexFamilyMatch(normalizedTitleText);
  }

  const fallbackFamily = FAMILY_BY_ID.get('executive_general_management');
  const family = match ? FAMILY_BY_ID.get(match.familyId) : fallbackFamily;

  return toRoleRoutingResult({
    normalizedTitleText,
    family: family || fallbackFamily,
    matchedAlias: match?.matchedAlias || '',
    confidence: match?.confidence || 0.35
  });
};

export const getRoleWeightForPillar = (roleRouting, pillar) => {
  if (!roleRouting || typeof roleRouting !== 'object') {
    return WEIGHT_LEVELS.baseline;
  }
  const value = Number(roleRouting.pillarWeights?.[pillar]);
  if (!Number.isFinite(value)) return WEIGHT_LEVELS.baseline;
  return value;
};

export const formatRoleRoutingBlock = (roleRouting) => {
  if (!roleRouting) return '- Role routing not available.';

  const primary = roleRouting.tiers?.primary?.join(', ') || 'None';
  const secondary = roleRouting.tiers?.secondary?.join(', ') || 'None';
  const supporting = roleRouting.tiers?.supporting?.join(', ') || 'None';

  return [
    `- Role family: ${roleRouting.familyLabel}`,
    `- Matched role title: ${roleRouting.matchedTitle || 'No exact alias match'}`,
    `- Confidence: ${Math.round((roleRouting.confidence || 0) * 100)}%`,
    `- Primary pillar ownership: ${primary}`,
    `- Secondary pillar ownership: ${secondary}`,
    `- Supporting pillar ownership: ${supporting}`
  ].join('\n');
};

export const sortPillarsByScoreAndRoleWeight = (pillars, scores, roleRouting) => {
  const toScore = (pillar) => Number(scores?.[pillar.toLowerCase?.() ? pillar.toLowerCase() : pillar] ?? scores?.[pillar] ?? 0);
  return [...pillars].sort((left, right) => {
    const leftScore = toScore(left);
    const rightScore = toScore(right);
    const leftWeight = getRoleWeightForPillar(roleRouting, left);
    const rightWeight = getRoleWeightForPillar(roleRouting, right);

    const leftPriority = leftScore - leftWeight * 12;
    const rightPriority = rightScore - rightWeight * 12;

    if (leftPriority !== rightPriority) return leftPriority - rightPriority;
    return leftScore - rightScore;
  });
};
