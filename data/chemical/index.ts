
import { questions } from './questions';
import { library } from './library';
import { actions } from './actions';

export const CHEMICAL_PACK = {
    questions,
    library,
    actions: Object.values(actions)
};
