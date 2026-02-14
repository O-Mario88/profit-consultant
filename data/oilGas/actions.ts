

// Local definition
interface ActionSnippet {
  id: string;
  title: string;
  industry: string;
  pillar: string;
  text: string;
  type: string;
  impact: string;
}


export const actions: ActionSnippet[] = [
  // RISK (Client Trust)
  {
    id: 'ACT_OG_RISK_PREQUAL_PACK',
    title: 'Supplier Prequalification Pack',
    industry: 'oil_gas_services',
    pillar: 'Risk',
    text: 'Create a single, updated digital folder with your HSE, QA/QC, Integrity, Insurance, and key staff CVs. Assign one owner to keep it audit-ready weekly.',
    type: 'file',
    impact: 'High'
  },
  {
    id: 'ACT_OG_RISK_SUB_SCREEN',
    title: 'Subcontractor Screening Checklist',
    industry: 'oil_gas_services',
    pillar: 'Risk',
    text: 'Implement a "No Onboarding, No Access" rule. Use a standard checklist (HSE alignment, competency, insurance) before any sub starts work.',
    type: 'checklist',
    impact: 'High'
  },
  {
    id: 'ACT_OG_RISK_ANTI_BRIBERY',
    title: 'Anti-Bribery Policy & Script',
    industry: 'oil_gas_services',
    pillar: 'Risk',
    text: 'Deploy a simple 1-page "No Facilitation Payments" policy and a script for staff to refuse improper requests without losing face.',
    type: 'script',
    impact: 'Critical'
  },
  {
    id: 'ACT_OG_RISK_AUDIT_TRACKER',
    title: 'Audit Finding Tracker',
    industry: 'oil_gas_services',
    pillar: 'Risk',
    text: 'Track every audit finding (Internal or Client) to closure with evidence. Review weekly to prevent "Audit Ambush".',
    type: 'tool',
    impact: 'Medium'
  },

  // INNOVATION (Offer Design)
  {
    id: 'ACT_OG_INNOV_SLA_MENU',
    title: 'SLA Menu & Dashboard',
    industry: 'oil_gas_services',
    pillar: 'Innovation',
    text: 'Define your service tiers (Standard vs Premium) with clear response times and deliverables. Use a dashboard to prove you hit them.',
    type: 'template',
    impact: 'High'
  },
  {
    id: 'ACT_OG_INNOV_VALUE_PROOF',
    title: 'Value Proof Sheet',
    industry: 'oil_gas_services',
    pillar: 'Innovation',
    text: 'Create 1-page case studies showing "Before vs After" metrics (e.g., Downtime Avoided, Speed, Safety). Stop selling effort, start selling outcomes.',
    type: 'template',
    impact: 'High'
  },
  {
    id: 'ACT_OG_INNOV_COST_CALC',
    title: 'Cost-to-Serve Calculator',
    industry: 'oil_gas_services',
    pillar: 'Innovation',
    text: 'Map all costs including mobilization, standby, permits, and logistics. Use this to set accurate pricing floors.',
    type: 'tool',
    impact: 'High'
  },

  // MARKET (Marketing)
  {
    id: 'ACT_OG_MARKET_BID_CHECK',
    title: 'Bid/No-Bid Checklist',
    industry: 'oil_gas_services',
    pillar: 'Market',
    text: 'Stop chasing every tender. improved your win-rate by scoring opportunities (Relationship, Capability, Margin) before you start work.',
    type: 'checklist',
    impact: 'High'
  },
  {
    id: 'ACT_OG_MARKET_TARGET_LIST',
    title: 'Top 30 Target List',
    industry: 'oil_gas_services',
    pillar: 'Market',
    text: 'Identify the top 30 accounts (Operators/EPCs) you want to win. Map the stakeholders and build a specific engagement plan.',
    type: 'tool',
    impact: 'Medium'
  },
  {
    id: 'ACT_OG_MARKET_CAPABILITY',
    title: 'Enterprise Capability Statement',
    industry: 'oil_gas_services',
    pillar: 'Market',
    text: 'Update your capability profile to focus on "Buyer Risks": emphasize HSE, QA, Financial Stability, and Audit Readiness.',
    type: 'template',
    impact: 'High'
  },

  // LEADERSHIP (Sales/Contracting)
  {
    id: 'ACT_OG_LEAD_VAR_FORM',
    title: 'Variation Order Form',
    industry: 'oil_gas_services',
    pillar: 'Leadership',
    text: 'Capture scope changes immediately. Even if you bill later, get signatures now. Stop doing free work.',
    type: 'template',
    impact: 'High'
  },
  {
    id: 'ACT_OG_LEAD_HANDOVER',
    title: 'Sales-to-Ops Handover Checklist',
    industry: 'oil_gas_services',
    pillar: 'Leadership',
    text: 'Ensure Operations knows exactly what was sold. detailed scope, exclusions, timelines, and safety requirements before work starts.',
    type: 'checklist',
    impact: 'High'
  },
  {
    id: 'ACT_OG_LEAD_DISCOUNT',
    title: 'Discount Approval Matrix',
    industry: 'oil_gas_services',
    pillar: 'Leadership',
    text: 'Set clear margin floors. Require senior approval for any discount below the standard tier.',
    type: 'policy',
    impact: 'Medium'
  },

  // OPERATIONS
  {
    id: 'ACT_OG_OPS_MOB_CHECK',
    title: 'Mobilization Checklist',
    industry: 'oil_gas_services',
    pillar: 'Operations',
    text: 'Standardize mobilization: Personnel certs, equipment checks, logistics, and permits. Eliminate "Gate Fever" delays.',
    type: 'checklist',
    impact: 'Critical'
  },
  {
    id: 'ACT_OG_OPS_CLOSEOUT',
    title: 'Job Closeout Pack',
    industry: 'oil_gas_services',
    pillar: 'Operations',
    text: 'Define the standard evidence required for invoicing (Time sheets, signed reports, photos, test charts). No pack = No invoice.',
    type: 'template',
    impact: 'High'
  },
  {
    id: 'ACT_OG_OPS_CRIT_SPARES',
    title: 'Critical Spares List',
    industry: 'oil_gas_services',
    pillar: 'Operations',
    text: 'Identify the top 20 parts that cause downtime. Set reorder points and keep them in stock locally.',
    type: 'tool',
    impact: 'Medium'
  },
  {
    id: 'ACT_OG_OPS_EMERGENCY',
    title: 'Emergency Freight Log',
    industry: 'oil_gas_services',
    pillar: 'Operations',
    text: 'Track every emergency shipment. Record the cost and the root cause. Reduce "Emergency Tax" by fixing planning gaps.',
    type: 'tool',
    impact: 'Medium'
  },

  // MONEY (Finance)
  {
    id: 'ACT_OG_MONEY_JOB_COST',
    title: 'Job Costing Sheet',
    industry: 'oil_gas_services',
    pillar: 'Money',
    text: 'Track revenue vs actual costs (labor, material, equipment, travel) for every job. Know your true margin.',
    type: 'tool',
    impact: 'Critical'
  },
  {
    id: 'ACT_OG_MONEY_SPEND_MATRIX',
    title: 'Spend Approval Matrix',
    industry: 'oil_gas_services',
    pillar: 'Money',
    text: 'Freeze unapproved spend. Every PO requires a code and approval based on value limits.',
    type: 'policy',
    impact: 'High'
  },
  {
    id: 'ACT_OG_MONEY_WIP',
    title: 'WIP Tracker',
    industry: 'oil_gas_services',
    pillar: 'Money',
    text: 'Track Unbilled Work (WIP) weekly. Identify blockers (missing docs, PO limits) and clear them to unlock cash.',
    type: 'tool',
    impact: 'High'
  },

  // PEOPLE
  {
    id: 'ACT_OG_PEOPLE_COMPETENCY',
    title: 'Competency Matrix',
    industry: 'oil_gas_services',
    pillar: 'People',
    text: 'Map critical roles to required skills/certs. Track expiration dates and deployment readiness.',
    type: 'tool',
    impact: 'High'
  },
  {
    id: 'ACT_OG_PEOPLE_START_WORK',
    title: 'Start-Work Verification',
    industry: 'oil_gas_services',
    pillar: 'People',
    text: 'Implement a field check that verifies critical controls are in place before high-risk work begins.',
    type: 'checklist',
    impact: 'Critical'
  },
  {
    id: 'ACT_OG_PEOPLE_NCR',
    title: 'NCR & Learning Tracker',
    industry: 'oil_gas_services',
    pillar: 'People',
    text: 'Log Quality Non-Conformances (NCRs) and incidents. Track actions to effectiveness, not just completion.',
    type: 'tool',
    impact: 'High'
  }
];
