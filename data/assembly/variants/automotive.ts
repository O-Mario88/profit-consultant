import { QuestionDefinition, LibraryItem, ActionDefinition } from '../../../types';

const LINE_TYPE = ['Automotive tier (IATF 16949 mode)'];

export const AUTOMOTIVE_QUESTIONS: QuestionDefinition[] = [
    // P1 QS4
    {
        qid: 'at_p1_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quality is managed to PPM targets with reaction plans", textB: "Quality is managed by final inspection + quick fixes"
    },
    {
        qid: 'at_p1_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Traceability supports rapid containment/lot isolation", textB: "Containment is broad because trace is incomplete"
    },
    {
        qid: 'at_p1_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Problem solving uses disciplined closure (e.g., 8D style)", textB: "Problem solving is handled case-by-case"
    },
    {
        qid: 'at_p1_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer complaints trigger systemic prevention", textB: "Complaints trigger replacement/credit first"
    },
    // P1 DS20
    {
        qid: 'AT_P1_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "PPM targets are reviewed monthly", textB: "PPM reviewed after complaints"
    },
    {
        qid: 'AT_P1_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Reaction plans exist for CTQ failures", textB: "Reaction is improvised"
    },
    {
        qid: 'AT_P1_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Containment can isolate by lot/shift", textB: "Containment requires broad holds"
    },
    {
        qid: 'AT_P1_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Layered process audits run routinely", textB: "Audits are occasional"
    },
    {
        qid: 'AT_P1_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Defects are coded + Pareto’d weekly", textB: "Defects discussed informally"
    },
    {
        qid: 'AT_P1_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "8D-style closure includes verification", textB: "Closure is task-complete"
    },
    {
        qid: 'AT_P1_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "“No ship without evidence” is enforced", textB: "Evidence bends in rush"
    },
    {
        qid: 'AT_P1_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Special characteristics are clearly marked", textB: "Special characteristics are implied"
    },
    {
        qid: 'AT_P1_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Mistake-proofing is used where feasible", textB: "Reliance is on training/inspection"
    },
    {
        qid: 'AT_P1_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Measurement results are recorded and trended", textB: "Results are recorded mainly for audits"
    },
    {
        qid: 'AT_P1_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework is controlled and analyzed", textB: "Rework is normal flow"
    },
    {
        qid: 'AT_P1_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty/field returns feed prevention", textB: "Returns handled by replacement"
    },
    {
        qid: 'AT_P1_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer scorecards are visible daily", textB: "Scorecards discussed monthly"
    },
    {
        qid: 'AT_P1_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Change-driven risk to quality is assessed", textB: "Risk is assumed low"
    },
    {
        qid: 'AT_P1_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Internal scrap cost is visible by program", textB: "Scrap is overhead"
    },
    {
        qid: 'AT_P1_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Escapes trigger layered containment checks", textB: "Escapes trigger reminders"
    },
    {
        qid: 'AT_P1_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quality ownership is production-owned too", textB: "Quality is QC-owned"
    },
    {
        qid: 'AT_P1_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects gates in launch/rush", textB: "Gates bend in launch/rush"
    },
    {
        qid: 'AT_P1_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer-specific acceptance rules are embedded", textB: "Rules live in email threads"
    },
    {
        qid: 'AT_P1_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Preventive actions are funded continuously", textB: "Prevention happens after pain"
    },

    // P2 QS4
    {
        qid: 'at_p2_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Changes follow controlled approval + risk review", textB: "Changes are implemented quickly and documented later"
    },
    {
        qid: 'at_p2_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Launch readiness is gated (plan → validate → approve)", textB: "Launch readiness is “ship when needed”"
    },
    {
        qid: 'at_p2_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Control plans define how to hold CTQs", textB: "Control exists but not documented consistently"
    },
    {
        qid: 'at_p2_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Measurement systems are verified for CTQs", textB: "Measurement is assumed accurate"
    },
    // P2 DS20
    {
        qid: 'AT_P2_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "“Buildable rev” is locked before run", textB: "Rev clarified mid-run"
    },
    {
        qid: 'AT_P2_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CSR requirements are captured in process", textB: "CSR captured in emails"
    },
    {
        qid: 'AT_P2_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "PFMEA/control-plan thinking is used", textB: "Risk thinking is informal"
    },
    {
        qid: 'AT_P2_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Launch gates exist (APQP-style)", textB: "Launch is demand-driven"
    },
    {
        qid: 'AT_P2_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "PPAP-like approvals exist for changes", textB: "Changes treated as minor"
    },
    {
        qid: 'AT_P2_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Special characteristics drive checks", textB: "Checks are generic"
    },
    {
        qid: 'AT_P2_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "MSA-like checks exist for CTQs", textB: "CTQ gauges assumed ok"
    },
    {
        qid: 'AT_P2_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "SPC is applied where stable processes exist", textB: "Trends are visual/intuition"
    },
    {
        qid: 'AT_P2_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Error-proofing is prioritized by risk", textB: "Error-proofing is occasional"
    },
    {
        qid: 'AT_P2_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "ECO includes training + verification", textB: "ECO is message-based"
    },
    {
        qid: 'AT_P2_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "First-article includes CTQ checks", textB: "First-article is informal"
    },
    {
        qid: 'AT_P2_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Change implementation is verified at line", textB: "Assumed correct"
    },
    {
        qid: 'AT_P2_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Tooling calibration status is visible", textB: "Status is assumed"
    },
    {
        qid: 'AT_P2_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process audits run weekly", textB: "Audits before visits"
    },
    {
        qid: 'AT_P2_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Lessons learned feed standards", textB: "Lessons learned stay tribal"
    },
    {
        qid: 'AT_P2_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Programming/config is controlled", textB: "Config varies by tech"
    },
    {
        qid: 'AT_P2_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Contingency planning exists for key process risks", textB: "Contingency is overtime"
    },
    {
        qid: 'AT_P2_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Engineering response time is measured", textB: "Anecdotal"
    },
    {
        qid: 'AT_P2_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Document control is strict", textB: "Documents drift by shift"
    },
    {
        qid: 'AT_P2_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews launch/change KPIs monthly", textB: "Reviews during crises"
    },

    // P3 QS4
    {
        qid: 'at_p3_qs_01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "OTIF is managed with cause codes + actions", textB: "OTIF is managed by expediting"
    },
    {
        qid: 'at_p3_qs_02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Escalations follow structured containment + 8D", textB: "Escalations are ad hoc"
    },
    {
        qid: 'at_p3_qs_03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer scorecards drive weekly priorities", textB: "Priorities set by loudest issue"
    },
    {
        qid: 'at_p3_qs_04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Logistics quality (pack/label) is standardized", textB: "Logistics quality varies by shift"
    },
    // P3 DS20
    {
        qid: 'AT_P3_DS01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Commit dates require capacity+materials", textB: "Commit is optimistic"
    },
    {
        qid: 'AT_P3_DS02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "OTIF reviewed weekly w/ owners", textB: "Reviewed after escalation"
    },
    {
        qid: 'AT_P3_DS03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Expedite costs tracked by program", textB: "Expedites normal"
    },
    {
        qid: 'AT_P3_DS04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer complaints coded/trended", textB: "Complaints handled case-by-case"
    },
    {
        qid: 'AT_P3_DS05', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Escalations trigger containment rules", textB: "Escalations trigger overtime"
    },
    {
        qid: 'AT_P3_DS06', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "8D closure is standard for major issues", textB: "Closure is verbal"
    },
    {
        qid: 'AT_P3_DS07', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CSR changes trigger formal review", textB: "Changes absorbed"
    },
    {
        qid: 'AT_P3_DS08', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Service tiers are explicit", textB: "Tiers informal"
    },
    {
        qid: 'AT_P3_DS09', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Forecasts requested and used", textB: "Forecasts ignored"
    },
    {
        qid: 'AT_P3_DS10', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Packaging/label rules are verified", textB: "Verified when shipping fails"
    },
    {
        qid: 'AT_P3_DS11', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer portal/status cadence exists", textB: "Status by email"
    },
    {
        qid: 'AT_P3_DS12', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty/field feedback loops to prevention", textB: "Feedback loops to replacements"
    },
    {
        qid: 'AT_P3_DS13', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Premium accounts don’t break process discipline", textB: "Premium accounts bypass gates"
    },
    {
        qid: 'AT_P3_DS14', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Scorecard KPIs visible daily", textB: "Visible monthly"
    },
    {
        qid: 'AT_P3_DS15', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Contract requirements captured at intake", textB: "Captured late"
    },
    {
        qid: 'AT_P3_DS16', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Risk register exists per program", textB: "Risks are implicit"
    },
    {
        qid: 'AT_P3_DS17', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Program KPIs reviewed monthly", textB: "Reviewed during crises"
    },
    {
        qid: 'AT_P3_DS18', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repeated issues trigger systemic fixes", textB: "Trigger reminders"
    },
    {
        qid: 'AT_P3_DS19', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Delivery reliability is protected over speed", textB: "Speed over reliability"
    },
    {
        qid: 'AT_P3_DS20', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects customer trust behaviors", textB: "Pressure relaxes behaviors"
    },

    // P4 QS4
    {
        qid: 'at_p4_qs_01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quotes include CTQ controls + scrap risk", textB: "Quotes assume “normal yield”"
    },
    {
        qid: 'at_p4_qs_02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Launch/change costs are recovered (NRE/change orders)", textB: "Costs are absorbed"
    },
    {
        qid: 'at_p4_qs_03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty risk is measured and priced", textB: "Warranty is treated as rare"
    },
    {
        qid: 'at_p4_qs_04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Margin floors exist by customer tier", textB: "Floors flex for volume"
    },
    // P4 DS20
    {
        qid: 'AT_P4_DS01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Costing includes quality loss risk", textB: "Costing assumes ideal yield"
    },
    {
        qid: 'AT_P4_DS02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Launch costs tracked and recovered", textB: "Launch costs absorbed"
    },
    {
        qid: 'AT_P4_DS03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Change order capture is disciplined", textB: "Changes absorbed"
    },
    {
        qid: 'AT_P4_DS04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty/field cost tracked", textB: "Field cost ad hoc"
    },
    {
        qid: 'AT_P4_DS05', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rush fees exist", textB: "Rush is free"
    },
    {
        qid: 'AT_P4_DS06', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Discount approvals require rationale", textB: "Discounts to close"
    },
    {
        qid: 'AT_P4_DS07', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Margin reviewed monthly by program", textB: "Reviewed when cash tight"
    },
    {
        qid: 'AT_P4_DS08', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Expedite cost visible in margin", textB: "Expedite overhead"
    },
    {
        qid: 'AT_P4_DS09', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Scrap/rework costed per program", textB: "Scrap/rework overhead"
    },
    {
        qid: 'AT_P4_DS10', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Payment terms enforced with rules", textB: "Flexible"
    },
    {
        qid: 'AT_P4_DS11', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Price variances trigger action", textB: "Accepted"
    },
    {
        qid: 'AT_P4_DS12', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Complexity pricing exists", textB: "Complexity priced ad hoc"
    },
    {
        qid: 'AT_P4_DS13', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Minimum order rules exist", textB: "Small orders accepted"
    },
    {
        qid: 'AT_P4_DS14', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quote assumptions documented", textB: "Implied"
    },
    {
        qid: 'AT_P4_DS15', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Finance+ops aligned on costing", textB: "Differ"
    },
    {
        qid: 'AT_P4_DS16', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Loss programs trigger plans", textB: "Loss programs tolerated"
    },
    {
        qid: 'AT_P4_DS17', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Tooling amortization included", textB: "Tooling overhead"
    },
    {
        qid: 'AT_P4_DS18', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CSR compliance costs priced", textB: "CSR costs absorbed"
    },
    {
        qid: 'AT_P4_DS19', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Overtime impact visible", textB: "Overtime necessary"
    },
    {
        qid: 'AT_P4_DS20', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects pricing discipline", textB: "Discipline breaks under pressure"
    },

    // P5 QS4
    {
        qid: 'at_p5_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "WIP limits + flow discipline protect quality", textB: "WIP piles up in rush"
    },
    {
        qid: 'at_p5_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Bottleneck is protected with stable scheduling", textB: "Bottleneck is whoever is free"
    },
    {
        qid: 'at_p5_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Reaction plans exist for process drift", textB: "Drift handled by rework"
    },
    {
        qid: 'at_p5_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Mistake-proofing reduces escapes", textB: "Inspection catches escapes"
    },
    // P5 DS20
    {
        qid: 'AT_P5_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "WIP caps exist", textB: "WIP grows"
    },
    {
        qid: 'AT_P5_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "First-article includes CTQs", textB: "First-article informal"
    },
    {
        qid: 'AT_P5_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Downtime coded", textB: "Downtime discussed"
    },
    {
        qid: 'AT_P5_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Micro-stops captured", textB: "Only big stops"
    },
    {
        qid: 'AT_P5_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "SPC used where appropriate", textB: "Trends are intuition"
    },
    {
        qid: 'AT_P5_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Reaction plans executed consistently", textB: "Reaction ad hoc"
    },
    {
        qid: 'AT_P5_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Error-proofing prioritized", textB: "Error-proofing occasional"
    },
    {
        qid: 'AT_P5_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rework has tracked lane", textB: "Rework blended"
    },
    {
        qid: 'AT_P5_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Throughput time measured", textB: "Guessed"
    },
    {
        qid: 'AT_P5_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Line clearance prevents mix", textB: "Mix caught late"
    },
    {
        qid: 'AT_P5_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Layout supports flow", textB: "Backtracking"
    },
    {
        qid: 'AT_P5_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quality gates can’t be bypassed", textB: "Bypassed in emergencies"
    },
    {
        qid: 'AT_P5_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Peak plan exists", textB: "Peak = overtime"
    },
    {
        qid: 'AT_P5_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Defects coded by station", textB: "Totals only"
    },
    {
        qid: 'AT_P5_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "OEE losses reviewed weekly", textB: "Occasionally"
    },
    {
        qid: 'AT_P5_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Containment triggers exist", textB: "Containment late"
    },
    {
        qid: 'AT_P5_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Improvement cadence weekly", textB: "After failures"
    },
    {
        qid: 'AT_P5_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Standard work visible", textB: "In files"
    },
    {
        qid: 'AT_P5_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews ops KPIs monthly", textB: "In crises"
    },
    {
        qid: 'AT_P5_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture funds prevention", textB: "Funds firefighting"
    },

    // P6 QS4
    {
        qid: 'at_p6_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier quality is actively managed (sub-tier too)", textB: "Supplier issues handled when they happen"
    },
    {
        qid: 'at_p6_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Traceability supports containment within hours", textB: "Traceability requires days"
    },
    {
        qid: 'at_p6_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Approved alternates are qualified", textB: "Alternates chosen in shortage"
    },
    {
        qid: 'at_p6_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Receiving is risk-based + documented", textB: "Receiving is quantity-first"
    },
    // P6 DS20
    {
        qid: 'AT_P6_DS01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier scorecards exist", textB: "Supplier performance anecdotal"
    },
    {
        qid: 'AT_P6_DS02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Sub-tier expectations are defined (MAQMSR-like)", textB: "Sub-tier expectations informal"
    },
    {
        qid: 'AT_P6_DS03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Approved alternates pre-qualified", textB: "Alternates chosen in shortage"
    },
    {
        qid: 'AT_P6_DS04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Substitutions require sign-off", textB: "Informal"
    },
    {
        qid: 'AT_P6_DS05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Receiving is risk-based", textB: "Quantity-only"
    },
    {
        qid: 'AT_P6_DS06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Lot trace for critical parts", textB: "PO-level"
    },
    {
        qid: 'AT_P6_DS07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier changes trigger re-qual", textB: "Accepted as equivalent"
    },
    {
        qid: 'AT_P6_DS08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Shortage alerts visible daily", textB: "Floor discovers shortages"
    },
    {
        qid: 'AT_P6_DS09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Expedites tracked as KPI", textB: "Expedites normal"
    },
    {
        qid: 'AT_P6_DS10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Obsolescence monitored", textB: "Discovered late"
    },
    {
        qid: 'AT_P6_DS11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Storage prevents damage/ESD", textB: "Space-based"
    },
    {
        qid: 'AT_P6_DS12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Bad parts returns trended", textB: "Ad hoc"
    },
    {
        qid: 'AT_P6_DS13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Procurement communicates risk early", textB: "Late"
    },
    {
        qid: 'AT_P6_DS14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cycle counts routine", textB: "Occasional"
    },
    {
        qid: 'AT_P6_DS15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Price variances acted on", textB: "Accepted"
    },
    {
        qid: 'AT_P6_DS16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier corrective actions verified", textB: "Accepted when sent"
    },
    {
        qid: 'AT_P6_DS17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Traceability supports serial→lot mapping", textB: "Mapping partial"
    },
    {
        qid: 'AT_P6_DS18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Emergency buys get post-mortem", textB: "Repeat"
    },
    {
        qid: 'AT_P6_DS19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews supply KPIs monthly", textB: "After line stops"
    },
    {
        qid: 'AT_P6_DS20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier development is proactive", textB: "Supplier development is reactive"
    },

    // P7 QS4
    {
        qid: 'at_p7_qs_01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Problem-solving discipline is trained and audited", textB: "Problem solving is personality-driven"
    },
    {
        qid: 'at_p7_qs_02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Layered audits prevent drift", textB: "Audits are event-based"
    },
    {
        qid: 'at_p7_qs_03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training/qualification is role-certified", textB: "Training is shadowing"
    },
    {
        qid: 'at_p7_qs_04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture rewards prevention", textB: "Culture rewards firefighting"
    },
    // P7 DS20
    {
        qid: 'AT_P7_DS01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training is role-certified", textB: "Shadowing"
    },
    {
        qid: 'AT_P7_DS02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Layered audits weekly", textB: "Occasional"
    },
    {
        qid: 'AT_P7_DS03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Near-misses blame-free", textB: "Hidden"
    },
    {
        qid: 'AT_P7_DS04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CAPA effectiveness checked", textB: "Close when done"
    },
    {
        qid: 'AT_P7_DS05', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Anyone can stop for quality", textB: "Discouraged"
    },
    {
        qid: 'AT_P7_DS06', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Incentives balance quality+speed", textB: "Output-only"
    },
    {
        qid: 'AT_P7_DS07', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cross-training planned", textB: "Reactive"
    },
    {
        qid: 'AT_P7_DS08', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repeat issues treated as system issues", textB: "People issues"
    },
    {
        qid: 'AT_P7_DS09', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "CI backlog ranked", textB: "Unranked"
    },
    {
        qid: 'AT_P7_DS10', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Improvement time scheduled", textB: "When time allows"
    },
    {
        qid: 'AT_P7_DS11', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "5S measured", textB: "Workload-based"
    },
    {
        qid: 'AT_P7_DS12', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Standards hold in rush weeks", textB: "Fade in rush"
    },
    {
        qid: 'AT_P7_DS13', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews people/quality KPIs monthly", textB: "In crises"
    },
    {
        qid: 'AT_P7_DS14', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer-specific requirements embedded", textB: "CSR in emails"
    },
    {
        qid: 'AT_P7_DS15', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier quality collaboration routine", textB: "Occasional"
    },
    {
        qid: 'AT_P7_DS16', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Contingency plans exist", textB: "Overtime is contingency"
    },
    {
        qid: 'AT_P7_DS17', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Escalation discipline consistent", textB: "Improvised"
    },
    {
        qid: 'AT_P7_DS18', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Field feedback loops into prevention", textB: "Replacement-first"
    },
    {
        qid: 'AT_P7_DS19', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Culture funds prevention", textB: "Funds firefighting"
    },
    {
        qid: 'AT_P7_DS20', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership protects trust behaviors", textB: "Pressure relaxes behaviors"
    }
];

export const AUTOMOTIVE_LIBRARY: LibraryItem[] = [];
export const AUTOMOTIVE_ACTIONS: ActionDefinition[] = [];
