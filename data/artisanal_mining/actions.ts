
export const actions = {
    snippets: [
        {
            id: 'ACT_ASM_LEGALITY_PACK',
            title: '1-page Site Legality Pack',
            pillar: 'Risk',
            text: 'Compile permits, boundary map, operator list, and site rules into one folder. Keep it ready for inspectors or buyers at all times.',
            signal_tags: ['permission_fog', 'social_license_debt']
        },
        {
            id: 'ACT_ASM_GRIEVANCE_LOG',
            title: 'Grievance Log',
            pillar: 'Risk',
            text: 'A simple logbook tracking community issues: Date, Issue, Owner, Due Date, and Resolution Proof. Stops rumors from becoming shutdowns.',
            signal_tags: ['social_license_debt']
        },
        {
            id: 'ACT_ASM_BATCH_ID',
            title: 'Batch Ticket System',
            pillar: 'Innovation',
            text: 'Tag every bag/lot with a Batch ID (Date-Team-Zone). Consistently link quality and weight to this ID to prevent mixing and theft.',
            signal_tags: ['traceability_breakage', 'mixed_lot_penalty']
        },
        {
            id: 'ACT_ASM_AVAILABILITY_LIST',
            title: 'Weekly Availability Bulletin',
            pillar: 'Market',
            text: 'Send a formatted message to 5+ buyers every Monday: "Available this week: [Qty] of [Grade] at [Location]." Builds competition.',
            signal_tags: ['inquiry_bleed', 'pipeline_hostage']
        },
        {
            id: 'ACT_ASM_SALES_NOTE',
            title: 'Standard Sales Note',
            pillar: 'Leadership',
            text: 'Use a printed/written template for every sale: Batch ID, Weight, Price, Terms, Signatures. No more verbal deals.',
            signal_tags: ['negotiation_bleed', 'side_sell_leak']
        },
        {
            id: 'ACT_ASM_OPS_LOG',
            title: 'Daily Production Log',
            pillar: 'Operations',
            text: 'Track Output, Downtime (Minutes + Cause), and Fuel use daily. Identify the top cause of downtime and fix it.',
            signal_tags: ['measurement_blindspot', 'downtime_tax']
        },
        {
            id: 'ACT_ASM_UNIT_ECON',
            title: 'Unit Economics Sheet',
            pillar: 'Money',
            text: 'Calculate Cost Per Gram/Ton monthly. Include fuel, labor, and "hidden" costs like bribes or delays. Set a floor price.',
            signal_tags: ['costing_gap', 'money_fog']
        },
        {
            id: 'ACT_ASM_SAFETY_CHECK',
            title: 'Daily Safety Standup',
            pillar: 'People',
            text: '10-minute meeting before shift: Review yesterday\'s incidents, check tools, assign roles, and highlight today\'s specific risks.',
            signal_tags: ['standardless_work', 'injury_tax']
        },
        {
            id: 'ACT_ASM_NEAR_MISS',
            title: 'Near-Miss Log',
            pillar: 'People',
            text: 'Record "almost accidents." Fixing these is 10x cheaper than fixing an actual injury or shutdown.',
            signal_tags: ['silent_harm_backlog']
        }
    ],

    fixPlans7Day: [
        {
            title: 'Stabilize Profit',
            description: 'Stop the bleeding from "Permission Fog" and "Downtime Tax" in one week.',
            days: [
                {
                    day: 1,
                    title: 'Legality Audit',
                    action: 'Build the "Site Legality Pack." Gather permits, maps, and rules. If something is missing, list it as a critical gap.',
                    pillar: 'Risk'
                },
                {
                    day: 2,
                    title: 'Operations Baseline',
                    action: 'Start the Daily Production Log. Measure downtime minutes and output. Do not judge, just record.',
                    pillar: 'Operations'
                },
                {
                    day: 3,
                    title: 'Batch Discipline',
                    action: 'Introduce Batch IDs. Tag every active lot. Stop mixing grades immediately.',
                    pillar: 'Innovation'
                },
                {
                    day: 4,
                    title: 'Sales Control',
                    action: 'Draft the Standard Sales Note. Enforce a "No Ticket, No Sale" rule for the team.',
                    pillar: 'Leadership'
                },
                {
                    day: 5,
                    title: 'Market Outreach',
                    action: 'Draft your Weekly Availability Bulletin. Identify 3 new potential buyers to send it to next Monday.',
                    pillar: 'Market'
                },
                {
                    day: 6,
                    title: 'Safety Standup',
                    action: 'Run the first Daily Safety Standup. Focus on the most common near-miss from this week.',
                    pillar: 'People'
                },
                {
                    day: 7,
                    title: 'Weekly Review',
                    action: 'Review the Production Log. Identify the #1 cause of downtime and assign a fix owner.',
                    pillar: 'Operations'
                }
            ]
        }
    ],

    fixPlans30Day: [
        {
            title: 'Build Control',
            description: 'Establish a formalized, data-driven operation that attracts formal buyers.',
            weeks: [
                {
                    week: 1,
                    title: 'Foundation & Rights',
                    action: 'Formalize the Grievance Log and close outstanding community issues. Post "No-Go" rules (Child Labor, etc.) visibly.',
                    pillar: 'Risk'
                },
                {
                    week: 2,
                    title: 'Traceability System',
                    action: 'Implement full Traceability from Pit to Sale. Link Batch IDs to geologic zones and final sales receipts.',
                    pillar: 'Innovation'
                },
                {
                    week: 3,
                    title: 'Financial Clarity',
                    action: 'Build the Unit Economics model. Implement "Separation of Duties" for cash handling (Record vs Keep vs Spend).',
                    pillar: 'Money'
                },
                {
                    week: 4,
                    title: 'Market Expansion',
                    action: 'Launch the "Due Diligence Ready" pack to formal buyers. Aim to secure one pilot deal with a compliance-focused buyer.',
                    pillar: 'Market'
                }
            ]
        }
    ]
};
