import { LibraryItem, PillarId, SignalTag } from '../../types';

const allSizes = ['all' as any];
const allSeverity = ['Critical', 'Watch', 'Stable', 'Strong', 'Emergency'] as Array<'Critical' | 'Watch' | 'Stable' | 'Strong' | 'Emergency'>;

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
    leak: 'Offcut Graveyard, Measuring Error Tax, and Finish Bottleneck are creating hidden delays and costly rework loops.',
    strength: 'Operations run with cutting plans, stage quality gates, material readiness checks, and predictable finishing flow.',
    hook: 'Offcut Graveyard',
    kpi: 'First-pass quality %, Rework hours/job, Offcut waste %, Cycle time/job, On-time completion %, Delivery damage %',
    signal_tags: ['waste_not_costed', 'measurement_blindspot', 'quality_built_late'],
    cost: 'Material waste, remake labor, and stage bottlenecks are reducing output and stretching delivery timelines.',
    cliffhanger: 'Fix Mode installs measurement lock, cutting discipline, and finishing flow control so output scales without chaos.'
  },
  {
    pillar: 'Money',
    leak: 'Underpricing Trap, Hidden Cost Blindness, and Scope Creep Theft are eroding margin despite strong workshop activity.',
    strength: 'Money control is job-level: priced with labor + overhead, protected by deposits, and tracked by profit per job.',
    hook: 'Underpricing Trap',
    kpi: 'Profit/job, Material cost variance, Labor hours variance, Deposit rate, Scope change revenue, Inventory days',
    signal_tags: ['costing_gap', 'pricing_margin_blindspot', 'cashflow_visibility_gap'],
    cost: 'Extra requests, untracked consumables, and weak deposit discipline silently convert good jobs into low-margin work.',
    cliffhanger: 'Fix Mode builds a pricing engine and change-order discipline so every extra requirement is converted into paid margin.'
  },
  {
    pillar: 'Market',
    leak: 'Trust Collapse and Spec Confusion Disputes are weakening referrals and forcing price competition.',
    strength: 'Market performance is reliable: specs are documented, updates are proactive, and referrals are engineered.',
    hook: 'Trust Collapse',
    kpi: 'On-time delivery %, Referral rate %, Quote-to-deposit %, Complaint rate %, Repeat customer %, AOV',
    signal_tags: ['spec_drift_discount', 'low_repeat_orders', 'complaint_handling_gap'],
    cost: 'Late delivery and unclear expectations create rework, disputes, and lost repeat business.',
    cliffhanger: 'Fix Mode installs spec-pack and customer update routines that rebuild trust and increase referral velocity.'
  },
  {
    pillar: 'Leadership',
    leak: 'Founder Bottleneck and Firefighting Workshop behavior are causing missed deadlines and repeated execution errors.',
    strength: 'Leadership runs on clear ownership, daily planning cadence, and closure discipline for recurring issues.',
    hook: 'Founder Bottleneck',
    kpi: 'Job card compliance %, Action closure %, Deadline accuracy %, Rework recurrence %, Capacity utilization %',
    signal_tags: ['decision_bottleneck', 'no_accountability_loop', 'no_meeting_to_action'],
    cost: 'When decisions and standards live in one person, throughput slows and mistakes repeat across jobs.',
    cliffhanger: 'Fix Mode assigns stage owners and enforces weekly root-cause closure so the workshop runs without approval drag.'
  },
  {
    pillar: 'Innovation',
    leak: 'Design Stagnation and Modular Goldmine Missed are limiting speed, differentiation, and scalable margin growth.',
    strength: 'Innovation is structured: modular designs, jigs/templates, and product pipeline experiments improve speed and value.',
    hook: 'Modular Goldmine Missed',
    kpi: 'New designs/quarter, % revenue modular designs, Jig/template savings, Finish quality score, Prototype success %',
    signal_tags: ['sku_complexity_tax', 'slow_bug_fix', 'no_product_testing_rhythm'],
    cost: 'Building every job from scratch keeps lead time high and prevents reliable premium pricing.',
    cliffhanger: 'Fix Mode builds a core modular catalog plus premium upgrades that increase throughput and protect differentiation.'
  },
  {
    pillar: 'Risk',
    leak: 'Contract Drama Risk, delivery damage exposure, and material quality failures are creating preventable financial shocks.',
    strength: 'Risk systems are controlled with documented agreements, safety discipline, traceable tools/materials, and acceptance sign-off.',
    hook: 'Contract Drama Risk',
    kpi: 'Contract coverage %, Incident rate, Tool loss #, Dispute %, Payment delay days, Delivery incident rate',
    signal_tags: ['contract_gap', 'order_fulfillment_instability', 'supplier_variance_risk'],
    cost: 'Informal agreements and weak delivery controls create remakes, refund exposure, and delayed cash collection.',
    cliffhanger: 'Fix Mode installs contract/change-order rules, packing standards, and acceptance controls to reduce dispute leakage.'
  },
  {
    pillar: 'People',
    leak: 'Skill Variance Tax and Training Void are driving inconsistent quality, avoidable waste, and handover failures.',
    strength: 'People systems are reliable: structured training, shared quality ownership, and handover discipline stabilize output.',
    hook: 'Skill Variance Tax',
    kpi: 'Skill certification %, Training hours/worker, Attendance %, Turnover %, Accountability participation %, Handover compliance %',
    signal_tags: ['training_gap', 'onboarding_gap', 'weak_shift_handover'],
    cost: 'When skills are uneven and shortcuts are tolerated, quality becomes fragile and rework becomes routine.',
    cliffhanger: 'Fix Mode installs training ladders and checklist-based handovers so quality no longer depends on a few individuals.'
  }
];

const species1 = 'Custom Residential Furniture (beds, wardrobes, kitchens)';
const species2 = 'Commercial Fit-Out & Office Furniture';
const species3 = 'Doors, Windows & Building Joinery';
const species4 = 'Mass/Batch Production (standard designs)';
const species5 = 'Upholstered Furniture (sofas, chairs)';

const missionRowsForSpecies = (
  speciesCode: string,
  lineType: string[],
  texts: Record<PillarId, string>
): LibraryItem[] => {
  const pillars: PillarId[] = ['Operations', 'Money', 'Market', 'Leadership', 'Innovation', 'Risk', 'People'];
  return pillars.map((pillar) => ({
    id: `MB_FUR_${speciesCode}_${pillar.toUpperCase()}`,
    industry: 'manufacturing',
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
  // Species 1 (default mapping for generic furniture selection)
  ...missionRowsForSpecies('S1', ['Furniture & carpentry production', species1], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which usually means your workshop is suffering from Custom Chaos and a Finish Bottleneck. Custom residential work looks simple, but it is a trap: measurements change on site, design details shift midstream, and finishing (sanding/paint/polish/drying) becomes the stage that silently destroys deadlines. Cost: {COST_IMPACT} through rework, idle time, and delayed delivery that forces overtime. Cliffhanger: Fix Mode will generate a 7-day measurement lock + finishing schedule system so deadlines stop collapsing at the last stage.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically the Underpricing Trap plus Scope Creep Theft. Residential clients add small things (extra drawers, thicker boards, special handles, extra coats) that steal hours and materials without being paid for. Cost: {COST_IMPACT} because your best-looking jobs become your worst-paying jobs. Cliffhanger: Fix Mode installs job costing + change-order pricing so every extra request becomes extra margin.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often a Trust Collapse risk caused by late deliveries, unclear expectations, and weak updates. Residential clients judge you on communication as much as quality. Cost: {COST_IMPACT} in lost referrals and reputation damage. Cliffhanger: Fix Mode creates a customer update routine + spec pack so clients trust the process and referrals increase.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning decisions and quality may depend on one person (often the owner). That creates an Approval Drag problem: when you are away, nothing moves. Cost: {COST_IMPACT} through slow execution and repeated mistakes. Cliffhanger: Fix Mode assigns owners per stage (cut-assemble-finish-pack) and forces weekly closure on recurring mistakes.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - usually a Modular Goldmine Missed. Custom businesses win when they standardize a core and sell premium upgrades: it speeds delivery and increases profit. Cost: {COST_IMPACT} because every job becomes from-scratch labor. Cliffhanger: Fix Mode builds a 30-day standard core catalog + premium upgrade menu to increase speed and margin.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often contract disputes, payment delays, and delivery damage exposure. One damaged delivery can eat the profit of multiple jobs. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds a deposit policy, acceptance sign-off, and delivery packing standard to prevent refund and remake disasters.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - commonly Skill Variance Tax. Quality becomes unpredictable if apprentices guess measurements or finishing steps. Cost: {COST_IMPACT} through rework and wasted materials. Cliffhanger: Fix Mode installs skill checklists + training ladder so workmanship stays consistent and scalable.'
  }),

  // Species 2
  ...missionRowsForSpecies('S2', [species2], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which usually signals a Workflow Traffic Jam plus Material Shortage Surprise. Fit-outs fail in scheduling and coordination: wrong dimensions, missing fittings, late delivery to site, and installation delays. Cost: {COST_IMPACT} in penalties, wasted transport trips, and idle crews on site. Cliffhanger: Fix Mode builds a 7-day installation readiness checklist and site measurement lock to prevent go-return waste.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - commonly Hidden Cost Blindness and Labor Leakage. In commercial work, profit dies in transport, site visits, re-measurements, installation errors, and rework. Cost: {COST_IMPACT} because you are paying for movement, not production. Cliffhanger: Fix Mode sets a job costing system that captures transport + site labor so pricing becomes accurate and protected.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often a positioning problem: you are seen as just another carpenter, not a professional contractor. Commercial buyers pay more for reliability, documentation, and professionalism. Cost: {COST_IMPACT} in low win rates and weak pricing power. Cliffhanger: Fix Mode creates a professional bid pack + proof portfolio to win higher-value contracts.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning coordination between workshop and site may be weak. Fit-out leadership is project management: schedules, checklists, owners, and change orders. Cost: {COST_IMPACT} through missed deadlines and penalty exposure. Cliffhanger: Fix Mode installs a 30-day project execution rhythm (weekly plan, daily progress, action closure).',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often missed standardization: office desks, partitions, storage units, and modular components can be standardized for speed. Cost: {COST_IMPACT} because every project is reinvented. Cliffhanger: Fix Mode builds a modular component library that reduces lead time and increases profit per contract.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - usually contract, liability, and safety risk. Commercial sites magnify risk: injuries, property damage, and disputes. Cost: {COST_IMPACT} plus catastrophic downside. Cliffhanger: Fix Mode builds contract terms + site safety checklist + acceptance sign-off to protect the business.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - often team reliability issues and skill gaps for installation and finishing. Cost: {COST_IMPACT} through rework, slow installation, and inconsistent delivery. Cliffhanger: Fix Mode creates skill certification for critical tasks and install checklists to stabilize performance.'
  }),

  // Species 3
  ...missionRowsForSpecies('S3', [species3], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which commonly points to Measuring Error Tax plus Warp/Crack Risk from poor seasoning or inconsistent timber quality. Joinery demands precision; small deviations cause big fitting problems onsite. Cost: {COST_IMPACT} via remakes, site returns, and delayed installation. Cliffhanger: Fix Mode creates a 7-day measurement verification and timber quality control routine to stop remakes.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often Underpricing Trap plus rework eating margin. Joinery jobs look profitable on paper, but installation returns and remakes destroy true profit. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds pricing that includes installation complexity and quality risk, so you stop undercharging.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often reputation risk: doors and windows are high-complaint products because clients notice fit, smoothness, and finish instantly. Cost: {COST_IMPACT} through complaints, refunds, and negative referrals. Cliffhanger: Fix Mode installs a finishing and fit standard so quality becomes predictable and referral-worthy.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning production and site work may not be coordinated. Cost: {COST_IMPACT} as time is wasted through site surprises and missing parts. Cliffhanger: Fix Mode assigns owners for measurement, fabrication, finishing, and installation with a standard handover.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - missed standardization of sizes and components, plus missed upsells (security upgrades, premium finishes). Cost: {COST_IMPACT} in lost margin. Cliffhanger: Fix Mode creates a product tier system and standardized components so you sell premium upgrades, not just wood.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - contract disputes and warranty claims are common in joinery. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs acceptance sign-off and warranty terms to reduce disputes and protect cash.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - skill variance is dangerous because precision work punishes almost-correct. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode creates jigs/templates and skill checks so accuracy improves without relying on one master.'
  }),

  // Species 4
  ...missionRowsForSpecies('S4', [species4], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, typically signaling Workshop Traffic Jam and weak flow control. In batch production, the enemy is disorganization: too much WIP, missing materials, and finishing delays. Cost: {COST_IMPACT} because your throughput is capped by chaos, not capacity. Cliffhanger: Fix Mode builds a 7-day flow map + WIP limits to increase output without buying machines.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - commonly poor job costing and inventory cash traps. Batch production should be margin-rich if waste and cycle time are controlled; if not, volume becomes a loss machine. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds unit cost and margin by product so you stop producing items that sell but do not profit.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - usually weak distribution and inconsistent customer experience. Standard products need consistent delivery and consistent quality to scale. Cost: {COST_IMPACT} through stockouts, inconsistent repeat orders, and price pressure. Cliffhanger: Fix Mode installs order forecasting and delivery discipline to stabilize repeat buying.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - output may depend on daily pressure rather than standard work. Cost: {COST_IMPACT} as mistakes repeat and waste becomes permanent. Cliffhanger: Fix Mode sets daily production boards and weekly root-cause closures so output rises steadily.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - missed opportunities to improve designs for cost, durability, and assembly speed. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode runs a 30-day cost-down redesign sprint: less waste, faster build, premium look.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - safety, theft, and delivery damage scale with volume. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs inventory controls and safety routines to reduce preventable losses.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - if training is weak, defect rates rise with volume. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs training SOPs and quality gates so scale does not create chaos.'
  }),

  // Species 5
  ...missionRowsForSpecies('S5', [species5], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, often signaling Material Shortage Surprise and Finish Bottleneck - but in upholstery it is foam, fabric, and stitching quality that create hidden delays and rework. One wrong cut of fabric can waste an entire roll section. Cost: {COST_IMPACT} via fabric waste, rework, and late delivery. Cliffhanger: Fix Mode builds a 7-day fabric cutting and staging routine to stop expensive mistakes.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Hidden Cost Blindness (foam, fabric, adhesives, transport) and undercharging for complexity (tufting, curves, premium fabrics). Cost: {COST_IMPACT} because you sell premium-looking sofas with fragile margins. Cliffhanger: Fix Mode creates a complexity pricing model and material costing system so every upgrade is profitable.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - upholstery is trust-based: customers judge comfort, stitching, and durability. Inconsistent quality triggers returns and reputation damage. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs a durability and comfort standard with quality proof that increases referrals.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning workflow and quality responsibility may be unclear: frame, foam, fabric, finishing. Cost: {COST_IMPACT} through handover mistakes and rework loops. Cliffhanger: Fix Mode assigns owners and checklists per stage so quality is protected before mistakes become expensive.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - missed modular designs and product tiers (standard frame + fabric upgrades). Cost: {COST_IMPACT} because every sofa becomes a custom headache. Cliffhanger: Fix Mode builds a modular catalog that speeds production and allows profitable customization.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - fire hazards, tool loss, and warranty disputes are common. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs safety routines and warranty terms that reduce business-ending conflicts.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - upholstery is skill-sensitive; stitching and cutting errors are expensive. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs skill standards, templates, and training ladders to stabilize quality.'
  })
];

const generatedRows: LibraryItem[] = baseRows.flatMap((row) => {
  const idBase = row.pillar.toUpperCase();
  return [
    {
      id: `LIB_FUR_${idBase}_LEAK`,
      industry: 'manufacturing',
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
      id: `LIB_FUR_${idBase}_STR`,
      industry: 'manufacturing',
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
      id: `LIB_FUR_${idBase}_HOOK`,
      industry: 'manufacturing',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: [],
      severity_fit: allSeverity,
      business_size_fit: allSizes,
      text: row.hook,
      type: 'hook',
      hook_text: row.hook,
      kpi_text: row.kpi
    },
    {
      id: `LIB_FUR_${idBase}_KPI`,
      industry: 'manufacturing',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: [],
      severity_fit: allSeverity,
      business_size_fit: allSizes,
      text: row.kpi,
      type: 'kpi',
      kpi_text: row.kpi
    }
  ];
});

export const library: LibraryItem[] = [...generatedRows, ...missionBriefRows];
