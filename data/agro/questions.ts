import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- ENGINE ---
    {
        qid: 'ENG_AGRO_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['downtime_drain', 'reactive_maintenance'],
        weight: 1.2,
        textA: "We only fix machines when they break; maintenance is mostly reactive.",
        textB: "We have a strict preventive maintenance schedule that we follow even during peak season.",
        kpi_links: ['downtime_minutes', 'maintenance_spend_ratio'],
        actions_7d: ['LOG_STOP_CODES_7D', 'MAINTENANCE_AUDIT_7D'],
        actions_30d: ['PM_CALENDAR_30D', 'SPARE_PARTS_SYSTEM_30D']
    },
    {
        qid: 'ENG_AGRO_02',
        industry: 'agro_processing',
        line_type: ['packaging'],
        pillar: 'Engine',
        signal_tags: ['changeover_black_hole'],
        weight: 1.0,
        textA: "Changeovers take as long as they take; it depends on who is operating.",
        textB: "Changeovers follow a timed standard procedure and are tracked like pit stops.",
        kpi_links: ['changeover_time_avg'],
        actions_7d: ['TIME_CHANGEOVER_7D'],
        actions_30d: ['SMED_WORKSHOP_30D']
    },

    // --- FUEL ---
    {
        qid: 'FUEL_AGRO_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['yield_bleed', 'waste_not_costed'],
        weight: 1.5,
        textA: "We don't track exact input vs. output weights per batch; we just check end-of-day totals.",
        textB: "We measure mass balance (Input vs Output) for every single batch to catch yield loss.",
        kpi_links: ['yield_percentage', 'waste_ratio'],
        actions_7d: ['MASS_BALANCE_AUDIT_7D'],
        actions_30d: ['YIELD_DASHBOARD_30D']
    },
    {
        qid: 'FUEL_AGRO_02',
        industry: 'agro_processing',
        line_type: ['packaging'],
        pillar: 'Fuel',
        signal_tags: ['underweight_giveaway'],
        weight: 1.2,
        textA: "We check pack weights occasionally or when a buyer complains.",
        textB: "We check-weigh samples every hour to ensure we aren't giving away product.",
        kpi_links: ['pack_variance_pct'],
        actions_7d: ['WEIGH_CHECK_ROUTINE_7D'],
        actions_30d: ['AUTO_CHECKWEIGHER_CALIBRATION_30D']
    },

    // --- VOICE ---
    {
        qid: 'VOICE_AGRO_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Voice',
        signal_tags: ['buyer_power_trap', 'channel_dependency'],
        weight: 1.5,
        textA: "One or two big buyers dictate our price and terms; we can't really say no.",
        textB: "We have a diverse mix of buyers and channels so no single customer owns us.",
        kpi_links: ['customer_concentration_pct'],
        actions_7d: ['CUSTOMER_RISK_MAP_7D'],
        actions_30d: ['NEW_CHANNEL_PILOT_30D']
    },

    // --- SHIELD ---
    {
        qid: 'SHIELD_AGRO_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Shield',
        signal_tags: ['traceability_gap', 'label_risk'],
        weight: 1.5,
        textA: "If a buyer asked for the exact batch history of a product from 3 months ago, we'd struggle to find it.",
        textB: "We can trace any finished product back to its raw material batch and processing date in minutes.",
        kpi_links: ['mock_recall_time'],
        actions_7d: ['MOCK_RECALL_TEST_7D'],
        actions_30d: ['BATCH_CODING_SYSTEM_30D']
    }
];
