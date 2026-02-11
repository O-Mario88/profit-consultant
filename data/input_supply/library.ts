import { LibraryItem } from '../../types';

export const INPUT_SUPPLY_LIBRARY: LibraryItem[] = [
    // --- PILLAR: Market (Market & Offer Strategy) ---
    { id: 'LI_INPUT_S_1', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We segment customers (farm size, enterprise type, season) and tailor bundles.", signal_tags: ['market_offer_strategy'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_2', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We stock a clear “core list” plus seasonal add-ons (not random SKUs).", signal_tags: ['market_offer_strategy'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_3', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "Our offers are built around outcomes (yield, survivability, disease control), not just products.", signal_tags: ['market_offer_strategy'], line_type: ['all'], severity_fit: ['Stable'] },

    { id: 'LI_INPUT_L_1', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "We buy what suppliers push, not what customers pull.", signal_tags: ['market_offer_strategy'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_2', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "We carry too many similar SKUs and confuse buyers.", signal_tags: ['market_offer_strategy'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_3', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "We miss season timing and lose the whole cycle.", signal_tags: ['market_offer_strategy'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    { id: 'KPI_INPUT_1', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'kpi', text: "Offer mix margin %", kpi_text: "Top 20 SKU contribution %", signal_tags: ['market_offer_strategy'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_INPUT_2', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'kpi', text: "Seasonal forecast accuracy %", kpi_text: "Promo ROI", signal_tags: ['market_offer_strategy'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- PILLAR: Risk (Product Integrity, Quality & Compliance) ---
    { id: 'LI_INPUT_S_4', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Every batch is traceable; we can answer “who bought what lot.”", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_5', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "We verify seed quality (origin/testing) using recognized methods.", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_6', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "We follow pesticide stewardship expectations and fight illegal/counterfeit channels.", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_7', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'strength', text: "Vet products are controlled; antimicrobials are handled with strict rules.", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Stable'] },

    { id: 'LI_INPUT_L_4', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "We can’t prove authenticity when customers complain.", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_5', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "We mix batches and lose traceability.", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_6', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'leak', text: "Compliance is “someone else’s problem” until a seizure/fine happens.", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    { id: 'KPI_INPUT_3', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'kpi', text: "% SKUs with complete compliance docs", kpi_text: "Counterfeit incident rate", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_INPUT_4', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Risk', type: 'kpi', text: "Batch traceability completeness %", kpi_text: "Returns due to quality %", signal_tags: ['product_integrity_compliance'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- PILLAR: Operations (Sourcing & Supplier Control) ---
    { id: 'LI_INPUT_S_8', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "We use vetted suppliers with clear specs, lead times, and dispute rules.", signal_tags: ['sourcing_supplier_control'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_9', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "We negotiate terms that protect cashflow (credit, returns, quality claims).", signal_tags: ['sourcing_supplier_control'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_10', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "We diversify critical categories to avoid single-supplier shocks.", signal_tags: ['sourcing_supplier_control'], line_type: ['all'], severity_fit: ['Stable'] },

    { id: 'LI_INPUT_L_7', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Supplier selection is based on price only.", signal_tags: ['sourcing_supplier_control'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_8', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Lead times are unknown; we reorder too late.", signal_tags: ['sourcing_supplier_control'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_9', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "No penalties for late/poor-quality deliveries.", signal_tags: ['sourcing_supplier_control'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    { id: 'KPI_INPUT_5', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'kpi', text: "On-time-in-full (OTIF) from suppliers", kpi_text: "Lead time variance", signal_tags: ['sourcing_supplier_control'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_INPUT_6', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'kpi', text: "Supplier concentration risk", kpi_text: "Defect rate", signal_tags: ['sourcing_supplier_control'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- PILLAR: Operations (Inventory, Storage & Fulfillment) ---
    { id: 'LI_INPUT_S_11', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "FEFO is enforced; expiry losses are rare.", signal_tags: ['inventory_storage_fulfillment'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_12', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Storage matches product needs (humidity/heat/light control where required).", signal_tags: ['inventory_storage_fulfillment'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_13', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'strength', text: "Pick/pack accuracy is high; returns are low.", signal_tags: ['inventory_storage_fulfillment'], line_type: ['all'], severity_fit: ['Stable'] },

    { id: 'LI_INPUT_L_10', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Stock counts don’t match reality.", signal_tags: ['inventory_storage_fulfillment'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_11', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Expired stock is discovered too late.", signal_tags: ['inventory_storage_fulfillment'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_12', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'leak', text: "Shrink is “normal” and not investigated.", signal_tags: ['inventory_storage_fulfillment'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    { id: 'KPI_INPUT_7', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'kpi', text: "Inventory accuracy %", kpi_text: "Stock turns", signal_tags: ['inventory_storage_fulfillment'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_INPUT_8', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Operations', type: 'kpi', text: "Stockout rate", kpi_text: "Expiry write-offs", signal_tags: ['inventory_storage_fulfillment'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- PILLAR: Market (Sales Channels & Partner Network) ---
    { id: 'LI_INPUT_S_14', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We run a structured dealer network with standards and training.", signal_tags: ['sales_channels_partner_network'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_15', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We convert walk-ins to repeat customers with simple CRM habits.", signal_tags: ['sales_channels_partner_network'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_16', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'strength', text: "We sell programs/bundles, not just items.", signal_tags: ['sales_channels_partner_network'], line_type: ['all'], severity_fit: ['Stable'] },

    { id: 'LI_INPUT_L_13', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "Sales depend on “who is on shift.”", signal_tags: ['sales_channels_partner_network'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_14', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "Dealers undercut pricing and damage brand trust.", signal_tags: ['sales_channels_partner_network'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_15', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'leak', text: "We don’t know why customers stop buying.", signal_tags: ['sales_channels_partner_network'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    { id: 'KPI_INPUT_9', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'kpi', text: "Partner compliance score", kpi_text: "Average order value", signal_tags: ['sales_channels_partner_network'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_INPUT_10', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Market', type: 'kpi', text: "Customer repeat rate", kpi_text: "Churn rate", signal_tags: ['sales_channels_partner_network'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- PILLAR: People (Customer Success & Stewardship) ---
    { id: 'LI_INPUT_S_17', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'strength', text: "We educate customers on correct use, safe handling, and outcomes.", signal_tags: ['customer_success_stewardship'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_18', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'strength', text: "We align chemical sales with stewardship expectations.", signal_tags: ['customer_success_stewardship'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_19', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'strength', text: "We keep stricter controls for antimicrobials to reduce misuse.", signal_tags: ['customer_success_stewardship'], line_type: ['all'], severity_fit: ['Stable'] },

    { id: 'LI_INPUT_L_16', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'leak', text: "Customers misuse products and blame us.", signal_tags: ['customer_success_stewardship'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_17', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'leak', text: "No advisory scripts; staff guess recommendations.", signal_tags: ['customer_success_stewardship'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_18', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'leak', text: "We sell without checking suitability (crop stage, dosage, herd condition).", signal_tags: ['customer_success_stewardship'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    { id: 'KPI_INPUT_11', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'kpi', text: "Training sessions/month", kpi_text: "Complaint rate", signal_tags: ['customer_success_stewardship'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_INPUT_12', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'People', type: 'kpi', text: "Advisory-assisted sales %", kpi_text: "Product misuse returns %", signal_tags: ['customer_success_stewardship'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- PILLAR: Money (Pricing, Finance & Credit Control) ---
    { id: 'LI_INPUT_S_20', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Pricing is based on landed cost + target margin + season risk.", signal_tags: ['pricing_finance_credit'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_21', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Credit is controlled with limits, reviews, and collections cadence.", signal_tags: ['pricing_finance_credit'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_22', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'strength', text: "Discounts are tracked and justified.", signal_tags: ['pricing_finance_credit'], line_type: ['all'], severity_fit: ['Stable'] },

    { id: 'LI_INPUT_L_19', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "We price from competitors without understanding cost.", signal_tags: ['pricing_finance_credit'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_20', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Credit is emotional; collections are inconsistent.", signal_tags: ['pricing_finance_credit'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_21', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'leak', text: "Discounts are “in the air” and never measured.", signal_tags: ['pricing_finance_credit'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    { id: 'KPI_INPUT_13', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'kpi', text: "Gross margin %", kpi_text: "Net margin %", signal_tags: ['pricing_finance_credit'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_INPUT_14', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Money', type: 'kpi', text: "Discount rate %", kpi_text: "DSO / Bad debt %", signal_tags: ['pricing_finance_credit'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- PILLAR: Leadership (Data, Traceability & Continuous Improvement) ---
    { id: 'LI_INPUT_S_23', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We can trace product movement end-to-end by lot/batch.", signal_tags: ['data_traceability_ci'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_24', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We monitor exceptions (returns, stockouts, shrink) and fix root causes.", signal_tags: ['data_traceability_ci'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_INPUT_S_25', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'strength', text: "We use data to forecast demand and protect availability.", signal_tags: ['data_traceability_ci'], line_type: ['all'], severity_fit: ['Stable'] },

    { id: 'LI_INPUT_L_22', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Decisions rely on “gut feel.”", signal_tags: ['data_traceability_ci'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_23', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "No batch linkage → no recall capability.", signal_tags: ['data_traceability_ci'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_INPUT_L_24', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'leak', text: "Same problems repeat every season.", signal_tags: ['data_traceability_ci'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    { id: 'KPI_INPUT_15', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'kpi', text: "Traceability completeness %", kpi_text: "Forecast accuracy %", signal_tags: ['data_traceability_ci'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'KPI_INPUT_16', industry: 'agriculture', business_size_fit: ['sme', 'enterprise'], pillar: 'Leadership', type: 'kpi', text: "Time-to-close corrective actions", kpi_text: "Returns reasons trend", signal_tags: ['data_traceability_ci'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] }
];
