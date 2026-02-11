import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- PILLAR 1: Market (Market & Pricing Power) ---
    // Quick Scan
    {
        qid: 'QS_Poultry_Market_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "When demand spikes, you prioritize the fastest-paying channel.",
        textB: "When demand spikes, you prioritize your best-margin channel.",
        line_type: ['all'],
        signal_tags: ['CHANNEL_STRATEGY', 'MARGIN_FOCUS']
    },
    {
        qid: 'QS_Poultry_Market_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Before selling, you bundle everything into one offer to save time.",
        textB: "Before selling, you sort/grade first to capture premiums.",
        line_type: ['all'],
        signal_tags: ['GRADING_DISCIPLINE', 'VALUE_CAPTURE']
    },
    // Deep Scan
    {
        qid: 'DS_Poultry_Market_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We check prices when selling.",
        textB: "We track price trends weekly.",
        line_type: ['all'],
        signal_tags: ['PRICE_INTELLIGENCE']
    },
    {
        qid: 'DS_Poultry_Market_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We sell mixed sizes often.",
        textB: "We sell by grade/size.",
        line_type: ['all'],
        signal_tags: ['PRODUCT_GRADING']
    },
    {
        qid: 'DS_Poultry_Market_3',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We depend on one main buyer.",
        textB: "We maintain 2–3 buyer options.",
        line_type: ['all'],
        signal_tags: ['CHANNEL_DIVERSITY']
    },
    {
        qid: 'DS_Poultry_Market_4',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We plan selling by cash needs.",
        textB: "We plan selling by batch performance.",
        line_type: ['all'],
        signal_tags: ['SALES_TIMING']
    },
    {
        qid: 'DS_Poultry_Market_5',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Handling depends on who is present.",
        textB: "We reduce breakage with handling SOP.",
        line_type: ['all'],
        signal_tags: ['QUALITY_CONTROL']
    },
    {
        qid: 'DS_Poultry_Market_6',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We judge by gross price only.",
        textB: "We know best-performing channel by net margin.",
        line_type: ['all'],
        signal_tags: ['NET_MARGIN_FOCUS']
    },
    {
        qid: 'DS_Poultry_Market_7',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We accept random buyers.",
        textB: "We keep buyers with consistency.",
        line_type: ['all'],
        signal_tags: ['RELIABILITY']
    },
    {
        qid: 'DS_Poultry_Market_8',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We accept discounts/returns as normal.",
        textB: "We track discounts/returns.",
        line_type: ['all'],
        signal_tags: ['DISCOUNT_TRACKING']
    },
    {
        qid: 'DS_Poultry_Market_9',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We use whatever crates/trays are available.",
        textB: "We use standard crates/trays.",
        line_type: ['all'],
        signal_tags: ['PACKAGING_STANDARD']
    },
    {
        qid: 'DS_Poultry_Market_10',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We mix everything.",
        textB: "We separate premium products (clean eggs/uniform birds).",
        line_type: ['all'],
        signal_tags: ['PREMIUM_SEGMENTATION']
    },

    // --- PILLAR 2: Leadership (Flock Strategy) ---
    // Quick Scan
    {
        qid: 'QS_Poultry_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "When choosing chicks, you prefer quick delivery and flexible payment.",
        textB: "When choosing chicks, you prefer a supplier with consistent batch records.",
        line_type: ['all'],
        signal_tags: ['SUPPLIER_QUALITY', 'PLANNING_AHEAD']
    },
    {
        qid: 'QS_Poultry_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Expansion happens when market prices look attractive.",
        textB: "Expansion happens when pens and cashflow allow.",
        line_type: ['all'],
        signal_tags: ['GROWTH_STRATEGY', 'CAPACITY_DISCIPLINE']
    },
    // Deep Scan
    {
        qid: 'DS_Poultry_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Flexible placement timing.",
        textB: "Fixed placement calendar.",
        line_type: ['all'],
        signal_tags: ['PLACEMENT_CADENCE']
    },
    {
        qid: 'DS_Poultry_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Density adjusted 'as needed'.",
        textB: "Density rules followed.",
        line_type: ['all'],
        signal_tags: ['DENSITY_CONTROL']
    },
    {
        qid: 'DS_Poultry_Lead_3',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Mixing ages is common.",
        textB: "Batch/all-in-all-out thinking.",
        line_type: ['all'],
        signal_tags: ['BATCH_MANAGEMENT']
    },
    {
        qid: 'DS_Poultry_Lead_4',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Breed chosen by availability.",
        textB: "Breed matches climate/market.",
        line_type: ['all'],
        signal_tags: ['BREED_SELECTION']
    },
    {
        qid: 'DS_Poultry_Lead_5',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Replacements decided late.",
        textB: "Replacements planned (layers).",
        line_type: ['all'],
        signal_tags: ['REPLACEMENT_STRATEGY']
    },
    {
        qid: 'DS_Poultry_Lead_6',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Culling is emotional/rare.",
        textB: "Cull rules written.",
        line_type: ['all'],
        signal_tags: ['CULLING_DISCIPLINE']
    },
    {
        qid: 'DS_Poultry_Lead_7',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Supplier chosen mainly by price.",
        textB: "Supplier quality audited.",
        line_type: ['all'],
        signal_tags: ['SUPPLIER_AUDIT']
    },
    {
        qid: 'DS_Poultry_Lead_8',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "We track only total birds.",
        textB: "We track flock age/phase properly.",
        line_type: ['all'],
        signal_tags: ['FLOCK_DATA']
    },
    {
        qid: 'DS_Poultry_Lead_9',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Buy feed as shortages appear.",
        textB: "Plan feed inventory ahead of placement.",
        line_type: ['all'],
        signal_tags: ['INVENTORY_PLANNING']
    },
    {
        qid: 'DS_Poultry_Lead_10',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Adjust model by 'sales volume'.",
        textB: "Adjust model by real margins.",
        line_type: ['all'],
        signal_tags: ['MODEL_OPTIMIZATION']
    },

    // --- PILLAR 3: Operations (Feed/Water + Housing) ---
    // Note: User Pillar 3 (Feed) and User Pillar 6 (Housing) merged here.
    // Quick Scan
    {
        qid: 'QS_Poultry_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When feed costs rise, you negotiate price and keep routine unchanged.",
        textB: "When feed costs rise, you reduce waste and measure conversion.",
        line_type: ['all'],
        signal_tags: ['COST_CONTROL', 'EFFICIENCY_MINDSET']
    },
    {
        qid: 'QS_Poultry_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When it gets hot, you adjust feeding time and reduce disturbance.",
        textB: "When it gets hot, you adjust airflow and water strategy.",
        line_type: ['all'],
        signal_tags: ['HEAT_STRESS_RESPONSE', 'ENVIRONMENTAL_CONTROL']
    },
    // Deep Scan
    {
        qid: 'DS_Poultry_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Feeder height 'set once'.",
        textB: "Feeder height adjusted routinely.",
        line_type: ['all'],
        signal_tags: ['EQUIPMENT_MANAGEMENT']
    },
    {
        qid: 'DS_Poultry_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Feed storage is mixed-use.",
        textB: "Feed stored secure and dry.",
        line_type: ['all'],
        signal_tags: ['FEED_STORAGE']
    },
    {
        qid: 'DS_Poultry_Ops_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Water checked when problems appear.",
        textB: "Water system checked daily.",
        line_type: ['all'],
        signal_tags: ['WATER_SECURITY']
    },
    {
        qid: 'DS_Poultry_Ops_4',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Phase feeding flexible.",
        textB: "Phase feeding followed.",
        line_type: ['all'],
        signal_tags: ['NUTRITION_DISCIPLINE']
    },
    {
        qid: 'DS_Poultry_Ops_5',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Ventilation adjusted occasionally.",
        textB: "Ventilation monitored daily.",
        line_type: ['all'],
        signal_tags: ['VENTILATION_CONTROL']
    },
    {
        qid: 'DS_Poultry_Ops_6',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Wet litter tolerated briefly.",
        textB: "Litter kept dry consistently.",
        line_type: ['all'],
        signal_tags: ['LITTER_MANAGEMENT']
    },
    {
        qid: 'DS_Poultry_Ops_7',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Heat mitigation improvised.",
        textB: "Heat mitigation planned.",
        line_type: ['all'],
        signal_tags: ['CLIMATE_RESILIENCE']
    },
    {
        qid: 'DS_Poultry_Ops_8',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Ammonia accepted as normal.",
        textB: "Reduce ammonia proactively.",
        line_type: ['all'],
        signal_tags: ['AIR_QUALITY']
    },
    {
        qid: 'DS_Poultry_Ops_9',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Lighting is basic.",
        textB: "Lighting plan intentional (layers).",
        line_type: ['all'],
        signal_tags: ['LIGHTING_PROGRAM']
    },
    {
        qid: 'DS_Poultry_Ops_10',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Workflow depends on experience.",
        textB: "House layout supports easy workflow.",
        line_type: ['all'],
        signal_tags: ['WORKFLOW_DESIGN']
    },

    // --- PILLAR 4: Innovation (Brooding & Early Life) ---
    // User Pillar 4 mapped to Innovation
    // Quick Scan
    {
        qid: 'QS_Poultry_Inn_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Before chicks arrive, you prepare same day but quickly.",
        textB: "Before chicks arrive, you prepare the brooder 24–48 hours early.",
        line_type: ['all'],
        signal_tags: ['PREPARATION_DISCIPLINE']
    },
    {
        qid: 'QS_Poultry_Inn_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "In the first 48 hours, you keep routine steady and observe.",
        textB: "In the first 48 hours, you increase checks and adjustments.",
        line_type: ['all'],
        signal_tags: ['INTENSIVE_CARE']
    },
    // Deep Scan
    {
        qid: 'DS_Poultry_Inn_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Warm up after arrival.",
        textB: "Pre-heat and test everything early.",
        line_type: ['all'],
        signal_tags: ['BROODING_SETUP']
    },
    {
        qid: 'DS_Poultry_Inn_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Assume drinkers are enough.",
        textB: "Confirm water access for all.",
        line_type: ['all'],
        signal_tags: ['EARLY_ACCESS']
    },
    {
        qid: 'DS_Poultry_Inn_3',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Monitor mainly temperature reading.",
        textB: "Monitor chick behavior for comfort.",
        line_type: ['all'],
        signal_tags: ['ANIMAL_OBSERVATION']
    },
    {
        qid: 'DS_Poultry_Inn_4',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Keep house closed for warmth.",
        textB: "Manage drafts/ventilation actively.",
        line_type: ['all'],
        signal_tags: ['AIR_EXCHANGE']
    },
    {
        qid: 'DS_Poultry_Inn_5',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Address wet litter later.",
        textB: "Keep litter dry from day 1.",
        line_type: ['all'],
        signal_tags: ['LITTER_QUALITY']
    },
    {
        qid: 'DS_Poultry_Inn_6',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Keep standard settings.",
        textB: "Adjust light/feed access early.",
        line_type: ['all'],
        signal_tags: ['ADAPTABILITY']
    },
    {
        qid: 'DS_Poultry_Inn_7',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Record only total deaths.",
        textB: "Record early deaths and causes.",
        line_type: ['all'],
        signal_tags: ['DATA_GRANULARITY']
    },
    {
        qid: 'DS_Poultry_Inn_8',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Check uniformity near selling.",
        textB: "Check uniformity week 1/2.",
        line_type: ['all'],
        signal_tags: ['EARLY_TRACKING']
    },
    {
        qid: 'DS_Poultry_Inn_9',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Leave weak chicks in group.",
        textB: "Isolate weak chicks early.",
        line_type: ['all'],
        signal_tags: ['INTERVENTION']
    },
    {
        qid: 'DS_Poultry_Inn_10',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Brooding varies by worker.",
        textB: "Keep brooding SOP consistent.",
        line_type: ['all'],
        signal_tags: ['STANDARD_WORK']
    },

    // --- PILLAR 5: Risk (Health & Bio) ---
    // Quick Scan
    {
        qid: 'QS_Poultry_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Visitor access is managed case-by-case.",
        textB: "Visitor access is restricted and tracked.",
        line_type: ['all'],
        signal_tags: ['ACCESS_CONTROL']
    },
    {
        qid: 'QS_Poultry_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "When birds look off, you observe first before separating.",
        textB: "When birds look off, you isolate quickly.",
        line_type: ['all'],
        signal_tags: ['DISEASE_RESPONSE']
    },
    // Deep Scan
    {
        qid: 'DS_Poultry_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Entry controls flexible.",
        textB: "Entry controls consistent.",
        line_type: ['all'],
        signal_tags: ['BIOSECURITY_BARRIER']
    },
    {
        qid: 'DS_Poultry_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Treat inside the flock.",
        textB: "Isolate sick birds quickly.",
        line_type: ['all'],
        signal_tags: ['ISOLATION']
    },
    {
        qid: 'DS_Poultry_Risk_3',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Vaccination memory-based.",
        textB: "Vaccination records complete.",
        line_type: ['all'],
        signal_tags: ['RECORD_KEEPING']
    },
    {
        qid: 'DS_Poultry_Risk_4',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Cleaning is mainly wet washing.",
        textB: "House cleaning includes dry-time.",
        line_type: ['all'],
        signal_tags: ['HYGIENE_PROTOCOL']
    },
    {
        qid: 'DS_Poultry_Risk_5',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Water sanitation occasional.",
        textB: "Water sanitation routine exists.",
        line_type: ['all'],
        signal_tags: ['WATER_HYGIENE']
    },
    {
        qid: 'DS_Poultry_Risk_6',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Disposal improvised.",
        textB: "Dead bird disposal SOP.",
        line_type: ['all'],
        signal_tags: ['WASTE_DISPOSAL']
    },
    {
        qid: 'DS_Poultry_Risk_7',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Workers rotate freely.",
        textB: "Workers assigned per house.",
        line_type: ['all'],
        signal_tags: ['CROSS_CONTAMINATION']
    },
    {
        qid: 'DS_Poultry_Risk_8',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Repeat treatments.",
        textB: "Review outbreaks for causes.",
        line_type: ['all'],
        signal_tags: ['ROOT_CAUSE_ANALYSIS']
    },
    {
        qid: 'DS_Poultry_Risk_9',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Control minimal.",
        textB: "Rodent/wild bird control active.",
        line_type: ['all'],
        signal_tags: ['PEST_CONTROL']
    },
    {
        qid: 'DS_Poultry_Risk_10',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Quick turnover without reset.",
        textB: "Strict downtime between cycles.",
        line_type: ['all'],
        signal_tags: ['CYCLE_BREAK']
    },

    // --- PILLAR 7: People (Ops & Records) ---
    // Quick Scan
    {
        qid: 'QS_Poultry_People_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Daily checks are usually done by experience and observation.",
        textB: "Daily checks are usually done using a checklist.",
        line_type: ['all'],
        signal_tags: ['STANDARD_WORK']
    },
    {
        qid: 'QS_Poultry_People_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "When performance dips, you consult the team for observations first.",
        textB: "When performance dips, you review last 7 days records.",
        line_type: ['all'],
        signal_tags: ['DATA_DRIVEN_MGMT']
    },
    // Deep Scan
    {
        qid: 'DS_Poultry_People_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Logs updated occasionally.",
        textB: "Daily logs consistent.",
        line_type: ['all'],
        signal_tags: ['RECORD_DISCIPLINE']
    },
    {
        qid: 'DS_Poultry_People_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Roles flexible.",
        textB: "Staff roles clear.",
        line_type: ['all'],
        signal_tags: ['ACCOUNTABILITY']
    },
    {
        qid: 'DS_Poultry_People_3',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Review when issues appear.",
        textB: "Weekly KPI review routine.",
        line_type: ['all'],
        signal_tags: ['MANAGEMENT_RHYTHM']
    },
    {
        qid: 'DS_Poultry_People_4',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Egg handling varies by worker.",
        textB: "Egg handling SOP strict (layers).",
        line_type: ['all'],
        signal_tags: ['QUALITY_SOP']
    },
    {
        qid: 'DS_Poultry_People_5',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Weights checked near sale.",
        textB: "Weight sampling routine (broilers).",
        line_type: ['all'],
        signal_tags: ['PERFORMANCE_TRACKING']
    },
    {
        qid: 'DS_Poultry_People_6',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Maintenance is reactive.",
        textB: "Maintenance schedule exists.",
        line_type: ['all'],
        signal_tags: ['PREVENTIVE_MAINTENANCE']
    },
    {
        qid: 'DS_Poultry_People_7',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Inventory is reconciled monthly.",
        textB: "Inventory is reconciled weekly.",
        line_type: ['all'],
        signal_tags: ['STOCK_CONTROL']
    },
    {
        qid: 'DS_Poultry_People_8',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Training is informal.",
        textB: "Training refresh happens.",
        line_type: ['all'],
        signal_tags: ['SKILL_BUILDING']
    },
    {
        qid: 'DS_Poultry_People_9',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Issues handled quietly.",
        textB: "Issue escalation system exists.",
        line_type: ['all'],
        signal_tags: ['COMMUNICATION_FLOW']
    },
    {
        qid: 'DS_Poultry_People_10',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Targets assumed.",
        textB: "Performance targets communicated.",
        line_type: ['all'],
        signal_tags: ['GOAL_ALIGNMENT']
    },

    // --- PILLAR 8: Money (Finance) ---
    // User Pillar 8 mapped to Money
    // Quick Scan
    {
        qid: 'QS_Poultry_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "When cash is tight, you reduce spending across everything.",
        textB: "When cash is tight, you protect feed + biosecurity spending.",
        line_type: ['all'],
        signal_tags: ['CASH_PRIORITIZATION']
    },
    {
        qid: 'QS_Poultry_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Feed stock is usually managed by purchase timing and intuition.",
        textB: "Feed stock is usually managed by stock card + reconciliation.",
        line_type: ['all'],
        signal_tags: ['INVENTORY_DISCIPLINE']
    },
    // Deep Scan
    {
        qid: 'DS_Poultry_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Profit judged by cash remaining.",
        textB: "Cost per unit calculated.",
        line_type: ['all'],
        signal_tags: ['UNIT_ECONOMICS']
    },
    {
        qid: 'DS_Poultry_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "P&L occasional.",
        textB: "Batch P&L routine.",
        line_type: ['all'],
        signal_tags: ['PROFIT_TRACKING']
    },
    {
        qid: 'DS_Poultry_Money_3',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "One wallet.",
        textB: "Farm/home money separated.",
        line_type: ['all'],
        signal_tags: ['FINANCIAL_HYGIENE']
    },
    {
        qid: 'DS_Poultry_Money_4',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Reconciled when empty.",
        textB: "Inventory reconciled weekly.",
        line_type: ['all'],
        signal_tags: ['THEFT_PREVENTION']
    },
    {
        qid: 'DS_Poultry_Money_5',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Utilities treated as fixed.",
        textB: "Utilities tracked and optimized.",
        line_type: ['all'],
        signal_tags: ['OVERHEAD_CONTROL']
    },
    {
        qid: 'DS_Poultry_Money_6',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Theft assumed but not measured.",
        textB: "Theft points controlled.",
        line_type: ['all'],
        signal_tags: ['LOSS_PREVENTION']
    },
    {
        qid: 'DS_Poultry_Money_7',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Debt used for emergencies.",
        textB: "Debt planned around ROI.",
        line_type: ['all'],
        signal_tags: ['DEBT_STRATEGY']
    },
    {
        qid: 'DS_Poultry_Money_8',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Waste is disposal problem.",
        textB: "Waste has value plan.",
        line_type: ['all'],
        signal_tags: ['WASTE_REVENUE']
    },
    {
        qid: 'DS_Poultry_Money_9',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Buy at spot prices.",
        textB: "Suppliers terms negotiated.",
        line_type: ['all'],
        signal_tags: ['PROCUREMENT']
    },
    {
        qid: 'DS_Poultry_Money_10',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Reinvest in many small items.",
        textB: "Reinvest in bottlenecks.",
        line_type: ['all'],
        signal_tags: ['CAPITAL_ALLOCATION']
    }
];
