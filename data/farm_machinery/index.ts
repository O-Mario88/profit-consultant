import { IndustryPack } from '../../types';
import { FARM_MACHINERY_LIBRARY } from './library';
import { FARM_MACHINERY_QUESTIONS } from './questions';
import { FARM_MACHINERY_ACTIONS } from './actions';

export const FARM_MACHINERY_PACK: IndustryPack = {
    id: 'farm_machinery',
    name: 'Farm Machinery & Services',
    description: 'Contractors, Dealers, Service Shops, Fleets.',
    library: FARM_MACHINERY_LIBRARY,
    questions: FARM_MACHINERY_QUESTIONS,
    actions: FARM_MACHINERY_ACTIONS
};
