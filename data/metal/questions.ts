
import { QuestionDefinition } from '../../types';

const defaultProps = {
  line_type: ['Metal fabrication'],
  industry: 'metal',
  signal_tags: []
};

// P1: Risk (Quality, Compliance)
const p1_qs = [
  { qid: 'QS_RISK_1', textA: 'We check quality at fit-up and final signoff', textB: 'We mostly check quality near shipment' },
  { qid: 'QS_RISK_2', textA: 'Weld work follows documented procedures', textB: 'Weld work depends on who is welding today' },
  { qid: 'QS_RISK_3', textA: 'Hot work has permit/fire controls in high-risk areas', textB: 'Hot work controls are informal' },
  { qid: 'QS_RISK_4', textA: 'Welding fume controls are standardized by material/task', textB: 'Fume controls vary by person' }
];

const p1_ds = [
  { qid: 'DS_RISK_1', textA: 'Weld acceptance is tied to defined quality levels', textB: 'Weld acceptance is "looks fine"' },
  { qid: 'DS_RISK_2', textA: 'Weld procedures are controlled and current', textB: 'Procedures exist but drift in practice' },
  { qid: 'DS_RISK_3', textA: 'Welder qualifications are tracked', textB: 'Qualifications are assumed' },
  { qid: 'DS_RISK_4', textA: 'NDT is planned by risk/requirements', textB: 'NDT is done when someone insists' },
  { qid: 'DS_RISK_5', textA: 'Dimensional checks happen mid-process', textB: 'Dimensional checks happen at the end' },
  { qid: 'DS_RISK_6', textA: 'Thermal cut quality is checked to a standard', textB: 'Cut quality is judged visually' },
  { qid: 'DS_RISK_7', textA: 'Nonconformance triggers root-cause closure', textB: 'Nonconformance triggers quick fixes' },
  { qid: 'DS_RISK_8', textA: 'Hot-work permits/fire watch are enforced', textB: 'Hot-work is "common sense"' },
  { qid: 'DS_RISK_9', textA: 'Fire risks are controlled (combustibles cleared)', textB: 'Fire risks are handled if problems appear' },
  { qid: 'DS_RISK_10', textA: 'Fume risks are assessed by material/coating', textB: 'Fume risks are treated uniformly' },
  { qid: 'DS_RISK_11', textA: 'Ventilation is verified for enclosed work', textB: 'Ventilation is assumed adequate' },
  { qid: 'DS_RISK_12', textA: 'Customer compliance packs are ready fast', textB: 'Compliance packs are built after delivery pressure' },
  { qid: 'DS_RISK_13', textA: 'Rework is logged by cause', textB: 'Rework is logged only as total hours' },
  { qid: 'DS_RISK_14', textA: 'Quality KPIs are visible to the floor', textB: 'Quality KPIs live with management only' },
  { qid: 'DS_RISK_15', textA: 'Measuring tools are verified/calibrated', textB: 'Tools are replaced when "off"' },
  { qid: 'DS_RISK_16', textA: 'Painting/coating prep is standardized', textB: 'Prep quality depends on worker preference' },
  { qid: 'DS_RISK_17', textA: 'Material traceability is maintained when required', textB: 'Traceability is informal' },
  { qid: 'DS_RISK_18', textA: 'Acceptance criteria are agreed at order stage', textB: 'Acceptance criteria are clarified during delivery' },
  { qid: 'DS_RISK_19', textA: 'Safety near misses are reported and closed', textB: 'Near misses are handled quietly' },
  { qid: 'DS_RISK_20', textA: 'Environmental waste streams are managed', textB: 'Waste streams are unmanaged overhead' }
];

// P2: Innovation (Engineering)
const p2_qs = [
  { qid: 'QS_INNOVATION_1', textA: 'Jobs start only after readiness gate passes', textB: 'Jobs start to keep machines busy' },
  { qid: 'QS_INNOVATION_2', textA: 'Drawings include tolerances and weld/inspection notes', textB: 'Shop fills in the gaps' },
  { qid: 'QS_INNOVATION_3', textA: 'Revisions are controlled and visible', textB: 'Revisions are handled through messages' },
  { qid: 'QS_INNOVATION_4', textA: 'Nesting is planned to a yield target', textB: 'Nesting is done at the machine' }
];

const p2_ds = [
  { qid: 'DS_INNOVATION_1', textA: 'Quote uses operation hours', textB: 'Quote uses intuition' },
  { qid: 'DS_INNOVATION_2', textA: 'Complexity/risk is priced', textB: 'Complexity is absorbed' },
  { qid: 'DS_INNOVATION_3', textA: 'Weld symbols/criteria are clear at start', textB: 'They appear late' },
  { qid: 'DS_INNOVATION_4', textA: 'Inspection plan is defined early', textB: 'Inspection is ad hoc' },
  { qid: 'DS_INNOVATION_5', textA: '"Latest print only" discipline exists', textB: 'Multiple prints circulate' },
  { qid: 'DS_INNOVATION_6', textA: 'Change orders are priced and approved', textB: 'Changes are absorbed' },
  { qid: 'DS_INNOVATION_7', textA: 'Site measures use checklist/photos', textB: 'Site measures rely on memory' },
  { qid: 'DS_INNOVATION_8', textA: 'Material grade/spec is verified', textB: 'Material grade is assumed' },
  { qid: 'DS_INNOVATION_9', textA: 'Nesting yield is measured', textB: 'Yield is guessed' },
  { qid: 'DS_INNOVATION_10', textA: 'Cut route and sequence are planned', textB: 'Sequence is improvised' },
  { qid: 'DS_INNOVATION_11', textA: 'Tooling/fixtures are prepared', textB: 'Fixtures are made mid-job' },
  { qid: 'DS_INNOVATION_12', textA: 'Fit-up plan exists', textB: 'Fit-up is "figure it out"' },
  { qid: 'DS_INNOVATION_13', textA: 'Install constraints are captured early', textB: 'Constraints appear on site' },
  { qid: 'DS_INNOVATION_14', textA: 'Job pack includes acceptance criteria', textB: 'Criteria are verbal' },
  { qid: 'DS_INNOVATION_15', textA: 'Time library is updated monthly', textB: 'No time library exists' },
  { qid: 'DS_INNOVATION_16', textA: 'Engineering backlog is visible', textB: 'Engineering capacity is unknown' },
  { qid: 'DS_INNOVATION_17', textA: 'Rework causes are linked to print errors', textB: 'Rework causes are not categorized' },
  { qid: 'DS_INNOVATION_18', textA: 'Work is segmented by product type', textB: 'Every job is treated as unique' },
  { qid: 'DS_INNOVATION_19', textA: 'Client approvals are documented', textB: 'Approvals are assumed' },
  { qid: 'DS_INNOVATION_20', textA: 'Risk reviews happen on critical jobs', textB: 'Risk reviews happen after issues' }
];

// P3: Market (Sales)
const p3_qs = [
  { qid: 'QS_MARKET_1', textA: 'Every lead enters a follow-up cadence', textB: 'Follow-up depends on the day' },
  { qid: 'QS_MARKET_2', textA: 'Quotes include scope + acceptance criteria', textB: 'Quotes focus mainly on price' },
  { qid: 'QS_MARKET_3', textA: 'Delivery promises are capacity-based', textB: 'Delivery promises are sales-based' },
  { qid: 'QS_MARKET_4', textA: 'Aftercare and punch list closure are standard', textB: 'Aftercare is complaint-driven' }
];

const p3_ds = [
  { qid: 'DS_MARKET_1', textA: 'Lead sources are tracked', textB: 'Lead sources are unknown' },
  { qid: 'DS_MARKET_2', textA: 'Response time is measured', textB: 'Response time is "when possible"' },
  { qid: 'DS_MARKET_3', textA: 'Quotes offer tiered options', textB: 'Quotes are one number' },
  { qid: 'DS_MARKET_4', textA: 'Scope is signed off', textB: 'Scope is implied' },
  { qid: 'DS_MARKET_5', textA: 'Exclusions are written', textB: 'Exclusions appear later' },
  { qid: 'DS_MARKET_6', textA: 'Change orders are priced upfront', textB: 'Change orders are absorbed' },
  { qid: 'DS_MARKET_7', textA: 'Customers get progress updates', textB: 'Customers chase updates' },
  { qid: 'DS_MARKET_8', textA: 'OTIF is tracked weekly', textB: 'OTIF is remembered by stories' },
  { qid: 'DS_MARKET_9', textA: 'Delivery dates match capacity', textB: 'Delivery dates match pressure' },
  { qid: 'DS_MARKET_10', textA: 'Complaints feed root cause actions', textB: 'Complaints are handled case-by-case' },
  { qid: 'DS_MARKET_11', textA: 'Referrals are requested routinely', textB: 'Referrals happen randomly' },
  { qid: 'DS_MARKET_12', textA: 'Repeat customers have retention plan', textB: 'Repeat customers are treated like new' },
  { qid: 'DS_MARKET_13', textA: 'Deposit policy is standard', textB: 'Deposit policy is negotiable' },
  { qid: 'DS_MARKET_14', textA: 'B2B accounts have service expectations', textB: 'B2B is handled like retail' },
  { qid: 'DS_MARKET_15', textA: 'Warranty terms are clear', textB: 'Warranty terms are flexible' },
  { qid: 'DS_MARKET_16', textA: 'Job handover to production is documented', textB: 'Job handover is verbal' },
  { qid: 'DS_MARKET_17', textA: 'Customer expectations are set early', textB: 'Expectations are set during delivery' },
  { qid: 'DS_MARKET_18', textA: 'Pricing integrity is enforced', textB: 'Discounts are frequent' },
  { qid: 'DS_MARKET_19', textA: 'Target markets are defined', textB: 'Work is accepted from anyone' },
  { qid: 'DS_MARKET_20', textA: 'Sales review happens weekly', textB: 'Sales review happens monthly' }
];

// P4: Leadership (Pricing)
const p4_qs = [
  { qid: 'QS_LEADERSHIP_1', textA: 'We price by operations + consumables', textB: 'We price by "market feel"' },
  { qid: 'QS_LEADERSHIP_2', textA: 'Change orders are priced before work continues', textB: 'Changes are absorbed' },
  { qid: 'QS_LEADERSHIP_3', textA: 'Deposits are required before procurement', textB: 'Deposits are optional' },
  { qid: 'QS_LEADERSHIP_4', textA: 'Margin floors are enforced', textB: 'We take low margin to stay busy' }
];

const p4_ds = [
  { qid: 'DS_LEADERSHIP_1', textA: 'Hours are estimated per operation', textB: 'Hours are estimated as a lump sum' },
  { qid: 'DS_LEADERSHIP_2', textA: 'Consumables are priced per job', textB: 'Consumables are treated as overhead' },
  { qid: 'DS_LEADERSHIP_3', textA: 'Rework risk is priced', textB: 'Rework risk is ignored' },
  { qid: 'DS_LEADERSHIP_4', textA: 'Margin tracked per job', textB: 'Margin tracked overall' },
  { qid: 'DS_LEADERSHIP_5', textA: 'Discounts need approval', textB: 'Discounts are flexible' },
  { qid: 'DS_LEADERSHIP_6', textA: 'Deposit matches material spend', textB: 'Deposit is symbolic' },
  { qid: 'DS_LEADERSHIP_7', textA: 'Milestones are written', textB: 'Milestones are assumed' },
  { qid: 'DS_LEADERSHIP_8', textA: 'Change orders use a form', textB: 'Change orders are verbal' },
  { qid: 'DS_LEADERSHIP_9', textA: 'Warranty exclusions are documented', textB: 'Warranty is vague' },
  { qid: 'DS_LEADERSHIP_10', textA: 'Late client changes have penalties', textB: 'Late changes are absorbed' },
  { qid: 'DS_LEADERSHIP_11', textA: 'Rush jobs priced with premium', textB: 'Rush jobs priced normally' },
  { qid: 'DS_LEADERSHIP_12', textA: 'Install delays have a policy', textB: 'Install delays are absorbed' },
  { qid: 'DS_LEADERSHIP_13', textA: 'Transport/handling priced', textB: 'Transport/handling is ignored' },
  { qid: 'DS_LEADERSHIP_14', textA: 'Material substitutions are priced', textB: 'Substitutions are absorbed' },
  { qid: 'DS_LEADERSHIP_15', textA: 'Quote vs actual is reviewed weekly', textB: 'Reviewed occasionally' },
  { qid: 'DS_LEADERSHIP_16', textA: 'Pricing updates follow cost changes', textB: 'Pricing stays fixed' },
  { qid: 'DS_LEADERSHIP_17', textA: 'Job profitability by customer type', textB: 'No segmentation' },
  { qid: 'DS_LEADERSHIP_18', textA: 'Disputes use documents', textB: 'Disputes use negotiation' },
  { qid: 'DS_LEADERSHIP_19', textA: 'Payment terms are enforced', textB: 'Payment terms are flexible' },
  { qid: 'DS_LEADERSHIP_20', textA: 'Bad-fit work is declined', textB: 'Bad-fit work is accepted' }
];

// P5: Operations (Production)
const p5_qs = [
  { qid: 'QS_OPERATIONS_1', textA: 'We limit WIP to protect flow', textB: 'We keep many jobs open' },
  { qid: 'QS_OPERATIONS_2', textA: 'We track downtime and fix root causes', textB: 'We accept downtime as normal' },
  { qid: 'QS_OPERATIONS_3', textA: 'Rework is logged by cause', textB: 'Rework is fixed and forgotten' },
  { qid: 'QS_OPERATIONS_4', textA: 'Delivery/install has a checklist', textB: 'Delivery/install depends on memory' }
];

const p5_ds = [
  { qid: 'DS_OPERATIONS_1', textA: 'Daily plan uses reason codes', textB: 'Daily plan uses stories' },
  { qid: 'DS_OPERATIONS_2', textA: 'Bottleneck is identified daily', textB: 'Bottleneck is assumed' },
  { qid: 'DS_OPERATIONS_3', textA: 'WIP limits are explicit', textB: 'WIP grows with urgency' },
  { qid: 'DS_OPERATIONS_4', textA: 'Setup time is measured', textB: 'Setup time is ignored' },
  { qid: 'DS_OPERATIONS_5', textA: 'Cutting is standardized', textB: 'Cutting varies by operator' },
  { qid: 'DS_OPERATIONS_6', textA: 'Fit-up SOP exists', textB: 'Fit-up is "craft knowledge"' },
  { qid: 'DS_OPERATIONS_7', textA: 'Jigs exist for repeats', textB: 'Jigs are built after errors' },
  { qid: 'DS_OPERATIONS_8', textA: 'Rework hours tracked', textB: 'Rework tracked only as complaints' },
  { qid: 'DS_OPERATIONS_9', textA: 'Scrap value tracked', textB: 'Scrap is just "offcuts"' },
  { qid: 'DS_OPERATIONS_10', textA: 'Downtime causes are analyzed', textB: 'Downtime is accepted' },
  { qid: 'DS_OPERATIONS_11', textA: 'PM schedule exists', textB: 'PM is reactive' },
  { qid: 'DS_OPERATIONS_12', textA: 'OEE is tracked for key machines', textB: 'OEE is not tracked' },
  { qid: 'DS_OPERATIONS_13', textA: 'Work instructions exist per product type', textB: 'Work relies on experience' },
  { qid: 'DS_OPERATIONS_14', textA: 'Grinding time is measured', textB: 'Grinding time is invisible' },
  { qid: 'DS_OPERATIONS_15', textA: 'Quality stops flow when needed', textB: 'Quality is fixed at the end' },
  { qid: 'DS_OPERATIONS_16', textA: 'Coating prep is controlled', textB: 'Coating prep varies by person' },
  { qid: 'DS_OPERATIONS_17', textA: 'Handling/packing prevents damage', textB: 'Damage is "bad luck"' },
  { qid: 'DS_OPERATIONS_18', textA: 'Delivery schedules are confirmed early', textB: 'Delivery schedules are last-minute' },
  { qid: 'DS_OPERATIONS_19', textA: 'Throughput targets exist', textB: 'Throughput is not measured' },
  { qid: 'DS_OPERATIONS_20', textA: 'Improvements target biggest losses', textB: 'Improvements target loudest issues' }
];

// P6: Money (Finance)
const p6_qs = [
  { qid: 'QS_MONEY_1', textA: 'We close job costs and margins routinely', textB: 'We mainly track revenue' },
  { qid: 'QS_MONEY_2', textA: 'Inventory is cycle-counted', textB: 'Inventory is checked when missing' },
  { qid: 'QS_MONEY_3', textA: 'Stock has min/max rules', textB: 'Stock is reordered by memory' },
  { qid: 'QS_MONEY_4', textA: 'Collections follow a cadence', textB: 'Collections happen when cash is tight' }
];

const p6_ds = [
  { qid: 'DS_MONEY_1', textA: 'Job closeout happens every job', textB: 'Closeout happens only on big jobs' },
  { qid: 'DS_MONEY_2', textA: 'WIP aging reviewed weekly', textB: 'WIP reviewed when deadlines hit' },
  { qid: 'DS_MONEY_3', textA: 'Inventory accuracy measured monthly', textB: 'Inventory accuracy assumed' },
  { qid: 'DS_MONEY_4', textA: 'Issue slips control material use', textB: 'Materials are taken as needed' },
  { qid: 'DS_MONEY_5', textA: 'Min/max exists for fast movers', textB: 'Reordering is intuition' },
  { qid: 'DS_MONEY_6', textA: 'Shrinkage tracked as variance', textB: 'Shrinkage treated as normal loss' },
  { qid: 'DS_MONEY_7', textA: 'Scrap is valued and tracked', textB: 'Scrap is ignored' },
  { qid: 'DS_MONEY_8', textA: 'Consumables are tracked per job', textB: 'Consumables disappear into overhead' },
  { qid: 'DS_MONEY_9', textA: 'Invoicing is triggered by checklist', textB: 'Invoicing waits for someone' },
  { qid: 'DS_MONEY_10', textA: 'Compliance packs are organized', textB: 'Compliance packs are hunted down' },
  { qid: 'DS_MONEY_11', textA: 'Supplier performance is rated', textB: 'Supplier performance is assumed' },
  { qid: 'DS_MONEY_12', textA: 'Purchase approvals have limits', textB: 'Buying is flexible always' },
  { qid: 'DS_MONEY_13', textA: 'Pricing updates follow cost changes', textB: 'Pricing stays fixed' },
  { qid: 'DS_MONEY_14', textA: 'Overdue invoices have escalation', textB: 'Overdues are negotiated' },
  { qid: 'DS_MONEY_15', textA: 'Cash forecast updated weekly', textB: 'Cash forecast updated monthly' },
  { qid: 'DS_MONEY_16', textA: 'Profitability analyzed by job type', textB: 'Profitability analyzed overall' },
  { qid: 'DS_MONEY_17', textA: 'Warranty costs are measured', textB: 'Warranty costs are hidden' },
  { qid: 'DS_MONEY_18', textA: 'Returns/damage are measured', textB: 'Returns/damage are "bad luck"' },
  { qid: 'DS_MONEY_19', textA: 'Slow-moving stock is actioned', textB: 'Slow-moving stock is ignored' },
  { qid: 'DS_MONEY_20', textA: 'Financial KPIs are visible to team leads', textB: 'KPIs stay in finance only' }
];

// P7: People (Culture)
const p7_qs = [
  { qid: 'QS_PEOPLE_1', textA: 'Skills are mapped and cross-trained', textB: 'Skills live in a few people' },
  { qid: 'QS_PEOPLE_2', textA: '5S is audited weekly', textB: '5S happens when messy' },
  { qid: 'QS_PEOPLE_3', textA: 'Near misses are reported and closed', textB: 'Near misses are handled quietly' },
  { qid: 'QS_PEOPLE_4', textA: 'Improvements have owners and dates', textB: 'Improvements are suggestions only' }
];

const p7_ds = [
  { qid: 'DS_PEOPLE_1', textA: 'Bottleneck has trained backups', textB: 'Bottleneck relies on one expert' },
  { qid: 'DS_PEOPLE_2', textA: 'SOPs are used daily', textB: 'SOPs exist but aren’t used' },
  { qid: 'DS_PEOPLE_3', textA: '5S zones have owners', textB: '5S is "everyone’s job"' },
  { qid: 'DS_PEOPLE_4', textA: 'Tool locations are standardized', textB: 'Tools move around' },
  { qid: 'DS_PEOPLE_5', textA: 'Training targets top defect causes', textB: 'Training is only onboarding' },
  { qid: 'DS_PEOPLE_6', textA: 'Supervisors coach using data', textB: 'Supervisors coach by urgency' },
  { qid: 'DS_PEOPLE_7', textA: 'Near misses are logged', textB: 'Near misses are verbal' },
  { qid: 'DS_PEOPLE_8', textA: 'Safety is enforced under pressure', textB: 'Safety slips under deadlines' },
  { qid: 'DS_PEOPLE_9', textA: 'Improvement backlog is ranked by impact', textB: 'Backlog is random' },
  { qid: 'DS_PEOPLE_10', textA: 'Meetings close actions daily', textB: 'Meetings share updates only' },
  { qid: 'DS_PEOPLE_11', textA: 'Recognition rewards FPFT + safety', textB: 'Recognition rewards speed only' },
  { qid: 'DS_PEOPLE_12', textA: 'Hiring targets skill gaps', textB: 'Hiring fills headcount' },
  { qid: 'DS_PEOPLE_13', textA: 'Turnover causes are analyzed', textB: 'Turnover is accepted' },
  { qid: 'DS_PEOPLE_14', textA: 'Layout changes are tested', textB: 'Layout changes are ad hoc' },
  { qid: 'DS_PEOPLE_15', textA: 'Leaders do Gemba walks', textB: 'Leaders manage from office' },
  { qid: 'DS_PEOPLE_16', textA: 'Mistakes trigger learning loops', textB: 'Mistakes trigger blame' },
  { qid: 'DS_PEOPLE_17', textA: 'Teams suggest improvements weekly', textB: 'Suggestions happen occasionally' },
  { qid: 'DS_PEOPLE_18', textA: 'Accountability is role-based', textB: 'Accountability is group-based' },
  { qid: 'DS_PEOPLE_19', textA: 'Culture is built through routines', textB: 'Culture depends on personalities' },
  { qid: 'DS_PEOPLE_20', textA: 'Performance is visible and shared', textB: 'Performance is private' }
];

export const questions: QuestionDefinition[] = [
  ...p1_qs.map(q => ({ ...q, pillar: 'Risk', weight: 1, ...defaultProps })),
  ...p1_ds.map(q => ({ ...q, pillar: 'Risk', weight: 1, ...defaultProps })),
  ...p2_qs.map(q => ({ ...q, pillar: 'Innovation', weight: 1, ...defaultProps })),
  ...p2_ds.map(q => ({ ...q, pillar: 'Innovation', weight: 1, ...defaultProps })),
  ...p3_qs.map(q => ({ ...q, pillar: 'Market', weight: 1, ...defaultProps })),
  ...p3_ds.map(q => ({ ...q, pillar: 'Market', weight: 1, ...defaultProps })),
  ...p4_qs.map(q => ({ ...q, pillar: 'Leadership', weight: 1, ...defaultProps })),
  ...p4_ds.map(q => ({ ...q, pillar: 'Leadership', weight: 1, ...defaultProps })),
  ...p5_qs.map(q => ({ ...q, pillar: 'Operations', weight: 1, ...defaultProps })),
  ...p5_ds.map(q => ({ ...q, pillar: 'Operations', weight: 1, ...defaultProps })),
  ...p6_qs.map(q => ({ ...q, pillar: 'Money', weight: 1, ...defaultProps })),
  ...p6_ds.map(q => ({ ...q, pillar: 'Money', weight: 1, ...defaultProps })),
  ...p7_qs.map(q => ({ ...q, pillar: 'People', weight: 1, ...defaultProps })),
  ...p7_ds.map(q => ({ ...q, pillar: 'People', weight: 1, ...defaultProps }))
] as QuestionDefinition[];
