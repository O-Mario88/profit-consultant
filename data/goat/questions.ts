
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- PILLAR 1: Market & Pricing Power (Market) ---
    {
        qid: 'QS_GOAT_MARKET_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['blind_pricing', 'reactive_selling'],
        weight: 1.5,
        textA: "When a buyer calls, you usually check your best-ready goats and compare prices first.",
        textB: "You usually pick whichever goats are easiest to catch and sell.",
        kpi_links: ['avg_selling_price', 'price_variance'],
        actions_7d: ['MARKET_GRADE_7D'],
        actions_30d: ['MARKET_GRADE_30D']
    },
    {
        qid: 'QS_GOAT_MARKET_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['distress_sale_pct', 'cashflow_visibility_gap'],
        weight: 1.5,
        textA: "When prices are low, you usually hold goats that are still gaining and sell strategic categories.",
        textB: "You sell anyway because 'cash is cash'.",
        kpi_links: ['distress_sale_pct', 'days_harvest_to_cash'],
        actions_7d: ['MARKET_GRADE_7D'],
        actions_30d: ['MARKET_GRADE_30D']
    },

    // --- PILLAR 2: Herd Strategy & Production Plan (Leadership) ---
    {
        qid: 'QS_GOAT_STRATEGY_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['herd_structure_gap', 'overstocking_risk'],
        weight: 1.5,
        textA: "When you add goats, you decide mainly based on feed capacity + herd structure needs.",
        textB: "You decide based on cheap price or availability.",
        kpi_links: ['stocking_pressure_index', 'herd_composition'],
        actions_7d: ['HERD_CULL_7D'],
        actions_30d: ['HERD_CULL_30D']
    },
    {
        qid: 'QS_GOAT_STRATEGY_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['culling_drift', 'unproductive_stock'],
        weight: 1.2,
        textA: "When a doe repeatedly underperforms, you usually set a time-bound fix or cull rule.",
        textB: "You keep her because 'she might improve'.",
        kpi_links: ['culling_rate', 'barren_doe_rate'],
        actions_7d: ['HERD_CULL_7D'],
        actions_30d: ['HERD_CULL_30D']
    },

    // --- PILLAR 3: Feeding & Browse Economics (Operations/Money) ---
    {
        qid: 'QS_GOAT_FEED_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['drought_panic', 'feed_waste'],
        weight: 1.5,
        textA: "In dry season, you mostly depend on prepared forage/reserves + planned supplements.",
        textB: "You rely on buying feed when the situation becomes bad.",
        kpi_links: ['dry_season_loss_pct', 'feed_cost_head'],
        actions_7d: ['FEED_GAP_SHIELD_7D'],
        actions_30d: ['FEED_GAP_SHIELD_30D']
    },
    {
        qid: 'QS_GOAT_FEED_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['blind_feeding', 'yield_bleed'],
        weight: 1.5,
        textA: "When goats lose condition, you usually adjust feeding for high-need groups (pregnant/lactating/kids).",
        textB: "You increase feed generally for everyone.",
        kpi_links: ['body_condition_score', 'kid_creep_feed'],
        actions_7d: ['FEED_GAP_SHIELD_7D'],
        actions_30d: ['FEED_GAP_SHIELD_30D']
    },

    // --- PILLAR 4: Health & Biosecurity (Risk) ---
    {
        qid: 'QS_GOAT_HEALTH_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['quarantine_gap', 'disease_spread_risk'],
        weight: 1.5,
        textA: "When a new goat arrives: isolate first and observe before mixing.",
        textB: "Mix quickly so it 'adapts'.",
        kpi_links: ['morbidity_rate', 'quarantined_arrivals_pct'],
        actions_7d: ['PARASITE_BREAKER_7D'],
        actions_30d: ['PARASITE_BREAKER_30D']
    },
    {
        qid: 'QS_GOAT_HEALTH_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['late_response_risk', 'mortality_blindness'],
        weight: 1.2,
        textA: "When a goat looks slightly weak: act early (observe, isolate, consult treatment plan).",
        textB: "Wait and see if it improves.",
        kpi_links: ['mortality_rate', 'treatment_success_rate'],
        actions_7d: ['PARASITE_BREAKER_7D'],
        actions_30d: ['PARASITE_BREAKER_30D']
    },

    // --- PILLAR 5: Breeding, Kidding & Kid Growth (Innovation/Growth) ---
    {
        qid: 'QS_GOAT_BREED_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['fertility_gap', 'decision_bottleneck'],
        weight: 1.5,
        textA: "When a doe fails to conceive: investigate and set a decision deadline (treat or cull).",
        textB: "Keep trying indefinitely.",
        kpi_links: ['kidding_rate', 'barren_doe_rate'],
        actions_7d: ['KID_SURVIVAL_7D'],
        actions_30d: ['KID_SURVIVAL_30D']
    },
    {
        qid: 'QS_GOAT_BREED_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['kid_mortality_risk', 'future_profit_leak'],
        weight: 1.5,
        textA: "For newborn kids, you focus first on: clean kidding space + early care routine.",
        textB: "Leaving them mostly to 'nature'.",
        kpi_links: ['kid_mortality_pct', 'weaning_weight'],
        actions_7d: ['KID_SURVIVAL_7D'],
        actions_30d: ['KID_SURVIVAL_30D']
    },

    // --- PILLAR 6: Operations, Housing & Labor Uptime (People) ---
    {
        qid: 'QS_GOAT_OPS_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['routine_drift', 'reactive_maintenance'],
        weight: 1.5,
        textA: "If routines are disrupted, you usually: protect critical tasks first (water, kids, sick goats).",
        textB: "Catch up later when you have time.",
        kpi_links: ['routine_compliance', 'housing_hygiene_score'],
        actions_7d: ['ROUTINE_UPTIME_7D'],
        actions_30d: ['ROUTINE_UPTIME_30D']
    },
    {
        qid: 'QS_GOAT_OPS_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['housing_gap', 'pneumonia_risk'],
        weight: 1.2,
        textA: "If housing smells damp, you usually: fix drainage/bedding/ventilation quickly.",
        textB: "Assume it's normal during rains.",
        kpi_links: ['housing_hygiene_score', 'pneumonia_cases'],
        actions_7d: ['ROUTINE_UPTIME_7D'],
        actions_30d: ['ROUTINE_UPTIME_30D']
    },

    // --- PILLAR 7: Finance, Cashflow & Unit Economics (Money) ---
    {
        qid: 'QS_GOAT_FINANCE_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['blind_spend', 'cashflow_crunch'],
        weight: 1.5,
        textA: "When cash is short, you usually: protect production drivers (feed, health, kidding).",
        textB: "Cut costs evenly, including feed/health.",
        kpi_links: ['cost_per_doe', 'gross_margin_category'],
        actions_7d: ['PROFIT_STABILIZE_7D'],
        actions_30d: ['PROFIT_CONTROL_30D']
    },
    {
        qid: 'QS_GOAT_FINANCE_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['reinvestment_blindspot', 'bottleneck_ignore'],
        weight: 1.5,
        textA: "When profit comes, you usually: reinvest in the bottleneck (feed gap, housing, health).",
        textB: "Spread spending across many small needs.",
        kpi_links: ['budget_variance', 'debt_service_ratio'],
        actions_7d: ['PROFIT_STABILIZE_7D'],
        actions_30d: ['PROFIT_CONTROL_30D']
    },

    // --- PILLAR 8: Risk, Theft & Management Systems (Risk) ---
    {
        qid: 'QS_GOAT_RISK_01',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['loss_denial', 'theft_risk'],
        weight: 1.5,
        textA: "If you suspect losses, you usually: reconcile counts immediately and check movement logs.",
        textB: "Assume they will appear later.",
        kpi_links: ['count_variance', 'loss_incidents'],
        actions_7d: ['THEFT_CONTROL_7D'],
        actions_30d: ['THEFT_CONTROL_30D']
    },
    {
        qid: 'QS_GOAT_RISK_02',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['drought_panic', 'late_reaction'],
        weight: 1.2,
        textA: "When drought signs start, you usually: reduce pressure early (destock, reserves, water).",
        textB: "Wait until pasture is finished.",
        kpi_links: ['feed_reserve_days', 'distress_sale_pct'],
        actions_7d: ['THEFT_CONTROL_7D'],
        actions_30d: ['THEFT_CONTROL_30D']
    },


    // --- DEEP SCAN QUESTIONS ---
    // P1: Market
    { qid: 'DS_GOAT_P1_01', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I sell by category and grade", textB: "I sell as a mixed group", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_02', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I track prices weekly", textB: "I hear prices from people", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_03', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I avoid selling breeding does", textB: "I sell does when money is tight", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_04', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I can estimate weight fairly", textB: "I only guess by looking", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_05', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I have more than one buyer channel", textB: "I depend on one buyer", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_06', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I plan sales around target dates", textB: "I sell reactively", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_07', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I negotiate using facts", textB: "I negotiate by trust/relationship", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_08', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I know my premium seasons", textB: "I sell anytime", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_09', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I track sales per goat category", textB: "I track total cash only", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P1_10', industry: 'livestock', line_type: ['all'], pillar: 'Market', weight: 1, signal_tags: [], textA: "I understand buyer preferences", textB: "I learn at the market", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P2: Herd Strategy
    { qid: 'DS_GOAT_P2_01', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "clear herd target (size + structure)", textB: "herd size is whatever happens", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_02', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "buck management is planned", textB: "any buck can mate anytime", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_03', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "replacements chosen from best mothers", textB: "replacements chosen randomly", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_04', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "culling rules exist", textB: "culling is rare/emotional", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_05', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "purchases screened + quarantined", textB: "purchases mixed immediately", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_06', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "herd growth is planned", textB: "herd growth is accidental", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_07', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "avoid inbreeding", textB: "inbreeding not considered", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_08', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "keep records by category", textB: "know goats by memory", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_09', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "expand after proving profit/doe", textB: "expand when money comes", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P2_10', industry: 'livestock', line_type: ['all'], pillar: 'Leadership', weight: 1, signal_tags: [], textA: "separate breeders vs sellers", textB: "everyone is 'sale-ready'", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P3: Feeding
    { qid: 'DS_GOAT_P3_01', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "dry-season plan exists", textB: "dry season is handled by improvising", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_02', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "group feeding by need", textB: "mixed feeding approach", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_03', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "minerals are consistent", textB: "minerals are occasional", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_04', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "water checked daily", textB: "water checked when there's a problem", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_05', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "kids have creep strategy", textB: "kids compete with adults", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_06', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "browse pressure managed", textB: "goats roam until land is bare", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_07', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "feed waste tracked", textB: "waste is normal", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_08', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "BCS scored monthly", textB: "judged by sight only", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_09', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "reserves are stored properly", textB: "reserves spoil often", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P3_10', industry: 'livestock', line_type: ['all'], pillar: 'Operations', weight: 1, signal_tags: [], textA: "supplementation is ROI-based", textB: "supplementation depends on cash", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P4: Health
    { qid: 'DS_GOAT_P4_01', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "prevention calendar exists", textB: "treat when problems appear", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_02', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "quarantine is normal", textB: "quarantine is rare", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_03', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "correct dosing by weight estimate", textB: "dose by guesswork", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_04', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "track treatments and outcomes", textB: "rely on memory", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_05', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "manage ventilation/dry bedding", textB: "housing is often damp", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_06', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "isolate coughing/diarrhea cases", textB: "keep herd together", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_07', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "parasites monitored as a system issue", textB: "parasites treated occasionally", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_08', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "kid health checks routine", textB: "check kids when weak", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_09', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "foot care routine exists", textB: "foot issues handled when severe", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P4_10', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "stop repeat outbreaks by learning", textB: "accept outbreaks as normal", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P5: Innovation/Breeding
    { qid: 'DS_GOAT_P5_01', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "breeding is controlled", textB: "bucks run freely", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_02', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "breeding and kidding are recorded", textB: "records are rare", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_03', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "kidding space prepared", textB: "kidding happens anywhere", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_04', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "late pregnancy feeding is planned", textB: "feeding is general", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_05', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "kid checks are routine", textB: "check kids when they look weak", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_06', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "weaning is planned", textB: "weaning happens naturally/late", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_07', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "replacement does selected strategically", textB: "replacements selected randomly", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_08', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "barren does addressed quickly", textB: "barren does kept long", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_09', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "buck rotation prevents inbreeding", textB: "buck is kept 'forever'", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P5_10', industry: 'livestock', line_type: ['all'], pillar: 'Innovation', weight: 1, signal_tags: [], textA: "kid growth targets exist", textB: "kid growth is 'as it goes'", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P6: People/Ops
    { qid: 'DS_GOAT_P6_01', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "categories separated", textB: "herd mixed", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_02', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "cleaning schedule exists", textB: "clean when dirty", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_03', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "bedding kept dry", textB: "damp bedding common", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_04', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "fences maintained proactively", textB: "repair after escape", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_05', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "kid pens or protected areas exist", textB: "kids mix fully", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_06', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "feed/water checks daily", textB: "checks occasional", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_07', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "handling low-stress", textB: "handling forceful", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_08', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "task checklist used", textB: "tasks remembered", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_09', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "equipment/tools ready", textB: "tools missing often", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P6_10', industry: 'livestock', line_type: ['all'], pillar: 'People', weight: 1, signal_tags: [], textA: "labor roles assigned", textB: "anyone does anything", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P7: Finance
    { qid: 'DS_GOAT_P7_01', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "track costs by category", textB: "track totals only", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_02', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "focus on profit/doe", textB: "focus on herd size", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_03', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "separate cash systems", textB: "one cash pot", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_04', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "plan dry season budget", textB: "borrow/buy later", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_05', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "value kid losses financially", textB: "accept kid losses as normal", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_06', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "prevent distress selling", textB: "distress selling is normal", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_07', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "expansion after margin proof", textB: "expansion after money comes", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_08', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "monthly financial review", textB: "seasonal guess", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_09', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "debt planned", textB: "debt reactive", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P7_10', industry: 'livestock', line_type: ['all'], pillar: 'Money', weight: 1, signal_tags: [], textA: "reinvest into bottlenecks", textB: "reinvest into many things", kpi_links: [], actions_7d: [], actions_30d: [] },

    // P8: Risk
    { qid: 'DS_GOAT_P8_01', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "goats tagged/marked", textB: "goats known by appearance", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_02', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "regular counts", textB: "counts rarely done", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_03', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "movement log exists", textB: "movement informal", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_04', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "night security controls exist", textB: "rely on luck", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_05', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "drought plan exists", textB: "improvise later", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_06', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "isolate sick goats", textB: "herd stays together", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_07', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "records updated weekly/monthly", textB: "records updated sometimes", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_08', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "learn from KPIs", textB: "manage by feelings", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_09', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "losses valued financially", textB: "losses are 'bad luck'", kpi_links: [], actions_7d: [], actions_30d: [] },
    { qid: 'DS_GOAT_P8_10', industry: 'livestock', line_type: ['all'], pillar: 'Risk', weight: 1, signal_tags: [], textA: "compliance planned", textB: "compliance handled when needed", kpi_links: [], actions_7d: [], actions_30d: [] }
];
