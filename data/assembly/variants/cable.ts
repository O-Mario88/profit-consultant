import { QuestionDefinition, LibraryItem, ActionDefinition, PillarId } from '../../../types';

const LINE_TYPE = ['Cable harness & wiring'];

export const CABLE_QUESTIONS: QuestionDefinition[] = [
    // P1 - Quality & Customer Trust
    {
        qid: 'cable_p1_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['standards_fade'],
        textA: "Acceptance is defined with a shared standard language (IPC-620)", textB: "Acceptance depends on who inspects (opinion contest)"
    },
    {
        qid: 'cable_p1_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['traceability_blackout'],
        textA: "Test results are tied to harness IDs", textB: "Test happens, but records aren't reliably linked"
    },
    {
        qid: 'cable_p1_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['label_fog'],
        textA: "Labeling and revision control are consistent", textB: "Labels/revisions vary by urgency"
    },
    {
        qid: 'cable_p1_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['escape_bleed'],
        textA: "Defects are coded and trended", textB: "Defects are fixed but rarely trended"
    },
    // P1 DS20
    {
        qid: 'cable_p1_ds_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Workmanship class is explicit per product", textB: "Class is assumed"
    },
    {
        qid: 'cable_p1_ds_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Harness IDs map to build + test records", textB: "Mapping is partial"
    },
    {
        qid: 'cable_p1_ds_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Pinout verification is routine", textB: "Pinout is assumed from build"
    },
    {
        qid: 'cable_p1_ds_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['miswire_tax'],
        textA: "Miswire defects are coded", textB: "Miswire defects are 'rare stories'"
    },
    {
        qid: 'cable_p1_ds_05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['termination_drift'],
        textA: "Termination checks use objective criteria", textB: "Checks rely on experience"
    },
    {
        qid: 'cable_p1_ds_06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Strain relief is verified consistently", textB: "Strain relief varies by operator"
    },
    {
        qid: 'cable_p1_ds_07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['label_fog'],
        textA: "Labels are printed from controlled templates", textB: "Labels are improvised"
    },
    {
        qid: 'cable_p1_ds_08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Test failures trigger containment", textB: "Test failures trigger quick rework"
    },
    {
        qid: 'cable_p1_ds_09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['rework_treadmill'],
        textA: "Rework is logged by cause", textB: "Rework is invisible"
    },
    {
        qid: 'cable_p1_ds_10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['escape_bleed'],
        textA: "Escapes are analyzed with evidence", textB: "Escapes are handled with credits"
    },
    {
        qid: 'cable_p1_ds_11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Incoming materials are checked risk-based", textB: "Materials are assumed good"
    },
    {
        qid: 'cable_p1_ds_12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Substitutions require approval", textB: "Substitutions happen under pressure"
    },
    {
        qid: 'cable_p1_ds_13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['traceability_blackout'],
        textA: "Connectors/terminals lots are captured", textB: "Lots rarely captured"
    },
    {
        qid: 'cable_p1_ds_14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Training is station-certified", textB: "Training is shadowing"
    },
    {
        qid: 'cable_p1_ds_15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process audits happen weekly", textB: "Audits happen when customers visit"
    },
    {
        qid: 'cable_p1_ds_16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Defect Pareto reviewed weekly", textB: "Reviewed after returns"
    },
    {
        qid: 'cable_p1_ds_17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['standards_fade_under_rush'],
        textA: "Release gate is enforced", textB: "Release gate bends for rush jobs"
    },
    {
        qid: 'cable_p1_ds_18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customers get consistent docs (COC/test summary)", textB: "Docs vary by account manager"
    },
    {
        qid: 'cable_p1_ds_19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Leadership reviews quality KPIs monthly", textB: "KPIs reviewed in crises"
    },
    {
        qid: 'cable_p1_ds_20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Prevention work is funded", textB: "Only firefighting is funded"
    },

    // P2 - Process Engineering
    {
        qid: 'cable_p2_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['revision_roulette'],
        textA: "Buildable revision is clear per order", textB: "Revision is clarified mid-build"
    },
    {
        qid: 'cable_p2_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['first_article_skip_fee'],
        textA: "First-article is verified after setup", textB: "First-article is assumed"
    },
    {
        qid: 'cable_p2_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['eco_absorption'],
        textA: "ECO includes doc update + brief training", textB: "ECO is 'message only'"
    },
    {
        qid: 'cable_p2_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['tribal_wi_drift'],
        textA: "Work instructions are used at station", textB: "People rely on memory"
    },
    // P2 DS20
    {
        qid: 'h_p2_ds_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Revisions are locked per job traveler before kitting", textB: "Revisions are confirmed during build when questions come up"
    },
    {
        qid: 'h_p2_ds_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['board_layout_chaos'],
        textA: "Harness boards/jigs are verified against latest drawing before release", textB: "Boards/jigs are reused unless a mismatch is noticed"
    },
    {
        qid: 'h_p2_ds_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['tribal_wi_drift'],
        textA: "Work instructions include photos of key terminations/routing", textB: "Work instructions rely on text and tribal explanations"
    },
    {
        qid: 'h_p2_ds_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cut lengths are controlled with a set method", textB: "Cut lengths are controlled by operator technique"
    },
    {
        qid: 'h_p2_ds_05', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Strip length targets are stated and checked at start-up", textB: "Strip length is adjusted 'as needed' during work"
    },
    {
        qid: 'h_p2_ds_06', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Crimp tools are checked/validated on a defined cadence", textB: "Tools are adjusted when results look off"
    },
    {
        qid: 'h_p2_ds_07', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['termination_drift'],
        textA: "Pull-test / crimp verification is performed per rule", textB: "Pull-test is done when introducing a new wire/terminal"
    },
    {
        qid: 'h_p2_ds_08', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "ECOs include a quick station briefing + sign-off", textB: "ECOs are communicated by message and assumed understood"
    },
    {
        qid: 'h_p2_ds_09', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['first_article_skip_fee'],
        textA: "First-article harness is inspected and approved before full run", textB: "First-article is done informally as confidence check"
    },
    {
        qid: 'h_p2_ds_10', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Splices have documented method + acceptance criteria", textB: "Splices follow a common technique without documentation"
    },
    {
        qid: 'h_p2_ds_11', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Connector keying/polarity is verified at setup", textB: "Polarity is verified when final test flags issues"
    },
    {
        qid: 'h_p2_ds_12', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Heat-shrink selection/cure/time is standardized", textB: "Heat-shrink selection is based on availability and feel"
    },
    {
        qid: 'h_p2_ds_13', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Tie-wrap spacing/strain relief is specified", textB: "Tie-wrap spacing is 'neatness-based'"
    },
    {
        qid: 'h_p2_ds_14', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['label_fog'],
        textA: "Label templates are version-controlled", textB: "Label templates are edited locally when needed"
    },
    {
        qid: 'h_p2_ds_15', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Approved substitutions require engineering/quality sign-off", textB: "Substitutions are approved by whoever is closest to the issue"
    },
    {
        qid: 'h_p2_ds_16', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Tooling changes are recorded", textB: "Tooling changes are remembered by the team"
    },
    {
        qid: 'h_p2_ds_17', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['training_gap_bleed'],
        textA: "Training is tied to stations", textB: "Training happens through shadowing across stations"
    },
    {
        qid: 'h_p2_ds_18', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Defect learnings update WIs within a week", textB: "Defect learnings are shared verbally"
    },
    {
        qid: 'h_p2_ds_19', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "A 'golden harness' is maintained as controlled reference", textB: "A good sample is kept informally for comparison"
    },
    {
        qid: 'h_p2_ds_20', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['hold_pile_up'],
        textA: "Engineering holds have formal tags + disposition rules", textB: "Engineering holds are handled case-by-case by supervisors"
    },

    // P3 - Sales/Connect
    {
        qid: 'cable_p3_qs_01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['promise_to_deliver_gap'],
        textA: "Dates are committed based on capacity + materials", textB: "Dates are committed to win deals"
    },
    {
        qid: 'cable_p3_qs_02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['status_fog'],
        textA: "Delay reasons are coded", textB: "Delay reasons are stories"
    },
    {
        qid: 'cable_p3_qs_03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Returns trigger prevention", textB: "Returns trigger discounts"
    },
    {
        qid: 'cable_p3_qs_04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer updates follow cadence", textB: "Updates happen when asked"
    },
    // P3 DS20
    {
        qid: 'h_p3_ds_01', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Lead times are committed only after material readiness check", textB: "Lead times are committed based on typical experience"
    },
    {
        qid: 'h_p3_ds_02', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Delay reasons are coded (shortage, rework, test, ECO)", textB: "Delay reasons are explained in narrative each time"
    },
    {
        qid: 'h_p3_ds_03', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Rush requests have a clear tradeoff rule", textB: "Rush requests are handled by 'making it work'"
    },
    {
        qid: 'h_p3_ds_04', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Customer changes trigger formal change order review", textB: "Customer changes are absorbed to protect relationships"
    },
    {
        qid: 'h_p3_ds_05', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['rma_repeat_rent'],
        textA: "Returns are triaged and defect-coded", textB: "Returns are inspected but not consistently coded"
    },
    {
        qid: 'h_p3_ds_06', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "A weekly status update is sent to top accounts", textB: "Updates are sent when milestones move"
    },
    {
        qid: 'h_p3_ds_07', pillar: 'Market', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Packing requirements are documented per customer", textB: "Packing requirements are remembered by the shipping team"
    },
    // P4 - Pricing & Margin
    {
        qid: 'cable_p4_qs_01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['yield_blindspot'],
        textA: "Quotes include labor + test + rework risk", textB: "Quotes mainly include materials"
    },
    {
        qid: 'cable_p4_qs_02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['free_rush_fee'],
        textA: "Rush changes have fees", textB: "Rush changes are absorbed"
    },
    {
        qid: 'cable_p4_qs_03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['margin_floor_collapse'],
        textA: "Margin floors exist", textB: "Margins flex for volume"
    },
    {
        qid: 'cable_p4_qs_04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Profitability reviewed monthly", textB: "Profitability reviewed when cash is tight"
    },
    // P4 DS20
    {
        qid: 'h_p4_ds_01', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Quotes use standard labor minutes by harness family", textB: "Quotes use 'experienced estimate' per job"
    },
    {
        qid: 'h_p4_ds_02', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['unpriced_complexity'],
        textA: "Complexity drivers add pricing", textB: "Complexity is priced when it feels unusually hard"
    },
    {
        qid: 'h_p4_ds_03', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Test time is costed per unit/lot", textB: "Test time is treated as part of labor"
    },
    {
        qid: 'h_p4_ds_04', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Setup/changeover costs are included in low-volume jobs", textB: "Setup costs are absorbed to win deals"
    },
    {
        qid: 'h_p4_ds_05', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['yield_blindspot'],
        textA: "Scrap/rework is costed into margin reviews", textB: "Scrap/rework is treated as unavoidable overhead"
    },
    {
        qid: 'h_p4_ds_06', pillar: 'Money', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['free_rush_fee'],
        textA: "Rush fees exist and are applied consistently", textB: "Rush fees are negotiated case-by-case"
    },
    // P5 - Ops
    {
        qid: 'cable_p5_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['wip_swamp'],
        textA: "WIP is capped", textB: "WIP grows under pressure"
    },
    {
        qid: 'cable_p5_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['shortage_spiral'],
        textA: "Kitting prevents missing parts mid-build", textB: "Parts are fetched during build"
    },
    {
        qid: 'cable_p5_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['downtime_drain'],
        textA: "Downtime is logged by cause", textB: "Downtime is accepted"
    },
    {
        qid: 'cable_p5_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['bottleneck_bounce'],
        textA: "Bottleneck is protected", textB: "Bottleneck surprises the team"
    },
    // P5 DS20
    {
        qid: 'h_p5_ds_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Jobs are released with full kits", textB: "Jobs are released while kits are still being completed"
    },
    {
        qid: 'h_p5_ds_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['wip_swamp'],
        textA: "WIP limits exist per cell/station", textB: "WIP limits exist informally as 'don't overload'"
    },
    {
        qid: 'h_p5_ds_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['bottleneck_bounce'],
        textA: "Bottlenecks (crimp/test) are scheduled deliberately", textB: "Bottlenecks are scheduled by whoever is next available"
    },
    // P6 - Supply Chain
    {
        qid: 'cable_p6_qs_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['shortage_spiral'],
        textA: "Shortages are detected early", textB: "Shortages appear mid-build"
    },
    {
        qid: 'cable_p6_qs_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['substitution_risk_tax'],
        textA: "Substitutions require approval", textB: "Substitutions are informal"
    },
    {
        qid: 'cable_p6_qs_03', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['inventory_fiction'],
        textA: "Inventory accuracy is trusted", textB: "Inventory is corrected during crises"
    },
    {
        qid: 'cable_p6_qs_04', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Supplier performance is scored", textB: "Supplier performance is anecdotal"
    },
    // P6 DS20
    {
        qid: 'h_p6_ds_01', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Critical items have reorder triggers and owners", textB: "Critical items are replenished when bins look low"
    },
    {
        qid: 'h_p6_ds_02', pillar: 'Operations', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['inventory_fiction'],
        textA: "Inventory accuracy is verified by cycle counts", textB: "Inventory accuracy is trusted until it fails"
    },
    // P7 - People
    {
        qid: 'cable_p7_qs_01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['training_gap_bleed'],
        textA: "Skill certification exists per station", textB: "Skills are assumed"
    },
    {
        qid: 'cable_p7_qs_02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Process audits are routine", textB: "Audits are occasional"
    },
    {
        qid: 'cable_p7_qs_03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Corrective actions close with proof", textB: "Actions close without verification"
    },
    {
        qid: 'cable_p7_qs_04', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['standards_fade_under_rush'],
        textA: "Standards hold under rush weeks", textB: "Standards fade under rush"
    },
    // P7 DS20
    {
        qid: 'h_p7_ds_01', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['training_gap_bleed'],
        textA: "Skill certification is required for critical stations", textB: "Skill is assumed after shadowing"
    },
    {
        qid: 'h_p7_ds_02', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: [],
        textA: "Cross-training is planned for bottleneck resilience", textB: "Cross-training happens when someone is absent"
    },
    {
        qid: 'h_p7_ds_03', pillar: 'People', industry: 'assembly', line_type: LINE_TYPE, weight: 1, signal_tags: ['esd_drift_risk'],
        textA: "ESD rules are verified daily where electronics are handled", textB: "ESD rules are 'known' but not checked"
    }
];

export const CABLE_LIBRARY: LibraryItem[] = [
    {
        id: 'cab_str_01', pillar: 'Operations', type: 'strength', industry: 'assembly', line_type: LINE_TYPE, signal_tags: [],
        text: "You build to a defined workmanship class so 'good' isn’t negotiated on the shop floor.",
        severity_fit: ['Stable'], business_size_fit: ['small', 'medium', 'enterprise']
    },
    {
        id: 'cab_str_02', pillar: 'Operations', type: 'strength', industry: 'assembly', line_type: LINE_TYPE, signal_tags: [],
        text: "Defects are contained fast (quarantine + recheck rules) to prevent repeat escapes.",
        severity_fit: ['Stable'], business_size_fit: ['small', 'medium', 'enterprise']
    },
    {
        id: 'cab_leak_01', pillar: 'Operations', type: 'leak', industry: 'assembly', line_type: LINE_TYPE, signal_tags: ['standards_fade', 'inspection_lottery'],
        text: "Quality varies by operator; inspection becomes an 'opinion contest.'",
        hook_text: "The Inspection Lottery",
        severity_fit: ['Critical', 'Watch'], business_size_fit: ['small', 'medium', 'enterprise']
    },
    {
        id: 'cab_leak_02', pillar: 'Operations', type: 'leak', industry: 'assembly', line_type: LINE_TYPE, signal_tags: ['traceability_blackout'],
        text: "Traceability breaks under pressure; test results aren't tied to harness IDs.",
        hook_text: "Traceability Blackout",
        severity_fit: ['Critical', 'Watch'], business_size_fit: ['small', 'medium', 'enterprise']
    },
    {
        id: 'cab_leak_03', pillar: 'Operations', type: 'leak', industry: 'assembly', line_type: LINE_TYPE, signal_tags: ['miswire_tax', 'termination_drift'],
        text: "Pinout errors are caught late or by the customer.",
        hook_text: "The Miswire Tax",
        severity_fit: ['Critical'], business_size_fit: ['small', 'medium', 'enterprise']
    }
];

export const CABLE_ACTIONS: ActionDefinition[] = [
    {
        action_id: 'cab_act_01', industry: 'assembly', pillar: 'Operations', title: "Workmanship Photo Guide",
        effort: 'S', days: 7, signal_tags: ['standards_fade', 'inspection_lottery'],
        description: "Create a simple pass/fail photo guide for the top 5 defects.",
        line_type: LINE_TYPE
    },
    {
        action_id: 'cab_act_02', industry: 'assembly', pillar: 'Operations', title: "Harness ID + Rev Standard",
        effort: 'S', days: 7, signal_tags: ['label_fog', 'traceability_blackout'],
        description: "Standardize labeling (ID + rev + date) at one print source.",
        line_type: LINE_TYPE
    },
    {
        action_id: 'cab_act_03', industry: 'assembly', pillar: 'Operations', title: "Test Record Linkage",
        effort: 'M', days: 30, signal_tags: ['traceability_blackout'],
        description: "Make test a real gate: no ship without ID-linked result.",
        line_type: LINE_TYPE
    }
];
