
export const BEEKEEPING_ACTIONS = {
    snippets: [
        // Site & Forage
        { signal: 'Low yields by yard', action: 'Rank yards (A/B/C) and relocate or reduce density', tool: 'Yard Scorecard', kpi_impact: '+yield/hive' },
        { signal: 'High feed costs in dearth', action: 'Build forage calendar + feed protocol', tool: 'Dearth Plan Sheet', kpi_impact: '-feed burn' },
        { signal: 'Theft risk', action: 'Hive marking + visit routine + hidden placement', tool: 'Asset Log', kpi_impact: '-losses' },
        { signal: 'Robbing pressure', action: 'Reduce entrances + clean apiary', tool: 'Robbing SOP', kpi_impact: '-disease spread' },

        // Colony & Queens
        { signal: 'Spotty brood', action: 'Requeen trigger within 7 days', tool: 'Queen Triage Checklist', kpi_impact: '+population' },
        { signal: 'Chronic weak hives', action: 'Combine policy (don’t pet weak colonies)', tool: 'Combine SOP', kpi_impact: '-pest magnet cost' },
        { signal: 'Swarm cells', action: 'Split with purpose or add space', tool: 'Swarm Playbook', kpi_impact: 'protect honey flow' },
        { signal: 'No backup queens', action: 'Build nuc buffer', tool: 'Nuc Inventory Tracker', kpi_impact: 'reduce downtime' },

        // Inspection
        { signal: 'Missed super timing', action: 'Pre-flow equipment audit + super rule', tool: 'Equipment Audit Sheet', kpi_impact: '+harvest kg' },
        { signal: 'Unrecorded inspections', action: 'Phone form/checklist per hive', tool: 'Hive Log', kpi_impact: 'faster decisions' },
        { signal: 'Labor chaos', action: 'Task batching (inspect 20, feed 20)', tool: 'Weekly Ops Board', kpi_impact: '-hours/kg' },

        // Pest/Disease
        { signal: 'Unknown Varroa load', action: 'Alcohol wash count monthly', tool: 'Varroa Log', kpi_impact: 'early action' },
        { signal: 'Treatment failure', action: 'Verify post-count + rotate approach', tool: 'Treatment Scorecard', kpi_impact: 'less loss' },
        { signal: 'Drifting/robbing', action: 'Yard spacing + entrance reductions', tool: 'Biosecurity SOP', kpi_impact: 'lower spread' },
        { signal: 'Old comb buildup', action: 'Comb renewal schedule', tool: 'Comb Rotation Map', kpi_impact: 'lower pathogen load' },

        // Harvest
        { signal: 'Wet honey risk', action: 'Harvest only ripe; test moisture', tool: 'Lot Sheet', kpi_impact: 'prevent fermentation' },
        { signal: 'Mixed lots', action: 'Lot separation by yard/date', tool: 'Lot Coding', kpi_impact: 'protect premium' },
        { signal: 'Spillage losses', action: 'Spillage kit + cleanup SOP', tool: 'Loss Log', kpi_impact: '+sellable kg' },
        { signal: 'Extractor bottleneck', action: 'Book extraction windows + maintenance', tool: 'Capacity Plan', kpi_impact: 'timely harvest' },

        // Quality
        { signal: 'Buyer asks proof', action: 'Implement batch traceability', tool: 'Traceability Form', kpi_impact: 'access premium' },
        { signal: 'Complaint spike', action: 'Isolate lot + root-cause', tool: 'QA Checklist', kpi_impact: 'fewer returns' },

        // Sales
        { signal: 'Price pressure', action: 'Build SKU ladder + bundle strategy', tool: 'Pricing Sheet', kpi_impact: 'higher AOV' },
        { signal: 'One buyer risk', action: 'Open 2 new channels in 30 days', tool: 'Channel Plan', kpi_impact: 'stability' },
        { signal: 'Slow stock', action: 'Promo tied to inventory age', tool: 'Promo Planner', kpi_impact: 'faster cash cycle' },

        // Finance
        { signal: 'Unknown profit per hive', action: 'Simple unit economics model', tool: 'Profit Calculator', kpi_impact: 'clarity' },
        { signal: 'Cash crash', action: 'Monthly cash forecast', tool: 'Cash Plan', kpi_impact: 'fewer emergencies' },
        { signal: 'Inventory disappears', action: 'Monthly mini-audit', tool: 'Inventory List', kpi_impact: 'shrinkage down' }
    ],
    fixPlans7Day: [
        {
            day: 1,
            title: 'Baseline & Triage',
            tasks: ['Create hive IDs / yard list + simple log.', 'Categorize colonies: Strong / Medium / Weak / Suspect.', 'Define "no excuses" metrics: inspection rate, queen-right %, mite test count.']
        },
        {
            day: 2,
            title: 'Varroa/Health Reality Check',
            tasks: ['Run mite counts on a sample; log results.', 'Identify suspect brood; isolate decisions.', 'Reduce robbing triggers (close exposed honey).']
        },
        {
            day: 3,
            title: 'Queen-right + Weakness Cleanup',
            tasks: ['Confirm queen-right status on priority hives.', 'Combine chronic weak hives.', 'Start nuc buffer plan.']
        },
        {
            day: 4,
            title: 'Equipment & Super Readiness',
            tasks: ['Audit: frames, supers, lids, stands, extractor.', 'Fix 10–20% of small failures causing downtime.']
        },
        {
            day: 5,
            title: 'Harvest Discipline',
            tasks: ['Identify harvest-ready hives; plan schedule.', 'Commit to ripe honey/moisture discipline.', 'Prepare clean containers + lot-coding method.']
        },
        {
            day: 6,
            title: 'Sales Quick Wins',
            tasks: ['Create 2–3 SKUs + simple price ladder.', 'Reach out to 10 repeat buyers / 5 B2B prospects.', 'Set a reorder/WhatsApp list.']
        },
        {
            day: 7,
            title: 'Control Loop',
            tasks: ['Review numbers.', 'Lock weekly cadence: inspection, health test, prep, sales.', 'Write 1-page SOP: "How we inspect + record + decide."']
        }
    ],
    fixPlans30Day: [
        {
            week: 1,
            focus: 'Measurement + Standards',
            tasks: [
                'Implement hive log + yard scorecards.',
                'Define thresholds (queen issues, mite counts).',
                'Set lot coding + traceability for all honey leaving.'
            ]
        },
        {
            week: 2,
            focus: 'Health & Biosecurity Program',
            tasks: [
                'Establish routine testing calendar.',
                'Create treatment effectiveness check.',
                'Comb renewal plan + quarantine rules.',
                'Reduce robbing/drift with layout policy.'
            ]
        },
        {
            week: 3,
            focus: 'Production Efficiency',
            tasks: [
                'Equipment capacity planning (supers, extractor).',
                'Standardize harvest workflow (clean room, handling).',
                'Train helpers: inspection checklist, hygiene, labeling.'
            ]
        },
        {
            week: 4,
            focus: 'Sales + Finance Control',
            tasks: [
                'Build channel mix (at least 3 active).',
                'Add value ladder (bulk → mid → premium).',
                'Build unit economics: profit per hive, cost per jar.',
                'Monthly cash forecast and reinvestment rules.'
            ]
        }
    ]
};
