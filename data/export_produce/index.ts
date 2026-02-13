
import { EXPORT_PRODUCE_QUESTIONS } from './questions';
import { EXPORT_PRODUCE_LIBRARY } from './library';
import { EXPORT_PRODUCE_ACTIONS, EXPORT_PRODUCE_FIX_PLANS } from './actions';

export const EXPORT_PRODUCE_PACK = {
    questions: EXPORT_PRODUCE_QUESTIONS,
    library: EXPORT_PRODUCE_LIBRARY,
    actions: {
        snippets: EXPORT_PRODUCE_ACTIONS,
        fixPlans: EXPORT_PRODUCE_FIX_PLANS
    }
};

export * from './questions';
export * from './library';
export * from './actions';
