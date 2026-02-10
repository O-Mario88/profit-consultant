
import { PillarStatus } from "../data/missionBriefLibrary";

type PillarDetail = {
  systemRole: string;
  typicalSymptom: string;
  leverageMove: string;
  coreKpi: string;
};

const PILLAR_DETAILS: Record<string, PillarDetail> = {
  operations: {
    systemRole: "execution reliability and throughput discipline",
    typicalSymptom: "teams stay busy but output quality and lead time keep drifting",
    leverageMove: "lock standard work, handoffs, and first-pass quality controls",
    coreKpi: "first-pass yield / on-time execution"
  },
  money: {
    systemRole: "unit economics, cash velocity, and margin protection",
    typicalSymptom: "revenue grows faster than cash and retained profit",
    leverageMove: "tighten pricing guardrails, cost visibility, and collection cadence",
    coreKpi: "gross margin / DSO / cash conversion"
  },
  market: {
    systemRole: "demand quality, repeat purchase, and price power",
    typicalSymptom: "new sales require high effort while repeat behavior stays fragile",
    leverageMove: "stabilize proposition clarity, proof assets, and account cadence",
    coreKpi: "repeat rate / conversion / win rate"
  },
  leadership: {
    systemRole: "decision speed, accountability, and execution cadence",
    typicalSymptom: "decisions escalate upward and the same issues recur weekly",
    leverageMove: "set ownership, review rhythm, and closure discipline",
    coreKpi: "action closure / decision latency"
  },
  innovation: {
    systemRole: "controlled learning, offer evolution, and complexity governance",
    typicalSymptom: "changes are reactive and improvement cycles are inconsistent",
    leverageMove: "run small tested iterations and scale only proven winners",
    coreKpi: "test-to-scale ratio / new offer contribution"
  },
  risk: {
    systemRole: "containment readiness, compliance, and loss prevention",
    typicalSymptom: "incidents are handled ad hoc and repeat under pressure",
    leverageMove: "institutionalize traceability, policy enforcement, and audit routines",
    coreKpi: "incident recurrence / traceability completeness"
  },
  people: {
    systemRole: "capability consistency, role ownership, and behavior alignment",
    typicalSymptom: "performance quality varies by shift or by who is present",
    leverageMove: "certify critical steps and align incentives to quality outcomes",
    coreKpi: "error variance by staff / certification coverage"
  }
};

const LEGACY_PILLAR_ALIASES: Record<string, string> = {
  engine: "operations",
  fuel: "money",
  voice: "market",
  brain: "leadership",
  pulse: "innovation",
  shield: "risk",
  tribe: "people",
  "innovation & creativity": "innovation"
};

const normalizePillarKey = (pillar: string): string => {
  const raw = pillar.toLowerCase();
  return LEGACY_PILLAR_ALIASES[raw] || raw;
};

const getPillarDetail = (pillar: string): PillarDetail => {
  const key = normalizePillarKey(pillar);
  return PILLAR_DETAILS[key] || {
    systemRole: "operating discipline and decision quality",
    typicalSymptom: "execution feels reactive and outcomes vary by week",
    leverageMove: "standardize controls and tighten ownership",
    coreKpi: "execution consistency"
  };
};

const getIndustryLens = (industry: string): string => {
  const map: Record<string, string> = {
    retail: "In retail, small execution errors convert immediately into margin loss and churn.",
    manufacturing: "In manufacturing, weak controls compound through rework, delays, and warranty exposure.",
    services: "In services, inconsistency erodes trust faster than acquisition can replace it.",
    tech: "In tech, process drift quickly becomes churn, rework, and expensive firefighting.",
    construction: "In construction, operational discipline determines whether growth creates profit or claims.",
    agriculture: "In agriculture, timing and quality discipline directly control cash conversion and waste.",
    agro_processing: "In agro-processing, variability in flow and yield drives most hidden losses."
  };
  return map[industry.toLowerCase()] || `In ${industry}, this pillar directly influences cost-to-serve, reliability, and growth quality.`;
};

const getStatusDiagnosis = (status: PillarStatus): string => {
  switch (status) {
    case 'Profit Leak':
      return "This pillar is an active leak and is currently reducing your execution quality and economic output.";
    case 'Bottleneck Forming':
      return "This pillar is functional but unstable; performance depends too much on manual intervention.";
    case 'Controlled':
      return "This pillar is stable, but it is still operating below its leverage potential.";
    case 'Profit Lever':
      return "This pillar is a strategic advantage and can be used to accelerate weaker areas.";
    default:
      return "This pillar needs structured attention to sustain performance.";
  }
};

const getStatusPriority = (status: PillarStatus, pillar: string): string => {
  switch (status) {
    case 'Profit Leak':
      return `Priority: deploy a 7-day containment sprint on ${pillar} before scaling any new initiative.`;
    case 'Bottleneck Forming':
      return `Priority: harden controls now so growth does not convert this into a full leak.`;
    case 'Controlled':
      return `Priority: move from basic control to optimization and remove remaining manual drag.`;
    case 'Profit Lever':
      return `Priority: codify this playbook and transfer methods into your next weakest pillar.`;
    default:
      return "Priority: assign ownership and set a weekly KPI review cadence.";
  }
};

export const generateQuickScanAnalysis = (pillar: string, status: PillarStatus, industry: string): string => {
  const detail = getPillarDetail(pillar);
  const diagnosis = getStatusDiagnosis(status);
  const industryLens = getIndustryLens(industry);
  const priority = getStatusPriority(status, pillar);

  return `${diagnosis} Consultant view: ${pillar} governs ${detail.systemRole}, and the current pattern suggests ${detail.typicalSymptom}. ${industryLens} Priority metric: ${detail.coreKpi}. ${priority}`;
};

export const generateDeepScanChapter = (pillar: string, score: number, industry: string) => {
  const detail = getPillarDetail(pillar);
  const status: PillarStatus =
    score < 40 ? 'Profit Leak' :
      score < 60 ? 'Bottleneck Forming' :
        score < 80 ? 'Controlled' : 'Profit Lever';

  const diagnosis = getStatusDiagnosis(status);
  const priority = getStatusPriority(status, pillar);

  const executionRiskBand =
    score < 40 ? "High instability: recurring firefighting and value leakage are likely active." :
      score < 60 ? "Elevated fragility: output can hold, but only with sustained management effort." :
        score < 80 ? "Moderate risk: controls are present, but variability still taxes speed." :
          "Low risk: this pillar is stable enough to be used as a scaling asset.";

  return {
    theory: `### Consultant Lens
${pillar} is the operating system for ${detail.systemRole}. When this system is healthy, decisions are repeatable, ownership is clear, and execution quality is predictable.

${getIndustryLens(industry)}

Primary control objective: convert effort into reliable output, not heroic recovery work.`,
    diagnosis: `### What The Score Signals (${score}/100)
${diagnosis}

Risk band: ${executionRiskBand}

Observed operating pattern: ${detail.typicalSymptom}. This is usually a control design issue, not a talent issue.

Primary KPI to stabilize first: **${detail.coreKpi}**.`,
    psychology: `### Leadership Pattern Behind The Result
Teams usually tolerate this leak because short-term fixes feel faster than system redesign. Over time, that creates dependency on a few people and normalizes inconsistency.

The shift required now is managerial: enforce one way of working for critical steps, measure adherence weekly, and close repeat failures to root cause.

Until this pillar is systemized, growth will amplify noise instead of margin.`,
    financials: `### Economic Impact And 30-Day Priority
Current impact profile:
- Time leakage through rework, exceptions, and delayed decisions.
- Margin compression from preventable operational variance.
- Trust risk when delivery quality is inconsistent.

Expected upside from disciplined remediation: improved conversion of effort into cash, lower incident cost, and higher planning confidence.

Recommended next move: ${detail.leverageMove}. ${priority}`
  };
};
