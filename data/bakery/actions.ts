import { actions as fnbActions } from '../fnb/actions';

export const actions = {
    ...fnbActions,
    // P1: Risk (Bakery Specific Override/Additions)
    allergen_matrix_checklist: {
        ...fnbActions.allergen_matrix_checklist,
        title: 'Allergen Matrix & Changeover Rules' // Modified title
    },
    rework_control_card: {
        title: 'Rework Control Card',
        description: 'Rules for what can be reworked, max age, and traceability logic.',
        link: '#'
    },
    post_bake_hygiene_sop: {
        title: 'Post-Bake Hygiene Zone SOP',
        description: 'Specific rules for the "clean corridor" (cooling/slicing/packing).',
        link: '#'
    },
    foreign_body_kit: {
        title: 'Foreign Body Control Kit',
        description: 'Registers for blades, sieves, and brittle plastic checks.',
        link: '#'
    },

    // P5: Operations (Bakery Specific Override/Additions)
    golden_batch_card: {
        title: 'Golden Batch Card',
        description: 'Target settings for dough temp, mix time, and hydration.',
        link: '#'
    },
    proofing_window_sop: {
        title: 'Proofing Window SOP',
        description: 'Time/temp/humidity bands and actions for out-of-spec dough.',
        link: '#'
    },
    oven_profile_sheet: {
        title: 'Oven Profile Sheet',
        description: 'Zone temps, belt speeds, and color references.',
        link: '#'
    },
    giveaway_tracker: {
        title: 'Giveaway (Overweight) Tracker',
        description: 'Daily log to convert grams of overfill into lost cash.',
        link: '#'
    },
    crumb_breakage_control: {
        title: 'Crumb & Breakage Control',
        description: 'Checklist to minimize physical waste at slicers/packers.',
        link: '#'
    },

    // Fix Plans (Bakery Specific)
    stabilize_profit_plan: {
        title: '7-Day "Bakery Profit Lock" Plan',
        description: 'Immediate actions: Giveaway clamp-down, Label Lock, Downtime Pareto, and Post-Bake Reset.',
        link: '#'
    },
    build_control_plan: {
        title: '30-Day "Bakery System" Plan',
        description: 'Standardize constraint line, Oven/Proofing control, PM for key assets, and Traceability drills.',
        link: '#'
    }
};
