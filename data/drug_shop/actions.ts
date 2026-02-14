export const DRUG_SHOP_ACTIONS = {
    fix_plans: [
        {
            id: 'drugshop_7_day_stabilize',
            title: '7-Day Stabilize Profit',
            description: 'Stabilize operations, stop margin bleed, and reset safety standards.',
            days: [
                { day: 1, title: 'Control Room Setup', task: 'Build Essentials List + Stockout Log + Expiry Radar (30/60/90).' },
                { day: 2, title: 'Pricing & Discount Logic', task: 'Lock pricing ownership + discount reason codes; fix Top 30 price mismatches.' },
                { day: 3, title: 'Receiving Gate', task: 'Implement receiving gate (qty/condition/expiry/invoice match) + quarantine shelf.' },
                { day: 4, title: 'FEFO Sprint', task: 'FEFO rotation sprint + tag near-expiry items + create clearance/bundle plan.' },
                { day: 5, title: 'Speed & Safety', task: 'Set rush-hour roles + deploy 3-point check routine at the counter.' },
                { day: 6, title: 'Cash & Returns', task: 'Start daily cash pack + refund ladder; log returns by reason.' },
                { day: 7, title: 'Dash-boarding', task: 'Create the weekly dashboard and assign owners: stockouts, expiry, discounts, refunds, variances, dead stock.' }
            ]
        },
        {
            id: 'drugshop_30_day_control',
            title: '30-Day Build Control',
            description: 'Deepen systems for staff training, inventory discipline, and risk control.',
            days: [
                { day: 7, title: 'Week 1: People & Cash', task: 'SOP cards + skills mini-matrix + daily cash pack discipline.' },
                { day: 14, title: 'Week 2: Inventory Rhythm', task: 'Min/max reorder levels for essentials + ABC cycle counts + dead stock tribunal.' },
                { day: 21, title: 'Week 3: Sourcing & Strategy', task: 'Supplier scorecard + duplication cleanup + seasonal mini-playbook.' },
                { day: 28, title: 'Week 4: Risk & Review', task: 'Exception reporting (discounts/refunds) + shrink categories + audit binder lite + monthly review cadence.' }
            ]
        }
    ]
};
