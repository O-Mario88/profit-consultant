import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [
    // --- Pack A: FCR & Feed Waste Killer ---
    {
        action_id: 'AC_PIG_Money_1',
        industry: 'agriculture',
        title: "Adjust Feeders & Control Spillage",
        days: 7,
        effort: 'S',
        pillar: 'Money',
        signal_tags: ['FEED_EFFICIENCY', 'WASTE_REDUCTION'],
        line_type: ['all'],
        kpi_links: ['FCR', 'Feed Cost/kg']
    },
    {
        action_id: 'AC_PIG_Money_2',
        industry: 'agriculture',
        title: "Reconcile Feed Stock Weekly",
        days: 30,
        effort: 'M',
        pillar: 'Money',
        signal_tags: ['FEED_TRACKING', 'INVENTORY_CONTROL'],
        line_type: ['all'],
        kpi_links: ['Inventory Variance'],
        default_owner_by_size: { solo: 'Farmer', micro: 'Farm Manager', small: 'Store Keeper' }
    },

    // --- Pack B: Piglet Survival Lock ---
    {
        action_id: 'AC_PIG_People_1',
        industry: 'agriculture',
        title: "Farrowing Pen Readiness Check",
        days: 7,
        effort: 'S',
        pillar: 'People',
        signal_tags: ['PREPARATION_DISCIPLINE', 'MORTALITY_REDUCTION'],
        line_type: ['all'],
        kpi_links: ['Pre-weaning Mortality']
    },
    {
        action_id: 'AC_PIG_People_2',
        industry: 'agriculture',
        title: "Implement Crushing Reduction Routine",
        days: 30,
        effort: 'M',
        pillar: 'People',
        signal_tags: ['ANIMAL_CARE', 'MORTALITY_REDUCTION'],
        line_type: ['all'],
        kpi_links: ['Born Alive vs Weaned']
    },

    // --- Pack C: Post-Wean Stability ---
    {
        action_id: 'AC_PIG_People_3',
        industry: 'agriculture',
        title: "Staged Feed & Weaning Hygiene",
        days: 30,
        effort: 'M',
        pillar: 'People',
        signal_tags: ['STRESS_MANAGEMENT', 'HYGIENE_STANDARD'],
        line_type: ['all'],
        kpi_links: ['Post-wean Mortality']
    },

    // --- Pack D: Biosecurity Wall ---
    {
        action_id: 'AC_PIG_Risk_1',
        industry: 'agriculture',
        title: "Install/Enforce Entry Control (Footbath)",
        days: 7,
        effort: 'S',
        pillar: 'Risk',
        signal_tags: ['ACCESS_CONTROL', 'BIOSECURITY_CULTURE'],
        line_type: ['all'],
        kpi_links: ['Outbreak Frequency']
    },
    {
        action_id: 'AC_PIG_Risk_2',
        industry: 'agriculture',
        title: "Establish Isolation Pen",
        days: 7,
        effort: 'M',
        pillar: 'Risk',
        signal_tags: ['ISOLATION_PROTOCOL', 'DISEASE_RESPONSE'],
        line_type: ['all'],
        kpi_links: ['Spread Rate']
    },

    // --- Pack E: Batch Flow & Uniformity ---
    {
        action_id: 'AC_PIG_Ops_1',
        industry: 'agriculture',
        title: "Separate Pigs by Size/Age",
        days: 7,
        effort: 'M',
        pillar: 'Operations',
        signal_tags: ['GROUP_MANAGEMENT', 'BIOSECURITY_INTERNAL'],
        line_type: ['all'],
        kpi_links: ['Uniformity %']
    },
    {
        action_id: 'AC_PIG_Ops_2',
        industry: 'agriculture',
        title: "Create Pig Flow Board",
        days: 30,
        effort: 'L',
        pillar: 'Operations',
        signal_tags: ['FLOW_MANAGEMENT', 'CAPACITY_PLANNING'],
        line_type: ['all'],
        kpi_links: ['Overcrowding Days']
    },

    // --- Pack F: Market Grade Ladder ---
    {
        action_id: 'AC_PIG_Market_1',
        industry: 'agriculture',
        title: "Build Sell-Ready List by Weight",
        days: 7,
        effort: 'S',
        pillar: 'Market',
        signal_tags: ['GRADING_DISCIPLINE', 'SALES_READINESS'],
        line_type: ['all'],
        kpi_links: ['% Sold at Target']
    },
    {
        action_id: 'AC_PIG_Market_2',
        industry: 'agriculture',
        title: "Develop 2-3 Consistent Buyer Channels",
        days: 30,
        effort: 'L',
        pillar: 'Market',
        signal_tags: ['CHANNEL_DIVERSITY', 'RELATIONSHIP_BUILDING'],
        line_type: ['all'],
        kpi_links: ['Discount Rate']
    },

    // --- Pack G: Cashflow & Inventory ---
    {
        action_id: 'AC_PIG_Inn_1',
        industry: 'agriculture',
        title: "Separate Farm Cash",
        days: 7,
        effort: 'S',
        pillar: 'Innovation',
        signal_tags: ['FINANCIAL_DISCIPLINE'],
        line_type: ['all'],
        kpi_links: ['Working Cash Weeks']
    },
    {
        action_id: 'AC_PIG_Inn_2',
        industry: 'agriculture',
        title: "Implement Batch P&L Tracking",
        days: 30,
        effort: 'M',
        pillar: 'Innovation',
        signal_tags: ['UNIT_COSTING', 'PROFIT_TRACKING'],
        line_type: ['all'],
        kpi_links: ['Margin per Pig']
    },

    // --- Pack H: Waste-to-Value ---
    {
        action_id: 'AC_PIG_Inn_3',
        industry: 'agriculture',
        title: "Manure Removal & Use Plan",
        days: 30,
        effort: 'M',
        pillar: 'Innovation',
        signal_tags: ['WASTE_VALORIZATION', 'REVENUE_DIVERSIFICATION'],
        line_type: ['all'],
        kpi_links: ['Value Captured']
    }
];
