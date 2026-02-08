
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- QUICK SCAN (2 pairs per pillar) ---
    // OPERATIONS
    {
        qid: 'QS_PRODUCE_OPS_01',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['queue_to_rot_lag'],
        weight: 1.0,
        textA: "We move produce when transport is available and adjust as we go.",
        textB: "We move produce using planned pickup/dispatch slots to protect freshness."
    },
    {
        qid: 'QS_PRODUCE_OPS_02',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['shrink_tax', 'weight_slip_drift'],
        weight: 1.2,
        textA: "Weight loss is expected; we don’t track it tightly.",
        textB: "Weight loss is tracked so we can reduce shrink systematically."
    },

    // MONEY
    {
        qid: 'QS_PRODUCE_MON_01',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['margin_mirage'],
        weight: 1.2,
        textA: "A good week is measured by volume traded.",
        textB: "A good week is measured by margin per commodity/route."
    },
    {
        qid: 'QS_PRODUCE_MON_02',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['working_capital_trap', 'supplier_payment_pressure'],
        weight: 1.1,
        textA: "We pay suppliers quickly even if buyers pay later.",
        textB: "We balance supplier payments with buyer terms to protect cash flow."
    },

    // MARKET
    {
        qid: 'QS_PRODUCE_MKT_01',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['buyer_power_trap', 'price_shock_exposure'],
        weight: 1.1,
        textA: "We usually find buyers after we bulk the produce.",
        textB: "We try to secure buyers or terms before buying big."
    },
    {
        qid: 'QS_PRODUCE_MKT_02',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['spec_drift_penalty'],
        weight: 1.0,
        textA: "Quality disputes happen sometimes; it’s normal.",
        textB: "We standardize grading to reduce disputes and downgrades."
    },

    // LEADERSHIP
    {
        qid: 'QS_PRODUCE_LEAD_01',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['management_by_whatsapp'],
        weight: 1.0,
        textA: "The business runs through calls and WhatsApp daily.",
        textB: "The business runs through routines and weekly KPIs."
    },
    {
        qid: 'QS_PRODUCE_LEAD_02',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['field_agent_drift', 'no_owner_syndrome'],
        weight: 1.1,
        textA: "Field buying depends on agent judgment.",
        textB: "Field buying follows clear standards and checks."
    },

    // INNOVATION
    {
        qid: 'QS_PRODUCE_INN_01',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['value_add_blindspot'],
        weight: 1.0,
        textA: "We mostly trade raw produce the same way each season.",
        textB: "We add value (grading/packing) to earn better prices."
    },
    {
        qid: 'QS_PRODUCE_INN_02',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['relationship_moat'], // Used as proxy for lack of testing
        weight: 0.9,
        textA: "We rarely test new buyers/routes.",
        textB: "We test new buyers/routes regularly to reduce dependency."
    },

    // RISK
    {
        qid: 'QS_PRODUCE_RISK_01',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['contract_exposure'],
        weight: 1.2,
        textA: "Deals are mostly based on trust and relationships.",
        textB: "Deals use written terms to protect payment and specs."
    },
    {
        qid: 'QS_PRODUCE_RISK_02',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['traceability_gap'],
        weight: 1.1,
        textA: "Traceability is difficult, so we don’t emphasize it.",
        textB: "Traceability is built to unlock premium buyers and reduce disputes."
    },

    // PEOPLE
    {
        qid: 'QS_PRODUCE_PPL_01',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['handling_damage_culture'],
        weight: 1.1,
        textA: "Handling depends on who is on shift.",
        textB: "Handling follows standards so quality stays consistent."
    },
    {
        qid: 'QS_PRODUCE_PPL_02',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['incentive_misfire'],
        weight: 1.0,
        textA: "People focus on moving fast.",
        textB: "People focus on moving smart—speed plus quality control."
    },

    // --- DEEP SCAN (10 pairs per pillar) ---
    // OPERATIONS
    {
        qid: 'DS_PRODUCE_OPS_01',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['queue_to_rot_lag'],
        weight: 1.1,
        textA: "Pickup timing is flexible; farmers wait until we arrive.",
        textB: "Pickup timing is scheduled to protect freshness."
    },
    {
        qid: 'DS_PRODUCE_OPS_02',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['weight_slip_drift'],
        weight: 1.2,
        textA: "We rarely record weight at each step.",
        textB: "We record weight at buy, load, unload, sell."
    },
    {
        qid: 'DS_PRODUCE_OPS_03',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['sorting_bottleneck'],
        weight: 1.0,
        textA: "Sorting happens when time allows.",
        textB: "Sorting is a defined workflow with throughput targets."
    },
    {
        qid: 'DS_PRODUCE_OPS_04',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['shrink_tax', 'handling_damage_culture'],
        weight: 1.1,
        textA: "We use sacks/crates based on availability.",
        textB: "We use packaging that reduces bruising and loss."
    },
    {
        qid: 'DS_PRODUCE_OPS_05',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['cold_chain_hole'],
        weight: 1.1,
        textA: "Storage is temporary and informal.",
        textB: "Storage has basic standards (shade, ventilation, stacking)."
    },
    {
        qid: 'DS_PRODUCE_OPS_06',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['truck_half_empty_syndrome'],
        weight: 0.9,
        textA: "Trucks leave when full enough.",
        textB: "Trucks leave with load planning and fill rate rules."
    },
    {
        qid: 'DS_PRODUCE_OPS_07',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['dispatch_chaos'],
        weight: 1.0,
        textA: "Dispatch is managed by phone calls.",
        textB: "Dispatch uses a board and slotting."
    },
    {
        qid: 'DS_PRODUCE_OPS_08',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['spec_drift_penalty'],
        weight: 1.0,
        textA: "Grade standards vary by buyer and day.",
        textB: "Grade standards are defined and communicated."
    },
    {
        qid: 'DS_PRODUCE_OPS_09',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['spec_drift_penalty'],
        weight: 1.0,
        textA: "We accept mixed quality in one load.",
        textB: "We separate grades to protect price."
    },
    {
        qid: 'DS_PRODUCE_OPS_10',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['shrink_tax'],
        weight: 1.2,
        textA: "Losses are treated as unavoidable.",
        textB: "Losses are measured and reduced systematically."
    },

    // MONEY
    {
        qid: 'DS_PRODUCE_MON_01',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['margin_mirage'],
        weight: 1.2,
        textA: "We focus on turnover; profit is assumed.",
        textB: "We calculate margin per deal."
    },
    {
        qid: 'DS_PRODUCE_MON_02',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['hidden_fees_drain'],
        weight: 0.9,
        textA: "Fees are “part of the game.”",
        textB: "Fees are tracked and priced in."
    },
    {
        qid: 'DS_PRODUCE_MON_03',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['procurement_panic'],
        weight: 1.1,
        textA: "We buy based on excitement and opportunity.",
        textB: "We buy based on price bands and target margin."
    },
    {
        qid: 'DS_PRODUCE_MON_04',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['supplier_payment_pressure'],
        weight: 1.2,
        textA: "We accept buyer payment delays to keep the relationship.",
        textB: "We enforce terms or price the risk."
    },
    {
        qid: 'DS_PRODUCE_MON_05',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['cash_in_transit_risk'],
        weight: 1.1,
        textA: "Cash handling is informal in the field/market.",
        textB: "Cash handling is controlled and reconciled."
    },
    {
        qid: 'DS_PRODUCE_MON_06',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['margin_mirage'],
        weight: 1.0,
        textA: "We don’t track profitability by route.",
        textB: "We track profit per route and adjust strategy."
    },
    {
        qid: 'DS_PRODUCE_MON_07',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['buyer_power_trap'],
        weight: 1.0,
        textA: "We price sales based on what buyer offers.",
        textB: "We negotiate using benchmarks and quality proof."
    },
    {
        qid: 'DS_PRODUCE_MON_08',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['working_capital_trap'],
        weight: 1.1,
        textA: "Supplier payments are not planned.",
        textB: "Supplier payments follow cash planning."
    },
    {
        qid: 'DS_PRODUCE_MON_09',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['shrink_tax'],
        weight: 1.0,
        textA: "Losses aren’t priced into deals.",
        textB: "Loss allowances are built into pricing decisions."
    },
    {
        qid: 'DS_PRODUCE_MON_10',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['margin_mirage'],
        weight: 1.2,
        textA: "We take big deals even if margin is thin.",
        textB: "We avoid margin-negative volume."
    },

    // MARKET
    {
        qid: 'DS_PRODUCE_MKT_01',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['price_shock_exposure'],
        weight: 1.1,
        textA: "We look for buyers after buying.",
        textB: "We pre-sell or secure terms before buying."
    },
    {
        qid: 'DS_PRODUCE_MKT_02',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['buyer_power_trap'],
        weight: 1.2,
        textA: "We rely on 1–2 buyers/markets.",
        textB: "We diversify buyers and channels."
    },
    {
        qid: 'DS_PRODUCE_MKT_03',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['quality_trust_gap'],
        weight: 1.0,
        textA: "We don’t document grade proof consistently.",
        textB: "We provide proof bundles (photos, grades, weights)."
    },
    {
        qid: 'DS_PRODUCE_MKT_04',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['spec_drift_penalty'],
        weight: 1.1,
        textA: "Downgrades are handled by accepting lower price.",
        textB: "Downgrades are prevented by standards and separation."
    },
    {
        qid: 'DS_PRODUCE_MKT_05',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['complaint_handling_gap'], // Generic tag used
        weight: 0.9,
        textA: "Complaint handling is informal.",
        textB: "Complaint handling follows closure workflows."
    },
    {
        qid: 'DS_PRODUCE_MKT_06',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['buyer_power_trap'],
        weight: 1.0,
        textA: "Customers buy based on price today.",
        textB: "Customers buy based on trust and consistency."
    },
    {
        qid: 'DS_PRODUCE_MKT_07',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['relationship_moat'],
        weight: 1.0,
        textA: "We don’t track repeat buyers.",
        textB: "We track loyalty and repeat frequency."
    },
    {
        qid: 'DS_PRODUCE_MKT_08',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['relationship_moat'],
        weight: 0.9,
        textA: "We market occasionally.",
        textB: "We market consistently using proof and cycles."
    },
    {
        qid: 'DS_PRODUCE_MKT_09',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['value_add_blindspot'],
        weight: 1.0,
        textA: "We don’t segment grades and buyers.",
        textB: "We segment for premium pricing."
    },
    {
        qid: 'DS_PRODUCE_MKT_10',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['quality_trust_gap'],
        weight: 0.9,
        textA: "We rarely collect feedback.",
        textB: "We use feedback to tighten quality."
    },

    // LEADERSHIP
    {
        qid: 'DS_PRODUCE_LEAD_01',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['field_agent_drift'],
        weight: 1.1,
        textA: "Agents decide buying rules themselves.",
        textB: "Agents follow standards with checks."
    },
    {
        qid: 'DS_PRODUCE_LEAD_02',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['numbers_free_decisions'], // Assuming standard tag
        weight: 1.1,
        textA: "Weekly KPI reviews don’t always happen.",
        textB: "Weekly reviews are non-negotiable."
    },
    {
        qid: 'DS_PRODUCE_LEAD_03',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['no_owner_syndrome'],
        weight: 1.0,
        textA: "Problems repeat because of busy seasons.",
        textB: "Problems repeat until fixed."
    },
    {
        qid: 'DS_PRODUCE_LEAD_04',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['role_clarity_gap'],
        weight: 1.0,
        textA: "Roles overlap in the hub.",
        textB: "Roles are clear with accountability."
    },
    {
        qid: 'DS_PRODUCE_LEAD_05',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['supplier_selection_undisciplined'],
        weight: 1.0,
        textA: "Buyers are managed relationship-first.",
        textB: "Buyers are managed with terms + performance."
    },
    {
        qid: 'DS_PRODUCE_LEAD_06',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['training_gap'],
        weight: 0.9,
        textA: "Staff training is informal.",
        textB: "Training is structured and tested."
    },
    {
        qid: 'DS_PRODUCE_LEAD_07',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['numbers_free_decisions'],
        weight: 1.1,
        textA: "Decisions are made on gut feel.",
        textB: "Decisions are made on shrink/margin data."
    },
    {
        qid: 'DS_PRODUCE_LEAD_08',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['meeting_no_action'],
        weight: 0.9,
        textA: "Meetings discuss issues.",
        textB: "Meetings close issues with tasks."
    },
    {
        qid: 'DS_PRODUCE_LEAD_09',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['supplier_selection_undisciplined'],
        weight: 1.0,
        textA: "Supplier network is opportunistic.",
        textB: "Supplier network is segmented by quality."
    },
    {
        qid: 'DS_PRODUCE_LEAD_10',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['season_blindness'],
        weight: 1.1,
        textA: "We don’t plan season calendars.",
        textB: "We plan season calendars and pipeline."
    },

    // INNOVATION
    {
        qid: 'DS_PRODUCE_INN_01',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['value_add_blindspot'],
        weight: 1.1,
        textA: "We sell raw produce as-is.",
        textB: "We add grading/packing to earn premiums."
    },
    {
        qid: 'DS_PRODUCE_INN_02',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['relationship_moat'], // Proxy
        weight: 1.0,
        textA: "We don’t test new buyers.",
        textB: "We test new buyers systematically."
    },
    {
        qid: 'DS_PRODUCE_INN_03',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['relationship_moat'], // Proxy
        weight: 1.0,
        textA: "We don’t have subscription/institution models.",
        textB: "We build stable contract supply."
    },
    {
        qid: 'DS_PRODUCE_INN_04',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['bundle_opportunity'],
        weight: 0.9,
        textA: "Mixed loads are normal.",
        textB: "Mixed crates are designed and priced strategically."
    },
    {
        qid: 'DS_PRODUCE_INN_05',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['data_advantage_gap'],
        weight: 1.0,
        textA: "Pricing is reactive.",
        textB: "Pricing uses price intelligence routines."
    },
    {
        qid: 'DS_PRODUCE_INN_06',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['value_add_blindspot'],
        weight: 0.9,
        textA: "We don’t improve packaging often.",
        textB: "We improve packaging to reduce bruising."
    },
    {
        qid: 'DS_PRODUCE_INN_07',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['route_intelligence_missing'],
        weight: 0.9,
        textA: "We don’t use simple tech for tracking.",
        textB: "We use tracking to reduce shrink and disputes."
    },
    {
        qid: 'DS_PRODUCE_INN_08',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['cold_chain_hole'],
        weight: 1.1,
        textA: "Cold chain is too expensive.",
        textB: "Cold chain partnerships are explored and piloted."
    },
    {
        qid: 'DS_PRODUCE_INN_09',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['season_blindness'],
        weight: 0.8,
        textA: "Offers are same each season.",
        textB: "Offers evolve based on season learnings."
    },
    {
        qid: 'DS_PRODUCE_INN_10',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['relationship_moat'], // Proxy
        weight: 0.8,
        textA: "Customer experience is basic.",
        textB: "Customer experience is designed for trust."
    },

    // RISK
    {
        qid: 'DS_PRODUCE_RISK_01',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['contract_exposure'],
        weight: 1.2,
        textA: "Deals are verbal.",
        textB: "Deals use written terms."
    },
    {
        qid: 'DS_PRODUCE_RISK_02',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['traceability_gap'],
        weight: 1.1,
        textA: "Traceability is not maintained.",
        textB: "Traceability is captured at intake."
    },
    {
        qid: 'DS_PRODUCE_RISK_03',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['theft_tamper_risk'],
        weight: 1.1,
        textA: "Theft prevention is informal.",
        textB: "Custody logs and reconciliations exist."
    },
    {
        qid: 'DS_PRODUCE_RISK_04',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['contamination_liability'],
        weight: 1.2,
        textA: "Food safety is “common sense.”",
        textB: "Food safety uses standards and checklists."
    },
    {
        qid: 'DS_PRODUCE_RISK_05',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['contract_exposure'],
        weight: 1.0,
        textA: "Disputes are handled emotionally.",
        textB: "Disputes use evidence bundles and terms."
    },
    {
        qid: 'DS_PRODUCE_RISK_06',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['cash_in_transit_risk'], // Proxy for loss
        weight: 0.9,
        textA: "Transit loss is accepted.",
        textB: "Transit loss is documented and reduced."
    },
    {
        qid: 'DS_PRODUCE_RISK_07',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['rejected_load_nightmare'],
        weight: 1.0,
        textA: "Rejection handling is ad-hoc.",
        textB: "Rejection handling follows a procedure."
    },
    {
        qid: 'DS_PRODUCE_RISK_08',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['data_security_gap'],
        weight: 0.8,
        textA: "Customer/supplier data is scattered.",
        textB: "Data is centralized and protected."
    },
    {
        qid: 'DS_PRODUCE_RISK_09',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['compliance_shock'],
        weight: 1.0,
        textA: "Compliance is checked when demanded.",
        textB: "Compliance is maintained continuously."
    },
    {
        qid: 'DS_PRODUCE_RISK_10',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['queue_to_rot_lag'], // Proxy for route interruption
        weight: 0.9,
        textA: "Backup plans are unclear.",
        textB: "Backup plans exist for vehicle failures."
    },

    // PEOPLE
    {
        qid: 'DS_PRODUCE_PPL_01',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['handling_damage_culture'],
        weight: 1.1,
        textA: "Handling quality varies by shift.",
        textB: "Handling standards are trained and enforced."
    },
    {
        qid: 'DS_PRODUCE_PPL_02',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['incentive_misfire'],
        weight: 1.0,
        textA: "Incentives reward speed.",
        textB: "Incentives reward quality and loss reduction."
    },
    {
        qid: 'DS_PRODUCE_PPL_03',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['blame_culture'],
        weight: 1.1,
        textA: "Losses are hidden to avoid blame.",
        textB: "Losses are surfaced early to be solved."
    },
    {
        qid: 'DS_PRODUCE_PPL_04',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['cross_team_friction'],
        weight: 0.9,
        textA: "Drivers/warehouse/sales operate separately.",
        textB: "Teams operate as one system."
    },
    {
        qid: 'DS_PRODUCE_PPL_05',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['training_gap'],
        weight: 1.0,
        textA: "Training happens informally.",
        textB: "Training is structured and tested."
    },
    {
        qid: 'DS_PRODUCE_PPL_06',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['peak_season_burnout'],
        weight: 1.0,
        textA: "Peak season burnout is normal.",
        textB: "Peak season staffing prevents burnout."
    },
    {
        qid: 'DS_PRODUCE_PPL_07',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['service_inconsistency'],
        weight: 0.9,
        textA: "Customer care depends on mood.",
        textB: "Customer care follows standards."
    },
    {
        qid: 'DS_PRODUCE_PPL_08',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['accountability_soft'],
        weight: 1.0,
        textA: "Accountability tools are minimal.",
        textB: "Accountability tools (logs) are mandatory."
    },
    {
        qid: 'DS_PRODUCE_PPL_09',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['hero_operator_dependence'], // Proxy
        weight: 1.0,
        textA: "Great staff carry weak staff.",
        textB: "Performance is coached and managed."
    },
    {
        qid: 'DS_PRODUCE_PPL_10',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Farmgate Aggregator (Local)', 'Wholesale Market Trader', 'Institutional Supplier', 'Digital Broker / Agent', 'Warehouse + Bulking Hub'],
        signal_tags: ['handling_damage_culture'],
        weight: 1.1,
        textA: "People don’t connect shrink to profit.",
        textB: "People understand shrink = money loss."
    },

    // ============================================
    // === EXPORT / CROSS-BORDER TRADER PACK ===
    // ============================================

    // --- QUICK SCAN (2 pairs per pillar) ---
    // OPERATIONS
    {
        qid: 'QS_EXPORT_OPS_01',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['logistics_black_hole'],
        weight: 1.2,
        textA: "We rush to book freight when produce is ready.",
        textB: "We book freight slots weeks in advance based on harvest plans."
    },
    {
        qid: 'QS_EXPORT_OPS_02',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['doc_delay_penalty'],
        weight: 1.1,
        textA: "Documentation is often delayed, causing port storage costs.",
        textB: "Documentation is pre-cleared and error-free."
    },

    // MONEY
    {
        qid: 'QS_EXPORT_MON_01',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['fx_burn'],
        weight: 1.2,
        textA: "We take the exchange rate of the day; it fluctuates.",
        textB: "We hedge or account for currency/fx risk in pricing."
    },
    {
        qid: 'QS_EXPORT_MON_02',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['cash_gap_trap'],
        weight: 1.1,
        textA: "We struggle to pay farmers while waiting for overseas payment.",
        textB: "We have trade finance or working capital buffers for the cycle."
    },

    // MARKET
    {
        qid: 'QS_EXPORT_MKT_01',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['single_market_risk'],
        weight: 1.2,
        textA: "We rely on one main overseas buyer/market.",
        textB: "We diversify across regions to mitigate market shocks."
    },
    {
        qid: 'QS_EXPORT_MKT_02',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['rejection_shock'],
        weight: 1.1,
        textA: "Quality claims at destination happen often.",
        textB: "Quality is verified to specs before shipping."
    },

    // LEADERSHIP
    {
        qid: 'QS_EXPORT_LEAD_01',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['compliance_fatigue'],
        weight: 1.0,
        textA: "Compliance (GlobalGAP/SMETA) is a burden we manage minimally.",
        textB: "Compliance is our competitive advantage and culture."
    },
    {
        qid: 'QS_EXPORT_LEAD_02',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['reactive_planning'],
        weight: 1.0,
        textA: "We react to orders as they come.",
        textB: "We plan seasons globally with partners."
    },

    // INNOVATION
    {
        qid: 'QS_EXPORT_INN_01',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['traceability_blindspot'],
        weight: 1.0,
        textA: "Traceability is paper-based and slow.",
        textB: "Traceability is digital and instant for buyers."
    },
    {
        qid: 'QS_EXPORT_INN_02',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['commodity_trap'],
        weight: 0.9,
        textA: "We ship raw commodity only.",
        textB: "We explore value-add branding or processing."
    },

    // RISK
    {
        qid: 'QS_EXPORT_RISK_01',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['contract_loophole'],
        weight: 1.2,
        textA: "Contracts are loose or verbal.",
        textB: "Contracts use international standard terms (Incoterms)."
    },
    {
        qid: 'QS_EXPORT_RISK_02',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['cargo_loss_exposure'],
        weight: 1.1,
        textA: "We hope nothing spoils in transit.",
        textB: "We use trackers and insurance to cover transit risk."
    },

    // PEOPLE
    {
        qid: 'QS_EXPORT_PPL_01',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['skill_gap_admin'],
        weight: 1.0,
        textA: "Our team struggles with export paperwork.",
        textB: "Our team is specialized in logistics and compliance."
    },
    {
        qid: 'QS_EXPORT_PPL_02',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['integrity_risk_field'],
        weight: 1.0,
        textA: "Field staff sometimes compromise quality for volume.",
        textB: "Field staff are incentivized on quality acceptance."
    },

    // --- DEEP SCAN (10 pairs per pillar) ---

    // OPERATIONS
    {
        qid: 'DS_EXPORT_OPS_01',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['packhouse_bottleneck'],
        weight: 1.1,
        textA: "Packhouse flow is chaotic when volume hits.",
        textB: "Packhouse has defined flow and capacity planning."
    },
    {
        qid: 'DS_EXPORT_OPS_02',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['cold_chain_break'],
        weight: 1.2,
        textA: "Produce warms up during transfer/loading.",
        textB: "Produce stays in unbroken cold chain."
    },
    {
        qid: 'DS_EXPORT_OPS_03',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['freight_rate_blindness'],
        weight: 1.0,
        textA: "We accept whatever freight rate is offered.",
        textB: "We negotiate freight rates with benchmarks."
    },
    {
        qid: 'DS_EXPORT_OPS_04',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['inventory_vis_gap'],
        weight: 1.0,
        textA: "We don't know exactly what stock is where.",
        textB: "We have real-time visibility of stock levels."
    },
    {
        qid: 'DS_EXPORT_OPS_05',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['packaging_waste_bleed'],
        weight: 0.9,
        textA: "Packaging waste and breakage is common.",
        textB: "Packaging inventory and use is tracked."
    },
    {
        qid: 'DS_EXPORT_OPS_06',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['lab_test_delay'],
        weight: 1.1,
        textA: "Shipments wait for MRL test results.",
        textB: "Testing is scheduled to clear before shipping."
    },
    {
        qid: 'DS_EXPORT_OPS_07',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['arrival_quality_unknown'],
        weight: 1.1,
        textA: "We rely on buyer reports for arrival quality.",
        textB: "We use independent surveyors or data loggers."
    },
    {
        qid: 'DS_EXPORT_OPS_08',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['loading_error'],
        weight: 1.0,
        textA: "Loading is hurried and sometimes incorrect.",
        textB: "Loading follows a strict plan and check."
    },
    {
        qid: 'DS_EXPORT_OPS_09',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['input_quality_var'],
        weight: 1.1,
        textA: "We fix quality issues at the packhouse.",
        textB: "We enforce quality standards at the farm gate."
    },
    {
        qid: 'DS_EXPORT_OPS_10',
        industry: 'produce_aggregation',
        pillar: 'Operations',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['capacity_planning_gap'],
        weight: 1.0,
        textA: "We overcommit and then struggle to fill.",
        textB: "We match sales to realistic capacity."
    },

    // MONEY
    {
        qid: 'DS_EXPORT_MON_01',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['fx_burn'],
        weight: 1.2,
        textA: "Currency shifts eat our margins.",
        textB: "We manage currency risk actively."
    },
    {
        qid: 'DS_EXPORT_MON_02',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['cash_gap_trap'],
        weight: 1.2,
        textA: "We constantly chase cash to operate.",
        textB: "Cash flow is forecasted 12 weeks out."
    },
    {
        qid: 'DS_EXPORT_MON_03',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['claims_leakage'],
        weight: 1.1,
        textA: "We accept claims to keep peace.",
        textB: "We contest claims with data and evidence."
    },
    {
        qid: 'DS_EXPORT_MON_04',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['cost_per_kg_blind'],
        weight: 1.0,
        textA: "We don't know the exact landed cost per kg.",
        textB: "We track fully loaded cost per kg daily."
    },
    {
        qid: 'DS_EXPORT_MON_05',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['overhead_bloat'],
        weight: 0.9,
        textA: "Fixed costs are high regardless of volume.",
        textB: "Cost structure is lean and variable."
    },
    {
        qid: 'DS_EXPORT_MON_06',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['vat_reclaim_delay'],
        weight: 1.0,
        textA: "VAT refunds are stuck or forgotten.",
        textB: "VAT is tracked and reclaimed efficiently."
    },
    {
        qid: 'DS_EXPORT_MON_07',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['investor_relations_weak'],
        weight: 0.9,
        textA: "Financiers don't understand our business.",
        textB: "We provide clear reports to financiers."
    },
    {
        qid: 'DS_EXPORT_MON_08',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['payment_term_mismatch'],
        weight: 1.1,
        textA: "We pay cash but collect in 60 days.",
        textB: "We align supplier and buyer terms."
    },
    {
        qid: 'DS_EXPORT_MON_09',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['profit_concentration_risk'],
        weight: 1.0,
        textA: "One buyer provides all our profit.",
        textB: "Profit is spread across accounts."
    },
    {
        qid: 'DS_EXPORT_MON_10',
        industry: 'produce_aggregation',
        pillar: 'Money',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['hidden_logistics_costs'],
        weight: 1.0,
        textA: "Demurrage and detention fees are common.",
        textB: "Logistics flows are timed to zero fees."
    },

    // MARKET
    {
        qid: 'DS_EXPORT_MKT_01',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['single_market_risk'],
        weight: 1.2,
        textA: "A downturn in one country kills our season.",
        textB: "We sell to multiple markets/currencies."
    },
    {
        qid: 'DS_EXPORT_MKT_02',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['brand_invisibility'],
        weight: 1.0,
        textA: "We are just another commodity supplier.",
        textB: "Buyers ask for our brand specifically."
    },
    {
        qid: 'DS_EXPORT_MKT_03',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['market_intel_gap'],
        weight: 1.0,
        textA: "We don't know the destination market price.",
        textB: "We track destination wholesale prices."
    },
    {
        qid: 'DS_EXPORT_MKT_04',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['relationship_transactional'],
        weight: 1.0,
        textA: "Communication is about orders/claims only.",
        textB: "We have strategic reviews with buyers."
    },
    {
        qid: 'DS_EXPORT_MKT_05',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['spec_mismatch'],
        weight: 1.1,
        textA: "We often miss the exact spec requirements.",
        textB: "Specs are agreed and printed visibly."
    },
    {
        qid: 'DS_EXPORT_MKT_06',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['new_biz_stagnation'],
        weight: 0.9,
        textA: "We rely on old contacts.",
        textB: "We actively prospect new buyers."
    },
    {
        qid: 'DS_EXPORT_MKT_07',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['contract_term_weakness'],
        weight: 1.1,
        textA: "We accept 'consignment' deals easily.",
        textB: "We push for Minimum Guaranteed Price (MGP)."
    },
    {
        qid: 'DS_EXPORT_MKT_08',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['season_extension_gap'],
        weight: 0.9,
        textA: "We only sell when local season peaks.",
        textB: "We try to extend seasons for buyers."
    },
    {
        qid: 'DS_EXPORT_MKT_09',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['cert_deficiency'],
        weight: 1.1,
        textA: "We lose deals due to missing certs.",
        textB: "We maintain all key market certs."
    },
    {
        qid: 'DS_EXPORT_MKT_10',
        industry: 'produce_aggregation',
        pillar: 'Market',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['customer_feedback_loop_missing'],
        weight: 0.9,
        textA: "We rarely ask for formal feedback.",
        textB: "We survey buyer satisfaction annually."
    },

    // LEADERSHIP
    {
        qid: 'DS_EXPORT_LEAD_01',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['compliance_fatigue'],
        weight: 1.1,
        textA: "Audits are a stressful scramble.",
        textB: "We are audit-ready every day."
    },
    {
        qid: 'DS_EXPORT_LEAD_02',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['reactive_firefighting'],
        weight: 1.1,
        textA: "We spend the day fixing shipping crises.",
        textB: "We focus on strategy and relationships."
    },
    {
        qid: 'DS_EXPORT_LEAD_03',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['vision_gap'],
        weight: 1.0,
        textA: "The goal is just to survive the season.",
        textB: "There is a 3-year growth plan."
    },
    {
        qid: 'DS_EXPORT_LEAD_04',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['data_culture_weak'],
        weight: 1.0,
        textA: "Decisions are based on opinion.",
        textB: "Decisions are based on data."
    },
    {
        qid: 'DS_EXPORT_LEAD_05',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['talent_retention_risk'],
        weight: 1.0,
        textA: "Key staff leave often.",
        textB: "We retain core talent."
    },
    {
        qid: 'DS_EXPORT_LEAD_06',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['sustainability_lip_service'],
        weight: 0.9,
        textA: "Sustainability is just a checkbox.",
        textB: "Sustainability is integrated into ops."
    },
    {
        qid: 'DS_EXPORT_LEAD_07',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['board_governance_gap'],
        weight: 0.9,
        textA: "The founder decides everything alone.",
        textB: "We have advisors or a board."
    },
    {
        qid: 'DS_EXPORT_LEAD_08',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['succession_risk'],
        weight: 0.8,
        textA: "Ops stop if the owner is away.",
        textB: "Ops run smoothly without the owner."
    },
    {
        qid: 'DS_EXPORT_LEAD_09',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['innovation_stagnation'],
        weight: 0.9,
        textA: "We do things the same way as 5 years ago.",
        textB: "We constantly trial new methods."
    },
    {
        qid: 'DS_EXPORT_LEAD_10',
        industry: 'produce_aggregation',
        pillar: 'Leadership',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['communication_silo'],
        weight: 1.0,
        textA: "Farms and Sales don't talk enough.",
        textB: "Information flows seamlessly across teams."
    },

    // INNOVATION
    {
        qid: 'DS_EXPORT_INN_01',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['tech_aversion'],
        weight: 1.0,
        textA: "We use paper and Excel only.",
        textB: "We extensive use of specialized software."
    },
    {
        qid: 'DS_EXPORT_INN_02',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['value_add_miss'],
        weight: 1.1,
        textA: "We only sell bulk raw produce.",
        textB: "We sell retail-ready or processed packs."
    },
    {
        qid: 'DS_EXPORT_INN_03',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['variety_stagnation'],
        weight: 1.0,
        textA: "We grow/buy the same old varieties.",
        textB: "We trial high-demand new varieties."
    },
    {
        qid: 'DS_EXPORT_INN_04',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['traceability_gap'],
        weight: 1.1,
        textA: "We can't trace back to the plot easily.",
        textB: "We have plot-to-plate digital traceability."
    },
    {
        qid: 'DS_EXPORT_INN_05',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['logistics_innovation_gap'],
        weight: 0.9,
        textA: "We use standard logistics options.",
        textB: "We test CA containers and new routes."
    },
    {
        qid: 'DS_EXPORT_INN_06',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['packaging_basic'],
        weight: 0.9,
        textA: "Packaging is standard generic.",
        textB: "Packaging helps shelf-life and brand."
    },
    {
        qid: 'DS_EXPORT_INN_07',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['data_blindness'],
        weight: 1.0,
        textA: "We don't analyze our historical data.",
        textB: "We use data to drive planting/buying."
    },
    {
        qid: 'DS_EXPORT_INN_08',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['energy_waste'],
        weight: 0.8,
        textA: "Energy costs are high/unmonitored.",
        textB: "We use solar/efficient energy solutions."
    },
    {
        qid: 'DS_EXPORT_INN_09',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['waste_valorization_miss'],
        weight: 0.9,
        textA: "Rejects are dumped.",
        textB: "Rejects are sold or processed (dried/juice)."
    },
    {
        qid: 'DS_EXPORT_INN_10',
        industry: 'produce_aggregation',
        pillar: 'Innovation',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['learning_stagnation'],
        weight: 0.8,
        textA: "We rarely attend fairs or training.",
        textB: "We constantly learn and network."
    },

    // RISK
    {
        qid: 'DS_EXPORT_RISK_01',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['contract_enforceability_weak'],
        weight: 1.2,
        textA: "Contracts are hard to enforce.",
        textB: "Contracts are legally binding in jurisdiction."
    },
    {
        qid: 'DS_EXPORT_RISK_02',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['cargo_insurance_gap'],
        weight: 1.2,
        textA: "We are under-insured on shipments.",
        textB: "All shipments are fully insured."
    },
    {
        qid: 'DS_EXPORT_RISK_03',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['regulatory_blindspot'],
        weight: 1.1,
        textA: "We don't track EU/Foreign regulatory changes.",
        textB: "We monitor regulatory changes weekly."
    },
    {
        qid: 'DS_EXPORT_RISK_04',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['supplier_side_selling'],
        weight: 1.1,
        textA: "Farmers sell to others despite agreements.",
        textB: "Farmer loyalty is high and managed."
    },
    {
        qid: 'DS_EXPORT_RISK_05',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['cyber_security_weak'],
        weight: 0.9,
        textA: "Emails/payments are not secure.",
        textB: "We have cybersecurity protocols."
    },
    {
        qid: 'DS_EXPORT_RISK_06',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['political_risk_exposure'],
        weight: 0.9,
        textA: "We ignore local political instability.",
        textB: "We have contingency plans for disruptions."
    },
    {
        qid: 'DS_EXPORT_RISK_07',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['reputation_risk'],
        weight: 1.1,
        textA: "We risk our name for short term gain.",
        textB: "Reputation is protected above all."
    },
    {
        qid: 'DS_EXPORT_RISK_08',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['climate_risk_exposure'],
        weight: 1.0,
        textA: "Weather changes catch us off guard.",
        textB: "We model and plan for climate risks."
    },
    {
        qid: 'DS_EXPORT_RISK_09',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['single_logistic_partner'],
        weight: 1.0,
        textA: "We rely on one freight agent.",
        textB: "We have backup logistics partners."
    },
    {
        qid: 'DS_EXPORT_RISK_10',
        industry: 'produce_aggregation',
        pillar: 'Risk',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['internal_theft'],
        weight: 1.0,
        textA: "Pilferage is common.",
        textB: "Internal controls prevent theft."
    },

    // PEOPLE
    {
        qid: 'DS_EXPORT_PPL_01',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['specialist_skill_gap'],
        weight: 1.1,
        textA: "We lack specialized export skills.",
        textB: "Team is trained in export specifics."
    },
    {
        qid: 'DS_EXPORT_PPL_02',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['integrity_issue'],
        weight: 1.1,
        textA: "Staff integrity is a concern.",
        textB: "Staff are vetted and ethical."
    },
    {
        qid: 'DS_EXPORT_PPL_03',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['labour_shortage_risk'],
        weight: 1.0,
        textA: "We struggle to find casual labor.",
        textB: "We have a reliable labor pool."
    },
    {
        qid: 'DS_EXPORT_PPL_04',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['manager_overload'],
        weight: 1.0,
        textA: "Managers are burnt out.",
        textB: "Managers have balanced workloads."
    },
    {
        qid: 'DS_EXPORT_PPL_05',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['communication_breakdown'],
        weight: 1.0,
        textA: "Instructions are often misunderstood.",
        textB: "Communication is clear and confirmed."
    },
    {
        qid: 'DS_EXPORT_PPL_06',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['safety_culture_weak'],
        weight: 0.9,
        textA: "Accidents happen often.",
        textB: "Safety first is the culture."
    },
    {
        qid: 'DS_EXPORT_PPL_07',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['performance_review_gap'],
        weight: 1.0,
        textA: "Feedback is rare.",
        textB: "Performance reviews are regular."
    },
    {
        qid: 'DS_EXPORT_PPL_08',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['incentive_misalignment'],
        weight: 1.1,
        textA: "Pay is not linked to performance.",
        textB: "Incentives drive the right behavior."
    },
    {
        qid: 'DS_EXPORT_PPL_09',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['gender_balance_gap'],
        weight: 0.8,
        textA: "Management is all male/female.",
        textB: "We aim for gender balance."
    },
    {
        qid: 'DS_EXPORT_PPL_10',
        industry: 'produce_aggregation',
        pillar: 'People',
        line_type: ['Exporter / Cross-border Trader'],
        signal_tags: ['conflict_handling_poor'],
        weight: 0.9,
        textA: "Conflicts fester.",
        textB: "Conflicts are resolved professionally."
    }
];
