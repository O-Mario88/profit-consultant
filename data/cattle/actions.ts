import { ActionDefinition } from '../../types';

export const CATTLE_ACTIONS = {
    snippets: [
        {
            id: 'catt_mkt_spec_card',
            title: 'Ready-to-Sell Spec Card',
            pillar: 'Market',
            text: "Define target weight/condition/age, acceptable health status, preferred buyer, expected price range, and negotiation floor.",
            signal_tags: ['market_pricing_power']
        },
        {
            id: 'catt_herd_breeding_reset',
            title: 'Breeding Window Reset',
            pillar: 'Operations',
            text: "Set a defined exposure period and track outcomes; tighten calving season to match feed peak.",
            signal_tags: ['herd_strategy_genetics']
        },
        {
            id: 'catt_feed_plan',
            title: '7-Day Feed Plan Sheet',
            pillar: 'Operations',
            text: "Planned feed sources, quantities, mineral schedule, water checks; includes a buffer line.",
            signal_tags: ['nutrition_feed_system']
        },
        {
            id: 'catt_hlth_scan',
            title: 'Daily 10-Minute Herd Scan',
            pillar: 'Risk',
            text: "Appetite, movement, breathing, manure, social behavior; pull-and-pen rule.",
            signal_tags: ['health_welfare_biosecurity']
        },
        {
            id: 'catt_ops_count',
            title: 'Secure Count Routine',
            pillar: 'Leadership',
            text: "Same time, same method, recorded; investigate variance same day.",
            signal_tags: ['operations_infrastructure']
        },
        {
            id: 'catt_peo_standup',
            title: 'Daily Stand-up',
            pillar: 'People',
            text: "7 minutes: yesterday losses, today priorities, one risk, one fix.",
            signal_tags: ['people_daily_execution']
        },
        {
            id: 'catt_fin_loss_ledger',
            title: 'Loss Ledger',
            pillar: 'Money',
            text: "Every loss becomes a line item (theft, mortality, shrink, discount).",
            signal_tags: ['finance_cash_control']
        },
        {
            id: 'catt_data_mvr',
            title: 'Minimum Viable Records (MVR)',
            pillar: 'Innovation',
            text: "Births, deaths, treatments, sales, feed purchases, headcount.",
            signal_tags: ['records_data_compliance']
        }
    ],
    fixPlans7Day: [
        {
            id: 'catt_7day_stabilize',
            title: '7-Day "Stabilize Profit" Plan',
            description: 'Fast wins to stop leaks and regain control.',
            pillar: 'General',
            steps: [
                { day: 1, action: "Start Loss Ledger (mortality, theft, shrink, discounts). Do a full headcount and create a batch list." },
                { day: 2, action: "Inspect feed storage; fix the biggest spoilage point first. Implement Feed Plan Sheet." },
                { day: 3, action: "Launch Daily Herd Scan + sick pen rule. Set quarantine rule for any new animal." },
                { day: 4, action: "Make Buyer Scorecard and rank top 5. Define one 'Ready-to-Sell Spec Card' for current batch." },
                { day: 5, action: "Run weekly cash view; list bills that cause panic selling. Choose one action: renegotiate term OR plan a controlled sale." },
                { day: 6, action: "Fix the single highest-risk operational issue (water uptime, broken fence section, unsafe loading point)." },
                { day: 7, action: "Baseline 8 KPIs: headcount, mortality, feed spend, water uptime, sales price/kg, shrink %, cash buffer days." }
            ]
        }
    ],
    fixPlans30Day: [
        {
            id: 'catt_30day_build_control',
            title: '30-Day "Build Control" Plan',
            description: 'System wins to lock in long-term profit.',
            pillar: 'General',
            steps: [
                { week: 1, action: "Create 5 SOPs (feeding, watering, sick pen, quarantine, loading). Implement Minimum Viable Records (MVR)." },
                { week: 2, action: "Separate animals into 3–4 groups by need. Start weekly weight/gain proxy tracking. Add pasture rotation schedule." },
                { week: 3, action: "Formalize biosecurity plan (entry rules, visitor log, quarantine). Staff training: low-stress handling + illness detection." },
                { week: 4, action: "Compute cost/day and margin per batch. Run monthly review. Lock supplier improvements." }
            ]
        }
    ]
};
