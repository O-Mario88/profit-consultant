import { QUESTIONS } from './questions';
import { ASSEMBLY_LIBRARY, ASSEMBLY_MISSION_BRIEFS } from './library';
import { ASSEMBLY_ACTIONS } from './actions';

export const ASSEMBLY_PACK = {
  questions: QUESTIONS,
  library: [...ASSEMBLY_LIBRARY, ...ASSEMBLY_MISSION_BRIEFS],
  actions: ASSEMBLY_ACTIONS
};

export * from './reportHelpers';
