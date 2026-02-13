
import { LibraryItem, PillarId, SignalTag } from '../../types';

const bricksRows = [
  // P1: Product Quality, Standards & Customer Trust
  {
    pillar: 'Risk' as PillarId,
    leak: 'Quality is mostly "end-of-line" inspection; defects are found after cement and labor are spent.',
    strength: 'You build around a recognized standard (ASTM/EN); consistent strength is a brand promise.',
    hook: 'Strength Lottery',
    kpi: 'Strength Pass Rate, Dimensional Compliance, Breakage Rate',
    signal_tags: ['strength_lottery', 'dimension_drift_tax', 'breakage_burn', 'hidden_microcrack_bleed', 'rework_by_discount', 'yard_damage_premium', 'traceability_fog', 'spec_mismatch_risk', 'complaint_churn', 'quality_at_the_end_trap'] as SignalTag[],
    cost: 'Variable strength and dimensions force you to discount or discard finished product.',
    cliffhanger: 'Deep Scan will build a "Quality-at-Source" plan to catch defects at the mixer.'
  },
  // P2: Mix/Materials & Process Control
  {
    pillar: 'Innovation' as PillarId,
    leak: 'Mix adjustments happen by feel; cement usage creeps up without strength gains.',
    strength: 'You control water/cement ratio tightly; curing is a controlled process; machine settings are standardized.',
    hook: 'Cement Creep',
    kpi: 'Moisture Variance, Cement Consumption vs Std, Strength Variance',
    signal_tags: ['cement_creep', 'water_ratio_roulette', 'moisture_blindness', 'cure_time_theft', 'density_drift', 'setting_time_surprises', 'silent_substitution_risk', 'strength_swing_tax', 'edge_crumble_bleed', 'fuel_energy_spike'] as SignalTag[],
    cost: 'You are giving away free cement to compensate for lack of process control.',
    cliffhanger: 'Deep Scan will install "Moisture Correction Tables" to lock your mix cost.'
  },
  // P3: Sales, Distribution, Delivery
  {
    pillar: 'Market' as PillarId,
    leak: 'Delivery unreliability forces customers to switch; breakage in transport wipes out margin.',
    strength: 'You sell reliability (OTIF); freight is managed like a profit line; site feedback drives improvements.',
    hook: 'Breakage Burn',
    kpi: 'OTIF %, Breakage Rate per Delivery, Repeat Order Rate',
    signal_tags: ['breakage_by_route', 'late_delivery_penalty', 'promise_reality_gap', 'refund_creep', 'freight_profit_leak', 'site_rejection_tax', 'dispute_drag', 'rush_order_chaos', 'unprotected_loading_loss', 'hidden_churn'] as SignalTag[],
    cost: 'Damaged product and late deliveries are turning your customers into your competitors\' customers.',
    cliffhanger: 'Deep Scan will implement "Pre-Load Checks" to stop shipping claims.'
  },
  // P4: Pricing, Unit Economics & Margin Control
  {
    pillar: 'Leadership' as PillarId,
    leak: 'Price is set by competition; cement spikes erase margin; small runs drain labor.',
    strength: 'You know true unit cost (cement + breakage + freight); you charge for complexity and service.',
    hook: 'Margin Evaporation',
    kpi: 'Gross Margin %, Cement kg/unit, Price Realization',
    signal_tags: ['margin_evaporation', 'cement_energy_shock_tax', 'unpriced_complexity', 'small_run_bleed', 'freight_blindspot', 'breakage_eats_profit', 'cost_model_fog', 'volume_trap', 'price_lag_penalty', 'discount_drift'] as SignalTag[],
    cost: 'You are absorbing the cost of fuel, cement, and breakage instead of passing it on.',
    cliffhanger: 'Deep Scan will build a "Unit Cost Model" to find your true break-even.'
  },
  // P5: Operations Excellence
  {
    pillar: 'Operations' as PillarId,
    leak: 'Mold wear drives dimension drift; maintenance is reactive; curing space is a bottleneck.',
    strength: 'Uptime is high (OEE); molds are managed; changeovers are scheduled; curing capacity is protected.',
    hook: 'Downtime Theft',
    kpi: 'OEE %, Yield %, Changeover Time',
    signal_tags: ['downtime_theft', 'mold_wear_drift', 'maintenance_debt', 'curing_bottleneck_choke', 'early_move_strength_loss', 'scrap_spiral', 'spares_panic_premium', 'hidden_rework_bleed', 'throughput_illusion', 'changeover_tax'] as SignalTag[],
    cost: 'Worn molds and unplanned stops are stealing 20% of your plant\'s capacity.',
    cliffhanger: 'Deep Scan will start a "Mold Lifecycle Tracker" to predict quality drops.'
  },
  // P6: Supply Chain, Inventory & Cash Control
  {
    pillar: 'Money' as PillarId,
    leak: 'Inventory records are wrong; stop-start production due to material shortages; slow payers drain cash.',
    strength: 'Supply is secured (cement/aggregates); inventory is accurate; credit limits are enforced.',
    hook: 'Inventory Fiction',
    kpi: 'Inventory Accuracy, Stockouts, DSO',
    signal_tags: ['inventory_fiction', 'stop_start_tax', 'cement_variability_penalty', 'pallet_choke', 'slow_mover_yard', 'cash_hostage_customers', 'overdue_chokehold', 'hidden_stockout_cost', 'rush_freight_burn', 'emergency_buy_premium'] as SignalTag[],
    cost: 'You are financing your customers and holding dead stock in the yard.',
    cliffhanger: 'Deep Scan will clear the "Slow Mover Yard" and set "Credit Limits".'
  },
  // P7: People, EHS, Sustainability
  {
    pillar: 'People' as PillarId,
    leak: 'Safety slips during rush; dust controls are informal; training is "shadowing" only.',
    strength: 'Safety is systematic (silica control); training is role-based; sustainability is a strategy.',
    hook: 'Safety-Under-Pressure Slip',
    kpi: 'Near Miss Rate, Dust Control Compliance, Training Completion %',
    signal_tags: ['safety_under_pressure_slip', 'dust_risk_premium', 'operator_dependence', 'cleanup_before_audit_syndrome', 'waste_blindness', 'injury_downtime_tax', 'training_debt', 'unowned_actions', 'improvement_drought', 'energy_bleed'] as SignalTag[],
    cost: 'Silica risk and operator dependence are ticking time bombs for your business.',
    cliffhanger: 'Deep Scan will build a "Skills Matrix" to immunize you from turnover.'
  }
];

const expandRows = (rows: typeof bricksRows, prefix: string): LibraryItem[] => {
  return rows.flatMap(row => {
    const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
    return [
      {
        id: `${idBase}_LEAK`,
        industry: 'bricks',
        line_type: ['Bricks & blocks / concrete products', 'Clay bricks / ceramics'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.leak,
        type: 'leak',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_STRENGTH`,
        industry: 'bricks',
        line_type: ['Bricks & blocks / concrete products', 'Clay bricks / ceramics'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.strength,
        type: 'strength',
        severity_fit: ['Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_HOOK`,
        industry: 'bricks',
        line_type: ['Bricks & blocks / concrete products', 'Clay bricks / ceramics'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.hook,
        type: 'hook',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_KPI`,
        industry: 'bricks',
        line_type: ['Bricks & blocks / concrete products', 'Clay bricks / ceramics'],
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

const missionBriefs: LibraryItem[] = bricksRows.map(row => ({
  id: `MB_BRICKS_${row.pillar.toUpperCase()}`,
  industry: 'bricks',
  line_type: ['Bricks & blocks / concrete products', 'Clay bricks / ceramics'],
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

export const library: LibraryItem[] = [...expandRows(bricksRows, 'LIB_BRICKS'), ...missionBriefs];
