import { QuestionDefinition } from '../../types';

const defaultProps = {
    line_type: ['Meat processing'],
    signal_tags: [],
    industry: 'butchery' // Custom industry tag for local differentiation
};

export const questions: QuestionDefinition[] = [
    // P1: Food Safety & Trust
    {
        qid: 'BUTCHERY_QS_RISK_1',
        pillar: 'Risk',
        textA: 'We verify temps at each handoff with action rules',
        textB: 'We rely on equipment + experience',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_RISK_2',
        pillar: 'Risk',
        textA: 'Tools are dedicated by product group',
        textB: 'Tools are shared but cleaned often',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_RISK_3',
        pillar: 'Risk',
        textA: 'Label checks are gated at first-pack',
        textB: 'Labels are checked "during the run"',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_RISK_4',
        pillar: 'Risk',
        textA: 'Traceability is tested with drills',
        textB: 'Traceability is assumed until needed',
        weight: 1,
        ...defaultProps
    },

    // P2: Offer & Merchandising
    {
        qid: 'BUTCHERY_QS_INNOVATION_1',
        pillar: 'Innovation',
        textA: 'We manage SKUs by contribution',
        textB: 'We keep broad variety for everyone',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_INNOVATION_2',
        pillar: 'Innovation',
        textA: 'We sell bundles intentionally',
        textB: 'Bundles happen only when asked',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_INNOVATION_3',
        pillar: 'Innovation',
        textA: 'Portion specs are standardized',
        textB: 'Portions depend on cutter judgment',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_INNOVATION_4',
        pillar: 'Innovation',
        textA: 'Display is optimized for turnover',
        textB: 'Display is optimized for fullness',
        weight: 1,
        ...defaultProps
    },

    // P3: Demand & Local Growth
    {
        qid: 'BUTCHERY_QS_MARKET_1',
        pillar: 'Market',
        textA: 'We run planned promos tied to demand peaks',
        textB: 'Promos happen when sales slow',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_MARKET_2',
        pillar: 'Market',
        textA: 'We track customer sources',
        textB: 'We assume "word of mouth"',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_MARKET_3',
        pillar: 'Market',
        textA: 'We manage reviews actively',
        textB: 'Reviews are ignored unless bad',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_MARKET_4',
        pillar: 'Market',
        textA: 'We build repeat buying systems',
        textB: 'We rely on walk-in traffic',
        weight: 1,
        ...defaultProps
    },

    // P4: Pricing & Sales System
    {
        qid: 'BUTCHERY_QS_LEADERSHIP_1',
        pillar: 'Leadership',
        textA: 'We price by category margin rules',
        textB: 'We use one markup for everything',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_LEADERSHIP_2',
        pillar: 'Leadership',
        textA: 'Discounts follow rules',
        textB: 'Discounts are negotiated freely',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_LEADERSHIP_3',
        pillar: 'Leadership',
        textA: 'Bundles drive margin',
        textB: 'Bundles are occasional',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_LEADERSHIP_4',
        pillar: 'Leadership',
        textA: 'We track margin per SKU',
        textB: 'We track revenue only',
        weight: 1,
        ...defaultProps
    },

    // P5: Operations & Yield
    {
        qid: 'BUTCHERY_QS_OPS_1',
        pillar: 'Operations',
        textA: 'Yield is measured by cut',
        textB: 'Yield is assumed stable',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_OPS_2',
        pillar: 'Operations',
        textA: 'Giveaway is tracked daily',
        textB: 'Giveaway is accepted as goodwill',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_OPS_3',
        pillar: 'Operations',
        textA: 'Shrink has reason codes + actions',
        textB: 'Shrink is one total number',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_OPS_4',
        pillar: 'Operations',
        textA: 'Production timing matches demand',
        textB: 'We cut early then discount',
        weight: 1,
        ...defaultProps
    },

    // P6: Finance & Control
    {
        qid: 'BUTCHERY_QS_MONEY_1',
        pillar: 'Money',
        textA: 'We track margin weekly',
        textB: 'We track sales only',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_MONEY_2',
        pillar: 'Money',
        textA: 'Losses are priced daily',
        textB: 'Losses are "just waste"',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_MONEY_3',
        pillar: 'Money',
        textA: 'Inventory aging is visible',
        textB: 'Aging is discovered late',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_MONEY_4',
        pillar: 'Money',
        textA: 'We have a weekly finance rhythm',
        textB: 'Finance is reviewed irregularly',
        weight: 1,
        ...defaultProps
    },

    // P7: People & Culture
    {
        qid: 'BUTCHERY_QS_PEOPLE_1',
        pillar: 'People',
        textA: 'Standards are audited weekly',
        textB: 'Standards exist but drift',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_PEOPLE_2',
        pillar: 'People',
        textA: 'Onboarding is structured',
        textB: 'Onboarding is shadowing only',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_PEOPLE_3',
        pillar: 'People',
        textA: 'Roles are clear',
        textB: 'Everyone does everything',
        weight: 1,
        ...defaultProps
    },
    {
        qid: 'BUTCHERY_QS_PEOPLE_4',
        pillar: 'People',
        textA: 'Coaching is routine',
        textB: 'Coaching happens after mistakes',
        weight: 1,
        ...defaultProps
    }
];
