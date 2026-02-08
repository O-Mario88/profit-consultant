import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [
    // --- ENGINE ACTIONS ---
    {
        action_id: 'LOG_STOP_CODES_7D',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['downtime_drain'],
        title: 'Install "Stop Code" Sheet',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Shift Lead',
            sme: 'Ops Manager',
            enterprise: 'Plant Manager'
        },
        kpi_links: ['downtime_minutes'],
        proof_required: ['photo_of_log_sheet'],
        impact_score: 5
    },
    {
        action_id: 'PM_CALENDAR_30D',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['reactive_maintenance'],
        title: 'Build Preventive Maintenance Calendar',
        days: 30,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Maintenance Lead',
            sme: 'Maintenance Manager',
            enterprise: 'Engineering Lead'
        },
        kpi_links: ['maintenance_spend_ratio'],
        proof_required: ['copy_of_calendar'],
        impact_score: 8
    },

    // --- FUEL ACTIONS ---
    {
        action_id: 'MASS_BALANCE_AUDIT_7D',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['yield_bleed'],
        title: 'Do a 1-Batch Mass Balance Audit',
        days: 7,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Production Lead',
            sme: 'QA Manager',
            enterprise: 'QA Director'
        },
        kpi_links: ['yield_percentage'],
        proof_required: ['audit_calculation_sheet'],
        impact_score: 6
    },
    {
        action_id: 'WEIGH_CHECK_ROUTINE_7D',
        industry: 'agro_processing',
        line_type: ['packaging'],
        pillar: 'Fuel',
        signal_tags: ['underweight_giveaway'],
        title: 'Start Hourly Weigh-Checks',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Operator',
            small_team: 'QC Lead',
            sme: 'QA Manager',
            enterprise: 'QA Manager'
        },
        kpi_links: ['pack_variance_pct'],
        proof_required: ['hourly_log_photo'],
        impact_score: 4
    },

    // --- SHIELD ACTIONS ---
    {
        action_id: 'MOCK_RECALL_TEST_7D',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Shield',
        signal_tags: ['traceability_gap'],
        title: 'Run a 1-Hour Mock Recall',
        days: 7,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Owner',
            sme: 'Safety Officer',
            enterprise: 'Compliance Manager'
        },
        kpi_links: ['mock_recall_time'],
        proof_required: ['recall_report'],
        impact_score: 7
    }
];
