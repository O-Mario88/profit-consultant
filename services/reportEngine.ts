
import { PillarScores, Archetype, GeneratedReport, PillarReport, ActionItem, LeakIndices, PillarDriver, ImpactBand, BusinessProfile } from "../types";
import { PILLAR_BRIEFS, PillarStatus, EVIDENCE_COPY, COST_COPY, SYSTEM_COST_MAPPING, getPillarBrief, getCostCopy } from "../data/missionBriefLibrary";
import { PILLAR_FIX_PLANS, getFixPlan } from "../data/fixPlans";
import { INDUSTRY_LEXICONS, IndustryKey } from "../data/industryContext";
import { getTopIndices, calculateDeepScanScores } from "../data/agroProcessingData";
import { generateQuickScanAnalysis, generateDeepScanChapter } from "./textGen";
import { generateReportAnalysis } from "./gemini";
// Note: calculateSignalScores import moved to top or consolidated
import { calculateSignalScores, getStatusBand } from "./scoringEngine";
import { AGRO_PACK } from "../data/agro";
import { AGRI_PACK } from "../data/agri";
import { QuestionDefinition, SignalTag } from "../types";

// Helper: Map System Score to Risk Band
const getRiskProfile = (systemScore: number): { riskScore: number, band: PillarStatus } => {
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
    (100 - scores.engine) * 0.5 +
    (100 - scores.tribe) * 0.3 +
    (100 - scores.brain) * 0.2
  );

  const cashLeak = Math.round(
    (100 - scores.fuel) * 0.55 +
    (100 - scores.voice) * 0.35 +
    (100 - scores.pulse) * 0.10
  );

  const riskExposure = Math.round(
    (100 - scores.shield) * 0.7 +
    (100 - scores.tribe) * 0.2 +
    (100 - scores.fuel) * 0.1
  );

  return { timeLeak, cashLeak, riskExposure };
};

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const injectLexicon = (text: string, industry: string): string => {
  const keyMap: Record<string, IndustryKey> = {
    'retail': 'retail', 'tech': 'tech', 'agriculture': 'agriculture',
    'hospitality': 'hospitality', 'transport': 'transport',
    'services': 'services', 'manufacturing': 'manufacturing',
    'construction': 'construction', 'finance': 'services',
    'education': 'services', 'health': 'services', 'media': 'services', 'ngo': 'services'
  };
  const lexKey = keyMap[industry] || 'other';
  const lexicon = INDUSTRY_LEXICONS[lexKey] || INDUSTRY_LEXICONS['other'];

  let res = text;
  Object.entries(lexicon).forEach(([token, value]) => {
    const regex = new RegExp(`{${token}}`, 'gi');
    res = res.replace(regex, value);
  });
  return res;
};

const generateDrivers = (pillarName: string, mainScore: number): PillarDriver[] => {
  const plan = PILLAR_FIX_PLANS[pillarName];
  const driverNames = plan?.drivers || ['Execution', 'Strategy', 'People'];

  return driverNames.map(name => {
    const variance = Math.floor(Math.random() * 30) - 15;
    let score = Math.max(5, Math.min(95, mainScore + variance));

    let status: 'Critical' | 'Weak' | 'Strong' = 'Strong';
    if (score < 40) status = 'Critical';
    else if (score < 70) status = 'Weak';

    return { name, score, status };
  });
};

const calculateCostBand = (score: number, leakIndex: number): { level: 'Low' | 'Medium' | 'High', label: string } => {
  let level: 'Low' | 'Medium' | 'High' = 'Low';
  if (leakIndex > 60) level = 'High';
  else if (leakIndex > 30) level = 'Medium';
  return { level, label: 'Estimated Impact' };
};

const mapEffort = (effort?: 'S' | 'M' | 'L'): 'Low' | 'Med' | 'High' | undefined => {
  switch (effort) {
    case 'S': return 'Low';
    case 'M': return 'Med';
    case 'L': return 'High';
    default: return undefined;
  }
};

export const generateStrategicReport = async (
  scores: PillarScores,
  archetype: Archetype,
  profile?: BusinessProfile
): Promise<GeneratedReport | null> => {

  const indices = calculateLeakIndices(scores);
  const industry = profile?.industry || 'other';

  // Try to get AI Analysis
  let aiData: any = null;
  if (profile) {
    aiData = await generateReportAnalysis(profile, scores, archetype);
  }

  const pillars: PillarReport[] = Object.entries(scores).map(([key, rawScore]) => {
    // Explicitly cast rawScore to number to fix TS issues with Object.entries
    const score = rawScore as number;
    const pillarName = key.charAt(0).toUpperCase() + key.slice(1);
    const { riskScore, band } = getRiskProfile(score);

    // Use helper for industry-aware brief (passing subIndustry)
    const briefTemplate = getPillarBrief(industry, pillarName, band, profile?.subIndustry);

    const whyItMatters = injectLexicon(briefTemplate.controls, industry);
    const hiddenCost = injectLexicon(briefTemplate.costing, industry);
    const deepInsight = injectLexicon(briefTemplate.cliffhanger, industry);

    // Use helper for industry-aware fix plan (passing subIndustry)
    const fixPlan = getFixPlan(industry, pillarName, profile?.subIndustry);
    const strength = band === 'Profit Lever' ? "Strength" : "Optimization needed";

    const costTypes = SYSTEM_COST_MAPPING[pillarName] || ['cash'];
    const profitConsequence = costTypes.map(type => {
      // Use helper for industry-aware cost copy (passing subIndustry)
      const templates = getCostCopy(industry, type as keyof typeof COST_COPY, profile?.subIndustry);
      return getRandom(templates);
    });

    const drivers = generateDrivers(pillarName, score);

    const costBands = {
      time: { level: calculateCostBand(score, indices.timeLeak).level, label: 'Time Leak', symptom: 'Delays, Rework' },
      cash: { level: calculateCostBand(score, indices.cashLeak).level, label: 'Cash Leak', symptom: 'Lost Revenue, Margin' },
      risk: { level: calculateCostBand(score, indices.riskExposure).level, label: 'Risk Exposure', symptom: 'Compliance, Shock' }
    };

    const actions: ActionItem[] = [
      ...fixPlan.quickWins.map((qw, i) => ({
        id: `act_${key}_7_${i}`,
        text: qw.title,
        description: qw.desc,
        type: 'today' as const,
        owner: qw.owner,
        effort: mapEffort(qw.effort),
        metric: qw.metric
      })),
      ...fixPlan.system30.map((sys, i) => ({
        id: `act_${key}_30_${i}`,
        text: sys.title,
        description: sys.desc,
        type: 'month' as const,
        owner: sys.owner,
        effort: mapEffort(sys.effort),
        metric: sys.metric
      }))
    ];

    // Use AI content if available, fallback to static generators
    const aiPillarData = aiData?.pillars?.[pillarName];
    const quickScanAnalysis = aiPillarData?.quickScan || generateQuickScanAnalysis(pillarName, band, industry);
    const deepScanChapter = aiPillarData?.deepDive || generateDeepScanChapter(pillarName, score, industry);

    return {
      name: pillarName,
      score: score,
      riskScore: riskScore,
      band: band as any,
      tilt: 'A-Lean',
      strength: strength,
      hiddenCost: hiddenCost,
      profitConsequence: profitConsequence,
      actions: actions,
      owner: 'Owner',
      kpi: 'Efficiency',
      evidenceFlags: riskScore > 50 ? [`${pillarName} Risk High`] : ['Stable'],
      deepInsight: deepInsight,
      whyItMatters: whyItMatters,
      drivers,
      costBands: costBands as any,
      confidence: 'High',
      evidenceSnapshots: fixPlan.evidenceSnapshots,
      fixLever: fixPlan.fixLever,
      quickScanAnalysis,
      deepScanChapter
    };
  });

  // Sort by risk (descending)
  pillars.sort((a, b) => b.riskScore - a.riskScore);

  const criticalPillars = pillars.filter(p => p.riskScore > 60).map(p => p.name);

  // Use AI executive summary if available
  const summary = aiData?.executiveSummary || (
    criticalPillars.length > 0
      ? `Your business shows critical vulnerabilities in ${criticalPillars.join(', ')}. While you have strengths in other areas, these leaks are likely capping your growth and causing silent profit erosion.`
      : `Your business is generally stable with strong systems. Focus is now on optimization and scaling rather than repair.`
  );

  // 4. Calculate Agro Indices if applicable
  let agroIndices = undefined;
  let deepScanScores = undefined;
  if (industry === 'agro_processing') {
    agroIndices = getTopIndices(scores as any, profile);
    if (profile) {
      deepScanScores = calculateDeepScanScores(profile);
    }
  }

  return {
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
    archetype,
    executiveSummary: summary,
    pillars,
    unlocks: ['Financial Audit', 'Hiring Protocol', 'Sales Script'],
    indices,
    recommendedKPIs: [],
    agroIndices,
    deepScanScores,
    profileContext: profile
  };
};

export const generateSignalBasedReport = async (
  answers: Record<string, number>,
  profile: BusinessProfile
): Promise<GeneratedReport> => {

  // 1. Calculate Scores & Signals
  const isAgriInput = profile.industry === 'agri_input';
  const pack = isAgriInput ? AGRI_PACK : AGRO_PACK;

  // Use questions (filtered by line_type if needed, currently using all for simplicity or pass filtered set)
  const relevantQuestions = pack.questions;
  // @ts-ignore
  const { pillarResults, signalScores } = calculateSignalScores(answers, relevantQuestions);

  // 2. Build Pillars
  const pillars: PillarReport[] = Object.values(pillarResults).map((res: any) => {
    const status = res.band;
    const score = res.score;
    const topSignal = res.topSignals[0]; // Primary signal driver

    // Retrieve Content
    const getLibraryItem = (type: 'strength' | 'leak' | 'kpi' | 'hook' | 'mission_brief') => {
      // For Mission Brief, we want specific match on sub-sector (line_type)
      if (type === 'mission_brief') {
        // @ts-ignore
        const subSector = profile.agroSubSector; // "Seeds", "Fertilizer" etc.
        return pack.library.find(item =>
          item.pillar === res.pillar &&
          item.type === type &&
          item.line_type.includes(subSector)
        );
      }

      return pack.library.find(item =>
        item.pillar === res.pillar &&
        item.type === type &&
        (item.signal_tags.includes(topSignal as SignalTag) || item.signal_tags.length === 0) &&
        item.severity_fit.includes(status === 'Emergency' || status === 'Critical' ? 'Critical' : 'Stable')
        // Add line_type filter here real-world
      );
    };

    const leakItem = getLibraryItem('leak');
    const hookItem = getLibraryItem('hook');
    const kpiItem = getLibraryItem('kpi');
    const missionBriefItem = getLibraryItem('mission_brief');

    // Retrieve Actions
    const mapEffort = (e: 'S' | 'M' | 'L'): 'Low' | 'Med' | 'High' => {
      if (e === 'S') return 'Low';
      if (e === 'L') return 'High';
      return 'Med';
    };

    const actions: ActionItem[] = pack.actions
      .filter(a => a.pillar === res.pillar && res.topSignals.includes(a.signal_tags[0]))
      .map((a, i) => ({
        id: `act_${res.pillar}_${a.days}_${i}`,
        text: a.title,
        description: `Fixes: ${a.signal_tags.join(', ')}`,
        type: a.days === 7 ? 'today' : 'month',
        owner: a.default_owner_by_size?.[profile.size] || 'Owner', // Use optional chaining
        effort: mapEffort(a.effort),
        metric: a.kpi_links?.[0] || 'Efficiency' // Use optional chaining
      }));

    return {
      name: res.pillar,
      score: score,
      riskScore: 100 - score,
      band: status === 'Emergency' || status === 'Critical' ? 'Profit Leak' : status === 'Watch' ? 'Bottleneck Forming' : 'Controlled',
      tilt: 'A-Lean',
      strength: status === 'Stable' ? 'Detailed Control' : 'Process Weakness',
      hiddenCost: leakItem?.text || "Inefficiencies are creating drag.",
      profitConsequence: [hookItem?.text || "Profit Leak Detected"],
      actions: actions.length > 0 ? actions : [],
      owner: 'Owner',
      kpi: kpiItem?.text || 'Efficiency',
      evidenceFlags: res.topSignals,
      deepInsight: missionBriefItem?.text || `${hookItem?.text || 'Insight'}: ${leakItem?.text || 'Analysis pending.'}`,
      whyItMatters: "Agro-processing requires tight control of yield and flow.",
      drivers: [],
      costBands: {
        time: { level: 'Medium', label: 'Time', symptom: 'Delay' },
        cash: { level: 'Medium', label: 'Cash', symptom: 'Leak' },
        risk: { level: 'Medium', label: 'Risk', symptom: 'Exposure' }
      },
      confidence: 'High',
      evidenceSnapshots: [],
      fixLever: { action: 'Fix', metric: 'Profit', owner: 'You', effort: 'M', timeline: 'Week' }
    };
  });

  return {
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
    archetype: 'The Growth Chaser', // Placeholder, needs archetype logic
    executiveSummary: `Analysis complete. Top profit leaks identified in: ${pillars.filter(p => p.riskScore > 50).map(p => p.name).join(', ')}.`,
    pillars: pillars,
    unlocks: [],
    indices: { timeLeak: 0, cashLeak: 0, riskExposure: 0 }, // Calc these if needed
    recommendedKPIs: [],
    agroIndices: [], // Can populate from signals
    deepScanScores: undefined,
    profileContext: profile
  };
};
