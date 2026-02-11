import { ActionDefinition } from '../../types';

export const ACTIONS: ActionDefinition[] = [
    // --- PACK A: Lamb Survival Lock ---
    {
        id: 'sheep_pack_a',
        title: 'Pack A: Lamb Survival Lock',
        pillar: 'Innovation',
        description: 'Stop the #1 profit leak: lambs dying before wean.',
        objective: 'Increase lambs weaned per ewe.',
        steps: [
            'Create a "Lambing Watchlist" for ewes due in 2 weeks.',
            'Prepare a clean, dry lambing area (sanitized pen or designated clean paddock).',
            'Implement AM/PM lamb check routine (warmth, colostrum intake, hygiene).',
            'Ensure "naval dip" (iodine) for every newborn to prevent infection.'
        ],
        outcome: 'Lambing register + higher survival rate.',
        signal_tags: ['lamb_mortality_risk', 'lamb_survival_gap', 'lamb_safety_gap']
    },

    // --- PACK B: Worm Pressure Breaker ---
    {
        id: 'sheep_pack_b',
        title: 'Pack B: Worm Pressure Breaker',
        pillar: 'Risk',
        description: 'Worms steal months of growth. Break the cycle now.',
        objective: 'Reduce parasite burden and improve growth rates.',
        steps: [
            'Start a "Monitoring Routine" (FAMACHA/eye color checks + diarrhea scan).',
            'Dose strategically based on weight (not guess) and symptoms.',
            'Rotate pasture or resting areas to reduce reinfection risk.',
            'Improve hygiene in night housing (clean bedding breaks the cycle).'
        ],
        outcome: 'Parasite log + lower drug costs + faster growth.',
        signal_tags: ['parasite_load', 'reactive_health', 'drug_resistance_risk']
    },

    // --- PACK C: Footrot & Mobility Recovery ---
    {
        id: 'sheep_pack_c',
        title: 'Pack C: Footrot & Mobility Recovery',
        pillar: 'Risk',
        description: 'Limping sheep don’t eat, don’t breed, and don’t grow.',
        objective: 'Eliminate footrot as a herd-wide issue.',
        steps: [
            'Inspect every sheep: Separate clean vs. infected.',
            'Pare/trim infected hooves and apply treatment (spray/bath).',
            'Force dry bedding control in night shelter (moisture = rot).',
            'Run the "clean" flock through a preventive footbath.'
        ],
        outcome: 'Mobility restored + higher feed intake.',
        signal_tags: ['footrot_risk', 'biosecurity_gap', 'hygiene_gap']
    },

    // --- PACK D: Dry Season Feed Gap Shield ---
    {
        id: 'sheep_pack_d',
        title: 'Pack D: Dry Season Feed Gap Shield',
        pillar: 'Operations',
        description: 'Prevent the "reset" where flock loses all its gained weight.',
        objective: 'Maintain BCS and survival through dry season.',
        steps: [
            'Calculate the "Feed Gap" (how many weeks of drought vs. available stored feed).',
            'Secure roughage reserves (hay/silage/residues) NOW.',
            'Purchase targeted supplements for high-priority groups (pregnant ewes, weaners).',
            'Implement strict rationing (don’t waste feed on the ground).'
        ],
        outcome: 'Dry-season feed calendar + minimized weight loss.',
        signal_tags: ['drought_panic', 'condition_loss_risk', 'climate_risk', 'feed_waste']
    },

    // --- PACK E: Flock Structure + Culling Rules ---
    {
        id: 'sheep_pack_e',
        title: 'Pack E: Flock Structure Optimizer',
        pillar: 'Leadership',
        description: 'Stop feeding unproductive animals. Keep only earners.',
        objective: 'A flock composed of productive ewes and growing stock.',
        steps: [
            'Categorize the flock (Productive Ewes, Replacement Ewe Lambs, Rams, Fatteners).',
            'Create a "Cull List" (barren >2 cycles, chronic sick, old, poor mothers).',
            'Sell the Cull List to fund feed for the best animals.',
            'Select replacements only from the best-performing mothers.'
        ],
        outcome: 'Flock map + cull list + higher margin per head.',
        signal_tags: ['no_flock_plan', 'unproductive_stock', 'culling_drift', 'herd_structure_gap']
    },

    // --- PACK F: Market Grade Ladder + Sell Queue ---
    {
        id: 'sheep_pack_f',
        title: 'Pack F: Market Grade Ladder',
        pillar: 'Market',
        description: 'Stop selling "sheep". Start selling "Grades".',
        objective: 'Capture premiums for better animals.',
        steps: [
            'Define your Grades (e.g., Grade A Ram, Grade B Ewe, Feeder Lamb).',
            'Sort animals into a "Sell Queue" based on readiness.',
            'Check prices for specific grades (don’t ask "how much for a sheep").',
            'Time sales around demand peaks (festivals, school fees) if possible.'
        ],
        outcome: 'Price tracker + sell queue + better negotiation power.',
        signal_tags: ['selling_blind', 'blind_pricing', 'grade_blindness', 'reactive_selling']
    },

    // --- PACK G: Security + Predator Control ---
    {
        id: 'sheep_pack_g',
        title: 'Pack G: Security & Loss Shield',
        pillar: 'Risk',
        description: 'Stop silent theft and predator losses.',
        objective: '100% accountability for every animal.',
        steps: [
            'Tag or mark every sheep (unique ID or flock mark).',
            'Implement a "Night Count" routine (in) and "Morning Count" routine (out).',
            'Reinforce the night enclosure (fix holes, add locks, lighting).',
            'Reconcile movement log weekly (Deaths - Sales + Births = Count).',
        ],
        outcome: 'Reconciliation sheet + secure perimeter.',
        signal_tags: ['theft_risk', 'predator_risk', 'security_gap', 'tracking_gap']
    },

    // --- PACK H: Wool Value Capture (Optional) ---
    {
        id: 'sheep_pack_h',
        title: 'Pack H: Wool Value Capture',
        pillar: 'Operations',
        description: 'Turn wool from waste into a bonus income stream.',
        objective: 'Clean, quality wool that buyers accept.',
        steps: [
            'Schedule shearing before wool gets ruined (timing is key).',
            'Control shearing hygiene (clean floor, avoid contamination).',
            'Sort wool by quality (separate belly/dirty wool from fleece).',
            'Store properly (dry, pest-free) until sale.'
        ],
        outcome: 'Wool quality checklist + sales record.',
        signal_tags: ['quality_drift', 'storage_loss'] // General tags fitting wool issues
    },

    // --- GENERIC 7-DAY & 30-DAY PLANS ---
    {
        id: 'sheep_7_day_stabilize',
        title: '7-Day Fast Wins: Stabilize Profit',
        pillar: 'Leadership',
        description: 'Stop the bleeding. Get control of the flock and cash.',
        objective: 'Immediate rapid control of chaos.',
        steps: [
            'Day 1: Count & Categorize. Build the Flock List.',
            'Day 2: "Do Not Sell" List (Protects Breeders) vs "Sell Candidates" (Culls).',
            'Day 3: Water & Feed Lock (Stop waste, ensure access). Separate lambs.',
            'Day 4: Isolation. Pull sick animals OUT. Start Treatment Log.',
            'Day 5: Lamb Survival. Set AM/PM checks. Clean one lambing corner.',
            'Day 6: Feet & Fences. Treat limping sheep. Fix one major fence hole.',
            'Day 7: Cash & Reinvest. Separate farm cash. Buy one critical supply (dewormer/salt).'
        ],
        outcome: 'Flock counted, sick isolated, cash flow separated.',
        signal_tags: []
    },
    {
        id: 'sheep_30_day_build',
        title: '30-Day System: Build Control',
        pillar: 'Leadership',
        description: 'Install the habits that make profit inevitable.',
        objective: 'A predictable, system-managed sheep business.',
        steps: [
            'Week 1: Measurement. Tag sheep. Start KPI tracking (Mortality, Cost/Ewe).',
            'Week 2: Feed & Grazing. Start rotation plan. Secure dry season reserves.',
            'Week 3: Bio-Security. Worm/Health calendar. Footrot routine. Quarantine rules.',
            'Week 4: Breeding & Cycles. Ram control. Lamb growth targets. Monthly financial review.'
        ],
        outcome: 'Functioning management system with data visibility.',
        signal_tags: []
    }
];
