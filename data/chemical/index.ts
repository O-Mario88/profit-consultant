import { QUESTIONS } from './questions';
import { CHEMICAL_LIBRARY, CHEMICAL_MISSION_BRIEFS } from './library';
import { CHEMICAL_ACTIONS } from './actions';

export const CHEMICAL_PACK = {
    questions: QUESTIONS,
    library: [...CHEMICAL_LIBRARY, ...CHEMICAL_MISSION_BRIEFS],
    actions: CHEMICAL_ACTIONS
};
