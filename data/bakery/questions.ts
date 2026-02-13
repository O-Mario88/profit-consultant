import { QuestionDefinition } from '../../types';
import { questions as fnbQuestions } from '../fnb/questions';

// Filter F&B questions for shared pillars
const sharedPillars = ['Innovation', 'Market', 'Leadership', 'Money', 'People'];
const sharedQuestions = fnbQuestions.filter(q => sharedPillars.includes(q.pillar));

const defaultProps = {
    line_type: ['Bakery / Flour / Grain-based processing'],
    signal_tags: [],
};

const bakeryQuestions: QuestionDefinition[] = [
    // RISK (P1) - Bakery Specific
    {
        qid: 'BAKERY_QS_RISK_1',
        pillar: 'Risk',
        textA: 'We schedule production in a way that naturally reduces allergen changeovers',
        textB: 'We manage allergen changeovers through a defined cleaning and verification routine',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BAKERY_QS_RISK_2',
        pillar: 'Risk',
        textA: 'Label and date coding are verified on the first packs after every changeover',
        textB: 'Label and date coding are verified through in-process checks and QA release rules',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BAKERY_QS_RISK_3',
        pillar: 'Risk',
        textA: 'Rework is controlled with clear age/traceability rules',
        textB: 'Rework is controlled with QA oversight and batch documentation',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BAKERY_QS_RISK_4',
        pillar: 'Risk',
        textA: 'The cooling/slicing/packing zone has specific hygiene rules and checks',
        textB: 'The cooling/slicing/packing zone is managed through sanitation frequency and supervision',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },

    // OPERATIONS (P5) - Bakery Specific
    {
        qid: 'BAKERY_QS_OPS_1',
        pillar: 'Operations',
        textA: 'We control finished weight through daily averaging and quick adjustments',
        textB: 'We control finished weight through calibrated equipment and QA checks',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BAKERY_QS_OPS_2',
        pillar: 'Operations',
        textA: 'Proofing and bake targets are managed using defined ranges and escalation actions',
        textB: 'Proofing and bake targets are managed through skilled operators and supervision',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BAKERY_QS_OPS_3',
        pillar: 'Operations',
        textA: 'Changeovers are reduced through staging and standard steps',
        textB: 'Changeovers are reduced through scheduling and experienced crews',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BAKERY_QS_OPS_4',
        pillar: 'Operations',
        textA: 'Returns and staling are reduced through packaging integrity and distribution timing',
        textB: 'Returns and staling are reduced through production planning and shelf-life monitoring',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    }
];

export const questions: QuestionDefinition[] = [
    ...bakeryQuestions,
    ...sharedQuestions
];
