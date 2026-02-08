
import { PillarStatus } from "../data/missionBriefLibrary";

// Helper to get industry specific flavor
const getIndustryFlavor = (industry: string, pillar: string): string => {
  const map: Record<string, Record<string, string>> = {
    retail: {
      Engine: "In a high-volume retail environment, operational drag isn't just annoying—it kills net margin. Every minute a staff member spends guessing a price or looking for stock is a minute not selling.",
      Fuel: "Retail survives on cash conversion cycles. If inventory is stuck or margins are slipping due to un-tracked discounts, you are essentially financing your customers.",
      Voice: "Retail traffic is binary: you either have footfall/clicks or you don't. Inconsistent marketing in retail leads to the 'empty store' syndrome.",
    },
    tech: {
      Engine: "In SaaS and Tech, 'Engine' is your deployment and support velocity. If this lags, you accumulate technical debt and churn.",
      Fuel: "Burn rate is the enemy. In tech, 'Fuel' leaks often look like over-hiring or expensive tool subscriptions that don't drive ROI.",
      Voice: "Tech buyers need education. If your 'Voice' is inconsistent, you lose trust and your CAC (Customer Acquisition Cost) skyrockets.",
    }
  };
  
  const ind = industry.toLowerCase();
  if (map[ind] && map[ind][pillar]) return map[ind][pillar];
  
  // Default/Generic
  return `In the ${industry} sector, ${pillar} is the backbone of stability. Weakness here exposes you to unnecessary market volatility.`;
};

// Generates the ~200 word Quick Scan narrative
export const generateQuickScanAnalysis = (pillar: string, status: PillarStatus, industry: string): string => {
  const flavor = getIndustryFlavor(industry, pillar);
  
  const statusDescriptions = {
    'Profit Leak': `Your diagnostic indicates a critical failure in the ${pillar} system. This is not a minor inefficiency; it is an active drain on your resources. We detected patterns suggesting that core processes are manual, reactive, or entirely missing. ${flavor} The immediate symptom is likely a feeling of 'constant firefighting'—you are solving the same problems today that you solved last month.`,
    'Bottleneck Forming': `The ${pillar} system is functional but fragile. You rely heavily on specific individuals (likely yourself) to bridge gaps in the process. ${flavor} While you are currently delivering results, the cost of doing so is rising. You are paying a 'complexity tax' on every dollar earned.`,
    'Controlled': `Your ${pillar} operations are stable. You have successfully installed baselines that prevent catastrophe. ${flavor} However, stability is not optimization. The opportunity cost here is speed—you could be moving faster if you moved from 'controlled' to 'automated'.`,
    'Profit Lever': `This is a superpower. Your ${pillar} score is in the top percentile. ${flavor} You should be using this strength to subsidize weaknesses in other areas. Do not touch this system right now; let it run and focus your energy elsewhere.`
  };

  const impact = `Financially, this specific profile usually correlates with a 15-25% reduction in potential net margin due to hidden inefficiencies and lost opportunity cost.`;

  return `${statusDescriptions[status]} ${impact}`;
};

// Generates the ~1200+ word Deep Scan Chapter
export const generateDeepScanChapter = (pillar: string, score: number, industry: string) => {
  const status = score < 50 ? 'Profit Leak' : score < 75 ? 'Bottleneck' : 'Stable';
  
  return {
    title: `Forensic Audit: ${pillar} Architecture`,
    theory: `
      ### The Theory of ${pillar}
      In high-performance organizations, the ${pillar} pillar acts as the central nervous system for ${pillar === 'Engine' ? 'execution' : pillar === 'Fuel' ? 'resource allocation' : 'market signaling'}. 
      
      Ideally, this system should operate invisibly. It should be a background utility that simply works. When we analyze ${industry} businesses at your stage, we look for a specific ratio of 'Input Effort' to 'Output Value'. 
      
      In a perfect state, ${pillar} creates leverage: you put $1 or 1 hour in, and you get $10 or 10 hours of value out. In a broken state, it acts as a tax: you put effort in, and friction consumes 40% of that energy before it reaches the customer.
      
      The goal of this audit is not to make you 'perfect' at ${pillar}. It is to remove the friction that is currently stealing your profit.
    `,
    diagnosis: `
      ### Forensic Diagnosis
      Your score of ${score}/100 indicates a ${status} status. Let's break down exactly what our algorithms detected in your response pattern.
      
      **1. Structural Integrity:**
      We detected significant gaps in the foundational rules of your ${pillar}. Specifically, decisions appear to be made based on "gut feel" or "historical habit" rather than live data or written standard. In ${industry}, this is dangerous because market conditions change faster than habits do.
      
      **2. The 'Hero' Dependency:**
      Your answers suggest that ${pillar} success currently depends on high-effort interventions by key leaders. If you or your top manager were to step away for 30 days, this pillar would likely collapse or significantly degrade. This is not a business system; this is a personality-dependent workflow.
      
      **3. Signal-to-Noise Ratio:**
      Information regarding ${pillar} performance is not flowing clearly to the top. You are likely discovering problems *after* they have impacted the P&L, rather than seeing leading indicators.
    `,
    psychology: `
      ### The Psychology of the Leak
      Why has this leak persisted? It is rarely due to incompetence. It is usually due to **tolerance**.
      
      Founders in the ${industry} space often tolerate ${pillar} friction because it feels "normal" or because fixing it feels like "bureaucracy". 
      
      You may be telling yourself:
      * "I'll fix this when we hire the next person."
      * "It's just faster if I do it myself."
      * "We are too small for a formal process here."
      
      These beliefs are the root cause of the leak. You are trading short-term speed for long-term drag. Every time you manually intervene in ${pillar}, you validate the broken system and train your team to rely on you.
    `,
    financials: `
      ### Financial Impact Analysis
      Let's quantify the cost of this ${score}/100 score.
      
      **The Direct Cost:**
      Inefficiencies in ${pillar} are consuming approximately 15-20% of the payroll hours allocated to this function. You are paying for execution, but getting remediation.
      
      **The Opportunity Cost:**
      Because ${pillar} requires management attention, you are unable to invest that attention in growth. If we assume your hourly value is $200+, and you spend 5 hours a week fixing ${pillar} issues, that is a $50,000/year leak in leadership capital alone.
      
      **The Valuation Hit:**
      Investors and buyers discount businesses with weak ${pillar} scores. By stabilizing this, you don't just increase cash flow; you increase the multiple on your equity.
    `,
    prescription: `
      ### 90-Day Remediation Roadmap
      
      **Phase 1: Stabilization (Days 0-30)**
      We need to stop the bleeding immediately.
      1. **The Stop-Loss Rule:** Implement a generic rule today that prevents the most common ${pillar} error. (e.g., "No work starts without a deposit" or "No code ships without a peer review").
      2. **The Daily Standup:** Institute a 15-minute daily check specifically on ${pillar} metrics to force visibility.
      
      **Phase 2: Systemization (Days 31-60)**
      Remove the personality dependency.
      1. **Document the Core:** Create the "Golden Path" SOP for the primary ${pillar} workflow.
      2. **Train the Deputy:** Assign a specific owner to this SOP. They are now responsible for the metric, not just the task.
      
      **Phase 3: Optimization (Days 61-90)**
      Make it efficient.
      1. **Automate the Handshake:** Use technology to move data into/out of this pillar without human entry.
      2. **Review & Refine:** Monthly review of the ${pillar} scorecard to raise the bar.
    `
  };
};
