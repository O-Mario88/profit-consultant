
import { LibraryItem, PillarId, SignalTag } from '../../types';

const waterRows = [
    // P1: Water Safety, Quality & Regulatory Trust
    {
        pillar: 'Risk' as PillarId,
        leak: 'The business relies on end testing alone, discovering issues after production (prevention is weak).',
        strength: 'You run water like a public health product (Codex/WHO principles); traceability is by lot and hour.',
        hook: 'Trust Tax',
        kpi: 'Micro Pass Rate, Complaint Rate, Traceability Time',
        signal_tags: ['trust_tax', 'invisible_contamination_risk', 'lab_only_safety_illusion', 'label_drift_penalty', 'regulatory_scramble_cost', 'ice_as_food_blind_spot', 'traceability_fog', 'complaint_burn_rate'] as SignalTag[],
        cost: 'One contamination scare or recall can destroy your brand overnight.',
        cliffhanger: 'Deep Scan will build a "Bio-Barrier" strategy to stop contamination before it starts.'
    },
    // P2: Treatment Process Control
    {
        pillar: 'Innovation' as PillarId,
        leak: 'Treatment is treated like equipment (set and forget); filters change by date, not performance.',
        strength: 'You design treatment as multiple barriers; you monitor critical limits (flow, pressure, UV dose).',
        hook: 'Biofilm Tax',
        kpi: 'Filter DP Trend, UV/Ozone Dose, Post-Treatment Micro',
        signal_tags: ['barrier_gap', 'filter_drift_bleed', 'post_treatment_backslide', 'biofilm_tax', 'sanitation_debt', 'equipment_installed_no_control', 'hidden_recontamination'] as SignalTag[],
        cost: 'Invisible biofilm and filter breakthrough are risking potential recalls.',
        cliffhanger: 'Deep Scan will set "Critical Limits" for every filter and lamp.'
    },
    // P3: Sales, Distribution, Delivery
    {
        pillar: 'Market' as PillarId,
        leak: 'Stockouts force customers to competitors; dirty packaging/handling damages brand trust.',
        strength: 'You win on availability (OTIF) and clean handling; ice melt loss is managed by route design.',
        hook: 'Route Profit Illusion',
        kpi: 'OTIF %, Returns Rate (Leakers/Dirty), Melt Loss %',
        signal_tags: ['route_profit_illusion', 'melt_bleed', 'dirty_packaging_churn', 'seal_trust_loss', 'price_war_spiral', 'availability_tax', 'stockout_penalty'] as SignalTag[],
        cost: 'Melt loss and dirty bottles are silently eating your route profitability.',
        cliffhanger: 'Deep Scan will upgrade your "Cold Chain" and delivery hygiene.'
    },
    // P4: Pricing, Unit Economics & Margin Control
    {
        pillar: 'Leadership' as PillarId,
        leak: 'Price is set by competitors; packaging and energy spikes wipe out margins.',
        strength: 'You know true cost per unit (water + pack + energy + delivery); you price for service and reliability.',
        hook: 'Unit Economics Fog',
        kpi: 'Gross Margin %, Packaging Variance, Energy Cost/Unit',
        signal_tags: ['unit_economics_fog', 'energy_squeeze', 'melt_eats_margin', 'cash_trap_customers', 'discount_drift', 'packaging_shock_tax'] as SignalTag[],
        cost: 'You are selling volume but losing margin on energy, packaging, and melt.',
        cliffhanger: 'Deep Scan will build a "Route Profitability" model to find the leaks.'
    },
    // P5: Operations Excellence
    {
        pillar: 'Operations' as PillarId,
        leak: 'Frequent micro-stoppages (caps/labels) drain capacity; sanitation is reactive.',
        strength: 'Production is hygienic and continuous; OEE is high; sanitation is a scheduled discipline.',
        hook: 'Capacity Leak',
        kpi: 'OEE %, Downtime Causes, Leak Rate',
        signal_tags: ['micro_stoppage_tax', 'leak_rate_burn', 'biofilm_creep', 'sanitation_debt', 'capacity_leak', 'rework_treadmill'] as SignalTag[],
        cost: 'Micro-stops and leaks are stealing 15% of your daily output.',
        cliffhanger: 'Deep Scan will focus on "Seal Integrity" and "Micro-Stop" elimination.'
    },
    // P6: Supply Chain, Inventory & Cash Control
    {
        pillar: 'Money' as PillarId,
        leak: 'Packaging stockouts stop the line; aged stock risks taste issues; collections are slow.',
        strength: 'Packaging supply is secured (min/max); inventory is fresh (FIFO); credit is disciplined.',
        hook: 'Packaging Choke',
        kpi: 'Packaging Stockouts, Inventory Accuracy, DSO',
        signal_tags: ['packaging_choke', 'heat_damage_risk', 'cash_trap_customers', 'inventory_fiction', 'emergency_buy_premium', 'cash_hostage_customers'] as SignalTag[],
        cost: 'You are cash-poor because money is tied up in slow-paying customers and wrong inventory.',
        cliffhanger: 'Deep Scan will fix "Min/Max" levels to stop packaging shortages.'
    },
    // P7: People, EHS, Sustainability
    {
        pillar: 'People' as PillarId,
        leak: 'Hygiene slips under pressure; training is "shadowing"; improvement is talk only.',
        strength: 'Hygiene is a daily habit; staff understand "water is food"; safety and improvement are routine.',
        hook: 'Hygiene Slip',
        kpi: 'Hygiene Audit Score, Training Completion %, Action Closure',
        signal_tags: ['hygiene_under_pressure_slip', 'training_debt', 'shift_drift', 'improvement_drought'] as SignalTag[],
        cost: 'A hygiene slip by one untrained operator can shut down your business.',
        cliffhanger: 'Deep Scan will build a "Blue Culture" of hygiene ownership.'
    }
];

const expandRows = (rows: typeof waterRows, prefix: string): LibraryItem[] => {
    return rows.flatMap(row => {
        const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
        return [
            {
                id: `${idBase}_LEAK`,
                industry: 'water-ice',
                line_type: ['Bottled water / ice production'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                text: row.leak,
                type: 'leak',
                severity_fit: ['Critical', 'Stable'],
                business_size_fit: ['small', 'medium', 'enterprise']
            },
            {
                id: `${idBase}_STRENGTH`,
                industry: 'water-ice',
                line_type: ['Bottled water / ice production'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                text: row.strength,
                type: 'strength',
                severity_fit: ['Stable'],
                business_size_fit: ['small', 'medium', 'enterprise']
            },
            {
                id: `${idBase}_HOOK`,
                industry: 'water-ice',
                line_type: ['Bottled water / ice production'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                text: row.hook,
                type: 'hook',
                severity_fit: ['Critical', 'Stable'],
                business_size_fit: ['small', 'medium', 'enterprise']
            },
            {
                id: `${idBase}_KPI`,
                industry: 'water-ice',
                line_type: ['Bottled water / ice production'],
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

const missionBriefs: LibraryItem[] = waterRows.map(row => ({
    id: `MB_WATER_${row.pillar.toUpperCase()}`,
    industry: 'water-ice',
    line_type: ['Bottled water / ice production'],
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

export const library: LibraryItem[] = [...expandRows(waterRows, 'LIB_WATER'), ...missionBriefs];
