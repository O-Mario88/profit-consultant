import { LibraryItem, PillarId, SignalTag } from '../../types';

const allSizes = ['all' as any];

const baseRows: Array<{
  pillar: PillarId;
  leak: string;
  strength: string;
  hook: string;
  kpi: string;
  signal_tags: SignalTag[];
  cost: string;
  cliffhanger: string;
}> = [
  {
    pillar: 'Operations',
    leak: "Permit-to-Work Delay and Work Pack Chaos are creating Crew Idle Tax, rework, and SLA slippage.",
    strength: "Execution is predictable: work packs are ready, PTW and access are pre-planned, and first-time-right quality is controlled.",
    hook: 'Rig-Time Bleed',
    kpi: 'Permit lead time, Crew idle hours, First-time-right %, Rework hours, SLA response compliance, Close-out cycle time',
    signal_tags: ['planning_gap', 'no_standard_work', 'quality_built_late'],
    cost: 'Late starts, repeated defects, and paid hours lost waiting for access, tools, or materials.',
    cliffhanger: 'Fix Mode installs readiness checks, PTW pre-planning, and daily execution controls so shift time converts to billed value.'
  },
  {
    pillar: 'Money',
    leak: 'Variation Order Leakage, Unbilled Work Trap, and Cost Code Blindness are compressing margin despite high activity.',
    strength: 'Job economics are controlled: cost codes, VO discipline, close-out billing, and cashflow tracking protect margin.',
    hook: 'Margin Mirage (Contractor Edition)',
    kpi: 'Margin per job, Unbilled work value, VO capture %, DSO, Penalties/backcharges, Fuel/rental spend variance',
    signal_tags: ['costing_gap', 'pricing_margin_blindspot', 'payment_delay_chokehold'],
    cost: 'Work is delivered, but value is leaked through unpaid scope, delayed invoices, and cost overruns.',
    cliffhanger: 'Fix Mode enforces VO gates, cost-code visibility, and billing triggers so delivered work becomes collected cash.'
  },
  {
    pillar: 'Market',
    leak: 'Single-Client Dependency and weak proof assets are reducing pricing power and increasing tender stress.',
    strength: 'Pipeline quality is strong: compliance packs are ready, delivery evidence is visible, and repeat work is engineered.',
    hook: 'Single-Client Dependency',
    kpi: 'Client concentration %, Repeat work %, Prequal readiness %, Win rate, Average margin, Issue closure time',
    signal_tags: ['channel_dependency', 'weak_proof_pack', 'compliance_blocker_risk'],
    cost: 'You get squeezed on price and terms when reliability is not provable and pipeline depends on a narrow client base.',
    cliffhanger: 'Fix Mode converts delivery performance into trust assets that increase repeat work and reduce price pressure.'
  },
  {
    pillar: 'Leadership',
    leak: 'Supervisor Lottery and Meeting-to-Nothing patterns are causing unstable delivery and weak scope discipline.',
    strength: 'Leadership runs on control rhythms: clear job owners, weekly review cadence, and enforced standards.',
    hook: 'No Owner Syndrome (Job Level)',
    kpi: 'Action closure %, Owner assignment %, Weekly control compliance %, Incident recurrence #, Supervisor score',
    signal_tags: ['management_by_memory', 'no_meeting_to_action', 'no_accountability_loop'],
    cost: 'Output changes by supervisor, decisions stay reactive, and repeat problems survive week after week.',
    cliffhanger: 'Fix Mode installs owner accountability, closure discipline, and KPI-led decision rhythms.'
  },
  {
    pillar: 'Innovation',
    leak: 'Template Void and Field Data Blindspot force manual planning, repetitive errors, and slow close-out cycles.',
    strength: 'Learning is systemized through reusable templates, lessons-learned loops, and process automation.',
    hook: 'Field Data Blindspot',
    kpi: 'Template adoption %, Cycle time improvement %, Lessons logged/month, Automation coverage %, Rework reduction %',
    signal_tags: ['quality_definition_gap', 'no_market_feedback_loop', 'no_product_testing_rhythm'],
    cost: 'The same delays and defects repeat because knowledge is not converted into standard tools and process upgrades.',
    cliffhanger: 'Fix Mode builds template libraries and a simple learning loop that cuts cycle time without compromising quality.'
  },
  {
    pillar: 'Risk',
    leak: 'HSE/PTW inconsistency, contract blind spots, and weak audit trails expose the business to shutdowns and blacklisting.',
    strength: 'Risk is controlled through strict PTW, contract review, subcontractor controls, and audit-ready evidence.',
    hook: 'HSE Shutdown Risk',
    kpi: 'PTW compliance %, Audit findings #, Contract risk review %, Subcontractor compliance %, Fraud attempts #',
    signal_tags: ['compliance_blocker_risk', 'hygiene_drift', 'contract_gap'],
    cost: 'One incident, clause miss, or compliance gap can halt operations and damage vendor status.',
    cliffhanger: 'Fix Mode hardens PTW, contract controls, and documentation so compliance acts as a commercial shield.'
  },
  {
    pillar: 'People',
    leak: 'Competency gaps, fatigue, and incentive misfires are driving safety incidents, rework, and preventable turnover.',
    strength: 'Teams run with tracked competency, real safety culture, fatigue controls, and incentives aligned to quality.',
    hook: 'Fatigue Error Tax',
    kpi: 'Certification compliance %, Near-miss reports/month, Training completion %, Overtime hours, Turnover %',
    signal_tags: ['training_gap', 'cross_function_breakdown', 'blame_culture'],
    cost: 'Skill variance and exhaustion silently degrade quality and increase incident exposure.',
    cliffhanger: 'Fix Mode installs competency tracking, targeted coaching, and incentive rules that reward first-time-right work.'
  }
];

const speciesA = 'Maintenance & Shutdown Services';
const speciesB = 'Logistics & Transport Services';
const speciesC = 'Inspection, Testing & QA Services';
const speciesD = 'Civil Works / Fabrication / Welding Services';

const missionBriefRows: LibraryItem[] = [
  // Species A
  {
    id: 'MB_OG_A_OPS', industry: 'oil_gas_services', line_type: [speciesA], pillar: 'Operations', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "Operations - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which typically means your teams are losing paid hours to PTW delays and job pack gaps - the Permit-to-Work Delay plus Work Pack Chaos combo. Cost: {COST_IMPACT} in idle labor and missed shutdown windows. Cliffhanger: Unlock Fix Mode to install job pack standards and PTW pre-planning so crews start producing from hour one.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_A_MONEY', industry: 'oil_gas_services', line_type: [speciesA], pillar: 'Money', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "Money - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often Variation Order Leakage plus Unbilled Work Trap. Cost: {COST_IMPACT} because you are doing paid work for free or late. Cliffhanger: Fix Mode enforces VO rules and close-out packs so invoices move fast.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_A_MARKET', industry: 'oil_gas_services', line_type: [speciesA], pillar: 'Market', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "Market - {STATUS}: We detected {LEAK_1} and {LEAK_2} - reliability proof is the currency here. If delivery evidence is weak, clients treat you as replaceable. Cost: {COST_IMPACT} in pricing pressure. Cliffhanger: Fix Mode builds proof bundles and SLA dashboards that turn delivery into repeat work.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_A_LEAD', industry: 'oil_gas_services', line_type: [speciesA], pillar: 'Leadership', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "Leadership - {STATUS}: Leadership signals point to {LEAK_1} and {LEAK_2} - output may depend on a hero supervisor. Cost: {COST_IMPACT} through inconsistency and rework. Cliffhanger: Fix Mode assigns job owners, installs weekly controls, and drives action closure.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_A_INNOV', industry: 'oil_gas_services', line_type: [speciesA], pillar: 'Innovation', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "Innovation & Creativity - {STATUS}: We detected {LEAK_1} and {LEAK_2} - meaning the business is rebuilding job packs from scratch each time. Cost: {COST_IMPACT} in cycle time and errors. Cliffhanger: Fix Mode creates a template library and lessons-learned system.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_A_RISK', industry: 'oil_gas_services', line_type: [speciesA], pillar: 'Risk', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - HSE and contract exposure can destroy vendor status instantly. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode strengthens PTW discipline, subcontractor compliance, and documentation.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_A_PEOPLE', industry: 'oil_gas_services', line_type: [speciesA], pillar: 'People', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "People - {STATUS}: People signals indicate {LEAK_1} and {LEAK_2} - fatigue and competency gaps often drive incidents and rework. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode aligns incentives to quality and safety, and installs competency tracking.", type: 'mission_brief'
  },

  // Species B (provided)
  {
    id: 'MB_OG_B_OPS', industry: 'oil_gas_services', line_type: [speciesB], pillar: 'Operations', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which usually means your trucks and drivers are losing paid time to dispatch disorder and site-access friction - the classic Crew Idle Tax plus Site Access Bottleneck pattern. You are moving, but not efficiently. Cost: {COST_IMPACT} through late deliveries, extra trips, and hours spent waiting at gates or on site. If you are not measuring turnaround time, you cannot stop the leak. Cliffhanger: Start Fix Mode to build a dispatch calendar plus turnaround tracker so every truck hour produces revenue - not excuses.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_B_MONEY', industry: 'oil_gas_services', line_type: [speciesB], pillar: 'Money', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - most commonly Fuel & Rental Bleed plus Margin Mirage (you are busy, but profit is thin). This happens when fuel is not reconciled per trip, rentals are extended by accident, and emergency repairs become normal. Cost: {COST_IMPACT} as fuel eats margin and small costs become a permanent tax. Cliffhanger: Fix Mode installs trip-level cost codes and a fuel reconciliation routine so you can see which routes print money and which routes are killing you.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_B_MARKET', industry: 'oil_gas_services', line_type: [speciesB], pillar: 'Market', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - usually a Single-Client Dependency problem with weak proof of performance. If your whole business depends on one big contract, pricing power disappears and renewal risk becomes existential. Cost: {COST_IMPACT} through low negotiating power, tougher terms, and fear-based bidding. Cliffhanger: Fix Mode helps you package proof (on-time %, incident-free days, turnaround performance) into a repeatable sales asset so you can win additional clients without lowering price.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_B_LEAD', industry: 'oil_gas_services', line_type: [speciesB], pillar: 'Leadership', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning operations are likely driven by who is shouting rather than a control rhythm. Dispatch, drivers, maintenance, and client coordination drift without one person owning the full flow. Cost: {COST_IMPACT} via repeated chaos: missed windows, truck downtime, and blame loops. Cliffhanger: Fix Mode assigns owners for dispatch, fleet readiness, and client coordination - then forces weekly closure of the top causes of delay.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_B_INNOV', industry: 'oil_gas_services', line_type: [speciesB], pillar: 'Innovation', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - a strong sign of a Field Data Blindspot. The same delays happen repeatedly because no one is collecting trip data and converting it into smarter routing and scheduling. Cost: {COST_IMPACT} through waste that looks normal. Cliffhanger: Fix Mode builds a lightweight Delay Heatmap and a dispatch template that reduces turnaround time without adding vehicles.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_B_RISK', industry: 'oil_gas_services', line_type: [speciesB], pillar: 'Risk', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often safety compliance risk plus incident exposure. In logistics, one major incident can shut down contracts and destroy trust. Cost: {COST_IMPACT} through contract risk, downtime, and vendor blacklisting. Cliffhanger: Fix Mode installs safety routines, pre-trip checks, and evidence packs so compliance becomes a shield, not a headache.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_B_PEOPLE', industry: 'oil_gas_services', line_type: [speciesB], pillar: 'People', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - usually fatigue risk plus discipline drift. In transport, tired drivers are a hidden profit leak and a major risk multiplier. Cost: {COST_IMPACT} through mistakes, incidents, and avoidable repairs. Cliffhanger: Fix Mode aligns incentives to safety + on-time delivery and introduces simple fatigue controls that protect both profit and contracts.", type: 'mission_brief'
  },

  // Species C (provided)
  {
    id: 'MB_OG_C_OPS', industry: 'oil_gas_services', line_type: [speciesC], pillar: 'Operations', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which usually means your business is leaking money through slow turnaround and documentation friction - the we did the work, but the proof is messy problem. In inspection, your speed and accuracy are your product. Cost: {COST_IMPACT} through delayed approvals, repeat visits, and client frustration. Cliffhanger: Fix Mode installs an evidence pack template and a turnaround tracker so your service becomes fast, defensible, and repeatable.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_C_MONEY', industry: 'oil_gas_services', line_type: [speciesC], pillar: 'Money', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - commonly Unbilled Work Trap plus Cost Code Blindness. In inspection, profitability dies when travel time, overtime, and report prep are not costed per job. You can be fully booked and still poor. Cost: {COST_IMPACT} through underpricing and unpaid hours. Cliffhanger: Fix Mode enforces job-based costing and billing triggers so every completed deliverable becomes collected cash.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_C_MARKET', industry: 'oil_gas_services', line_type: [speciesC], pillar: 'Market', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - typically prequal and trust proof gaps. QA services win on credibility. If your calibration, certifications, and documentation are not instantly available, you lose bids - or get squeezed on price. Cost: {COST_IMPACT} through missed tenders and low pricing power. Cliffhanger: Fix Mode builds your compliance vault + proof library so clients view you as low risk, not cheap option.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_C_LEAD', industry: 'oil_gas_services', line_type: [speciesC], pillar: 'Leadership', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "LEADERSHIP - {STATUS}: Leadership signals point to {LEAK_1} and {LEAK_2} - meaning standards may vary by inspector and the business depends on a few experienced individuals. Cost: {COST_IMPACT} through inconsistency, disputes, and burnout. Cliffhanger: Fix Mode standardizes methods, checklists, and review routines so quality becomes a system - not a personality.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_C_INNOV', industry: 'oil_gas_services', line_type: [speciesC], pillar: 'Innovation', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - a sign you are not turning field experience into scalable assets. Inspection firms grow by turning knowledge into templates, libraries, and automated reporting. Cost: {COST_IMPACT} in slow reports and repeating admin. Cliffhanger: Fix Mode creates a reusable reporting system and common defect library that improves speed and upsell potential.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_C_RISK', industry: 'oil_gas_services', line_type: [speciesC], pillar: 'Risk', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - risk in inspection is reputation plus liability. One wrong report can trigger contract loss, claims, or blacklisting. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode adds peer review gates, audit trails, and insurance-proof documentation so your work is defensible.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_C_PEOPLE', industry: 'oil_gas_services', line_type: [speciesC], pillar: 'People', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - often competency management gaps and retention risk. The moment skilled inspectors leave, delivery collapses. Cost: {COST_IMPACT} through capacity loss, quality drop, and missed jobs. Cliffhanger: Fix Mode installs competency tracking, mentoring ladders, and incentives linked to quality and turnaround.", type: 'mission_brief'
  },

  // Species D (provided)
  {
    id: 'MB_OG_D_OPS', industry: 'oil_gas_services', line_type: [speciesD], pillar: 'Operations', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which often means your projects are suffering from work pack chaos and rework spiral - the deadly combination that turns labor into wasted payroll. In civil/fab/welding, doing it twice is a margin killer. Cost: {COST_IMPACT} through rework hours, idle time waiting on drawings/materials, and schedule slippage. Cliffhanger: Fix Mode installs job readiness checks and quality gates so work is completed right the first time.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_D_MONEY', industry: 'oil_gas_services', line_type: [speciesD], pillar: 'Money', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - most commonly Variation Order Leakage plus Penalty & Backcharge Shock. This happens when scope creeps but your commercial discipline does not. You end up delivering extra work for free, then still get penalized. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode forces VO capture, milestone billing, and evidence packs so scope creep becomes paid revenue, not charity.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_D_MARKET', industry: 'oil_gas_services', line_type: [speciesD], pillar: 'Market', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - typically tender dependency plus weak delivery proof. Civil/fab contractors that document quality and progress win repeat work and better terms. Those who cannot prove performance get squeezed. Cost: {COST_IMPACT} through lower margins and constant tender stress. Cliffhanger: Fix Mode converts your close-out packs into trust assets that win repeat work without price cuts.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_D_LEAD', industry: 'oil_gas_services', line_type: [speciesD], pillar: 'Leadership', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - output may depend on a supervisor lottery. If standards vary by foreman, your quality varies and rework grows. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode assigns job owners, installs weekly controls, and forces action closure on the top 3 causes of rework.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_D_INNOV', industry: 'oil_gas_services', line_type: [speciesD], pillar: 'Innovation', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - meaning your team repeats manual planning and reporting on every project. That is a template void problem and it silently wastes thousands of hours per year. Cost: {COST_IMPACT} in admin time, errors, and slow close-outs. Cliffhanger: Fix Mode builds a template library (work packs, QA forms, weld maps, close-outs) and reduces cycle time.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_D_RISK', industry: 'oil_gas_services', line_type: [speciesD], pillar: 'Risk', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - HSE and contractual risk can destroy your vendor status instantly. One major incident or PTW violation can remove you from sites. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode strengthens PTW compliance, subcontractor controls, and audit-ready documentation.", type: 'mission_brief'
  },
  {
    id: 'MB_OG_D_PEOPLE', industry: 'oil_gas_services', line_type: [speciesD], pillar: 'People', signal_tags: [], severity_fit: ['Critical', 'Watch', 'Stable'], business_size_fit: allSizes,
    text: "PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - usually competency and fatigue issues. In welding/fabrication, skill variance creates defects, rework, and safety incidents. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs competency tracking, training, and incentives aligned to first-time-right quality.", type: 'mission_brief'
  }
];

const generatedRows: LibraryItem[] = baseRows.flatMap((row) => {
  const idBase = row.pillar.toUpperCase();
  return [
    {
      id: `LIB_OG_${idBase}_LEAK`,
      industry: 'oil_gas_services',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: row.signal_tags,
      severity_fit: ['Critical', 'Watch', 'Emergency'],
      business_size_fit: allSizes,
      text: row.leak,
      type: 'leak',
      hook_text: row.hook,
      cost_text: row.cost,
      cliffhanger_text: row.cliffhanger,
      kpi_text: row.kpi
    },
    {
      id: `LIB_OG_${idBase}_STR`,
      industry: 'oil_gas_services',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: row.signal_tags,
      severity_fit: ['Stable', 'Strong'],
      business_size_fit: allSizes,
      text: row.strength,
      type: 'strength',
      hook_text: row.hook,
      kpi_text: row.kpi
    },
    {
      id: `LIB_OG_${idBase}_HOOK`,
      industry: 'oil_gas_services',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: [],
      severity_fit: ['Critical', 'Watch', 'Stable', 'Strong', 'Emergency'],
      business_size_fit: allSizes,
      text: row.hook,
      type: 'hook',
      hook_text: row.hook,
      kpi_text: row.kpi
    },
    {
      id: `LIB_OG_${idBase}_KPI`,
      industry: 'oil_gas_services',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: [],
      severity_fit: ['Critical', 'Watch', 'Stable', 'Strong', 'Emergency'],
      business_size_fit: allSizes,
      text: row.kpi,
      type: 'kpi',
      kpi_text: row.kpi
    }
  ];
});

export const library: LibraryItem[] = [...generatedRows, ...missionBriefRows];
