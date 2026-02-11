import { IndustryPack } from '../../types';
import { LIBRARY } from './library';
import { QUESTIONS } from './questions';
import { ACTIONS } from './actions';

export const FISHERIES_PACK: IndustryPack = {
    id: 'fisheries',
    industry: 'agriculture',
    line_type: 'fisheries',
    library: LIBRARY,
    questions: QUESTIONS,
    actions: ACTIONS
};
