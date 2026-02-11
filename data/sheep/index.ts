
import { QUESTIONS } from './questions';
import { STRENGTH_COPY, WEAKNESS_COPY, KPI_COPY } from './library';
import { ACTIONS } from './actions';

export const SHEEP_PACK = {
    id: 'sheep',
    industryId: 'agriculture',
    questions: QUESTIONS,
    library: {
        strengths: STRENGTH_COPY,
        weaknesses: WEAKNESS_COPY,
        kpis: KPI_COPY
    },
    actions: ACTIONS
};
