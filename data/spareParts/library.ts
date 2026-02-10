import { LibraryItem, PillarId, SignalTag } from '../../types';

const allSizes = ['all' as any];
const allSeverity = ['Critical', 'Watch', 'Stable', 'Strong', 'Emergency'] as Array<'Critical' | 'Watch' | 'Stable' | 'Strong' | 'Emergency'>;

type LeakRow = {
  id: string;
  pillar: PillarId;
  signal_tags: SignalTag[];
  hook: string;
  leak: string;
  cost: string;
  cliffhanger: string;
  kpi: string;
  actionPack?: string;
};

const pillarStrengthRows: Array<{
  pillar: PillarId;
  strength: string;
  hook: string;
  kpi: string;
}> = [
  {
    pillar: 'Operations',
    strength: 'Parts are controlled by fitment logic, fast movers are protected, and receiving, binning, quoting, and returns follow standard routines.',
    hook: 'Fitment-to-Dispatch Control',
    kpi: 'Wrong-fit %, Top-50 stockouts/week, Stock accuracy %, Time-to-quote'
  },
  {
    pillar: 'Money',
    strength: 'Category margin, discount bands, credit controls, and daily reconciliation keep cash and profit predictable.',
    hook: 'Margin-to-Cash Discipline',
    kpi: 'Margin by category, Discount %, Debtor aging, Dead stock UGX, Recon variance'
  },
  {
    pillar: 'Market',
    strength: 'Mechanics and garages are managed as accounts with fast response, fitment confidence, and trust proof.',
    hook: 'Repeat Garage Engine',
    kpi: 'Repeat mechanic rate %, Response time, Quote-to-sale %'
  },
  {
    pillar: 'Leadership',
    strength: 'Roles and approval limits are clear, KPI cadence is active, and recurring leak patterns are closed systematically.',
    hook: 'Cadence Over Firefighting',
    kpi: 'KPI review compliance, Decision latency, Repeat incident rate'
  },
  {
    pillar: 'Innovation',
    strength: 'Job kits, model catalogs, delivery, and micro-tests are used to grow AOV and capture urgent demand.',
    hook: 'Solution-Sell Growth Loop',
    kpi: 'Bundle adoption %, Catalog completeness %, Test-to-scale ratio'
  },
  {
    pillar: 'Risk',
    strength: 'Authenticity checks, warranty terms, dispute-proof evidence, and high-value stock controls protect trust and margin.',
    hook: 'Trust and Dispute Firewall',
    kpi: 'Counterfeit flags, Warranty dispute %, Theft/shrink %, Wrong-part disputes'
  },
  {
    pillar: 'People',
    strength: 'Fitment scripts, onboarding, and incentive alignment create consistent service quality across shifts.',
    hook: 'Accuracy-First Team System',
    kpi: 'Wrong-fit by staff, Discount by staff, Margin/staff/day, Training completion %'
  }
];

const leakRows: LeakRow[] = [
  {
    id: 'OPS_01',
    pillar: 'Operations',
    signal_tags: ['no_standard_work', 'training_gap', 'inventory_accuracy_gap'],
    hook: 'Fitment Roulette',
    leak: 'Wrong-fit sales recur because compatibility checks are inconsistent or person-dependent.',
    cost: 'Wrong-part disputes create refund cost, counter-time waste, and repeat-customer erosion.',
    cliffhanger: 'Fix Mode installs fitment checklist discipline and model-based fitment sheets.',
    kpi: 'Wrong-fit incident rate %, Dispute count/week',
    actionPack: 'OPS-P1'
  },
  {
    id: 'OPS_02',
    pillar: 'Operations',
    signal_tags: ['stockout_tax', 'restock_delay'],
    hook: 'Stockout Tax',
    leak: 'Fast-moving parts run out during urgent demand windows, driving walkaways and mechanic migration.',
    cost: 'Stockout losses compound because urgent customers switch shops instantly.',
    cliffhanger: 'Fix Mode secures Top-50 fast movers with min-max and supplier cadence.',
    kpi: 'Top-50 stockouts/week, Lost-sale incidents',
    actionPack: 'OPS-P2'
  },
  {
    id: 'OPS_03',
    pillar: 'Operations',
    signal_tags: ['inventory_accuracy_gap', 'receiving_slippage'],
    hook: 'SKU Fog / Bin Chaos',
    leak: 'Parts exist but cannot be found quickly due to weak bin and SKU location discipline.',
    cost: 'Search delays at the counter convert into lost sales and perceived stockouts.',
    cliffhanger: 'Fix Mode builds SKU and bin truth so parts are found in seconds.',
    kpi: 'Stock accuracy %, Time-to-find/time-to-quote',
    actionPack: 'OPS-P3'
  },
  {
    id: 'OPS_04',
    pillar: 'Operations',
    signal_tags: ['policy_vagueness', 'contract_gap', 'shrinkage_leak'],
    hook: 'Return Recycle Leak',
    leak: 'Returned parts re-enter shelves without quarantine and condition grading controls.',
    cost: 'Inventory contamination leads to repeated refunds and trust damage.',
    cliffhanger: 'Fix Mode enforces returns quarantine and condition grading SOP.',
    kpi: 'Return recycle incidents, Return dispute rate',
    actionPack: 'OPS-P4'
  },
  {
    id: 'OPS_05',
    pillar: 'Operations',
    signal_tags: ['restock_delay', 'purchase_panic'],
    hook: 'Procurement Lag',
    leak: 'Reorder timing and supplier lead-time control are weak, causing repeated stock gaps.',
    cost: 'Procurement lag converts urgent demand into competitor revenue.',
    cliffhanger: 'Fix Mode maps lead times and installs reorder timing discipline.',
    kpi: 'Reorder compliance %, Procurement lead time',
    actionPack: 'OPS-P2'
  },

  {
    id: 'MNY_01',
    pillar: 'Money',
    signal_tags: ['pricing_margin_blindspot', 'category_margin_blindspot'],
    hook: 'Margin Mirage',
    leak: 'Sales volume is active, but category-level profit leaks through discounts, returns, and uncontrolled costs.',
    cost: 'Busy days can still produce weak cash when category economics are invisible.',
    cliffhanger: 'Fix Mode builds category margin map and weekly leak review.',
    kpi: 'Gross margin by category, Net margin estimate',
    actionPack: 'MNY-P1'
  },
  {
    id: 'MNY_02',
    pillar: 'Money',
    signal_tags: ['discounting_leak', 'pricing_inconsistency'],
    hook: 'Bargain Drift',
    leak: 'Pricing outcomes vary by person and pressure, weakening margin predictability.',
    cost: 'Negotiation-led discounting trains customers to expect lower prices.',
    cliffhanger: 'Fix Mode enforces discount bands and negotiation scripts.',
    kpi: 'Discount rate %, Price variance',
    actionPack: 'MNY-P2'
  },
  {
    id: 'MNY_03',
    pillar: 'Money',
    signal_tags: ['credit_terms_risk', 'payment_delay_chokehold'],
    hook: 'Credit Sink',
    leak: 'Garage credit grows without strong limits and collections cadence.',
    cost: 'Cash gets trapped in receivables, weakening restock power.',
    cliffhanger: 'Fix Mode sets credit tiers and overdue cutoff enforcement.',
    kpi: 'Credit outstanding, Aging buckets, DSO',
    actionPack: 'MNY-P3'
  },
  {
    id: 'MNY_04',
    pillar: 'Money',
    signal_tags: ['cash_recon_gap', 'shrinkage_leak'],
    hook: 'Cash Drawer Drift / Momo Fog',
    leak: 'Cash and momo variances are not closed tightly, allowing daily leakage to normalize.',
    cost: 'Unresolved daily variances become persistent monthly losses.',
    cliffhanger: 'Fix Mode locks daily reconciliation and variance reason control.',
    kpi: 'Daily recon variance UGX, Shrinkage %',
    actionPack: 'MNY-P4'
  },
  {
    id: 'MNY_05',
    pillar: 'Money',
    signal_tags: ['slow_mover_attachment', 'purchase_panic'],
    hook: 'Dead Stock Jail',
    leak: 'Slow and rare parts hold cash too long while high-turn parts starve.',
    cost: 'Dead stock blocks growth and forces late discounting.',
    cliffhanger: 'Fix Mode launches dead-stock release and cash-recovery plans.',
    kpi: 'Dead stock UGX, Inventory turns',
    actionPack: 'MNY-P5'
  },

  {
    id: 'MKT_01',
    pillar: 'Market',
    signal_tags: ['weak_onboarding', 'followup_gap'],
    hook: 'WhatsApp Blackhole',
    leak: 'Urgent inquiries are answered slowly or inconsistently, losing high-intent buyers.',
    cost: 'Delayed response directly reduces quote conversion in time-sensitive parts demand.',
    cliffhanger: 'Fix Mode installs response SLA and quote template speed controls.',
    kpi: 'Response time minutes, Quote-to-sale conversion %',
    actionPack: 'MKT-P4'
  },
  {
    id: 'MKT_02',
    pillar: 'Market',
    signal_tags: ['weak_proof_pack', 'supplier_doc_gap'],
    hook: 'Trust Gap',
    leak: 'Authenticity and warranty confidence are not proven consistently at point of sale.',
    cost: 'Trust gaps increase hesitation, bargaining pressure, and walkaways.',
    cliffhanger: 'Fix Mode deploys authenticity proof and warranty clarity routines.',
    kpi: 'Trust dispute rate, Conversion rate',
    actionPack: 'MKT-P2'
  },
  {
    id: 'MKT_03',
    pillar: 'Market',
    signal_tags: ['channel_dependency', 'low_repeat_orders', 'followup_gap'],
    hook: 'Mechanic Migration',
    leak: 'Mechanic and garage relationships are not managed with account discipline.',
    cost: 'Repeat bulk demand leaks to faster, more reliable competitors.',
    cliffhanger: 'Fix Mode builds garage account engine and preference-based follow-ups.',
    kpi: 'Repeat mechanic rate %, Retention %',
    actionPack: 'MKT-P1'
  },
  {
    id: 'MKT_04',
    pillar: 'Market',
    signal_tags: ['offer_measurement_gap', 'bundle_engine_missing', 'weak_onboarding'],
    hook: 'Catalog Gap',
    leak: 'Without model-based catalog assets, quoting is slow and inconsistent.',
    cost: 'Catalog gaps create delay-based losses and conversion friction.',
    cliffhanger: 'Fix Mode builds top-model catalog and common jobs menu.',
    kpi: 'Catalog completeness %, Time-to-quote',
    actionPack: 'MKT-P3'
  },

  {
    id: 'LDR_01',
    pillar: 'Leadership',
    signal_tags: ['kpi_cadence_gap'],
    hook: 'KPI Darkness',
    leak: 'Wrong-fit, returns, debtors, shrink, and stockouts are not visible in a weekly control rhythm.',
    cost: 'Leak detection happens too late, increasing loss size.',
    cliffhanger: 'Fix Mode installs KPI wall and owner-anchored weekly reviews.',
    kpi: 'KPI review compliance %, Repeat leak trend',
    actionPack: 'LDR-P1'
  },
  {
    id: 'LDR_02',
    pillar: 'Leadership',
    signal_tags: ['approval_bottleneck', 'decision_bottleneck'],
    hook: 'Approval Bottleneck',
    leak: 'Routine exceptions wait for one decision-maker, slowing counter speed and resolution.',
    cost: 'Decision latency creates missed sales and customer frustration.',
    cliffhanger: 'Fix Mode defines approval limits and tracks latency.',
    kpi: 'Decision latency, Approval backlog',
    actionPack: 'LDR-P2'
  },
  {
    id: 'LDR_03',
    pillar: 'Leadership',
    signal_tags: ['no_variance_review', 'training_planning_gap'],
    hook: 'Repeat Leak Tax',
    leak: 'The same wrong-fit, pricing, and dispute patterns recur because fixes do not become standards.',
    cost: 'Repeat leak tax consumes margin and team attention every week.',
    cliffhanger: 'Fix Mode enforces weekly standard audits and no-repeat closure.',
    kpi: 'Repeat incident rate %, SOP adherence score',
    actionPack: 'LDR-P3'
  },

  {
    id: 'INN_01',
    pillar: 'Innovation',
    signal_tags: ['bundle_engine_missing'],
    hook: 'Bundle Blindness',
    leak: 'Single-part selling dominates where job kits could lift basket value and speed.',
    cost: 'Without kits, AOV and solution confidence remain under-optimized.',
    cliffhanger: 'Fix Mode launches top job kits and bundle pricing tests.',
    kpi: 'Bundle adoption %, AOV',
    actionPack: 'INN-P1'
  },

  {
    id: 'RSK_01',
    pillar: 'Risk',
    signal_tags: ['supplier_doc_gap', 'supplier_selection_undisciplined'],
    hook: 'Counterfeit Landmine',
    leak: 'Supplier verification gaps expose the shop to authenticity incidents.',
    cost: 'One counterfeit complaint can trigger outsized refund and trust damage.',
    cliffhanger: 'Fix Mode hardens supplier authenticity firewall and evidence archive.',
    kpi: 'Counterfeit flags, Supplier quality score',
    actionPack: 'RSK-P1'
  },
  {
    id: 'RSK_02',
    pillar: 'Risk',
    signal_tags: ['policy_vagueness', 'contract_gap'],
    hook: 'Warranty Ambush',
    leak: 'Warranty terms and claim decisions vary by person or situation.',
    cost: 'Inconsistent warranty handling increases dispute cost and reputational drag.',
    cliffhanger: 'Fix Mode standardizes warranty policy and claims SOP.',
    kpi: 'Warranty claim rate %, Warranty dispute %',
    actionPack: 'RSK-P2'
  },
  {
    id: 'RSK_03',
    pillar: 'Risk',
    signal_tags: ['shrinkage_leak'],
    hook: 'Theft Tax',
    leak: 'Small, high-value items are insufficiently controlled and disappear quietly.',
    cost: 'Shrink accumulates as silent margin erosion.',
    cliffhanger: 'Fix Mode applies lock-log-access controls and shrink audits.',
    kpi: 'Shrinkage %, Theft incidents',
    actionPack: 'RSK-P3'
  },
  {
    id: 'RSK_04',
    pillar: 'Risk',
    signal_tags: ['contract_gap', 'policy_vagueness', 'no_standard_work'],
    hook: 'Wrong-Part Dispute Tax',
    leak: 'Proof and terms are weak, so wrong-fit disputes become costly negotiations.',
    cost: 'Dispute time, refunds, and stress stack into recurring margin loss.',
    cliffhanger: 'Fix Mode installs fitment-proof dispute defense flow.',
    kpi: 'Wrong-part disputes/week, Resolution time',
    actionPack: 'RSK-P4'
  },

  {
    id: 'PPL_01',
    pillar: 'People',
    signal_tags: ['training_gap', 'service_inconsistency', 'onboarding_gap'],
    hook: 'Scriptless Fitment',
    leak: 'Staff fitment questions vary by person, creating avoidable wrong-fit incidents.',
    cost: 'Inconsistent questioning leads to returns, disputes, and slower quote confidence.',
    cliffhanger: 'Fix Mode certifies fitment scripts and category guidance.',
    kpi: 'Wrong-fit by staff, Training completion %',
    actionPack: 'PPL-P1'
  },
  {
    id: 'PPL_02',
    pillar: 'People',
    signal_tags: ['incentive_misalignment', 'discounting_leak', 'accountability_soft'],
    hook: 'Discount Culture',
    leak: 'Staff behavior rewards fast close over margin quality and accuracy.',
    cost: 'Discount-first behavior compresses margin and raises dispute risk.',
    cliffhanger: 'Fix Mode aligns incentives to margin, low returns, and fitment quality.',
    kpi: 'Discount % by staff, Margin/staff/day',
    actionPack: 'PPL-P2'
  }
];

const toLibraryLeakItems = (row: LeakRow): LibraryItem[] => [
  {
    id: `LIB_SPARE_${row.id}_LEAK`,
    industry: 'retail',
    line_type: ['all'],
    pillar: row.pillar,
    signal_tags: row.signal_tags,
    severity_fit: allSeverity,
    business_size_fit: allSizes,
    text: row.leak,
    type: 'leak',
    hook_text: row.hook,
    cost_text: row.cost,
    cliffhanger_text: row.cliffhanger,
    kpi_text: row.kpi,
    fix_task_ids: row.actionPack ? [row.actionPack] : undefined
  },
  {
    id: `LIB_SPARE_${row.id}_HOOK`,
    industry: 'retail',
    line_type: ['all'],
    pillar: row.pillar,
    signal_tags: row.signal_tags,
    severity_fit: allSeverity,
    business_size_fit: allSizes,
    text: row.hook,
    type: 'hook',
    hook_text: row.hook,
    kpi_text: row.kpi,
    fix_task_ids: row.actionPack ? [row.actionPack] : undefined
  }
];

const strengthRows: LibraryItem[] = pillarStrengthRows.flatMap((row) => [
  {
    id: `LIB_SPARE_${row.pillar.toUpperCase()}_STR`,
    industry: 'retail',
    line_type: ['all'],
    pillar: row.pillar,
    signal_tags: [],
    severity_fit: ['Stable', 'Strong'],
    business_size_fit: allSizes,
    text: row.strength,
    type: 'strength',
    hook_text: row.hook,
    kpi_text: row.kpi
  },
  {
    id: `LIB_SPARE_${row.pillar.toUpperCase()}_KPI`,
    industry: 'retail',
    line_type: ['all'],
    pillar: row.pillar,
    signal_tags: [],
    severity_fit: allSeverity,
    business_size_fit: allSizes,
    text: row.kpi,
    type: 'kpi',
    kpi_text: row.kpi
  }
]);

const speciesBase = ['Spare parts & accessories shop', 'Spare Parts & Accessories Shop'];
const speciesBoda = 'Motorcycle parts (boda boda)';
const speciesCar = 'Car parts (general)';
const speciesTruck = 'Truck/bus/commercial vehicle parts';
const speciesTyre = 'Tyres & batteries specialty';
const speciesLubes = 'Lubricants/filters/consumables';
const speciesElec = 'Electronics & sensors (ECU, relays, bulbs, wiring)';
const speciesBody = 'Body parts & paint accessories';
const speciesTools = 'Tools & garage accessories';
const speciesWholesale = 'Wholesale spare parts distributor';
const speciesOnline = 'Online-first (WhatsApp/Delivery)';
const speciesGarage = 'Garage-linked shop (attached to mechanic workshop)';

const missionRowsForSpecies = (
  code: string,
  lineType: string[],
  texts: Record<PillarId, string>
): LibraryItem[] => {
  const pillars: PillarId[] = ['Operations', 'Money', 'Market', 'Leadership', 'Innovation', 'Risk', 'People'];
  return pillars.map((pillar) => ({
    id: `MB_SPARE_${code}_${pillar.toUpperCase()}`,
    industry: 'retail',
    line_type: lineType,
    pillar,
    signal_tags: [],
    severity_fit: allSeverity,
    business_size_fit: allSizes,
    text: texts[pillar],
    type: 'mission_brief'
  }));
};

const missionBriefRows: LibraryItem[] = [
  ...missionRowsForSpecies('S1', [speciesBoda], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Boda-parts demand is urgent, so fitment and stockout errors become immediate walkaway losses. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode locks fitment and fast-mover controls tied to {KPI}.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Discount and credit drift can make high-volume days low-margin. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs price and cash controls.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Rider and mechanic loyalty likely depends on speed and confidence under pressure. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds repeat account and response systems.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2}. Urgency may be replacing routines, causing repeat errors. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode enforces KPI and no-repeat cadence.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Kit-selling and fast catalog options may be underused. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode launches bundle and menu tests.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Counterfeit and wrong-part disputes are high-risk in fast-turn models. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode hardens authenticity and dispute proof.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2}. Fitment questioning and pricing discipline likely vary by staff. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode certifies scripts and incentives.'
  }),
  ...missionRowsForSpecies('S2', [speciesCar], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Car-parts conversion depends on fitment certainty and rapid locating. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs fitment and SKU-bin truth controls.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Margin drift often hides in discounting, returns, and slow stock. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds category margin and dead-stock release discipline.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Trust and response speed may be weakening quote conversion. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs authenticity proof and SLA routines.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2}. Decisions and standards may be too person-dependent. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode enforces owner-independent rules.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Catalog and kit leverage may be below potential. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode launches model-based offerings.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Warranty and dispute controls may be exposing margin and trust. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode hardens claims and proof workflows.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2}. Service quality may depend on individual experience over systems. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode standardizes scripts and onboarding.'
  }),
  ...missionRowsForSpecies('S3', [speciesTyre], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Tyre and battery models leak through fitment mismatch and stockout timing gaps. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode secures fast-moving fitment flow.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Margin loss often comes from discount pressure and warranty exceptions. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode protects margin with rules and claims controls.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Trust proof and rapid response likely determine close rates. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds proof-first conversion assets.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2}. Reactive approvals may be slowing sales throughput. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode sets decision limits.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Service package and pre-order leverage may be underused. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode launches service bundles.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Warranty and counterfeit exposure can escalate quickly in this category. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode hardens supplier and warranty firewalls.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2}. Staff behavior variance may be driving disputes and margin leakage. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode aligns incentives and scripts.'
  }),
  ...missionRowsForSpecies('S4', [speciesGarage], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Garage-linked operations leak when fitment, returns, and dispatch controls are informal. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode secures the workshop-to-counter flow.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Credit and discount leakage can erase workshop-linked demand advantage. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode enforces account and margin controls.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Built-in demand may still leak without account structure and service speed. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds repeat garage pipeline.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2}. Owner dependency may be limiting execution speed. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode sets delegated control and audit routines.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Job-kit and pre-order systems may be underdeveloped. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode launches practical upsell and fulfillment systems.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Workshop-linked returns and warranty disputes can escalate if policy evidence is weak. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode hardens dispute defense.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2}. Skill variance across counter and workshop may be causing repeat loss loops. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode certifies fitment and policy handling.'
  }),
  ...missionRowsForSpecies('S0', [
    ...speciesBase,
    speciesTruck,
    speciesLubes,
    speciesElec,
    speciesBody,
    speciesTools,
    speciesWholesale,
    speciesOnline
  ], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Spare-parts execution leaks usually start with fitment inconsistency and stock control gaps. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode runs a 7-day containment sprint and 30-day control build tied to {KPI}.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. This often creates Margin Mirage: strong activity with weak cash conversion and margin protection. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode enforces pricing, credit, and leak controls.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Urgent-buyer conversion and repeat garage loyalty may be leaking through speed and trust gaps. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode strengthens response, catalog, and account systems.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2}. The business may be reacting fast but paying repeat leak tax weekly. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode enforces KPI cadence and closure discipline.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Bundle and service innovation may be below your margin potential. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode launches job-kit and pre-order experiments.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Counterfeit, warranty, and dispute controls may be too informal for growth scale. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode hardens supplier and dispute firewalls.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2}. Script discipline and incentive alignment likely vary across staff. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode aligns certification and scorecards.'
  })
];

export const library: LibraryItem[] = [
  ...strengthRows,
  ...leakRows.flatMap(toLibraryLeakItems),
  ...missionBriefRows
];
