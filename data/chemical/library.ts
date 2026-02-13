
import { LibraryItem, PillarId, SignalTag } from '../../types';

const chemicalRows = [
    // P1: Compliance, Product Safety & Customer Trust
    {
        pillar: 'Risk' as PillarId,
        leak: 'Labels and SDS drift over time; compliance is reactive (scramble for audits).',
        strength: 'You treat compliance as a sales asset (GHS/SDS accuracy); traceability is <30 mins.',
        hook: 'Compliance Fog',
        kpi: 'SDS/Label Accuracy %, Traceability Time, Complaint Rate',
        signal_tags: ['label_drift_penalty', 'sds_scramble_cost', 'compliance_fog', 'traceability_blackout', 'audit_panic_premium', 'restricted_substance_landmine', 'refund_as_rca_trap', 'trust_erosion_tax'] as SignalTag[],
        cost: 'One wrong label or lost SDS can get your product banned from a key market.',
        cliffhanger: 'Deep Scan will build a "Compliance Fortress" to protect your market access.'
    },
    // P2: Formulation & Process Control
    {
        pillar: 'Innovation' as PillarId,
        leak: 'Recipe by experience creates variability; QC is end-of-line (too late to fix).',
        strength: 'You run formulas with discipline (master cards, hold points); QC gates strict release.',
        hook: 'Batch Lottery',
        kpi: 'Right-First-Time %, Rework %, Calibration Compliance',
        signal_tags: ['recipe_drift', 'qc_at_the_end_trap', 'silent_substitution_risk', 'stability_surprise', 'spec_creep', 'instrument_lie', 'batch_lottery', 'rework_spiral'] as SignalTag[],
        cost: 'Rework and "adjustments" are destroying your batch profitability.',
        cliffhanger: 'Deep Scan will lock your "Formula Discipline" and kill variability.'
    },
    // P3: Sales, Distribution, Channel Execution
    {
        pillar: 'Market' as PillarId,
        leak: 'Sales promises exceed reality; distributors mishandle product; credit is uncontrolled.',
        strength: 'You segment customers by use case; distributors follow rules; OTIF is high.',
        hook: 'Channel Chaos Tax',
        kpi: 'OTIF %, Returns Rate, Channel Profitability',
        signal_tags: ['channel_chaos_tax', 'promise_reality_gap', 'credit_fueled_growth_trap', 'undercut_spiral', 'distributor_drift', 'churn_by_misuse', 'returns_bleed'] as SignalTag[],
        cost: 'You are funding your distributors\' inefficiency and absorbing their returns.',
        cliffhanger: 'Deep Scan will audit your "Channel Execution" and stop the bleed.'
    },
    // P4: Pricing, Unit Economics & Margin Control
    {
        pillar: 'Leadership' as PillarId,
        leak: 'Competitors set your price; input costs rise silently; loss-making SKUs persist.',
        strength: 'You know true unit cost (RM + pack + waste + compliance); you price for performance.',
        hook: 'Margin Evaporation',
        kpi: 'Gross Margin %, Discount Leakage, Price Realization',
        signal_tags: ['margin_evaporation', 'volume_trap', 'claims_eat_profit', 'cost_model_fog', 'price_lag_penalty', 'unpriced_complexity', 'discount_drift'] as SignalTag[],
        cost: 'You are selling volume but losing margin on complexity and compliance costs.',
        cliffhanger: 'Deep Scan will build a "Unit Economics" model to reveal true profit.'
    },
    // P5: Operations Excellence
    {
        pillar: 'Operations' as PillarId,
        leak: 'Micro-stoppages drain capacity; changeovers are rushed/dirty; yield loss is hidden.',
        strength: 'Uptime is planned; changeovers are standardized; yield is tracked at every step.',
        hook: 'Hidden Yield Loss',
        kpi: 'OEE %, Downtime Causes, Yield %, Changeover Time',
        signal_tags: ['micro_stoppage_tax', 'changeover_bleed', 'maintenance_debt', 'hidden_yield_loss', 'rework_spiral', 'packaging_defect_burn', 'downtime_theft'] as SignalTag[],
        cost: 'Hidden yield loss and changeover delays are stealing 20% of your chemicals.',
        cliffhanger: 'Deep Scan will find the "Invisible Waste" in your mixing and packing.'
    },
    // P6: Supply Chain, Inventory & Cash Control
    {
        pillar: 'Money' as PillarId,
        leak: 'Packaging stockouts stop the line; inventory records are poor; cash is stuck in receivables.',
        strength: 'Critical supply has min/max; inventory is trusted; credit terms match risk.',
        hook: 'Inventory Fiction',
        kpi: 'Stockouts, Inventory Accuracy, DSO, Supplier Defects',
        signal_tags: ['packaging_choke', 'inventory_fiction', 'emergency_buy_premium', 'supplier_drift_penalty', 'cash_hostage_customers', 'stop_start_tax'] as SignalTag[],
        cost: 'You are cash-poor because money is tied up in wrong inventory and slow payers.',
        cliffhanger: 'Deep Scan will set "Min/Max" triggers to stop the stop-start cycle.'
    },
    // P7: People, EHS & Environment
    {
        pillar: 'People' as PillarId,
        leak: 'Safety slips under pressure; spills are common/unreported; training is shadowing.',
        strength: 'Prevention culture (near miss reporting); chemical handling is disciplined; improvement is routine.',
        hook: 'Spill Bleed',
        kpi: 'Near Miss Rate, Spill Incidents, Training Completion',
        signal_tags: ['safety_under_pressure_slip', 'spill_bleed', 'compatibility_landmine', 'incident_downtime_tax', 'waste_blindness', 'training_debt'] as SignalTag[],
        cost: 'One major spill or safety incident can cost more than a year of profit.',
        cliffhanger: 'Deep Scan will build a "Safety First" culture that actually sticks.'
    }
];

const expandRows = (rows: typeof chemicalRows, prefix: string): LibraryItem[] => {
    return rows.flatMap(row => {
        const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
        return [
            {
                id: `${idBase}_LEAK`,
                industry: 'chemical',
                line_type: ['Chemical / Light Industrial Production'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                text: row.leak,
                type: 'leak',
                severity_fit: ['Critical', 'Stable'],
                business_size_fit: ['small', 'medium', 'enterprise']
            },
            {
                id: `${idBase}_STRENGTH`,
                industry: 'chemical',
                line_type: ['Chemical / Light Industrial Production'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                text: row.strength,
                type: 'strength',
                severity_fit: ['Stable'],
                business_size_fit: ['small', 'medium', 'enterprise']
            },
            {
                id: `${idBase}_HOOK`,
                industry: 'chemical',
                line_type: ['Chemical / Light Industrial Production'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                text: row.hook,
                type: 'hook',
                severity_fit: ['Critical', 'Stable'],
                business_size_fit: ['small', 'medium', 'enterprise']
            },
            {
                id: `${idBase}_KPI`,
                industry: 'chemical',
                line_type: ['Chemical / Light Industrial Production'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                text: row.kpi,
                type: 'kpi',
                severity_fit: ['Critical', 'Stable'],
                business_size_fit: ['small', 'medium', 'enterprise']
            }
        ] as LibraryItem[];
    });
};

const missionBriefs: LibraryItem[] = chemicalRows.map(row => ({
    id: `MB_CHEM_${row.pillar.toUpperCase()}`,
    industry: 'chemical',
    line_type: ['Chemical / Light Industrial Production'],
    pillar: row.pillar,
    signal_tags: row.signal_tags,
    type: 'mission_brief',
    text: `{hook}: {leak} This is costing you {cost} {cliffhanger}`,
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['small', 'medium', 'enterprise'],
    hook_text: row.hook,
    cost_text: row.cost,
    cliffhanger_text: row.cliffhanger,
    kpi_text: row.kpi
}));

export const library: LibraryItem[] = [...expandRows(chemicalRows, 'LIB_CHEM'), ...missionBriefs];
