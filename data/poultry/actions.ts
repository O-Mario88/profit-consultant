
export const actions = {
    // --- Action Snippets (Library) ---
    snippets: [
        {
            id: 'ACT_POULTRY_1',
            title: 'FCR / Feed-per-Tray Accelerator',
            text: 'Calibrate feeder height and flow to stop spillage. Enforce phase discipline (starter/grower/finisher). Record daily feed intake vs birds.',
            pillar: 'Money',
            signal_tags: ['FEED_WASTE', 'COST_CONTROL']
        },
        {
            id: 'ACT_POULTRY_2',
            title: 'Brooding Perfection (0–14d)',
            text: 'Pre-heat house 24hr early. Ensure uniform water/feed access. Monitor chick behavior (not just temp). Fix drafts.',
            pillar: 'Innovation',
            signal_tags: ['BROODING_SETUP', 'EARLY_ACCESS']
        },
        {
            id: 'ACT_POULTRY_3',
            title: 'Biosecurity Wall',
            text: 'Restrict entry. Use house-specific boots. Isolate sick birds immediately. Enforcement dead bird disposal SOP.',
            pillar: 'Risk',
            signal_tags: ['BIOSECURITY_ACCESS', 'ISOLATION']
        },
        {
            id: 'ACT_POULTRY_4',
            title: 'Litter & Ammonia Control',
            text: 'Fix water leaks immediately. Remove wet spots daily. Tune ventilation to dry litter. Measure ammonia incidents.',
            pillar: 'Operations',
            signal_tags: ['LITTER_QUALITY', 'AIR_QUALITY']
        },
        {
            id: 'ACT_POULTRY_5',
            title: 'Heat Stress Defense',
            text: 'Optimize airflow. Ensure water uptime. Adjust feeding times to cooler hours. Track heat-related mortality.',
            pillar: 'Operations',
            signal_tags: ['HEAT_STRESS', 'CLIMATE_CONTROL']
        },
        {
            id: 'ACT_POULTRY_6',
            title: 'Egg Quality / Grade Ladder',
            text: 'Improve collection frequency. Handle gently to reduce cracks. Sort eggs/birds by grade. Target premium buyers.',
            pillar: 'Market',
            signal_tags: ['QUALITY_CONTROL', 'GRADING_DISCIPLINE']
        },
        {
            id: 'ACT_POULTRY_7',
            title: 'Cashflow + Inventory Control',
            text: 'Weekly reconciliation of feed/stock. Separate farm cash. Protect critical budgets (feed/health) from withdrawals.',
            pillar: 'Money',
            signal_tags: ['INVENTORY_MANAGEMENT', 'CASH_FLOW']
        },
        {
            id: 'ACT_POULTRY_8',
            title: 'People & Checklist System',
            text: 'Implement daily checklists for all houses. Clarify roles. Hold weekly 15min KPI review meetings.',
            pillar: 'People',
            signal_tags: ['STANDARD_WORK', 'TEAM_ALIGNMENT']
        }
    ],

    // --- 7-Day Stabilize Profit Plan ---
    plan7d: [
        { day: 1, title: "Baseline + Stop Guessing", text: "Count birds per house. Start 4 logs: feed in/out, mortality, water uptime, sales/production." },
        { day: 2, title: "Kill Feed Spillage", text: "Adjust feeder height/flow to stop waste. Secure feed store. Start daily 'bags vs birds' check." },
        { day: 3, title: "Water Uptime Non-Negotiable", text: "Check lines/pressure morning & evening. Fix leaks. Ensure 100% access." },
        { day: 4, title: "Brooding/Comfort Audit", text: "Check for drafts, cold spots, or crowding. Adjust ventilation/access points." },
        { day: 5, title: "Litter + Ammonia Reset", text: "Remove wet litter zones. Fix root causes (leaks). Tune ventilation to dry floor." },
        { day: 6, title: "Biosecurity Tightening", text: "Enforce boot dip/change. Restrict visitors. Create isolation zone for sick birds." },
        { day: 7, title: "Market & Money Discipline", text: "Create sell-ready grade list (weights/quality). Separate farm cash wallet." }
    ],

    // --- 30-Day Build Control Plan ---
    plan30d: [
        { week: 1, title: "Measurement + Routines", text: "Lock in daily checklists. Start weekly KPI review (FCR, Mortality, Uniformity)." },
        { week: 2, title: "Environment Control", text: "Litter moisture plan. Ventilation tuning. Heat stress SOP. Fix all broken equipment." },
        { week: 3, title: "Health System", text: "Vaccination record discipline. Isolation workflow. Water sanitation routine. Rodent control." },
        { week: 4, title: "Profit System", text: "Calculate unit economics (cost/kg or /tray). Compare channel margins. Lock inventory reconciliation." }
    ]
};
