import { LibraryItem, PillarId, SignalTag } from '../../types';
import { library as fnbLibrary } from '../fnb/library';

const allSizes = ['all' as any];

const beverageRows: Array<{
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
            pillar: 'Risk', // P1: Beverages Specific
            leak: 'Spoilage Tax and CIP Theater are creating hidden biology risks that explode into recall or dumping.',
            strength: 'Hygiene is scientifically controlled: CIP is verified, water is treated as an ingredient, and the filling zone is protected.',
            hook: 'Spoilage Tax',
            kpi: 'CIP verification %, Micro spoilage rate, Filler zone hygiene pass %, Water quality compliance',
            signal_tags: ['spoilage_tax', 'cip_theater', 'biofilm_creep', 'filler_zone_exposure', 'ph_drift_penalty'],
            cost: 'A single yeast/mold bloom or hygiene failure can force you to dump thousands of liters.',
            cliffhanger: 'Deep Scan will lock your "clean zone" and CIP verification to stop spoilage bleed.'
        },
        {
            pillar: 'Operations', // P5: Beverages Specific
            leak: 'Overfill Bleed and Downtime Storms are destroying line efficiency, while Dosing Drift hurts consistency.',
            strength: 'Bottling is a rhythm: fillers run steady, dosing is locked, and changeovers are pit-crew fast.',
            hook: 'Leaker Lottery',
            kpi: 'OEE (Filler), Giveaway %, Reject rate (leakers/labels), Changeover time',
            signal_tags: ['overfill_bleed', 'downtime_drain', 'leaker_lottery', 'changeover_tax', 'packaging_scrap_storm', 'dosing_drift'],
            cost: 'High-speed lines multiply waste: a small leak or overfill costs a fortune at volume.',
            cliffhanger: 'Deep Scan will install fill-weight clamps and downtime attack plans to recover lost volume.'
        }
    ];

const generatedBeverageRows: LibraryItem[] = beverageRows.flatMap((row) => {
    const idBase = `BEVERAGES_${row.pillar.toUpperCase()}`;
    return [
        {
            id: `LIB_${idBase}_LEAK`,
            industry: 'manufacturing',
            line_type: ['Beverages (juice, soda, water)'],
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
            line_type: ['Beverages (juice, soda, water)'],
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
            line_type: ['Beverages (juice, soda, water)'],
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
            line_type: ['Beverages (juice, soda, water)'],
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

const sharedPillars: PillarId[] = ['Innovation', 'Market', 'Leadership', 'Money', 'People'];
const sharedRows = fnbLibrary.filter(item => sharedPillars.includes(item.pillar) && item.type !== 'mission_brief');

export const library: LibraryItem[] = [
    ...generatedBeverageRows,
    ...sharedRows
];
