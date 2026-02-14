import { QuestionDefinition, LibraryItem, ActionDefinition } from '../../../types';

const LINE_TYPE = ['Box build / final assembly'];

export const BOX_QUESTIONS: QuestionDefinition[] = [
    // ... questions remain same, just types fixed in import
    // P1 - Quality & Trust
    {
        qid: 'box_p1_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['latent_failure_tax'],
        textA: "Firmware/config is verified before ship", textB: "Firmware/config issues are found late"
    },
    {
        qid: 'box_p1_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Torque/fastener checks are standardized", textB: "Torque depends on operator habit"
    },
    {
        qid: 'box_p1_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['traceability_blackout'],
        textA: "Functional test logs link to serial numbers", textB: "Test happens but logs aren't reliably linked"
    },
    {
        qid: 'box_p1_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['standards_fade'],
        textA: "Packaging/cosmetic standards are consistent", textB: "Standards vary by urgency"
    },
    // P1 DS20
    {
        qid: 'b_p1_ds_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Firmware/config is verified against a controlled checklist", textB: "Firmware/config is verified when issues show up"
    },
    {
        qid: 'b_p1_ds_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Serial numbers tie to test logs automatically", textB: "Test logs are stored but linkage is manual"
    },
    {
        qid: 'b_p1_ds_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Torque/fastener specs are posted and checked", textB: "Torque is based on technician feel"
    },
    {
        qid: 'b_p1_ds_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['label_fog'],
        textA: "Label versions are controlled and verified at start-up", textB: "Labels are verified when shipping questions arise"
    },
    // P2 - Process Engineering
    {
        qid: 'box_p2_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['revision_roulette'],
        textA: "Buildable rev is unambiguous", textB: "Revision is clarified mid-run"
    },
    {
        qid: 'box_p2_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "First-article includes firmware + mechanical + label verification", textB: "First-article focuses on only one area"
    },
    {
        qid: 'box_p2_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['eco_absorption'],
        textA: "ECO includes training + verification", textB: "ECO is message-based"
    },
    {
        qid: 'box_p2_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['tribal_wi_drift'],
        textA: "Work instructions are used at station", textB: "People rely on memory"
    },
    // P3 - Program Mgmt
    {
        qid: 'box_p3_qs_01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['promise_to_deliver_gap'],
        textA: "Commit dates require kitted readiness", textB: "Commit dates rely on hope"
    },
    {
        qid: 'box_p3_qs_02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Delay reasons are coded", textB: "Delay reasons are explained differently each time"
    },
    {
        qid: 'box_p3_qs_03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['rma_repeat_rent'],
        textA: "RMAs trigger prevention", textB: "RMAs trigger replacements/discounts"
    },
    {
        qid: 'box_p3_qs_04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer updates follow cadence", textB: "Customer updates are reactive"
    },
    // P4 - Pricing
    {
        qid: 'box_p4_qs_01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['yield_blindspot'],
        textA: "Quotes include test time + warranty risk", textB: "Quotes focus on materials only"
    },
    {
        qid: 'box_p4_qs_02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['free_change_drain'],
        textA: "Change orders are captured", textB: "Changes are absorbed"
    },
    {
        qid: 'box_p4_qs_03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['free_rush_fee'],
        textA: "Rush fees exist", textB: "Rush is free"
    },
    {
        qid: 'box_p4_qs_04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Program profitability reviewed monthly", textB: "Reviewed when cash is tight"
    },
    // P5 - Ops
    {
        qid: 'box_p5_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['wip_swamp'],
        textA: "WIP limits protect flow", textB: "WIP piles up"
    },
    {
        qid: 'box_p5_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['bottleneck_bounce'],
        textA: "Test is capacity-planned", textB: "Test becomes end-of-line surprise"
    },
    {
        qid: 'box_p5_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['downtime_drain'],
        textA: "Downtime is logged", textB: "Downtime is accepted"
    },
    {
        qid: 'box_p5_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['containment_delay_cost'],
        textA: "Containment stops spread fast", textB: "Issues spread across builds"
    },
    // P6 - Supply Chain
    {
        qid: 'box_p6_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['shortage_spiral'],
        textA: "Kitting accuracy is verified", textB: "Kitting errors show up at assembly"
    },
    {
        qid: 'box_p6_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['substitution_risk_tax'],
        textA: "Substitutions require approval", textB: "Substitutions are informal"
    },
    {
        qid: 'box_p6_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['inventory_fiction'],
        textA: "Inventory accuracy is trusted", textB: "Inventory is corrected during crises"
    },
    {
        qid: 'box_p6_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['compliance_document_scramble'],
        textA: "Compliance docs are ready by SKU", textB: "Docs are gathered late"
    },
    // P7 - People
    {
        qid: 'box_p7_qs_01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['esd_drift_risk'],
        textA: "ESD controls are verified daily", textB: "ESD slips under pressure"
    },
    {
        qid: 'box_p7_qs_02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['hero_dependency_risk'],
        textA: "Skills matrix covers bottleneck stations", textB: "Bottlenecks rely on a few people"
    },
    {
        qid: 'box_p7_qs_03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "LPAs/process audits are routine", textB: "Audits are occasional"
    },
    {
        qid: 'box_p7_qs_04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Corrective actions close with proof", textB: "Actions close without verification"
    }
];

export const BOX_LIBRARY: LibraryItem[] = [];
export const BOX_ACTIONS: ActionDefinition[] = [];
