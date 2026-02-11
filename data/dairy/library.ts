import { LibraryItem } from '../../types';

export const library: LibraryItem[] = [
    // --- Strength Statements ---
    // PILLAR 1: Leadership (Supply Network & Farmer Loyalty)
    { id: 'LI_DAIRY_S_1', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We have stable supply from repeat farmers, not random sourcing.", signal_tags: ['VOLUME_FORECAST'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_2', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We segment farmers and protect top suppliers.", signal_tags: ['FARMER_CHURN'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_3', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We have clear onboarding rules and container standards.", signal_tags: ['HYGIENE_AUDIT'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_4', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We can forecast tomorrow's volume within a tight range.", signal_tags: ['VOLUME_FORECAST'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_5', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We handle disputes quickly and transparently.", signal_tags: ['COMPLAINT_RESOLUTION'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 2: Risk (Quality, Testing & Food Safety)
    { id: 'LI_DAIRY_S_6', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Intake testing is consistent and documented.", signal_tags: ['TESTING_GAP'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_7', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Reject rules are clear and enforced.", signal_tags: ['REJECT_POLICY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_8', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "We track adulteration patterns and prevent repeats.", signal_tags: ['ADULTERATION_RISK'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_9', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Staff can explain quality decisions calmly with data.", signal_tags: ['SOP_GAP'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_10', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "We have traceability per batch and per supplier.", signal_tags: ['TRACEABILITY_GAP'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 3: Innovation (Cold Chain & Technology)
    { id: 'LI_DAIRY_S_11', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Temperature is logged and enforced every shift.", signal_tags: ['TEMP_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_12', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Generator response is tested and reliable.", signal_tags: ['GENERATOR_READINESS'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_13', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Time-to-chill is controlled and measured.", signal_tags: ['EARLY_CHILL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_14', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Tanks, valves, and pipes are maintained and sanitized.", signal_tags: ['CLEANING_PROTOCOL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_15', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Storage capacity matches peak season volume.", signal_tags: ['VOLUME_FORECAST'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 4: Operations (Logistics)
    { id: 'LI_DAIRY_S_16', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Routes are planned for density and timing.", signal_tags: ['ROUTE_DENSITY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_17', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Fuel use is tracked per route, not just per month.", signal_tags: ['FUEL_EFFICIENCY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_18', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Pickup windows reduce waiting and quality loss.", signal_tags: ['EARLY_CHILL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_19', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Driver performance is measured and improved.", signal_tags: ['VEHICLE_UPTIME'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_20', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "We maintain insulated handling standards.", signal_tags: ['INSULATED_TRANSPORT'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 5: People (Operations & Standard Work)
    { id: 'LI_DAIRY_S_21', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "SOPs exist, are visible, and followed.", signal_tags: ['SOP_GAP'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_22', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Roles are clear: who tests, who records, who approves.", signal_tags: ['ROLE_CONFLICT'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_23', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Shift handover is consistent and documented.", signal_tags: ['HANDOVER_GAP'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_24', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Staff are trained and re-trained.", signal_tags: ['TRAINING_GAP'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_25', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Preventive maintenance is scheduled and verified.", signal_tags: ['MAINTENANCE_DELAY'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 6: Market (Sales & Contracts)
    { id: 'LI_DAIRY_S_26', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "Buyer specs and terms are documented.", signal_tags: ['CONTRACT_COMPLIANCE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_27', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We present quality proof; we negotiate from strength.", signal_tags: ['PREMIUM_CAPTURE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_28', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We diversify buyers and reduce dependence.", signal_tags: ['BUYER_POWER'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_29', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We know net margin per buyer/channel.", signal_tags: ['NET_MARGIN_TRACKING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_30', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We protect ourselves with clear payment terms.", signal_tags: ['PAYMENT_TIMELINESS'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 7: Money (Finance)
    { id: 'LI_DAIRY_S_31', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Daily reconciliation is non-negotiable.", signal_tags: ['PAYMENT_AUDIT'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_32', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Farmer statements are clear and trusted.", signal_tags: ['PAYMENT_TIMELINESS'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_33', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Approval controls prevent 'friendly fraud'.", signal_tags: ['FRAUD_CONTROL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_34', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Cashflow is planned (buffer maintained).", signal_tags: ['PRICING_LEAKAGE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_DAIRY_S_35', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "We know cost per liter and margin drivers.", signal_tags: ['NET_MARGIN_TRACKING'], line_type: ['all'], severity_fit: ['Stable'] },

    // --- Shortcoming Statements ---
    // Leadership
    { id: 'LI_DAIRY_L_1', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Supply depends on 'who shows up'.", signal_tags: ['VOLUME_FORECAST'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_2', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Farmers switch buyers due to payment delays.", signal_tags: ['FARMER_CHURN'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_3', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "We accept poor containers that reduce quality.", signal_tags: ['HYGIENE_AUDIT'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Risk
    { id: 'LI_DAIRY_L_4', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Testing is inconsistent (depends on staff).", signal_tags: ['TESTING_GAP'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_5', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Rejection decisions are negotiated at the gate.", signal_tags: ['REJECT_POLICY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_6', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Adulteration slips in; we notice later.", signal_tags: ['ADULTERATION_RISK'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_7', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Compliance is 'paperwork only'.", signal_tags: ['COMPLIANCE_AUDIT'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Innovation
    { id: 'LI_DAIRY_L_8', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'leak', text: "Temperature logs are missing or backfilled later.", signal_tags: ['TEMP_DISCIPLINE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_9', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'leak', text: "Generator fails or starts late during outages.", signal_tags: ['GENERATOR_READINESS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_10', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'leak', text: "Spoilage is treated as 'normal loss'.", signal_tags: ['SPOILAGE_RISK'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_11', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'leak', text: "Equipment readings are trusted without calibration.", signal_tags: ['ASSET_CALIBRATION'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Operations
    { id: 'LI_DAIRY_L_12', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Routes are 'habit-based', not optimized.", signal_tags: ['ROUTE_INEFFICIENCY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_13', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Late pickups increase acidity/quality problems.", signal_tags: ['EARLY_CHILL'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_14', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Vehicles break down and disrupt supply.", signal_tags: ['VEHICLE_UPTIME'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // People
    { id: 'LI_DAIRY_L_15', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'leak', text: "'Everyone does everything'.", signal_tags: ['ROLE_CONFLICT'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_16', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'leak', text: "Handover gaps cause missing logs and losses.", signal_tags: ['HANDOVER_GAP'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_17', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'leak', text: "Maintenance is reactive ('fix when broken').", signal_tags: ['MAINTENANCE_DELAY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Market
    { id: 'LI_DAIRY_L_18', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "One buyer controls pricing and timing.", signal_tags: ['BUYER_POWER'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_19', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "No contracts; everything is 'verbal'.", signal_tags: ['CONTRACT_COMPLIANCE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_20', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "We don't know which buyer is profitable after costs.", signal_tags: ['NET_MARGIN_TRACKING'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Money
    { id: 'LI_DAIRY_L_21', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Cash is reconciled weekly/monthly (too late).", signal_tags: ['PAYMENT_AUDIT'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_22', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "One person controls too many steps.", signal_tags: ['FRAUD_CONTROL'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_DAIRY_L_23', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Losses are hidden in 'miscellaneous'.", signal_tags: ['PRICING_LEAKAGE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- KPIs ---
    { id: 'KPI_DAIRY_1', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'kpi', text: "Active farmers (#) + churn rate %", kpi_text: "Target: < 5% churn", signal_tags: ['FARMER_CHURN'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_DAIRY_2', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'kpi', text: "Pass rate % vs Rejected %", kpi_text: "Track daily", signal_tags: ['REJECT_POLICY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_DAIRY_3', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'kpi', text: "Temp log compliance %", kpi_text: "Target: 100% per shift", signal_tags: ['TEMP_DISCIPLINE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_DAIRY_4', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'kpi', text: "Fuel cost per liter collected", kpi_text: "Track per route", signal_tags: ['FUEL_EFFICIENCY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_DAIRY_5', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'kpi', text: "SOP compliance score", kpi_text: "Audit weekly", signal_tags: ['SOP_GAP'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_DAIRY_6', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'kpi', text: "Net margin per liter by buyer", kpi_text: "Review monthly", signal_tags: ['NET_MARGIN_TRACKING'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_DAIRY_7', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'kpi', text: "Cash variance (Expected vs Actual)", kpi_text: "Target: 0%", signal_tags: ['PRICING_LEAKAGE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] }
];
