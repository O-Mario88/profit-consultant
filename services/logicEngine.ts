
import { Archetype, PillarScores } from "../types";

/**
 * Spec 6.2.1: Scoring Model
 * Normalizes raw answers (1-7 scale) into 0-100 pillar scores.
 * 
 * @param rawAnswers Map of QuestionID -> AnswerValue (1-7)
 * @param questionMap Map of QuestionID -> { pillar: string, isSwapped: boolean }
 */
export const calculatePillarScores = (
  rawAnswers: Record<string, number>,
  questionMap: Record<string, { pillar: string; isSwapped: boolean }>
): PillarScores => {
  const scores: Record<string, number> = { Operations: 0, Money: 0, Market: 0, Leadership: 0, Innovation: 0, Risk: 0, People: 0 };
  const counts: Record<string, number> = { Operations: 0, Money: 0, Market: 0, Leadership: 0, Innovation: 0, Risk: 0, People: 0 };

  Object.entries(rawAnswers).forEach(([qId, val]) => {
    const q = questionMap[qId];
    if (!q) return;

    let normalizedScore = 0;
    // If not swapped: A(1) = 0%, B(7) = 100%
    // If swapped: A(1) = 100%, B(7) = 0%
    if (!q.isSwapped) {
      normalizedScore = (val - 1) * (100 / 6);
    } else {
      normalizedScore = 100 - ((val - 1) * (100 / 6));
    }

    if (scores[q.pillar] !== undefined) {
      scores[q.pillar] += normalizedScore;
      counts[q.pillar]++;
    }
  });

  // Calculate Average
  const finalScores: any = {};
  Object.keys(scores).forEach(key => {
    finalScores[key.toLowerCase()] = counts[key] > 0 ? Math.round(scores[key] / counts[key]) : 0;
  });

  return finalScores as PillarScores;
};

/**
 * Spec 6.2.3: Archetype Assignment
 * Deterministic assignment based on Heat vs Wallet scores.
 */
export const determineArchetype = (scores: PillarScores): Archetype => {
  // "Heart" Pillars: Market, Leadership, Innovation, People
  const heartScore = (scores.market + scores.leadership + scores.innovation + scores.people) / 4;

  // "Wallet" Pillars: Operations, Money, Risk
  const walletScore = (scores.operations + scores.money + scores.risk) / 3;

  const THRESHOLD = 50;

  if (heartScore >= THRESHOLD && walletScore >= THRESHOLD) return 'The Sovereign';
  if (heartScore >= THRESHOLD && walletScore < THRESHOLD) return 'The Uncrowned King';
  if (heartScore < THRESHOLD && walletScore >= THRESHOLD) return 'The Iron General';
  return 'The Hidden Gem';
};

/**
 * Spec 6.2.2: Driver Extraction
 * Identifies specific "Why" behind the score.
 */
export const extractDrivers = (
  rawAnswers: Record<string, number>,
  driverMap: Record<string, string> // QuestionID -> DriverTag
): string[] => {
  const detectedDrivers: string[] = [];

  // Simple logic: if answer is extreme (1-2 or 6-7) towards risk, flag the driver
  Object.entries(rawAnswers).forEach(([qId, val]) => {
    const driver = driverMap[qId];
    if (!driver) return;

    // Assuming high/low values indicate strong preference/risk depending on question orientation
    // For demo, we just check if it's extreme
    if (val <= 2 || val >= 6) {
      if (!detectedDrivers.includes(driver)) {
        detectedDrivers.push(driver);
      }
    }
  });

  return detectedDrivers;
};
