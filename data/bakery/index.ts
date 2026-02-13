import { IndustryPack } from '../../types';
import { questions } from './questions';
import { library } from './library';
import { actions } from './actions';

export const BAKERY_PACK: IndustryPack = {
    id: 'bakery_manufacturing',
    name: 'Bakery & Grain Processing',
    description: 'Profit control for bakeries: yield, giveaway, allergen safety, and shelf-life.',
    questions,
    library,
    actions
};
