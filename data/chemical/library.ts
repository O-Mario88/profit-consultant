import { LibraryItem } from '../../types/report';

export const CHEMICAL_LIBRARY: LibraryItem[] = [
    // 1. OPERATIONS
    {
        id: 'chem_leak_batch_drift',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'Operations',
        type: 'leak',
        severity_fit: ['Critical', 'Strong'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: ['operator_process_drift', 'rework_blender'],
        text: "Batch Consistency Drift",
        cost_text: "Costs 5-15% of margin in rework and dead stock.",
        kpi_text: "First-Pass Yield % (Target >98%)",
        cliffhanger_text: "Standardize 'Order of Addition' and lock recipes.",
        fix_task_ids: ['chem_7day_batch_record']
    },
    {
        id: 'chem_str_process_control',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'Operations',
        type: 'strength',
        severity_fit: ['Strong'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: [],
        text: "Process control is locked; 'First-Pass Yield' is the religion."
    },

    // 2. MONEY
    {
        id: 'chem_leak_yield_loss',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'Money',
        type: 'leak',
        severity_fit: ['Critical', 'Strong'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: ['hidden_yield_loss', 'yield_illusion'],
        text: "Hidden Yield Loss (The 'Evaporation' Tax)",
        cost_text: "Losing 2-4% of total volume in washouts, overfill, and spills.",
        kpi_text: "Mass Balance Variance % (Target <1%)",
        cliffhanger_text: "Reconcile Input Kg vs. Output Kg daily.",
        fix_task_ids: ['chem_7day_mass_balance']
    },
    {
        id: 'chem_str_cost_clarity',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'Money',
        type: 'strength',
        severity_fit: ['Strong'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: [],
        text: "True cost-per-kg is known, including compliance & waste."
    },

    // 3. MARKET
    {
        id: 'chem_leak_claims',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'Market',
        type: 'leak',
        severity_fit: ['Critical', 'Strong'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: ['claims_leakage', 'channel_trust_leak'],
        text: "Defenseless Against Claims",
        cost_text: "Forced credits and reputation damage due to lack of retained samples.",
        kpi_text: "Complaint Rate % (Target <0.5%)",
        cliffhanger_text: "Keep a 'Golden Sample' for every batch shipped.",
        fix_task_ids: ['chem_7day_retain_bank']
    },

    // 4. RISK
    {
        id: 'chem_leak_label_risk',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'Risk',
        type: 'leak',
        severity_fit: ['Emergency', 'Critical'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: ['label_risk_debt', 'compliance_fog'],
        text: "Labeling & Compliance Debt",
        cost_text: "Risk of stock seizure, fines, or market bans.",
        kpi_text: "Label Accuracy Audit Score (Target 100%)",
        cliffhanger_text: "Audit your top 5 sellers for GHS/Local compliance today.",
        fix_task_ids: ['chem_7day_label_audit']
    },

    // 5. INNOVATION
    {
        id: 'chem_leak_sku_complexity',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'Innovation',
        type: 'leak',
        severity_fit: ['Strong'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: ['sku_complexity_tax'],
        text: "SKU Complexity Trap",
        cost_text: "Changeovers and slow-movers eating production capacity.",
        kpi_text: "Revenue per SKU (Tail Analysis)",
        cliffhanger_text: "Kill the bottom 10% of volume to free up 20% capacity.",
        fix_task_ids: ['chem_30day_sku_rationalize']
    },

    // 6. PEOPLE
    {
        id: 'chem_leak_safety_culture',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'People',
        type: 'leak',
        severity_fit: ['Critical'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: ['safety_theater', 'hero_dependency_risk'],
        text: "Safety as 'Theater' vs. Culture",
        cost_text: "One incident can stop operations for weeks.",
        kpi_text: "Near-Miss Reporting Rate",
        cliffhanger_text: "Empower operators to 'Stop Work' without penalty.",
        fix_task_ids: ['chem_30day_safety_reset']
    }
];

export const CHEMICAL_MISSION_BRIEFS: LibraryItem[] = [
    {
        id: 'brief_chem_yield',
        industry: 'chemical',
        line_type: ['Chemical / Light Industrial'],
        pillar: 'Money',
        type: 'mission_brief',
        severity_fit: ['Critical'],
        business_size_fit: ['sme', 'enterprise'],
        signal_tags: ['hidden_yield_loss'],
        text: "Mission: Close the 'Evaporation' Gap",
        hook_text: "You are buying 1000kg and selling 950kg. Where is the rest?",
        kpi_text: "Mass Balance %"
    }
];
