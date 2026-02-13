
import { QuestionDefinition } from "../../types/report";

export const PRODUCE_AGGREGATION_QUESTIONS: QuestionDefinition[] = [
    // --- P1: Sourcing & Supplier Control (Operations) ---
    {
        qid: 'PA_OPS_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['sourcing_weakness'],
        weight: 1,
        textA: "We buy based on what shows up today; sourcing is reactive.",
        textB: "We buy based on a weekly volume plan."
    },
    {
        qid: 'PA_OPS_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['blind_pricing'],
        weight: 1,
        textA: "Prices are negotiated case-by-case at the gate.",
        textB: "Supplier prices follow a defined reference rule."
    },
    {
        qid: 'PA_OPS_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['cashflow_crunch'],
        weight: 1,
        textA: "We often pay advances to secure loads without verification.",
        textB: "Payments happen only after verification."
    },
    {
        qid: 'PA_OPS_04',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['yield_bleed'],
        weight: 1,
        textA: "We track only total bought; we don't know usable yield per supplier.",
        textB: "We track usable yield from every supplier."
    },
    {
        qid: 'PA_OPS_05',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['panic_buying'],
        weight: 1,
        textA: "Buying expands indefinitely if supply appears.",
        textB: "We cap daily buying per commodity."
    },
    {
        qid: 'PA_OPS_06',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['supplier_selection_undisciplined'],
        weight: 1,
        textA: "All suppliers are treated the same.",
        textB: "We have supplier tiers (A/B/C)."
    },
    {
        qid: 'PA_OPS_07',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['mixed_quality_loss'],
        weight: 1,
        textA: "We accept mixed lots and sort later.",
        textB: "We penalize mixed lots at intake."
    },
    {
        qid: 'PA_OPS_08',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['weight_slip_drift'],
        weight: 1,
        textA: "We often rely on supplier weights.",
        textB: "We verify every weight using calibrated scales."
    },
    // --- P2: Quality (Innovation/Standardization) ---
    {
        qid: 'PA_INN_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Innovation',
        signal_tags: ['quality_weakness'],
        weight: 1,
        textA: "Sampling happens after unloading to save time.",
        textB: "Every load is sampled before unloading."
    },
    {
        qid: 'PA_INN_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Innovation',
        signal_tags: ['quality_definition_gap'],
        weight: 1,
        textA: "Grades live 'in the head' of the grader.",
        textB: "Grades are defined, posted, and visual."
    },
    {
        qid: 'PA_INN_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Innovation',
        signal_tags: ['claims_leakage'],
        weight: 1,
        textA: "Claims are handled flexibly based on relationship.",
        textB: "Claims require evidence within a fixed window."
    },
    {
        qid: 'PA_INN_04',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Innovation',
        signal_tags: ['no_records'],
        weight: 1,
        textA: "Tests are done 'when necessary'.",
        textB: "Tests (moisture/temp/brix) are always logged."
    },
    {
        qid: 'PA_INN_05',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Innovation',
        signal_tags: ['quality_trust_gap'],
        weight: 1,
        textA: "Sampling varies by staff member.",
        textB: "Sampling method is standardized."
    },
    // --- P3: Logistics (Operations) ---
    {
        qid: 'PA_OPS_LOG_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['dispatch_chaos'],
        weight: 1,
        textA: "Dispatch is 'first ready, first out'.",
        textB: "Dispatch is scheduled centrally."
    },
    {
        qid: 'PA_OPS_LOG_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['expiry_rotation_gap'],
        weight: 1,
        textA: "Stock moves based on convenience.",
        textB: "FIFO/FEFO is strictly enforced."
    },
    {
        qid: 'PA_OPS_LOG_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['logistics_black_hole'],
        weight: 1,
        textA: "We use whoever is available for transport.",
        textB: "Transporters are scored on performance."
    },
    {
        qid: 'PA_OPS_LOG_04',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['queue_to_rot_lag'],
        weight: 1,
        textA: "We don't measure waiting time.",
        textB: "Dwell time is tracked and minimized."
    },
    // --- P4: Sales (Market) ---
    {
        qid: 'PA_MKT_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Market',
        signal_tags: ['sales_weakness'],
        weight: 1,
        textA: "We sell to whoever pays fastest.",
        textB: "We have target channels and buyer profiles."
    },
    {
        qid: 'PA_MKT_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Market',
        signal_tags: ['stockout_tax'],
        weight: 1,
        textA: "We focus on total volume sold.",
        textB: "Fill rate (order fulfillment %) is monitored."
    },
    {
        qid: 'PA_MKT_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Market',
        signal_tags: ['spec_drift_discount'],
        weight: 1,
        textA: "Specs are 'learned over time'.",
        textB: "Buyer specs are documented and signed."
    },
    {
        qid: 'PA_MKT_04',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Market',
        signal_tags: ['reactive_selling'],
        weight: 1,
        textA: "We rely on repeat calls.",
        textB: "We maintain a sales pipeline."
    },
    // --- P5: Pricing (Money) ---
    {
        qid: 'PA_MON_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['pricing_weakness'],
        weight: 1,
        textA: "We price from market mood.",
        textB: "We price from landed cost + margin rule."
    },
    {
        qid: 'PA_MON_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['discounting_leak'],
        weight: 1,
        textA: "Discounts are used to close quickly.",
        textB: "Discounts require approval/reason codes."
    },
    {
        qid: 'PA_MON_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['shrink_tax'],
        weight: 1,
        textA: "Shrink is treated as 'bad luck'.",
        textB: "Shrink is priced into deals."
    },
    {
        qid: 'PA_MON_04',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['margin_mirage'],
        weight: 1,
        textA: "Margin is checked monthly.",
        textB: "Margin is tracked per order."
    },
    // --- P6: Cashflow (Money) ---
    {
        qid: 'PA_MON_CASH_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['cash_gap_trap'],
        weight: 1,
        textA: "Invoicing happens when accounts gets time.",
        textB: "Invoicing is same-day."
    },
    {
        qid: 'PA_MON_CASH_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['credit_chokehold'],
        weight: 1,
        textA: "Credit is relationship-based.",
        textB: "Credit limits exist and are enforced."
    },
    {
        qid: 'PA_MON_CASH_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['bad_debt'],
        weight: 1,
        textA: "Collections happen when cash is tight.",
        textB: "Collections have a weekly cadence."
    },
    {
        qid: 'PA_MON_CASH_04',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['cashflow_crunch'],
        weight: 1,
        textA: "We react to shortages.",
        textB: "We forecast cash weekly."
    },
    // --- P7: Inventory (Operations) ---
    {
        qid: 'PA_OPS_INV_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['inventory_blindspot'],
        weight: 1,
        textA: "We trust intake weight only.",
        textB: "We reconcile weights at 3 points (intake, process, dispatch)."
    },
    {
        qid: 'PA_OPS_INV_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['stockout_tax'],
        weight: 1,
        textA: "Stock is counted when problems appear.",
        textB: "Cycle counts are routine."
    },
    {
        qid: 'PA_OPS_INV_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['waste_not_costed'],
        weight: 1,
        textA: "Rework is informal.",
        textB: "Rework is measured and tracked."
    },
    // --- P8: People (People) ---
    {
        qid: 'PA_PPL_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'People',
        signal_tags: ['fraud_control'],
        weight: 1,
        textA: "One person can buy and pay.",
        textB: "Roles are separated (buying vs paying)."
    },
    {
        qid: 'PA_PPL_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'People',
        signal_tags: ['no_kpi_ownership'],
        weight: 1,
        textA: "KPIs are reviewed 'when needed'.",
        textB: "KPIs are reviewed weekly."
    },
    {
        qid: 'PA_PPL_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'People',
        signal_tags: ['incentive_misalignment'],
        weight: 1,
        textA: "Incentives reward volume only.",
        textB: "Incentives reward margin + compliance."
    },
    // --- P9: Compliance (Risk) ---
    {
        qid: 'PA_RISK_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Risk',
        signal_tags: ['traceability_gap'],
        weight: 1,
        textA: "Lot codes are optional on busy days.",
        textB: "Lot codes are mandatory."
    },
    {
        qid: 'PA_RISK_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Risk',
        signal_tags: ['rejection_shock'],
        weight: 1,
        textA: "We'd need 'some time' to investigate a bad batch.",
        textB: "We can isolate a bad batch quickly."
    },
    {
        qid: 'PA_RISK_03',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Risk',
        signal_tags: ['contract_exposure'],
        weight: 1,
        textA: "Disputes are negotiated each time.",
        textB: "Contracts define dispute steps."
    },
    {
        qid: 'PA_RISK_04',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Risk',
        signal_tags: ['doc_delay_penalty'],
        weight: 1,
        textA: "Docs are fixed after shipment.",
        textB: "Documentation is checked pre-shipment."
    }
];
