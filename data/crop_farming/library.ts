import { LibraryItem } from '../../types';

export const CROP_FARMING_LIBRARY: LibraryItem[] = [
    // 1. Market & Sales -> Market
    {
        id: 'strength_sell_before_plant',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "We sell before we plant (forward commitments, buyer intent, or clear demand signals).",
        signal_tags: ['market_sales_revenue'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_customer_segmentation',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "We segment customers (processors, exporters, retail) and tailor our offer.",
        signal_tags: ['market_sales_revenue'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_quality_proof',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'strength',
        text: "We can prove quality with moisture readings, sorting records, and consistency.",
        signal_tags: ['market_sales_revenue'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_forced_selling',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "We plant first, then 'look for buyers', leading to forced selling at low prices.",
        signal_tags: ['market_sales_revenue'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_price_taker',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "We sell to whoever shows up with cash, acting as price takers.",
        signal_tags: ['market_sales_revenue'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_quality_inconsistency',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "Buyers reject or downgrade produce often due to quality inconsistency.",
        signal_tags: ['market_sales_revenue'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_revenue_per_ha',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'kpi',
        text: "Gross revenue per hectare / acre.",
        signal_tags: ['market_sales_revenue'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_contract_sales',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Market',
        type: 'kpi',
        text: "% sales under contract/commitment before harvest.",
        signal_tags: ['market_sales_revenue'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 2. Production & Agronomy -> Operations
    {
        id: 'strength_gap_plan',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "We follow a GAP-style production plan (land prep → planting → nutrition → protection).",
        signal_tags: ['production_agronomy_yield'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_ipm_scouting',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "We do scouting and apply IPM—not 'spray and pray'.",
        signal_tags: ['production_agronomy_yield'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_yield_targets',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'strength',
        text: "We have yield targets per plot and compare actual vs target.",
        signal_tags: ['production_agronomy_yield'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_unknown_yield_variance',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "We don’t know why yields vary between plots (no diagnosis culture).",
        signal_tags: ['production_agronomy_yield'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_reactive_pest_control',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "Pest/disease control is reactive (damage first, action later).",
        signal_tags: ['production_agronomy_yield'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_copy_neighbors',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "We 'copy neighbors' instead of following crop requirements.",
        signal_tags: ['production_agronomy_yield'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_yield_variance',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Yield per hectare/acre + variance across plots.",
        signal_tags: ['production_agronomy_yield'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_germination_rate',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Germination % / stand count at 7–14 days.",
        signal_tags: ['production_agronomy_yield'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 3. Post-Harvest & Quality -> Operations (Quality)
    {
        id: 'strength_safe_storage',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "We measure moisture and store at safe levels for the commodity.",
        signal_tags: ['post_harvest_loss_control'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_grade_separation',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "We separate grades immediately to avoid quality dilution.",
        signal_tags: ['post_harvest_loss_control'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_ground_drying',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "We dry on bare ground or in ways that cause contamination.",
        signal_tags: ['post_harvest_loss_control'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_guessed_moisture',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "Moisture is guessed by feel; storage losses are accepted as 'normal'.",
        signal_tags: ['post_harvest_loss_control'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_post_harvest_loss',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Post-harvest loss rate (% weight/quality loss).",
        signal_tags: ['post_harvest_loss_control'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_grade_a_percent',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Grade A percentage after sorting.",
        signal_tags: ['post_harvest_loss_control'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 4. Inputs & Procurement -> Money (Cost)
    {
        id: 'strength_strategic_buying',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'strength',
        text: "We plan inputs before season and buy strategically (not emergency buying).",
        signal_tags: ['inputs_procurement_cost'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_input_tracking',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'strength',
        text: "We track input use per plot for traceability and cost control.",
        signal_tags: ['inputs_procurement_cost'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_peak_price_buying',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "We buy late at peak prices; emergency purchases kill margin.",
        signal_tags: ['inputs_procurement_cost'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_unknown_roi',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "We don’t know input ROI (fertilizer cost vs yield gain).",
        signal_tags: ['inputs_procurement_cost'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_input_cost_ha',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'kpi',
        text: "Input cost per hectare/acre.",
        signal_tags: ['inputs_procurement_cost'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 5. Finance & Cashflow -> Money
    {
        id: 'strength_true_costing',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'strength',
        text: "We track true cost of production (including labor, transport, losses).",
        signal_tags: ['finance_cashflow_survival'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_cashflow_planning',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'strength',
        text: "We plan cashflow (planting → mid-season → harvest → selling).",
        signal_tags: ['finance_cashflow_survival'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_cash_profit_confusion',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "We measure 'profit' by cash left in pocket, not by true margin.",
        signal_tags: ['finance_cashflow_survival'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_early_selling_distress',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "We sell early at low prices to solve immediate cash problems.",
        signal_tags: ['finance_cashflow_survival'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_gross_margin_crop',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'kpi',
        text: "Gross margin per crop / per plot.",
        signal_tags: ['finance_cashflow_survival'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 6. People & Labor -> People
    {
        id: 'strength_task_planning',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'strength',
        text: "Clear task planning (weekly work plan + responsibilities).",
        signal_tags: ['people_labor_productivity'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_quality_incentives',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'strength',
        text: "Incentives align with quality (not just speed).",
        signal_tags: ['people_labor_productivity'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_labor_shortages',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'leak',
        text: "Labor shortages hit at peak times due to poor planning.",
        signal_tags: ['people_labor_productivity'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_weak_supervision',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'leak',
        text: "Poor supervision causes missed timings and rework.",
        signal_tags: ['people_labor_productivity'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_labor_cost_ha',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'kpi',
        text: "Labor cost per hectare/acre.",
        signal_tags: ['people_labor_productivity'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 7. Systems & Records -> Innovation (Process)
    {
        id: 'strength_data_decisions',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Innovation',
        type: 'strength',
        text: "Decisions use numbers (yield, moisture, price, loss rates).",
        signal_tags: ['systems_records_data'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_emotional_decisions',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'leak',
        text: "Decisions are emotional ('prices look bad') not data-driven.",
        signal_tags: ['systems_records_data'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_record_completeness',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'kpi',
        text: "Record completeness score (% of key logs maintained).",
        signal_tags: ['systems_records_data'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },

    // 8. Risk & Resilience -> Innovation (Resilience)
    {
        id: 'strength_weather_plan',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Innovation',
        type: 'strength',
        text: "We have a plan for weather risks (planting windows, drainage, varieties).",
        signal_tags: ['risk_compliance_resilience'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_shock_crisis',
        industry: 'crop_farming',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'leak',
        text: "No contingency plan; every shock (pest, weather) becomes a crisis sale.",
        signal_tags: ['risk_compliance_resilience'],
        line_type: ['Farming'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_resilient_practices',
        industry: 'crop_farming',
        business_size_fit: ['medium', 'large'],
        pillar: 'Innovation',
        type: 'kpi',
        text: "% area under resilient practices (mulch, drip, drainage).",
        signal_tags: ['risk_compliance_resilience'],
        line_type: ['Farming'],
        severity_fit: ['Strong']
    }
];
