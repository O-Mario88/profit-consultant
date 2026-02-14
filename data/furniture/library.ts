
import { LibraryItem, PillarId, SignalTag } from '../../types';

export const FURNITURE_LIBRARY: LibraryItem[] = [
  // P1: Risk (Quality/Safety)
  {
    id: 'furn_strength_perfect_finish',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Risk',
    type: 'strength',
    severity_fit: ['Strong'],
    business_size_fit: ['sme', 'enterprise'],
    signal_tags: [],
    text: "Finishing is flawless and consistent; 'Golden Samples' set the standard."
  },
  {
    id: 'furn_leak_finish_rework',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Risk',
    type: 'leak',
    severity_fit: ['Critical'],
    business_size_fit: ['solo', 'small_team', 'sme'],
    signal_tags: ['finish_redo_bleed', 'finish_rework_spiral'],
    text: "Finishing is the bottleneck; rework frequency is high due to dust or prep failures."
  },
  {
    id: 'furn_hook_quality_tax',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Risk',
    type: 'hook',
    severity_fit: ['Watch'],
    business_size_fit: ['solo', 'small_team', 'sme'],
    signal_tags: ['callback_spiral'],
    text: "Quality Drift Tax"
  },
  {
    id: 'furn_kpi_redo_rate',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Risk',
    type: 'kpi',
    severity_fit: ['Strong'],
    business_size_fit: ['sme', 'enterprise'],
    signal_tags: [],
    text: "Rework / Redo Rate % (Components rejected internal or external)."
  },

  // P2: Innovation (Design/Engineering)
  {
    id: 'furn_strength_standard_lib',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Innovation',
    type: 'strength',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "We use a standard library of construction details; we leverage parametric design."
  },
  {
    id: 'furn_leak_custom_chaos',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Innovation',
    type: 'leak',
    severity_fit: ['Critical'],
    business_size_fit: ['small_team', 'sme'],
    signal_tags: ['prototype_pollution', 'spec_drift'],
    text: "Every job is re-engineered from scratch; we prototype on the client's time."
  },
  {
    id: 'furn_hook_drawing_drift',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Innovation',
    type: 'hook',
    severity_fit: ['Watch'],
    business_size_fit: ['small_team'],
    signal_tags: ['drawing_to_floor_drift'],
    text: "Drawing-to-Floor Drift"
  },
  {
    id: 'furn_kpi_eng_time',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Innovation',
    type: 'kpi',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Engineering Hours per $10k Revenue."
  },

  // P3: Market (Sales/CX)
  {
    id: 'furn_strength_scope_lock',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Market',
    type: 'strength',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Scope is locked with visual sign-offs before materials are ordered."
  },
  {
    id: 'furn_leak_scope_creep',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Market',
    type: 'leak',
    severity_fit: ['Critical'],
    business_size_fit: ['small_team', 'sme'],
    signal_tags: ['scope_creep_creep', 'quote_illusion'],
    text: "We allow scope creep without change orders; 'while you are here' kills margin."
  },
  {
    id: 'furn_hook_trust_erosion',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Market',
    type: 'hook',
    severity_fit: ['Watch'],
    business_size_fit: ['small_team'],
    signal_tags: ['trust_erosion_fee'],
    text: "Trust Erosion Fee"
  },
  {
    id: 'furn_kpi_win_rate',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Market',
    type: 'kpi',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Quote Win Rate % (Qualified)."
  },

  // P4: Leadership (Pricing/Strategy)
  {
    id: 'furn_strength_true_cost',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Leadership',
    type: 'strength',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "We know our true fully-burdened hourly rate and price accordingly."
  },
  {
    id: 'furn_leak_volume_trap',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Leadership',
    type: 'leak',
    severity_fit: ['Critical'],
    business_size_fit: ['small_team', 'sme'],
    signal_tags: ['volume_trap', 'busy_but_broke_pricing'],
    text: "We chase volume to keep guys busy, often taking low-margin work that clogs the shop."
  },
  {
    id: 'furn_hook_unpriced_complexity',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Leadership',
    type: 'hook',
    severity_fit: ['Watch'],
    business_size_fit: ['small_team'],
    signal_tags: ['unpriced_complexity'],
    text: "Unpriced Complexity"
  },
  {
    id: 'furn_kpi_gross_margin',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Leadership',
    type: 'kpi',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Realized Gross Margin % per Job."
  },

  // P5: Operations (Flow/Production)
  {
    id: 'furn_strength_kitted_flow',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Operations',
    type: 'strength',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Jobs don't start until hardware and materials are kitted; flow is continuous."
  },
  {
    id: 'furn_leak_bottleneck_choke',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Operations',
    type: 'leak',
    severity_fit: ['Critical'],
    business_size_fit: ['small_team', 'sme'],
    signal_tags: ['bottleneck_choke', 'search_and_carry_tax'],
    text: "Work stops constantly to look for parts, tools, or clarification; 'Stop-Start' kills momentum."
  },
  {
    id: 'furn_hook_dust_debt',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Operations',
    type: 'hook',
    severity_fit: ['Watch'],
    business_size_fit: ['small_team'],
    signal_tags: ['dust_debt'],
    text: "Dust Debt"
  },
  {
    id: 'furn_kpi_otif',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Operations',
    type: 'kpi',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "OTIF % (On Time In Full)."
  },

  // P6: Money (Supply Chain/Inventory)
  {
    id: 'furn_strength_lean_stock',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Money',
    type: 'strength',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Inventory is lean; offcuts are managed aggressively; consumables are on Kanban."
  },
  {
    id: 'furn_leak_offcut_graveyard',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Money',
    type: 'leak',
    severity_fit: ['Critical'],
    business_size_fit: ['small_team', 'sme'],
    signal_tags: ['offcut_graveyard', 'hardware_choke'],
    text: "We store too much 'firewood' (offcuts) and run out of critical hardware (screws/hinges)."
  },
  {
    id: 'furn_hook_hardware_choke',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Money',
    type: 'hook',
    severity_fit: ['Watch'],
    business_size_fit: ['small_team'],
    signal_tags: ['hardware_choke'],
    text: "Hardware Choke"
  },
  {
    id: 'furn_kpi_material_yield',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Money',
    type: 'kpi',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Material Yield % (Purchase vs Billable)."
  },

  // P7: People (Safety/Skills)
  {
    id: 'furn_strength_cross_trained',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'People',
    type: 'strength',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Team is cross-trained; safety is a culture, not a checklist."
  },
  {
    id: 'furn_leak_hero_dependency',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'People',
    type: 'leak',
    severity_fit: ['Critical'],
    business_size_fit: ['small_team', 'sme'],
    signal_tags: ['hero_dependency_risk', 'injury_downtime_tax'],
    text: "Shop stops if the lead carpenter is sick; injuries are seen as 'part of the job'."
  },
  {
    id: 'furn_hook_injury_tax',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'People',
    type: 'hook',
    severity_fit: ['Watch'],
    business_size_fit: ['small_team'],
    signal_tags: ['injury_downtime_tax'],
    text: "Injury Downtime Tax"
  },
  {
    id: 'furn_kpi_safety_incidents',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'People',
    type: 'kpi',
    severity_fit: ['Strong'],
    business_size_fit: ['sme'],
    signal_tags: [],
    text: "Days Since Last Incident."
  }
];

export const FURNITURE_MISSION_BRIEFS: LibraryItem[] = [
  {
    id: 'mb_furn_dust_debt',
    industry: 'furniture',
    line_type: ['Furniture & Carpentry'],
    pillar: 'Operations',
    signal_tags: ['dust_debt', 'finish_redo_bleed'],
    type: 'mission_brief',
    severity_fit: ['Critical'],
    business_size_fit: ['small_team', 'sme'],
    text: "Dust isn't just dirty; it's expensive. It kills finishes, fires equipment, and slows down every movement.",
    hook_text: "The Invisible Tax of a Dirty Shop",
    cost_text: "$5,000 - $15,000 / year in rework & efficiency loss",
    cliffhanger_text: "Clean shops ship faster. Here is how to kill the dust debt in 7 days...",
    kpi_text: "Cleaning time vs. Rework time",
    fix_task_ids: ['furn_dust_down', 'furn_golden_samples']
  }
];
