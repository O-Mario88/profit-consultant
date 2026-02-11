export type ViewState =
    | 'landing' | 'auth' | 'login' | 'signup' | 'diagnostic' | 'tribe_diagnostic'
    | 'catalog' | 'pricing' | 'search' | 'consultant_profile' | 'consultant_marketplace'
    | 'report_view' | 'hr_report' | 'partner_landing' | 'partner_pricing' | 'fix_mode'
    | 'mission_brief' | 'dashboard' | 'consultant_dashboard' | 'partner_dashboard'
    | 'action_lab' | 'second_brain' | 'ai_ad_studio' | 'locker' | 'settings'
    | 'blog_feed' | 'live_schedule' | 'live_session' | 'category' | 'course'
    | 'studio' | 'students' | 'ad_manager' | 'billing' | 'clients' | 'consultant_onboarding'
    | 'company_profile' | 'team' | 'admin_dashboard' | 'admin_verifications' | 'blog_editor'
    | 'diagnostic_result'
    | 'deep_scan_intro' | 'deep_scan_assessment' | 'deep_scan_result';

export type UserRole = 'student' | 'trainer' | 'consultant' | 'enterprise_admin' | 'admin' | 'partner';

export type RegionCode = 'US' | 'GB' | 'FR' | 'UG' | 'KE' | 'NG' | 'IN' | 'GLOBAL';
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'UGX' | 'KES' | 'NGN' | 'INR';
export type LanguageCode = 'en' | 'fr' | 'sw';
export type PricingTier = 1 | 2 | 3;

export interface LocaleProfile {
    country: RegionCode;
    currency: CurrencyCode;
    language: LanguageCode;
    pricingTier: PricingTier;
    contentRegion: string;
    regionGroup: string;
}

export interface PillarScores {
    operations: number;
    money: number;
    market: number;
    leadership: number;
    innovation: number;
    risk: number;
    people: number;
}

export interface DeepScanScores {
    pillars: Record<string, number>; // 0-100
    confidence: Record<string, 'High' | 'Med' | 'Low'>;
}

export interface DeepScanChapter {
    theory: string;
    diagnosis: string;
    psychology: string;
    financials: string;
    prescription: string;
}

// Standard Archetypes
export type Archetype =
    | 'The Sovereign' | 'The Uncrowned King' | 'The Iron General' | 'The Storm Survivor' | 'The Hidden Gem'
    // Aquaculture Archetypes
    | 'The Growth Chaser' | 'The Busy Operator' | 'The Market Taker' | 'The Fragile Winner' | 'The Silent Leak' | 'The Control Builder';

export interface LeakIndices {
    timeLeak: number;
    cashLeak: number;
    riskExposure: number;
}

export interface ImpactBand {
    level: 'Low' | 'Medium' | 'High';
    label: string;
    symptom: string;
}

export type PillarId = 'Operations' | 'Money' | 'Market' | 'Leadership' | 'Innovation' | 'Risk' | 'People';

export type SignalTag =
    // OPERATIONS (formerly Engine)
    | 'downtime_drain' | 'reactive_maintenance' | 'preventive_maintenance_gap' | 'changeover_black_hole' | 'bottleneck_bounce'
    | 'flow_instability' | 'manual_dependency' | 'no_stop_codes' | 'weak_shift_handover' | 'tooling_slowdown'
    | 'planning_gap' | 'wip_pileup' | 'no_standard_work' | 'quality_built_late' | 'measurement_blindspot'
    // MONEY (formerly Fuel)
    | 'yield_bleed' | 'shrinkage_leak' | 'underweight_giveaway' | 'inventory_blindspot' | 'energy_burn_spiral'
    | 'cashflow_visibility_gap' | 'pricing_margin_blindspot' | 'discounting_leak' | 'zombie_costs' | 'purchase_panic'
    | 'credit_terms_risk' | 'payment_delay_chokehold' | 'costing_gap' | 'supplier_variance_risk' | 'waste_not_costed'
    // MARKET (formerly Voice)
    | 'buyer_power_trap' | 'spec_drift_discount' | 'weak_proof_pack' | 'channel_dependency' | 'low_repeat_orders'
    | 'weak_onboarding' | 'complaint_handling_gap' | 'value_story_gap' | 'order_fulfillment_instability' | 'pricing_positioning_gap'
    // LEADERSHIP (formerly Brain)
    | 'management_by_memory' | 'no_kpi_ownership' | 'panic_scheduling' | 'priority_whiplash' | 'decision_bottleneck'
    | 'no_variance_review' | 'weak_goal_alignment' | 'no_meeting_to_action' | 'hiring_mismatch' | 'no_accountability_loop'
    // INNOVATION & CREATIVITY (formerly Pulse)
    | 'sku_complexity_tax' | 'low_margin_skus' | 'complaint_echo' | 'no_product_testing_rhythm' | 'pack_size_profit_blindspot'
    | 'quality_definition_gap' | 'slow_bug_fix' | 'no_market_feedback_loop'
    // RISK (formerly Shield)
    | 'hygiene_drift' | 'traceability_gap' | 'label_risk' | 'compliance_blocker_risk' | 'data_security_gap'
    | 'contract_gap' | 'insurance_gap' | 'tax_compliance_gap' | 'ip_brand_protection_gap' | 'disaster_recovery_gap'
    // PEOPLE (formerly Tribe)
    | 'hero_operator_dependence' | 'approval_bottleneck' | 'fear_index' | 'blame_culture' | 'training_gap'
    | 'onboarding_gap' | 'role_clarity_gap' | 'low_psych_safety' | 'meeting_theater' | 'cross_function_breakdown'
    // AGRI-INPUT SPECIFIC
    | 'stockout_tax' | 'queue_to_cash_lag' | 'warehouse_blindness' | 'seasonal_rush_chaos' | 'manual_dependency_trap'
    | 'margin_mirage' | 'credit_chokehold' | 'dead_stock_cemetery' | 'silent_shrink' | 'discount_addiction'
    | 'trust_leak' | 'one_channel_fragility' | 'advice_to_sale_gap' | 'repeat_order_drift' | 'reputation_risk_loop'
    | 'management_by_guessing' | 'priority_whiplash' | 'no_owner_syndrome' | 'procurement_panic_buying'
    // FARM MACHINERY & SERVICES TAGS
    | 'market_offer_positioning' | 'pricing_profit_model' | 'service_operations_dispatch'
    | 'fleet_reliability_maintenance' | 'parts_inventory_control' | 'people_safety_compliance'
    | 'finance_working_capital' | 'data_quality_ci'
    // CROP FARMING SPECIFIC
    | 'market_sales_revenue' | 'production_agronomy_yield' | 'post_harvest_loss_control'
    | 'inputs_procurement_cost' | 'finance_cashflow_survival' | 'people_labor_productivity'
    | 'systems_records_data' | 'risk_compliance_resilience'
    // CATTLE SPECIFIC
    | 'market_pricing_power' | 'herd_strategy_genetics' | 'nutrition_feed_system'
    | 'health_welfare_biosecurity' | 'operations_infrastructure' | 'people_daily_execution'
    | 'finance_cash_control' | 'records_data_compliance'
    // LEGACY CROP TAGS (Keep if needed, or deprecate later)
    | 'blind_pricing' | 'reactive_selling' | 'mixed_quality_loss' | 'reactive_planting' | 'late_response_risk'
    | 'panic_buying' | 'cheap_input_trap' | 'labor_idle_waste' | 'schedule_drift' | 'bulk_loss'
    | 'moisture_rot_risk' | 'transport_panic' | 'trust_gap' | 'blind_spend' | 'universal_cuts'
    | 'weather_blindness' | 'memory_management'
    | 'assortment_confusion' | 'bundle_blindspot' | 'seasonal_offer_stagnation'
    | 'counterfeit_exposure' | 'compliance_shock' | 'liability_landmine'
    | 'sales_without_standards' | 'ethics_drift' | 'hero_staff_dependence'
    // FARM MACHINERY & SERVICES TAGS (v2)
    | 'downtime_debt' | 'breakdown_tax' | 'dispatch_chaos' | 'spare_parts_blackhole' | 'route_waste'
    | 'job_card_blindness' | 'peak_season_overload' | 'margin_mirage' | 'fuel_burn_leak' | 'quotation_to_cash_lag'
    | 'deposit_discipline_gap' | 'underpricing_trap' | 'parts_markup_leakage' | 'credit_chokehold' | 'trust_collapse_moment'
    | 'seasonal_demand_miss' | 'service_promise_drift' | 'referral_engine_stall' | 'one_buyer_fragility' | 'management_by_whatsapp'
    | 'hero_owner_syndrome' | 'priority_whiplash' | 'no_owner_problem' | 'offer_stagnation' | 'bundle_blindspot'
    | 'data_driven_upsell_gap' | 'liability_landmine' | 'contract_exposure' | 'warranty_war' | 'compliance_shock'
    | 'operator_drift' | 'accountability_fog' | 'field_team_burnout' | 'culture_of_excuses'
    // NEW V1 PACK TAGS
    | 'inventory_accuracy_gap' | 'receiving_slippage' | 'restock_delay' | 'peak_season_chaos' | 'dispatch_delivery_instability'
    | 'expiry_rotation_gap' | 'returns_damage_blindspot' | 'category_margin_blindspot' | 'cash_recon_gap' | 'payment_terms_risk'
    | 'supplier_terms_weak' | 'pricing_inconsistency' | 'referral_weakness' | 'channel_dependency' | 'complaint_handling_gap'
    | 'value_story_gap' | 'followup_gap' | 'kpi_cadence_gap' | 'training_planning_gap' | 'forecasting_guesswork'
    | 'meeting_no_action' | 'role_clarity_gap' | 'supplier_selection_undisciplined' | 'sku_clutter' | 'bundle_engine_missing'
    | 'slow_mover_attachment' | 'no_testing_rhythm' | 'segment_blindspot' | 'offer_measurement_gap' | 'customer_experience_stagnation'
    | 'expiry_compliance_risk' | 'safe_handling_gap' | 'policy_vagueness' | 'credit_contract_gap' | 'supplier_doc_gap'
    | 'fear_silence' | 'cross_team_friction' | 'service_inconsistency' | 'peak_season_burnout' | 'accountability_soft'
    // PRODUCE AGGREGATION & TRADING TAGS
    | 'shrink_tax' | 'cold_chain_hole' | 'queue_to_rot_lag' | 'sorting_bottleneck' | 'truck_half_empty_syndrome' | 'weight_slip_drift'
    | 'dispatch_chaos' | 'margin_mirage' | 'price_shock_exposure' | 'cash_in_transit_risk' | 'supplier_payment_pressure' | 'hidden_fees_drain'
    | 'working_capital_trap' | 'buyer_power_trap' | 'quality_trust_gap' | 'rejected_load_nightmare' | 'relationship_moat' | 'spec_drift_penalty'
    | 'management_by_whatsapp' | 'no_owner_syndrome' | 'season_blindness' | 'procurement_panic' | 'numbers_free_decisions'
    | 'value_add_blindspot' | 'bundle_opportunity' | 'data_advantage_gap' | 'route_intelligence_missing'
    | 'traceability_gap' | 'contract_exposure' | 'compliance_shock' | 'theft_tamper_risk' | 'contamination_liability'
    | 'handling_damage_culture' | 'incentive_misfire' | 'field_agent_drift' | 'blame_culture'
    // EXPORT / CROSS-BORDER TRADER TAGS
    | 'logistics_black_hole' | 'doc_delay_penalty' | 'fx_burn' | 'cash_gap_trap' | 'single_market_risk'
    | 'rejection_shock' | 'compliance_fatigue' | 'reactive_planning' | 'traceability_blindspot' | 'commodity_trap'
    | 'contract_loophole' | 'cargo_loss_exposure' | 'skill_gap_admin' | 'integrity_risk_field' | 'packhouse_bottleneck'
    | 'cold_chain_break' | 'freight_rate_blindness' | 'inventory_vis_gap' | 'packaging_waste_bleed' | 'lab_test_delay'
    | 'arrival_quality_unknown' | 'loading_error' | 'input_quality_var' | 'capacity_planning_gap' | 'claims_leakage'
    | 'cost_per_kg_blind' | 'overhead_bloat' | 'vat_reclaim_delay' | 'investor_relations_weak' | 'payment_term_mismatch'
    | 'profit_concentration_risk' | 'hidden_logistics_costs' | 'brand_invisibility' | 'market_intel_gap' | 'relationship_transactional'
    | 'spec_mismatch' | 'new_biz_stagnation' | 'contract_term_weakness' | 'season_extension_gap' | 'cert_deficiency'
    | 'customer_feedback_loop_missing' | 'reactive_firefighting' | 'vision_gap' | 'data_culture_weak' | 'talent_retention_risk'
    | 'sustainability_lip_service' | 'board_governance_gap' | 'succession_risk' | 'innovation_stagnation' | 'communication_silo'
    | 'tech_aversion' | 'value_add_miss' | 'variety_stagnation' | 'logistics_innovation_gap' | 'packaging_basic'
    | 'data_blindness' | 'energy_waste' | 'waste_valorization_miss' | 'learning_stagnation' | 'contract_enforceability_weak'
    | 'cargo_insurance_gap' | 'regulatory_blindspot' | 'supplier_side_selling' | 'cyber_security_weak' | 'political_risk_exposure'
    | 'reputation_risk' | 'climate_risk_exposure' | 'single_logistic_partner' | 'internal_theft' | 'specialist_skill_gap'
    | 'integrity_issue' | 'labour_shortage_risk' | 'manager_overload' | 'communication_breakdown' | 'safety_culture_weak'
    | 'performance_review_gap' | 'incentive_misalignment' | 'gender_balance_gap' | 'conflict_handling_poor'
    // STATIONERY & BOOKSTORE TAGS
    | 'sku_fog' | 'seasonality_shock' | 'shelf_maze' | 'queue_chaos' | 'dead_book_trap'
    | 'bargain_drift' | 'credit_sink' | 'cash_drawer_drift' | 'hidden_service_leak'
    | 'one_time_buyer_curse' | 'school_contract_miss' | 'whatsapp_blackhole' | 'bundle_blindness'
    | 'kpi_darkness' | 'stale_shelf_syndrome' | 'theft_tax' | 'counterfeit_piracy_landmine'
    | 'dispute_tax' | 'supplier_short_delivery' | 'scriptless_selling' | 'careless_handling'
    // CATTLE FARMING SPECIFIC
    | 'distress_sale_pct' | 'weak_goal_alignment' | 'culling_drift' | 'feed_waste' | 'drought_panic'
    | 'blind_feeding' | 'disease_blindspot' | 'quarantine_gap' | 'mortality_blindness' | 'fertility_gap'
    | 'calf_mortality_risk' | 'future_profit_leak' | 'routine_drift' | 'stress_handling_loss' | 'injury_risk'
    | 'roi_blindspot' | 'cashflow_crunch' | 'panic_selling' | 'data_blindspot' | 'loss_incidents'

    // SHEEP FARMING SPECIFIC
    | 'mineral_gap' | 'lamb_stunting' | 'condition_loss_risk' | 'storage_loss' | 'reactive_health' | 'drug_resistance_risk'
    | 'footrot_risk' | 'parasite_load' | 'lamb_mortality_risk' | 'flystrike_risk' | 'lamb_survival_gap' | 'weaning_drift'
    | 'quality_drift' | 'no_growth_targets' | 'mixed_flock_inefficiency' | 'hygiene_gap' | 'lamb_safety_gap' | 'stress_loss'
    | 'operational_drag' | 'management_by_memory' | 'role_confusion' | 'cost_blindness' | 'vanity_metrics' | 'commingled_cash'
    | 'loss_acceptance' | 'bad_debt' | 'identification_gap' | 'tracking_gap' | 'security_gap' | 'predator_risk'
    | 'selling_blind' | 'single_buyer_risk' | 'weak_negotiation' | 'grade_blindness' | 'seasonality_miss'
    | 'no_flock_plan' | 'uncontrolled_mating' | 'replacement_drift' | 'biosecurity_gap' | 'premature_scale'
    | 'inbreeding_risk' | 'output_blindness' | 'herd_structure_gap' | 'pasture_mismanagement' | 'water_gap'
    | 'no_records' | 'disease_spread_risk' | 'loss_denial' | 'uncontrolled_breeding' | 'late_reaction'
    | 'unproductive_stock' | 'pneumonia_risk' | 'theft_risk' | 'review_gap' | 'record_completeness'
    | 'climate_risk' | 'complacency_risk' | 'financial_blindness'
    // PIG FARMING SPECIFIC
    | 'PRICE_DISCOVERY' | 'SALES_READINESS' | 'MARKET_TIMING' | 'CASH_FLOW_PRESSURE' | 'GRADING_DISCIPLINE'
    | 'PRICE_INTELLIGENCE' | 'BUYER_DEPENDENCY' | 'NEGOTIATION_POWER' | 'SALES_PLANNING' | 'MARGIN_VISIBILITY'
    | 'ASSET_PROTECTION' | 'ANIMAL_WELFARE' | 'QUALITY_CONTROL' | 'LOGISTICS_COST' | 'RELATIONSHIP_BUILDING'
    | 'CAPACITY_PLANNING' | 'CULLING_DISCIPLINE' | 'BREEDING_SCHEDULE' | 'REPLACEMENT_STRATEGY' | 'GENETICS_MANAGEMENT'
    | 'SPACE_MANAGEMENT' | 'FLOW_MANAGEMENT' | 'BIOSECURITY_INTERNAL' | 'PRODUCTION_TARGETS' | 'MARKET_ALIGNMENT'
    | 'PERFORMANCE_RECORDING' | 'FEED_EFFICIENCY' | 'COST_CONTROL' | 'GROWTH_TROUBLESHOOTING' | 'NUTRITION_MANAGEMENT'
    | 'WATER_MANAGEMENT' | 'FEED_TRACKING' | 'WASTE_REDUCTION' | 'GROWTH_MANAGEMENT' | 'FEED_STORAGE'
    | 'PERFORMANCE_METRICS' | 'ENVIRONMENTAL_CONTROL' | 'INVENTORY_PLANNING' | 'UNIT_ECONOMICS' | 'QUARANTINE_PROTOCOL'
    | 'DISEASE_RESPONSE' | 'ACCESS_CONTROL' | 'ISOLATION_PROTOCOL' | 'BATCH_MANAGEMENT' | 'HYGIENE_STANDARD'
    | 'TREATMENT_RECORDS' | 'MEDICATION_ACCURACY' | 'PEST_CONTROL' | 'MORTALITY_MANAGEMENT' | 'DISEASE_LEARNING'
    | 'FARROWING_ATTENTION' | 'PIGLET_CARE' | 'BREEDING_ROUTINE' | 'PREPARATION_DISCIPLINE' | 'MORTALITY_REDUCTION'
    | 'PIGLET_NUTRITION' | 'PERFORMANCE_TRACKING' | 'LITTER_MANAGEMENT' | 'NUTRITION_PLANNING' | 'STRESS_MANAGEMENT'
    | 'ANIMAL_CARE' | 'CULLING_DECISIONS' | 'MAINTENANCE_CULTURE' | 'HOUSING_SUITABILITY' | 'ENVIRONMENTAL_HYGIENE'
    | 'CLIMATE_CONTROL' | 'CAPACITY_DISCIPLINE' | 'STANDARD_PROCEDURES' | 'MAINTENANCE_SPEED' | 'GROUP_MANAGEMENT'
    | 'AIR_QUALITY' | 'ROLE_CLARITY' | 'MANAGEMENT_OVERSIGHT' | 'CASH_PRIORITIZATION' | 'INVENTORY_CONTROL'
    | 'FINANCIAL_GRANULARITY' | 'UNIT_COSTING' | 'LOSS_PREVENTION' | 'FINANCIAL_DISCIPLINE' | 'CREDIT_MANAGEMENT'
    | 'CASH_RESILIENCE' | 'CAPITAL_ALLOCATION' | 'DEBT_STRATEGY' | 'MARKET_SENSITIVITY' | 'GROWTH_REINVESTMENT'
    | 'WASTE_VALORIZATION' | 'REVENUE_DIVERSIFICATION' | 'DATA_INTEGRITY' | 'STRATEGIC_CLARITY' | 'FEED_QUALITY'
    | 'MEDICATION_DISCIPLINE' | 'FINANCIAL_REVIEW' | 'RELIABILITY_GAP' | 'OVERCROWDING' | 'FINANCIAL_BLINDNESS'
    | 'WASTE_MANAGEMENT' | 'PRICE_PERFORMANCE' | 'REPRODUCTIVE_PERFORMANCE' | 'SURVIVAL_RATE' | 'PRODUCTIVITY_INDEX'
    | 'ASSET_UPTIME' | 'PLANNING_GAP' | 'BIOSECURITY_CULTURE' | 'MORTALITY_NORMALIZATION' | 'TIME_EFFICIENCY'
    | 'DATA_BLINDNESS' | 'CHANNEL_DIVERSITY' | 'PROFIT_TRACKING'
    // POULTRY FARMING SPECIFIC
    | 'RELIABILITY_SCORE' | 'SUPPLIER_QUALITY' | 'BROODING_SETUP' | 'EARLY_ACCESS'
    | 'UNIFORMITY_TRACKING' | 'MAINTENANCE_PLAN' | 'CASH_SEPARATION' | 'PLACEMENT_GAPS'
    | 'BIOSECURITY_RISK' | 'FEED_WASTE' | 'WATER_SECURITY' | 'HEAT_STRESS'
    | 'BROODING_ERRORS' | 'UNIFORMITY_LOSS' | 'BIOSECURITY_GAP' | 'ISOLATION_FAILURE'
    | 'VACCINATION_GAP' | 'PROCESS_DEPENDENCY' | 'HANDLING_ERRORS' | 'THEFT_RISK'
    | 'CASH_DRAIN' | 'WASTE_LOSS' | 'MORTALITY_TRACKING' | 'UNIFORMITY_METRIC'
    | 'PRICE_BENCHMARK' | 'PROCESS_ADHERENCE'
    | 'BIOSECURITY_ACCESS' | 'CHANNEL_STRATEGY' | 'MARGIN_FOCUS' | 'VALUE_CAPTURE'
    | 'PRODUCT_GRADING' | 'SALES_TIMING' | 'NET_MARGIN_FOCUS' | 'RELIABILITY'
    | 'DISCOUNT_TRACKING' | 'PACKAGING_STANDARD' | 'PREMIUM_SEGMENTATION' | 'PLANNING_AHEAD'
    | 'GROWTH_STRATEGY' | 'PLACEMENT_CADENCE' | 'SUPPLIER_AUDIT' | 'FLOCK_DATA'
    | 'MODEL_OPTIMIZATION' | 'EFFICIENCY_MINDSET' | 'HEAT_STRESS_RESPONSE' | 'EQUIPMENT_MANAGEMENT'
    | 'NUTRITION_DISCIPLINE' | 'VENTILATION_CONTROL' | 'CLIMATE_RESILIENCE' | 'LIGHTING_PROGRAM'
    | 'WORKFLOW_DESIGN' | 'BIOSECURITY_BARRIER' | 'INTENSIVE_CARE' | 'ANIMAL_OBSERVATION'
    | 'AIR_EXCHANGE' | 'LITTER_QUALITY' | 'ADAPTABILITY' | 'DATA_GRANULARITY'
    | 'EARLY_TRACKING' | 'INTERVENTION' | 'STANDARD_WORK' | 'ISOLATION'
    | 'RECORD_KEEPING' | 'HYGIENE_PROTOCOL' | 'WATER_HYGIENE' | 'WASTE_DISPOSAL'
    | 'CROSS_CONTAMINATION' | 'ROOT_CAUSE_ANALYSIS' | 'CYCLE_BREAK' | 'DATA_DRIVEN_MGMT'
    | 'RECORD_DISCIPLINE' | 'ACCOUNTABILITY' | 'MANAGEMENT_RHYTHM' | 'QUALITY_SOP'
    | 'PREVENTIVE_MAINTENANCE' | 'STOCK_CONTROL' | 'SKILL_BUILDING' | 'COMMUNICATION_FLOW'
    | 'GOAL_ALIGNMENT' | 'INVENTORY_DISCIPLINE' | 'FINANCIAL_HYGIENE' | 'THEFT_PREVENTION'
    | 'OVERHEAD_CONTROL' | 'WASTE_REVENUE' | 'PROCUREMENT'
    | 'BREED_SELECTION' | 'DENSITY_CONTROL' | 'PERFORMANCE_REVIEW' | 'MORTALITY_ACCEPTANCE'
    | 'MORTALITY_ANALYSIS' | 'VACCINATION_COMPLIANCE'
    | 'CHANNEL_MIX' | 'WASTE_CONTROL' | 'WATER_UPTIME' | 'PHASE_FEEDING'
    | 'housing_gap' | 'reinvestment_blindspot' | 'bottleneck_ignore'
    | 'kid_mortality_risk' | 'overstocking_risk' | 'people_drift'
    // DAIRY & MILK COLLECTION SPECIFIC
    | 'SPOILAGE_RISK' | 'TEMP_DISCIPLINE' | 'ADULTERATION_RISK' | 'TESTING_GAP'
    | 'ROUTE_INEFFICIENCY' | 'SOP_GAP' | 'FARMER_CHURN' | 'PRICING_LEAKAGE'
    | 'BUYER_POWER' | 'SHRINK_RATE' | 'MAINTENANCE_DELAY' | 'ROLE_CONFLICT'
    | 'TRACEABILITY_GAP' | 'EARLY_CHILL' | 'GENERATOR_READINESS' | 'INSULATED_TRANSPORT'
    | 'CLEANING_PROTOCOL' | 'VOLUME_FORECAST' | 'PAYMENT_TIMELINESS' | 'COMPLAINT_RESOLUTION'
    | 'REJECT_POLICY' | 'HYGIENE_AUDIT' | 'PREMIUM_CAPTURE' | 'BATCH_TRACEABILITY'
    | 'FUEL_EFFICIENCY' | 'VEHICLE_UPTIME' | 'ROUTE_DENSITY' | 'HANDOVER_GAP'
    | 'TRAINING_GAP' | 'CONTRACT_COMPLIANCE' | 'NET_MARGIN_TRACKING' | 'PAYMENT_AUDIT'
    | 'FRAUD_CONTROL' | 'ASSET_CALIBRATION' | 'COMPLIANCE_AUDIT'
    | 'BLAME_CULTURE' | 'ACCOUNTABILITY_FOG' | 'ONBOARDING_GAP' | 'ROLE_CLARITY' | 'CASH_RESILIENCE' | 'INVENTORY_DISCIPLINE' | 'PRODUCT_GRADING' | 'PREMIUM_SEGMENTATION'
    | 'agent_standards_missing' | 'no_weekly_review'
    | 'verbal_deals' | 'mixed_grades'
    | 'shrink_tax' | 'weight_slip_drift' | 'theft_tamper_risk' | 'spec_drift_penalty' | 'quality_trust_gap'
    | 'handling_damage_culture' | 'queue_to_rot_lag' | 'dispatch_chaos' | 'sorting_bottleneck'
    | 'truck_half_empty_syndrome' | 'hidden_fees_drain' | 'margin_mirage' | 'working_capital_trap'
    | 'supplier_payment_pressure' | 'cold_chain_hole' | 'rejection_rate_high' | 'low_repeat_orders'
    | 'relationship_moat' | 'price_shock_exposure' | 'no_presell_pipeline' | 'cash_in_transit_risk'
    | 'cash_recon_weak' | 'data_advantage_gap' | 'buyer_concentration_high' | 'value_add_blindspot'
    | 'no_subscription_model' | 'traceability_gap' | 'compliance_shock' | 'contract_exposure'
    | 'incentive_misfire' | 'management_by_whatsapp'
    | 'logistics_black_hole' | 'freight_rate_blindness' | 'doc_delay_penalty' | 'compliance_fatigue'
    | 'fx_burn' | 'cash_gap_trap' | 'cold_chain_break' | 'arrival_quality_unknown' | 'single_market_risk'
    | 'relationship_transactional' | 'regulatory_blindspot' | 'contract_loophole' | 'payment_term_mismatch'
    // FISHERIES & AQUACULTURE SPECIFIC
    | 'NO_CYCLE_PLAN' | 'NO_BATCH_RECORDS' | 'DENSITY_GUESSWORK' | 'MIXED_BATCHES' | 'QUARANTINE_SKIPPED'
    | 'NO_ARRIVAL_COUNTS' | 'SUPPLIER_SWITCHING' | 'TRANSPORT_IGNORED' | 'INPUTS_LATE' | 'LATE_GRADING'
    | 'NO_BATCH_IDS' | 'BIOMASS_GUESSWORK' | 'HARVEST_REACTIVE' | 'STATIC_PLAN' | 'MORTALITY_TRACKING_WEAK'
    | 'SUPPLIER_DRIVEN_STOCKING' | 'DENSITY_IGNORED' | 'NO_BACKUP_SUPPLY' | 'HEALTH_ASSUMED' | 'INFORMAL_HANDLING'
    | 'ACCLIMATION_VARIES' | 'FEED_START_IMPROVISED' | 'NO_STOCKING_CHECKLIST' | 'CASHFLOW_IGNORED' | 'WASTE_IGNORED'
    | 'FEEDING_BY_HABIT' | 'OPEN_FEED_STORE' | 'REACTIVE_FEED_CHANGE' | 'LEFTOVERS_IGNORED' | 'OCCASIONAL_WEIGHING'
    | 'RATION_CONSTANT' | 'FEED_LOG_DAILY_ONLY' | 'FEEDING_TIMES_FLEXIBLE' | 'ONE_PELLET_SIZE' | 'BLIND_SUPPLIER_TRUST'
    | 'FEED_STORE_POOR' | 'PESTS_TOLERATED' | 'TRUST_BASED_ACCESS' | 'DUMP_FEEDING' | 'FEED_DURING_LOW_DO'
    | 'FCR_UNKNOWN' | 'DRIFT_IGNORED' | 'FEEDING_MEMORY' | 'SPEED_FEEDING' | 'PRICE_ONLY_SUPPLIER' | 'MIXED_FEED_STOCKS'
    | 'REACTIVE_FEED_BUYING' | 'NO_FEED_COMPLIANCE' | 'REACTIVE_WATER_CHECKS' | 'REACTIVE_MORTALITY_RESPONSE'
    | 'VISITOR_CONVENIENCE' | 'REACTIVE_TREATMENT' | 'MIDDAY_DO_CHECKS' | 'LOGS_IGNORED' | 'AERATION_FIXED'
    | 'GENERATOR_REACTIVE' | 'MORTALITY_LEFT_IN' | 'DISPOSAL_INFORMAL' | 'SHARED_TOOLS' | 'HYGIENE_OPTIONAL'
    | 'BATCH_MIXING' | 'BLIND_TREATMENT' | 'NO_TREATMENT_RECORDS' | 'OUTCOMES_IGNORED' | 'REACTIVE_SLUDGE_MGMT'
    | 'REACTIVE_WATER_CHANGE' | 'FORGOTTEN_OUTBREAKS' | 'SIGNS_MISSED' | 'NORMAL_OPS_SICK' | 'OVERFEEDING_RISK'
    | 'EMERGENCY_HEALTH_SPEND' | 'INFORMAL_VET_ADVICE' | 'VISUAL_SIZE_GUESS' | 'CASH_DRIVEN_HARVEST'
    | 'REACTIVE_GRADING' | 'UNAVOIDABLE_LOSSES' | 'OCCASIONAL_SAMPLING' | 'INFORMAL_WEIGHT_DATA'
    | 'HARVEST_ALL_AT_ONCE' | 'AD_HOC_GRADING' | 'CROWDING_UNCONTROLLED' | 'HANDLING_MORTALITY_IGNORED'
    | 'POOR_NETS' | 'ESCAPES_IGNORED' | 'PREDATORS_TOLERATED' | 'DENSITY_UNCHANGED' | 'SALES_TOTALS_ONLY'
    | 'POOR_GROWTH_ACCEPTED' | 'GRADE_MIX_ASSUMED' | 'HARVEST_EXPERIENCE_BASED' | 'COLD_CHAIN_UNREADY'
    | 'WEATHER_REACTIVE' | 'NO_SIZE_TARGETS' | 'DOWNGRADE_REASONS_IGNORED' | 'SELL_WHEN_READY'
    | 'DELAYED_ICING' | 'RARE_TEMP_RECORDS' | 'PRICE_ACCEPTANCE' | 'MIXED_GRADES_SELLING'
    | 'ICING_WORKLOAD_DEPENDENT' | 'DIRTY_CRATES' | 'WATER_QUALITY_IGNORED' | 'NO_TEMP_LOGS' | 'FIX_ON_FAILURE'
    | 'LAST_MINUTE_ICE' | 'SUN_EXPOSURE' | 'ROUGH_HANDLING' | 'UNTAGGED_LOTS' | 'REJECT_REASONS_ASSUMED'
    | 'CLAIMS_NEGOTIATED' | 'INCONSISTENT_GRADING' | 'INFORMAL_TRAINING' | 'HABIT_BASED_DISPATCH'
    | 'WEIGHT_LOSS_IGNORED' | 'VISUAL_SANITATION' | 'COLD_STORAGE_TRUSTED' | 'CHEAP_PACKAGING'
    | 'EQUAL_PRODUCT_TREATMENT' | 'HANDLING_LOSSES_ACCEPTED' | 'DAY_PRICE_TAKER' | 'SINGLE_BUYER_DEPENDENCY'
    | 'DISCOUNT_NEGOTIATION' | 'VALUE_ADD_DUMP' | 'MIXED_GRADE_SALES' | 'REVENUE_ONLY_TRACKING' | 'ASSUMED_MARGIN'
    | 'BUYER_DEPENDENCY' | 'AD_HOC_CLAIMS' | 'VERBAL_PROOF' | 'SPOT_DEALS' | 'URGENCY_NEGOTIATION'
    | 'PAYMENT_DELAYS_ACCEPTED' | 'ONE_TIME_SALES' | 'EQUAL_BUYER_TREATMENT' | 'RANDOM_PRICING'
    | 'DOWNGRADES_NORMAL' | 'HARVEST_THEN_SELL' | 'LOGISTICS_COST_ACCEPTED' | 'UNCONTROLLED_DISCOUNTS'
    | 'BRAND_AFTERTHOUGHT' | 'CRISIS_CHANNEL_SWITCH' | 'NO_YIELD_TRACKING' | 'WEAK_TRACEABILITY'
    | 'BANK_BALANCE_FEELING' | 'REACTIVE_STOCK_CHECKS' | 'REACTIVE_RECEIVABLES' | 'RELATIONSHIP_BASED_APPROVALS'
    | 'COST_RARELY_CALCULATED' | 'NO_CYCLE_BUDGET' | 'INFORMAL_REVIEW' | 'OVERLAPPING_ROLES' | 'OCCASIONAL_COUNTS'
    | 'VARIANCES_ACCEPTED' | 'MEMORY_TRACKING' | 'FLEXIBLE_CREDIT' | 'HAND_TO_MOUTH' | 'UNAUTHORIZED_PURCHASES'
    | 'TRUST_BASED_PAYMENTS' | 'TOTAL_FUEL_TRACKING' | 'FEED_SHRINK_IGNORED' | 'CLAIMS_NORMALIZED' | 'LATE_TAX'
    | 'IMPULSE_CAPEX' | 'COMPETITOR_PRICING' | 'INFORMAL_INCENTIVES' | 'EXCEPTIONS_IGNORED'
    | 'MONTHLY_FINANCE_REVIEW' | 'BREAKDOWN_MAINTENANCE' | 'ASSUMED_BACKUP' | 'TRUSTED_SOP'
    | 'LAST_MINUTE_COMPLIANCE' | 'NO_MAINTENANCE_CALENDAR' | 'OPTIONAL_CHECKLISTS' | 'BAD_LUCK_DOWNTIME'
    | 'REACTIVE_SPARES' | 'GENERATOR_OUTAGE_ONLY' | 'REACTIVE_INSPECTIONS' | 'REACTIVE_SAFETY' | 'INFORMAL_ROLES'
    | 'ASSUMED_TRAINING' | 'ATTENDANCE_ONLY' | 'REACTIVE_COMPLIANCE' | 'INFORMAL_TRACEABILITY'
    | 'VISUAL_SANITATION_AUDIT' | 'RELATIONSHIP_AUTHORITY' | 'VERBAL_HANDOVER' | 'FORGOTTEN_INCIDENTS'
    | 'INFORMAL_VENDORS' | 'REPLACE_WHEN_DEAD' | 'SHARED_TOOLS_ACROSS_UNITS' | 'CRISIS_MEETINGS'
    // BEEKEEPING SPECIFIC
    | 'silent_colony_collapse' | 'varroa_interest_rate' | 'queen_failure_tax' | 'brood_break_unplanned' | 'treatment_resistance_trap'
    | 'managing_hives_not_colonies' | 'paper_profit_only' | 'inspection_theater' | 'calendar_vs_weather' | 'equipment_bottleneck_tax'
    | 'harvest_panic_mode' | 'sticky_room_chaos' | 'labor_drift' | 'moisture_mistake' | 'one_bad_drum'
    | 'dirty_extraction' | 'residue_risk_roulette' | 'adulteration_suspicion' | 'traceability_gap' | 'wholesale_thinking_retail'
    | 'buyer_vs_customer' | 'price_by_rumor' | 'brand_is_margin' | 'seasonal_cash_crash' | 'honey_funding_habits'
    | 'unknown_profit_per_hive' | 'capex_blindness' | 'feed_burn_rate' | 'leakage_theft_storage' | 'inventory_lies'
    // BEEKEEPING CATEGORY TAGS
    | 'site_forage_strategy' | 'colony_strength_queen_system' | 'seasonal_operations_inspection_discipline'
    | 'biosecurity_pests_disease_control' | 'harvesting_extraction_handling' | 'quality_traceability_compliance'
    | 'sales_pricing_channel_strategy' | 'finance_assets_control_system'
    // INPUT SUPPLIER CATEGORY TAGS
    | 'market_offer_strategy' | 'product_integrity_compliance' | 'sourcing_supplier_control'
    | 'inventory_storage_fulfillment' | 'sales_channels_partner_network' | 'customer_success_stewardship'
    | 'pricing_finance_credit' | 'data_traceability_ci';
