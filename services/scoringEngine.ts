import { QuestionDefinition, SignalTag, PillarId } from '../types';

export interface SignalScore {
    tag: SignalTag;
    score: number; // Aggregate "Leak" score
    count: number;
}

export interface PillarResult {
    pillar: PillarId;
    score: number; // 0-100 normalized
    band: 'Emergency' | 'Critical' | 'Watch' | 'Stable';
    topSignals: SignalTag[]; // Top 3 strongest signals (negative impact)
}

// 5-Point Scale Map
const ANSWER_VALUES: Record<number, number> = {
    0: -2, // Strong A (Leak)
    1: -1, // Lean A
    2: 0,  // Neutral
    3: 1,  // Lean B
    4: 2   // Strong B (Control)
};

export const normalizeScore = (raw: number, min: number, max: number): number => {
    if (max === min) return 50;
    const norm = ((raw - min) / (max - min)) * 100;
    return Math.round(Math.max(0, Math.min(100, norm)));
};

export const getStatusBand = (score: number): 'Emergency' | 'Critical' | 'Watch' | 'Stable' => {
    if (score <= 34) return 'Emergency';
    if (score <= 54) return 'Critical';
    if (score <= 69) return 'Watch';
    return 'Stable';
};

export const calculateSignalScores = (
    answers: Record<string, number>, // qid -> answerIndex (0-4)
    questions: QuestionDefinition[]
): { pillarResults: Record<PillarId, PillarResult>, signalScores: SignalScore[] } => {

    const pillarTotals: Record<string, { raw: number, min: number, max: number }> = {};
    const signalMap: Record<string, { score: number, count: number }> = {};

    // Initialize
    questions.forEach(q => {
        if (!pillarTotals[q.pillar]) {
            pillarTotals[q.pillar] = { raw: 0, min: 0, max: 0 };
        }
        // Calculate theoretical min/max for normalization
        pillarTotals[q.pillar].min += (q.weight * -2);
        pillarTotals[q.pillar].max += (q.weight * 2);
    });

    // Process Answers
    Object.entries(answers).forEach(([qid, ansIdx]) => {
        const question = questions.find(q => q.qid === qid);
        if (!question) return;

        const value = ANSWER_VALUES[ansIdx] || 0;
        const weightedValue = value * question.weight;

        // Pillar Accumulation
        pillarTotals[question.pillar].raw += weightedValue;

        // Signal Accumulation
        // We only care about "Leak" signals (negative values) for the report
        if (value < 0) {
            question.signal_tags.forEach(tag => {
                if (!signalMap[tag]) signalMap[tag] = { score: 0, count: 0 };
                signalMap[tag].score += Math.abs(weightedValue); // Track magnitude of leak
                signalMap[tag].count += 1;
            });
        }
    });

    // Finalize Pillar Results
    const pillarResults = {} as Record<PillarId, PillarResult>;
    Object.keys(pillarTotals).forEach(pKey => {
        const p = pKey as PillarId;
        const { raw, min, max } = pillarTotals[p];
        const score = normalizeScore(raw, min, max);

        // Find top signals for this pillar
        const pillarSignals = questions
            .filter(q => q.pillar === p)
            .flatMap(q => q.signal_tags)
            .filter((tag, i, arr) => arr.indexOf(tag) === i); // Unique

        const topSignals = pillarSignals
            .filter(t => signalMap[t])
            .sort((a, b) => signalMap[b].score - signalMap[a].score)
            .slice(0, 3);

        pillarResults[p] = {
            pillar: p,
            score,
            band: getStatusBand(score),
            topSignals
        };
    });

    // Convert Signal Map to Array
    const signalScores = Object.entries(signalMap)
        .map(([tag, data]) => ({ tag: tag as SignalTag, score: data.score, count: data.count }))
        .sort((a, b) => b.score - a.score);

    return { pillarResults, signalScores };
};
