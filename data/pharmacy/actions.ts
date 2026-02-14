export const PHARMACY_ACTIONS = {
    fix_plans: [
        {
            id: 'pharmacy_7_day_stabilize',
            title: '7-Day Stabilize Profit',
            description: 'Stabilize the control room, stop margin bleed, and reset patient safety.',
            days: [
                { day: 1, title: 'Control Room Build', task: 'Create Top 100 Essentials list + Stockout Log. Start Temp Logs.' },
                { day: 2, title: 'Margin & Pricing Audit', task: 'Lock pricing ownership. Fix Top 50 price-label mismatches. Set discount codes.' },
                { day: 3, title: 'Dispensing Safety Sprint', task: 'Implement high-risk double-check rule. Separate LASA drugs.' },
                { day: 4, title: 'Receiving Gate', task: 'Verify quantity, expiry, batch on all inbound. Quarantine suspect stock.' },
                { day: 5, title: 'Patient Experience Reset', task: 'Clear the queue flow. Post counseling micro-scripts. Add privacy cue.' },
                { day: 6, title: 'Claims & Cash Discipline', task: 'Daily cash/claim recon. Log Top 10 denial reasons and fix one root cause.' },
                { day: 7, title: 'Weekly Beat', task: 'Hold first 45-min review: Stockouts, Expiry Risk, Margin, Error Trend.' }
            ]
        },
        {
            id: 'pharmacy_30_day_control',
            title: '30-Day Build Control',
            description: 'Embed GPP standards, systemize inventory, and build clinical service trust.',
            weeks: [
                { week: 1, title: 'Standards & Roles', task: 'Publish Station SOP cards. Assign owners for Fridge, Inventory, Dispensing.' },
                { week: 2, title: 'Inventory & Cold Chain', task: 'FEFO audit. Set Min/Max for Essentials. Drill Excursion SOP.' },
                { week: 3, title: 'Clinical Consistency', task: 'Build Service Menu. Train on counseling consistency. Log interventions.' },
                { week: 4, title: 'Governance & Revenue', task: 'Supplier scorecard. Shrink control. Complete Audit Binder. Review Denials.' }
            ]
        }
    ]
};
