import { IndustryPack } from '../../types';
import { FORESTRY_LIBRARY } from './library';
import { FORESTRY_QUESTIONS } from './questions';
import { FORESTRY_ACTIONS } from './actions';

export const FORESTRY_PACK: IndustryPack = {
    id: 'forestry',
    name: 'Forestry & Timber Production',
    description: 'Specialized pack for forest management, logging, sawmilling, and timber trade.',
    library: FORESTRY_LIBRARY,
    questions: FORESTRY_QUESTIONS,
    actions: FORESTRY_ACTIONS
};
