
import { LibraryItem, PillarId, SignalTag } from '../../types';

const furnitureRows = [
  // P1: Quality, Compliance & Safety Trust
  {
    pillar: 'Risk' as PillarId,
    leak: 'Quality depends on a few "master craftsmen," so consistency drops when they’re absent.',
    strength: 'You build quality into the process: measurable standards for dimensions, squareness, gaps, finish consistency, and hardware alignment.',
    hook: 'Warranty Factory',
    kpi: 'First-Pass Fit %, Callback Rate %, Rework Hours',
    signal_tags: ['warranty_factory', 'finish_rework_spiral', 'wood_movement_surprise_tax', 'fitment_roulette', 'dust_debt_hazard', 'callback_bleed', 'spec_drift', 'hardware_misalignment_churn', 'compliance_fog', 'last_day_panic_sanding'] as SignalTag[],
    cost: 'Free repairs and site callbacks dependably eat your margin.',
    cliffhanger: 'Deep Scan will build a "first-pass fit" gate that stops defects leaving the shop.'
  },
  // P2: Design, Estimation & Job Readiness
  {
    pillar: 'Innovation' as PillarId, // Mapping Design/Engineering to Innovation
    leak: 'Estimates are optimistic; cutlists/BOMs miss hardware, edging, or finishing costs.',
    strength: 'Drawings/specs are clear: dimensions, tolerances, joinery type, hardware, finish system, edge treatment.',
    hook: 'Drawing Drift',
    kpi: 'Quote Accuracy %, Material Readiness %, Yield %',
    signal_tags: ['drawing_drift', 'site_surprise_rebuild', 'bom_blind_spot', 'nesting_waste_tax', 'revision_chaos', 'job_readiness_debt', 'hardware_shortfall_stalls', 'quote_optimism_trap', 'spec_ambiguity_premium', 'offcut_graveyard'] as SignalTag[],
    cost: 'You pay for "site surprises" and missing materials with rush shipping and overtime.',
    cliffhanger: 'Deep Scan will install a "Ready-to-Start" gate that prevents half-baked jobs from hitting the floor.'
  },
  // P3: Sales, Pipeline & Customer Experience
  {
    pillar: 'Market' as PillarId,
    leak: 'Quotes are unclear; customers compare you to cheaper "apples to oranges."',
    strength: 'You respond fast with clear quotes and options (good/better/best).',
    hook: 'Quote Fog',
    kpi: 'Quote-to-Win %, Lead Response Time, Average Order Value',
    signal_tags: ['lead_leak', 'quote_fog', 'scope_creep_politely_killing_margin', 'follow_up_gap', 'discount_drift', 'expectation_mismatch_tax', 'callback_reputation_bleed', 'free_design_work_sink', 'bargain_buyer_trap', 'handover_confusion'] as SignalTag[],
    cost: 'You win "bargain buyers" who drain your time, while premium jobs slip away.',
    cliffhanger: 'Deep Scan will build a "Scope Shield" into your quotes.'
  },
  // P4: Pricing, Costing & Commercial Terms
  {
    pillar: 'Leadership' as PillarId, // Mapping Pricing/Strategy to Leadership
    leak: '"Competitive pricing" becomes underpricing; your best jobs feel busy but broke.',
    strength: 'Pricing is based on real drivers: material, labor hours by operation, finishing, hardware, install.',
    hook: 'Busy-But-Broke Pricing',
    kpi: 'Gross Margin %, Change Order Recovery %, Deposit Collection Rate',
    signal_tags: ['busy_but_broke_pricing', 'free_change_syndrome', 'warranty_trap', 'margin_evaporation_at_sanding', 'deposit_weakness_penalty', 'scope_creep_tax', 'discount_creep', 'hours_variance_blind_spot', 'material_cash_lock', 'quote_optimism'] as SignalTag[],
    cost: 'You are financing your customers projects with your own cash flow.',
    cliffhanger: 'Deep Scan will install a "Margin Floor" and Change Order triggers.'
  },
  // P5: Production Execution & Delivery
  {
    pillar: 'Operations' as PillarId,
    leak: 'WIP piles up; deadlines are met with overtime and quality drops.',
    strength: 'Workflows are visible: job routing, WIP limits, daily plan vs actual.',
    hook: 'WIP Swamp',
    kpi: 'OTIF %, Scrap %, Tool Downtime',
    signal_tags: ['wip_swamp', 'scrap_cascade', 'tool_downtime_theft', 'finish_bottleneck_choke', 'damage_in_transit_tax', 'jigless_variation', 'rework_second_factory', 'rush_overtime_burn', 'dirty_shop_drag', 'late_stage_surprises'] as SignalTag[],
    cost: 'Scrap, rework, and overtime are the "invisible factory" stealing your profit.',
    cliffhanger: 'Deep Scan will set WIP limits and tool maintenance routines to smooth flow.'
  },
  // P6: Finance, Inventory & Control
  {
    pillar: 'Money' as PillarId,
    leak: 'Money is trapped in inventory and WIP; cash feels tight even when sales are high.',
    strength: 'Inventory is visible: sheets, boards, hardware, finishes, adhesives—stock accuracy is high.',
    hook: 'Cash Locked in Wood',
    kpi: 'Cash Runway, Inventory Accuracy, Stockout Incidents',
    signal_tags: ['cash_locked_in_wood', 'hardware_stockout_stalls', 'invisible_shrink', 'wip_money_pit', 'profit_blind_quoting', 'slow_moving_inventory_graveyard', 'overdue_cash_choke', 'scrap_money_leak', 'emergency_buying_premium', 'ghost_margin'] as SignalTag[],
    cost: 'Your cash is sitting on the shelf or hidden in sawdust.',
    cliffhanger: 'Deep Scan will build a "Cash Control Dashboard" for materials and WIP.'
  },
  // P7: People, Culture & Continuous Improvement
  {
    pillar: 'People' as PillarId,
    leak: 'Output depends on a few experts; skill bottlenecks block growth.',
    strength: 'Skill matrices exist (cutting, edging, assemby, finishing, install) with cross-training plans.',
    hook: 'Skill Bottleneck',
    kpi: 'Training Completion %, Rework per Worker, 5S Score',
    signal_tags: ['skill_bottleneck', 'search_and_move_tax', 'sop_drift', 'training_debt', 'supervisor_lottery', 'hidden_time_loss', 'near_miss_silence', 'quality_variation_tax', 'improvement_drought', 'clutter_drag'] as SignalTag[],
    cost: 'When your best person is away, your quality and speed drop by 50%.',
    cliffhanger: 'Deep Scan will build a "Skill Matrix" to de-risk your talent pool.'
  }
];

const expandRows = (rows: typeof furnitureRows, prefix: string): LibraryItem[] => {
  return rows.flatMap(row => {
    const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
    return [
      {
        id: `${idBase}_LEAK`,
        industry: 'furniture',
        line_type: ['Furniture & carpentry'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.leak,
        type: 'leak',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_STRENGTH`,
        industry: 'furniture',
        line_type: ['Furniture & carpentry'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.strength,
        type: 'strength',
        severity_fit: ['Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_HOOK`,
        industry: 'furniture',
        line_type: ['Furniture & carpentry'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.hook,
        type: 'hook',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_KPI`,
        industry: 'furniture',
        line_type: ['Furniture & carpentry'],
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

const missionBriefs: LibraryItem[] = furnitureRows.map(row => ({
  id: `MB_FURNITURE_${row.pillar.toUpperCase()}`,
  industry: 'furniture',
  line_type: ['Furniture & carpentry'],
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

export const library: LibraryItem[] = [...expandRows(furnitureRows, 'LIB_FURNITURE'), ...missionBriefs];
