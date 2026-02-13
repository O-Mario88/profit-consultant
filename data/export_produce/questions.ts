
import { QuestionDefinition } from '../../types';

const LT = ['Exporter / Cross-border Trader'];

export const EXPORT_PRODUCE_QUESTIONS: QuestionDefinition[] = [
    // ===================== QUICK SCAN (4 per pillar = 28) =====================

    // --- P1: Market Access & Buyer Contracts → Market ---
    {
        qid: 'QS_EXPORT_MKT_01', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['spec_mismatch'], weight: 1.0,
        textA: "We confirm availability first, then align spec details as we prepare shipment.",
        textB: "We update our spec sheet and confirm tolerances before quoting."
    },
    {
        qid: 'QS_EXPORT_MKT_02', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['price_shock_exposure'], weight: 1.1,
        textA: "What the buyer paid last time, adjusted for today's situation.",
        textB: "A benchmark (market/grade) plus our cost-to-serve for that route."
    },
    {
        qid: 'QS_EXPORT_MKT_03', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['claims_leakage'], weight: 1.2,
        textA: "We try to solve it fast to protect the relationship, then review internally.",
        textB: "We follow a defined inspection/sampling method and evidence timeline."
    },
    {
        qid: 'QS_EXPORT_MKT_04', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['contract_term_weakness'], weight: 1.0,
        textA: "Volume + delivery dates + keeping the buyer happy.",
        textB: "Acceptance criteria + Incoterms responsibilities + claim window."
    },

    // --- P2: Supply & Procurement Network → Operations ---
    {
        qid: 'QS_EXPORT_OPS_01', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['supplier_side_selling'], weight: 1.1,
        textA: "Based on who has stock today.",
        textB: "Scored and approved."
    },
    {
        qid: 'QS_EXPORT_OPS_02', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['margin_mirage'], weight: 1.0,
        textA: "Spread supply to keep everyone satisfied.",
        textB: "Prioritize highest-margin buyers."
    },
    {
        qid: 'QS_EXPORT_OPS_03', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['supplier_payment_pressure'], weight: 1.1,
        textA: "Negotiated each time.",
        textB: "Tied to grade/quality rules."
    },
    {
        qid: 'QS_EXPORT_OPS_04', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['traceability_gap'], weight: 1.2,
        textA: "Later when paperwork is done.",
        textB: "At receiving gate."
    },

    // --- P3: Quality, Food Safety & Certification → Innovation ---
    {
        qid: 'QS_EXPORT_INN_01', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['quality_trust_gap'], weight: 1.1,
        textA: "Mostly at final packing stage.",
        textB: "At receiving + during packing."
    },
    {
        qid: 'QS_EXPORT_INN_02', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['handling_damage_culture'], weight: 1.0,
        textA: "Informal on-the-job.",
        textB: "Documented & refreshed."
    },
    {
        qid: 'QS_EXPORT_INN_03', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['rejection_shock'], weight: 1.2,
        textA: "You push harder to meet shipment.",
        textB: "You run root cause + CAPA."
    },
    {
        qid: 'QS_EXPORT_INN_04', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['traceability_blindspot'], weight: 1.1,
        textA: "Traceable \"if we search hard.\"",
        textB: "Lot-coded and logged."
    },

    // --- P4: Packaging, Labeling & Value Add → People ---
    {
        qid: 'QS_EXPORT_PPL_01', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['packaging_waste_bleed'], weight: 1.0,
        textA: "What's available and affordable.",
        textB: "Route stress tests + spec."
    },
    {
        qid: 'QS_EXPORT_PPL_02', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['spec_mismatch'], weight: 1.1,
        textA: "By quick visual check.",
        textB: "With a checklist."
    },
    {
        qid: 'QS_EXPORT_PPL_03', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['capacity_planning_gap'], weight: 0.9,
        textA: "Restocked when finished.",
        textB: "Planned minimum stock."
    },
    {
        qid: 'QS_EXPORT_PPL_04', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['cost_per_kg_blind'], weight: 1.0,
        textA: "In monthly totals.",
        textB: "Per shipment."
    },

    // --- P5: Logistics, Cold Chain & Incoterms → Leadership ---
    {
        qid: 'QS_EXPORT_LEAD_01', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['freight_rate_blindness'], weight: 1.1,
        textA: "After product is ready.",
        textB: "Planned in advance."
    },
    {
        qid: 'QS_EXPORT_LEAD_02', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['cold_chain_break'], weight: 1.2,
        textA: "\"We try our best.\"",
        textB: "Logged with set-points."
    },
    {
        qid: 'QS_EXPORT_LEAD_03', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['contract_loophole'], weight: 1.0,
        textA: "Buyers prefer them.",
        textB: "You can execute them."
    },
    {
        qid: 'QS_EXPORT_LEAD_04', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['reactive_planning'], weight: 1.0,
        textA: "You improvise.",
        textB: "You have route playbooks."
    },

    // --- P6: Customs, Documentation & SPS → Risk ---
    {
        qid: 'QS_EXPORT_RISK_01', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.2,
        textA: "Rebuilt each shipment.",
        textB: "Template-driven with checks."
    },
    {
        qid: 'QS_EXPORT_RISK_02', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['compliance_fatigue'], weight: 1.1,
        textA: "Checked when shipping.",
        textB: "Tracked per market/product."
    },
    {
        qid: 'QS_EXPORT_RISK_03', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['cert_deficiency'], weight: 1.0,
        textA: "When product is packed.",
        textB: "Ahead of time."
    },
    {
        qid: 'QS_EXPORT_RISK_04', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['regulatory_blindspot'], weight: 1.0,
        textA: "Varies by broker.",
        textB: "Standardized."
    },

    // --- P7: Finance, Cashflow, FX & Trade Terms → Money ---
    {
        qid: 'QS_EXPORT_MON_01', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['margin_mirage'], weight: 1.2,
        textA: "Monthly totals.",
        textB: "Shipment netback."
    },
    {
        qid: 'QS_EXPORT_MON_02', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['fx_burn'], weight: 1.1,
        textA: "Hoping rates hold.",
        textB: "Pricing buffers/rules."
    },
    {
        qid: 'QS_EXPORT_MON_03', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['payment_term_mismatch'], weight: 1.0,
        textA: "Negotiated per deal.",
        textB: "Tiered by risk."
    },
    {
        qid: 'QS_EXPORT_MON_04', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.1,
        textA: "Experience and speed.",
        textB: "A checklist proofing step."
    },

    // ===================== DEEP SCAN (20 per pillar = 140) =====================

    // --- P1: Market Access & Buyer Contracts → Market (20) ---
    {
        qid: 'DS_EXPORT_MKT_01', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['compliance_fatigue'], weight: 1.0,
        textA: "Relationship/referral confidence.", textB: "Compliance + payment-risk checks."
    },
    {
        qid: 'DS_EXPORT_MKT_02', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['margin_mirage'], weight: 1.1,
        textA: "Delivery completed without drama.", textB: "Net margin hit."
    },
    {
        qid: 'DS_EXPORT_MKT_03', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['contract_term_weakness'], weight: 1.0,
        textA: "Chats + email threads.", textB: "Signed docs + shared folder."
    },
    {
        qid: 'DS_EXPORT_MKT_04', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['price_shock_exposure'], weight: 1.0,
        textA: "Via negotiation feel.", textB: "Via rules."
    },
    {
        qid: 'DS_EXPORT_MKT_05', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['margin_mirage'], weight: 0.9,
        textA: "When you must.", textB: "With cost drivers."
    },
    {
        qid: 'DS_EXPORT_MKT_06', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['buyer_power_trap'], weight: 1.0,
        textA: "Case-by-case exceptions.", textB: "Tiered service levels."
    },
    {
        qid: 'DS_EXPORT_MKT_07', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['single_market_risk'], weight: 1.0,
        textA: "More buyers, more flexibility.", textB: "Fewer buyers, higher control."
    },
    {
        qid: 'DS_EXPORT_MKT_08', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['claims_leakage'], weight: 1.1,
        textA: "Whoever is available.", textB: "A single owner + checklist."
    },
    {
        qid: 'DS_EXPORT_MKT_09', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['margin_mirage'], weight: 1.1,
        textA: "Revenue by buyer.", textB: "Margin by route."
    },
    {
        qid: 'DS_EXPORT_MKT_10', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['spec_mismatch'], weight: 1.0,
        textA: "General \"quality acceptable.\"", textB: "Inspection point + method."
    },
    {
        qid: 'DS_EXPORT_MKT_11', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['contract_loophole'], weight: 1.0,
        textA: "Match what buyers request.", textB: "Control risk."
    },
    {
        qid: 'DS_EXPORT_MKT_12', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['rejection_shock'], weight: 1.1,
        textA: "Quick replacement next time.", textB: "Root-cause + CAPA."
    },
    {
        qid: 'DS_EXPORT_MKT_13', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['market_intel_gap'], weight: 1.0,
        textA: "Best price rumor.", textB: "Netback margin."
    },
    {
        qid: 'DS_EXPORT_MKT_14', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['capacity_planning_gap'], weight: 1.0,
        textA: "\"We'll figure it out.\"", textB: "Capacity rules."
    },
    {
        qid: 'DS_EXPORT_MKT_15', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['spec_mismatch'], weight: 1.0,
        textA: "After shipment if needed.", textB: "Immediately."
    },
    {
        qid: 'DS_EXPORT_MKT_16', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['relationship_transactional'], weight: 1.0,
        textA: "Volume growth.", textB: "Repeat + margin + claims."
    },
    {
        qid: 'DS_EXPORT_MKT_17', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['payment_term_mismatch'], weight: 1.0,
        textA: "Whatever closes the deal.", textB: "Structured ladder."
    },
    {
        qid: 'DS_EXPORT_MKT_18', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['claims_leakage'], weight: 1.0,
        textA: "Relationship leverage.", textB: "Evidence."
    },
    {
        qid: 'DS_EXPORT_MKT_19', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['contract_term_weakness'], weight: 0.9,
        textA: "Experience/tribal knowledge.", textB: "Training + templates."
    },
    {
        qid: 'DS_EXPORT_MKT_20', industry: 'export_produce', pillar: 'Market', line_type: LT, signal_tags: ['price_shock_exposure'], weight: 1.0,
        textA: "Aggressive pricing.", textB: "Predictable quality delivery."
    },

    // --- P2: Supply & Procurement Network → Operations (20) ---
    {
        qid: 'DS_EXPORT_OPS_01', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['contract_exposure'], weight: 1.0,
        textA: "Verbal/relational.", textB: "Written."
    },
    {
        qid: 'DS_EXPORT_OPS_02', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['reactive_planning'], weight: 1.1,
        textA: "Intuition.", textB: "Week."
    },
    {
        qid: 'DS_EXPORT_OPS_03', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['supplier_side_selling'], weight: 1.2,
        textA: "Trust + spot checks.", textB: "Testing/inspection."
    },
    {
        qid: 'DS_EXPORT_OPS_04', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['capacity_planning_gap'], weight: 1.0,
        textA: "\"First come.\"", textB: "Allocation rules."
    },
    {
        qid: 'DS_EXPORT_OPS_05', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['supplier_side_selling'], weight: 1.0,
        textA: "Occasional calls.", textB: "Structured visits."
    },
    {
        qid: 'DS_EXPORT_OPS_06', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['input_quality_var'], weight: 1.0,
        textA: "Only when asked.", textB: "Systematically."
    },
    {
        qid: 'DS_EXPORT_OPS_07', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['shrink_tax'], weight: 1.1,
        textA: "Generally.", textB: "By supplier."
    },
    {
        qid: 'DS_EXPORT_OPS_08', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['supplier_payment_pressure'], weight: 1.0,
        textA: "Volume.", textB: "Compliance reliability."
    },
    {
        qid: 'DS_EXPORT_OPS_09', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['single_market_risk'], weight: 0.9,
        textA: "Convenience.", textB: "Geography."
    },
    {
        qid: 'DS_EXPORT_OPS_10', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['procurement_panic'], weight: 1.1,
        textA: "Panic buying.", textB: "Pre-booking."
    },
    {
        qid: 'DS_EXPORT_OPS_11', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['quality_trust_gap'], weight: 1.0,
        textA: "Negotiation.", textB: "Grade evidence."
    },
    {
        qid: 'DS_EXPORT_OPS_12', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['input_quality_var'], weight: 1.0,
        textA: "Not clearly.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_OPS_13', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['reactive_planning'], weight: 1.0,
        textA: "In phone contacts only.", textB: "Active."
    },
    {
        qid: 'DS_EXPORT_OPS_14', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['contract_exposure'], weight: 1.0,
        textA: "Forgiveness.", textB: "Penalties/rules."
    },
    {
        qid: 'DS_EXPORT_OPS_15', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['traceability_gap'], weight: 1.0,
        textA: "Only verbally.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_OPS_16', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['supplier_side_selling'], weight: 1.0,
        textA: "Rarely.", textB: "Always."
    },
    {
        qid: 'DS_EXPORT_OPS_17', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['margin_mirage'], weight: 1.0,
        textA: "Bargaining skills.", textB: "Planned prices."
    },
    {
        qid: 'DS_EXPORT_OPS_18', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['quality_trust_gap'], weight: 1.1,
        textA: "Only if extreme.", textB: "Confidently."
    },
    {
        qid: 'DS_EXPORT_OPS_19', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['input_quality_var'], weight: 1.0,
        textA: "\"Farmers know.\"", textB: "Records."
    },
    {
        qid: 'DS_EXPORT_OPS_20', industry: 'export_produce', pillar: 'Operations', line_type: LT, signal_tags: ['supplier_side_selling'], weight: 1.1,
        textA: "Threats.", textB: "Speed + fairness."
    },

    // --- P3: Quality, Food Safety & Certification → Innovation (20) ---
    {
        qid: 'DS_EXPORT_INN_01', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['quality_trust_gap'], weight: 1.0,
        textA: "In supervisors' heads.", textB: "Written with photos."
    },
    {
        qid: 'DS_EXPORT_INN_02', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['spec_mismatch'], weight: 1.0,
        textA: "Rarely.", textB: "Weekly."
    },
    {
        qid: 'DS_EXPORT_INN_03', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['shrink_tax'], weight: 1.1,
        textA: "Occasionally.", textB: "Daily."
    },
    {
        qid: 'DS_EXPORT_INN_04', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['contamination_liability'], weight: 1.0,
        textA: "Mixed.", textB: "Enforced."
    },
    {
        qid: 'DS_EXPORT_INN_05', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['contamination_liability'], weight: 1.0,
        textA: "Assumed.", textB: "Measured."
    },
    {
        qid: 'DS_EXPORT_INN_06', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['handling_damage_culture'], weight: 1.0,
        textA: "\"Be careful.\"", textB: "Flow redesign."
    },
    {
        qid: 'DS_EXPORT_INN_07', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['cold_chain_break'], weight: 1.1,
        textA: "Checked sometimes.", textB: "Logged."
    },
    {
        qid: 'DS_EXPORT_INN_08', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['input_quality_var'], weight: 1.0,
        textA: "Not visible.", textB: "Documented."
    },
    {
        qid: 'DS_EXPORT_INN_09', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['supplier_side_selling'], weight: 1.0,
        textA: "General.", textB: "Specific."
    },
    {
        qid: 'DS_EXPORT_INN_10', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['quality_trust_gap'], weight: 1.1,
        textA: "Blended quietly.", textB: "Quarantined."
    },
    {
        qid: 'DS_EXPORT_INN_11', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['rejection_shock'], weight: 1.0,
        textA: "Verbally.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_INN_12', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['cert_deficiency'], weight: 1.0,
        textA: "Only before big orders.", textB: "Weekly."
    },
    {
        qid: 'DS_EXPORT_INN_13', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['rejection_shock'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_INN_14', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['shrink_tax'], weight: 1.0,
        textA: "Faster dispatch only.", textB: "Process controls."
    },
    {
        qid: 'DS_EXPORT_INN_15', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['arrival_quality_unknown'], weight: 1.0,
        textA: "Never.", textB: "Periodic."
    },
    {
        qid: 'DS_EXPORT_INN_16', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['packaging_waste_bleed'], weight: 1.0,
        textA: "Supplier promises.", textB: "Tests."
    },
    {
        qid: 'DS_EXPORT_INN_17', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['cert_deficiency'], weight: 1.1,
        textA: "Rush prep.", textB: "Always-ready system."
    },
    {
        qid: 'DS_EXPORT_INN_18', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['contamination_liability'], weight: 1.0,
        textA: "Visual checks.", textB: "Preventive controls."
    },
    {
        qid: 'DS_EXPORT_INN_19', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['handling_damage_culture'], weight: 1.0,
        textA: "Shadowing.", textB: "SOP onboarding."
    },
    {
        qid: 'DS_EXPORT_INN_20', industry: 'export_produce', pillar: 'Innovation', line_type: LT, signal_tags: ['claims_leakage'], weight: 1.1,
        textA: "Roughly.", textB: "Clearly."
    },

    // --- P4: Packaging, Labeling & Value Add → People (20) ---
    {
        qid: 'DS_EXPORT_PPL_01', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['packaging_waste_bleed'], weight: 1.0,
        textA: "\"Transport issue.\"", textB: "Root cause."
    },
    {
        qid: 'DS_EXPORT_PPL_02', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['packaging_waste_bleed'], weight: 0.9,
        textA: "Many suppliers.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_PPL_03', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['spec_mismatch'], weight: 1.0,
        textA: "Flexible.", textB: "Controlled."
    },
    {
        qid: 'DS_EXPORT_PPL_04', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['loading_error'], weight: 0.9,
        textA: "Never.", textB: "Sometimes."
    },
    {
        qid: 'DS_EXPORT_PPL_05', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['cold_chain_break'], weight: 1.0,
        textA: "Accidentally.", textB: "Intentionally."
    },
    {
        qid: 'DS_EXPORT_PPL_06', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['arrival_quality_unknown'], weight: 1.0,
        textA: "Ignored.", textB: "Planned."
    },
    {
        qid: 'DS_EXPORT_PPL_07', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['packaging_waste_bleed'], weight: 1.0,
        textA: "Not tracked.", textB: "Logged."
    },
    {
        qid: 'DS_EXPORT_PPL_08', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['spec_mismatch'], weight: 1.1,
        textA: "Trust.", textB: "Two-step verification."
    },
    {
        qid: 'DS_EXPORT_PPL_09', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['packhouse_bottleneck'], weight: 1.0,
        textA: "Ad hoc.", textB: "SOP."
    },
    {
        qid: 'DS_EXPORT_PPL_10', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['value_add_miss'], weight: 1.0,
        textA: "Assumed.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_PPL_11', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['internal_theft'], weight: 0.9,
        textA: "Not strict.", textB: "Counts."
    },
    {
        qid: 'DS_EXPORT_PPL_12', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['spec_mismatch'], weight: 1.0,
        textA: "Rarely.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_PPL_13', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['spec_mismatch'], weight: 0.9,
        textA: "Random files.", textB: "Controlled."
    },
    {
        qid: 'DS_EXPORT_PPL_14', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['capacity_planning_gap'], weight: 1.0,
        textA: "Phone calls.", textB: "Reorder points."
    },
    {
        qid: 'DS_EXPORT_PPL_15', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['traceability_gap'], weight: 1.0,
        textA: "Sometimes.", textB: "Always."
    },
    {
        qid: 'DS_EXPORT_PPL_16', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['packaging_waste_bleed'], weight: 1.0,
        textA: "Full switch.", textB: "Pilots."
    },
    {
        qid: 'DS_EXPORT_PPL_17', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['contamination_liability'], weight: 1.0,
        textA: "None.", textB: "Controls."
    },
    {
        qid: 'DS_EXPORT_PPL_18', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['capacity_planning_gap'], weight: 1.0,
        textA: "Rush-based.", textB: "Capacity-based."
    },
    {
        qid: 'DS_EXPORT_PPL_19', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['capacity_planning_gap'], weight: 1.0,
        textA: "Last-minute.", textB: "Weekly."
    },
    {
        qid: 'DS_EXPORT_PPL_20', industry: 'export_produce', pillar: 'People', line_type: LT, signal_tags: ['handling_damage_culture'], weight: 1.0,
        textA: "Speed-first.", textB: "Balanced."
    },

    // --- P5: Logistics, Cold Chain & Incoterms → Leadership (20) ---
    {
        qid: 'DS_EXPORT_LEAD_01', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['logistics_black_hole'], weight: 1.0,
        textA: "Judged by feelings.", textB: "Scored monthly."
    },
    {
        qid: 'DS_EXPORT_LEAD_02', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['single_logistic_partner'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_LEAD_03', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['reactive_planning'], weight: 1.0,
        textA: "Sometimes.", textB: "Always."
    },
    {
        qid: 'DS_EXPORT_LEAD_04', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['cold_chain_break'], weight: 1.1,
        textA: "Optional.", textB: "SOP."
    },
    {
        qid: 'DS_EXPORT_LEAD_05', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['cold_chain_break'], weight: 1.0,
        textA: "Verbally confirmed.", textB: "Documented."
    },
    {
        qid: 'DS_EXPORT_LEAD_06', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['traceability_gap'], weight: 1.0,
        textA: "Sometimes.", textB: "Always."
    },
    {
        qid: 'DS_EXPORT_LEAD_07', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['loading_error'], weight: 1.0,
        textA: "\"Fit as much.\"", textB: "Standard templates."
    },
    {
        qid: 'DS_EXPORT_LEAD_08', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['arrival_quality_unknown'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_LEAD_09', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['hidden_logistics_costs'], weight: 1.0,
        textA: "Generally.", textB: "Per route."
    },
    {
        qid: 'DS_EXPORT_LEAD_10', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['hidden_logistics_costs'], weight: 1.0,
        textA: "After charges.", textB: "Proactively."
    },
    {
        qid: 'DS_EXPORT_LEAD_11', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['cargo_insurance_gap'], weight: 1.0,
        textA: "Inconsistent.", textB: "Aligned to Incoterms."
    },
    {
        qid: 'DS_EXPORT_LEAD_12', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['reactive_planning'], weight: 1.0,
        textA: "Not tracked.", textB: "Weekly."
    },
    {
        qid: 'DS_EXPORT_LEAD_13', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "Loosely.", textB: "Strictly."
    },
    {
        qid: 'DS_EXPORT_LEAD_14', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['arrival_quality_unknown'], weight: 1.0,
        textA: "Unknown.", textB: "Tracked."
    },
    {
        qid: 'DS_EXPORT_LEAD_15', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['reactive_planning'], weight: 1.0,
        textA: "Surprised.", textB: "Planned."
    },
    {
        qid: 'DS_EXPORT_LEAD_16', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['hidden_logistics_costs'], weight: 1.0,
        textA: "Accept and pay.", textB: "Line-by-line."
    },
    {
        qid: 'DS_EXPORT_LEAD_17', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['handling_damage_culture'], weight: 0.9,
        textA: "Occasional.", textB: "Consistent."
    },
    {
        qid: 'DS_EXPORT_LEAD_18', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['logistics_black_hole'], weight: 1.0,
        textA: "Calls only.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_LEAD_19', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['contract_term_weakness'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_LEAD_20', industry: 'export_produce', pillar: 'Leadership', line_type: LT, signal_tags: ['cold_chain_break'], weight: 1.1,
        textA: "Cost burden.", textB: "Profit protection."
    },

    // --- P6: Customs, Documentation & SPS → Risk (20) ---
    {
        qid: 'DS_EXPORT_RISK_01', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['regulatory_blindspot'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_RISK_02', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['cert_deficiency'], weight: 1.0,
        textA: "Sometimes.", textB: "Always."
    },
    {
        qid: 'DS_EXPORT_RISK_03', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.1,
        textA: "Shared loosely.", textB: "One accountable role."
    },
    {
        qid: 'DS_EXPORT_RISK_04', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "Copied from emails.", textB: "Against buyer record."
    },
    {
        qid: 'DS_EXPORT_RISK_05', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "After printing.", textB: "Before final."
    },
    {
        qid: 'DS_EXPORT_RISK_06', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['cert_deficiency'], weight: 1.0,
        textA: "Not tracked.", textB: "Tracked."
    },
    {
        qid: 'DS_EXPORT_RISK_07', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['cert_deficiency'], weight: 1.0,
        textA: "Urgent requests.", textB: "Schedule."
    },
    {
        qid: 'DS_EXPORT_RISK_08', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['compliance_fatigue'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_RISK_09', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['skill_gap_admin'], weight: 1.0,
        textA: "Minimal.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_RISK_10', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "Experience.", textB: "Checklist."
    },
    {
        qid: 'DS_EXPORT_RISK_11', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "Scattered chats.", textB: "Per shipment folder."
    },
    {
        qid: 'DS_EXPORT_RISK_12', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['rejection_shock'], weight: 1.0,
        textA: "Unknown.", textB: "Categorized."
    },
    {
        qid: 'DS_EXPORT_RISK_13', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['rejection_shock'], weight: 1.0,
        textA: "Rarely.", textB: "Per market."
    },
    {
        qid: 'DS_EXPORT_RISK_14', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['regulatory_blindspot'], weight: 1.1,
        textA: "Surprised.", textB: "Monitored."
    },
    {
        qid: 'DS_EXPORT_RISK_15', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['cert_deficiency'], weight: 1.0,
        textA: "Person-dependent.", textB: "SOP."
    },
    {
        qid: 'DS_EXPORT_RISK_16', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.1,
        textA: "Sometimes.", textB: "Always."
    },
    {
        qid: 'DS_EXPORT_RISK_17', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "Retyped each time.", textB: "Controlled master data."
    },
    {
        qid: 'DS_EXPORT_RISK_18', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['regulatory_blindspot'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_RISK_19', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "Memory.", textB: "Timeline sheet."
    },
    {
        qid: 'DS_EXPORT_RISK_20', industry: 'export_produce', pillar: 'Risk', line_type: LT, signal_tags: ['compliance_fatigue'], weight: 1.1,
        textA: "Nuisance cost.", textB: "Market access asset."
    },

    // --- P7: Finance, Cashflow, FX & Trade Terms → Money (20) ---
    {
        qid: 'DS_EXPORT_MON_01', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['profit_concentration_risk'], weight: 1.0,
        textA: "Not sure.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_02', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['hidden_logistics_costs'], weight: 1.0,
        textA: "After the fact.", textB: "Always."
    },
    {
        qid: 'DS_EXPORT_MON_03', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['margin_mirage'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_04', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['cost_per_kg_blind'], weight: 1.1,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_05', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['cash_gap_trap'], weight: 1.0,
        textA: "Delayed.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_06', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "After.", textB: "Before invoicing."
    },
    {
        qid: 'DS_EXPORT_MON_07', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['cash_gap_trap'], weight: 1.1,
        textA: "Reminders only.", textB: "Escalation ladder."
    },
    {
        qid: 'DS_EXPORT_MON_08', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['cash_gap_trap'], weight: 1.0,
        textA: "Emergency.", textB: "Planned."
    },
    {
        qid: 'DS_EXPORT_MON_09', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['cash_gap_trap'], weight: 1.0,
        textA: "Mixed.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_10', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['payment_term_mismatch'], weight: 1.0,
        textA: "Mostly trust.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_11', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['fx_burn'], weight: 1.0,
        textA: "Vague.", textB: "Explicit."
    },
    {
        qid: 'DS_EXPORT_MON_12', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['margin_mirage'], weight: 1.0,
        textA: "Flexible.", textB: "Strict."
    },
    {
        qid: 'DS_EXPORT_MON_13', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['claims_leakage'], weight: 1.0,
        textA: "Messy.", textB: "Categorized."
    },
    {
        qid: 'DS_EXPORT_MON_14', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['cost_per_kg_blind'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_15', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['overhead_bloat'], weight: 1.0,
        textA: "Not clearly.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_16', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['doc_delay_penalty'], weight: 1.0,
        textA: "Sometimes.", textB: "Always."
    },
    {
        qid: 'DS_EXPORT_MON_17', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['cash_gap_trap'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_18', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['payment_term_mismatch'], weight: 1.0,
        textA: "Buyer preference.", textB: "Risk and cost."
    },
    {
        qid: 'DS_EXPORT_MON_19', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['claims_leakage'], weight: 1.0,
        textA: "No.", textB: "Yes."
    },
    {
        qid: 'DS_EXPORT_MON_20', industry: 'export_produce', pillar: 'Money', line_type: LT, signal_tags: ['cash_gap_trap'], weight: 1.1,
        textA: "Accounting task.", textB: "Profit system."
    }
];
