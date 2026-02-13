
import { QuestionDefinition } from '../../types';

const defaultProps = {
  line_type: ['Bricks & blocks / concrete products', 'Clay bricks / ceramics'],
  industry: 'bricks',
  signal_tags: []
};

// P1: Risk (Quality, Standards)
const p1_qs = [
  { qid: 'QS_RISK_1', textA: 'We can show recent test results per SKU on request', textB: 'We rely on reputation and visual inspection' },
  { qid: 'QS_RISK_2', textA: 'Pallets are tagged by batch and curing zone', textB: 'Pallets are mixed and identified by memory' },
  { qid: 'QS_RISK_3', textA: 'Yard handling has a strict stacking/transport rule', textB: 'Yard handling is "whatever gets it done"' },
  { qid: 'QS_RISK_4', textA: 'When a defect appears, we isolate and investigate', textB: 'We discount and move product fast' }
];

const p1_ds = [
  { qid: 'DS_RISK_1', textA: 'Strength trend charts drive settings changes', textB: 'Strength results are archived' },
  { qid: 'DS_RISK_2', textA: 'Mold wear is measured and controlled', textB: 'Mold wear is noticed when complaints rise' },
  { qid: 'DS_RISK_3', textA: 'Absorption/density is tracked for durability risk', textB: 'Absorption/density is rarely checked' },
  { qid: 'DS_RISK_4', textA: 'Quarantine tags are used consistently', textB: 'Holds are verbal' },
  { qid: 'DS_RISK_5', textA: 'Breakage is coded by cause (handling/curing/tooling)', textB: 'Breakage is one number' },
  { qid: 'DS_RISK_6', textA: 'Calibration is scheduled and recorded', textB: 'Calibration is "when something seems off"' },
  { qid: 'DS_RISK_7', textA: 'Visual standards exist (chips, cracks, voids)', textB: '“Looks fine” varies by person' },
  { qid: 'DS_RISK_8', textA: 'Customer complaints trigger root cause analysis', textB: 'Customer complaints trigger refunds' },
  { qid: 'DS_RISK_9', textA: 'Traceability can isolate affected lots quickly', textB: 'We isolate “everything” first' },
  { qid: 'DS_RISK_10', textA: 'We keep a retention sample/record for major runs', textB: 'We don’t retain evidence' },
  { qid: 'DS_RISK_11', textA: 'Curing records exist (time/condition)', textB: 'Curing is assumed' },
  { qid: 'DS_RISK_12', textA: 'Damaged pallets are rejected', textB: 'Pallets are reused until failure' },
  { qid: 'DS_RISK_13', textA: 'QC and Production meet weekly for trends', textB: 'QC and Production meet when problems happen' },
  { qid: 'DS_RISK_14', textA: 'Product is protected from rain/rapid drying', textB: 'Product exposure depends on space' },
  { qid: 'DS_RISK_15', textA: 'We separate SKUs and batches in storage', textB: 'We stack wherever there is room' },
  { qid: 'DS_RISK_16', textA: 'We can prove compliance to a stated standard', textB: 'Standards are referenced but not verified' },
  { qid: 'DS_RISK_17', textA: 'Dispatch checks product condition pre-load', textB: 'Dispatch focuses on counts only' },
  { qid: 'DS_RISK_18', textA: 'We track “first-time acceptance” by customers', textB: 'We track only revenue' },
  { qid: 'DS_RISK_19', textA: 'Quality issues trigger a temporary stop', textB: 'Quality issues are fixed later' },
  { qid: 'DS_RISK_20', textA: 'Supervisors have clear quality accountability', textB: 'Quality accountability is shared vaguely' }
];

// P2: Innovation (Mix & Process)
const p2_qs = [
  { qid: 'QS_INNOVATION_1', textA: 'We measure sand moisture and correct batch water', textB: 'We adjust water by feel' },
  { qid: 'QS_INNOVATION_2', textA: 'Curing time is tracked per pallet/batch', textB: 'Curing depends on space and urgency' },
  { qid: 'QS_INNOVATION_3', textA: 'Machine settings are standardized and reset', textB: 'Machine settings vary by operator' },
  { qid: 'QS_INNOVATION_4', textA: 'Material substitutions require sign-off', textB: 'Material substitutions happen to avoid downtime' }
];

const p2_ds = [
  { qid: 'DS_INNOVATION_1', textA: 'Each SKU has a locked mix card', textB: 'Recipes live in people’s heads' },
  { qid: 'DS_INNOVATION_2', textA: 'Moisture checks are daily', textB: 'Moisture checks are occasional' },
  { qid: 'DS_INNOVATION_3', textA: 'Cement type changes trigger a quick risk check', textB: 'Cement is “cement”' },
  { qid: 'DS_INNOVATION_4', textA: 'Water source/quality is controlled', textB: 'Water varies with availability' },
  { qid: 'DS_INNOVATION_5', textA: 'Aggregate gradation is monitored', textB: 'Aggregate quality is assumed' },
  { qid: 'DS_INNOVATION_6', textA: 'Admixture dosing is verified', textB: 'Admixture dosing is “close enough”' },
  { qid: 'DS_INNOVATION_7', textA: 'Mix time is standardized', textB: 'Mix time varies with urgency' },
  { qid: 'DS_INNOVATION_8', textA: 'Machine vibration/pressure is checked', textB: 'Machine settings drift' },
  { qid: 'DS_INNOVATION_9', textA: 'Mold wear is measured', textB: 'Mold wear is guessed' },
  { qid: 'DS_INNOVATION_10', textA: 'Curing conditions are protected', textB: 'Curing is exposed as needed' },
  { qid: 'DS_INNOVATION_11', textA: 'Pallets are turned/stacked with a rule', textB: 'Pallets are stacked wherever' },
  { qid: 'DS_INNOVATION_12', textA: 'Strength failures trigger containment', textB: 'Strength failures trigger discounts' },
  { qid: 'DS_INNOVATION_13', textA: 'Density checks are routine', textB: 'Density checks happen after issues' },
  { qid: 'DS_INNOVATION_14', textA: 'Shrinkage/cracking rates are tracked', textB: 'Cracks are treated as normal' },
  { qid: 'DS_INNOVATION_15', textA: 'We track cement kg per unit vs target', textB: 'We track only cement purchases' },
  { qid: 'DS_INNOVATION_16', textA: 'New materials are trialed before full use', textB: 'New materials are used immediately' },
  { qid: 'DS_INNOVATION_17', textA: 'Weather triggers process adjustments', textB: 'Weather is ignored' },
  { qid: 'DS_INNOVATION_18', textA: 'Production run sheets capture actual dosages', textB: 'Production captures totals only' },
  { qid: 'DS_INNOVATION_19', textA: 'Supervisors audit mix compliance weekly', textB: 'Supervisors manage by output only' },
  { qid: 'DS_INNOVATION_20', textA: 'There’s a defined response to strength drift', textB: 'Drift is accepted until complaints rise' }
];

// P3: Market (Sales & Delivery)
const p3_qs = [
  { qid: 'QS_MARKET_1', textA: 'We use pre-load checks and document pallet condition', textB: 'We load fast and trust handling' },
  { qid: 'QS_MARKET_2', textA: 'Delivery routes are planned by cost and breakage risk', textB: 'Routes are planned by habit' },
  { qid: 'QS_MARKET_3', textA: 'Lead times are standardized and protected', textB: 'Lead times are promised per customer pressure' },
  { qid: 'QS_MARKET_4', textA: 'Complaints are coded and reviewed weekly', textB: 'Complaints are handled case-by-case' }
];

const p3_ds = [
  { qid: 'DS_MARKET_1', textA: 'OTIF is tracked daily', textB: 'OTIF is discussed informally' },
  { qid: 'DS_MARKET_2', textA: 'Breakage is measured per route', textB: 'Breakage is measured monthly only' },
  { qid: 'DS_MARKET_3', textA: 'Loading patterns are standardized', textB: 'Loading varies by driver' },
  { qid: 'DS_MARKET_4', textA: 'Pallet strapping/protection is consistent', textB: 'Protection depends on time' },
  { qid: 'DS_MARKET_5', textA: 'Large orders trigger special QA checks', textB: 'Large orders ship like normal' },
  { qid: 'DS_MARKET_6', textA: 'Sales uses capacity-aware promises', textB: 'Sales sells first, operations reacts' },
  { qid: 'DS_MARKET_7', textA: 'Disputes follow a documented workflow', textB: 'Disputes are negotiated' },
  { qid: 'DS_MARKET_8', textA: 'Customer feedback changes production settings', textB: 'Feedback stays in sales' },
  { qid: 'DS_MARKET_9', textA: 'Returns are analyzed for root cause', textB: 'Returns are treated as normal' },
  { qid: 'DS_MARKET_10', textA: 'Delivery cost per unit is known', textB: 'Delivery costs are overhead' },
  { qid: 'DS_MARKET_11', textA: 'Order batching reduces changeover/freight waste', textB: 'Orders are produced randomly' },
  { qid: 'DS_MARKET_12', textA: 'Export customers get compliance packs', textB: 'Export is treated like domestic' },
  { qid: 'DS_MARKET_13', textA: 'Retail vs contractor service is different', textB: 'All customers are treated the same' },
  { qid: 'DS_MARKET_14', textA: 'Price includes handling complexity', textB: 'Handling complexity is absorbed' },
  { qid: 'DS_MARKET_15', textA: 'We track repeat-rate by customer segment', textB: 'We track only total sales' },
  { qid: 'DS_MARKET_16', textA: 'Customer onboarding explains handling', textB: 'Customers learn by trial' },
  { qid: 'DS_MARKET_17', textA: 'Damaged pallets are refused before dispatch', textB: 'Damaged pallets are shipped' },
  { qid: 'DS_MARKET_18', textA: 'Peak season has a capacity plan', textB: 'Peak season is firefighting' },
  { qid: 'DS_MARKET_19', textA: 'Quotes include realistic lead times', textB: 'Quotes are optimistic' },
  { qid: 'DS_MARKET_20', textA: 'Delivery proof reduces credit disputes', textB: 'Credit disputes are frequent' }
];

// P4: Leadership (Pricing)
const p4_qs = [
  { qid: 'QS_LEADERSHIP_1', textA: 'We know margin by SKU and customer type', textB: 'We track only total profit' },
  { qid: 'QS_LEADERSHIP_2', textA: 'Discounts require approval', textB: 'Discounts are negotiated freely' },
  { qid: 'QS_LEADERSHIP_3', textA: 'Freight and breakage are allocated to orders', textB: 'Freight/breakage are treated as overhead' },
  { qid: 'QS_LEADERSHIP_4', textA: 'We price rush and special sizes', textB: 'We absorb complexity to win orders' }
];

const p4_ds = [
  { qid: 'DS_LEADERSHIP_1', textA: 'Cost model is updated monthly', textB: 'Cost model is updated rarely' },
  { qid: 'DS_LEADERSHIP_2', textA: 'Cement kg per unit is tracked', textB: 'Cement use is tracked by purchase' },
  { qid: 'DS_LEADERSHIP_3', textA: 'Energy per 1,000 units is visible', textB: 'Energy is overhead' },
  { qid: 'DS_LEADERSHIP_4', textA: 'Margin floors exist per channel', textB: 'Any price is possible' },
  { qid: 'DS_LEADERSHIP_5', textA: 'Discounts are measured as leakage', textB: 'Discounts are just “sales”' },
  { qid: 'DS_LEADERSHIP_6', textA: 'Special sizes have a fee', textB: 'Special sizes are priced like standard' },
  { qid: 'DS_LEADERSHIP_7', textA: 'Small runs are priced higher', textB: 'Small runs are priced the same' },
  { qid: 'DS_LEADERSHIP_8', textA: 'Loss-making SKUs get redesigned/removed', textB: 'Loss-making SKUs persist' },
  { qid: 'DS_LEADERSHIP_9', textA: 'Breakage is costed to route/order', textB: 'Breakage is ignored in costing' },
  { qid: 'DS_LEADERSHIP_10', textA: 'Freight is tracked by route', textB: 'Freight is one total' },
  { qid: 'DS_LEADERSHIP_11', textA: 'Customer profitability is reviewed quarterly', textB: 'Customer profitability is assumed' },
  { qid: 'DS_LEADERSHIP_12', textA: 'Price lists are version controlled', textB: 'Price lists vary by salesperson' },
  { qid: 'DS_LEADERSHIP_13', textA: 'Price changes follow triggers', textB: 'Price changes are reactive' },
  { qid: 'DS_LEADERSHIP_14', textA: 'Promotions are ROI-checked', textB: 'Promotions are competitor-driven' },
  { qid: 'DS_LEADERSHIP_15', textA: 'Production time scheduled by contribution/hour', textB: 'Scheduled by urgency' },
  { qid: 'DS_LEADERSHIP_16', textA: 'Pack/pallet costs are included in unit cost', textB: 'Pack costs are considered overhead' },
  { qid: 'DS_LEADERSHIP_17', textA: 'Bad debt risk is priced', textB: 'Bad debt is accepted' },
  { qid: 'DS_LEADERSHIP_18', textA: 'Contract pricing has adjustment clauses', textB: 'Contracts are fixed regardless of inputs' },
  { qid: 'DS_LEADERSHIP_19', textA: 'Margin reports are trusted and timely', textB: 'Margin reports are delayed' },
  { qid: 'DS_LEADERSHIP_20', textA: 'Sales is trained on margin drivers', textB: 'Sales is trained on volume' }
];

// P5: Operations (Excellence)
const p5_qs = [
  { qid: 'QS_OPERATIONS_1', textA: 'We track downtime causes daily', textB: 'We track downtime informally' },
  { qid: 'QS_OPERATIONS_2', textA: 'Mold/tool wear is monitored with a plan', textB: 'Molds are used until failure' },
  { qid: 'QS_OPERATIONS_3', textA: 'Curing is treated as a controlled stage', textB: 'Curing is treated as storage' },
  { qid: 'QS_OPERATIONS_4', textA: 'PM is scheduled and measured', textB: 'PM happens when breakdowns force it' }
];

const p5_ds = [
  { qid: 'DS_OPERATIONS_1', textA: 'OEE is reviewed daily', textB: 'OEE is unknown' },
  { qid: 'DS_OPERATIONS_2', textA: 'Downtime has standard codes', textB: 'Downtime is described differently each time' },
  { qid: 'DS_OPERATIONS_3', textA: 'Repeat breakdowns trigger RCA', textB: 'Repeat breakdowns are accepted' },
  { qid: 'DS_OPERATIONS_4', textA: 'Critical spares are stocked', textB: 'Spares are bought in emergencies' },
  { qid: 'DS_OPERATIONS_5', textA: 'Mold inspections are scheduled', textB: 'Mold inspections are random' },
  { qid: 'DS_OPERATIONS_6', textA: 'Changeovers are timed and improved', textB: 'Changeovers are accepted' },
  { qid: 'DS_OPERATIONS_7', textA: 'Setup has a checklist', textB: 'Setup relies on experience' },
  { qid: 'DS_OPERATIONS_8', textA: 'Start-up scrap is measured', textB: 'Start-up scrap is ignored' },
  { qid: 'DS_OPERATIONS_9', textA: 'Scrap is coded by cause', textB: 'Scrap is one number' },
  { qid: 'DS_OPERATIONS_10', textA: 'Curing time is enforced', textB: 'Curing is shortened under pressure' },
  { qid: 'DS_OPERATIONS_11', textA: 'Curing capacity is planned', textB: 'Curing space is improvised' },
  { qid: 'DS_OPERATIONS_12', textA: 'Forklift handling rules protect product', textB: 'Handling is “as fast as possible”' },
  { qid: 'DS_OPERATIONS_13', textA: 'PM compliance is above target', textB: 'PM compliance is not tracked' },
  { qid: 'DS_OPERATIONS_14', textA: 'Machine settings are standardized', textB: 'Machine settings drift by operator' },
  { qid: 'DS_OPERATIONS_15', textA: 'Maintenance has a weekly plan', textB: 'Maintenance is reactive' },
  { qid: 'DS_OPERATIONS_16', textA: 'Shift handover is structured', textB: 'Handover is verbal' },
  { qid: 'DS_OPERATIONS_17', textA: 'Production schedule respects constraints', textB: 'Schedule changes hourly' },
  { qid: 'DS_OPERATIONS_18', textA: 'Quality stops are allowed', textB: 'Quality issues are fixed later' },
  { qid: 'DS_OPERATIONS_19', textA: 'Output is measured per machine hour', textB: 'Output is measured per day only' },
  { qid: 'DS_OPERATIONS_20', textA: 'Improvement actions have owners/dates', textB: 'Improvements are suggestions' }
];

// P6: Money (Supply Chain)
const p6_qs = [
  { qid: 'QS_MONEY_1', textA: 'We have min/max rules for cement/pallets', textB: 'We reorder when we notice shortages' },
  { qid: 'QS_MONEY_2', textA: 'Cycle counting keeps inventory accurate', textB: 'Inventory is corrected during crises' },
  { qid: 'QS_MONEY_3', textA: 'Credit limits are enforced', textB: 'Credit is relationship-based' },
  { qid: 'QS_MONEY_4', textA: 'Finished goods aging drives production', textB: 'Production runs by habit' }
];

const p6_ds = [
  { qid: 'DS_MONEY_1', textA: 'Supplier OTIF is measured', textB: 'Supplier OTIF is assumed' },
  { qid: 'DS_MONEY_2', textA: 'Cement variability is managed', textB: 'Cement is treated as identical' },
  { qid: 'DS_MONEY_3', textA: 'Aggregate quality is checked', textB: 'Aggregate quality is assumed' },
  { qid: 'DS_MONEY_4', textA: 'Inventory accuracy is measured', textB: 'Inventory accuracy is unknown' },
  { qid: 'DS_MONEY_5', textA: 'Emergency buys are logged', textB: 'Emergency buys are normal' },
  { qid: 'DS_MONEY_6', textA: 'Pallets are tracked and recovered', textB: 'Pallets disappear' },
  { qid: 'DS_MONEY_7', textA: 'Stockouts are coded by root cause', textB: 'Stockouts are accepted' },
  { qid: 'DS_MONEY_8', textA: 'Finished goods aging is visible', textB: 'Aging is ignored' },
  { qid: 'DS_MONEY_9', textA: 'Slow movers get action plans', textB: 'Slow movers stay forever' },
  { qid: 'DS_MONEY_10', textA: 'WIP is limited', textB: 'WIP grows with pressure' },
  { qid: 'DS_MONEY_11', textA: 'Lead times are recorded and planned', textB: 'Lead times are guessed' },
  { qid: 'DS_MONEY_12', textA: 'Credit limits exist', textB: 'Credit is flexible' },
  { qid: 'DS_MONEY_13', textA: 'Collections follows a cadence', textB: 'Collections happens when cash is tight' },
  { qid: 'DS_MONEY_14', textA: 'Overdue accounts are escalated', textB: 'Overdue accounts are tolerated' },
  { qid: 'DS_MONEY_15', textA: 'Forecasting uses sales signals', textB: 'Forecasting uses last month only' },
  { qid: 'DS_MONEY_16', textA: 'Supplier disputes trigger actions', textB: 'Supplier disputes trigger blame' },
  { qid: 'DS_MONEY_17', textA: 'Procurement has approval rules', textB: 'Procurement is whoever reacts fastest' },
  { qid: 'DS_MONEY_18', textA: 'Cash conversion is tracked', textB: 'Cash conversion is unknown' },
  { qid: 'DS_MONEY_19', textA: 'Production schedules respect materials', textB: 'Production waits for materials' },
  { qid: 'DS_MONEY_20', textA: 'Pricing reflects cash/credit risk', textB: 'Pricing ignores payment behavior' }
];

// P7: People (EHS)
const p7_qs = [
  { qid: 'QS_PEOPLE_1', textA: 'Safety holds even under rush pressure', textB: 'Safety becomes flexible under pressure' },
  { qid: 'QS_PEOPLE_2', textA: 'Dust controls are enforced consistently', textB: 'Dust controls depend on the supervisor' },
  { qid: 'QS_PEOPLE_3', textA: 'Skills are mapped and cross-trained', textB: 'Skills are concentrated in a few people' },
  { qid: 'QS_PEOPLE_4', textA: 'Improvements have owners and deadlines', textB: 'Improvements are suggestions' }
];

const p7_ds = [
  { qid: 'DS_PEOPLE_1', textA: 'Near misses are reported without fear', textB: 'Near misses are handled quietly' },
  { qid: 'DS_PEOPLE_2', textA: 'Dust controls are documented and audited', textB: 'Dust controls are informal' },
  { qid: 'DS_PEOPLE_3', textA: 'Cutting/grinding uses engineered controls', textB: 'Relies mostly on PPE' },
  { qid: 'DS_PEOPLE_4', textA: 'Forklift traffic has defined rules', textB: 'Forklift traffic is ad hoc' },
  { qid: 'DS_PEOPLE_5', textA: 'Machine guarding is inspected', textB: 'Guarding is assumed' },
  { qid: 'DS_PEOPLE_6', textA: 'Training is role-based and logged', textB: 'Training is “shadowing”' },
  { qid: 'DS_PEOPLE_7', textA: 'Bottleneck roles have backups', textB: 'Bottleneck roles rely on one person' },
  { qid: 'DS_PEOPLE_8', textA: 'Housekeeping is daily discipline', textB: 'Housekeeping is weekly cleanup' },
  { qid: 'DS_PEOPLE_9', textA: 'Quality and safety can stop production', textB: 'Production always wins' },
  { qid: 'DS_PEOPLE_10', textA: 'Incidents trigger learning reviews', textB: 'Incidents trigger blame' },
  { qid: 'DS_PEOPLE_11', textA: 'PPE compliance is coached', textB: 'PPE depends on mood' },
  { qid: 'DS_PEOPLE_12', textA: 'Waste is measured and targeted', textB: 'Waste is hidden' },
  { qid: 'DS_PEOPLE_13', textA: 'Energy usage is monitored', textB: 'Energy is overhead' },
  { qid: 'DS_PEOPLE_14', textA: 'Water usage is monitored', textB: 'Water usage is ignored' },
  { qid: 'DS_PEOPLE_15', textA: 'Maintenance safety lockout is respected', textB: 'Lockout is bypassed under pressure' },
  { qid: 'DS_PEOPLE_16', textA: 'Improvement backlog is ranked by impact', textB: 'Improvement backlog is random' },
  { qid: 'DS_PEOPLE_17', textA: 'Actions close on time', textB: 'Actions linger' },
  { qid: 'DS_PEOPLE_18', textA: 'Leadership reviews safety monthly', textB: 'Leadership reviews after incidents' },
  { qid: 'DS_PEOPLE_19', textA: 'Environmental risks are managed', textB: 'Environmental risks are reactive' },
  { qid: 'DS_PEOPLE_20', textA: 'Sustainability claims are evidence-based', textB: 'Claims are marketing-led' }
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
