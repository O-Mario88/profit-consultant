import { PillarId, QuestionDefinition, SignalTag } from '../../types';

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
  industry: 'manufacturing',
  line_type,
  pillar,
  signal_tags,
  weight,
  textA,
  textB
});

export const questions: QuestionDefinition[] = [
  // QUICK SCAN (2 per pillar)
  q('QS_OPS_01', 'Operations', ['no_standard_work'], 'We start cutting once we understand the job verbally.', 'We cut only after specs and measurements are confirmed in writing.', 1.2),
  q('QS_OPS_02', 'Operations', ['bottleneck_bounce'], 'Finishing time often surprises us and delays delivery.', 'Finishing is scheduled and controlled like a production stage.', 1.1),

  q('QS_MONEY_01', 'Money', ['pricing_margin_blindspot'], 'Pricing is based on what the customer can pay and what others charge.', 'Pricing is based on material + hours + overhead + profit margin.', 1.2),
  q('QS_MONEY_02', 'Money', ['cashflow_visibility_gap'], 'We start work even without a deposit to secure the client.', 'We start work only after deposit to protect cashflow.', 1.1),

  q('QS_MARKET_01', 'Market', ['low_repeat_orders'], 'Customers mostly come through referrals but we do not ask consistently.', 'We have a system that actively asks for referrals and reviews.', 1.0),
  q('QS_MARKET_02', 'Market', ['spec_drift_discount'], 'Customer expectations are often discussed verbally.', 'Customer expectations are documented (drawings, finishes, timelines).', 1.2),

  q('QS_LEAD_01', 'Leadership', ['decision_bottleneck'], 'The owner must approve most decisions to avoid mistakes.', 'Trusted staff have clear decision limits to keep work moving.', 1.1),
  q('QS_LEAD_02', 'Leadership', ['no_variance_review'], 'Problems are fixed when they appear, even if they repeat.', 'Problems are fixed at the root cause so they stop repeating.', 1.0),

  q('QS_INNOV_01', 'Innovation', ['sku_complexity_tax'], 'Every job is custom and built from scratch.', 'We have standard modular designs and add premium custom upgrades.', 1.1),
  q('QS_INNOV_02', 'Innovation', ['slow_bug_fix'], 'We rarely build templates and jigs unless forced.', 'We build jigs and templates because they reduce waste and speed up work.', 1.0),

  q('QS_RISK_01', 'Risk', ['contract_gap'], 'We rely on trust and verbal agreements with clients.', 'We use a simple contract + change order rules to avoid disputes.', 1.2),
  q('QS_RISK_02', 'Risk', ['order_fulfillment_instability'], 'Packing is done quickly at the end.', 'Packing follows a standard to prevent delivery damage.', 1.1),

  q('QS_PEOPLE_01', 'People', ['training_gap'], 'Quality depends on one or two skilled people.', 'Quality is protected by checklists and training for everyone.', 1.0),
  q('QS_PEOPLE_02', 'People', ['onboarding_gap'], 'Apprentices learn mainly by watching and trying.', 'Apprentices learn through structured stages to reduce waste.', 1.0),

  // DEEP SCAN (10 per pillar)
  // Operations
  q('DS_OPS_01', 'Operations', ['waste_not_costed'], 'We rarely plan cutting layouts; we cut as we go.', 'We use cutting plans to reduce offcuts.', 1.1),
  q('DS_OPS_02', 'Operations', ['measurement_blindspot'], 'Measurements are checked once.', 'Measurements are verified before cutting.', 1.1),
  q('DS_OPS_03', 'Operations', ['quality_built_late'], 'Rework happens and is normal.', 'Rework is treated as a profit leak to eliminate.', 1.1),
  q('DS_OPS_04', 'Operations', ['measurement_blindspot'], 'Jobs are not tracked stage-by-stage.', 'Jobs use job cards and progress tracking.', 1.0),
  q('DS_OPS_05', 'Operations', ['flow_instability'], 'Workshop layout is based on tradition.', 'Workshop layout is based on flow and efficiency.', 1.0),
  q('DS_OPS_06', 'Operations', ['reactive_maintenance'], 'Tools are fixed when they break.', 'Tools are maintained to prevent downtime.', 1.0),
  q('DS_OPS_07', 'Operations', ['planning_gap'], 'Material shortages happen mid-job.', 'Material readiness is checked before starting.', 1.0),
  q('DS_OPS_08', 'Operations', ['bottleneck_bounce'], 'Finishing is unpredictable.', 'Finishing is scheduled with controlled stages.', 1.0),
  q('DS_OPS_09', 'Operations', ['quality_built_late'], 'Quality checks happen at the end.', 'Quality checks happen at each stage.', 1.1),
  q('DS_OPS_10', 'Operations', ['order_fulfillment_instability'], 'Packing is rushed.', 'Packing is standardized to prevent damage.', 1.0),

  // Money
  q('DS_MONEY_01', 'Money', ['costing_gap'], 'Pricing is mostly market-based.', 'Pricing is cost-based with profit margins.', 1.2),
  q('DS_MONEY_02', 'Money', ['waste_not_costed'], 'Hidden consumables are not tracked.', 'Consumables are tracked in job costing.', 1.1),
  q('DS_MONEY_03', 'Money', ['cashflow_visibility_gap'], 'We start without deposits sometimes.', 'Deposits are mandatory.', 1.1),
  q('DS_MONEY_04', 'Money', ['pricing_margin_blindspot'], 'Scope changes are handled casually.', 'Scope changes require change orders.', 1.0),
  q('DS_MONEY_05', 'Money', ['costing_gap'], 'Labor time is not tracked per job.', 'Labor time is tracked per job.', 1.0),
  q('DS_MONEY_06', 'Money', ['purchase_panic'], 'Timber is bought whenever money is available.', 'Timber purchasing follows a plan and cash forecast.', 1.0),
  q('DS_MONEY_07', 'Money', ['supplier_variance_risk'], 'Supplier price changes surprise us.', 'Price changes are planned and negotiated.', 0.9),
  q('DS_MONEY_08', 'Money', ['pricing_margin_blindspot'], 'We judge success by sales volume.', 'We judge success by profit per job.', 1.1),
  q('DS_MONEY_09', 'Money', ['waste_not_costed'], 'Rework cost is ignored.', 'Rework cost is measured and reduced.', 1.0),
  q('DS_MONEY_10', 'Money', ['cashflow_visibility_gap'], 'Business and personal finances mix.', 'Finances are separated.', 1.0),

  // Market
  q('DS_MARKET_01', 'Market', ['spec_drift_discount'], 'Client specs are mostly verbal.', 'Specs are documented with drawings and finish details.', 1.2),
  q('DS_MARKET_02', 'Market', ['order_fulfillment_instability'], 'Late delivery is common.', 'Delivery promises are protected by planning.', 1.1),
  q('DS_MARKET_03', 'Market', ['pricing_positioning_gap'], 'We compete mostly on price.', 'We compete on quality and reliability.', 1.1),
  q('DS_MARKET_04', 'Market', ['measurement_blindspot'], 'We do not track quote-to-deposit conversion.', 'We track conversion and improve closing.', 1.0),
  q('DS_MARKET_05', 'Market', ['low_repeat_orders'], 'We rely on referrals passively.', 'We actively ask for referrals and reviews.', 1.0),
  q('DS_MARKET_06', 'Market', ['pricing_positioning_gap'], 'We do not have product tiers.', 'We offer tiers (standard/premium) to protect margin.', 0.9),
  q('DS_MARKET_07', 'Market', ['weak_onboarding'], 'Customer updates are irregular.', 'Customer updates are proactive and scheduled.', 0.9),
  q('DS_MARKET_08', 'Market', ['complaint_handling_gap'], 'Complaints are handled slowly.', 'Complaints are closed fast with fixes.', 1.0),
  q('DS_MARKET_09', 'Market', ['weak_proof_pack'], 'Portfolio is informal.', 'Portfolio is structured proof that sells.', 1.0),
  q('DS_MARKET_10', 'Market', ['value_story_gap'], 'Client selection is random.', 'We target clients aligned to our price and quality.', 0.9),

  // Leadership
  q('DS_LEAD_01', 'Leadership', ['decision_bottleneck'], 'Owner approves most decisions.', 'Decisions are delegated with limits.', 1.1),
  q('DS_LEAD_02', 'Leadership', ['priority_whiplash'], 'Planning is reactive.', 'Planning is routine and forward-looking.', 1.0),
  q('DS_LEAD_03', 'Leadership', ['role_clarity_gap'], 'Roles are flexible and unclear.', 'Roles are clear and owned.', 1.0),
  q('DS_LEAD_04', 'Leadership', ['no_accountability_loop'], 'Deadlines drift.', 'Deadlines are tracked and protected.', 1.0),
  q('DS_LEAD_05', 'Leadership', ['no_variance_review'], 'Problems repeat.', 'Problems are closed to root cause.', 1.1),
  q('DS_LEAD_06', 'Leadership', ['weak_goal_alignment'], 'Quality depends on the best worker.', 'Quality is protected by standards.', 1.0),
  q('DS_LEAD_07', 'Leadership', ['no_meeting_to_action'], 'Meetings do not lead to action.', 'Meetings produce owners and deadlines.', 1.0),
  q('DS_LEAD_08', 'Leadership', ['planning_gap'], 'Capacity is not considered before taking orders.', 'Capacity planning controls intake.', 1.0),
  q('DS_LEAD_09', 'Leadership', ['blame_culture'], 'Mistakes lead to blame.', 'Mistakes lead to systems improvement.', 1.0),
  q('DS_LEAD_10', 'Leadership', ['hiring_mismatch'], 'Apprentices are unmanaged.', 'Apprentices are coached systematically.', 0.9),

  // Innovation
  q('DS_INNOV_01', 'Innovation', ['sku_complexity_tax'], 'Every job is built from scratch.', 'Standard modular designs speed delivery.', 1.1),
  q('DS_INNOV_02', 'Innovation', ['slow_bug_fix'], 'Jigs and templates are rare.', 'Jigs and templates are used for accuracy and speed.', 1.0),
  q('DS_INNOV_03', 'Innovation', ['no_product_testing_rhythm'], 'Designs change slowly.', 'Designs evolve based on market demand.', 1.0),
  q('DS_INNOV_04', 'Innovation', ['pack_size_profit_blindspot'], 'Fittings are chosen for low price.', 'Fittings are chosen for durability and value.', 1.0),
  q('DS_INNOV_05', 'Innovation', ['quality_definition_gap'], 'Finishing quality varies.', 'Finishing standards are consistent.', 1.0),
  q('DS_INNOV_06', 'Innovation', ['slow_bug_fix'], 'Waste stays the same yearly.', 'Waste is reduced through improvement cycles.', 1.0),
  q('DS_INNOV_07', 'Innovation', ['no_product_testing_rhythm'], 'Prototypes are not tested.', 'Prototypes are tested before selling.', 0.9),
  q('DS_INNOV_08', 'Innovation', ['no_market_feedback_loop'], 'No service innovation.', 'Installation and warranty add value and margin.', 0.9),
  q('DS_INNOV_09', 'Innovation', ['no_market_feedback_loop'], 'Learning stays in heads.', 'Learning becomes SOPs.', 0.9),
  q('DS_INNOV_10', 'Innovation', ['low_margin_skus'], 'Product mix is random.', 'Product mix is optimized by profit.', 1.0),

  // Risk
  q('DS_RISK_01', 'Risk', ['contract_gap'], 'Agreements are informal.', 'Contracts and change orders protect both sides.', 1.2),
  q('DS_RISK_02', 'Risk', ['hygiene_drift'], 'Safety is casual.', 'Safety procedures are enforced.', 1.0),
  q('DS_RISK_03', 'Risk', ['traceability_gap'], 'Tool loss is expected.', 'Tools are controlled and tracked.', 1.0),
  q('DS_RISK_04', 'Risk', ['payment_delay_chokehold'], 'Payment tracking is informal.', 'Payment tracking is disciplined.', 1.0),
  q('DS_RISK_05', 'Risk', ['order_fulfillment_instability'], 'Delivery damage is common.', 'Packing and acceptance sign-off reduce disputes.', 1.0),
  q('DS_RISK_06', 'Risk', ['supplier_variance_risk'], 'Timber seasoning and quality is ignored.', 'Timber quality is controlled to prevent warping.', 1.0),
  q('DS_RISK_07', 'Risk', ['contract_gap'], 'Disputes are handled emotionally.', 'Disputes are handled with documentation.', 1.0),
  q('DS_RISK_08', 'Risk', ['disaster_recovery_gap'], 'Fire risk is ignored.', 'Fire safety is managed.', 1.0),
  q('DS_RISK_09', 'Risk', ['insurance_gap'], 'Liability is not considered.', 'Liability is planned.', 0.9),
  q('DS_RISK_10', 'Risk', ['data_security_gap'], 'Records are scattered.', 'Records are centralized.', 0.9),

  // People
  q('DS_PEOPLE_01', 'People', ['training_gap'], 'Skills vary widely.', 'Skills are standardized and trained.', 1.1),
  q('DS_PEOPLE_02', 'People', ['onboarding_gap'], 'Apprentices learn by guessing.', 'Apprentices learn by structured steps.', 1.0),
  q('DS_PEOPLE_03', 'People', ['cross_function_breakdown'], 'Fatigue is normal.', 'Fatigue is managed to prevent mistakes.', 1.0),
  q('DS_PEOPLE_04', 'People', ['blame_culture'], 'Shortcuts are tolerated.', 'Standards are enforced.', 1.0),
  q('DS_PEOPLE_05', 'People', ['hero_operator_dependence'], 'Turnover is accepted.', 'Retention is engineered.', 0.9),
  q('DS_PEOPLE_06', 'People', ['weak_shift_handover'], 'Communication is informal.', 'Handovers are disciplined.', 0.9),
  q('DS_PEOPLE_07', 'People', ['role_clarity_gap'], 'Quality is one person\'s job.', 'Quality is shared.', 1.0),
  q('DS_PEOPLE_08', 'People', ['cross_function_breakdown'], 'Attendance issues disrupt flow.', 'Attendance is planned and supported.', 0.9),
  q('DS_PEOPLE_09', 'People', ['low_psych_safety'], 'Morale issues are ignored.', 'Morale is monitored.', 0.9),
  q('DS_PEOPLE_10', 'People', ['role_clarity_gap'], 'Performance is vague.', 'Performance is measured.', 1.0)
];
