
// Universal structure for pillar mission briefs
export interface BriefTemplate {
  controls: string;
  detected: string;
  costing: string;
  cliffhanger: string;
}

export type PillarStatus = 'Profit Leak' | 'Bottleneck Forming' | 'Controlled' | 'Profit Lever';

export const PILLAR_BRIEFS: Record<string, Record<PillarStatus, BriefTemplate>> = {
  Engine: {
    'Profit Leak': {
      controls: "Engine controls how work moves from {lead} → {order} → {delivery} → payment.",
      detected: "We detected manual dependency and owner/team bottlenecks.",
      costing: "This inefficiency acts as a 'Time Tax' on every dollar earned. Currently, approximately 15-20% of your payroll is likely being consumed by non-productive activities like reworking errors, chasing missing information, or waiting for approvals. This artificially compresses your margins and makes scaling impossible without linear hiring.",
      cliffhanger: "The Deep Scan will map your entire delivery workflow step-by-step to identify the exact 'Constraint Step'. You will see precisely where the bottleneck lies (e.g., The Review Stage) and get a specific protocol to widen that pipe immediately."
    },
    'Bottleneck Forming': {
      controls: "Engine controls how work moves from {lead} → {order} → {delivery} → payment.",
      detected: "Execution looks functional, but handoffs and consistency are slipping.",
      costing: "Small friction points are compounding into expensive delays. While you aren't bleeding cash yet, your 'Cost to Deliver' is rising faster than your revenue. This means as you grow, you will actually become less profitable due to the hidden costs of coordination chaos.",
      cliffhanger: "The Deep Scan will isolate the top 2 workflow choke points where information is getting stuck. We will reveal exactly which handoffs are failing and provide a lightweight 'Golden Path' playbook to smooth them out."
    },
    'Controlled': {
      controls: "Engine controls how work moves from {lead} → {order} → {delivery} → payment.",
      detected: "Your operating rhythm is mostly stable; the biggest gain is tightening repeatability.",
      costing: "You are currently leaving 'Efficiency Dividends' on the table. While stable, manual steps in your process are preventing you from achieving the 30%+ net margins typical of optimized firms in your sector. You are paying for stability with speed.",
      cliffhanger: "The Deep Scan will identify the specific low-value administrative tasks that can be fully automated. We will reveal a plan to reclaim 10+ hours of leadership time per week by shifting from 'Controlled' to 'Automated'."
    },
    'Profit Lever': {
      controls: "Engine controls how work moves from {lead} → {order} → {delivery} → payment.",
      detected: "Your execution system is a strength; you can scale without chaos.",
      costing: "The primary cost here is Opportunity Cost. Your Engine is ready to handle 2x the volume, but if you don't feed it, that capacity is wasted overhead. You are effectively paying for a Ferrari engine but driving it in a school zone.",
      cliffhanger: "The Deep Scan will reveal how to decouple your time completely from delivery. We will show you the exact delegation limits required to turn this department into a self-managing asset that grows without you."
    }
  },
  Fuel: {
    'Profit Leak': {
      controls: "Fuel controls margin, cash collection, pricing discipline, and survival.",
      detected: "Signals of cash fog (profit unclear) and soft terms.",
      costing: "You are essentially financing your customers at 0% interest while absorbing all the risk. Weak collection terms and discounting 'to close' are eroding your bottom line by an estimated 10-15%. You are working harder for 'busy broke' outcomes.",
      cliffhanger: "The Deep Scan will audit your last 3 months of transactions to find the 'Phantom Expenses' and 'Margin Leaks' you don't see. We will reveal a 13-week cash flow forecast that predicts exactly when you might run out of money if changes aren't made."
    },
    'Bottleneck Forming': {
      controls: "Fuel controls margin, cash collection, pricing discipline, and survival.",
      detected: "Cash habits exist but lack consistent review rhythm.",
      costing: "You are suffering from 'Death by a Thousand Cuts'. Small subscriptions, unbilled scope creep, and slightly delayed payments are silently eating 5-8% of your net profit. This prevents you from building the war chest needed for safe growth.",
      cliffhanger: "The Deep Scan will categorize your expenses into 'Green' (Investments) and 'Red' (Waste). We will reveal the 3 highest ROI margin improvement levers you can pull immediately without hurting sales."
    },
    'Controlled': {
      controls: "Fuel controls margin, cash collection, pricing discipline, and survival.",
      detected: "Fuel looks stable.",
      costing: "You are leaving money on the table through pricing stagnation. Inflation and value improvements haven't been captured in your current model, likely costing you 10% in pure bottom-line profit that requires no extra work to capture.",
      cliffhanger: "The Deep Scan will analyze your unit economics against industry benchmarks. We will reveal a specific pricing power strategy to increase your Life Time Value (LTV) without increasing customer churn."
    },
    'Profit Lever': {
      controls: "Fuel controls margin, cash collection, pricing discipline, and survival.",
      detected: "Cash discipline is strong.",
      costing: "The risk is 'Lazy Capital'. Your cash reserves are likely sitting idle rather than being deployed into high-ROI growth channels. You are losing ground to competitors who are reinvesting aggressively.",
      cliffhanger: "The Deep Scan will model different investment scenarios. We will reveal exactly where to deploy your capital surplus to generate the highest compounding return over the next 12 months."
    }
  },
  Voice: {
    'Profit Leak': {
      controls: "Voice controls how the market discovers you, trusts you, and pays you.",
      detected: "Signals of inconsistent lead flow and weak follow-up rhythm.",
      costing: "Inconsistency is the most expensive marketing strategy. By stopping and starting your outreach, you lose the 'compound interest' of visibility. Your Customer Acquisition Cost (CAC) is likely 2x higher than necessary because you are constantly restarting cold engines.",
      cliffhanger: "The Deep Scan will audit your entire funnel from 'Stranger' to 'Customer'. We will reveal the specific drop-off point where 80% of your leads are dying and provide a script to plug that hole."
    },
    'Bottleneck Forming': {
      controls: "Voice controls how the market discovers you, trusts you, and pays you.",
      detected: "Demand exists but conversion/retention is inconsistent.",
      costing: "You are burning leads. By generating interest but failing to follow up systematically, you are paying for attention but not capturing the value. This 'Lead Waste' is costing you potential revenue every single week.",
      cliffhanger: "The Deep Scan will analyze your lead response times and follow-up frequency. We will reveal a 'Velocity Gap' report showing how much revenue you are losing simply by being too slow or too passive."
    },
    'Controlled': {
      controls: "Voice controls how the market discovers you, trusts you, and pays you.",
      detected: "Voice is stable.",
      costing: "You are relying on linear growth (adding more leads) instead of exponential growth (referrals and retention). It costs 5x more to get a new customer than to keep an existing one, yet your focus is heavily weighted on acquisition.",
      cliffhanger: "The Deep Scan will evaluate your customer lifecycle. We will reveal a specific 'Referral Loop' strategy to turn your existing happy clients into your most profitable marketing channel."
    },
    'Profit Lever': {
      controls: "Voice controls how the market discovers you, trusts you, and pays you.",
      detected: "Your pipeline is a strength.",
      costing: "The danger is 'Fulfillment Break'. If you turn up the volume on Voice without fortifying the Engine, you risk damaging your reputation by selling more than you can deliver excellently.",
      cliffhanger: "The Deep Scan will stress-test your capacity. We will reveal the safe 'Throttle Limit' for your marketing and how to align your sales velocity with your delivery capability."
    }
  },
  // Default fallbacks for other pillars to ensure no errors, detailed as well
  Brain: {
    'Profit Leak': { controls: "Brain controls priorities.", detected: "Priority chaos.", costing: "Focus switching cost is reducing team output by ~40%.", cliffhanger: "Deep Scan reveals the 'One Metric That Matters'." },
    'Bottleneck Forming': { controls: "Brain controls priorities.", detected: "Inconsistent rhythm.", costing: "Slow decision making stalls projects.", cliffhanger: "Deep Scan reveals decision bottlenecks." },
    'Controlled': { controls: "Brain controls priorities.", detected: "Stable cadence.", costing: "Delegation limits are too tight.", cliffhanger: "Deep Scan reveals delegation opportunities." },
    'Profit Lever': { controls: "Brain controls priorities.", detected: "High clarity.", costing: "Risk of key-person dependency.", cliffhanger: "Deep Scan reveals succession gaps." }
  },
  Pulse: {
    'Profit Leak': { controls: "Pulse controls quality.", detected: "Reactive quality.", costing: "Churn is erasing your growth efforts.", cliffhanger: "Deep Scan reveals the #1 churn driver." },
    'Bottleneck Forming': { controls: "Pulse controls quality.", detected: "Inconsistent feedback.", costing: "You are guessing at what customers want.", cliffhanger: "Deep Scan reveals feature gaps." },
    'Controlled': { controls: "Pulse controls quality.", detected: "Stable loop.", costing: "Innovation is slowing down.", cliffhanger: "Deep Scan reveals new market angles." },
    'Profit Lever': { controls: "Pulse controls quality.", detected: "High iteration.", costing: "Spreading resources too thin.", cliffhanger: "Deep Scan reveals focus areas." }
  },
  Shield: {
    'Profit Leak': { controls: "Shield controls risk.", detected: "High exposure.", costing: "One lawsuit or hack could end the business.", cliffhanger: "Deep Scan reveals critical vulnerabilities." },
    'Bottleneck Forming': { controls: "Shield controls risk.", detected: "Basic protection.", costing: "Growing faster than your controls.", cliffhanger: "Deep Scan reveals compliance gaps." },
    'Controlled': { controls: "Shield controls risk.", detected: "Stable protection.", costing: "Over-compliance may slow speed.", cliffhanger: "Deep Scan reveals efficiency wins." },
    'Profit Lever': { controls: "Shield controls risk.", detected: "Fortress mode.", costing: "Cost of insurance/audit is high.", cliffhanger: "Deep Scan reveals optimization." }
  },
  Tribe: {
    'Profit Leak': { controls: "Tribe controls culture.", detected: "Toxic/Slow.", costing: "Politics is replacing productivity.", cliffhanger: "Deep Scan reveals culture rot." },
    'Bottleneck Forming': { controls: "Tribe controls culture.", detected: "Silos forming.", costing: "Communication lag is costly.", cliffhanger: "Deep Scan reveals silo bridges." },
    'Controlled': { controls: "Tribe controls culture.", detected: "Stable team.", costing: "Comfort zone is setting in.", cliffhanger: "Deep Scan reveals performance edges." },
    'Profit Lever': { controls: "Tribe controls culture.", detected: "High performance.", costing: "Burnout risk is high.", cliffhanger: "Deep Scan reveals retention risks." }
  }
};

export const COST_COPY: Record<string, string[]> = {
  cash: [
    "Inefficiency here acts as a leak on net margin.",
    "Cash flow is being constrained by hidden friction.",
    "You are effectively financing inefficiencies with your own capital."
  ],
  time: [
    "Manual work is consuming valuable leadership time.",
    "Delays in this area slow down overall delivery.",
    "Rework is a hidden tax on your team's capacity."
  ],
  trust: [
    "Inconsistency is eroding customer confidence.",
    "Brand reputation is at risk due to variable quality.",
    "Churn risk increases when expectations are missed."
  ],
  risk: [
    "Compliance gaps expose the business to shock.",
    "Lack of controls creates blind spots in decision making.",
    "Operational fragility puts business continuity at risk."
  ]
};

// ... (previous content)

export const INDUSTRY_BRIEFS: Record<string, Record<string, Record<PillarStatus, BriefTemplate>>> = {
  agriculture: {
    Engine: {
      'Profit Leak': {
        controls: "In Crop Farming, the Engine is your field-to-storage workflow. A weak Engine means you work hard, but timing slips, harvest drags, and waste rises due to manual coordination.",
        detected: "We detected critical signals: Harvest starts before logistics are ready, and workers wait for instructions daily.",
        costing: "This inefficiency acts as a 'Yield Leech'. Every hour of delay or confusion during the season doesn't just cost payroll—it costs crop quality and volume. You are paying for inputs but losing the output to poor execution.",
        cliffhanger: "The Deep Scan will map your field-to-storage flow to find the 'Constraint Step'. We will reveal exactly where value is rotting."
      },
      'Bottleneck Forming': {
        controls: "Engine controls field-to-storage workflow.",
        detected: "Operations are functional but rely heavily on you or a few key people.",
        costing: "You are seeing 'Friction Cost'. The farm runs, but it requires your constant presence to avoid mistakes. This limits how many acres or cycles you can manage before quality drops.",
        cliffhanger: "The Deep Scan will identify the manual bottlenecks that can be systemized. We will show you how to increase capacity without increasing your hours."
      },
      'Controlled': {
        controls: "Engine controls field-to-storage workflow.",
        detected: "Field operations are stable and predictable.",
        costing: "You may be over-managing. The cost now is 'Administrator Tax'—you are spending time maintaining systems that could be automated or delegated.",
        cliffhanger: "The Deep Scan will find opportunities to automate reporting and logistics. We will show you how to step back from daily ops."
      },
      'Profit Lever': {
        controls: "Engine controls field-to-storage workflow.",
        detected: "Your operation is a scalable machine.",
        costing: "The risk is 'Idle Capacity'. Your systems can handle more land or crops, but you aren't feeding the machine enough volume.",
        cliffhanger: "The Deep Scan will reveal expansion opportunities. We will show you how to scale acreage without breaking the system."
      }
    },
    Fuel: {
      'Profit Leak': {
        controls: "Fuel controls cash flow, input budget, and harvest margin.",
        detected: "Signals of cash stress: Selling quickly to cover urgent needs, and unclear net margins per acre.",
        costing: "You are suffering from 'Harvest Desperation'. by selling when you *have* to, not when you *should*, you accept the lowest prices of the season. This erodes 20-30% of your potential profit instantly.",
        cliffhanger: "The Deep Scan will audit your cash cycle. We will reveal a path to building a 'Cash Buffer' so you can hold produce for better pricing."
      },
      'Bottleneck Forming': {
        controls: "Fuel controls cash flow and margin.",
        detected: "Cash is managed, but visibility is low.",
        costing: "You have 'Leakage Blindness'. You track big costs (inputs) but miss the silent leaks (waste, theft, small inefficiencies) that eat margin.",
        cliffhanger: "The Deep Scan will expose hidden costs. We will clearly show you your true Cost of Goods Sold (COGS) vs your selling price."
      },
      'Controlled': {
        controls: "Fuel controls cash flow and margin.",
        detected: "Financials are stable and tracked.",
        costing: "You are likely 'Cash Heavy'. You have stability, but you may be missing high-ROI investments in better inputs or technology.",
        cliffhanger: "The Deep Scan will model investment ROI. We will show you where to deploy capital for maximum yield increase."
      },
      'Profit Lever': {
        controls: "Fuel controls cash flow and margin.",
        detected: "Financial strength is a competitive advantage.",
        costing: "The risk is 'Conservatism'. You have the capital to dominate, but you are playing it safe instead of expanding aggressively.",
        cliffhanger: "The Deep Scan will outline aggressive growth financing. We will show you how to leverage your balance sheet for expansion."
      }
    },
    // ... Add other pillars (Voice, Brain, Pulse, Shield, Tribe) similarly if content provided. 
    // For now, mapping knowns. Using defaults for missing ones is handled by helper.
    // ... (livestock briefs)
  },
  tilapia: {
    Engine: { 'Profit Leak': { controls: "Engine controls water-routine.", detected: "Routine drift detected.", costing: "Variable oxygen/feeding kills consistency.", cliffhanger: "Deep Scan pinpoints if leak is oxygen or feeding." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Fuel: { 'Profit Leak': { controls: "Fuel controls conversion.", detected: "Margin gap detected.", costing: "FCR drift erases harvest profit.", cliffhanger: "Deep Scan calculates real cost/kg gain." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Voice: { 'Profit Leak': { controls: "Voice controls price mix.", detected: "Grade leakage.", costing: "Mixed sizes handed over at low price.", cliffhanger: "Deep Scan builds grading strategy." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Brain: { 'Profit Leak': { controls: "Brain controls timing.", detected: "Light batch planning.", costing: "Harvest driven by cash pressure.", cliffhanger: "Deep Scan builds harvest calendar." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Pulse: { 'Profit Leak': { controls: "Pulse controls growth.", detected: "Uniformity drift.", costing: "Likely density/oxygen/feeding misalignment.", cliffhanger: "Deep Scan finds time-to-market lever." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Shield: { 'Profit Leak': { controls: "Shield controls spread.", detected: "Biosecurity blind spot.", costing: "Batch mixing risks farm-wide spread.", cliffhanger: "Deep Scan creates contamination map." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Tribe: { 'Profit Leak': { controls: "Tribe controls response.", detected: "Approval-first safety.", costing: "Delays in responding to water/health.", cliffhanger: "Deep Scan defines decision boundaries." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } }
  },
  catfish: {
    Engine: { 'Profit Leak': { controls: "Engine controls grading.", detected: "Density pressure.", costing: "Size dominance kills smaller fish growth.", cliffhanger: "Deep Scan shows where growth is stolen." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Fuel: { 'Profit Leak': { controls: "Fuel controls black hole.", detected: "Feed black hole risk.", costing: "Feeding not tied to biomass/conversion.", cliffhanger: "Deep Scan calculates wastage points." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Voice: { 'Profit Leak': { controls: "Voice controls timing.", detected: "Market timing risk.", costing: "Selling without size planning forces discounts.", cliffhanger: "Deep Scan designs selling strategy." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Brain: { 'Profit Leak': { controls: "Brain controls memory.", detected: "Memory operations.", costing: "Repeat losses hidden across cycles.", cliffhanger: "Deep Scan installs batch dashboard." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Pulse: { 'Profit Leak': { controls: "Pulse controls conversion.", detected: "Growth curve signals.", costing: "System not turning feed into gain.", cliffhanger: "Deep Scan identifies ADG lever." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Shield: { 'Profit Leak': { controls: "Shield controls tool hygiene.", detected: "Cross-batch spread.", costing: "Disease moves via tools/water.", cliffhanger: "Deep Scan builds hygiene workflow." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Tribe: { 'Profit Leak': { controls: "Tribe controls consistency.", detected: "Standards vary.", costing: "Unpredictable conversion by staff member.", cliffhanger: "Deep Scan converts routines to checklists." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } }
  },
  shrimp: {
    Engine: { 'Profit Leak': { controls: "Engine controls chemistry.", detected: "Water stability risk.", costing: "Stability wins; fluctuation kills.", cliffhanger: "Deep Scan finds hidden stress driver." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Fuel: { 'Profit Leak': { controls: "Fuel controls survival.", detected: "Mortality margin gap.", costing: "Cost rises as survival drops unseen.", cliffhanger: "Deep Scan calculates survival-adjusted units." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Voice: { 'Profit Leak': { controls: "Voice controls premiums.", detected: "Traceability gap.", costing: "Premiums available but missed.", cliffhanger: "Deep Scan builds buyer readiness." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Brain: { 'Profit Leak': { controls: "Brain controls anticipation.", detected: "Reactive thresholds.", costing: "Catching problems too late.", cliffhanger: "Deep Scan installs action thresholds." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Pulse: { 'Profit Leak': { controls: "Pulse controls compound.", detected: "Performance signal drift.", costing: "Small improvements compound heavily here.", cliffhanger: "Deep Scan identifies optimization lever." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Shield: { 'Profit Leak': { controls: "Shield controls exclusion.", detected: "Biosecurity game.", costing: "One event erases season.", cliffhanger: "Deep Scan produces biosecurity map." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Tribe: { 'Profit Leak': { controls: "Tribe controls reporting.", detected: "Signal hesitation.", costing: "Losing the 'early window'.", cliffhanger: "Deep Scan sets safe reporting roles." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } }
  },
  salmon_trout: {
    Engine: { 'Profit Leak': { controls: "Engine controls flow.", detected: "Oxygen/flow discipline risk.", costing: "Intensive systems don't forgive drift.", cliffhanger: "Deep Scan identifies flow/DO break points." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Fuel: { 'Profit Leak': { controls: "Fuel controls ROI.", detected: "Feed leverage risk.", costing: "Biggest lever must tie to temp/biomass.", cliffhanger: "Deep Scan calculates feed ROI." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Voice: { 'Profit Leak': { controls: "Voice controls compliance.", detected: "Consistency demand.", costing: "Pricing power requires compliance.", cliffhanger: "Deep Scan builds compliance pack." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Brain: { 'Profit Leak': { controls: "Brain controls dashboards.", detected: "Dashboards missing.", costing: "Scalable farms need control systems.", cliffhanger: "Deep Scan installs weekly control." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Pulse: { 'Profit Leak': { controls: "Pulse controls cycle time.", detected: "Growth curve lag.", costing: "Slow cycle eats overhead.", cliffhanger: "Deep Scan selects speed lever." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Shield: { 'Profit Leak': { controls: "Shield controls incident.", detected: "Response speed risk.", costing: "Incidents are expensive.", cliffhanger: "Deep Scan produces risk shield." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Tribe: { 'Profit Leak': { controls: "Tribe controls execution.", detected: "Variation cost.", costing: "Execution gaps are immediate costs.", cliffhanger: "Deep Scan converts practice to checklist." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } }
  },
  agro_processing: {
    Engine: {
      'Profit Leak': {
        controls: "Engine controls processing flow, uptime, and throughput velocity.",
        detected: "We detected frequent downtime and undefined changeover protocols.",
        costing: "You are paying a 'Capacity Tax'. Every minute the line stops or runs slow reduces your total daily revenue potential, while your fixed costs (labor, rent, energy) stay the same. You are likely running at 60-70% of true capacity.",
        cliffhanger: "The Deep Scan will reveal your OEE (Overall Equipment Effectiveness) gap. We will pinpoint the exact 'micro-stops' killing your momentum."
      },
      'Bottleneck Forming': {
        controls: "Engine controls processing flow.",
        detected: "Production is steady but relies on manual intervention.",
        costing: "Your 'Cost to Produce' is higher than necessary due to reactive maintenance and manual bottlenecks. As you scale, these friction points will multiply.",
        cliffhanger: "The Deep Scan will identify the top 3 preventive maintenance levers to stabilize flow."
      },
      'Controlled': {
        controls: "Engine controls processing flow.",
        detected: "Line runs smoothly.",
        costing: "You may be over-staffed to maintain stability.",
        cliffhanger: "The Deep Scan will show how to automate key checks to reduce labor cost per unit."
      },
      'Profit Lever': {
        controls: "Engine controls processing flow.",
        detected: "High-speed execution.",
        costing: "Idle capacity risk.",
        cliffhanger: "The Deep Scan will model volume expansion scenarios."
      }
    },
    Fuel: {
      'Profit Leak': {
        controls: "Fuel controls yield, unit cost, and raw material efficiency.",
        detected: "Signals of yield loss (shrinkage) and giveaway weight.",
        costing: "You are suffering from 'Invisible Bleed'. Buying by bulk and selling by unit creates a margin gap if yield isn't locked. A 2% yield loss often equals a 20% drop in net profit.",
        cliffhanger: "The Deep Scan will perform a 'Mass Balance' audit to find exactly where product is vanishing."
      },
      'Bottleneck Forming': {
        controls: "Fuel controls yield and cost.",
        detected: "Costs are tracked but not per-batch.",
        costing: "Averaging your costs hides the 'Loser Batches' that drain profit.",
        cliffhanger: "The Deep Scan will install a batch-level coating model."
      },
      'Controlled': {
        controls: "Fuel controls yield and cost.",
        detected: "Good margin visibility.",
        costing: "Opportunity cost in procurement timing.",
        cliffhanger: "The Deep Scan will reveal strategic sourcing wins."
      },
      'Profit Lever': {
        controls: "Fuel controls yield and cost.",
        detected: "Strong unit economics.",
        costing: "Cash drag from slow inventory turns.",
        cliffhanger: "The Deep Scan will optimize inventory levels for cash flow."
      }
    },
    // ... Defaults for others to avoid massive file size, specific sub-industries below
    Shield: { 'Profit Leak': { controls: "Shield controls safety.", detected: "Compliance risk.", costing: "One recall could end the brand.", cliffhanger: "Deep Scan installs the 'Compliance Lock'." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Voice: { 'Profit Leak': { controls: "Voice controls usage.", detected: "Spec drift.", costing: "Buyers dictate terms due to variance.", cliffhanger: "Deep Scan builds the 'Spec Shield'." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Brain: { 'Profit Leak': { controls: "Brain controls plan.", detected: "Reactive production.", costing: "Changeovers kill efficiency.", cliffhanger: "Deep Scan builds the 'Fixed Repeating Schedule'." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Pulse: { 'Profit Leak': { controls: "Pulse controls growth.", detected: "Stagnant SKUs.", costing: "Old products clog the line.", cliffhanger: "Deep Scan identifies 'Tail SKUs' to cut." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } },
    Tribe: { 'Profit Leak': { controls: "Tribe controls speed.", detected: "Hero reliance.", costing: "Factory stops when you leave.", cliffhanger: "Deep Scan builds 'Role Cards'." }, 'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" } }
  },
  milling: {
    Fuel: {
      'Profit Leak': {
        controls: "In Milling, Fuel controls extraction rate and sieve loss.",
        detected: "We detected unchecked losses at the sieve/separation stage.",
        costing: "You are dusting your profit away. For every 1% of flour/grain lost to dust or spill, you lose pure margin. This 'Dust Tax' is likely costing you thousands per month.",
        cliffhanger: "The Deep Scan will measure your exact extraction efficiency against industry standards."
      },
      'Bottleneck Forming': {
        controls: "Fuel controls extraction.",
        detected: "Yield varies by operator.",
        costing: "Inconsistency prevents accurate pricing.",
        cliffhanger: "The Deep Scan will standardize machine settings."
      },
      'Controlled': {
        controls: "Fuel controls extraction.",
        detected: "Stable yield.",
        costing: "Power consumption may be high.",
        cliffhanger: "The Deep Scan will look at energy-per-ton efficiency."
      },
      'Profit Lever': {
        controls: "Fuel controls extraction.",
        detected: "High efficiency.",
        costing: "By-product value low.",
        cliffhanger: "The Deep Scan will find value in the bran/offal."
      }
    }
  },
  drying: {
    Engine: {
      'Profit Leak': {
        controls: "In Drying, Engine controls moisture removal speed and uniformity.",
        detected: "Inconsistent drying causing wet pockets or over-drying.",
        costing: "Over-drying gives away weight (money) for free. Under-drying risks whole-silo spoilage. You are losing on both ends of the spectrum.",
        cliffhanger: "The Deep Scan will install a 'Moisture Lock' protocol."
      },
      'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" }
    }
  },
  packaging: {
    Shield: {
      'Profit Leak': {
        controls: "In Packaging, Shield controls seal integrity and labeling accuracy.",
        detected: "High risk of label errors or seal failures.",
        costing: "A labeling error triggers a mandatory recall. This is a 'Company Killer' risk that is currently controlled only by human vigilance, not system blocks.",
        cliffhanger: "The Deep Scan will build a 'Label Verification' gate."
      },
      'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" }
    }
  },
  juices: {
    Engine: {
      'Profit Leak': {
        controls: "In Beverages, Engine controls mixing consistency and Brix levels.",
        detected: "Taste and sweetness vary between batches.",
        costing: "Inconsistency kills brand loyalty. If today's bottle tastes different from yesterday's, customers leave. You are burning your marketing spend.",
        cliffhanger: "The Deep Scan will lock your formula with a 'Brix Control' system."
      },
      'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" }
    }
  },
  oils: {
    Fuel: {
      'Profit Leak': {
        controls: "In Oils, Fuel controls extraction %, leaving less oil in the cake.",
        detected: "Oil left in the byproduct (cake) is too high.",
        costing: "You are selling oil (premium price) as animal feed (low price). Every 1% of oil left in the cake is a direct transfer of wealth from you to the farmer buying the feed.",
        cliffhanger: "The Deep Scan will optimize your press settings for maximum extraction."
      },
      'Bottleneck Forming': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Controlled': { controls: "", detected: "", costing: "", cliffhanger: "" }, 'Profit Lever': { controls: "", detected: "", costing: "", cliffhanger: "" }
    }
  }
};

export const INDUSTRY_COST_COPY: Record<string, typeof COST_COPY> = {
  agriculture: {
    // ... existing
    cash: ["Low quality/grading is reducing your selling price per kg.", "Post-harvest loss is erasing yield gains.", "Urgent selling is forcing you to accept lower market prices."],
    time: ["Manual task assignment is consuming your morning routine.", "Correcting field errors is slowing down harvest speed.", "Waiting for instructions is wasting paid labor hours."],
    trust: ["Inconsistent supply is making buyers look for other farmers.", "Quality variances are damaging your reputation with premium buyers.", "Reliability issues are blocking you from better contracts."],
    risk: ["Lack of backup buyers leaves you exposed to price crashes.", "Informal agreements open you to disputes and non-payment.", "Weather/pest shocks have no contingency plan."]
  },
  livestock: {
    // ... existing
    cash: ["Mortality is directly deleting invested capital.", "Poor feed conversion is wasting money every day.", "Selling at low weight destroys margin."],
    time: ["Correcting health issues is taking more time than prevention.", "Manual supervision is locking you to the farm.", "Firefighting outbreaks consumes the schedule."],
    trust: ["Inconsistent supply is losing you steady buyers.", "Quality/weight variance kills pricing power.", "Disease history scares off premium contracts."],
    risk: ["Disease outbreaks could wipe the entire asset.", "Theft is a constant unmeasured drain.", "Price crashes find you without a backup plan."]
  },
  aquaculture: {
    cash: ["Feed is being consumed without converting to weight.", "Sudden mortality events wipe out weeks of investment.", "Selling without grading hands profit to the buyer."],
    time: ["Firefighting water quality crises consumes your schedule.", "Manual feeding eats hours that could be automated.", "Correcting system failures takes longer than preventing them."],
    trust: ["Inconsistent sizing forces buyers to discount your fish.", "Supply gaps lose you the steady restaurant/trader contracts.", "Quality issues (off-flavor/handling) damage your brand."],
    risk: ["One oxygen failure can erase an entire cycle overnight.", "Disease spreads faster in water than anywhere else.", "Input price hikes trap you if cashflow is weak."]
  },
  agro_processing: {
    cash: ["Yield loss is a silent tax on every batch.", "Giveaway weight is erasing your net margin.", "Downtime is paid for but produces nothing."],
    time: ["Manual changeovers are eating production capacity.", "Firefighting maintenance issues kills strategic planning.", "Compliance paperwork is consuming leadership hours."],
    trust: ["Inconsistent product specs damage buyer confidence.", "Contaminants or defects risk your entire brand reputation.", "Late deliveries force buyers to look for other suppliers."],
    risk: ["One recall event could bankrupt the operation.", "Regulatory non-compliance is a ticking bomb.", "Price volatility exposes you without a yield buffer."]
  }
};

const normalizeSubIndustry = (sub: string | undefined): string => {
  if (!sub) return '';
  const s = sub.toLowerCase();

  // Aquaculture
  if (s.includes('tilapia')) return 'tilapia';
  if (s.includes('catfish')) return 'catfish';
  if (s.includes('shrimp')) return 'shrimp';
  if (s.includes('salmon') || s.includes('trout')) return 'salmon_trout';

  // Agro-Processing
  if (s.includes('mill') || s.includes('maize') || s.includes('wheat') || s.includes('rice') || s.includes('feed')) return 'milling';
  if (s.includes('dry') || s.includes('storage') || s.includes('grain') || s.includes('coffee') || s.includes('fruit')) return 'drying';
  if (s.includes('pack') || s.includes('consumer')) return 'packaging';
  if (s.includes('juice') || s.includes('beverage')) return 'juices';
  if (s.includes('oil') || s.includes('sunflower') || s.includes('palm')) return 'oils';

  // Livestock
  if (s.includes('dairy')) return 'dairy';
  if (s.includes('beef')) return 'beef';
  if (s.includes('goat') || s.includes('sheep')) return 'goats_sheep';
  if (s.includes('pig')) return 'pigs';
  if (s.includes('broiler')) return 'broilers';
  if (s.includes('layer')) return 'layers';
  return '';
};

export const getPillarBrief = (industry: string | undefined, pillar: string, status: PillarStatus, subIndustry?: string): BriefTemplate => {
  const indKey = industry || 'other';

  // 1. Try Specific Sub-Industry
  const subKey = normalizeSubIndustry(subIndustry);
  if (subKey && INDUSTRY_BRIEFS[subKey]?.[pillar]?.[status]) {
    return INDUSTRY_BRIEFS[subKey][pillar][status];
  }

  // 2. Try Industry Generic AND map remaining keys for safety
  // If keys are missing in sub-industry, fall back to industry, then universal
  const industryBrief = INDUSTRY_BRIEFS[indKey]?.[pillar]?.[status];
  const universalBrief = PILLAR_BRIEFS[pillar]?.[status];

  return industryBrief || universalBrief || PILLAR_BRIEFS['Engine']['Controlled'];
};

export const getCostCopy = (industry: string | undefined, type: keyof typeof COST_COPY, subIndustry?: string): string[] => {
  const indKey = industry || 'other';
  // Optional: Add sub-industry cost copy if needed, for now using Industry Generic
  const industryCopy = INDUSTRY_COST_COPY[indKey]?.[type];
  const universalCopy = COST_COPY[type];
  return industryCopy || universalCopy;
};

// ... keep existing exports ...
export const SIGNAL_LIBRARY = {};
export const ACTION_LIBRARY = {};
export const STATUS_COPY = {};
export const CLIFFHANGER_COPY = {};
export const SYSTEM_COST_MAPPING = { Engine: ["time"], Fuel: ["cash"], Voice: ["cash"], Brain: ["time"], Pulse: ["trust"], Shield: ["risk"], Tribe: ["time"] };
export const EVIDENCE_COPY = {};
