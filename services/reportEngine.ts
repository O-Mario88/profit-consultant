
import { PillarScores, Archetype, GeneratedReport, PillarReport, ActionItem, LeakIndices, PillarDriver, ImpactBand, BusinessProfile } from "../types";
import { PILLAR_BRIEFS, PillarStatus, EVIDENCE_COPY, COST_COPY, SYSTEM_COST_MAPPING, getPillarBrief, getCostCopy } from "../data/missionBriefLibrary";
import { PILLAR_FIX_PLANS, getFixPlan } from "../data/fixPlans";
import { INDUSTRY_LEXICONS, IndustryKey } from "../data/industryContext";
import { getTopIndices, calculateDeepScanScores } from "../data/agroProcessingData";
import { generateQuickScanAnalysis, generateDeepScanChapter } from "./textGen";
import { generateReportAnalysis } from "./gemini";
// Note: calculateSignalScores import moved to top or consolidated
import { calculateSignalScores, PillarResult } from "./scoringEngine";
import { AGRO_PACK } from "../data/agro";
import { AGRI_PACK } from "../data/agri";
import { MINING_PACK } from "../data/mining";
import { OIL_GAS_PACK } from "../data/oilGas";
import { FNB_PACK } from "../data/fnb";
import { TEXTILE_PACK } from "../data/textile";
import { FURNITURE_PACK } from "../data/furniture";
import { METAL_PACK } from "../data/metal";
import { PLASTICS_PACK } from "../data/plastics";
import { SOAP_PACK } from "../data/soap";
import { BRICKS_PACK } from "../data/bricks";
import { WATER_PACK } from "../data/water";
import { FMCG_PACK } from "../data/fmcg";
import {
  ASSEMBLY_PACK,
  ASSEMBLY_CLIFFHANGER_STARTERS,
  ASSEMBLY_COST_FRAMING_STYLES,
  buildAssemblyCostNarrative,
  buildAssemblyEvidencePrompt,
  buildAssemblySymptom,
  deriveAssemblyAutoTags,
  getAssemblySignalIntel
} from "../data/assembly";
import { PillarId, QuestionDefinition, SignalTag } from "../types";

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

const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

const injectLexicon = (text: string, industry: string): string => {
  const keyMap: Record<string, IndustryKey> = {
    'retail': 'retail', 'tech': 'tech', 'agriculture': 'agriculture',
    'hospitality': 'hospitality', 'transport': 'transport',
    'services': 'services', 'manufacturing': 'manufacturing',
    'construction': 'construction', 'mining': 'mining', 'oil_gas_services': 'oil_gas_services', 'finance': 'services',
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

const hashSeed = (input: string): number => {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const pickBySeed = <T,>(arr: readonly T[], seed: number): T =>
  arr[Math.abs(seed) % arr.length];

const deriveSignalArchetype = (pillarResults: Record<string, PillarResult>): Archetype => {
  const score = (pillar: string) => pillarResults[pillar]?.score ?? 50;
  const heartScore = (score('Market') + score('Leadership') + score('Innovation') + score('People')) / 4;
  const walletScore = (score('Operations') + score('Money') + score('Risk')) / 3;
  const THRESHOLD = 50;

  if (heartScore >= THRESHOLD && walletScore >= THRESHOLD) return 'The Sovereign';
  if (heartScore >= THRESHOLD && walletScore < THRESHOLD) return 'The Uncrowned King';
  if (heartScore < THRESHOLD && walletScore >= THRESHOLD) return 'The Iron General';
  return 'The Storm Survivor';
};

type AssemblySeverityStatus = 'Stable' | 'Watch' | 'Critical';

const getAssemblySeverityStatus = (score: number): AssemblySeverityStatus => {
  if (score >= 70) return 'Stable';
  if (score >= 40) return 'Watch';
  return 'Critical';
};

const humanizeSignalTag = (tag: SignalTag): string =>
  tag.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const ASSEMBLY_SIGNAL_SYMPTOMS: Partial<Record<SignalTag, string>> = {
  yield_bleed: 'good units are being lost to rework and scrap before shipment',
  quality_built_late: 'defects are being discovered after value has already been added',
  planning_gap: 'stations pause because kits, parts, or priorities arrive late',
  changeover_black_hole: 'variant switches are consuming hours and destabilizing flow',
  wip_pileup: 'too much WIP is hiding defects and slowing completion',
  bottleneck_bounce: 'one station is throttling overall throughput',
  measurement_blindspot: 'calibration drift is creating inconsistent test outcomes',
  traceability_gap: 'failures cannot be quickly linked to lot, station, and operator',
  purchase_panic: 'expedites are replacing planning as a normal operating habit',
  pricing_margin_blindspot: 'shipments are growing faster than contribution margin',
  costing_gap: 'true SKU-level economics are unclear at quote and scheduling time',
  payment_delay_chokehold: 'cash conversion is lagging despite ongoing output',
  spec_drift_discount: 'requirements are shifting mid-build and creating avoidable rework',
  complaint_handling_gap: 'customer escalations are recurring instead of closing permanently',
  channel_dependency: 'dependency on a few accounts is increasing negotiation pressure',
  decision_bottleneck: 'critical approvals are delaying execution and closure',
  no_kpi_ownership: 'teams are operating without clear daily performance visibility',
  no_variance_review: 'issues are getting patched but not prevented',
  cross_function_breakdown: 'engineering, quality, and production are solving problems in silos',
  sku_complexity_tax: 'variant load is rising faster than process control',
  no_product_testing_rhythm: 'NPI and test strategy are not gated tightly enough',
  slow_bug_fix: 'improvements are arriving slower than defect recurrence',
  supplier_variance_risk: 'incoming lot variation is destabilizing yield',
  compliance_blocker_risk: 'audit and compliance readiness is reactive, not controlled',
  data_security_gap: 'firmware/version governance is vulnerable to mismatch risk',
  training_gap: 'critical station skills are inconsistent across operators',
  weak_shift_handover: 'shift changes are leaking context and defect history',
  hero_operator_dependence: 'line stability depends on a few key people',
  role_clarity_gap: 'ownership of FPY, escapes, and downtime is unclear',
  low_psych_safety: 'issues are raised late because teams fear blame',
  blame_culture: 'the same errors repeat because learning is suppressed',
  hygiene_drift: 'ESD and discipline checks are inconsistent across shifts',
  contract_gap: 'acceptance and return boundaries are unclear in execution',
  disaster_recovery_gap: 'containment and recall readiness is not drill-tested'
};

const getAssemblySymptom = (topSignals: SignalTag[]): string => {
  const symptoms = topSignals
    .map((tag) => ASSEMBLY_SIGNAL_SYMPTOMS[tag])
    .filter(Boolean) as string[];
  if (symptoms.length === 0) {
    return 'execution remains busy, but performance feels unpredictable and recovery-heavy';
  }
  if (symptoms.length === 1) return symptoms[0];
  return `${symptoms[0]} and ${symptoms[1]}`;
};

const buildAssemblyNextStep = (
  status: AssemblySeverityStatus,
  pillar: PillarId,
  kpi: string,
  fallbackCliffhanger?: string
): string => {
  const ctaByStatus: Record<AssemblySeverityStatus, string> = {
    Stable: `Unlock Optimization Pack and start Fix Plan (Lite) to lift ${kpi}.`,
    Watch: `Unlock ${pillar} Deep Module and generate a 7-day stabilization sprint tied to ${kpi}.`,
    Critical: `Start Fix Mode now: run a 7-day containment sprint and build a 30-day control system tied to ${kpi}.`
  };
  const base = ctaByStatus[status];
  if (!fallbackCliffhanger) return base;
  return `${base} ${fallbackCliffhanger}`;
};

const ASSEMBLY_SEVERITY_VARIANTS: Record<PillarId, Record<AssemblySeverityStatus, string>> = {
  Operations: {
    Stable: 'Operations is stable for a {SPECIES} environment. Signals {SIGNAL_1} and {SIGNAL_2} are currently controlled, so output is less dependent on hero recovery. Day-to-day it looks like predictable flow instead of constant firefighting. Cost profile: {COST}. Next: {NEXT_STEP}',
    Watch: 'Operations is productive but showing early execution drag. We detected {SIGNAL_1} with traces of {SIGNAL_2}; this usually appears as {SYMPTOM}. Cost profile: {COST}. Next: {NEXT_STEP}',
    Critical: 'Operations is now a primary profit leak. Signals {SIGNAL_1} and {SIGNAL_2} indicate unstable flow and repeat recovery loops. Day-to-day this looks like {SYMPTOM}. Cost profile: {COST}. Next: {NEXT_STEP}'
  },
  Money: {
    Stable: 'Money controls are structurally sound for {SPECIES}. Signals {SIGNAL_1} and {SIGNAL_2} are contained, so margin is less dependent on luck cycles. Day-to-day this looks like better cash conversion and fewer emergency spend spikes. Cost profile: {COST}. Next: {NEXT_STEP}',
    Watch: 'Money looks healthy on the surface but leak patterns are forming. Signals {SIGNAL_1} and {SIGNAL_2} usually mean hidden losses in rework, expedites, or weak unit economics. Day-to-day this appears as month-end margin surprises. Cost profile: {COST}. Next: {NEXT_STEP}',
    Critical: 'Money is in high-risk leak mode. Signals {SIGNAL_1} and {SIGNAL_2} indicate revenue is not translating into cash or protected margin. Day-to-day this feels like tight cash and constant emergency spending. Cost profile: {COST}. Next: {NEXT_STEP}'
  },
  Market: {
    Stable: 'Market execution is healthy for {SPECIES}. Signals {SIGNAL_1} and {SIGNAL_2} look controlled, and trust is being protected through delivery and proof consistency. Day-to-day this means fewer escalations and stronger repeat behavior. Cost profile: {COST}. Next: {NEXT_STEP}',
    Watch: 'Market trust friction is forming. We detected {SIGNAL_1} with {SIGNAL_2}, which usually appears as {SYMPTOM}. Cost profile: {COST}. Next: {NEXT_STEP}',
    Critical: 'Market risk is elevated. Signals {SIGNAL_1} and {SIGNAL_2} indicate confidence is being damaged through delivery, spec, or escalation failures. Day-to-day this looks like constant customer recovery work. Cost profile: {COST}. Next: {NEXT_STEP}'
  },
  Leadership: {
    Stable: 'Leadership execution is structured: {SIGNAL_1} remains controlled and teams are closing issues before they recur. Day-to-day this means cadence over chaos. Cost profile: {COST}. Next: {NEXT_STEP}',
    Watch: 'Leadership is functional but inconsistent. Signals {SIGNAL_1} and {SIGNAL_2} often show up as shifting priorities and action drift. Cost profile: {COST}. Next: {NEXT_STEP}',
    Critical: 'Leadership is amplifying operational instability. Signals {SIGNAL_1} and {SIGNAL_2} indicate bottlenecks, silo conflict, or firefighting culture. Day-to-day this appears as repeating failures and execution variance by shift. Cost profile: {COST}. Next: {NEXT_STEP}'
  },
  Innovation: {
    Stable: 'Innovation activity appears intentional and controlled for {SPECIES}. Signals {SIGNAL_1} and {SIGNAL_2} are contained, so improvements are landing without destabilizing flow. Cost profile: {COST}. Next: {NEXT_STEP}',
    Watch: 'Innovation is active, but process stability is under pressure. Signals {SIGNAL_1} and {SIGNAL_2} usually indicate variant load or weak NPI gates. Day-to-day this appears as avoidable changeover and quality drag. Cost profile: {COST}. Next: {NEXT_STEP}',
    Critical: 'Innovation is currently creating instability. Signals {SIGNAL_1} and {SIGNAL_2} show change velocity outpacing process control. Day-to-day this looks like scrap, rework, and missed commitments after changes. Cost profile: {COST}. Next: {NEXT_STEP}'
  },
  Risk: {
    Stable: 'Risk posture is disciplined for {SPECIES}. Signals {SIGNAL_1} and {SIGNAL_2} suggest issues can be contained quickly with traceable evidence. Cost profile: {COST}. Next: {NEXT_STEP}',
    Watch: 'Risk posture has survivable gaps, but exposure is rising. Signals {SIGNAL_1} and {SIGNAL_2} often indicate traceability or supplier control weaknesses. Day-to-day this appears as slow containment during incidents. Cost profile: {COST}. Next: {NEXT_STEP}',
    Critical: 'Risk exposure is high. Signals {SIGNAL_1} and {SIGNAL_2} suggest one failure could trigger recall pressure, chargebacks, or contract loss. Day-to-day this feels like uncertainty under every incident. Cost profile: {COST}. Next: {NEXT_STEP}'
  },
  People: {
    Stable: 'People systems look reliable. Signals {SIGNAL_1} and {SIGNAL_2} are controlled, and shift consistency is supporting quality. Cost profile: {COST}. Next: {NEXT_STEP}',
    Watch: 'People systems are working, but strain is visible. Signals {SIGNAL_1} and {SIGNAL_2} usually indicate training gaps or role ambiguity. Day-to-day this appears as uneven execution across teams. Cost profile: {COST}. Next: {NEXT_STEP}',
    Critical: 'People is actively feeding the leak. Signals {SIGNAL_1} and {SIGNAL_2} indicate shift variance, burnout defects, or accountability fog. Day-to-day this appears as recurring rework and rising error volatility. Cost profile: {COST}. Next: {NEXT_STEP}'
  }
};

const renderAssemblySeverityVariant = (params: {
  pillar: PillarId;
  status: AssemblySeverityStatus;
  species: string;
  signal1: string;
  signal2: string;
  signal3: string;
  symptom: string;
  cost: string;
  kpi: string;
  nextStep: string;
}): string => {
  const template = ASSEMBLY_SEVERITY_VARIANTS[params.pillar]?.[params.status];
  if (!template) return '';
  return template
    .replace(/{SPECIES}/g, params.species)
    .replace(/{SIGNAL_1}/g, params.signal1)
    .replace(/{SIGNAL_2}/g, params.signal2)
    .replace(/{SIGNAL_3}/g, params.signal3)
    .replace(/{SYMPTOM}/g, params.symptom)
    .replace(/{COST}/g, params.cost)
    .replace(/{KPI}/g, params.kpi)
    .replace(/{NEXT_STEP}/g, params.nextStep);
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
  const packByIndustry: Record<string, { questions: QuestionDefinition[]; library: any[]; actions: any[] }> = {
    agri_input: AGRI_PACK,
    agro_processing: AGRO_PACK,
    mining: MINING_PACK,
    oil_gas_services: OIL_GAS_PACK
  };
  const fnbSubIndustries = [
    'Food & beverage manufacturing',
    'Bakery / Flour / Grain-based processing',
    'Dairy processing (milk, yoghurt, cheese)',
    'Beverages (juice, soda, water)',
    'Meat processing',
    'Snacks & packaged foods',
    'Edible oils (sunflower, palm, groundnut, etc.)'
  ];
  const textileSubIndustries = [
    'Textile & garment manufacturing',
    'CMT Factory (Cut-Make-Trim for buyers)',
    'Uniforms & Workwear Manufacturing',
    'Fashion / Retail Brand (own brand)',
    'Knitwear / T-shirts / Casualwear (high volume)',
    'Tailoring / Bespoke / Small Batch (custom)'
  ];
  const furnitureSubIndustries = [
    'Furniture & carpentry production',
    'Custom Residential Furniture (beds, wardrobes, kitchens)',
    'Commercial Fit-Out & Office Furniture',
    'Doors, Windows & Building Joinery',
    'Mass/Batch Production (standard designs)',
    'Upholstered Furniture (sofas, chairs)'
  ];
  const metalSubIndustries = [
    'Metal works / fabrication',
    'Structural Steel & Construction Fabrication (frames, beams, gates, stairs)',
    'Doors, Windows, Grills & Security Products',
    'Industrial Fabrication (tanks, platforms, racks, hoppers)',
    'Automotive Fabrication (trailers, bodies, repairs/mods)',
    'Aluminum Fabrication (doors, partitions, glazing frames)',
    'Stainless Steel Works (kitchen, hospital, food-grade)'
  ];
  const plasticsSubIndustries = [
    'Plastics & packaging manufacturing',
    'Film & Bag Manufacturing (poly bags, shrink film, liners)',
    'Rigid Packaging (bottles, jerrycans, containers)',
    'Injection Molding (caps, parts, household items)',
    'Printing & Lamination (labels, flexible packs, pouches)',
    'Recycled Plastics (regrind, washing, pelletizing)',
    'Industrial Packaging (drums, crates, bulk packaging accessories)'
  ];
  const soapSubIndustries = [
    'Soap / detergents / cosmetics production',
    'Laundry Detergent & Multipurpose Cleaners (powder/liquid)',
    'Bar Soap & Bath Soap (beauty/medicated)',
    'Personal Care & Cosmetics (lotions, creams, oils, hair products)',
    'Institutional / Bulk Supply (hotels, hospitals, schools)',
    'Natural/Organic & Sensitive-Skin Brands',
    'Distributors / Private Label Manufacturing'
  ];
  const bricksSubIndustries = [
    'Bricks / blocks / cement products',
    'Manual Yard Bricks (small-scale clay bricks / hand-mold)',
    'Concrete Blocks (hollow/solid blocks, machine-vibro)',
    'Pavers / Kerbs / Precast (high mix + high QC demand)',
    'Cement Tiles / Terrazzo / Floor Tiles',
    'Roofing Tiles (concrete tiles, decorative roofing pieces)',
    'Multi-Product Yard (blocks + pavers + tiles + custom orders)'
  ];
  const waterSubIndustries = [
    'Bottled water / ice production',
    'Small Plant Bottled Water (manual/semi-automatic)',
    'Automated Bottling Line (higher volume)',
    'Sachet Water (high volume, price-sensitive)',
    'Ice Blocks / Ice Cubes (standalone)',
    'Bottled Water + Ice (combined plant)',
    'Institutional Supply (schools, hospitals, offices, events)',
    'Distributor / Private Label Bottling'
  ];
  const fmcgSubIndustries = [
    'FMCG wholesale & distribution',
    'Cash & Carry Wholesaler (walk-in shop, bulk buying)',
    'Route-to-Market Distributor (van sales to retailers)',
    'Sub-Distributor / Agent Network (many small resellers)',
    'Modern Trade / Key Accounts (supermarkets, chains)',
    'Importer + Regional Distributor (cross-border + bulk)',
    'Cold-Chain / Perishables Distributor (dairy, frozen, chilled)'
  ];
  const assemblySubIndustries = [
    'Assembly / OEM',
    'Assembly / OEM (electronics, components)',
    'EMS Contract Manufacturer (PCBA + Box Build)',
    'PCBA-Only (SMT + Reflow + AOI + Test)',
    'Cable / Harness / Connector Assembly',
    'High-Mix Low-Volume Custom Builds (Industrial, Lab, Prototypes)',
    'White-Label / Multi-Variant OEM (Many clients, similar products)',
    'Repair / Refurb / Rework Center (Reverse Logistics)',
    'Precision Electronics / Medical / High-Compliance Assembly',
    'Contract Electronics Assembly (EMS) — boards & devices',
    'Component Assembly OEM (connectors, harnesses, modules)',
    'Final Device Assembly (phones, gadgets, appliances sub-assemblies)',
    'Private Label / White Label OEM (multiple variants for buyers)',
    'High-Mix Low-Volume (custom builds)'
  ];
  const isFnbManufacturing = profile.industry === 'manufacturing' && fnbSubIndustries.includes(profile.subIndustry);
  const isTextileManufacturing = profile.industry === 'manufacturing' && textileSubIndustries.includes(profile.subIndustry);
  const isFurnitureManufacturing = profile.industry === 'manufacturing' && furnitureSubIndustries.includes(profile.subIndustry);
  const isMetalManufacturing = profile.industry === 'manufacturing' && metalSubIndustries.includes(profile.subIndustry);
  const isPlasticsManufacturing = profile.industry === 'manufacturing' && plasticsSubIndustries.includes(profile.subIndustry);
  const isSoapManufacturing = profile.industry === 'manufacturing' && soapSubIndustries.includes(profile.subIndustry);
  const isBricksManufacturing = profile.industry === 'manufacturing' && bricksSubIndustries.includes(profile.subIndustry);
  const isWaterManufacturing = profile.industry === 'manufacturing' && waterSubIndustries.includes(profile.subIndustry);
  const isFmcgRetail = profile.industry === 'retail' && fmcgSubIndustries.includes(profile.subIndustry);
  const isAssemblyManufacturing = profile.industry === 'manufacturing' && assemblySubIndustries.includes(profile.subIndustry);
  const pack = isFnbManufacturing
    ? FNB_PACK
    : isTextileManufacturing
      ? TEXTILE_PACK
      : isFurnitureManufacturing
        ? FURNITURE_PACK
        : isMetalManufacturing
          ? METAL_PACK
          : isPlasticsManufacturing
            ? PLASTICS_PACK
            : isSoapManufacturing
              ? SOAP_PACK
              : isBricksManufacturing
                ? BRICKS_PACK
                : isWaterManufacturing
                  ? WATER_PACK
                  : isFmcgRetail
                    ? FMCG_PACK
                  : isAssemblyManufacturing
                    ? ASSEMBLY_PACK
            : (packByIndustry[profile.industry] || AGRO_PACK);
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

    // Retrieve Actions
    const mapEffort = (e: 'S' | 'M' | 'L'): 'Low' | 'Med' | 'High' => {
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
          effort: mapEffort(a.effort),
          metric,
          signalTag: primarySignal,
          costType: intel?.cost_type,
          evidencePrompt: intel?.evidence_request,
          verificationCriteria: intel?.verification_criteria,
          optionalEvidence: intel?.optional_evidence,
          autoTags: linkedTags.length > 0 ? linkedTags : undefined
        };
      });

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
      evidenceFlags: isAssemblyManufacturing
        ? [
          ...res.topSignals.map(tag => humanizeSignalTag(tag)),
          ...assemblyAutoTags
            .filter(tag => tag.trigger_signals.some(signal => res.topSignals.includes(signal)))
            .slice(0, 2)
            .map(tag => `${tag.tag_id} (${tag.severity})`)
        ]
        : res.topSignals,
      // deepInsight: missionBriefItem?.text || `${hookItem?.text || 'Insight'}: ${leakItem?.text || 'Analysis pending.'}`,
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
        // Find cost text from the top leak signal
        const topLeakItem = pack.library.find(i =>
          i.type === 'leak' &&
          matchesLineType(i.line_type) &&
          i.signal_tags.includes(topSignal as SignalTag)
        ) || pack.library.find(i => i.type === 'leak' && i.signal_tags.includes(topSignal as SignalTag));
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
      whyItMatters: (
        profile.industry === 'mining'
          ? 'Mining profitability is decided by recovery discipline, custody proof, and control of hidden losses.'
          : profile.industry === 'oil_gas_services'
            ? 'Oil and gas service margin is protected by execution readiness, commercial discipline, and compliance-grade proof.'
            : isFnbManufacturing
              ? 'Food and beverage margin is decided by yield control, first-pass quality, and traceable execution discipline.'
              : isTextileManufacturing
                ? 'Textile and garment margin is driven by line flow discipline, first-pass quality, and style-level costing control.'
                : isFurnitureManufacturing
                  ? 'Furniture and carpentry margin depends on measurement discipline, waste control, and reliable finishing and delivery execution.'
                  : isMetalManufacturing
                    ? 'Metal fabrication margin is protected by drawing discipline, fit-up quality, and job-level costing control.'
                    : isPlasticsManufacturing
                      ? 'Plastics and packaging margin is driven by yield stability, changeover discipline, and specification-grade consistency.'
                      : isSoapManufacturing
                        ? 'Soap and cosmetics margin depends on batch consistency, fill-weight control, and claim-safe quality discipline.'
                        : isBricksManufacturing
                          ? 'Bricks and cement-product margin is protected by mix control, curing discipline, and dispatch reliability.'
                          : isWaterManufacturing
                            ? 'Bottled water and ice margin depends on hygiene discipline, fill and seal control, and route-level cash control.'
                            : isFmcgRetail
                              ? 'FMCG distribution margin depends on stock discipline, route reliability, credit control, and repeat-order consistency.'
                            : isAssemblyManufacturing
                              ? 'Assembly and OEM margin depends on first-pass yield discipline, traceability control, and stable cross-functional execution.'
          : profile.industry === 'agri_input'
            ? 'Agri-input businesses win when stock, advisory quality, and cash discipline are systemized.'
            : 'Agro-processing requires tight control of yield and flow.'
      ),
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
