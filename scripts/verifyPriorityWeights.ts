
import { calculateSignalScores } from '../services/scoringEngine';
import { QuestionDefinition } from '../types';

// Mock Questions
const mockQuestions: QuestionDefinition[] = [
    { qid: 'q1', textA: 'A', textB: 'B', pillar: 'Operations', weight: 1, signal_tags: [], line_type: ['all'] },
    { qid: 'q2', textA: 'A', textB: 'B', pillar: 'Money', weight: 1, signal_tags: [], line_type: ['all'] },
    { qid: 'q3', textA: 'A', textB: 'B', pillar: 'Market', weight: 1, signal_tags: [], line_type: ['all'] },
];

// Mock Answers (All "Strong Leak" = -2 raw value)
const answers = {
    'q1': 0, // Operations Leak
    'q2': 0, // Money Leak
    'q3': 0  // Market Leak
};

// Test Case 1: No Priority
console.log("--- TEST 1: No Priority ---");
const result1 = calculateSignalScores(answers, mockQuestions);
console.log("Operations Score:", result1.signalScores.length); // Checking signals essentially
// We actually want to check the LEAK SCORE accumulation in the logic, 
// but calculateSignalScores returns normalized 0-100 scores.
// Let's verify via the leak map accumulation logic which isn't directly exposed 
// BUT we can infer it if we had signals. 
// Actually, let's look at the implementation:
// leakMap[tag].score += (Math.abs(weightedValue) * signalMultiplier);
// So if we have tags, we can see the score difference.

const mockQuestionsWithTags: QuestionDefinition[] = [
    { qid: 'q1', textA: 'A', textB: 'B', pillar: 'Operations', weight: 10, signal_tags: ['tag_ops'], line_type: ['all'] },
    { qid: 'q2', textA: 'A', textB: 'B', pillar: 'Money', weight: 10, signal_tags: ['tag_money'], line_type: ['all'] },
];

const answersWithTags = {
    'q1': 0, // Strong Leak (-2 * 10 = -20)
    'q2': 0  // Strong Leak (-2 * 10 = -20)
};

const resNoPriority = calculateSignalScores(answersWithTags, mockQuestionsWithTags);
console.log("No Priority - Tag Ops Score:", resNoPriority.signalScores.find(s => s.tag === 'tag_ops')?.score);
console.log("No Priority - Tag Money Score:", resNoPriority.signalScores.find(s => s.tag === 'tag_money')?.score);

// Test Case 2: "Reduce costs" (Ops 1.2, Money 1.2)
// 'Reduce costs / cut operating expenses': { Operations: 1.2, Money: 1.2, ... }
console.log("\n--- TEST 2: Reduce Costs ---");
const resCosts = calculateSignalScores(answersWithTags, mockQuestionsWithTags, undefined, 'Reduce costs / cut operating expenses');
console.log("Reduce Costs - Tag Ops Score:", resCosts.signalScores.find(s => s.tag === 'tag_ops')?.score);
console.log("Reduce Costs - Tag Money Score:", resCosts.signalScores.find(s => s.tag === 'tag_money')?.score);

// Test Case 3: "Improve market share" (Market 1.2, Money 1.2, Operations 1.2(conditional but listed))
// Let's try one with different weights.
// 'Reduce waste / scrap / rework': { Operations: 1.2, Money: 1.2, Market: 1.0 ... }
console.log("\n--- TEST 3: Reduce Waste ---");
const resWaste = calculateSignalScores(answersWithTags, mockQuestionsWithTags, undefined, 'Reduce waste / scrap / rework');
console.log("Reduce Waste - Tag Ops Score:", resWaste.signalScores.find(s => s.tag === 'tag_ops')?.score);
