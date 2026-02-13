import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [

    // ═══════════════════════════════════════════════════════════════
    // PILLAR 1: COMMERCIAL CONTROL (Sales, Contracts, Pricing)
    // Mapped to → Market + Money
    // ═══════════════════════════════════════════════════════════════

    // --- Quick Scan (4) ---
    {
        qid: 'QS_Market_1', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We keep rates simple so customers decide faster.",
        textB: "We keep rates simple, but add service add-ons when complexity appears.",
        line_type: ['all'], signal_tags: ['COST_TO_SERVE', 'PRICING_LOGIC']
    },
    {
        qid: 'QS_Market_2', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We trust relationships; paperwork follows.",
        textB: "We trust relationships, and we also define dispute windows in writing.",
        line_type: ['all'], signal_tags: ['SLA_DISCIPLINE', 'DISPUTE_READINESS']
    },
    {
        qid: 'QS_Market_3', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We accept most customers if there's space.",
        textB: "We accept most customers, but we rank them by claims + payment behavior.",
        line_type: ['all'], signal_tags: ['CLIENT_SEGMENTATION', 'RISK_PROFILING']
    },
    {
        qid: 'QS_Money_1', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We keep pricing the same across clients.",
        textB: "We keep a base price, but adjust for dwell time and handling intensity.",
        line_type: ['all'], signal_tags: ['COST_TO_SERVE', 'MARGIN_PROTECTION']
    },

    // --- Deep Scan (20) ---
    {
        qid: 'DS_Market_1', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We prefer long-term clients even if rates are lower.",
        textB: "We prefer long-term clients, but review margin per client quarterly.",
        line_type: ['all'], signal_tags: ['MARGIN_REVIEW', 'CLIENT_PROFITABILITY']
    },
    {
        qid: 'DS_Market_2', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We negotiate everything case-by-case.",
        textB: "We negotiate case-by-case using a standard SLA menu.",
        line_type: ['all'], signal_tags: ['SLA_DISCIPLINE', 'CONTRACT_STANDARD']
    },
    {
        qid: 'DS_Market_3', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We keep service promises flexible.",
        textB: "We keep service promises flexible inside measurable ranges.",
        line_type: ['all'], signal_tags: ['SLA_DISCIPLINE', 'SERVICE_CONTROL']
    },
    {
        qid: 'DS_Market_4', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We don't charge for small extras to keep goodwill.",
        textB: "We sometimes waive extras, but we track them for pricing updates.",
        line_type: ['all'], signal_tags: ['UNPRICED_COMPLEXITY', 'VALUE_CAPTURE']
    },
    {
        qid: 'DS_Market_5', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We focus on filling space.",
        textB: "We focus on filling space with profitable mix (not just volume).",
        line_type: ['all'], signal_tags: ['CAPACITY_UTILIZATION', 'MARGIN_FOCUS']
    },
    {
        qid: 'DS_Market_6', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "Claims are handled personally.",
        textB: "Claims are handled personally using evidence rules and time windows.",
        line_type: ['all'], signal_tags: ['CLAIMS_PROTOCOL', 'DISPUTE_READINESS']
    },
    {
        qid: 'DS_Market_7', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We accept seasonal peaks and chaos.",
        textB: "We accept peaks and plan labor/capacity in advance.",
        line_type: ['all'], signal_tags: ['CAPACITY_PLANNING', 'PEAK_MANAGEMENT']
    },
    {
        qid: 'DS_Market_8', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We avoid strict penalties.",
        textB: "We avoid strict penalties, but we enforce slow-mover rules.",
        line_type: ['all'], signal_tags: ['SLOW_MOVER_CONTROL', 'DWELL_MANAGEMENT']
    },
    {
        qid: 'DS_Money_2', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We price per ton/pallet only.",
        textB: "We price per ton/pallet plus handling and dwell adders.",
        line_type: ['all'], signal_tags: ['COST_TO_SERVE', 'PRICING_LOGIC']
    },
    {
        qid: 'DS_Money_3', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "Customer forecasts are uncertain anyway.",
        textB: "Customer forecasts are uncertain, so we track trends weekly.",
        line_type: ['all'], signal_tags: ['DEMAND_FORECASTING', 'CAPACITY_PLANNING']
    },
    {
        qid: 'DS_Market_9', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We rarely say no to business.",
        textB: "We rarely say no, but we protect high-risk zones.",
        line_type: ['all'], signal_tags: ['RISK_PROFILING', 'ZONE_PROTECTION']
    },
    {
        qid: 'DS_Market_10', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We standardize rates for fairness.",
        textB: "We standardize a base rate, then adjust for complexity.",
        line_type: ['all'], signal_tags: ['PRICING_LOGIC', 'COST_TO_SERVE']
    },
    {
        qid: 'DS_Money_4', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We focus on top-line revenue.",
        textB: "We focus on top-line plus claim/shrink-adjusted margin.",
        line_type: ['all'], signal_tags: ['MARGIN_PROTECTION', 'SHRINK_AWARENESS']
    },
    {
        qid: 'DS_Market_11', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We don't discuss liability much.",
        textB: "We don't discuss liability much—until we put it in writing.",
        line_type: ['all'], signal_tags: ['CONTRACT_STANDARD', 'LIABILITY_CLARITY']
    },
    {
        qid: 'DS_Market_12', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We rely on trust with transporters.",
        textB: "We rely on trust and document handoff points.",
        line_type: ['all'], signal_tags: ['HANDOFF_CONTROL', 'TRACEABILITY']
    },
    {
        qid: 'DS_Market_13', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We keep contracts short.",
        textB: "We keep contracts short but include essential SLA clauses.",
        line_type: ['all'], signal_tags: ['SLA_DISCIPLINE', 'CONTRACT_STANDARD']
    },
    {
        qid: 'DS_Market_14', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We avoid formal dispute processes.",
        textB: "We avoid formal disputes by predefining evidence requirements.",
        line_type: ['all'], signal_tags: ['DISPUTE_READINESS', 'CLAIMS_PROTOCOL']
    },
    {
        qid: 'DS_Money_5', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We don't track cost per service.",
        textB: "We don't track everything, but we track top 5 cost drivers.",
        line_type: ['all'], signal_tags: ['COST_VISIBILITY', 'COST_TO_SERVE']
    },
    {
        qid: 'DS_Market_15', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We offer many services informally.",
        textB: "We offer many services, and we price them explicitly.",
        line_type: ['all'], signal_tags: ['UNPRICED_COMPLEXITY', 'VALUE_CAPTURE']
    },
    {
        qid: 'DS_Market_16', pillar: 'Market', industry: 'agriculture', weight: 1,
        textA: "We mainly compete on price.",
        textB: "We mainly compete on reliability + proof (records/logs).",
        line_type: ['all'], signal_tags: ['DIFFERENTIATION', 'EVIDENCE_BASED_TRUST']
    },

    // ═══════════════════════════════════════════════════════════════
    // PILLAR 2: RECEIVING + QA + TRACEABILITY
    // Mapped to → Operations
    // ═══════════════════════════════════════════════════════════════

    // --- Quick Scan (4) ---
    {
        qid: 'QS_Operations_1', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "Receiving is fast; we resolve issues later if needed.",
        textB: "Receiving is fast, but we capture basic evidence at the gate.",
        line_type: ['all'], signal_tags: ['RECEIVING_DISCIPLINE', 'EVIDENCE_CAPTURE']
    },
    {
        qid: 'QS_Operations_2', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We label pallets when time allows.",
        textB: "We label pallets immediately so location and lot stay linked.",
        line_type: ['all'], signal_tags: ['LOT_CONTROL', 'TRACEABILITY']
    },
    {
        qid: 'QS_Operations_3', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We rarely quarantine; it slows things down.",
        textB: "We rarely quarantine, but we do when anything looks off.",
        line_type: ['all'], signal_tags: ['QUARANTINE_PROTOCOL', 'QUALITY_GATE']
    },
    {
        qid: 'QS_Operations_4', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We rely on supplier documents for quality.",
        textB: "We rely on supplier documents and do quick verification checks.",
        line_type: ['all'], signal_tags: ['QA_VERIFICATION', 'INBOUND_CONTROL']
    },

    // --- Deep Scan (20) ---
    {
        qid: 'DS_Operations_1', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We unload quickly and sort later.",
        textB: "We unload quickly but verify count/condition at receipt.",
        line_type: ['all'], signal_tags: ['RECEIVING_DISCIPLINE', 'CONDITION_CHECK']
    },
    {
        qid: 'DS_Operations_2', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "If labels are missing, we improvise.",
        textB: "If labels are missing, we create temporary IDs immediately.",
        line_type: ['all'], signal_tags: ['LOT_CONTROL', 'ID_DISCIPLINE']
    },
    {
        qid: 'DS_Operations_3', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We rely on supplier lot codes.",
        textB: "We rely on supplier codes and map them to our internal IDs.",
        line_type: ['all'], signal_tags: ['TRACEABILITY', 'ID_DISCIPLINE']
    },
    {
        qid: 'DS_Operations_4', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We accept mixed lots if space is tight.",
        textB: "We accept mixed lots only with documented customer approval.",
        line_type: ['all'], signal_tags: ['LOT_CONTROL', 'SEGREGATION']
    },
    {
        qid: 'DS_Operations_5', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We record temps/moisture when staff are free.",
        textB: "We record temps/moisture at defined checkpoints.",
        line_type: ['all'], signal_tags: ['CONDITION_CHECK', 'DATA_DISCIPLINE']
    },
    {
        qid: 'DS_Operations_6', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We don't quarantine unless it's obvious.",
        textB: "We don't quarantine often, but we do for any anomaly.",
        line_type: ['all'], signal_tags: ['QUARANTINE_PROTOCOL', 'QUALITY_GATE']
    },
    {
        qid: 'DS_Operations_7', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We keep paperwork in folders.",
        textB: "We keep paperwork in folders and link it to lot IDs.",
        line_type: ['all'], signal_tags: ['TRACEABILITY', 'DOCUMENT_CONTROL']
    },
    {
        qid: 'DS_Operations_8', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We don't take photos; it slows receiving.",
        textB: "We don't take many photos—only exceptions and seals.",
        line_type: ['all'], signal_tags: ['EVIDENCE_CAPTURE', 'DISPUTE_READINESS']
    },
    {
        qid: 'DS_Operations_9', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We rarely check seals.",
        textB: "We check seals for high-value or sensitive loads.",
        line_type: ['all'], signal_tags: ['SECURITY_CHECK', 'INBOUND_CONTROL']
    },
    {
        qid: 'DS_Operations_10', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We verify weights occasionally.",
        textB: "We verify weights consistently for bulk/claims-prone items.",
        line_type: ['all'], signal_tags: ['WEIGHT_VERIFICATION', 'EVIDENCE_CAPTURE']
    },
    {
        qid: 'DS_Operations_11', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We treat all products the same.",
        textB: "We treat products similarly, but with risk-based checks.",
        line_type: ['all'], signal_tags: ['RISK_BASED_QA', 'PRODUCT_HANDLING']
    },
    {
        qid: 'DS_Operations_12', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We trust transporter handling.",
        textB: "We trust transporter handling but note visible issues immediately.",
        line_type: ['all'], signal_tags: ['HANDOFF_CONTROL', 'CONDITION_CHECK']
    },
    {
        qid: 'DS_Operations_13', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We do QA checks only for exports.",
        textB: "We do QA checks for exports and high-risk domestic shipments.",
        line_type: ['all'], signal_tags: ['QA_VERIFICATION', 'RISK_BASED_QA']
    },
    {
        qid: 'DS_Operations_14', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We fix documentation errors later.",
        textB: "We fix documentation errors before stock is released.",
        line_type: ['all'], signal_tags: ['DOCUMENT_CONTROL', 'RELEASE_GATE']
    },
    {
        qid: 'DS_Operations_15', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We don't track receiving errors.",
        textB: "We don't track all errors, but we track recurring ones.",
        line_type: ['all'], signal_tags: ['ERROR_TRACKING', 'CONTINUOUS_IMPROVEMENT']
    },
    {
        qid: 'DS_Operations_16', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We store product first, then update records.",
        textB: "We store product and update records immediately.",
        line_type: ['all'], signal_tags: ['DATA_DISCIPLINE', 'TRACEABILITY']
    },
    {
        qid: 'DS_Operations_17', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We allow relabeling anytime.",
        textB: "We allow relabeling only with controlled authorization.",
        line_type: ['all'], signal_tags: ['LOT_CONTROL', 'INTEGRITY_CONTROL']
    },
    {
        qid: 'DS_Operations_18', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We don't measure receiving time.",
        textB: "We don't measure everything, but we track dock-to-stock time.",
        line_type: ['all'], signal_tags: ['DOCK_TO_STOCK', 'THROUGHPUT_TRACKING']
    },
    {
        qid: 'DS_Operations_19', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We handle exceptions verbally.",
        textB: "We handle exceptions verbally and note them on GRN.",
        line_type: ['all'], signal_tags: ['DOCUMENT_CONTROL', 'EXCEPTION_HANDLING']
    },
    {
        qid: 'DS_Operations_20', pillar: 'Operations', industry: 'agriculture', weight: 1,
        textA: "We depend on memory for lot history.",
        textB: "We depend on memory, supported by traceability logs.",
        line_type: ['all'], signal_tags: ['TRACEABILITY', 'DATA_DISCIPLINE']
    },

    // ═══════════════════════════════════════════════════════════════
    // PILLAR 3: STORAGE INTEGRITY (Cold Chain + Silos)
    // Mapped to → Risk
    // ═══════════════════════════════════════════════════════════════

    // --- Quick Scan (4) ---
    {
        qid: 'QS_Risk_1', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "Temperatures are checked regularly by staff.",
        textB: "Temperatures are checked regularly, and alarms catch what humans miss.",
        line_type: ['all'], signal_tags: ['TEMP_MONITORING', 'ALARM_SYSTEM']
    },
    {
        qid: 'QS_Risk_2', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "Doors open a lot during peak work—normal.",
        textB: "Doors open a lot during peak work—so we stage to reduce open time.",
        line_type: ['all'], signal_tags: ['DOOR_DISCIPLINE', 'ENERGY_CONTROL']
    },
    {
        qid: 'QS_Risk_3', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "Grain is dried to target and stored.",
        textB: "Grain is dried to target and monitored because conditions change.",
        line_type: ['all'], signal_tags: ['MOISTURE_CONTROL', 'CONDITION_MONITORING']
    },
    {
        qid: 'QS_Risk_4', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "Pest control is handled when seen.",
        textB: "Pest control is handled when seen—and also on a routine plan.",
        line_type: ['all'], signal_tags: ['PEST_MANAGEMENT', 'PREVENTIVE_CONTROL']
    },

    // --- Deep Scan (20) ---
    {
        qid: 'DS_Risk_1', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We set temperatures and monitor periodically.",
        textB: "We set temperatures and monitor continuously with alarms.",
        line_type: ['all'], signal_tags: ['TEMP_MONITORING', 'ALARM_SYSTEM']
    },
    {
        qid: 'DS_Risk_2', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We allow door opening during work.",
        textB: "We allow door opening but stage to reduce exposure time.",
        line_type: ['all'], signal_tags: ['DOOR_DISCIPLINE', 'ENERGY_CONTROL']
    },
    {
        qid: 'DS_Risk_3', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We rotate stock when space demands it.",
        textB: "We rotate stock based on FIFO/FEFO rules.",
        line_type: ['all'], signal_tags: ['ROTATION_DISCIPLINE', 'FEFO_FIFO']
    },
    {
        qid: 'DS_Risk_4', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We check for ice build-up when it's visible.",
        textB: "We check for ice build-up on a schedule.",
        line_type: ['all'], signal_tags: ['COLD_CHAIN_MAINTENANCE', 'PREVENTIVE_CONTROL']
    },
    {
        qid: 'DS_Risk_5', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We assume airflow is okay if the room is cold.",
        textB: "We verify airflow/hot spots in problem zones.",
        line_type: ['all'], signal_tags: ['HOT_SPOT_DETECTION', 'AIRFLOW_MANAGEMENT']
    },
    {
        qid: 'DS_Risk_6', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We log excursions only if customers complain.",
        textB: "We log excursions automatically and respond fast.",
        line_type: ['all'], signal_tags: ['EXCURSION_RESPONSE', 'ALARM_SYSTEM']
    },
    {
        qid: 'DS_Risk_7', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We treat refrigeration issues urgently.",
        textB: "We treat refrigeration issues urgently and do root-cause fixes.",
        line_type: ['all'], signal_tags: ['ROOT_CAUSE_ANALYSIS', 'COLD_CHAIN_MAINTENANCE']
    },
    {
        qid: 'DS_Risk_8', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We store mixed odors sometimes.",
        textB: "We store mixed odors only with segregation rules.",
        line_type: ['all'], signal_tags: ['SEGREGATION', 'CONTAMINATION_CONTROL']
    },
    {
        qid: 'DS_Risk_9', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We dry grain and store it.",
        textB: "We dry grain and monitor moisture drift over time.",
        line_type: ['all'], signal_tags: ['MOISTURE_CONTROL', 'CONDITION_MONITORING']
    },
    {
        qid: 'DS_Risk_10', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We aerate when we remember.",
        textB: "We aerate based on bin temperature and ambient triggers.",
        line_type: ['all'], signal_tags: ['AERATION_DISCIPLINE', 'GRAIN_MANAGEMENT']
    },
    {
        qid: 'DS_Risk_11', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We use pesticides/fumigation when needed.",
        textB: "We use treatment with a documented protocol and checks.",
        line_type: ['all'], signal_tags: ['FUMIGATION_CONTROL', 'TREATMENT_PROTOCOL']
    },
    {
        qid: 'DS_Risk_12', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We clean bins/areas occasionally.",
        textB: "We clean bins/areas on a schedule to prevent infestation.",
        line_type: ['all'], signal_tags: ['HYGIENE_SCHEDULE', 'PREVENTIVE_CONTROL']
    },
    {
        qid: 'DS_Risk_13', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We don't measure grain temperature often.",
        textB: "We don't measure constantly, but we trend temperatures.",
        line_type: ['all'], signal_tags: ['GRAIN_TEMP_TRENDING', 'CONDITION_MONITORING']
    },
    {
        qid: 'DS_Risk_14', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We accept some spoilage as normal.",
        textB: "We accept some spoilage, but we quantify and reduce it.",
        line_type: ['all'], signal_tags: ['SHRINK_TRACKING', 'LOSS_AWARENESS']
    },
    {
        qid: 'DS_Risk_15', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We separate lots mainly by space.",
        textB: "We separate lots by risk (moisture, age, quality).",
        line_type: ['all'], signal_tags: ['SEGREGATION', 'RISK_BASED_STORAGE']
    },
    {
        qid: 'DS_Risk_16', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We inspect pests when seen.",
        textB: "We inspect pests routinely and record findings.",
        line_type: ['all'], signal_tags: ['PEST_MANAGEMENT', 'INSPECTION_ROUTINE']
    },
    {
        qid: 'DS_Risk_17', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We rely on supplier fumigation.",
        textB: "We rely on supplier fumigation and verify when critical.",
        line_type: ['all'], signal_tags: ['FUMIGATION_CONTROL', 'VERIFICATION']
    },
    {
        qid: 'DS_Risk_18', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We keep frozen goods cold.",
        textB: "We keep frozen goods cold with evidence (records).",
        line_type: ['all'], signal_tags: ['TEMP_MONITORING', 'EVIDENCE_CAPTURE']
    },
    {
        qid: 'DS_Risk_19', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We manage humidity informally.",
        textB: "We manage humidity where it affects quality/packaging.",
        line_type: ['all'], signal_tags: ['HUMIDITY_CONTROL', 'CONDITION_MONITORING']
    },
    {
        qid: 'DS_Risk_20', pillar: 'Risk', industry: 'agriculture', weight: 1,
        textA: "We handle spills/cleaning when time permits.",
        textB: "We handle spills/cleaning immediately as a standard rule.",
        line_type: ['all'], signal_tags: ['HYGIENE_SCHEDULE', 'CONTAMINATION_CONTROL']
    },

    // ═══════════════════════════════════════════════════════════════
    // PILLAR 4: INVENTORY + THROUGHPUT
    // Mapped to → Innovation (process optimization)
    // ═══════════════════════════════════════════════════════════════

    // --- Quick Scan (4) ---
    {
        qid: 'QS_Innovation_1', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We know stock by experience.",
        textB: "We know stock by experience, and we verify with cycle counts.",
        line_type: ['all'], signal_tags: ['INVENTORY_ACCURACY', 'CYCLE_COUNT']
    },
    {
        qid: 'QS_Innovation_2', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "Dispatch speed matters most.",
        textB: "Dispatch speed matters most, and accuracy gates prevent returns.",
        line_type: ['all'], signal_tags: ['DISPATCH_ACCURACY', 'QUALITY_GATE']
    },
    {
        qid: 'QS_Innovation_3', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "Dock queues are common in busy seasons.",
        textB: "Dock queues are common, so we schedule arrivals to reduce congestion.",
        line_type: ['all'], signal_tags: ['DOCK_SCHEDULING', 'CONGESTION_CONTROL']
    },
    {
        qid: 'QS_Innovation_4', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We keep products where space is available.",
        textB: "We keep products where space is available, guided by slotting rules.",
        line_type: ['all'], signal_tags: ['SLOTTING_DISCIPLINE', 'LAYOUT_OPTIMIZATION']
    },

    // --- Deep Scan (20) ---
    {
        qid: 'DS_Innovation_1', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We can locate stock quickly by experience.",
        textB: "We can locate stock quickly using location IDs.",
        line_type: ['all'], signal_tags: ['WMS_DISCIPLINE', 'LOCATION_TRACKING']
    },
    {
        qid: 'DS_Innovation_2', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We count stock at month end.",
        textB: "We count stock in cycles so month end is smooth.",
        line_type: ['all'], signal_tags: ['CYCLE_COUNT', 'INVENTORY_ACCURACY']
    },
    {
        qid: 'DS_Innovation_3', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We prioritize speed in picking.",
        textB: "We prioritize speed with accuracy gates.",
        line_type: ['all'], signal_tags: ['PICK_ACCURACY', 'DISPATCH_ACCURACY']
    },
    {
        qid: 'DS_Innovation_4', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We accept occasional wrong picks.",
        textB: "We accept occasional wrong picks but track and reduce them.",
        line_type: ['all'], signal_tags: ['ERROR_TRACKING', 'PICK_ACCURACY']
    },
    {
        qid: 'DS_Innovation_5', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We keep layout flexible.",
        textB: "We keep layout flexible with slotting rules.",
        line_type: ['all'], signal_tags: ['SLOTTING_DISCIPLINE', 'LAYOUT_OPTIMIZATION']
    },
    {
        qid: 'DS_Innovation_6', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We load trucks as they arrive.",
        textB: "We load trucks as they arrive, guided by schedule windows.",
        line_type: ['all'], signal_tags: ['DOCK_SCHEDULING', 'TRUCK_TURNAROUND']
    },
    {
        qid: 'DS_Innovation_7', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We don't time operations.",
        textB: "We don't time everything, but we track turnaround time.",
        line_type: ['all'], signal_tags: ['THROUGHPUT_TRACKING', 'TRUCK_TURNAROUND']
    },
    {
        qid: 'DS_Innovation_8', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We use paper lists.",
        textB: "We use paper lists with double-check steps.",
        line_type: ['all'], signal_tags: ['DISPATCH_ACCURACY', 'VERIFICATION']
    },
    {
        qid: 'DS_Innovation_9', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We stage product wherever space is.",
        textB: "We stage product in defined staging zones.",
        line_type: ['all'], signal_tags: ['STAGING_DISCIPLINE', 'LAYOUT_OPTIMIZATION']
    },
    {
        qid: 'DS_Innovation_10', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We reconcile issues at the end of day.",
        textB: "We reconcile issues immediately when detected.",
        line_type: ['all'], signal_tags: ['REAL_TIME_RECONCILIATION', 'DATA_DISCIPLINE']
    },
    {
        qid: 'DS_Innovation_11', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We allow mixed pallets for convenience.",
        textB: "We allow mixed pallets only when documented and labeled.",
        line_type: ['all'], signal_tags: ['LOT_CONTROL', 'INTEGRITY_CONTROL']
    },
    {
        qid: 'DS_Innovation_12', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We focus on inbound flow.",
        textB: "We focus on inbound and outbound balancing.",
        line_type: ['all'], signal_tags: ['FLOW_BALANCING', 'THROUGHPUT_TRACKING']
    },
    {
        qid: 'DS_Innovation_13', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We handle returns when they come.",
        textB: "We handle returns with a controlled returns SOP.",
        line_type: ['all'], signal_tags: ['RETURNS_CONTROL', 'STANDARD_PROCEDURES']
    },
    {
        qid: 'DS_Innovation_14', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We assume shrink is small.",
        textB: "We assume shrink is small but measure it.",
        line_type: ['all'], signal_tags: ['SHRINK_TRACKING', 'LOSS_AWARENESS']
    },
    {
        qid: 'DS_Innovation_15', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We don't track touches.",
        textB: "We don't track all touches, but reduce unnecessary handling.",
        line_type: ['all'], signal_tags: ['HANDLING_REDUCTION', 'DAMAGE_PREVENTION']
    },
    {
        qid: 'DS_Innovation_16', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We relocate stock often.",
        textB: "We relocate stock only with record updates immediately.",
        line_type: ['all'], signal_tags: ['LOCATION_TRACKING', 'DATA_DISCIPLINE']
    },
    {
        qid: 'DS_Innovation_17', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We rely on supervisors to catch errors.",
        textB: "We rely on supervisors and system checks.",
        line_type: ['all'], signal_tags: ['SYSTEM_CHECKS', 'ERROR_PREVENTION']
    },
    {
        qid: 'DS_Innovation_18', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We do dispatch paperwork quickly.",
        textB: "We do dispatch paperwork with a completeness checklist.",
        line_type: ['all'], signal_tags: ['DOCUMENT_CONTROL', 'DISPATCH_ACCURACY']
    },
    {
        qid: 'DS_Innovation_19', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We don't analyze congestion.",
        textB: "We don't analyze everything, but we fix bottleneck zones.",
        line_type: ['all'], signal_tags: ['CONGESTION_CONTROL', 'CONTINUOUS_IMPROVEMENT']
    },
    {
        qid: 'DS_Innovation_20', pillar: 'Innovation', industry: 'agriculture', weight: 1,
        textA: "We do annual stock take.",
        textB: "We do annual stock take supported by cycle counting.",
        line_type: ['all'], signal_tags: ['CYCLE_COUNT', 'INVENTORY_ACCURACY']
    },

    // ═══════════════════════════════════════════════════════════════
    // PILLAR 5: ASSET RELIABILITY + RISK + FINANCIAL CONTROL
    // Mapped to → Money (financial), Leadership (decisions), People (training)
    // ═══════════════════════════════════════════════════════════════

    // --- Quick Scan (4) ---
    {
        qid: 'QS_Leadership_1', pillar: 'Leadership', industry: 'agriculture', weight: 1,
        textA: "We maintain equipment when it shows problems.",
        textB: "We maintain equipment when it shows problems—and by schedule.",
        line_type: ['all'], signal_tags: ['PREVENTIVE_MAINTENANCE', 'ASSET_DISCIPLINE']
    },
    {
        qid: 'QS_Money_2', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "Energy costs are unavoidable.",
        textB: "Energy costs are unavoidable, so we track drivers and reduce waste.",
        line_type: ['all'], signal_tags: ['ENERGY_MANAGEMENT', 'COST_CONTROL']
    },
    {
        qid: 'QS_People_1', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "Incidents are rare; we move on quickly.",
        textB: "Incidents are rare; we document and convert lessons into SOPs.",
        line_type: ['all'], signal_tags: ['INCIDENT_LEARNING', 'SOP_CONVERSION']
    },
    {
        qid: 'QS_Money_3', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We invoice based on storage space used.",
        textB: "We invoice based on storage space used plus billable services delivered.",
        line_type: ['all'], signal_tags: ['BILLING_ACCURACY', 'REVENUE_CAPTURE']
    },

    // --- Deep Scan (20) ---
    {
        qid: 'DS_Leadership_1', pillar: 'Leadership', industry: 'agriculture', weight: 1,
        textA: "We service equipment when it shows symptoms.",
        textB: "We service equipment on schedule to avoid symptoms.",
        line_type: ['all'], signal_tags: ['PREVENTIVE_MAINTENANCE', 'ASSET_DISCIPLINE']
    },
    {
        qid: 'DS_Leadership_2', pillar: 'Leadership', industry: 'agriculture', weight: 1,
        textA: "We buy spare parts when needed.",
        textB: "We buy spare parts and keep critical spares stocked.",
        line_type: ['all'], signal_tags: ['SPARE_PARTS_READINESS', 'ASSET_DISCIPLINE']
    },
    {
        qid: 'DS_Leadership_3', pillar: 'Leadership', industry: 'agriculture', weight: 1,
        textA: "We only calibrate when required by clients.",
        textB: "We calibrate routinely to avoid disputes.",
        line_type: ['all'], signal_tags: ['CALIBRATION_DISCIPLINE', 'DISPUTE_READINESS']
    },
    {
        qid: 'DS_Money_6', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We focus on keeping lights on.",
        textB: "We focus on uptime plus energy efficiency.",
        line_type: ['all'], signal_tags: ['ENERGY_MANAGEMENT', 'ENERGY_KPI']
    },
    {
        qid: 'DS_People_1', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "We treat safety as common sense.",
        textB: "We treat safety as common sense with incident logs.",
        line_type: ['all'], signal_tags: ['INCIDENT_LOGGING', 'SAFETY_CULTURE']
    },
    {
        qid: 'DS_People_2', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "We accept some forklift damage.",
        textB: "We accept some forklift damage but track patterns.",
        line_type: ['all'], signal_tags: ['DAMAGE_TRACKING', 'HANDLING_DISCIPLINE']
    },
    {
        qid: 'DS_Leadership_4', pillar: 'Leadership', industry: 'agriculture', weight: 1,
        textA: "We handle insurance when incidents occur.",
        textB: "We handle insurance proactively with evidence readiness.",
        line_type: ['all'], signal_tags: ['INSURANCE_READINESS', 'EVIDENCE_CAPTURE']
    },
    {
        qid: 'DS_Money_7', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We invoice monthly.",
        textB: "We invoice monthly with clear service line items.",
        line_type: ['all'], signal_tags: ['BILLING_ACCURACY', 'REVENUE_CAPTURE']
    },
    {
        qid: 'DS_Leadership_5', pillar: 'Leadership', industry: 'agriculture', weight: 1,
        textA: "We don't measure maintenance completion.",
        textB: "We don't measure everything, but PM completion is tracked.",
        line_type: ['all'], signal_tags: ['PM_TRACKING', 'ASSET_DISCIPLINE']
    },
    {
        qid: 'DS_Money_8', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We manage cash when it's tight.",
        textB: "We manage cash weekly with aging and collection routines.",
        line_type: ['all'], signal_tags: ['CASH_MANAGEMENT', 'COLLECTION_DISCIPLINE']
    },
    {
        qid: 'DS_Leadership_6', pillar: 'Leadership', industry: 'agriculture', weight: 1,
        textA: "We keep generators for emergencies.",
        textB: "We keep generators and test them routinely.",
        line_type: ['all'], signal_tags: ['BACKUP_TESTING', 'ASSET_DISCIPLINE']
    },
    {
        qid: 'DS_Leadership_7', pillar: 'Leadership', industry: 'agriculture', weight: 1,
        textA: "We fix leaks when discovered.",
        textB: "We fix leaks and investigate root cause.",
        line_type: ['all'], signal_tags: ['ROOT_CAUSE_ANALYSIS', 'CONTINUOUS_IMPROVEMENT']
    },
    {
        qid: 'DS_People_3', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "We allow informal overtime.",
        textB: "We allow overtime with approval tied to throughput needs.",
        line_type: ['all'], signal_tags: ['LABOR_CONTROL', 'COST_DISCIPLINE']
    },
    {
        qid: 'DS_Money_9', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We accept energy bills as fixed.",
        textB: "We treat energy as a controllable KPI.",
        line_type: ['all'], signal_tags: ['ENERGY_KPI', 'ENERGY_MANAGEMENT']
    },
    {
        qid: 'DS_People_4', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "We train staff on the job.",
        textB: "We train staff with short SOP refreshers weekly.",
        line_type: ['all'], signal_tags: ['SOP_TRAINING', 'CAPABILITY_BUILD']
    },
    {
        qid: 'DS_People_5', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "We update SOPs occasionally.",
        textB: "We update SOPs after incidents and audit findings.",
        line_type: ['all'], signal_tags: ['SOP_CONVERSION', 'CONTINUOUS_IMPROVEMENT']
    },
    {
        qid: 'DS_People_6', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "We handle compliance at audit time.",
        textB: "We handle compliance daily through checklists.",
        line_type: ['all'], signal_tags: ['COMPLIANCE_ROUTINE', 'AUDIT_READINESS']
    },
    {
        qid: 'DS_People_7', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "We rely on key people.",
        textB: "We rely on key people supported by standard processes.",
        line_type: ['all'], signal_tags: ['KEY_PERSON_RISK', 'PROCESS_STANDARDIZATION']
    },
    {
        qid: 'DS_People_8', pillar: 'People', industry: 'agriculture', weight: 1,
        textA: "We solve problems fast.",
        textB: "We solve problems fast and prevent repeats.",
        line_type: ['all'], signal_tags: ['ROOT_CAUSE_ANALYSIS', 'INCIDENT_LEARNING']
    },
    {
        qid: 'DS_Money_10', pillar: 'Money', industry: 'agriculture', weight: 1,
        textA: "We track profit overall.",
        textB: "We track profit by zone/service/customer.",
        line_type: ['all'], signal_tags: ['PROFIT_GRANULARITY', 'COST_TO_SERVE']
    }
];
