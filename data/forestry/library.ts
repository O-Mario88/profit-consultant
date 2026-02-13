import { LibraryItem } from '../../types';

export const FORESTRY_LIBRARY: LibraryItem[] = [
    // PILLAR 1 — Strategy & Positioning -> LEADERSHIP
    {
        id: 'strength_clear_strategy',
        industry: 'forestry',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Leadership',
        type: 'strength',
        text: "The business has a clear forest-to-market strategy (plantation/natural forest; logs/sawn timber/processed products).",
        signal_tags: ['strategy_positioning'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_product_mix',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Leadership',
        type: 'strength',
        text: "Product mix is intentionally designed around species strengths (e.g., pine for construction, eucalyptus for poles).",
        signal_tags: ['strategy_positioning'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_volume_led',
        industry: 'forestry',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Leadership',
        type: 'leak',
        text: "Strategy is volume-led; margins and market access are afterthoughts.",
        signal_tags: ['strategy_positioning'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_reactive_harvest',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Leadership',
        type: 'leak',
        text: "Harvesting is reactive (cash-driven cutting) rather than management-plan driven.",
        signal_tags: ['strategy_positioning'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_harvest_plan_adherence',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Leadership',
        type: 'kpi',
        text: "Harvest plan adherence % (planned vs actual volume/time).",
        signal_tags: ['strategy_positioning'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },

    // PILLAR 2 — Offer & Pricing Power -> MARKET
    {
        id: 'strength_pricing_differentiated',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "Pricing is differentiated by species + grade + dimensions + MC + certification.",
        signal_tags: ['offer_pricing_power'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_standardized_specs',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "Product specs are standardized (grades, tolerances, length classes), reducing disputes.",
        signal_tags: ['offer_pricing_power'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_flat_pricing',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "Pricing is flat by volume, ignoring grade, MC, and defects.",
        signal_tags: ['offer_pricing_power'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_green_lumber_trap',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "We sell 'green lumber' into markets that expect kiln-dried tolerances (claims trap).",
        signal_tags: ['offer_pricing_power'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_price_realization',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Market',
        type: 'kpi',
        text: "Price realization vs target (by species/grade/product).",
        signal_tags: ['offer_pricing_power'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },

    // PILLAR 3 — Marketing & Demand -> MARKET
    {
        id: 'strength_stable_demand',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "The business has stable demand sources (contractors, distributors, exporters, manufacturers).",
        signal_tags: ['marketing_demand'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_referral_fragility',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "Demand is mostly referral-based; pipeline is fragile.",
        signal_tags: ['marketing_demand'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_inbound_inquiries',
        industry: 'forestry',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Market',
        type: 'kpi',
        text: "Inbound inquiries/week and Response time.",
        signal_tags: ['marketing_demand'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },

    // PILLAR 4 — Sales & Conversion -> MARKET (Sales fits in Market workflow usually)
    {
        id: 'strength_quote_process',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "We run a consistent quote-to-order process with clear specs and acceptance steps.",
        signal_tags: ['sales_conversion'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_vague_specs',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "We accept vague specs; disputes happen at delivery.",
        signal_tags: ['sales_conversion'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_quote_conversion',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Market',
        type: 'kpi',
        text: "Quote-to-order conversion %.",
        signal_tags: ['sales_conversion'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },

    // PILLAR 5 — Operations & Delivery -> OPERATIONS
    {
        id: 'strength_planned_harvest',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'strength',
        text: "Harvest and extraction are planned to reduce waste and protect stand quality (RIL-style discipline).",
        signal_tags: ['operations_delivery'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_yard_flow',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'strength',
        text: "We control yard flow: FIFO rules, clear storage zones, minimized handling damage.",
        signal_tags: ['operations_delivery'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_yard_chaos',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "Yard is chaotic; logs are mixed; wrong logs go into wrong products ('sort failure').",
        signal_tags: ['operations_delivery'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_bucking_waste',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "Bucking/felling decisions are inconsistent; value recovery collapses.",
        signal_tags: ['operations_delivery'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_harvest_utilization',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Harvest utilization % (usable volume ÷ felled volume).",
        signal_tags: ['operations_delivery'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_recovery_lrf',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Recovery % / LRF (lumber output ÷ log input).",
        signal_tags: ['operations_delivery'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },

    // PILLAR 6 — Finance & Profit Control -> MONEY
    {
        id: 'strength_profit_by_product',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'strength',
        text: "We track profitability by product type (logs vs sawn vs KD vs treated) and protect margin floors.",
        signal_tags: ['finance_profit_control'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_cost_stack_awareness',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'strength',
        text: "We understand our full cost stack: harvest, haulage, processing, drying, packaging, overhead.",
        signal_tags: ['finance_profit_control'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_month_end_profit',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "Profit is tracked at 'end of month,' not by product/process; leakage remains invisible.",
        signal_tags: ['finance_profit_control'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_diesel_creep',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "Fuel and repair costs drift upward without investigation ('diesel creep').",
        signal_tags: ['finance_profit_control'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_gross_margin_product',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'kpi',
        text: "Gross margin % by product class.",
        signal_tags: ['finance_profit_control'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },

    // PILLAR 7 — People, Culture & Execution -> PEOPLE
    {
        id: 'strength_roles_clear',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'strength',
        text: "Roles are clear: harvest crew, yard, mill, drying, dispatch, quality, sales, admin.",
        signal_tags: ['people_culture_execution'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_daily_coord',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'strength',
        text: "There is daily coordination: targets, constraints, handoffs, and quality checks.",
        signal_tags: ['people_culture_execution'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_hero_dependency',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'People',
        type: 'leak',
        text: "Output depends on a few 'heroes'; when they’re absent, performance collapses.",
        signal_tags: ['people_culture_execution'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_volume_incentives',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'leak',
        text: "Incentives reward volume, causing grade drift and rework.",
        signal_tags: ['people_culture_execution'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_output_per_shift',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'kpi',
        text: "Output per shift (by station) and Downtime minutes.",
        signal_tags: ['people_culture_execution'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },

    // Mapped "Risk" Items (from Strategy/Ops/Finance) -> RISK
    {
        id: 'leak_safety_drag',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Risk',
        type: 'leak',
        text: "Safety incidents or near-misses disrupt operations and create hidden cost ('Safety drag').",
        signal_tags: ['risk_compliance'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_compliance_exposure',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Risk',
        type: 'leak',
        text: "Compliance exposure (legal/market access) puts export deals at risk.",
        signal_tags: ['risk_compliance'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'strength_sustainability_controls',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Risk',
        type: 'strength',
        text: "There is a defined stance on sustainability (certification pathway or equivalent controls).",
        signal_tags: ['risk_compliance'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },

    // Mapped "Innovation" Items (from Ops/Strategy) -> INNOVATION (Systems/Data)
    {
        id: 'strength_traceability_readiness',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Innovation',
        type: 'strength',
        text: "The company actively protects market access via traceability and legality readiness (export-proof documentation).",
        signal_tags: ['innovation_systems_data'],
        line_type: ['Forestry'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_no_data_mgmt',
        industry: 'forestry',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'leak',
        text: "No-data management; decisions are made on feelings/guesses ('We think' accounting).",
        signal_tags: ['innovation_systems_data'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_chain_of_custody_break',
        industry: 'forestry',
        business_size_fit: ['medium', 'large'],
        pillar: 'Innovation',
        type: 'leak',
        text: "Chain-of-custody break (documents don’t match flow), blocking premium market access.",
        signal_tags: ['innovation_systems_data'],
        line_type: ['Forestry'],
        severity_fit: ['Critical']
    }
];
