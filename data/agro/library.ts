import { LibraryItem } from '../../types';

export const library: LibraryItem[] = [
    // --- ENGINE CONTENT ---
    {
        id: 'LIB_ENG_LEAK_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['downtime_drain'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small_team', 'sme'],
        text: "Your signals indicate that stopped time is bleeding more profit than you realize. In processing, 'Running Slow' is rarely the problem; 'Not Running' is the killer. Reactive fixes are costing you 15-20% of your theoretical capacity.",
        type: 'leak'
    },
    {
        id: 'LIB_ENG_HOOK_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['downtime_drain'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "The 'Downtime Tax'",
        type: 'hook'
    },
    {
        id: 'LIB_ENG_KPI_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['downtime_drain'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "Downtime Minutes per Shift. Measure total stopped time, no matter how small.",
        type: 'kpi'
    },

    // --- FUEL CONTENT ---
    {
        id: 'LIB_FUEL_LEAK_01',
        industry: 'agro_processing',
        line_type: ['packaging'],
        pillar: 'Money',
        signal_tags: ['yield_bleed', 'underweight_giveaway'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "You are suffering from 'Invisible Bleed'. Buying by bulk and selling by unit creates a margin gap if yield isn't locked. Even a 2% overfill giveaway wipes out 20% of your net profit.",
        type: 'leak'
    },
    {
        id: 'LIB_FUEL_HOOK_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['yield_bleed'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "The Margin Mirage",
        type: 'hook'
    },

    // --- SHIELD CONTENT ---
    {
        id: 'LIB_SHIELD_LEAK_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['traceability_gap'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "In Agro-processing, traceability is not just paperwork; it is your insurance policy. Without batch-level tracking, one contamination complaint forces you to recall *everything*, potentially bankrupting the operation.",
        type: 'leak'
    },
    {
        id: 'LIB_SHIELD_HOOK_01',
        industry: 'agro_processing',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['traceability_gap'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "The 'Recall Roulette'",
        type: 'hook'
    }
];
