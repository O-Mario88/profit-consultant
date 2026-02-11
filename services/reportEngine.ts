
import { PillarScores, Archetype, GeneratedReport, PillarReport, ActionItem, ImpactBand, BusinessProfile } from "../types";
import { PillarStatus, SYSTEM_COST_MAPPING, getPillarBrief, getCostCopy } from "../data/missionBriefLibrary";
import { getFixPlan } from "../data/fixPlans";
import { getTopIndices, calculateDeepScanScores } from "../data/agroProcessingData";
import { generateReportAnalysis } from "./gemini";
import { calculateSignalScores, PillarResult } from "./scoringEngine";
import { getSparePartsToneVariant } from "../data/spareParts/toneVariants";
import {
  ASSEMBLY_CLIFFHANGER_STARTERS,
  ASSEMBLY_COST_FRAMING_STYLES,
  buildAssemblyCostNarrative,
  buildAssemblyEvidencePrompt,
  buildAssemblySymptom,
  deriveAssemblyAutoTags,
  getAssemblySignalIntel
} from "../data/assembly";
import { PillarId, QuestionDefinition, SignalTag } from "../types";

// Extracted service imports
import { getRiskProfile, calculateLeakIndices, calculateCostBand, deriveSignalArchetype } from "./scoring";
import {
  getRandom, injectLexicon, generateDrivers, mapEffort,
  normalizeQuickScanTone, normalizeDeepScanTone,
  getSparePartsTone, hashSeed, pickBySeed, humanizeSignalTag
} from "./reportHelpers";
import {
  AssemblySeverityStatus, getAssemblySeverityStatus,
  getAssemblySymptom, buildAssemblyNextStep,
  renderAssemblySeverityVariant
} from "./assemblyEngine";
import { resolveIndustryFlags, resolveIndustryPack, getWhyItMatters } from "./packResolver";

// Re-export for backward compat
export { calculateLeakIndices } from "./scoring";

export const generateStrategicReport = async (
  scores: PillarScores,
  archetype: Archetype,
  profile?: BusinessProfile,
  quickScanAnswers?: Record<string, string> // New param
): Promise<GeneratedReport | null> => {

  const indices = calculateLeakIndices(scores);
  const industry = profile?.industry || 'other';

  // Try to get AI Analysis
  let aiData: any = null;
  if (profile) {
    aiData = await generateReportAnalysis(profile, scores, archetype, quickScanAnswers);
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
      const templates = getCostCopy(industry, type as keyof typeof import("../data/missionBriefLibrary").COST_COPY, profile?.subIndustry);
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
    const quickScanAnalysis = normalizeQuickScanTone(
      aiPillarData?.quickScan,
      pillarName,
      band,
      industry
    );
    const deepScanChapter = normalizeDeepScanTone(
      aiPillarData?.deepDive,
      pillarName,
      score,
      industry
    );

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

  // 1. Resolve industry pack and flags
  const flags = resolveIndustryFlags(profile);
  const pack = resolveIndustryPack(profile, flags);
  const { isAssemblyManufacturing, isSparePartsRetail } = flags;

  const selectedLineType = (profile.agroSubSector as string | undefined) || profile.subIndustry;
  const matchesLineType = (lineType: string[]) =>
    lineType.includes('all') || !selectedLineType || lineType.includes(selectedLineType);

  const relevantQuestions = pack.questions.filter(q => matchesLineType(q.line_type));
  const scopedQuestions = relevantQuestions.length > 0 ? relevantQuestions : pack.questions;
  // @ts-ignore
  const { pillarResults, signalScores } = calculateSignalScores(answers, scopedQuestions);
  const archetype = deriveSignalArchetype(pillarResults as Record<string, PillarResult>);
  const assemblyAutoTags = isAssemblyManufacturing ? deriveAssemblyAutoTags(signalScores) : [];

  // 2. Build Pillars
  const pillars: PillarReport[] = Object.values(pillarResults).map((res: any) => {
    const status = res.band;
    const score = res.score;
    const topSignal = res.topSignals[0]; // Primary signal driver

    // Retrieve Content
    const getLibraryItem = (type: 'strength' | 'leak' | 'kpi' | 'hook' | 'mission_brief') => {
      const lineTypeFiltered = pack.library.filter(item =>
        item.pillar === res.pillar &&
        item.type === type &&
        matchesLineType(item.line_type)
      );

      if (type === 'mission_brief') {
        return lineTypeFiltered[0] ||
          pack.library.find(item =>
            item.pillar === res.pillar &&
            item.type === type &&
            item.line_type.includes('all')
          );
      }

      return lineTypeFiltered.find(item =>
        (item.signal_tags.includes(topSignal as SignalTag) || item.signal_tags.length === 0) &&
        item.severity_fit.includes(status === 'Emergency' || status === 'Critical' ? 'Critical' : 'Stable')
      ) || pack.library.find(item =>
        item.pillar === res.pillar &&
        item.type === type &&
        (item.signal_tags.includes(topSignal as SignalTag) || item.signal_tags.length === 0) &&
        item.severity_fit.includes(status === 'Emergency' || status === 'Critical' ? 'Critical' : 'Stable')
      );
    };

    const leakItem = getLibraryItem('leak');
    const hookItem = getLibraryItem('hook');
    const kpiItem = getLibraryItem('kpi');
    const missionBriefItem = getLibraryItem('mission_brief');
    const topLeakItemForTone = pack.library.find(i =>
      i.type === 'leak' &&
      matchesLineType(i.line_type) &&
      i.signal_tags.includes(topSignal as SignalTag)
    ) || pack.library.find(i => i.type === 'leak' && i.signal_tags.includes(topSignal as SignalTag));
    const sparePartsTone = isSparePartsRetail ? getSparePartsTone(profile) : null;
    const sparePartsToneVariant = isSparePartsRetail && topLeakItemForTone?.hook_text && sparePartsTone
      ? getSparePartsToneVariant(topLeakItemForTone.hook_text, sparePartsTone)
      : null;

    // Retrieve Actions
    const localMapEffort = (e: 'S' | 'M' | 'L'): 'Low' | 'Med' | 'High' => {
      if (e === 'S') return 'Low';
      if (e === 'L') return 'High';
      return 'Med';
    };

    const actions: ActionItem[] = pack.actions
      .filter(a =>
        a.pillar === res.pillar &&
        matchesLineType(a.line_type) &&
        a.signal_tags.some(tag => res.topSignals.includes(tag))
      )
      .map((a, i) => {
        const primarySignal = (a.signal_tags.find(tag => res.topSignals.includes(tag)) || a.signal_tags[0]) as SignalTag;
        const intel = isAssemblyManufacturing ? getAssemblySignalIntel(primarySignal) : undefined;
        const linkedTags = isAssemblyManufacturing
          ? assemblyAutoTags
            .filter(tag => tag.trigger_signals.includes(primarySignal))
            .slice(0, 2)
            .map(tag => `${tag.tag_id} (${tag.severity})`)
          : [];
        const description = isAssemblyManufacturing && intel
          ? `Fixes: ${a.signal_tags.join(', ')}. ${intel.symptom_short} ${intel.cost_short}`
          : `Fixes: ${a.signal_tags.join(', ')}`;
        const metric = isAssemblyManufacturing && intel
          ? [intel.kpi_primary, intel.kpi_secondary].filter(Boolean).join(', ')
          : (a.kpi_links?.[0] || 'Efficiency');

        return {
          id: `act_${res.pillar}_${a.days}_${i}`,
          text: a.title,
          description,
          type: a.days === 7 ? 'today' : 'month',
          owner: a.default_owner_by_size?.[profile.size] || 'Owner',
          effort: localMapEffort(a.effort),
          metric,
          signalTag: primarySignal,
          costType: intel?.cost_type,
          evidencePrompt: intel?.evidence_request,
          verificationCriteria: intel?.verification_criteria,
          optionalEvidence: intel?.optional_evidence,
          autoTags: linkedTags.length > 0 ? linkedTags : undefined
        };
      });

    const normalizedBand: PillarStatus =
      status === 'Emergency' || status === 'Critical'
        ? 'Profit Leak'
        : status === 'Watch'
          ? 'Bottleneck Forming'
          : 'Controlled';

    const quickScanBase = normalizeQuickScanTone(
      undefined,
      res.pillar,
      normalizedBand,
      profile.industry
    );
    const deepScanBase = normalizeDeepScanTone(
      undefined,
      res.pillar,
      score,
      profile.industry
    );
    const quickScanAnalysis = sparePartsToneVariant
      ? sparePartsToneVariant.mission
      : quickScanBase;
    const deepScanChapter = sparePartsToneVariant
      ? {
        theory: `### ${topLeakItemForTone?.hook_text || res.pillar} (${sparePartsTone === 'street' ? 'Street Tone' : 'Executive Tone'})\n${sparePartsToneVariant.mission}`,
        diagnosis: `### Deep Scan Diagnostic\n${sparePartsToneVariant.deep}`,
        psychology: deepScanBase.psychology,
        financials: `${deepScanBase.financials}\n\n### Recommended Action Packs\n${sparePartsToneVariant.actionPacks.join(', ')}`
      }
      : deepScanBase;

    return {
      name: res.pillar,
      score: score,
      riskScore: 100 - score,
      band: normalizedBand,
      tilt: 'A-Lean',
      strength: status === 'Stable' ? 'Detailed Control' : 'Process Weakness',
      hiddenCost: leakItem?.text || "Inefficiencies are creating drag.",
      profitConsequence: [hookItem?.text || "Profit Leak Detected"],
      actions: actions.length > 0 ? actions : [],
      owner: 'Owner',
      kpi: kpiItem?.text || 'Efficiency',
      evidenceFlags: isAssemblyManufacturing
        ? [
          ...res.topSignals.map(tag => humanizeSignalTag(tag)),
          ...assemblyAutoTags
            .filter(tag => tag.trigger_signals.some(signal => res.topSignals.includes(signal)))
            .slice(0, 2)
            .map(tag => `${tag.tag_id} (${tag.severity})`)
        ]
        : res.topSignals,
      // DYNAMIC TEMPLATE INJECTION
      deepInsight: (() => {
        let text = missionBriefItem?.text || `${hookItem?.text || 'Insight'}: ${leakItem?.text || 'Analysis pending.'}`;
        if (!text.includes('{')) return text;

        const assemblySeverityStatus = isAssemblyManufacturing ? getAssemblySeverityStatus(score) : null;

        // 1. STATUS
        const statusLabel = isAssemblyManufacturing
          ? assemblySeverityStatus!
          : (status === 'Emergency' || status === 'Critical' ? 'Critical Leak' : status === 'Watch' ? 'Warning' : 'Stable');
        text = text.replace(/{STATUS}/g, statusLabel);

        // 2. DETECTED SIGNALS
        const topLeakTags: SignalTag[] = (res.topSignals || []).slice(0, 3);
        // @ts-ignore
        const topStrengthTags: SignalTag[] = res.topStrength || [];

        const leakTexts = topLeakTags.map((tag) => {
          const item = pack.library.find(i => i.type === 'leak' && matchesLineType(i.line_type) && i.signal_tags.includes(tag)) ||
            pack.library.find(i => i.type === 'leak' && i.signal_tags.includes(tag));
          return item?.hook_text || item?.text || humanizeSignalTag(tag);
        });

        const strengthTexts = topStrengthTags.map((tag) => {
          const item = pack.library.find(i => i.signal_tags.includes(tag) && i.type === 'strength');
          return item?.text || "Standard control detected.";
        });

        const assemblySignalNames = topLeakTags.map(tag => humanizeSignalTag(tag));
        const selectedSignalTexts = isAssemblyManufacturing ? assemblySignalNames : leakTexts;
        const signalsText = [...selectedSignalTexts, ...strengthTexts].join(' ');
        text = text.replace(/{DETECTED_SIGNALS}/g, signalsText || "performance variance");
        text = text.replace(/{LEAK_1}/g, selectedSignalTexts[0] || "control leak");
        text = text.replace(/{LEAK_2}/g, selectedSignalTexts[1] || selectedSignalTexts[0] || "discipline gap");
        text = text.replace(/{LEAK_3}/g, selectedSignalTexts[2] || selectedSignalTexts[1] || selectedSignalTexts[0] || "system friction");
        text = text.replace(/{SIGNAL_1}/g, selectedSignalTexts[0] || "control leak");
        text = text.replace(/{SIGNAL_2}/g, selectedSignalTexts[1] || selectedSignalTexts[0] || "discipline gap");
        text = text.replace(/{SIGNAL_3}/g, selectedSignalTexts[2] || selectedSignalTexts[1] || selectedSignalTexts[0] || "system friction");

        // 3. COST IMPACT
        const topLeakItem = topLeakItemForTone;
        const primaryIntel = isAssemblyManufacturing && topLeakTags[0]
          ? getAssemblySignalIntel(topLeakTags[0])
          : undefined;
        const seeded = hashSeed(`${profile.subIndustry}|${res.pillar}|${score}|${topLeakTags.join(',')}`);
        const costFraming = isAssemblyManufacturing
          ? pickBySeed(ASSEMBLY_COST_FRAMING_STYLES, seeded)
          : '';
        const fallbackCostText = topLeakItem?.cost_text || leakItem?.text || "inefficiencies reducing margin.";
        const costText = isAssemblyManufacturing
          ? buildAssemblyCostNarrative(topLeakTags, costFraming, assemblySeverityStatus!)
          : fallbackCostText;
        text = text.replace(/{COST_IMPACT}/g, costText);
        text = text.replace(/{COST}/g, costText);

        // 4. KPI
        const kpiText = isAssemblyManufacturing && primaryIntel
          ? [primaryIntel.kpi_primary, primaryIntel.kpi_secondary].filter(Boolean).join(', ')
          : (topLeakItem?.kpi_text || kpiItem?.text || "Efficiency");
        text = text.replace(/{KPI}/g, kpiText);

        // 5. NEXT STEP (Cliffhanger)
        const defaultCliffhanger = topLeakItem?.cliffhanger_text || "The Deep Scan will reveal root causes.";
        const cliffhangerStarter = isAssemblyManufacturing
          ? pickBySeed(ASSEMBLY_CLIFFHANGER_STARTERS, seeded + 17)
          : '';
        const cliffhangerText = isAssemblyManufacturing
          ? `${cliffhangerStarter} lock ${primaryIntel?.kpi_primary || 'first-pass execution'} with evidence-backed control.`
          : defaultCliffhanger;
        const symptomText = isAssemblyManufacturing ? buildAssemblySymptom(topLeakTags) : getAssemblySymptom(topLeakTags);
        text = text.replace(/{SYMPTOM}/g, symptomText);
        text = text.replace(/{SPECIES}/g, profile.subIndustry || 'Assembly / OEM');
        const nextStepText = isAssemblyManufacturing
          ? buildAssemblyNextStep(assemblySeverityStatus!, res.pillar as PillarId, kpiText, cliffhangerText)
          : cliffhangerText;
        text = text.replace(/{NEXT_STEP}/g, nextStepText);

        if (isAssemblyManufacturing) {
          const evidencePromptText = buildAssemblyEvidencePrompt(topLeakTags);
          const pillarAutoTags = assemblyAutoTags
            .filter(tag => tag.trigger_signals.some(signal => topLeakTags.includes(signal)))
            .slice(0, 3);
          const tagLine = pillarAutoTags.length > 0
            ? `Auto-Tags: ${pillarAutoTags.map(tag => `${tag.tag_id} (${tag.severity})`).join(', ')}.`
            : '';
          const severityLayer = renderAssemblySeverityVariant({
            pillar: res.pillar as PillarId,
            status: assemblySeverityStatus!,
            species: profile.subIndustry || 'Assembly / OEM',
            signal1: selectedSignalTexts[0] || 'control leak',
            signal2: selectedSignalTexts[1] || selectedSignalTexts[0] || 'discipline gap',
            signal3: selectedSignalTexts[2] || selectedSignalTexts[1] || selectedSignalTexts[0] || 'system friction',
            symptom: symptomText,
            cost: costText,
            kpi: kpiText,
            nextStep: nextStepText
          });
          text = [
            text,
            severityLayer || '',
            `Fix Mode Evidence: ${evidencePromptText}`,
            tagLine
          ].filter(Boolean).join('\n\n');
        }

        return text;
      })(),
      whyItMatters: getWhyItMatters(profile, flags),
      drivers: [],
      costBands: {
        time: { level: 'Medium', label: 'Time', symptom: 'Delay' },
        cash: { level: 'Medium', label: 'Cash', symptom: 'Leak' },
        risk: { level: 'Medium', label: 'Risk', symptom: 'Exposure' }
      },
      confidence: 'High',
      evidenceSnapshots: [],
      fixLever: { action: 'Fix', metric: 'Profit', owner: 'You', effort: 'M', timeline: 'Week' },
      quickScanAnalysis,
      deepScanChapter
    };
  });

  const baseSummary = `Analysis complete. Top profit leaks identified in: ${pillars.filter(p => p.riskScore > 50).map(p => p.name).join(', ')}.`;
  const assemblyTagSummary = isAssemblyManufacturing
    ? (() => {
      const critical = assemblyAutoTags.filter(tag => tag.severity === 'Critical').slice(0, 3);
      const watch = assemblyAutoTags.filter(tag => tag.severity === 'Watch').slice(0, 2);
      if (critical.length === 0 && watch.length === 0) return '';
      const criticalLine = critical.length > 0
        ? ` Critical tags: ${critical.map(tag => tag.tag_id).join(', ')}.`
        : '';
      const watchLine = watch.length > 0
        ? ` Watch tags: ${watch.map(tag => tag.tag_id).join(', ')}.`
        : '';
      return `${criticalLine}${watchLine}`;
    })()
    : '';

  return {
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString(),
    archetype,
    executiveSummary: `${baseSummary}${assemblyTagSummary}`.trim(),
    pillars: pillars,
    unlocks: [],
    indices: { timeLeak: 0, cashLeak: 0, riskExposure: 0 }, // Calc these if needed
    recommendedKPIs: [],
    agroIndices: [], // Can populate from signals
    deepScanScores: undefined,
    profileContext: profile
  };
};
