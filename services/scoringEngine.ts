import { QuestionDefinition, SignalTag, PillarId } from '../types';
import { PRIORITY_WEIGHTS } from '../data/priorityWeights';

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
    topStrength?: SignalTag[];
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

// Species Weighting Matrix for Produce Aggregation
export const SPECIES_WEIGHTS: Record<string, Record<PillarId, number>> = {
    'Farmgate Aggregator (Local)': { Operations: 1.2, Money: 1.1, People: 1.1, Market: 1.0, Risk: 0.9, Leadership: 1.0, Innovation: 1.0 },
    'Wholesale Market Trader': { Market: 1.2, Operations: 1.1, Money: 1.1, People: 1.0, Risk: 0.9, Leadership: 1.0, Innovation: 1.0 },
    'Institutional Supplier': { Market: 1.2, Risk: 1.2, Operations: 1.1, Money: 1.1, People: 1.0, Leadership: 1.0, Innovation: 1.0 },
    'Exporter / Cross-border Trader': { Risk: 1.3, Operations: 1.2, Market: 1.2, Money: 1.1, People: 1.0, Leadership: 1.0, Innovation: 1.0 },
    'Digital Broker / Agent': { Market: 1.3, Risk: 1.2, Leadership: 1.1, Operations: 1.0, Money: 1.0, People: 1.0, Innovation: 1.0 },
    'Warehouse + Bulking Hub': { Operations: 1.3, People: 1.1, Risk: 1.1, Money: 1.0, Market: 1.0, Leadership: 1.0, Innovation: 1.0 }
};

export const calculateSignalScores = (
    answers: Record<string, number>, // qid -> answerIndex (0-4)
    questions: QuestionDefinition[],
    species?: string,
    priority?: string
): { pillarResults: Record<PillarId, PillarResult>, signalScores: SignalScore[] } => {

    const pillarTotals: Record<string, { raw: number, min: number, max: number }> = {};
    const leakMap: Record<string, { score: number, count: number }> = {};
    const strengthMap: Record<string, { score: number, count: number }> = {};

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

        // Apply Species Weighting if applicable
        let signalMultiplier = 1.0;
        if (species && SPECIES_WEIGHTS[species] && SPECIES_WEIGHTS[species][question.pillar]) {
            signalMultiplier *= SPECIES_WEIGHTS[species][question.pillar];
        }

        // Apply Priority Weighting if applicable
        if (priority && PRIORITY_WEIGHTS[priority] && PRIORITY_WEIGHTS[priority][question.pillar]) {
            signalMultiplier *= PRIORITY_WEIGHTS[priority][question.pillar];
        }

        // LEAKS (Negative Values)
        if (value < 0) {
            question.signal_tags.forEach(tag => {
                if (!leakMap[tag]) leakMap[tag] = { score: 0, count: 0 };
                leakMap[tag].score += (Math.abs(weightedValue) * signalMultiplier);
                leakMap[tag].count += 1;
            });
        }
        // STRENGTHS (Positive Values)
        else if (value > 0) {
            question.signal_tags.forEach(tag => {
                if (!strengthMap[tag]) strengthMap[tag] = { score: 0, count: 0 };
                strengthMap[tag].score += (weightedValue * signalMultiplier);
                strengthMap[tag].count += 1;
            });
        }
    });

    // Finalize Pillar Results
    const pillarResults = {} as Record<PillarId, PillarResult>;
    Object.keys(pillarTotals).forEach(pKey => {
        const p = pKey as PillarId;
        const { raw, min, max } = pillarTotals[p];
        const score = normalizeScore(raw, min, max);
        const band = getStatusBand(score);

        // Find available tags for this pillar
        const pillarSignals = questions
            .filter(q => q.pillar === p)
            .flatMap(q => q.signal_tags)
            .filter((tag, i, arr) => arr.indexOf(tag) === i); // Unique

        // Top Leaks
        const topSignals = pillarSignals
            .filter(t => leakMap[t])
            .sort((a, b) => leakMap[b].score - leakMap[a].score)
            .slice(0, 3);

        // Top Strength
        const topStrength = pillarSignals
            .filter(t => strengthMap[t])
            .sort((a, b) => strengthMap[b].score - strengthMap[a].score)
            .slice(0, 1);

        pillarResults[p] = {
            pillar: p,
            score,
            band,
            topSignals,
            // @ts-ignore - Create extended property if needed or just access via type assertion in reportEngine
            topStrength: topStrength
        };
    });

    // Convert Signal Map to Array (Leaks for now as primary output)
    const signalScores = Object.entries(leakMap)
        .map(([tag, data]) => ({ tag: tag as SignalTag, score: data.score, count: data.count }))
        .sort((a, b) => b.score - a.score);

    return { pillarResults, signalScores };
};
