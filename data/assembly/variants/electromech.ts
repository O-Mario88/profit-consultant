import { QuestionDefinition, LibraryItem, ActionDefinition } from '../../../types';

const LINE_TYPE = ['Components assembly (electromechanical)'];

export const ELECTROMECH_QUESTIONS: QuestionDefinition[] = [
    // P1 QS4
    {
        qid: 'em_p1_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Torque/fit/functional acceptance is clearly defined", textB: "Acceptance is mostly inspector/tech judgment"
    },
    {
        qid: 'em_p1_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Release requires linked test evidence (serial → results)", textB: "Release is based on “looks good” + spot checks"
    },
    {
        qid: 'em_p1_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Critical parts/lots are traceable to serials", textB: "Traceability is partial unless a problem happens"
    },
    {
        qid: 'em_p1_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework is logged by cause and verified", textB: "Rework is handled quickly without consistent logging"
    },
    // P1 DS20
    {
        qid: 'EM_P1_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Torque specs are posted and checked", textB: "Torque is by feel with occasional checks"
    },
    {
        qid: 'EM_P1_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Press-fit/adhesive cure criteria are defined", textB: "Cure/fit is based on experience"
    },
    {
        qid: 'EM_P1_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Serial ties to functional test logs", textB: "Tests exist but linkage is manual/spotty"
    },
    {
        qid: 'EM_P1_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Calibration outcomes are recorded per unit", textB: "Calibration is recorded as batch completion"
    },
    {
        qid: 'EM_P1_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cosmetic standards vary by tier and are explicit", textB: "Cosmetic standards are implied"
    },
    {
        qid: 'EM_P1_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework requires verification steps", textB: "Rework is trusted if it “works now”"
    },
    {
        qid: 'EM_P1_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Critical-to-quality dimensions are checked per plan", textB: "Dimensions are checked when issues appear"
    },
    {
        qid: 'EM_P1_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Failure symptoms are coded and trended", textB: "Failures are described in narratives"
    },
    {
        qid: 'EM_P1_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Containment is triggered by defect spikes", textB: "Containment is triggered by customer complaints"
    },
    {
        qid: 'EM_P1_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Packaging protects mechanical/electrical risks", textB: "Packaging varies by availability"
    },
    {
        qid: 'EM_P1_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Mixed builds use clear configuration matrix", textB: "Variants are handled by memory"
    },
    {
        qid: 'EM_P1_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "End-of-line test has defined coverage", textB: "Test grows informally over time"
    },
    {
        qid: 'EM_P1_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Handling damage is tracked by station", textB: "Handling damage is treated as occasional"
    },
    {
        qid: 'EM_P1_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Acceptance samples (golden units) are controlled", textB: "Good samples are kept informally"
    },
    {
        qid: 'EM_P1_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Defect escapes are treated as process failures", textB: "Escapes are treated as bad luck"
    },
    {
        qid: 'EM_P1_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quality KPIs reviewed monthly with actions", textB: "KPIs reviewed during crises"
    },
    {
        qid: 'EM_P1_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Release gate can’t be bypassed", textB: "Gate can be bypassed for urgent shipments"
    },
    {
        qid: 'EM_P1_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty/return loops feed prevention work", textB: "Returns are handled case-by-case"
    },
    {
        qid: 'EM_P1_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Lot/serial trace supports fast isolation", textB: "Isolation requires broad holds"
    },
    {
        qid: 'EM_P1_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects release integrity under pressure", textB: "Pressure often relaxes gates"
    },

    // P2 QS4
    {
        qid: 'em_p2_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "“Buildable revision” is locked before kitting", textB: "Revision is clarified mid-build"
    },
    {
        qid: 'em_p2_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Work instructions are station-specific with visuals", textB: "Work instructions are general and text-heavy"
    },
    {
        qid: 'em_p2_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "First-article covers fit + torque + function", textB: "First-article focuses on one area"
    },
    {
        qid: 'em_p2_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "ECOs include training + verification", textB: "ECOs are message-based"
    },
    // P2 DS20
    {
        qid: 'EM_P2_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rev lock happens before issue", textB: "Rev clarified during work"
    },
    {
        qid: 'EM_P2_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "BOM/options matrix is controlled", textB: "Options handled by memory"
    },
    {
        qid: 'EM_P2_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Fixture/jig readiness is gated", textB: "Fixtures trusted until failure"
    },
    {
        qid: 'EM_P2_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Torque tools have visible calibration status", textB: "Tools are shared without status"
    },
    {
        qid: 'EM_P2_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Adhesive type/cure time is standardized", textB: "Cure is “until it feels set”"
    },
    {
        qid: 'EM_P2_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Wire routing/strain relief is specified where needed", textB: "Routing depends on neatness"
    },
    {
        qid: 'EM_P2_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Line clearance prevents rev mix-ups", textB: "Mix-ups caught late"
    },
    {
        qid: 'EM_P2_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Critical steps are highlighted in WIs", textB: "All steps look equal"
    },
    {
        qid: 'EM_P2_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Engineering holds have tags + dispositions", textB: "Holds are conversational"
    },
    {
        qid: 'EM_P2_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Pilot learnings update WIs fast", textB: "Learnings stay with pilot team"
    },
    {
        qid: 'EM_P2_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Alternate parts are qualified", textB: "Alternates used in shortages"
    },
    {
        qid: 'EM_P2_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Software/config tools are version-controlled", textB: "Tools vary by technician"
    },
    {
        qid: 'EM_P2_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "First-piece verification is enforced", textB: "First-piece is informal"
    },
    {
        qid: 'EM_P2_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Measurement method is defined for CTQs", textB: "CTQ measurement is ad hoc"
    },
    {
        qid: 'EM_P2_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Change implementation is verified on line", textB: "Change assumed correct"
    },
    {
        qid: 'EM_P2_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process audits run weekly", textB: "Audits run before visits"
    },
    {
        qid: 'EM_P2_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Failure modes guide where checks occur", textB: "Checks mostly at end-of-line"
    },
    {
        qid: 'EM_P2_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training is station-certified", textB: "Training is shadowing"
    },
    {
        qid: 'EM_P2_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "NPI has readiness gates", textB: "Ramp happens when demand is high"
    },
    {
        qid: 'EM_P2_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Engineering response time is measured", textB: "Response time is anecdotal"
    },

    // P3 QS4
    {
        qid: 'em_p3_qs_01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Commit dates require material + capacity confirmation", textB: "Dates rely on typical lead time"
    },
    {
        qid: 'em_p3_qs_02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Delay reasons are coded", textB: "Delays explained differently each time"
    },
    {
        qid: 'em_p3_qs_03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Weekly status cadence exists for key customers", textB: "Updates happen when asked"
    },
    {
        qid: 'em_p3_qs_04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Returns trigger prevention actions", textB: "Returns trigger replacements/credits"
    },
    // P3 DS20
    {
        qid: 'EM_P3_DS01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Commit checklist exists", textB: "Commit is sales-led"
    },
    {
        qid: 'EM_P3_DS02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "OTIF reviewed weekly w/ actions", textB: "OTIF reviewed after complaints"
    },
    {
        qid: 'EM_P3_DS03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Escalations follow containment playbook", textB: "Escalations are improvised"
    },
    {
        qid: 'EM_P3_DS04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Service tiers are explicit", textB: "Tiers are informal"
    },
    {
        qid: 'EM_P3_DS05', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Forecasts requested and used", textB: "Forecasts ignored"
    },
    {
        qid: 'EM_P3_DS06', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Expedite cost tracked by program", textB: "Expedite absorbed"
    },
    {
        qid: 'EM_P3_DS07', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Requirements captured at intake", textB: "Requirements discovered at ship"
    },
    {
        qid: 'EM_P3_DS08', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Documentation pack standardized", textB: "Docs vary by PM"
    },
    {
        qid: 'EM_P3_DS09', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer changes become change orders", textB: "Changes absorbed"
    },
    {
        qid: 'EM_P3_DS10', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty terms operationalized", textB: "Warranty flexible"
    },
    {
        qid: 'EM_P3_DS11', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer feedback feeds prevention backlog", textB: "Feedback stays in email"
    },
    {
        qid: 'EM_P3_DS12', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Damage-in-transit tracked by route", textB: "Damage treated as rare"
    },
    {
        qid: 'EM_P3_DS13', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Status is visible internally", textB: "Status is tribal"
    },
    {
        qid: 'EM_P3_DS14', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Priority rules are defined", textB: "Priority is who shouts loudest"
    },
    {
        qid: 'EM_P3_DS15', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Satisfaction measured", textB: "Satisfaction inferred"
    },
    {
        qid: 'EM_P3_DS16', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repeat issues trigger system fixes", textB: "Repeat issues trigger reminders"
    },
    {
        qid: 'EM_P3_DS17', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Lead-time drivers are analyzed monthly", textB: "Drivers discussed occasionally"
    },
    {
        qid: 'EM_P3_DS18', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Account profitability reviewed", textB: "Profitability inferred from volume"
    },
    {
        qid: 'EM_P3_DS19', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Capacity constraints communicated early", textB: "Communicated late"
    },
    {
        qid: 'EM_P3_DS20', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects reliability over speed when needed", textB: "Speed wins most weeks"
    },

    // P4 QS4
    {
        qid: 'em_p4_qs_01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quotes include labor + test + rework risk", textB: "Quotes focus on materials"
    },
    {
        qid: 'em_p4_qs_02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Change orders are captured", textB: "Changes are absorbed"
    },
    {
        qid: 'em_p4_qs_03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Margin floors exist", textB: "Floors flex for volume"
    },
    {
        qid: 'em_p4_qs_04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Overtime impact is visible in margin", textB: "Overtime treated as necessary"
    },
    // P4 DS20
    {
        qid: 'EM_P4_DS01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Labor standards exist", textB: "Labor guessed"
    },
    {
        qid: 'EM_P4_DS02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Test time costed", textB: "Test time absorbed"
    },
    {
        qid: 'EM_P4_DS03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Setup cost included for low volume", textB: "Setup absorbed"
    },
    {
        qid: 'EM_P4_DS04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Yield/rework risk modeled", textB: "Risk assumed normal"
    },
    {
        qid: 'EM_P4_DS05', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty cost tracked", textB: "Warranty handled ad hoc"
    },
    {
        qid: 'EM_P4_DS06', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "NRE defined and billed", textB: "NRE is “investment”"
    },
    {
        qid: 'EM_P4_DS07', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rush fees exist", textB: "Rush is free"
    },
    {
        qid: 'EM_P4_DS08', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Discount approvals require rationale", textB: "Discounts to close"
    },
    {
        qid: 'EM_P4_DS09', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Material price changes trigger repricing", textB: "Repricing periodic"
    },
    {
        qid: 'EM_P4_DS10', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Variant complexity priced", textB: "Variants priced inconsistently"
    },
    {
        qid: 'EM_P4_DS11', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Loss programs trigger action plans", textB: "Loss programs continue"
    },
    {
        qid: 'EM_P4_DS12', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework loops are costed", textB: "Rework overhead"
    },
    {
        qid: 'EM_P4_DS13', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Packaging requirements priced", textB: "Packaging absorbed"
    },
    {
        qid: 'EM_P4_DS14', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Profit reviewed monthly by program", textB: "Reviewed when cash is tight"
    },
    {
        qid: 'EM_P4_DS15', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cost-to-serve visible by customer", textB: "Cost-to-serve assumed"
    },
    {
        qid: 'EM_P4_DS16', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quote assumptions documented", textB: "Assumptions implied"
    },
    {
        qid: 'EM_P4_DS17', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Finance+ops aligned on costing", textB: "Costing differs"
    },
    {
        qid: 'EM_P4_DS18', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Minimum order rules exist", textB: "Small orders accepted freely"
    },
    {
        qid: 'EM_P4_DS19', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "ECO absorption is controlled", textB: "ECO absorption is common"
    },
    {
        qid: 'EM_P4_DS20', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects pricing discipline", textB: "Discipline breaks under pressure"
    },

    // P5 QS4
    {
        qid: 'em_p5_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "WIP limits protect flow", textB: "WIP piles up"
    },
    {
        qid: 'em_p5_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Kitting completeness verified", textB: "Kitting errors show up on line"
    },
    {
        qid: 'em_p5_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Bottleneck scheduled deliberately", textB: "Bottleneck handled by availability"
    },
    {
        qid: 'em_p5_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework has dedicated lane + tracking", textB: "Rework blends into flow"
    },
    // P5 DS20
    {
        qid: 'EM_P5_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "WIP caps exist", textB: "WIP grows"
    },
    {
        qid: 'EM_P5_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Changeovers use checklist + first-article", textB: "Changeovers rely on skill"
    },
    {
        qid: 'EM_P5_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Downtime coded", textB: "Downtime discussed"
    },
    {
        qid: 'EM_P5_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Micro-stoppages captured", textB: "Only big stops captured"
    },
    {
        qid: 'EM_P5_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Throughput time measured end-to-end", textB: "Throughput guessed"
    },
    {
        qid: 'EM_P5_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Line clearance prevents mix-ups", textB: "Mix-ups caught late"
    },
    {
        qid: 'EM_P5_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Layout supports flow", textB: "Layout forces backtracking"
    },
    {
        qid: 'EM_P5_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Handling damage tracked", textB: "Damage occasional"
    },
    {
        qid: 'EM_P5_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Daily huddles remove a blocker", textB: "Huddles occasional"
    },
    {
        qid: 'EM_P5_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Standard work visible", textB: "Standard work in files"
    },
    {
        qid: 'EM_P5_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quality gates can’t be bypassed", textB: "Gates bypassed in emergencies"
    },
    {
        qid: 'EM_P5_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Peak plan exists", textB: "Peak = overtime"
    },
    {
        qid: 'EM_P5_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Defects coded by station", textB: "Defects recorded as totals"
    },
    {
        qid: 'EM_P5_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "OEE losses reviewed weekly", textB: "Reviewed occasionally"
    },
    {
        qid: 'EM_P5_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Test/inspection capacity planned", textB: "Becomes surprise"
    },
    {
        qid: 'EM_P5_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework loops measured", textB: "Rework loops hidden"
    },
    {
        qid: 'EM_P5_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Containment triggers exist", textB: "Containment ad hoc"
    },
    {
        qid: 'EM_P5_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Improvement cadence weekly", textB: "Improvement after failures"
    },
    {
        qid: 'EM_P5_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Productivity measured vs standards", textB: "Output-only view"
    },
    {
        qid: 'EM_P5_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews ops KPIs monthly", textB: "KPIs reviewed in crises"
    },

    // P6 QS4
    {
        qid: 'em_p6_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Long-lead planning is proactive", textB: "Long-leads are chased when needed"
    },
    {
        qid: 'em_p6_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Substitutions require sign-off", textB: "Substitutions are informal"
    },
    {
        qid: 'em_p6_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Inventory accuracy verified via cycle count", textB: "Inventory trusted until failure"
    },
    {
        qid: 'em_p6_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Critical traceability exists (lot → serial)", textB: "Traceability is PO-level"
    },
    // P6 DS20
    {
        qid: 'EM_P6_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Reorder triggers have owners", textB: "Reorder by “bin looks low”"
    },
    {
        qid: 'EM_P6_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cycle counts routine", textB: "Counts occasional"
    },
    {
        qid: 'EM_P6_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Approved alternates pre-qualified", textB: "Alternates chosen in shortage"
    },
    {
        qid: 'EM_P6_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Receiving is risk-based", textB: "Receiving is quantity-only"
    },
    {
        qid: 'EM_P6_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier performance scored", textB: "Performance anecdotal"
    },
    {
        qid: 'EM_P6_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Shortage alerts visible daily", textB: "Shortages discovered on floor"
    },
    {
        qid: 'EM_P6_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Lot traceability for critical parts", textB: "Traceability limited"
    },
    {
        qid: 'EM_P6_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Obsolescence monitored", textB: "Obsolescence discovered late"
    },
    {
        qid: 'EM_P6_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Expedites tracked as KPI", textB: "Expedites normal"
    },
    {
        qid: 'EM_P6_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier changes trigger re-qual", textB: "Changes accepted as “equivalent”"
    },
    {
        qid: 'EM_P6_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Price variances acted on", textB: "Variances accepted"
    },
    {
        qid: 'EM_P6_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Storage prevents damage/ESD", textB: "Storage adapts to space"
    },
    {
        qid: 'EM_P6_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Kits verified before release", textB: "Kits verified during build"
    },
    {
        qid: 'EM_P6_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Bad parts returns trended", textB: "Returns handled ad hoc"
    },
    {
        qid: 'EM_P6_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Procurement communicates risks early", textB: "Ops finds out late"
    },
    {
        qid: 'EM_P6_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Credit rules enforced (B2B)", textB: "Rules flexible"
    },
    {
        qid: 'EM_P6_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "DSO reviewed weekly", textB: "DSO reviewed when cash tight"
    },
    {
        qid: 'EM_P6_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Emergency buys get post-mortem", textB: "Emergency buys repeat"
    },
    {
        qid: 'EM_P6_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Compliance docs mapped per SKU where needed", textB: "Docs gathered late"
    },
    {
        qid: 'EM_P6_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews supply KPIs monthly", textB: "Reviewed after line stops"
    },

    // P7 QS4
    {
        qid: 'em_p7_qs_01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Skills matrix ensures bottleneck coverage", textB: "Bottlenecks rely on a few people"
    },
    {
        qid: 'em_p7_qs_02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process audits run weekly", textB: "Audits run before visits"
    },
    {
        qid: 'em_p7_qs_03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Corrective actions close with effectiveness checks", textB: "Actions close when tasks end"
    },
    {
        qid: 'em_p7_qs_04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture rewards prevention", textB: "Culture rewards firefighting"
    },
    // P7 DS20
    {
        qid: 'EM_P7_DS01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training is station-certified", textB: "Training shadowing"
    },
    {
        qid: 'EM_P7_DS02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cross-training planned", textB: "Cross-training reactive"
    },
    {
        qid: 'EM_P7_DS03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "ESD controls verified daily where relevant", textB: "ESD assumed"
    },
    {
        qid: 'EM_P7_DS04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Near-misses blame-free", textB: "Near-misses hidden"
    },
    {
        qid: 'EM_P7_DS05', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Coaching happens daily", textB: "Coaching happens in reviews"
    },
    {
        qid: 'EM_P7_DS06', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Incentives balance speed+quality", textB: "Incentives reward output"
    },
    {
        qid: 'EM_P7_DS07', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Anyone can stop for quality", textB: "Stopping discouraged"
    },
    {
        qid: 'EM_P7_DS08', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repeat defects treated as system issues", textB: "Treated as people issues"
    },
    {
        qid: 'EM_P7_DS09', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CI backlog ranked by impact", textB: "CI backlog unranked"
    },
    {
        qid: 'EM_P7_DS10', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Improvement time scheduled", textB: "Improvement when time allows"
    },
    {
        qid: 'EM_P7_DS11', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "5S measured", textB: "5S workload-based"
    },
    {
        qid: 'EM_P7_DS12', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Standards hold in rush weeks", textB: "Standards fade in rush"
    },
    {
        qid: 'EM_P7_DS13', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CAPA effectiveness checked", textB: "CAPA closes without proof"
    },
    {
        qid: 'EM_P7_DS14', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews people/quality KPIs monthly", textB: "Reviewed in crises"
    },
    {
        qid: 'EM_P7_DS15', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Attendance variability has coverage plan", textB: "Absences = overtime"
    },
    {
        qid: 'EM_P7_DS16', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Audit findings don’t repeat", textB: "Findings recur"
    },
    {
        qid: 'EM_P7_DS17', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Safety practices audited", textB: "Safety after incidents"
    },
    {
        qid: 'EM_P7_DS18', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Hiring/onboarding includes standards", textB: "Learn-as-you-go"
    },
    {
        qid: 'EM_P7_DS19', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Teams celebrate defect reduction", textB: "Teams celebrate output"
    },
    {
        qid: 'EM_P7_DS20', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture funds prevention work", textB: "Culture funds firefighting"
    }
];

export const ELECTROMECH_LIBRARY: LibraryItem[] = [];
export const ELECTROMECH_ACTIONS: ActionDefinition[] = [];
