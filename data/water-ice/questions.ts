
import { QuestionDefinition } from '../../types';

const defaultProps = {
    line_type: ['Bottled water / ice production'],
    industry: 'water-ice',
    signal_tags: []
};

// P1: Risk (Safety & Quality)
const p1_qs = [
    { qid: 'QS_RISK_1', textA: 'We can isolate affected lots quickly by code', textB: 'We usually quarantine "everything" first' },
    { qid: 'QS_RISK_2', textA: 'Ice is treated and handled as food with strict hygiene', textB: 'Ice handling is treated like "just frozen water"' },
    { qid: 'QS_RISK_3', textA: 'Labels/claims follow a controlled approval process', textB: 'Labels/claims change informally' },
    { qid: 'QS_RISK_4', textA: 'Complaints trigger containment + testing + root cause', textB: 'Complaints trigger refunds/arguments' }
];

const p1_ds = [
    { qid: 'DS_RISK_1', textA: 'Source risks are mapped and reviewed seasonally', textB: 'Source risks are assumed stable' },
    { qid: 'DS_RISK_2', textA: 'Lot codes link to distribution records', textB: 'Distribution records are incomplete' },
    { qid: 'DS_RISK_3', textA: 'Micro monitoring has determined frequency/triggers', textB: 'Micro testing happens mainly after issues' },
    { qid: 'DS_RISK_4', textA: 'Chemical risks are reviewed (fluoride/nitrate)', textB: 'Chemical risks are ignored' },
    { qid: 'DS_RISK_5', textA: 'Ice bins/scoops have dedicated cleaning SOPs', textB: 'Ice tools are shared and cleaned ad hoc' },
    { qid: 'DS_RISK_6', textA: 'Customer complaints are coded by cause', textB: 'Customer complaints are free-text only' },
    { qid: 'DS_RISK_7', textA: 'CAPA has owners + effectiveness checks', textB: 'CAPA ends at "we talked to staff"' },
    { qid: 'DS_RISK_8', textA: 'Label claims are tied to category (purified/spring)', textB: 'Claims are marketing-led' },
    { qid: 'DS_RISK_9', textA: 'Nonconforming product is quarantined physically', textB: 'Nonconforming product mixed back in' },
    { qid: 'DS_RISK_10', textA: 'Water/ice contact surfaces have sanitation verification', textB: '“Looks clean” is the standard' },
    { qid: 'DS_RISK_11', textA: 'Supplier COAs are reviewed for critical inputs', textB: 'COAs are filed without review' },
    { qid: 'DS_RISK_12', textA: 'Packaging integrity is checked routinely', textB: 'Packaging issues noticed in market' },
    { qid: 'DS_RISK_13', textA: 'Training is logged and role-based', textB: 'Training is shadowing' },
    { qid: 'DS_RISK_14', textA: 'Internal audits happen on schedule', textB: 'Audits happen when there’s a scare' },
    { qid: 'DS_RISK_15', textA: 'Management reviews trend charts monthly', textB: 'Management reacts to incidents only' },
    { qid: 'DS_RISK_16', textA: 'Transport hygiene is controlled (clean trucks)', textB: 'Transport hygiene depends on driver' },
    { qid: 'DS_RISK_17', textA: 'Returned goods are investigated by lot', textB: 'Returned goods are re-sold quietly' },
    { qid: 'DS_RISK_18', textA: 'Storage is protected from heat/sun', textB: 'Storage depends on space' },
    { qid: 'DS_RISK_19', textA: 'Third-party distribution follows hygiene rules', textB: 'Distributors do their own thing' },
    { qid: 'DS_RISK_20', textA: 'Evidence packs are ready for regulators', textB: 'Evidence is assembled under pressure' }
];

// P2: Innovation (Treatment Process)
const p2_qs = [
    { qid: 'QS_INNOVATION_1', textA: 'We track treatment indicators daily with triggers', textB: 'We check indicators when things seem off' },
    { qid: 'QS_INNOVATION_2', textA: 'Post-treatment water stays protected (sealed)', textB: 'Post-treatment water is exposed (open transfers)' },
    { qid: 'QS_INNOVATION_3', textA: 'Ice equipment has a logged cleaning schedule', textB: 'Ice cleaning is occasional' },
    { qid: 'QS_INNOVATION_4', textA: 'Sanitation is verified, not assumed', textB: 'Sanitation is "looks clean"' }
];

const p2_ds = [
    { qid: 'DS_INNOVATION_1', textA: 'Treatment flow is mapped as barriers', textB: 'Treatment is just machines' },
    { qid: 'DS_INNOVATION_2', textA: 'Filter performance tracks DP trends', textB: 'Filters changed by date' },
    { qid: 'DS_INNOVATION_3', textA: 'UV/ozone effectiveness is verified', textB: 'Disinfection is assumed effective' },
    { qid: 'DS_INNOVATION_4', textA: 'Cleaning frequency is defined/consistent', textB: 'Cleaning varies by shift' },
    { qid: 'DS_INNOVATION_5', textA: 'No open-contact rule for post-treatment', textB: 'Open contact happens occasionally' },
    { qid: 'DS_INNOVATION_6', textA: 'Ice tools are dedicated and controlled', textB: 'Tools are shared' },
    { qid: 'DS_INNOVATION_7', textA: 'Sanitizer concentration is checked', textB: 'Sanitizer mixed by experience' },
    { qid: 'DS_INNOVATION_8', textA: 'RO membranes monitored for drift', textB: 'Membranes serviced on complaint' },
    { qid: 'DS_INNOVATION_9', textA: 'Rinse water is treated as product', textB: 'Rinse water is separate' },
    { qid: 'DS_INNOVATION_10', textA: 'Tank vents are protected/filters', textB: 'Vents rarely inspected' },
    { qid: 'DS_INNOVATION_11', textA: 'Ice machine deep-clean covers hidden zones', textB: 'Deep-clean is visible only' },
    { qid: 'DS_INNOVATION_12', textA: 'Written corrective actions for limits', textB: 'Out-of-limit depends on supervisor' },
    { qid: 'DS_INNOVATION_13', textA: 'Finished water storage has turnover rules', textB: 'Storage varies with sales' },
    { qid: 'DS_INNOVATION_14', textA: 'Maintenance requires sanitation before restart', textB: 'Restart and monitor only' },
    { qid: 'DS_INNOVATION_15', textA: 'Bagging area is a hygiene zone', textB: 'Bagging shares warehouse traffic' },
    { qid: 'DS_INNOVATION_16', textA: 'Treatment changes follow approval', textB: 'Changes happen to keep moving' },
    { qid: 'DS_INNOVATION_17', textA: 'We control filling recontamination risk', textB: 'Focus mostly upstream' },
    { qid: 'DS_INNOVATION_18', textA: 'Drain management prevents backflow', textB: 'Drains just specific to floor' },
    { qid: 'DS_INNOVATION_19', textA: 'We explain "why" to operators', textB: 'Knowledge sits with experts' },
    { qid: 'DS_INNOVATION_20', textA: 'Trend charts drive process changes', textB: 'We respond to incidents only' }
];

// P3: Market (Distribution)
const p3_qs = [
    { qid: 'QS_MARKET_1', textA: 'We track melt loss and redesign routes', textB: 'Melt loss is accepted' },
    { qid: 'QS_MARKET_2', textA: 'Distribution hygiene is enforced', textB: 'Hygiene depends on distributor' },
    { qid: 'QS_MARKET_3', textA: 'OTIF is measured and owned', textB: 'OTIF is "sometimes"' },
    { qid: 'QS_MARKET_4', textA: 'Returns are coded by cause', textB: 'Returns are negotiated' }
];

const p3_ds = [
    { qid: 'DS_MARKET_1', textA: 'Service levels by customer type', textB: 'One service level for all' },
    { qid: 'DS_MARKET_2', textA: 'OTIF has a single owner', textB: 'OTIF ownership shared' },
    { qid: 'DS_MARKET_3', textA: 'Heat/sun exposure managed in transport', textB: 'Exposure depends on space' },
    { qid: 'DS_MARKET_4', textA: 'Delivery teams follow clean handling', textB: 'Cleanliness depends on driver' },
    { qid: 'DS_MARKET_5', textA: 'Seal integrity check at dispatch', textB: 'Seal issues found by customers' },
    { qid: 'DS_MARKET_6', textA: 'Ice deliveries timed for melt', textB: 'Ice follows standard routing' },
    { qid: 'DS_MARKET_7', textA: 'Returns tracked with reason codes', textB: 'Returns logged as number' },
    { qid: 'DS_MARKET_8', textA: 'Distributor agreement includes hygiene', textB: 'Distributor handling assumed' },
    { qid: 'DS_MARKET_9', textA: 'Control dirty bottle/crate risk', textB: 'Focus on production clean' },
    { qid: 'DS_MARKET_10', textA: 'Ice bags protected during load', textB: 'Ice bags handled like general goods' },
    { qid: 'DS_MARKET_11', textA: 'Customer feedback reaches ops', textB: 'Feedback stays in sales' },
    { qid: 'DS_MARKET_12', textA: 'Key accounts have scheduled reviews', textB: 'Reviews happen on conflict' },
    { qid: 'DS_MARKET_13', textA: 'Taste drift prevention (storage age)', textB: 'Taste treated as preference' },
    { qid: 'DS_MARKET_14', textA: 'Melt loss tied to route profitability', textB: 'Profitability excludes melt' },
    { qid: 'DS_MARKET_15', textA: 'Evidence used in disputes', textB: 'Disputes negotiated' },
    { qid: 'DS_MARKET_16', textA: 'Peak demand planning (heat/events)', textB: 'Peak demand is firefighting' },
    { qid: 'DS_MARKET_17', textA: 'Packaging formats segmented by channel', textB: 'Formats offered ad-hoc' },
    { qid: 'DS_MARKET_18', textA: 'Reseller handling rules defined', textB: 'Resellers handle as preferred' },
    { qid: 'DS_MARKET_19', textA: 'Complaint closure time monitored', textB: 'Customer satisfaction monitored' },
    { qid: 'DS_MARKET_20', textA: 'Sales promises are capacity-aware', textB: 'Sales promises relationship-driven' }
];

// P4: Leadership (Pricing)
const p4_qs = [
    { qid: 'QS_LEADERSHIP_1', textA: 'We know true unit cost by SKU', textB: 'We know rough costs only' },
    { qid: 'QS_LEADERSHIP_2', textA: 'Melt loss is priced into routes', textB: 'Melt loss is overhead' },
    { qid: 'QS_LEADERSHIP_3', textA: 'Pack+Dist costs separated from treatment', textB: 'Pricing focuses on competitor' },
    { qid: 'QS_LEADERSHIP_4', textA: 'Discounts follow a rule/approval', textB: 'Discounts negotiated as needed' }
];

const p4_ds = [
    { qid: 'DS_LEADERSHIP_1', textA: 'Track margin by channel', textB: 'Track total margin only' },
    { qid: 'DS_LEADERSHIP_2', textA: 'Price lists version controlled', textB: 'Price lists vary by sales' },
    { qid: 'DS_LEADERSHIP_3', textA: 'Packaging costs updated quickly', textB: 'Increases absorbed till crisis' },
    { qid: 'DS_LEADERSHIP_4', textA: 'Distribution cost per route known', textB: 'Distribution is overhead' },
    { qid: 'DS_LEADERSHIP_5', textA: 'Melt/handling priced for ice', textB: 'Ice priced by bag size' },
    { qid: 'DS_LEADERSHIP_6', textA: 'Discounting has margin floors', textB: 'Discount used for volume' },
    { qid: 'DS_LEADERSHIP_7', textA: 'Bulk formats have cost model', textB: 'Bulk priced by guess' },
    { qid: 'DS_LEADERSHIP_8', textA: 'High-maintenance customers priced differently', textB: 'All customers similar price' },
    { qid: 'DS_LEADERSHIP_9', textA: 'Events/rush pricing exists', textB: 'Rush pricing negotiated awkwardly' },
    { qid: 'DS_LEADERSHIP_10', textA: 'Leakage/returns tracked as margin reducer', textB: 'Returns separate problem' },
    { qid: 'DS_LEADERSHIP_11', textA: 'Contribution margin per hour known', textB: 'Schedule by urgency' },
    { qid: 'DS_LEADERSHIP_12', textA: 'Price for reliability (OTIF)', textB: 'Compete on unit price' },
    { qid: 'DS_LEADERSHIP_13', textA: 'Free goods budgeted/ROI', textB: 'Free goods relationship-driven' },
    { qid: 'DS_LEADERSHIP_14', textA: 'Min order sizes protect profit', textB: 'Accept any order size' },
    { qid: 'DS_LEADERSHIP_15', textA: 'Re-price loss making SKUs', textB: 'Keep selling because they move' },
    { qid: 'DS_LEADERSHIP_16', textA: 'Manage pricing by format', textB: 'Pricing evolves randomly' },
    { qid: 'DS_LEADERSHIP_17', textA: 'Monitor price realization', textB: 'Monitor only revenue' },
    { qid: 'DS_LEADERSHIP_18', textA: 'Credit risk affects pricing', textB: 'Pricing ignores payment' },
    { qid: 'DS_LEADERSHIP_19', textA: 'Route profit includes melt/labor', textB: 'Route profit focuses on fuel' },
    { qid: 'DS_LEADERSHIP_20', textA: 'Cost updates frequent', textB: 'Cost updates reactive' }
];

// P5: Operations (Excellence)
const p5_qs = [
    { qid: 'QS_OPERATIONS_1', textA: 'We track downtime causes daily', textB: 'We fix downtime as it appears' },
    { qid: 'QS_OPERATIONS_2', textA: 'Seal/leak checks happen routinely', textB: 'Seal issues found by customers' },
    { qid: 'QS_OPERATIONS_3', textA: 'Ice bagging zone is controlled', textB: 'Bagging hygiene is behavioral' },
    { qid: 'QS_OPERATIONS_4', textA: 'Sanitation checks built into shift', textB: 'Sanitation when slow' }
];

const p5_ds = [
    { qid: 'DS_OPERATIONS_1', textA: 'OEE/uptime tracked daily', textB: 'Output tracked only' },
    { qid: 'DS_OPERATIONS_2', textA: 'Downtime codes + weekly review', textB: 'Downtime described differently' },
    { qid: 'DS_OPERATIONS_3', textA: 'Cap handling is controlled', textB: 'Caps handled like packaging' },
    { qid: 'DS_OPERATIONS_4', textA: 'Fill volume checks consistent', textB: 'Fill checks depend on operator' },
    { qid: 'DS_OPERATIONS_5', textA: 'Leak testing defined method', textB: 'Leak testing occasional' },
    { qid: 'DS_OPERATIONS_6', textA: 'CIP/COP documented + verified', textB: 'Cleaning done, verification minimal' },
    { qid: 'DS_OPERATIONS_7', textA: 'Changeovers include hygiene step', textB: 'Changeovers focus on speed' },
    { qid: 'DS_OPERATIONS_8', textA: 'Ice surfaces inspected hidden zones', textB: 'Cleaning visible areas only' },
    { qid: 'DS_OPERATIONS_9', textA: 'Bagging tools controlled', textB: 'Bagging like general packing' },
    { qid: 'DS_OPERATIONS_10', textA: 'Foreign matter controls exist', textB: 'Foreign matter processed on complaint' },
    { qid: 'DS_OPERATIONS_11', textA: 'Preforms/bottles protected storage', textB: 'Storage depends on space' },
    { qid: 'DS_OPERATIONS_12', textA: 'PM scheduled and compliance tracked', textB: 'Maintenance reactive' },
    { qid: 'DS_OPERATIONS_13', textA: 'Ice defrost/drain planned', textB: 'Defrost handled on problem' },
    { qid: 'DS_OPERATIONS_14', textA: 'Startup losses measured', textB: 'Startup rejects accepted' },
    { qid: 'DS_OPERATIONS_15', textA: 'Standard work for setup', textB: 'Setup relies on experience' },
    { qid: 'DS_OPERATIONS_16', textA: 'Label errors tracked', textB: 'Label errors fixed when noticed' },
    { qid: 'DS_OPERATIONS_17', textA: 'Holds segregated physically', textB: 'Holds handled informally' },
    { qid: 'DS_OPERATIONS_18', textA: 'Ice storage conditions controlled', textB: 'Storage varies' },
    { qid: 'DS_OPERATIONS_19', textA: 'Improvement actions have owners', textB: 'Ideas exist, execution weak' },
    { qid: 'DS_OPERATIONS_20', textA: 'Hygiene holds under rush', textB: 'Hygiene slips during rush' }
];

// P6: Money (Supply Chain)
const p6_qs = [
    { qid: 'QS_MONEY_1', textA: 'Packaging stockouts rare (min/max)', textB: 'Stockouts happen (visual reorder)' },
    { qid: 'QS_MONEY_2', textA: 'Cold storage capacity planned', textB: 'Cold storage used as needed' },
    { qid: 'QS_MONEY_3', textA: 'Inventory cycle-counted routinely', textB: 'Corrected when stop happens' },
    { qid: 'QS_MONEY_4', textA: 'Credit limits enforced', textB: 'Collections when cash pressure' }
];

const p6_ds = [
    { qid: 'DS_MONEY_1', textA: 'Critical pack safety stock rules', textB: 'Reorder when looks low' },
    { qid: 'DS_MONEY_2', textA: 'Dual sourcing for preforms/caps', textB: 'One source mostly' },
    { qid: 'DS_MONEY_3', textA: 'Ice bags priority replenishment', textB: 'Ice pack managed like supply' },
    { qid: 'DS_MONEY_4', textA: 'Inventory accuracy measured', textB: 'Accuracy not measured' },
    { qid: 'DS_MONEY_5', textA: 'Emergency buys tracked', textB: 'Emergency buys normal' },
    { qid: 'DS_MONEY_6', textA: 'Days on hand / aging tracked', textB: 'Focus mostly on output' },
    { qid: 'DS_MONEY_7', textA: 'FG stored to protect quality', textB: 'FG storage depends on space' },
    { qid: 'DS_MONEY_8', textA: 'Cold storage FIFO organized', textB: 'Cold storage "what fits"' },
    { qid: 'DS_MONEY_9', textA: 'Supplier OTIF/defects tracked', textB: 'Supplier performance relationship' },
    { qid: 'DS_MONEY_10', textA: 'Shrinkage measured as cost', textB: 'Shrinkage assumed minimal' },
    { qid: 'DS_MONEY_11', textA: 'Dispatch plans reduce trips', textB: 'Dispatch as orders arrive' },
    { qid: 'DS_MONEY_12', textA: 'Melt loss treated as shrink', textB: 'Melt loss treated as weather' },
    { qid: 'DS_MONEY_13', textA: 'Warehouse transactions disciplined', textB: 'Updates when time allows' },
    { qid: 'DS_MONEY_14', textA: 'Credit terms match risk', textB: 'Credit terms uniform' },
    { qid: 'DS_MONEY_15', textA: 'Overdue escalation rules', textB: 'Overdue negotiated' },
    { qid: 'DS_MONEY_16', textA: 'Returns quarantined/traced', textB: 'Returns reintroduced' },
    { qid: 'DS_MONEY_17', textA: 'Taste-affecting materials stored separate', textB: 'All materials stored same' },
    { qid: 'DS_MONEY_18', textA: 'Cooler downtime contingency', textB: 'Downtime ad hoc' },
    { qid: 'DS_MONEY_19', textA: 'Cash conversion tracked', textB: 'Cash issues seen in bank' },
    { qid: 'DS_MONEY_20', textA: 'Procurement considers total cost', textB: 'Procurement focuses unit price' }
];

// P7: People (EHS)
const p7_qs = [
    { qid: 'QS_PEOPLE_1', textA: 'Hygiene trained and coached daily', textB: 'Hygiene exists, enforcement varies' },
    { qid: 'QS_PEOPLE_2', textA: 'Ice tools audited like food op', textB: 'Ice relies on "common sense"' },
    { qid: 'QS_PEOPLE_3', textA: 'Near misses reported without fear', textB: 'Hesitate to report small misses' },
    { qid: 'QS_PEOPLE_4', textA: 'Improvements have owners', textB: 'Improvements depend on motivation' }
];

const p7_ds = [
    { qid: 'DS_PEOPLE_1', textA: 'Role-based training new hires', textB: 'Learn by watching' },
    { qid: 'DS_PEOPLE_2', textA: 'Supervisors coach to standards', textB: 'Manage mostly by output' },
    { qid: 'DS_PEOPLE_3', textA: 'Hygiene rules clear high-risk', textB: 'Hygiene rules general' },
    { qid: 'DS_PEOPLE_4', textA: 'Gloves/hand hygiene enforced ice', textB: 'Ice zones general practice' },
    { qid: 'DS_PEOPLE_5', textA: 'Staff understand invisible risk', textB: 'Rules followed when watched' },
    { qid: 'DS_PEOPLE_6', textA: 'Shift handovers structured', textB: 'Handovers verbal/short' },
    { qid: 'DS_PEOPLE_7', textA: 'Stop and escalate rule', textB: 'Hesitate to stop production' },
    { qid: 'DS_PEOPLE_8', textA: 'PPE holds under pressure', textB: 'PPE slips during rush' },
    { qid: 'DS_PEOPLE_9', textA: 'Housekeeping daily discipline', textB: 'Housekeeping periodic' },
    { qid: 'DS_PEOPLE_10', textA: 'Incidents trigger learning', textB: 'Incidents trigger blame' },
    { qid: 'DS_PEOPLE_11', textA: 'Training records refreshed', textB: 'Training assumed done' },
    { qid: 'DS_PEOPLE_12', textA: 'Performance discussed with data', textB: 'Performance anecdotes' },
    { qid: 'DS_PEOPLE_13', textA: 'Operators explain critical checks', textB: 'Run steps without knowing why' },
    { qid: 'DS_PEOPLE_14', textA: 'Staff explain ice food risk', textB: 'Ice just frozen water' },
    { qid: 'DS_PEOPLE_15', textA: 'Improvement ideas ranked', textB: 'Ideas informal' },
    { qid: 'DS_PEOPLE_16', textA: 'Action closure tracked', textB: 'Actions remain open' },
    { qid: 'DS_PEOPLE_17', textA: 'Cross-training reduces reliance', textB: 'Knowledge concentrated' },
    { qid: 'DS_PEOPLE_18', textA: 'Contractors follow hygiene', textB: 'Contractors exceptions' },
    { qid: 'DS_PEOPLE_19', textA: 'Leaders walk floor routine', textB: 'Leaders engage on issue' },
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
