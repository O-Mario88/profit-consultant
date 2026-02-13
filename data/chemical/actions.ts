
import { SignalTag } from '../../types';

export const actions = {
    // P1: Risk
    batch_trace_drill: {
        title: 'Traceability Drill',
        description: 'Trace a batch to raw material lots and customers in <30 mins.',
        link: '#',
        days: 7,
        pillar: 'Risk',
        signal_tags: ['traceability_blackout', 'audit_panic_premium'] as SignalTag[]
    },
    sds_label_sync: {
        title: 'SDS/Label Sync',
        description: 'Create single source of truth for SDS and labels; check top 20 SKUs.',
        link: '#',
        days: 7,
        pillar: 'Risk',
        signal_tags: ['label_drift_penalty', 'sds_scramble_cost'] as SignalTag[]
    },

    // P2: Innovation
    master_formula_lock: {
        title: 'Master Formula Cards',
        description: 'Lock top SKUs with printed cards (sequence, hold points); no verbal recipes.',
        link: '#',
        days: 7,
        pillar: 'Innovation',
        signal_tags: ['recipe_drift', 'batch_lottery'] as SignalTag[]
    },
    qc_gate_fill: {
        title: 'Pre-Fill QC Gate',
        description: 'Implement mandatory QC check (pH/viscosity) before filling starts.',
        link: '#',
        days: 7,
        pillar: 'Innovation',
        signal_tags: ['qc_at_the_end_trap', 'rework_spiral'] as SignalTag[]
    },

    // P3: Market
    lead_time_publish: {
        title: 'Standard Lead Times',
        description: 'Publish standard lead times and stop "special promise" chaos.',
        link: '#',
        days: 7,
        pillar: 'Market',
        signal_tags: ['promise_reality_gap', 'channel_chaos_tax'] as SignalTag[]
    },
    credit_hold_fast: {
        title: 'Credit Hold Enforcement',
        description: 'Freeze orders for chronic overdue accounts immediately.',
        link: '#',
        days: 7,
        pillar: 'Market',
        signal_tags: ['credit_fueled_growth_trap', 'cash_hostage_customers'] as SignalTag[]
    },

    // P4: Leadership
    cost_to_serve_top20: {
        title: 'Cost-to-Serve Analysis',
        description: 'Analyze top 20 customers for hidden costs (freight, returns, discounts).',
        link: '#',
        days: 7,
        pillar: 'Leadership',
        signal_tags: ['margin_evaporation', 'claims_eat_profit'] as SignalTag[]
    },
    discount_freeze: {
        title: 'Discount Freeze',
        description: 'Stop all discretionary discounts below margin floor.',
        link: '#',
        days: 7,
        pillar: 'Leadership',
        signal_tags: ['discount_drift', 'volume_trap'] as SignalTag[]
    },

    // P5: Operations
    downtime_log_start: {
        title: 'Downtime Log',
        description: 'Start logging downtime reason codes; fix top #1 in 7 days.',
        link: '#',
        days: 7,
        pillar: 'Operations',
        signal_tags: ['micro_stoppage_tax', 'downtime_theft'] as SignalTag[]
    },
    changeover_std: {
        title: 'Standard Changeover',
        description: 'Checklist for cleaning verification and restart checks.',
        link: '#',
        days: 7,
        pillar: 'Operations',
        signal_tags: ['changeover_bleed', 'contamination_roulette'] as SignalTag[]
    },

    // P6: Money
    cycle_count_crit: {
        title: 'Critical Cycle Count',
        description: 'Count top 20 raw materials and packaging; correct errors.',
        link: '#',
        days: 7,
        pillar: 'Money',
        signal_tags: ['inventory_fiction', 'packaging_choke'] as SignalTag[]
    },
    reorder_triggers: {
        title: 'Min/Max Triggers',
        description: 'Set simple reorder points for "line-stopper" items.',
        link: '#',
        days: 7,
        pillar: 'Money',
        signal_tags: ['stop_start_tax', 'emergency_buy_premium'] as SignalTag[]
    },

    // P7: People
    safety_walk_fix: {
        title: 'Hazard Hunt',
        description: 'Walk floor, find top 10 hazards (labeling, spills), fix immediately.',
        link: '#',
        days: 7,
        pillar: 'People',
        signal_tags: ['safety_under_pressure_slip', 'spill_bleed'] as SignalTag[]
    },
    stop_escalate_rule: {
        title: 'Stop & Escalate',
        description: 'Authorize any operator to stop for safety/spill risks.',
        link: '#',
        days: 7,
        pillar: 'People',
        signal_tags: ['incident_downtime_tax', 'waste_blindness'] as SignalTag[]
    }
};
