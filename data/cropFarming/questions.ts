
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- PILLAR 1: Market & Pricing Power ---
    {
        qid: 'QS_CROP_MARKET_01',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['blind_pricing', 'reactive_selling'],
        weight: 1.5,
        textA: "When a buyer calls unexpectedy, you ask for 1-2 hours, check reference prices/stock, then respond.",
        textB: "You give a price quickly so you don't lose the deal.",
        kpi_links: ['avg_selling_price', 'price_variance'],
        actions_7d: ['PRICE_INTEL_LOOP_7D'],
        actions_30d: ['PRICE_INTEL_LOOP_30D']
    },
    {
        qid: 'QS_CROP_MARKET_02',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['mixed_quality_loss'],
        weight: 1.2,
        textA: "When produce quality varies, you separate/grade quickly and sell to matching buyers.",
        textB: "You combine it so transport is easier and faster.",
        kpi_links: ['rejection_rate', 'gross_margin_crop'],
        actions_7d: ['PH_LOSS_KILL_7D'],
        actions_30d: ['PH_LOSS_KILL_30D']
    },

    // --- PILLAR 2: Crop Planning & Agronomy (Operations) ---
    {
        qid: 'QS_CROP_OPS_01',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['reactive_planting'],
        weight: 1.5,
        textA: "Before planting, you mainly decide acreage based on buyer demand + expected price + capacity.",
        textB: "You decide based on land availability + what worked last season.",
        kpi_links: ['yield_per_acre', 'gross_margin_crop'],
        actions_7d: ['CROP_PROFIT_CALC_7D'],
        actions_30d: ['CROP_PROFIT_CALC_30D']
    },
    {
        qid: 'QS_CROP_OPS_02',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['late_response_risk'],
        weight: 1.2,
        textA: "When pests appear, you scout and confirm severity before spraying.",
        textB: "You spray quickly 'before it gets worse'.",
        kpi_links: ['scouting_frequency', 'input_cost_acre'],
        actions_7d: ['RISK_PLAYBOOK_7D'],
        actions_30d: ['RISK_PLAYBOOK_30D']
    },

    // --- PILLAR 3: Input Procurement (Money) ---
    {
        qid: 'QS_CROP_MONEY_01',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['panic_buying'],
        weight: 1.5,
        textA: "When an input price rises suddenly, you compare 2-3 suppliers and adjust plan.",
        textB: "You buy immediately to avoid further rise.",
        kpi_links: ['input_cost_acre', 'budget_variance'],
        actions_7d: ['INPUT_CONTROL_7D'],
        actions_30d: ['INPUT_CONTROL_30D']
    },
    {
        qid: 'QS_CROP_MONEY_02',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['cheap_input_trap'],
        weight: 1.2,
        textA: "For chemicals/seed, you mostly choose trusted brand with predictable results.",
        textB: "You choose cheaper option 'because farming is expensive'.",
        kpi_links: ['defect_rate', 'yield_per_acre'],
        actions_7d: ['INPUT_CONTROL_7D'],
        actions_30d: ['INPUT_CONTROL_30D']
    },

    // --- PILLAR 4: Field Operations (People/Ops) ---
    {
        qid: 'QS_CROP_PEOPLE_01',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['labor_idle_waste'],
        weight: 1.5,
        textA: "When workers finish early, you redeploy them to the next priority task.",
        textB: "You keep them for standby 'in case something comes'.",
        kpi_links: ['labor_productivity', 'labor_cost_per_acre'],
        actions_7d: ['SEASON_TASK_CAL_7D'],
        actions_30d: ['SEASON_TASK_CAL_30D']
    },
    {
        qid: 'QS_CROP_PEOPLE_02',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['schedule_drift'],
        weight: 1.2,
        textA: "When a task is delayed, you adjust schedule and communicate priorities.",
        textB: "You push harder tomorrow and hope it catches up.",
        kpi_links: ['on_time_completion_rate', 'rework_rate'],
        actions_7d: ['SEASON_TASK_CAL_7D'],
        actions_30d: ['SEASON_TASK_CAL_30D']
    },

    // --- PILLAR 5: Post-Harvest (Quality) ---
    {
        qid: 'QS_CROP_QUALITY_01',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Innovation', // Mapping Quality/PH to Innovation pillar bucket for now as key differentiator
        signal_tags: ['bulk_loss'],
        weight: 1.5,
        textA: "After harvest, you sort/grade immediately and store separately.",
        textB: "You store first, sort later when selling.",
        kpi_links: ['post_harvest_loss', 'grade_distribution'],
        actions_7d: ['PH_LOSS_KILL_7D'],
        actions_30d: ['PH_LOSS_KILL_30D']
    },
    {
        qid: 'QS_CROP_QUALITY_02',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['moisture_rot_risk'],
        weight: 1.2,
        textA: "When produce is slightly wet/perishable, you prioritize fast drying/cold/shade movement.",
        textB: "You wait for transport availability and 'manage it'.",
        kpi_links: ['moisture_compliance', 'rejection_rate'],
        actions_7d: ['PH_LOSS_KILL_7D'],
        actions_30d: ['PH_LOSS_KILL_30D']
    },

    // --- PILLAR 6: Sales Logistics (Market) ---
    {
        qid: 'QS_CROP_LOGISTICS_01',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['transport_panic'],
        weight: 1.2,
        textA: "When arranging transport, you book based on planned harvest volume and timing.",
        textB: "You book when produce is already ready.",
        kpi_links: ['transport_cost_unit', 'stockout_days'],
        actions_7d: ['TRANSPORT_PAY_7D'],
        actions_30d: ['TRANSPORT_PAY_30D']
    },
    {
        qid: 'QS_CROP_LOGISTICS_02',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['trust_gap'],
        weight: 1.5,
        textA: "For weighing/records, you document weight, photos, delivery proof.",
        textB: "You rely on trust/relationship to avoid conflict.",
        kpi_links: ['weight_variance', 'dispute_rate'],
        actions_7d: ['TRANSPORT_PAY_7D'],
        actions_30d: ['TRANSPORT_PAY_30D']
    },

    // --- PILLAR 7: Finance ---
    {
        qid: 'QS_CROP_FINANCE_01',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['blind_spend'],
        weight: 1.5,
        textA: "Before spending on an input, you check if it improves yield/quality enough to justify cost.",
        textB: "You buy because 'this is how farming is done'.",
        kpi_links: ['cost_per_unit', 'gross_margin_crop'],
        actions_7d: ['CROP_PROFIT_CALC_7D'],
        actions_30d: ['CROP_PROFIT_CALC_30D']
    },
    {
        qid: 'QS_CROP_FINANCE_02',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['universal_cuts'],
        weight: 1.2,
        textA: "When cash is tight, you adjust plan and protect high-return activities.",
        textB: "You cut costs across the board evenly.",
        kpi_links: ['budget_variance', 'yield_per_acre'],
        actions_7d: ['CROP_PROFIT_CALC_7D'],
        actions_30d: ['CROP_PROFIT_CALC_30D']
    },

    // --- PILLAR 8: Risk ---
    {
        qid: 'QS_CROP_RISK_01',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['weather_blindness'],
        weight: 1.5,
        textA: "When weather patterns change, you adjust planting/operations schedule based on observations.",
        textB: "You keep the plan and 'push through'.",
        kpi_links: ['weather_loss_impact', 'on_time_completion_rate'],
        actions_7d: ['RISK_PLAYBOOK_7D'],
        actions_30d: ['RISK_PLAYBOOK_30D']
    },
    {
        qid: 'QS_CROP_RISK_02',
        industry: 'crop_farming',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['memory_management'],
        weight: 1.2,
        textA: "For record keeping, you record daily (even short notes).",
        textB: "You record when something major happens.",
        kpi_links: ['incident_count', 'rework_rate'],
        actions_7d: ['RISK_PLAYBOOK_7D'],
        actions_30d: ['RISK_PLAYBOOK_30D']
    },


    // --- DEEP SCAN QUESTIONS (10 Pillars mapped) ---
    // P1: Market
    { qid: 'DS_CROP_P1_01', industry: 'crop_farming', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I anchor using reference market + my costs", textB: "I anchor using 'what others are offering'", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P1_02', industry: 'crop_farming', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I avoid reliance by rotating buyers", textB: "I stick to whoever pays today", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P1_03', industry: 'crop_farming', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I use simple terms (volume, price, time)", textB: "I keep it informal to stay flexible", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P2: Operations (Agronomy)
    { qid: 'DS_CROP_P2_01', industry: 'crop_farming', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "I verify authenticity/lot and store properly", textB: "I buy what's available and plant fast", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P2_02', industry: 'crop_farming', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "I base fertility on tests/field history", textB: "I base fertility on 'standard practice'", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P3: Money (Procurement)
    { qid: 'DS_CROP_P3_01', industry: 'crop_farming', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "I buy based on a bill-of-materials plan", textB: "I buy when a need appears", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P3_02', industry: 'crop_farming', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "Only if repayment plan is clear", textB: "if it reduces today's pressure", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P4: People (Execution)
    { qid: 'DS_CROP_P4_01', industry: 'crop_farming', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "weekly plan with dates", textB: "daily decisions in the morning", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P4_02', industry: 'crop_farming', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "spot checks and field walk-throughs", textB: "trust workers to deliver", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P5: Innovation (Post-Harvest)
    { qid: 'DS_CROP_P5_01', industry: 'crop_farming', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "I measure/verify", textB: "I judge by feel/experience", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P5_02', industry: 'crop_farming', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "I use controlled drying steps", textB: "I dry wherever there is space", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P6: Logistics
    { qid: 'DS_CROP_P6_01', industry: 'crop_farming', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "costed and planned", textB: "negotiated last minute", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P6_02', industry: 'crop_farming', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "pre-agreed terms", textB: "discovered after sale", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P7: Finance
    { qid: 'DS_CROP_P7_01', industry: 'crop_farming', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "I track costs by plot/crop", textB: "I track costs in my head", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P7_02', industry: 'crop_farming', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "monthly plan", textB: "flexible spending", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P8: Risk
    { qid: 'DS_CROP_P8_01', industry: 'crop_farming', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "thresholds and routine scouting", textB: "action when damage shows", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CROP_P8_02', industry: 'crop_farming', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "checklist-based tasks", textB: "experience-based tasks", kpi_links: [], actions_7d: [], actions_30d: [] }
];
