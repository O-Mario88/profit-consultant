import { IndustryPack } from '../../types';
import { CROP_FARMING_LIBRARY } from './library';
import { CROP_FARMING_QUESTIONS } from './questions';
import { CROP_FARMING_ACTIONS } from './actions';

export const CROP_FARMING_PACK: IndustryPack = {
    id: 'crop_farming',
    name: 'Crop Farming (Grains, Legumes, Agronomy)',
    description: 'Specialized for Grains, Legumes, Horticulture & Cash Crops.',
    library: CROP_FARMING_LIBRARY,
    questions: CROP_FARMING_QUESTIONS,
    actions: CROP_FARMING_ACTIONS
};
