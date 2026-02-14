import { QuestionDefinition, LibraryItem, ActionDefinition } from '../../../types';

const LINE_TYPE = ['Medical tier (ISO 13485 mode)'];

export const MEDICAL_QUESTIONS: QuestionDefinition[] = [
    // P1 QS4
    {
        qid: 'md_p1_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Release requires complete device history evidence", textB: "Release relies on test pass + supervisor sign-off"
    },
    {
        qid: 'md_p1_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Traceability supports targeted recall/field action", textB: "Traceability requires broad actions"
    },
    {
        qid: 'md_p1_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Complaint handling feeds CAPA systematically", textB: "Complaints handled case-by-case"
    },
    {
        qid: 'md_p1_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Risk controls are verified in production", textB: "Risk controls exist but aren’t routinely verified"
    },
    // P1 DS20
    {
        qid: 'MD_P1_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Release requires full build record evidence", textB: "Evidence is partial in rush"
    },
    {
        qid: 'MD_P1_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Traceability maps serial→lots→process", textB: "Traceability is PO-level"
    },
    {
        qid: 'MD_P1_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Acceptance tests are defined per product", textB: "Tests vary by technician"
    },
    {
        qid: 'MD_P1_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Nonconforming product is controlled (segregate/disposition)", textB: "Re-enters flow informally"
    },
    {
        qid: 'MD_P1_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework follows approved instructions", textB: "Rework is improvised"
    },
    {
        qid: 'MD_P1_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Complaint trends are reviewed monthly", textB: "Complaints reviewed after escalations"
    },
    {
        qid: 'MD_P1_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CAPA includes effectiveness checks", textB: "CAPA closes when tasks done"
    },
    {
        qid: 'MD_P1_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Risk controls are verified and recorded", textB: "Controls assumed effective"
    },
    {
        qid: 'MD_P1_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cleanliness/handling controls are verified", textB: "Controls assumed"
    },
    {
        qid: 'MD_P1_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Labeling/IFU controls are verified by version", textB: "Version verified when questioned"
    },
    {
        qid: 'MD_P1_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training records are complete and current", textB: "Training is shadowing"
    },
    {
        qid: 'MD_P1_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Escapes are treated as system failures", textB: "Escapes treated as rare events"
    },
    {
        qid: 'MD_P1_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Environmental controls are documented where needed", textB: "Environmental controls are informal"
    },
    {
        qid: 'MD_P1_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Measuring equipment is calibrated with records", textB: "Calibration assumed ok"
    },
    {
        qid: 'MD_P1_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Field feedback feeds prevention work", textB: "Field feedback feeds replacements"
    },
    {
        qid: 'MD_P1_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quality KPIs reviewed monthly with actions", textB: "KPIs reviewed in crises"
    },
    {
        qid: 'MD_P1_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Release gate cannot be bypassed", textB: "Gate bends under pressure"
    },
    {
        qid: 'MD_P1_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier issues trigger formal actions", textB: "Supplier issues handled ad hoc"
    },
    {
        qid: 'MD_P1_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Documented evidence is audit-ready anytime", textB: "Evidence assembled before audits"
    },
    {
        qid: 'MD_P1_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects compliance behaviors in rush weeks", textB: "Pressure relaxes behaviors"
    },

    // P2 QS4
    {
        qid: 'md_p2_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Changes follow controlled approval + risk review", textB: "Changes implemented quickly then documented"
    },
    {
        qid: 'md_p2_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Processes needing validation are identified and validated", textB: "Validation is assumed if output looks good"
    },
    {
        qid: 'md_p2_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Document control prevents obsolete instructions", textB: "Obsolete instructions can appear on floor"
    },
    {
        qid: 'md_p2_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Risk management links to process controls", textB: "Risk management is separate from production"
    },
    // P2 DS20
    {
        qid: 'MD_P2_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "“Buildable revision” locked pre-run", textB: "Clarified mid-run"
    },
    {
        qid: 'MD_P2_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Document control is strict at stations", textB: "Docs drift by shift"
    },
    {
        qid: 'MD_P2_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Change control includes training + verification", textB: "Change control is message-based"
    },
    {
        qid: 'MD_P2_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Risk review is required for changes", textB: "Risk review is optional"
    },
    {
        qid: 'MD_P2_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process validation is defined where needed", textB: "Validation is assumed"
    },
    {
        qid: 'MD_P2_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Software/tools are version-controlled", textB: "Tools vary by tech"
    },
    {
        qid: 'MD_P2_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Measurement methods are defined for CTQs", textB: "Methods are ad hoc"
    },
    {
        qid: 'MD_P2_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "First-article includes critical checks", textB: "First-article informal"
    },
    {
        qid: 'MD_P2_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Engineering holds have formal dispositions", textB: "Holds conversational"
    },
    {
        qid: 'MD_P2_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training is role-certified", textB: "Shadowing"
    },
    {
        qid: 'MD_P2_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier changes trigger review/qualification", textB: "Accepted as equivalent"
    },
    {
        qid: 'MD_P2_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Label/IFU changes are tightly controlled", textB: "Changes handled late"
    },
    {
        qid: 'MD_P2_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process audits run weekly", textB: "Audits before visits"
    },
    {
        qid: 'MD_P2_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Lessons learned update standards quickly", textB: "Lessons stay tribal"
    },
    {
        qid: 'MD_P2_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Configuration matrix exists for variants", textB: "Variants handled by memory"
    },
    {
        qid: 'MD_P2_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Validation evidence is maintained and current", textB: "Evidence assembled later"
    },
    {
        qid: 'MD_P2_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Design/production feedback loop exists", textB: "Feedback loop is informal"
    },
    {
        qid: 'MD_P2_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Engineering response time is measured", textB: "Anecdotal"
    },
    {
        qid: 'MD_P2_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CAPA triggers process updates", textB: "CAPA triggers reminders"
    },
    {
        qid: 'MD_P2_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews change/validation KPIs monthly", textB: "Reviewed during crises"
    },

    // P3 QS4
    {
        qid: 'md_p3_qs_01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer communication is evidence-based and timely", textB: "Communication is reassurance-based"
    },
    {
        qid: 'md_p3_qs_02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Complaints are logged, trended, and closed systematically", textB: "Complaints handled as tickets"
    },
    {
        qid: 'md_p3_qs_03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Service/returns follow controlled workflow", textB: "Service varies by urgency"
    },
    {
        qid: 'md_p3_qs_04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Delivery reliability protects patient risk controls", textB: "Speed overrides controls sometimes"
    },
    // P3 DS20
    {
        qid: 'MD_P3_DS01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Commit dates require readiness confirmation", textB: "Commit is optimistic"
    },
    {
        qid: 'MD_P3_DS02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "OTIF reviewed weekly with causes", textB: "Reviewed after complaints"
    },
    {
        qid: 'MD_P3_DS03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Complaints coded and trended", textB: "Case-by-case"
    },
    {
        qid: 'MD_P3_DS04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Complaint → CAPA linkage is systematic", textB: "Linkage is occasional"
    },
    {
        qid: 'MD_P3_DS05', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Escalations follow containment playbook", textB: "Improvised"
    },
    {
        qid: 'MD_P3_DS06', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Field feedback feeds prevention backlog", textB: "Replacement-first"
    },
    {
        qid: 'MD_P3_DS07', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer requirements captured at intake", textB: "Captured late"
    },
    {
        qid: 'MD_P3_DS08', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Documentation pack standardized", textB: "Varies by PM"
    },
    {
        qid: 'MD_P3_DS09', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Returns follow controlled disposition", textB: "Ad hoc"
    },
    {
        qid: 'MD_P3_DS10', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Service tiers are explicit", textB: "Informal"
    },
    {
        qid: 'MD_P3_DS11', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Evidence archive exists (tests/records)", textB: "Evidence kept when asked"
    },
    {
        qid: 'MD_P3_DS12', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Status cadence exists", textB: "Status by request"
    },
    {
        qid: 'MD_P3_DS13', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repeat issues trigger systemic fixes", textB: "Reminders"
    },
    {
        qid: 'MD_P3_DS14', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews service KPIs monthly", textB: "In crises"
    },
    {
        qid: 'MD_P3_DS15', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Delivery doesn’t override compliance gates", textB: "Gates bend"
    },
    {
        qid: 'MD_P3_DS16', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer changes follow change control", textB: "Changes absorbed"
    },
    {
        qid: 'MD_P3_DS17', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Risk-related delays are communicated early", textB: "Communicated late"
    },
    {
        qid: 'MD_P3_DS18', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Contract terms operationalized in SOPs", textB: "Terms handled informally"
    },
    {
        qid: 'MD_P3_DS19', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Complaints close with effectiveness verification", textB: "Close when solved"
    },
    {
        qid: 'MD_P3_DS20', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture protects trust and patient-safety behaviors", textB: "Pressure relaxes behaviors"
    },

    // P4 QS4
    {
        qid: 'md_p4_qs_01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Costing includes compliance + documentation load", textB: "Compliance load is absorbed"
    },
    {
        qid: 'md_p4_qs_02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty/complaint cost is tracked and priced", textB: "Cost handled ad hoc"
    },
    {
        qid: 'md_p4_qs_03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Change-order capture is disciplined", textB: "Changes absorbed"
    },
    {
        qid: 'md_p4_qs_04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Margin floors exist by tier", textB: "Floors flex for volume"
    },
    // P4 DS20
    {
        qid: 'MD_P4_DS01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Compliance cost-to-serve is visible", textB: "Hidden overhead"
    },
    {
        qid: 'MD_P4_DS02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Documentation effort is costed", textB: "Absorbed"
    },
    {
        qid: 'MD_P4_DS03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Validation effort is costed", textB: "Absorbed"
    },
    {
        qid: 'MD_P4_DS04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty/complaints cost tracked", textB: "Ad hoc"
    },
    {
        qid: 'MD_P4_DS05', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rush fees exist", textB: "Rush is free"
    },
    {
        qid: 'MD_P4_DS06', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Discounts require rationale", textB: "Discounts to close"
    },
    {
        qid: 'MD_P4_DS07', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Margin reviewed monthly by program", textB: "When cash tight"
    },
    {
        qid: 'MD_P4_DS08', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Scrap/rework costed", textB: "Overhead"
    },
    {
        qid: 'MD_P4_DS09', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Change orders captured", textB: "Absorbed"
    },
    {
        qid: 'MD_P4_DS10', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Material price changes trigger repricing", textB: "Periodic"
    },
    {
        qid: 'MD_P4_DS11', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Minimum order rules exist", textB: "Small orders accepted"
    },
    {
        qid: 'MD_P4_DS12', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quote assumptions documented", textB: "Implied"
    },
    {
        qid: 'MD_P4_DS13', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Costing aligned finance+ops", textB: "Differs"
    },
    {
        qid: 'MD_P4_DS14', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Loss categories trigger action plans", textB: "Tolerated"
    },
    {
        qid: 'MD_P4_DS15', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Payment terms enforced", textB: "Flexible"
    },
    {
        qid: 'MD_P4_DS16', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Expedite costs visible", textB: "Overhead"
    },
    {
        qid: 'MD_P4_DS17', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier risk priced into commitments", textB: "Handled by expediting"
    },
    {
        qid: 'MD_P4_DS18', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Tooling amortization included", textB: "Tooling overhead"
    },
    {
        qid: 'MD_P4_DS19', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Variants priced consistently", textB: "Inconsistently"
    },
    {
        qid: 'MD_P4_DS20', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects pricing discipline", textB: "Breaks under pressure"
    },

    // P5 QS4
    {
        qid: 'md_p5_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "WIP/flow discipline protects compliance evidence", textB: "WIP chaos risks missing records"
    },
    {
        qid: 'md_p5_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Nonconformance control is enforced", textB: "Nonconformance re-enters flow"
    },
    {
        qid: 'md_p5_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process audits prevent drift", textB: "Audits are event-based"
    },
    {
        qid: 'md_p5_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Improvement cadence is continuous", textB: "Improvement after failures"
    },
    // P5 DS20
    {
        qid: 'MD_P5_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "WIP caps exist", textB: "WIP grows"
    },
    {
        qid: 'MD_P5_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Line clearance prevents mix-ups", textB: "Mix-ups caught late"
    },
    {
        qid: 'MD_P5_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework lane tracked", textB: "Blended"
    },
    {
        qid: 'MD_P5_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Downtime coded", textB: "Discussed"
    },
    {
        qid: 'MD_P5_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Throughput measured", textB: "Guessed"
    },
    {
        qid: 'MD_P5_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quality gates cannot be bypassed", textB: "Bypassed in emergencies"
    },
    {
        qid: 'MD_P5_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Records completeness is checked daily", textB: "Checked before audits"
    },
    {
        qid: 'MD_P5_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Defects coded by station", textB: "Totals only"
    },
    {
        qid: 'MD_P5_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Containment triggers exist", textB: "Late"
    },
    {
        qid: 'MD_P5_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Peak plan exists", textB: "Peak overtime"
    },
    {
        qid: 'MD_P5_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Standard work visible", textB: "In files"
    },
    {
        qid: 'MD_P5_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Handling damage tracked", textB: "Occasional"
    },
    {
        qid: 'MD_P5_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Layout supports flow", textB: "Backtracking"
    },
    {
        qid: 'MD_P5_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Improvement cadence weekly", textB: "After failures"
    },
    {
        qid: 'MD_P5_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process audits weekly", textB: "Occasional"
    },
    {
        qid: 'MD_P5_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "OEE losses reviewed weekly", textB: "Occasionally"
    },
    {
        qid: 'MD_P5_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training coverage mapped", textB: "Assumed"
    },
    {
        qid: 'MD_P5_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CAPA actions drive process changes", textB: "CAPA reminders"
    },
    {
        qid: 'MD_P5_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews ops KPIs monthly", textB: "In crises"
    },
    {
        qid: 'MD_P5_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture funds prevention", textB: "Funds firefighting"
    },

    // P6 QS4
    {
        qid: 'md_p6_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier controls are formal and risk-based", textB: "Supplier controls are relationship-based"
    },
    {
        qid: 'md_p6_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Traceability supports targeted field action", textB: "Broad action needed"
    },
    {
        qid: 'md_p6_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Receiving inspection is risk-based + documented", textB: "Quantity-first receiving"
    },
    {
        qid: 'md_p6_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier changes trigger review/qualification", textB: "Changes accepted as equivalent"
    },
    // P6 DS20
    {
        qid: 'MD_P6_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier scorecards exist", textB: "Anecdotal"
    },
    {
        qid: 'MD_P6_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier changes trigger re-qual", textB: "Accepted"
    },
    {
        qid: 'MD_P6_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Approved alternates pre-qualified", textB: "Chosen in shortage"
    },
    {
        qid: 'MD_P6_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Substitutions require sign-off", textB: "Informal"
    },
    {
        qid: 'MD_P6_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Receiving is risk-based", textB: "Quantity-only"
    },
    {
        qid: 'MD_P6_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Lot trace for critical parts", textB: "PO-level"
    },
    {
        qid: 'MD_P6_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Shortage alerts visible daily", textB: "Discovered on floor"
    },
    {
        qid: 'MD_P6_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Obsolescence monitored", textB: "Discovered late"
    },
    {
        qid: 'MD_P6_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Storage prevents damage/ESD/contamination", textB: "Space-based"
    },
    {
        qid: 'MD_P6_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Bad parts returns trended", textB: "Ad hoc"
    },
    {
        qid: 'MD_P6_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cycle counts routine", textB: "Occasional"
    },
    {
        qid: 'MD_P6_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Price variances acted on", textB: "Accepted"
    },
    {
        qid: 'MD_P6_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Procurement communicates risk early", textB: "Late"
    },
    {
        qid: 'MD_P6_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Emergency buys get post-mortem", textB: "Repeat"
    },
    {
        qid: 'MD_P6_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier corrective actions verified", textB: "Accepted when sent"
    },
    {
        qid: 'MD_P6_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Traceability supports serial→lot mapping", textB: "Partial"
    },
    {
        qid: 'MD_P6_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Compliance docs mapped per SKU", textB: "Gathered late"
    },
    {
        qid: 'MD_P6_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "DSO reviewed weekly (B2B)", textB: "When cash tight"
    },
    {
        qid: 'MD_P6_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews supply KPIs monthly", textB: "After line stops"
    },
    {
        qid: 'MD_P6_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier quality collaboration routine", textB: "Occasional"
    },

    // P7 QS4
    {
        qid: 'md_p7_qs_01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training, competence, and records are controlled", textB: "Training is mostly shadowing"
    },
    {
        qid: 'md_p7_qs_02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CAPA includes effectiveness verification", textB: "CAPA closes when tasks finish"
    },
    {
        qid: 'md_p7_qs_03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Internal audits prevent drift", textB: "Audits are event-based"
    },
    {
        qid: 'md_p7_qs_04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture protects compliance under pressure", textB: "Pressure relaxes compliance"
    },
    // P7 DS20
    {
        qid: 'MD_P7_DS01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training is role-certified", textB: "Shadowing"
    },
    {
        qid: 'MD_P7_DS02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Internal audits weekly/monthly rhythm", textB: "Event-based"
    },
    {
        qid: 'MD_P7_DS03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Near-misses blame-free", textB: "Hidden"
    },
    {
        qid: 'MD_P7_DS04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CAPA effectiveness checked", textB: "Task-complete"
    },
    {
        qid: 'MD_P7_DS05', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Anyone can stop for quality", textB: "Discouraged"
    },
    {
        qid: 'MD_P7_DS06', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Incentives balance quality+speed", textB: "Output-only"
    },
    {
        qid: 'MD_P7_DS07', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cross-training planned", textB: "Reactive"
    },
    {
        qid: 'MD_P7_DS08', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repeat issues treated as system issues", textB: "People issues"
    },
    {
        qid: 'MD_P7_DS09', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CI backlog ranked", textB: "Unranked"
    },
    {
        qid: 'MD_P7_DS10', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Improvement time scheduled", textB: "When time allows"
    },
    {
        qid: 'MD_P7_DS11', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "5S measured", textB: "Workload-based"
    },
    {
        qid: 'MD_P7_DS12', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Standards hold in rush weeks", textB: "Fade in rush"
    },
    {
        qid: 'MD_P7_DS13', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Document control is enforced at stations", textB: "Docs drift"
    },
    {
        qid: 'MD_P7_DS14', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Complaint handling links to CAPA", textB: "Ticket-only"
    },
    {
        qid: 'MD_P7_DS15', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier quality collaboration routine", textB: "Occasional"
    },
    {
        qid: 'MD_P7_DS16', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews people/quality KPIs monthly", textB: "In crises"
    },
    {
        qid: 'MD_P7_DS17', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture celebrates defect reduction", textB: "Celebrates output"
    },
    {
        qid: 'MD_P7_DS18', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture funds prevention", textB: "Funds firefighting"
    },
    {
        qid: 'MD_P7_DS19', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Compliance behaviors are coached daily", textB: "Coached during reviews"
    },
    {
        qid: 'MD_P7_DS20', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects trust/patient-safety behaviors", textB: "Pressure relaxes behaviors"
    }
];

export const MEDICAL_LIBRARY: LibraryItem[] = [];
export const MEDICAL_ACTIONS: ActionDefinition[] = [];
