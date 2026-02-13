
import { SignalTag } from '../../types';

export const actions = {
    // P1: Risk
    lot_trace_drill: {
        title: 'Traceability Drill',
        description: 'Trace a lot code to all customers in <30 mins.',
        link: '#',
        days: 7,
        pillar: 'Risk',
        signal_tags: ['traceability_fog', 'regulatory_scramble_cost'] as SignalTag[]
    },
    ice_hygiene_lock: {
        title: 'Ice Hygiene Lock',
        description: 'Dedicated scoops, no hands, covered bins. Train staff.',
        link: '#',
        days: 7,
        pillar: 'Risk',
        signal_tags: ['ice_as_food_blind_spot', 'hygiene_under_pressure_slip'] as SignalTag[]
    },

    // P2: Innovation
    filter_dp_log: {
        title: 'Filter DP Log',
        description: 'Start daily DP log; change filters on pressure, not just time.',
        link: '#',
        days: 7,
        pillar: 'Innovation',
        signal_tags: ['filter_drift_bleed', 'barrier_gap'] as SignalTag[]
    },
    sanitation_sched: {
        title: 'Sanitation Schedule',
        description: 'Map all contact surfaces and set cleaning frequency + log.',
        link: '#',
        days: 7,
        pillar: 'Innovation',
        signal_tags: ['sanitation_debt', 'biofilm_tax'] as SignalTag[]
    },

    // P3: Market
    damage_triage: {
        title: 'Distribution Damage Triage',
        description: 'Fix top 2 causes of damage (stacking, loading).',
        link: '#',
        days: 7,
        pillar: 'Market',
        signal_tags: ['dirty_packaging_churn', 'seal_trust_loss'] as SignalTag[]
    },
    melt_loss_log: {
        title: 'Melt Loss Tracker',
        description: 'Log melt loss by route; re-sequence worst route.',
        link: '#',
        days: 7,
        pillar: 'Market',
        signal_tags: ['melt_bleed', 'route_profit_illusion'] as SignalTag[]
    },

    // P4: Leadership
    route_profit_calc: {
        title: 'Route Profit Calc',
        description: 'Calculate profit per route (sales - fuel - labor - melt).',
        link: '#',
        days: 7,
        pillar: 'Leadership',
        signal_tags: ['route_profit_illusion', 'cash_trap_customers'] as SignalTag[]
    },
    cost_upload: {
        title: 'Unit Cost Refresh',
        description: 'Update cost model with current energy and packaging prices.',
        link: '#',
        days: 7,
        pillar: 'Leadership',
        signal_tags: ['unit_economics_fog', 'energy_squeeze'] as SignalTag[]
    },

    // P5: Operations
    downtime_top3: {
        title: 'Top 3 Downtime Fix',
        description: 'Log downtime causes; attack top 3 (caps? labels?).',
        link: '#',
        days: 7,
        pillar: 'Operations',
        signal_tags: ['micro_stoppage_tax', 'capacity_leak'] as SignalTag[]
    },
    seal_check_rtn: {
        title: 'Seal Check Routine',
        description: 'Hourly seal/leak check logged at the filler.',
        link: '#',
        days: 7,
        pillar: 'Operations',
        signal_tags: ['leak_rate_burn', 'rework_treadmill'] as SignalTag[]
    },

    // P6: Money
    pack_min_max: {
        title: 'Packaging Min/Max',
        description: 'Set reorder points for caps/preforms/bags to stop stockouts.',
        link: '#',
        days: 7,
        pillar: 'Money',
        signal_tags: ['packaging_choke', 'stockout_penalty'] as SignalTag[]
    },
    collections_sprint: {
        title: 'Collections Sprint',
        description: 'Call all overdue accounts; enforce credit hold on worst offenders.',
        link: '#',
        days: 7,
        pillar: 'Money',
        signal_tags: ['cash_hostage_customers', 'inventory_fiction'] as SignalTag[]
    },

    // P7: People
    hygiene_huddle: {
        title: 'Hygiene Huddle',
        description: 'Daily shift start: check hands, uniforms, illness reporting.',
        link: '#',
        days: 7,
        pillar: 'People',
        signal_tags: ['hygiene_under_pressure_slip', 'shift_drift'] as SignalTag[]
    },
    skill_map_lite: {
        title: 'Critical Skill Map',
        description: 'Identify bottleneck roles (treatment/filling); train 1 backup.',
        link: '#',
        days: 7,
        pillar: 'People',
        signal_tags: ['training_debt', 'operator_dependence'] as SignalTag[]
    }
};
