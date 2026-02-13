
import { IndustryPack } from '../../types';
import { questions } from './questions';
import { library } from './library';
import { actions } from './actions';

export const MINING_SERVICES_PACK: IndustryPack = {
    id: 'mining_services',
    name: 'Mining Services & Supplies',
    description: 'Proactive compliance, offer differentiation, and commercial discipline for mining contractors and suppliers.',
    questions,
    library,
    actions
};
