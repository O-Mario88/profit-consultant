
import { QuestionDefinition } from '../../types';

const defaultProps = {
    line_type: ['Chemical / Light Industrial Production'],
    industry: 'chemical',
    signal_tags: []
};

// P1: Risk (Compliance)
const p1_qs = [
    { qid: 'QS_RISK_1', textA: 'SDS + labels are version-controlled and consistent', textB: 'SDS + labels vary by customer request timing' },
    { qid: 'QS_RISK_2', textA: 'We can trace any complaint to a batch fast', textB: 'Traceability depends on memory and paper' },
    { qid: 'QS_RISK_3', textA: 'Storage/transport compatibility is zoned/enforced', textB: 'Compatibility is handled informally' },
    { qid: 'QS_RISK_4', textA: 'Complaints trigger CAPA and repeat-issue reduction', textB: 'Complaints are mostly refunds/discounts' }
];

const p1_ds = [
    { qid: 'DS_RISK_1', textA: 'Hazard classification drives labels/SDS reliably', textB: 'Hazard classification is assumed' },
    { qid: 'DS_RISK_2', textA: 'Label elements checked before release', textB: 'Labels checked after printing' },
    { qid: 'DS_RISK_3', textA: 'SDS versions tracked by SKU/market', textB: 'SDS is one file everywhere' },
    { qid: 'DS_RISK_4', textA: 'Docs sent from controlled system', textB: 'Docs forwarded from phones' },
    { qid: 'DS_RISK_5', textA: 'Claims reviewed for compliance', textB: 'Claims are marketing-led' },
    { qid: 'DS_RISK_6', textA: 'Export requirements reviewed (REACH-style)', textB: 'Export treated like domestic' },
    { qid: 'DS_RISK_7', textA: 'Batch codes on every unit', textB: 'Batch codes inconsistent' },
    { qid: 'DS_RISK_8', textA: 'Recalls have written playbook', textB: 'Recalls "we figure it out"' },
    { qid: 'DS_RISK_9', textA: 'Nonconforming goods quarantined', textB: 'Holds are verbal' },
    { qid: 'DS_RISK_10', textA: 'Packaging compatibility tests exist', textB: 'Packaging issues found in market' },
    { qid: 'DS_RISK_11', textA: 'Storage zoning audited weekly', textB: 'Zoning depends on space' },
    { qid: 'DS_RISK_12', textA: 'Spill response trained/rehearsed', textB: 'Spill response improvisation' },
    { qid: 'DS_RISK_13', textA: 'Complaints coded and trended', textB: 'Complaints free-text' },
    { qid: 'DS_RISK_14', textA: 'CAPA has owners/dates', textB: 'CAPA ends at talk' },
    { qid: 'DS_RISK_15', textA: 'Incoming labels approved against master', textB: 'Labels vary by supplier' },
    { qid: 'DS_RISK_16', textA: 'Safety data accessible minutes', textB: 'Retrieval slow' },
    { qid: 'DS_RISK_17', textA: 'Document change control exists', textB: 'People just update docs' },
    { qid: 'DS_RISK_18', textA: 'Supplier compliance docs reviewed', textB: 'Supplier docs filed' },
    { qid: 'DS_RISK_19', textA: 'Product specs defined/enforced', textB: 'Specs informal' },
    { qid: 'DS_RISK_20', textA: 'Management reviews compliance monthly', textB: 'Discussed only on issues' }
];

// P2: Innovation (Formulation)
const p2_qs = [
    { qid: 'QS_INNOVATION_1', textA: 'Master formula cards + gated mixing used', textB: 'Recipes live in people’s heads' },
    { qid: 'QS_INNOVATION_2', textA: 'In-process QC run before filling', textB: 'QC is mainly after packing' },
    { qid: 'QS_INNOVATION_3', textA: 'Raw substitutions require approval', textB: 'Substitutions happen to avoid downtime' },
    { qid: 'QS_INNOVATION_4', textA: 'Rework is measured and reduced', textB: 'Rework is accepted as normal' }
];

const p2_ds = [
    { qid: 'DS_INNOVATION_1', textA: 'Every batch has recorded sheet', textB: 'Batch details partial' },
    { qid: 'DS_INNOVATION_2', textA: 'Mixing sequence standardized', textB: 'Sequence varies by operator' },
    { qid: 'DS_INNOVATION_3', textA: 'Weighing uses verified scales', textB: 'Scales trusted without checks' },
    { qid: 'DS_INNOVATION_4', textA: 'In-process QC gates exist', textB: 'QC is end-only' },
    { qid: 'DS_INNOVATION_5', textA: 'Release requires QC sign-off', textB: 'Release is time-based' },
    { qid: 'DS_INNOVATION_6', textA: 'Rework has clear rules', textB: 'Rework is informal' },
    { qid: 'DS_INNOVATION_7', textA: 'Raw lots traceable to batches', textB: 'Raw lots mixed without tracking' },
    { qid: 'DS_INNOVATION_8', textA: 'Substitution approvals documented', textB: 'Substitutions verbal' },
    { qid: 'DS_INNOVATION_9', textA: 'Drift triggers defined actions', textB: 'Drift triggers ad hoc actions' },
    { qid: 'DS_INNOVATION_10', textA: 'Temp/time controls exist', textB: 'Temp/time rarely controlled' },
    { qid: 'DS_INNOVATION_11', textA: 'Stability issues trigger RCA', textB: 'Stability triggers discounts' },
    { qid: 'DS_INNOVATION_12', textA: 'Incoming raw checks exist', textB: 'Incoming raw checks rare' },
    { qid: 'DS_INNOVATION_13', textA: 'Packaging compatibility checked', textB: 'Compatibility assumed' },
    { qid: 'DS_INNOVATION_14', textA: 'Batch yield measured', textB: 'Yield estimated' },
    { qid: 'DS_INNOVATION_15', textA: 'Scrap coded by cause', textB: 'Scrap is one number' },
    { qid: 'DS_INNOVATION_16', textA: 'QC trends reviewed weekly', textB: 'QC reviewed after issues' },
    { qid: 'DS_INNOVATION_17', textA: 'Operators trained on control points', textB: 'Training is shadowing' },
    { qid: 'DS_INNOVATION_18', textA: 'Changeovers include cleaning verification', textB: 'Changeovers focus on speed' },
    { qid: 'DS_INNOVATION_19', textA: 'Corrective actions tracked to closure', textB: 'Corrective actions informal' },
    { qid: 'DS_INNOVATION_20', textA: 'Formula changes follow control', textB: 'Formula changes casual' }
];

// P3: Market (Channel)
const p3_qs = [
    { qid: 'QS_MARKET_1', textA: 'OTIF is measured and owned', textB: 'Delivery important but not tracked' },
    { qid: 'QS_MARKET_2', textA: 'Returns are coded and reduced', textB: 'Returns negotiated case-by-case' },
    { qid: 'QS_MARKET_3', textA: 'Channel pricing guardrails exist', textB: 'Pricing varies by pressure' },
    { qid: 'QS_MARKET_4', textA: 'Credit terms are enforced', textB: 'Credit expands with relationships' }
];

const p3_ds = [
    { qid: 'DS_MARKET_1', textA: 'Customers segmented by use case', textB: 'Everyone treated same' },
    { qid: 'DS_MARKET_2', textA: 'OTIF reviewed weekly', textB: 'OTIF anecdotal' },
    { qid: 'DS_MARKET_3', textA: 'Claims follow workflow', textB: 'Claims negotiated' },
    { qid: 'DS_MARKET_4', textA: 'Distributor handling rules exist', textB: 'Distributors do their own thing' },
    { qid: 'DS_MARKET_5', textA: 'Storage/heat risk controlled', textB: 'Storage depends on space' },
    { qid: 'DS_MARKET_6', textA: 'Channel conflicts managed', textB: 'Channel conflict tolerated' },
    { qid: 'DS_MARKET_7', textA: 'Repeat-rate tracked by channel', textB: 'Repeat-rate assumed' },
    { qid: 'DS_MARKET_8', textA: 'Key account reviews scheduled', textB: 'Reviews on issue only' },
    { qid: 'DS_MARKET_9', textA: 'Sales uses approved claims', textB: 'Claims vary by salesperson' },
    { qid: 'DS_MARKET_10', textA: 'Customer education built into sales', textB: 'Customers learn by trial' },
    { qid: 'DS_MARKET_11', textA: 'Returns quarantined/traced', textB: 'Returns mixed back in' },
    { qid: 'DS_MARKET_12', textA: 'Complaints reach ops quickly', textB: 'Complaints stay in sales' },
    { qid: 'DS_MARKET_13', textA: 'Route profitability tracked', textB: 'Routes judged by revenue' },
    { qid: 'DS_MARKET_14', textA: 'Min order sizes exist', textB: 'Any order accepted' },
    { qid: 'DS_MARKET_15', textA: 'Pricing includes service complexity', textB: 'Complexity absorbed' },
    { qid: 'DS_MARKET_16', textA: 'Promotions ROI checked', textB: 'Promotions an hoc' },
    { qid: 'DS_MARKET_17', textA: 'Concentration risk monitored', textB: 'Concentration risk ignored' },
    { qid: 'DS_MARKET_18', textA: 'Forecasting uses sales signals', textB: 'Forecasting last-month repeats' },
    { qid: 'DS_MARKET_19', textA: 'Disputes use evidence', textB: 'Disputes emotional' },
    { qid: 'DS_MARKET_20', textA: 'Churn measured and reduced', textB: 'Churn noticed late' }
];

// P4: Leadership (Pricing)
const p4_qs = [
    { qid: 'QS_LEADERSHIP_1', textA: 'We track margin by SKU/channel', textB: 'We track total profit only' },
    { qid: 'QS_LEADERSHIP_2', textA: 'Discounts have approval/floors', textB: 'Discounts negotiated freely' },
    { qid: 'QS_LEADERSHIP_3', textA: 'Price complexity and small runs', textB: 'Complexity absorbed' },
    { qid: 'QS_LEADERSHIP_4', textA: 'Returns/claims costed into margin', textB: 'Returns separate problem' }
];

const p4_ds = [
    { qid: 'DS_LEADERSHIP_1', textA: 'Price lists version controlled', textB: 'Price lists vary' },
    { qid: 'DS_LEADERSHIP_2', textA: 'Cost model updates frequent', textB: 'Cost updates rare' },
    { qid: 'DS_LEADERSHIP_3', textA: 'Margin floors by channel', textB: 'Any price acceptable' },
    { qid: 'DS_LEADERSHIP_4', textA: 'Freight allocated to orders', textB: 'Freight is overhead' },
    { qid: 'DS_LEADERSHIP_5', textA: 'Claims costed by customer', textB: 'Claims costed globally' },
    { qid: 'DS_LEADERSHIP_6', textA: 'Promotions ROI checked', textB: 'Promotions relationship' },
    { qid: 'DS_LEADERSHIP_7', textA: 'Loss SKUs redesigned', textB: 'Loss SKUs persist' },
    { qid: 'DS_LEADERSHIP_8', textA: 'Min order sizes protect profit', textB: 'Any order accepted' },
    { qid: 'DS_LEADERSHIP_9', textA: 'Pricing reflects credit risk', textB: 'Credit risk ignored' },
    { qid: 'DS_LEADERSHIP_10', textA: 'Mix managed for margin', textB: 'Mix unmanaged' },
    { qid: 'DS_LEADERSHIP_11', textA: 'Price realization tracked', textB: 'Realization unknown' },
    { qid: 'DS_LEADERSHIP_12', textA: 'Complexity fees standard', textB: 'Complexity fees ad hoc' },
    { qid: 'DS_LEADERSHIP_13', textA: 'Sales trained on margin', textB: 'Sales trained on volume' },
    { qid: 'DS_LEADERSHIP_14', textA: 'Bundles strategic', textB: 'Packs evolve randomly' },
    { qid: 'DS_LEADERSHIP_15', textA: 'Contribution per hour measured', textB: 'Scheduling urgency-based' },
    { qid: 'DS_LEADERSHIP_16', textA: 'Returns policy protects margin', textB: 'Returns policy flexible' },
    { qid: 'DS_LEADERSHIP_17', textA: 'Service tiers priced', textB: 'Service tiers free' },
    { qid: 'DS_LEADERSHIP_18', textA: 'Competitor price is input', textB: 'Competitor price sets all' },
    { qid: 'DS_LEADERSHIP_19', textA: 'Supplier volatility triggers reprice', textB: 'Volatility absorbed' },
    { qid: 'DS_LEADERSHIP_20', textA: 'Monthly margin review', textB: 'Margin review occasional' }
];

// P5: Operations (Excellence)
const p5_qs = [
    { qid: 'QS_OPERATIONS_1', textA: 'Downtime tracked and reduced', textB: 'Downtime fixed no learning' },
    { qid: 'QS_OPERATIONS_2', textA: 'Changeovers standardized/verified', textB: 'Changeovers rushed' },
    { qid: 'QS_OPERATIONS_3', textA: 'Scrap coded and reduced', textB: 'Scrap is one number' },
    { qid: 'QS_OPERATIONS_4', textA: 'PM scheduled and measured', textB: 'PM is reactive' }
];

const p5_ds = [
    { qid: 'DS_OPERATIONS_1', textA: 'OEE reviewed daily', textB: 'Output only metric' },
    { qid: 'DS_OPERATIONS_2', textA: 'Downtime coded consistently', textB: 'Downtime described differently' },
    { qid: 'DS_OPERATIONS_3', textA: 'Repeat downtime triggers RCA', textB: 'Repeat downtime accepted' },
    { qid: 'DS_OPERATIONS_4', textA: 'PM compliance tracked', textB: 'PM compliance unknown' },
    { qid: 'DS_OPERATIONS_5', textA: 'Spares stocked for failures', textB: 'Spares emergency buys' },
    { qid: 'DS_OPERATIONS_6', textA: 'Changeover timed/improved', textB: 'Changeover accepted' },
    { qid: 'DS_OPERATIONS_7', textA: 'Cleaning verification exists', textB: 'Cleaning "looks clean"' },
    { qid: 'DS_OPERATIONS_8', textA: 'Startup rejects measured', textB: 'Startup rejects ignored' },
    { qid: 'DS_OPERATIONS_9', textA: 'Pack defect reasons tracked', textB: 'Defects fixed ad hoc' },
    { qid: 'DS_OPERATIONS_10', textA: 'Fill checks consistent', textB: 'Fill checks inconsistent' },
    { qid: 'DS_OPERATIONS_11', textA: 'Transfer losses measured', textB: 'Transfer losses guessed' },
    { qid: 'DS_OPERATIONS_12', textA: 'Rework controlled with rules', textB: 'Rework informal' },
    { qid: 'DS_OPERATIONS_13', textA: 'Line settings standardized', textB: 'Line settings vary' },
    { qid: 'DS_OPERATIONS_14', textA: 'Standard work followed', textB: 'Operators rely memory' },
    { qid: 'DS_OPERATIONS_15', textA: 'Scrap coded by cause', textB: 'Scrap one number' },
    { qid: 'DS_OPERATIONS_16', textA: 'Cleaning tools controlled', textB: 'Tools shared randomly' },
    { qid: 'DS_OPERATIONS_17', textA: 'Holds segregated', textB: 'Holds verbal' },
    { qid: 'DS_OPERATIONS_18', textA: 'Shift handover structured', textB: 'Handover casual' },
    { qid: 'DS_OPERATIONS_19', textA: 'Improvements owned/dated', textB: 'Improvements suggestions' },
    { qid: 'DS_OPERATIONS_20', textA: 'Ops trends reviewed weekly', textB: 'React to incidents' }
];

// P6: Money (Supply Chain)
const p6_qs = [
    { qid: 'QS_MONEY_1', textA: 'Line-stopper inventory min/max', textB: 'Reorder is visual' },
    { qid: 'QS_MONEY_2', textA: 'Inventory trusted (cycle counts)', textB: 'Inventory corrected crises' },
    { qid: 'QS_MONEY_3', textA: 'Supplier performance measured', textB: 'Performance relationship' },
    { qid: 'QS_MONEY_4', textA: 'Credit limits/collections enforced', textB: 'Collections reactive' }
];

const p6_ds = [
    { qid: 'DS_MONEY_1', textA: 'Critical inputs safety stock', textB: 'Stock rules informal' },
    { qid: 'DS_MONEY_2', textA: 'Packaging treated as constraint', textB: 'Packaging normal expense' },
    { qid: 'DS_MONEY_3', textA: 'Supplier OTIF tracked', textB: 'OTIF assumed' },
    { qid: 'DS_MONEY_4', textA: 'Supplier quality tracked', textB: 'Quality judged by feelings' },
    { qid: 'DS_MONEY_5', textA: 'Inventory accuracy measured', textB: 'Accuracy unknown' },
    { qid: 'DS_MONEY_6', textA: 'Emergency buys tracked', textB: 'Emergency buys normal' },
    { qid: 'DS_MONEY_7', textA: 'FIFO enforced time-sensitive', textB: 'FIFO depends on space' },
    { qid: 'DS_MONEY_8', textA: 'Obsolete/slow movers plans', textB: 'Slow movers accumulate' },
    { qid: 'DS_MONEY_9', textA: 'Warehouse transactions disciplined', textB: 'Updates later' },
    { qid: 'DS_MONEY_10', textA: 'Returns quarantined', textB: 'Returns mixed back' },
    { qid: 'DS_MONEY_11', textA: 'Demand planning sales signals', textB: 'Planning last month' },
    { qid: 'DS_MONEY_12', textA: 'Production respects constraints', textB: 'Production waits materials' },
    { qid: 'DS_MONEY_13', textA: 'Shrinkage measured', textB: 'Shrinkage assumed' },
    { qid: 'DS_MONEY_14', textA: 'Credit terms vary risk', textB: 'Credit terms uniform' },
    { qid: 'DS_MONEY_15', textA: 'Overdue escalation rules', textB: 'Overdue negotiated' },
    { qid: 'DS_MONEY_16', textA: 'Profitability includes payment', textB: 'Profitability ignores payment' },
    { qid: 'DS_MONEY_17', textA: 'Procurement uses total cost', textB: 'Procurement unit price' },
    { qid: 'DS_MONEY_18', textA: 'Cash conversion tracked', textB: 'Cash managed by bank' },
    { qid: 'DS_MONEY_19', textA: 'Supplier changes approval', textB: 'Changes under pressure' },
    { qid: 'DS_MONEY_20', textA: 'Supply KPIs reviewed monthly', textB: 'Reviewed after stockouts' }
];

// P7: People (EHS)
const p7_qs = [
    { qid: 'QS_PEOPLE_1', textA: 'Near misses reported without fear', textB: 'Near misses quiet' },
    { qid: 'QS_PEOPLE_2', textA: 'Chemical handling rules enforced', textB: 'Handling depends on person' },
    { qid: 'QS_PEOPLE_3', textA: 'Spill response trained/ready', textB: 'Response improvised' },
    { qid: 'QS_PEOPLE_4', textA: 'Improvement actions close on time', textB: 'Improvements suggestions' }
];

const p7_ds = [
    { qid: 'DS_PEOPLE_1', textA: 'Training role-based/logged', textB: 'Training shadowing' },
    { qid: 'DS_PEOPLE_2', textA: 'Secondary containers labeled', textB: 'Containers "known"' },
    { qid: 'DS_PEOPLE_3', textA: 'Storage compatibility enforced', textB: 'Storage where space' },
    { qid: 'DS_PEOPLE_4', textA: 'Spill kits complete/checked', textB: 'Spill kits incomplete' },
    { qid: 'DS_PEOPLE_5', textA: 'PPE compliance coached', textB: 'PPE depends on mood' },
    { qid: 'DS_PEOPLE_6', textA: 'Near misses captured/closed', textB: 'Misses avoided' },
    { qid: 'DS_PEOPLE_7', textA: 'Incident learning systems', textB: 'Incident learning blame' },
    { qid: 'DS_PEOPLE_8', textA: 'Housekeeping daily discipline', textB: 'Periodic cleanup' },
    { qid: 'DS_PEOPLE_9', textA: 'Access to chemicals controlled', textB: 'Access informal' },
    { qid: 'DS_PEOPLE_10', textA: 'Drains/effluent managed', textB: 'Waste goes where can' },
    { qid: 'DS_PEOPLE_11', textA: 'Emergency readiness audited', textB: 'Readiness assumed' },
    { qid: 'DS_PEOPLE_12', textA: 'Contractors follow rules', textB: 'Contractors exceptions' },
    { qid: 'DS_PEOPLE_13', textA: 'Shift handovers structured', textB: 'Handovers casual' },
    { qid: 'DS_PEOPLE_14', textA: 'Safety can stop production', textB: 'Production wins' },
    { qid: 'DS_PEOPLE_15', textA: 'Improvement backlog ranked', textB: 'Backlog random' },
    { qid: 'DS_PEOPLE_16', textA: 'Action closure tracked', textB: 'Actions linger' },
    { qid: 'DS_PEOPLE_17', textA: 'Leaders walk floor', textB: 'Leaders engage crises' },
    { qid: 'DS_PEOPLE_18', textA: 'Waste measured reduced', textB: 'Waste hidden' },
    { qid: 'DS_PEOPLE_19', textA: 'Environmental compliance proactive', textB: 'Compliance reactive' },
    { qid: 'DS_PEOPLE_20', textA: 'Culture rewards prevention', textB: 'Culture rewards speed' }
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
