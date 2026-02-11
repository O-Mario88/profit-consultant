
export const STRENGTH_COPY = {
    // Pillar 1: Market
    'market_pricing_power': "You check weights/condition before pricing and sell strategically.",
    'market_buyer_mix': "You have repeat buyers (traders, abattoirs) and don't rely on just one channel.",

    // Pillar 2: Herd Strategy (Leadership)
    'leadership_goals': "You have a clear purpose (beef, dairy, breeding) and plan herd structure.",
    'leadership_culling': "You cull unproductive animals based on rules, not emotion.",
    'leadership_planning': "You prevent overstocking and plan for carrying capacity.",

    // Pillar 3: Feeding (Operations)
    'operations_feeding': "You budget feed by season and have a dry-season plan (hay/silage).",
    'operations_grazing': "You rotate pastures to prevent overgrazing and protect soil.",
    'operations_water': "Clean water is constant; intake drives weight gain.",

    // Pillar 4: Health (Risk)
    'risk_health': "You vaccinate on schedule and quarantine all new arrivals.",
    'risk_biosecurity': "Illness is caught early; you don't wait for 'downers' to act.",

    // Pillar 5: Breeding (Innovation)
    'innovation_breeding': "You track heat/service dates and target a consistent calving interval.",
    'innovation_youngstock': "Calf mortality is low because colostrum and hygiene are priority.",

    // Pillar 6: Operations (People)
    'people_routines': "Daily tasks (feeding, checking) happen on time, every time.",
    'people_handling': "Handling facilities are safe; animals aren't stressed or injured.",
    'people_theft': "Theft is controlled with tags, counts, and movement logs.",

    // Pillar 7: Finance (Money)
    'money_unit_economics': "You know the cost per head per month and track margin.",
    'money_cashflow': "Farm cash is separate from personal cash; you don't raid the business.",

    // Pillar 8: Risk
    'risk_resilience': "You have buffers for drought and don't panic-sell good stock.",
    'risk_records': "Records are complete; you learn from performance trends."
};

export const WEAKNESS_COPY = {
    // Pillar 1: Market
    'market_reactive': "You sell when you need cash, often taking low prices for good animals.",
    'market_blind': "You don't weigh or grade; buyers dictate the value.",

    // Pillar 2: Herd Strategy (Leadership)
    'leadership_drift': "The herd grows randomly; you keep unproductive animals too long.",
    'leadership_overstock': "You have too many mouths for your land, stunting growth for everyone.",

    // Pillar 3: Feeding (Operations)
    'operations_starvation': "Dry season surprises you; animals lose weight and value.",
    'operations_waste': "Feed is wasted or low quality; water access is inconsistent.",

    // Pillar 4: Health (Risk)
    'risk_outbreak': "No quarantine means disease walks right in; you treat too late.",
    'risk_mortality': "Deaths are accepted as 'normal' instead of investigated.",

    // Pillar 5: Breeding (Innovation)
    'innovation_infertility': "Long calving intervals mean you feed cows for no output.",
    'innovation_calf_loss': "Calves die early from poor colostrum or hygiene.",

    // Pillar 6: Operations (People)
    'people_chaos': "Routines drift; work is done when convenient, not when needed.",
    'people_stress': "Rough handling causes injury and weight loss.",

    // Pillar 7: Finance (Money)
    'money_blind_spot': "You don't track costs; 'profit' is just a guess.",
    'money_bleed': "Personal withdrawals bleed the farm dry; cash isn't reinvested.",

    // Pillar 8: Risk
    'risk_exposure': "Drought leads to panic selling; theft is 'part of the business'.",
    'risk_no_data': "No records mean you repeat the same mistakes every year."
};

export const KPI_COPY = {
    'avg_selling_price': { label: "Avg Selling Price", unit: "UGX/kg" },
    'price_variance': { label: "Price Variance vs Market", unit: "%" },
    'distress_sale_pct': { label: "Distress Sales", unit: "%" },
    'stocking_rate': { label: "Stocking Rate", unit: "An/Acre" },
    'herd_composition': { label: "Productive Herd %", unit: "%" },
    'culling_rate': { label: "Culling Rate", unit: "%" },
    'avg_daily_gain': { label: "Avg Daily Gain", unit: "kg/day" },
    'dry_season_loss_pct': { label: "Dry Season Weight Loss", unit: "%" },
    'feed_cost_head': { label: "Feed Cost per Head", unit: "UGX" },
    'body_condition_score': { label: "Avg Body Condition", unit: "1-5" },
    'feed_conversion': { label: "Feed Efficiency", unit: "Ratio" },
    'morbidity_rate': { label: "Sickness Rate", unit: "%/mth" },
    'outbreak_response_time': { label: "Outbreak Response", unit: "Hours" },
    'mortality_rate': { label: "Mortality Rate", unit: "%/yr" },
    'treatment_success_rate': { label: "Treatment Success", unit: "%" },
    'calving_interval': { label: "Calving Interval", unit: "Days" },
    'conception_rate': { label: "Conception Rate", unit: "%" },
    'calf_mortality_pct': { label: "Calf Mortality", unit: "%" },
    'weaning_weight': { label: "Weaning Weight", unit: "kg" },
    'routine_compliance': { label: "Routine Compliance", unit: "%" },
    'labor_cost_head': { label: "Labor Cost per Head", unit: "UGX" },
    'injury_rate': { label: "Injury Rate", unit: "%" },
    'asset_uptime': { label: "Water/Fence Uptime", unit: "%" },
    'cost_per_head': { label: "Total Cost per Head", unit: "UGX" },
    'gross_margin_animal': { label: "Gross Margin", unit: "%" },
    'budget_variance': { label: "Budget Variance", unit: "%" },
    'debt_service_ratio': { label: "Debt Service Ratio", unit: "%" },
    'drought_feed_days': { label: "Feed Reserves", unit: "Days" },
    'record_completeness': { label: "Record Completeness", unit: "%" },
    'loss_incidents': { label: "Theft/Loss Count", unit: "#" }
};

export const library = {
    STRENGTH_COPY,
    WEAKNESS_COPY,
    KPI_COPY
};
