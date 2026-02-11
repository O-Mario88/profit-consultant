import { QuestionDefinition } from '../../types';

export const QUESTIONS: QuestionDefinition[] = [
    // --- PILLAR 1: Leadership (Stocking & Production Planning) ---
    // Quick Scan
    {
        qid: 'QS_Fish_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "We specify 'stocking' based on fingerling availability/cash.",
        textB: "We stock based on a cycle plan and harvest targets.",
        line_type: ['fisheries'],
        signal_tags: ['NO_CYCLE_PLAN']
    },
    {
        qid: 'QS_Fish_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Batch records are mostly in memory or scattered notes.",
        textB: "Batch records are kept per delivery/unit/day.",
        line_type: ['fisheries'],
        signal_tags: ['NO_BATCH_RECORDS']
    },
    {
        qid: 'QS_Fish_Lead_3',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Stocking density is based on 'what usually works'.",
        textB: "Stocking density is capacity-based and reviewed.",
        line_type: ['fisheries'],
        signal_tags: ['DENSITY_GUESSWORK']
    },
    {
        qid: 'QS_Fish_Lead_4',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "We separate batches by convenience/space.",
        textB: "We separate batches by system/unit and date.",
        line_type: ['fisheries'],
        signal_tags: ['MIXED_BATCHES']
    },
    // Deep Scan
    {
        qid: 'DS_Fish_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "New stock is released immediately.",
        textB: "New stock is quarantined and observed.",
        line_type: ['fisheries'],
        signal_tags: ['QUARANTINE_SKIPPED']
    },
    {
        qid: 'DS_Fish_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "We trust supplier counts.",
        textB: "We verify counts/weights on arrival.",
        line_type: ['fisheries'],
        signal_tags: ['NO_ARRIVAL_COUNTS']
    },
    {
        qid: 'DS_Fish_Lead_3',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Suppliers are switched on price.",
        textB: "Supplier performance is tracked.",
        line_type: ['fisheries'],
        signal_tags: ['SUPPLIER_SWITCHING']
    },
    {
        qid: 'DS_Fish_Lead_4',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Transport conditions assumed okay.",
        textB: "Transport time/temp recorded.",
        line_type: ['fisheries'],
        signal_tags: ['TRANSPORT_IGNORED']
    },
    {
        qid: 'DS_Fish_Lead_5',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Inputs bought after stocking.",
        textB: "Inputs planned before stocking.",
        line_type: ['fisheries'],
        signal_tags: ['INPUTS_LATE']
    },

    // --- PILLAR 2: Money (Feed & Finance) ---
    // Quick Scan
    {
        qid: 'QS_Fish_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Feeding amounts based on habit/visual appetite.",
        textB: "Feeding amounts based on biomass + schedule.",
        line_type: ['fisheries'],
        signal_tags: ['FEEDING_BY_HABIT']
    },
    {
        qid: 'QS_Fish_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Feed store is open access.",
        textB: "Feed issuance is logged (FIFO).",
        line_type: ['fisheries'],
        signal_tags: ['OPEN_FEED_STORE']
    },
    {
        qid: 'QS_Fish_Money_3',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Profitability judged by bank balance.",
        textB: "Cost/kg and margin/kg calculated.",
        line_type: ['fisheries'],
        signal_tags: ['BANK_BALANCE_FEELING']
    },
    {
        qid: 'QS_Fish_Money_4',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Inventory checked when low.",
        textB: "Inventory reconciled and signed off.",
        line_type: ['fisheries'],
        signal_tags: ['REACTIVE_STOCK_CHECKS']
    },
    // Deep Scan
    {
        qid: 'DS_Fish_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Weighing is occasional.",
        textB: "Weekly sampling/weighing routine.",
        line_type: ['fisheries'],
        signal_tags: ['OCCASIONAL_WEIGHING']
    },
    {
        qid: 'DS_Fish_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Ration is constant.",
        textB: "Ration adjusted by temp/biomass.",
        line_type: ['fisheries'],
        signal_tags: ['RATION_CONSTANT']
    },
    {
        qid: 'DS_Fish_Money_3',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Feed logged daily only.",
        textB: "Feed logged per unit/batch.",
        line_type: ['fisheries'],
        signal_tags: ['FEED_LOG_DAILY_ONLY']
    },
    {
        qid: 'DS_Fish_Money_4',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "FCR is unknown.",
        textB: "FCR tracked weekly.",
        line_type: ['fisheries'],
        signal_tags: ['FCR_UNKNOWN']
    },
    {
        qid: 'DS_Fish_Money_5',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Cost/kg rarely calculated.",
        textB: "Cost/kg calculated monthly/weekly.",
        line_type: ['fisheries'],
        signal_tags: ['COST_RARELY_CALCULATED']
    },
    {
        qid: 'DS_Fish_Money_6',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "No clear cycle budget.",
        textB: "Cycle budget exists.",
        line_type: ['fisheries'],
        signal_tags: ['NO_CYCLE_BUDGET']
    },
    {
        qid: 'DS_Fish_Money_7',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Receivables tracked by memory.",
        textB: "Receivables tracker exists.",
        line_type: ['fisheries'],
        signal_tags: ['MEMORY_TRACKING']
    },
    {
        qid: 'DS_Fish_Money_8',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Roles overlap (purchase/pay).",
        textB: "Roles separated for control.",
        line_type: ['fisheries'],
        signal_tags: ['OVERLAPPING_ROLES']
    },

    // --- PILLAR 3: Risk (Water & Bio) ---
    // Quick Scan
    {
        qid: 'QS_Fish_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Water checks done when fish look off.",
        textB: "Water checks scheduled and logged.",
        line_type: ['fisheries'],
        signal_tags: ['REACTIVE_WATER_CHECKS']
    },
    {
        qid: 'QS_Fish_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "On mortality rise, change feed/medicate first.",
        textB: "On mortality rise, test DO/temp/pH first.",
        line_type: ['fisheries'],
        signal_tags: ['REACTIVE_MORTALITY_RESPONSE']
    },
    {
        qid: 'QS_Fish_Risk_3',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Visitors allowed for convenience.",
        textB: "Visitors/tools controlled by rules.",
        line_type: ['fisheries'],
        signal_tags: ['VISITOR_CONVENIENCE']
    },
    {
        qid: 'QS_Fish_Risk_4',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Treatments based on urgency/experience.",
        textB: "Treatments measured and recorded.",
        line_type: ['fisheries'],
        signal_tags: ['REACTIVE_TREATMENT']
    },
    // Deep Scan
    {
        qid: 'DS_Fish_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "DO checks random/midday.",
        textB: "DO checks at dawn/critical times.",
        line_type: ['fisheries'],
        signal_tags: ['MIDDAY_DO_CHECKS']
    },
    {
        qid: 'DS_Fish_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Logs ignored unless requested.",
        textB: "Logs reviewed daily.",
        line_type: ['fisheries'],
        signal_tags: ['LOGS_IGNORED']
    },
    {
        qid: 'DS_Fish_Risk_3',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Aeration fixed/constant.",
        textB: "Aeration matched to biomass.",
        line_type: ['fisheries'],
        signal_tags: ['AERATION_FIXED']
    },
    {
        qid: 'DS_Fish_Risk_4',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Dead fish left until convenient.",
        textB: "Dead fish removed same day.",
        line_type: ['fisheries'],
        signal_tags: ['MORTALITY_LEFT_IN']
    },
    {
        qid: 'DS_Fish_Risk_5',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Tools shared across units.",
        textB: "Separate nets/tools per unit.",
        line_type: ['fisheries'],
        signal_tags: ['SHARED_TOOLS']
    },

    // --- PILLAR 4: Operations (Post-Harvest) ---
    // Quick Scan
    {
        qid: 'QS_Fish_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Fish iced after sorting/setup.",
        textB: "Fish iced immediately (standard ratio).",
        line_type: ['fisheries'],
        signal_tags: ['DELAYED_ICING']
    },
    {
        qid: 'QS_Fish_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Temp records rare/dispute-only.",
        textB: "Temp records routine and visible.",
        line_type: ['fisheries'],
        signal_tags: ['RARE_TEMP_RECORDS']
    },
    {
        qid: 'QS_Fish_Ops_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Downgrades accepted on price.",
        textB: "Downgrades reviewed for root cause.",
        line_type: ['fisheries'],
        signal_tags: ['PRICE_ACCEPTANCE']
    },
    // Deep Scan
    {
        qid: 'DS_Fish_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Crates washed when dirty.",
        textB: "Clean crates policy enforced.",
        line_type: ['fisheries'],
        signal_tags: ['DIRTY_CRATES']
    },
    {
        qid: 'DS_Fish_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Fix cooling when it fails.",
        textB: "Cold chain equipment maintained.",
        line_type: ['fisheries'],
        signal_tags: ['FIX_ON_FAILURE']
    },
    {
        qid: 'DS_Fish_Ops_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Ice bought last minute.",
        textB: "Ice supply planned daily.",
        line_type: ['fisheries'],
        signal_tags: ['LAST_MINUTE_ICE']
    },
    {
        qid: 'DS_Fish_Ops_4',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Sun exposure tolerated.",
        textB: "Fish protected from sun/heat.",
        line_type: ['fisheries'],
        signal_tags: ['SUN_EXPOSURE']
    },
    {
        qid: 'DS_Fish_Ops_5',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Handling rough/fast.",
        textB: "Handling minimizes drops/pressure.",
        line_type: ['fisheries'],
        signal_tags: ['ROUGH_HANDLING']
    },

    // --- PILLAR 5: Innovation (Growth & Optimization) ---
    // Quick Scan
    {
        qid: 'QS_Fish_Inn_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Average size judged visually.",
        textB: "Average size sample weighed weekly.",
        line_type: ['fisheries'],
        signal_tags: ['VISUAL_SIZE_GUESS']
    },
    {
        qid: 'QS_Fish_Inn_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Harvest timing driver: Urgent cash/buyer.",
        textB: "Harvest timing driver: Target size + plan.",
        line_type: ['fisheries'],
        signal_tags: ['CASH_DRIVEN_HARVEST']
    },
    {
        qid: 'QS_Fish_Inn_3',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Grading done on buyer complaint.",
        textB: "Grading done to protect uniformity/price.",
        line_type: ['fisheries'],
        signal_tags: ['REACTIVE_GRADING']
    },
    // Deep Scan
    {
        qid: 'DS_Fish_Inn_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Occasional sampling.",
        textB: "Sampling schedule exists.",
        line_type: ['fisheries'],
        signal_tags: ['OCCASIONAL_SAMPLING']
    },
    {
        qid: 'DS_Fish_Inn_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Rations constant.",
        textB: "Adjust rations from growth data.",
        line_type: ['fisheries'],
        signal_tags: ['RATION_CONSTANT']
    },
    {
        qid: 'DS_Fish_Inn_3',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Harvest all at once.",
        textB: "Plan partial harvests.",
        line_type: ['fisheries'],
        signal_tags: ['HARVEST_ALL_AT_ONCE']
    },
    {
        qid: 'DS_Fish_Inn_4',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Losses accepted.",
        textB: "Track handling mortalities.",
        line_type: ['fisheries'],
        signal_tags: ['HANDLING_MORTALITY_IGNORED']
    },
    {
        qid: 'DS_Fish_Inn_5',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Escapes ignored/unknown.",
        textB: "Escape checks scheduled.",
        line_type: ['fisheries'],
        signal_tags: ['ESCAPES_IGNORED']
    },

    // --- PILLAR 6: Market (Sales & Channels) ---
    // Quick Scan
    {
        qid: 'QS_Fish_Market_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Grades mixed to simplify selling.",
        textB: "Grades separated and priced accordingly.",
        line_type: ['fisheries'],
        signal_tags: ['MIXED_GRADES_SELLING']
    },
    {
        qid: 'QS_Fish_Market_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Pricing based on day's offer.",
        textB: "Pricing based on grade + net margin.",
        line_type: ['fisheries'],
        signal_tags: ['DAY_PRICE_TAKER']
    },
    {
        qid: 'QS_Fish_Market_3',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Loyalty to one main buyer.",
        textB: "Multiple channels managed.",
        line_type: ['fisheries'],
        signal_tags: ['SINGLE_BUYER_DEPENDENCY']
    },
    {
        qid: 'QS_Fish_Market_4',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Claims handled by negotiation.",
        textB: "Claims handled with documented specs.",
        line_type: ['fisheries'],
        signal_tags: ['DISCOUNT_NEGOTIATION']
    },
    // Deep Scan
    {
        qid: 'DS_Fish_Market_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Revenue only tracking.",
        textB: "Track price/kg by grade.",
        line_type: ['fisheries'],
        signal_tags: ['REVENUE_ONLY_TRACKING']
    },
    {
        qid: 'DS_Fish_Market_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Margin assumed.",
        textB: "Know net margin/kg after costs.",
        line_type: ['fisheries'],
        signal_tags: ['ASSUMED_MARGIN']
    },
    {
        qid: 'DS_Fish_Market_3',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Ad hoc claims.",
        textB: "Written terms for claims.",
        line_type: ['fisheries'],
        signal_tags: ['AD_HOC_CLAIMS']
    },
    {
        qid: 'DS_Fish_Market_4',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Verbal proof only.",
        textB: "Proof pack (temp/handling logs).",
        line_type: ['fisheries'],
        signal_tags: ['VERBAL_PROOF']
    },
    {
        qid: 'DS_Fish_Market_5',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Spot deals.",
        textB: "Contracts/standing orders exist.",
        line_type: ['fisheries'],
        signal_tags: ['SPOT_DEALS']
    },

    // --- PILLAR 7: People (Assets & Compliance) ---
    // Quick Scan
    {
        qid: 'QS_Fish_People_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Maintenance when something breaks.",
        textB: "Maintenance on schedule with checklists.",
        line_type: ['fisheries'],
        signal_tags: ['BREAKDOWN_MAINTENANCE']
    },
    {
        qid: 'QS_Fish_People_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Power backup assumed.",
        textB: "Power backup tested regularly.",
        line_type: ['fisheries'],
        signal_tags: ['ASSUMED_BACKUP']
    },
    {
        qid: 'QS_Fish_People_3',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "SOP adherence trusted.",
        textB: "SOP adherence checked and scored.",
        line_type: ['fisheries'],
        signal_tags: ['TRUSTED_SOP']
    },
    {
        qid: 'QS_Fish_People_4',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Compliance is mainly last-minute.",
        textB: "Compliance managed by calendar.",
        line_type: ['fisheries'],
        signal_tags: ['LAST_MINUTE_COMPLIANCE']
    },
    // Deep Scan
    {
        qid: 'DS_Fish_People_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "No maintenance calendar.",
        textB: "Preventive maintenance calendar exists.",
        line_type: ['fisheries'],
        signal_tags: ['NO_MAINTENANCE_CALENDAR']
    },
    {
        qid: 'DS_Fish_People_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Optional checklists.",
        textB: "Checklist sign-offs verified.",
        line_type: ['fisheries'],
        signal_tags: ['OPTIONAL_CHECKLISTS']
    },
    {
        qid: 'DS_Fish_People_3',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Bad luck downtime.",
        textB: "Downtime logged with root cause.",
        line_type: ['fisheries'],
        signal_tags: ['BAD_LUCK_DOWNTIME']
    },
    {
        qid: 'DS_Fish_People_4',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Reactive spares.",
        textB: "Spares kit maintained.",
        line_type: ['fisheries'],
        signal_tags: ['REACTIVE_SPARES']
    }
];
