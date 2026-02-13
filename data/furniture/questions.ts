
import { QuestionDefinition } from '../../types';

const defaultProps = {
  line_type: ['Furniture & carpentry'],
  industry: 'furniture', // ensuring industry matches valid types
  signal_tags: []
};

// P1: Risk (Quality, Compliance & Safety)
const p1_qs = [
  { qid: 'QS_RISK_1', textA: 'We define "acceptable finish" with examples and checks', textB: 'We rely on skilled judgment at final stage' },
  { qid: 'QS_RISK_2', textA: 'Moisture/storage is standardized per material type', textB: 'Moisture is handled when issues appear' },
  { qid: 'QS_RISK_3', textA: 'Install has a punch-list closure routine', textB: 'Install is closed when client seems satisfied' },
  { qid: 'QS_RISK_4', textA: 'Dust control is routine and logged', textB: 'Dust control happens when buildup is visible' }
];

const p1_ds = [
  { qid: 'DS_RISK_1', textA: 'First-pass fit is measured weekly', textB: 'Fit quality is reviewed only on complaints' },
  { qid: 'DS_RISK_2', textA: 'Finish defects are logged by type', textB: 'Finish issues are fixed case-by-case' },
  { qid: 'DS_RISK_3', textA: 'Moisture/acclimatization is time-boxed', textB: 'Material goes into production when needed' },
  { qid: 'DS_RISK_4', textA: 'Hardware positions use jigs/templates', textB: 'Hardware positions are marked manually' },
  { qid: 'DS_RISK_5', textA: 'Install checklist used every job', textB: 'Install checklist used on "big jobs"' },
  { qid: 'DS_RISK_6', textA: 'Punch-lists are closed with photos', textB: 'Punch-lists are closed verbally' },
  { qid: 'DS_RISK_7', textA: 'Warranty causes are trended', textB: 'Warranty work is treated as unavoidable' },
  { qid: 'DS_RISK_8', textA: 'Safety near misses are captured', textB: 'Near misses are handled informally' },
  { qid: 'DS_RISK_9', textA: 'Dust extraction inspected on cadence', textB: 'Extraction checked when airflow feels weak' },
  { qid: 'DS_RISK_10', textA: 'Compliance docs are centralized', textB: 'Compliance docs sit with purchasing/suppliers' },
  { qid: 'DS_RISK_11', textA: 'Edge safety (splinters/sharp edges) is checked', textB: 'Edge safety is assumed from sanding' },
  { qid: 'DS_RISK_12', textA: 'Dimensional checks happen in-process', textB: 'Dimensional checks happen at assembly' },
  { qid: 'DS_RISK_13', textA: 'Rework hours are tracked by cause', textB: 'Rework hours are tracked overall' },
  { qid: 'DS_RISK_14', textA: 'Finish curing times are respected', textB: 'Curing times depend on delivery pressure' },
  { qid: 'DS_RISK_15', textA: 'Nonconformance triggers root-cause closure', textB: 'Nonconformance triggers quick fix' },
  { qid: 'DS_RISK_16', textA: 'Client acceptance criteria are documented', textB: 'Acceptance criteria are "industry standard"' },
  { qid: 'DS_RISK_17', textA: 'Tool calibration/measurement checks exist', textB: 'Tools are replaced when inaccurate' },
  { qid: 'DS_RISK_18', textA: 'Install teams have standard handover notes', textB: 'Install depends on memory' },
  { qid: 'DS_RISK_19', textA: 'Quality training targets top defect causes', textB: 'Training is general onboarding' },
  { qid: 'DS_RISK_20', textA: 'Quality KPIs are visible to the floor', textB: 'Quality is discussed in management only' }
];

// P2: Innovation (Design, Estimation & Job Readiness)
const p2_qs = [
  { qid: 'QS_INNOVATION_1', textA: 'Jobs start only when readiness gate is passed', textB: 'Jobs start to keep the shop busy' },
  { qid: 'QS_INNOVATION_2', textA: 'Site measurement follows a checklist + photos', textB: 'Site measurement relies on experience' },
  { qid: 'QS_INNOVATION_3', textA: 'Cutlists/BOMs are generated from drawings', textB: 'Cutlists/BOMs are built from memory' },
  { qid: 'QS_INNOVATION_4', textA: 'Revisions are controlled with "latest only" rules', textB: 'Revisions are shared as updates' }
];

const p2_ds = [
  { qid: 'DS_INNOVATION_1', textA: 'Quote uses operation-based hours', textB: 'Quote uses similar job intuition' },
  { qid: 'DS_INNOVATION_2', textA: 'BOM includes finish + consumables', textB: 'BOM focuses mainly on timber/panels' },
  { qid: 'DS_INNOVATION_3', textA: 'Site measure captures plumb/level', textB: 'Site measure captures dimensions only' },
  { qid: 'DS_INNOVATION_4', textA: 'Nesting planned before cutting', textB: 'Nesting decided at the saw' },
  { qid: 'DS_INNOVATION_5', textA: 'Hardware counts are verified', textB: 'Hardware added as needed' },
  { qid: 'DS_INNOVATION_6', textA: 'Finish system locked pre-start', textB: 'Finish chosen near sanding stage' },
  { qid: 'DS_INNOVATION_7', textA: 'Drawings have tolerances', textB: 'Drawings show nominal dimensions only' },
  { qid: 'DS_INNOVATION_8', textA: 'Change orders have pricing rules', textB: 'Change orders are negotiated case-by-case' },
  { qid: 'DS_INNOVATION_9', textA: 'Job route is planned', textB: 'Job route is "normal flow"' },
  { qid: 'DS_INNOVATION_10', textA: 'Complex jobs prototype one component', textB: 'Complex jobs go straight to production' },
  { qid: 'DS_INNOVATION_11', textA: 'Readiness score is tracked', textB: 'Readiness is assumed' },
  { qid: 'DS_INNOVATION_12', textA: 'Material substitutions are approved', textB: 'Substitutions happen under pressure' },
  { qid: 'DS_INNOVATION_13', textA: 'Offcuts are categorized + reused', textB: 'Offcuts are stored randomly' },
  { qid: 'DS_INNOVATION_14', textA: 'Design errors are logged and prevented', textB: 'Design errors are fixed quickly and forgotten' },
  { qid: 'DS_INNOVATION_15', textA: 'Install constraints captured early', textB: 'Install constraints discovered on site' },
  { qid: 'DS_INNOVATION_16', textA: 'Drawings accessible to everyone centrally', textB: 'Drawings shared via chat/printouts' },
  { qid: 'DS_INNOVATION_17', textA: 'Customer approvals are documented', textB: 'Approvals are verbal' },
  { qid: 'DS_INNOVATION_18', textA: 'Lead times are derived from capacity', textB: 'Lead times are sales promises' },
  { qid: 'DS_INNOVATION_19', textA: 'Job readiness meeting happens weekly', textB: 'Job readiness happens informally' },
  { qid: 'DS_INNOVATION_20', textA: 'Engineering throughput is measured', textB: 'Engineering is not measured' }
];

// P3: Market (Sales, Pipeline)
const p3_qs = [
  { qid: 'QS_MARKET_1', textA: 'Every lead enters a follow-up cadence', textB: 'Follow-up depends on the day’s workload' },
  { qid: 'QS_MARKET_2', textA: 'Quotes include scope boundaries and signoffs', textB: 'Quotes focus on price and delivery date' },
  { qid: 'QS_MARKET_3', textA: 'Deposits are standard before buying materials', textB: 'Deposits are requested selectively' },
  { qid: 'QS_MARKET_4', textA: 'Referrals are requested systematically', textB: 'Referrals happen naturally' }
];

const p3_ds = [
  { qid: 'DS_MARKET_1', textA: 'Response time is measured', textB: 'Response time is "as soon as possible"' },
  { qid: 'DS_MARKET_2', textA: 'Quotes have options tiers', textB: 'Quotes are one price only' },
  { qid: 'DS_MARKET_3', textA: 'Scope is written and signed', textB: 'Scope is agreed verbally' },
  { qid: 'DS_MARKET_4', textA: 'Change orders are priced formally', textB: 'Change orders are absorbed sometimes' },
  { qid: 'DS_MARKET_5', textA: 'Sales pipeline reviewed weekly', textB: 'Pipeline reviewed monthly' },
  { qid: 'DS_MARKET_6', textA: 'Customer segments tracked', textB: 'Customers treated the same' },
  { qid: 'DS_MARKET_7', textA: 'Photos/samples used to set expectations', textB: 'Expectations set verbally' },
  { qid: 'DS_MARKET_8', textA: 'Delivery promises tied to capacity', textB: 'Delivery promises tied to sales pressure' },
  { qid: 'DS_MARKET_9', textA: 'Warranty terms are explicit', textB: 'Warranty is "we’ll handle it"' },
  { qid: 'DS_MARKET_10', textA: 'Testimonials captured after delivery', textB: 'Testimonials captured occasionally' },
  { qid: 'DS_MARKET_11', textA: 'B2B accounts have SLAs', textB: 'B2B accounts handled like retail customers' },
  { qid: 'DS_MARKET_12', textA: 'Lead sources tracked', textB: 'Lead sources not tracked' },
  { qid: 'DS_MARKET_13', textA: 'Discount approvals exist', textB: 'Discounts are flexible always' },
  { qid: 'DS_MARKET_14', textA: 'Aftercare check-ins scheduled', textB: 'Aftercare is complaint-driven' },
  { qid: 'DS_MARKET_15', textA: 'Customer disputes use documentation', textB: 'Disputes rely on negotiation' },
  { qid: 'DS_MARKET_16', textA: 'Install scheduling is confirmed', textB: 'Install scheduling is last-minute' },
  { qid: 'DS_MARKET_17', textA: 'Upsell is value-based (durability, finish)', textB: 'Upsell is price-based' },
  { qid: 'DS_MARKET_18', textA: 'CRM notes are standardized', textB: 'CRM notes are personal styles' },
  { qid: 'DS_MARKET_19', textA: 'Sales handover to production is documented', textB: 'Sales handover is verbal' },
  { qid: 'DS_MARKET_20', textA: 'Repeat customers have priority policy', textB: 'Priority is first-come only' }
];

// P4: Leadership (Pricing, Costing)
const p4_qs = [
  { qid: 'QS_LEADERSHIP_1', textA: 'We price from materials + operation hours', textB: 'We price mainly from competitor market rates' },
  { qid: 'QS_LEADERSHIP_2', textA: 'Change orders are priced before execution', textB: 'Changes are handled "as we go"' },
  { qid: 'QS_LEADERSHIP_3', textA: 'Deposits are required before procurement', textB: 'Deposits depend on customer trust' },
  { qid: 'QS_LEADERSHIP_4', textA: 'Warranty terms are explicit and bounded', textB: 'Warranty is flexible to keep goodwill' }
];

const p4_ds = [
  { qid: 'DS_LEADERSHIP_1', textA: 'Labor hours estimated per operation', textB: 'Labor hours estimated as a lump sum' },
  { qid: 'DS_LEADERSHIP_2', textA: 'Wastage factor is included', textB: 'Wastage handled by "being careful"' },
  { qid: 'DS_LEADERSHIP_3', textA: 'Finish labor/time priced separately', textB: 'Finish labor assumed in base price' },
  { qid: 'DS_LEADERSHIP_4', textA: 'Install delays have a policy', textB: 'Install delays absorbed' },
  { qid: 'DS_LEADERSHIP_5', textA: 'Deposits tied to materials', textB: 'Deposits tied to customer relationship' },
  { qid: 'DS_LEADERSHIP_6', textA: 'Payment milestones exist', textB: 'Payment is end-only' },
  { qid: 'DS_LEADERSHIP_7', textA: 'Discounts require approval', textB: 'Discounts are flexible always' },
  { qid: 'DS_LEADERSHIP_8', textA: 'Change orders have fee schedule', textB: 'Change orders negotiated each time' },
  { qid: 'DS_LEADERSHIP_9', textA: 'Warranty exclusions documented', textB: 'Warranty exclusions verbal' },
  { qid: 'DS_LEADERSHIP_10', textA: 'Quote vs actual reviewed weekly', textB: 'Reviewed occasionally' },
  { qid: 'DS_LEADERSHIP_11', textA: 'Material substitutions priced', textB: 'Material substitutions absorbed' },
  { qid: 'DS_LEADERSHIP_12', textA: 'Job profitability tracked', textB: 'Only revenue tracked' },
  { qid: 'DS_LEADERSHIP_13', textA: 'Transport/handling cost included', textB: 'Transport handled case-by-case' },
  { qid: 'DS_LEADERSHIP_14', textA: 'Rush jobs priced with premium', textB: 'Rush jobs priced normally' },
  { qid: 'DS_LEADERSHIP_15', textA: 'Scope boundaries signed', textB: 'Scope boundaries implied' },
  { qid: 'DS_LEADERSHIP_16', textA: 'Packaging cost included', textB: 'Packaging treated as overhead' },
  { qid: 'DS_LEADERSHIP_17', textA: 'Tooling/jigs cost amortized', textB: 'Tooling costs ignored' },
  { qid: 'DS_LEADERSHIP_18', textA: 'Rework cost included in learning loop', textB: 'Rework cost ignored' },
  { qid: 'DS_LEADERSHIP_19', textA: 'Contract terms updated by job type', textB: 'Same terms for all' },
  { qid: 'DS_LEADERSHIP_20', textA: 'Decline script exists for bad-fit work', textB: 'Bad-fit work accepted to stay busy' }
];

// P5: Operations (Production Execution)
const p5_qs = [
  { qid: 'QS_OPERATIONS_1', textA: 'We limit WIP to protect flow', textB: 'We keep many jobs open to stay busy' },
  { qid: 'QS_OPERATIONS_2', textA: 'Tool maintenance is scheduled', textB: 'Tool maintenance happens when problems appear' },
  { qid: 'QS_OPERATIONS_3', textA: 'Packaging is standardized', textB: 'Packaging is handled case-by-case' },
  { qid: 'QS_OPERATIONS_4', textA: 'Rework is logged and reduced', textB: 'Rework is treated as normal correction' }
];

const p5_ds = [
  { qid: 'DS_OPERATIONS_1', textA: 'WIP limits are explicit', textB: 'WIP is managed by urgency' },
  { qid: 'DS_OPERATIONS_2', textA: 'Daily plan uses reason codes', textB: 'Daily plan uses explanations' },
  { qid: 'DS_OPERATIONS_3', textA: 'Cutting uses nesting rules', textB: 'Cutting optimizes on the fly' },
  { qid: 'DS_OPERATIONS_4', textA: 'Blade/bit logs are kept', textB: 'Blades/bits replaced when dull' },
  { qid: 'DS_OPERATIONS_5', textA: 'Jigs exist for repeats', textB: 'Jigs built when problems occur' },
  { qid: 'DS_OPERATIONS_6', textA: 'Assembly checks happen in-process', textB: 'Assembly checks at the end' },
  { qid: 'DS_OPERATIONS_7', textA: 'Finish area has contamination controls', textB: 'Finish relies on careful workers' },
  { qid: 'DS_OPERATIONS_8', textA: 'Drying/curing space is planned', textB: 'Drying depends on available space' },
  { qid: 'DS_OPERATIONS_9', textA: 'Rework hours tracked by cause', textB: 'Rework tracked overall' },
  { qid: 'DS_OPERATIONS_10', textA: 'Scrap is measured daily', textB: 'Scrap is noticed visually' },
  { qid: 'DS_OPERATIONS_11', textA: 'Offcuts are organized by size/type', textB: 'Offcuts are piled' },
  { qid: 'DS_OPERATIONS_12', textA: 'Delivery damage is tracked', textB: 'Delivery damage is occasional bad luck' },
  { qid: 'DS_OPERATIONS_13', textA: 'Install scheduling is confirmed early', textB: 'Install scheduling is last-minute' },
  { qid: 'DS_OPERATIONS_14', textA: 'Bottleneck station is identified daily', textB: 'Bottleneck is assumed' },
  { qid: 'DS_OPERATIONS_15', textA: 'Setup time is measured', textB: 'Setup time is ignored' },
  { qid: 'DS_OPERATIONS_16', textA: 'Work instructions exist per product type', textB: 'Work relies on experience' },
  { qid: 'DS_OPERATIONS_17', textA: 'Tool downtime causes are analyzed', textB: 'Tool downtime is accepted' },
  { qid: 'DS_OPERATIONS_18', textA: 'Quality stops flow when needed', textB: 'Quality is fixed at the end' },
  { qid: 'DS_OPERATIONS_19', textA: 'Layout supports flow', textB: 'Layout grew organically' },
  { qid: 'DS_OPERATIONS_20', textA: 'Improvements are prioritized by biggest losses', textB: 'Improvements follow complaints' }
];

// P6: Money (Finance, Inventory)
const p6_qs = [
  { qid: 'QS_MONEY_1', textA: 'We track job margin vs quote', textB: 'We track revenue and hope margins work' },
  { qid: 'QS_MONEY_2', textA: 'Inventory is cycle-counted on schedule', textB: 'Inventory is checked when stockouts happen' },
  { qid: 'QS_MONEY_3', textA: 'Hardware reorders are automated by min/max', textB: 'Hardware is bought when someone notices' },
  { qid: 'QS_MONEY_4', textA: 'Collections follow a cadence', textB: 'Collections happen when cash is needed' }
];

const p6_ds = [
  { qid: 'DS_MONEY_1', textA: 'Job closeout happens every job', textB: 'Job closeout happens on big jobs' },
  { qid: 'DS_MONEY_2', textA: 'Stock accuracy measured monthly', textB: 'Stock accuracy assumed' },
  { qid: 'DS_MONEY_3', textA: 'Issue slips control consumption', textB: 'Materials are taken as needed' },
  { qid: 'DS_MONEY_4', textA: 'Min/max exists for fast movers', textB: 'Reordering is intuition' },
  { qid: 'DS_MONEY_5', textA: 'Shrinkage tracked as variance', textB: 'Shrinkage treated as "normal loss"' },
  { qid: 'DS_MONEY_6', textA: 'WIP aging reviewed weekly', textB: 'WIP reviewed when deadlines hit' },
  { qid: 'DS_MONEY_7', textA: 'Cash forecast updated weekly', textB: 'Cash forecast updated monthly' },
  { qid: 'DS_MONEY_8', textA: 'Overdue invoices have escalation', textB: 'Overdue invoices are negotiated' },
  { qid: 'DS_MONEY_9', textA: 'Purchase approvals have limits', textB: 'Purchasing is flexible always' },
  { qid: 'DS_MONEY_10', textA: 'Supplier performance is rated', textB: 'Supplier performance is assumed' },
  { qid: 'DS_MONEY_11', textA: 'Scrap is monetized/reused by rules', textB: 'Scrap is piled' },
  { qid: 'DS_MONEY_12', textA: 'Consumables usage is tracked', textB: 'Consumables are expensed generally' },
  { qid: 'DS_MONEY_13', textA: 'Deposits are linked to materials', textB: 'Deposits are optional' },
  { qid: 'DS_MONEY_14', textA: 'Delivery costs are tracked', textB: 'Delivery costs are treated as overhead' },
  { qid: 'DS_MONEY_15', textA: 'Warranty costs are tracked', textB: 'Warranty costs are hidden in labor' },
  { qid: 'DS_MONEY_16', textA: 'Profitability analyzed by product type', textB: 'Profitability analyzed overall only' },
  { qid: 'DS_MONEY_17', textA: 'Pricing updates follow cost changes', textB: 'Pricing stays stable to avoid conflict' },
  { qid: 'DS_MONEY_18', textA: 'Returns/damage costs are measured', textB: 'Returns/damage are treated as bad luck' },
  { qid: 'DS_MONEY_19', textA: 'Inventory slow movers are actioned', textB: 'Slow movers are ignored' },
  { qid: 'DS_MONEY_20', textA: 'Financial KPIs visible to shop leads', textB: 'Financial KPIs stay with finance only' }
];

// P7: People (Culture)
const p7_qs = [
  { qid: 'QS_PEOPLE_1', textA: 'Skills are mapped and cross-trained', textB: 'Skills are learned on the job' },
  { qid: 'QS_PEOPLE_2', textA: '5S is audited weekly', textB: '5S happens when the shop feels messy' },
  { qid: 'QS_PEOPLE_3', textA: 'Near misses are reported and closed', textB: 'Near misses are handled quietly' },
  { qid: 'QS_PEOPLE_4', textA: 'Improvement targets measurable losses', textB: 'Improvement follows ideas and complaints' }
];

const p7_ds = [
  { qid: 'DS_PEOPLE_1', textA: 'Skill coverage tracked by station', textB: 'Skill coverage assumed' },
  { qid: 'DS_PEOPLE_2', textA: 'Backups exist for bottlenecks', textB: 'Bottlenecks rely on key people' },
  { qid: 'DS_PEOPLE_3', textA: 'SOPs are posted and used', textB: 'SOPs are in someone’s head' },
  { qid: 'DS_PEOPLE_4', textA: '5S zones owned by teams', textB: '5S is everyone’s job (so no one owns it)' },
  { qid: 'DS_PEOPLE_5', textA: 'Tool locations are standardized', textB: 'Tools are placed where convenient' },
  { qid: 'DS_PEOPLE_6', textA: 'Training follows defect/scrap trends', textB: 'Training follows onboarding only' },
  { qid: 'DS_PEOPLE_7', textA: 'Huddles close actions daily', textB: 'Huddles share updates only' },
  { qid: 'DS_PEOPLE_8', textA: 'Near misses are logged', textB: 'Near misses are verbal' },
  { qid: 'DS_PEOPLE_9', textA: 'Safety learning is routine', textB: 'Safety is posters and PPE' },
  { qid: 'DS_PEOPLE_10', textA: 'Supervisor coaching cadence exists', textB: 'Coaching happens after mistakes' },
  { qid: 'DS_PEOPLE_11', textA: 'Improvements have owners/dates', textB: 'Improvements are suggestions only' },
  { qid: 'DS_PEOPLE_12', textA: 'Kaizen backlog ranked by impact', textB: 'Kaizen backlog is random' },
  { qid: 'DS_PEOPLE_13', textA: 'Productivity tracked per team', textB: 'Productivity tracked overall' },
  { qid: 'DS_PEOPLE_14', textA: 'Recognition rewards first-pass quality', textB: 'Recognition rewards speed' },
  { qid: 'DS_PEOPLE_15', textA: 'Layout changes are tested', textB: 'Layout changes happen ad hoc' },
  { qid: 'DS_PEOPLE_16', textA: 'Meetings use dashboards', textB: 'Meetings use stories' },
  { qid: 'DS_PEOPLE_17', textA: 'Accountability is role-based', textB: 'Accountability is group-based' },
  { qid: 'DS_PEOPLE_18', textA: 'Turnover causes are analyzed', textB: 'Turnover is accepted' },
  { qid: 'DS_PEOPLE_19', textA: 'Hiring targets skill gaps', textB: 'Hiring fills headcount' },
  { qid: 'DS_PEOPLE_20', textA: 'Culture is documented through routines', textB: 'Culture depends on personalities' }
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
