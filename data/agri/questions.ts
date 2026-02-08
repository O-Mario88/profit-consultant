
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- QUICK SCAN ---
    {
        qid: 'QS_ENGINE_01',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['stockout_tax'],
        weight: 1.2,
        textA: "We usually notice demand first, then reorder quickly to catch up.",
        textB: "We usually reorder before demand spikes, based on minimum stock levels."
    },
    {
        qid: 'QS_ENGINE_02',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['inventory_accuracy_gap'],
        weight: 1.0,
        textA: "Stock records guide us, but we adjust when reality surprises us.",
        textB: "Stock records are treated as reality, so we reconcile to keep them accurate."
    },
    {
        qid: 'QS_FUEL_01',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['margin_mirage'],
        weight: 1.2,
        textA: "A good month feels like strong sales volume.",
        textB: "A good month feels like protected margin and clean cash flow."
    },
    {
        qid: 'QS_FUEL_02',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['credit_chokehold'],
        weight: 1.1,
        textA: "We’re flexible with credit because it helps relationships.",
        textB: "We’re structured with credit because it protects relationships and cash."
    },
    {
        qid: 'QS_VOICE_01',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['bundle_blindspot'],
        weight: 1.0,
        textA: "Customers often buy one item at a time and choose the rest later.",
        textB: "Customers often buy solution bundles because we guide the full plan."
    },
    {
        qid: 'QS_VOICE_02',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['followup_gap'],
        weight: 1.0,
        textA: "Customers return when they’re ready; we don’t chase too much.",
        textB: "Customers return more predictably because we follow up by cycle."
    },
    {
        qid: 'QS_BRAIN_01',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['kpi_cadence_gap'],
        weight: 1.0,
        textA: "The business runs best when I’m personally present to steer it.",
        textB: "The business runs best when routines and KPIs steer it."
    },
    {
        qid: 'QS_BRAIN_02',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['procurement_panic_buying'],
        weight: 1.1,
        textA: "Procurement happens when we see demand rising or stock falling.",
        textB: "Procurement is planned ahead using seasons, lead time, and supplier performance."
    },
    {
        qid: 'QS_PULSE_01',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['sku_clutter'],
        weight: 1.0,
        textA: "We keep many SKUs so customers always find something.",
        textB: "We keep focused winners so customers find what works and we protect cash."
    },
    {
        qid: 'QS_PULSE_02',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['no_testing_rhythm'],
        weight: 0.9,
        textA: "We keep offers steady; change can confuse customers.",
        textB: "We test seasonal offers carefully so growth doesn’t rely on luck."
    },
    {
        qid: 'QS_SHIELD_01',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['supplier_doc_gap'],
        weight: 1.1,
        textA: "Supplier trust is important; paperwork is useful but not central.",
        textB: "Supplier trust is important; paperwork makes trust provable."
    },
    {
        qid: 'QS_SHIELD_02',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['expiry_compliance_risk'],
        weight: 1.0,
        textA: "Expiry checks happen when we remember or when stock looks old.",
        textB: "Expiry checks are built into how we manage shelves and reorders."
    },
    {
        qid: 'QS_TRIBE_01',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['training_gap'],
        weight: 1.0,
        textA: "People learn products best through experience on the job.",
        textB: "People learn products best through a mix of experience and structured training."
    },
    {
        qid: 'QS_TRIBE_02',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['sales_without_standards'],
        weight: 1.0,
        textA: "Each staff member has their own selling style that customers adapt to.",
        textB: "We use a shared selling standard so customers get consistent guidance."
    },

    // --- DEEP SCAN QUESTIONS ---
    {
        qid: 'DS_ENGINE_01',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['receiving_slippage', 'traceability_gap'],
        weight: 1.1,
        textA: "Receiving is mainly about speed; we fix mismatches later if needed.",
        textB: "Receiving is mainly about verification; we confirm quantities and batch/lot details immediately.",
        species_notes: {
            "seeds": "lot/variety matters for disputes",
            "fertilizer": "batch consistency matters for complaints",
            "chemicals": "batch and compliance risk are highest",
            "vet_supplies": "batch and expiry matter during outbreaks"
        }
    },
    {
        qid: 'DS_ENGINE_02',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['restock_delay', 'stockout_tax'],
        weight: 1.2,
        textA: "We restock when we see shelves thinning or customers start asking.",
        textB: "We restock using minimum levels that consider lead time and season pressure."
    },
    {
        qid: 'DS_ENGINE_03',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['queue_to_cash_lag', 'peak_season_chaos'],
        weight: 1.0,
        textA: "Busy days are unpredictable; we just push through.",
        textB: "Busy days follow a routine: staffing, roles, and timed service standards."
    },
    {
        qid: 'DS_ENGINE_04',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['expiry_rotation_gap'],
        weight: 1.0,
        textA: "Expiry is checked when stock looks old or slow-moving.",
        textB: "Expiry is managed continuously with rotation, labeling, and a risk shelf."
    },
    {
        qid: 'DS_ENGINE_05',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['dispatch_delivery_instability'],
        weight: 0.9,
        textA: "Deliveries happen when transport is available.",
        textB: "Deliveries follow a plan with proof-of-delivery and reliable timelines."
    },
    {
        qid: 'DS_ENGINE_06',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['returns_damage_blindspot'],
        weight: 0.9,
        textA: "Returns and damages are handled case-by-case with minimal tracking.",
        textB: "Returns and damages are logged consistently so we can reduce them."
    },
    {
        qid: 'DS_ENGINE_07',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['inventory_accuracy_gap', 'manual_dependency'],
        weight: 1.0,
        textA: "We mainly rely on staff knowledge to know what is in stock.",
        textB: "We mainly rely on records and routines so stock knowledge isn’t person-dependent."
    },
    {
        qid: 'DS_ENGINE_08',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['receiving_slippage', 'inventory_accuracy_gap'],
        weight: 1.0,
        textA: "We sometimes skip strict checks to avoid delaying receiving.",
        textB: "We keep receiving strict because small receiving errors become big losses later."
    },
    {
        qid: 'DS_ENGINE_09',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['peak_season_chaos', 'queue_to_cash_lag'],
        weight: 0.9,
        textA: "Peak season just means longer hours and harder work.",
        textB: "Peak season means stronger systems: roles, routines, and measurable speed."
    },
    {
        qid: 'DS_ENGINE_10',
        industry: 'agri_input',
        pillar: 'Engine',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['inventory_accuracy_gap', 'silent_shrink'],
        weight: 1.1,
        textA: "We count stock mainly when we suspect a problem.",
        textB: "We count stock on schedule and investigate variances as a standard practice."
    },

    {
        qid: 'DS_FUEL_01',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['pricing_inconsistency', 'category_margin_blindspot'],
        weight: 1.2,
        textA: "Pricing changes depending on the customer and the moment.",
        textB: "Pricing follows category bands so we protect margin and stay consistent."
    },
    {
        qid: 'DS_FUEL_02',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['discount_addiction'],
        weight: 1.0,
        textA: "Discounts are our easiest way to save a deal.",
        textB: "Discounts are a tool we track, so we know when they help or hurt."
    },
    {
        qid: 'DS_FUEL_03',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['credit_chokehold', 'payment_terms_risk'],
        weight: 1.2,
        textA: "We extend credit mostly to keep relationships smooth.",
        textB: "We extend credit with clear rules so relationships stay smooth and cash stays healthy."
    },
    {
        qid: 'DS_FUEL_04',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['dead_stock_cemetery'],
        weight: 1.1,
        textA: "Slow movers are normal; eventually they sell.",
        textB: "Slow movers are monitored; we clear them before they become a cash trap."
    },
    {
        qid: 'DS_FUEL_05',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['cash_recon_gap'],
        weight: 1.0,
        textA: "Cash and mobile money are reconciled when time allows.",
        textB: "Cash and mobile money are reconciled routinely because small gaps compound."
    },
    {
        qid: 'DS_FUEL_06',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['silent_shrink'],
        weight: 1.0,
        textA: "Shrinkage happens in this business; we accept it as part of operations.",
        textB: "Shrinkage happens in this business; we measure it so it doesn’t grow silently."
    },
    {
        qid: 'DS_FUEL_07',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['supplier_terms_weak', 'procurement_panic_buying'],
        weight: 1.0,
        textA: "Supplier terms are fixed; we focus on moving product.",
        textB: "Supplier terms affect survival; we negotiate where possible."
    },
    {
        qid: 'DS_FUEL_08',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['margin_mirage'],
        weight: 1.1,
        textA: "We judge performance mainly by sales volume and customer traffic.",
        textB: "We judge performance mainly by margin, cash health, and repeat customers."
    },
    {
        qid: 'DS_FUEL_09',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['category_margin_blindspot'],
        weight: 1.0,
        textA: "We have a general sense of what’s profitable.",
        textB: "We track which categories and SKUs are actually profitable."
    },
    {
        qid: 'DS_FUEL_10',
        industry: 'agri_input',
        pillar: 'Fuel',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['dead_stock_cemetery', 'expiry_rotation_gap'],
        weight: 1.0,
        textA: "We notice expiry risk when items stop moving.",
        textB: "We surface expiry risk early and act before it becomes a loss."
    },

    {
        qid: 'DS_VOICE_01',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['bundle_blindspot'],
        weight: 1.0,
        textA: "Customers often buy one key item and decide the rest later.",
        textB: "Customers often buy a complete solution because we guide the full plan."
    },
    {
        qid: 'DS_VOICE_02',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['trust_leak', 'reputation_risk_loop'],
        weight: 1.2,
        textA: "Trust comes mainly from personal relationships and familiarity.",
        textB: "Trust comes from relationships plus proof (docs, guidance, consistency)."
    },
    {
        qid: 'DS_VOICE_03',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['followup_gap', 'repeat_order_drift'],
        weight: 1.0,
        textA: "Follow-up is occasional; customers return when they need something.",
        textB: "Follow-up is scheduled by cycle so customers return predictably."
    },
    {
        qid: 'DS_VOICE_04',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['advice_to_sale_gap'],
        weight: 0.9,
        textA: "We give advice freely; sales happen when customers decide.",
        textB: "We give advice with a simple next step so it converts into sales."
    },
    {
        qid: 'DS_VOICE_05',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['complaint_handling_gap'],
        weight: 0.9,
        textA: "Complaints are handled quietly so situations don’t escalate.",
        textB: "Complaints are handled transparently so trust grows through resolution."
    },
    {
        qid: 'DS_VOICE_06',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['channel_dependency'],
        weight: 0.9,
        textA: "One strong channel/location drives most of our sales.",
        textB: "We spread demand across multiple channels so we’re not fragile."
    },
    {
        qid: 'DS_VOICE_07',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['referral_weakness'],
        weight: 0.8,
        textA: "Referrals happen naturally; we don’t ask much.",
        textB: "Referrals happen naturally; we also ask systematically and track them."
    },
    {
        qid: 'DS_VOICE_08',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['value_story_gap'],
        weight: 0.9,
        textA: "We mainly explain what the product is and what it contains.",
        textB: "We explain what the product changes for the customer and how to use it safely."
    },
    {
        qid: 'DS_VOICE_09',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['repeat_order_drift'],
        weight: 1.0,
        textA: "Repeat customers depend on who served them last time.",
        textB: "Repeat customers depend on a business system, not a specific person."
    },
    {
        qid: 'DS_VOICE_10',
        industry: 'agri_input',
        pillar: 'Voice',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['bundle_blindspot'],
        weight: 0.8,
        textA: "We don’t want to overwhelm customers with extra recommendations.",
        textB: "We recommend a small, clear bundle that increases success and saves time."
    },

    {
        qid: 'DS_BRAIN_01',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['priority_whiplash'],
        weight: 1.0,
        textA: "Priorities change with daily issues and urgent customer requests.",
        textB: "Priorities change when needed, but they’re guided by weekly targets."
    },
    {
        qid: 'DS_BRAIN_02',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['no_owner_syndrome'],
        weight: 1.1,
        textA: "When problems happen, whoever is available jumps in to fix it.",
        textB: "When problems happen, we assign an owner so the fix stays fixed."
    },
    {
        qid: 'DS_BRAIN_03',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['kpi_cadence_gap'],
        weight: 1.0,
        textA: "We review performance when we feel something is off.",
        textB: "We review performance on a schedule so drift is caught early."
    },
    {
        qid: 'DS_BRAIN_04',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['procurement_panic_buying'],
        weight: 1.1,
        textA: "We buy urgently when demand rises or stock runs low.",
        textB: "We buy early using a season plan and supplier lead times."
    },
    {
        qid: 'DS_BRAIN_05',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['training_planning_gap'],
        weight: 0.9,
        textA: "Training happens as questions arise during work.",
        textB: "Training happens routinely so knowledge is consistent under pressure."
    },
    {
        qid: 'DS_BRAIN_06',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['meeting_no_action'],
        weight: 0.9,
        textA: "Meetings help us stay informed about what’s happening.",
        textB: "Meetings help us decide actions, owners, and deadlines."
    },
    {
        qid: 'DS_BRAIN_07',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['forecasting_guesswork'],
        weight: 1.0,
        textA: "Forecasting is mostly experience and instinct.",
        textB: "Forecasting blends experience with season signals and customer lists."
    },
    {
        qid: 'DS_BRAIN_08',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['role_clarity_gap'],
        weight: 0.9,
        textA: "People help wherever needed; roles are flexible.",
        textB: "People help wherever needed; roles still have clear ownership for outcomes."
    },
    {
        qid: 'DS_BRAIN_09',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['supplier_selection_undisciplined'],
        weight: 0.9,
        textA: "Supplier choice is mostly relationships and availability.",
        textB: "Supplier choice includes relationships plus performance and documentation."
    },
    {
        qid: 'DS_BRAIN_10',
        industry: 'agri_input',
        pillar: 'Brain',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['management_by_guessing'],
        weight: 1.0,
        textA: "We can tell how things are going by being close to the operations.",
        textB: "We can tell how things are going by watching a few key numbers weekly."
    },

    {
        qid: 'DS_PULSE_01',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['assortment_confusion', 'sku_clutter'],
        weight: 1.0,
        textA: "We keep many SKUs so most customers find something that fits.",
        textB: "We keep enough SKUs to serve well while protecting cash with winners."
    },
    {
        qid: 'DS_PULSE_02',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['bundle_engine_missing'],
        weight: 1.0,
        textA: "We sell items as requested; bundles depend on the staff member.",
        textB: "We sell a few standard bundles so solutions are easy and consistent."
    },
    {
        qid: 'DS_PULSE_03',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['no_testing_rhythm'],
        weight: 0.9,
        textA: "We change offers when we feel the market has shifted.",
        textB: "We test offers in small pilots and scale what proves itself."
    },
    {
        qid: 'DS_PULSE_04',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['slow_mover_attachment'],
        weight: 0.9,
        textA: "We keep slow movers because they might become useful later.",
        textB: "We clear slow movers before they become a cash trap."
    },
    {
        qid: 'DS_PULSE_05',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['segment_blindspot'],
        weight: 0.8,
        textA: "We stock products that generally sell in this area.",
        textB: "We stock products based on customer segments and cycle needs."
    },
    {
        qid: 'DS_PULSE_06',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['seasonal_offer_stagnation'],
        weight: 0.8,
        textA: "Our seasonal offers are mostly the same because they’re familiar.",
        textB: "Our seasonal offers evolve because we learn from last season."
    },
    {
        qid: 'DS_PULSE_07',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['offer_measurement_gap'],
        weight: 0.8,
        textA: "We can tell if an offer worked by how busy we felt.",
        textB: "We can tell if an offer worked by basket size and repeat rate."
    },
    {
        qid: 'DS_PULSE_08',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['low_margin_skus'],
        weight: 0.9,
        textA: "We keep low-margin items because they attract customers.",
        textB: "We keep low-margin items only if they lead to profitable bundles."
    },
    {
        qid: 'DS_PULSE_09',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['customer_experience_stagnation'],
        weight: 0.8,
        textA: "Customer experience is mostly about being polite and helpful.",
        textB: "Customer experience includes speed, clarity, and consistent follow-up."
    },
    {
        qid: 'DS_PULSE_10',
        industry: 'agri_input',
        pillar: 'Pulse',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['bundle_engine_missing', 'bundle_blindspot'],
        weight: 0.9,
        textA: "Bundling depends on how confident the staff member feels.",
        textB: "Bundling is a simple system the staff can follow even under pressure."
    },

    {
        qid: 'DS_SHIELD_01',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['supplier_doc_gap', 'compliance_shock'],
        weight: 1.2,
        textA: "We keep documents when needed; we can find them if asked.",
        textB: "We keep documents organized so we’re ready before we’re asked."
    },
    {
        qid: 'DS_SHIELD_02',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['counterfeit_exposure'],
        weight: 1.3,
        textA: "Counterfeit risk feels low because we know our suppliers.",
        textB: "Counterfeit risk is managed actively because trust must be provable."
    },
    {
        qid: 'DS_SHIELD_03',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Chemicals', 'Vet Supplies', 'Fertilizer', 'Seeds'],
        signal_tags: ['safe_handling_gap', 'liability_landmine'],
        weight: 1.1,
        textA: "Safety guidance is given when customers ask questions.",
        textB: "Safety guidance is standard because misuse can become a business risk."
    },
    {
        qid: 'DS_SHIELD_04',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['expiry_compliance_risk'],
        weight: 1.1,
        textA: "Expiry is monitored, but not always audited.",
        textB: "Expiry is monitored and audited as a routine to avoid risky sales."
    },
    {
        qid: 'DS_SHIELD_05',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['policy_vagueness'],
        weight: 0.9,
        textA: "Policies are flexible so we can treat customers fairly.",
        textB: "Policies are clear so we can treat customers fairly and consistently."
    },
    {
        qid: 'DS_SHIELD_06',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['credit_contract_gap'],
        weight: 1.0,
        textA: "Credit is mainly managed by trust and verbal agreement.",
        textB: "Credit is mainly managed by simple written terms and follow-up."
    },
    {
        qid: 'DS_SHIELD_07',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['traceability_gap'],
        weight: 1.1,
        textA: "Traceability is difficult; we do what we can when needed.",
        textB: "Traceability is built into receiving and sales records so it’s easy when needed."
    },
    {
        qid: 'DS_SHIELD_08',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['data_security_gap'],
        weight: 0.8,
        textA: "Customer and credit information is stored where it’s convenient.",
        textB: "Customer and credit information is stored centrally and protected."
    },
    {
        qid: 'DS_SHIELD_09',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Chemicals', 'Vet Supplies', 'Fertilizer', 'Seeds'],
        signal_tags: ['liability_landmine'],
        weight: 1.0,
        textA: "If customers use products wrongly, it’s mainly their responsibility.",
        textB: "We reduce misuse risk because it can return as a trust and liability issue."
    },
    {
        qid: 'DS_SHIELD_10',
        industry: 'agri_input',
        pillar: 'Shield',
        line_type: ['Chemicals', 'Vet Supplies', 'Fertilizer', 'Seeds'],
        signal_tags: ['compliance_shock'],
        weight: 1.0,
        textA: "Inspections are stressful because requests come unexpectedly.",
        textB: "Inspections are calm because we prepare continuously."
    },

    {
        qid: 'DS_TRIBE_01',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['onboarding_gap', 'training_gap'],
        weight: 1.0,
        textA: "New staff learn by observing and asking as they go.",
        textB: "New staff learn by observing plus a checklist so they become consistent faster."
    },
    {
        qid: 'DS_TRIBE_02',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['sales_without_standards'],
        weight: 1.0,
        textA: "Selling style depends on the person; customers adjust.",
        textB: "Selling style follows a shared standard; customers feel consistency."
    },
    {
        qid: 'DS_TRIBE_03',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['fear_silence'],
        weight: 0.9,
        textA: "People prefer to be careful and avoid escalating issues.",
        textB: "People prefer to surface issues early so small problems don’t become big losses."
    },
    {
        qid: 'DS_TRIBE_04',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Chemicals', 'Vet Supplies', 'Fertilizer', 'Seeds'],
        signal_tags: ['ethics_drift'],
        weight: 1.1,
        textA: "Incentives mainly reward sales volume because volume drives survival.",
        textB: "Incentives balance volume with repeat customers and safe guidance."
    },
    {
        qid: 'DS_TRIBE_05',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['hero_staff_dependence'],
        weight: 1.0,
        textA: "One or two key people keep things running smoothly.",
        textB: "The system keeps things running smoothly even if key people are away."
    },
    {
        qid: 'DS_TRIBE_06',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['cross_team_friction'],
        weight: 0.9,
        textA: "Sales and finance negotiate credit in the moment.",
        textB: "Sales and finance share a credit rulebook so decisions are consistent."
    },
    {
        qid: 'DS_TRIBE_07',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['service_inconsistency'],
        weight: 0.9,
        textA: "Customer experience depends on who is present and how busy we are.",
        textB: "Customer experience stays consistent through simple service routines."
    },
    {
        qid: 'DS_TRIBE_08',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['peak_season_burnout'],
        weight: 0.8,
        textA: "Peak season means pushing hard and recovering later.",
        textB: "Peak season means pacing with roles and shifts so quality stays high."
    },
    {
        qid: 'DS_TRIBE_09',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Seeds', 'Fertilizer', 'Chemicals', 'Vet Supplies'],
        signal_tags: ['accountability_soft'],
        weight: 0.8,
        textA: "We focus on effort and intentions when performance is weak.",
        textB: "We focus on coaching and measurable improvement when performance is weak."
    },
    {
        qid: 'DS_TRIBE_10',
        industry: 'agri_input',
        pillar: 'Tribe',
        line_type: ['Chemicals', 'Vet Supplies', 'Fertilizer', 'Seeds'],
        signal_tags: ['training_gap', 'liability_landmine'],
        weight: 1.1,
        textA: "Guidance is mostly based on experience and what customers request.",
        textB: "Guidance is based on experience plus simple reference cards to reduce mistakes."
    }
];
