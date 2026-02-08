
import { FixPlanTemplate, FixPlanAction } from "../types";

export const GLOBAL_FIX_RULES = [
  "Fix the bottleneck first (your Critical Pillar).",
  "Don’t try to do 20 actions — do 3 actions that change the system.",
  "Track one KPI weekly per pillar.",
  "Every action must produce a deliverable."
];

export const PILLAR_FIX_PLANS: Record<string, FixPlanTemplate> = {
  'Engine': {
    focus: 'Operations, systems, delegation, consistency, tools',
    profitLeak: 'Rework + delays + founder bottleneck + inconsistent delivery',
    diagnosis: 'If Engine is weak, profit leaks through time. You "work hard," but output doesn’t scale.',
    whatItControls: "This is how work moves from request → delivery → payment. When Engine is weak, businesses feel busy, but delivery slows and mistakes rise.",
    deepInsight: "When work depends on people’s memory and constant approvals, you get hidden queue time. Queue time is invisible in meetings but shows up as late delivery, repeated questions, and inconsistent output. Over time, the owner becomes the emergency system — which feels heroic but becomes expensive because growth requires repeatability.",
    drivers: ["Owner Bottleneck", "SOP Gaps", "Manual Invoicing", "Handoff Confusion", "Rework Loop"],
    evidenceSnapshots: [
      { observation: "Work often waits for approval before moving forward.", whyItMatters: "Creates invisible queues that slow cash cycle." },
      { observation: "New staff depend on shadowing rather than onboarding materials.", whyItMatters: "Scales inconsistency and slows ramp time." },
      { observation: "Quality varies by person rather than by checklist.", whyItMatters: "Damages brand trust and increases refund risk." }
    ],
    fixLever: { action: "Install a Minimum Viable Operating Rhythm: 3 SOPs + approval limits + one task board.", metric: "Cycle Time", owner: "Ops Lead", effort: "M", timeline: "30 Days" },

    quickWins: [
      { title: 'Draft the "Golden Path" SOP', desc: 'Do not document everything. Pick the ONE process that fails most often (e.g., Client Onboarding). Write a simple 1-page checklist that defines "Done" and "Correct". This stops the bleeding on your most frequent error.', owner: 'Ops Lead', effort: 'M' },
      { title: 'The 48-Hour Bottleneck Rule', desc: 'Implement a rule: If a task sits for 48 hours, it must be escalated or unblocked. No task languishes in silence. This forces visibility on where work actually gets stuck.', owner: 'Founder', effort: 'S' },
      { title: 'Define "Good" Quality', desc: 'Create a visual standard or checklist for your final deliverable. If staff know exactly what "Good" looks like, they stop asking you for permission to ship.', owner: 'Ops Lead', effort: 'S' }
    ],
    winCondition: 'Work becomes repeatable. Quality becomes consistent.',
    system30: [
      { title: 'Standardize service packages', desc: 'Turn custom services into fixed-scope products. Define exactly what is included and what is not. This reduces scope creep and makes delivery predictable.', owner: 'CEO/Ops', effort: 'L' },
      { title: 'Create onboarding mini-course', desc: 'Record 5 short Loom videos explaining your core tools and values. This allows new hires to ramp up without consuming 20 hours of your direct time.', owner: 'Ops/HR', effort: 'M' },
      { title: 'Install the Ops Dashboard', desc: 'Replace "update meetings" with a live scoreboard tracking: On-Time Delivery %, Cash Collected, and Open Issues. Review this weekly for 15 minutes.', owner: 'Ops', effort: 'M' }
    ],
    build60: ['Upgrade tooling', 'Delivery scorecard'],
    institutionalize90: ['Delegation ladder', 'Founder independence'],
    kpi: { name: 'Cycle Time', def: 'Average time to deliver main product/service' },
    traps: ['Perfectionist tweaks', 'Hiring without SOPs', 'Using Inbox as the OS']
  },
  'Fuel': {
    focus: 'Cash flow, margins, pricing, financial control',
    profitLeak: 'Underpricing + late payments + zombie costs + "sales without profit"',
    diagnosis: 'If Fuel is weak, the business can look busy and still be broke. Revenue is not the same as profit.',
    whatItControls: "Fuel is not just money in — it’s money retained, money collected, and money protected.",
    deepInsight: "Most businesses leak profit through soft terms and emotional pricing: discounts used to relieve tension, work delivered before payment, and no monthly visibility of margin. This creates stress even when sales look good.",
    drivers: ["Pricing Discipline", "Collections Speed", "Margin Visibility", "Expense Control", "Cash Buffer"],
    evidenceSnapshots: [
      { observation: "Discounting appears used as a closing tool.", whyItMatters: "Trains customers to devalue your work and erodes margin." },
      { observation: "Overdue invoices are tolerated longer than ideal.", whyItMatters: "You become the bank for your clients, risking your own liquidity." },
      { observation: "Profit visibility is periodic, not monthly.", whyItMatters: "Delays reaction time to bleeding costs." }
    ],
    fixLever: { action: "Install Cash Guardrails: terms + collections cadence + stop-work rule + simple forecast.", metric: "Cash Buffer Days", owner: "Finance Lead", effort: "M", timeline: "30 Days" },

    quickWins: [
      { title: 'The "Money Map" Audit', desc: 'List your top 5 revenue sources and top 5 costs. Calculate the true margin on each offer. You will likely find one "busy" offer that is actually losing money.', owner: 'Finance', effort: 'S' },
      { title: 'Enforce the Stop-Work Rule', desc: 'Implement a policy today: No new work starts for clients with invoices >7 days overdue. This single rule prevents bad debt from compounding.', owner: 'Founder', effort: 'S' },
      { title: 'Kill Zombie Costs', desc: 'Review your last 3 bank statements. Cancel or downgrade subscriptions and services that haven’t been used in 90 days. Aim to recover $500+ monthly.', owner: 'Admin', effort: 'S' }
    ],
    winCondition: 'You know which offer makes money and which one drains you.',
    system30: [
      { title: 'Weekly Cash War Room', desc: 'A 15-minute standing meeting every Monday to review: Cash on Hand, Accounts Receivable, and AP. No surprises allowed.', owner: 'Finance', effort: 'M' },
      { title: 'Monthly P&L Review', desc: 'Don\'t wait for tax time. Review a simple P&L monthly to catch margin erosion early. Assign action items to fix variances.', owner: 'Finance', effort: 'M' },
      { title: 'Pricing Standardization', desc: 'Create a standard rate card. Remove the ability for sales staff to offer discounts without manager approval.', owner: 'Sales', effort: 'M' }
    ],
    build60: ['Cash buffer target', 'Financial dashboards'],
    institutionalize90: ['Separate business finances', 'Margin decision filter'],
    kpi: { name: 'Cash Visibility', def: 'Forecast accuracy or Overdue Invoices count' },
    traps: ['Nice customers paying late', 'Discounts as strategy', 'Bank balance accounting']
  },
  'Voice': {
    focus: 'Marketing, sales, conversion, retention',
    profitLeak: 'Inconsistent leads + poor follow-up + weak conversion + churn',
    diagnosis: 'If Voice is weak, revenue becomes luck-based. Your product may be good, but distribution is unstable.',
    whatItControls: "Voice is how the market hears you, trusts you, and pays you.",
    deepInsight: "Pipeline leaks are usually not about lack of demand — they are about inconsistency: inconsistent content, inconsistent follow-up, unclear positioning, or slow response time. Most lost sales happen after the first contact.",
    drivers: ["Lead Consistency", "Follow-up Speed", "Message Clarity", "Conversion Rate", "Retention"],
    evidenceSnapshots: [
      { observation: "Lead tracking is inconsistent.", whyItMatters: "You can't optimize what you don't measure." },
      { observation: "Follow-up is not structured.", whyItMatters: "Money is left on the table from interested but busy prospects." },
      { observation: "Message may not be instantly clear.", whyItMatters: "Confused buyers don't buy; they bounce." }
    ],
    fixLever: { action: "Install Pipeline Rhythm: response-time rule + follow-up sequence + tracking.", metric: "Lead Conversion %", owner: "Sales Lead", effort: "M", timeline: "30 Days" },

    quickWins: [
      { title: 'Implement the "Lead Tracker"', desc: 'Stop using inbox/memory. Create a simple sheet: Source, Contact, Stage, Next Action. Force every lead into this single view.', owner: 'Sales', effort: 'S' },
      { title: 'The 10-Day Follow-Up Script', desc: 'Write 3 pre-set messages for days 1, 3, and 7. Most sales are lost because follow-up stops too early. Automate or template this.', owner: 'Sales', effort: 'M' },
      { title: 'Clarify the "One Liner"', desc: 'Rewrite your bio/headline: "We help [Customer] solve [Pain] using [Mechanism]." If a stranger doesn\'t get it in 5 seconds, fix it.', owner: 'Marketing', effort: 'S' }
    ],
    winCondition: 'You can answer: "How many leads came in this week? From where? How many converted?"',
    system30: [
      { title: 'CRM Implementation', desc: 'Move from sheets to a basic CRM. Automate the first response to ensure 0-minute lag time on new inquiries.', owner: 'Sales', effort: 'L' },
      { title: 'Retention Dashboard', desc: 'Track churn and repeat purchase rates. Identify the "at-risk" triggers for customers leaving.', owner: 'Success', effort: 'M' },
      { title: 'Social Proof Pack', desc: 'Gather your top 3 case studies into a single PDF/Link. Send this automatically before every sales call.', owner: 'Marketing', effort: 'S' }
    ],
    build60: ['Retention system', 'Conversion improvement'],
    institutionalize90: ['Multi-channel stability', 'Sales hire'],
    kpi: { name: 'Conversion Rate', def: 'Leads → Paying Customers' },
    traps: ['Posting without converting', 'Discounts as sales', 'No follow-up']
  },
  'Brain': {
    focus: 'Leadership, people, clarity, accountability, strategy',
    profitLeak: 'Priority chaos + inconsistent performance + slow decisions',
    diagnosis: 'If Brain is weak, the business becomes a busy machine with no direction. People work hard but not on the highest-value work.',
    whatItControls: "Brain determines priorities, decision speed, accountability, and culture clarity.",
    deepInsight: "As teams grow, unclear KPIs and shifting priorities create ‘busy confusion’. People work hard but choose different definitions of success. This creates slow execution and politics.",
    drivers: ["Priority Clarity", "Role Definition", "Feedback Loops", "Decision Speed", "Hiring Quality"],
    evidenceSnapshots: [
      { observation: "Success metrics feel unclear.", whyItMatters: "Employees guess at priorities, often choosing low-value work." },
      { observation: "Priorities shift quickly.", whyItMatters: "Creates whiplash and abandoned projects." },
      { observation: "Delegation is task-based rather than outcome-based.", whyItMatters: "Keeps the founder trapped in the weeds." }
    ],
    fixLever: { action: "Install a Scoreboard + ownership: 3 priorities, 3 metrics, 3 owners.", metric: "Execution Predictability", owner: "Founder", effort: "M", timeline: "30 Days" },

    quickWins: [
      { title: 'The "Power of 3" Sheet', desc: 'List only the top 3 priorities for the next 30 days. Assign an Owner, a Deadline, and a Metric to each. Ignore everything else.', owner: 'Founder', effort: 'S' },
      { title: 'Define "Winning" for Key Roles', desc: 'For each key role, define 1-3 KPIs that constitute success. Stop judging effort; start judging outcome.', owner: 'HR/Admin', effort: 'M' },
      { title: 'The Decision Matrix', desc: 'Create a simple rule: "Decide / Decide+FYI / Escalate". Empower staff to make small decisions without you.', owner: 'Founder', effort: 'S' }
    ],
    winCondition: 'People stop asking "what should I do?" and start acting with clear direction.',
    system30: [
      { title: 'Weekly Performance Rhythm', desc: 'Install a Monday check-in on KPIs and Priorities. No long stories, just status updates: Red, Yellow, Green.', owner: 'Founder', effort: 'S' },
      { title: 'Feedback & Consequences', desc: 'Establish a feedback loop. If a standard is missed, what happens? If it is hit, what happens? Consistency builds culture.', owner: 'HR', effort: 'M' },
      { title: 'Transparent Communication', desc: 'Share the "Why" behind decisions. When the team understands the context, they make better micro-decisions.', owner: 'Founder', effort: 'S' }
    ],
    build60: ['Leadership OS', 'Manager coaching'],
    institutionalize90: ['Manager performance', 'Written strategy'],
    kpi: { name: 'Execution Predictability', def: '% of planned weekly priorities completed' },
    traps: ['Changing priorities often', 'Confusing meetings', 'No scorecards']
  },
  'Pulse': {
    focus: 'Product quality, innovation, market fit',
    profitLeak: 'Obsolete offers + quality issues + slow iteration + churn',
    diagnosis: 'If Pulse is weak, you slowly die even if marketing is strong. The market moves and you don’t.',
    whatItControls: "Pulse is relevance. A business can be profitable today and obsolete tomorrow.",
    deepInsight: "Pulse leaks happen when product evolution slows, customer learning is inconsistent, and quality control becomes reactive. Then differentiation fades and price pressure rises.",
    drivers: ["Customer Feedback", "Product Iteration", "Quality Control", "Market Watch", "Innovation Speed"],
    evidenceSnapshots: [
      { observation: "Iteration cycle appears slow.", whyItMatters: "Competitors will out-innovate you." },
      { observation: "Feedback isn’t systematically captured.", whyItMatters: "You are flying blind on customer satisfaction." },
      { observation: "Quality control is triggered after issues.", whyItMatters: "Damage control is more expensive than prevention." }
    ],
    fixLever: { action: "Install a learning loop: customer interviews + quarterly tests + QC checklist.", metric: "NPS / Churn", owner: "Product Lead", effort: "M", timeline: "30 Days" },

    quickWins: [
      { title: 'The "Reality Check" Call', desc: 'Call 10 recent customers. Ask 3 questions: What did you love? What frustrated you? What do you wish we did? Record the patterns.', owner: 'Product', effort: 'M' },
      { title: 'Fix the #1 Complaint', desc: 'Take the most common frustration found in your calls and fix it immediately. Send an email telling customers you fixed it.', owner: 'Ops', effort: 'M' },
      { title: 'Pre-Flight Checklist', desc: 'Create a simple checklist that must be passed before any product/service is delivered to the client.', owner: 'Ops', effort: 'S' }
    ],
    winCondition: 'You start improving based on customer signals, not internal opinions.',
    system30: [
      { title: 'Innovation Roadmap', desc: 'Split your roadmap: 80% Core Stability, 20% Experimental Features. Ensure you are protecting today while building for tomorrow.', owner: 'Product', effort: 'M' },
      { title: 'Kill/Pivot Framework', desc: 'Set criteria for stopping projects. If an initiative isn\'t hitting metrics after X weeks, kill it without emotion.', owner: 'Founder', effort: 'S' },
      { title: 'Systematic QC', desc: 'Move quality control from "random checks" to "every unit" or "statistical sample" depending on volume.', owner: 'Ops', effort: 'M' }
    ],
    build60: ['Diversify offers', 'Quarterly testing'],
    institutionalize90: ['Innovation budget', 'Health metrics'],
    kpi: { name: 'Customer Signal', def: 'Complaint rate or NPS trend' },
    traps: ['Building for ego', 'Ignoring feedback', 'Stagnation']
  },
  'Shield': {
    focus: 'Legal, compliance, security, risk durability',
    profitLeak: 'One shock wipes profit (lawsuit, hack, audit, dispute)',
    diagnosis: 'If Shield is weak, you are building profit on a minefield.',
    whatItControls: "Shield protects wealth. One incident can erase years of profit.",
    deepInsight: "Businesses treat protection as optional because it doesn’t feel urgent — until it becomes urgent. The goal is to reduce the probability and reduce the blast radius.",
    drivers: ["Contracts", "Cybersecurity", "Compliance", "Insurance", "Access Control"],
    evidenceSnapshots: [
      { observation: "Contracts and scope controls may be inconsistent.", whyItMatters: "Opens you to scope creep and liability." },
      { observation: "2FA/password practices may be weak.", whyItMatters: "Low-effort hacks can lock you out of your business." },
      { observation: "Backups are not regularly verified.", whyItMatters: "Data loss is often permanent without testing." }
    ],
    fixLever: { action: "Protection Pack: 2FA + contract minimum standard + verified backups.", metric: "Risk Score", owner: "Admin/IT", effort: "S", timeline: "7 Days" },

    quickWins: [
      { title: 'Digital Lockdown (2FA)', desc: 'Enable 2-Factor Authentication on Email, Bank, and CRM. Force all staff to do the same. This kills 99% of opportunistic hacks.', owner: 'IT', effort: 'S' },
      { title: 'Standard Service Agreement', desc: 'Never start work without a signed contract. Create a simple template covering Scope, Payment Terms, and Liability.', owner: 'Legal', effort: 'S' },
      { title: 'Access Control Audit', desc: 'List everyone with access to your bank and data. Remove anyone who doesn\'t need it today.', owner: 'Admin', effort: 'S' }
    ],
    winCondition: 'You stop gambling with predictable risks.',
    system30: [
      { title: 'Compliance Baseline', desc: 'Review all regulatory requirements (Tax, Labor, Licenses). Schedule their renewals in the calendar.', owner: 'Admin', effort: 'M' },
      { title: 'Financial Controls', desc: 'Require dual approval for large payments. Separate duties between who approves and who pays.', owner: 'Finance', effort: 'S' },
      { title: 'Business Continuity Plan', desc: 'Write a 1-page plan: "What do we do if the office burns down or the server crashes?"', owner: 'Ops', effort: 'M' }
    ],
    build60: ['Insurance review', 'Vendor controls'],
    institutionalize90: ['Risk audit', 'Disaster simulation'],
    kpi: { name: 'Risk Hygiene', def: '2FA coverage + Backup success' },
    traps: ['Handshake deals', 'Weak hygiene', 'Ignoring notices']
  },
  'Tribe': {
    focus: 'Culture, collaboration, work dynamics, truth flow',
    profitLeak: 'Approval friction + fear + politics + burnout',
    diagnosis: 'If Tribe is weak, execution slows even with good strategy. People stop taking initiative.',
    whatItControls: "Tribe controls speed. Culture can multiply execution or slow it.",
    deepInsight: "When people optimize for safety (avoid blame) rather than speed (solve problems), approvals rise, meetings rise, and initiative dies. This is rarely an employee problem — it’s an environment signal.",
    drivers: ["Approval Drag", "Fear of Blame Signals", "Meeting Theater", "Silo Drift", "Rumor-Based Updates"],
    evidenceSnapshots: [
      { observation: "Waiting for approval appears common.", whyItMatters: "Slows down customer delivery." },
      { observation: "CC behavior suggests fear of blame.", whyItMatters: "Creates noise and reduces ownership." },
      { observation: "Information flows through unofficial channels.", whyItMatters: "Leadership is disconnected from reality." }
    ],
    fixLever: { action: "Remove approval drag + replace blame with learning.", metric: "Decision Speed", owner: "Founder", effort: "M", timeline: "30 Days" },

    quickWins: [
      { title: 'Define Decision Rights', desc: 'Create a matrix: Who decides? Who is consulted? Who is informed? Stop the "Reply All" decision making.', owner: 'Founder', effort: 'S' },
      { title: 'The Blameless Retro', desc: 'Hold a 30-min session on a recent failure. Rule: You can only blame the process, not the person. "What broke in the system?"', owner: 'Team', effort: 'M' },
      { title: 'Meeting Reset', desc: 'Cancel all recurring status meetings. Re-book only the ones where decisions are made. Status updates go to email/Slack.', owner: 'Founder', effort: 'S' }
    ],
    winCondition: 'People move faster and report problems earlier.',
    system30: [
      { title: 'Accountability Chart', desc: 'Map every core function to ONE owner. No shared ownership. If it breaks, we know who fixes it.', owner: 'HR', effort: 'M' },
      { title: 'Psychological Safety Rules', desc: 'Explicitly state: "Bad news delivered early is good news. Bad news delivered late is a problem."', owner: 'Team', effort: 'M' },
      { title: 'Work Visibility System', desc: 'Make all work visible on a shared board. Reduce the need for "checking in" by making status transparent.', owner: 'Ops', effort: 'M' }
    ],
    build60: ['Fairness/Reward system', 'Workload balancing'],
    institutionalize90: ['Truth flow metrics', 'Bottleneck removal'],
    kpi: { name: 'Decision Speed', def: 'Avg approval wait time' },
    traps: ['Preaching proactivity while punishing mistakes', 'Politics', 'Burnout']
  }
};

export const INDUSTRY_FIX_PLANS: Record<string, Record<string, FixPlanTemplate>> = {
  agriculture: {
    'Engine': {
      focus: 'Field logistics, harvest timing, labor supervision, storage',
      profitLeak: 'Post-harvest loss + timing delays + labor waste',
      diagnosis: 'In farming, timing is everything. A weak Engine means you miss critical windows (planting, spraying, harvest), leading to yield loss and stress.',
      whatItControls: "Engine controls the physical flow of work on the farm: Field → Harvest → Storage → Market.",
      deepInsight: "Many farmers focus on 'working hard' but lose money on 'transition steps'. The biggest leaks happen in the handoffs: finding labor, moving produce to storage, and drying/grading. If these aren't systemized, you lose quality and volume every hour.",
      drivers: ["Harvest Readiness", "Labor Productivity", "Post-Harvest Flow", "Tool Reliability", "Scouting Routine"],
      fixLever: { action: "Install the Field Operating Rhythm: Daily Standup + Weekly Plan + Harvest Checklist.", metric: "On-Time Completion %", owner: "Farm Manager", effort: "M", timeline: "30 Days" },
      evidenceSnapshots: [], // Populated dynamically
      quickWins: [
        { title: 'The "Morning Standup" Board', desc: 'Stop assigning tasks individually. Spend 10 mins each morning with the team at a whiteboard: "What are we doing? Who is doing it? What tools do we need?"', owner: 'Farm Manager', effort: 'S' },
        { title: 'Harvest Readiness Checklist', desc: '3 days before harvest, verify: Labor confirmed, Bags/Crates ready, Transport booked, Storage cleaned. Don\'t start until the list is clear.', owner: 'Ops Lead', effort: 'S' },
        { title: 'Visual Quality Standards', desc: 'Post photos of "Grade A" vs "Reject" produce where workers sort. Pictures speak louder than words.', owner: 'QC', effort: 'S' }
      ],
      winCondition: 'Farm operations run on schedule without constant firefighting.',
      system30: [], // Can populate if needed
      build60: [],
      institutionalize90: [],
      kpi: { name: 'On-Time Rate', def: '% of planned field activities completed on schedule' },
      traps: ['Reactive farming', 'Ignoring equipment maintenance', 'Unsupervised labor']
    },
    'Fuel': {
      focus: 'Cash flow, input costs, harvest margin, sales timing',
      profitLeak: 'Selling low (desperation) + input waste + unmeasured costs',
      diagnosis: 'Farming is capital intensive. If Fuel is weak, you run out of cash before harvest or sell at the bottom of the market to pay bills.',
      whatItControls: "Fuel controls your ability to hold produce for better prices and afford quality inputs.",
      deepInsight: "The 'Cash Trap' in farming is buying inputs high and selling produce low. You need a cash buffer to break this cycle. Also, many farmers don't know their true cost per kg, so they accept prices that actually lose money.",
      drivers: ["Unit Economics", "Cash Reserve", "Procurement Timing", "Debt Policy", "Spend Proof"],
      fixLever: { action: "Install Cash Flow Forecast + Unit Cost Analysis.", metric: "Cash Buffer Days", owner: "Owner", effort: "M", timeline: "30 Days" },
      evidenceSnapshots: [],
      quickWins: [
        { title: 'Calculate "Break-Even Price"', desc: 'Know exactly what it cost to grow 1kg. (Total Season Cost / Total Kg Yield). Never unknowingly sell below this number.', owner: 'Owner', effort: 'S' },
        { title: 'Separation of Accounts', desc: 'Open a dedicated farm bank account. Stop mixing family groceries with seed purchases. You need to see the farm\'s true health.', owner: 'Admin', effort: 'S' },
        { title: 'Input Inventory Log', desc: 'Track fertilizer/chem usage. "If it leaves the store, it must be written down." Stop invisible theft and waste.', owner: 'Store Manager', effort: 'S' }
      ],
      winCondition: 'You sell when you want to, not when you have to.',
      system30: [],
      build60: [],
      institutionalize90: [],
      kpi: { name: 'Net Margin', def: 'Profit per Acre or per Kg' },
      traps: ['Mixing personal/farm cash', 'Ignoring depreciation', 'Desperation selling']
    }
    // ... Other pillars mapped similarly ...
  },
  dairy: {
    'Engine': { focus: 'Milking routine, feed timing', profitLeak: 'Routine drift + labor waste', diagnosis: 'Drift in timing hurts yield.', drivers: ['Timing', 'Hygiene'], quickWins: [{ title: 'Milking SOP', desc: 'Post checklist', owner: 'Sup', effort: 'S' }], fixLever: { action: 'Standardize Milking', metric: 'Yield', owner: 'Sup', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Predictable yield.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Liters/Day', def: 'Daily yield' }, traps: [] },
    'Fuel': { focus: 'Feed margin', profitLeak: 'High feed cost vs low yield', diagnosis: 'Spending on feed without yield return.', drivers: ['Rationing', 'Culling'], quickWins: [{ title: 'Low Yield List', desc: 'Identify cull candidates', owner: 'Owner', effort: 'S' }], fixLever: { action: 'Cull Bottom 10%', metric: 'Margin', owner: 'Owner', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Profitable cows only.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Margin/Liter', def: 'Profit' }, traps: [] }
  },
  beef: {
    'Engine': { focus: 'Weight gain routine', profitLeak: 'Cycle speed', diagnosis: 'Slow growth eats margin.', drivers: ['Feeding', 'Water'], quickWins: [{ title: 'Water Check', desc: 'Ensure 24/7 water', owner: 'Staff', effort: 'S' }], fixLever: { action: 'Weight Banding', metric: 'ADG', owner: 'Sup', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Fast finishing.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Kg Gained/Week', def: 'Growth' }, traps: [] },
    'Fuel': { focus: 'Holding days', profitLeak: 'Holding too long', diagnosis: 'Profit peak passed.', drivers: ['Sell Window', 'Input Cost'], quickWins: [{ title: 'Sell Window Rule', desc: 'Set max days', owner: 'Owner', effort: 'S' }], fixLever: { action: 'Margin Curve', metric: 'Profit/Head', owner: 'Owner', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Timely sales.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Days to Market', def: 'Speed' }, traps: [] }
  },
  pigs: {
    'Engine': { focus: 'Feed waste, hygiene', profitLeak: 'Wastage + Disease', diagnosis: 'Feed is expensive, waste is fatal.', drivers: ['Troughs', 'Floors'], quickWins: [{ title: 'Feed Waste Audit', desc: 'Check troughs', owner: 'Sup', effort: 'S' }], fixLever: { action: 'Feed Measurement', metric: 'FCR', owner: 'Sup', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Efficient conversion.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'FCR', def: 'Feed Conversion' }, traps: [] },
    'Fuel': { focus: 'Cycle time', profitLeak: 'Slow growth', diagnosis: 'Overhead piles up.', drivers: ['Growth', 'Market'], quickWins: [{ title: 'Batch Dashboard', desc: 'Track days', owner: 'Owner', effort: 'S' }], fixLever: { action: 'Target Day Sell', metric: 'Margin', owner: 'Owner', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Fast cycles.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Days to 100kg', def: 'Speed' }, traps: [] }
  },
  broilers: {
    'Engine': { focus: 'Brooding (first 7 days)', profitLeak: 'Early mortality', diagnosis: 'Bad start = bad batch.', drivers: ['Temp', 'Water'], quickWins: [{ title: 'Brooding Check', desc: 'Temp/Water log', owner: 'Sup', effort: 'S' }], fixLever: { action: 'Brooding SOP', metric: 'Day 7 Weight', owner: 'Sup', effort: 'M', timeline: '7d' }, evidenceSnapshots: [], winCondition: 'Zero early loss.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Mortality %', def: 'Survival' }, traps: [] },
    'Fuel': { focus: 'FCR', profitLeak: 'Feed waste', diagnosis: 'Birds eating profit.', drivers: ['Feeders', 'Spillage'], quickWins: [{ title: 'Feeder Height', desc: 'Adjust daily', owner: 'Sup', effort: 'S' }], fixLever: { action: 'Weekly FCR Check', metric: 'FCR', owner: 'Owner', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Low FCR.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'FCR', def: 'Efficiency' }, traps: [] }
  },
  layers: {
    'Engine': { focus: 'Lighting, Collection', profitLeak: 'Production dips', diagnosis: 'Routine drift kills lay rate.', drivers: ['Light', 'Routine'], quickWins: [{ title: 'Lights Lock', desc: 'Timer check', owner: 'Sup', effort: 'S' }], fixLever: { action: 'Consistency Protocol', metric: 'Lay %', owner: 'Sup', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Stable lay rate.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Lay %', def: 'Production' }, traps: [] },
    'Fuel': { focus: 'Feed to Egg', profitLeak: 'Inefficiency', diagnosis: 'Eating but not laying.', drivers: ['Quality', 'Waste'], quickWins: [{ title: 'Crack Tracker', desc: 'Log breaks', owner: 'Sup', effort: 'S' }], fixLever: { action: 'Cull Non-Layers', metric: 'Margin', owner: 'Owner', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'High efficiency.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Feed/Tray', def: 'Cost' }, traps: [] }
    // ... (livestock plans)
  },
  goats_sheep: {
    'Engine': { focus: 'Survival, Kidding', profitLeak: 'Kid mortality', diagnosis: 'Losing replacements.', drivers: ['Kidding', 'Parasites'], quickWins: [{ title: 'Worm Check', desc: 'Famacha check', owner: 'Sup', effort: 'S' }], fixLever: { action: 'Kidding Prep', metric: 'Survival', owner: 'Sup', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'High survival.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Survival Rate', def: '%' }, traps: [] },
    'Fuel': { focus: 'Loss control', profitLeak: 'Theft/Death', diagnosis: 'Asset leakage.', drivers: ['Security', 'Health'], quickWins: [{ title: 'Night Count', desc: 'Lock up', owner: 'Sup', effort: 'S' }], fixLever: { action: 'Loss Investigation', metric: 'Headcount', owner: 'Owner', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Secure herd.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Loss %', def: 'Security' }, traps: [] }
  },
  aquaculture: {
    'Engine': {
      focus: 'Water quality, feeding, stocking',
      profitLeak: 'Water Quality Drift + Overfeeding',
      diagnosis: 'Feeding based on feeling; feed becomes a silent cash leak. Water quality is checked only when fish look stressed.',
      whatItControls: 'Daily survivability and growth efficiency.',
      deepInsight: 'In aquaculture, water is the engine. If water quality drifts, feed doesn\'t convert. You are paying for feed that the fish can\'t use.',
      drivers: ['DO/pH', 'Rationing', 'Density'],
      quickWins: [
        { title: 'Daily Water Log', desc: 'Track DO, temp, pH daily', owner: 'Sup', effort: 'S' },
        { title: 'Feed Log', desc: 'Record feed vs biomass', owner: 'Sup', effort: 'S' }
      ],
      fixLever: { action: 'Standardize Feeding & Water', metric: 'FCR', owner: 'Mgr', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Predictable water and growth.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'FCR', def: 'Feed Conversion Ratio' },
      traps: ['Overstocking without oxygen', 'Ignoring ammonia spikes']
    },
    'Fuel': {
      focus: 'FCR, Input Costs, Harvest Timing',
      profitLeak: 'High FCR + Mortality Loss',
      diagnosis: 'Profit is eaten by invisible feed waste/theft and late harvest (diminishing returns).',
      whatItControls: 'The margin between feed cost and sales price.',
      deepInsight: 'Feed is 70% of cost. If you don\'t measure FCR (Feed Conversion Ratio), you don\'t have a business, you have a hobby. A 0.2 shift in FCR is the difference between profit and loss.',
      drivers: ['FCR', 'Sampling', 'Harvest Cycle'],
      quickWins: [
        { title: 'Weekly Sampling', desc: 'Weigh sample fish weekly', owner: 'Sup', effort: 'M' },
        { title: 'FCR Calculation', desc: 'Calc Feed / Weight Gain', owner: 'Mgr', effort: 'S' }
      ],
      fixLever: { action: 'FCR Optimization Protocol', metric: 'FCR', owner: 'Mgr', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Profitable conversion.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'FCR', def: 'Ratio' },
      traps: ['Feeding during rain/cold', 'Harvesting too late']
    },
    'Voice': {
      focus: 'Market timing, off-take agreements',
      profitLeak: 'Price taking + desperation sales',
      diagnosis: 'Harvesting without a buyer locked in.',
      whatItControls: 'Revenue realization.',
      deepInsight: 'Fish are perishable inventory. If you wait until harvest to find a buyer, you have zero leverage. You must sell the crop 30 days before it leaves the water.',
      drivers: ['Pre-sales', 'Size Grading'],
      quickWins: [
        { title: 'Buyer Warm-up', desc: 'Call buyers 30d out', owner: 'Owner', effort: 'S' },
        { title: 'Size Promise', desc: 'Guarantee size/grade', owner: 'Sup', effort: 'S' }
      ],
      fixLever: { action: 'Forward Contract Cycle', metric: 'Price/kg', owner: 'Owner', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Sold before harvest.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'Pre-book %', def: '% sold before harvest' },
      traps: ['Spot market reliance', 'Selling mixed sizes']
    },
    'Brain': {
      focus: 'Targets, Planning',
      profitLeak: 'Reactive Management',
      diagnosis: 'We run on memory. Targets change based on pressure.',
      whatItControls: 'Direction and stability.',
      deepInsight: 'Without targets and records, you are gambling, not farming.',
      drivers: ['Targets', 'Records'],
      quickWins: [
        { title: 'Batch Card', desc: 'Start/End dates', owner: 'Sup', effort: 'S' }
      ],
      fixLever: { action: 'Weekly Review', metric: 'Plan Adherence', owner: 'Owner', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Managed farm.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'Plan Variance', def: 'Accuracy' },
      traps: []
    },
    'Pulse': {
      focus: 'Growth, Genetics',
      profitLeak: 'Slow Growth',
      diagnosis: 'Growth is evaluated by look. FCR drifts.',
      whatItControls: 'System efficiency.',
      deepInsight: 'Time is money. Slow growth eats overhead.',
      drivers: ['Genetics', 'Sampling'],
      quickWins: [
        { title: 'Sample Weigh', desc: 'Weekly weights', owner: 'Sup', effort: 'M' }
      ],
      fixLever: { action: 'Growth Benchmarking', metric: 'ADG', owner: 'Mgr', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Fast growth.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'ADG', def: 'Daily Gain' },
      traps: []
    },
    'Shield': {
      focus: 'Biosecurity',
      profitLeak: 'Disease/Loss',
      diagnosis: 'New stock mixed without quarantine. No backup aeration.',
      whatItControls: 'Asset protection.',
      deepInsight: 'One outbreak erases a year of profit.',
      drivers: ['Quarantine', 'Backup'],
      quickWins: [
        { title: 'Quarantine Rule', desc: 'Isolate new', owner: 'Sup', effort: 'S' }
      ],
      fixLever: { action: 'Biosecurity Shield', metric: 'Survival', owner: 'Mgr', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Secure farm.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'Survival %', def: 'Risk' },
      traps: []
    },
    'Tribe': {
      focus: 'People, Safety',
      profitLeak: 'Hidden Problems',
      diagnosis: 'Staff prefer asking before acting. Mistakes are hidden.',
      whatItControls: 'Execution speed.',
      deepInsight: 'If staff hide problems, you find them too late.',
      drivers: ['Safety', 'SOPs'],
      quickWins: [
        { title: 'Safe Report', desc: 'No blame reporting', owner: 'Owner', effort: 'S' }
      ],
      fixLever: { action: 'Role Ownership', metric: 'Task Completion', owner: 'Owner', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Proactive team.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'Issue Report Rate', def: 'Transparency' },
      traps: []
    },

  },
  agro_processing: {
    'Engine': {
      focus: 'Production flow, uptime, changeovers',
      profitLeak: 'Downtime Drain + Changeover Black Hole',
      diagnosis: 'Downtime is frequent but unmeasured. Changeovers waste hours.',
      whatItControls: 'Throughput and predictable output.',
      deepInsight: 'In processing, lost time is lost money. If you don’t measure downtime and changeover time, you accept lowered capacity.',
      drivers: ['Uptime', 'Changeovers', 'Maintenance'],
      quickWins: [
        { title: 'Downtime Log', desc: 'Record every stop >5 mins', owner: 'Sup', effort: 'S' },
        { title: 'Raw Intake Gate', desc: 'Reject bad inputs before processing', owner: 'QC', effort: 'S' }
      ],
      fixLever: { action: 'Daily Downtime Log', metric: 'OEE', owner: 'Mgr', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Maximized uptime.',
      system30: [{ title: 'Preventive Maintenance', desc: 'Scheduled non-negotiable stops', owner: 'Maint', effort: 'M' }], build60: [], institutionalize90: [],
      kpi: { name: 'Throughput', def: 'Units/Hour' },
      traps: ['Ignoring micro-stops']
    },
    'Fuel': {
      focus: 'Yield, Unit Cost, Shrinkage',
      profitLeak: 'Yield Bleed + Underweight Giveaway',
      diagnosis: 'Yield loss is invisible. Underweight packs give away profit.',
      whatItControls: 'Unit economics.',
      deepInsight: 'You sell by weight but buy by bulk. Small yield leaks (spillage, moisture) destroy margins.',
      drivers: ['Yield', 'Shrinkage', 'Cost/Unit'],
      quickWins: [
        { title: 'Stop Underweight', desc: 'Check-weigh hourly', owner: 'QC', effort: 'S' },
        { title: 'Margin Floor Rule', desc: 'Min price based on cost', owner: 'Sales', effort: 'S' }
      ],
      fixLever: { action: 'Unit Costing + Yield Track', metric: 'GP%', owner: 'Fin', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Every unit is profitable.',
      system30: [{ title: 'Batch Costing', desc: 'Full cost per batch', owner: 'Fin', effort: 'M' }], build60: [], institutionalize90: [],
      kpi: { name: 'Yield %', def: 'Output/Input' },
      traps: ['Buying cheap inputs that reduce yield']
    },
    'Shield': {
      focus: 'Food Safety, Compliance, Traceability',
      profitLeak: 'Contamination Roulette + Compliance Blockers',
      diagnosis: 'One contamination event can destroy trust and contracts.',
      whatItControls: 'Market access and risk.',
      drivers: ['Hygiene', 'Traceability', 'Allergens'],
      quickWins: [
        { title: 'Hygiene Verify', desc: 'Daily sign-off checklist', owner: 'QC', effort: 'S' }
      ],
      fixLever: { action: 'Hygiene & Traceability Lock', metric: 'Compliance %', owner: 'QC', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Audit ready always.',
      system30: [{ title: 'Traceability Basics', desc: 'Batch codes end-to-end', owner: 'QC', effort: 'M' }], build60: [], institutionalize90: [],
      kpi: { name: 'Audit Score', def: '%' },
      traps: ['Paperwork only for audits']
    },
    'Voice': {
      focus: 'Buyers, Specs, Pricing',
      profitLeak: 'Spec Drift Discount + Buying Power Trap',
      diagnosis: 'Buyers control you because you lack specs and consistency.',
      whatItControls: 'Pricing power.',
      drivers: ['Specs', 'Contracts', 'Branding'],
      quickWins: [
        { title: 'Margin Floor', desc: 'No sales below cost', owner: 'Sales', effort: 'S' }
      ],
      fixLever: { action: 'Margin Protection Specs', metric: 'Price/kg', owner: 'Sales', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Sold on value, not just price.',
      system30: [{ title: 'Buyer Contract Pack', desc: 'Standard terms', owner: 'Sales', effort: 'M' }], build60: [], institutionalize90: [],
      kpi: { name: 'Margin/Channel', def: 'Profit %' },
      traps: ['Volume over margin']
    },
    'Brain': { focus: 'KPIs, Planning', profitLeak: 'Batch Chaos', diagnosis: 'Reactive to daily issues.', drivers: ['Targets'], quickWins: [], fixLever: { action: 'Weekly Yield Review', metric: 'Variance', owner: 'Mgr', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Controlled.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Variance', def: '%' }, traps: [] },
    'Pulse': { focus: 'Innovation', profitLeak: 'Old SKUs', diagnosis: 'Stagnant portfolio.', drivers: ['Tests'], quickWins: [], fixLever: { action: 'Controlled Tests', metric: 'ROI', owner: 'Prod', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Growing.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'NPS', def: 'Score' }, traps: [] },
    'Tribe': { focus: 'Staff', profitLeak: 'Hero Dependence', diagnosis: 'Plant stops without manager.', drivers: ['Roles'], quickWins: [], fixLever: { action: 'Role Cards', metric: 'Handover', owner: 'HR', effort: 'M', timeline: '30d' }, evidenceSnapshots: [], winCondition: 'Systems run the plant.', system30: [], build60: [], institutionalize90: [], kpi: { name: 'Handover Note', def: '%' }, traps: [] }
  },
  milling: {
    'Fuel': {
      focus: 'Yield, Unit Cost, Shrinkage',
      profitLeak: 'Yield Bleed + Underweight Giveaway',
      diagnosis: 'Yield loss is invisible. Underweight packs give away profit.',
      whatItControls: 'Unit economics.',
      deepInsight: 'You sell by weight but buy by bulk. Small yield leaks (spillage, moisture) destroy margins.',
      drivers: ['Yield', 'Shrinkage', 'Cost/Unit'],
      quickWins: [
        { title: 'Sieve & Spillage Audit', desc: 'Map loss points', owner: 'Sup', effort: 'S' },
        { title: 'Grade Separation Rule', desc: 'Stop mixed grades', owner: 'QC', effort: 'S' }
      ],
      fixLever: { action: 'Unit Costing + Yield Track', metric: 'GP%', owner: 'Fin', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Every unit is profitable.',
      system30: [{ title: 'Supplier Scorecard', desc: 'Quality vs Yield', owner: 'Procure', effort: 'M' }], build60: [], institutionalize90: [],
      kpi: { name: 'Yield %', def: 'Output/Input' },
      traps: []
    }
  },
  drying: {
    'Engine': {
      focus: 'Moisture control',
      profitLeak: 'Moisture Drift Penalty',
      diagnosis: 'Inconsistent drying creates rejects.',
      whatItControls: 'Quality and weight.',
      deepInsight: 'Moisture is money. Too dry = weight loss. Too wet = reject/spoilage.',
      drivers: ['Moisture', 'Uniformity'],
      quickWins: [
        { title: 'Moisture Drift Lock', desc: 'Log & Thresholds', owner: 'Sup', effort: 'S' }
      ],
      fixLever: { action: 'Drying Control', metric: 'Rejects', owner: 'Mgr', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Perfect moisture.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'Moisture Var', def: '%' },
      traps: []
    }
  },
  packaging: {
    'Shield': {
      focus: 'Labels, Seals',
      profitLeak: 'Label Risk Trap',
      diagnosis: 'Label errors cause recalls.',
      whatItControls: 'Market safety.',
      drivers: ['Labels', 'Seals'],
      quickWins: [
        { title: 'Seal Integrity Test', desc: 'Leak test routine', owner: 'QC', effort: 'S' }
      ],
      fixLever: { action: 'Label Lock', metric: 'Incidents', owner: 'QC', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Perfect packs.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'Pack Defect', def: '%' },
      traps: []
    }
  },
  juices: {
    'Engine': {
      focus: 'Consistency, Brix',
      profitLeak: 'Spec Drift',
      diagnosis: 'Taste varies by batch.',
      whatItControls: 'Brand trust.',
      drivers: ['Mixing', 'Brix'],
      quickWins: [
        { title: 'Spec Lock', desc: 'Brix/Acidity Check', owner: 'QC', effort: 'S' }
      ],
      fixLever: { action: 'Formula Control', metric: 'Consistency', owner: 'Mgr', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Identical batches.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'Brix Var', def: '%' },
      traps: []
    }
  },
  oils: {
    'Fuel': {
      focus: 'Extraction Yield',
      profitLeak: 'Oil in Cake',
      diagnosis: 'Press efficiency is low.',
      whatItControls: 'Margin.',
      drivers: ['Press', 'Filtration'],
      quickWins: [
        { title: 'Yield Bleed Spot', desc: 'Press check', owner: 'Sup', effort: 'S' }
      ],
      fixLever: { action: 'Extraction Optimization', metric: 'Yield', owner: 'Mgr', effort: 'M', timeline: '30d' },
      evidenceSnapshots: [],
      winCondition: 'Max oil.',
      system30: [], build60: [], institutionalize90: [],
      kpi: { name: 'Oil Yield', def: '%' },
      traps: []
    }
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

export const getFixPlan = (industry: string | undefined, pillar: string, subIndustry?: string): FixPlanTemplate => {
  const indKey = industry || 'other';

  const subKey = normalizeSubIndustry(subIndustry);
  if (subKey && INDUSTRY_FIX_PLANS[subKey]?.[pillar]) {
    return INDUSTRY_FIX_PLANS[subKey][pillar]; // Specific module plan
  }

  // Fallback to industry-level plan (e.g., 'aquaculture' or 'agriculture')
  if (INDUSTRY_FIX_PLANS[indKey]?.[pillar]) {
    return INDUSTRY_FIX_PLANS[indKey][pillar];
  }

  // Default to universal plan
  return PILLAR_FIX_PLANS[pillar] || PILLAR_FIX_PLANS['Engine'];
};
