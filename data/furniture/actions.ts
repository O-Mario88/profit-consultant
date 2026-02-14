
import { ActionDefinition } from '../../types';

export const FURNITURE_ACTIONS = {
  snippets: [
    {
      action_id: 'furn_golden_samples',
      title: "Create 'Golden Samples'",
      type: 'standardization',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Choose one perfect example of each standard finish. Mount it on the wall. If a piece doesn't match, it doesn't ship.",
      days: 7,
      effort: 'L',
      pillar: 'Risk',
      signal_tags: ['finish_redo_bleed', 'quality_drift_tax']
    },
    {
      action_id: 'furn_callback_log',
      title: "Implement the 'Callback Log'",
      type: 'review',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Track every return trip: Date, Cause, Cost (Time + Materials). Review weekly to kill the top recurring cause.",
      days: 30,
      effort: 'M',
      pillar: 'Risk',
      signal_tags: ['callback_spiral', 'trust_erosion_fee']
    },
    {
      action_id: 'furn_drawer_box_standard',
      title: "Standardize Drawer Box Details",
      type: 'standardization',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Define one standard drawer box construction method. Stop re-engineering the basics for every custom job.",
      days: 7,
      effort: 'M',
      pillar: 'Innovation',
      signal_tags: ['prototype_pollution']
    },
    {
      action_id: 'furn_redline_review',
      title: "Redline Review Process",
      type: 'process',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Before cutting, the lead carpenter reviews drawings with the designer to catch 'unbuildable' details.",
      days: 30,
      effort: 'M',
      pillar: 'Innovation',
      signal_tags: ['drawing_to_floor_drift', 'cutlist_chaos']
    },
    {
      action_id: 'furn_scope_signoff',
      title: "Scope of Work Sign-off",
      type: 'process',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Force a signature on a visual scope document (drawings + specs) before ordering materials.",
      days: 7,
      effort: 'S',
      pillar: 'Market',
      signal_tags: ['scope_creep_creep', 'quote_illusion']
    },
    {
      action_id: 'furn_install_walkthrough',
      title: "Post-Install Walkthrough",
      type: 'process',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Installer walks the client through the finished job, demonstrates features, and gets a signature on the punch-list.",
      days: 30,
      effort: 'M',
      pillar: 'Market',
      signal_tags: ['trust_erosion_fee', 'referral_leak']
    },
    {
      action_id: 'furn_hourly_rate',
      title: "True Hourly Rate Calculation",
      type: 'analysis',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Calculate your shop's actual break-even hourly rate including overhead. Stop guessing.",
      days: 7,
      effort: 'M',
      pillar: 'Leadership',
      signal_tags: ['quote_illusion', 'volume_trap']
    },
    {
      action_id: 'furn_change_order_form',
      title: "Change Order Form Implementation",
      type: 'process',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "No more verbal changes. Every change gets a price and a signature before work starts.",
      days: 30,
      effort: 'S',
      pillar: 'Leadership',
      signal_tags: ['scope_creep_creep', 'unpriced_complexity']
    },
    {
      action_id: 'furn_hardware_kitting',
      title: "Hardware Kitting First",
      type: 'process',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Don't start cutting until all hardware is in a bin labeled with the job name.",
      days: 7,
      effort: 'M',
      pillar: 'Operations',
      signal_tags: ['hardware_choke', 'bottleneck_choke']
    },
    {
      action_id: 'furn_shadow_board',
      title: "Shadow Boarding 101",
      type: 'organization',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Outline every tool at the main bench. If it's missing, you know instantly. Stop the 'search and carry'.",
      days: 30,
      effort: 'L',
      pillar: 'Operations',
      signal_tags: ['search_and_carry_tax']
    },
    {
      action_id: 'furn_dust_down',
      title: "Daily Dust-Down",
      type: 'culture',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Last 15 minutes of every shift is strictly for cleaning. A clean shop is a safe, high-quality shop.",
      days: 7,
      effort: 'S',
      pillar: 'Operations',
      signal_tags: ['dust_debt']
    },
    {
      action_id: 'furn_offcut_rules',
      title: "Offcut Bin Rules",
      type: 'process',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "If it's smaller than X, pitch it. If it's bigger, rack it by size. Stop storing firewood.",
      days: 7,
      effort: 'S',
      pillar: 'Money',
      signal_tags: ['offcut_graveyard']
    },
    {
      action_id: 'furn_kanban',
      title: "Consumable Kan-Ban",
      type: 'system',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Use a simple 2-bin system for screws, glue, and sandpaper. Never run out again.",
      days: 30,
      effort: 'M',
      pillar: 'Money',
      signal_tags: ['hardware_choke', 'emergency_buy_premium']
    },
    {
      action_id: 'furn_safety_huddle',
      title: "Morning Safety Huddle",
      type: 'culture',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Start every day with 2 minutes on hazards and the plan for the day.",
      days: 7,
      effort: 'S',
      pillar: 'People',
      signal_tags: ['injury_downtime_tax', 'safety_drag']
    },
    {
      action_id: 'furn_skill_matrix',
      title: "Skill Matrix Development",
      type: 'analysis',
      industry: 'furniture',
      line_type: ['Furniture & Carpentry'],
      text: "Map out who can do what (Cut, Edge, Assemble, Finish, Install). Identify reliance on 'heroes'.",
      days: 30,
      effort: 'M',
      pillar: 'People',
      signal_tags: ['hero_dependency_risk', 'skill_variance_cost']
    }
  ] as ActionDefinition[],
  fixPlans7Day: [
    {
      id: 'furn_7day_stabilize',
      title: '7-Day "Showroom Quality" Reset',
      description: 'Fast wins to stop the bleeding from rework and dust debt.',
      pillar: 'General',
      steps: [
        { day: 1, action: "Create Golden Samples: Mount one perfect finish sample. No match? No ship." },
        { day: 2, action: "Implement Daily Dust-Down: Last 15 mins is strictly cleaning." },
        { day: 3, action: "Offcut Bin Rules: Trash the firewood. Rack the good stuff. Clear the floor." },
        { day: 4, action: "Hardware Kitting: Stop cutting until the hardware bin is full and labeled." },
        { day: 5, action: "True Hourly Rate: Calculate the real cost of your shop time." },
        { day: 6, action: "Morning Safety Huddle: Start the day with 2 mins on plan & hazards." },
        { day: 7, action: "Standardize Drawer Boxes: Pick one method. Stop reinventing." }
      ]
    }
  ],
  fixPlans30Day: [
    {
      id: 'furn_30day_control',
      title: '30-Day "Production Flow" System',
      description: 'System wins to lock in efficiency and profit margins.',
      pillar: 'General',
      steps: [
        { week: 1, action: "Scope Sign-off & Redline Review: Nothing gets ordered or cut without a signed scope and a builder review." },
        { week: 2, action: "Shadow Boarding & Kanban: Visualize tools and consumables. Kill the 'search and carry'." },
        { week: 3, action: "Callback Log & Change Orders: Track every return trip cost. Price every change immediately." },
        { week: 4, action: "Skill Matrix & Install Walkthrough: Map your team's gaps. Standardize the client handover." }
      ]
    }
  ]
};
