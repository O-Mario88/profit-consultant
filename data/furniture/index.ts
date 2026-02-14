
import { questions } from './questions';
import { FURNITURE_LIBRARY, FURNITURE_MISSION_BRIEFS } from './library';
import { FURNITURE_ACTIONS } from './actions';

export const FURNITURE_PACK = {
  questions,
  library: [...FURNITURE_LIBRARY, ...FURNITURE_MISSION_BRIEFS],
  actions: FURNITURE_ACTIONS
};
