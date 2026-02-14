
import { QuestionDefinition } from '../../types';

const defaultProps = {
  line_type: ['Furniture & Carpentry Production'],
  industry: 'furniture',
  signal_tags: []
};

// P1: Product Quality, Standards & Customer Trust
const p1_qs = [
  { qid: 'QS_FURN_QUAL_1', textA: 'We use a visible “gold standard” sample for finish + fit', textB: 'Standards live mostly in people’s heads' },
  { qid: 'QS_FURN_QUAL_2', textA: 'We measure repeat defects weekly and fix them', textB: 'We fix defects as they appear' },
  { qid: 'QS_FURN_QUAL_3', textA: 'Moisture/acclimation is planned into production', textB: 'Moisture is handled informally' },
  { qid: 'QS_FURN_QUAL_4', textA: 'Packaging is standardized by product type', textB: 'Packaging depends on what’s available' }
];

const p1_ds = [
  { qid: 'DS_FURN_QUAL_1', textA: 'Fit/finish tolerances are defined and measurable', textB: 'Fit/finish is judged by eye' },
  { qid: 'DS_FURN_QUAL_2', textA: 'Each product family has a golden sample reference', textB: 'Reference depends on memory' },
  { qid: 'DS_FURN_QUAL_3', textA: 'Final inspection is a release gate', textB: 'Final inspection is optional when busy' },
  { qid: 'DS_FURN_QUAL_4', textA: 'Defects are coded and trended', textB: 'Defects are described differently each time' },
  { qid: 'DS_FURN_QUAL_5', textA: 'Finish system steps are standardized', textB: 'Finish steps vary by operator' },
  { qid: 'DS_FURN_QUAL_6', textA: 'Hardware brand/spec is controlled', textB: 'Hardware varies by availability' },
  { qid: 'DS_FURN_QUAL_7', textA: 'Moisture is measured at intake and pre-assembly', textB: 'Moisture is rarely measured' },
  { qid: 'DS_FURN_QUAL_8', textA: 'Wood movement risk is designed for', textB: 'Wood movement is blamed on “bad wood”' },
  { qid: 'DS_FURN_QUAL_9', textA: 'Complaints trigger root-cause actions', textB: 'Complaints trigger discounts' },
  { qid: 'DS_FURN_QUAL_10', textA: 'Returns are quarantined and inspected', textB: 'Returns are repaired immediately without records' },
  { qid: 'DS_FURN_QUAL_11', textA: 'Packaging tests exist (drop/stack checks at least informally)', textB: 'Packaging is assumed' },
  { qid: 'DS_FURN_QUAL_12', textA: 'Installation punch-lists are tracked', textB: 'Punch-lists are handled verbally' },
  { qid: 'DS_FURN_QUAL_13', textA: 'Customer care instructions are included', textB: 'Care instructions are ad hoc' },
  { qid: 'DS_FURN_QUAL_14', textA: 'Warranty rules are clear and consistent', textB: 'Warranty is negotiated case-by-case' },
  { qid: 'DS_FURN_QUAL_15', textA: 'Traceability exists for panels/finishes where required', textB: 'Traceability is difficult' },
  { qid: 'DS_FURN_QUAL_16', textA: 'Quality ownership is shared by production + QA', textB: 'Quality is “QA’s job”' },
  { qid: 'DS_FURN_QUAL_17', textA: 'Supplier defects are logged and escalated', textB: 'Supplier defects are absorbed' },
  { qid: 'DS_FURN_QUAL_18', textA: 'Color matching uses controlled method (samples/lighting)', textB: 'Color matching is “best effort”' },
  { qid: 'DS_FURN_QUAL_19', textA: 'Preventive checks reduce repeat finish defects', textB: 'Finish defects repeat' },
  { qid: 'DS_FURN_QUAL_20', textA: 'Leadership reviews quality trends monthly', textB: 'Leadership reviews quality only after complaints' }
];

// P2: Design-to-Build Process Control
const p2_qs = [
  { qid: 'QS_FURN_DES_1', textA: 'Drawings/cutlists are controlled and current', textB: 'Floor updates happen informally' },
  { qid: 'QS_FURN_DES_2', textA: 'Finishing follows a standard sequence', textB: 'Finishing depends on who is available' },
  { qid: 'QS_FURN_DES_3', textA: 'Changes are approved and priced', textB: 'Changes are absorbed to keep customer happy' },
  { qid: 'QS_FURN_DES_4', textA: 'Installation measurements are verified with a checklist', textB: 'Measurements rely on experience' }
];

const p2_ds = [
  { qid: 'DS_FURN_DES_1', textA: 'Cutlists are versioned', textB: 'Cutlists are edited informally' },
  { qid: 'DS_FURN_DES_2', textA: 'Parts are labeled and tracked', textB: 'Parts are recognized by memory' },
  { qid: 'DS_FURN_DES_3', textA: 'Wrong-part prevention exists (staging bins/labels)', textB: 'Wrong parts happen sometimes' },
  { qid: 'DS_FURN_DES_4', textA: 'Jigs/stops protect repeat accuracy', textB: 'Accuracy depends on carefulness' },
  { qid: 'DS_FURN_DES_5', textA: 'Grain direction is planned', textB: 'Grain direction is random' },
  { qid: 'DS_FURN_DES_6', textA: 'Joinery is selected by load/use case', textB: 'Joinery is selected by speed' },
  { qid: 'DS_FURN_DES_7', textA: 'Pre-drill patterns are standardized', textB: 'Drilling is eyeballed' },
  { qid: 'DS_FURN_DES_8', textA: 'Assembly squareness checks exist', textB: 'Squareness is assumed' },
  { qid: 'DS_FURN_DES_9', textA: 'Adhesives are controlled (type, open time, clamp time)', textB: 'Adhesives are “whatever works”' },
  { qid: 'DS_FURN_DES_10', textA: 'Sanding sequence is documented', textB: 'Sanding varies by worker' },
  { qid: 'DS_FURN_DES_11', textA: 'Dust control exists (collection + cleanup cadence)', textB: 'Dust control is occasional' },
  { qid: 'DS_FURN_DES_12', textA: 'Finish cure time is respected', textB: 'Finish cure time is rushed' },
  { qid: 'DS_FURN_DES_13', textA: 'Color match is controlled (samples/lighting)', textB: 'Color match is improvised' },
  { qid: 'DS_FURN_DES_14', textA: 'Rework causes are logged', textB: 'Rework is just “part of it”' },
  { qid: 'DS_FURN_DES_15', textA: 'Change requests are documented and priced', textB: 'Changes are absorbed' },
  { qid: 'DS_FURN_DES_16', textA: 'Site measures are verified', textB: 'Site measures are trusted' },
  { qid: 'DS_FURN_DES_17', textA: 'Installation uses a punch-list', textB: 'Installation is “finish and go”' },
  { qid: 'DS_FURN_DES_18', textA: 'Tool calibration/maintenance exists', textB: 'Tools are used until they fail' },
  { qid: 'DS_FURN_DES_19', textA: 'Each job has a defined workflow owner', textB: 'Ownership shifts constantly' },
  { qid: 'DS_FURN_DES_20', textA: 'Lessons learned update templates', textB: 'Lessons learned stay as stories' }
];

// P3: Sales, Delivery, Installation & CX
const p3_qs = [
  { qid: 'QS_FURN_SALE_1', textA: 'Quotes include clear scope and exclusions', textB: 'Quotes rely on assumptions' },
  { qid: 'QS_FURN_SALE_2', textA: 'OTIF is tracked and owned', textB: 'Delivery is managed by firefighting' },
  { qid: 'QS_FURN_SALE_3', textA: 'Changes become formal change orders', textB: 'Changes are absorbed informally' },
  { qid: 'QS_FURN_SALE_4', textA: 'Installation ends with punch-list sign-off', textB: 'Installation ends when “looks okay”' }
];

const p3_ds = [
  { qid: 'DS_FURN_SALE_1', textA: 'Sales captures requirements consistently', textB: 'Requirements vary by salesperson' },
  { qid: 'DS_FURN_SALE_2', textA: 'Measurement visit follows a checklist', textB: 'Measurement relies on experience' },
  { qid: 'DS_FURN_SALE_3', textA: 'Quote includes finish/hardware specifics', textB: 'Quote is general' },
  { qid: 'DS_FURN_SALE_4', textA: 'Lead times match capacity', textB: 'Lead times are optimistic' },
  { qid: 'DS_FURN_SALE_5', textA: 'Customers receive care + warranty info', textB: 'Info is verbal' },
  { qid: 'DS_FURN_SALE_6', textA: 'Delivery damage is tracked', textB: 'Delivery damage is “bad luck”' },
  { qid: 'DS_FURN_SALE_7', textA: 'Loading/handling standards exist', textB: 'Handling varies by team' },
  { qid: 'DS_FURN_SALE_8', textA: 'Installation is standardized', textB: 'Installation is improvisation' },
  { qid: 'DS_FURN_SALE_9', textA: 'Punch-list items are logged and closed', textB: 'Punch-list items are handled verbally' },
  { qid: 'DS_FURN_SALE_10', textA: 'Aftercare response time is tracked', textB: 'Aftercare response time is unknown' },
  { qid: 'DS_FURN_SALE_11', textA: 'Referrals are requested systematically', textB: 'Referrals happen by chance' },
  { qid: 'DS_FURN_SALE_12', textA: 'Complaint data feeds production fixes', textB: 'Complaints are isolated events' },
  { qid: 'DS_FURN_SALE_13', textA: 'Site constraints are captured early', textB: 'Site constraints surprise the team' },
  { qid: 'DS_FURN_SALE_14', textA: 'Payment milestones are linked to progress', textB: 'Payments are negotiated informally' },
  { qid: 'DS_FURN_SALE_15', textA: 'Photo documentation is standard', textB: 'Photos are optional' },
  { qid: 'DS_FURN_SALE_16', textA: 'Installation team feeds back recurring issues', textB: 'Issues stay with installers' },
  { qid: 'DS_FURN_SALE_17', textA: 'Delivery routes are planned for cost/time', textB: 'Routes are ad hoc' },
  { qid: 'DS_FURN_SALE_18', textA: 'Cancellations have policies', textB: 'Cancellations are case-by-case' },
  { qid: 'DS_FURN_SALE_19', textA: 'Customer satisfaction is measured', textB: 'Satisfaction is assumed' },
  { qid: 'DS_FURN_SALE_20', textA: 'Leadership reviews delivery + install metrics monthly', textB: 'Metrics are reviewed after problems' }
];

// P4: Pricing, Quoting & Margin Control
const p4_qs = [
  { qid: 'QS_FURN_PRIC_1', textA: 'Quotes include waste/yield and finishing time', textB: 'Quotes focus on materials + rough labor' },
  { qid: 'QS_FURN_PRIC_2', textA: 'Changes are priced as change orders', textB: 'Changes are absorbed' },
  { qid: 'QS_FURN_PRIC_3', textA: 'Margin is tracked per job', textB: 'Margin is assumed' },
  { qid: 'QS_FURN_PRIC_4', textA: 'Delivery/install costs are priced', textB: 'Delivery/install is handled as overhead' }
];

const p4_ds = [
  { qid: 'DS_FURN_PRIC_1', textA: 'Standard labor times exist by product type', textB: 'Labor times are guessed' },
  { qid: 'DS_FURN_PRIC_2', textA: 'Waste/yield is included in cost', textB: 'Waste/yield is ignored' },
  { qid: 'DS_FURN_PRIC_3', textA: 'Hardware and consumables are fully costed', textB: 'Hardware/consumables leak silently' },
  { qid: 'DS_FURN_PRIC_4', textA: 'Finishing steps are priced accurately', textB: 'Finishing is underestimated' },
  { qid: 'DS_FURN_PRIC_5', textA: 'Change orders are routine and priced', textB: 'Change orders are goodwill' },
  { qid: 'DS_FURN_PRIC_6', textA: 'Discounts require approvals', textB: 'Discounts are negotiated freely' },
  { qid: 'DS_FURN_PRIC_7', textA: 'Deposits/milestones are standard', textB: 'Cash is collected late' },
  { qid: 'DS_FURN_PRIC_8', textA: 'Rush fees exist', textB: 'Rush is free' },
  { qid: 'DS_FURN_PRIC_9', textA: 'Site complexity is priced', textB: 'Site complexity is absorbed' },
  { qid: 'DS_FURN_PRIC_10', textA: 'Job profitability is reviewed monthly', textB: 'Job profitability is rarely reviewed' },
  { qid: 'DS_FURN_PRIC_11', textA: 'Loss patterns trigger redesign/pricing changes', textB: 'Loss patterns repeat' },
  { qid: 'DS_FURN_PRIC_12', textA: 'Quote assumptions are documented', textB: 'Quote assumptions are verbal' },
  { qid: 'DS_FURN_PRIC_13', textA: 'Delivery costs are allocated to jobs', textB: 'Delivery costs are overhead' },
  { qid: 'DS_FURN_PRIC_14', textA: 'Warranty/callback costs are measured', textB: 'Warranty/callback costs are hidden' },
  { qid: 'DS_FURN_PRIC_15', textA: 'Material price changes trigger repricing', textB: 'Material price changes are absorbed' },
  { qid: 'DS_FURN_PRIC_16', textA: 'Product mix is managed for margin', textB: 'Product mix is random' },
  { qid: 'DS_FURN_PRIC_17', textA: 'Contract terms protect cancellations', textB: 'Cancellations become losses' },
  { qid: 'DS_FURN_PRIC_18', textA: 'Sales is trained on margin drivers', textB: 'Sales is trained on closing only' },
  { qid: 'DS_FURN_PRIC_19', textA: 'Complexity options have tier pricing', textB: 'Complexity is priced ad hoc' },
  { qid: 'DS_FURN_PRIC_20', textA: 'Leadership enforces pricing discipline', textB: 'Pricing discipline breaks under pressure' }
];

// P5: Operations Excellence
const p5_qs = [
  { qid: 'QS_FURN_OPS_1', textA: 'We track rework and reduce it', textB: 'Rework is accepted as normal' },
  { qid: 'QS_FURN_OPS_2', textA: 'Waste is measured and checked', textB: 'Waste is visible but not measured' },
  { qid: 'QS_FURN_OPS_3', textA: 'We manage bottlenecks deliberately', textB: 'Bottlenecks are discovered late' },
  { qid: 'QS_FURN_OPS_4', textA: 'Tools/materials have fixed homes', textB: 'Tools/materials move around' }
];

const p5_ds = [
  { qid: 'DS_FURN_OPS_1', textA: 'Jobs have clear stage ownership', textB: 'Jobs move based on who is free' },
  { qid: 'DS_FURN_OPS_2', textA: 'WIP limits exist per stage', textB: 'WIP piles up when busy' },
  { qid: 'DS_FURN_OPS_3', textA: 'Scrap is coded consistently', textB: 'Scrap is one big number' },
  { qid: 'DS_FURN_OPS_4', textA: 'Offcuts have reuse rules', textB: 'Offcuts accumulate' },
  { qid: 'DS_FURN_OPS_5', textA: 'Cutting plans are optimized', textB: 'Cutting is done “as needed”' },
  { qid: 'DS_FURN_OPS_6', textA: 'Bottlenecks are measured', textB: 'Bottlenecks are anecdotal' },
  { qid: 'DS_FURN_OPS_7', textA: 'Finishing schedule protects cure time', textB: 'Cure time is rushed' },
  { qid: 'DS_FURN_OPS_8', textA: 'Changeovers are planned', textB: 'Changeovers are random' },
  { qid: 'DS_FURN_OPS_9', textA: 'Rework is recorded by cause', textB: 'Rework is informal' },
  { qid: 'DS_FURN_OPS_10', textA: 'Downtime is logged', textB: 'Downtime is forgotten' },
  { qid: 'DS_FURN_OPS_11', textA: 'PM exists for major machines', textB: 'PM is reactive' },
  { qid: 'DS_FURN_OPS_12', textA: 'Shop layout supports flow', textB: 'Layout forces extra handling' },
  { qid: 'DS_FURN_OPS_13', textA: '5S audits exist', textB: '5S is occasional cleanup' },
  { qid: 'DS_FURN_OPS_14', textA: 'Material staging prevents wrong picks', textB: 'Wrong picks happen sometimes' },
  { qid: 'DS_FURN_OPS_15', textA: 'Measurement tools are maintained/checked', textB: 'Measurement tools drift' },
  { qid: 'DS_FURN_OPS_16', textA: 'Scheduling uses capacity reality', textB: 'Scheduling uses optimism' },
  { qid: 'DS_FURN_OPS_17', textA: 'Quality checks happen at key points', textB: 'Quality checks happen at the end' },
  { qid: 'DS_FURN_OPS_18', textA: 'Training reduces variation', textB: 'Variation depends on “good workers”' },
  { qid: 'DS_FURN_OPS_19', textA: 'Improvement actions close weekly', textB: 'Improvement actions linger' },
  { qid: 'DS_FURN_OPS_20', textA: 'Leadership reviews ops KPIs monthly', textB: 'Leadership reviews ops only during crises' }
];

// P6: Supply Chain & Inventory
const p6_qs = [
  { qid: 'QS_FURN_SUP_1', textA: 'We rarely stop for missing hardware/consumables', textB: 'Small parts often delay jobs' },
  { qid: 'QS_FURN_SUP_2', textA: 'Inventory counts are trusted due to cycle counting', textB: 'Inventory is corrected during crises' },
  { qid: 'QS_FURN_SUP_3', textA: 'Substitutions require approval', textB: 'Substitutions happen to keep moving' },
  { qid: 'QS_FURN_SUP_4', textA: 'Payment terms are enforced', textB: 'Payment terms are negotiated case-by-case' }
];

const p6_ds = [
  { qid: 'DS_FURN_SUP_1', textA: 'Line-stopper items have min/max', textB: 'Reorder is visual' },
  { qid: 'DS_FURN_SUP_2', textA: 'Hardware is kitted per job', textB: 'Hardware is picked as needed' },
  { qid: 'DS_FURN_SUP_3', textA: 'Inventory accuracy is measured', textB: 'Inventory accuracy is unknown' },
  { qid: 'DS_FURN_SUP_4', textA: 'Cycle counts are routine', textB: 'Cycle counts are occasional' },
  { qid: 'DS_FURN_SUP_5', textA: 'Storage prevents moisture/warp', textB: 'Storage depends on space' },
  { qid: 'DS_FURN_SUP_6', textA: 'Supplier quality is tracked', textB: 'Supplier quality is anecdotal' },
  { qid: 'DS_FURN_SUP_7', textA: 'Supplier lead-time reliability is tracked', textB: 'Supplier delays surprise the team' },
  { qid: 'DS_FURN_SUP_8', textA: 'Substitution approvals exist', textB: 'Substitutions are informal' },
  { qid: 'DS_FURN_SUP_9', textA: 'Material damage is recorded', textB: 'Material damage is absorbed' },
  { qid: 'DS_FURN_SUP_10', textA: 'Offcuts are managed as inventory', textB: 'Offcuts are unmanaged' },
  { qid: 'DS_FURN_SUP_11', textA: 'Purchasing considers total cost (quality + waste)', textB: 'Purchasing focuses mainly on unit price' },
  { qid: 'DS_FURN_SUP_12', textA: 'Critical consumables never stock out', textB: 'Consumables stock out sometimes' },
  { qid: 'DS_FURN_SUP_13', textA: 'Receivables are reviewed weekly', textB: 'Receivables are reviewed when cash is low' },
  { qid: 'DS_FURN_SUP_14', textA: 'Credit limits exist', textB: 'Credit is relationship-based' },
  { qid: 'DS_FURN_SUP_15', textA: 'Deposits are standard', textB: 'Deposits are optional' },
  { qid: 'DS_FURN_SUP_16', textA: 'Returns are quarantined', textB: 'Returns are reworked immediately' },
  { qid: 'DS_FURN_SUP_17', textA: 'Job profitability includes material variance', textB: 'Variance is ignored' },
  { qid: 'DS_FURN_SUP_18', textA: 'Export/premium docs are prepared early if needed', textB: 'Docs are prepared late' },
  { qid: 'DS_FURN_SUP_19', textA: 'Supplier changes follow process control', textB: 'Supplier changes happen under pressure' },
  { qid: 'DS_FURN_SUP_20', textA: 'Leadership reviews supply KPIs monthly', textB: 'Supply KPIs are reviewed after stockouts' }
];

// P7: People, Safety & CI
const p7_qs = [
  { qid: 'QS_FURN_PPL_1', textA: 'Dust and housekeeping are disciplined daily', textB: 'Dust and housekeeping happen mainly after mess builds up' },
  { qid: 'QS_FURN_PPL_2', textA: 'Training is verified by task sign-off', textB: 'Training is mostly shadowing' },
  { qid: 'QS_FURN_PPL_3', textA: 'People escalate defects early', textB: 'People fix quietly to avoid delays' },
  { qid: 'QS_FURN_PPL_4', textA: 'Improvement actions close reliably', textB: 'Improvements linger' }
];

const p7_ds = [
  { qid: 'DS_FURN_PPL_1', textA: 'Machine safety checks are routine', textB: 'Safety checks are occasional' },
  { qid: 'DS_FURN_PPL_2', textA: 'Dust controls are maintained and used', textB: 'Dust controls are inconsistent' },
  { qid: 'DS_FURN_PPL_3', textA: 'Housekeeping has clear standards', textB: 'Housekeeping is subjective' },
  { qid: 'DS_FURN_PPL_4', textA: 'Near misses are reported without fear', textB: 'Near misses are hidden' },
  { qid: 'DS_FURN_PPL_5', textA: 'Skills matrix is used for staffing', textB: 'Staffing is based on who is present' },
  { qid: 'DS_FURN_PPL_6', textA: 'Task certification exists', textB: 'Task certification is informal' },
  { qid: 'DS_FURN_PPL_7', textA: 'Leaders coach standards daily', textB: 'Leaders coach mainly during crises' },
  { qid: 'DS_FURN_PPL_8', textA: 'Anyone can stop a bad build', textB: 'Output always wins' },
  { qid: 'DS_FURN_PPL_9', textA: 'Shift handovers are structured', textB: 'Shift handovers are casual' },
  { qid: 'DS_FURN_PPL_10', textA: 'Repeat defects trigger prevention work', textB: 'Repeat defects are accepted' },
  { qid: 'DS_FURN_PPL_11', textA: 'PPE rules are enforced', textB: 'PPE rules vary by urgency' },
  { qid: 'DS_FURN_PPL_12', textA: 'Safety incidents trigger system fixes', textB: 'Safety incidents trigger blame' },
  { qid: 'DS_FURN_PPL_13', textA: 'Improvement backlog is ranked by impact', textB: 'Improvement backlog is random' },
  { qid: 'DS_FURN_PPL_14', textA: 'Actions have owners/dates', textB: 'Actions have no closure' },
  { qid: 'DS_FURN_PPL_15', textA: 'New hire onboarding is consistent', textB: 'New hire onboarding is improvised' },
  { qid: 'DS_FURN_PPL_16', textA: 'Ergonomics is addressed proactively', textB: 'Ergonomics is addressed after injury' },
  { qid: 'DS_FURN_PPL_17', textA: 'Workshop layout reduces carrying hazards', textB: 'Layout creates constant carrying' },
  { qid: 'DS_FURN_PPL_18', textA: 'Tools are returned to standard locations', textB: 'Tools are found when needed' },
  { qid: 'DS_FURN_PPL_19', textA: 'Culture protects standards under rush', textB: 'Standards slip under rush' },
  { qid: 'DS_FURN_PPL_20', textA: 'Leadership reviews people/safety KPIs monthly', textB: 'KPIs are reviewed after incidents' }
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
