import { IndustryPack } from '../../types';
import { CATTLE_LIBRARY } from './library';
import { CATTLE_QUESTIONS } from './questions';
import { CATTLE_ACTIONS } from './actions';

export const CATTLE_PACK: IndustryPack = {
    id: 'cattle',
    name: 'Cattle (Beef / Fattening)',
    description: 'Specialized pack for beef, cow-calf, and fattening operations.',
    library: CATTLE_LIBRARY,
    questions: CATTLE_QUESTIONS,
    actions: CATTLE_ACTIONS
};
