export const CROP_FARMING_ACTIONS = {
    snippets: [
        // Market & Sales -> Market
        { signal: 'Price volatility', action: 'Set 3 selling triggers (min price, target, hold line)', tool: 'Price Ladder', kpi_impact: '+avg price' },
        { signal: 'Buyer disputes', action: 'Add lot ID + moisture record per sale', tool: 'Lot Card', kpi_impact: '-rejection' },
        { signal: 'Low prices at harvest', action: 'Split selling into tranches (30/40/30)', tool: 'Selling Calendar', kpi_impact: 'margin stability' },

        // Production & Agronomy -> Operations
        { signal: 'Uneven stands', action: 'Do stand count + replant rules day 7–14', tool: 'Stand Count Sheet', kpi_impact: '-yield variance' },
        { signal: 'Pest pressure rising', action: 'Weekly scouting + threshold actions', tool: 'IPM Scout Card', kpi_impact: '-spray costs' },
        { signal: 'Fertilizer confusion', action: 'Create "nutrition timing map" per crop', tool: 'Crop Calendar', kpi_impact: '+yield' },

        // Post-Harvest -> Operations
        { signal: 'Mold risk', action: 'Mandatory moisture check before bagging', tool: 'Moisture Log', kpi_impact: '-storage loss' },
        { signal: 'Horticulture bruising', action: 'Switch to gentler crates + shade during staging', tool: 'Handling SOP', kpi_impact: '+shelf life' },
        { signal: 'Shrinkage unknown', action: 'Weigh in/out each storage lot weekly', tool: 'Shrinkage Tracker', kpi_impact: '-loss rate' },

        // Inputs & Procurement -> Money
        { signal: 'Emergency buying', action: 'Pre-season procurement list + 2 supplier quotes', tool: 'Procurement Sheet', kpi_impact: '-cost/ha' },
        { signal: 'Counterfeit risk', action: 'Supplier verification checklist (batch/labels)', tool: 'Supplier Scorecard', kpi_impact: '-failure risk' },

        // Finance -> Money
        { signal: 'Cash shortages', action: 'Build 12-week cashflow forecast', tool: 'Cashflow Template', kpi_impact: '-crisis sales' },
        { signal: 'Profit unclear', action: 'Calculate cost per kg per crop', tool: 'Costing Sheet', kpi_impact: '+pricing power' },

        // People -> People
        { signal: 'Labor delays', action: 'Create weekly work plan + daily targets board', tool: 'Work Plan Board', kpi_impact: '+on-time tasks' },
        { signal: 'Quality slipping', action: 'Pay bonuses for Grade A % not speed', tool: 'Incentive Rule', kpi_impact: '+grade mix' },

        // Systems -> Innovation
        { signal: 'No learning', action: 'Weekly 30-min "farm review" (yield, costs, losses, sales)', tool: 'Review Checklist', kpi_impact: '+continuous improvement' },

        // Risk -> Innovation
        { signal: 'Weather shocks', action: 'Add drainage lines / mulching / stagger planting', tool: 'Resilience Checklist', kpi_impact: '-shock loss' }
    ],
    fixPlans7Day: [
        {
            day: 1,
            title: 'Money Truth Day',
            tasks: ['Build cost-per-kg baseline (seed+fert+labor+losses).', 'Calculate break-even price & yield.', 'Separate farm cash from home cash.']
        },
        {
            day: 2,
            title: 'Loss Audit Day',
            tasks: ['Walk harvest->storage path.', 'Start 3 logs: Moisture, Shrinkage, Rejection.', 'Identify top 5 loss points.']
        },
        {
            day: 3,
            title: 'Timing Fix Day',
            tasks: ['Create 30-day crop calendar.', 'Define critical timings (weeding, scouting).', 'Post weekly work plan.']
        },
        {
            day: 4,
            title: 'IPM Control Day',
            tasks: ['Implement weekly scouting routine.', 'Set action thresholds (not just calendar spraying).', 'Check sprayer calibration.']
        },
        {
            day: 5,
            title: 'Buyer Power Day',
            tasks: ['Define Grade A/B/C specs.', 'Create price ladder.', 'Compare current buyer offers.']
        },
        {
            day: 6,
            title: 'Procurement Lock Day',
            tasks: ['List critical inputs for next 30 days.', 'Get 2 quotes per item.', 'Set reorder points.']
        },
        {
            day: 7,
            title: 'Control Room Day',
            tasks: ['Hold first weekly farm review.', 'Pick 3 KPIs for "Farm Scoreboard".', 'Review cashflow forecast.']
        }
    ],
    fixPlans30Day: [
        {
            week: 1,
            focus: 'Foundations (Control Tower)',
            tasks: [
                'Map field/plot IDs.',
                'Setup standard logs (inputs, labor, harvest).',
                'Establish weekly review routine.'
            ]
        },
        {
            week: 2,
            focus: 'Yield & Quality Systems',
            tasks: [
                'Lock crop calendar.',
                'Implement IPM thresholds.',
                'Create harvest readiness checklist + handling SOP.'
            ]
        },
        {
            week: 3,
            focus: 'Loss & Cash Systems',
            tasks: [
                'Enforce moisture testing discipline.',
                'Track shrinkage + corrective actions.',
                'Draft 12-week cashflow forecast.'
            ]
        },
        {
            week: 4,
            focus: 'Market & Procurement Power',
            tasks: [
                'Build buyer pipeline list.',
                'Standardize grading & packaging.',
                'Draft pre-season procurement plan.'
            ]
        }
    ]
};
