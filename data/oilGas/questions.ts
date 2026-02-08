import { QuestionDefinition, PillarId, SignalTag } from '../../types';

const q = (
  qid: string,
  pillar: PillarId,
  signal_tags: SignalTag[],
  textA: string,
  textB: string,
  weight = 1.0,
  line_type: string[] = ['all']
): QuestionDefinition => ({
  qid,
  industry: 'oil_gas_services',
  line_type,
  pillar,
  signal_tags,
  weight,
  textA,
  textB
});

export const questions: QuestionDefinition[] = [
  // QUICK SCAN (2 per pillar)
  q('QS_OPS_01', 'Operations', ['no_standard_work'], 'We often start jobs while still clarifying scope and tools.', 'We start jobs with complete work packs and readiness checks.', 1.2),
  q('QS_OPS_02', 'Operations', ['planning_gap'], 'Crew delays are normal due to access and permits.', 'Access and permits are planned so crews spend time producing.', 1.1),

  q('QS_MONEY_01', 'Money', ['pricing_margin_blindspot'], 'Extra work happens and we sort payment later.', 'Extra work happens only with a logged, approved variation order.', 1.2),
  q('QS_MONEY_02', 'Money', ['costing_gap'], 'We judge success by contract size and workload.', 'We judge success by margin per job and cash collected.', 1.1),

  q('QS_MARKET_01', 'Market', ['weak_proof_pack'], 'Most opportunities depend on relationships and referrals.', 'We win work with compliance proof and delivery performance evidence.', 1.1),
  q('QS_MARKET_02', 'Market', ['channel_dependency'], 'One or two clients contribute most of our revenue.', 'We actively diversify clients to reduce pricing control risk.', 1.2),

  q('QS_LEAD_01', 'Leadership', ['management_by_memory'], 'Results depend heavily on which supervisor is on site.', 'Results are driven by standardized routines and clear job owners.', 1.1),
  q('QS_LEAD_02', 'Leadership', ['no_meeting_to_action'], 'We hold meetings often but actions do not always close.', 'We track actions with owners and deadlines until closed.', 1.0),

  q('QS_INNOV_01', 'Innovation', ['quality_definition_gap'], 'We build job packs and reports manually each time.', 'We use templates and systems to reduce cycle time and errors.', 1.0),
  q('QS_INNOV_02', 'Innovation', ['no_product_testing_rhythm'], 'We mainly fix problems after they happen.', 'We improve processes to prevent rework and downtime.', 1.0),

  q('QS_RISK_01', 'Risk', ['hygiene_drift'], 'HSE compliance varies depending on pressure.', 'HSE/PTW compliance is enforced even when deadlines are tight.', 1.2),
  q('QS_RISK_02', 'Risk', ['contract_gap'], 'We sign contracts and handle risks as they arise.', 'We review contract risks and control them upfront.', 1.1),

  q('QS_PEOPLE_01', 'People', ['cross_function_breakdown'], 'Overtime is normal and expected during peak periods.', 'We manage fatigue because tired crews create defects and incidents.', 1.0),
  q('QS_PEOPLE_02', 'People', ['blame_culture'], 'Speed is praised even if quality slips sometimes.', 'Quality and safety are praised because rework kills profit.', 1.0),

  // DEEP SCAN (10 per pillar)
  // Operations
  q('DS_OPS_01', 'Operations', ['no_standard_work'], 'Job scope is often clarified during execution.', 'Scope is locked in job packs before execution.', 1.1),
  q('DS_OPS_02', 'Operations', ['planning_gap'], 'PTW is handled last-minute.', 'PTW is planned and tracked.', 1.1),
  q('DS_OPS_03', 'Operations', ['flow_instability'], 'Crews wait for materials and tools often.', 'Readiness checks prevent waiting time.', 1.0),
  q('DS_OPS_04', 'Operations', ['quality_built_late'], 'Rework is common.', 'First-time-right is actively managed.', 1.1),
  q('DS_OPS_05', 'Operations', ['weak_shift_handover'], 'Close-out docs are delayed.', 'Close-out docs are produced as part of delivery.', 1.0),
  q('DS_OPS_06', 'Operations', ['tooling_slowdown'], 'Tools and rentals are hard to track.', 'Tools and rentals are controlled and reconciled.', 1.0),
  q('DS_OPS_07', 'Operations', ['order_fulfillment_instability'], 'SLA response is inconsistent.', 'SLA response is tracked and consistent.', 1.0),
  q('DS_OPS_08', 'Operations', ['weak_shift_handover'], 'Handoffs with client ops are informal.', 'Handoffs are scheduled and documented.', 0.9),
  q('DS_OPS_09', 'Operations', ['measurement_blindspot'], 'Downtime impact is not measured.', 'Downtime impact is measured and reduced.', 1.0),
  q('DS_OPS_10', 'Operations', ['no_standard_work'], 'Progress reporting is ad hoc.', 'Progress reporting is standardized.', 0.9),

  // Money
  q('DS_MONEY_01', 'Money', ['costing_gap'], 'Job profitability is not visible.', 'Profitability is tracked by cost codes.', 1.2),
  q('DS_MONEY_02', 'Money', ['pricing_margin_blindspot'], 'Variation orders are informal.', 'Variation orders are logged and approved.', 1.1),
  q('DS_MONEY_03', 'Money', ['payment_delay_chokehold'], 'Invoicing is delayed.', 'Invoicing is immediate after close-out.', 1.0),
  q('DS_MONEY_04', 'Money', ['discounting_leak'], 'Penalties and backcharges surprise us.', 'Penalties are prevented with evidence and controls.', 1.0),
  q('DS_MONEY_05', 'Money', ['energy_burn_spiral'], 'Rentals and fuel are difficult to control.', 'Rentals and fuel are reconciled and optimized.', 1.0),
  q('DS_MONEY_06', 'Money', ['cashflow_visibility_gap'], 'Cashflow planning is limited.', 'Cashflow is forecasted with DSO management.', 1.0),
  q('DS_MONEY_07', 'Money', ['credit_terms_risk'], 'Milestone billing is not structured.', 'Milestone billing is built into contracts.', 1.0),
  q('DS_MONEY_08', 'Money', ['waste_not_costed'], 'Labor hours are not reconciled to outputs.', 'Labor hours are tied to deliverables.', 0.9),
  q('DS_MONEY_09', 'Money', ['purchase_panic'], 'Spend approvals are loose.', 'Spend approvals follow rules.', 0.9),
  q('DS_MONEY_10', 'Money', ['pricing_margin_blindspot'], 'We chase revenue.', 'We protect margin.', 1.1),

  // Market
  q('DS_MARKET_01', 'Market', ['channel_dependency'], 'Pipeline depends on a few relationships.', 'Pipeline is system-driven.', 1.2),
  q('DS_MARKET_02', 'Market', ['compliance_blocker_risk'], 'Compliance packs are assembled when needed.', 'Compliance packs are always ready.', 1.1),
  q('DS_MARKET_03', 'Market', ['pricing_positioning_gap'], 'We compete on price to win tenders.', 'We compete on reliability, safety, and uptime value.', 1.0),
  q('DS_MARKET_04', 'Market', ['low_repeat_orders'], 'Repeat work is inconsistent.', 'Repeat work is engineered through delivery proof.', 1.0),
  q('DS_MARKET_05', 'Market', ['value_story_gap'], 'We do not track win/loss reasons.', 'We track win/loss reasons and fix weaknesses.', 0.9),
  q('DS_MARKET_06', 'Market', ['channel_dependency'], 'Client concentration is high.', 'Client concentration is managed.', 1.0),
  q('DS_MARKET_07', 'Market', ['weak_onboarding'], 'We do not have structured account management.', 'We manage accounts with monthly reviews.', 0.9),
  q('DS_MARKET_08', 'Market', ['weak_proof_pack'], 'Proposal quality exceeds delivery readiness.', 'Proposal matches delivery proof and capacity.', 1.0),
  q('DS_MARKET_09', 'Market', ['complaint_handling_gap'], 'Complaints linger.', 'Complaints close fast with corrective actions.', 1.0),
  q('DS_MARKET_10', 'Market', ['value_story_gap'], 'We sell services.', 'We sell outcomes: uptime, safety, response speed.', 1.0),

  // Leadership
  q('DS_LEAD_01', 'Leadership', ['no_accountability_loop'], 'Job ownership is unclear.', 'Job owners are assigned and accountable.', 1.1),
  q('DS_LEAD_02', 'Leadership', ['management_by_memory'], 'Supervisors manage by experience only.', 'Supervisors manage by standards and KPIs.', 1.0),
  q('DS_LEAD_03', 'Leadership', ['no_meeting_to_action'], 'Meetings discuss but do not close.', 'Meetings close tasks.', 1.0),
  q('DS_LEAD_04', 'Leadership', ['weak_goal_alignment'], 'Scope creep is tolerated.', 'Scope creep triggers variation orders.', 1.0),
  q('DS_LEAD_05', 'Leadership', ['priority_whiplash'], 'Decisions are reactive.', 'Decisions are KPI-driven.', 1.0),
  q('DS_LEAD_06', 'Leadership', ['no_variance_review'], 'Incident learning is weak.', 'Incident learning prevents repeats.', 1.0),
  q('DS_LEAD_07', 'Leadership', ['weak_goal_alignment'], 'Standards vary across sites.', 'Standards are consistent.', 1.0),
  q('DS_LEAD_08', 'Leadership', ['hero_operator_dependence'], 'The business depends on a hero.', 'The business runs on systems.', 1.0),
  q('DS_LEAD_09', 'Leadership', ['hiring_mismatch'], 'Feedback is rare.', 'Feedback is routine and constructive.', 0.9),
  q('DS_LEAD_10', 'Leadership', ['decision_bottleneck'], 'Accountability is emotional.', 'Accountability is structured.', 0.9),

  // Innovation
  q('DS_INNOV_01', 'Innovation', ['quality_definition_gap'], 'Templates are limited.', 'Templates are used extensively.', 1.0),
  q('DS_INNOV_02', 'Innovation', ['no_market_feedback_loop'], 'Reporting is manual.', 'Reporting is automated where possible.', 1.0),
  q('DS_INNOV_03', 'Innovation', ['complaint_echo'], 'Rework is accepted.', 'Rework is systematically reduced.', 1.0),
  q('DS_INNOV_04', 'Innovation', ['no_market_feedback_loop'], 'Knowledge stays in heads.', 'Knowledge becomes SOPs.', 1.0),
  q('DS_INNOV_05', 'Innovation', ['no_product_testing_rhythm'], 'No process experiments.', 'Regular experiments with KPIs.', 1.0),
  q('DS_INNOV_06', 'Innovation', ['slow_bug_fix'], 'Only reactive maintenance.', 'Predictive or planned maintenance offerings.', 1.0),
  q('DS_INNOV_07', 'Innovation', ['pack_size_profit_blindspot'], 'We do not productize services.', 'We package services into standard offers.', 0.9),
  q('DS_INNOV_08', 'Innovation', ['no_market_feedback_loop'], 'We do not capture lessons learned.', 'Lessons learned are logged and applied.', 0.9),
  q('DS_INNOV_09', 'Innovation', ['quality_definition_gap'], 'Work packs vary widely.', 'Work packs are standardized.', 1.0),
  q('DS_INNOV_10', 'Innovation', ['quality_definition_gap'], 'Speed sacrifices quality.', 'Speed improves with quality.', 1.0),

  // Risk
  q('DS_RISK_01', 'Risk', ['compliance_blocker_risk'], 'PTW compliance is flexible under pressure.', 'PTW compliance is strict.', 1.2),
  q('DS_RISK_02', 'Risk', ['hygiene_drift'], 'HSE documentation is inconsistent.', 'HSE documentation is audit-ready.', 1.1),
  q('DS_RISK_03', 'Risk', ['contract_gap'], 'Contract clauses are not deeply reviewed.', 'Contract risks are reviewed.', 1.0),
  q('DS_RISK_04', 'Risk', ['insurance_gap'], 'Insurance is assumed coverage.', 'Insurance proof supports claims.', 1.0),
  q('DS_RISK_05', 'Risk', ['traceability_gap'], 'Subcontractor controls are loose.', 'Subcontractor compliance is enforced.', 1.0),
  q('DS_RISK_06', 'Risk', ['data_security_gap'], 'Cyber fraud controls are weak.', 'Payment verification is strict.', 1.0),
  q('DS_RISK_07', 'Risk', ['disaster_recovery_gap'], 'Incident response is improvised.', 'Incident response is documented.', 0.9),
  q('DS_RISK_08', 'Risk', ['tax_compliance_gap'], 'Certifications sometimes lapse.', 'Certifications are tracked.', 0.9),
  q('DS_RISK_09', 'Risk', ['data_security_gap'], 'Records are scattered.', 'Records are centralized.', 0.9),
  q('DS_RISK_10', 'Risk', ['contract_gap'], 'We handle legal risk when it appears.', 'We prevent legal risk proactively.', 1.0),

  // People
  q('DS_PEOPLE_01', 'People', ['training_gap'], 'Competency checks are informal.', 'Competency and certs are tracked.', 1.1),
  q('DS_PEOPLE_02', 'People', ['cross_function_breakdown'], 'Overtime is normal.', 'Fatigue is managed.', 1.0),
  q('DS_PEOPLE_03', 'People', ['fear_index'], 'Safety is secondary to deadlines sometimes.', 'Safety is non-negotiable.', 1.0),
  q('DS_PEOPLE_04', 'People', ['blame_culture'], 'Incentives prioritize speed.', 'Incentives prioritize quality and safety.', 1.0),
  q('DS_PEOPLE_05', 'People', ['hiring_mismatch'], 'Supervisors are not coached consistently.', 'Supervisors receive coaching.', 0.9),
  q('DS_PEOPLE_06', 'People', ['onboarding_gap'], 'New hires learn by shadowing only.', 'New hires onboard with standards.', 0.9),
  q('DS_PEOPLE_07', 'People', ['low_psych_safety'], 'Near-miss reporting is rare.', 'Near-miss reporting is encouraged.', 0.9),
  q('DS_PEOPLE_08', 'People', ['hero_operator_dependence'], 'Turnover is accepted.', 'Retention is engineered.', 0.9),
  q('DS_PEOPLE_09', 'People', ['role_clarity_gap'], 'Feedback is avoided.', 'Feedback is routine.', 0.9),
  q('DS_PEOPLE_10', 'People', ['blame_culture'], 'Culture is blame-driven.', 'Culture is improvement-driven.', 1.0)
];
