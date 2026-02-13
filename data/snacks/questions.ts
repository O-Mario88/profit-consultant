import { QuestionDefinition } from '../../types';
import { questions as fnbQuestions } from '../fnb/questions';

// Filter F&B questions for shared pillars
const sharedPillars = ['Innovation', 'Market', 'Leadership', 'Money', 'People'];
const sharedQuestions = fnbQuestions.filter(q => sharedPillars.includes(q.pillar));

const defaultProps = {
    line_type: ['Snacks & packaged foods'],
    signal_tags: [],
};

const snacksQuestions: QuestionDefinition[] = [
    // RISK (P1) - Snacks Specific
    {
        qid: 'SNACKS_QS_RISK_1',
        pillar: 'Risk',
        textA: 'We keep the plant "dry by design" with defined moisture rules and checks',
        textB: 'We keep the plant "dry by habit" through routine cleaning and supervision',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'SNACKS_QS_RISK_2',
        pillar: 'Risk',
        textA: 'Allergen risk is controlled through sequencing + validated cleaning + line clearance',
        textB: 'Allergen risk is controlled through careful handling + checks during production',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'SNACKS_QS_RISK_3',
        pillar: 'Risk',
        textA: 'The kill step (where applicable) is controlled through limits, monitoring, and deviation actions',
        textB: 'The kill step is controlled through standard settings and experienced operators',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'SNACKS_QS_RISK_4',
        pillar: 'Risk',
        textA: 'Supplier risk for high-risk ingredients is controlled with specs + verification sampling',
        textB: 'Supplier risk is controlled mainly through purchasing from known suppliers',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },

    // OPERATIONS (P5) - Snacks Specific
    {
        qid: 'SNACKS_QS_OPS_1',
        pillar: 'Operations',
        textA: 'We control seasoning usage with targets, checks, and correction rules',
        textB: 'We control seasoning usage mainly through operator experience and taste checks',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'SNACKS_QS_OPS_2',
        pillar: 'Operations',
        textA: 'We reduce breakage by measuring it daily and fixing the biggest break point',
        textB: 'We reduce breakage through careful handling and general supervision',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'SNACKS_QS_OPS_3',
        pillar: 'Operations',
        textA: 'We protect crispness/shelf life through moisture control and seal verification',
        textB: 'We protect crispness/shelf life mainly through good packaging and storage habits',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'SNACKS_QS_OPS_4',
        pillar: 'Operations',
        textA: 'We manage downtime by coding stops and killing repeat causes',
        textB: 'We manage downtime through maintenance response and teamwork',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    }
];

export const questions: QuestionDefinition[] = [
    ...snacksQuestions,
    ...sharedQuestions
];
