import { PillarScores, Archetype, LeakIndices } from "../types";
import { PillarStatus } from "../data/missionBriefLibrary";
import { PillarResult } from "./scoringEngine";

// Helper: Map System Score to Risk Band
export const getRiskProfile = (systemScore: number): { riskScore: number, band: PillarStatus } => {
    const riskScore = 100 - systemScore;
    let band: PillarStatus;

    if (riskScore <= 29) band = 'Controlled';
    else if (riskScore <= 49) band = 'Controlled';
    else if (riskScore <= 69) band = 'Bottleneck Forming';
    else band = 'Profit Leak';

    // Override for Lever (High Score)
    if (systemScore >= 70) band = 'Profit Lever';
    else if (systemScore <= 29) band = 'Profit Leak';
    else if (systemScore <= 44) band = 'Bottleneck Forming';
    else band = 'Controlled';

    return { riskScore, band };
};

export const calculateLeakIndices = (scores: PillarScores): LeakIndices => {
    const timeLeak = Math.round(
        (100 - scores.operations) * 0.5 +
        (100 - scores.people) * 0.3 +
        (100 - scores.leadership) * 0.2
    );

    const cashLeak = Math.round(
        (100 - scores.money) * 0.55 +
        (100 - scores.market) * 0.35 +
        (100 - scores.innovation) * 0.10
    );

    const riskExposure = Math.round(
        (100 - scores.risk) * 0.7 +
        (100 - scores.people) * 0.2 +
        (100 - scores.money) * 0.1
    );

    return { timeLeak, cashLeak, riskExposure };
};

export const calculateCostBand = (score: number, leakIndex: number): { level: 'Low' | 'Medium' | 'High', label: string } => {
    let level: 'Low' | 'Medium' | 'High' = 'Low';
    if (leakIndex > 60) level = 'High';
    else if (leakIndex > 30) level = 'Medium';
    return { level, label: 'Estimated Impact' };
};

export const deriveSignalArchetype = (pillarResults: Record<string, PillarResult>): Archetype => {
    const score = (pillar: string) => pillarResults[pillar]?.score ?? 50;
    const heartScore = (score('Market') + score('Leadership') + score('Innovation') + score('People')) / 4;
    const walletScore = (score('Operations') + score('Money') + score('Risk')) / 3;
    const THRESHOLD = 50;

    if (heartScore >= THRESHOLD && walletScore >= THRESHOLD) return 'The Sovereign';
    if (heartScore >= THRESHOLD && walletScore < THRESHOLD) return 'The Uncrowned King';
    if (heartScore < THRESHOLD && walletScore >= THRESHOLD) return 'The Iron General';
    return 'The Storm Survivor';
};
