
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
  // PILLAR 1: Risk (Client Trust)
  {
    qid: 'og_risk_prequal',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We assemble prequal docs when a tender appears',
    textB: 'We keep a ready-to-send prequal pack updated monthly'
  },
  {
    qid: 'og_risk_subcontractors',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We mostly rely on referrals and speed',
    textB: 'We screen subcontractors before they work under our name'
  },
  {
    qid: 'og_risk_ethics',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We keep it informal to avoid "slowing business"',
    textB: 'We can explain our anti-bribery/sanctions stance clearly'
  },
  {
    qid: 'og_risk_docs',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Evidence is distributed across personal devices',
    textB: 'Evidence is stored in one controlled place with owners'
  },
  // Deep Scan Risk
  {
    qid: 'og_ds_risk_evidence',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Depends who is available',
    textB: 'Yes, any time'
  },
  {
    qid: 'og_ds_risk_audit',
    pillar: 'Risk',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We close them when actions are done',
    textB: 'We verify effectiveness before closure'
  },

  // PILLAR 2: Innovation (Offer Design)
  {
    qid: 'og_inn_scope',
    pillar: 'Innovation',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We customize scope to each client situation',
    textB: 'Our offers have clear boundaries and deliverables'
  },
  {
    qid: 'og_inn_pricing',
    pillar: 'Innovation',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We price most work using a standard rate card',
    textB: 'We price urgency and logistics explicitly'
  },
  {
    qid: 'og_inn_value',
    pillar: 'Innovation',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We rely on experience and verbal references',
    textB: 'We show proof metrics (uptime/speed) tied to offers'
  },
  {
    qid: 'og_inn_tiers',
    pillar: 'Innovation',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We deliver premium service through flexibility',
    textB: 'We have premium tiers enterprise buyers recognize'
  },

  // PILLAR 3: Market
  {
    qid: 'og_mkt_tenders',
    pillar: 'Market',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We respond when opportunities appear',
    textB: 'We track tenders and plan bids ahead'
  },
  {
    qid: 'og_mkt_bid_process',
    pillar: 'Market',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We bid broadly to stay visible',
    textB: 'We use strict discipline to protect margin'
  },
  {
    qid: 'og_mkt_credibility',
    pillar: 'Market',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We discuss credibility live on calls',
    textB: 'Yes, case studies and compliance packs are ready'
  },
  {
    qid: 'og_mkt_forecast',
    pillar: 'Market',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Pipeline depends on active conversations',
    textB: 'We can forecast confidently 90 days out'
  },

  // PILLAR 4: Leadership (Sales & Commercial)
  {
    qid: 'og_led_scope',
    pillar: 'Leadership',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We handle extras through relationship flexibility',
    textB: 'We use variation orders consistently'
  },
  {
    qid: 'og_led_invoice',
    pillar: 'Leadership',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Invoicing is based on completion and trust',
    textB: 'Acceptance evidence is required before invoicing'
  },
  {
    qid: 'og_led_discount',
    pillar: 'Leadership',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Discounts are adjusted to match deal context',
    textB: 'Discounts follow approvals and clear floors'
  },
  {
    qid: 'og_led_contract',
    pillar: 'Leadership',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Sales signs and Ops aligns during kickoff',
    textB: 'Ops reviews commitments before signing'
  },

  // PILLAR 5: Operations
  {
    qid: 'og_ops_mobilization',
    pillar: 'Operations',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Mobilization is flexible to match client urgency',
    textB: 'Mobilization follows a checklist and is predictable'
  },
  {
    qid: 'og_ops_closeout',
    pillar: 'Operations',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Closeout is tailored to client expectations',
    textB: 'Every job ends with a standardized closeout pack'
  },
  {
    qid: 'og_ops_freight',
    pillar: 'Operations',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'It is accepted as part of fast service',
    textB: 'It requires approval and is analyzed'
  },
  {
    qid: 'og_ops_rework',
    pillar: 'Operations',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We fix issues immediately and move on',
    textB: 'We measure rework and act on causes'
  },

  // PILLAR 6: Money
  {
    qid: 'og_mon_margin',
    pillar: 'Money',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We review margin in monthly totals',
    textB: 'We review margin by job weekly'
  },
  {
    qid: 'og_mon_invoice_speed',
    pillar: 'Money',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Invoicing depends on client confirmation cycles',
    textB: 'Invoicing happens fast with evidence packs'
  },
  {
    qid: 'og_mon_approvals',
    pillar: 'Money',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Approvals flex to keep operations moving',
    textB: 'Approvals are consistent even under urgency'
  },
  {
    qid: 'og_mon_variance',
    pillar: 'Money',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Variance is accepted within tolerance',
    textB: 'Variance is measured and acted on'
  },

  // PILLAR 7: People
  {
    qid: 'og_ppl_safety',
    pillar: 'People',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We rely on experience and toolbox briefings',
    textB: 'We verify controls before work starts'
  },
  {
    qid: 'og_ppl_competence',
    pillar: 'People',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'Competence is assessed by supervisors',
    textB: 'Competence is role-based and documented'
  },
  {
    qid: 'og_ppl_quality',
    pillar: 'People',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We fix issues immediately and move on',
    textB: 'We track trends and fix systems'
  },
  {
    qid: 'og_ppl_process_safety',
    pillar: 'People',
    industry: 'oil_gas_services',
    line_type: ['all'],
    signal_tags: [],
    weight: 1,
    textA: 'We focus on general operational safety',
    textB: 'We track specific indicators where applicable'
  }
];
