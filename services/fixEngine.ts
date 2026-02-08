
import { GeneratedReport, FixPlan, FixTask, BusinessProfile, KPI } from "../types";
import { MASTER_TASKS } from "../data/fixLibrary";
import { GOAL_TEMPLATES, resolveGoalTemplate } from "../data/goalTemplates";
import { INDUSTRY_OVERLAYS } from "../data/industryOverlays";

// Helpers
const getWeightedScore = (baseWeight: number, pillarName: string, report: GeneratedReport) => {
  // Lower pillar score in report = Higher urgency
  const pillar = report.pillars.find(p => p.name === pillarName);
  const healthScore = pillar ? pillar.score : 50;
  const riskWeight = (100 - healthScore); // 0-100, high is risky
  return baseWeight + riskWeight;
};

export const generateFixPlan = (report: GeneratedReport): FixPlan => {
  // 1. Context Extraction
  const profile = report.profileContext || {
    industry: 'other', size: 'solo', goals: ['Increase Profit']
  } as BusinessProfile;

  const template = resolveGoalTemplate(profile.goals);
  const industryKey = profile.industry?.toLowerCase() || 'other';
  const overlay = INDUSTRY_OVERLAYS[industryKey];

  // 2. Select Tasks
  // We use the template's starter tasks as the base.
  // We also check for critical pillars from the report.
  const criticalPillars = report.pillars
    .filter(p => p.riskScore > 60)
    .map(p => p.name);

  // Combine Template Tasks with Critical Pillar Tasks
  // (In a real app, we might fetch specific critical tasks from a library, 
  // here we rely on the Template to have good coverage, but we boost their priority)

  let planTasks: FixTask[] = [];

  // Map Task IDs to Objects
  template.starterTaskIds.forEach(taskId => {
    const def = MASTER_TASKS.find(t => t.id === taskId);
    if (!def) return;

    // Apply Industry Swap
    let title = def.title;
    let metric = def.metric;

    if (overlay?.taskSwaps[taskId]) {
      title = overlay.taskSwaps[taskId].title;
      if (overlay.taskSwaps[taskId].metric) {
        metric = overlay.taskSwaps[taskId].metric || metric;
      }
    }

    // Apply Size Logic (Filter out heavy tasks for solos)
    if (profile.size === 'solo') {
      if (['TRIBE_01', 'BRAIN_06', 'TRIBE_09'].includes(taskId)) return; // Skip heavy delegation
      if (def.owner.includes('HR') || def.owner.includes('Manager')) {
        // Keep task but change owner
        // (Implied by UI showing 'You' if solo, but logic here helps)
      }
    }

    // Calculate Sorting Weight
    // Base weight from template + Risk boost from report
    const pillarKey = def.pillar.toLowerCase();
    // @ts-ignore
    const goalWeight = template.pillarWeights[pillarKey] || 0;
    const urgencyScore = getWeightedScore(goalWeight, def.pillar, report);

    planTasks.push({
      id: `fix_${taskId}_${Date.now()}`,
      pillar: def.pillar,
      title: title,
      desc: def.desc,
      status: 'backlog',
      effort: def.effort,
      owner: profile.size === 'solo' ? 'You' : def.owner,
      metric: metric,
      deadline: 'Day 7',
      impactScore: parseInt(def.delta.replace('+', '')) || 5,
      evidence: undefined,
      // hidden sort field
      // @ts-ignore
      _sortScore: urgencyScore
    });
  });

  // Sort by calculated urgency
  planTasks.sort((a, b) => (b as any)._sortScore - (a as any)._sortScore);

  // 3. Compile KPIs
  // Start with template default KPIs
  let planKPIs: KPI[] = [...template.defaultKPIs];

  // Add Industry KPIs
  if (overlay?.kpis) {
    // Add up to 2 industry specific ones to the top
    planKPIs = [...overlay.kpis.slice(0, 2), ...planKPIs];
  }

  // --- SIGNAL-BASED ACTION INJECTION ---
  // If the report engine already populated actions (e.g. from Agro Signal Pack), inject them here.
  report.pillars.forEach(pillar => {
    if (pillar.actions && pillar.actions.length > 0) {
      pillar.actions.forEach((action, i) => {
        planTasks.unshift({
          id: `fix_signal_${pillar.name}_${i}_${Date.now()}`,
          pillar: pillar.name,
          title: action.text,
          desc: action.description || 'Action recommended by analysis.',
          status: 'backlog',
          effort: action.effort || 'Med',
          owner: action.owner || 'Owner',
          metric: action.metric || 'Completion',
          deadline: action.type === 'today' ? 'Day 7' : 'Day 30',
          impactScore: 9,
          signalTag: action.signalTag,
          costType: action.costType,
          evidencePrompt: action.evidencePrompt,
          verificationCriteria: action.verificationCriteria,
          optionalEvidence: action.optionalEvidence,
          autoTags: action.autoTags,
          _sortScore: 1000 // Top priority
        });
      });
    }
  });

  // --- AGRO SPECIFIC INJECTION (Legacy / Fallback) ---
  if (report.agroIndices && report.agroIndices.length > 0) {
    report.agroIndices.forEach((idx, i) => {
      // Create a task for the first inspection item
      if (idx.inspectionItems.length > 0) {
        const item = idx.inspectionItems[0];
        planTasks.unshift({
          id: `fix_agro_${idx.id}_${i}`,
          pillar: idx.pillar,
          title: `Inspect: ${idx.title}`,
          desc: `Signals detected: ${idx.signals[0]}. Action: ${item.item}`,
          status: 'backlog',
          effort: 'Med',
          owner: 'Owner',
          metric: 'Cost Reduction',
          deadline: 'Day 3',
          impactScore: 10,
          _sortScore: 999 // Force top
        });
      }
    });
  }

  // Cap KPIs to 5
  planKPIs = planKPIs.slice(0, 5);

  return {
    id: `plan_${Date.now()}`,
    reportId: report.id,
    startedAt: new Date().toISOString(),
    tasks: planTasks,
    overallProgress: 0,
    kpis: planKPIs,
    focusArea: template.name
  };
};
