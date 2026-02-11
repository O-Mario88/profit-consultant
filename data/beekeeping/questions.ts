import { QuestionDefinition } from '../../types';

export const BEEKEEPING_QUESTIONS: QuestionDefinition[] = [
    // --- PILLAR: Operations (Site & Forage) ---
    // Quick Scan
    {
        qid: 'QS_Beep_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Mainly by access/security.",
        textB: "Mainly by forage calendar and yield history.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'QS_Beep_Ops_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "When we get more boxes.",
        textB: "When forage capacity supports them.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'QS_Beep_Ops_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When colonies look light.",
        textB: "Based on a planned dearth schedule + checks.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'QS_Beep_Ops_4',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "We keep most hives in one strong location.",
        textB: "We spread yards to reduce pressure and compare performance.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },

    // --- PILLAR: Operations (Colony Strength & Queen System) ---
    // Quick Scan
    {
        qid: 'QS_Beep_Ops_5',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When a colony becomes a problem.",
        textB: "On a schedule + performance triggers.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'QS_Beep_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Mainly to increase hive count.",
        textB: "To protect honey production + replace losses.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'QS_Beep_Ops_6',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Treat with extra feeding.",
        textB: "Fix the cause (queen/population) or combine.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'QS_Beep_Ops_7',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "By \"busy entrance.\"",
        textB: "By frames of bees/brood targets.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },

    // --- PILLAR: Operations (Seasonal Ops & Inspection Discipline) ---
    // Quick Scan
    {
        qid: 'QS_Beep_Ops_8',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When we have time.",
        textB: "On a calendar + trigger basis.",
        line_type: ['all'],
        signal_tags: ['seasonal_operations_inspection_discipline']
    },
    {
        qid: 'QS_Beep_Ppl_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Notes are in people’s heads.",
        textB: "Notes are recorded per hive/yard.",
        line_type: ['all'],
        signal_tags: ['seasonal_operations_inspection_discipline']
    },
    {
        qid: 'QS_Beep_Ops_9',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When hives look crowded.",
        textB: "Using a space/flow rule.",
        line_type: ['all'],
        signal_tags: ['seasonal_operations_inspection_discipline']
    },
    {
        qid: 'QS_Beep_Ops_10',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "As we go.",
        textB: "Before flow windows.",
        line_type: ['all'],
        signal_tags: ['seasonal_operations_inspection_discipline']
    },

    // --- PILLAR: Risk (Biosecurity, Pests & Disease Control) ---
    // Quick Scan
    {
        qid: 'QS_Beep_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "When bees look weak.",
        textB: "Based on mite counts + thresholds.",
        line_type: ['all'],
        signal_tags: ['biosecurity_pests_disease_control']
    },
    {
        qid: 'QS_Beep_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Use one treatment most seasons.",
        textB: "Rotate and verify effectiveness.",
        line_type: ['all'],
        signal_tags: ['biosecurity_pests_disease_control']
    },
    {
        qid: 'QS_Beep_Risk_3',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Rarely; it’s time-consuming.",
        textB: "Routinely because losses are more expensive.",
        line_type: ['all'],
        signal_tags: ['biosecurity_pests_disease_control']
    },
    {
        qid: 'QS_Beep_Risk_4',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Only when it’s obvious.",
        textB: "Prevent it as a biosecurity rule.",
        line_type: ['all'],
        signal_tags: ['biosecurity_pests_disease_control']
    },

    // --- PILLAR: Operations (Harvesting, Extraction & Handling) ---
    // Quick Scan
    {
        qid: 'QS_Beep_Ops_11',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When frames look full.",
        textB: "Based on ripeness/moisture discipline.",
        line_type: ['all'],
        signal_tags: ['harvesting_extraction_handling']
    },
    {
        qid: 'QS_Beep_Ops_12',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Mix honey to simplify storage.",
        textB: "Separate lots to protect quality and traceability.",
        line_type: ['all'],
        signal_tags: ['harvesting_extraction_handling']
    },
    {
        qid: 'QS_Beep_Ops_13',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "When the team is free.",
        textB: "On a schedule to avoid delays and loss.",
        line_type: ['all'],
        signal_tags: ['harvesting_extraction_handling']
    },
    {
        qid: 'QS_Beep_Inno_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "“Good enough.”",
        textB: "Treated like a food facility.",
        line_type: ['all'],
        signal_tags: ['harvesting_extraction_handling']
    },

    // --- PILLAR: Risk (Quality, Traceability & Compliance) ---
    // Quick Scan
    {
        qid: 'QS_Beep_Risk_5',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "No, we sell honey without lot codes.",
        textB: "Yes, we sell with batch/lot traceability.",
        line_type: ['all'],
        signal_tags: ['quality_traceability_compliance']
    },
    {
        qid: 'QS_Beep_Risk_6',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Assume quality if honey looks clean.",
        textB: "Verify with moisture + basic QA checks.",
        line_type: ['all'],
        signal_tags: ['quality_traceability_compliance']
    },
    {
        qid: 'QS_Beep_Mkt_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Minimally.",
        textB: "For trust and compliance (market access).",
        line_type: ['all'],
        signal_tags: ['quality_traceability_compliance']
    },
    {
        qid: 'QS_Beep_Risk_7',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Wherever there is space.",
        textB: "Treated like a quality-control point.",
        line_type: ['all'],
        signal_tags: ['quality_traceability_compliance']
    },

    // --- PILLAR: Market (Sales, Pricing & Channel Strategy) ---
    // Quick Scan
    {
        qid: 'QS_Beep_Mkt_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Mostly to whoever buys today.",
        textB: "Through planned channels with targets.",
        line_type: ['all'],
        signal_tags: ['sales_pricing_channel_strategy']
    },
    {
        qid: 'QS_Beep_Inno_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "One product, one price.",
        textB: "Multiple SKUs and price ladder.",
        line_type: ['all'],
        signal_tags: ['sales_pricing_channel_strategy']
    },
    {
        qid: 'QS_Beep_Mkt_3',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Based on market talk.",
        textB: "Based on costs + margin goals.",
        line_type: ['all'],
        signal_tags: ['sales_pricing_channel_strategy']
    },
    {
        qid: 'QS_Beep_Mkt_4',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "Yes, we track and grow repeats.",
        line_type: ['all'],
        signal_tags: ['sales_pricing_channel_strategy']
    },

    // --- PILLAR: Money (Finance, Assets & Control System) ---
    // Quick Scan
    {
        qid: 'QS_Beep_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Sales more than costs.",
        textB: "Profit per hive and cost drivers.",
        line_type: ['all'],
        signal_tags: ['finance_assets_control_system']
    },
    {
        qid: 'QS_Beep_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "“As needed.”",
        textB: "Planned and amortized.",
        line_type: ['all'],
        signal_tags: ['finance_assets_control_system']
    },
    {
        qid: 'QS_Beep_Money_3',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "We reconcile inventory regularly.",
        line_type: ['all'],
        signal_tags: ['finance_assets_control_system']
    },
    {
        qid: 'QS_Beep_Money_4',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Expected in beekeeping.",
        textB: "Analyzed and reduced like a cost center.",
        line_type: ['all'],
        signal_tags: ['finance_assets_control_system']
    },

    // =================================================================================================
    // DEEP SCAN QUESTIONS
    // =================================================================================================

    // --- PILLAR: Operations (Site & Forage) ---
    {
        qid: 'DS_Beep_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Forage is \"generally okay\" most years.",
        textB: "We track flow windows by month/week.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Standard layout everywhere.",
        textB: "Layout changes by climate (wind/shade).",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Nearby \"sometimes.\"",
        textB: "Ensured/managed at every yard.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "By hive count targets.",
        textB: "By forage + labor + equipment capacity.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Risk_8',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Avoid by hope.",
        textB: "Coordinate with farmers / move.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Risk_9',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Accepted as risk.",
        textB: "Theft prevention is a system.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_4',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "We rank yards and expand winners.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_5',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Close together.",
        textB: "Managed to reduce drifting/robbing.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_6',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "We map nectar/pollen sources.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_7',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "It surprises us.",
        textB: "Forecasted and budgeted.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_8',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Only in crisis.",
        textB: "As a planned strategy.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Risk_10',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Reactive.",
        textB: "Built into site design.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Inno_3',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "We track shade/wind effects.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Money_5',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Cheap rent.",
        textB: "Net profit per hive.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_9',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Same everywhere.",
        textB: "Changes by forage richness.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_10',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "Monitor and adjust entrances.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Risk_11',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Ignore changes.",
        textB: "Re-evaluate when land use changes.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_11',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Treat all yards equal.",
        textB: "Best queens/resources to best yards.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Ops_12',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "Harvest logistics designed upfront.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },
    {
        qid: 'DS_Beep_Lead_3',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Because demand exists.",
        textB: "Only when production quality is stable.",
        line_type: ['all'],
        signal_tags: ['site_forage_strategy']
    },

    // --- PILLAR: Operations (Colony Strength & Queen System) ---
    {
        qid: 'DS_Beep_Ops_13',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "Recorded per hive.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'DS_Beep_Ops_14',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Solved \"later.\"",
        textB: "Triaged within days.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'DS_Beep_Inno_4',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Hot bees accepted.",
        textB: "Selection criterion.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'DS_Beep_Ops_15',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Only if desperate.",
        textB: "Before flow.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'DS_Beep_Ops_16',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Keep many alive.",
        textB: "Combine strategically.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'DS_Beep_Lead_4',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Whenever we see swarm cells.",
        textB: "Follow a plan and calendar.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'DS_Beep_Risk_12',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Buy last minute.",
        textB: "Maintain nucs/spare queens.",
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },
    {
        qid: 'DS_Beep_Ops_17',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Not evaluated.",
        textB: "Evaluated each inspection.',
        line_type: ['all'],
        signal_tags: ['colony_strength_queen_system']
    },

    // --- PILLAR: Risk (Biosecurity, Pests & Disease Control) ---
    {
        qid: 'DS_Beep_Risk_13',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Seasonal.",
        textB: "Measured and trended.",
        line_type: ['all'],
        signal_tags: ['biosecurity_pests_disease_control']
    },
    {
        qid: 'DS_Beep_Risk_14',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Rarely.",
        textB: "Standard.",
        line_type: ['all'],
        signal_tags: ['biosecurity_pests_disease_control']
    },
    {
        qid: 'DS_Beep_Risk_15',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "What others use.",
        textB: "Season/temp + rules.",
        line_type: ['all'],
        signal_tags: ['biosecurity_pests_disease_control']
    },
    {
        qid: 'DS_Beep_Risk_16',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "Track failures and adjust.",
        line_type: ['all'],
        signal_tags: ['biosecurity_pests_disease_control']
    },

    // --- PILLAR: Finance (Finance, Assets & Control System) ---
    {
        qid: 'DS_Beep_Money_6',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "Per hive per season.",
        line_type: ['all'],
        signal_tags: ['finance_assets_control_system']
    },
    {
        qid: 'DS_Beep_Money_7',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Mixed (home/biz).",
        textB: "Categorized.",
        line_type: ['all'],
        signal_tags: ['finance_assets_control_system']
    },
    {
        qid: 'DS_Beep_Money_8',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "By task.",
        line_type: ['all'],
        signal_tags: ['finance_assets_control_system']
    },
    {
        qid: 'DS_Beep_Money_9',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Ignored.",
        textB: "Amortized.",
        line_type: ['all'],
        signal_tags: ['finance_assets_control_system']
    },

    // --- PILLAR: Market (Sales, Pricing & Channel Strategy) ---
    {
        qid: 'DS_Beep_Mkt_5',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "Allocated by channel.",
        line_type: ['all'],
        signal_tags: ['sales_pricing_channel_strategy']
    },
    {
        qid: 'DS_Beep_Mkt_6',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "No.",
        textB: "Measured monthly.",
        line_type: ['all'],
        signal_tags: ['sales_pricing_channel_strategy']
    },
    {
        qid: 'DS_Beep_Mkt_7',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "When cash low.",
        textB: "Calendar + reorder system.",
        line_type: ['all'],
        signal_tags: ['sales_pricing_channel_strategy']
    },
    {
        qid: 'DS_Beep_Mkt_8',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "One.",
        textB: "At least 3 active channels.",
        line_type: ['all'],
        signal_tags: ['sales_pricing_channel_strategy']
    }
];
