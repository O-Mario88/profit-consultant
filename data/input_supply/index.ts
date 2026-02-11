import { IndustryPack } from '../../types';
import { INPUT_SUPPLY_LIBRARY } from './library';
import { INPUT_SUPPLY_QUESTIONS } from './questions';
import { INPUT_SUPPLY_ACTIONS } from './actions';

export const INPUT_SUPPLY_PACK: IndustryPack = {
    id: 'input_supply',
    name: 'Agricultural Input Supplier',
    description: 'Pack for suppliers of seeds, fertilizers, chemicals, and vet supplies.',
    library: INPUT_SUPPLY_LIBRARY,
    questions: INPUT_SUPPLY_QUESTIONS,
    actions: INPUT_SUPPLY_ACTIONS
};
