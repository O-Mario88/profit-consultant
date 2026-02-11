import { LibraryItem } from '../../types';

export const CATTLE_LIBRARY: LibraryItem[] = [
    // 1. Market & Pricing Power -> Market
    {
        id: 'strength_defined_buyer',
        industry: 'cattle',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "We sell to a defined buyer type (butchers/feedlots/exporters) with clear specs.",
        signal_tags: ['market_pricing_power'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_price_by_weight',
        industry: 'cattle',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "We price by weight/grade/condition, not 'per head guessing'.",
        signal_tags: ['market_pricing_power'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_distress_selling',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "We sell when cash pressure hits, not when the market is best (distress selling).",
        signal_tags: ['market_pricing_power'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_buyer_price_setting',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "Prices are set by buyers; we accept because we lack options.",
        signal_tags: ['market_pricing_power'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_avg_price_kg',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'kpi',
        text: "Average selling price per kg liveweight (or carcass kg) by channel.",
        signal_tags: ['market_pricing_power'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 2. Herd Strategy & Genetics -> Operations (Production)
    {
        id: 'strength_clear_system',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'strength',
        text: "We run a clear system (cow-calf, backgrounding, fattening) with targets.",
        signal_tags: ['herd_strategy_genetics'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_planned_culling',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'strength',
        text: "We cull consistently (poor fertility, chronic sickness, bad temperament).",
        signal_tags: ['herd_strategy_genetics'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_unplanned_breeding',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "Breeding is unplanned; calving is scattered and chaotic.",
        signal_tags: ['herd_strategy_genetics'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_random_growth',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "We expand herd size before stabilizing survival/feed.",
        signal_tags: ['herd_strategy_genetics'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_calving_rate',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Calving rate = calves born / cows exposed.",
        signal_tags: ['herd_strategy_genetics'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 3. Nutrition & Feed System -> Operations (Inputs)
    {
        id: 'strength_seasonal_feed_plan',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'strength',
        text: "We run a seasonal feed plan (pasture + conserved feed + supplements).",
        signal_tags: ['nutrition_feed_system'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_water_quality',
        industry: 'cattle',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Operations',
        type: 'strength',
        text: "We protect water access and quality daily (water is non-negotiable).",
        signal_tags: ['nutrition_feed_system'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_reactive_feeding',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "Feed decisions are reactive ('when pasture finishes, we panic').",
        signal_tags: ['nutrition_feed_system'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_overgrazing',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "Pasture is overgrazed; recovery is slow; costs rise.",
        signal_tags: ['nutrition_feed_system'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_adg',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Average Daily Gain (ADG) by batch.",
        signal_tags: ['nutrition_feed_system'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 4. Health, Welfare & Biosecurity -> Risk
    {
        id: 'strength_biosecurity_plan',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Risk',
        type: 'strength',
        text: "We operate a practical farm biosecurity plan (visitor control, quarantine).",
        signal_tags: ['health_welfare_biosecurity'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_early_detection',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Risk',
        type: 'strength',
        text: "We detect illness early using daily checks and record symptoms.",
        signal_tags: ['health_welfare_biosecurity'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_uncontrolled_mixing',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Risk',
        type: 'leak',
        text: "Animals mix freely (new, sick, old) and disease spreads fast.",
        signal_tags: ['health_welfare_biosecurity'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_late_treatment',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Risk',
        type: 'leak',
        text: "Treatments are late; we only act when animals collapse.",
        signal_tags: ['health_welfare_biosecurity'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_mortality_rate',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Risk',
        type: 'kpi',
        text: "Mortality rate and 'cause known %'.",
        signal_tags: ['health_welfare_biosecurity'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 5. Operations & Infrastructure -> Leadership (Backbone)
    {
        id: 'strength_functional_infra',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Leadership',
        type: 'strength',
        text: "We have functional fencing, gates, handling crush, and safe loading routine.",
        signal_tags: ['operations_infrastructure'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_maintenance_routine',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Leadership',
        type: 'strength',
        text: "We schedule maintenance (troughs, pumps, pasture, housing).",
        signal_tags: ['operations_infrastructure'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_weak_fencing',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Leadership',
        type: 'leak',
        text: "Weak fencing causes losses, disputes, and theft risk.",
        signal_tags: ['operations_infrastructure'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_no_handling_system',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Leadership',
        type: 'leak',
        text: "No crush/handling system → vet work becomes dangerous and delayed.",
        signal_tags: ['operations_infrastructure'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_infra_downtime',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Leadership',
        type: 'kpi',
        text: "Equipment downtime hours/month (water pumps, crush).",
        signal_tags: ['operations_infrastructure'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 6. People & Daily Execution -> People
    {
        id: 'strength_clear_roles',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'strength',
        text: "Everyone has clear roles (feeding, health checks, records).",
        signal_tags: ['people_daily_execution'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_sops',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'strength',
        text: "We use simple SOPs (feeding, calving assistance, quarantine).",
        signal_tags: ['people_daily_execution'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_no_accountability',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'leak',
        text: "No clear accountability; problems bounce between people.",
        signal_tags: ['people_daily_execution'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_untrained_staff',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'leak',
        text: "Staff are untrained in early illness signs; detection is late.",
        signal_tags: ['people_daily_execution'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_checklist_completion',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'kpi',
        text: "Routine completion score (% daily checklist done).",
        signal_tags: ['people_daily_execution'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 7. Finance & Cash Control -> Money
    {
        id: 'strength_cost_per_kg',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'strength',
        text: "We know cost per kg gain and use it to decide.",
        signal_tags: ['finance_cash_control'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_separate_finances',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'strength',
        text: "We separate farm money from personal money.",
        signal_tags: ['finance_cash_control'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_unknown_profitability',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "We don’t know cost per animal/day; profitability is unknown.",
        signal_tags: ['finance_cash_control'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_personal_drain',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "Personal spending drains business cash weekly.",
        signal_tags: ['finance_cash_control'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_gross_margin_animal',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'kpi',
        text: "Gross margin per animal (or per batch).",
        signal_tags: ['finance_cash_control'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 8. Records, Data & Compliance -> Innovation
    {
        id: 'strength_data_linking',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Innovation',
        type: 'strength',
        text: "We link performance (growth, fertility) to feed inputs where possible.",
        signal_tags: ['records_data_compliance'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_monthly_review',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Innovation',
        type: 'strength',
        text: "We use a monthly review to choose 1–2 improvements.",
        signal_tags: ['records_data_compliance'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_incomplete_records',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'leak',
        text: "Records are incomplete; decisions are guesswork.",
        signal_tags: ['records_data_compliance'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_no_traceability',
        industry: 'cattle',
        business_size_fit: ['medium', 'large'],
        pillar: 'Innovation',
        type: 'leak',
        text: "No traceability → buyer trust is low; disputes rise.",
        signal_tags: ['records_data_compliance'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_record_score',
        industry: 'cattle',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'kpi',
        text: "Record completeness score (births, deaths, sales logged).",
        signal_tags: ['records_data_compliance'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    }
];
