import { LibraryItem } from '../../types';

export const library: LibraryItem[] = [
  // OPERATIONS
  {
    id: 'LIB_MINING_OPS_LEAK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Operations',
    signal_tags: ['measurement_blindspot', 'flow_instability'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Production is happening, but control is weak: Pit-to-Scale Blindspot, Recovery Leak, and recurring Downtime Spiral are silently taxing every shipment.',
    type: 'leak',
    hook_text: 'Pit-to-Scale Blindspot',
    cost_text: 'Invisible recovery losses, fuel bleed, and unstable output quality.',
    cliffhanger_text: 'Fix Mode installs checkpoints, recovery audit discipline, and downtime prevention.',
    kpi_text: 'Tons/day vs plan, Recovery %, Downtime hours, Fuel/ton'
  },
  {
    id: 'LIB_MINING_OPS_STR',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Operations',
    signal_tags: ['measurement_blindspot'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'You run with measurement discipline: daily production board, recovery visibility, stockpile segregation, and bottleneck control that can scale without chaos.',
    type: 'strength'
  },
  {
    id: 'LIB_MINING_OPS_HOOK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Operations',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Recovery Leak',
    type: 'hook'
  },
  {
    id: 'LIB_MINING_OPS_KPI',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Operations',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Tons moved/day, Recovery rate, Downtime hours/week, Fuel per ton, Rehandling count, Segregation compliance',
    type: 'kpi'
  },

  // MONEY
  {
    id: 'LIB_MINING_MONEY_LEAK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Money',
    signal_tags: ['costing_gap', 'cashflow_visibility_gap'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Cash-Leak Culture is active: Ghost Costs, Buyer Price Trap, and Assay Shock are eroding margin while debt is used for survival.',
    type: 'leak',
    hook_text: 'Cash-Leak Culture',
    cost_text: 'Fuel and tool leakage, surprise deductions, and unpredictable shipment margins.',
    cliffhanger_text: 'Fix Mode builds cost-per-ton control, daily close discipline, and deduction-proof sales routines.',
    kpi_text: 'Cost/ton, Margin/shipment, Reconciliation misses, DSO, Unplanned spend %'
  },
  {
    id: 'LIB_MINING_MONEY_STR',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Money',
    signal_tags: ['costing_gap'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'You protect margin with cost-per-ton visibility, reconciled cash movements, benchmarked pricing, and planned compliance spending.',
    type: 'strength'
  },
  {
    id: 'LIB_MINING_MONEY_HOOK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Money',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Buyer Price Trap',
    type: 'hook'
  },
  {
    id: 'LIB_MINING_MONEY_KPI',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Money',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Cost per ton, Margin per shipment, Cash reconciliation misses, Fuel spend variance, Payment delay days, Unplanned spend ratio',
    type: 'kpi'
  },

  // MARKET
  {
    id: 'LIB_MINING_MARKET_LEAK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Market',
    signal_tags: ['channel_dependency', 'weak_proof_pack'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Market access is controlled by others: Single-Buyer Danger and Middleman Margin Capture rise when proof bundles are weak.',
    type: 'leak',
    hook_text: 'Middleman Margin Capture',
    cost_text: 'You absorb risk while others monetize your output through deductions and weak terms.',
    cliffhanger_text: 'Fix Mode installs evidence packs, terms discipline, and buyer diversification sprints.',
    kpi_text: 'Buyer concentration, Price vs benchmark, Dispute rate, Repeat buyer rate'
  },
  {
    id: 'LIB_MINING_MARKET_STR',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Market',
    signal_tags: ['channel_dependency'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'You negotiate from strength with multiple buyers, reliable shipment evidence, and consistent lots that reduce disputes.',
    type: 'strength'
  },
  {
    id: 'LIB_MINING_MARKET_HOOK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Market',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Single-Buyer Danger',
    type: 'hook'
  },
  {
    id: 'LIB_MINING_MARKET_KPI',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Market',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Buyer concentration %, Price vs benchmark, Dispute rate, Assay deduction variance, Repeat buyer rate, Terms coverage %',
    type: 'kpi'
  },

  // LEADERSHIP
  {
    id: 'LIB_MINING_LEAD_LEAK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Leadership',
    signal_tags: ['priority_whiplash', 'no_accountability_loop'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Firefighting Management dominates: No Owner Syndrome and Decision by Shouting keep the same losses repeating.',
    type: 'leak',
    hook_text: 'Firefighting Management',
    cost_text: 'Repeat mistakes, weak accountability, and output that depends on one hero being present.',
    cliffhanger_text: 'Fix Mode installs owner mapping, weekly KPI cadence, and closure tracking.',
    kpi_text: 'Weekly review compliance, action closure %, incident recurrence, owner completeness'
  },
  {
    id: 'LIB_MINING_LEAD_STR',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Leadership',
    signal_tags: ['no_accountability_loop'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'You run by system, not noise: owners are clear, reviews are weekly, decisions follow KPIs, and incidents feed learning loops.',
    type: 'strength'
  },
  {
    id: 'LIB_MINING_LEAD_HOOK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Leadership',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'No Owner Syndrome',
    type: 'hook'
  },
  {
    id: 'LIB_MINING_LEAD_KPI',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Leadership',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Weekly control compliance, Action closure rate, Incident recurrence, Target clarity score, Forecast accuracy',
    type: 'kpi'
  },

  // INNOVATION
  {
    id: 'LIB_MINING_INNOV_LEAK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Innovation',
    signal_tags: ['quality_definition_gap', 'no_product_testing_rhythm'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Low-Tech Trap persists: digging improves while processing and recovery discipline stay flat, capping value per ton.',
    type: 'leak',
    hook_text: 'Processing Gap',
    cost_text: 'More effort does not convert into higher value per ton, and downtime remains expensive.',
    cliffhanger_text: 'Fix Mode pilots one recovery upgrade and tracks measurable ROI within 30 days.',
    kpi_text: 'Improvements tested/month, Recovery delta %, Downtime reduction, Value/ton increase'
  },
  {
    id: 'LIB_MINING_INNOV_STR',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Innovation',
    signal_tags: ['no_product_testing_rhythm'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'You run controlled experiments that improve recovery, reduce rehandling, and increase value per ton with evidence.',
    type: 'strength'
  },
  {
    id: 'LIB_MINING_INNOV_HOOK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Innovation',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Low-Tech Trap',
    type: 'hook'
  },
  {
    id: 'LIB_MINING_INNOV_KPI',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Innovation',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Improvement actions tested/month, Recovery improvement %, Process compliance %, Value per ton increase %',
    type: 'kpi'
  },

  // RISK
  {
    id: 'LIB_MINING_RISK_LEAK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Risk',
    signal_tags: ['hygiene_drift', 'compliance_blocker_risk'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Safety Time Bomb and Compliance Trap are active; weak chain-of-custody makes theft, disputes, and shutdowns hard to defend.',
    type: 'leak',
    hook_text: 'Chain-of-Custody Hole',
    cost_text: 'One incident, compliance failure, or custody dispute can erase months of profit.',
    cliffhanger_text: 'Fix Mode installs safety routines, custody logs, and compliance readiness controls.',
    kpi_text: 'Safety incidents, Compliance readiness %, Custody compliance %, Audit trail completeness'
  },
  {
    id: 'LIB_MINING_RISK_STR',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Risk',
    signal_tags: ['traceability_gap'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'Risk is controlled through enforced safety routines, custody traceability, written terms, and audit-ready records.',
    type: 'strength'
  },
  {
    id: 'LIB_MINING_RISK_HOOK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Risk',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Safety Time Bomb',
    type: 'hook'
  },
  {
    id: 'LIB_MINING_RISK_KPI',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'Risk',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Safety incidents, Near misses, Compliance readiness score, Custody compliance, Theft/loss incidents, PPE compliance',
    type: 'kpi'
  },

  // PEOPLE
  {
    id: 'LIB_MINING_PEOPLE_LEAK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'People',
    signal_tags: ['training_gap', 'fear_index'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Skill Gap Drag and Silent Error Problem are visible; incentives reward speed while recovery, safety, and quality are under-managed.',
    type: 'leak',
    hook_text: 'Incentive Misfire',
    cost_text: 'Technique errors, hidden mistakes, and fatigue losses silently reduce recoverable profit.',
    cliffhanger_text: 'Fix Mode aligns incentives to recovery, introduces skill standards, and normalizes early error reporting.',
    kpi_text: 'Training pass rate, Handling error rate, Supervisor checklist completion, Crew discipline score'
  },
  {
    id: 'LIB_MINING_PEOPLE_STR',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'People',
    signal_tags: ['training_gap'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'Your team runs with clear roles, trained technique, recovery-aligned incentives, and a culture that surfaces errors early.',
    type: 'strength'
  },
  {
    id: 'LIB_MINING_PEOPLE_HOOK',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'People',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Skill Gap Drag',
    type: 'hook'
  },
  {
    id: 'LIB_MINING_PEOPLE_KPI',
    industry: 'mining',
    line_type: ['all'],
    pillar: 'People',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Training completion %, Handling error rate, Fatigue proxy hours/week, Supervisor checklist completion, Discipline score',
    type: 'kpi'
  },

  // MISSION BRIEF TEMPLATES
  {
    id: 'MB_MINING_GOLD_OPS',
    industry: 'mining',
    line_type: ['Artisanal Gold'],
    pillar: 'Operations',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Operations - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which usually means your gold is being lost between the pit, processing, and final sale - the classic Recovery Leak plus Pit-to-Scale Blindspot combination. Cost: {COST_IMPACT}. Cliffhanger: Start Fix Mode to install checkpoints and a recovery audit so you stop mining value you never get paid for.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GOLD_MONEY',
    industry: 'mining',
    line_type: ['Artisanal Gold'],
    pillar: 'Money',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Money - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - a pattern where cash moves fast but proof moves slow (Cash-Leak Culture). Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds a cost-per-ton and daily close routine so money stops disappearing in small spends.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GOLD_MARKET',
    industry: 'mining',
    line_type: ['Artisanal Gold'],
    pillar: 'Market',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Market - {STATUS}: We detected {LEAK_1} and {LEAK_2} - typically the Buyer Price Trap and Assay Shock risk. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode creates shipment evidence and clearer terms so deductions stop being a surprise tax.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GOLD_LEAD',
    industry: 'mining',
    line_type: ['Artisanal Gold'],
    pillar: 'Leadership',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Leadership - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2}, meaning output likely depends on who is present and how intense the day feels. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode assigns owners and installs weekly control meetings so results become predictable.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GOLD_INNOV',
    industry: 'mining',
    line_type: ['Artisanal Gold'],
    pillar: 'Innovation',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Innovation and Creativity - {STATUS}: We detected {LEAK_1} and {LEAK_2} - usually the Low-Tech Trap where digging increases but recovery does not. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode pilots one recovery improvement and tracks ROI.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GOLD_RISK',
    industry: 'mining',
    line_type: ['Artisanal Gold'],
    pillar: 'Risk',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - safety and custody gaps can destroy a gold site faster than low prices. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs safety routines and chain-of-custody logs that protect the operation.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GOLD_PEOPLE',
    industry: 'mining',
    line_type: ['Artisanal Gold'],
    pillar: 'People',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'People - {STATUS}: People signals show {LEAK_1} and {LEAK_2}, often indicating skill gaps and incentives that reward speed over recovery. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode aligns training and incentives to recovery and discipline.',
    type: 'mission_brief'
  },

  {
    id: 'MB_MINING_GEMS_OPS',
    industry: 'mining',
    line_type: ['Gemstones'],
    pillar: 'Operations',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Operations - {STATUS}: We detected {LEAK_1} and {LEAK_2}. In gemstones, a single handling mistake can destroy value. This usually indicates poor sorting discipline and uncontrolled stock movement. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs custody logs and handling rules so value is not destroyed before sale.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GEMS_MONEY',
    industry: 'mining',
    line_type: ['Gemstones'],
    pillar: 'Money',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Money - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Gemstone cashflows can look strong while profitability stays unclear due to untracked spends and leakages. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds a simple cost model and daily reconciliation.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GEMS_MARKET',
    industry: 'mining',
    line_type: ['Gemstones'],
    pillar: 'Market',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Market - {STATUS}: We detected {LEAK_1} and {LEAK_2}. The market punishes lack of documentation and consistency. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode creates proof packs and repeat-buyer reliability systems.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GEMS_LEAD',
    industry: 'mining',
    line_type: ['Gemstones'],
    pillar: 'Leadership',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Leadership - {STATUS}: Signals indicate {LEAK_1} and {LEAK_2}, meaning operations may be personality-driven rather than system-driven. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode assigns owners and weekly controls.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GEMS_INNOV',
    industry: 'mining',
    line_type: ['Gemstones'],
    pillar: 'Innovation',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Innovation and Creativity - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Sorting and value-preservation are your innovation levers here. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode pilots one value-preservation improvement and measures impact.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GEMS_RISK',
    industry: 'mining',
    line_type: ['Gemstones'],
    pillar: 'Risk',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Custody and compliance gaps can block better buyers. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds chain-of-custody documentation and readiness.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_GEMS_PEOPLE',
    industry: 'mining',
    line_type: ['Gemstones'],
    pillar: 'People',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'People - {STATUS}: People signals show {LEAK_1} and {LEAK_2}. Skill, discipline, and trust are value here. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode trains handling and installs accountability routines.',
    type: 'mission_brief'
  },

  {
    id: 'MB_MINING_3TS_OPS',
    industry: 'mining',
    line_type: ['3Ts (Tin/Tantalum/Coltan)'],
    pillar: 'Operations',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Operations - {STATUS}: We detected {LEAK_1} and {LEAK_2}. In 3Ts, recovery and segregation are everything. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs checkpoints and grade separation that protects value.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_3TS_MONEY',
    industry: 'mining',
    line_type: ['3Ts (Tin/Tantalum/Coltan)'],
    pillar: 'Money',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Money - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. 3Ts operations often suffer from price opacity and cash leakage. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds cost per ton, reconciliation discipline, and pricing benchmarks.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_3TS_MARKET',
    industry: 'mining',
    line_type: ['3Ts (Tin/Tantalum/Coltan)'],
    pillar: 'Market',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Market - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Traceability and compliance directly affect market access. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode strengthens documentation and buyer options.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_3TS_LEAD',
    industry: 'mining',
    line_type: ['3Ts (Tin/Tantalum/Coltan)'],
    pillar: 'Leadership',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Leadership - {STATUS}: Signals indicate {LEAK_1} and {LEAK_2}; system weakness shows up as repeat losses. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode assigns owners and control cadence.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_3TS_INNOV',
    industry: 'mining',
    line_type: ['3Ts (Tin/Tantalum/Coltan)'],
    pillar: 'Innovation',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Innovation and Creativity - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Simple processing discipline can raise value per ton. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode pilots one recovery improvement with measured ROI.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_3TS_RISK',
    industry: 'mining',
    line_type: ['3Ts (Tin/Tantalum/Coltan)'],
    pillar: 'Risk',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. 3Ts markets are sensitive to origin risk and documentation gaps. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds chain-of-custody and compliance readiness.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_3TS_PEOPLE',
    industry: 'mining',
    line_type: ['3Ts (Tin/Tantalum/Coltan)'],
    pillar: 'People',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'People - {STATUS}: People signals show {LEAK_1} and {LEAK_2}. Skill and discipline determine recovery quality. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode aligns incentives to recovery and reduces loss behaviors.',
    type: 'mission_brief'
  },

  {
    id: 'MB_MINING_QUARRY_OPS',
    industry: 'mining',
    line_type: ['Quarrying (stone/sand/aggregates)'],
    pillar: 'Operations',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Operations - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Quarrying profit lives in throughput, downtime control, and haul efficiency. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs downtime and fuel control with throughput standards.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_QUARRY_MONEY',
    industry: 'mining',
    line_type: ['Quarrying (stone/sand/aggregates)'],
    pillar: 'Money',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Money - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Costs often leak through fuel, repairs, and untracked cash spends. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds cost-per-ton and daily close discipline.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_QUARRY_MARKET',
    industry: 'mining',
    line_type: ['Quarrying (stone/sand/aggregates)'],
    pillar: 'Market',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Market - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Pricing control often goes to customers when consistency and delivery reliability are unproven. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode improves proof and delivery reliability while reducing disputes.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_QUARRY_LEAD',
    industry: 'mining',
    line_type: ['Quarrying (stone/sand/aggregates)'],
    pillar: 'Leadership',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Leadership - {STATUS}: Signals indicate {LEAK_1} and {LEAK_2}. Inconsistent supervision creates inconsistent output. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode assigns owners and weekly KPI reviews.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_QUARRY_INNOV',
    industry: 'mining',
    line_type: ['Quarrying (stone/sand/aggregates)'],
    pillar: 'Innovation',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Innovation and Creativity - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Layout and maintenance discipline are your innovation levers. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode pilots one improvement that reduces rehandling and downtime.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_QUARRY_RISK',
    industry: 'mining',
    line_type: ['Quarrying (stone/sand/aggregates)'],
    pillar: 'Risk',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2}. Safety and compliance shutdowns can destroy a quarry instantly. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs safety routines and compliance readiness.',
    type: 'mission_brief'
  },
  {
    id: 'MB_MINING_QUARRY_PEOPLE',
    industry: 'mining',
    line_type: ['Quarrying (stone/sand/aggregates)'],
    pillar: 'People',
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'People - {STATUS}: People signals show {LEAK_1} and {LEAK_2}. Discipline and fatigue directly drive accidents and rework. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode strengthens training and incentives around discipline and safety.',
    type: 'mission_brief'
  },

  // fallback templates for unmatched sub-industry
  ...['Operations', 'Money', 'Market', 'Leadership', 'Innovation', 'Risk', 'People'].map((pillar) => ({
    id: `MB_MINING_DEFAULT_${pillar}`,
    industry: 'mining',
    line_type: ['all'],
    pillar: pillar as any,
    signal_tags: [],
    severity_fit: ['Critical', 'Watch', 'Stable'],
    business_size_fit: ['all' as any],
    text: `${pillar} - {STATUS}: We detected {LEAK_1} and {LEAK_2}. Cost: {COST_IMPACT}. Cliffhanger: {NEXT_STEP}`,
    type: 'mission_brief' as const
  }))
];
