import { LibraryItem } from '../../types';

export const LIBRARY: LibraryItem[] = [
    // --- Stocking & Production Planning (Mapped to LEADERSHIP) ---
    { id: 'LI_FISH_S_1', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "Stocking dates are planned around market demand, not impulse.", signal_tags: ['NO_CYCLE_PLAN'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_2', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "Fingerlings are sourced from verified suppliers with records.", signal_tags: ['SUPPLIER_SWITCHING'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_3', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "Stocking density matches system capacity.", signal_tags: ['DENSITY_GUESSWORK'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_4', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We maintain accurate stock counts and loss estimates.", signal_tags: ['NO_BATCH_RECORDS'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    { id: 'LI_FISH_L_1', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Stocking happens when fingerlings are available, not per plan.", signal_tags: ['SUPPLIER_DRIVEN_STOCKING'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_2', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "No batch traceability; mixed stock hides performance.", signal_tags: ['MIXED_BATCHES'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_3', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Stocking density is guessed or copied.", signal_tags: ['DENSITY_IGNORED'], line_type: ['fisheries'], severity_fit: ['Critical'] },

    // --- Feed, Nutrition & Conversion (Mapped to OPERATIONS & MONEY) ---
    // Operations (Execution)
    { id: 'LI_FISH_S_5', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Feed is issued and logged; nothing 'disappears.'", signal_tags: ['FEED_LOG_DAILY_ONLY'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_6', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Feeding is based on biomass + water temperature.", signal_tags: ['FEEDING_BY_HABIT'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_7', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Feed storage is dry, sealed, FIFO, pest-controlled.", signal_tags: ['OPEN_FEED_STORE'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    // Money (Efficiency/FCR)
    { id: 'LI_FISH_S_8', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "We track FCR and act when it drifts.", signal_tags: ['FCR_UNKNOWN'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_9', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "We prevent overfeeding by checking leftovers.", signal_tags: ['LEFTOVERS_IGNORED'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    { id: 'LI_FISH_L_4', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Feed is 'used as needed' without precise logs.", signal_tags: ['FEED_LOG_DAILY_ONLY'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_5', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "We don’t measure FCR; we guess profitability.", signal_tags: ['FCR_UNKNOWN'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_6', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Overfeeding increases waste and costs.", signal_tags: ['OVERFEEDING_RISK'], line_type: ['fisheries'], severity_fit: ['Critical'] },

    // --- Water Quality & Bio (Mapped to RISK) ---
    { id: 'LI_FISH_S_10', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "DO/temp/pH monitored at risk times with logs.", signal_tags: ['REACTIVE_WATER_CHECKS'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_11', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Biosecurity rules are consistent (visitors, tools).", signal_tags: ['VISITOR_CONVENIENCE'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_12', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Mortality removal is fast and documented.", signal_tags: ['MORTALITY_LEFT_IN'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    { id: 'LI_FISH_L_7', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Water testing is irregular; logs are incomplete.", signal_tags: ['LOGS_IGNORED'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_8', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Aeration is insufficient or starts late.", signal_tags: ['AERATION_FIXED'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_9', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "We respond after losses, not before.", signal_tags: ['REACTIVE_MORTALITY_RESPONSE'], line_type: ['fisheries'], severity_fit: ['Critical'] },

    // --- Growth & Harvest (Mapped to OPERATIONS) ---
    { id: 'LI_FISH_S_13', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "We measure size and growth trends weekly.", signal_tags: ['VISUAL_SIZE_GUESS'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_14', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Harvest timing protects price and survival.", signal_tags: ['HARVEST_REACTIVE'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_15', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Grading improves uniformity and market value.", signal_tags: ['AD_HOC_GRADING'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    { id: 'LI_FISH_L_10', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "We rarely weigh; growth is assumed.", signal_tags: ['VISUAL_SIZE_GUESS'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_11', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Harvest is rushed by buyer demand or cash pressure.", signal_tags: ['CASH_DRIVEN_HARVEST'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_12', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "No grading; uneven sizes force discounts.", signal_tags: ['REACTIVE_GRADING'], line_type: ['fisheries'], severity_fit: ['Critical'] },

    // --- Post-Harvest (Mapped to OPERATIONS) ---
    { id: 'LI_FISH_S_16', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Time-to-ice is standardized and enforced.", signal_tags: ['DELAYED_ICING'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_17', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Temperature is logged at dispatch.", signal_tags: ['NO_TEMP_LOGS'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    { id: 'LI_FISH_L_13', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Delays before icing/chilling are common.", signal_tags: ['DELAYED_ICING'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_14', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Ice shortages force quality compromises.", signal_tags: ['LAST_MINUTE_ICE'], line_type: ['fisheries'], severity_fit: ['Critical'] },

    // --- Sales & Channels (Mapped to MARKET) ---
    { id: 'LI_FISH_S_18', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We sell by grade/spec, not 'one price for all.'", signal_tags: ['MIXED_GRADES_SELLING'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_19', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We diversify channels to reduce buyer power.", signal_tags: ['SINGLE_BUYER_DEPENDENCY'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    { id: 'LI_FISH_L_15', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "One buyer dominates pricing strategy.", signal_tags: ['BUYER_DEPENDENCY'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_16', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "Selling is reactive; price depends on urgency.", signal_tags: ['URGENCY_NEGOTIATION'], line_type: ['fisheries'], severity_fit: ['Critical'] },

    // --- Finance (Mapped to MONEY) ---
    { id: 'LI_FISH_S_20', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "We know fully loaded cost/kg.", signal_tags: ['COST_RARELY_CALCULATED'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_21', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Purchases follow approvals; inventory is reconciled.", signal_tags: ['UNAUTHORIZED_PURCHASES'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    { id: 'LI_FISH_L_17', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "We don’t know true cost/kg.", signal_tags: ['COST_RARELY_CALCULATED'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_18', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Cashflow is reactive; payment delays create crises.", signal_tags: ['CASHFLOW_IGNORED'], line_type: ['fisheries'], severity_fit: ['Critical'] },

    // --- People & Assets (Mapped to PEOPLE) ---
    { id: 'LI_FISH_S_22', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'strength', text: "SOPs are visible and followed.", signal_tags: ['TRUSTED_SOP'], line_type: ['fisheries'], severity_fit: ['Stable'] },
    { id: 'LI_FISH_S_23', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Preventive maintenance is scheduled.", signal_tags: ['BREAKDOWN_MAINTENANCE'], line_type: ['fisheries'], severity_fit: ['Stable'] },

    { id: 'LI_FISH_L_19', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'leak', text: "Operations rely on 'experienced people,' not systems.", signal_tags: ['INFORMAL_ROLES'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'LI_FISH_L_20', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'leak', text: "Maintenance is reactive; downtime is frequent.", signal_tags: ['BREAKDOWN_MAINTENANCE'], line_type: ['fisheries'], severity_fit: ['Critical'] },

    // --- KPIs ---
    { id: 'KPI_FISH_1', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'kpi', text: "FCR (Feed Conversion Ratio)", kpi_text: "Target: < 1.3 (Tilapia) / < 1.5 (Catfish)", signal_tags: ['FCR_UNKNOWN'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'KPI_FISH_2', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'kpi', text: "Mortality %", kpi_text: "Target: < 10% per cycle", signal_tags: ['MORTALITY_TRACKING_WEAK'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'KPI_FISH_3', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'kpi', text: "Cost per kg produced", kpi_text: "Track weekly", signal_tags: ['COST_RARELY_CALCULATED'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'KPI_FISH_4', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'kpi', text: "Biomass Estimate Accuracy", kpi_text: "Harvest vs Estimate < 5% variance", signal_tags: ['BIOMASS_GUESSWORK'], line_type: ['fisheries'], severity_fit: ['Critical'] },
    { id: 'KPI_FISH_5', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'kpi', text: "Average Price/kg", kpi_text: "Track vs Market benchmark", signal_tags: ['PRICE_ACCEPTANCE'], line_type: ['fisheries'], severity_fit: ['Critical'] }
];
