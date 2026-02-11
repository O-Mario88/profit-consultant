import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- PILLAR 1: Market & Pricing Power ---
    // Quick Scan
    {
        qid: 'QS_Market_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "When a buyer calls, you usually sell whatever is easiest to load.",
        textB: "When a buyer calls, you check your 'sell-ready batch' list.",
        line_type: ['all'],
        signal_tags: ['PRICE_DISCOVERY', 'SALES_READINESS']
    },
    {
        qid: 'QS_Market_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "When prices dip, you sell anyway because cash is needed.",
        textB: "When prices dip, you delay only the pigs still gaining efficiently.",
        line_type: ['all'],
        signal_tags: ['MARKET_TIMING', 'CASH_FLOW_PRESSURE']
    },
    // Deep Scan
    {
        qid: 'DS_Market_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We sell mixed sizes.",
        textB: "We sell by batch/weight band.",
        line_type: ['all'],
        signal_tags: ['GRADING_DISCIPLINE']
    },
    {
        qid: 'DS_Market_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We rely on rumors for prices.",
        textB: "We track prices weekly.",
        line_type: ['all'],
        signal_tags: ['PRICE_INTELLIGENCE']
    },
    {
        qid: 'DS_Market_3',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We depend on one main buyer.",
        textB: "We maintain 2–3 buyers.",
        line_type: ['all'],
        signal_tags: ['BUYER_DEPENDENCY']
    },
    {
        qid: 'DS_Market_4',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We negotiate by argument.",
        textB: "We negotiate with weight evidence.",
        line_type: ['all'],
        signal_tags: ['NEGOTIATION_POWER']
    },
    {
        qid: 'DS_Market_5',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We decide sales dates last minute.",
        textB: "We plan sales dates.",
        line_type: ['all'],
        signal_tags: ['SALES_PLANNING']
    },
    {
        qid: 'DS_Market_6',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We only track total cash.",
        textB: "We know best-margin category.",
        line_type: ['all'],
        signal_tags: ['MARGIN_VISIBILITY']
    },
    {
        qid: 'DS_Market_7',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We sell any pig if needed.",
        textB: "We protect breeding stock from sale.",
        line_type: ['all'],
        signal_tags: ['ASSET_PROTECTION']
    },
    {
        qid: 'DS_Market_8',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Loading is rushed.",
        textB: "We minimize loading stress/injuries.",
        line_type: ['all'],
        signal_tags: ['ANIMAL_WELFARE', 'QUALITY_CONTROL']
    },
    {
        qid: 'DS_Market_9',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Transport is just a cost.",
        textB: "We calculate transport impact per sale.",
        line_type: ['all'],
        signal_tags: ['LOGISTICS_COST']
    },
    {
        qid: 'DS_Market_10',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "We accept random buyers.",
        textB: "We build repeat buyers via consistency.",
        line_type: ['all'],
        signal_tags: ['RELATIONSHIP_BUILDING']
    },

    // --- PILLAR 2: Herd Strategy & Production Plan ---
    // Quick Scan
    {
        qid: 'QS_Operations_1', // Using Operations for Herd Strategy mapping
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Herd expansion is based on 'good price opportunity'.",
        textB: "Herd expansion is based on pen/feed capacity plan.",
        line_type: ['all'],
        signal_tags: ['CAPACITY_PLANNING']
    },
    {
        qid: 'QS_Operations_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When a sow underperforms, we keep her indefinitely.",
        textB: "When a sow underperforms, we set a fix-or-cull deadline.",
        line_type: ['all'],
        signal_tags: ['CULLING_DISCIPLINE']
    },
    // Deep Scan
    {
        qid: 'DS_Operations_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "We breed whenever heat shows.",
        textB: "Breeding schedule exists.",
        line_type: ['all'],
        signal_tags: ['BREEDING_SCHEDULE']
    },
    {
        qid: 'DS_Operations_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Replacements bought in panic.",
        textB: "Replacement gilts planned.",
        line_type: ['all'],
        signal_tags: ['REPLACEMENT_STRATEGY']
    },
    {
        qid: 'DS_Operations_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Culling is emotional/rare.",
        textB: "Culling rules consistent.",
        line_type: ['all'],
        signal_tags: ['CULLING_DISCIPLINE']
    },
    {
        qid: 'DS_Operations_4',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "We use same boar/line too long.",
        textB: "We manage inbreeding risk.",
        line_type: ['all'],
        signal_tags: ['GENETICS_MANAGEMENT']
    },
    {
        qid: 'DS_Operations_5',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Overcrowding is common.",
        textB: "Pen capacity respected.",
        line_type: ['all'],
        signal_tags: ['SPACE_MANAGEMENT']
    },
    {
        qid: 'DS_Operations_6',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Pigs move when space appears.",
        textB: "Pig flow tracked by stage.",
        line_type: ['all'],
        signal_tags: ['FLOW_MANAGEMENT']
    },
    {
        qid: 'DS_Operations_7',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "We mix ages often.",
        textB: "We maintain age-group separation.",
        line_type: ['all'],
        signal_tags: ['BIOSECURITY_INTERNAL']
    },
    {
        qid: 'DS_Operations_8',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "We focus on headcount only.",
        textB: "We set monthly production targets.",
        line_type: ['all'],
        signal_tags: ['PRODUCTION_TARGETS']
    },
    {
        qid: 'DS_Operations_9',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "We breed without market plan.",
        textB: "We match breeding to market demand.",
        line_type: ['all'],
        signal_tags: ['MARKET_ALIGNMENT']
    },
    {
        qid: 'DS_Operations_10',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "We judge sows by 'looks'.",
        textB: "We analyze sow performance.",
        line_type: ['all'],
        signal_tags: ['PERFORMANCE_RECORDING']
    },

    // --- PILLAR 3: Feed, Water & Growth Economics ---
    // Quick Scan
    {
        qid: 'QS_Money_1', // Using Money for Economics/Feed
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "When feed costs rise, you reduce feed quantity generally.",
        textB: "When feed costs rise, you tighten waste + track FCR.",
        line_type: ['all'],
        signal_tags: ['FEED_EFFICIENCY', 'COST_CONTROL']
    },
    {
        qid: 'QS_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "When pigs grow slower, you assume 'breed/season' is the issue.",
        textB: "When pigs grow slower, you check water/feed access + health.",
        line_type: ['all'],
        signal_tags: ['GROWTH_TROUBLESHOOTING']
    },
    // Deep Scan
    {
        qid: 'DS_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "We use same feed mostly.",
        textB: "We adjust feed by stage.",
        line_type: ['all'],
        signal_tags: ['NUTRITION_MANAGEMENT']
    },
    {
        qid: 'DS_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "We check drinkers when pigs look stressed.",
        textB: "We check drinkers daily.",
        line_type: ['all'],
        signal_tags: ['WATER_MANAGEMENT']
    },
    {
        qid: 'DS_Money_3',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Feed use unknown.",
        textB: "We track feed used per batch.",
        line_type: ['all'],
        signal_tags: ['FEED_TRACKING']
    },
    {
        qid: 'DS_Money_4',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Spillage is normal.",
        textB: "Feeder settings reduce waste.",
        line_type: ['all'],
        signal_tags: ['WASTE_REDUCTION']
    },
    {
        qid: 'DS_Money_5',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "We keep all together.",
        textB: "We separate slow growers early.",
        line_type: ['all'],
        signal_tags: ['GROWTH_MANAGEMENT']
    },
    {
        qid: 'DS_Money_6',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Feed exposed/rodents.",
        textB: "We store feed dry/secure.",
        line_type: ['all'],
        signal_tags: ['FEED_STORAGE']
    },
    {
        qid: 'DS_Money_7',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "We rely on eyeballing.",
        textB: "We measure ADG/FCR.",
        line_type: ['all'],
        signal_tags: ['PERFORMANCE_METRICS']
    },
    {
        qid: 'DS_Money_8',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "We ignore seasonal intake drops.",
        textB: "We manage heat stress.",
        line_type: ['all'],
        signal_tags: ['ENVIRONMENTAL_CONTROL']
    },
    {
        qid: 'DS_Money_9',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "We buy feed when empty.",
        textB: "We plan feed inventory.",
        line_type: ['all'],
        signal_tags: ['INVENTORY_PLANNING']
    },
    {
        qid: 'DS_Money_10',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Profit guessed from sales.",
        textB: "Cost/kg gain calculated.",
        line_type: ['all'],
        signal_tags: ['UNIT_ECONOMICS']
    },

    // --- PILLAR 4: Health & Biosecurity ---
    // Quick Scan
    {
        qid: 'QS_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "New pigs arriving: mix them to 'reduce stress'.",
        textB: "New pigs arriving: quarantine and observe first.",
        line_type: ['all'],
        signal_tags: ['QUARANTINE_PROTOCOL']
    },
    {
        qid: 'QS_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "When one pig is off-feed: wait 1–2 days first.",
        textB: "When one pig is off-feed: isolate and monitor immediately.",
        line_type: ['all'],
        signal_tags: ['DISEASE_RESPONSE']
    },
    // Deep Scan
    {
        qid: 'DS_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Visitors casual.",
        textB: "Visitor controls strict.",
        line_type: ['all'],
        signal_tags: ['ACCESS_CONTROL']
    },
    {
        qid: 'DS_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Quarantine rare.",
        textB: "Quarantine normal.",
        line_type: ['all'],
        signal_tags: ['QUARANTINE_PROTOCOL']
    },
    {
        qid: 'DS_Risk_3',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Treat inside group.",
        textB: "Isolate sick pigs fast.",
        line_type: ['all'],
        signal_tags: ['ISOLATION_PROTOCOL']
    },
    {
        qid: 'DS_Risk_4',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Mix batches often.",
        textB: "All-in/all-out where possible.",
        line_type: ['all'],
        signal_tags: ['BATCH_MANAGEMENT']
    },
    {
        qid: 'DS_Risk_5',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Pens stay wet.",
        textB: "Pens get dry-time after cleaning.",
        line_type: ['all'],
        signal_tags: ['HYGIENE_STANDARD']
    },
    {
        qid: 'DS_Risk_6',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Rely on memory.",
        textB: "Record treatments.",
        line_type: ['all'],
        signal_tags: ['TREATMENT_RECORDS']
    },
    {
        qid: 'DS_Risk_7',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Dose by guess.",
        textB: "Dose by weight estimate.",
        line_type: ['all'],
        signal_tags: ['MEDICATION_ACCURACY']
    },
    {
        qid: 'DS_Risk_8',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Rodents accepted.",
        textB: "Rodent control routine.",
        line_type: ['all'],
        signal_tags: ['PEST_CONTROL']
    },
    {
        qid: 'DS_Risk_9',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Disposal improvised.",
        textB: "Safe disposal SOP.",
        line_type: ['all'],
        signal_tags: ['MORTALITY_MANAGEMENT']
    },
    {
        qid: 'DS_Risk_10',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Accept outbreaks as normal.",
        textB: "Review outbreaks for root cause.",
        line_type: ['all'],
        signal_tags: ['DISEASE_LEARNING']
    },

    // --- PILLAR 5: Breeding, Farrowing & Piglet Survival ---
    // Quick Scan
    {
        qid: 'QS_People_1', // Using People for Piglet Care/Labor focus
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "During farrowing week you continue normal routine.",
        textB: "During farrowing week you increase checks and piglet support.",
        line_type: ['all'],
        signal_tags: ['FARROWING_ATTENTION']
    },
    {
        qid: 'QS_People_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "When piglets are small, assume they'll catch up.",
        textB: "When piglets are small, manage warmth + access to milk.",
        line_type: ['all'],
        signal_tags: ['PIGLET_CARE']
    },
    // Deep Scan
    {
        qid: 'DS_People_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Heat detection 'when seen'.",
        textB: "Heat detection routine fixed times.",
        line_type: ['all'],
        signal_tags: ['BREEDING_ROUTINE']
    },
    {
        qid: 'DS_People_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Farrowing pen prepared last minute.",
        textB: "Farrowing pen prepared early.",
        line_type: ['all'],
        signal_tags: ['PREPARATION_DISCIPLINE']
    },
    {
        qid: 'DS_People_3',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Crushing seen as normal.",
        textB: "Manage crushing risk actively.",
        line_type: ['all'],
        signal_tags: ['MORTALITY_REDUCTION']
    },
    {
        qid: 'DS_People_4',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Assume all drink.",
        textB: "Ensure colostrum access.",
        line_type: ['all'],
        signal_tags: ['PIGLET_NUTRITION']
    },
    {
        qid: 'DS_People_5',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "No sow-level records.",
        textB: "Record litter outcomes per sow.",
        line_type: ['all'],
        signal_tags: ['PERFORMANCE_TRACKING']
    },
    {
        qid: 'DS_People_6',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Random moving of piglets.",
        textB: "Cross-foster with rules.",
        line_type: ['all'],
        signal_tags: ['LITTER_MANAGEMENT']
    },
    {
        qid: 'DS_People_7',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Creep feed inconsistent.",
        textB: "Creep feed plan exists.",
        line_type: ['all'],
        signal_tags: ['NUTRITION_PLANNING']
    },
    {
        qid: 'DS_People_8',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Weaning is abrupt.",
        textB: "Weaning is staged and supported.",
        line_type: ['all'],
        signal_tags: ['STRESS_MANAGEMENT']
    },
    {
        qid: 'DS_People_9',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Weak piglets ignored.",
        textB: "Weak piglets get targeted help.",
        line_type: ['all'],
        signal_tags: ['ANIMAL_CARE']
    },
    {
        qid: 'DS_People_10',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Keep poor mothers long.",
        textB: "Remove poor mothers from herd quickly.",
        line_type: ['all'],
        signal_tags: ['CULLING_DECISIONS']
    },

    // --- PILLAR 6: Housing, Environment & Labor Uptime ---
    // Quick Scan
    {
        qid: 'QS_Leadership_1', // Using Leadership/Ops overlap
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "If a drinker fails: fix when several fail.",
        textB: "If a drinker fails: fix same day.",
        line_type: ['all'],
        signal_tags: ['MAINTENANCE_CULTURE']
    },
    {
        qid: 'QS_Leadership_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "When pigs fight: wait for them to 'settle'.",
        textB: "When pigs fight: adjust space/grouping quickly.",
        line_type: ['all'],
        signal_tags: ['ANIMAL_WELFARE']
    },
    // Deep Scan
    {
        qid: 'DS_Leadership_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "One style for all.",
        textB: "Stage-appropriate pens.",
        line_type: ['all'],
        signal_tags: ['HOUSING_SUITABILITY']
    },
    {
        qid: 'DS_Leadership_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Wet pens common.",
        textB: "Drainage kept functional.",
        line_type: ['all'],
        signal_tags: ['ENVIRONMENTAL_HYGIENE']
    },
    {
        qid: 'DS_Leadership_3',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Heat accepted.",
        textB: "Heat mitigation exists.",
        line_type: ['all'],
        signal_tags: ['CLIMATE_CONTROL']
    },
    {
        qid: 'DS_Leadership_4',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Overstocking frequent.",
        textB: "Stocking density respected.",
        line_type: ['all'],
        signal_tags: ['CAPACITY_DISCIPLINE']
    },
    {
        qid: 'DS_Leadership_5',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Daily work by memory.",
        textB: "Daily checklist used.",
        line_type: ['all'],
        signal_tags: ['STANDARD_PROCEDURES']
    },
    {
        qid: 'DS_Leadership_6',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Broken equipment normal.",
        textB: "Broken equipment fixed fast.",
        line_type: ['all'],
        signal_tags: ['MAINTENANCE_SPEED']
    },
    {
        qid: 'DS_Leadership_7',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Mixed sizes common.",
        textB: "Pigs grouped by size/age.",
        line_type: ['all'],
        signal_tags: ['GROUP_MANAGEMENT']
    },
    {
        qid: 'DS_Leadership_8',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Ventilation ignored.",
        textB: "Ventilation monitored.",
        line_type: ['all'],
        signal_tags: ['AIR_QUALITY']
    },
    {
        qid: 'DS_Leadership_9',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Roles unclear.",
        textB: "Staff roles clear.",
        line_type: ['all'],
        signal_tags: ['ROLE_CLARITY']
    },
    {
        qid: 'DS_Leadership_10',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "No routine audits.",
        textB: "Routine audits weekly.",
        line_type: ['all'],
        signal_tags: ['MANAGEMENT_OVERSIGHT']
    },

    // --- PILLAR 7: Finance, Cashflow & Unit Economics ---
    // Quick Scan
    {
        qid: 'QS_Innovation_1', // Using Innovation for financial savvy
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "If cash gets tight, cut costs equally.",
        textB: "If cash gets tight, protect feed + piglet survival first.",
        line_type: ['all'],
        signal_tags: ['CASH_PRIORITIZATION']
    },
    {
        qid: 'QS_Innovation_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "When you buy feed, you trust it's fine.",
        textB: "When you buy feed, you reconcile stock before and after.",
        line_type: ['all'],
        signal_tags: ['INVENTORY_CONTROL']
    },
    // Deep Scan
    {
        qid: 'DS_Innovation_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Only total cash tracked.",
        textB: "Batch P&L exists.",
        line_type: ['all'],
        signal_tags: ['FINANCIAL_GRANULARITY']
    },
    {
        qid: 'DS_Innovation_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Not calculated.",
        textB: "Cost/kg gain calculated.",
        line_type: ['all'],
        signal_tags: ['UNIT_COSTING']
    },
    {
        qid: 'DS_Innovation_3',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Feed loss is normal.",
        textB: "Feed inventory controlled.",
        line_type: ['all'],
        signal_tags: ['LOSS_PREVENTION']
    },
    {
        qid: 'DS_Innovation_4',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "One pot.",
        textB: "Farm/home money separated.",
        line_type: ['all'],
        signal_tags: ['FINANCIAL_DISCIPLINE']
    },
    {
        qid: 'DS_Innovation_5',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Credit informal.",
        textB: "Credit sales controlled.",
        line_type: ['all'],
        signal_tags: ['CREDIT_MANAGEMENT']
    },
    {
        qid: 'DS_Innovation_6',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Always close to empty.",
        textB: "Working cash buffer exists.",
        line_type: ['all'],
        signal_tags: ['CASH_RESILIENCE']
    },
    {
        qid: 'DS_Innovation_7',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Spend on many small items.",
        textB: "Invest in bottlenecks.",
        line_type: ['all'],
        signal_tags: ['CAPITAL_ALLOCATION']
    },
    {
        qid: 'DS_Innovation_8',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Debt reactive.",
        textB: "Debt planned with ROI.",
        line_type: ['all'],
        signal_tags: ['DEBT_STRATEGY']
    },
    {
        qid: 'DS_Innovation_9',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "React late.",
        textB: "Track input prices and adjust plans.",
        line_type: ['all'],
        signal_tags: ['MARKET_SENSITIVITY']
    },
    {
        qid: 'DS_Innovation_10',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Profits disappear quickly.",
        textB: "Profits reinvested into performance.",
        line_type: ['all'],
        signal_tags: ['GROWTH_REINVESTMENT']
    }
];
