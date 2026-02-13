import { actions as fnbActions } from '../fnb/actions';

export const actions = {
    ...fnbActions,
    // P1: Risk (Beverage Specific Override/Additions)
    cip_verification_log: {
        title: 'CIP Verification Log',
        description: 'Track time, temperature, flow, and concentration for every wash.',
        link: '#'
    },
    water_quality_tracker: {
        title: 'Water Quality Daily Tracker',
        description: 'Log for pH, conductivity, and sensory checks.',
        link: '#'
    },
    filler_hygiene_checklist: {
        title: 'Filler Zone Hygiene Checklist',
        description: 'Specific sanitation steps for valves, nozzles, and cappers.',
        link: '#'
    },
    glass_plastic_register: {
        title: 'Glass & Brittle Plastic Register',
        description: 'Critical for bottle lines to prevent physical contamination.',
        link: '#'
    },

    // P5: Operations (Beverage Specific Override/Additions)
    fill_weight_control_chart: {
        title: 'Fill Volume Control Chart',
        description: 'Statistical tracking to minimize overfill giveaway.',
        link: '#'
    },
    micro_stop_tracker: {
        title: 'Micro-Stop & Jam Tracker',
        description: 'Tally sheet for short stops (jams, sensor faults) that kill efficiency.',
        link: '#'
    },
    syrup_yield_calculator: {
        title: 'Syrup Yield Calculator',
        description: 'Compare theoretical usage vs actual to catch dosing leaks.',
        link: '#'
    },
    changeover_wheel_sequence: {
        title: 'Changeover Wheel Sequence',
        description: 'Optimized production sequence (light to dark, allergen to non) to save wash time.',
        link: '#'
    },

    // Fix Plans (Beverage Specific)
    stabilize_profit_plan: {
        title: '7-Day "Liquid Gold" Plan',
        description: 'Immediate actions: Fill-level clamp, Downtime automated log review, and CIP audit.',
        link: '#'
    },
    build_control_plan: {
        title: '30-Day "Flow Master" Plan',
        description: 'System actions: SPC on fillers, Water quality automation, and Maintenance preventive loops.',
        link: '#'
    }
};
