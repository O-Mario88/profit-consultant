
import { QuestionDefinition } from '../../types';

const defaultProps = {
  line_type: ['Plastics & packaging'],
  industry: 'plastics',
  signal_tags: []
};

// P1: Risk (Product Safety, Quality)
const p1_qs = [
  { qid: 'QS_RISK_1', textA: 'We rely on CTQ limits + routine checks to release product', textB: 'We rely on final inspection judgment' },
  { qid: 'QS_RISK_2', textA: 'Changes to resin/regrind/masterbatch follow a simple approval step', textB: 'Small changes are made to keep production moving' },
  { qid: 'QS_RISK_3', textA: 'We can trace suspect lots quickly using batch/shift records', textB: 'We piece together traceability from multiple places' },
  { qid: 'QS_RISK_4', textA: 'Defects are trended by type and acted on weekly', textB: 'Defects are discussed when they become urgent' }
];

const p1_ds = [
  { qid: 'DS_RISK_1', textA: 'CTQs are defined per SKU with limits', textB: 'CTQs are understood but not written' },
  { qid: 'DS_RISK_2', textA: 'SPC is used on critical specs', textB: 'Checks are mostly pass/fail' },
  { qid: 'DS_RISK_3', textA: 'Hold stock has aging rules', textB: 'Hold stock sits until someone decides' },
  { qid: 'DS_RISK_4', textA: 'Traceability can isolate affected lots fast', textB: 'Traceability takes days' },
  { qid: 'DS_RISK_5', textA: 'Regrind % is controlled by product class', textB: 'Regrind is adjusted as needed' },
  { qid: 'DS_RISK_6', textA: 'Resin supplier changes require approval', textB: 'Resin supplier changes are operational' },
  { qid: 'DS_RISK_7', textA: 'Masterbatch changes are qualified', textB: 'Masterbatch changes are assumed safe' },
  { qid: 'DS_RISK_8', textA: 'Printing adhesion/rub tests are routine', textB: 'Printing issues are handled on complaints' },
  { qid: 'DS_RISK_9', textA: 'Seal strength is checked with realistic conditions', textB: 'Seal strength is checked minimally' },
  { qid: 'DS_RISK_10', textA: 'QC has a decision tree + escalation', textB: 'QC decisions vary by person' },
  { qid: 'DS_RISK_11', textA: 'CAPA has due dates and evidence', textB: 'CAPA is a discussion' },
  { qid: 'DS_RISK_12', textA: 'Foreign body controls are defined', textB: 'Foreign body controls are informal' },
  { qid: 'DS_RISK_13', textA: 'Test equipment is verified/calibrated', textB: 'Equipment is trusted until wrong' },
  { qid: 'DS_RISK_14', textA: 'Customer specs are version-controlled', textB: 'Specs live in emails' },
  { qid: 'DS_RISK_15', textA: 'Complaint containment is time-boxed', textB: 'Containment is "ASAP"' },
  { qid: 'DS_RISK_16', textA: 'Cleanliness/line clearance is audited', textB: 'Cleanliness is assumed' },
  { qid: 'DS_RISK_17', textA: 'Regulated docs are ready anytime', textB: 'Regulated docs are assembled when asked' },
  { qid: 'DS_RISK_18', textA: 'Deviations are recorded consistently', textB: 'Deviations are handled verbally' },
  { qid: 'DS_RISK_19', textA: 'Scrap is categorized by defect type', textB: 'Scrap is tracked as one number' },
  { qid: 'DS_RISK_20', textA: 'Quality review happens weekly with ops', textB: 'Quality review happens monthly or on crisis' }
];

// P2: Innovation (Engineering)
const p2_qs = [
  { qid: 'QS_INNOVATION_1', textA: 'We run from "golden settings" and adjust within limits', textB: 'We tune settings to the day’s conditions' },
  { qid: 'QS_INNOVATION_2', textA: 'Every job has a complete pack before running', textB: 'We finalize details during production' },
  { qid: 'QS_INNOVATION_3', textA: 'Artwork has strict version control', textB: 'Artwork changes are handled through messages' },
  { qid: 'QS_INNOVATION_4', textA: 'Startup scrap is tracked and improved', textB: 'Startup scrap is expected' }
];

const p2_ds = [
  { qid: 'DS_INNOVATION_1', textA: 'Golden settings exist per SKU', textB: 'Settings vary by shift' },
  { qid: 'DS_INNOVATION_2', textA: 'Startup curve is documented', textB: 'Startup is trial-and-error' },
  { qid: 'DS_INNOVATION_3', textA: 'Changeover checklist is used', textB: 'Changeover relies on memory' },
  { qid: 'DS_INNOVATION_4', textA: 'Job pack includes packing pattern and QC plan', textB: 'Job pack focuses on material only' },
  { qid: 'DS_INNOVATION_5', textA: 'Artwork is version-controlled centrally', textB: 'Artwork lives in email threads' },
  { qid: 'DS_INNOVATION_6', textA: 'Tooling issues are logged with impact', textB: 'Tooling issues are handled informally' },
  { qid: 'DS_INNOVATION_7', textA: 'Capability targets exist for CTQs', textB: 'Targets are "within spec"' },
  { qid: 'DS_INNOVATION_8', textA: 'Material drying/handling is standardized', textB: 'Drying/handling is situational' },
  { qid: 'DS_INNOVATION_9', textA: 'Screen pack/filter changes are rule-based', textB: 'Changes happen when quality drops' },
  { qid: 'DS_INNOVATION_10', textA: 'Trials are documented and reused', textB: 'Trials are remembered' },
  { qid: 'DS_INNOVATION_11', textA: 'Engineering reviews scrap causes weekly', textB: 'Engineering reacts to breakdowns' },
  { qid: 'DS_INNOVATION_12', textA: 'Process changes require approval', textB: 'Process changes are operator decisions' },
  { qid: 'DS_INNOVATION_13', textA: 'Production has a Ready-to-Run gate', textB: 'Production starts to avoid idle time' },
  { qid: 'DS_INNOVATION_14', textA: 'Startup scrap has a target', textB: 'Startup scrap is accepted' },
  { qid: 'DS_INNOVATION_15', textA: 'Shift handover includes settings and CTQs', textB: 'Shift handover is verbal' },
  { qid: 'DS_INNOVATION_16', textA: 'Preventive checks are planned', textB: 'Preventive checks happen when free' },
  { qid: 'DS_INNOVATION_17', textA: 'Rework loops back into engineering learning', textB: 'Rework is treated as production cost' },
  { qid: 'DS_INNOVATION_18', textA: 'Preventive tooling maintenance is scheduled', textB: 'Tooling is repaired when failing' },
  { qid: 'DS_INNOVATION_19', textA: 'BOM accuracy is verified before run', textB: 'BOM errors are corrected during run' },
  { qid: 'DS_INNOVATION_20', textA: 'Engineering time is protected for improvements', textB: 'Engineering is always firefighting' }
];

// P3: Market (Sales)
const p3_qs = [
  { qid: 'QS_MARKET_1', textA: 'Sample approvals are documented before mass production', textB: 'Production starts once the customer "seems okay"' },
  { qid: 'QS_MARKET_2', textA: 'Lead times are promised based on capacity', textB: 'Lead times are promised based on sales pressure' },
  { qid: 'QS_MARKET_3', textA: 'Credit notes are tracked by cause and reduced', textB: 'Credit notes are treated as cost of business' },
  { qid: 'QS_MARKET_4', textA: 'Key accounts have a forecast rhythm', textB: 'Forecasts are handled informally' }
];

const p3_ds = [
  { qid: 'DS_MARKET_1', textA: 'RFQs have follow-up schedule', textB: 'RFQs are revisited when customer replies' },
  { qid: 'DS_MARKET_2', textA: 'Quotes include clear MOQ/price breaks', textB: 'Quotes are one price' },
  { qid: 'DS_MARKET_3', textA: 'Tooling charges and ownership are defined', textB: 'Tooling is negotiated ad hoc' },
  { qid: 'DS_MARKET_4', textA: 'Sampling has signed standards', textB: 'Sampling is "best effort"' },
  { qid: 'DS_MARKET_5', textA: 'Artwork version is locked at approval', textB: 'Artwork changes are handled later' },
  { qid: 'DS_MARKET_6', textA: 'OTIF performance is reviewed with customers', textB: 'OTIF is not discussed' },
  { qid: 'DS_MARKET_7', textA: 'Expedites are priced or limited', textB: 'Expedites are normal' },
  { qid: 'DS_MARKET_8', textA: 'Customer issues have response SLAs', textB: 'Customer issues are handled when urgent' },
  { qid: 'DS_MARKET_9', textA: 'Complaint containment is time-boxed', textB: 'Complaint containment is open-ended' },
  { qid: 'DS_MARKET_10', textA: 'Forecasts are compared to actuals', textB: 'Forecasts are not measured' },
  { qid: 'DS_MARKET_11', textA: 'Repeat orders are nurtured', textB: 'Repeat orders are assumed' },
  { qid: 'DS_MARKET_12', textA: 'Account profitability is known', textB: 'Only revenue is known' },
  { qid: 'DS_MARKET_13', textA: 'Customer change requests are priced', textB: 'Change requests are absorbed' },
  { qid: 'DS_MARKET_14', textA: 'Risky customers have terms controls', textB: 'Terms are same for all' },
  { qid: 'DS_MARKET_15', textA: 'Pipeline includes multiple channels', textB: 'Pipeline is mostly referrals' },
  { qid: 'DS_MARKET_16', textA: 'Claims/returns have a clear process', textB: 'Claims/returns are negotiated' },
  { qid: 'DS_MARKET_17', textA: 'Service issues feed ops improvements', textB: 'Service issues stay in customer care' },
  { qid: 'DS_MARKET_18', textA: 'Customer concentration risk is tracked', textB: 'Concentration risk is ignored' },
  { qid: 'DS_MARKET_19', textA: 'Pricing discipline is enforced', textB: 'Discounts are flexible' },
  { qid: 'DS_MARKET_20', textA: 'Quarterly account reviews happen', textB: 'Reviews happen when issues occur' }
];

// P4: Leadership (Pricing)
const p4_qs = [
  { qid: 'QS_LEADERSHIP_1', textA: 'Quotes include resin volatility handling', textB: 'Quotes assume stable material costs' },
  { qid: 'QS_LEADERSHIP_2', textA: 'Tooling costs are recovered through deposits/amortization', textB: 'Tooling is negotiated case-by-case' },
  { qid: 'QS_LEADERSHIP_3', textA: 'Change requests trigger fees or re-quoting', textB: 'Change requests are handled informally' },
  { qid: 'QS_LEADERSHIP_4', textA: 'Discounts require approval', textB: 'Discounts are flexible' }
];

const p4_ds = [
  { qid: 'DS_LEADERSHIP_1', textA: 'SKU margins are known', textB: 'Only overall margins are known' },
  { qid: 'DS_LEADERSHIP_2', textA: 'Resin increases are passed through quickly', textB: 'Resin increases are absorbed until renegotiation' },
  { qid: 'DS_LEADERSHIP_3', textA: 'Price breaks match run economics', textB: 'Price breaks match customer pressure' },
  { qid: 'DS_LEADERSHIP_4', textA: 'Tooling has clear ownership terms', textB: 'Tooling ownership is unclear' },
  { qid: 'DS_LEADERSHIP_5', textA: 'Artwork changes are billed', textB: 'Artwork changes are absorbed' },
  { qid: 'DS_LEADERSHIP_6', textA: 'Expedites are priced', textB: 'Expedites are free' },
  { qid: 'DS_LEADERSHIP_7', textA: 'Credit limits exist', textB: 'Credit is relationship-based' },
  { qid: 'DS_LEADERSHIP_8', textA: 'Overdues have escalation', textB: 'Overdues are negotiated' },
  { qid: 'DS_LEADERSHIP_9', textA: 'Margin floors exist', textB: 'Work is accepted to keep volume' },
  { qid: 'DS_LEADERSHIP_10', textA: 'Cost model includes scrap/energy', textB: 'Cost model is mostly resin' },
  { qid: 'DS_LEADERSHIP_11', textA: 'Payment terms differ by risk', textB: 'Terms are same for all' },
  { qid: 'DS_LEADERSHIP_12', textA: 'Price validity periods are enforced', textB: 'Quotes remain open indefinitely' },
  { qid: 'DS_LEADERSHIP_13', textA: 'Complexity factor is priced', textB: 'Complexity is absorbed' },
  { qid: 'DS_LEADERSHIP_14', textA: 'Customer profitability is reviewed', textB: 'Customer profitability is not reviewed' },
  { qid: 'DS_LEADERSHIP_15', textA: 'Claims/returns are charged back when justified', textB: 'Claims/returns are always accepted' },
  { qid: 'DS_LEADERSHIP_16', textA: 'Regrind policy is priced', textB: 'Regrind policy is hidden' },
  { qid: 'DS_LEADERSHIP_17', textA: 'Transport/packing costs are included', textB: 'Transport/packing costs are ignored' },
  { qid: 'DS_LEADERSHIP_18', textA: 'Contracts specify acceptance criteria', textB: 'Acceptance criteria are implied' },
  { qid: 'DS_LEADERSHIP_19', textA: 'Price changes follow a schedule', textB: 'Price changes are ad hoc' },
  { qid: 'DS_LEADERSHIP_20', textA: 'Sales understands conversion economics', textB: 'Sales focuses on volume only' }
];

// P5: Operations (Excellence)
const p5_qs = [
  { qid: 'QS_OPERATIONS_1', textA: 'We track OEE by line and act on top losses', textB: 'We focus on output volume only' },
  { qid: 'QS_OPERATIONS_2', textA: 'WIP is limited to protect flow', textB: 'WIP grows with urgency' },
  { qid: 'QS_OPERATIONS_3', textA: 'Changeovers are measured and improved', textB: 'Changeovers are "part of the job"' },
  { qid: 'QS_OPERATIONS_4', textA: 'Downtime has reason codes and fixes', textB: 'Downtime is accepted as normal' }
];

const p5_ds = [
  { qid: 'DS_OPERATIONS_1', textA: 'OEE is tracked daily', textB: 'OEE is reviewed occasionally' },
  { qid: 'DS_OPERATIONS_2', textA: 'Downtime has reason codes', textB: 'Downtime is logged as "breakdown"' },
  { qid: 'DS_OPERATIONS_3', textA: 'Startup scrap has a target', textB: 'Startup scrap is expected' },
  { qid: 'DS_OPERATIONS_4', textA: 'Changeover time is measured', textB: 'Changeover time is ignored' },
  { qid: 'DS_OPERATIONS_5', textA: 'PM compliance is tracked', textB: 'PM is done when convenient' },
  { qid: 'DS_OPERATIONS_6', textA: 'Bottleneck is protected in schedule', textB: 'Bottleneck is starved by changeovers' },
  { qid: 'DS_OPERATIONS_7', textA: 'WIP limits are explicit', textB: 'WIP is unlimited' },
  { qid: 'DS_OPERATIONS_8', textA: 'Inline QC checks are standardized', textB: 'Inline QC checks vary by operator' },
  { qid: 'DS_OPERATIONS_9', textA: 'Line clearance is audited', textB: 'Line clearance is assumed' },
  { qid: 'DS_OPERATIONS_10', textA: 'Speed changes are tied to defect risk', textB: 'Speed is pushed to meet targets' },
  { qid: 'DS_OPERATIONS_11', textA: 'Scrap is categorized by defect type', textB: 'Scrap is one number' },
  { qid: 'DS_OPERATIONS_12', textA: 'Setup materials are pre-staged', textB: 'Setup materials are hunted during changeover' },
  { qid: 'DS_OPERATIONS_13', textA: 'Critical spares are stocked', textB: 'Spares are bought when needed' },
  { qid: 'DS_OPERATIONS_14', textA: 'Schedule adherence is measured', textB: 'Schedule is always changing' },
  { qid: 'DS_OPERATIONS_15', textA: 'Rework has a defined path', textB: 'Rework is handled ad hoc' },
  { qid: 'DS_OPERATIONS_16', textA: 'Energy use is tracked per kg/unit', textB: 'Energy is treated as overhead' },
  { qid: 'DS_OPERATIONS_17', textA: 'Operators are trained on standard settings', textB: 'Operators learn by shadowing' },
  { qid: 'DS_OPERATIONS_18', textA: 'Daily huddles close actions', textB: 'Daily huddles share updates only' },
  { qid: 'DS_OPERATIONS_19', textA: 'Quality can stop the line when needed', textB: 'Quality is fixed after production' },
  { qid: 'DS_OPERATIONS_20', textA: 'Improvements prioritize biggest losses', textB: 'Improvements follow complaints' }
];

// P6: Money (Supply Chain)
const p6_qs = [
  { qid: 'QS_MONEY_1', textA: 'Inventory is cycle-counted on schedule', textB: 'Inventory is checked when missing' },
  { qid: 'QS_MONEY_2', textA: 'We prioritize WIP by aging and cash impact', textB: 'We prioritize WIP by urgency' },
  { qid: 'QS_MONEY_3', textA: 'Pellet loss prevention is routine and tracked', textB: 'Pellet loss prevention is informal' },
  { qid: 'QS_MONEY_4', textA: 'Collections follow a cadence', textB: 'Collections happen when cash is tight' }
];

const p6_ds = [
  { qid: 'DS_MONEY_1', textA: 'Inventory accuracy is measured', textB: 'Inventory accuracy is assumed' },
  { qid: 'DS_MONEY_2', textA: 'Stock has min/max rules', textB: 'Stock is reordered by memory' },
  { qid: 'DS_MONEY_3', textA: 'Stockouts are logged and reduced', textB: 'Stockouts are accepted' },
  { qid: 'DS_MONEY_4', textA: 'WIP aging is reviewed weekly', textB: 'WIP aging is not reviewed' },
  { qid: 'DS_MONEY_5', textA: 'Obsolete stock has action rules', textB: 'Obsolete stock is ignored' },
  { qid: 'DS_MONEY_6', textA: 'Supplier OTIF is tracked', textB: 'Supplier OTIF is not tracked' },
  { qid: 'DS_MONEY_7', textA: 'COAs are verified for critical inputs', textB: 'COAs are filed without review' },
  { qid: 'DS_MONEY_8', textA: 'Regulated docs are ready anytime', textB: 'Docs are assembled when requested' },
  { qid: 'DS_MONEY_9', textA: 'Emergency buys are measured', textB: 'Emergency buys are normal' },
  { qid: 'DS_MONEY_10', textA: 'Freight cost per unit is tracked', textB: 'Freight is overhead' },
  { qid: 'DS_MONEY_11', textA: 'Pellet loss has controls and training', textB: 'Pellet loss is "small spills"' },
  { qid: 'DS_MONEY_12', textA: 'Spill response is standardized', textB: 'Spill response is ad hoc' },
  { qid: 'DS_MONEY_13', textA: 'Receiving checks include quality criteria', textB: 'Receiving checks are quantity-only' },
  { qid: 'DS_MONEY_14', textA: 'WIP is limited', textB: 'WIP is unlimited' },
  { qid: 'DS_MONEY_15', textA: 'Finished goods are FIFO by lot', textB: 'FIFO is inconsistent' },
  { qid: 'DS_MONEY_16', textA: 'Credit limits are enforced', textB: 'Credit is relationship-based' },
  { qid: 'DS_MONEY_17', textA: 'Overdue invoices have escalation', textB: 'Overdues are negotiated' },
  { qid: 'DS_MONEY_18', textA: 'Forecasts drive procurement', textB: 'Procurement is reaction-based' },
  { qid: 'DS_MONEY_19', textA: 'Material substitutions are approved', textB: 'Substitutions happen under pressure' },
  { qid: 'DS_MONEY_20', textA: 'Supplier performance drives sourcing decisions', textB: 'Sourcing is price-only' }
];

// P7: People (Sustainability)
const p7_qs = [
  { qid: 'QS_PEOPLE_1', textA: 'Skills are mapped and cross-trained', textB: 'Skills live in a few people' },
  { qid: 'QS_PEOPLE_2', textA: 'Near misses are reported and closed', textB: 'Near misses are handled quietly' },
  { qid: 'QS_PEOPLE_3', textA: 'Improvements have owners and due dates', textB: 'Improvements are suggestions only' },
  { qid: 'QS_PEOPLE_4', textA: 'Pellet loss prevention is trained and routine', textB: 'Pellet loss prevention is informal' }
];

const p7_ds = [
  { qid: 'DS_PEOPLE_1', textA: 'Bottleneck roles have trained backups', textB: 'Bottleneck roles rely on one expert' },
  { qid: 'DS_PEOPLE_2', textA: 'Onboarding includes quality+process standards', textB: 'Onboarding is shadowing' },
  { qid: 'DS_PEOPLE_3', textA: 'Daily huddles close actions', textB: 'Daily huddles share updates only' },
  { qid: 'DS_PEOPLE_4', textA: 'Near misses are logged and reviewed', textB: 'Near misses are verbal' },
  { qid: 'DS_PEOPLE_5', textA: 'Safety rules hold under pressure', textB: 'Safety slips under deadlines' },
  { qid: 'DS_PEOPLE_6', textA: 'Skill gaps are measured', textB: 'Skill gaps are assumed' },
  { qid: 'DS_PEOPLE_7', textA: 'Kaizen backlog is ranked by impact', textB: 'Kaizen backlog is random' },
  { qid: 'DS_PEOPLE_8', textA: '5S zones have owners', textB: '5S is "everyone’s job"' },
  { qid: 'DS_PEOPLE_9', textA: 'Coaching uses KPIs and standards', textB: 'Coaching is reaction to problems' },
  { qid: 'DS_PEOPLE_10', textA: 'Scrap and downtime are discussed with operators', textB: 'KPIs stay with managers' },
  { qid: 'DS_PEOPLE_11', textA: 'Turnover causes are analyzed', textB: 'Turnover is accepted' },
  { qid: 'DS_PEOPLE_12', textA: 'Recognition rewards FPFT and safety', textB: 'Recognition rewards speed only' },
  { qid: 'DS_PEOPLE_13', textA: 'Pellet loss prevention is trained', textB: 'Pellet loss is treated as small spills' },
  { qid: 'DS_PEOPLE_14', textA: 'Energy per kg/unit is tracked', textB: 'Energy is overhead' },
  { qid: 'DS_PEOPLE_15', textA: 'Sustainability metrics are operational', textB: 'Sustainability is reporting only' },
  { qid: 'DS_PEOPLE_16', textA: 'Problems trigger root cause learning', textB: 'Problems trigger blame' },
  { qid: 'DS_PEOPLE_17', textA: 'Supervisors have a coaching checklist', textB: 'Supervisors manage by urgency' },
  { qid: 'DS_PEOPLE_18', textA: 'Meetings have closure discipline', textB: 'Meetings generate tasks without follow-through' },
  { qid: 'DS_PEOPLE_19', textA: 'Improvement targets are measurable', textB: 'Improvement targets are vague' },
  { qid: 'DS_PEOPLE_20', textA: 'Training refreshers are scheduled', textB: 'Training happens when mistakes occur' }
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
