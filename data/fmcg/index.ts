import { FMCG_PILLARS, FMCG_MISSION_BRIEFS } from "./library";
import { questions } from "./questions";
import { FMCG_ACTIONS } from "./actions";

export const FMCG_PACK = {
  questions, // QS and DS questions
  library: FMCG_PILLARS, // Pillars, Strengths, Weaknesses, KPIs, Actions
  actions: FMCG_ACTIONS, // Fix Plans
  mission_briefs: FMCG_MISSION_BRIEFS // Mission Briefs
};
