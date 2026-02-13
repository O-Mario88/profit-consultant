
import { ActionDefinition, FixPlanTemplate, FixPlanAction } from '../../types';

export const SMALL_RUMINANTS_ACTIONS: ActionDefinition[] = [
    // P1 Market
    {
        action_id: 'sr_action_price_floor',
        title: 'Build a Price Floor',
        description: 'Set minimum acceptable price per grade (breeder/finisher/cull) using last 10 sales + costs.',
        pillar: 'Market',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['pricing_method', 'negotiation_confidence'],
        days: 7,
        effort: 'S',
        impact_score: 9,
        objective: 'Stop selling below cost and negotiate from a number, not emotion.',
        outcome: 'Protected margins and consistent pricing strategy.'
    },
    {
        action_id: 'sr_action_grade_stock',
        title: 'Grade Your Animals Weekly',
        description: 'Tag/group into 3 buckets: sell now, finish 2–4 weeks, breeder/keep.',
        pillar: 'Market',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['product_consistency', 'market_readiness'],
        days: 7,
        effort: 'M',
        impact_score: 8,
        objective: 'Stop selling high-value breeders accidentally.',
        outcome: 'Maximize value per animal by selling at the right time.'
    },
    // P2 Breeding
    {
        action_id: 'sr_action_controlled_breeding',
        title: 'Controlled Breeding Window',
        description: 'Separate male access for 45–60 days, then remove.',
        pillar: 'Operations',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['breeding_control', 'management_timing'],
        days: 30,
        effort: 'M',
        impact_score: 10,
        objective: 'Births cluster into manageable seasons with better feed availability.',
        outcome: 'Reduced mortality and streamlined management.'
    },
    {
        action_id: 'sr_action_cull_rule',
        title: 'Implement a Cull Rule',
        description: 'Any female with repeated loss/poor mothering/infertility gets flagged for sale.',
        pillar: 'Operations',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['culling_strategy', 'productivity_metric'],
        days: 30,
        effort: 'S',
        impact_score: 9,
        objective: 'Herd productivity rises without increasing costs.',
        outcome: 'Higher average herd performance and lower feed waste.'
    },
    // P3 Nutrition
    {
        action_id: 'sr_action_priority_feeding',
        title: 'Priority Group Feeding',
        description: 'Separate weaners + late pregnancy/lactation for targeted supplementation.',
        pillar: 'Operations',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['nutrition_planning', 'feed_efficiency'],
        days: 7,
        effort: 'M',
        impact_score: 10,
        objective: 'Kid/lamb survival improves and females recover faster.',
        outcome: 'Better growth rates and reproductive performance.'
    },
    {
        action_id: 'sr_action_wastage_control',
        title: 'Feed Wastage Control',
        description: 'Use troughs, cover feed, store off ground, measure daily feed-out.',
        pillar: 'Operations',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['waste_reduction', 'cost_control'],
        days: 7,
        effort: 'S',
        impact_score: 8,
        objective: 'Feed cost per animal drops without reducing performance.',
        outcome: 'Immediate reduction in feed expenses.'
    },
    // P4 Health
    {
        action_id: 'sr_action_daily_scan',
        title: 'Daily 5-Minute Health Scan',
        description: 'Check appetite, posture, coat, breathing, manure, limping daily.',
        pillar: 'Risk',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['early_detection', 'health_monitoring'],
        days: 7,
        effort: 'S',
        impact_score: 9,
        objective: 'Illness gets treated early and cheaply.',
        outcome: 'Reduced mortality and lower veterinary costs.'
    },
    // P5 Operations
    {
        action_id: 'sr_action_escape_walk',
        title: 'Weekly Escape Prevention Walk',
        description: 'Walk fences, check gates, water points, and weak corners.',
        pillar: 'Leadership',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['security_routine', 'loss_prevention'],
        days: 7,
        effort: 'S',
        impact_score: 8,
        objective: 'Escapes and theft opportunities drop.',
        outcome: 'Secure assets and reduced stress.'
    },
    // P6 People
    {
        action_id: 'sr_action_daily_checklist',
        title: 'Daily Operations Checklist',
        description: 'Implement a tick-box list for feed/water/health/security/records.',
        pillar: 'People',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['routine_compliance', 'accountability'],
        days: 7,
        effort: 'S',
        impact_score: 9,
        objective: 'Routine compliance rises and problems reduce.',
        outcome: 'Consistent operations and standard work.'
    },
    // P7 Finance
    {
        action_id: 'sr_action_money_separation',
        title: 'Separate Farm & Home Money',
        description: 'Create separate cash containers or accounts for farm operations and household.',
        pillar: 'Money',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['financial_separation', 'cash_control'],
        days: 7,
        effort: 'S',
        impact_score: 10,
        objective: 'True profit becomes visible.',
        outcome: 'Clear financial visibility and better cash management.'
    },
    // P8 Records
    {
        action_id: 'sr_action_4_records',
        title: 'Start 4-Record System',
        description: 'Track Births, Deaths, Treatments, Sales on separate pages.',
        pillar: 'Innovation',
        industry: 'small_ruminants',
        line_type: ['Sheep farming', 'Goat farming'],
        signal_tags: ['record_habit', 'data_quality'],
        days: 7,
        effort: 'S',
        impact_score: 9,
        objective: 'Identify top mothers and loss patterns.',
        outcome: 'Data-driven decisions replacing guesswork.'
    }
];

export const SMALL_RUMINANTS_FIX_PLANS_7D: FixPlanTemplate[] = [
    {
        focus: "Stabilize Profit",
        profitLeak: "Bleeding Cash & Losing Animals",
        diagnosis: "You are losing money to invisible leaks (mortality, waste, theft) and pricing panic.",
        drivers: ["No Baseline Data", "Reactive Management", "Mixed Finances"],
        evidenceSnapshots: [
            { observation: "Animals sold to pay bills", whyItMatters: "Distress selling destroys profit margins." },
            { observation: "Feed on the ground", whyItMatters: "Wasted feed is money thrown away." }
        ],
        fixLever: { action: "Stop the Bleeding", metric: "Cash Saved", owner: "Owner", effort: "Medium", timeline: "7 Days" },
        quickWins: [
            { title: "Baseline Count", desc: "Count all animals by group (breeders, young, finishers, sick).", owner: "Owner", effort: "S", metric: "Count Accuracy" },
            { title: "Leak Hunt", desc: "List top 3 leaks (mortality, waste, theft) from last 30 days.", owner: "Owner", effort: "S", metric: "Leaks Identified" }
        ],
        winCondition: "You know exactly what you own, where you lose money, and have stopped the daily bleeding.",
        system30: [], // Placeholder
        build60: [],
        institutionalize90: [],
        kpi: { name: "Weekly Loss Count", def: "Number of animals dead or missing per week." },
        traps: ["Skipping the count", "Blaming bad luck instead of systems"]
    }
];

export const SMALL_RUMINANTS_FIX_PLANS_30D: FixPlanTemplate[] = [
    {
        focus: "Build Control",
        profitLeak: "Chaotic Production & Unpredictable Sales",
        diagnosis: "Production is random (births anytime) and sales are reactive, preventing scale and profit growth.",
        drivers: ["Uncontrolled Breeding", "Reactive Feeding", "No Sales Plan"],
        evidenceSnapshots: [
            { observation: "Lambs/kids born in dry season", whyItMatters: "High mortality due to lack of feed." },
            { observation: "Selling light animals", whyItMatters: "Leaving value on the table." }
        ],
        fixLever: { action: "Systemize Production", metric: "Gross Margin", owner: "Manager", effort: "High", timeline: "30 Days" },
        quickWins: [
            { title: "Separation Pens", desc: "Ensure sick and newborn pens exist and are used.", owner: "Manager", effort: "M", metric: "Separation Compliance" },
            { title: "Daily Health Scan", desc: "Start daily 5-min health checks.", owner: "Stockman", effort: "S", metric: "Early Detections" }
        ],
        winCondition: "Production is planned (breeding, feeding) and sales are driven by readiness, not panic.",
        system30: [
            { title: "Breeding Calendar", desc: "Define breeding windows aligned with feed seasons.", owner: "Owner", effort: "M", metric: "Plan Exists" },
            { title: "Priority Feeding", desc: "Target feed to weaners and lactating females.", owner: "Stockman", effort: "M", metric: "feed_efficiency" }
        ],
        build60: ["Deepen grazing management", "Formalize off-take agreements"],
        institutionalize90: ["Genetic selection based on data", "Financial forecasting"],
        kpi: { name: "Mortality Rate", def: "% of herd lost per month" },
        traps: ["Giving up on separation", "Ignoring the calendar"]
    }
];
