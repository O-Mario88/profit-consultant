export const FARM_MACHINERY_ACTIONS = {
    snippets: [
        // Market & Offer -> Market
        { signal: 'Territory creep', action: 'Define territory boundaries + travel surcharges', tool: 'Rate Card', kpi_impact: '+margin' },
        { signal: 'Emergency-only brand', action: 'Launch "Uptime Service Plan" (pre-season check)', tool: 'Service Agreement', kpi_impact: '+recurring revenue' },
        { signal: 'Mis-selling risk', action: 'Site survey checklist before quoting installs', tool: 'Site Audit Form', kpi_impact: '-rework' },

        // Pricing & Profit -> Money
        { signal: 'Quote roulette', action: 'Implement standard Rate Card (labor/travel/machine)', tool: 'Rate Card', kpi_impact: 'consistent margin' },
        { signal: 'Ghost travel', action: 'Line item "Mobilization" on every quote', tool: 'Quote Template', kpi_impact: '+revenue' },
        { signal: 'Unpaid diagnostics', action: 'Charge "Diagnostic Fee" (waived if repair accepted)', tool: 'Policy Script', kpi_impact: 'paid time' },

        // Service Operations -> Operations
        { signal: 'Dispatch chaos', action: 'Daily capacity board + route clustering', tool: 'Dispatch Board', kpi_impact: '-travel time' },
        { signal: 'Verbal jobs', action: 'No work without signed Work Order', tool: 'Work Order Pad', kpi_impact: '-disputes' },
        { signal: 'Repeated stockouts', action: 'Check parts availability before confirming date', tool: 'Booking Script', kpi_impact: '+SLA hit' },

        // Fleet Reliability -> Operations
        { signal: 'Breakdown panic', action: 'Implement PM schedule by hours', tool: 'PM Calendar', kpi_impact: '-downtime' },
        { signal: 'Missing tools', action: 'Shadow boards + sign-out sheet', tool: 'Workshop 5S', kpi_impact: '+productivity' },
        { signal: 'Repeat faults', action: 'Root cause review on every repeat visit', tool: 'Recall Log', kpi_impact: '-comebacks' },

        // Parts & Inventory -> Operations
        { signal: 'Parts in pockets', action: 'Parts issued only with Job #', tool: 'Issue Log', kpi_impact: '-shrinkage' },
        { signal: 'Panic buying', action: 'Stock top 20 critical spares', tool: 'Critical Spares List', kpi_impact: '+fill rate' },
        { signal: 'Dead stock', action: 'Quarterly return/auction of slow movers', tool: 'Stock Age Report', kpi_impact: '+cash' },

        // People & Safety -> People
        { signal: 'Safety shortcuts', action: 'Mandatory LOTO + PPE checks', tool: 'Safety Audit', kpi_impact: '-injury risk' },
        { signal: 'Hero technician', action: 'Standardize checklists for all common jobs', tool: 'SOP Library', kpi_impact: 'consistent quality' },

        // Finance -> Money
        { signal: 'Bank of Net-30', action: 'Enforce deposits for all major jobs', tool: 'Payment Terms', kpi_impact: '+cashflow' },
        { signal: 'Fuel ghost', action: 'Track fuel per machine-hour', tool: 'Fuel Log', kpi_impact: '-theft' },
        { signal: 'Late invoices', action: 'Invoice within 24h of job close', tool: 'Billing Process', kpi_impact: '-DSO' },

        // Data & Quality -> Innovation
        { signal: 'WhatsApp operations', action: 'Move job logs to central system/paper', tool: 'Job Register', kpi_impact: '+visibility' },
        { signal: 'No proof', action: 'Photos + test readings on every closeout', tool: 'Closeout App', kpi_impact: '-disputes' }
    ],
    fixPlans7Day: [
        {
            day: 1,
            title: 'Stop the Bleeding',
            tasks: ['Create 1-page Rate Card (labor, travel, min charge).', 'Declare "No Job Without Job #" rule.', 'Start asking "What is at risk?" for triage.']
        },
        {
            day: 2,
            title: 'Visibility & Costing',
            tasks: ['Job cost the last 10 jobs (real hours vs quoted).', 'Identify top 3 loss patterns (travel? parts?).', 'Set multipliers for risk (night/mud).']
        },
        {
            day: 3,
            title: 'Dispatch Control',
            tasks: ['Create visual Dispatch Board (Today/Tomorrow).', 'Cluster routes to cut travel time.', 'Confirm parts before confirming crews.']
        },
        {
            day: 4,
            title: 'Parts Lockdown',
            tasks: ['Lock the parts store.', 'Implement "Issue = Job #" rule.', 'List Top 20 critical spares to stock.']
        },
        {
            day: 5,
            title: 'Callback Kill Switch',
            tasks: ['Implement Closeout Checklist (Photos + Test).', 'Review any callback for root cause.', 'Enforce sign-off before leaving site.']
        },
        {
            day: 6,
            title: 'Cash Quick Wins',
            tasks: ['Invoice all completed jobs within 24h.', 'Call top 10 overdue debtors.', 'Enforce deposits on new bookings.']
        },
        {
            day: 7,
            title: 'Sell Stability',
            tasks: ['Design basic "Uptime Plan" (inspection + priority).', 'Call 5 customers to pitch pre-season check.', 'Review weekly KPIs.']
        }
    ],
    fixPlans30Day: [
        {
            week: 1,
            focus: 'Standardize Money & Jobs',
            tasks: [
                'Build standard Quote & Work Order templates.',
                'Define strict payment terms (deposits).',
                'Train team on Rate Card application.'
            ]
        },
        {
            week: 2,
            focus: 'Dispatch & Capacity',
            tasks: [
                'Define service territories & route days.',
                'Set SLA tiers (Emergency vs Scheduled).',
                'Measure On-Time Arrival & Travel %.'
            ]
        },
        {
            week: 3,
            focus: 'Reliability Backbone',
            tasks: [
                'Implement machine-hour logging & PM schedule.',
                'Workshop 5S (shadow boards, clean zones).',
                'Track MTTR and recurring faults.'
            ]
        },
        {
            week: 4,
            focus: 'Inventory, Quality & Safety',
            tasks: [
                'Set Reorder Points & Bin Locations.',
                'Implement Commissioning Checklists for installs.',
                'Launch Safety SOPs (LOTO, PPE).',
                'First Monthly Performance Review.'
            ]
        }
    ]
};
