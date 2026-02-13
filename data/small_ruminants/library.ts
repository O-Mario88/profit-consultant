
import { LibraryItem } from '../../types';

export const SMALL_RUMINANTS_HOOKS: Record<string, string[]> = {
    'Market': [
        "Selling 'whenever' kills your margin.",
        "Blind pricing means the buyer keeps your profit.",
        "Weight guessing is a tax on your income.",
        "Distress selling tax",
        "Price-by-panic",
        "Negotiation bleed",
        "Middleman margin theft",
        "Selling genetics as meat",
        "No floor price = silent loss",
        "Seasonal oversupply trap",
        "Unfinished animals, unfinished profit"
    ],
    'Operations': [
        "Inbreeding is a silent productivity thief.",
        "Feeding everyone the same wastes feed and stunts growth.",
        "Breeding drift",
        "Random breeding = random profit",
        "Genetics stagnation",
        "The 'cute' replacement mistake",
        "Infertility tolerance tax",
        "Keeping passengers, not producers",
        "Your herd is growing, your profit isn’t",
        "Dry-season collapse",
        "Feed wastage you don’t see",
        "One-ration-for-all penalty",
        "Hidden weight-loss season",
        "Stocking-rate sabotage",
        "Mineral neglect drain",
        "Water inconsistency tax",
        "Paying for feed that becomes manure"
    ],
    'Risk': [
        "Parasites eat your profit before you see them.",
        "Parasite rent",
        "Treating late = paying twice",
        "Medicine roulette",
        "Resistance spiral",
        "Sick pen that doesn’t exist",
        "Silent anemia",
        "Repeat illness loop",
        "Newborn loss factory"
    ],
    'Leadership': [
        "Theft dividend (paid to criminals)",
        "Predator payroll",
        "Escape losses",
        "Breakdown surprise tax",
        "Stress handling losses",
        "Injury leak",
        "Moisture spoilage tax",
        "Daily time leak layout"
    ],
    'People': [
        "Training by watching leads to mistakes by guessing.",
        "One person doing everything means nothing is done perfectly.",
        "Routine beats heroic effort every time.",
        "No-owner tasks",
        "Checklist blindness",
        "Standards drift",
        "Crisis management culture",
        "One-person dependency risk",
        "Quiet missed routines"
    ],
    'Money': [
        "If you don't separate cash, you don't have a business.",
        "Keeping unproductive animals is an expensive hobby.",
        "Feed waste is money on the floor.",
        "Profit illusion",
        "Mixed money blindness",
        "Emergency purchase premium",
        "Inventory without margin",
        "Death cost denial",
        "Cashflow ambush",
        "Growth that eats cash"
    ],
    'Innovation': [
        "Data darkness",
        "Repeat problems because nothing is written",
        "No proof, no premium buyer",
        "Memory-based management",
        "Unknown top mothers",
        "Compliance risk bomb"
    ]
};

export const SMALL_RUMINANTS_QUIZ_COPY = {
    welcomeTitle: "Sheep & Goat Profit Scan",
    welcomeSubtitle: "Identify profit leaks in your flock management, market strategy, and feed costs.",
    surveyTitle: "Small Ruminants Diagnostic",
    surveySubtitle: "Assess your 8 Pillars of Profitability in 5-7 minutes."
};

export const SMALL_RUMINANTS_LIBRARY: LibraryItem[] = [
    // P1 Market & Pricing Power - Strengths
    {
        id: 'sr_strength_market_readiness',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Market',
        signal_tags: ['market_readiness'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We sell based on readiness + market demand windows, not only cash pressure."
    },
    {
        id: 'sr_strength_pricing_power',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Market',
        signal_tags: ['pricing_power'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We use weight/condition to set price floors and negotiate confidently."
    },
    {
        id: 'sr_strength_buyer_diversification',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Market',
        signal_tags: ['buyer_diversification'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We know our top 3 buyer types (trader, butcher, breeder) and sell strategically to each."
    },
    // ... P1 Market Leaks
    {
        id: 'sr_leak_cash_pressure_selling',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Market',
        signal_tags: ['market_readiness'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "We sell mainly when cash is tight, even if animals are not ready."
    },
    {
        id: 'sr_leak_price_guesswork',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Market',
        signal_tags: ['pricing_method'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "We price by guesswork and negotiate from a weak position."
    },
    {
        id: 'sr_leak_mixed_grading',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Market',
        signal_tags: ['product_consistency'],
        business_size_fit: ['small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "We mix breeders and finishers, so we sell valuable genetics as meat animals."
    },
    // P1 Market KPIs
    {
        id: 'sr_kpi_avg_price',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Market',
        signal_tags: ['pricing_power'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'kpi',
        text: "Average selling price per head (by grade: breeder / finisher / cull)."
    },

    // P2 Breeding - Strengths
    {
        id: 'sr_strength_controlled_breeding',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['breeding_strategy'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We run controlled breeding windows to align births with feed availability and demand."
    },
    {
        id: 'sr_strength_performance_selection',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['genetics_selection'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We keep and replace stock using performance (survival, mothering, weaning) not appearance only."
    },
    // P2 Breeding - Leaks
    {
        id: 'sr_leak_uncontrolled_breeding',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['breeding_control'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "Breeding is uncontrolled; kidding/lambing happens anytime."
    },
    {
        id: 'sr_leak_no_culling',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['culling_strategy'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "We tolerate infertility, poor mothering, and chronic sickness."
    },
    // P2 Breeding - KPIs
    {
        id: 'sr_kpi_kidding_rate',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['productivity_metric'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'kpi',
        text: "Kidding/lambing rate (births per breeding female)."
    },

    // P3 Nutrition - Strengths
    {
        id: 'sr_strength_targeted_feeding',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['nutrition_planning'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We plan feeding by season + life stage (late pregnancy, lactation, weaners, finishers)."
    },
    {
        id: 'sr_strength_dry_season_plan',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['feed_security'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We have a dry-season strategy (fodder, hay, crop residues, browse management)."
    },
    // P3 Nutrition - Leaks
    {
        id: 'sr_leak_reactive_feeding',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['nutrition_planning'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "Feeding changes only when animals visibly lose condition."
    },
    {
        id: 'sr_leak_one_ration',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['feed_efficiency'],
        business_size_fit: ['small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "All animals share one ration/access, so priority groups suffer."
    },
    // P3 Nutrition - KPIs
    {
        id: 'sr_kpi_bcs',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Operations',
        signal_tags: ['condition_scoring'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'kpi',
        text: "Body Condition Score (BCS) distribution (thin/ok/fat) monthly."
    },

    // P4 Health - Strengths
    {
        id: 'sr_strength_parasite_strategy',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Risk',
        signal_tags: ['parasite_control'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We have a routine parasite control strategy (rotation, targeted treatment, pasture management)."
    },
    {
        id: 'sr_strength_quarantine',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Risk',
        signal_tags: ['biosecurity_quarantine'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We isolate/screen new animals before mixing."
    },
    // P4 Health - Leaks
    {
        id: 'sr_leak_late_treatment',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Risk',
        signal_tags: ['early_detection'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "We treat when animals are already sick, not early."
    },
    {
        id: 'sr_leak_routine_deworming',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Risk',
        signal_tags: ['resistance_management'],
        business_size_fit: ['small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "Parasite control is routine-only (same drug/schedule) without strategy, causing poor results."
    },
    // P4 Health - KPIs
    {
        id: 'sr_kpi_mortality',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Risk',
        signal_tags: ['mortality_investigation'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'kpi',
        text: "Mortality rate (adult, kid/lamb) monthly/seasonal."
    },

    // P5 Operations - Strengths
    {
        id: 'sr_strength_security',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Leadership',
        signal_tags: ['security_routine'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We prevent losses with reliable fencing, housing, and predator/theft controls."
    },
    {
        id: 'sr_strength_maintenance',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Leadership',
        signal_tags: ['maintenance_routine'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We schedule maintenance routines instead of reacting after breakdowns."
    },
    // P5 Operations - Leaks
    {
        id: 'sr_leak_reactive_fencing',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Leadership',
        signal_tags: ['infrastructure_design'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "Fencing and housing are reactive; losses happen before repairs."
    },
    // P5 Operations - KPIs
    {
        id: 'sr_kpi_theft_loss',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Leadership',
        signal_tags: ['loss_awareness'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'kpi',
        text: "Theft/predation losses (# and value per month)."
    },

    // P6 People - Strengths
    {
        id: 'sr_strength_checklists',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'People',
        signal_tags: ['role_clarity'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "Daily tasks have clear ownership and checklists (feed, water, health, security, records)."
    },
    // P6 People - Leaks
    {
        id: 'sr_leak_informal_work',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'People',
        signal_tags: ['role_definition'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "Work is informal; critical tasks are missed when someone is absent."
    },
    // P6 People - KPIs
    {
        id: 'sr_kpi_checklist_compliance',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'People',
        signal_tags: ['compliance'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'kpi',
        text: "Checklist completion rate (% days completed)."
    },

    // P7 Finance - Strengths
    {
        id: 'sr_strength_cash_separation',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Money',
        signal_tags: ['financial_separation'],
        business_size_fit: ['micro', 'small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We separate farm money from personal money."
    },
    // P7 Finance - Leaks
    {
        id: 'sr_leak_mixed_money',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Money',
        signal_tags: ['financial_discipline'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "Farm money and personal money are mixed, hiding true profit."
    },
    // P7 Finance - KPIs
    {
        id: 'sr_kpi_gross_margin',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Money',
        signal_tags: ['unit_economics'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'kpi',
        text: "Gross margin per animal sold (sale – direct costs)."
    },

    // P8 Records - Strengths
    {
        id: 'sr_strength_records',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Innovation',
        signal_tags: ['record_keeping'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'strength',
        text: "We keep simple, consistent records (births, deaths, treatments, sales)."
    },
    // P8 Records - Leaks
    {
        id: 'sr_leak_memory_records',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Innovation',
        signal_tags: ['data_blindness'],
        business_size_fit: ['micro', 'small', 'medium'],
        severity_fit: ['Critical'],
        type: 'leak',
        text: "Records are memory-based and inconsistent."
    },
    // P8 Records - KPIs
    {
        id: 'sr_kpi_record_completeness',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        pillar: 'Innovation',
        signal_tags: ['record_habit'],
        business_size_fit: ['small', 'medium', 'large'],
        severity_fit: ['Strong'],
        type: 'kpi',
        text: "Record completeness score (births, deaths, treatments, sales captured)."
    }
];
