import { QuestionDefinition } from '../../types';

const defaultProps = {
  line_type: ['all'],
  signal_tags: [],
};

export const questions: QuestionDefinition[] = [
  // RISK (P1)
  {
    qid: 'FNB_QS_RISK_1',
    pillar: 'Risk',
    textA: 'We keep food safety records consistent through a simple daily routine',
    textB: 'We keep food safety records accurate through periodic reviews and spot checks',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_RISK_2',
    pillar: 'Risk',
    textA: 'Label changes require a controlled approval and line clearance proof',
    textB: 'Label changes are handled through a structured handover between QA and production',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_RISK_3',
    pillar: 'Risk',
    textA: 'Supplier specs/COAs are verified based on risk rules',
    textB: 'Supplier specs/COAs are verified based on supplier history and exceptions',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_RISK_4',
    pillar: 'Risk',
    textA: 'Mock recalls are scheduled and timed',
    textB: 'Mock recalls are run when we introduce new products, suppliers, or sites',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },

  // INNOVATION (P2)
  {
    qid: 'FNB_QS_INNOVATION_1',
    pillar: 'Innovation',
    textA: 'We review profitability by SKU family routinely',
    textB: 'We review profitability by customer/channel and infer SKU performance',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_INNOVATION_2',
    pillar: 'Innovation',
    textA: 'Promotions require profit impact estimates',
    textB: 'Promotions require volume and brand impact estimates',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_INNOVATION_3',
    pillar: 'Innovation',
    textA: 'We limit SKUs to protect throughput and stability',
    textB: 'We expand SKUs selectively to serve distinct channel needs',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_INNOVATION_4',
    pillar: 'Innovation',
    textA: 'Packaging decisions include total cost-to-serve',
    textB: 'Packaging decisions prioritize shelf impact and operational feasibility',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },

  // MARKET (P3)
  {
    qid: 'FNB_QS_MARKET_1',
    pillar: 'Market',
    textA: 'We run one forecast number through a weekly consensus rhythm',
    textB: 'We run a forecast with periodic alignment around major events',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_MARKET_2',
    pillar: 'Market',
    textA: 'Promotions require capacity and margin checks',
    textB: 'Promotions require sales and supply alignment and post-event review',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_MARKET_3',
    pillar: 'Market',
    textA: 'Launches follow ramp planning tied to production readiness',
    textB: 'Launches follow market timing and then operational stabilization',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_MARKET_4',
    pillar: 'Market',
    textA: 'We track stockouts and overstock as planning KPIs',
    textB: 'We track service levels and inventory health broadly',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },

  // LEADERSHIP (P4)
  {
    qid: 'FNB_QS_LEADERSHIP_1',
    pillar: 'Leadership',
    textA: 'We review customer profitability including trade spend routinely',
    textB: 'We review margin and adjust terms through periodic account reviews',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_LEADERSHIP_2',
    pillar: 'Leadership',
    textA: 'Returns policy is clear and enforced consistently',
    textB: 'Returns are controlled through customer-specific agreements',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_LEADERSHIP_3',
    pillar: 'Leadership',
    textA: 'Claims/chargebacks are tracked and reduced via root-cause fixes',
    textB: 'Claims/chargebacks are managed through dispute resolution discipline',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_LEADERSHIP_4',
    pillar: 'Leadership',
    textA: 'Order patterns are managed with cutoffs/minimums',
    textB: 'Order patterns are managed through flexible production scheduling',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },

  // OPERATIONS (P5)
  {
    qid: 'FNB_QS_OPERATIONS_1',
    pillar: 'Operations',
    textA: 'Downtime is logged daily with causes and owners',
    textB: 'Downtime is monitored through shift reports and escalations',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_OPERATIONS_2',
    pillar: 'Operations',
    textA: 'Changeovers follow standard steps and improvement logs',
    textB: 'Changeovers are managed through experienced teams and supervision',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_OPERATIONS_3',
    pillar: 'Operations',
    textA: 'Yield and scrap are tracked by SKU',
    textB: 'Yield and scrap are tracked by line with periodic deep dives',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_OPERATIONS_4',
    pillar: 'Operations',
    textA: 'Inventory rotation (FEFO/FIFO) is enforced consistently',
    textB: 'Inventory rotation is controlled through warehouse checks and audits',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },

  // MONEY (P6)
  {
    qid: 'FNB_QS_MONEY_1',
    pillar: 'Money',
    textA: 'We know margin by SKU/customer after key deductions',
    textB: 'We know margin by category and investigate exceptions',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_MONEY_2',
    pillar: 'Money',
    textA: 'Variances are reviewed weekly with actions',
    textB: 'Variances are reviewed monthly with improvement projects',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_MONEY_3',
    pillar: 'Money',
    textA: 'Pricing exceptions require approval and reason codes',
    textB: 'Pricing exceptions are managed through account strategy reviews',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_MONEY_4',
    pillar: 'Money',
    textA: 'We track waste as a cost KPI (not just quantity)',
    textB: 'We track waste and tie it to operational improvement work',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },

  // PEOPLE (P7)
  {
    qid: 'FNB_QS_PEOPLE_1',
    pillar: 'People',
    textA: 'Role-based competence is verified before independent work',
    textB: 'Competence is verified through observation and periodic sign-offs',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_PEOPLE_2',
    pillar: 'People',
    textA: 'Supervisors follow consistent daily routines',
    textB: 'Supervisors adapt routines based on the day’s risks',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_PEOPLE_3',
    pillar: 'People',
    textA: 'Near-misses are reported and closed with actions',
    textB: 'Near-misses are discussed and addressed through team learning',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  },
  {
    qid: 'FNB_QS_PEOPLE_4',
    pillar: 'People',
    textA: 'CI projects target the biggest losses first',
    textB: 'CI projects balance loss reduction and capability building',
    weight: 1,
    industry: 'manufacturing',
    ...defaultProps
  }
];
