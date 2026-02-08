
import React from 'react';

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

export interface DeepScanScores {
  pillars: Record<string, number>; // 0-100
  confidence: Record<string, 'High' | 'Med' | 'Low'>;
}

export interface DeepScanChapter {
  theory: string;
  diagnosis: string;
  psychology: string;
  financials: string;
}

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

export interface User {
  id: string;
  name: string;
  email?: string;
  role: UserRole;
  avatar: string;
  company?: string;
  tier?: string; // 'free' | 'pro' | 'elite'
  status?: 'pending' | 'approved' | 'rejected' | 'suspended';
  planType?: 'basic' | 'premium';
  archetype?: Archetype;
  pillarScores?: PillarScores;
  latestReport?: GeneratedReport;
  activeFixPlan?: FixPlan;
  adWalletBalance?: number;
  riskScore?: number;
  ltv?: number;
  joinedAt?: string;
  lastLoginAt?: string;
}

export interface ActionStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  requiredProofType: 'text' | 'file' | 'link';
}

export interface ActionPlan {
  id: string;
  title: string;
  progress: number;
  steps: ActionStep[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type Quiz = QuizQuestion[];

export interface Trainer {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  verified: boolean;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortPromise: string;
  instructor: Trainer;
  price: number;
  currency: string;
  category: string;
  thumbnail: string;
  rating: number;
  reviewsCount: number;
  level: string;
  language: string;
  duration: string;
  format: 'Live Session' | 'On-Demand' | 'Hybrid' | 'In-Person' | 'Virtual';
  outcomes: string[];
  roiStats: { value: string; label: string; desc?: string }[];
  proofOfWork: { title: string; description: string }[];
  syllabus: any[];
  resourcesIncluded: any[];
  upcomingSessions: any[];
  badges: any[];
  enterpriseEligible: boolean;
}

export interface Category {
  id: string;
  key: string;
  name: string;
  description: string;
  icon: string | React.ReactNode;
  roiBullets?: string[];
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

export interface ActionItem {
  id: string;
  text: string;
  description?: string;
  type: 'today' | 'week' | 'month';
  owner: string;
  effort?: 'Low' | 'Med' | 'High';
  metric?: string;
  signalTag?: SignalTag;
  costType?: string;
  evidencePrompt?: string;
  verificationCriteria?: string;
  optionalEvidence?: string;
  autoTags?: string[];
}

export interface PillarDriver {
  name: string;
  score: number;
  status: 'Critical' | 'Weak' | 'Strong';
}

export interface PillarReport {
  name: string;
  score: number;
  riskScore: number;
  band: 'Profit Leak' | 'Bottleneck Forming' | 'Controlled' | 'Profit Lever'; // Matching PillarStatus
  tilt: string;
  strength: string;
  hiddenCost: string;
  profitConsequence: string[];
  actions: ActionItem[];
  owner: string;
  kpi: string;
  evidenceFlags: string[];
  deepInsight: string;
  whyItMatters: string;
  drivers: PillarDriver[];
  costBands: { time: ImpactBand; cash: ImpactBand; risk: ImpactBand };
  confidence: string;
  evidenceSnapshots: { observation: string; whyItMatters: string }[];
  fixLever: { action: string; metric: string; owner: string; effort: string; timeline: string };
  quickScanAnalysis?: QuickScanAnalysis;
  deepScanChapter?: DeepScanChapter;
}

export interface QuickScanAnalysis {
  insight: string;
  benefits: string[];
}

export interface InspectionItem {
  item: string;
  desc?: string;
}

export interface ProofItem {
  item: string;
  desc?: string;
}

export interface AgroIndex {
  id: string; // 'A', 'B', etc.
  title: string; // 'Yield Bleed'
  meaning: string;
  silentCost: string;
  signals: string[];
  mirrorQuestions: string[];
  inspectionItems: InspectionItem[];
  proofItems: ProofItem[];
  pillar: string;
}

export interface BusinessProfile {
  businessName: string;
  userName: string;
  userTitle: string;
  industry: string;
  subIndustry: string;
  model: 'b2b' | 'b2c' | 'both';
  size: 'solo' | 'micro' | 'small' | 'small_med' | 'medium' | 'large' | 'enterprise';
  hasManagers: boolean;
  stage: string;
  goals: string[];
  pain: string;
  includesContractors: boolean;
  includesVolunteers: boolean;
  // Agro-Specific Fields
  agroSubSector?: 'Milling' | 'Drying' | 'Packaging' | 'Juices' | 'Oils' | 'Seeds' | 'Fertilizer' | 'Chemicals' | 'Vet Supplies' | 'Equipment';
  products?: string[];
  operatingModel?: 'Manual' | 'Semi-Automated' | 'Fully Automated';
  shiftsPerDay?: number;
  daysPerWeek?: number;
  capacity?: string;
  salesChannels?: string[];
  paymentTerms?: string;
  complianceLevel?: 'informal' | 'basic' | 'audit-ready';
}

export interface GeneratedReport {
  id: string;
  date: string;
  archetype: Archetype;
  executiveSummary: string;
  pillars: PillarReport[];
  unlocks: string[];
  indices: LeakIndices;
  recommendedKPIs: any[];
  agroIndices?: AgroIndex[];
  deepScanScores?: DeepScanScores;
  profileContext?: BusinessProfile;
}

export interface FixTask {
  id: string;
  pillar: string;
  title: string;
  desc: string;
  status: 'backlog' | 'in_progress' | 'done';
  effort: 'Low' | 'Med' | 'High';
  owner: string;
  metric: string;
  deadline: string;
  impactScore: number;
  evidence?: { type: 'text' | 'file' | 'link'; value: string; timestamp: string };
  signalTag?: SignalTag;
  costType?: string;
  evidencePrompt?: string;
  verificationCriteria?: string;
  optionalEvidence?: string;
  autoTags?: string[];
  _sortScore?: number;
}

export interface KPI {
  id: string;
  name: string;
  pillar: string[];
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'term';
}

export interface FixPlan {
  id: string;
  reportId: string;
  startedAt: string;
  tasks: FixTask[];
  overallProgress: number;
  kpis: KPI[];
  focusArea: string;
}

export interface CheckoutItem {
  id: string;
  title: string;
  description: string;
  price?: number;
  type: 'subscription' | 'one_time' | 'enterprise' | 'session';
  recurringInterval?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  body?: string;
  coverImage?: string;
  status: 'draft' | 'published';
  publishedAt?: string;
  views?: number;
  conversions?: number;
  tags: string[];
  allowComments?: boolean;
  allowRatings?: boolean;
  author?: { name: string; role: string; avatar: string };
  averageRating?: number;
}

export interface Transaction {
  id: string;
  studentName: string;
  sprintTitle: string;
  grossAmount: number;
  netAmount: number;
  date: string;
  status: 'released' | 'escrowed' | 'withheld';
  escrowReleaseAt?: string;
  seatsCount?: number;
  type: 'single' | 'enterprise_royalty';
}

export type SprintStatus = 'draft' | 'published' | 'archived' | 'rejected' | 'pending';
export type SprintLevel = 'beginner' | 'intermediate' | 'advanced';

export interface SprintSession {
  id: string;
  sprintId?: string;
  partNumber: number;
  title?: string;
  startsAt: string;
  endsAt: string;
  timezone: string;
  status: 'scheduled' | 'live' | 'completed' | 'canceled' | 'no_show';
  meetJoinUrl?: string;
  sessionStartedAt?: string;
  endedAt?: string;
}

export interface SprintTask {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  priority: 'low' | 'medium' | 'high';
  estimatedMinutes: number;
  dueDaysAfterPart2: number;
  proofType: 'text' | 'file' | 'link';
  isRequired: boolean;
  mentorReviewRequired: boolean;
}

export interface SprintCurriculumBlock {
  id: string;
  partNumber: number;
  title: string;
  durationMinutes: number;
  keyPoints: string[];
}

export interface Sprint {
  id: string;
  title: string;
  status: SprintStatus;
  reviewStatus: 'draft' | 'pending' | 'changes_requested' | 'approved';
  level: SprintLevel;
  language: string;
  shortDescription: string;
  price: number;
  currency: string;
  maxSeats: number;
  seatsSold: number;
  waitlistEnabled: boolean;
  categoryTags: string[];
  outcomes: string[];
  kpiMetrics: string[];
  sessions: SprintSession[];
  resources: any[];
  curriculum: SprintCurriculumBlock[];
  tasks: SprintTask[];
}

export interface SprintTemplate {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  outcomes: string[];
  kpiMetrics: string[];
  tasks: SprintTask[];
  resources: any[];
}

export interface ReferralCode {
  id: string;
  code: string;
  targetType: string;
  targetId: string;
  clicks: number;
  signups: number;
  earnedCredits: number;
  status: 'active' | 'inactive';
}

export interface TrainerPromotion {
  id: string;
  // ... fields for promotion
}

export interface Lead {
  id: string;
  title: string;
  role: string;
  company: string;
  sourceResource: string;
  date: string;
  status: 'new' | 'contacted' | 'in_discussion' | 'won' | 'lost' | 'hot';
  consent: boolean;
  location: string;
  consentText: string;
  weakness: string;
  criticalPillar: string;
  topWeaknessTag: string;
  leadSize: 'S' | 'M' | 'L' | 'XL';
  creditCost: number;
  urgency: string;
  matchScore: number;
  tags: string[];
  anonSummary: string;
  problem: string;
  isUnlocked?: boolean;
  industry?: string;
}

export interface PricingRule {
  id: string;
  tier: number;
  product: string;
  amount: number;
  currency: string;
  isActive: boolean;
  regionGroup: string;
}

export interface ContentSnippet {
  id: string;
  pillar: string;
  band: string;
  tilt: string;
  textKey: string;
  content: string;
  lastUpdated: string;
}

export interface UserAdminView {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinedAt: string;
  lastLoginAt: string;
  ltv: number;
  riskScore: number;
  company?: string;
  tier?: string;
  avatar: string;
}

export type AdObjective = 'clicks' | 'leads' | 'hiring' | 'bookings';

export interface AdCampaign {
  id: string;
  advertiserId: string;
  type: 'consultant_promo' | 'company_ad';
  objective: AdObjective;
  status: 'active' | 'paused' | 'pending_payment' | 'insufficient_funds' | 'in_review';
  placements: string[];
  budget: { type: 'daily_cap' | 'fixed_slot'; daily: number; total: number; spent: number; currency: string };
  targeting: { locations: string[]; tags: string[]; languages: string[]; contextualOnly: boolean };
  creative: { headline: string; body: string; imageUrl: string; ctaText: string; landingUrl: string };
  metrics: { impressions: number; clicks: number; conversions: number; ctr: number };
}

export interface BillingTransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  status: 'paid' | 'pending' | 'failed';
  method: 'card' | 'wallet' | 'paypal';
}

export interface CompanyProfile {
  id: string;
  slug: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  industry: string;
  region: string;
  verificationLevel: 'partner' | 'none';
  resources: any[];
  events: any[];
  hiringPosts: any[];
}

export interface ConsultantProfile {
  id: string;
  name: string;
  email: string;
  role: 'consultant';
  avatar: string;
  title: string;
  bio: string;
  location: { lat: number; lng: number; city: string; country: string };
  serviceRadiusKm: number;
  serviceScope: 'city' | 'country' | 'global';
  jurisdictions: string[];
  deliveryMode: 'remote' | 'hybrid' | 'in-person';
  acceptsInPerson: boolean;
  badges: string[];
  metrics: { responseTime: string; jobsCompleted: number; rating: number; cancellationRate?: string; disputeRate?: string; lastActive?: string; completionRate?: string };
  services: any[];
  specialties: string[];
  expertiseTags: string[];
  industryTags: string[];
  primaryCategories: string[];
  tier: 'free' | 'pro' | 'elite';
  status: 'approved' | 'pending';
  successScore: number;
  verifiedStatus: 'none' | 'verified' | 'verified_plus';
  whatsappNumber?: string;
  linkedinUrl?: string;
  remoteAvailable: boolean;
  creditsBalance: number;
  rankScore?: number;
}

export interface AIAsset {
  id: string;
  type: 'image' | 'video';
  url: string;
  prompt: string;
  createdAt: string;
}

export interface FixPlanTemplate {
  focus: string;
  profitLeak: string;
  diagnosis: string;
  whatItControls?: string; // Optional context
  deepInsight?: string;    // Optional psychological/systemic insight
  drivers: string[];
  evidenceSnapshots: { observation: string; whyItMatters: string }[];
  fixLever: { action: string; metric: string; owner: string; effort: string; timeline: string };
  quickWins: FixPlanAction[];
  winCondition: string;
  system30: FixPlanAction[];
  build60: string[];
  institutionalize90: string[];
  kpi: { name: string; def: string };
  traps: string[];
}

export interface FixPlanAction {
  title: string;
  desc: string;
  owner: string;
  effort: 'S' | 'M' | 'L';
  metric?: string;
}

export interface PartnerClient {
  id: string;
  name: string;
  company: string;
  industry: string;
  country: string;
  overallHealth: number;
  criticalPillar: string;
  lastAssessedDate: string;
  status: 'needs_call' | 'stable' | 'active';
  pillarScores: PillarScores;
  drivers?: Record<string, any>;
}

export interface PartnerAlert {
  id: string;
  clientId: string;
  clientName: string;
  type: string;
  severity: 'critical' | 'serious' | 'watch';
  message: string;
  action: string;
  date: string;
}

export interface AuditLogEntry {
  id: string;
  actorId: string;
  actorName: string;
  actorRole: string;
  action: string;
  targetResource: string;
  targetId: string;
  timestamp: string;
  changes: any;
  metadata?: any;
}

// --- SIGNAL-BASED ENGINE TYPES ---

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
  | 'dispute_tax' | 'supplier_short_delivery' | 'scriptless_selling' | 'careless_handling';

export type PillarId = 'Operations' | 'Money' | 'Market' | 'Leadership' | 'Innovation' | 'Risk' | 'People';

export interface LibraryItem {
  id: string;
  industry: string;
  line_type: string[]; // e.g., ['milling', 'drying'] or ['all']
  pillar: PillarId;
  signal_tags: SignalTag[];
  severity_fit: Array<'Watch' | 'Critical' | 'Stable' | 'Strong' | 'Emergency'>;
  business_size_fit: Array<'solo' | 'small_team' | 'sme' | 'enterprise'>;
  text: string;
  type: 'strength' | 'leak' | 'kpi' | 'hook' | 'mission_brief';
  // Optional links
  kpi_links?: string[];
  action_links?: string[];
  proof_templates?: string[];
  // Dynamic Report Fields
  hook_text?: string;
  cost_text?: string;
  cliffhanger_text?: string;
  kpi_text?: string;
  fix_task_ids?: string[];
}

export interface QuestionDefinition {
  qid: string;
  industry: string;
  line_type: string[];
  pillar: PillarId;
  signal_tags: SignalTag[];
  weight: number; // 1.0 standard, 1.5 high impact
  textA: string; // The "Leak" behavior
  textB: string; // The "Control" behavior
  species_notes?: Record<string, string>;
  kpi_links?: string[];
  actions_7d?: string[];
  actions_30d?: string[];
}

export interface ActionDefinition {
  action_id: string;
  industry: string;
  line_type: string[];
  pillar: PillarId;
  signal_tags: SignalTag[];
  title: string;
  days: 7 | 30;
  effort: 'S' | 'M' | 'L';
  type?: string;
  text?: string;
  default_owner_by_size?: Record<string, string>;
  kpi_links?: string[];
  proof_required?: string[];
  impact_score?: number;
}
