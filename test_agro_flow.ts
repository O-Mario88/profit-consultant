
import { generateSignalBasedReport } from './services/reportEngine';
import { generateFixPlan } from './services/fixEngine';
import { BusinessProfile } from './types';

const mockProfile: BusinessProfile = {
    businessName: 'Test Agro Corp',
    userName: 'Test User',
    userTitle: 'Owner',
    industry: 'agro_processing',
    subIndustry: 'Milling',
    model: 'b2b',
    size: 'small_med',
    hasManagers: true,
    stage: 'growing',
    goals: ['Increase Profit'],
    pain: 'Costs',
    includesContractors: false,
    includesVolunteers: false,
    agroSubSector: 'Milling',
    shiftsPerDay: 2,
    daysPerWeek: 6
};

// Mock Answers (0-4 scale, 0 = Leak, 4 = Control)
// We want to trigger 'downtime_drain' (Engine) and 'yield_bleed' (Fuel)
const mockAnswers: Record<string, number> = {
    'ENG_AGRO_01': 0, // Reactive Maintenance -> Leak (downtime_drain)
    'ENG_AGRO_02': 1, // Changeover time -> Lean Leak
    'FUEL_AGRO_01': 0, // No mass balance -> Leak (yield_bleed)
    'FUEL_AGRO_02': 3, // Check weighing -> Lean Control
    'VOICE_AGRO_01': 4, // Diverse buyers -> Strong Control
    'SHIELD_AGRO_01': 0  // No traceability -> Leak (traceability_gap)
};

async function runTest() {
    console.log('--- Generating Report ---');
    const report = await generateSignalBasedReport(mockAnswers, mockProfile);

    console.log('Report Generated ID:', report.id);
    console.log('Executive Summary:', report.executiveSummary);

    // Check Pillars
    report.pillars.forEach(p => {
        console.log(`\n[${p.name}] Score: ${p.score} Band: ${p.band}`);
        if (p.actions.length > 0) {
            console.log(`  Actions (${p.actions.length}):`);
            p.actions.forEach(a => console.log(`  - [${a.effort}] ${a.text} (${a.type})`));
        }
        if (p.profitConsequence.length > 0) {
            console.log(`  Hook: ${p.profitConsequence[0]}`);
        }
    });

    console.log('\n--- Generating Fix Plan ---');
    const plan = generateFixPlan(report);

    console.log('Plan Tasks Top 5:');
    plan.tasks.slice(0, 5).forEach(t => {
        console.log(`- [${t.pillar}] ${t.title} (Sort: ${t._sortScore})`);
    });
}

runTest();
