
export const STRENGTH_COPY = {
    // Pillar 1: Market
    'market_pricing_power': "You plan around market windows and track prices weekly. You don't sell blind.",
    'market_buyer_mix': "You have a deliberate mix of buyer types (traders, institutions) to balance risk.",

    // Pillar 2: Operations (Agronomy)
    'operations_planning': "You have a clear crop plan per season (acreage, variety, dates).",
    'operations_yield': "You test soil and use recommended spacing/inputs to protect yield potential.",

    // Pillar 3: Money (Procurement)
    'money_inputs': "You buy verified inputs early to avoid peak prices and fakes.",
    'money_tracking': "You track input costs per acre and watch trends closely.",

    // Pillar 4: Operations (Execution)
    'operations_labor': "Roles are clear and you measure labor output (e.g., acres weeded/day).",
    'operations_supervision': "You have quality checks for spacing, mixing, and timing.",

    // Pillar 5: Quality (Post-Harvest)
    'quality_handling': "You harvest at the right maturity and manage moisture/shade correctly.",
    'quality_storage': "You store grains/produce safely to prevent pests and mold.",

    // Pillar 6: Logistics
    'market_logistics': "You plan transport early and verify all weights and deliveries.",
    'market_disputes': "You have a process for handling disputes and short payments.",

    // Pillar 7: Finance
    'money_unit_economics': "You know your true cost per acre and break-even price.",
    'money_cashflow': "You separate farm money from personal cash and plan for the season.",

    // Pillar 8: Risk
    'risk_management': "You scout for pests preventively and have response plans ready.",
    'risk_resilience': "You plan for weather shocks and keep records for learning."
};

export const WEAKNESS_COPY = {
    // Pillar 1: Market
    'market_reactive': "Pricing is reactive; you accept today's offer without reference checks.",
    'market_desperation': "You sell for quick cash, not best timing, and get averaged down on quality.",

    // Pillar 2: Operations (Agronomy)
    'operations_guesswork': "Fertilizer/chemical rates are guessed; inputs often arrive late.",
    'operations_timing': "Weeding and pest control happen too late, cutting yield silently.",

    // Pillar 3: Money (Procurement)
    'money_panic_buying': "Inputs are bought late at peak prices; fakes cause yield collapse.",
    'money_leakage': "You accept unclear terms and don't control theft/leakage at the farm.",

    // Pillar 4: Operations (Execution)
    'operations_chaos': "Work happens 'when people are free', not by critical crop timelines.",
    'operations_rework': "Lack of supervision leads to poor spacing, wrong mixing, and rework.",

    // Pillar 5: Quality (Post-Harvest)
    'quality_loss': "Moisture is guessed (grains) or perishables sit in sun (horticulture), destroying value.",
    'quality_storage_rot': "Poor storage and lack of pest control eat your profit quietly.",

    // Pillar 6: Logistics
    'market_transport_waste': "Last-minute transport and poor handling cause damage and discounts.",
    'market_trust_trap': "You rely on trust for weights/payments and get cheated on deductions.",

    // Pillar 7: Finance
    'money_blind_spot': "You don't know true costs, so 'profit' is just a guess.",
    'money_distress': "Cash emergencies force distress sales; personal withdrawals bleed the farm.",

    // Pillar 8: Risk
    'risk_exposure': "You react late to pests and weather, making losses feel 'normal'.",
    'risk_recordless': "No records mean you repeat the same mistakes every season."
};


export const KPI_COPY = {
    'avg_selling_price': { label: "Avg Selling Price", unit: "UGX/kg" },
    'days_harvest_to_cash': { label: "Days Harvest to Cash", unit: "Days" },
    'yield_per_acre': { label: "Yield per Acre", unit: "kg/acre" },
    'cost_per_unit': { label: "Unit Production Cost", unit: "UGX/kg" },
    'input_cost_acre': { label: "Input Cost per Acre", unit: "UGX" },
    'stockout_days': { label: "Input Stockout Days", unit: "Days" },
    'labor_productivity': { label: "Labor Productivity", unit: "Acre/Day" },
    'rework_rate': { label: "Field Rework Rate", unit: "%" },
    'post_harvest_loss': { label: "Post-Harvest Loss", unit: "%" },
    'rejection_rate': { label: "Quality Rejection Rate", unit: "%" },
    'transport_cost_unit': { label: "Transport Cost per Unit", unit: "UGX/kg" },
    'dispute_rate': { label: "Payment Dispute Rate", unit: "%" },
    'gross_margin_crop': { label: "Gross Margin per Crop", unit: "%" },
    'break_even_yield': { label: "Break-Even Yield", unit: "kg/acre" },
    'scouting_frequency': { label: "Scouting Frequency", unit: "Visits/Wk" },
    'weather_loss_impact': { label: "Weather Loss Impact", unit: "UGX" }
};

export const library = {
    STRENGTH_COPY,
    WEAKNESS_COPY,
    KPI_COPY
};
