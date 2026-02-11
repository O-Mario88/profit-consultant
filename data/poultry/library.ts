import { LibraryItem } from '../../types';

export const library: LibraryItem[] = [
    // --- Strength Statements ---
    // PILLAR 1: Market (Market & Pricing Power)
    { id: 'LI_POULTRY_S_1', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We sell by product grade (size/weight, clean).", signal_tags: ['GRADING_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_2', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We have multiple active buyer channels.", signal_tags: ['CHANNEL_MIX'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_3', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We schedule selling to avoid distress actions.", signal_tags: ['SALES_PLANNING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_4', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We maintain consistent supply for buyers.", signal_tags: ['RELIABILITY_SCORE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_5', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We track price changes weekly.", signal_tags: ['PRICE_INTELLIGENCE'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 2: Leadership (Flock Strategy)
    { id: 'LI_POULTRY_S_6', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "Placement matches cash and space capacity.", signal_tags: ['CAPACITY_PLANNING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_7', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "Breed chosen aligns with market/climate.", signal_tags: ['BREED_SELECTION'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_8', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "Stocking density rules are respected.", signal_tags: ['DENSITY_CONTROL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_9', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "Batch system reduces disease mixing.", signal_tags: ['BATCH_MANAGEMENT'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_10', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "Suppliers selected on performance consistency.", signal_tags: ['SUPPLIER_QUALITY'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 3: Operations (Feed & Water + Housing)
    { id: 'LI_POULTRY_S_11', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Feed stored dry, secure, and FIFO.", signal_tags: ['FEED_STORAGE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_12', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Feeders adjusted to kill spillage.", signal_tags: ['WASTE_CONTROL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_13', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Water pressure and hygiene checked daily.", signal_tags: ['WATER_UPTIME'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_14', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "We match feed type to bird stage.", signal_tags: ['PHASE_FEEDING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_15', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Ventilation balances fresh air and temp.", signal_tags: ['AIR_QUALITY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_16', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Litter managed dry; ammonia controlled.", signal_tags: ['LITTER_MANAGEMENT'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 4: Innovation (Brooding/Early Life)
    { id: 'LI_POULTRY_S_17', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Brooder pre-heated before arrival.", signal_tags: ['BROODING_SETUP'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_18', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Chicks get water and feed immediately.", signal_tags: ['EARLY_ACCESS'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_19', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Uniformity checks done week 1 & 2.", signal_tags: ['UNIFORMITY_TRACKING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_20', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'strength', text: "Early mortality analysis acts as alert.", signal_tags: ['MORTALITY_ANALYSIS'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 5: Risk (Health/Bio)
    { id: 'LI_POULTRY_S_21', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Visitor control and boots/hygiene enforced.", signal_tags: ['BIOSECURITY_ACCESS'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_22', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Sick birds isolated immediately.", signal_tags: ['ISOLATION_PROTOCOL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_23', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Vaccination schedule strictly followed.", signal_tags: ['VACCINATION_COMPLIANCE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_24', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Outbreaks trigger root-cause review.", signal_tags: ['DISEASE_RESPONSE'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 7: People (Ops & Records)
    { id: 'LI_POULTRY_S_25', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Daily checklists used for consistency.", signal_tags: ['STANDARD_PROCEDURES'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_26', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Staff roles and accountability clear.", signal_tags: ['ROLE_CLARITY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_27', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Performance data reviewed weekly.", signal_tags: ['PERFORMANCE_REVIEW'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_28', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'strength', text: "Maintenance schedule prevents downtime.", signal_tags: ['MAINTENANCE_PLAN'], line_type: ['all'], severity_fit: ['Stable'] },

    // PILLAR 8: Money (Finance)
    { id: 'LI_POULTRY_S_29', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Cost of production (unit cost) known.", signal_tags: ['UNIT_COSTING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_30', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Farm cash separated from personal cash.", signal_tags: ['CASH_SEPARATION'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_31', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Batch P&L completed every cycle.", signal_tags: ['PROFIT_TRACKING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_POULTRY_S_32', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Waste has a value plan (manure/sacks).", signal_tags: ['WASTE_VALORIZATION'], line_type: ['all'], severity_fit: ['Stable'] },

    // --- Shortcoming Statements ---
    // Market
    { id: 'LI_POULTRY_L_1', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "Selling under cash pressure, not readiness.", signal_tags: ['CASH_FLOW_PRESSURE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_2', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "Mixed sizes sold; discounts accepted.", signal_tags: ['GRADING_DISCIPLINE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_3', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "Relying on one buyer channel.", signal_tags: ['BUYER_DEPENDENCY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Leadership
    { id: 'LI_POULTRY_L_4', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Placement is random/reactive to cash.", signal_tags: ['PLACEMENT_GAPS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_5', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Overstocking stress hurts growth.", signal_tags: ['OVERCROWDING'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_6', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Mixing ages spreads disease.", signal_tags: ['BIOSECURITY_RISK'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Operations
    { id: 'LI_POULTRY_L_7', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Feed spillage accepted as normal.", signal_tags: ['FEED_WASTE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_8', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Water failure events go unnoticed.", signal_tags: ['WATER_SECURITY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_9', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Ammonia and wet litter commonplace.", signal_tags: ['AIR_QUALITY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_10', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Heat stress kills growth silently.", signal_tags: ['HEAT_STRESS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Innovation (Brooding)
    { id: 'LI_POULTRY_L_11', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'leak', text: "Brooding starts late (chilling).", signal_tags: ['BROODING_ERRORS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_12', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'leak', text: "Uneven access creates runts.", signal_tags: ['UNIFORMITY_LOSS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_13', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Innovation', type: 'leak', text: "Week 1 losses accepted as normal.", signal_tags: ['MORTALITY_ACCEPTANCE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Risk
    { id: 'LI_POULTRY_L_14', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Free movement between houses.", signal_tags: ['BIOSECURITY_GAP'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_15', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Sick birds remain in flock.", signal_tags: ['ISOLATION_FAILURE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_16', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Vaccinations missed or unrecorded.", signal_tags: ['VACCINATION_GAP'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // People
    { id: 'LI_POULTRY_L_17', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'leak', text: "Tasks rely on memory, not checklists.", signal_tags: ['PROCESS_DEPENDENCY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_18', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'leak', text: "Egg/bird handling causes damage.", signal_tags: ['HANDLING_ERRORS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_19', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'leak', text: "Inventory leakage suspected.", signal_tags: ['THEFT_RISK'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // Money
    { id: 'LI_POULTRY_L_20', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Profit guessed from sales cash.", signal_tags: ['FINANCIAL_BLINDNESS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_21', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Personal withdrawals drain budgets.", signal_tags: ['CASH_DRAIN'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_POULTRY_L_22', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Waste is a nuisance, not value.", signal_tags: ['WASTE_LOSS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- KPIs ---
    { id: 'KPI_POULTRY_1', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'kpi', text: "FCR (Feed Conversion Ratio)", kpi_text: "Target: < 1.6 (Broiler) / < 2.2 kg/dz (Layer)", signal_tags: ['PERFORMANCE_METRICS'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_POULTRY_2', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'kpi', text: "Mortality % (Daily + Cumulative)", kpi_text: "Target: < 5% per cycle", signal_tags: ['MORTALITY_TRACKING'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_POULTRY_3', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Operations', type: 'kpi', text: "Uniformity %", kpi_text: "Target: > 85% within range", signal_tags: ['UNIFORMITY_METRIC'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_POULTRY_4', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Money', type: 'kpi', text: "Cost per kg / Cost per tray", kpi_text: "Track weekly", signal_tags: ['UNIT_COSTING'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_POULTRY_5', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'Market', type: 'kpi', text: "Average price vs Market", kpi_text: "Track margin per channel", signal_tags: ['PRICE_BENCHMARK'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_POULTRY_6', industry: 'agriculture', business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'], pillar: 'People', type: 'kpi', text: "Checklist Compliance %", kpi_text: "Target: 100% daily", signal_tags: ['PROCESS_ADHERENCE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] }
];
