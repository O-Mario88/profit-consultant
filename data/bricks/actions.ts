
import { SignalTag } from '../../types';

export const actions = {
  // P1: Risk
  tag_batch: {
    title: 'Batch ID Tagging',
    description: 'Implement batch tags (date, shift, mix) + pallet IDs to trace defects.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['traceability_fog', 'complaint_churn'] as SignalTag[]
  },
  yard_audit: {
    title: 'Yard Breakage Check',
    description: 'Run a daily breakage audit; fix the top cause (handling, stacking) in 72 hours.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['yard_damage_premium', 'breakage_burn'] as SignalTag[]
  },

  // P2: Innovation
  moisture_check: {
    title: 'Sand Moisture Routine',
    description: 'Daily sand moisture check + correction table to stabilize water/cement ratio.',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['water_ratio_roulette', 'moisture_blindness'] as SignalTag[]
  },
  golden_setup: {
    title: 'Golden Machine Setup',
    description: 'Post specific machine settings (vibration/pressure) and reset every shift.',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['density_drift', 'strength_swing_tax'] as SignalTag[]
  },

  // P3: Market
  delivery_photos: {
    title: 'Pre-Load Photo Proof',
    description: 'Take pre-load photos to reduce disputes and stop shipping damage.',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['dispute_drag', 'site_rejection_tax'] as SignalTag[]
  },
  standard_lead_time: {
    title: 'Standard Lead Times',
    description: 'Publish standard lead times per SKU family and stop "urgent exceptions".',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['rush_order_chaos', 'promise_reality_gap'] as SignalTag[]
  },

  // P4: Leadership
  cost_to_serve: {
    title: 'Cost-to-Serve Sheet',
    description: 'Calculate price minus freight/breakage for top 20 customers.',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['freight_profit_leak', 'unpriced_complexity'] as SignalTag[]
  },
  margin_floor: {
    title: 'Margin Floor Lockdown',
    description: 'Freeze discounts on orders below a minimum gross margin percentage.',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['margin_evaporation', 'discount_drift'] as SignalTag[]
  },

  // P5: Operations
  downtime_log: {
    title: 'Simple Downtime Log',
    description: 'Log downtime with 6 codes; fix the #1 cause this week.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['downtime_theft', 'throughput_illusion'] as SignalTag[]
  },
  mold_check: {
    title: 'Start-Shift Mold Check',
    description: 'Inspect molds at shift start; remove worn tools before bad runs.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['mold_wear_drift', 'scrap_spiral'] as SignalTag[]
  },

  // P6: Money
  choke_point_count: {
    title: 'Choke Point Count',
    description: 'Cycle count cement, sand, and pallets; correct records immediately.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['inventory_fiction', 'stop_start_tax'] as SignalTag[]
  },
  aging_release: {
    title: 'Dead Stock Release',
    description: 'Identify oldest stock blocks/pavers and sell/move them first.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['slow_mover_yard', 'cash_hostage_customers'] as SignalTag[]
  },

  // P7: People
  sqdc_daily: {
    title: 'Daily SQDC Huddle',
    description: '10-minute standing meeting: Safety, Quality, Delivery, Cost. Close 1 action.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['unowned_actions', 'improvement_drought'] as SignalTag[]
  },
  dust_sweep: {
    title: 'Dust Control Sweep',
    description: 'Check cutting/grinding zones for silica dust controls; fix exposures.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['dust_risk_premium', 'safety_under_pressure_slip'] as SignalTag[]
  }
};
