
import { LibraryItem, PillarId, SignalTag } from '../../types';

const metalRows = [
  // P1: Quality, Compliance & Safety Trust
  {
    pillar: 'Risk' as PillarId,
    leak: 'Rework is normalized—your shop quietly runs two factories: build + rebuild.',
    strength: 'You run a repeatable quality system (QMS mindset) with qualified procedures (ISO 3834) and "in-process" checks.',
    hook: 'Rework Factory',
    kpi: 'First-Pass-Through (FPFT) %, Weld Defect Rate, Rework %',
    signal_tags: ['rework_factory', 'weld_roulette', 'inspection_surprise_tax', 'cut_quality_chaos', 'paperwork_panic', 'field_repair_bleed', 'spec_drift', 'hot_work_risk_debt', 'fume_liability_shadow_cost', 'end_of_line_discovery'] as SignalTag[],
    cost: 'You are paying for the same job twice: once to build, once to fix.',
    cliffhanger: 'Deep Scan will build a "First-Pass Quality" gate to catch defects before they cost money.'
  },
  // P2: Engineering, Estimation & Job Readiness
  {
    pillar: 'Innovation' as PillarId, // Mapping Engineering to Innovation
    leak: 'Drawings are incomplete or ambiguous; shop spends hours "interpreting."',
    strength: 'Drawings/specs are clear: tolerances (ISO 2768), weld symbols, nesting, and readiness gates are standard.',
    hook: 'Print Ambiguity Tax',
    kpi: 'Quote Accuracy %, Engineering Cycle Time, Readiness Gate Pass Rate',
    signal_tags: ['print_ambiguity_tax', 'revision_whiplash', 'nesting_waste', 'job_readiness_debt', 'engineering_bottleneck', 'scope_fog', 'site_surprise_rebuild', 'unpriced_complexity', 'tooling_scramble', 'quote_optimism_trap'] as SignalTag[],
    cost: 'Your welders are spending highly paid hours guessing or waiting for answers.',
    cliffhanger: 'Deep Scan will implement a "Job Readiness Gate" that stops guesswork production.'
  },
  // P3: Sales, Pipeline & Customer Experience
  {
    pillar: 'Market' as PillarId,
    leak: 'Lead leakage: slow response, inconsistent follow-up, no pipeline discipline.',
    strength: 'Leads are tracked, quotes are clear (options/scope), and you sell with proof (QA/certifications).',
    hook: 'Lead Leak',
    kpi: 'Quote-to-Win %, Lead Response Time, Delivery Reliability (OTIF)',
    signal_tags: ['lead_leak', 'quote_fog', 'scope_creep_tax', 'discount_drift', 'late_promise_penalty', 'communication_silence_cost', 'rush_job_chaos', 'complaint_driven_workflow', 'no_proof_selling', 'one_off_customer_trap'] as SignalTag[],
    cost: 'You are losing the best jobs to competitors who simply respond faster.',
    cliffhanger: 'Deep Scan will build a "Follow-Up Engine" to capture every opportunity.'
  },
  // P4: Pricing, Costing & Commercial Terms
  {
    pillar: 'Leadership' as PillarId,
    leak: '"Competitive pricing" becomes underpricing; you’re busy but broke.',
    strength: 'Pricing is grounded in operation costs (cut, fit, weld, paint) + consumables + margin floors.',
    hook: 'Busy-But-Broke Pricing',
    kpi: 'Gross Margin %, Consumable Recovery, Change Order Recovery',
    signal_tags: ['busy_but_broke_pricing', 'consumable_blind_spot', 'rework_tax', 'free_change_syndrome', 'deposit_weakness_penalty', 'margin_evaporation', 'discount_creep', 'terms_fog', 'unpriced_risk', 'warranty_trap'] as SignalTag[],
    cost: 'You cover the cost of gas, wire, and rework out of your own pocket.',
    cliffhanger: 'Deep Scan will install a "Margin Floor" and "Consumable Calculator" for quotes.'
  },
  // P5: Production Execution & Delivery
  {
    pillar: 'Operations' as PillarId,
    leak: 'WIP piles up; deadlines are met with overtime and quality drops.',
    strength: 'Work is scheduled visually, WIP is limited, and machines have OEE thinking (Availability/Performance/Quality).',
    hook: 'WIP Swamp',
    kpi: 'OTIF %, WIP Age, Machine OEE %',
    signal_tags: ['wip_swamp', 'setup_tax', 'downtime_theft', 'scrap_cascade', 'grinding_spiral', 'rush_overtime_burn', 'bottleneck_choke', 'delivery_chaos_penalty', 'rework_second_factory', 'search_and_move_tax'] as SignalTag[],
    cost: 'Overtime and chaos are eating the profit from your busy schedule.',
    cliffhanger: 'Deep Scan will set "WIP Limits" and "Downtime Trackers" to smooth the flow.'
  },
  // P6: Finance, Inventory & Control
  {
    pillar: 'Money' as PillarId,
    leak: 'Cash is trapped in stock and WIP; you feel broke while busy.',
    strength: 'Inventory accuracy is high, reorder points exist, and job profitability is tracked per project.',
    hook: 'Cash Locked in Steel',
    kpi: 'Cash Runway, Inventory Accuracy, Job Margin Variance',
    signal_tags: ['cash_locked_in_steel', 'wip_money_pit', 'emergency_buying_premium', 'stockout_stall', 'shrinkage_shadow_loss', 'paperwork_to_cash_delay', 'ghost_margin', 'scrap_money_leak', 'overdue_cash_choke', 'profit_blind_spot'] as SignalTag[],
    cost: 'Your bank account is empty because your cash is sitting on the rack.',
    cliffhanger: 'Deep Scan will build a "Cash Control Dashboard" for materials and WIP.'
  },
  // P7: People, Culture & Continuous Improvement
  {
    pillar: 'People' as PillarId,
    leak: 'Output depends on a few experts; bottlenecks block growth.',
    strength: 'Skills are mapped and cross-trained; SOPs are used; safety culture (ISO 45001) is real.',
    hook: 'Skill Bottleneck',
    kpi: 'Cross-Skill Coverage, Training Completion, Safety Near Miss Rate',
    signal_tags: ['skill_bottleneck', 'training_debt', 'clutter_drag', 'near_miss_silence', 'supervisor_lottery', 'fire_risk_drift', 'quality_variation_tax', 'improvement_drought', 'culture_by_mood'] as SignalTag[], // 'search_and_move_tax' is already in P5 but fits P7 too (5S)
    cost: 'When your lead welder is out, your production stops.',
    cliffhanger: 'Deep Scan will build a "Skill Matrix" to de-risk your key roles.'
  }
];

const expandRows = (rows: typeof metalRows, prefix: string): LibraryItem[] => {
  return rows.flatMap(row => {
    const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
    return [
      {
        id: `${idBase}_LEAK`,
        industry: 'metal',
        line_type: ['Metal fabrication'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.leak,
        type: 'leak',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_STRENGTH`,
        industry: 'metal',
        line_type: ['Metal fabrication'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.strength,
        type: 'strength',
        severity_fit: ['Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_HOOK`,
        industry: 'metal',
        line_type: ['Metal fabrication'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.hook,
        type: 'hook',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_KPI`,
        industry: 'metal',
        line_type: ['Metal fabrication'],
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

const missionBriefs: LibraryItem[] = metalRows.map(row => ({
  id: `MB_METAL_${row.pillar.toUpperCase()}`,
  industry: 'metal',
  line_type: ['Metal fabrication'],
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

export const library: LibraryItem[] = [...expandRows(metalRows, 'LIB_METAL'), ...missionBriefs];
