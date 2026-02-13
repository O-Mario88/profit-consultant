
import { SignalTag } from '../../types';

export const actions = {
  // P1: Risk
  fit_and_finish_checklist: {
    title: 'Fit & Finish Acceptance Checklist',
    description: 'Create one "acceptance checklist" (fit, finish, hardware, safety edges) and enforce it on every job.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['warranty_factory', 'fitment_roulette', 'callback_bleed'] as SignalTag[]
  },
  moisture_sop: {
    title: 'Moisture SOP & Timer',
    description: 'Standardize moisture/storage SOP and use an acclimatization timer.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['wood_movement_surprise_tax'] as SignalTag[]
  },
  finish_standard: {
    title: 'Finish System Standard',
    description: 'Lock one sanding/spray standard for 7 days (same grit steps, same cleaning rule).',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['finish_rework_spiral', 'last_day_panic_sanding'] as SignalTag[]
  },
  dust_routine: {
    title: 'Dust Control & Housekeeping',
    description: 'Daily 20-minute cleanup + check extractor/bags/hoses; log hazards.',
    link: '#',
    days: 7,
    pillar: 'Risk',
    signal_tags: ['dust_debt_hazard'] as SignalTag[]
  },

  // P2: Innovation
  readiness_gate: {
    title: 'Job Readiness Gate',
    description: 'No job enters cutting without drawings + BOM + materials confirmed.',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['job_readiness_debt', 'drawing_drift'] as SignalTag[]
  },
  site_measure_checklist: {
    title: 'Site Measure Checklist',
    description: 'Standardize the site measurement checklist for built-ins (plumb/level, obstacles, services).',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['site_surprise_rebuild'] as SignalTag[]
  },
  wastage_factor: {
    title: 'BOM Wastage Factor',
    description: 'Use a simple wastage factor in BOMs (sheet/board) and track variance.',
    link: '#',
    days: 7,
    pillar: 'Innovation',
    signal_tags: ['bom_blind_spot', 'nesting_waste_tax'] as SignalTag[]
  },

  // P3: Market
  lead_tracker: {
    title: 'Lead Tracker & Follow-up',
    description: 'Implement a lead tracker + mandatory follow-up cadence (Day 0/1/3/7).',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['lead_leak', 'follow_up_gap'] as SignalTag[]
  },
  quote_template: {
    title: 'Standard Quote Template',
    description: 'Standardize quote template with scope boundaries and timelines.',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['quote_fog', 'scope_creep_politely_killing_margin'] as SignalTag[]
  },
  referral_ask: {
    title: 'Referral System',
    description: 'Launch a simple referral ask after successful delivery.',
    link: '#',
    days: 7,
    pillar: 'Market',
    signal_tags: ['callback_reputation_bleed'] as SignalTag[]
  },

  // P4: Leadership
  margin_floor: {
    title: 'Margin Floor Rule',
    description: 'Set a margin floor and enforce it on new quotes (decline script).',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['busy_but_broke_pricing', 'quote_optimism'] as SignalTag[]
  },
  change_order_fees: {
    title: 'Change Order Trigger',
    description: 'Activate change-order fees for the top 3 common changes.',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['free_change_syndrome', 'scope_creep_tax'] as SignalTag[]
  },
  deposit_rule: {
    title: 'Mandatory Deposits',
    description: 'Standardize deposits before material purchasing.',
    link: '#',
    days: 7,
    pillar: 'Leadership',
    signal_tags: ['deposit_weakness_penalty', 'material_cash_lock'] as SignalTag[]
  },

  // P5: Operations
  daily_huddle: {
    title: 'Daily Plan Huddle',
    description: 'Run a daily 10-minute plan vs actual huddle with reason codes.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['late_stage_surprises', 'rush_overtime_burn'] as SignalTag[]
  },
  wip_limit: {
    title: 'WIP Limit Cap',
    description: 'Cap WIP: stop starting new jobs until bottleneck station clears.',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['wip_swamp', 'rework_second_factory'] as SignalTag[]
  },
  tool_check: {
    title: 'Tool & Blade Maintenance',
    description: 'Implement blade/bit check routine (reduce cutting scrap immediately).',
    link: '#',
    days: 7,
    pillar: 'Operations',
    signal_tags: ['tool_downtime_theft', 'scrap_cascade'] as SignalTag[]
  },

  // P6: Money
  cycle_count: {
    title: 'Stock Cycle Count',
    description: 'Cycle count top 30 items (hinges, screws, glue) and fix reorder points.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['hardware_stockout_stalls', 'slow_moving_inventory_graveyard'] as SignalTag[]
  },
  job_closeout: {
    title: 'Job Costing Closeout',
    description: 'Start job closeouts on the last 5 jobs (actual hours/materials).',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['profit_blind_quoting', 'ghost_margin'] as SignalTag[]
  },
  collections_cadence: {
    title: 'Collections Cadence',
    description: 'Begin collections cadence on overdue invoices.',
    link: '#',
    days: 7,
    pillar: 'Money',
    signal_tags: ['overdue_cash_choke'] as SignalTag[]
  },

  // P7: People
  skill_matrix_backup: {
    title: 'Skill Matrix & Backups',
    description: 'Create one skill matrix for the bottleneck station and train backups.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['skill_bottleneck', 'supervisor_lottery'] as SignalTag[]
  },
  s5_sprint: {
    title: '5S Sprint',
    description: 'Run a 5S sprint on the highest-traffic area (cutting/assembly/finish).',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['clutter_drag', 'search_and_move_tax'] as SignalTag[]
  },
  near_miss_reporting: {
    title: 'Near Miss Reporting',
    description: 'Launch near-miss reporting with 48-hour closure targets.',
    link: '#',
    days: 7,
    pillar: 'People',
    signal_tags: ['near_miss_silence'] as SignalTag[]
  }
};
