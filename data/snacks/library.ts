import { LibraryItem, PillarId, SignalTag } from '../../types';
import { library as fnbLibrary } from '../fnb/library';

// Define the raw content first (not as LibraryItem directly)
const snacksRows = [
    {
        pillar: 'Risk' as PillarId,
        leak: 'The plant "stays dry" by habit, not design—so wet cleaning creep and condensation appear, quietly raising contamination pressure.',
        strength: 'You run a dry-sanitation operating system: you control water, prevent "wet creep," and verify cleaning effectiveness without turning the plant into a damp ecosystem.',
        hook: 'Dry Plant Illusion',
        kpi: 'Allergen near-miss rate, Cleaning verification pass rate, Foreign body reject trending',
        signal_tags: ['dry_plant_illusion', 'wet_creep_tax', 'seasoning_cross_contact', 'biofilm_beachhead', 'foreign_body_surprise', 'supplier_risk_blind_spot'] as SignalTag[],
        cost: 'One recall or major withdrawal can wipe out a year of profit...',
        cliffhanger: 'Deep Scan will build a "recall-ready" defense...'
    },
    {
        pillar: 'Operations' as PillarId,
        leak: 'Over-seasoning becomes the "safe move," quietly deleting margin. Breakage and fines are normalized as "just manufacturing."',
        strength: 'You run a stable line rhythm: seasoning is treated like money, oil is managed as a controlled input, and breakage is attacked at the root.',
        hook: 'Seasoning Permeability',
        kpi: 'OEE by constraint, Yield %, Scrap %, Seasoning usage %, Oil quality trend',
        signal_tags: ['seasoning_bleed', 'breakage_tax', 'fines_giveaway', 'oil_drift_penalty', 'micro_stop_storm', 'packaging_leak', 'moisture_pickup_trap', 'stale_to_shelf_tax'] as SignalTag[],
        cost: 'Yield leakage and giveaway are invisible taxes on every bag...',
        cliffhanger: 'Deep Scan will expose the hidden cost of "normal" waste...'
    }
];

// Helper to expand rows into LibraryItems (matches F&B logic)
const expandRows = (rows: typeof snacksRows, prefix: string): LibraryItem[] => {
    return rows.flatMap(row => {
        const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
        return [
            {
                id: `${idBase}_LEAK`,
                industry: 'manufacturing',
                line_type: ['Snacks & packaged foods'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                severity_fit: ['Critical', 'Watch', 'Emergency'],
                business_size_fit: ['all'] as any,
                text: row.leak,
                type: 'leak',
                hook_text: row.hook,
                cost_text: row.cost,
                cliffhanger_text: row.cliffhanger,
                kpi_text: row.kpi
            },
            {
                id: `${idBase}_STR`,
                industry: 'manufacturing',
                line_type: ['Snacks & packaged foods'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                severity_fit: ['Stable', 'Strong'],
                business_size_fit: ['all'] as any,
                text: row.strength,
                type: 'strength',
                hook_text: row.hook,
                kpi_text: row.kpi
            },
            {
                id: `${idBase}_HOOK`,
                industry: 'manufacturing',
                line_type: ['Snacks & packaged foods'],
                pillar: row.pillar,
                signal_tags: [],
                severity_fit: ['all'] as any,
                business_size_fit: ['all'] as any,
                text: row.hook,
                type: 'hook',
                hook_text: row.hook,
                kpi_text: row.kpi
            },
            {
                id: `${idBase}_KPI`,
                industry: 'manufacturing',
                line_type: ['Snacks & packaged foods'],
                pillar: row.pillar,
                signal_tags: [],
                severity_fit: ['all'] as any,
                business_size_fit: ['all'] as any,
                text: row.kpi,
                type: 'kpi',
                kpi_text: row.kpi
            }
        ] as LibraryItem[];
    });
};

const snacksItems = expandRows(snacksRows, 'LIB_SNACKS');

// Reuse F&B for P2, P3, P4, P6, P7
const sharedPillars = ['Innovation', 'Market', 'Leadership', 'Money', 'People'];
const sharedLibrary = fnbLibrary.filter(item => sharedPillars.includes(item.pillar));

// Mission Briefs (formatted as LibraryItem with type 'mission_brief')
const missionBriefs: LibraryItem[] = [
    {
        id: 'MB_SNACKS_RISK',
        industry: 'manufacturing',
        line_type: ['Snacks & packaged foods'],
        pillar: 'Risk',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically pointing to Dry Plant Illusion. Wet cleaning creep and allergen sequencing gaps create hidden liability. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds a dry-sanitation firewall to protect brand trust.',
        type: 'mission_brief'
    },
    {
        id: 'MB_SNACKS_OPS',
        industry: 'manufacturing',
        line_type: ['Snacks & packaged foods'],
        pillar: 'Operations',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'Operations - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often pointing to Seasoning Permeability (giveaway) and Breakage. Cost: {COST_IMPACT} in lost yield and fines. Cliffhanger: Fix Mode attacks the silent bleed of seasoning and breakage to capture every dollar of yield.',
        type: 'mission_brief'
    }
];

export const library: LibraryItem[] = [
    ...snacksItems,
    ...sharedLibrary,
    ...missionBriefs
];
