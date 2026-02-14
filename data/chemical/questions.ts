import { QuestionDefinition } from '../../types';

const defaultProps = {
    line_type: ['Chemical / Light Industrial Production'],
    industry: 'chemical',
    weight: 1,
    signal_tags: []
};

export const QUESTIONS: QuestionDefinition[] = [
    // 1. OPERATIONS (Process Control & Efficiency)
    {
        qid: 'chem_ops_batch_drift',
        textA: "Recipes and 'Order of Addition' are locked and printed for every batch",
        textB: "Operators adjust recipes or addition order 'by feel' or memory",
        pillar: 'Operations',
        signal_tags: ['operator_process_drift'],
        ...defaultProps
    },
    {
        qid: 'chem_ops_changeover',
        textA: "We track exact changeover cost (labor, waste, wash-out) per product",
        textB: "Changeovers are considered 'just part of the day' and not measured",
        pillar: 'Operations',
        signal_tags: ['changeover_black_hole'],
        ...defaultProps
    },
    // 2. MONEY (Costing & Yield)
    {
        qid: 'chem_money_yield',
        textA: "We reconcile Input Kg vs. Output Kg (Mass Balance) for every run",
        textB: "We only track finished goods; yield loss is invisible",
        pillar: 'Money',
        signal_tags: ['hidden_yield_loss'],
        ...defaultProps
    },
    {
        qid: 'chem_money_cogs',
        textA: "Pricing includes compliance, lab testing, and waste disposal costs",
        textB: "Pricing is based mainly on raw material cost + markup",
        pillar: 'Money',
        signal_tags: ['cogs_blindness'],
        ...defaultProps
    },
    // 3. MARKET (Trust & Channels)
    {
        qid: 'chem_market_claims',
        textA: "We keep a retained sample of every batch to defend against claims",
        textB: "We have no proof when a customer claims 'bad quality'",
        pillar: 'Market',
        signal_tags: ['claims_leakage'],
        ...defaultProps
    },
    {
        qid: 'chem_market_distribution',
        textA: "Distributors are trained/audited on storage conditions",
        textB: "Product damage in the channel is blamed on us",
        pillar: 'Market',
        signal_tags: ['channel_trust_leak'],
        ...defaultProps
    },
    // 4. RISK (Compliance & Safety)
    {
        qid: 'chem_risk_labeling',
        textA: "All labels are verified compliant (GHS/Local) and audited annually",
        textB: "Labeling is 'copy-paste' from old templates; might be non-compliant",
        pillar: 'Risk',
        signal_tags: ['label_risk_debt'],
        ...defaultProps
    },
    {
        qid: 'chem_risk_traceability',
        textA: "We can trace a raw material batch to every customer in <4 hours",
        textB: "Traceability would take days of digging through paper",
        pillar: 'Risk',
        signal_tags: ['traceability_blackout'],
        ...defaultProps
    },
    // 5. INNOVATION (R&D & SKU Mgmt)
    {
        qid: 'chem_innov_substitution',
        textA: "Alternative raw materials are validated and ready to use",
        textB: "We are single-source dependent on key ingredients",
        pillar: 'Innovation',
        signal_tags: ['substitution_risk_tax'],
        ...defaultProps
    },
    {
        qid: 'chem_innov_sku_tail',
        textA: "We regularly delist low-volume/low-margin formulas",
        textB: "We keep old formulas alive 'just in case' a customer asks",
        pillar: 'Innovation',
        signal_tags: ['sku_complexity_tax'],
        ...defaultProps
    },
    // 6. PEOPLE (Culture & Safety)
    {
        qid: 'chem_people_safety',
        textA: "Operators have 'Stop Work' authority for safety risks",
        textB: "Production speed overrides safety concerns during rush",
        pillar: 'People',
        signal_tags: ['safety_theater'],
        ...defaultProps
    },
    // 7. LEADERSHIP (Strategy)
    {
        qid: 'chem_lead_planning',
        textA: "Production is driven by a frozen plan/schedule",
        textB: "Production reacts to urgent sales calls every day",
        pillar: 'Leadership',
        signal_tags: ['panic_scheduling'],
        ...defaultProps
    }
];
