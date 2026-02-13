
import { PRODUCE_AGGREGATION_QUESTIONS } from './questions';
import { PRODUCE_AGGREGATION_LIBRARY } from './library';
import { PRODUCE_AGGREGATION_ACTIONS, PRODUCE_AGGREGATION_FIX_PLANS } from './actions';
import { IndustryPack } from '../../types';

export const PRODUCE_AGGREGATION_PACK: IndustryPack = {
    questions: PRODUCE_AGGREGATION_QUESTIONS,
    library: PRODUCE_AGGREGATION_LIBRARY,
    actions: {
        snippets: PRODUCE_AGGREGATION_ACTIONS,
        fixPlans: PRODUCE_AGGREGATION_FIX_PLANS
    }
};

export * from './questions';
export * from './library';
export * from './actions';
