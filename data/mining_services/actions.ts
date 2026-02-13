
export const actions = {
    snippets: [
        {
            id: 'ACT_MS_PREQUAL_PACK',
            title: 'Supplier Prequalification Pack',
            pillar: 'Risk',
            text: 'Build a single digital folder with HSE, QA, Integrity, Insurance, and key CVs. Keep it updated monthly so you never scramble for a tender.',
            signal_tags: ['prequal_panic', 'reputation_drag']
        },
        {
            id: 'ACT_MS_SUB_CHECKLIST',
            title: 'Subcontractor Screening Checklist',
            pillar: 'Risk',
            text: 'A "No Onboarding, No Access" rule. Screen every partner for competency, insurance, and safety history before they step on site.',
            signal_tags: ['subcontractor_shadow_risk']
        },
        {
            id: 'ACT_MS_SLA_MENU',
            title: 'Service Level Agreement (SLA) Menu',
            pillar: 'Innovation',
            text: 'Define "Standard" (Business Days) vs "Premium" (24/7, <4hr Response). Pricing should reflect the risk and speed you commit to.',
            signal_tags: ['value_promise_fog', 'unpriced_complexity']
        },
        {
            id: 'ACT_MS_TENDER_TRACKER',
            title: 'Tender Tracking Engine',
            pillar: 'Market',
            text: 'A simple dashboard tracking upcoming shutdowns, contract expiries, and tender releases. Don\'t wait for the invite—anticipate it.',
            signal_tags: ['late_to_bid_syndrome', 'tender_chasing_addiction']
        },
        {
            id: 'ACT_MS_CHANGE_ORDER',
            title: 'Change Order Request Form',
            pillar: 'Leadership',
            text: 'A simple template for scope changes: Description, Impact, Price, Approval Signature. Use it for every "while you\'re here" request.',
            signal_tags: ['scope_creep_tax', 'unbilled_extras']
        },
        {
            id: 'ACT_MS_JOB_PACK',
            title: 'Job Pack & Evidence Template',
            pillar: 'Operations',
            text: 'The "Bible" for the job: Scope, JSA/Risk Assessment, parts list, and sign-off sheet. No Job Pack, no start.',
            signal_tags: ['field_improvisation_cost', 'handover_failure']
        },
        {
            id: 'ACT_MS_JOB_COST',
            title: 'Job Costing Sheet',
            pillar: 'Money',
            text: 'A simple calculator: Labor + Parts + Travel + Subcontractors + Overhead. Compare Estimate vs Actual for every job.',
            signal_tags: ['profit_fog', 'variance_blindness']
        },
        {
            id: 'ACT_MS_CRITICAL_CONTROLS',
            title: 'Critical Controls Register',
            pillar: 'People',
            text: 'Identify the top 5 fatal risks in your scope. Define the *verification* step for each (e.g., "Check isolation log," not just "Wear PPE").',
            signal_tags: ['hse_theater', 'incident_wipeout']
        }
    ],

    fixPlans7Day: [
        {
            title: 'Stabilize Profit',
            description: 'Stop margin leaks from "Scope Creep" and "Prequal Panic" in one week.',
            days: [
                {
                    day: 1,
                    title: 'Prequal Audit',
                    action: 'Build your "Ready-to-Send" Prequal Folder. Gather certificates, insurance, and stats. Identify expiring items.',
                    pillar: 'Risk'
                },
                {
                    day: 2,
                    title: 'Job Costing Pilot',
                    action: 'Start job-level margin tracking for your top 5 active jobs. Measure Labor, Parts, and "Hidden" costs like travel/standby.',
                    pillar: 'Money'
                },
                {
                    day: 3,
                    title: 'Scope Boundaries',
                    action: 'Add a "Scope Boundary" line to all new quotes. Define what is OUT of scope (e.g., waiting time, access delays).',
                    pillar: 'Innovation'
                },
                {
                    day: 4,
                    title: 'Target List',
                    action: 'Build a Top 30 Target Account list. Identify the specific decision-makers (Maintenance Mgr, Supply Chain) for each.',
                    pillar: 'Market'
                },
                {
                    day: 5,
                    title: 'Change Order Control',
                    action: 'Print "Change Order" forms for field leads. Rule: No extra work without a signed form or email approval.',
                    pillar: 'Leadership'
                },
                {
                    day: 6,
                    title: 'Critical Verification',
                    action: 'Pick your #1 Critical Risk. Go to the field and verify the control is effective (physically check).',
                    pillar: 'People'
                },
                {
                    day: 7,
                    title: 'Weekly Review',
                    action: 'Review the Job Costing results. Identify which job permeated the margin floor and why.',
                    pillar: 'Money'
                }
            ]
        }
    ],

    fixPlans30Day: [
        {
            title: 'Build Control',
            description: 'Establish an audit-ready, scalable operation that wins enterprise contracts.',
            weeks: [
                {
                    week: 1,
                    title: 'Foundation & Risk',
                    action: 'Formalize the Prequal Pack and Subcontractor Screening. Ensure no partner enters a site without checks.',
                    pillar: 'Risk'
                },
                {
                    week: 2,
                    title: 'Operations System',
                    action: 'Implement "Job Packs" for every job. Start ABC Inventory Analysis to control stockouts and dead stock.',
                    pillar: 'Operations'
                },
                {
                    week: 3,
                    title: 'Commercial Discipline',
                    action: 'Roll out the "Commercial Gate" review for quotes. Standardize SLAs and Warranty terms.',
                    pillar: 'Leadership'
                },
                {
                    week: 4,
                    title: 'Market Engine',
                    action: 'Launch the Tender Tracker and Capability Proof assets. Start the "5 Touches" campaign for Top 30 targets.',
                    pillar: 'Market'
                }
            ]
        }
    ]
};
