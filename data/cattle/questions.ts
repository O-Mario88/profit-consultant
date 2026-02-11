
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- PILLAR 1: Market & Pricing Power (Market) ---
    {
        qid: 'QS_CATTLE_MARKET_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['blind_pricing', 'reactive_selling'],
        weight: 1.5,
        textA: "When a buyer calls for animals, you usually ask for time to check weights/condition and compare prices.",
        textB: "You negotiate quickly based on 'how the animal looks today'.",
        kpi_links: ['avg_selling_price', 'price_variance'],
        actions_7d: ['WEIGHT_GRADE_7D'],
        actions_30d: ['WEIGHT_GRADE_30D']
    },
    {
        qid: 'QS_CATTLE_MARKET_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['distress_sale_pct', 'cashflow_visibility_gap'],
        weight: 1.5,
        textA: "When cash is tight, you sell specific animals that meet targets or are strategic to exit.",
        textB: "You sell whichever animals are easiest to catch and move.",
        kpi_links: ['distress_sale_pct', 'gross_margin_crop'],
        actions_7d: ['WEIGHT_GRADE_7D'],
        actions_30d: ['WEIGHT_GRADE_30D']
    },

    // --- PILLAR 2: Herd Strategy & Production Plan (Leadership) ---
    {
        qid: 'QS_CATTLE_STRATEGY_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['weak_goal_alignment', 'priority_whiplash'],
        weight: 1.5,
        textA: "When you add animals, you mainly decide based on feed capacity + herd structure needs.",
        textB: "You decide based on good price/opportunity when animals appear.",
        kpi_links: ['stocking_rate', 'herd_composition'],
        actions_7d: ['STABILIZE_PROFIT_7D'],
        actions_30d: ['BUILD_CONTROL_30D']
    },
    {
        qid: 'QS_CATTLE_STRATEGY_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['memory_management', 'culling_drift'],
        weight: 1.2,
        textA: "When an animal underperforms, you assess cause and set a time-bound fix or cull rule.",
        textB: "You keep it and hope it improves over time.",
        kpi_links: ['culling_rate', 'avg_daily_gain'],
        actions_7d: ['STABILIZE_PROFIT_7D'],
        actions_30d: ['BUILD_CONTROL_30D']
    },

    // --- PILLAR 3: Feeding & Grazing Economics (Operations/Money) ---
    {
        qid: 'QS_CATTLE_FEED_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['feed_waste', 'drought_panic'],
        weight: 1.5,
        textA: "In dry season, you usually have planned hay/silage/forage reserves.",
        textB: "You rely on buying feed when conditions get tough.",
        kpi_links: ['dry_season_loss_pct', 'feed_cost_head'],
        actions_7d: ['FEED_GAP_PLAN_7D'],
        actions_30d: ['FEED_GAP_PLAN_30D']
    },
    {
        qid: 'QS_CATTLE_FEED_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['blind_feeding', 'yield_bleed'],
        weight: 1.5,
        textA: "When animals lose condition, you adjust feed by category/stage and monitor BCS.",
        textB: "You increase general feeding for the whole herd.",
        kpi_links: ['body_condition_score', 'feed_conversion'],
        actions_7d: ['FEED_GAP_PLAN_7D'],
        actions_30d: ['FEED_GAP_PLAN_30D']
    },

    // --- PILLAR 4: Animal Health & Biosecurity (Risk) ---
    {
        qid: 'QS_CATTLE_HEALTH_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['disease_blindspot', 'quarantine_gap'],
        weight: 1.5,
        textA: "When a new animal arrives, you usually isolate and observe before mixing.",
        textB: "You mix quickly so it 'settles with others'.",
        kpi_links: ['morbidity_rate', 'outbreak_response_time'],
        actions_7d: ['HEALTH_CALENDAR_7D'],
        actions_30d: ['HEALTH_CALENDAR_30D']
    },
    {
        qid: 'QS_CATTLE_HEALTH_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['late_response_risk', 'mortality_blindness'],
        weight: 1.2,
        textA: "When an animal looks slightly sick, you monitor temp/appetite and act early.",
        textB: "You wait a day or two to see if it improves.",
        kpi_links: ['mortality_rate', 'treatment_success_rate'],
        actions_7d: ['HEALTH_CALENDAR_7D'],
        actions_30d: ['HEALTH_CALENDAR_30D']
    },

    // --- PILLAR 5: Breeding, Calving & Youngstock (Innovation/Growth) ---
    {
        qid: 'QS_CATTLE_BREED_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['fertility_gap', 'decision_bottleneck'],
        weight: 1.5,
        textA: "When a cow doesn't conceive, you investigate and set a decision timeline (treat/rebreed/cull).",
        textB: "You keep trying again next cycle without a deadline.",
        kpi_links: ['calving_interval', 'conception_rate'],
        actions_7d: ['CALVING_SURVIVAL_7D'],
        actions_30d: ['CALVING_SURVIVAL_30D']
    },
    {
        qid: 'QS_CATTLE_BREED_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['calf_mortality_risk', 'future_profit_leak'],
        weight: 1.5,
        textA: "For newborn calves, you mostly focus first on colostrum + hygiene + warmth.",
        textB: "Letting it stay with the cow and 'nature does the rest'.",
        kpi_links: ['calf_mortality_pct', 'weaning_weight'],
        actions_7d: ['CALVING_SURVIVAL_7D'],
        actions_30d: ['CALVING_SURVIVAL_30D']
    },

    // --- PILLAR 6: Operations, Labor & Asset Uptime (People) ---
    {
        qid: 'QS_CATTLE_OPS_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['routine_drift', 'reactive_maintenance'],
        weight: 1.5,
        textA: "When routines are disrupted, you adjust schedule and protect critical tasks first.",
        textB: "You do tasks when time allows and catch up later.",
        kpi_links: ['routine_compliance', 'labor_cost_head'],
        actions_7d: ['ROUTINE_DISCIPLINE_7D'],
        actions_30d: ['ROUTINE_DISCIPLINE_30D']
    },
    {
        qid: 'QS_CATTLE_OPS_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['stress_handling_loss', 'injury_risk'],
        weight: 1.2,
        textA: "When animals are hard to handle, you improve facilities/techniques to reduce stress.",
        textB: "You use more force/manpower to get it done quickly.",
        kpi_links: ['injury_rate', 'asset_uptime'],
        actions_7d: ['ROUTINE_DISCIPLINE_7D'],
        actions_30d: ['ROUTINE_DISCIPLINE_30D']
    },

    // --- PILLAR 7: Finance, Cashflow & Unit Economics (Money) ---
    {
        qid: 'QS_CATTLE_FINANCE_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['blind_spend', 'roi_blindspot'],
        weight: 1.5,
        textA: "When you plan spending, you prioritize what improves fertility/growth/milk efficiently.",
        textB: "You spread money across many needs so everything gets something.",
        kpi_links: ['cost_per_head', 'gross_margin_animal'],
        actions_7d: ['STABILIZE_PROFIT_7D'],
        actions_30d: ['BUILD_CONTROL_30D']
    },
    {
        qid: 'QS_CATTLE_FINANCE_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['universal_cuts', 'cashflow_crunch'],
        weight: 1.5,
        textA: "When cash is short, you delay non-critical costs and protect production drivers.",
        textB: "You cut costs evenly (including feed/health).",
        kpi_links: ['budget_variance', 'debt_service_ratio'],
        actions_7d: ['STABILIZE_PROFIT_7D'],
        actions_30d: ['BUILD_CONTROL_30D']
    },

    // --- PILLAR 8: Risk, Resilience & Management Systems (Risk) ---
    {
        qid: 'QS_CATTLE_RISK_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['drought_panic', 'panic_selling'],
        weight: 1.5,
        textA: "During drought signals, you usually reduce pressure early (destock, reserve feed, plan water).",
        textB: "You wait and react when pasture is finished.",
        kpi_links: ['drought_feed_days', 'distress_sale_pct'],
        actions_7d: ['THEFT_MOVEMENT_7D'],
        actions_30d: ['THEFT_MOVEMENT_30D']
    },
    {
        qid: 'QS_CATTLE_RISK_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['memory_management', 'data_blindspot'],
        weight: 1.2,
        textA: "For records, you update weekly/monthly at minimum.",
        textB: "You update only when selling or vaccinating.",
        kpi_links: ['record_completeness', 'loss_incidents'],
        actions_7d: ['THEFT_MOVEMENT_7D'],
        actions_30d: ['THEFT_MOVEMENT_30D']
    },


    // --- DEEP SCAN QUESTIONS ---
    // P1: Market
    { qid: 'DS_CATTLE_P1_01', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I price using weight/grade bands", textB: "I price using 'market rumors'", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P1_02', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I plan sales around target finish dates", textB: "I sell when pressure comes", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P1_03', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I maintain multiple buyers", textB: "I stick to one trusted buyer", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P1_04', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I separate by category/condition", textB: "I sell mixed lots", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P1_05', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "anchored on metrics (kg/BCS)", textB: "anchored on relationship", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P2: Herd Strategy (Leadership)
    { qid: 'DS_CATTLE_P2_01', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "clear production plan", textB: "mixed goals depending on season", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P2_02', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "planned heifer pipeline", textB: "replace when a cow dies/sold", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P2_03', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "screened + quarantined", textB: "bought on trust/appearance", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P2_04', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "selected for traits (fertility, growth)", textB: "selected for size/looks", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P3: Feeding (Operations)
    { qid: 'DS_CATTLE_P3_01', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "rotational plan", textB: "open grazing", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P3_02', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "feed reserve strategy", textB: "emergency buying", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P3_03', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "consistent mineral program", textB: "occasional salts", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P3_04', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "guaranteed access", textB: "access depends on weather", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P4: Health (Risk)
    { qid: 'DS_CATTLE_P4_01', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "prevention schedule", textB: "treat when needed", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P4_02', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "mandatory quarantine", textB: "optional quarantine", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P4_03', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "correct dose + full course", textB: "adjust dose to save money", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P4_04', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "treatment log", textB: "memory-based", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P5: Breeding (Innovation)
    { qid: 'DS_CATTLE_P5_01', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "routine observation schedule", textB: "notice when it happens", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P5_02', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "breeding log", textB: "memory", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P5_03', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "controlled breeding", textB: "bulls run freely", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P5_04', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "BCS targets", textB: "general feeding", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P6: Operations/People
    { qid: 'DS_CATTLE_P6_01', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "stage-based groups", textB: "mixed herd mostly", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P6_02', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "low-stress handling", textB: "fast handling", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P6_03', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "preventive maintenance", textB: "repair after breakdown", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P7: Finance (Money)
    { qid: 'DS_CATTLE_P7_01', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "costs tracked by category", textB: "totals only", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P7_02', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "profit per head", textB: "herd size", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P7_03', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "borrow with repayment plan", textB: "borrow to survive", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P8: Risk
    { qid: 'DS_CATTLE_P8_01', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "tagged and tracked", textB: "known by appearance", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P8_02', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "movement logged", textB: "informal", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_CATTLE_P8_03', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "forage reserves", textB: "buying feed later", kpi_links: [], actions_7d: [], actions_30d: [] }
];
