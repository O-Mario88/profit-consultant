import { ActionDefinition, PillarId, SignalTag } from '../../types';

type BusinessSize = 'solo' | 'micro' | 'small' | 'small_med' | 'medium' | 'large' | 'enterprise';

type ActionSeed = {
  action_id: string;
  pillar: PillarId;
  signal_tags: SignalTag[];
  title: string;
  days: 7 | 30;
  effort: 'S' | 'M' | 'L';
  kpi_links: string[];
  proof_required: string[];
  description: string;
  steps: string[];
  objective: string;
  outcome: string;
  impact_score: number;
};

const ownerMap: Record<BusinessSize, string> = {
  solo: 'Owner',
  micro: 'Owner',
  small: 'Store Manager',
  small_med: 'Store Manager',
  medium: 'Department Lead',
  large: 'Department Lead',
  enterprise: 'Function Head'
};

const seeds: ActionSeed[] = [
  // 7-day stabilize profit (fast wins)
  {
    action_id: 'ACT_ELECTRONICS_DAY1_PROFIT_REALITY_7',
    pillar: 'Money',
    signal_tags: ['pricing_margin_blindspot', 'cash_recon_gap'],
    title: 'Day 1 Profit Reality Check: 14-day margin split and loss-maker map',
    days: 7,
    effort: 'S',
    kpi_links: ['daily_gross_profit', 'category_margin', 'loss_maker_count'],
    proof_required: ['14_day_sales_split', 'top_20_sku_margin_sheet', 'top_10_loss_maker_list'],
    description:
      'Create immediate margin visibility by separating phones, accessories, and repairs, then identifying low-margin high-return SKUs.',
    steps: [
      'Owner or Finance Manager pulls last 14 days of transactions and groups by phones, accessories, repairs.',
      'Pricing Analyst identifies top 20 SKUs and top 10 loss-makers (low margin plus high return profile).',
      'Store Manager starts daily gross-profit log including discounts, payment fees, and expected gross margin.'
    ],
    objective: 'Replace sales-only visibility with true profit visibility.',
    outcome: 'Daily profit reality baseline is live and leak candidates are named.',
    impact_score: 10
  },
  {
    action_id: 'ACT_ELECTRONICS_DAY2_DISCOUNT_CONTROL_7',
    pillar: 'Money',
    signal_tags: ['discounting_leak', 'pricing_inconsistency'],
    title: 'Day 2 Stop Discount Bleed: discount approval matrix and 3 bundle closes',
    days: 7,
    effort: 'S',
    kpi_links: ['discount_percent', 'bundle_penetration'],
    proof_required: ['discount_matrix', 'bundle_pricing_card', 'discount_exception_log'],
    description:
      'Move from random discounting to governed discount bands with pre-priced Basic, Better, Best bundle options.',
    steps: [
      'Finance Manager publishes discount limits by role and price band.',
      'Sales Lead deploys three approved bundle closes at POS and chat channels.',
      'Shift Leads log every discount exception with reason and approving role.'
    ],
    objective: 'Protect gross margin while preserving close rate.',
    outcome: 'Discount drift drops and bundles replace ad-hoc markdown behavior.',
    impact_score: 9
  },
  {
    action_id: 'ACT_ELECTRONICS_DAY3_ATTACH_SPRINT_7',
    pillar: 'Market',
    signal_tags: ['bundle_engine_missing', 'service_inconsistency'],
    title: 'Day 3 Attach Rate Sprint: mandatory offers and checkout prompts',
    days: 7,
    effort: 'S',
    kpi_links: ['attach_rate', 'aov'],
    proof_required: ['attach_script', 'pos_prompt_sheet', 'rep_attach_dashboard'],
    description:
      'Standardize accessory and service offers for every phone transaction to increase basket value.',
    steps: [
      'Sales Manager enforces two mandatory offers: protector and case, then charger as conditional prompt.',
      'POS Attendant uses add-on prompts at checkout and records acceptance.',
      'Store Manager reviews attach-rate leaderboard by rep at end of day.'
    ],
    objective: 'Increase margin per transaction without price wars.',
    outcome: 'Attach rate rises with visible rep-level accountability.',
    impact_score: 9
  },
  {
    action_id: 'ACT_ELECTRONICS_DAY4_STOCK_SHOCK_TEST_7',
    pillar: 'Operations',
    signal_tags: ['inventory_accuracy_gap', 'shrinkage_leak'],
    title: 'Day 4 Stock Accuracy Shock Test: high-value count and variance lock',
    days: 7,
    effort: 'S',
    kpi_links: ['inventory_accuracy', 'shrink_rate'],
    proof_required: ['90_min_cycle_count', 'variance_reason_codes', 'access_control_update'],
    description:
      'Run a focused cycle count on high-value phones and fast accessories, then close custody gaps immediately.',
    steps: [
      'Inventory Controller runs 90-minute cycle count on highest-value SKUs.',
      'Store Manager tags variances by cause (miscount, process gap, suspected theft).',
      'Loss Prevention or Supervisor updates lock-access and handover controls for exposed areas.'
    ],
    objective: 'Re-establish inventory truth and remove immediate shrink openings.',
    outcome: 'Variance root causes are visible and first-layer controls are active.',
    impact_score: 10
  },
  {
    action_id: 'ACT_ELECTRONICS_DAY5_USED_TRUST_SHIELD_7',
    pillar: 'Risk',
    signal_tags: ['supplier_doc_gap', 'policy_vagueness'],
    title: 'Day 5 Used Phone Trust Shield: test checklist plus grading label and IMEI checks',
    days: 7,
    effort: 'S',
    kpi_links: ['used_return_rate', 'imei_log_coverage', 'warranty_dispute_rate'],
    proof_required: ['25_point_test_checklist', 'grade_label_samples', 'imei_intake_log'],
    description:
      'Standardize used-device trust controls with visible grading, repeatable testing, and device status verification.',
    steps: [
      'QA Technician applies 25-point test before display or resale release.',
      'Refurb Specialist assigns A, B, or C grade label with pricing band reference.',
      'Intake Officer logs IMEI or MEID and performs status checks where available.'
    ],
    objective: 'Reduce trust failures and avoidable used-device disputes.',
    outcome: 'Used sales become evidence-backed and policy-safe.',
    impact_score: 10
  },
  {
    action_id: 'ACT_ELECTRONICS_DAY6_REPAIR_FLOW_7',
    pillar: 'Operations',
    signal_tags: ['no_standard_work', 'returns_damage_blindspot'],
    title: 'Day 6 Repairs Workflow Cleanup: intake to handover stage control',
    days: 7,
    effort: 'M',
    kpi_links: ['repair_tat', 'first_time_fix_rate', 'rework_rate'],
    proof_required: ['repair_ticket_template', 'approval_records', 'qa_handover_checklist'],
    description:
      'Enforce repair ticketing with quote approval gates, QA checks, and proactive status updates.',
    steps: [
      'Repair Technician logs every job with intake condition and expected completion window.',
      'Service Desk obtains quote approval (signature or OTP) before part replacement.',
      'Team sends two daily updates (morning and evening) until handover complete.'
    ],
    objective: 'Shrink repair disputes and reduce rework loops.',
    outcome: 'Repair pipeline becomes predictable with lower comeback risk.',
    impact_score: 9
  },
  {
    action_id: 'ACT_ELECTRONICS_DAY7_REPUTATION_BOOST_7',
    pillar: 'Risk',
    signal_tags: ['complaint_handling_gap', 'followup_gap'],
    title: 'Day 7 Reputation and Repeat Boost: review ask plus post-purchase follow-up',
    days: 7,
    effort: 'S',
    kpi_links: ['review_velocity', 'repeat_rate', 'complaint_resolution_time'],
    proof_required: ['review_request_template', 'follow_up_log', 'issue_escalation_tracker'],
    description:
      'Capture immediate trust signals by requesting reviews and running a 24-72 hour follow-up cadence.',
    steps: [
      'Customer Service asks every satisfied buyer for a review using QR and message template.',
      'Sales Rep sends follow-up message asking setup outcome and support needs.',
      'Store Manager logs complaints and enforces response SLA.'
    ],
    objective: 'Convert transaction success into reputation and repeat demand.',
    outcome: 'Review flow and customer recovery loop are operational.',
    impact_score: 8
  },

  // 30-day build control (system wins)
  {
    action_id: 'ACT_ELECTRONICS_WEEK1_STANDARDIZE_30',
    pillar: 'Leadership',
    signal_tags: ['kpi_cadence_gap', 'role_clarity_gap'],
    title: 'Week 1 Standardize: SOP baseline and role scorecards',
    days: 30,
    effort: 'M',
    kpi_links: ['sop_compliance', 'role_scorecard_coverage'],
    proof_required: ['sop_pack', 'role_scorecards', 'weekly_audit_log'],
    description:
      'Standardize core workflows: intake/testing, bundles, discounts, returns, repairs, and cash-up routines.',
    steps: [
      'General Manager signs off SOP library with owner per workflow.',
      'Department Leads publish role scorecards and minimum standards.',
      'Weekly audit verifies compliance and closes corrective actions.'
    ],
    objective: 'Move execution from memory-driven to system-driven.',
    outcome: 'Core processes are documented, owned, and audited.',
    impact_score: 9
  },
  {
    action_id: 'ACT_ELECTRONICS_WEEK2_INVENTORY_SYSTEM_30',
    pillar: 'Operations',
    signal_tags: ['inventory_accuracy_gap', 'shrinkage_leak'],
    title: 'Week 2 Inventory and Shrink System: ABC counts and access discipline',
    days: 30,
    effort: 'M',
    kpi_links: ['inventory_accuracy', 'stockout_rate', 'shrink_rate'],
    proof_required: ['abc_count_calendar', 'high_value_access_log', 'reorder_rule_sheet'],
    description:
      'Implement ABC cycle counts, high-value custody controls, and reorder points for top sellers.',
    steps: [
      'Inventory Controller runs A weekly, B monthly, C quarterly cycle-count schedule.',
      'Supervisor enforces high-value access log with dual sign-off where needed.',
      'Procurement sets reorder points and min-max levels for fast movers.'
    ],
    objective: 'Increase availability and reduce inventory leakage.',
    outcome: 'Inventory system supports both control and throughput.',
    impact_score: 10
  },
  {
    action_id: 'ACT_ELECTRONICS_WEEK3_FINANCE_VISIBILITY_30',
    pillar: 'Money',
    signal_tags: ['pricing_margin_blindspot', 'cash_recon_gap'],
    title: 'Week 3 Finance and Visibility: true margin calculator plus rolling cash forecast',
    days: 30,
    effort: 'M',
    kpi_links: ['net_margin', 'cash_forecast_accuracy', 'supplier_aging'],
    proof_required: ['true_margin_calculator', '4_week_cash_forecast', 'supplier_aging_review'],
    description:
      'Operationalize true margin calculations, 4-week cash forecast, and supplier-aging review cadence.',
    steps: [
      'Finance Manager builds true-margin model with labor, parts, fees, and warranty impacts.',
      'Accountant maintains 4-week rolling cashflow view and weekly variance review.',
      'Leadership reviews supplier aging and payment priority against stock risk.'
    ],
    objective: 'Protect cashflow and pricing quality under real cost structure.',
    outcome: 'Management decisions are grounded in verified margin and cash position.',
    impact_score: 10
  },
  {
    action_id: 'ACT_ELECTRONICS_WEEK4_GROWTH_ENGINE_30',
    pillar: 'Innovation',
    signal_tags: ['no_testing_rhythm', 'offer_measurement_gap'],
    title: 'Week 4 Growth Engine: referral program, inventory-linked promo calendar, trust messaging',
    days: 30,
    effort: 'M',
    kpi_links: ['referral_rate', 'promo_redemption_rate', 'repeat_rate'],
    proof_required: ['referral_program_rules', 'monthly_promo_calendar', 'trust_messaging_assets'],
    description:
      'Scale controlled growth with referral mechanics, promo planning tied to inventory goals, and repairability trust cues.',
    steps: [
      'Marketing Lead launches referral give-get structure with redemption tracking.',
      'Merchandising Lead aligns monthly promotions to dead-stock and margin targets.',
      'Sales and Service teams embed trust messaging: warranty clarity, QA proof, and repair options.'
    ],
    objective: 'Build repeatable growth without panic discounting.',
    outcome: 'Demand engine is measurable and aligned with profit control.',
    impact_score: 8
  },

  // Pillar-specific snippet library actions (for grounding)
  {
    action_id: 'ACT_ELECTRONICS_P1_BUNDLE_BUILDER_7',
    pillar: 'Leadership',
    signal_tags: ['bundle_blindspot', 'pricing_inconsistency'],
    title: 'P1 Offer Snippet: Good-Better-Best bundle builder with margin bands',
    days: 7,
    effort: 'S',
    kpi_links: ['aov', 'bundle_penetration', 'category_margin'],
    proof_required: ['bundle_matrix', 'price_band_policy'],
    description: 'Deploy a structured bundle template: phone, case, protector, charger with tiered pricing logic.',
    steps: [
      'Merchandiser drafts three bundle tiers with minimum margin thresholds.',
      'Sales Manager trains reps to present all tiers before single-item pricing.',
      'Pricing Analyst reviews weekly conversion and margin by tier.'
    ],
    objective: 'Increase AOV while protecting margin floor.',
    outcome: 'Bundle strategy is repeatable and auditable.',
    impact_score: 8
  },
  {
    action_id: 'ACT_ELECTRONICS_P2_CAMPAIGN_TRACKER_30',
    pillar: 'Innovation',
    signal_tags: ['offer_measurement_gap', 'no_market_feedback_loop'],
    title: 'P2 Demand Snippet: source-to-margin campaign tracker',
    days: 30,
    effort: 'M',
    kpi_links: ['lead_to_sale_conversion', 'cost_per_sale', 'gross_profit_by_channel'],
    proof_required: ['campaign_tracker_sheet', 'channel_report'],
    description: 'Track source, lead, sale, and margin per campaign to replace visibility metrics with profitability metrics.',
    steps: [
      'Performance Marketer tags every campaign and channel source code.',
      'Sales Ops logs conversion and gross profit by lead source.',
      'Weekly review kills low-margin campaigns and scales proven offers.'
    ],
    objective: 'Align marketing spend to profitable demand.',
    outcome: 'Campaign decisions become evidence-led.',
    impact_score: 8
  },
  {
    action_id: 'ACT_ELECTRONICS_P3_CLOSE_SCRIPT_7',
    pillar: 'Market',
    signal_tags: ['service_inconsistency', 'bundle_engine_missing'],
    title: 'P3 Sales Snippet: seven-question needs analysis and three-option close script',
    days: 7,
    effort: 'S',
    kpi_links: ['conversion_rate', 'attach_rate'],
    proof_required: ['needs_script', 'close_script_cards', 'rep_coaching_log'],
    description: 'Standardize discovery and close behavior across in-store and DM channels.',
    steps: [
      'Sales Lead introduces seven-question discovery script for every lead.',
      'Reps close with three-option structure and explicit warranty proof.',
      'Daily huddle reviews objection patterns and script adherence.'
    ],
    objective: 'Improve conversion quality and reduce avoidable returns.',
    outcome: 'Sales execution variance drops across reps.',
    impact_score: 8
  },
  {
    action_id: 'ACT_ELECTRONICS_P4_REPAIR_TICKETING_30',
    pillar: 'Operations',
    signal_tags: ['no_standard_work', 'returns_damage_blindspot'],
    title: 'P4 Operations Snippet: repair ticketing, approval proof, and QA gate library',
    days: 30,
    effort: 'M',
    kpi_links: ['repair_tat', 'first_time_fix_rate', 'warranty_claim_rate'],
    proof_required: ['repair_workflow_board', 'customer_approval_archive', 'qa_gate_audit'],
    description: 'Install full repair control library from intake photos through QA handover evidence.',
    steps: [
      'Service Manager maps stages and max WIP per stage.',
      'Technicians attach approval proof before part swap.',
      'QA Technician validates final checklist before customer handover.'
    ],
    objective: 'Create predictable repair throughput with lower rework.',
    outcome: 'Repair operations become measurable and dispute-safe.',
    impact_score: 9
  },
  {
    action_id: 'ACT_ELECTRONICS_P5_CASH_ROUTINE_7',
    pillar: 'Money',
    signal_tags: ['cash_recon_gap', 'discounting_leak'],
    title: 'P5 Finance Snippet: daily cash-up variance log and discount approval workflow',
    days: 7,
    effort: 'S',
    kpi_links: ['daily_recon_variance', 'discount_percent'],
    proof_required: ['cash_up_sheet', 'variance_log', 'discount_approval_records'],
    description: 'Run close-of-day reconciliation with explicit variance coding and discount authorization evidence.',
    steps: [
      'Cashier closes shift with POS-cash variance capture.',
      'Store Manager approves variance closure steps same day.',
      'Finance reviews discount outliers by rep weekly.'
    ],
    objective: 'Remove silent cash and discount leakage.',
    outcome: 'Cash control and discount discipline are visible daily.',
    impact_score: 9
  },
  {
    action_id: 'ACT_ELECTRONICS_P6_TRAINING_CADENCE_30',
    pillar: 'People',
    signal_tags: ['training_gap', 'incentive_misalignment'],
    title: 'P6 People Snippet: weekly two-hour training and balanced incentive plan',
    days: 30,
    effort: 'M',
    kpi_links: ['training_completion', 'returns_rate_by_staff', 'profit_per_staff_hour'],
    proof_required: ['weekly_training_agenda', 'staff_scorecards', 'incentive_policy'],
    description: 'Institutionalize weekly capability cadence and incentives tied to profit-safe behavior.',
    steps: [
      'HR or Store Manager runs weekly two-hour training agenda (products, scripts, fraud controls).',
      'Role scorecards track attach, returns, and review quality per staff.',
      'Incentives rebalance from volume-only to quality-margin outcomes.'
    ],
    objective: 'Stabilize execution quality and reduce turnover-driven drift.',
    outcome: 'Team behavior aligns with margin and trust goals.',
    impact_score: 8
  },
  {
    action_id: 'ACT_ELECTRONICS_P7_TRUST_LOOP_30',
    pillar: 'Risk',
    signal_tags: ['policy_vagueness', 'complaint_handling_gap'],
    title: 'P7 Trust Snippet: warranty clarity pack, review response SLA, and customer-save SOP',
    days: 30,
    effort: 'M',
    kpi_links: ['warranty_claim_rate', 'review_response_time', 'repeat_rate'],
    proof_required: ['warranty_card_template', 'review_response_log', 'customer_save_cases'],
    description: 'Systematize trust protection through clear policy language, response discipline, and escalation controls.',
    steps: [
      'Warranty and Returns Officer publishes plain-language warranty card with exclusions.',
      'Customer Service responds to reviews within defined SLA window.',
      'Store Manager runs customer-save escalation for high-risk complaints.'
    ],
    objective: 'Reduce trust volatility and preserve referral engine.',
    outcome: 'Trust control becomes routine, documented, and measurable.',
    impact_score: 8
  }
];

export const actions: ActionDefinition[] = seeds.map((seed) => ({
  action_id: seed.action_id,
  industry: 'retail',
  line_type: ['all'],
  pillar: seed.pillar,
  signal_tags: seed.signal_tags,
  title: seed.title,
  days: seed.days,
  effort: seed.effort,
  default_owner_by_size: ownerMap,
  kpi_links: seed.kpi_links,
  proof_required: seed.proof_required,
  impact_score: seed.impact_score,
  description: seed.description,
  steps: seed.steps,
  objective: seed.objective,
  outcome: seed.outcome
}));
