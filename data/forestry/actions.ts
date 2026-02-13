export const FORESTRY_ACTIONS = {
    snippets: [
        {
            id: 'for_strat_map',
            title: 'One-Page Strategy Map',
            pillar: 'Leadership',
            text: "Define top 3 products, top 2 markets, and top 3 'no-go' deals (where you lose money).",
            signal_tags: ['strategy_positioning']
        },
        {
            id: 'for_ops_ril_checklist',
            title: 'Pre-Harvest Plan + RIL Checklist',
            pillar: 'Operations',
            text: "Boundary verification, protected zones, skid trails, road plan, felling direction, landing locations.",
            signal_tags: ['operations_delivery']
        },
        {
            id: 'for_inn_trace_pack',
            title: 'Log Traceability Pack',
            pillar: 'Innovation',
            text: "Unique log/batch ID, harvest block, species, GPS, transport doc, yard receiving link.",
            signal_tags: ['innovation_systems_data']
        },
        {
            id: 'for_ops_recovery_center',
            title: 'Mill Recovery Command Center',
            pillar: 'Operations',
            text: "Daily: log input volume, lumber output volume, value recovery, downtime reasons, rejects.",
            signal_tags: ['operations_delivery']
        },
        {
            id: 'for_ops_moisture_sop',
            title: 'Moisture Control SOP',
            pillar: 'Operations',
            text: "Target MC by market, sampling method, sticker spacing, storage rules, 'hold until stable'.",
            signal_tags: ['operations_delivery']
        },
        {
            id: 'for_mkt_contract_addendum',
            title: 'Timber Sales Contract Addendum',
            pillar: 'Market',
            text: "Grade/spec definitions, MC tolerance, claims window, inspection method, penalties.",
            signal_tags: ['offer_pricing_power']
        },
        {
            id: 'for_fin_profit_review',
            title: 'Weekly Profit Review',
            pillar: 'Money',
            text: "Top 5 numbers: Recovery %, Value recovery, Downtime %, Cash on hand, Order backlog.",
            signal_tags: ['finance_profit_control']
        }
    ],
    fixPlans7Day: [
        {
            id: 'for_7day_stabilize',
            title: '7-Day "Stabilize Profit" Actions',
            description: 'Fast wins to stop leaks in forestry and timber operations.',
            pillar: 'General',
            steps: [
                { day: 1, action: "Create One-Page Strategy Map: define top 3 products, top 2 markets, and 3 'no-go' deals." },
                { day: 2, action: "Stop unmanaged cutting: enforce a 'harvest authorization' sheet tied to block/plot & order." },
                { day: 3, action: "Customer concentration alarm: list top buyers; set rule: no single buyer > X% next 90 days." },
                { day: 4, action: "Traceability triage: pick one high-risk step (harvest docs, yard receiving) and standardize it." },
                { day: 5, action: "Fix sorting immediately: introduce 3 yard zones (High-value, Standard, Utility/Waste)." },
                { day: 6, action: "Start measuring recovery daily (even crude): log input vs lumber output." },
                { day: 7, action: "Run Weekly Profit Review: cash, receivables aging, inventory value, margin, claims." }
            ]
        }
    ],
    fixPlans30Day: [
        {
            id: 'for_30day_build_control',
            title: '30-Day "Build Control" Actions',
            description: 'System wins to lock in long-term timber profitability.',
            pillar: 'General',
            steps: [
                { week: 1, action: "Build a 12-month harvest + sales plan (by species, diameter class, product)." },
                { week: 2, action: "Create a product profitability ladder (best-to-worst margin) and redesign production priorities." },
                { week: 3, action: "Implement internal traceability audits monthly (batch reconciliation)." },
                { week: 4, action: "Create a risk plan: fire, theft, pests, weather—assign owners and response playbooks." }
            ]
        }
    ]
};
