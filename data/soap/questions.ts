
import { QuestionDefinition } from '../../types';

const defaultProps = {
  line_type: ['Soap / detergents / cosmetics production'],
  industry: 'soap',
  signal_tags: []
};

// P1: Risk (Product Safety, Quality)
const p1_qs = [
  { qid: 'QS_RISK_1', textA: 'We release batches using a defined checklist tied to specs', textB: 'We release batches based on "looks/feel + urgency"' },
  { qid: 'QS_RISK_2', textA: 'Artwork/labels have a single approved source', textB: 'Artwork/labels live in multiple chats and emails' },
  { qid: 'QS_RISK_3', textA: 'Formula/pack changes require a quick approval step', textB: 'Changes happen to keep production moving' },
  { qid: 'QS_RISK_4', textA: 'We can isolate affected lots quickly during an issue', textB: 'We usually quarantine "everything" first' }
];

const p1_ds = [
  { qid: 'DS_RISK_1', textA: 'Batch records are complete and consistent', textB: 'Batch records vary by shift' },
  { qid: 'DS_RISK_2', textA: 'Release decisions are documented', textB: 'Release decisions are verbal' },
  { qid: 'DS_RISK_3', textA: 'Holds have time limits and disposition rules', textB: 'Holds accumulate without closure' },
  { qid: 'DS_RISK_4', textA: 'IFRA checks are done by category for fragranced SKUs', textB: 'IFRA is assumed "handled by supplier"' },
  { qid: 'DS_RISK_5', textA: 'Label proofs are signed before printing', textB: 'Label changes happen after printing' },
  { qid: 'DS_RISK_6', textA: 'Traceability links input lots to finished goods lots', textB: 'Traceability is partial' },
  { qid: 'DS_RISK_7', textA: 'Complaints trigger containment within 24 hours', textB: 'Complaints sit until patterns emerge' },
  { qid: 'DS_RISK_8', textA: 'CAPA includes evidence of effectiveness', textB: 'CAPA ends at "we trained staff"' },
  { qid: 'DS_RISK_9', textA: 'Supplier COAs/specs are verified for critical inputs', textB: 'COAs are filed without review' },
  { qid: 'DS_RISK_10', textA: 'Change control covers packaging compatibility', textB: 'Packaging changes are treated as cosmetic' },
  { qid: 'DS_RISK_11', textA: 'Water-based products have hygiene zoning', textB: 'All areas are treated the same' },
  { qid: 'DS_RISK_12', textA: 'Micro sampling is risk-based and scheduled', textB: 'Micro sampling happens after incidents' },
  { qid: 'DS_RISK_13', textA: 'Stability checks exist for new/changed SKUs', textB: 'Stability is assumed if it "looks fine"' },
  { qid: 'DS_RISK_14', textA: 'Adverse reactions/claims are tracked and reviewed', textB: 'Claims are handled case-by-case' },
  { qid: 'DS_RISK_15', textA: 'Cleaning validation is practical and repeatable', textB: 'Cleaning is "done when it looks clean"' },
  { qid: 'DS_RISK_16', textA: 'SOPs are version-controlled', textB: 'SOPs are "printed somewhere"' },
  { qid: 'DS_RISK_17', textA: 'Training is role-based and logged', textB: 'Training is shadowing' },
  { qid: 'DS_RISK_18', textA: 'Rework use is controlled by written limits', textB: 'Rework is used to reduce waste' },
  { qid: 'DS_RISK_19', textA: 'Nonconforming product has clear disposition', textB: 'Nonconforming product is reintroduced quietly' },
  { qid: 'DS_RISK_20', textA: 'Management reviews trends monthly', textB: 'Trends are reviewed when auditors/customers ask' }
];

// P2: Innovation (Formulation)
const p2_qs = [
  { qid: 'QS_INNOVATION_1', textA: 'Each SKU has defined targets and tolerances (pH/viscosity)', textB: 'Targets exist but vary by operator' },
  { qid: 'QS_INNOVATION_2', textA: 'Substitutions require a quick check/approval', textB: 'Substitutions are made to avoid downtime' },
  { qid: 'QS_INNOVATION_3', textA: 'Packaging compatibility is checked for new packs/pumps', textB: 'Packs/pumps are assumed compatible' },
  { qid: 'QS_INNOVATION_4', textA: 'Batch corrections follow written rules', textB: 'Batch corrections rely on experience' }
];

const p2_ds = [
  { qid: 'DS_INNOVATION_1', textA: 'Order of addition is standardized', textB: 'Order varies by shift' },
  { qid: 'DS_INNOVATION_2', textA: 'Mixing temperature is controlled', textB: 'Temperature is "by feel"' },
  { qid: 'DS_INNOVATION_3', textA: 'Viscosity checks are method-consistent', textB: 'Viscosity checks are subjective' },
  { qid: 'DS_INNOVATION_4', textA: 'pH meters are calibrated on schedule', textB: 'pH meters are trusted until wrong' },
  { qid: 'DS_INNOVATION_5', textA: 'Active matter is verified where relevant', textB: 'Active matter is assumed from recipe' },
  { qid: 'DS_INNOVATION_6', textA: 'Water quality is measured/controlled', textB: 'Water is "whatever is available"' },
  { qid: 'DS_INNOVATION_7', textA: 'Fragrance interactions are trialed', textB: 'Fragrance issues are discovered in market' },
  { qid: 'DS_INNOVATION_8', textA: 'Salt/thickener additions follow curves/limits', textB: 'Additions are incremental guessing' },
  { qid: 'DS_INNOVATION_9', textA: 'Batch correction steps are recorded', textB: 'Batch corrections are not recorded' },
  { qid: 'DS_INNOVATION_10', textA: 'Packaging leak tests are routine', textB: 'Leak tests happen after complaints' },
  { qid: 'DS_INNOVATION_11', textA: 'Stability checks exist for new/changed SKUs', textB: 'Stability is assumed' },
  { qid: 'DS_INNOVATION_12', textA: 'Raw materials are verified on receipt', textB: 'Raw materials are accepted by label' },
  { qid: 'DS_INNOVATION_13', textA: 'Rework use has defined limits', textB: 'Rework is used "to reduce waste"' },
  { qid: 'DS_INNOVATION_14', textA: 'Fill weight is controlled with checks', textB: 'Fill weight is checked when customers complain' },
  { qid: 'DS_INNOVATION_15', textA: 'Color/fragrance standards are defined', textB: 'Color/fragrance is by memory' },
  { qid: 'DS_INNOVATION_16', textA: 'Batch records include actuals vs targets', textB: 'Batch records capture only totals' },
  { qid: 'DS_INNOVATION_17', textA: 'Pilot runs are documented', textB: 'Pilot runs are informal' },
  { qid: 'DS_INNOVATION_18', textA: 'Cleaning is standardized between product families', textB: 'Cleaning varies by crew' },
  { qid: 'DS_INNOVATION_19', textA: 'Claims are supported by simple internal tests', textB: 'Claims are marketing-led' },
  { qid: 'DS_INNOVATION_20', textA: 'Formula costs are reviewed monthly', textB: 'Formula costs are noticed when cash is tight' }
];

// P3: Market (Sales)
const p3_qs = [
  { qid: 'QS_MARKET_1', textA: 'Promotions require margin/ROI checks', textB: 'Promotions are set by competitor pressure' },
  { qid: 'QS_MARKET_2', textA: 'Returns/complaints are coded and trended', textB: 'Returns/complaints are handled case-by-case' },
  { qid: 'QS_MARKET_3', textA: 'Distributor performance is measured', textB: 'Distributor performance is "relationship-based"' },
  { qid: 'QS_MARKET_4', textA: 'Forecasting uses sell-through signals', textB: 'Forecasting uses last month’s guesses' }
];

const p3_ds = [
  { qid: 'DS_MARKET_1', textA: 'Channel margins are known', textB: 'Only revenue is tracked' },
  { qid: 'DS_MARKET_2', textA: 'Credit limits are enforced', textB: 'Credit is flexible for volume' },
  { qid: 'DS_MARKET_3', textA: 'Promo calendars are planned', textB: 'Promos happen reactively' },
  { qid: 'DS_MARKET_4', textA: 'Returns have root-cause review', textB: 'Returns are "normal business"' },
  { qid: 'DS_MARKET_5', textA: 'Claims are reviewed for supportability', textB: 'Claims are marketing-led' },
  { qid: 'DS_MARKET_6', textA: 'Stockouts are logged and reduced', textB: 'Stockouts are accepted' },
  { qid: 'DS_MARKET_7', textA: 'Distributor sell-through is tracked', textB: 'Only distributor orders are tracked' },
  { qid: 'DS_MARKET_8', textA: 'Customer feedback is captured systematically', textB: 'Feedback is anecdotal' },
  { qid: 'DS_MARKET_9', textA: 'Key account service levels are defined', textB: 'Service is ad hoc' },
  { qid: 'DS_MARKET_10', textA: 'New SKUs have launch gates', textB: 'New SKUs launch when ready' },
  { qid: 'DS_MARKET_11', textA: 'Bad SKUs get sunset decisions', textB: 'SKUs remain forever' },
  { qid: 'DS_MARKET_12', textA: 'Packaging damage is tracked by route', textB: 'Damage is "transport issue"' },
  { qid: 'DS_MARKET_13', textA: 'Export requirements are verified pre-ship', textB: 'Export issues are solved at border' },
  { qid: 'DS_MARKET_14', textA: 'Retail compliance checks are routine', textB: 'Retail checks happen after rejection' },
  { qid: 'DS_MARKET_15', textA: 'Pricing has guardrails', textB: 'Pricing is negotiated per customer' },
  { qid: 'DS_MARKET_16', textA: 'Customer education exists (usage)', textB: 'Usage issues become complaints' },
  { qid: 'DS_MARKET_17', textA: 'Product performance is benchmarked', textB: 'Product performance is assumed' },
  { qid: 'DS_MARKET_18', textA: 'Distributor incentives match profit goals', textB: 'Incentives focus on volume' },
  { qid: 'DS_MARKET_19', textA: 'Bad payers are managed firmly', textB: 'Bad payers are tolerated' },
  { qid: 'DS_MARKET_20', textA: 'Account reviews happen quarterly', textB: 'Account reviews happen when cash is tight' }
];

// P4: Leadership (Pricing)
const p4_qs = [
  { qid: 'QS_LEADERSHIP_1', textA: 'We update standard costs regularly', textB: 'We update costs after problems appear' },
  { qid: 'QS_LEADERSHIP_2', textA: 'Discounts need approval', textB: 'Discounts are negotiated freely' },
  { qid: 'QS_LEADERSHIP_3', textA: 'We price customization', textB: 'We absorb customization to win accounts' },
  { qid: 'QS_LEADERSHIP_4', textA: 'We know profit per SKU', textB: 'We mostly know total monthly profit' }
];

const p4_ds = [
  { qid: 'DS_LEADERSHIP_1', textA: 'SKU margins are tracked', textB: 'SKU margins are guessed' },
  { qid: 'DS_LEADERSHIP_2', textA: 'Packaging cost changes are reflected in pricing', textB: 'Packaging changes hit margin silently' },
  { qid: 'DS_LEADERSHIP_3', textA: 'Promo ROI is measured', textB: 'Promo ROI is assumed' },
  { qid: 'DS_LEADERSHIP_4', textA: 'Discounts are controlled', textB: 'Discounts are common' },
  { qid: 'DS_LEADERSHIP_5', textA: 'Private label has clear MOQs and fees', textB: 'Private label terms are ad hoc' },
  { qid: 'DS_LEADERSHIP_6', textA: 'Complexity is priced', textB: 'Complexity is hidden in overhead' },
  { qid: 'DS_LEADERSHIP_7', textA: 'Freight costs are allocated by channel', textB: 'Freight is treated as overhead' },
  { qid: 'DS_LEADERSHIP_8', textA: 'Returns costs are assigned to SKUs', textB: 'Returns are ignored in costing' },
  { qid: 'DS_LEADERSHIP_9', textA: 'Low-margin SKUs are redesigned or dropped', textB: 'Low-margin SKUs stay' },
  { qid: 'DS_LEADERSHIP_10', textA: 'Standard costs are refreshed monthly/quarterly', textB: 'Costs are refreshed rarely' },
  { qid: 'DS_LEADERSHIP_11', textA: 'Price lists are version-controlled', textB: 'Price lists vary by salesperson' },
  { qid: 'DS_LEADERSHIP_12', textA: 'Price floors exist', textB: 'Any price is possible' },
  { qid: 'DS_LEADERSHIP_13', textA: 'Contribution margin per hour is visible', textB: 'Lines run based on urgency' },
  { qid: 'DS_LEADERSHIP_14', textA: 'Cost-to-serve varies by customer', textB: 'All customers are treated the same' },
  { qid: 'DS_LEADERSHIP_15', textA: 'Pack sizes are designed for margin', textB: 'Pack sizes are designed for competitors' },
  { qid: 'DS_LEADERSHIP_16', textA: 'Samples are budgeted', textB: 'Samples are unlimited' },
  { qid: 'DS_LEADERSHIP_17', textA: 'Rebates/support spend is tracked', textB: 'Support spend is informal' },
  { qid: 'DS_LEADERSHIP_18', textA: 'Rework is costed and reduced', textB: 'Rework is accepted' },
  { qid: 'DS_LEADERSHIP_19', textA: 'Price increases follow a plan', textB: 'Price increases are reactive' },
  { qid: 'DS_LEADERSHIP_20', textA: 'Sales understands margin drivers', textB: 'Sales focuses on volume' }
];

// P5: Operations (Excellence)
const p5_qs = [
  { qid: 'QS_OPERATIONS_1', textA: 'We track downtime causes and remove them', textB: 'Downtime is treated as part of production' },
  { qid: 'QS_OPERATIONS_2', textA: 'Changeovers are measured and improved', textB: 'Changeovers are accepted' },
  { qid: 'QS_OPERATIONS_3', textA: 'WIP is limited to protect flow', textB: 'WIP grows with urgency' },
  { qid: 'QS_OPERATIONS_4', textA: 'Cleaning/line clearance follows a standard', textB: 'Cleaning varies by team' }
];

const p5_ds = [
  { qid: 'DS_OPERATIONS_1', textA: 'OEE is tracked daily', textB: 'OEE is reviewed occasionally' },
  { qid: 'DS_OPERATIONS_2', textA: 'Downtime has reason codes', textB: 'Downtime is "breakdown"' },
  { qid: 'DS_OPERATIONS_3', textA: 'PM compliance is tracked', textB: 'PM is informal' },
  { qid: 'DS_OPERATIONS_4', textA: 'Changeovers are pre-staged', textB: 'Changeovers hunt for materials' },
  { qid: 'DS_OPERATIONS_5', textA: 'Start-up scrap has targets', textB: 'Start-up scrap is expected' },
  { qid: 'DS_OPERATIONS_6', textA: 'In-process checks are scheduled', textB: 'Checks happen when time allows' },
  { qid: 'DS_OPERATIONS_7', textA: 'Fill weight checks are consistent', textB: 'Fill checks are occasional' },
  { qid: 'DS_OPERATIONS_8', textA: 'Cleaning validation is practical and repeatable', textB: 'Cleaning is "looks clean"' },
  { qid: 'DS_OPERATIONS_9', textA: 'Line clearance is verified', textB: 'Line clearance is assumed' },
  { qid: 'DS_OPERATIONS_10', textA: 'Rework is limited by policy', textB: 'Rework is common' },
  { qid: 'DS_OPERATIONS_11', textA: 'WIP aging is visible', textB: 'WIP is not aged' },
  { qid: 'DS_OPERATIONS_12', textA: 'Schedule adherence is measured', textB: 'Schedule changes constantly' },
  { qid: 'DS_OPERATIONS_13', textA: 'Bottlenecks are protected', textB: 'Bottlenecks are interrupted' },
  { qid: 'DS_OPERATIONS_14', textA: 'Operators run from standard work', textB: 'Operators run from experience' },
  { qid: 'DS_OPERATIONS_15', textA: 'Scrap is coded by cause', textB: 'Scrap is one number' },
  { qid: 'DS_OPERATIONS_16', textA: 'Utilities/energy per unit is tracked', textB: 'Energy is overhead' },
  { qid: 'DS_OPERATIONS_17', textA: 'Quality can stop the line', textB: 'Quality fixes after production' },
  { qid: 'DS_OPERATIONS_18', textA: 'Improvement actions have owners/due dates', textB: 'Improvements are suggestions' },
  { qid: 'DS_OPERATIONS_19', textA: 'Shift handover is structured', textB: 'Handover is verbal' },
  { qid: 'DS_OPERATIONS_20', textA: 'Root cause is applied to repeats', textB: 'Repeats are tolerated' }
];

// P6: Money (Supply Chain)
const p6_qs = [
  { qid: 'QS_MONEY_1', textA: 'Inventory is cycle-counted on schedule', textB: 'Inventory is corrected when missing' },
  { qid: 'QS_MONEY_2', textA: 'Critical packaging parts have safety stock rules', textB: 'Packaging is ordered "when low"' },
  { qid: 'QS_MONEY_3', textA: 'Expiry/FEFO is enforced', textB: 'Expiry is discovered during stock takes' },
  { qid: 'QS_MONEY_4', textA: 'Collections follows a cadence', textB: 'Collections happens when cash is tight' }
];

const p6_ds = [
  { qid: 'DS_MONEY_1', textA: 'Inventory accuracy is measured', textB: 'Accuracy is assumed' },
  { qid: 'DS_MONEY_2', textA: 'Stockouts are logged by root cause', textB: 'Stockouts are normal' },
  { qid: 'DS_MONEY_3', textA: 'Min/max exists for critical inputs', textB: 'Reorder is by instinct' },
  { qid: 'DS_MONEY_4', textA: 'Supplier OTIF is tracked', textB: 'Supplier OTIF is unknown' },
  { qid: 'DS_MONEY_5', textA: 'Emergency buys are measured', textB: 'Emergency buys are routine' },
  { qid: 'DS_MONEY_6', textA: 'Packaging components are treated as critical', textB: 'Packaging is treated as secondary' },
  { qid: 'DS_MONEY_7', textA: 'FEFO is practiced', textB: 'FIFO is inconsistent' },
  { qid: 'DS_MONEY_8', textA: 'Expiry write-offs are tracked', textB: 'Write-offs are hidden' },
  { qid: 'DS_MONEY_9', textA: 'Finished goods aging is visible', textB: 'Finished goods aging is ignored' },
  { qid: 'DS_MONEY_10', textA: 'Obsolescence has rules', textB: 'Obsolescence accumulates' },
  { qid: 'DS_MONEY_11', textA: 'WIP is limited', textB: 'WIP is unlimited' },
  { qid: 'DS_MONEY_12', textA: 'Forecasts drive procurement', textB: 'Procurement is reactive' },
  { qid: 'DS_MONEY_13', textA: 'Receiving checks include quality criteria', textB: 'Receiving checks are quantity-only' },
  { qid: 'DS_MONEY_14', textA: 'Substitute materials require approval', textB: 'Substitutions happen under pressure' },
  { qid: 'DS_MONEY_15', textA: 'Credit limits exist', textB: 'Credit is relationship-based' },
  { qid: 'DS_MONEY_16', textA: 'Overdues have escalation', textB: 'Overdues are negotiated endlessly' },
  { qid: 'DS_MONEY_17', textA: 'Freight costs are tracked per channel', textB: 'Freight is overhead' },
  { qid: 'DS_MONEY_18', textA: 'Supplier issues trigger corrective actions', textB: 'Supplier issues trigger blame only' },
  { qid: 'DS_MONEY_19', textA: 'Slow movers get liquidation plans', textB: 'Slow movers sit indefinitely' },
  { qid: 'DS_MONEY_20', textA: 'Planning uses lead time data', textB: 'Lead times are guessed' }
];

// P7: People (EHS)
const p7_qs = [
  { qid: 'QS_PEOPLE_1', textA: 'SDS/chemical labeling and storage are routinely audited', textB: 'Chemical checks happen when issues appear' },
  { qid: 'QS_PEOPLE_2', textA: 'Skills are mapped and cross-trained', textB: 'Skills sit with a few experts' },
  { qid: 'QS_PEOPLE_3', textA: 'Near misses are reported and closed', textB: 'Near misses are handled quietly' },
  { qid: 'QS_PEOPLE_4', textA: 'Improvements have owners and due dates', textB: 'Improvements are suggestions' }
];

const p7_ds = [
  { qid: 'DS_PEOPLE_1', textA: 'Near miss reporting is encouraged and safe', textB: 'Near miss reporting feels risky' },
  { qid: 'DS_PEOPLE_2', textA: 'Chemical storage is segregated and labeled', textB: 'Chemicals are stored wherever space exists' },
  { qid: 'DS_PEOPLE_3', textA: 'SDS are accessible at point of use', textB: 'SDS are hard to find' },
  { qid: 'DS_PEOPLE_4', textA: 'PPE compliance is coached', textB: 'PPE depends on the supervisor' },
  { qid: 'DS_PEOPLE_5', textA: 'Training is logged and role-based', textB: 'Training is shadowing' },
  { qid: 'DS_PEOPLE_6', textA: 'Bottleneck roles have backups', textB: 'Bottlenecks rely on one person' },
  { qid: 'DS_PEOPLE_7', textA: 'Hygiene standards are audited', textB: 'Hygiene is assumed' },
  { qid: 'DS_PEOPLE_8', textA: 'Daily huddles close actions', textB: 'Daily huddles share updates only' },
  { qid: 'DS_PEOPLE_9', textA: '5S zones have owners', textB: '5S is "everyone’s job"' },
  { qid: 'DS_PEOPLE_10', textA: 'Incidents trigger learning reviews', textB: 'Incidents trigger blame' },
  { qid: 'DS_PEOPLE_11', textA: 'Safety holds under deadline pressure', textB: 'Safety slips under deadlines' },
  { qid: 'DS_PEOPLE_12', textA: 'Kaizen actions have due dates', textB: 'Kaizen actions are open-ended' },
  { qid: 'DS_PEOPLE_13', textA: 'Performance is coached with data', textB: 'Performance is managed by shouting' },
  { qid: 'DS_PEOPLE_14', textA: 'Shift handover is structured', textB: 'Shift handover is verbal' },
  { qid: 'DS_PEOPLE_15', textA: 'Contractors/visitors follow safety rules', textB: 'Contractors/visitors improvise' },
  { qid: 'DS_PEOPLE_16', textA: 'Chemical spills have a standard response', textB: 'Spill response is ad hoc' },
  { qid: 'DS_PEOPLE_17', textA: 'Waste and scrap are visible metrics', textB: 'Waste is hidden' },
  { qid: 'DS_PEOPLE_18', textA: 'Improvements focus on biggest losses', textB: 'Improvements follow complaints only' },
  { qid: 'DS_PEOPLE_19', textA: 'Staff feel safe to stop a process for quality/safety', textB: 'Staff fear stopping production' },
  { qid: 'DS_PEOPLE_20', textA: 'Leadership reviews safety/quality monthly', textB: 'Leadership reviews when forced' }
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
