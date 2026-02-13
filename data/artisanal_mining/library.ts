
import { LibraryItem } from '../../types';

export const library: LibraryItem[] = [
    // PILLAR 1: Legality, Access & Social License -> Mapped to RISK
    {
        id: 'LIB_ASM_RISK_LEAK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Risk',
        signal_tags: ['permission_fog', 'boundary_chaos', 'social_license_debt'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Access is fragile: relationships replace written rights. A single dispute or "permission fog" can shut down production instantly.',
        type: 'leak',
        hook_text: 'Shutdown Risk Tax',
        cost_text: 'Silent bribes, conflict premiums, and sudden eviction risk that zero out your investment.',
        cliffhanger_text: 'Fix Mode builds a 1-page legality pack and a grievance log that secures your right to mine.',
        kpi_text: 'Permit coverage %, Grievance resolution time, Days lost to disputes'
    },
    {
        id: 'LIB_ASM_RISK_STR',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Risk',
        signal_tags: ['permission_fog'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'You operate with written clarity: boundaries are known, grievances are managed early, and "right-to-mine" is documented.',
        type: 'strength'
    },
    {
        id: 'LIB_ASM_RISK_HOOK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Risk',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Permission Fog',
        type: 'hook'
    },
    {
        id: 'LIB_ASM_RISK_KPI',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Risk',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Permit coverage %, Days lost to disputes, Grievances resolved, Compliance readiness score',
        type: 'kpi'
    },

    // PILLAR 2: Offer & Value Creation -> Mapped to INNOVATION
    {
        id: 'LIB_ASM_INNOV_LEAK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Innovation',
        signal_tags: ['grade_drift', 'mixed_lot_penalty', 'traceability_breakage'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Your offer is "mystery rock": vague grading and mixed lots create a Trust Discount. Buyers assume the worst and price accordingly.',
        type: 'leak',
        hook_text: 'Trust Discount',
        cost_text: 'Renegotiation after delivery, mixed-lot penalties, and being blocked from formal supply chains.',
        cliffhanger_text: 'Fix Mode installs batch IDs and a basic spec sheet so you sell defined value, not just raw material.',
        kpi_text: 'Batch acceptance rate, Grade variance, Traceability completeness'
    },
    {
        id: 'LIB_ASM_INNOV_STR',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Innovation',
        signal_tags: ['grade_drift'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'You sell confidence: consistent grading, clear batch IDs, and origin traceability allow you to command a compliance premium.',
        type: 'strength'
    },
    {
        id: 'LIB_ASM_INNOV_HOOK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Innovation',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Mixed-Lot Penalty',
        type: 'hook'
    },
    {
        id: 'LIB_ASM_INNOV_KPI',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Innovation',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Batch acceptance rate, Grade variance, Lot traceability %, Price premium vs baseline',
        type: 'kpi'
    },

    // PILLAR 3: Marketing & Demand -> Mapped to MARKET
    {
        id: 'LIB_ASM_MARKET_LEAK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Market',
        signal_tags: ['pipeline_hostage', 'market_access_wall', 'paperwork_stall'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'You are a Pipeline Hostage: relying on one buyer who sets the price. Documentation gaps stall access to better markets.',
        type: 'leak',
        hook_text: 'Pipeline Hostage',
        cost_text: 'Silent churn, "take it or leave it" pricing, and inability to access formal exporters.',
        cliffhanger_text: 'Fix Mode builds a buyer bench and a "Due Diligence Ready" pack to break the monopoly.',
        kpi_text: 'Inbound inquiries, Quote-to-meeting rate, Buyer concentration %'
    },
    {
        id: 'LIB_ASM_MARKET_STR',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Market',
        signal_tags: ['pipeline_hostage'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'You maintain a bench of buyers and share consistent "Available Stock" updates. Your documentation speeds up deals.',
        type: 'strength'
    },
    {
        id: 'LIB_ASM_MARKET_HOOK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Market',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Market Access Wall',
        type: 'hook'
    },
    {
        id: 'LIB_ASM_MARKET_KPI',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Market',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Inbound inquiries/week, Response time, Repeat buyer rate, Buyer concentration %',
        type: 'kpi'
    },

    // PILLAR 4: Sales, Pricing & Payments -> Mapped to LEADERSHIP (Commercial Governance)
    {
        id: 'LIB_ASM_LEAD_LEAK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Leadership',
        signal_tags: ['negotiation_bleed', 'credit_creep', 're_test_ambush'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Sales Governance is weak: Pricing is emotional, terms are "friendly," and disputes end in discounts. You are funding your buyers.',
        type: 'leak',
        hook_text: 'Negotiation Bleed',
        cost_text: 'Margin erosion, delayed payments (Credit Creep), and recurring "re-test ambushes" that slash value.',
        cliffhanger_text: 'Fix Mode installs a Pricing Ladder, standard Sales Notes, and deposit rules for control.',
        kpi_text: 'Discount frequency %, DSO (days sales outstanding), Dispute rate'
    },
    {
        id: 'LIB_ASM_LEAD_STR',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Leadership',
        signal_tags: ['negotiation_bleed'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'Commercial discipline is enforced: you stick to a pricing formula, demand deposits, and document every lot sale.',
        type: 'strength'
    },
    {
        id: 'LIB_ASM_LEAD_HOOK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Leadership',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Credit Creep',
        type: 'hook'
    },
    {
        id: 'LIB_ASM_LEAD_KPI',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Leadership',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Realized price vs target, Discount frequency, Cash received within terms %, Dispute value',
        type: 'kpi'
    },

    // PILLAR 5: Operations & Recovery -> Mapped to OPERATIONS
    {
        id: 'LIB_ASM_OPS_LEAK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Operations',
        signal_tags: ['recovery_bleed', 'downtime_tax', 'process_chaos'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Production is reactive: you mine for cash today and suffer Downtime Tax tomorrow. Loss control is missing.',
        type: 'leak',
        hook_text: 'Recovery Bleed',
        cost_text: 'Invisible loss streams from uncontrolled handling, downtime from neglected maintenance, and theft.',
        cliffhanger_text: 'Fix Mode logs output daily, tags downtime, and secures storage to stop the bleed.',
        kpi_text: 'Output/day, Recovery %, Downtime minutes/day, Loss rate'
    },
    {
        id: 'LIB_ASM_OPS_STR',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Operations',
        signal_tags: ['recovery_bleed'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'You track daily output drivers, maintain equipment preventively, and control losses through secure storage and handoffs.',
        type: 'strength'
    },
    {
        id: 'LIB_ASM_OPS_HOOK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Operations',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Downtime Tax',
        type: 'hook'
    },
    {
        id: 'LIB_ASM_OPS_KPI',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Operations',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Output per day, Recovery %, Downtime minutes, Loss rate, Rework rate',
        type: 'kpi'
    },

    // PILLAR 6: Finance & Profit Control -> Mapped to MONEY
    {
        id: 'LIB_ASM_MONEY_LEAK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Money',
        signal_tags: ['cashflow_illusion', 'money_fog', 'small_spend_monster'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'You have Cashflow Illusion: judging profit by "money left" rather than unit economics. Small spends are eating the margin.',
        type: 'leak',
        hook_text: 'Money Fog',
        cost_text: 'Diesel creep, leak-by-a-thousand-cuts, and variance blindness that hides theft.',
        cliffhanger_text: 'Fix Mode separates who records vs who spends, and tracks unit economics per batch.',
        kpi_text: 'Margin per batch, Cash runway, Unexplained variance, Top 10 cost drivers'
    },
    {
        id: 'LIB_ASM_MONEY_STR',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Money',
        signal_tags: ['cashflow_illusion'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'You know your cost stack per unit. Cash is managed weekly, spends require approval, and variance triggers investigation.',
        type: 'strength'
    },
    {
        id: 'LIB_ASM_MONEY_HOOK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Money',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Cashflow Illusion',
        type: 'hook'
    },
    {
        id: 'LIB_ASM_MONEY_KPI',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'Money',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Margin per batch, Cash runway days, DSO, Unexplained variance value, Deposit coverage %',
        type: 'kpi'
    },

    // PILLAR 7: People, Safety & Execution Culture -> Mapped to PEOPLE
    {
        id: 'LIB_ASM_PEOPLE_LEAK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'People',
        signal_tags: ['hero_dependency', 'injury_tax', 'culture_debt'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Output relies on heroes. Safety is seen as optional, creating an Injury Tax that silently drains capacity and stability.',
        type: 'leak',
        hook_text: 'Hero Dependency',
        cost_text: 'Unsafe speed traps, rapid turnover, and production collapses when key people are absent.',
        cliffhanger_text: 'Fix Mode installs role cards, daily standups, and a near-miss log to stabilize the culture.',
        kpi_text: 'Incidents/month, Days lost to injury, Training completion %, Attendance reliability'
    },
    {
        id: 'LIB_ASM_PEOPLE_STR',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'People',
        signal_tags: ['hero_dependency'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'Safety is treated as productivity. Roles are clear, training is real, and routines (like standups) drive consistent execution.',
        type: 'strength'
    },
    {
        id: 'LIB_ASM_PEOPLE_HOOK',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'People',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Injury Tax',
        type: 'hook'
    },
    {
        id: 'LIB_ASM_PEOPLE_KPI',
        industry: 'mining',
        line_type: ['Artisanal Mining'],
        pillar: 'People',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Incidents & near-misses, Days lost, Training completion %, Attendance reliability %, Output per shift',
        type: 'kpi'
    }
];
