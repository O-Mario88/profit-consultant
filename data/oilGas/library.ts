
import { LibraryItem } from '../../types';

export const library: LibraryItem[] = [
  // PILLAR 1: Client Trust, Compliance & Prequalification -> Mapped to RISK
  {
    id: 'LIB_OG_RISK_LEAK_PREQUAL',
    industry: 'oil_gas_services',
    line_type: ['Services', 'Contracting', 'Offshore'],
    pillar: 'Risk',
    signal_tags: ['prequal_panic', 'award_risk_discount', 'compliance_roulette'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Prequalification is a scramble: documentation is rebuilt for each tender, creating "Prequal Panic" and risking disqualification.',
    type: 'leak',
    hook_text: 'Prequal Panic',
    cost_text: 'Lost tenders, urgent admin costs, and being blocked from select bidder lists.',
    cliffhanger_text: 'Fix Mode builds a "Ready-to-Award" evidence pack that wins trust instantly.',
    kpi_text: 'Prequalification pass rate, Audit findings closure time'
  },
  {
    id: 'LIB_OG_RISK_LEAK_AUDIT',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Risk',
    signal_tags: ['audit_ambush', 'traceability_gap_tax', 'paper_only_controls'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Audit Ambush: compliance is "leadership knowledge" not a system. Audits cause panic because evidence is missing or scattered.',
    type: 'leak',
    hook_text: 'Audit Ambush',
    cost_text: 'Failed audits, conditional awards, and the "Traceability Gap Tax" of urgent fixes.',
    cliffhanger_text: 'Fix Mode installs a "10-Minute Audit Drill" routine to make readiness permanent.',
    kpi_text: 'Audit findings per audit, Closure days'
  },
  {
    id: 'LIB_OG_RISK_STR',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Risk',
    signal_tags: ['prequal_panic'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'Trust is an asset: your prequal pack is always current, and you pass audits without drama.',
    type: 'strength'
  },
  {
    id: 'LIB_OG_RISK_HOOK',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Risk',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Prequal Panic',
    type: 'hook'
  },

  // PILLAR 2: Offer Design & Technical Differentiation -> Mapped to INNOVATION
  {
    id: 'LIB_OG_INNOV_LEAK_COMMODITY',
    industry: 'oil_gas_services',
    line_type: ['Services', 'Contracting'],
    pillar: 'Innovation',
    signal_tags: ['commodity_trap', 'rate_card_race', 'proofless_premium'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Commodity Trap: your services are generic, so you compete mainly on daily rates. Differentiation is claimed but not evidenced.',
    type: 'leak',
    hook_text: 'Commodity Trap',
    cost_text: 'Price erosion, "Rate Card Race" capability, and low client loyalty.',
    cliffhanger_text: 'Fix Mode packages services into tiers (Standard vs Premium) to differentiate and protect margin.',
    kpi_text: 'Gross margin by offer, Premium tier penetration'
  },
  {
    id: 'LIB_OG_INNOV_LEAK_SCOPE',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Innovation',
    signal_tags: ['scope_blur_tax', 'mobilization_underbill', 'unpriced_risk'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Scope Blur Tax: operational boundaries are fuzzy. Clients push "extras" into the scope, and mobilization costs are underbilled.',
    type: 'leak',
    hook_text: 'Scope Blur Tax',
    cost_text: 'Doing free work, absorbing mobilization costs, and eroding project profit.',
    cliffhanger_text: 'Fix Mode installs strict inclusions/exclusions and a "Cost-to-Serve" calculator.',
    kpi_text: 'Quote-to-scope deviation, Mobilization recovery %'
  },
  {
    id: 'LIB_OG_INNOV_STR',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Innovation',
    signal_tags: ['commodity_trap'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'You sell Outcomes: services are packaged with clear boundaries, evidenced reliability, and tiered pricing.',
    type: 'strength'
  },
  {
    id: 'LIB_OG_INNOV_HOOK',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Innovation',
    signal_tags: [],
    severity_fit: ['Critical', 'Stable', 'Watch', 'Emergency', 'Strong'],
    business_size_fit: ['all' as any],
    text: 'Commodity Trap',
    type: 'hook'
  },

  // PILLAR 3: Marketing & Demand -> Mapped to MARKET
  {
    id: 'LIB_OG_MARKET_LEAK_TENDER',
    industry: 'oil_gas_services',
    line_type: ['Services', 'Contracting'],
    pillar: 'Market',
    signal_tags: ['tender_chasing_addiction', 'proposal_graveyard', 'late_to_bid_syndrome'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Tender Chasing Addiction: reacting to every public bid instead of building a strategic pipeline. You are often "Late to Bid".',
    type: 'leak',
    hook_text: 'Tender Chasing Addiction',
    cost_text: 'Wasted bid effort ("Proposal Graveyard"), low win rates, and missing the "trusted partner" seat.',
    cliffhanger_text: 'Fix Mode installs a "Bid/No-Bid" discipline and a strategic target list.',
    kpi_text: 'Bid-to-win rate, Qualified pipeline value'
  },
  {
    id: 'LIB_OG_MARKET_LEAK_RELATION',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Market',
    signal_tags: ['relationship_only_risk', 'generic_credibility_tax', 'marketing_noise'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Relationship-Only Risk: demand relies on personal networks. When contacts move, the pipeline drops. Marketing is "noise" not proof.',
    type: 'leak',
    hook_text: 'Relationship Risks',
    cost_text: 'Revenue volatility, inability to scale, and loss of key accounts when staff leave.',
    cliffhanger_text: 'Fix Mode builds "Buyer-Relevant" credibility assets (HSE, QA, Reliability) that persist beyond individuals.',
    kpi_text: 'Lead source mix, Pipeline coverage'
  },
  {
    id: 'LIB_OG_MARKET_STR',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Market',
    signal_tags: ['tender_chasing_addiction'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'Demand is engineered: you track key accounts, pre-position for tenders, and bid only when you can win.',
    type: 'strength'
  },

  // PILLAR 4: Sales, Contracts & Commercial Discipline -> Mapped to LEADERSHIP
  {
    id: 'LIB_OG_LEAD_LEAK_SCOPES',
    industry: 'oil_gas_services',
    line_type: ['Services', 'Contracting'],
    pillar: 'Leadership',
    signal_tags: ['scope_creep_tax', 'unbilled_extras', 'contract_blindspot'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Scope Creep Tax: contracts are signed with loose boundaries. "Just do it" culture leads to unbilled extras and free work.',
    type: 'leak',
    hook_text: 'Scope Creep Tax',
    cost_text: 'Margin erosion, disputed invoices, and high cost-to-serve.',
    cliffhanger_text: 'Fix Mode installs strict Change Order discipline and a "Commercial Gate" review.',
    kpi_text: 'Change order capture %, Contract profitability variance'
  },
  {
    id: 'LIB_OG_LEAD_LEAK_ACCEPT',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Leadership',
    signal_tags: ['acceptance_gap', 'payment_drag', 'claims_chaos'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'The Acceptance Gap: work is done but not signed off. Invoices stall, and cashflow drags while you chase paperwork.',
    type: 'leak',
    hook_text: 'Acceptance Gap',
    cost_text: 'High DSO, cash crunches, and "he said/she said" disputes.',
    cliffhanger_text: 'Fix Mode requires a "Job Completion Certificate" before any invoice leaves the building.',
    kpi_text: 'DSO, Invoice cycle time'
  },
  {
    id: 'LIB_OG_LEAD_STR',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Leadership',
    signal_tags: ['scope_creep_tax'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'Commercial Discipline is ironclad: clear contracting, strict variations, and documented acceptance.',
    type: 'strength'
  },

  // PILLAR 5: Delivery Operations -> Mapped to OPERATIONS
  {
    id: 'LIB_OG_OPS_LEAK_MOB',
    industry: 'oil_gas_services',
    line_type: ['Services', 'Logistics'],
    pillar: 'Operations',
    signal_tags: ['mobilization_leakage', 'mobilization_delay_bleed', 'emergency_freight_tax'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Mobilization Leakage: delays in site access, certifications, or equipment readiness burn cash before the job starts.',
    type: 'leak',
    hook_text: 'Mobilization Leakage',
    cost_text: 'Lost billable days, emergency freight costs, and client frustration.',
    cliffhanger_text: 'Fix Mode installs a "Mobilization Checklist" (People + Docs + Kit) to ensure zero-delay starts.',
    kpi_text: 'On-time mobilization %, Emergency freight %'
  },
  {
    id: 'LIB_OG_OPS_LEAK_REWORK',
    industry: 'oil_gas_services',
    line_type: ['Services', 'Fabrication'],
    pillar: 'Operations',
    signal_tags: ['rework_bleed', 'field_improvisation_cost', 'documentation_drag'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Rework Bleed: field execution varies by supervisor. "First-time-right" is rare, and documentation gaps delay handover.',
    type: 'leak',
    hook_text: 'Rework Bleed',
    cost_text: 'Double labor costs, material waste, and delayed invoicing.',
    cliffhanger_text: 'Fix Mode standardizes "Job Packs" and quality checklists per service line.',
    kpi_text: 'First-time-right rate, Nonconformance rate'
  },
  {
    id: 'LIB_OG_OPS_STR',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Operations',
    signal_tags: ['mobilization_leakage'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'Operations are predictable: mobilization is a system, quality is repeatable, and closeout is fast.',
    type: 'strength'
  },

  // PILLAR 6: Finance & Profit Control -> Mapped to MONEY
  {
    id: 'LIB_OG_MONEY_LEAK_PROFIT',
    industry: 'oil_gas_services',
    line_type: ['Services', 'Contracting'],
    pillar: 'Money',
    signal_tags: ['profit_fog', 'busy_but_broke', 'unpriced_travel'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Profit Fog: you know revenue, but not margin per job. Hidden costs like travel, standby, and unbilled admin eat profit.',
    type: 'leak',
    hook_text: 'Profit Fog',
    cost_text: 'Bidding losing jobs, "busy but broke" syndrome, and capital tied up in low-margin work.',
    cliffhanger_text: 'Fix Mode installs "Job Costing Sheets" and daily margin tracking for key projects.',
    kpi_text: 'Gross margin by job, Estimate vs Actual variance'
  },
  {
    id: 'LIB_OG_MONEY_LEAK_CASH',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Money',
    signal_tags: ['cash_choke', 'leak_by_a_thousand_cuts', 'variance_blindness'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Cash Choke: invoicing lags because evidence packs are late. Expenses are approved "urgently" without control.',
    type: 'leak',
    hook_text: 'Cash Choke',
    cost_text: 'Working capital strain, high overdraft costs, and inability to fund growth.',
    cliffhanger_text: 'Fix Mode speeds up invoicing with "Closeout Packs" and freezes unapproved spend.',
    kpi_text: 'Invoice cycle time, Unapproved spend %'
  },
  {
    id: 'LIB_OG_MONEY_STR',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'Money',
    signal_tags: ['profit_fog'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'Financial Control is granular: you know margin per job, control WIP, and invoice within 48 hours of completion.',
    type: 'strength'
  },

  // PILLAR 7: People, HSE, Quality & Execution Culture -> Mapped to PEOPLE
  {
    id: 'LIB_OG_PEOPLE_LEAK_HSE',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'People',
    signal_tags: ['hse_theater', 'procedure_drift', 'audit_trigger_event'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'HSE Theater: safety exists on paper, but urgency overrides controls in the field. You are one incident away from losing a contract.',
    type: 'leak',
    hook_text: 'HSE Theater',
    cost_text: 'Incident investigations, site shutdowns, and "Barrier Decay" leading to major events.',
    cliffhanger_text: 'Fix Mode installs "Start-Work Verification" routines—checking critical controls, not just ticking boxes.',
    kpi_text: 'Near-miss rate, Critical control verification %'
  },
  {
    id: 'LIB_OG_PEOPLE_LEAK_CULTURE',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'People',
    signal_tags: ['hero_dependency', 'silent_turnover_churn', 'ethics_exposure'],
    severity_fit: ['Critical', 'Stable'],
    business_size_fit: ['all' as any],
    text: 'Hero Dependency: the business relies on a few key people. When they burn out or leave, quality and safety collapse.',
    type: 'leak',
    hook_text: 'Hero Dependency',
    cost_text: 'High turnover costs, loss of institutional knowledge, and inconsistent delivery.',
    cliffhanger_text: 'Fix Mode builds multiple levels of competence and "Standard Work" that reduces reliance on heroes.',
    kpi_text: 'Turnover rate, Training completion %'
  },
  {
    id: 'LIB_OG_PEOPLE_STR',
    industry: 'oil_gas_services',
    line_type: ['Services'],
    pillar: 'People',
    signal_tags: ['hse_theater'],
    severity_fit: ['Strong'],
    business_size_fit: ['all' as any],
    text: 'Culture is disciplined: safety is verified, competence is documented, and ethics are non-negotiable.',
    type: 'strength'
  }
];
