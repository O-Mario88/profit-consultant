import { IndustryPack } from '../../types';
import { BEEKEEPING_LIBRARY } from './library';
import { BEEKEEPING_QUESTIONS } from './questions';
import { BEEKEEPING_ACTIONS } from './actions';

export const BEEKEEPING_PACK: IndustryPack = {
    id: 'beekeeping',
    name: 'Beekeeping & Apiculture',
    library: BEEKEEPING_LIBRARY,
    questions: BEEKEEPING_QUESTIONS,
    actions: BEEKEEPING_ACTIONS
};
