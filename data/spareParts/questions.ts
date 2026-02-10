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
  industry: 'retail',
  line_type,
  pillar,
  signal_tags,
  weight,
  textA,
  textB
});

export const questions: QuestionDefinition[] = [
  // QUICK SCAN (2 per pillar)
  q(
    'QS_OPS_01',
    'Operations',
    ['inventory_accuracy_gap', 'no_standard_work'],
    'I confirm a part by looking at the old sample part first.',
    'I confirm a part by asking model, year, and engine details first.',
    1.1
  ),
  q(
    'QS_OPS_02',
    'Operations',
    ['stockout_tax', 'restock_delay'],
    'Fast movers are reordered when shelves look low.',
    'Fast movers are reordered using a simple minimum level.',
    1.0
  ),

  q(
    'QS_MONEY_01',
    'Money',
    ['pricing_margin_blindspot', 'category_margin_blindspot'],
    'I feel a day was good when sales were many.',
    'I feel a day was good when margin stayed healthy.',
    1.0
  ),
  q(
    'QS_MONEY_02',
    'Money',
    ['discounting_leak', 'pricing_inconsistency'],
    'Discounts depend on the customer situation.',
    'Discounts follow small bands and scripts.',
    1.0
  ),

  q(
    'QS_MARKET_01',
    'Market',
    ['channel_dependency', 'low_repeat_orders'],
    'Mechanics buy from whoever has the part today.',
    'Mechanics buy from whoever makes buying easy and reliable.',
    1.0
  ),
  q(
    'QS_MARKET_02',
    'Market',
    ['weak_onboarding', 'followup_gap'],
    'WhatsApp inquiries are answered when we are free.',
    'WhatsApp inquiries follow quick reply templates.',
    1.0
  ),

  q(
    'QS_LEAD_01',
    'Leadership',
    ['approval_bottleneck', 'decision_bottleneck'],
    'Returns and discount exceptions need my approval.',
    'Returns and discount exceptions follow clear limits.',
    1.0
  ),
  q(
    'QS_LEAD_02',
    'Leadership',
    ['no_variance_review', 'no_meeting_to_action'],
    'When mistakes happen, we fix quickly and continue.',
    'When mistakes happen, we adjust the process slightly.',
    1.0
  ),

  q(
    'QS_INNOV_01',
    'Innovation',
    ['bundle_engine_missing'],
    'Customers usually buy one part at a time.',
    'Customers often buy a job kit (service, brake, etc.).',
    1.0
  ),
  q(
    'QS_INNOV_02',
    'Innovation',
    ['no_testing_rhythm', 'supplier_selection_undisciplined'],
    'New stock lines are added when I see demand.',
    'New lines are micro-tested before scaling.',
    1.0
  ),

  q(
    'QS_RISK_01',
    'Risk',
    ['supplier_doc_gap', 'supplier_selection_undisciplined'],
    'Supplier trust is based on relationship and history.',
    'Supplier trust includes simple verification habits.',
    1.0
  ),
  q(
    'QS_RISK_02',
    'Risk',
    ['policy_vagueness', 'contract_gap'],
    'Warranty and returns are handled case-by-case.',
    'Warranty and returns follow clear rules.',
    1.0
  ),

  q(
    'QS_PEOPLE_01',
    'People',
    ['training_gap', 'onboarding_gap'],
    'Staff learn fitment mainly by experience and shadowing.',
    'Staff learn fitment with checklist plus scripts.',
    1.0
  ),
  q(
    'QS_PEOPLE_02',
    'People',
    ['incentive_misalignment', 'accountability_soft'],
    'Staff performance is judged mainly by sales volume.',
    'Staff performance includes accuracy and low returns.',
    1.0
  ),

  // DEEP SCAN (10 per pillar)
  // Operations (OPS01-OPS10)
  q(
    'DS_OPS_01',
    'Operations',
    ['inventory_accuracy_gap', 'no_standard_work'],
    'We confirm fitment mainly using the old part sample.',
    'We confirm fitment using model, year, and engine first.'
  ),
  q(
    'DS_OPS_02',
    'Operations',
    ['training_gap', 'hero_staff_dependence'],
    'Compatibility knowledge is mostly in people’s heads.',
    'Compatibility is supported by a fitment sheet and catalog.'
  ),
  q(
    'DS_OPS_03',
    'Operations',
    ['receiving_slippage', 'inventory_accuracy_gap'],
    'Receiving is fast so parts reach shelves quickly.',
    'Receiving includes counting, labeling, and bin location.'
  ),
  q(
    'DS_OPS_04',
    'Operations',
    ['stockout_tax', 'restock_delay'],
    'Stockouts are noticed when customers ask.',
    'Stockouts are noticed through Top 50 checks.'
  ),
  q(
    'DS_OPS_05',
    'Operations',
    ['restock_delay', 'purchase_panic'],
    'Reorder decisions happen when shelves look low.',
    'Reorder decisions follow min and max levels.'
  ),
  q(
    'DS_OPS_06',
    'Operations',
    ['inventory_accuracy_gap'],
    'Parts are stored by general category only.',
    'Parts are stored by category plus bin codes for speed.'
  ),
  q(
    'DS_OPS_07',
    'Operations',
    ['policy_vagueness', 'shrinkage_leak'],
    'Returns can go back to shelf if they look okay.',
    'Returns pass through quarantine checks.'
  ),
  q(
    'DS_OPS_08',
    'Operations',
    ['dispatch_delivery_instability', 'weak_onboarding'],
    'Online orders are packed from chat memory.',
    'Online orders follow a pick checklist plus photo proof.'
  ),
  q(
    'DS_OPS_09',
    'Operations',
    ['no_standard_work', 'supplier_variance_risk'],
    'Substitutes are offered based on what is available.',
    'Substitutes follow a planned equivalence list.'
  ),
  q(
    'DS_OPS_10',
    'Operations',
    ['hero_staff_dependence'],
    'If one key staff is away, operations slow.',
    'The system runs consistently regardless of staff.'
  ),

  // Money (MNY01-MNY10)
  q(
    'DS_MONEY_01',
    'Money',
    ['pricing_margin_blindspot', 'pricing_inconsistency'],
    'Pricing is based on what other shops charge.',
    'Pricing starts from cost plus target margins.'
  ),
  q(
    'DS_MONEY_02',
    'Money',
    ['discounting_leak'],
    'Discounts are used to close the deal.',
    'Discounts follow bands and scripts.'
  ),
  q(
    'DS_MONEY_03',
    'Money',
    ['category_margin_blindspot', 'pricing_margin_blindspot'],
    'Profit is assumed if sales are high.',
    'Profit is tracked by category and leak drivers.'
  ),
  q(
    'DS_MONEY_04',
    'Money',
    ['credit_terms_risk'],
    'Credit is given to keep garage relationships.',
    'Credit is limited, tracked, and enforced.'
  ),
  q(
    'DS_MONEY_05',
    'Money',
    ['payment_delay_chokehold', 'credit_terms_risk'],
    'Debtors are chased when they delay too much.',
    'Debtors follow a routine collections cadence.'
  ),
  q(
    'DS_MONEY_06',
    'Money',
    ['slow_mover_attachment', 'purchase_panic'],
    'Dead stock sits until someone needs it.',
    'Dead stock triggers a release plan.'
  ),
  q(
    'DS_MONEY_07',
    'Money',
    ['cash_recon_gap'],
    'Cash and momo are reviewed when something feels off.',
    'Cash and momo are reconciled daily.'
  ),
  q(
    'DS_MONEY_08',
    'Money',
    ['supplier_selection_undisciplined', 'purchase_panic'],
    'Buying is driven by supplier suggestions and trends.',
    'Buying is driven by your own sell-through data.'
  ),
  q(
    'DS_MONEY_09',
    'Money',
    ['purchase_panic', 'cashflow_visibility_gap'],
    'Large purchases happen when a good deal appears.',
    'Large purchases follow an open-to-buy plan.'
  ),
  q(
    'DS_MONEY_10',
    'Money',
    ['policy_vagueness', 'contract_gap'],
    'Refunds are used to calm conflicts quickly.',
    'Refunds follow clear terms and evidence.'
  ),

  // Market (MKT01-MKT10)
  q(
    'DS_MARKET_01',
    'Market',
    ['channel_dependency', 'low_repeat_orders'],
    'Mechanics come back if they liked the last deal.',
    'Mechanics come back because we manage them as accounts.'
  ),
  q(
    'DS_MARKET_02',
    'Market',
    ['value_story_gap', 'pricing_positioning_gap'],
    'Our shop sells all parts for all cars.',
    'Our shop is known for specific models and categories.'
  ),
  q(
    'DS_MARKET_03',
    'Market',
    ['weak_onboarding', 'followup_gap'],
    'Quotes are sent when staff are free.',
    'Quotes follow a fast response standard.'
  ),
  q(
    'DS_MARKET_04',
    'Market',
    ['followup_gap'],
    'We rely on walk-ins and referrals.',
    'We capture contacts and follow up.'
  ),
  q(
    'DS_MARKET_05',
    'Market',
    ['weak_proof_pack', 'supplier_doc_gap'],
    'Customers fear fakes but we reassure verbally.',
    'We show authenticity proof and warranty clarity.'
  ),
  q(
    'DS_MARKET_06',
    'Market',
    ['bundle_engine_missing'],
    'We rarely package job kits.',
    'We commonly package job kits.'
  ),
  q(
    'DS_MARKET_07',
    'Market',
    ['weak_onboarding', 'order_fulfillment_instability'],
    'Delivery happens when requested.',
    'Delivery is offered as a standard option.'
  ),
  q(
    'DS_MARKET_08',
    'Market',
    ['no_market_feedback_loop', 'channel_dependency'],
    'We do not track which mechanics buy most.',
    'We track top mechanics and their preferences.'
  ),
  q(
    'DS_MARKET_09',
    'Market',
    ['complaint_handling_gap', 'contract_gap'],
    'Returns are handled with negotiation.',
    'Returns are handled with rules and proof steps.'
  ),
  q(
    'DS_MARKET_10',
    'Market',
    ['pricing_positioning_gap', 'value_story_gap'],
    'We compete mostly on price.',
    'We compete on reliability, speed, and fitment confidence.'
  ),

  // Leadership (LDR01-LDR10)
  q(
    'DS_LEAD_01',
    'Leadership',
    ['kpi_cadence_gap'],
    'Targets are mostly in my head.',
    'Targets are visible and reviewed weekly.'
  ),
  q(
    'DS_LEAD_02',
    'Leadership',
    ['no_variance_review'],
    'I fix problems personally to protect quality.',
    'I improve the process to reduce repeats.'
  ),
  q(
    'DS_LEAD_03',
    'Leadership',
    ['approval_bottleneck', 'decision_bottleneck'],
    'Discounts and returns need approval often.',
    'Discounts and returns have clear limits.'
  ),
  q(
    'DS_LEAD_04',
    'Leadership',
    ['training_planning_gap'],
    'Training is mainly by shadowing.',
    'Training uses checklists and scripts.'
  ),
  q(
    'DS_LEAD_05',
    'Leadership',
    ['accountability_soft'],
    'Performance is judged by busyness.',
    'Performance is judged by outcomes and accuracy.'
  ),
  q(
    'DS_LEAD_06',
    'Leadership',
    ['meeting_no_action'],
    'Meetings align us.',
    'Dashboards reduce meetings.'
  ),
  q(
    'DS_LEAD_07',
    'Leadership',
    ['no_variance_review'],
    'Mistakes are corrected and forgotten.',
    'Mistakes trigger a small system improvement.'
  ),
  q(
    'DS_LEAD_08',
    'Leadership',
    ['role_clarity_gap'],
    'I delegate tasks.',
    'I delegate ownership outcomes.'
  ),
  q(
    'DS_LEAD_09',
    'Leadership',
    ['priority_whiplash'],
    'Priorities shift based on urgent requests.',
    'Priorities follow weekly plan.'
  ),
  q(
    'DS_LEAD_10',
    'Leadership',
    ['fear_silence'],
    'Feedback is avoided to keep peace.',
    'Feedback protects standards.'
  ),

  // Innovation (INN01-INN10)
  q(
    'DS_INNOV_01',
    'Innovation',
    ['bundle_engine_missing'],
    'We sell single parts most of the time.',
    'We sell job kits regularly.'
  ),
  q(
    'DS_INNOV_02',
    'Innovation',
    ['offer_measurement_gap', 'weak_onboarding'],
    'Catalog is handled via chat replies.',
    'Catalog exists by model and common jobs.'
  ),
  q(
    'DS_INNOV_03',
    'Innovation',
    ['no_testing_rhythm'],
    'We add new lines when we see demand.',
    'We micro-test before scaling.'
  ),
  q(
    'DS_INNOV_04',
    'Innovation',
    ['service_inconsistency'],
    'Delivery is optional and irregular.',
    'Delivery is systemized.'
  ),
  q(
    'DS_INNOV_05',
    'Innovation',
    ['bundle_engine_missing', 'slow_mover_attachment'],
    'We rarely use bundles to move slow stock.',
    'We bundle strategically to release cash.'
  ),
  q(
    'DS_INNOV_06',
    'Innovation',
    ['supplier_selection_undisciplined'],
    'We rely on the same suppliers mostly.',
    'We test supplier alternatives for reliability.'
  ),
  q(
    'DS_INNOV_07',
    'Innovation',
    ['no_market_feedback_loop'],
    'We do not track requested-but-missing items.',
    'We log missing requests to guide buying.'
  ),
  q(
    'DS_INNOV_08',
    'Innovation',
    ['bundle_engine_missing'],
    'We do not create model kits for common jobs.',
    'We create model kits for repeat buyers.'
  ),
  q(
    'DS_INNOV_09',
    'Innovation',
    ['pricing_positioning_gap', 'value_story_gap'],
    'We follow competitors’ trends.',
    'We create our own reliability advantage.'
  ),
  q(
    'DS_INNOV_10',
    'Innovation',
    ['complaint_handling_gap', 'no_market_feedback_loop'],
    'Customer complaints feel like conflict.',
    'Complaints are data to improve systems.'
  ),

  // Risk (RSK01-RSK10)
  q(
    'DS_RISK_01',
    'Risk',
    ['supplier_doc_gap', 'supplier_selection_undisciplined'],
    'Supplier trust is based on relationship and history.',
    'Supplier trust includes verification habits.'
  ),
  q(
    'DS_RISK_02',
    'Risk',
    ['weak_proof_pack', 'supplier_doc_gap'],
    'Authenticity is handled when customers ask.',
    'Authenticity is handled upfront with proof.'
  ),
  q(
    'DS_RISK_03',
    'Risk',
    ['policy_vagueness', 'contract_gap'],
    'Warranty is explained verbally.',
    'Warranty is documented consistently.'
  ),
  q(
    'DS_RISK_04',
    'Risk',
    ['contract_gap', 'policy_vagueness'],
    'Disputes are resolved by giving discounts or refunds quickly.',
    'Disputes are resolved using proof and rules.'
  ),
  q(
    'DS_RISK_05',
    'Risk',
    ['shrinkage_leak'],
    'High-value items are kept like normal stock.',
    'High-value items are locked and logged.'
  ),
  q(
    'DS_RISK_06',
    'Risk',
    ['policy_vagueness', 'contract_gap'],
    'Returns are judged by looks unused.',
    'Returns are quarantined and graded.'
  ),
  q(
    'DS_RISK_07',
    'Risk',
    ['cash_recon_gap'],
    'Cash close varies by day.',
    'Cash close follows a strict routine.'
  ),
  q(
    'DS_RISK_08',
    'Risk',
    ['shrinkage_leak'],
    'Access to stockroom is open.',
    'Access is controlled with roles.'
  ),
  q(
    'DS_RISK_09',
    'Risk',
    ['data_security_gap'],
    'Customer data is stored on personal phones.',
    'Customer data is stored securely with access control.'
  ),
  q(
    'DS_RISK_10',
    'Risk',
    ['supplier_doc_gap', 'no_variance_review'],
    'Counterfeit complaints are treated as bad luck.',
    'Counterfeit complaints trigger supplier review and controls.'
  ),

  // People (PPL01-PPL10)
  q(
    'DS_PEOPLE_01',
    'People',
    ['incentive_misalignment'],
    'Staff success is mainly sales volume.',
    'Staff success includes accuracy and returns control.'
  ),
  q(
    'DS_PEOPLE_02',
    'People',
    ['incentive_misalignment', 'discounting_leak'],
    'Staff discount to close quickly.',
    'Staff use scripts and discount bands.'
  ),
  q(
    'DS_PEOPLE_03',
    'People',
    ['service_inconsistency', 'training_gap'],
    'Fitment depends on who is on shift.',
    'Fitment uses checklists and sheets.'
  ),
  q(
    'DS_PEOPLE_04',
    'People',
    ['onboarding_gap', 'training_gap'],
    'Staff learn mainly by shadowing.',
    'Staff learn by checklist and coaching.'
  ),
  q(
    'DS_PEOPLE_05',
    'People',
    ['blame_culture'],
    'Mistakes lead to blame.',
    'Mistakes lead to system improvement.'
  ),
  q(
    'DS_PEOPLE_06',
    'People',
    ['training_gap', 'service_inconsistency'],
    'Staff avoid asking too many questions to seem confident.',
    'Staff ask key questions to prevent wrong fit.'
  ),
  q(
    'DS_PEOPLE_07',
    'People',
    ['blame_culture', 'accountability_soft'],
    'High performers bend rules.',
    'Standards are consistent for everyone.'
  ),
  q(
    'DS_PEOPLE_08',
    'People',
    ['bundle_engine_missing', 'training_gap'],
    'Staff rarely upsell kits.',
    'Staff offer kits naturally.'
  ),
  q(
    'DS_PEOPLE_09',
    'People',
    ['hero_staff_dependence'],
    'One strong staff carries most customers.',
    'The system performs regardless of staff.'
  ),
  q(
    'DS_PEOPLE_10',
    'People',
    ['service_inconsistency', 'policy_vagueness'],
    'Customer complaints are handled differently by each staff.',
    'Complaints follow a standard SOP.'
  )
];
