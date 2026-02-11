export const INPUT_SUPPLY_ACTIONS = {
    snippets: [
        // Integrity & Compliance
        { signal: 'Counterfeit suspicion', action: 'Isolate → Document → Notify Supplier/Regulator', tool: 'Suspect Goods Log', kpi_impact: 'risk reduction' },
        { signal: 'Label/SDS missing', action: 'Audit all stock for correct language/safety data', tool: 'Label Checklist', kpi_impact: 'compliance' },
        { signal: 'Restricted sales spike', action: 'Verify approvals + controlled dispensing log', tool: 'Restricted Sale Log', kpi_impact: 'safety' },

        // Inventory & Fulfillment
        { signal: 'Expired stock', action: 'Switch to FEFO (First-Expire-First-Out)', tool: 'FEFO Labels', kpi_impact: '-write-offs' },
        { signal: 'Frequent stockouts', action: 'Reorder Point = Lead Time + Seasonality + Safety', tool: 'Reorder Calculator', kpi_impact: '+revenue' },
        { signal: 'Shrinkage spike', action: 'Cycle count A-items weekly', tool: 'Cycle Count Sheet', kpi_impact: '-shrink' },
        { signal: 'Damaged goods', action: 'Containment + recording + disposal SOP', tool: 'Spill/Damage Log', kpi_impact: 'safety/cost' },

        // Sales & Partners
        { signal: 'Price war', action: 'Enforce pricing policy + dealer tiers', tool: 'Dealer Agreement', kpi_impact: 'margin protection' },
        { signal: 'Unauthorized discounts', action: 'Implement Discount Authority Matrix', tool: 'Discount Matrix', kpi_impact: '+margin' },
        { signal: 'Low season sales', action: 'Launch pre-booking bundles + demo plots', tool: 'Season Launch Plan', kpi_impact: '+utilization' },

        // Finance & Credit
        { signal: 'Bad debt rising', action: 'Credit Scorecard: History + Volume + References', tool: 'Credit Application', kpi_impact: '-bad debt' },
        { signal: 'Late payments', action: 'Collections Ladder: Reminder → Hold → Legal', tool: 'Collections Script', kpi_impact: '-DSO' },
        { signal: 'Low margin', action: 'Landed Cost Calculator (include freight/shrink)', tool: 'Pricing Model', kpi_impact: '+gross margin' },

        // Data & Traceability
        { signal: 'Recall risk', action: 'Lot-to-Customer Trace on every invoice', tool: 'Traceability Log', kpi_impact: 'risk mitigation' },
        { signal: 'Returns spike', action: 'Analyze top returns reasons on Exception Dashboard', tool: 'Returns Log', kpi_impact: '-returns cost' }
    ],
    fixPlans7Day: [
        {
            day: 1,
            title: 'Stop Margin Bleeding',
            tasks: ['Pull last 30–90 days sales: top 20 SKUs by revenue.', 'Compute landed cost and gross margin per SKU.', 'Freeze “habit discounts” and require approval code.']
        },
        {
            day: 2,
            title: 'Kill Stockouts + Dead Stock',
            tasks: ['Identify top 20 stockouts and top 20 slow movers.', 'Apply FEFO; relocate near-expiry to “move-first” zone.', 'Launch 2 bundles (fast mover + slow mover) for 7 days.']
        },
        {
            day: 3,
            title: 'Tighten Receiving & Shrink',
            tasks: ['Start batch intake gate (photos + counts + lot capture).', 'Lock high-value items; start mini cycle count on A-items.']
        },
        {
            day: 4,
            title: 'Fix Credit Drift',
            tasks: ['List all receivables by days outstanding; call top 10 overdue.', 'Implement deposit rule for new/late buyers.', 'Pause credit for chronic late payers.']
        },
        {
            day: 5,
            title: 'Partner Discipline',
            tasks: ['Audit top dealers: storage, pricing compliance, display.', 'Retrain 3 key partners (storage + FEFO + returns rules).']
        },
        {
            day: 6,
            title: 'Reduce Returns',
            tasks: ['Categorize returns: quality, misuse, wrong product, damage.', 'Add a 60-second “fit check” script at point of sale.']
        },
        {
            day: 7,
            title: 'Lock the Controls',
            tasks: ['Create a 1-page weekly scorecard (stockouts, shrink, margin, DSO).', 'Assign an owner and a weekly review time.']
        }
    ],
    fixPlans30Day: [
        {
            week: 1,
            focus: 'Governance + SOP',
            tasks: [
                'Write SOPs: receiving, storage, FEFO, returns, suspect goods.',
                'Define discounting and credit rules.',
                'Define compliance roles + escalation paths.'
            ]
        },
        {
            week: 2,
            focus: 'Inventory + Forecast',
            tasks: [
                'Build reorder points per category (seeds vs chemicals etc).',
                'Add seasonality calendar (planting windows, disease cycles).',
                'Implement cycle count cadence.'
            ]
        },
        {
            week: 3,
            focus: 'Sales System + Partner Network',
            tasks: [
                'Implement Dealer Tiering (Gold/Silver/Bronze).',
                'Launch monthly partner training (storage, safe use).',
                'Standardize "season launch" playbook.'
            ]
        },
        {
            week: 4,
            focus: 'Traceability + Analytics',
            tasks: [
                'Implement lot tracking on invoices + returns.',
                'Build Dashboard: margin by SKU, stock turns, DSO, shrink.',
                'Run first "Root Cause Review" meeting.'
            ]
        }
    ]
};
