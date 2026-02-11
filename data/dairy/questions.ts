import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // --- PILLAR 1: Leadership (Supply Network & Farmer Loyalty) ---
    // Quick Scan
    {
        qid: 'QS_Dairy_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "When volume drops, you wait to see if it recovers.",
        textB: "When volume drops, you call top suppliers immediately.",
        line_type: ['all'],
        signal_tags: ['VOLUME_FORECAST']
    },
    {
        qid: 'QS_Dairy_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Farmers stay loyal mostly because of personal relationships.",
        textB: "Farmers stay loyal because of payment reliability and clear rules.",
        line_type: ['all'],
        signal_tags: ['FARMER_CHURN']
    },
    // Deep Scan
    {
        qid: 'DS_Dairy_Lead_1',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Track only total liters.",
        textB: "Track liters per farmer weekly.",
        line_type: ['all'],
        signal_tags: ['VOLUME_FORECAST']
    },
    {
        qid: 'DS_Dairy_Lead_2',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Explain onboarding standards verbally.",
        textB: "Have written onboarding standards.",
        line_type: ['all'],
        signal_tags: ['HYGIENE_AUDIT']
    },
    {
        qid: 'DS_Dairy_Lead_3',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Treat all suppliers the same.",
        textB: "Segment farmers by volume/quality.",
        line_type: ['all'],
        signal_tags: ['FARMER_CHURN']
    },
    {
        qid: 'DS_Dairy_Lead_4',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Only reject milk without feedback.",
        textB: "Share quality feedback.",
        line_type: ['all'],
        signal_tags: ['COMPLAINT_RESOLUTION']
    },
    {
        qid: 'DS_Dairy_Lead_5',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Payments depend on cash availability.",
        textB: "Payments run on a fixed schedule.",
        line_type: ['all'],
        signal_tags: ['PAYMENT_TIMELINESS']
    },
    {
        qid: 'DS_Dairy_Lead_6',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Respond when suppliers complain.",
        textB: "Call top suppliers proactively.",
        line_type: ['all'],
        signal_tags: ['FARMER_CHURN']
    },
    {
        qid: 'DS_Dairy_Lead_7',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Notice churn informally.",
        textB: "Keep churn records.",
        line_type: ['all'],
        signal_tags: ['FARMER_CHURN']
    },
    {
        qid: 'DS_Dairy_Lead_8',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Reward only volume.",
        textB: "Reward consistent quality.",
        line_type: ['all'],
        signal_tags: ['PREMIUM_CAPTURE']
    },
    {
        qid: 'DS_Dairy_Lead_9',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Manage seasonality reactively.",
        textB: "Plan seasonal volume changes.",
        line_type: ['all'],
        signal_tags: ['VOLUME_FORECAST']
    },
    {
        qid: 'DS_Dairy_Lead_10',
        pillar: 'Leadership',
        industry: 'agriculture',
        weight: 1,
        textA: "Disputes resolved with negotiation.",
        textB: "Disputes resolved with records.",
        line_type: ['all'],
        signal_tags: ['COMPLAINT_RESOLUTION']
    },

    // --- PILLAR 2: Risk (Quality, Testing & Food Safety) ---
    // Quick Scan
    {
        qid: 'QS_Dairy_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Intake decisions mostly based on supplier history + judgment.",
        textB: "Intake decisions mostly based on standard test results.",
        line_type: ['all'],
        signal_tags: ['TESTING_GAP']
    },
    {
        qid: 'QS_Dairy_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Quality records kept only when issues happen.",
        textB: "Quality records kept every batch/day.",
        line_type: ['all'],
        signal_tags: ['TRACEABILITY_GAP']
    },
    // Deep Scan
    {
        qid: 'DS_Dairy_Risk_1',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Testing done for most deliveries.",
        textB: "Testing done for every delivery.",
        line_type: ['all'],
        signal_tags: ['TESTING_GAP']
    },
    {
        qid: 'DS_Dairy_Risk_2',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Reject rules adjust depending on situation.",
        textB: "Reject rules never change mid-day.",
        line_type: ['all'],
        signal_tags: ['REJECT_POLICY']
    },
    {
        qid: 'DS_Dairy_Risk_3',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Milk becomes 'mixed' with minimal tracking.",
        textB: "Batch labels link to suppliers.",
        line_type: ['all'],
        signal_tags: ['BATCH_TRACEABILITY']
    },
    {
        qid: 'DS_Dairy_Risk_4',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Records are hard to find.",
        textB: "Staff can show records instantly.",
        line_type: ['all'],
        signal_tags: ['SOP_GAP']
    },
    {
        qid: 'DS_Dairy_Risk_5',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Repeaters are handled case-by-case.",
        textB: "Adulteration repeaters face escalation.",
        line_type: ['all'],
        signal_tags: ['ADULTERATION_RISK']
    },
    {
        qid: 'DS_Dairy_Risk_6',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Sanitation is based on visual cleanliness.",
        textB: "Sanitation has a schedule + checklist.",
        line_type: ['all'],
        signal_tags: ['CLEANING_PROTOCOL']
    },
    {
        qid: 'DS_Dairy_Risk_7',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Buyer specs are assumed.",
        textB: "Buyer specs are documented.",
        line_type: ['all'],
        signal_tags: ['CONTRACT_COMPLIANCE']
    },
    {
        qid: 'DS_Dairy_Risk_8',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "We accept flat pricing.",
        textB: "We capture quality premiums.",
        line_type: ['all'],
        signal_tags: ['PREMIUM_CAPTURE']
    },
    {
        qid: 'DS_Dairy_Risk_9',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Training happens when mistakes occur.",
        textB: "Training refreshed monthly/quarterly.",
        line_type: ['all'],
        signal_tags: ['TRAINING_GAP']
    },
    {
        qid: 'DS_Dairy_Risk_10',
        pillar: 'Risk',
        industry: 'agriculture',
        weight: 1,
        textA: "Quality issues trigger blame/fixes only.",
        textB: "Quality issues trigger root-cause reviews.",
        line_type: ['all'],
        signal_tags: ['ROOT_CAUSE_ANALYSIS']
    },

    // --- PILLAR 3: Innovation (Cold Chain & Technology) ---
    // Quick Scan
    {
        qid: 'QS_Dairy_Inno_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "During outages, you troubleshoot first then start generator.",
        textB: "During outages, you start generator immediately with a drill.",
        line_type: ['all'],
        signal_tags: ['GENERATOR_READINESS']
    },
    {
        qid: 'QS_Dairy_Inno_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Spoilage is mostly tracked as 'general loss'.",
        textB: "Spoilage is mostly tracked as liters + cause.",
        line_type: ['all'],
        signal_tags: ['SPOILAGE_RISK']
    },
    // Deep Scan
    {
        qid: 'DS_Dairy_Inno_1',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Temps logged when remembered.",
        textB: "Temps logged at set times.",
        line_type: ['all'],
        signal_tags: ['TEMP_DISCIPLINE']
    },
    {
        qid: 'DS_Dairy_Inno_2',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Generator tested when needed.",
        textB: "Generator tested weekly.",
        line_type: ['all'],
        signal_tags: ['GENERATOR_READINESS']
    },
    {
        qid: 'DS_Dairy_Inno_3',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Chilling assumed.",
        textB: "Time-to-chill recorded.",
        line_type: ['all'],
        signal_tags: ['EARLY_CHILL']
    },
    {
        qid: 'DS_Dairy_Inno_4',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Cleaning done but not verified.",
        textB: "Cleaning checklist signed daily.",
        line_type: ['all'],
        signal_tags: ['CLEANING_PROTOCOL']
    },
    {
        qid: 'DS_Dairy_Inno_5',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Spoiled milk triggers replacement only.",
        textB: "Spoiled milk triggers root-cause review.",
        line_type: ['all'],
        signal_tags: ['SPOILAGE_RISK']
    },
    {
        qid: 'DS_Dairy_Inno_6',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Thermometer readings trusted forever.",
        textB: "Tank thermometers calibrated.",
        line_type: ['all'],
        signal_tags: ['ASSET_CALIBRATION']
    },
    {
        qid: 'DS_Dairy_Inno_7',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Peak handled by overtime/pressure.",
        textB: "Capacity planning done for peak.",
        line_type: ['all'],
        signal_tags: ['VOLUME_FORECAST']
    },
    {
        qid: 'DS_Dairy_Inno_8',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Transfer points inspected only when leaking.",
        textB: "Transfer points inspected.",
        line_type: ['all'],
        signal_tags: ['MAINTENANCE_DELAY']
    },
    {
        qid: 'DS_Dairy_Inno_9',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Only senior staff knows cold chain SOP.",
        textB: "Cold chain SOP taught to all staff.",
        line_type: ['all'],
        signal_tags: ['TRAINING_GAP']
    },
    {
        qid: 'DS_Dairy_Inno_10',
        pillar: 'Innovation',
        industry: 'agriculture',
        weight: 1,
        textA: "Dispatch happens when buyer calls.",
        textB: "Dispatch timing planned.",
        line_type: ['all'],
        signal_tags: ['EARLY_CHILL']
    },

    // --- PILLAR 4: Operations (Logistics) ---
    // Quick Scan
    {
        qid: 'QS_Dairy_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Route design is based on historical routine.",
        textB: "Route design is planned by volume clusters.",
        line_type: ['all'],
        signal_tags: ['ROUTE_INEFFICIENCY']
    },
    {
        qid: 'QS_Dairy_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Fuel tracking is mostly total fuel per week/month.",
        textB: "Fuel tracking is mostly per route/driver.",
        line_type: ['all'],
        signal_tags: ['FUEL_EFFICIENCY']
    },
    // Deep Scan
    {
        qid: 'DS_Dairy_Ops_1',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Track only total liters.",
        textB: "Track liters per stop.",
        line_type: ['all'],
        signal_tags: ['ROUTE_DENSITY']
    },
    {
        qid: 'DS_Dairy_Ops_2',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Keep routes stable for convenience.",
        textB: "Change routes when data shows waste.",
        line_type: ['all'],
        signal_tags: ['ROUTE_INEFFICIENCY']
    },
    {
        qid: 'DS_Dairy_Ops_3',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Pickup times are flexible.",
        textB: "Pickup times are enforced.",
        line_type: ['all'],
        signal_tags: ['EARLY_CHILL']
    },
    {
        qid: 'DS_Dairy_Ops_4',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Drivers judged by 'effort'.",
        textB: "Driver KPIs exist.",
        line_type: ['all'],
        signal_tags: ['ROLE_CLARITY']
    },
    {
        qid: 'DS_Dairy_Ops_5',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Vehicle checked when noisy.",
        textB: "Vehicle checklist daily.",
        line_type: ['all'],
        signal_tags: ['VEHICLE_UPTIME']
    },
    {
        qid: 'DS_Dairy_Ops_6',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Respond when roads fail.",
        textB: "Plan for rain/season disruptions.",
        line_type: ['all'],
        signal_tags: ['ROUTE_INEFFICIENCY']
    },
    {
        qid: 'DS_Dairy_Ops_7',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Accept waiting as normal.",
        textB: "Reduce waiting time at farms.",
        line_type: ['all'],
        signal_tags: ['EARLY_CHILL']
    },
    {
        qid: 'DS_Dairy_Ops_8',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Insulation depends on availability.",
        textB: "Insulated standards enforced.",
        line_type: ['all'],
        signal_tags: ['INSULATED_TRANSPORT']
    },
    {
        qid: 'DS_Dairy_Ops_9',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Delays are not logged.",
        textB: "Track delays with reasons.",
        line_type: ['all'],
        signal_tags: ['VEHICLE_UPTIME']
    },
    {
        qid: 'DS_Dairy_Ops_10',
        pillar: 'Operations',
        industry: 'agriculture',
        weight: 1,
        textA: "Routes are never reviewed.",
        textB: "Route profitability reviewed monthly.",
        line_type: ['all'],
        signal_tags: ['NET_MARGIN_TRACKING']
    },

    // --- PILLAR 5: People (Operations & Standard Work) ---
    // Quick Scan
    {
        qid: 'QS_Dairy_Ppl_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Daily operations rely on experienced people remembering.",
        textB: "Daily operations rely on checklists and handovers.",
        line_type: ['all'],
        signal_tags: ['SOP_GAP']
    },
    {
        qid: 'QS_Dairy_Ppl_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "When errors happen, the first reaction is fix the person.",
        textB: "When errors happen, the first reaction is fix process step.",
        line_type: ['all'],
        signal_tags: ['BLAME_CULTURE']
    },
    // Deep Scan
    {
        qid: 'DS_Dairy_Ppl_1',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Roles overlap heavily.",
        textB: "Roles separated.",
        line_type: ['all'],
        signal_tags: ['ROLE_CONFLICT']
    },
    {
        qid: 'DS_Dairy_Ppl_2',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Handover is verbal.",
        textB: "Handover checklist used.",
        line_type: ['all'],
        signal_tags: ['HANDOVER_GAP']
    },
    {
        qid: 'DS_Dairy_Ppl_3',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Logs checked occasionally.",
        textB: "Logs checked by supervisor daily.",
        line_type: ['all'],
        signal_tags: ['ACCOUNTABILITY_FOG']
    },
    {
        qid: 'DS_Dairy_Ppl_4',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Training assumed.",
        textB: "Staff training tracked.",
        line_type: ['all'],
        signal_tags: ['TRAINING_GAP']
    },
    {
        qid: 'DS_Dairy_Ppl_5',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "SOP exists in a file.",
        textB: "SOP posters visible on-site.",
        line_type: ['all'],
        signal_tags: ['SOP_GAP']
    },
    {
        qid: 'DS_Dairy_Ppl_6',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Issues trigger quick fixes.",
        textB: "Issues trigger corrective action notes.",
        line_type: ['all'],
        signal_tags: ['ROOT_CAUSE_ANALYSIS']
    },
    {
        qid: 'DS_Dairy_Ppl_7',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Measured on attendance only.",
        textB: "Staff performance measured on KPIs.",
        line_type: ['all'],
        signal_tags: ['PERFORMANCE_TRACKING']
    },
    {
        qid: 'DS_Dairy_Ppl_8',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "New staff learn by watching.",
        textB: "New staff onboarded systematically.",
        line_type: ['all'],
        signal_tags: ['ONBOARDING_GAP']
    },
    {
        qid: 'DS_Dairy_Ppl_9',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Escalation depends on relationships.",
        textB: "Clear escalation path.",
        line_type: ['all'],
        signal_tags: ['ROLE_CLARITY']
    },
    {
        qid: 'DS_Dairy_Ppl_10',
        pillar: 'People',
        industry: 'agriculture',
        weight: 1,
        textA: "Meetings happen only when crisis hits.",
        textB: "Weekly review meeting exists.",
        line_type: ['all'],
        signal_tags: ['MANAGEMENT_RHYTHM']
    },

    // --- PILLAR 6: Market (Sales & Contracts) ---
    // Quick Scan
    {
        qid: 'QS_Dairy_Mkt_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Selling approach is mostly price acceptance + relationship.",
        textB: "Selling approach is mostly quality proof + diversified options.",
        line_type: ['all'],
        signal_tags: ['BUYER_POWER']
    },
    {
        qid: 'QS_Dairy_Mkt_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Buyer problems are handled by negotiation each time.",
        textB: "Buyer problems are handled by contract terms + documentation.",
        line_type: ['all'],
        signal_tags: ['CONTRACT_COMPLIANCE']
    },
    // Deep Scan
    {
        qid: 'DS_Dairy_Mkt_1',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Track only selling price.",
        textB: "Track net margin per buyer.",
        line_type: ['all'],
        signal_tags: ['NET_MARGIN_TRACKING']
    },
    {
        qid: 'DS_Dairy_Mkt_2',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Accept delays to keep buyer.",
        textB: "Enforce payment terms.",
        line_type: ['all'],
        signal_tags: ['PAYMENT_TIMELINESS']
    },
    {
        qid: 'DS_Dairy_Mkt_3',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Rely on main buyer.",
        textB: "Keep 2–4 buyer options.",
        line_type: ['all'],
        signal_tags: ['BUYER_POWER']
    },
    {
        qid: 'DS_Dairy_Mkt_4',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Provide quality verbally.",
        textB: "Submit quality documentation.",
        line_type: ['all'],
        signal_tags: ['PREMIUM_CAPTURE']
    },
    {
        qid: 'DS_Dairy_Mkt_5',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Mix all milk.",
        textB: "Separate premium-grade batches.",
        line_type: ['all'],
        signal_tags: ['PRODUCT_GRADING']
    },
    {
        qid: 'DS_Dairy_Mkt_6',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Accept claims without analysis.",
        textB: "Track claims reasons.",
        line_type: ['all'],
        signal_tags: ['COMPLAINT_RESOLUTION']
    },
    {
        qid: 'DS_Dairy_Mkt_7',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Everything is spot sales.",
        textB: "Contracts/standing orders exist.",
        line_type: ['all'],
        signal_tags: ['CONTRACT_COMPLIANCE']
    },
    {
        qid: 'DS_Dairy_Mkt_8',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Negotiate using urgency.",
        textB: "Negotiate using data.",
        line_type: ['all'],
        signal_tags: ['BUYER_POWER']
    },
    {
        qid: 'DS_Dairy_Mkt_9',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Wait for buyer demand.",
        textB: "Plan volumes with buyers.",
        line_type: ['all'],
        signal_tags: ['VOLUME_FORECAST']
    },
    {
        qid: 'DS_Dairy_Mkt_10',
        pillar: 'Market',
        industry: 'agriculture',
        weight: 1,
        textA: "Compete on price only.",
        textB: "Build brand trust signals.",
        line_type: ['all'],
        signal_tags: ['PREMIUM_SEGMENTATION']
    },

    // --- PILLAR 7: Money (Finance) ---
    // Quick Scan
    {
        qid: 'QS_Dairy_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Payment processing is mostly urgent payments when cash arrives.",
        textB: "Payment processing is mostly structured approvals + reconciliation.",
        line_type: ['all'],
        signal_tags: ['PAYMENT_AUDIT']
    },
    {
        qid: 'QS_Dairy_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "You know profitability mainly by 'bank balance feeling'.",
        textB: "You know profitability mainly by margin per liter model.",
        line_type: ['all'],
        signal_tags: ['NET_MARGIN_TRACKING']
    },
    // Deep Scan
    {
        qid: 'DS_Dairy_Money_1',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Weekly reconciliation.",
        textB: "Daily reconciliation.",
        line_type: ['all'],
        signal_tags: ['PAYMENT_AUDIT']
    },
    {
        qid: 'DS_Dairy_Money_2',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "One person handles multiple roles.",
        textB: "Separate roles (record/approve/pay).",
        line_type: ['all'],
        signal_tags: ['FRAUD_CONTROL']
    },
    {
        qid: 'DS_Dairy_Money_3',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Statements issued upon complaint.",
        textB: "Farmer statements issued routinely.",
        line_type: ['all'],
        signal_tags: ['PAYMENT_TIMELINESS']
    },
    {
        qid: 'DS_Dairy_Money_4',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Inventory checked when missing.",
        textB: "Inventory counted regularly.",
        line_type: ['all'],
        signal_tags: ['INVENTORY_DISCIPLINE']
    },
    {
        qid: 'DS_Dairy_Money_5',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Many costs lumped together.",
        textB: "Costs categorized properly.",
        line_type: ['all'],
        signal_tags: ['NET_MARGIN_TRACKING']
    },
    {
        qid: 'DS_Dairy_Money_6',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Exceptions ignored.",
        textB: "Payment exceptions reviewed.",
        line_type: ['all'],
        signal_tags: ['PAYMENT_AUDIT']
    },
    {
        qid: 'DS_Dairy_Money_7',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Operate hand-to-mouth.",
        textB: "Cash buffer exists.",
        line_type: ['all'],
        signal_tags: ['CASH_RESILIENCE']
    },
    {
        qid: 'DS_Dairy_Money_8',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Variances accepted.",
        textB: "Variances investigated.",
        line_type: ['all'],
        signal_tags: ['PRICING_LEAKAGE']
    },
    {
        qid: 'DS_Dairy_Money_9',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Matched irregularly.",
        textB: "Bank/mobile money matched daily.",
        line_type: ['all'],
        signal_tags: ['PAYMENT_AUDIT']
    },
    {
        qid: 'DS_Dairy_Money_10',
        pillar: 'Money',
        industry: 'agriculture',
        weight: 1,
        textA: "Deductions decided informally.",
        textB: "Deductions/bonuses documented.",
        line_type: ['all'],
        signal_tags: ['PAYMENT_TIMELINESS']
    }
];
