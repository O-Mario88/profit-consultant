import { QuestionDefinition } from '../../types';

export const CROP_FARMING_QUESTIONS: QuestionDefinition[] = [
    // --- QUICK SCAN ---
    // 1. Market & Sales -> Market
    {
        qid: 'QS_CROP_MARKET_1',
        pillar: 'Market',
        industry: 'crop_farming',
        weight: 1,
        textA: "We check prices from 2–3 sources before selling.",
        textB: "We sell to whoever comes first.",
        line_type: ['Farming'],
        signal_tags: ['market_sales_revenue']
    },
    {
        qid: 'QS_CROP_MARKET_2',
        pillar: 'Market',
        industry: 'crop_farming',
        weight: 1,
        textA: "We separate grades and price differently.",
        textB: "We sell mixed quality at one price.",
        line_type: ['Farming'],
        signal_tags: ['market_sales_revenue']
    },

    // 2. Production & Agronomy -> Operations
    {
        qid: 'QS_CROP_OPS_1',
        pillar: 'Operations',
        industry: 'crop_farming',
        weight: 1,
        textA: "We follow a weekly crop calendar.",
        textB: "We decide tasks day-by-day.",
        line_type: ['Farming'],
        signal_tags: ['production_agronomy_yield']
    },
    {
        qid: 'QS_CROP_OPS_2',
        pillar: 'Operations',
        industry: 'crop_farming',
        weight: 1,
        textA: "We scout pests weekly.",
        textB: "We act when damage is visible.",
        line_type: ['Farming'],
        signal_tags: ['production_agronomy_yield']
    },

    // 3. Post-Harvest & Storage -> Operations
    {
        qid: 'QS_CROP_POSTH_1',
        pillar: 'Operations',
        industry: 'crop_farming',
        weight: 1,
        textA: "We measure moisture before storage.",
        textB: "We judge dryness by feel/time.",
        line_type: ['Farming'],
        signal_tags: ['post_harvest_loss_control']
    },
    {
        qid: 'QS_CROP_POSTH_2',
        pillar: 'Operations',
        industry: 'crop_farming',
        weight: 1,
        textA: "We track storage shrinkage.",
        textB: "We only notice losses when stock is low.",
        line_type: ['Farming'],
        signal_tags: ['post_harvest_loss_control']
    },

    // 4. Inputs & Procurement -> Money
    {
        qid: 'QS_CROP_INPUTS_1',
        pillar: 'Money',
        industry: 'crop_farming',
        weight: 1,
        textA: "We buy most inputs pre-season.",
        textB: "We buy when we run out.",
        line_type: ['Farming'],
        signal_tags: ['inputs_procurement_cost']
    },
    {
        qid: 'QS_CROP_INPUTS_2',
        pillar: 'Money',
        industry: 'crop_farming',
        weight: 1,
        textA: "We verify seed/chemicals source.",
        textB: "We buy based on cheapest availability.",
        line_type: ['Farming'],
        signal_tags: ['inputs_procurement_cost']
    },

    // 5. Finance & Cashflow -> Money
    {
        qid: 'QS_CROP_FIN_1',
        pillar: 'Money',
        industry: 'crop_farming',
        weight: 1,
        textA: "We know cost per kg for our top crop.",
        textB: "We price based on market talk.",
        line_type: ['Farming'],
        signal_tags: ['finance_cashflow_survival']
    },
    {
        qid: 'QS_CROP_FIN_2',
        pillar: 'Money',
        industry: 'crop_farming',
        weight: 1,
        textA: "We keep farm money separate from home.",
        textB: "It’s all one wallet.",
        line_type: ['Farming'],
        signal_tags: ['finance_cashflow_survival']
    },

    // 6. People & Productivity -> People
    {
        qid: 'QS_CROP_PEOPLE_1',
        pillar: 'People',
        industry: 'crop_farming',
        weight: 1,
        textA: "Workers have targets (acres/day, crates/hour).",
        textB: "We just 'push' when late.",
        line_type: ['Farming'],
        signal_tags: ['people_labor_productivity']
    },
    {
        qid: 'QS_CROP_PEOPLE_2',
        pillar: 'People',
        industry: 'crop_farming',
        weight: 1,
        textA: "Quality is part of incentives.",
        textB: "Incentives focus on speed only.",
        line_type: ['Farming'],
        signal_tags: ['people_labor_productivity']
    },

    // 7. Systems & Data -> Innovation
    {
        qid: 'QS_CROP_SYS_1',
        pillar: 'Innovation',
        industry: 'crop_farming',
        weight: 1,
        textA: "We write down field activities and sales.",
        textB: "We rely on memory.",
        line_type: ['Farming'],
        signal_tags: ['systems_records_data']
    },
    {
        qid: 'QS_CROP_SYS_2',
        pillar: 'Innovation',
        industry: 'crop_farming',
        weight: 1,
        textA: "We review numbers weekly.",
        textB: "We review when there’s a problem.",
        line_type: ['Farming'],
        signal_tags: ['systems_records_data']
    },

    // 8. Risk & Resilience -> Innovation
    {
        qid: 'QS_CROP_RISK_1',
        pillar: 'Innovation',
        industry: 'crop_farming',
        weight: 1,
        textA: "We have a plan for drought/flood timing.",
        textB: "We just 'hope' the season behaves.",
        line_type: ['Farming'],
        signal_tags: ['risk_compliance_resilience']
    },
    {
        qid: 'QS_CROP_RISK_2',
        pillar: 'Innovation',
        industry: 'crop_farming',
        weight: 1,
        textA: "We apply IPM principles to reduce risk.",
        textB: "We mostly depend on chemical spraying.",
        line_type: ['Farming'],
        signal_tags: ['risk_compliance_resilience']
    }
];
