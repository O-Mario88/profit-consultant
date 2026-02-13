import { LibraryItem, PillarId, SignalTag } from '../../types';

const textileRows = [
  {
    pillar: 'Risk' as PillarId,
    leak: 'Quality lives in "hero inspectors," not in stable process control; when inspectors change, results change. Specs change mid-run causing rework.',
    strength: 'You operate a real QMS: standards, records, audits, and corrective actions—quality is designed, not inspected in at the end.',
    hook: 'Quality Drift Tax',
    kpi: 'First Pass Yield (FPY), Defects per Hundred Units (DHU), Rework %, Customer claim rate',
    signal_tags: ['quality_drift_tax', 'hidden_rework_payroll', 'spec_change_chaos', 'audit_theater', 'claim_magnet', 'traceability_fog', 'chemical_compliance_risk', 'supplier_failure_subsidy', 'defect_deja_vu'] as SignalTag[],
    cost: 'Rework and claims are eating your margin... one defect at a time.',
    cliffhanger: 'Deep Scan will build a "quality firewall" that stops defects at the source.'
  },
  {
    pillar: 'Innovation' as PillarId, // P2: Product Development
    leak: 'Tech packs are interpreted differently by teams; production relies on tribal knowledge. PP approvals come late; bulk starts on assumptions.',
    strength: 'Tech packs are "manufacturing-ready". Sample pipeline is controlled. BOM is stable early; trims and fabric are validated before bulk cutting.',
    hook: 'Readiness Debt',
    kpi: 'Sample lead time, Approval cycle time, BOM stability index, Material readiness %',
    signal_tags: ['approval_drag', 'bom_turbulence', 'late_trim_shutdown', 'shade_band_surprise', 'bulk_on_assumption', 'marker_waste_tax', 'readiness_debt'] as SignalTag[],
    cost: 'Starting bulk on assumptions creates a "rework factory" inside your sewing lines.',
    cliffhanger: 'Deep Scan will install a "start-to-sew" gate that stops the chaos.'
  },
  {
    pillar: 'Market' as PillarId, // P3: Demand & Customers
    leak: 'Orders are accepted on optimism; factory is then forced into overtime/rework cycles. Customer updates happen late; trust erodes.',
    strength: 'You win repeat orders because reliability is visible. Forecasting is realistic; commitments match capacity and material realities.',
    hook: 'Promise Inflation',
    kpi: 'OTIF %, Order acceptance hit rate, Customer repeat rate, Chargeback rate',
    signal_tags: ['promise_inflation', 'capacity_fantasy', 'last_minute_buyer_panic', 'chargeback_magnet', 'single_buyer_trap', 'low_margin_volume_addiction', 'communication_debt'] as SignalTag[],
    cost: 'Over-promising wins the order, but late delivery kills the relationship.',
    cliffhanger: 'Deep Scan will align your sales promises with your true capacity.'
  },
  {
    pillar: 'Leadership' as PillarId, // P4: Pricing & Commercial
    leak: 'Costing is optimistic; efficiency assumptions are not real. Change requests are absorbed for free. Payment terms are weak.',
    strength: 'You cost using real drivers (SMV, yield, efficiency). Pricing rules protect margin under change. You manage payment terms to protect cash.',
    hook: 'Phantom Margin',
    kpi: 'Quote vs actual margin variance, SMV accuracy %, Discount rate %, DSO',
    signal_tags: ['phantom_margin', 'smv_fantasy', 'free_change_syndrome', 'discount_creep', 'cost_blind_quoting', 'yield_variance_tax'] as SignalTag[],
    cost: 'You are quoting for profit but manufacturing for a loss.',
    cliffhanger: 'Deep Scan will build a "cost truth" engine to protect your margin.'
  },
  {
    pillar: 'Operations' as PillarId, // P5: Manufacturing Execution
    leak: 'Schedule changes daily; firefighting becomes the operating system. WIP piles up; defects travel forward. Bottlenecks repeat.',
    strength: 'You plan production with a frozen window. Line balancing is disciplined. WIP is controlled. Quality is built-in.',
    hook: 'Firefighting Factory',
    kpi: 'Line efficiency %, OTIF %, WIP days, Downtime minutes, Rework %',
    signal_tags: ['firefighting_factory' as any, 'wip_swamp' as any, 'hidden_rework_payroll', 'downtime_drain' as any, 'changeover_tax' as any] as SignalTag[], // Reusing some tags where appropriate or casting new ones if I prioritized list differently
    cost: 'Firefighting feels like work, but it burns cash and capacity.',
    cliffhanger: 'Deep Scan will freeze your schedule and balance your lines for flow.'
  },
  {
    pillar: 'Money' as PillarId, // P6: Finance & Control
    leak: 'Finance is "accounting," not operating control. WIP and inventory hide cash. Overtime becomes the default capacity strategy.',
    strength: 'You know daily profitability drivers. Inventory and WIP are visible and controlled to protect cash. Variance analysis is real.',
    hook: 'Cash Trapped in WIP',
    kpi: 'Gross margin %, Cost variance, Overtime %, WIP value, Inventory turns',
    signal_tags: ['cash_trapped_in_wip', 'overtime_addiction', 'variance_blindness', 'invisible_scrap_bill', 'margin_evaporation', 'dso_choke'] as SignalTag[],
    cost: 'Profit is evaporating in overtime, rework, and slow turning inventory.',
    cliffhanger: 'Deep Scan will unlock the cash trapped in your factory floor.'
  },
  {
    pillar: 'People' as PillarId, // P7: People & Culture
    leak: 'Productivity depends on overtime and pressure rather than skills and flow. Training is informal. Supervisors manage by urgency.',
    strength: 'Working conditions are treated as a productivity asset. You invest in skill matrices and training. Leadership runs a consistent cadence.',
    hook: 'Overtime Culture',
    kpi: 'Turnover rate, Training completion %, Supervisor line stability, Productivity trend',
    signal_tags: ['overtime_culture', 'skill_bottleneck', 'supervisor_lottery', 'turnover_tax', 'training_debt', 'safety_theater'] as SignalTag[],
    cost: 'High turnover and weak skills are a tax on every garment you make.',
    cliffhanger: 'Deep Scan will build a culture of "standard work" and stability.'
  }
];

const expandRows = (rows: typeof textileRows, prefix: string): LibraryItem[] => {
  return rows.flatMap(row => {
    const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
    return [
      {
        id: `${idBase}_LEAK`,
        industry: 'textile',
        line_type: ['Textile & garment manufacturing'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        severity_fit: ['Critical', 'Watch', 'Emergency'],
        business_size_fit: ['all'] as any,
        text: row.leak,
        type: 'leak',
        hook_text: row.hook,
        cost_text: row.cost,
        cliffhanger_text: row.cliffhanger,
        kpi_text: row.kpi
      },
      {
        id: `${idBase}_STR`,
        industry: 'textile',
        line_type: ['Textile & garment manufacturing'],
        pillar: row.pillar,
        signal_tags: row.signal_tags,
        severity_fit: ['Stable', 'Strong'],
        business_size_fit: ['all'] as any,
        text: row.strength,
        type: 'strength',
        hook_text: row.hook,
        kpi_text: row.kpi
      },
      {
        id: `${idBase}_HOOK`,
        industry: 'textile',
        line_type: ['Textile & garment manufacturing'],
        pillar: row.pillar,
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: row.hook,
        type: 'hook',
        hook_text: row.hook,
        kpi_text: row.kpi
      },
      {
        id: `${idBase}_KPI`,
        industry: 'textile',
        line_type: ['Textile & garment manufacturing'],
        pillar: row.pillar,
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: row.kpi,
        type: 'kpi',
        kpi_text: row.kpi
      }
    ] as LibraryItem[];
  });
};

const textileItems = expandRows(textileRows, 'LIB_TEXTILE');

const missionBriefs: LibraryItem[] = [
  {
    id: 'MB_TEXTILE_RISK',
    industry: 'textile',
    line_type: ['Textile & garment manufacturing'],
    pillar: 'Risk',
    signal_tags: [],
    severity_fit: ['all'] as any,
    business_size_fit: ['all'] as any,
    text: 'Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically pointing to Quality Drift Tax. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode stops the "hero inspector" cycle and installs real process control.',
    type: 'mission_brief'
  },
  {
    id: 'MB_TEXTILE_INNOVATION',
    industry: 'textile',
    line_type: ['Textile & garment manufacturing'],
    pillar: 'Innovation',
    signal_tags: [],
    severity_fit: ['all'] as any,
    business_size_fit: ['all'] as any,
    text: 'Innovation - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Readiness Debt. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode enforces a "start-to-sew" gate to stop bulk-on-assumption chaos.',
    type: 'mission_brief'
  },
  {
    id: 'MB_TEXTILE_MARKET',
    industry: 'textile',
    line_type: ['Textile & garment manufacturing'],
    pillar: 'Market',
    signal_tags: [],
    severity_fit: ['all'] as any,
    business_size_fit: ['all'] as any,
    text: 'Market - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Promise Inflation. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode aligns sales promises with operational reality.',
    type: 'mission_brief'
  },
  {
    id: 'MB_TEXTILE_LEADERSHIP',
    industry: 'textile',
    line_type: ['Textile & garment manufacturing'],
    pillar: 'Leadership',
    signal_tags: [],
    severity_fit: ['all'] as any,
    business_size_fit: ['all'] as any,
    text: 'Leadership - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Phantom Margin. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode ensures your quoting logic matches your factory floor costs.',
    type: 'mission_brief'
  },
  {
    id: 'MB_TEXTILE_OPS',
    industry: 'textile',
    line_type: ['Textile & garment manufacturing'],
    pillar: 'Operations',
    signal_tags: [],
    severity_fit: ['all'] as any,
    business_size_fit: ['all'] as any,
    text: 'Operations - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Firefighting Factory. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode freezes the plan to unlock stability and flow.',
    type: 'mission_brief'
  },
  {
    id: 'MB_TEXTILE_MONEY',
    industry: 'textile',
    line_type: ['Textile & garment manufacturing'],
    pillar: 'Money',
    signal_tags: [],
    severity_fit: ['all'] as any,
    business_size_fit: ['all'] as any,
    text: 'Money - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Cash Trapped in WIP. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode releases cash by controlling inventory and WIP.',
    type: 'mission_brief'
  },
  {
    id: 'MB_TEXTILE_PEOPLE',
    industry: 'textile',
    line_type: ['Textile & garment manufacturing'],
    pillar: 'People',
    signal_tags: [],
    severity_fit: ['all'] as any,
    business_size_fit: ['all'] as any,
    text: 'People - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Overtime Culture. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds a team that wins with skill, not just hours.',
    type: 'mission_brief'
  }
];

export const library: LibraryItem[] = [
  ...textileItems,
  ...missionBriefs
];
