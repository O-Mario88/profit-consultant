
import { SignalTag } from '../../types';

export const actions = {
  // P1: Risk
  batch_map: {
    title: 'Traceability Map Drill',
    description: 'Run a traceability drill: prove you can isolate affected batches within 30 minutes.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['batch_fog', 'compliance_scramble_cost'] as SignalTag[]
  },
  label_lock: {
    title: 'Label Control Lock',
    description: 'Lock label control: one approved artwork folder, one approval log.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['label_drift_tax', 'change_control_debt'] as SignalTag[]
  },

  // P2: Innovation
  golden_batch_target: {
    title: 'Golden Batch Targets',
    description: 'Define "Golden Batch" targets for top 10 SKUs (pH/viscosity/active/fill).',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['formula_drift', 'operator_recipe_economy'] as SignalTag[]
  },
  mixing_standard: {
    title: 'Mixing Standard',
    description: 'Standardize order of addition + mixing time/temp and post it at the tank.',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['salt_curve_chaos', 'batch_correction_cost'] as SignalTag[]
  },

  // P3: Market
  promo_roi_check: {
    title: 'Promo ROI Check',
    description: 'Stop "blind promos": require a 1-page promo ROI check before discounting.',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['promo_profit_illusion', 'discount_addiction'] as SignalTag[]
  },
  returns_triage: {
    title: 'Returns Reason Triage',
    description: 'Start returns tracking by cause (leak, performance, irritation, fragrance dislike).',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['returns_bleed', 'reputation_drag'] as SignalTag[]
  },

  // P4: Leadership
  margin_freeze: {
    title: 'Low Margin Freeze',
    description: 'Identify bottom 20% SKUs by margin and freeze discounts on them.',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['margin_evaporation', 'low_margin_volume_trap'] as SignalTag[]
  },
  cost_refresh: {
    title: 'Standard Cost Refresh',
    description: 'Update standard costs for top inputs (surfactants, fragrance, bottles, caps).',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['cost_model_blindness', 'packaging_shock_tax'] as SignalTag[]
  },

  // P5: Operations
  oee_pilot: {
    title: 'OEE Pilot',
    description: 'Start daily OEE tracking on the top line (one dashboard, reason codes).',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['downtime_theft', 'capacity_leak'] as SignalTag[]
  },
  changeover_kit: {
    title: 'Changeover Kits',
    description: 'Standardize changeovers (pre-stage all materials + checklist) and measure time.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['changeover_tax', 'start_up_waste_burn'] as SignalTag[]
  },

  // P6: Money
  cycle_count_30: {
    title: 'Top 30 Cycle Count',
    description: 'Cycle-count top 30 items and fix record accuracy immediately.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['inventory_fiction', 'stockout_stall'] as SignalTag[]
  },
  ship_blocker_list: {
    title: 'Packaging Safety Stock',
    description: 'Create a "ship blockers list" (critical packaging parts) and set min/max.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['packaging_bottleneck_curse', 'cash_locked_in_cartons'] as SignalTag[]
  },

  // P7: People
  sqdc_huddle: {
    title: 'Daily SQDC Huddle',
    description: 'Launch daily SQDC huddles that close 1–2 actions/day (no backlog).',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['meeting_without_closure', 'improvement_drought'] as SignalTag[]
  },
  chem_safety_sweep: {
    title: 'Chemical Safety Sweep',
    description: 'Run a chemical safety sweep: SDS present, labels correct, storage segregated.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['chemical_handling_risk_premium', 'near_miss_silence'] as SignalTag[]
  }
};
