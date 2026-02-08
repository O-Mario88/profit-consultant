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
  q('QS_OPS_01', 'Operations', ['yield_bleed'], 'We focus on producing volume; waste is part of the game.', 'We focus on yield and first-pass quality because waste is lost profit.', 1.2),
  q('QS_OPS_02', 'Operations', ['changeover_black_hole'], 'Changeovers and downtime are expected.', 'Changeovers and downtime are attacked because they steal capacity.', 1.1),

  q('QS_MONEY_01', 'Money', ['costing_gap'], 'We price based on competitors and demand.', 'We price with clear COGS and margin targets by SKU.', 1.2),
  q('QS_MONEY_02', 'Money', ['cashflow_visibility_gap'], 'We measure success by sales and production activity.', 'We measure success by margin, cash flow, and inventory turns.', 1.1),

  q('QS_MARKET_01', 'Market', ['order_fulfillment_instability'], 'Occasional stockouts happen; customers adjust.', 'Stockouts are treated as lost future revenue and shelf trust.', 1.2),
  q('QS_MARKET_02', 'Market', ['discounting_leak'], 'Promotions are mainly to push volume.', 'Promotions must protect margin and repeat buying.', 1.0),

  q('QS_LEAD_01', 'Leadership', ['no_variance_review'], 'Issues are solved when they appear.', 'Issues are solved at root cause so they do not repeat.', 1.0),
  q('QS_LEAD_02', 'Leadership', ['weak_goal_alignment'], 'Quality is mainly a QA department responsibility.', 'Quality is everyone\'s responsibility on the line.', 1.1),

  q('QS_INNOV_01', 'Innovation', ['no_product_testing_rhythm'], 'We keep products stable to avoid risk.', 'We improve products and processes to protect margin and relevance.', 1.0),
  q('QS_INNOV_02', 'Innovation', ['pack_size_profit_blindspot'], 'Packaging is mostly aesthetics.', 'Packaging is profit: shelf impact, protection, and trust.', 1.0),

  q('QS_RISK_01', 'Risk', ['traceability_gap'], 'Traceability is handled when there is a problem.', 'Traceability is always ready because one incident can kill trust.', 1.2),
  q('QS_RISK_02', 'Risk', ['supplier_variance_risk'], 'Supplier issues are handled case-by-case.', 'Supplier quality is controlled because inputs decide output quality.', 1.1),

  q('QS_PEOPLE_01', 'People', ['training_gap'], 'Skill levels vary by shift; experienced staff carry the line.', 'Skills are standardized through training so output is consistent.', 1.0),
  q('QS_PEOPLE_02', 'People', ['cross_function_breakdown'], 'Overtime is normal during high demand.', 'Fatigue is controlled because tired teams create defects and waste.', 1.0),

  // DEEP SCAN (10 per pillar)
  // Operations
  q('DS_OPS_01', 'Operations', ['measurement_blindspot'], 'We track output mainly by quantity produced.', 'We track output by OEE, yield, and first-pass quality.', 1.1),
  q('DS_OPS_02', 'Operations', ['yield_bleed'], 'Scrap is accepted as part of production.', 'Scrap is measured and reduced systematically.', 1.1),
  q('DS_OPS_03', 'Operations', ['quality_built_late'], 'Rework happens often.', 'Rework is treated as a cost emergency.', 1.1),
  q('DS_OPS_04', 'Operations', ['changeover_black_hole'], 'Changeover time is not measured.', 'Changeover time is measured and improved.', 1.0),
  q('DS_OPS_05', 'Operations', ['no_stop_codes'], 'Downtime causes are not consistently logged.', 'Downtime is logged and prevented with PM.', 1.0),
  q('DS_OPS_06', 'Operations', ['bottleneck_bounce'], 'Bottlenecks are handled informally.', 'Bottlenecks are identified and line-balanced.', 1.0),
  q('DS_OPS_07', 'Operations', ['inventory_blindspot'], 'Raw and packaging shortages surprise us.', 'Min/max reorder rules prevent surprises.', 1.0),
  q('DS_OPS_08', 'Operations', ['weak_shift_handover'], 'Batch records are inconsistent.', 'Batch records are complete and audit-ready.', 0.9),
  q('DS_OPS_09', 'Operations', ['quality_built_late'], 'Quality checks happen mostly at the end.', 'Quality checks happen in-process.', 1.0),
  q('DS_OPS_10', 'Operations', ['planning_gap'], 'Planning is reactive to orders.', 'Planning balances demand, inventory, and shelf life.', 1.0),

  // Money
  q('DS_MONEY_01', 'Money', ['costing_gap'], 'We do not know true COGS per SKU.', 'We know COGS and margin per SKU.', 1.2),
  q('DS_MONEY_02', 'Money', ['pricing_margin_blindspot'], 'Pricing decisions are mostly market-driven.', 'Pricing decisions are cost + value + margin driven.', 1.1),
  q('DS_MONEY_03', 'Money', ['cashflow_visibility_gap'], 'Inventory levels are whatever we have.', 'Inventory is managed to optimize cash and avoid expiry.', 1.0),
  q('DS_MONEY_04', 'Money', ['shrinkage_leak'], 'Shrinkage and expiry are not tracked in money terms.', 'Shrinkage and expiry are tracked as UGX loss.', 1.1),
  q('DS_MONEY_05', 'Money', ['zombie_costs'], 'Overtime is common and not deeply analyzed.', 'Overtime is treated as a measurable cost driver.', 1.0),
  q('DS_MONEY_06', 'Money', ['energy_burn_spiral'], 'Utility costs are not linked to production efficiency.', 'Utilities are tracked per unit, shift, and line.', 1.0),
  q('DS_MONEY_07', 'Money', ['discounting_leak'], 'Discounting is used to hit targets.', 'Discounting is tested against margin impact.', 1.0),
  q('DS_MONEY_08', 'Money', ['supplier_variance_risk'], 'Supplier terms are not performance-based.', 'Supplier terms are negotiated with scorecards.', 0.9),
  q('DS_MONEY_09', 'Money', ['cashflow_visibility_gap'], 'Cash flow planning is informal.', 'Cash flow is forecasted with working capital controls.', 1.0),
  q('DS_MONEY_10', 'Money', ['pricing_margin_blindspot'], 'Profit is judged by sales.', 'Profit is judged by margin and cash.', 1.1),

  // Market
  q('DS_MARKET_01', 'Market', ['order_fulfillment_instability'], 'Stockouts are normal.', 'Stockouts are treated as future revenue loss.', 1.1),
  q('DS_MARKET_02', 'Market', ['complaint_handling_gap'], 'Complaints are handled ad hoc.', 'Complaints are tracked by SKU and closed fast.', 1.0),
  q('DS_MARKET_03', 'Market', ['discounting_leak'], 'Promo success is judged by volume.', 'Promo success is judged by margin and repeat purchase.', 1.0),
  q('DS_MARKET_04', 'Market', ['channel_dependency'], 'Distribution relies on one partner heavily.', 'Distribution risk is diversified.', 1.1),
  q('DS_MARKET_05', 'Market', ['weak_proof_pack'], 'Packaging issues are tolerated.', 'Packaging is optimized for shelf trust and protection.', 1.0),
  q('DS_MARKET_06', 'Market', ['order_fulfillment_instability'], 'Delivery reliability varies.', 'Delivery reliability is measured and improved.', 1.0),
  q('DS_MARKET_07', 'Market', ['complaint_handling_gap'], 'Returns are not analyzed by root cause.', 'Returns are analyzed and prevented.', 0.9),
  q('DS_MARKET_08', 'Market', ['measurement_blindspot'], 'We do not track sell-through.', 'We track sell-through and adjust production.', 0.9),
  q('DS_MARKET_09', 'Market', ['value_story_gap'], 'Brand promise is assumed.', 'Brand promise is protected by consistency.', 1.0),
  q('DS_MARKET_10', 'Market', ['pricing_positioning_gap'], 'We compete mostly on price.', 'We compete on trust and quality.', 1.0),

  // Leadership
  q('DS_LEAD_01', 'Leadership', ['no_variance_review'], 'Problems are fixed when they appear.', 'Problems are fixed at root cause.', 1.0),
  q('DS_LEAD_02', 'Leadership', ['no_kpi_ownership'], 'KPIs are reviewed but actions lag.', 'KPI reviews close actions fast.', 1.0),
  q('DS_LEAD_03', 'Leadership', ['weak_goal_alignment'], 'Quality is mostly QA\'s job.', 'Quality is everybody\'s job.', 1.0),
  q('DS_LEAD_04', 'Leadership', ['no_accountability_loop'], 'Shift ownership is unclear.', 'Shift ownership is clear and measured.', 1.0),
  q('DS_LEAD_05', 'Leadership', ['hiring_mismatch'], 'Training is informal.', 'Training is structured and verified.', 0.9),
  q('DS_LEAD_06', 'Leadership', ['decision_bottleneck'], 'Decisions require many approvals.', 'Decisions are fast within clear limits.', 0.9),
  q('DS_LEAD_07', 'Leadership', ['no_meeting_to_action'], 'Meeting outcomes are unclear.', 'Meetings produce owners and deadlines.', 1.0),
  q('DS_LEAD_08', 'Leadership', ['no_product_testing_rhythm'], 'Continuous improvement happens sometimes.', 'Continuous improvement happens weekly with tracking.', 0.9),
  q('DS_LEAD_09', 'Leadership', ['blame_culture'], 'Blame prevents truth.', 'Truth is rewarded to prevent repeats.', 0.9),
  q('DS_LEAD_10', 'Leadership', ['hero_operator_dependence'], 'Factory depends on a hero.', 'Factory runs on systems.', 1.0),

  // Innovation
  q('DS_INNOV_01', 'Innovation', ['no_product_testing_rhythm'], 'We rarely change products.', 'We evolve products for margin and market fit.', 1.0),
  q('DS_INNOV_02', 'Innovation', ['no_product_testing_rhythm'], 'New products are launched based on opinions.', 'New products are validated before scaling.', 1.0),
  q('DS_INNOV_03', 'Innovation', ['pack_size_profit_blindspot'], 'Packaging is mostly aesthetic.', 'Packaging is a profit lever (protection + trust).', 1.0),
  q('DS_INNOV_04', 'Innovation', ['slow_bug_fix'], 'Process improvements are not tracked.', 'Process improvements have KPIs and ROI.', 1.0),
  q('DS_INNOV_05', 'Innovation', ['no_market_feedback_loop'], 'Ideas are not systemized.', 'Ideas are captured and implemented through CI.', 0.9),
  q('DS_INNOV_06', 'Innovation', ['sku_complexity_tax'], 'SKU mix is not optimized.', 'SKU mix prioritizes margin and capacity.', 1.0),
  q('DS_INNOV_07', 'Innovation', ['no_product_testing_rhythm'], 'Trials are informal.', 'Trials are documented and learnings stored.', 0.9),
  q('DS_INNOV_08', 'Innovation', ['no_market_feedback_loop'], 'Competitor moves are ignored.', 'Competitor moves inform innovation.', 0.9),
  q('DS_INNOV_09', 'Innovation', ['low_margin_skus'], 'Value-add is not explored.', 'Value-add (premium tiers, pack sizes) is explored.', 1.0),
  q('DS_INNOV_10', 'Innovation', ['no_market_feedback_loop'], 'Learning stays in heads.', 'Learning becomes SOPs.', 0.9),

  // Risk
  q('DS_RISK_01', 'Risk', ['traceability_gap'], 'Traceability is handled only when there is an issue.', 'Traceability is always ready.', 1.2),
  q('DS_RISK_02', 'Risk', ['supplier_variance_risk'], 'Supplier quality issues are reactive.', 'Supplier quality issues are prevented by controls.', 1.1),
  q('DS_RISK_03', 'Risk', ['hygiene_drift'], 'Hygiene controls vary with workload.', 'Hygiene controls are consistent and documented.', 1.0),
  q('DS_RISK_04', 'Risk', ['measurement_blindspot'], 'Temperature and storage checks are irregular.', 'Temperature and storage checks are logged.', 1.0),
  q('DS_RISK_05', 'Risk', ['compliance_blocker_risk'], 'Audit readiness is stressful.', 'Audit readiness is routine.', 1.0),
  q('DS_RISK_06', 'Risk', ['label_risk'], 'Labeling compliance is assumed.', 'Labeling compliance is verified.', 1.0),
  q('DS_RISK_07', 'Risk', ['disaster_recovery_gap'], 'Recall plan is unclear.', 'Recall plan is tested.', 1.0),
  q('DS_RISK_08', 'Risk', ['data_security_gap'], 'Data access is informal.', 'Data access is controlled.', 0.9),
  q('DS_RISK_09', 'Risk', ['insurance_gap'], 'Liability is assumed covered.', 'Liability is planned and documented.', 0.9),
  q('DS_RISK_10', 'Risk', ['contract_gap'], 'Risk is addressed when it happens.', 'Risk is prevented through systems.', 1.0),

  // People
  q('DS_PEOPLE_01', 'People', ['training_gap'], 'Skill depends on who is on shift.', 'Skill is standardized through training.', 1.1),
  q('DS_PEOPLE_02', 'People', ['weak_shift_handover'], 'Shift handovers are informal.', 'Shift handovers follow a standard.', 1.0),
  q('DS_PEOPLE_03', 'People', ['cross_function_breakdown'], 'Overtime is expected during peak.', 'Overtime is controlled to prevent defects.', 1.0),
  q('DS_PEOPLE_04', 'People', ['onboarding_gap'], 'New hires learn by watching.', 'New hires learn by structured onboarding.', 0.9),
  q('DS_PEOPLE_05', 'People', ['role_clarity_gap'], 'Standards slip when busy.', 'Standards survive busy periods.', 1.0),
  q('DS_PEOPLE_06', 'People', ['fear_index'], 'Supervisors manage by pressure.', 'Supervisors manage by coaching and KPIs.', 0.9),
  q('DS_PEOPLE_07', 'People', ['blame_culture'], 'Defects are hidden to avoid blame.', 'Defects are reported early to protect profit.', 1.0),
  q('DS_PEOPLE_08', 'People', ['blame_culture'], 'Incentives prioritize speed.', 'Incentives prioritize yield, safety, and quality.', 1.0),
  q('DS_PEOPLE_09', 'People', ['role_clarity_gap'], 'Performance measures are unclear.', 'Performance measures are clear.', 0.9),
  q('DS_PEOPLE_10', 'People', ['hero_operator_dependence'], 'Turnover is accepted.', 'Retention is engineered.', 0.9)
];
