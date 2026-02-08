
import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [
    // --- 7-DAY ACTIONS (Stabilize Profit) ---
    {
        action_id: 'ACT_MACH_OPS_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install', 'Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['dispatch_chaos', 'downtime_debt'],
        title: 'Start Dispatch Board',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Ops Lead',
            sme: 'Ops Manager',
            enterprise: 'Dispatch Lead'
        },
        kpi_links: ['start_rate'],
        proof_required: ['photo_of_board', '7_day_log'],
        impact_score: 8
    },
    {
        action_id: 'ACT_MACH_MON_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Money',
        signal_tags: ['deposit_discipline_gap', 'underpricing_trap'],
        title: 'Enforce Deposit Rule',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Sales/Finance',
            sme: 'Finance Manager',
            enterprise: 'Finance Controller'
        },
        kpi_links: ['deposit_compliance'],
        proof_required: ['policy_doc', '10_invoices_audit'],
        impact_score: 9
    },
    {
        action_id: 'ACT_MACH_MON_02',
        industry: 'agri_input',
        line_type: ['Mechanization Hire'],
        pillar: 'Money',
        signal_tags: ['fuel_burn_leak'],
        title: 'Fuel Log + Route Note',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Field Supervisor',
            sme: 'Fleet Manager',
            enterprise: 'Fleet Manager'
        },
        kpi_links: ['fuel_cost_per_job'],
        proof_required: ['fuel_log_photos'],
        impact_score: 7
    },
    {
        action_id: 'ACT_MACH_OPS_02',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['job_card_blindness'],
        title: 'Job Card for Every Job',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Ops Lead',
            sme: 'Ops Manager',
            enterprise: 'Service Manager'
        },
        kpi_links: ['job_card_completion'],
        proof_required: ['10_completed_cards'],
        impact_score: 8
    },
    {
        action_id: 'ACT_MACH_OPS_03',
        industry: 'agri_input',
        line_type: ['Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['breakdown_tax', 'reactive_maintenance'],
        title: 'List Top 5 Failure Causes',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Workshop Lead',
            sme: 'Workshop Manager',
            enterprise: 'Technical Director'
        },
        kpi_links: ['repeat_breakdown_rate'],
        proof_required: ['failure_list', 'countermeasures'],
        impact_score: 6
    },
    {
        action_id: 'ACT_MACH_MKT_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Market',
        signal_tags: ['quotation_to_cash_lag', 'trust_collapse_moment'],
        title: 'Quote Turnaround Sprint',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Sales Lead',
            sme: 'Sales Manager',
            enterprise: 'Sales Director'
        },
        kpi_links: ['quote_turnaround_time'],
        proof_required: ['quote_timestamps'],
        impact_score: 7
    },
    {
        action_id: 'ACT_MACH_OPS_04',
        industry: 'agri_input',
        line_type: ['Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['spare_parts_blackhole'],
        title: 'Parts "Emergency Kit" for Peak',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Workshop Lead',
            sme: 'Parts Manager',
            enterprise: 'Procurement Lead'
        },
        kpi_links: ['downtime_hours'],
        proof_required: ['kit_inventory_photo'],
        impact_score: 8
    },
    {
        action_id: 'ACT_MACH_MKT_02',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Market',
        signal_tags: ['trust_leak'],
        title: 'Capture Customer Proof',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Field Team',
            sme: 'Marketing Lead',
            enterprise: 'Marketing Manager'
        },
        kpi_links: ['referral_rate'],
        proof_required: ['5_before_after_photos', '3_testimonials'],
        impact_score: 6
    },
    {
        action_id: 'ACT_MACH_MKT_03',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['complaint_handling_gap'],
        title: 'Complaint Closure Log',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Manager',
            sme: 'Customer Service Lead',
            enterprise: 'CX Manager'
        },
        kpi_links: ['complaint_repeat_rate'],
        proof_required: ['log_sheet', 'closures'],
        impact_score: 7
    },
    {
        action_id: 'ACT_MACH_PPL_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire'],
        pillar: 'People',
        signal_tags: ['operator_drift'],
        title: 'Operator Daily Checklist',
        days: 7,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Field Supervisor',
            sme: 'Field Manager',
            enterprise: 'Ops Director'
        },
        kpi_links: ['operator_error_rate'],
        proof_required: ['checklist_doc', 'signatures'],
        impact_score: 8
    },

    // --- 30-DAY ACTIONS (Build Control) ---
    {
        action_id: 'ACT_MACH_OPS_30_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['reactive_maintenance', 'breakdown_tax'],
        title: 'Build PM Calendar',
        days: 30,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Workshop Lead',
            sme: 'Maintenance Manager',
            enterprise: 'Engineering Lead'
        },
        kpi_links: ['pm_compliance', 'mtbf'],
        proof_required: ['calendar_doc', 'checklists'],
        impact_score: 9
    },
    {
        action_id: 'ACT_MACH_MON_30_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['costing_gap', 'underpricing_trap'],
        title: 'Cost-Based Pricing Sheet',
        days: 30,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Finance',
            sme: 'Finance Manager',
            enterprise: 'CFO'
        },
        kpi_links: ['gross_margin_per_service'],
        proof_required: ['pricing_model', 'updated_price_list'],
        impact_score: 9
    },
    {
        action_id: 'ACT_MACH_OPS_30_02',
        industry: 'agri_input',
        line_type: ['Mechanization Hire'],
        pillar: 'Operations',
        signal_tags: ['downtime_debt'],
        title: 'Utilization Dashboard',
        days: 30,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Ops',
            sme: 'Ops Manager',
            enterprise: 'COO'
        },
        kpi_links: ['utilization_rate'],
        proof_required: ['dashboard_screenshot'],
        impact_score: 8
    },
    {
        action_id: 'ACT_MACH_MKT_30_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Market',
        signal_tags: ['seasonal_demand_miss'],
        title: 'Pre-Booking Program',
        days: 30,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Sales',
            sme: 'Sales Manager',
            enterprise: 'Commercial Director'
        },
        kpi_links: ['pre_booking_rate'],
        proof_required: ['campaign_material', 'bookings_list'],
        impact_score: 8
    },
    {
        action_id: 'ACT_MACH_RISK_30_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['contract_exposure'],
        title: 'Standard Contracts',
        days: 30,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Manager',
            sme: 'Legal/Admin',
            enterprise: 'Legal Counsel'
        },
        kpi_links: ['contract_coverage'],
        proof_required: ['template_doc', '10_signed_samples'],
        impact_score: 9
    },
    {
        action_id: 'ACT_MACH_OPS_30_03',
        industry: 'agri_input',
        line_type: ['Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['spare_parts_blackhole'],
        title: 'Spare Parts Control',
        days: 30,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Workshop',
            sme: 'Procurement',
            enterprise: 'Supply Chain Lead'
        },
        kpi_links: ['downtime_hours'],
        proof_required: ['supplier_list', 'reorder_point_sheet'],
        impact_score: 8
    },
    {
        action_id: 'ACT_MACH_INN_30_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Innovation',
        signal_tags: ['bundle_blindspot'],
        title: 'Service Bundles',
        days: 30,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Sales',
            sme: 'Product Manager',
            enterprise: 'Marketing Director'
        },
        kpi_links: ['bundle_attach_rate'],
        proof_required: ['bundle_pricing', 'training_material'],
        impact_score: 8
    },
    {
        action_id: 'ACT_MACH_PPL_30_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Operator Training & Advisory'],
        pillar: 'People',
        signal_tags: ['operator_drift'],
        title: 'Operator Training & Certification',
        days: 30,
        effort: 'L',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Manager',
            sme: 'HR/Ops',
            enterprise: 'Training Manager'
        },
        kpi_links: ['skill_pass_rate'],
        proof_required: ['test_results', 'certificates'],
        impact_score: 9
    },
    {
        action_id: 'ACT_MACH_RISK_30_02',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['liability_landmine'],
        title: 'Incident & Damage Review',
        days: 30,
        effort: 'S',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Manager',
            sme: 'Safety Officer',
            enterprise: 'HSE Manager'
        },
        kpi_links: ['incident_rate'],
        proof_required: ['monthly_review_notes'],
        impact_score: 7
    },
    {
        action_id: 'ACT_MACH_MON_30_02',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['quotation_to_cash_lag'],
        title: 'Quote-to-Cash Workflow',
        days: 30,
        effort: 'M',
        default_owner_by_size: {
            solo: 'Owner',
            small_team: 'Finance',
            sme: 'Finance Manager',
            enterprise: 'CFO'
        },
        kpi_links: ['quote_to_cash_days'],
        proof_required: ['workflow_doc', 'time_trend_chart'],
        impact_score: 8
    }
];
