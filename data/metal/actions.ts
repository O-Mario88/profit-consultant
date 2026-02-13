
import { SignalTag } from '../../types';

export const actions = {
  // P1: Risk
  fit_up_checklist: {
    title: 'Fit-up & Weld Checklist',
    description: 'Enforce a single FPFT checklist at fit-up + final stage—no "ship and hope."',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['weld_roulette', 'inspection_surprise_tax'] as SignalTag[]
  },
  weld_kill_list: {
    title: 'Weld Defect Kill List',
    description: 'Choose top 3 recurring weld issues; tie them to one procedure + one inspection point.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['rework_factory'] as SignalTag[]
  },
  hot_work_permit: {
    title: 'Hot Work Permit System',
    description: 'Implement permits/fire watch for high-risk areas; remove combustibles.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['hot_work_risk_debt', 'fire_risk_drift'] as SignalTag[]
  },

  // P2: Innovation
  readiness_gate: {
    title: 'Job Readiness Gate',
    description: 'No cutting/welding without complete pack (drawings, BOM, WPS).',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['job_readiness_debt', 'print_ambiguity_tax'] as SignalTag[]
  },
  drawing_checklist: {
    title: 'Drawing Review Checklist',
    description: 'Standardize a drawing checklist (tolerances, weld symbols, finish, inspection notes).',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['spec_drift'] as SignalTag[]
  },
  time_library_starter: {
    title: 'Operation Time Library',
    description: 'Start a simple time library for the top 10 operations (cut/weld/grind).',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['quote_optimism_trap'] as SignalTag[]
  },

  // P3: Market
  follow_up_cadence: {
    title: 'Lead Follow-up Cadence',
    description: 'Implement a follow-up cadence (stop losing "warm" leads).',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['lead_leak', 'communication_silence_cost'] as SignalTag[]
  },
  quote_scope_shield: {
    title: 'Quote Scope Shield',
    description: 'Standardize quotes with scope boundaries and acceptance criteria.',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['scope_creep_tax', 'quote_fog'] as SignalTag[]
  },
  referral_system: {
    title: 'Post-Delivery Referral',
    description: 'Launch post-delivery referral/testimonial capture.',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['no_proof_selling'] as SignalTag[]
  },

  // P4: Leadership
  margin_floor: {
    title: 'Margin Floor Rule',
    description: 'Set a margin floor and enforce it on new quotes.',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['busy_but_broke_pricing', 'discount_drift'] as SignalTag[]
  },
  change_order_fee: {
    title: 'Change Order Fee Trigger',
    description: 'Introduce standard change-order fees for the top 5 common changes.',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['free_change_syndrome'] as SignalTag[]
  },
  deposit_rule: {
    title: 'Procurement Deposit Rule',
    description: 'Tie deposits to procurement (no deposit, no buying).',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['deposit_weakness_penalty'] as SignalTag[]
  },

  // P5: Operations
  daily_huddle: {
    title: 'Daily Plan Huddle',
    description: 'Run daily 10-minute plan vs actual huddles with reason codes.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['rush_job_chaos', 'bottleneck_choke'] as SignalTag[]
  },
  wip_cap: {
    title: 'WIP Limit Cap',
    description: 'Cap WIP—stop starting new jobs until bottleneck clears.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['wip_swamp', 'search_and_move_tax'] as SignalTag[]
  },
  quick_pm: {
    title: 'Quick PM Checks',
    description: 'Implement quick PM checks for top failure machines/tools.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['downtime_theft'] as SignalTag[]
  },

  // P6: Money
  cycle_count: {
    title: 'Stock Cycle Count',
    description: 'Cycle-count top 30 fast movers and set min/max.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['stockout_stall', 'shrinkage_shadow_loss'] as SignalTag[]
  },
  job_closeout: {
    title: 'Job Costing Closeout',
    description: 'Close out last 5 jobs with actual cost and margin.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['profit_blind_spot', 'ghost_margin'] as SignalTag[]
  },
  wip_aging: {
    title: 'WIP Aging List',
    description: 'Build WIP aging list; prioritize oldest to cash first.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['wip_money_pit', 'cash_locked_in_steel'] as SignalTag[]
  },

  // P7: People
  skill_matrix: {
    title: 'Bottleneck Skill Matrix',
    description: 'Build a skill matrix for the bottleneck station; train a backup.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['skill_bottleneck', 'supervisor_lottery'] as SignalTag[]
  },
  s5_sprint: {
    title: '5S Sprint',
    description: 'Run a 5S sprint on the highest-traffic area.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['clutter_drag', 'near_miss_silence'] as SignalTag[]
  },
  near_miss: {
    title: 'Near Miss Reporting',
    description: 'Start near miss reporting with 48-hour closure targets.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['near_miss_silence', 'fire_risk_drift'] as SignalTag[]
  }
};
