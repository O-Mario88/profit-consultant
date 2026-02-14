import { LibraryItem, PillarId, SignalTag } from '../../types';

const allSizes = ['all' as any];
const allSeverity = ['Critical', 'Watch', 'Stable', 'Strong', 'Emergency'] as Array<
  'Critical' | 'Watch' | 'Stable' | 'Strong' | 'Emergency'
>;

type PillarLibraryBank = {
  code: string;
  pillar: PillarId;
  signalTags: SignalTag[];
  strengths: string[];
  leaks: string[];
  kpis: string[];
  hooks: string[];
  missionBrief: string;
};

const makeItem = (
  id: string,
  pillar: PillarId,
  signal_tags: SignalTag[],
  type: LibraryItem['type'],
  text: string,
  severity_fit: LibraryItem['severity_fit'] = allSeverity
): LibraryItem => ({
  id,
  industry: 'retail',
  line_type: ['all'],
  pillar,
  signal_tags,
  severity_fit,
  business_size_fit: allSizes,
  text,
  type
});

const BANKS: PillarLibraryBank[] = [
  {
    code: 'P1_OFFER',
    pillar: 'Leadership',
    signalTags: ['assortment_confusion', 'pricing_inconsistency', 'bundle_blindspot', 'slow_mover_attachment'],
    strengths: [
      'We run a balanced mix: fast-movers (accessories), anchors (phones), and margin boosters (services).',
      'We price with margin bands (good, better, best) instead of copy-competitor pricing.',
      'We treat accessories as a system (bundles, attach rules, planograms), not random hooks.',
      'We separate New, Used, and Refurb with clear grading and pricing logic.',
      'We use regional demand cues (network compatibility, power reliability, and use-case demand) in assortment decisions.'
    ],
    leaks: [
      'Everything-to-everyone assortment creates a dead stock cemetery and weak inventory velocity.',
      'No pricing rules leads to discount culture and erodes contribution margin on every basket.',
      'Used phones with unclear grading increase returns, disputes, and reputation tax.',
      'Unstructured accessory strategy creates an accessory attach leak and low AOV growth.',
      'Buying supplier deals instead of real demand locks working capital in slow movers.'
    ],
    kpis: [
      'Gross margin percent by category (phones versus accessories versus repairs).',
      'Accessory attach rate (accessory units per phone sold).',
      'Average order value (AOV).',
      'Category mix share (percentage revenue from high-margin categories).',
      'Markdown percent (discounts as percentage of sales).',
      'Dead stock rate (percentage inventory above aging threshold).',
      'Trade-in margin (resale profit after refurb costs).'
    ],
    hooks: [
      'Dead Stock Cemetery',
      'Accessory Attach Leak',
      'Discount Addiction',
      'Trade-In Blind Spot'
    ],
    missionBrief:
      'Offer and merchandising in electronics retail is a control system, not a display activity. Margin-safe assortment, grading discipline, and bundle architecture determine whether traffic converts into compounding profit or margin mirage.'
  },
  {
    code: 'P2_MARKETING',
    pillar: 'Innovation',
    signalTags: ['no_testing_rhythm', 'offer_measurement_gap', 'no_market_feedback_loop', 'followup_gap'],
    strengths: [
      'We show up where buyers search: maps, listings, reviews, and direct contact channels.',
      'We run trust-led messaging via WhatsApp or Telegram with warranty and receipt proof.',
      'We use short proof content (repairs before-after, testing proof, usage demos).',
      'We track campaign ROI by source (walk-ins, calls, DMs, marketplace, web).',
      'We build partnerships with schools, offices, SMEs, and local communities for steady demand.'
    ],
    leaks: [
      'Marketing as occasional posting creates awareness noise without demand control.',
      'Offer design without clear angles forces price-war positioning and weak lead quality.',
      'No channel tracking means customer acquisition spend cannot be optimized.',
      'Trust proof is inconsistent, so customers defer or bargain instead of closing.',
      'No lead capture routine causes silent leakage of high-intent buyers.'
    ],
    kpis: [
      'Lead volume by channel (calls, DMs, walk-ins, marketplace).',
      'Lead-to-sale conversion rate.',
      'Cost per lead and cost per sale.',
      'Review velocity (new reviews per week) and review rating.',
      'Repeat customer rate.',
      'Promo redemption rate.'
    ],
    hooks: [
      'Walk-in Waste',
      'Review Starvation',
      'Counterfeit Reputation Tax',
      'Margin Mirage'
    ],
    missionBrief:
      'Demand generation in this sub-industry wins on proof, response cadence, and channel math. The objective is not noise; it is qualified lead flow that converts at protected margin.'
  },
  {
    code: 'P3_SALES',
    pillar: 'Market',
    signalTags: ['service_inconsistency', 'bundle_engine_missing', 'value_story_gap', 'discounting_leak'],
    strengths: [
      'We sell with diagnosis (use case, budget, risk) instead of feature dumping.',
      'We run consistent upsell rules (protector, case, charger, warranty options).',
      'Checkout follows a standard: accessory check, setup options, warranty clarity, receipt, and review ask.',
      'We coach objection handling for price, authenticity, battery health, and warranty confidence.',
      'We provide structured trade-in and financing explanations with transparent terms.'
    ],
    leaks: [
      'Staff show products but do not lead qualification or close structure.',
      'Discounts become the only closing tool, increasing price dependency.',
      'No scripts leads to inconsistent customer experience across shifts.',
      'Weak qualification drives returns and post-sale disputes.',
      'No abandoned-inquiry follow-up reduces conversion on existing lead flow.'
    ],
    kpis: [
      'Conversion rate (visitors and leads to purchases).',
      'Attach rate and bundle penetration percent.',
      'Return rate by category and by representative.',
      'Warranty attach percent.',
      'Time-to-close per transaction.',
      'Quote-to-sale conversion for DMs and calls.'
    ],
    hooks: [
      'Discount Addiction',
      'Walk-in Waste',
      'Return Spiral',
      'Unpriced Labor Loss'
    ],
    missionBrief:
      'Sales conversion in phone and electronics retail is a discipline game: qualification depth, offer structure, and checkout consistency. Closing without system control increases future refunds, disputes, and margin drag.'
  },
  {
    code: 'P4_OPERATIONS',
    pillar: 'Operations',
    signalTags: ['inventory_accuracy_gap', 'no_standard_work', 'supplier_doc_gap', 'shrinkage_leak'],
    strengths: [
      'We run cycle counts (small and frequent) instead of annual panic stock takes.',
      'High-value items have tighter controls (secure storage, access logs, dual sign-off).',
      'Used phones pass a standard test protocol (battery, camera, mic, charging, screen).',
      'Used-device intake includes IMEI and device-status checks where available.',
      'Repairs follow a tracked flow: intake, quote, approval, repair, QA, handover.'
    ],
    leaks: [
      'Stock records drift from physical truth, causing phantom inventory and false availability.',
      'Accessories walk away silently where shrink controls are loose.',
      'Repairs managed informally create rework loops, disputes, and lost parts.',
      'Weak intake testing on used phones drives early failure and returns.',
      'No incident logging prevents pattern-level control of recurring losses.'
    ],
    kpis: [
      'Inventory accuracy percent (system versus physical).',
      'Shrink rate (unexplained loss percent).',
      'Stockout rate on top sellers.',
      'Repair turnaround time.',
      'Repair first-time-fix rate.',
      'Rework and redo rate.',
      'Parts usage variance (expected versus actual).'
    ],
    hooks: [
      'Phantom Inventory',
      'Silent Shrink Tax',
      'Repair Rework Loop',
      'Parts Leakage',
      'IMEI Risk Exposure'
    ],
    missionBrief:
      'Operations in this model must protect inventory truth, custody chain, and repair flow integrity every day. The fastest way to lose margin is informal movement of stock, parts, and repair decisions.'
  },
  {
    code: 'P5_FINANCE',
    pillar: 'Money',
    signalTags: ['pricing_margin_blindspot', 'discounting_leak', 'cash_recon_gap', 'payment_terms_risk'],
    strengths: [
      'Every sale is recorded and cash-POS balances are reconciled daily.',
      'True margins include refurb costs, labor, payment fees, and warranty burden.',
      'Revenue and profit are separated in reporting, and cashflow is reviewed weekly.',
      'Card and digital payments follow baseline merchant-security expectations (PCI mindset).',
      'Refund and chargeback handling includes evidence discipline and approval controls.'
    ],
    leaks: [
      'Profit is estimated from cash movement instead of true unit economics.',
      'Untracked discounting silently erodes margin quality.',
      'Supplier credit terms are unmanaged, creating late fees and restock interruptions.',
      'Chargebacks and fraud rise when evidence and controls are inconsistent.',
      'Owner and business cash boundaries blur, reducing forecast clarity.'
    ],
    kpis: [
      'Daily gross profit (not sales only).',
      'Net margin percent after all direct and indirect costs.',
      'Cash conversion cycle (inventory days plus receivable days minus payable days).',
      'Discount percent of sales.',
      'Payment fee percent and chargeback rate.',
      'Expense ratio (OPEX as percent of revenue).',
      'Supplier aging (due and overdue payables).'
    ],
    hooks: [
      'Margin Mirage',
      'Chargeback Bleeding',
      'Untracked Cash Drift',
      'Supplier Trap Pricing',
      'No-Receipt Chaos'
    ],
    missionBrief:
      'Finance control in electronics retail is about protecting gross profit reality, not just top-line movement. Pricing discipline, reconciliation cadence, and fraud controls are mandatory for survivable cashflow.'
  },
  {
    code: 'P6_PEOPLE',
    pillar: 'People',
    signalTags: ['role_clarity_gap', 'training_gap', 'incentive_misalignment', 'accountability_soft'],
    strengths: [
      'Roles are clear across sales, repairs, inventory, and cashier workflows.',
      'Teams train weekly on product updates, scripts, and fraud awareness.',
      'Incentives reward profit-safe behavior (attach rate, low returns, quality reviews), not just volume.',
      'SOPs are audited with coaching and evidence, not reactive blame.',
      'Shift planning matches traffic patterns and skills coverage.'
    ],
    leaks: [
      'Everyone-does-everything creates ownership gaps and hidden errors.',
      'Freestyle service causes inconsistent outcomes and repeat complaints.',
      'Volume-only incentives encourage discounting and poor-fit selling.',
      'High turnover resets capability and weakens continuity.',
      'No onboarding structure increases early-stage mistakes and rework.'
    ],
    kpis: [
      'Sales per staff hour.',
      'Profit per staff hour.',
      'Attach rate per representative.',
      'Return rate per representative.',
      'Training completion rate.',
      'Mystery-shop quality score.',
      'Absenteeism and turnover rate.'
    ],
    hooks: [
      'Hero Staff Dependence',
      'Scriptless Selling',
      'Incentive Misfire',
      'Training-by-Shadowing Drift'
    ],
    missionBrief:
      'People execution quality determines whether systems hold under pressure. The objective is repeatable behavior by role, not hero-based firefighting.'
  },
  {
    code: 'P7_TRUST',
    pillar: 'Risk',
    signalTags: ['policy_vagueness', 'complaint_handling_gap', 'followup_gap', 'supplier_doc_gap'],
    strengths: [
      'Warranty and returns policy is clear, visible, and documented at sale.',
      'Review requests and issue resolution follow a consistent routine.',
      'Repairs include transparent pricing and QA proof before handover.',
      'Customer education includes long-term care and repairability choices.',
      'Follow-up cadence converts one-time buyers into repeat demand.'
    ],
    leaks: [
      'No-returns culture damages reputation and referral growth.',
      'Warranty ambiguity causes disputes and avoidable refunds.',
      'No post-purchase follow-up lowers repeat rate and lifetime value.',
      'Single bad used-phone experience can trigger trust collapse.',
      'Data-transfer and consent handling gaps create legal and reputational risk.'
    ],
    kpis: [
      'Repeat purchase rate.',
      'Referral rate.',
      'Review rating and response time.',
      'Complaint resolution time.',
      'Warranty claim rate.',
      'Return reason breakdown.',
      'Customer lifetime value proxy (repeat plus referral value).'
    ],
    hooks: [
      'Warranty Time Bomb',
      'Counterfeit Reputation Tax',
      'Return Spiral',
      'Review Starvation',
      'Trust Collapse Moment'
    ],
    missionBrief:
      'Customer trust is a risk-control pillar in this category. Policy clarity, proof-at-handover, and complaint closure speed directly influence referrals, returns, and long-term margin quality.'
  }
];

const baseRows: LibraryItem[] = BANKS.flatMap((bank) => {
  const strengthItems = bank.strengths.map((text, idx) =>
    makeItem(
      `LIB_ELECTRONICS_${bank.code}_STR_${String(idx + 1).padStart(2, '0')}`,
      bank.pillar,
      bank.signalTags,
      'strength',
      text,
      ['Stable', 'Strong']
    )
  );

  const leakItems = bank.leaks.map((text, idx) =>
    makeItem(
      `LIB_ELECTRONICS_${bank.code}_LEAK_${String(idx + 1).padStart(2, '0')}`,
      bank.pillar,
      bank.signalTags,
      'leak',
      text,
      ['Critical', 'Watch', 'Emergency']
    )
  );

  const kpiItems = bank.kpis.map((text, idx) =>
    makeItem(
      `LIB_ELECTRONICS_${bank.code}_KPI_${String(idx + 1).padStart(2, '0')}`,
      bank.pillar,
      bank.signalTags,
      'kpi',
      text,
      allSeverity
    )
  );

  const hookItems = bank.hooks.map((text, idx) =>
    makeItem(
      `LIB_ELECTRONICS_${bank.code}_HOOK_${String(idx + 1).padStart(2, '0')}`,
      bank.pillar,
      bank.signalTags,
      'hook',
      text,
      allSeverity
    )
  );

  const mission = makeItem(
    `LIB_ELECTRONICS_${bank.code}_MISSION`,
    bank.pillar,
    bank.signalTags,
    'mission_brief',
    bank.missionBrief,
    allSeverity
  );

  return [...strengthItems, ...leakItems, ...kpiItems, ...hookItems, mission];
});

const globalPracticeNotes: LibraryItem[] = [
  makeItem(
    'LIB_ELECTRONICS_GLOBAL_NOTE_01',
    'Risk',
    ['supplier_doc_gap', 'traceability_gap'],
    'mission_brief',
    'Used-device intake requires device status checks (IMEI and MEID when available) to reduce stolen-device and fraud exposure.'
  ),
  makeItem(
    'LIB_ELECTRONICS_GLOBAL_NOTE_02',
    'Money',
    ['cash_recon_gap', 'contract_gap'],
    'mission_brief',
    'Card and digital payment handling should align to baseline PCI DSS expectations for any operation that stores, processes, or transmits card data.'
  ),
  makeItem(
    'LIB_ELECTRONICS_GLOBAL_NOTE_03',
    'Risk',
    ['policy_vagueness', 'value_story_gap'],
    'mission_brief',
    'Repairability is now a buyer decision factor in many markets; warranty clarity, repair options, and battery-repair labels influence trust and conversion.'
  )
];

const profitLeakVocabulary: Array<{ text: string; pillar: PillarId; tags: SignalTag[] }> = [
  { text: 'Silent Shrink Tax', pillar: 'Operations', tags: ['shrinkage_leak'] },
  { text: 'Dead Stock Cemetery', pillar: 'Leadership', tags: ['assortment_confusion'] },
  { text: 'Accessory Attach Leak', pillar: 'Market', tags: ['bundle_engine_missing'] },
  { text: 'Discount Addiction', pillar: 'Money', tags: ['discounting_leak'] },
  { text: 'Warranty Time Bomb', pillar: 'Risk', tags: ['policy_vagueness'] },
  { text: 'Counterfeit Reputation Tax', pillar: 'Risk', tags: ['supplier_doc_gap'] },
  { text: 'IMEI Risk Exposure', pillar: 'Operations', tags: ['supplier_doc_gap'] },
  { text: 'Chargeback Bleeding', pillar: 'Money', tags: ['cash_recon_gap'] },
  { text: 'Margin Mirage', pillar: 'Money', tags: ['pricing_margin_blindspot'] },
  { text: 'Supplier Trap Pricing', pillar: 'Money', tags: ['payment_terms_risk'] },
  { text: 'Phantom Inventory', pillar: 'Operations', tags: ['inventory_accuracy_gap'] },
  { text: 'Repair Rework Loop', pillar: 'Operations', tags: ['no_standard_work'] },
  { text: 'Parts Leakage', pillar: 'Operations', tags: ['returns_damage_blindspot'] },
  { text: 'Untracked Cash Drift', pillar: 'Money', tags: ['cash_recon_gap'] },
  { text: 'Walk-in Waste', pillar: 'Market', tags: ['followup_gap'] },
  { text: 'Review Starvation', pillar: 'Risk', tags: ['complaint_handling_gap'] },
  { text: 'Return Spiral', pillar: 'Risk', tags: ['policy_vagueness'] },
  { text: 'No-Receipt Chaos', pillar: 'Money', tags: ['contract_gap'] },
  { text: 'Unpriced Labor Loss', pillar: 'Market', tags: ['service_inconsistency'] },
  { text: 'Trade-In Blind Spot', pillar: 'Leadership', tags: ['pricing_inconsistency'] }
];

const vocabularyItems: LibraryItem[] = profitLeakVocabulary.map((row, idx) =>
  makeItem(
    `LIB_ELECTRONICS_PROFIT_LEAK_VOCAB_${String(idx + 1).padStart(2, '0')}`,
    row.pillar,
    row.tags,
    'hook',
    row.text,
    ['Watch', 'Critical', 'Emergency', 'Stable', 'Strong']
  )
);

const roleTitleMasterList = makeItem(
  'LIB_ELECTRONICS_ROLE_TITLE_MASTER',
  'People',
  ['role_clarity_gap', 'training_gap'],
  'mission_brief',
  [
    'Role title library for routing and ownership in electronics retail:',
    'Owner, Founder, Managing Director, General Manager, Store Manager, Assistant Manager, Floor Supervisor, Shift Lead, Sales Associate, Senior Sales Rep, B2B Sales Rep, Corporate Sales Executive, Account Manager, Customer Service Rep, Cashier or POS Attendant, Inventory Controller, Stock Clerk, Receiving Officer, Procurement Officer, Sourcing Specialist, Vendor Relations Lead, Warehouse or Backroom Lead, Merchandiser, Pricing Analyst, Product Specialist (Android or iPhone), Accessories Specialist, Refurb or Used Phones Specialist, Trade-In Specialist, Device Tester or QA Technician, Phone Repair Technician, Microsoldering Technician, Screen Technician, Battery Technician, Software or Flashing Technician, Data Transfer Technician, Warranty and Returns Officer, Claims Officer, Fraud and Risk Officer, Loss Prevention Officer, E-commerce Manager, Marketplace Manager, Social Media Manager, Content Creator, Performance Marketer, Partnerships Lead, Delivery Coordinator, Accountant or Bookkeeper, Finance Manager, Compliance Officer, IT Support or POS Admin.',
    'Use title routing to map owner role by pillar: Offer, Marketing, Sales, Operations, Finance, People, and Trust.'
  ].join(' '),
  allSeverity
);

export const library: LibraryItem[] = [
  ...baseRows,
  ...globalPracticeNotes,
  ...vocabularyItems,
  roleTitleMasterList
];
