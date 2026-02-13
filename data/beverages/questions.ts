import { QuestionDefinition } from '../../types';
import { questions as fnbQuestions } from '../fnb/questions';

// Filter F&B questions for shared pillars
const sharedPillars = ['Innovation', 'Market', 'Leadership', 'Money', 'People'];
const sharedQuestions = fnbQuestions.filter(q => sharedPillars.includes(q.pillar));

const defaultProps = {
    line_type: ['Beverages (juice, soda, water)'],
    signal_tags: [],
};

const beverageQuestions: QuestionDefinition[] = [
    // RISK (P1) - Beverage Specific
    {
        qid: 'BEVERAGE_QS_RISK_1',
        pillar: 'Risk',
        textA: 'CIP (Cleaning in Place) is verified by chemical concentration checks and cycle times every run',
        textB: 'CIP is verified by operator sign-offs and visual checks',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BEVERAGE_QS_RISK_2',
        pillar: 'Risk',
        textA: 'Water treatment quality is monitored with continuous in-line sensors',
        textB: 'Water quality is monitored through daily/shift manual sampling',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BEVERAGE_QS_RISK_3',
        pillar: 'Risk',
        textA: 'The filler zone is a restricted hygiene area with specific entry rules',
        textB: 'The filler zone is managed like the rest of the packing hall',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BEVERAGE_QS_RISK_4',
        pillar: 'Risk',
        textA: 'Bottle/Preform rinsing is validated with pressure/flow checks',
        textB: 'Bottle rinsing is checked visually during startup',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },

    // OPERATIONS (P5) - Beverage Specific
    {
        qid: 'BEVERAGE_QS_OPS_1',
        pillar: 'Operations',
        textA: 'Fill levels are controlled by automated rejection systems',
        textB: 'Fill levels are controlled by manual weight/volume checks',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BEVERAGE_QS_OPS_2',
        pillar: 'Operations',
        textA: 'Downtime is tracked automatically (from PLC/Sensors) to capture micro-stops',
        textB: 'Downtime is tracked manually by operators on log sheets',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BEVERAGE_QS_OPS_3',
        pillar: 'Operations',
        textA: 'Changeovers (flavor/size) follow a "pit stop" standard',
        textB: 'Changeovers are managed by the experience of the shift team',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    },
    {
        qid: 'BEVERAGE_QS_OPS_4',
        pillar: 'Operations',
        textA: 'Syrup/Dosing accuracy is verified per batch before filling',
        textB: 'Syrup/Dosing is checked via finished product tasting',
        weight: 1,
        industry: 'manufacturing',
        ...defaultProps
    }
];

export const questions: QuestionDefinition[] = [
    ...beverageQuestions,
    ...sharedQuestions
];
