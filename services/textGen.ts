
import { PillarStatus } from "../data/missionBriefLibrary";

type PillarDetail = {
  systemRole: string;
  typicalSymptom: string;
  leverageMove: string;
  coreKpi: string;
  humanName: string;        // Friendly name for conversational tone
  exploratoryHook: string;  // Opening curiosity hook for Quick Scan
  prescriptiveVerb: string; // Action verb for Deep Scan
};

const PILLAR_DETAILS: Record<string, PillarDetail> = {
  operations: {
    systemRole: "how reliably your team converts effort into actual output",
    typicalSymptom: "things stay busy but finished work keeps slipping or needing rework",
    leverageMove: "lock down your standard workflows, handoffs, and first-pass quality checks",
    coreKpi: "first-pass yield and on-time completion",
    humanName: "Operations",
    exploratoryHook: "We noticed something interesting about how work moves through your business",
    prescriptiveVerb: "Tighten"
  },
  money: {
    systemRole: "whether revenue actually converts into cash you keep",
    typicalSymptom: "sales are growing but somehow there's never enough cash at the end of the month",
    leverageMove: "sharpen your pricing guardrails, make costs visible, and speed up collections",
    coreKpi: "gross margin, days-sales-outstanding, and cash conversion",
    humanName: "Money",
    exploratoryHook: "There's a pattern in how money flows through your business that's worth exploring",
    prescriptiveVerb: "Protect"
  },
  market: {
    systemRole: "the quality of demand you're attracting and whether customers come back",
    typicalSymptom: "every new sale feels like pushing a boulder uphill, and repeat business is unpredictable",
    leverageMove: "clarify your proposition, build proof assets, and install a customer follow-up rhythm",
    coreKpi: "repeat purchase rate, conversion rate, and win rate",
    humanName: "Market",
    exploratoryHook: "Your market position tells an interesting story — and there may be hidden leverage here",
    prescriptiveVerb: "Sharpen"
  },
  leadership: {
    systemRole: "how fast decisions happen and whether things actually get closed",
    typicalSymptom: "decisions keep floating upward and the same problems show up every week",
    leverageMove: "assign clear owners, install a weekly review rhythm, and close open loops",
    coreKpi: "action closure rate and decision turnaround time",
    humanName: "Leadership",
    exploratoryHook: "The way decisions flow in your business reveals something important",
    prescriptiveVerb: "Accelerate"
  },
  innovation: {
    systemRole: "whether your business learns and evolves without creating chaos",
    typicalSymptom: "changes feel reactive and there's no consistent cycle of testing and improving",
    leverageMove: "run small experiments, measure what works, and only scale proven winners",
    coreKpi: "test-to-scale ratio and new offer revenue contribution",
    humanName: "Innovation",
    exploratoryHook: "How your business handles change and new ideas is revealing",
    prescriptiveVerb: "Focus"
  },
  risk: {
    systemRole: "how prepared you are when things go wrong — and whether the same problems keep recurring",
    typicalSymptom: "problems get handled in the moment but nobody's fixing the root cause",
    leverageMove: "build traceability, enforce key policies, and schedule regular audits",
    coreKpi: "incident recurrence rate and traceability completeness",
    humanName: "Risk",
    exploratoryHook: "Your risk profile has a pattern that's worth paying attention to",
    prescriptiveVerb: "Lock down"
  },
  people: {
    systemRole: "whether performance quality stays consistent regardless of who's working",
    typicalSymptom: "output quality swings depending on which team members are present that day",
    leverageMove: "certify people on critical tasks and tie incentives to quality, not just volume",
    coreKpi: "performance variance by staff and certification coverage",
    humanName: "People",
    exploratoryHook: "Your team dynamics show something that most business owners miss",
    prescriptiveVerb: "Standardize"
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
    systemRole: "overall discipline and decision quality in your business",
    typicalSymptom: "things feel reactive and results vary from week to week",
    leverageMove: "standardize your controls and assign clear ownership",
    coreKpi: "execution consistency",
    humanName: pillar,
    exploratoryHook: "There's something here worth looking at more closely",
    prescriptiveVerb: "Fix"
  };
};

const getIndustryLens = (industry: string): string => {
  const map: Record<string, string> = {
    retail: "In retail, even small execution slips show up fast — as lost sales, shrinkage, or customers who quietly stop coming back.",
    manufacturing: "In manufacturing, once control slips, it cascades — rework, delays, warranty claims, and margin erosion that's hard to see until it's significant.",
    services: "In professional services, inconsistency doesn't just cost money — it erodes trust faster than any marketing spend can rebuild.",
    tech: "In tech, process drift turns into churn, tech debt, and expensive firefighting cycles that drain your best people.",
    construction: "In construction, the difference between profitable growth and liability is almost always operational discipline.",
    agriculture: "In agriculture, timing and quality control directly determine whether you capture value or watch it evaporate between harvest and sale.",
    agro_processing: "In agro-processing, hidden losses live in yield variance, flow interruptions, and the gap between what you produce and what you actually sell.",
    mining: "In mining, operational discipline isn't optional — it's the difference between margin and incident."
  };
  return map[industry.toLowerCase()] || `In your industry, this directly impacts your cost structure, reliability, and ability to grow profitably.`;
};

// =============================================
// QUICK SCAN — Exploratory, human, curious tone
// =============================================

const QUICK_SCAN_OPENERS_LEAK: string[] = [
  "This is worth flagging early.",
  "Something stands out here.",
  "This caught our attention.",
  "Here's what the numbers suggest.",
  "We'd want to dig deeper into this.",
];

const QUICK_SCAN_OPENERS_WATCH: string[] = [
  "This isn't broken — but it could be better.",
  "There's room to move here.",
  "Not urgent, but worth watching.",
  "This one's interesting.",
  "Good foundations — with some cracks to watch.",
];

const QUICK_SCAN_OPENERS_STABLE: string[] = [
  "This is working in your favor.",
  "You're doing something right here.",
  "Solid ground. Now the question is: can you build on it?",
  "This is one of your stronger areas.",
  "Not many businesses get this right — you have.",
];

const pick = (arr: string[], seed: string): string => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return arr[hash % arr.length];
};

export const generateQuickScanAnalysis = (pillar: string, status: PillarStatus, industry: string): string => {
  const detail = getPillarDetail(pillar);
  const industryLens = getIndustryLens(industry);
  const seed = `${pillar}-${status}-${industry}`;

  if (status === 'Profit Leak') {
    const opener = pick(QUICK_SCAN_OPENERS_LEAK, seed);
    return `${opener} Your responses around ${detail.humanName} suggest that ${detail.typicalSymptom}. That pattern — when left unchecked — tends to quietly drain both time and money.\n\n${industryLens}\n\n**The question worth asking:**\nWhat would shift if you locked down ${detail.coreKpi} this month?`;
  }

  if (status === 'Bottleneck Forming') {
    const opener = pick(QUICK_SCAN_OPENERS_WATCH, seed);
    return `${opener} ${detail.humanName} is holding up, but there's a fragility to it — ${detail.typicalSymptom}. It works today because of effort, not because of system.\n\n${industryLens}\n\n**The question worth asking:**\nIf your best person was out for two weeks, would this area hold?`;
  }

  if (status === 'Profit Lever') {
    const opener = pick(QUICK_SCAN_OPENERS_STABLE, seed);
    return `${opener} ${detail.humanName} looks strong — your responses indicate real control over ${detail.systemRole}.\n\n${industryLens}\n\n**The opportunity:**\nCould the discipline you've built here be transferred to your weaker areas?`;
  }

  // Controlled
  const opener = pick(QUICK_SCAN_OPENERS_STABLE, seed);
  return `${opener} ${detail.humanName} is in decent shape. You've got basic controls around ${detail.systemRole}, and things aren't on fire.\n\n${industryLens}\n\n**The next move:**\nOptimization — removing the remaining manual friction and making this area self-sustaining.`;
};

// =============================================
// DEEP SCAN — Prescriptive, authoritative, boardroom tone
// =============================================

export const generateDeepScanChapter = (pillar: string, score: number, industry: string) => {
  const detail = getPillarDetail(pillar);
  const status: PillarStatus =
    score < 40 ? 'Profit Leak' :
      score < 60 ? 'Bottleneck Forming' :
        score < 80 ? 'Controlled' : 'Profit Lever';

  const industryLens = getIndustryLens(industry);

  const scoreVerdict =
    score < 30 ? "This is a critical gap. It needs immediate intervention — not next quarter, this week." :
      score < 40 ? "This is actively bleeding value. Every week without a fix compounds the loss." :
        score < 50 ? "This is fragile. It's holding today, but one disruption could cascade." :
          score < 60 ? "Functional, but relying too much on manual effort. That's expensive and unsustainable." :
            score < 70 ? "Under control, but there's untapped potential here." :
              score < 80 ? "Strong foundation. Now it's about refining, not rebuilding." :
                "This is a competitive advantage. Protect it and replicate the discipline elsewhere.";

  const riskNarrative =
    score < 40 ? `The operating pattern here — ${detail.typicalSymptom} — is costing you more than you think. It creates invisible losses: time spent on rework, decisions that take too long, and quality that depends on who's working that day. These compound silently.` :
      score < 60 ? `Right now, ${detail.humanName} is being held together by effort rather than system. That means ${detail.typicalSymptom}. It's not catastrophic, but it creates drag — and drag gets expensive at scale.` :
        score < 80 ? `You've done the hard part — ${detail.humanName} has structure. But there's still variance in ${detail.systemRole} that creates unnecessary friction. Cleaning that up would free capacity and improve predictability.` :
          `${detail.humanName} is operating with real discipline. ${detail.systemRole.charAt(0).toUpperCase() + detail.systemRole.slice(1)} is consistent and reliable. This is the kind of control that allows you to take risks elsewhere with confidence.`;

  const psychologyInsight =
    score < 50 ?
      `Most teams tolerate this because fixing it feels harder than living with it. The daily workaround becomes normal. But "normal" in this case means you're paying a hidden tax on every transaction, every decision, every handoff.\n\nThe shift isn't about working harder — it's about building a small number of non-negotiable standards and enforcing them consistently. One standard, applied every day, beats ten initiatives launched and abandoned.` :
      score < 70 ?
        `Your team has the capability — that's clear from the data. The gap is between what people know how to do and what actually happens consistently. That's a systems problem, not a people problem.\n\nThe most effective move here is removing the variability, not adding more training. Lock the process, measure it weekly, and watch consistency improve on its own.` :
        `This score reflects real organizational discipline. The risk now is complacency — assuming that what works today will keep working as you grow. The best operators continuously stress-test their strongest areas.\n\nConsider: what would break first if volume doubled? That's where to invest your next round of refinement.`;

  return {
    theory: `### What ${detail.humanName} Really Controls

${detail.humanName} isn't just a department or a function — it governs ${detail.systemRole}. When it's healthy, decisions become repeatable, ownership is clear, and you can predict outcomes with confidence. When it breaks down, everything downstream suffers.

${industryLens}

**The core question:** Is your ${detail.humanName.toLowerCase()} system converting effort into reliable output — or into recovery work?`,

    diagnosis: `### Your Score: ${score}/100 — ${scoreVerdict}

${riskNarrative}

**What the data reveals:** ${detail.typicalSymptom}. In our experience, this is almost always a control design issue — not a talent issue. Your people are likely capable; the system around them isn't setting them up to succeed.

**The metric that matters most:** ${detail.coreKpi}. If you track one thing in ${detail.humanName.toLowerCase()} this month, track that.`,

    psychology: `### The Pattern Behind This Score

${psychologyInsight}`,

    financials: `### The Business Impact — and What to Do About It

**What this costs you today:**
${score < 50 ? `
- **Time:** Rework, firefighting, and decisions that take 3x longer than they should
- **Cash:** Margin compression from preventable errors and missed opportunities  
- **Trust:** Inconsistent delivery that makes customers (and your team) question reliability` :
        score < 70 ? `
- **Time:** Manual oversight that could be automated or eliminated
- **Cash:** Small leaks that individually seem minor but compound into real money  
- **Trust:** Occasional inconsistencies that prevent you from charging premium prices` :
          `
- **Time:** Minimal — your systems are carrying the load
- **Cash:** You're capturing most of the available margin  
- **Trust:** High — this is likely a reason customers choose you`}

**${detail.prescriptiveVerb} ${detail.humanName.toLowerCase()} — here's the move:**
${detail.leverageMove}. ${score < 50 ? `Start with a 7-day containment sprint: identify the top 3 failure points, assign one owner per failure, and report daily until closed.` : score < 70 ? `Set a 30-day target: reduce variance in ${detail.coreKpi} by 20%. Review weekly. One owner, one metric, one rhythm.` : `Challenge yourself: what would it take to make this a replicable playbook that you export to your weaker pillars?`}`,

    prescription: `### Your ${detail.humanName} Protocol

**Week 1 — ${score < 50 ? 'Contain the Bleeding' : score < 70 ? 'Tighten the Screws' : 'Optimize for Scale'}:**
1. ${score < 50 ? `Map your top 3 failure points in ${detail.humanName.toLowerCase()} — where things break most often` : `Identify the remaining manual friction points in ${detail.humanName.toLowerCase()}`}
2. ${score < 50 ? 'Assign a single owner to each — with daily check-ins, not weekly' : 'Assign owners and set a weekly tracking cadence'}
3. ${score < 50 ? 'Document the current process honestly — including all the workarounds people use' : 'Document the current state and define the target state'}

**Days 8–30 — Build the System:**
Design a standardized process for ${detail.systemRole}. Install ${detail.coreKpi} tracking with a weekly review rhythm.
${score < 50 ? '**Target:** Reduce variance by 30% in 30 days.' : '**Target:** Sustain top-quartile performance and eliminate the last pockets of inconsistency.'}

**Days 31–90 — Embed and Measure:**
Track ${detail.coreKpi} weekly. ${score < 50 ? 'Move from red to amber zone.' : 'Lock in green-zone performance.'} Review process adherence monthly. Expected ROI: 5–15% margin improvement in ${detail.humanName.toLowerCase()}-driven outcomes within 90 days.`
  };
};
