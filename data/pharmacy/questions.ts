import { PillarId, SignalTag } from '../../types/core';
import { QuestionDefinition } from '../../types/report';

const q = (
    qid: string,
    pillar: PillarId,
    signal_tags: SignalTag[],
    textA: string, // Strength
    textB: string, // Weakness
    weight = 1.0
): QuestionDefinition => ({
    qid,
    pillar,
    signal_tags,
    textA,
    textB,
    weight,
    industry: 'retail',
    line_type: ['Standard']
});

export const questions: QuestionDefinition[] = [
    // --- QUICK SCAN (QS4) ---

    // Market (P1 Clinical - Trust)
    q('pharm_qs_p1', 'Market', ['counseling_gap', 'trust_erosion'],
        'Counseling is consistent across shifts.',
        'Counseling depends on who is present.'
    ),

    // Innovation (P2 Sourcing - Availability)
    q('pharm_qs_p2', 'Innovation', ['stockout_tax', 'supplier_reliability_gap'],
        'Essentials are protected by min/max levels.',
        'Essentials compete with everything else for cash.'
    ),

    // Money (P3 Revenue)
    q('pharm_qs_p3', 'Money', ['discount_drift_theft', 'margin_blindness'],
        'Discounts require reason codes and approval.',
        'Discounts are negotiated freely by staff.'
    ),

    // Operations (P4 Inventory/Cold Chain - or Risk? P4 is Ops in our mapping)
    q('pharm_qs_p4', 'Operations', ['cold_chain_drift', 'expiry_profit_leak'],
        'Slow movers are delisted monthly.',
        'Slow movers accumulate on shelves.'
    ),


    // --- DEEP SCAN (20 Questions - DS20) ---

    // P1 Market (Clinical Care)
    q('pharm_ds_p1_01', 'Market', ['counseling_gap'],
        'You can describe your care standard in one sentence.',
        'Standards are assumed.'
    ),
    q('pharm_ds_p1_02', 'Market', ['workflow_rush_risk'],
        'Rush-hour plan protects safety.',
        'Rush-hour plan protects speed.'
    ),
    q('pharm_ds_p1_03', 'Market', ['intervention_missed'],
        'Counseling prompts are used consistently.',
        'Counseling is improvised.'
    ),
    q('pharm_ds_p1_04', 'Market', ['privacy_void'],
        'Privacy cues exist and are used.',
        'Privacy depends on space available.'
    ),

    // P2 Innovation (Formulary & Sourcing)
    q('pharm_ds_p2_01', 'Innovation', ['supplier_reliability_gap'],
        'Suppliers are scored for reliability.',
        'Suppliers are chosen by price only.'
    ),
    q('pharm_ds_p2_02', 'Innovation', ['quarantine_failure'],
        'Quarantine is used consistently.',
        'Quarantine is ad hoc.'
    ),

    // P3 Money (Revenue Engine)
    q('pharm_ds_p3_01', 'Money', ['denial_loop', 'claim_rejection_waterfall'],
        'Claim denials are reviewed weekly.',
        'Denials are accepted as normal.'
    ),
    q('pharm_ds_p3_02', 'Money', ['costing_gap'],
        'Cost-to-price updates have a schedule.',
        'Updates happen only when noticed.'
    ),
    q('pharm_ds_p3_03', 'Money', ['basket_ethics_drift'],
        'Basket growth follows care kits.',
        'Basket growth is improvisation.'
    ),

    // P4 Operations (Inventory & Cold Chain)
    q('pharm_ds_p4_01', 'Operations', ['cold_chain_drift'],
        'Cold chain excursions are logged and actioned.',
        'Excursions are ignored or hidden.'
    ),
    q('pharm_ds_p4_02', 'Operations', ['fefo_failure', 'expiry_profit_leak'],
        'Expiry radar checks (30/60/90) are routine.',
        'Expiries are a surprise at year-end.'
    ),
    q('pharm_ds_p4_03', 'Operations', ['stock_accuracy_gap'],
        'Cycle counts happen weekly for A-items.',
        'Counts are only annual.'
    ),

    // P5 Risk (Dispensing Accuracy) - Mapped to Risk in our schema
    q('pharm_ds_p5_01', 'Risk', ['dispensing_error_rate', 'near_miss_silence'],
        'Near-misses are logged for learning.',
        'Near-misses are ignored.'
    ),
    q('pharm_ds_p5_02', 'Risk', ['workflow_rush_risk'],
        'Final verification is mandatory, even in rush.',
        'Verification is skipped when busy.'
    ),
    q('pharm_ds_p5_03', 'Risk', ['lasa_risk'],
        'LASA drugs are physically separated/marked.',
        'LASA drugs sit side-by-side.'
    ),

    // P6 Leadership (Governance) - Mapped to Leadership
    q('pharm_ds_p6_01', 'Leadership', ['audit_panic_risk', 'compliance_fatigue'],
        'Audits are routine; we are always ready.',
        'Audits are panic preparations.'
    ),
    q('pharm_ds_p6_02', 'Leadership', ['controlled_meds_gap'],
        'Controlled meds counts are 100% accurate daily.',
        'Discrepancies are tolerated.'
    ),
    q('pharm_ds_p6_03', 'Leadership', ['incident_log_gap'],
        'Incidents are reported honestly.',
        'Incidents are hidden to avoid blame.'
    ),

    // P7 People (People & QMS)
    q('pharm_ds_p7_01', 'People', ['competency_gap'],
        'Staff only do tasks they are signed-off for.',
        'Everyone attempts everything.'
    ),
    q('pharm_ds_p7_02', 'People', ['sop_fade'],
        'SOPs are trained and visual at stations.',
        'SOPs are in a binder somewhere.'
    )
];
