
import { SignalTag } from '../../types';

export const actions = {
  // P1: Risk
  ctq_lock: {
    title: 'CTQ Spec Lock',
    description: 'Lock top 10 SKUs’ CTQs (gauge/weight/seal) and enforce "ship only within spec."',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['spec_drift_tax', 'quality_on_hope_shipping'] as SignalTag[]
  },
  traceability_drill: {
    title: '15-Min Traceability Drill',
    description: 'Implement a 15-minute traceability drill: prove you can identify affected lots fast.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['traceability_fog', 'audit_panic_cost'] as SignalTag[]
  },

  // P2: Innovation
  golden_settings: {
    title: 'Golden Settings Sheet',
    description: 'Create "golden settings" for top 10 SKUs and enforce shift handover.',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['tribal_settings_drift', 'unstable_process_churn'] as SignalTag[]
  },
  startup_scrap_attack: {
    title: 'Startup Scrap Attack',
    description: 'Measure startup scrap daily and attack the top 2 causes.',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['startup_scrap_tax', 'startup_scrap_burn'] as SignalTag[]
  },

  // P3: Market
  rfq_cadence: {
    title: 'RFQ Follow-up Rhythm',
    description: 'Implement a follow-up cadence for RFQs and sampling.',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['silent_lost_rfqs', 'account_churn_bleed'] as SignalTag[]
  },
  capacity_promise: {
    title: 'Capacity-Based Promises',
    description: 'Tie promised lead times to capacity reality (stop expedite addiction).',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['overpromise_penalty', 'expedite_addiction'] as SignalTag[]
  },

  // P4: Leadership
  discount_freeze: {
    title: 'Margin Floor & Discount Freeze',
    description: 'Identify bottom 20% margin SKUs and freeze discounts immediately.',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['discount_drift', 'margin_evaporation'] as SignalTag[]
  },
  resin_clause: {
    title: 'Resin Index Clause',
    description: 'Add resin change clauses for new quotes (or shorten validity).',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['resin_swing_ambush', 'cashflow_choke'] as SignalTag[]
  },

  // P5: Operations
  oee_start: {
    title: 'Daily OEE Tracking',
    description: 'Start daily OEE tracking with reason codes on top 2 lines.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['oee_leak', 'downtime_theft'] as SignalTag[]
  },
  wip_flush: {
    title: 'WIP Flush',
    description: 'Cap WIP and clear the oldest work first to release cash.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['wip_swamp', 'cash_locked_in_resin'] as SignalTag[]
  },
  changeover_standard: {
    title: 'Standard Changeover',
    description: 'Implement a standard changeover checklist and measure time.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['changeover_tax', 'changeover_drag'] as SignalTag[]
  },

  // P6: Money
  stockout_killer: {
    title: 'Stockout Killer (Min/Max)',
    description: 'Cycle count top 30 items and set reorder points to kill stockouts.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['stockout_stall', 'inventory_fiction'] as SignalTag[]
  },
  wip_cash_list: {
    title: 'WIP-to-Cash List',
    description: 'Build WIP aging list and prioritize "oldest-to-cash first."',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['wip_money_pit', 'overdue_cash_choke'] as SignalTag[]
  },
  pellet_loss_sweep: {
    title: 'Pellet Loss Sweep',
    description: 'Start a simple pellet loss prevention routine (sweep, containment).',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['pellet_loss_leak', 'scrap_culture_tax'] as SignalTag[]
  },

  // P7: People
  skill_backup: {
    title: 'Bottleneck Backup Training',
    description: 'Build a skill matrix for bottleneck roles and train one backup.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['hero_dependency', 'shift_to_shift_drift'] as SignalTag[]
  },
  action_huddle: {
    title: 'Action-Closing Huddles',
    description: 'Launch daily huddles that close 1–2 actions/day (no backlog growth).',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['meeting_without_closure', 'improvement_drought'] as SignalTag[]
  }
};
