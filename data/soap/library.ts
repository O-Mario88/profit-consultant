
import { LibraryItem, PillarId, SignalTag } from '../../types';

const soapRows = [
  // P1: Product Safety, Quality & Compliance Trust
  {
    pillar: 'Risk' as PillarId,
    leak: 'Quality is mostly "end inspection," finding defects after labor and packaging are wasted.',
    strength: 'You operate with GMP discipline (ISO 22716), real traceability, and accurate labeling (INCI/rules).',
    hook: 'Label Drift Tax',
    kpi: 'Complaint Rate (PPM), Batch Release RFT %, Traceability Retrieval Time',
    signal_tags: ['label_drift_tax', 'batch_fog', 'complaint_burn_rate', 'compliance_scramble_cost', 'change_control_debt', 'hold_stock_cemetery', 'silent_instability_bleed', 'micro_surprise_tax', 'rework_roulette', 'trust_erosion_premium'] as SignalTag[],
    cost: 'One mislabeled batch or micro failure can trigger a recall that wipes out a year of profit.',
    cliffhanger: 'Deep Scan will build a "Release Checklist" to stop shipping risks.'
  },
  // P2: Formulation & Process Control
  {
    pillar: 'Innovation' as PillarId,
    leak: '"Golden batch" is rare; variation in pH, viscosity, and color drives customer complaints.',
    strength: 'You scale formulas with discipline; critical parameters (pH/viscosity/actives) are controlled; water quality is managed.',
    hook: 'Formula Drift',
    kpi: 'Batch Variance, Batch Rejection Rate %, Rework Rate %',
    signal_tags: ['formula_drift', 'operator_recipe_economy', 'salt_curve_chaos', 'stability_surprise_tax', 'substitution_roulette', 'water_quality_blindspot', 'pump_failure_bleed', 'batch_correction_cost', 'claims_credibility_leak'] as SignalTag[],
    cost: 'Reworking batches and fighting viscosity issues is stealing your capacity.',
    cliffhanger: 'Deep Scan will set "Golden Batch Targets" to stabilize your quality.'
  },
  // P3: Sales, Brand, Distribution
  {
    pillar: 'Market' as PillarId,
    leak: 'Demand is guessed; stockouts and overstocks alternate; promos run without profit checks.',
    strength: 'You manage channels (retail/B2B) with discipline; claims are honest; feedback loops drive improvement.',
    hook: 'Promo Profit Illusion',
    kpi: 'Repeat Purchase Rate, OTIF %, Promo ROI',
    signal_tags: ['promo_profit_illusion', 'discount_addiction', 'channel_chaos_cost', 'stockout_penalty', 'returns_bleed', 'reputation_drag', 'claim_backfire_risk', 'slow_paying_volume_trap', 'overpromise_hangover', 'hidden_churn'] as SignalTag[],
    cost: 'You are buying revenue with discounts while losing repeat customers to stockouts.',
    cliffhanger: 'Deep Scan will implement "Promo ROI Checks" to stop profitable-loss sales.'
  },
  // P4: Pricing, Unit Economics & Margin Control
  {
    pillar: 'Leadership' as PillarId,
    leak: 'Price is set by competitors, not cost-to-serve; complexity (custom scents/packs) is given away.',
    strength: 'You know true unit cost (actives/fragrance/pack); you price complexity and control giveaways.',
    hook: 'Margin Evaporation',
    kpi: 'Gross Margin %, Contribution Margin/Hour, Standard Cost Update Lag',
    signal_tags: ['margin_evaporation', 'packaging_shock_tax', 'complexity_penalty', 'short_run_bleed', 'promo_illusion', 'unpriced_customization', 'cost_model_blindness', 'low_margin_volume_trap', 'profit_per_hour_leak'] as SignalTag[],
    cost: 'Hidden costs in packaging and short runs are eating your gross margin.',
    cliffhanger: 'Deep Scan will build a "SKU Profit Heatmap" to reveal where you make money.'
  },
  // P5: Operations Excellence
  {
    pillar: 'Operations' as PillarId,
    leak: 'Too many SKUs create constant changeovers; downtime is accepted; rework is routine.',
    strength: 'OEE matches targets; changeovers are standard; flow is protected (WIP limits); cleaning is validated.',
    hook: 'Changeover Tax',
    kpi: 'OEE %, Changeover Time, Yield %',
    signal_tags: ['changeover_tax', 'downtime_theft', 'sku_chaos_penalty', 'start_up_waste_burn', 'line_clearance_miss', 'wip_swamp', 'speed_to_defect_tradeoff', 'hidden_labor_creep', 'capacity_leak'] as SignalTag[],
    cost: 'Your lines are stopped for cleaning and changeovers more than they are running.',
    cliffhanger: 'Deep Scan will target "Micro-Changeovers" to unlock free capacity.'
  },
  // P6: Supply Chain, Inventory & Cash Control
  {
    pillar: 'Money' as PillarId,
    leak: 'Production stops for missing caps/labels; inventory records are wrong; cash is trapped in slow movers.',
    strength: 'Critical inputs (surfactants/pack) have safety stock; inventory is accurate; expiry is managed.',
    hook: 'Cash Locked in Cartons',
    kpi: 'Inventory Accuracy %, Stockouts, Days on Hand',
    signal_tags: ['cash_locked_in_cartons', 'stockout_stall', 'expiry_write_off_tax', 'inventory_fiction', 'wip_money_pit', 'slow_mover_graveyard', 'emergency_buy_premium', 'supplier_drift_cost', 'overdue_cash_choke', 'packaging_bottleneck_curse'] as SignalTag[],
    cost: 'You are cash-poor because money is sitting in racks of packaging and slow-moving soap.',
    cliffhanger: 'Deep Scan will clear the "Slow Mover Graveyard" and set "Min/Max" logic.'
  },
  // P7: People, EHS, Sustainability
  {
    pillar: 'People' as PillarId,
    leak: 'Safety (chemicals) is informal; performance depends on "heroes"; improvement is just talk.',
    strength: 'Safety is a system (ISO 45001); training is role-based; hygiene is a habit; improvement is disciplined.',
    hook: 'Training Debt',
    kpi: 'Near Miss Reporting, Training Completion %, Kaizen Rate',
    signal_tags: ['training_debt', 'hero_dependency', 'shift_drift', 'near_miss_silence', 'chemical_handling_risk_premium', 'cleanup_before_audit_syndrome', 'injury_downtime_tax', 'unowned_actions', 'improvement_drought', 'safety_under_pressure_slip'] as SignalTag[],
    cost: 'When your key mixer is sick, your quality and safety fall apart.',
    cliffhanger: 'Deep Scan will build a "Skill Matrix" to de-risk your critical roles.'
  }
];

const expandRows = (rows: typeof soapRows, prefix: string): LibraryItem[] => {
  return rows.flatMap(row => {
    const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
    return [
      {
        id: `${idBase}_LEAK`,
        industry: 'soap',
        line_type: ['Soap / detergents / cosmetics production'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.leak,
        type: 'leak',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_STRENGTH`,
        industry: 'soap',
        line_type: ['Soap / detergents / cosmetics production'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.strength,
        type: 'strength',
        severity_fit: ['Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_HOOK`,
        industry: 'soap',
        line_type: ['Soap / detergents / cosmetics production'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.hook,
        type: 'hook',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_KPI`,
        industry: 'soap',
        line_type: ['Soap / detergents / cosmetics production'],
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

const missionBriefs: LibraryItem[] = soapRows.map(row => ({
  id: `MB_SOAP_${row.pillar.toUpperCase()}`,
  industry: 'soap',
  line_type: ['Soap / detergents / cosmetics production'],
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

export const library: LibraryItem[] = [...expandRows(soapRows, 'LIB_SOAP'), ...missionBriefs];
