
import { LibraryItem } from '../../types';

export const library: LibraryItem[] = [
    // PILLAR 1: Client Trust, Compliance & Prequalification -> Mapped to RISK
    {
        id: 'LIB_MS_RISK_LEAK_PREQUAL',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Contracting', 'Supplies'],
        pillar: 'Risk',
        signal_tags: ['prequal_panic', 'compliance_premium_lost', 'reputation_drag'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Prequalification is a scramble: documents are assembled only when a tender is due, risking disqualification.',
        type: 'leak',
        hook_text: 'Prequal Panic',
        cost_text: 'Lost tenders, urgent admin costs, and being blocked from site access.',
        cliffhanger_text: 'Fix Mode builds a "Ready-to-Send" Prequal Pack that wins trust instantly.',
        kpi_text: 'Prequalification pass rate, Audit findings closure time'
    },
    {
        id: 'LIB_MS_RISK_LEAK_SUB',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Contracting'],
        pillar: 'Risk',
        signal_tags: ['subcontractor_shadow_risk', 'facilitation_tax'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Subcontractors are a shadow risk: unscreened partners expose you to compliance, safety, and reputational blows.',
        type: 'leak',
        hook_text: 'Subcontractor Shadow Risk',
        cost_text: 'Hidden liability, project shutdowns, and "facilitation payment" drift.',
        cliffhanger_text: 'Fix Mode installs a "No Onboarding, No Access" rule for all partners.',
        kpi_text: 'Subcontractor compliance rate, Incident rate'
    },
    {
        id: 'LIB_MS_RISK_STR',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Contracting'],
        pillar: 'Risk',
        signal_tags: ['prequal_panic'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'You operate with a "Compliance Shield": prequal docs are live, audits are routine, and integrity is a selling point.',
        type: 'strength'
    },
    {
        id: 'LIB_MS_RISK_HOOK',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Risk',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Prequal Panic',
        type: 'hook'
    },

    // PILLAR 2: Offer Design & Differentiation -> Mapped to INNOVATION
    {
        id: 'LIB_MS_INNOV_LEAK_COMMODITY',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Supplies'],
        pillar: 'Innovation',
        signal_tags: ['commodity_trap', 'value_promise_fog', 'marginless_growth'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'You are caught in the "Commodity Trap": competing on price because your unique value (uptime, outcomes) is invisible.',
        type: 'leak',
        hook_text: 'Commodity Trap',
        cost_text: 'Price wars, discount addiction, and being treated like a generic vendor.',
        cliffhanger_text: 'Fix Mode packages your services into "Outcomes" (e.g., Guaranteed Uptime) to restore pricing power.',
        kpi_text: 'Gross margin by service product, First-time fix rate'
    },
    {
        id: 'LIB_MS_INNOV_LEAK_SCOPE',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Contracting'],
        pillar: 'Innovation',
        signal_tags: ['scope_creep_tax', 'unpriced_complexity', 'warranty_bleed'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Scope creep is eating margin: clients push extra work into the same price because boundaries are fuzzy.',
        type: 'leak',
        hook_text: 'Scope Creep Tax',
        cost_text: 'Doing free work, warranty bleed, and eroding project profit.',
        cliffhanger_text: 'Fix Mode installs "Service Tiers" (Standard vs Premium) to monetize complexity.',
        kpi_text: 'Change order capture %, Warranty claim rate'
    },
    {
        id: 'LIB_MS_INNOV_STR',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Innovation',
        signal_tags: ['commodity_trap'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'You sell Outcomes, not Hours: standardized service packs and clear SLAs allow you to command a premium.',
        type: 'strength'
    },
    {
        id: 'LIB_MS_INNOV_HOOK',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Innovation',
        signal_tags: [],
        severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
        business_size_fit: ['all' as any],
        text: 'Scope Creep Tax',
        type: 'hook'
    },

    // PILLAR 3: Marketing & Demand -> Mapped to MARKET
    {
        id: 'LIB_MS_MARKET_LEAK_TENDER',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Contracting'],
        pillar: 'Market',
        signal_tags: ['tender_chasing_addiction', 'late_to_bid_syndrome', 'proposal_graveyard'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'You suffer from "Tender Chasing Addiction": reacting to every public bid instead of building a strategic pipeline.',
        type: 'leak',
        hook_text: 'Tender Chasing Addiction',
        cost_text: 'Wasted bid effort, low win rates, and missing the "trusted advisor" seat.',
        cliffhanger_text: 'Fix Mode installs a "Bid/No-Bid" rule and a Top 30 Target List.',
        kpi_text: 'Bid-to-win rate, Qualified pipeline value, Tender invitations'
    },
    {
        id: 'LIB_MS_MARKET_LEAK_VISIBILITY',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Market',
        signal_tags: ['brand_invisibility_tax', 'unqualified_lead_drain'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Brand Invisibility: mining buyers don\'t know your capabilities (HSE, Integrity, Capacity) until you tell them.',
        type: 'leak',
        hook_text: 'Brand Invisibility Tax',
        cost_text: 'Being ignored for select tender lists and relying on "hope" for leads.',
        cliffhanger_text: 'Fix Mode creates a "Capability Proof Pack" aligned to global buyer expectations.',
        kpi_text: 'Qualified leads/month, Pipeline coverage'
    },
    {
        id: 'LIB_MS_MARKET_STR',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Market',
        signal_tags: ['tender_chasing_addiction'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'You run a "Tender Engine": tracking shutdown cycles, pre-positioning with key accounts, and bidding only to win.',
        type: 'strength'
    },

    // PILLAR 4: Sales, Contracts & Commercial Discipline -> Mapped to LEADERSHIP (Commercial Governance)
    {
        id: 'LIB_MS_LEAD_LEAK_CONTRACT',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Contracting'],
        pillar: 'Leadership',
        signal_tags: ['contract_blindspot', 'discount_addiction', 'unbilled_extras'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Commercial Blindness: contracts are signed without operational reality checks, leading to unbilled extras and disputes.',
        type: 'leak',
        hook_text: 'Contract Blindspot',
        cost_text: 'Margin erosion, disputed invoices, and funding client operations with your cash.',
        cliffhanger_text: 'Fix Mode installs a "Commercial Gate" review and strict Change Order discipline.',
        kpi_text: 'Change order capture %, Average discount %, Dispute rate'
    },
    {
        id: 'LIB_MS_LEAD_LEAK_ACCEPTANCE',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Leadership',
        signal_tags: ['acceptance_gap', 'payment_drag', 'claims_chaos'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'The "Acceptance Gap": work is done but not signed off. Invoices stall, and cashflow drags while you chase paperwork.',
        type: 'leak',
        hook_text: 'Payment Drag',
        cost_text: 'High DSO, cash crunches, and "he said/she said" arguments over completed work.',
        cliffhanger_text: 'Fix Mode requires a "Job Completion Certificate" before any invoice leaves the building.',
        kpi_text: 'DSO, Invoice cycle time'
    },
    {
        id: 'LIB_MS_LEAD_STR',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Leadership',
        signal_tags: ['contract_blindspot'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'Commercial Discipline is ironclad: clear contracting, strict change management, and documented acceptance.',
        type: 'strength'
    },

    // PILLAR 5: Delivery Operations -> Mapped to OPERATIONS
    {
        id: 'LIB_MS_OPS_LEAK_DOWNTIME',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Supplies'],
        pillar: 'Operations',
        signal_tags: ['downtime_penalty', 'emergency_freight_tax', 'reactive_maintenance'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'The "Emergency Tax": unplanned downtime and reactive maintenance force you to burn cash on emergency freight and overtime.',
        type: 'leak',
        hook_text: 'Emergency Freight Tax',
        cost_text: 'Triple costs for parts, overtime wages, and reputational damage for missing SLAs.',
        cliffhanger_text: 'Fix Mode installs a Preventive Maintenance Calendar and Critical Spares list.',
        kpi_text: 'Emergency freight %, First-time fix rate, Fleet utilization'
    },
    {
        id: 'LIB_MS_OPS_LEAK_INVENTORY',
        industry: 'mining_services',
        line_type: ['Supplies', 'Mining Services'],
        pillar: 'Operations',
        signal_tags: ['inventory_fog', 'parts_cannibalization'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Inventory Fog: stockouts of critical items happen, while dead stock gathers dust. You are cannibalizing units to keep going.',
        type: 'leak',
        hook_text: 'Inventory Fog',
        cost_text: 'Lost sales, rushed procurement premiums, and capital tied up in useless stock.',
        cliffhanger_text: 'Fix Mode installs ABC Inventory Classification and strict Reorder Points.',
        kpi_text: 'Inventory fill rate, Stockout frequency'
    },
    {
        id: 'LIB_MS_OPS_STR',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Operations',
        signal_tags: ['downtime_penalty'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'Operations are predictable: mobilization, maintenance, and inventory readiness are systemized to protect margins.',
        type: 'strength'
    },

    // PILLAR 6: Finance & Profit Control -> Mapped to MONEY
    {
        id: 'LIB_MS_MONEY_LEAK_COSTING',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Contracting'],
        pillar: 'Money',
        signal_tags: ['profit_fog', 'busy_but_broke', 'unpriced_mobilization'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Profit Fog: you know revenue, but not margin per job. Mobilization and standby costs are eating your profit silently.',
        type: 'leak',
        hook_text: 'Profit Fog',
        cost_text: 'Bidding losing jobs, "busy but broke" syndrome, and hidden mobilization losses.',
        cliffhanger_text: 'Fix Mode installs "Job Costing Sheets" for every major project/contract.',
        kpi_text: 'Gross margin by job, Estimate vs Actual variance'
    },
    {
        id: 'LIB_MS_MONEY_LEAK_SPEND',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Money',
        signal_tags: ['leak_by_a_thousand_cuts', 'variance_blindness'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Leak by a Thousand Cuts: petty spending, urgent POs, and lack of approvals drain cash daily.',
        type: 'leak',
        hook_text: 'Leak by a Thousand Cuts',
        cost_text: 'Uncontrolled overheads and reduced working capital for growth.',
        cliffhanger_text: 'Fix Mode freezes unapproved spend and sets a "No PO, No Pay" rule.',
        kpi_text: 'Unapproved spend %, Cash conversion cycle'
    },
    {
        id: 'LIB_MS_MONEY_STR',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'Money',
        signal_tags: ['profit_fog'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'Financial Control is granular: you track margin by job/SKU and control cash with strict approval matrices.',
        type: 'strength'
    },

    // PILLAR 7: People, Safety, Quality & Execution Culture -> Mapped to PEOPLE
    {
        id: 'LIB_MS_PEOPLE_LEAK_SAFETY',
        industry: 'mining_services',
        line_type: ['Mining Services', 'Contracting'],
        pillar: 'People',
        signal_tags: ['hse_theater', 'incident_wipeout', 'procedure_drift'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'HSE Theater: safety exists on paper, but procedure drift is common. You are one incident away from losing a contract.',
        type: 'leak',
        hook_text: 'HSE Theater',
        cost_text: 'Incident investigations, site shutdowns, and "Incident Wipeout" of your reputation.',
        cliffhanger_text: 'Fix Mode installs "Field Verification" of critical controls—not just signatures.',
        kpi_text: 'Critical control verification %, TRIFR'
    },
    {
        id: 'LIB_MS_PEOPLE_LEAK_CULTURE',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'People',
        signal_tags: ['culture_debt', 'silent_turnover_churn', 'hero_dependency'],
        severity_fit: ['Critical', 'Stable'],
        business_size_fit: ['all' as any],
        text: 'Culture Debt: relying on "heroes" and ignoring grievance/respect issues creates silent churn and quality failures.',
        type: 'leak',
        hook_text: 'Culture Debt',
        cost_text: 'High turnover, rework costs, and loss of institutional knowledge.',
        cliffhanger_text: 'Fix Mode builds a "Competency Matrix" and a trusted grievance channel.',
        kpi_text: 'Staff turnover rate, Training completion %'
    },
    {
        id: 'LIB_MS_PEOPLE_STR',
        industry: 'mining_services',
        line_type: ['Mining Services'],
        pillar: 'People',
        signal_tags: ['hse_theater'],
        severity_fit: ['Strong'],
        business_size_fit: ['all' as any],
        text: 'Execution Culture is disciplined: safety is verified, competence is documented, and quality is repeatable.',
        type: 'strength'
    }
];
