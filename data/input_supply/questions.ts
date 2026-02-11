import { QuestionDefinition } from '../../types';

export const INPUT_SUPPLY_QUESTIONS: QuestionDefinition[] = [
    // --- PILLAR: Market (Market & Offer Strategy) ---
    // Quick Scan
    {
        qid: 'QS_Input_Mkt_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Plan assortment by supplier deals.",
        textB: "Plan assortment by seasonal calendar.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'QS_Input_Mkt_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Sell mostly single items.",
        textB: "Build bundles per customer segment.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'QS_Input_Mkt_3',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Wait for walk-in demand.",
        textB: "Pre-book orders before season.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'QS_Input_Mkt_4',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Track only total monthly sales.",
        textB: "Track margin by SKU weekly.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },

    // --- PILLAR: Risk (Product Integrity, Quality & Compliance) ---
    // Quick Scan
    {
        qid: 'QS_Input_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Capture only for some products.",
        textB: "Capture lot/batch on every invoice.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'QS_Input_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Put everything straight to shelves.",
        textB: "Quarantine suspect shipments.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'QS_Input_Risk_3',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Provide product only.",
        textB: "Provide labels/SDS + safe-use brief.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'QS_Input_Risk_4',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Sell like normal items.",
        textB: "Restrict controlled vet/chemical sales.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },

    // --- PILLAR: Operations (Sourcing & Supplier Control) ---
    // Quick Scan
    {
        qid: 'QS_Input_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Buy from whoever has stock.",
        textB: "Vetted supplier list + reviews.",
        line_type: ['all'],
        signal_tags: ['sourcing_supplier_control']
    },
    {
        qid: 'QS_Input_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "“Same as last time”.",
        textB: "Contracted quality specs.",
        line_type: ['all'],
        signal_tags: ['sourcing_supplier_control']
    },
    {
        qid: 'QS_Input_Ops_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Pay immediately to secure supply.",
        textB: "Negotiate payment terms.",
        line_type: ['all'],
        signal_tags: ['sourcing_supplier_control']
    },
    {
        qid: 'QS_Input_Ops_4',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Track only buying price.",
        textB: "Track supplier OTIF.",
        line_type: ['all'],
        signal_tags: ['sourcing_supplier_control']
    },

    // --- PILLAR: Operations (Inventory, Storage & Fulfillment) ---
    // Quick Scan
    {
        qid: 'QS_Input_Ops_5',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "FIFO by convenience.",
        textB: "FEFO by batch.",
        line_type: ['all'],
        signal_tags: ['inventory_storage_fulfillment']
    },
    {
        qid: 'QS_Input_Ops_6',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Annual stock take only.",
        textB: "Weekly cycle counts.",
        line_type: ['all'],
        signal_tags: ['inventory_storage_fulfillment']
    },
    {
        qid: 'QS_Input_Ops_7',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Reorder by intuition.",
        textB: "Reorder points per SKU.",
        line_type: ['all'],
        signal_tags: ['inventory_storage_fulfillment']
    },
    {
        qid: 'QS_Input_Ops_8',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Accept shrink as normal.",
        textB: "Track shrink reasons.",
        line_type: ['all'],
        signal_tags: ['inventory_storage_fulfillment']
    },

    // --- PILLAR: Leadership (Sales Channels & Partner Network) ---
    // Mapped to Leadership for Channel Management
    // Quick Scan
    {
        qid: 'QS_Input_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Any reseller is fine.",
        textB: "Dealer tiering + standards.",
        line_type: ['all'],
        signal_tags: ['sales_channels_partner_network']
    },
    {
        qid: 'QS_Input_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Track only daily revenue.",
        textB: "Track repeat customers.",
        line_type: ['all'],
        signal_tags: ['sales_channels_partner_network']
    },
    {
        qid: 'QS_Input_Lead_3',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Discount freely to close sales.",
        textB: "Control discounts with rules.",
        line_type: ['all'],
        signal_tags: ['sales_channels_partner_network']
    },
    {
        qid: 'QS_Input_Lead_4',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Train partners rarely.",
        textB: "Train partners monthly.",
        line_type: ['all'],
        signal_tags: ['sales_channels_partner_network']
    },

    // --- PILLAR: People (Customer Success & Stewardship) ---
    // Quick Scan
    {
        qid: 'QS_Input_Ppl_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Assume customer knows.",
        textB: "Fit-check script before sale.",
        line_type: ['all'],
        signal_tags: ['customer_success_stewardship']
    },
    {
        qid: 'QS_Input_Ppl_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Hand over and finish.",
        textB: "Safe-use brief for chemicals.",
        line_type: ['all'],
        signal_tags: ['customer_success_stewardship']
    },
    {
        qid: 'QS_Input_Ppl_3',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Same process as feed items.",
        textB: "Vet products sold with controls.",
        line_type: ['all'],
        signal_tags: ['customer_success_stewardship']
    },
    {
        qid: 'QS_Input_Ppl_4',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Track complaints generally.",
        textB: "Track complaints by product/lot.",
        line_type: ['all'],
        signal_tags: ['customer_success_stewardship']
    },

    // --- PILLAR: Money (Pricing, Finance & Credit Control) ---
    // Quick Scan
    {
        qid: 'QS_Input_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Price from competitor price.",
        textB: "Price from landed cost.",
        line_type: ['all'],
        signal_tags: ['pricing_finance_credit']
    },
    {
        qid: 'QS_Input_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Unlimited credit for “good people”.",
        textB: "Credit limits per customer.",
        line_type: ['all'],
        signal_tags: ['pricing_finance_credit']
    },
    {
        qid: 'QS_Input_Money_3',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Anyone discounts to close.",
        textB: "Discount authority matrix.",
        line_type: ['all'],
        signal_tags: ['pricing_finance_credit']
    },
    {
        qid: 'QS_Input_Money_4',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Review only when cash is low.",
        textB: "Weekly receivables review.",
        line_type: ['all'],
        signal_tags: ['pricing_finance_credit']
    },

    // --- PILLAR: Innovation (Data, Traceability & Continuous Improvement) ---
    // Mapped to Innovation for System/Tech
    // Quick Scan
    {
        qid: 'QS_Input_Inno_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "No lot capture.",
        textB: "Lot capture on invoices.",
        line_type: ['all'],
        signal_tags: ['data_traceability_ci']
    },
    {
        qid: 'QS_Input_Inno_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Only end-month review.",
        textB: "Weekly KPI review.",
        line_type: ['all'],
        signal_tags: ['data_traceability_ci']
    },
    {
        qid: 'QS_Input_Inno_3',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Fix issues as they appear.",
        textB: "Root-cause meeting cadence.",
        line_type: ['all'],
        signal_tags: ['data_traceability_ci']
    },
    {
        qid: 'QS_Input_Inno_4',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Manual buying habits.",
        textB: "Forecast + reorder system.",
        line_type: ['all'],
        signal_tags: ['data_traceability_ci']
    },

    // =================================================================================================
    // DEEP SCAN QUESTIONS
    // =================================================================================================

    // --- PILLAR: Market (Market & Offer Strategy) ---
    {
        qid: 'DS_Input_Mkt_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Add SKUs on request often.",
        textB: "Keep a “core SKU list”.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'DS_Input_Mkt_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "One offer for everyone.",
        textB: "Separate retail vs commercial offers.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'DS_Input_Mkt_3',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Rely on posters/price cuts.",
        textB: "Use demo plots/days.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'DS_Input_Mkt_4',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Price changes reactively.",
        textB: "Plan pricing per season.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'DS_Input_Mkt_5',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Promote items (single SKUs).",
        textB: "Promote solutions (programs).",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'DS_Input_Mkt_6',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Track it occasionally.",
        textB: "Track competitor pricing monthly.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'DS_Input_Mkt_7',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Stock based on intuition.",
        textB: "Stock based on velocity.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },
    {
        qid: 'DS_Input_Mkt_8',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Serve “anyone who buys”.",
        textB: "Define target customer avatar.",
        line_type: ['all'],
        signal_tags: ['market_offer_strategy']
    },

    // --- PILLAR: Risk (Product Integrity, Quality & Compliance) ---
    {
        qid: 'DS_Input_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Verify only when issues arise.",
        textB: "Verify supplier licenses routinely.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'DS_Input_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Rely on paper delivery note.",
        textB: "Keep batch photos on receiving.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'DS_Input_Risk_3',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Track expiry by “rough shelf”.",
        textB: "Track expiry by lot.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'DS_Input_Risk_4',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Assume common sense.",
        textB: "Train staff on safe handling.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'DS_Input_Risk_5',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Store by available space.",
        textB: "Store chemicals by compatibility.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'DS_Input_Risk_6',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Handle recalls ad hoc.",
        textB: "Maintain recall procedure.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'DS_Input_Risk_7',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Trust brand reputation only.",
        textB: "Confirm seed germination proof.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },
    {
        qid: 'DS_Input_Risk_8',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Handle quietly with no record.",
        textB: "Maintain suspect goods log.",
        line_type: ['all'],
        signal_tags: ['product_integrity_compliance']
    },

    // --- PILLAR: Operations (Sourcing & Supplier Control) ---
    {
        qid: 'DS_Input_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Single source by habit.",
        textB: "Dual-source critical SKUs.",
        line_type: ['all'],
        signal_tags: ['sourcing_supplier_control']
    },
    {
        qid: 'DS_Input_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Use referrals only.",
        textB: "Use approved supplier checklist.",
        line_type: ['all'],
        signal_tags: ['sourcing_supplier_control']
    },
    {
        qid: 'DS_Input_Ops_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Skip documentation.",
        textB: "Require COA/verification on risk items.",
        line_type: ['all'],
        signal_tags: ['sourcing_supplier_control']
    },
    {
        qid: 'DS_Input_Ops_4',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Reorder when shelves look low.",
        textB: "Set reorder lead-time triggers.",
        line_type: ['all'],
        signal_tags: ['sourcing_supplier_control']
    },

    // --- PILLAR: Operations (Inventory, Storage & Fulfillment) ---
    {
        qid: 'DS_Input_Ops_5',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Store everything together.",
        textB: "Separate high-risk items.",
        line_type: ['all'],
        signal_tags: ['inventory_storage_fulfillment']
    },
    {
        qid: 'DS_Input_Ops_6',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Use ambient always.",
        textB: "Control temperature/humidity where needed.",
        line_type: ['all'],
        signal_tags: ['inventory_storage_fulfillment']
    },
    {
        qid: 'DS_Input_Ops_7',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Manual labels only.",
        textB: "Barcode/QR where possible.",
        line_type: ['all'],
        signal_tags: ['inventory_storage_fulfillment']
    },
    {
        qid: 'DS_Input_Ops_8',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Memory-based picking.",
        textB: "Pick lists + double-check.",
        line_type: ['all'],
        signal_tags: ['inventory_storage_fulfillment']
    },

    // --- PILLAR: Leadership (Sales Channels & Partner Network) ---
    {
        qid: 'DS_Input_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "No follow-up habit.",
        textB: "Use a customer follow-up list.",
        line_type: ['all'],
        signal_tags: ['sales_channels_partner_network']
    },
    {
        qid: 'DS_Input_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Offer single products mostly.",
        textB: "Offer bundles/solutions.",
        line_type: ['all'],
        signal_tags: ['sales_channels_partner_network']
    },
    {
        qid: 'DS_Input_Lead_3',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Don’t track lead sources.",
        textB: "Track lead sources.",
        line_type: ['all'],
        signal_tags: ['sales_channels_partner_network']
    },
    {
        qid: 'DS_Input_Lead_4',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Shop-only selling.",
        textB: "Field demos/education.",
        line_type: ['all'],
        signal_tags: ['sales_channels_partner_network']
    },

    // --- PILLAR: People (Customer Success & Stewardship) ---
    {
        qid: 'DS_Input_Ppl_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Ask only what they want to buy.",
        textB: "Ask crop stage/herd status.",
        line_type: ['all'],
        signal_tags: ['customer_success_stewardship']
    },
    {
        qid: 'DS_Input_Ppl_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Let them decide dosage.",
        textB: "Provide dosage guidance.",
        line_type: ['all'],
        signal_tags: ['customer_success_stewardship']
    },
    {
        qid: 'DS_Input_Ppl_3',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "No storage guidance.",
        textB: "Explain storage needs.",
        line_type: ['all'],
        signal_tags: ['customer_success_stewardship']
    },
    {
        qid: 'DS_Input_Ppl_4',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Push strongest chemical option.",
        textB: "Offer IPM/alternatives.",
        line_type: ['all'],
        signal_tags: ['customer_success_stewardship']
    },

    // --- PILLAR: Money (Pricing, Finance & Credit Control) ---
    {
        qid: 'DS_Input_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Same price always.",
        textB: "Separate cash vs credit pricing.",
        line_type: ['all'],
        signal_tags: ['pricing_finance_credit']
    },
    {
        qid: 'DS_Input_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "No deposit rules.",
        textB: "Set deposit rules.",
        line_type: ['all'],
        signal_tags: ['pricing_finance_credit']
    },
    {
        qid: 'DS_Input_Money_3',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Track only total revenue.",
        textB: "Track margin by invoice.",
        line_type: ['all'],
        signal_tags: ['pricing_finance_credit']
    },
    {
        qid: 'DS_Input_Money_4',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Apply inconsistently.",
        textB: "Apply penalties/holds consistently.",
        line_type: ['all'],
        signal_tags: ['pricing_finance_credit']
    },

    // --- PILLAR: Innovation (Data, Traceability & Continuous Improvement) ---
    {
        qid: 'DS_Input_Inno_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Use totals only.",
        textB: "Use SKU-level dashboards.",
        line_type: ['all'],
        signal_tags: ['data_traceability_ci']
    },
    {
        qid: 'DS_Input_Inno_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Track batch to warehouse only.",
        textB: "Track batch to customer.",
        line_type: ['all'],
        signal_tags: ['data_traceability_ci']
    },
    {
        qid: 'DS_Input_Inno_3',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Free-text returns notes.",
        textB: "Tag returns with reason codes.",
        line_type: ['all'],
        signal_tags: ['data_traceability_ci']
    },
    {
        qid: 'DS_Input_Inno_4',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "No post-mortems.",
        textB: "Run seasonal post-mortems.",
        line_type: ['all'],
        signal_tags: ['data_traceability_ci']
    }
];
