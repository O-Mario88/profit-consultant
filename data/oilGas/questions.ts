
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
  // PILLAR 1: Risk (Client Trust)
  {
    text: 'How do you handle client prequalification updates?',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We keep a ready-to-send prequal pack updated monthly', value: 100 },
      { id: 'B', text: 'We assemble prequal docs when a tender appears', value: 0 }
    ]
  },
  {
    text: 'How are subcontractors managed before site access?',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We screen subcontractors before they work under our name', value: 100 },
      { id: 'B', text: 'We mostly rely on referrals and speed', value: 0 }
    ]
  },
  {
    text: 'How does your team handle ethical pressure or bribery risks?',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We can explain our anti-bribery/sanctions stance clearly', value: 100 },
      { id: 'B', text: 'We keep it informal to avoid "slowing business"', value: 0 }
    ]
  },
  {
    text: 'How are critical compliance documents stored?',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Evidence is stored in one controlled place with owners', value: 100 },
      { id: 'B', text: 'Evidence is distributed across personal devices', value: 0 }
    ]
  },
  // Deep Scan Risk
  {
    text: 'Can you produce key compliance evidence within 1 hour?',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    type: 'deep_scan',
    choices: [
      { id: 'A', text: 'Yes, any time', value: 100 },
      { id: 'B', text: 'Depends who is available', value: 0 }
    ]
  },
  {
    text: 'How are audit findings managed?',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    type: 'deep_scan',
    choices: [
      { id: 'A', text: 'We verify effectiveness before closure', value: 100 },
      { id: 'B', text: 'We close them when actions are done', value: 0 }
    ]
  },

  // PILLAR 2: Innovation (Offer Design)
  {
    text: 'How are your services packaged?',
    pillar: 'Innovation',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Our offers have clear boundaries and deliverables', value: 100 },
      { id: 'B', text: 'We customize scope to each client situation', value: 0 }
    ]
  },
  {
    text: 'How do you price urgency or logistics complexity?',
    pillar: 'Innovation',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We price urgency and logistics explicitly', value: 100 },
      { id: 'B', text: 'We price most work using a standard rate card', value: 0 }
    ]
  },
  {
    text: 'How do you prove value to clients?',
    pillar: 'Innovation',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We show proof metrics (uptime/speed) tied to offers', value: 100 },
      { id: 'B', text: 'We rely on experience and verbal references', value: 0 }
    ]
  },
  {
    text: 'Do you offer premium tiers?',
    pillar: 'Innovation',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We have premium tiers enterprise buyers recognize', value: 100 },
      { id: 'B', text: 'We deliver premium service through flexibility', value: 0 }
    ]
  },

  // PILLAR 3: Market
  {
    text: 'How do you manage tenders?',
    pillar: 'Market',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We track tenders and plan bids ahead', value: 100 },
      { id: 'B', text: 'We respond when opportunities appear', value: 0 }
    ]
  },
  {
    text: 'Do you have a bid/no-bid process?',
    pillar: 'Market',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We use strict discipline to protect margin', value: 100 },
      { id: 'B', text: 'We bid broadly to stay visible', value: 0 }
    ]
  },
  {
    text: 'Do you have ready-to-send credibility assets?',
    pillar: 'Market',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Yes, case studies and compliance packs are ready', value: 100 },
      { id: 'B', text: 'We discuss credibility live on calls', value: 0 }
    ]
  },
  {
    text: 'Can you forecast pipeline revenue?',
    pillar: 'Market',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We can forecast confidently 90 days out', value: 100 },
      { id: 'B', text: 'Pipeline depends on active conversations', value: 0 }
    ]
  },

  // PILLAR 4: Leadership (Sales & Commercial)
  {
    text: 'How do you handle scope changes?',
    pillar: 'Leadership',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We use variation orders consistently', value: 100 },
      { id: 'B', text: 'We handle extras through relationship flexibility', value: 0 }
    ]
  },
  {
    text: 'What triggers an invoice?',
    pillar: 'Leadership',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Acceptance evidence is required before invoicing', value: 100 },
      { id: 'B', text: 'Invoicing is based on completion and trust', value: 0 }
    ]
  },
  {
    text: 'How are discounts managed?',
    pillar: 'Leadership',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Discounts follow approvals and clear floors', value: 100 },
      { id: 'B', text: 'Discounts are adjusted to match deal context', value: 0 }
    ]
  },
  {
    text: 'When does operations review the contract?',
    pillar: 'Leadership',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Ops reviews commitments before signing', value: 100 },
      { id: 'B', text: 'Sales signs and Ops aligns during kickoff', value: 0 }
    ]
  },

  // PILLAR 5: Operations
  {
    text: 'How predictable is mobilization?',
    pillar: 'Operations',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Mobilization follows a checklist and is predictable', value: 100 },
      { id: 'B', text: 'Mobilization is flexible to match client urgency', value: 0 }
    ]
  },
  {
    text: 'How do you handle job closeout?',
    pillar: 'Operations',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Every job ends with a standardized closeout pack', value: 100 },
      { id: 'B', text: 'Closeout is tailored to client expectations', value: 0 }
    ]
  },
  {
    text: 'How is emergency freight managed?',
    pillar: 'Operations',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'It requires approval and is analyzed', value: 100 },
      { id: 'B', text: 'It is accepted as part of fast service', value: 0 }
    ]
  },
  {
    text: 'How do you handle rework?',
    pillar: 'Operations',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We measure rework and act on causes', value: 100 },
      { id: 'B', text: 'We fix issues immediately and move on', value: 0 }
    ]
  },

  // PILLAR 6: Money
  {
    text: 'How granular is your margin tracking?',
    pillar: 'Money',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We review margin by job weekly', value: 100 },
      { id: 'B', text: 'We review margin in monthly totals', value: 0 }
    ]
  },
  {
    text: 'How fast is invoicing?',
    pillar: 'Money',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Invoicing happens fast with evidence packs', value: 100 },
      { id: 'B', text: 'Invoicing depends on client confirmation cycles', value: 0 }
    ]
  },
  {
    text: 'How are spend approvals managed?',
    pillar: 'Money',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Approvals are consistent even under urgency', value: 100 },
      { id: 'B', text: 'Approvals flex to keep operations moving', value: 0 }
    ]
  },
  {
    text: 'Do you track inventory variance?',
    pillar: 'Money',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Variance is measured and acted on', value: 100 },
      { id: 'B', text: 'Variance is accepted within tolerance', value: 0 }
    ]
  },

  // PILLAR 7: People
  {
    text: 'How do you verify safety controls?',
    pillar: 'People',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We verify controls before work starts', value: 100 },
      { id: 'B', text: 'We rely on experience and toolbox briefings', value: 0 }
    ]
  },
  {
    text: 'How is competence managed?',
    pillar: 'People',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'Competence is role-based and documented', value: 100 },
      { id: 'B', text: 'Competence is assessed by supervisors', value: 0 }
    ]
  },
  {
    text: 'How do you handle quality issues (NCRs)?',
    pillar: 'People',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We track trends and fix systems', value: 100 },
      { id: 'B', text: 'We fix issues immediately and move on', value: 0 }
    ]
  },
  {
    text: 'How is process safety tracked?',
    pillar: 'People',
    industry: 'oil_gas_services',
    type: 'quick_scan',
    choices: [
      { id: 'A', text: 'We track specific indicators where applicable', value: 100 },
      { id: 'B', text: 'We focus on general operational safety', value: 0 }
    ]
  }
];
