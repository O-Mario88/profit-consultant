
import { LibraryItem, PillarId, SignalTag } from '../../types';

const plasticsRows = [
  // P1: Product Safety, Quality & Compliance Trust
  {
    pillar: 'Risk' as PillarId,
    leak: 'Quality is mostly inspection-based; defects are found late, causing expensive rework and sorting.',
    strength: 'You define "good" using measurable specs (CTQs), run proper traceability, and meet certification standards (BRCGS/ISO 15378).',
    hook: 'Spec Drift Tax',
    kpi: 'Customer Complaint Rate (PPM), Hold Inventory Value, Traceability Retrieval Time',
    signal_tags: ['spec_drift_tax', 'hold_stock_cemetery', 'complaint_burn_rate', 'rework_treadmill', 'contamination_roulette', 'change_control_debt', 'audit_panic_cost', 'traceability_fog', 'silent_returns_bleed', 'quality_on_hope_shipping'] as SignalTag[],
    cost: 'Held stock and sorting labor are eating your margin and blocking cash.',
    cliffhanger: 'Deep Scan will build a "CTQ Spec Gate" to stop "shipping on hope".'
  },
  // P2: Product/Process Engineering & Job Readiness
  {
    pillar: 'Innovation' as PillarId,
    leak: 'Engineering is reactive; the line "finds the process" through scrap and tribal knowledge.',
    strength: 'Design for manufacturability is real; settings are standardized ("golden settings"), and changeovers are engineered.',
    hook: 'Tribal Settings Drift',
    kpi: 'Startup Scrap %, Setup Time, Process Capability (Cpk)',
    signal_tags: ['startup_scrap_tax', 'tribal_settings_drift', 'wrong_artwork_disaster', 'unstable_process_churn', 'tooling_neglect_penalty', 'engineering_fire_brigade', 'changeover_drag', 'repeatability_gap', 'job_pack_holes', 'process_guessing_cost'] as SignalTag[],
    cost: 'Your "best operator" is the only one who can run the job, creating a bottleneck and variation.',
    cliffhanger: 'Deep Scan will capture "Golden Settings" to make every shift your best shift.'
  },
  // P3: Sales, Accounts & Customer Experience
  {
    pillar: 'Market' as PillarId,
    leak: 'You sell complexity but don’t price it; lead times are over-promised, leading to expeditng costs.',
    strength: 'Account management is a system: accurate forecasts, clear quotes, and disciplined sampling approvals.',
    hook: 'Overpromise Penalty',
    kpi: 'OTIF %, Quote-to-Win %, Sample Approval Cycle Time',
    signal_tags: ['overpromise_penalty', 'sample_rejection_spiral', 'account_churn_bleed', 'pricing_concession_drift', 'expedite_addiction', 'approval_chaos', 'big_customer_dependency', 'credit_note_leakage', 'silent_lost_rfqs', 'service_firefighting_tax'] as SignalTag[],
    cost: 'Expediting freight and rushing samples are destroying your job profitability.',
    cliffhanger: 'Deep Scan will implement "Capacity-Based Promising" to stop the chaos.'
  },
  // P4: Pricing, Costing & Commercial Terms
  {
    pillar: 'Leadership' as PillarId,
    leak: 'Resin price increases hit you late; you price like a commodity but deliver custom complexity.',
    strength: 'Pricing reflects real drivers (resin index, conversion cost, scrap); terms protect cash flow (tooling deposits).',
    hook: 'Resin Swing Ambush',
    kpi: 'Gross Margin %, Price Realization, Tooling Recovery %',
    signal_tags: ['resin_swing_ambush', 'commodity_pricing_trap', 'tooling_subsidy', 'change_request_bleed', 'margin_evaporation', 'terms_fog', 'credit_note_leakage', 'unpriced_complexity', 'cashflow_choke', 'discount_drift'] as SignalTag[],
    cost: 'You are financing your customers’ tooling and inventory while they squeeze your price.',
    cliffhanger: 'Deep Scan will build a "Resin Index Clause" and "Complexity Prismer" for your quotes.'
  },
  // P5: Operations Excellence
  {
    pillar: 'Operations' as PillarId,
    leak: '"Run everything" scheduling creates constant changeovers; downtime is accepted as normal.',
    strength: 'OEE drives decisions; WIP is controlled; changeovers are engineered (SMED); maintenance is preventive.',
    hook: 'Changeover Tax',
    kpi: 'OEE %, Changeover Time, Startup Scrap %',
    signal_tags: ['changeover_tax', 'oee_leak', 'startup_scrap_burn', 'downtime_theft', 'wip_swamp', 'speed_to_scrap_tradeoff', 'line_clearance_miss', 'mix_up_writeoff', 'bottleneck_choke', 'expedite_addiction'] as SignalTag[],
    cost: 'Your machines are running, but your bank account is empty due to startup scrap and slow changeovers.',
    cliffhanger: 'Deep Scan will target your "Top 3 Downtime Causes" to unlock hidden capacity.'
  },
  // P6: Supply Chain, Inventory & Cash Control
  {
    pillar: 'Money' as PillarId,
    leak: 'Cash is trapped in resin, WIP, and obsolete stock; stockouts force emergency buying.',
    strength: 'Inventory accuracy is high (resin/wip/fg); pellet loss is zero (OCS); purchasing aligns with quality.',
    hook: 'Cash Locked in Resin',
    kpi: 'Inventory Turns, Stockout Incidents, Pellet Loss Incidents',
    signal_tags: ['cash_locked_in_resin', 'stockout_stall', 'emergency_buy_premium', 'inventory_fiction', 'obsolete_sku_graveyard', 'wip_money_pit', 'pellet_loss_leak', 'paperwork_to_cash_delay', 'supplier_drift_cost', 'overdue_cash_choke'] as SignalTag[],
    cost: 'Emergency resin buys and dead stock are draining your liquidity.',
    cliffhanger: 'Deep Scan will clear the "Obsolete Graveyard" and set "Min/Max" logic.'
  },
  // P7: People, EHS, Sustainability
  {
    pillar: 'People' as PillarId,
    leak: 'Skills are uneven; safety slips under pressure; sustainability is just PR.',
    strength: 'Training is effective; safety is lived; sustainability (scrap/energy/pellet loss) is operational.',
    hook: 'Shift-to-Shift Drift',
    kpi: 'Training Completion %, Safety Near Misses, Scrap Reduction Trend',
    signal_tags: ['shift_to_shift_drift', 'training_debt', 'near_miss_silence', 'deadline_safety_slip', 'improvement_drought', 'scrap_culture_tax', 'pellet_loss_leak', 'energy_bleed', 'hero_dependency', 'meeting_without_closure'] as SignalTag[],
    cost: 'Turnover and training gaps mean quality depends on who is working today.',
    cliffhanger: 'Deep Scan will build a "Skill Matrix" to immunize your shop from turnover.'
  }
];

const expandRows = (rows: typeof plasticsRows, prefix: string): LibraryItem[] => {
  return rows.flatMap(row => {
    const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
    return [
      {
        id: `${idBase}_LEAK`,
        industry: 'plastics',
        line_type: ['Plastics & packaging'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.leak,
        type: 'leak',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_STRENGTH`,
        industry: 'plastics',
        line_type: ['Plastics & packaging'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.strength,
        type: 'strength',
        severity_fit: ['Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_HOOK`,
        industry: 'plastics',
        line_type: ['Plastics & packaging'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        text: row.hook,
        type: 'hook',
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['small', 'medium', 'enterprise']
      },
      {
        id: `${idBase}_KPI`,
        industry: 'plastics',
        line_type: ['Plastics & packaging'],
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

const missionBriefs: LibraryItem[] = plasticsRows.map(row => ({
  id: `MB_PLASTICS_${row.pillar.toUpperCase()}`,
  industry: 'plastics',
  line_type: ['Plastics & packaging'],
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

export const library: LibraryItem[] = [...expandRows(plasticsRows, 'LIB_PLASTICS'), ...missionBriefs];
