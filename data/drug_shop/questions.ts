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
    // P1 Market (Safe Advice - Trust)
    q('drugshop_qs_p1', 'Market', ['referral_gap', 'boundary_drift'],
        'Referral rules are clear and followed.',
        'Referral is inconsistent.'
    ),
    // P4 Operations (Inventory - Expiry)
    q('drugshop_qs_p4', 'Operations', ['fefo_ignore', 'expiry_profit_leak'],
        'Near-expiry is reviewed weekly.',
        'Near-expiry is noticed when it’s too late.'
    ),
    // P2 Innovation (Assortment - Sourcing) - Mapped to Innovation pillar for scoring balance
    q('drugshop_qs_p2', 'Innovation', ['essential_stockout', 'dead_stock_trap'],
        'Reordering follows a short essentials list + min/max.',
        'Reordering follows "what looks low + what suppliers offer".'
    ),
    // P3 Money (Pricing - Discipline)
    q('drugshop_qs_p3', 'Money', ['discount_drift_smile', 'pricing_confusion'],
        'Discounts require a reason code + limit.',
        'Discounts are flexible to "keep customers".'
    ),

    // --- DEEP SCAN (20 Questions - DS20) ---

    // P1 Market (Triage & Referral)
    q('drugshop_ds_p1_01', 'Market', ['red_flag_miss'],
        'Staff know red-flag triggers by heart.',
        'Staff rely on guessing.'
    ),
    q('drugshop_ds_p1_02', 'Market', ['boundary_drift'],
        'Boundary script is practiced.',
        'Boundary script is avoided.'
    ),
    q('drugshop_ds_p1_03', 'Market', ['privacy_breach'],
        'Privacy cues exist (space/queue rules).',
        'Privacy depends on timing.'
    ),
    q('drugshop_ds_p1_04', 'Market', ['action_closure_gap'],
        'Repeat issues trigger fixes.',
        'Repeat issues trigger reminders.'
    ),

    // P2 Innovation (Assortment & Sourcing)
    q('drugshop_ds_p2_01', 'Innovation', ['essential_stockout'],
        'Essentials list is visible and followed.',
        'Essentials exist "in people’s heads".'
    ),
    q('drugshop_ds_p2_02', 'Innovation', ['supplier_reliability_gap'],
        'Supplier reliability is tracked/scored.',
        'Supplier performance is assumed.'
    ),
    q('drugshop_ds_p2_03', 'Innovation', ['cash_trap_slow_movers'],
        'Slow movers are reviewed weekly/monthly.',
        'Slow movers are ignored until expiry risk.'
    ),
    q('drugshop_ds_p2_04', 'Innovation', ['counterfeit_risk_gap'],
        'Receiving checks pack integrity before shelving.',
        'Issues are noticed later.'
    ),

    // P3 Money (Pricing & Disc)
    q('drugshop_ds_p3_01', 'Money', ['pricing_confusion'],
        'Price labels match POS perfectly.',
        'Prices surprise customers.'
    ),
    q('drugshop_ds_p3_02', 'Money', ['discount_drift_smile'],
        'Discounts require a reason code.',
        'Discounts are "just customer care".'
    ),
    q('drugshop_ds_p3_03', 'Money', ['ethical_basket_void'],
        'Bundles match real needs (first aid, hygiene).',
        'Bundles chase sales pressure.'
    ),
    q('drugshop_ds_p3_04', 'Money', ['price_override_bleed'],
        'Overrides are reviewed weekly.',
        'Overrides are invisible.'
    ),

    // P4 Operations (Inventory & Expiry)
    q('drugshop_ds_p4_01', 'Operations', ['fefo_ignore'],
        'FEFO is enforced daily.',
        'FEFO happens when remembered.'
    ),
    q('drugshop_ds_p4_02', 'Operations', ['expiry_profit_leak'],
        'Near-expiry has action options (markdown/return).',
        'Near-expiry just sits.'
    ),
    q('drugshop_ds_p4_03', 'Operations', ['stock_accuracy_gap'],
        'Stock counts identify ghosts/variances.',
        'Variances are ignored.'
    ),
    q('drugshop_ds_p4_04', 'Operations', ['returns_fraud_gap'],
        'Returns go to quarantine first.',
        'Returns go back to shelf if "looks okay".'
    ),

    // P5 Leadership (Service Workflow - Mapped to Leadership)
    q('drugshop_ds_p5_01', 'Leadership', ['3_point_check_fail'],
        'A simple check routine (3-point) is used.',
        'Everyone "does their own way".'
    ),
    q('drugshop_ds_p5_02', 'Leadership', ['lasa_mixup'],
        'Look-alike items have separation rules.',
        'Look-alike items are mixed.'
    ),
    q('drugshop_ds_p5_03', 'Leadership', ['service_rush_error'],
        'Rush-hour plan exists (roles split).',
        'Rush-hour survival happens.'
    ),
    q('drugshop_ds_p5_04', 'Leadership', ['complaint_loop_gap'],
        'Complaints feed a fix loop.',
        'Complaints end after apology.'
    ),

    // P6 Risk (Compliance & Controls - Mapped to Risk)
    q('drugshop_ds_p6_01', 'Risk', ['cash_variance_daily'],
        'Cash is reconciled daily with log.',
        'Cash is counted informally.'
    ),
    q('drugshop_ds_p6_02', 'Risk', ['refund_leakage'],
        'Refunds require verification + approval.',
        'Refunds are handled by whoever served.'
    ),
    q('drugshop_ds_p6_03', 'Risk', ['invoice_mismatch_gap'],
        'Invoices are matched to receiving before payment.',
        'Invoices are paid on trust.'
    ),
    q('drugshop_ds_p6_04', 'Risk', ['license_scope_risk'],
        'Restricted items have stricter rules.',
        'Rules are the same for everything.'
    ),

    // P7 People (Training - Mapped to People)
    q('drugshop_ds_p7_01', 'People', ['competency_gap'],
        'Skills coverage is clear (who can do what).',
        'Everyone guesses at tasks.'
    ),
    q('drugshop_ds_p7_02', 'People', ['training_shadow_only'],
        'Training includes observation sign-off.',
        'Training is shadowing only.'
    ),
    q('drugshop_ds_p7_03', 'People', ['sop_fade'],
        'SOP cards are visible at workstations.',
        'SOPs are in a file.'
    ),
    q('drugshop_ds_p7_04', 'People', ['action_closure_gap'],
        'Fixes are tracked to closure.',
        'Fixes fade after discussion.'
    )
];
