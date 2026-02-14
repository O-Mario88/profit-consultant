
import { calculatePillarDepths, generateMasterPromptV3 } from '../services/textGen.ts';
import { PRIORITY_BOOSTS } from '../data/priorityWeights.ts';
import { BASE_ROLE_WEIGHTS } from '../data/roleWeights.ts';

console.log("=== MASTER PROMPT V3 LOGIC TEST ===\n");

// Test Case 1: CEO with Cash Flow Priority
const case1 = {
    industry: 'Manufacturing',
    subIndustry: 'Automotive Parts',
    responderTitle: 'CEO',
    priority: 'Increase capital / cashflow'
};

console.log(`\nTEST CASE 1: ${case1.responderTitle} - ${case1.priority}`);
const depths1 = calculatePillarDepths(case1.responderTitle, case1.priority);
console.log("Calculated Depths:", JSON.stringify(depths1, null, 2));

// Verify Boosts logic manually
const roleWeights = BASE_ROLE_WEIGHTS['Executive']; // CEO -> Executive
const priorityBoosts = PRIORITY_BOOSTS[case1.priority];
console.log("Base Weights (Executive):", roleWeights);
console.log("Priority Boosts:", priorityBoosts);

// Check if Money (Fuel) got boosted
// Executive Base: Money=5. Boost: Money=3. Total=8.
// Executive Base: Leadership=5. Boost: Leadership=0. Total=5.
// Executive Base: Operations=3. Boost: Operations=1. Total=4.

console.log("\n--------------------------------------------------\n");

// Test Case 2: Plant Manager with OTIF Priority
const case2 = {
    industry: 'Manufacturing',
    subIndustry: 'Food Processing',
    responderTitle: 'Plant Manager',
    priority: 'Improve on-time delivery (OTIF) / shorten lead time'
};

console.log(`\nTEST CASE 2: ${case2.responderTitle} - ${case2.priority}`);
const depths2 = calculatePillarDepths(case2.responderTitle, case2.priority);
console.log("Calculated Depths:", JSON.stringify(depths2, null, 2));

// Plant Manager -> Operations Family
// Base: Ops=5, Market=1, Money=3...
// Priority Boosts: P5(Ops)=3, P6(Risk/Supply)=2, P3(Market)=2...

console.log("\n--------------------------------------------------\n");

// Test Case 3: Prompt Generation Output
console.log(`\nTEST CASE 3: Full Prompt Generation`);
const prompt = generateMasterPromptV3({
    ...case1,
    size: 'Mid-Market ($50M)',
    region: 'North America',
    complianceMode: 'Standard'
});

console.log("Generated Prompt Snippet (First 500 chars):");
console.log(prompt.substring(0, 500));
console.log("...");
console.log("Check for Depth Block:");
const depthBlock = prompt.match(/3\) THE 7 PILLARS & DISPLAY DEPTH([\s\S]*?)4\)/);
console.log(depthBlock ? depthBlock[1].trim() : "BLOCK NOT FOUND");
