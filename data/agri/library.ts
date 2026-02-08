
import { LibraryItem, SignalTag } from '../../types';

export const library: LibraryItem[] = [
    // --- HOOKS ---
    {
        id: 'HOOK_ENGINE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['stockout_tax'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'hook',
        text: "Stockouts are not a mistake — they’re a tax you pay at the worst moment."
    },
    {
        id: 'HOOK_ENGINE_002',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['queue_to_cash_lag'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'hook',
        text: "Queue-to-cash lag is lost money hiding in minutes."
    },
    {
        id: 'HOOK_FUEL_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['margin_mirage'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'hook',
        text: "Margin mirage: sales look healthy, profit feels missing."
    },
    {
        id: 'HOOK_FUEL_002',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['dead_stock_cemetery'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'hook',
        text: "Dead stock is cash with an expiry date."
    },
    {
        id: 'HOOK_VOICE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Voice',
        signal_tags: ['trust_leak'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'hook',
        text: "Trust leak: once farmers doubt authenticity, price pressure follows."
    },
    {
        id: 'HOOK_VOICE_002',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Voice',
        signal_tags: ['advice_to_sale_gap'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'hook',
        text: "Advice-to-sale gap: your knowledge isn’t converting into revenue."
    },
    {
        id: 'HOOK_SHIELD_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Shield',
        signal_tags: ['counterfeit_exposure'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'hook',
        text: "Counterfeit exposure is not a risk — it’s a reputation earthquake."
    },
    {
        id: 'HOOK_TRIBE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Tribe',
        signal_tags: ['sales_without_standards'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'hook',
        text: "Sales without standards creates customers who only trust one staff member."
    },

    // --- LEAKS ---
    {
        id: 'LEAK_ENGINE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['stockout_tax', 'restock_delay'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'leak',
        text: "Stockouts show up exactly when demand peaks, which creates immediate lost sales and a longer-term trust loss that reduces repeat orders."
    },
    {
        id: 'LEAK_FUEL_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['margin_mirage', 'pricing_inconsistency'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'leak',
        text: "Sales can look strong while profit stays missing because pricing and replacement costs are not consistently controlled by category."
    },
    {
        id: 'LEAK_VOICE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Voice',
        signal_tags: ['trust_leak', 'reputation_risk_loop'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'leak',
        text: "When customers are uncertain about authenticity or correct use, price pressure increases and one negative story spreads faster than your marketing."
    },
    {
        id: 'LEAK_BRAIN_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Brain',
        signal_tags: ['no_owner_syndrome', 'meeting_no_action'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'leak',
        text: "Problems repeat because fixes are not owned—issues get discussed, but the business doesn’t run a closure system."
    },
    {
        id: 'LEAK_PULSE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Pulse',
        signal_tags: ['sku_clutter', 'slow_mover_attachment'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'leak',
        text: "Cash quietly gets trapped in slow movers and low-margin SKUs because assortment decisions are not guided by an 80/20 winners map."
    },
    {
        id: 'LEAK_SHIELD_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Shield',
        signal_tags: ['counterfeit_exposure', 'supplier_doc_gap', 'traceability_gap'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'leak',
        text: "Weak supplier documentation and traceability increases counterfeit and compliance exposure—and makes disputes hard to defend."
    },
    {
        id: 'LEAK_TRIBE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Tribe',
        signal_tags: ['sales_without_standards', 'training_gap'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'leak',
        text: "Inconsistent selling and guidance standards means customers only trust specific staff, and quality drops when those people are absent."
    },

    // --- STRENGTHS ---
    {
        id: 'STR_ENGINE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['stockout_tax'],
        severity_fit: ['Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'strength',
        text: "We rarely get caught with empty shelves during peak buying moments because reorder points are planned for fast movers."
    },
    {
        id: 'STR_FUEL_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['category_margin_blindspot'],
        severity_fit: ['Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'strength',
        text: "We know our true gross margin by category, so pricing decisions protect profit instead of chasing sales volume."
    },
    {
        id: 'STR_VOICE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Voice',
        signal_tags: ['trust_leak'],
        severity_fit: ['Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'strength',
        text: "Customers trust our products because we can explain authenticity, correct use, and product expectations clearly and consistently."
    },
    {
        id: 'STR_BRAIN_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Brain',
        signal_tags: ['kpi_cadence_gap'],
        severity_fit: ['Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'strength',
        text: "We run the business on a weekly KPI rhythm, so decisions are deliberate rather than driven by daily fires."
    },
    {
        id: 'STR_PULSE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Pulse',
        signal_tags: ['assortment_confusion'],
        severity_fit: ['Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'strength',
        text: "Our assortment is focused on winners, so cash is not trapped in SKUs that don’t move or don’t make margin."
    },
    {
        id: 'STR_SHIELD_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Shield',
        signal_tags: ['supplier_doc_gap', 'traceability_gap'],
        severity_fit: ['Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'strength',
        text: "We keep supplier documentation and basic batch traceability ready, so disputes and inspections don’t threaten the business."
    },
    {
        id: 'STR_TRIBE_001',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Tribe',
        signal_tags: ['training_gap', 'sales_without_standards'],
        severity_fit: ['Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'strength',
        text: "Staff use shared guidance standards, so customers get consistent advice and service regardless of who is on duty."
    },

    // --- KPIs ---
    {
        id: 'KPI_ENGINE_STOCKOUT_RATE',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['stockout_tax', 'restock_delay'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Stockout Rate: % of priority SKUs out-of-stock per day"
    },
    {
        id: 'KPI_ENGINE_STOCK_ACCURACY',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['inventory_accuracy_gap', 'silent_shrink'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Stock Accuracy: % POS count matches physical count"
    },
    {
        id: 'KPI_ENGINE_SERVICE_TIME',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Engine',
        signal_tags: ['queue_to_cash_lag', 'peak_season_chaos'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Service Time: Average minutes per customer order"
    },
    {
        id: 'KPI_FUEL_GROSS_MARGIN_BY_CATEGORY',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['margin_mirage', 'category_margin_blindspot'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Gross Margin by Category: Margin % for seeds vs fertilizer vs chemicals vs vet"
    },
    {
        id: 'KPI_FUEL_DSO',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['credit_chokehold', 'payment_terms_risk'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "DSO (Days Sales Outstanding): Average days to collect credit sales"
    },
    {
        id: 'KPI_FUEL_DEAD_STOCK_PCT',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Fuel',
        signal_tags: ['dead_stock_cemetery', 'expiry_rotation_gap'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Dead Stock %: Slow movers + near-expiry value as % of total inventory"
    },
    {
        id: 'KPI_VOICE_REPEAT_RATE',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Voice',
        signal_tags: ['repeat_order_drift', 'followup_gap', 'trust_leak'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Repeat Purchase Rate: % customers returning within the cycle window"
    },
    {
        id: 'KPI_VOICE_BASKET_SIZE',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Voice',
        signal_tags: ['bundle_blindspot', 'advice_to_sale_gap'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Basket Size: Average items/value per visit"
    },
    {
        id: 'KPI_BRAIN_ACTION_CLOSURE',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Brain',
        signal_tags: ['no_owner_syndrome', 'kpi_cadence_gap'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Action Closure Rate: % weekly tasks closed on time"
    },
    {
        id: 'KPI_PULSE_SKU_PRODUCTIVITY',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Pulse',
        signal_tags: ['assortment_confusion', 'sku_clutter', 'slow_mover_attachment'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "SKU Productivity: % SKUs producing 80% of revenue"
    },
    {
        id: 'KPI_SHIELD_TRACE_COVERAGE',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Shield',
        signal_tags: ['traceability_gap', 'supplier_doc_gap', 'counterfeit_exposure'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Traceability Coverage: % stock with supplier doc + batch/lot captured"
    },
    {
        id: 'KPI_TRIBE_TRAINING_PASS',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Tribe',
        signal_tags: ['training_gap', 'sales_without_standards', 'liability_landmine'],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['solo', 'small_team', 'sme', 'enterprise'],
        type: 'kpi',
        text: "Training Pass Rate: % staff passing product knowledge mini-tests"
    },

    // --- MISSION BRIEFS (Composed: Strength/Leak + Hook + Cliffhanger) ---
    // SEEDS
    {
        id: 'mb_seeds_engine',
        industry: 'agri_input',
        line_type: ['Seeds'],
        pillar: 'Engine',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Stockouts are not a mistake — they’re a tax you pay at the worst moment. Stockouts show up exactly when demand peaks, which creates immediate lost sales and a longer-term trust loss that reduces repeat orders. Fix Mode will lock reorder points for top varieties and receiving verification for lot/variety accuracy."
    },
    {
        id: 'mb_seeds_fuel',
        industry: 'agri_input',
        line_type: ['Seeds'],
        pillar: 'Fuel',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Margin mirage: sales look healthy, profit feels missing. Sales can look strong while profit stays missing because pricing and replacement costs are not consistently controlled by category. Fix Mode will map margin bands by seed type and stop end-of-season dead-stock buildup."
    },
    {
        id: 'mb_seeds_voice',
        industry: 'agri_input',
        line_type: ['Seeds'],
        pillar: 'Voice',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Trust leak: once farmers doubt authenticity, price pressure follows. When customers are uncertain about authenticity or correct use, price pressure increases and one negative story spreads faster than your marketing. Fix Mode will create a variety guidance + follow-up routine that increases repeat purchase."
    },
    {
        id: 'mb_seeds_brain',
        industry: 'agri_input',
        line_type: ['Seeds'],
        pillar: 'Brain',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "We run the business on a weekly KPI rhythm, so decisions are deliberate rather than driven by daily fires. Fix Mode turns season planning into a weekly cadence so procurement stops being reactive."
    },
    {
        id: 'mb_seeds_pulse',
        industry: 'agri_input',
        line_type: ['Seeds'],
        pillar: 'Pulse',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Our assortment is focused on winners, so cash is not trapped in SKUs that don’t move or don’t make margin. Fix Mode builds an 80/20 winners map so cash stays in the varieties that move and perform."
    },
    {
        id: 'mb_seeds_shield',
        industry: 'agri_input',
        line_type: ['Seeds'],
        pillar: 'Shield',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Counterfeit exposure is not a risk — it’s a reputation earthquake. Fix Mode adds supplier whitelist + traceability so authenticity becomes provable."
    },
    {
        id: 'mb_seeds_tribe',
        industry: 'agri_input',
        line_type: ['Seeds'],
        pillar: 'Tribe',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Staff use shared guidance standards, so customers get consistent advice and service regardless of who is on duty. Fix Mode certifies staff on top varieties and selling standards so advice stays consistent."
    },

    // FERTILIZER (Similar composition pattern)
    {
        id: 'mb_fertilizer_engine',
        industry: 'agri_input',
        line_type: ['Fertilizer'],
        pillar: 'Engine',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Queue-to-cash lag is lost money hiding in minutes. Fix Mode installs peak-hour service routines so volume days convert into cash without chaos."
    },
    {
        id: 'mb_fertilizer_fuel',
        industry: 'agri_input',
        line_type: ['Fertilizer'],
        pillar: 'Fuel',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Margin mirage: sales look healthy, profit feels missing. Fix Mode locks replacement-cost pricing to protect thin margins."
    },
    {
        id: 'mb_fertilizer_voice',
        industry: 'agri_input',
        line_type: ['Fertilizer'],
        pillar: 'Voice',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Advice-to-sale gap: your knowledge isn’t converting into revenue. Fix Mode builds fertilizer solution packs (crop + stage) to grow basket size and repeat orders."
    },
    {
        id: 'mb_fertilizer_brain',
        industry: 'agri_input',
        line_type: ['Fertilizer'],
        pillar: 'Brain',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode builds a forecast rhythm so you stop buying late at the wrong price."
    },
    {
        id: 'mb_fertilizer_pulse',
        industry: 'agri_input',
        line_type: ['Fertilizer'],
        pillar: 'Pulse',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode prunes low performers and doubles down on winner SKUs and bundles."
    },
    {
        id: 'mb_fertilizer_shield',
        industry: 'agri_input',
        line_type: ['Fertilizer'],
        pillar: 'Shield',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode improves documentation and traceability so disputes don’t destroy trust."
    },
    {
        id: 'mb_fertilizer_tribe',
        industry: 'agri_input',
        line_type: ['Fertilizer'],
        pillar: 'Tribe',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode standardizes selling and guidance so customers trust the store, not just one staff member."
    },

    // CHEMICALS
    {
        id: 'mb_chemicals_engine',
        industry: 'agri_input',
        line_type: ['Chemicals'],
        pillar: 'Engine',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Stockouts show up exactly when demand peaks, which creates immediate lost sales and a longer-term trust loss that reduces repeat orders. Fix Mode ensures outbreak demand doesn’t expose stock planning weaknesses."
    },
    {
        id: 'mb_chemicals_fuel',
        industry: 'agri_input',
        line_type: ['Chemicals'],
        pillar: 'Fuel',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Dead stock is cash with an expiry date. Fix Mode reduces expiry-driven losses and margin leakage."
    },
    {
        id: 'mb_chemicals_voice',
        industry: 'agri_input',
        line_type: ['Chemicals'],
        pillar: 'Voice',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Trust leak: once farmers doubt authenticity, price pressure follows. Fix Mode installs safe-use guidance scripts to protect outcomes and trust."
    },
    {
        id: 'mb_chemicals_brain',
        industry: 'agri_input',
        line_type: ['Chemicals'],
        pillar: 'Brain',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode assigns owners so safety, compliance, and service don’t drift under pressure."
    },
    {
        id: 'mb_chemicals_pulse',
        industry: 'agri_input',
        line_type: ['Chemicals'],
        pillar: 'Pulse',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode launches pest-driven bundles so you sell outcomes, not random products."
    },
    {
        id: 'mb_chemicals_shield',
        industry: 'agri_input',
        line_type: ['Chemicals'],
        pillar: 'Shield',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Counterfeit exposure is not a risk — it’s a reputation earthquake. Fix Mode closes counterfeit and compliance exposure with provable controls."
    },
    {
        id: 'mb_chemicals_tribe',
        industry: 'agri_input',
        line_type: ['Chemicals'],
        pillar: 'Tribe',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode aligns incentives and standards to prevent ‘sell-anything’ behavior."
    },

    // VET SUPPLIES
    {
        id: 'mb_vet_supplies_engine',
        industry: 'agri_input',
        line_type: ['Vet Supplies'],
        pillar: 'Engine',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Stockouts show up exactly when demand peaks, which creates immediate lost sales and a longer-term trust loss that reduces repeat orders. Fix Mode protects critical items so disease spikes don’t become lost revenue."
    },
    {
        id: 'mb_vet_supplies_fuel',
        industry: 'agri_input',
        line_type: ['Vet Supplies'],
        pillar: 'Fuel',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Margin mirage: sales look healthy, profit feels missing. Fix Mode reduces credit-driven cash starvation during urgent demand."
    },
    {
        id: 'mb_vet_supplies_voice',
        industry: 'agri_input',
        line_type: ['Vet Supplies'],
        pillar: 'Voice',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode builds vaccination/deworming reminders that drive repeat purchases."
    },
    {
        id: 'mb_vet_supplies_brain',
        industry: 'agri_input',
        line_type: ['Vet Supplies'],
        pillar: 'Brain',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode installs a cadence so guidance quality stays consistent under pressure."
    },
    {
        id: 'mb_vet_supplies_pulse',
        industry: 'agri_input',
        line_type: ['Vet Supplies'],
        pillar: 'Pulse',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode creates prevention+care bundles that increase basket size and loyalty."
    },
    {
        id: 'mb_vet_supplies_shield',
        industry: 'agri_input',
        line_type: ['Vet Supplies'],
        pillar: 'Shield',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode improves traceability and documentation to reduce disputes and risk."
    },
    {
        id: 'mb_vet_supplies_tribe',
        industry: 'agri_input',
        line_type: ['Vet Supplies'],
        pillar: 'Tribe',
        signal_tags: [],
        severity_fit: ['Critical', 'Watch', 'Stable', 'Strong'],
        business_size_fit: ['all' as any],
        type: 'mission_brief',
        text: "Fix Mode trains staff so advice becomes reliable, not guesswork."
    }
];
