import { ActionDefinition, PillarId, SignalTag } from '../../types';

type BusinessSize = 'solo' | 'micro' | 'small' | 'small_med' | 'medium' | 'large' | 'enterprise';

interface PackDef {
  code: string;
  pillar: PillarId;
  signal_tags: SignalTag[];
  title7: string;
  title30: string;
  kpi7: string;
  kpi30: string;
  proof7: string[];
  proof30: string[];
  impact7: number;
  impact30: number;
}

const ownerMap: Record<BusinessSize, string> = {
  solo: 'Owner',
  micro: 'Owner',
  small: 'Store Manager',
  small_med: 'Store Manager',
  medium: 'Department Lead',
  large: 'Department Lead',
  enterprise: 'Function Head'
};

const packs: PackDef[] = [
  // Operations
  {
    code: 'OPS-P1',
    pillar: 'Operations',
    signal_tags: ['no_standard_work', 'training_gap', 'inventory_accuracy_gap'],
    title7: 'Fitment Confirmation Checklist (Model-Year-Engine-Variant)',
    title30: 'Top Model Fitment Sheet + Substitute Options Matrix',
    kpi7: 'wrong_fit_incident_rate',
    kpi30: 'fitment_accuracy_rate',
    proof7: ['fitment_checklist', 'fitment_samples_20'],
    proof30: ['fitment_matrix', 'staff_signoff_fitment'],
    impact7: 10,
    impact30: 10
  },
  {
    code: 'OPS-P2',
    pillar: 'Operations',
    signal_tags: ['stockout_tax', 'restock_delay', 'purchase_panic'],
    title7: 'Top-50 Fast Mover Reorder Triggers (Min-Max)',
    title30: 'Weekly Top-50 Cycle Count + Supplier Lead-Time Calendar',
    kpi7: 'stockout_rate_top50',
    kpi30: 'reorder_compliance_percent',
    proof7: ['top50_list', 'min_max_rules'],
    proof30: ['cycle_count_logs', 'supplier_reorder_calendar'],
    impact7: 9,
    impact30: 10
  },
  {
    code: 'OPS-P3',
    pillar: 'Operations',
    signal_tags: ['inventory_accuracy_gap', 'receiving_slippage'],
    title7: 'SKU + Bin Location Truth Reset',
    title30: 'SKU-Zone Labeling + Find-in-Seconds Audits',
    kpi7: 'stock_accuracy_percent',
    kpi30: 'time_to_quote_minutes',
    proof7: ['bin_map', 'sku_location_sheet'],
    proof30: ['bin_labels_photos', 'find_time_audit'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'OPS-P4',
    pillar: 'Operations',
    signal_tags: ['policy_vagueness', 'contract_gap', 'shrinkage_leak'],
    title7: 'Returns Quarantine + Condition Grading SOP',
    title30: 'Return Evidence Workflow + Reintegration Controls',
    kpi7: 'return_recycle_incidents',
    kpi30: 'return_dispute_rate',
    proof7: ['quarantine_log', 'condition_grade_forms'],
    proof30: ['return_sop', 'return_evidence_archive'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'OPS-P5',
    pillar: 'Operations',
    signal_tags: ['weak_onboarding', 'dispatch_delivery_instability'],
    title7: 'Quote + Delivery Workflow (Template + Pick Checklist)',
    title30: 'Urgent Order Response SLA + Dispatch Proof Routine',
    kpi7: 'response_time_minutes',
    kpi30: 'delivery_success_rate',
    proof7: ['quote_templates', 'pick_checklist'],
    proof30: ['sla_doc', 'dispatch_proof_samples'],
    impact7: 8,
    impact30: 9
  },

  // Money
  {
    code: 'MNY-P1',
    pillar: 'Money',
    signal_tags: ['pricing_margin_blindspot', 'category_margin_blindspot'],
    title7: 'Category Margin Map + Baseline Price Rules',
    title30: 'Weekly Margin Leak Review (Returns-Discounts-Shrink)',
    kpi7: 'gross_margin_by_category',
    kpi30: 'net_margin_estimate',
    proof7: ['category_margin_sheet', 'price_rule_baseline'],
    proof30: ['margin_leak_log', 'weekly_margin_review'],
    impact7: 9,
    impact30: 10
  },
  {
    code: 'MNY-P2',
    pillar: 'Money',
    signal_tags: ['discounting_leak', 'pricing_inconsistency'],
    title7: 'Discount Bands + Negotiation Scripts',
    title30: 'Discount Compliance Audit by Staff',
    kpi7: 'discount_rate',
    kpi30: 'price_variance',
    proof7: ['discount_policy', 'negotiation_script'],
    proof30: ['discount_audit_report', 'staff_discount_sheet'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'MNY-P3',
    pillar: 'Money',
    signal_tags: ['credit_terms_risk', 'payment_delay_chokehold'],
    title7: 'Garage Credit Policy + Debtor Aging List',
    title30: 'Collections Cadence + Overdue Cutoff Enforcement',
    kpi7: 'credit_outstanding',
    kpi30: 'dso',
    proof7: ['credit_policy', 'debtor_aging_report'],
    proof30: ['collections_log', 'overdue_cutoff_log'],
    impact7: 9,
    impact30: 10
  },
  {
    code: 'MNY-P4',
    pillar: 'Money',
    signal_tags: ['cash_recon_gap', 'shrinkage_leak'],
    title7: 'Daily Cash-Momo Reconciliation + Variance Reasons',
    title30: 'Cash Controls + Shrink Exception Dashboard',
    kpi7: 'daily_recon_variance',
    kpi30: 'shrinkage_percent',
    proof7: ['recon_sheet_7d', 'variance_reason_log'],
    proof30: ['cash_control_sop', 'shrink_dashboard'],
    impact7: 9,
    impact30: 9
  },
  {
    code: 'MNY-P5',
    pillar: 'Money',
    signal_tags: ['slow_mover_attachment', 'purchase_panic'],
    title7: 'Dead Stock Release Plan (Swap-Bundle-Clearance)',
    title30: 'Dead Stock KPI Cadence + Cash Release Tracker',
    kpi7: 'dead_stock_value',
    kpi30: 'inventory_turns',
    proof7: ['dead_stock_list', 'release_plan'],
    proof30: ['cash_release_tracker', 'dead_stock_trend'],
    impact7: 8,
    impact30: 9
  },

  // Market
  {
    code: 'MKT-P1',
    pillar: 'Market',
    signal_tags: ['channel_dependency', 'low_repeat_orders', 'followup_gap'],
    title7: 'Garage Account List + Repeat Follow-Up Cadence',
    title30: 'Mechanic Account Tiers + Preference Tracking',
    kpi7: 'repeat_garage_rate',
    kpi30: 'account_retention_percent',
    proof7: ['garage_account_list', 'followup_log'],
    proof30: ['account_tiers_doc', 'mechanic_preference_sheet'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'MKT-P2',
    pillar: 'Market',
    signal_tags: ['weak_proof_pack', 'supplier_doc_gap'],
    title7: 'Trust + Authenticity Proof Stack (Invoice, Warranty, Source)',
    title30: 'Authenticity Communication Script + Proof Wall',
    kpi7: 'trust_dispute_rate',
    kpi30: 'quote_to_sale_conversion',
    proof7: ['auth_proof_bundle', 'warranty_clarity_sheet'],
    proof30: ['proof_wall_assets', 'staff_trust_script_log'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'MKT-P3',
    pillar: 'Market',
    signal_tags: ['offer_measurement_gap', 'bundle_engine_missing', 'weak_onboarding'],
    title7: 'Model-Based Catalog for Top 10 Models',
    title30: 'Common Jobs Menu + Substitute Matrix',
    kpi7: 'time_to_quote_minutes',
    kpi30: 'catalog_completeness_percent',
    proof7: ['top_model_catalog', 'catalog_share_logs'],
    proof30: ['common_jobs_menu', 'substitute_matrix'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'MKT-P4',
    pillar: 'Market',
    signal_tags: ['weak_onboarding', 'followup_gap'],
    title7: 'Response SLA + Quote Templates for Urgent Buyers',
    title30: 'Inquiry Pipeline Tracker + Reply Audit',
    kpi7: 'response_time_minutes',
    kpi30: 'inquiry_conversion_rate',
    proof7: ['response_sla_doc', 'quote_templates'],
    proof30: ['inquiry_pipeline_sheet', 'reply_audit_log'],
    impact7: 9,
    impact30: 9
  },

  // Leadership
  {
    code: 'LDR-P1',
    pillar: 'Leadership',
    signal_tags: ['kpi_cadence_gap'],
    title7: 'KPI Wall: Wrong Fit, Returns, Debtors, Shrink, Stockouts',
    title30: 'Weekly KPI Closure Rhythm + Leak Escalation Rules',
    kpi7: 'kpi_update_compliance',
    kpi30: 'repeat_incident_rate',
    proof7: ['kpi_wall_photo', 'kpi_owner_list'],
    proof30: ['weekly_closure_log', 'leak_escalation_rules'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'LDR-P2',
    pillar: 'Leadership',
    signal_tags: ['approval_bottleneck', 'decision_bottleneck'],
    title7: 'Delegation Limits for Discounts, Returns, and Credits',
    title30: 'Approval Matrix + Decision Latency Tracker',
    kpi7: 'decision_latency',
    kpi30: 'approval_backlog',
    proof7: ['delegation_limits_doc', 'decision_log'],
    proof30: ['approval_matrix', 'decision_latency_report'],
    impact7: 8,
    impact30: 8
  },
  {
    code: 'LDR-P3',
    pillar: 'Leadership',
    signal_tags: ['no_variance_review', 'training_planning_gap'],
    title7: 'Standards Coaching for Fitment, Labeling, and Pricing',
    title30: 'Weekly SOP Audit + Repeat-Leak Elimination Loop',
    kpi7: 'coaching_sessions_done',
    kpi30: 'sop_adherence_score',
    proof7: ['coaching_log', 'standards_brief'],
    proof30: ['sop_audit_log', 'repeat_leak_tracker'],
    impact7: 7,
    impact30: 8
  },

  // Innovation
  {
    code: 'INN-P1',
    pillar: 'Innovation',
    signal_tags: ['bundle_engine_missing'],
    title7: 'Job Kit Launch (Service, Brake, Clutch) + Bundle Pricing',
    title30: 'Bundle Optimization by Model and Job Type',
    kpi7: 'bundle_adoption_rate',
    kpi30: 'average_order_value',
    proof7: ['job_kit_list', 'bundle_pricing_sheet'],
    proof30: ['bundle_sales_report', 'model_job_matrix'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'INN-P2',
    pillar: 'Innovation',
    signal_tags: ['service_inconsistency', 'dispatch_delivery_instability'],
    title7: 'Delivery + Pre-Order Workflow',
    title30: 'Delivery SLA + Pre-Order Forecast Loop',
    kpi7: 'delivery_adoption_percent',
    kpi30: 'walkaway_rate',
    proof7: ['delivery_workflow', 'preorder_log'],
    proof30: ['delivery_sla_doc', 'forecast_loop_sheet'],
    impact7: 8,
    impact30: 8
  },
  {
    code: 'INN-P3',
    pillar: 'Innovation',
    signal_tags: ['no_testing_rhythm', 'supplier_selection_undisciplined'],
    title7: 'New Line Micro-Test Pipeline',
    title30: 'Test-to-Scale Rules for New Stock Lines',
    kpi7: 'tests_run_per_month',
    kpi30: 'test_to_scale_ratio',
    proof7: ['micro_test_sheet', 'test_results_log'],
    proof30: ['test_to_scale_rules', 'scaled_line_report'],
    impact7: 7,
    impact30: 8
  },

  // Risk
  {
    code: 'RSK-P1',
    pillar: 'Risk',
    signal_tags: ['supplier_doc_gap', 'supplier_selection_undisciplined'],
    title7: 'Supplier Authenticity Firewall',
    title30: 'Approved Supplier Scorecard + Verification Archive',
    kpi7: 'counterfeit_flags',
    kpi30: 'supplier_quality_score',
    proof7: ['approved_supplier_list', 'auth_verification_log'],
    proof30: ['supplier_scorecard', 'verification_archive'],
    impact7: 9,
    impact30: 9
  },
  {
    code: 'RSK-P2',
    pillar: 'Risk',
    signal_tags: ['policy_vagueness', 'contract_gap'],
    title7: 'Warranty Policy + Claims Handling SOP',
    title30: 'Warranty Claim Evidence and Decision Framework',
    kpi7: 'warranty_claim_rate',
    kpi30: 'warranty_dispute_rate',
    proof7: ['warranty_policy_doc', 'claims_log'],
    proof30: ['claims_evidence_archive', 'decision_framework'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'RSK-P3',
    pillar: 'Risk',
    signal_tags: ['shrinkage_leak'],
    title7: 'High-Value Item Controls (Lock, Log, Access Rules)',
    title30: 'Shrink Dashboard + Access Audit Rhythm',
    kpi7: 'theft_incidents',
    kpi30: 'shrinkage_percent',
    proof7: ['high_value_lock_log', 'access_rules_doc'],
    proof30: ['shrink_dashboard', 'access_audit_log'],
    impact7: 8,
    impact30: 9
  },
  {
    code: 'RSK-P4',
    pillar: 'Risk',
    signal_tags: ['contract_gap', 'policy_vagueness', 'no_standard_work'],
    title7: 'Wrong-Part Dispute Defense SOP',
    title30: 'Fitment Proof + Returns Evidence Workflow',
    kpi7: 'wrong_part_dispute_rate',
    kpi30: 'dispute_resolution_time',
    proof7: ['dispute_sop_doc', 'fitment_proof_samples'],
    proof30: ['returns_evidence_archive', 'resolution_tracker'],
    impact7: 8,
    impact30: 9
  },

  // People
  {
    code: 'PPL-P1',
    pillar: 'People',
    signal_tags: ['training_gap', 'service_inconsistency', 'onboarding_gap'],
    title7: 'Fitment + Category Script Certification',
    title30: 'Role-Based Certification Cadence',
    kpi7: 'training_completion',
    kpi30: 'wrong_fit_rate_by_staff',
    proof7: ['fitment_script_checklist', 'certification_log'],
    proof30: ['role_cert_matrix', 'monthly_skill_audit'],
    impact7: 9,
    impact30: 9
  },
  {
    code: 'PPL-P2',
    pillar: 'People',
    signal_tags: ['incentive_misalignment', 'discounting_leak', 'accountability_soft'],
    title7: 'Incentives Aligned to Margin + Low Wrong-Fit + Low Returns',
    title30: 'Staff Scorecards + Incentive Outcome Reviews',
    kpi7: 'discount_rate_by_staff',
    kpi30: 'margin_per_staff_day',
    proof7: ['incentive_rules', 'staff_alignment_brief'],
    proof30: ['staff_scorecards', 'incentive_outcome_report'],
    impact7: 8,
    impact30: 9
  }
];

export const actions: ActionDefinition[] = packs.flatMap((pack) => {
  const normalized = pack.code.replace(/-/g, '_');
  const line_type = ['all'];

  const sevenDay: ActionDefinition = {
    action_id: `ACT_SPARE_${normalized}_7`,
    industry: 'retail',
    line_type,
    pillar: pack.pillar,
    signal_tags: pack.signal_tags,
    title: pack.title7,
    days: 7,
    effort: 'S',
    default_owner_by_size: ownerMap,
    kpi_links: [pack.kpi7],
    proof_required: pack.proof7,
    impact_score: pack.impact7
  };

  const thirtyDay: ActionDefinition = {
    action_id: `ACT_SPARE_${normalized}_30`,
    industry: 'retail',
    line_type,
    pillar: pack.pillar,
    signal_tags: pack.signal_tags,
    title: pack.title30,
    days: 30,
    effort: 'M',
    default_owner_by_size: ownerMap,
    kpi_links: [pack.kpi30],
    proof_required: pack.proof30,
    impact_score: pack.impact30
  };

  return [sevenDay, thirtyDay];
});
