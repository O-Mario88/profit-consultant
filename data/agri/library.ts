
import { LibraryItem } from '../../types';

export const library: LibraryItem[] = [
    // --- OPERATIONS (formerly Engine) ---
    {
        id: 'LIB_MACH_OPS_STR_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install', 'Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['dispatch_chaos', 'downtime_debt'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: "We deploy equipment on time because scheduling is centralized and visible. Every job has a job card (scope, time, fuel, operator, client sign-off).",
        type: 'strength'
    },
    {
        id: 'LIB_MACH_OPS_LEAK_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['dispatch_chaos', 'downtime_debt'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Jobs start late because scheduling is reactive and scattered. Machines idle while customers wait—classic Downtime Debt.",
        type: 'leak'
    },
    {
        id: 'LIB_MACH_OPS_HOOK_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Repair & Maintenance Services'],
        pillar: 'Operations',
        signal_tags: ['downtime_debt'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Downtime Debt",
        type: 'hook'
    },
    {
        id: 'LIB_MACH_OPS_KPI_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire'],
        pillar: 'Operations',
        signal_tags: ['dispatch_chaos'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "On-Time Start Rate (% jobs starting on schedule). Target > 85–95%.",
        type: 'kpi'
    },

    // --- MONEY (formerly Fuel) ---
    {
        id: 'LIB_MACH_MON_STR_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Money',
        signal_tags: ['margin_mirage'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: "We price using cost-based models (fuel, labor, depreciation, parts, margin). We track profitability per machine/service line, not just total revenue.",
        type: 'strength'
    },
    {
        id: 'LIB_MACH_MON_LEAK_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Money',
        signal_tags: ['margin_mirage', 'underpricing_trap'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Prices are guessed; you undercharge and compensate with 'working harder.' Profitability by machine is unknown—growth decisions are blind.",
        type: 'leak'
    },
    {
        id: 'LIB_MACH_MON_HOOK_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['margin_mirage'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Margin Mirage",
        type: 'hook'
    },
    {
        id: 'LIB_MACH_MON_KPI_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire'],
        pillar: 'Money',
        signal_tags: ['fuel_burn_leak'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "Fuel Cost per Job / per Acre. Routing and leakage indicator.",
        type: 'kpi'
    },

    // --- MARKET (formerly Voice) ---
    {
        id: 'LIB_MACH_MKT_STR_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Market',
        signal_tags: ['trust_collapse_moment'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: "Customers trust our timelines because we under-promise and over-deliver. We document results (before/after, acres, efficiency), increasing credibility.",
        type: 'strength'
    },
    {
        id: 'LIB_MACH_MKT_LEAK_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Market',
        signal_tags: ['trust_collapse_moment', 'seasonal_demand_miss'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Customers leave because reliability is inconsistent—one late job kills trust. You don’t pre-book seasonal work, so competitors fill the calendar first.",
        type: 'leak'
    },
    {
        id: 'LIB_MACH_MKT_HOOK_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['trust_collapse_moment'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Trust Collapse Moment",
        type: 'hook'
    },
    {
        id: 'LIB_MACH_MKT_KPI_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Market',
        signal_tags: ['quotation_to_cash_lag'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "Quote Turnaround Time (hours/days). Speed converts; target same day/24h.",
        type: 'kpi'
    },

    // --- LEADERSHIP (formerly Brain) ---
    {
        id: 'LIB_MACH_LEAD_STR_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['hero_owner_syndrome'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: "Roles are clear: sales, dispatch, field ops, workshop, finance. The business doesn’t collapse when the owner is away.",
        type: 'strength'
    },
    {
        id: 'LIB_MACH_LEAD_LEAK_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['management_by_whatsapp', 'hero_owner_syndrome'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Operations are run via WhatsApp chaos, not dashboards. The owner becomes the bottleneck for every decision.",
        type: 'leak'
    },
    {
        id: 'LIB_MACH_LEAD_HOOK_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['management_by_whatsapp'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Management-by-WhatsApp",
        type: 'hook'
    },
    {
        id: 'LIB_MACH_LEAD_KPI_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['kpi_cadence_gap'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "Weekly KPI Review Compliance (% weeks reviewed). Target 100%.",
        type: 'kpi'
    },

    // --- INNOVATION (formerly Pulse) ---
    {
        id: 'LIB_MACH_INN_STR_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Innovation',
        signal_tags: ['bundle_blindspot'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: "We bundle services into solutions (e.g., plough + planting + spraying scheduling). We offer preventive maintenance contracts to stabilize revenue.",
        type: 'strength'
    },
    {
        id: 'LIB_MACH_INN_LEAK_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Irrigation Supply & Install'],
        pillar: 'Innovation',
        signal_tags: ['offer_stagnation', 'bundle_blindspot'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "You sell services like commodities instead of premium packages. No maintenance contracts means unstable income and constant chasing.",
        type: 'leak'
    },
    {
        id: 'LIB_MACH_INN_HOOK_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['offer_stagnation'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Offer Stagnation",
        type: 'hook'
    },
    {
        id: 'LIB_MACH_INN_KPI_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['bundle_blindspot'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "Bundle Attach Rate (% jobs sold with add-on service). Target > 20%.",
        type: 'kpi'
    },

    // --- RISK (formerly Shield) ---
    {
        id: 'LIB_MACH_RISK_STR_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['contract_exposure'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: "Every job has written terms: scope, payment, liability, warranty, timeline. We don’t start work without deposits and signed agreements.",
        type: 'strength'
    },
    {
        id: 'LIB_MACH_RISK_LEAK_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['contract_exposure', 'liability_landmine'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Verbal agreements cause disputes, unpaid invoices, and blame games. Liability is unclear: crop damage, equipment damage, accidents.",
        type: 'leak'
    },
    {
        id: 'LIB_MACH_RISK_HOOK_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['liability_landmine'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Liability Landmine",
        type: 'hook'
    },
    {
        id: 'LIB_MACH_RISK_KPI_01',
        industry: 'agri_input',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['contract_exposure'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "Contract Coverage (% jobs with signed terms). Target > 90%.",
        type: 'kpi'
    },

    // --- PEOPLE (formerly Tribe) ---
    {
        id: 'LIB_MACH_PPL_STR_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Repair & Maintenance Services'],
        pillar: 'People',
        signal_tags: ['operator_drift'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: "Operators are trained and tested; machine abuse is reduced. Incentives reward reliability and job quality, not shortcuts.",
        type: 'strength'
    },
    {
        id: 'LIB_MACH_PPL_LEAK_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Repair & Maintenance Services'],
        pillar: 'People',
        signal_tags: ['operator_drift', 'accountability_fog'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Operator skills vary widely; machines are abused and break early. No accountability means lateness and poor quality become normal.",
        type: 'leak'
    },
    {
        id: 'LIB_MACH_PPL_HOOK_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Repair & Maintenance Services'],
        pillar: 'People',
        signal_tags: ['operator_drift'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Operator Drift",
        type: 'hook'
    },
    {
        id: 'LIB_MACH_PPL_KPI_01',
        industry: 'agri_input',
        line_type: ['Mechanization Hire', 'Repair & Maintenance Services'],
        pillar: 'People',
        signal_tags: ['accountability_fog'],
        severity_fit: ['all' as any],
        business_size_fit: ['all' as any],
        text: "Operator Error Rate (avoidable faults per month). Trend down.",
        type: 'kpi'
    },

    // --- MISSION BRIEFS ---
    {
        id: 'MB_MACH_HIRE_OPS',
        industry: 'agri_input',
        line_type: ['Mechanization Hire'],
        pillar: 'Operations',
        signal_tags: ['dispatch_chaos', 'downtime_debt'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Mechanization businesses win or die by deployment reliability. When Operations signals show scheduling drift and reactive maintenance, you accumulate Downtime Debt—machines idle while demand is hot. That leak doesn’t show up as a single expense; it shows up as missed jobs and lost referrals. Cliffhanger: Fix Mode locks a dispatch board, job cards, and a preventive maintenance rhythm that holds during peak season.",
        type: 'mission_brief'
    },
    {
        id: 'MB_MACH_HIRE_MONEY',
        industry: 'agri_input',
        line_type: ['Mechanization Hire'],
        pillar: 'Money',
        signal_tags: ['margin_mirage', 'deposit_discipline_gap'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "If Money signals show underpricing and weak deposit discipline, you’re funding customer work while your margin evaporates through fuel and repairs—classic Fuel Burn Leak + Deposit Discipline Gap. Cliffhanger: Fix Mode installs cost-based pricing, deposit rules, and same-day invoicing after sign-off.",
        type: 'mission_brief'
    },
    {
        id: 'MB_MACH_HIRE_MKT',
        industry: 'agri_input',
        line_type: ['Mechanization Hire'],
        pillar: 'Market',
        signal_tags: ['trust_collapse_moment', 'seasonal_demand_miss'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Mechanization buyers choose speed and reliability. If Market signals show slow quoting and weak pre-booking, you lose demand to whoever answers first—your Seasonal Demand Miss becomes permanent reputation damage. Cliffhanger: Fix Mode launches pre-booking and fast-quote routines tied to crop cycles.",
        type: 'mission_brief'
    },
    {
        id: 'MB_IRRIGATION_OPS',
        industry: 'agri_input',
        line_type: ['Irrigation Supply & Install'],
        pillar: 'Operations',
        signal_tags: ['dispatch_chaos'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Irrigation profits depend on consistent installation quality and fast problem resolution. If Operations signals show technician-dependent quality and weak handovers, you get rework, call-backs, and slow completions—your Dispatch Chaos becomes a cost leak. Cliffhanger: Fix Mode standardizes installation checklists and job card sign-offs.",
        type: 'mission_brief'
    },
    {
        id: 'MB_SALES_OPS',
        industry: 'agri_input',
        line_type: ['Equipment Sales & Spares'],
        pillar: 'Operations',
        signal_tags: ['spare_parts_blackhole'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['all' as any],
        text: "Sales depend on stock availability and delivery coordination. If Operations signals show spare parts gaps, you lose urgent buyers. Cliffhanger: Fix Mode builds reorder points and stock accuracy routines.",
        type: 'mission_brief'
    }
];
