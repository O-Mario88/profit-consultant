import { QuestionDefinition, LibraryItem, ActionDefinition } from '../../../types';

const LINE_TYPE = ['Electronics repair / refurb'];

export const REPAIR_QUESTIONS: QuestionDefinition[] = [
    // ... questions remain same, just types fixed in import
    // P1 - Quality
    {
        qid: 'repair_p1_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Fault found is evidenced (test + symptom reproduction)", textB: "Fault found relies on technician judgment"
    },
    {
        qid: 'repair_p1_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repair outcomes are verified with defined exit tests", textB: "Exit tests vary by technician"
    },
    {
        qid: 'repair_p1_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['rma_repeat_rent'],
        textA: "Warranty returns are coded and trended", textB: "Warranty returns are handled case-by-case"
    },
    {
        qid: 'repair_p1_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['traceability_blackout'],
        textA: "Repair records link to unit ID/serial", textB: "Repair records are incomplete"
    },
    // P1 DS20
    {
        qid: 'r_p1_ds_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Symptoms are reproduced and logged before repair", textB: "Repair begins based on reported symptoms"
    },
    {
        qid: 'r_p1_ds_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Exit testing follows a defined checklist by product family", textB: "Exit testing varies by technician"
    },
    {
        qid: 'r_p1_ds_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repair records link to serial + symptom + fix", textB: "Repair records capture only parts used"
    },
    {
        qid: 'r_p1_ds_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "No Trouble Found (NTF) has a control process", textB: "NTF is treated as unavoidable"
    },
    // P2 - Process
    {
        qid: 'repair_p2_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Triage steps are standardized by product family", textB: "Triage varies by technician style"
    },
    {
        qid: 'repair_p2_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Repair methods follow a defined standard playbook", textB: "Repair methods are improvised"
    },
    {
        qid: 'repair_p2_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['substitution_risk_tax'],
        textA: "Parts substitutions require approval", textB: "Parts substitutions happen under pressure"
    },
    {
        qid: 'repair_p2_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "No fault found has a control process", textB: "NTF is treated as bad luck"
    },
    // P3 - Customer
    {
        qid: 'repair_p3_qs_01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "SLAs are defined by tier and tracked", textB: "SLAs are negotiated ad hoc"
    },
    {
        qid: 'repair_p3_qs_02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customers receive evidence-based updates", textB: "Updates are mostly reassurance"
    },
    {
        qid: 'repair_p3_qs_03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Escalations follow a playbook", textB: "Escalations are improvised"
    },
    {
        qid: 'repair_p3_qs_04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['rma_repeat_rent'],
        textA: "Repeat returns trigger prevention work", textB: "Repeat returns trigger replacements"
    },
    // P4 - Pricing
    {
        qid: 'repair_p4_qs_01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Warranty cost is measured and priced in", textB: "Warranty cost is ignored"
    },
    {
        qid: 'repair_p4_qs_02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Economical repair limit exists", textB: "Repairs continue past profit point"
    },
    {
        qid: 'repair_p4_qs_03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Parts recovery is controlled and quality-checked", textB: "Parts recovery is informal"
    },
    {
        qid: 'repair_p4_qs_04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Pricing rules are consistent", textB: "Pricing varies by who quotes"
    },
    // P5 - Ops
    {
        qid: 'repair_p5_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['status_fog'],
        textA: "Intake -> triage -> repair -> QA flow is visible", textB: "Work sits in hidden queues"
    },
    {
        qid: 'repair_p5_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Re-test loops are tracked", textB: "Units bounce without data"
    },
    {
        qid: 'repair_p5_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['bottleneck_bounce'],
        textA: "Bench capacity is planned", textB: "Capacity is discovered daily"
    },
    {
        qid: 'repair_p5_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Top delay causes are removed weekly", textB: "Delays are accepted"
    },
    // P6 - Supply Chain
    {
        qid: 'repair_p6_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Spares availability is forecasted", textB: "Spares are emergency-sourced"
    },
    {
        qid: 'repair_p6_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Donor/harvest parts follow controls", textB: "Harvest is informal"
    },
    {
        qid: 'repair_p6_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Substitutions require approval", textB: "Substitutions are informal"
    },
    {
        qid: 'repair_p6_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['inventory_fiction'],
        textA: "Inventory accuracy is trusted", textB: "Inventory is corrected during crises"
    },
    // P7 - People
    {
        qid: 'repair_p7_qs_01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['esd_drift_risk'],
        textA: "ESD controls are verified daily", textB: "ESD slips under time pressure"
    },
    {
        qid: 'repair_p7_qs_02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['training_gap_bleed'],
        textA: "Repair skill certification exists per product family", textB: "Skills are assumed"
    },
    {
        qid: 'repair_p7_qs_03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['repeat_problem_rent'],
        textA: "Repeat failure causes are eliminated monthly", textB: "Repeat failures are accepted"
    },
    {
        qid: 'repair_p7_qs_04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Corrective actions close with proof", textB: "Actions close without verification"
    }
];

export const REPAIR_LIBRARY: LibraryItem[] = [];
export const REPAIR_ACTIONS: ActionDefinition[] = [];
