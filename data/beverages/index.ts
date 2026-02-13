import { IndustryPack } from '../../types';
import { questions } from './questions';
import { library } from './library';
import { actions } from './actions';

export const BEVERAGES_PACK: IndustryPack = {
    id: 'beverages_manufacturing',
    name: 'Beverages & Bottling',
    description: 'Profit control for bottlers: fill levels, CIP safety, downtime, and water quality.',
    questions,
    library,
    actions
};
