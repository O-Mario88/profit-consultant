
import { generateSignalBasedReport } from './services/reportEngine';
import { generateFixPlan } from './services/fixEngine';
import { BusinessProfile } from './types';

const mockProfile: BusinessProfile = {
    businessName: 'Test Agri Input Corp',
    userName: 'Test User',
    userTitle: 'Owner',
    industry: 'agri_input',
    subIndustry: 'Seeds',
    model: 'b2b',
    size: 'small_med',
    hasManagers: true,
    stage: 'growing',
    goals: ['Increase Profit'],
    pain: 'Costs',
    includesContractors: false,
    includesVolunteers: false,
    agroSubSector: 'Seeds',
    shiftsPerDay: 1,
    daysPerWeek: 6
};

// Mock Answers (0-4 scale, 0 = Leak, 4 = Control)
// We want to trigger 'stockout_tax' (Engine), 'margin_mirage' (Fuel), 'counterfeit_exposure' (Shield)
const mockAnswers: Record<string, number> = {
    'QS_ENGINE_01': 0, // Reorder feeling -> Leak (stockout_tax)
    'QS_FUEL_01': 0, // Volume focus -> Leak (margin_mirage)
    'QS_FUEL_02': 2, // Credit -> Neutral
    'DS_SHIELD_02': 0, // Counterfeit risk -> Leak (counterfeit_exposure)
    'QS_TRIBE_02': 0, // Own style -> Leak (sales_without_standards)
    'QS_VOICE_01': 4 // Bundles -> Strong Control
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
