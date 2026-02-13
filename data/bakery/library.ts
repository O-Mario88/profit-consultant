import { LibraryItem, PillarId, SignalTag } from '../../types';
import { library as fnbLibrary } from '../fnb/library';

// Helper to filter F&B rows for shared pillars
const getFnbPillar = (pillarId: PillarId) => {
    return fnbLibrary.filter(item => item.pillar === pillarId && (item.type === 'leak' || item.type === 'strength' || item.type === 'hook' || item.type === 'kpi'));
};

const allSizes = ['all' as any];

const bakeryRows: Array<{
    pillar: PillarId;
    leak: string;
    strength: string;
    hook: string;
    kpi: string;
    signal_tags: SignalTag[];
    cost: string;
    cliffhanger: string;
}> = [
        {
            pillar: 'Risk', // P1: Bakery Specific
            leak: 'Allergen Roulette and Label Drift are creating hidden recalls, while Cooling Zone Contamination goes unnoticed until a complaint.',
            strength: 'Bakery safety is verified: allergens are sequenced/validated, and the "clean corridor" after the oven prevents post-bake risk.',
            hook: 'Allergen Roulette',
            kpi: 'Allergen near-miss rate, Cleaning validation pass %, First-pack label verified %, Complaint rate',
            signal_tags: ['allergen_roulette', 'label_drift', 'rework_risk_loop', 'cooling_zone_contamination_tax', 'audit_panic_tax'],
            cost: 'Cross-contact or a wrong label requires a full withdrawal, destroying brand trust and retail contracts.',
            cliffhanger: 'Deep Scan will lock your "kill step" and post-bake hygiene to stop the biggest bakery risks.'
        },
        {
            pillar: 'Operations', // P5: Bakery Specific
            leak: 'Overfill Bleed (giveaway) and Proofing Drift are stealing margin in grams, while Changeover Tax kills capacity.',
            strength: 'Baking is a science: dough temp, proof time, and oven profile are controlled, and changeovers are staged for speed.',
            hook: 'Overfill Bleed',
            kpi: 'Giveaway % (grams over target), Changeover time, Scrap % (burnt/shape), Staling/Returns %',
            signal_tags: ['overfill_bleed', 'changeover_tax', 'proofing_drift', 'oven_variance_penalty', 'crumb_loss_cash_leak', 'staling_rot'],
            cost: 'You are giving away free dough in every pack and losing valuable hours to chaotic setups.',
            cliffhanger: 'Deep Scan will install weight control clamps and standardized changeovers to recover "hidden capacity."'
        }
    ];

const generatedBakeryRows: LibraryItem[] = bakeryRows.flatMap((row) => {
    const idBase = `BAKERY_${row.pillar.toUpperCase()}`;
    return [
        {
            id: `LIB_${idBase}_LEAK`,
            industry: 'manufacturing',
            line_type: ['Bakery / Flour / Grain-based processing'],
            pillar: row.pillar,
            signal_tags: row.signal_tags,
            severity_fit: ['Critical', 'Watch', 'Emergency'],
            business_size_fit: allSizes,
            text: row.leak,
            type: 'leak',
            hook_text: row.hook,
            cost_text: row.cost,
            cliffhanger_text: row.cliffhanger,
            kpi_text: row.kpi
        },
        {
            id: `LIB_${idBase}_STR`,
            industry: 'manufacturing',
            line_type: ['Bakery / Flour / Grain-based processing'],
            pillar: row.pillar,
            signal_tags: row.signal_tags,
            severity_fit: ['Stable', 'Strong'],
            business_size_fit: allSizes,
            text: row.strength,
            type: 'strength',
            hook_text: row.hook,
            kpi_text: row.kpi
        },
        {
            id: `LIB_${idBase}_HOOK`,
            industry: 'manufacturing',
            line_type: ['Bakery / Flour / Grain-based processing'],
            pillar: row.pillar,
            signal_tags: [],
            severity_fit: ['Critical', 'Watch', 'Stable', 'Strong', 'Emergency'],
            business_size_fit: allSizes,
            text: row.hook,
            type: 'hook',
            hook_text: row.hook,
            kpi_text: row.kpi
        },
        {
            id: `LIB_${idBase}_KPI`,
            industry: 'manufacturing',
            line_type: ['Bakery / Flour / Grain-based processing'],
            pillar: row.pillar,
            signal_tags: [],
            severity_fit: ['Critical', 'Watch', 'Stable', 'Strong', 'Emergency'],
            business_size_fit: allSizes,
            text: row.kpi,
            type: 'kpi',
            kpi_text: row.kpi
        }
    ] as LibraryItem[];
});

// Import shared pillars from F&B but filter for Bakery usage if needed?
// Actually, I can just reuse the F&B ones by adding them to the array. 
// A user in "Bakery" sub-industry will resolve to THIS pack.
// So I need to include the shared pillars (Innovation, Market, Leadership, Money, People) here.
// I can map them from F&B library, but need to be careful about IDs. 
// If I use the same IDs, they might conflict if loaded together? No, pack resolver returns ONE pack.
// So reusing F&B items is fine.

const sharedPillars: PillarId[] = ['Innovation', 'Market', 'Leadership', 'Money', 'People'];
const sharedRows = fnbLibrary.filter(item => sharedPillars.includes(item.pillar) && item.type !== 'mission_brief');

export const library: LibraryItem[] = [
    ...generatedBakeryRows,
    ...sharedRows
];
