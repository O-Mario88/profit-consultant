
export interface TruthSnippet {
  pillar: string;
  band: 'Stable' | 'Watchlist' | 'Weak' | 'Silent Killer';
  tilt: 'A-Lean' | 'B-Lean';
  strength: string;
  hiddenCost: string;
  profitConsequence: string[];
  fix7Day: string[];
  system30Day: string[];
  owner: string;
  targets: string;
}

export const REPORT_SNIPPETS: TruthSnippet[] = [
  // ==================== PILLAR: ENGINE (Operations) ====================
  // Stable
  {
    pillar: 'Engine', band: 'Stable', tilt: 'A-Lean',
    strength: 'You move fast and keep quality high through direct involvement.',
    hiddenCost: 'Growth can stall because too much depends on you.',
    profitConsequence: ['Time: small delays show up when you’re busy.', 'Cash: scaling may strain reserves.', 'Customers: stable satisfaction, watch responsiveness.'],
    fix7Day: ['Write 1 SOP for the most common issue.', 'Delegate 1 approval decision with limits.', 'Track on-time delivery daily for 7 days.'],
    system30Day: ['SOP library (top 10 tasks) + onboarding checklist', 'Approval matrix (who approves what)', 'Weekly ops scoreboard'],
    owner: 'Ops Lead / Founder', targets: 'On-time >85%, rework "rare"'
  },
  {
    pillar: 'Engine', band: 'Stable', tilt: 'B-Lean',
    strength: 'Your systems keep delivery consistent and protect margins.',
    hiddenCost: 'You can move slower on urgent client issues if escalation isn’t clear.',
    profitConsequence: ['Time: small delays show up when you’re busy.', 'Cash: scaling may strain reserves.', 'Customers: stable satisfaction, watch responsiveness.'],
    fix7Day: ['Add a fast escalation rule for urgent client issues.', 'Delegate 1 approval decision.', 'Track on-time delivery daily.'],
    system30Day: ['SOP library (top 10 tasks)', 'Approval matrix', 'Weekly ops scoreboard'],
    owner: 'Ops Lead / Founder', targets: 'On-time >85%, rework "rare"'
  },
  // Watchlist
  {
    pillar: 'Engine', band: 'Watchlist', tilt: 'A-Lean',
    strength: 'You rescue problems quickly so customers don’t leave.',
    hiddenCost: 'Team dependency is forming → you become the bottleneck.',
    profitConsequence: ['Time: you spend too much time answering small questions.', 'Cash: delays reduce capacity.', 'Customers: small service misses begin.'],
    fix7Day: ['Create a "Before you ask me" checklist for staff.', 'Move all tasks into one board.', 'Set 2 daily check times.'],
    system30Day: ['Role scorecards (who owns what outcome)', 'Training mini-videos for top 5 tasks', 'Weekly review'],
    owner: 'Founder + Supervisor', targets: 'Interruptions down 30%, repeat issues down 50%'
  },
  {
    pillar: 'Engine', band: 'Watchlist', tilt: 'B-Lean',
    strength: 'You have structure and fewer surprises than most businesses.',
    hiddenCost: 'Your system might be "there" but not used consistently.',
    profitConsequence: ['Time: you spend too much time answering small questions.', 'Cash: delays reduce capacity.', 'Customers: small service misses begin.'],
    fix7Day: ['Audit tool usage: is everyone actually using the CRM/Project tool?', 'Move all tasks into one board.', 'Set 2 daily check times.'],
    system30Day: ['Role scorecards', 'Training mini-videos', 'Weekly review'],
    owner: 'Founder + Supervisor', targets: 'Interruptions down 30%, repeat issues down 50%'
  },
  // Weak
  {
    pillar: 'Engine', band: 'Weak', tilt: 'A-Lean',
    strength: 'You keep the business alive with hustle and speed.',
    hiddenCost: 'You are paying a "repeat-fire tax" every week.',
    profitConsequence: ['Time: rework is stealing productive hours.', 'Cash: missed deadlines = missed payments.', 'Customers: trust starts dropping.'],
    fix7Day: ['Pick ONE recurring failure and redesign the step that causes it.', 'Assign ONE owner for delivery quality.', 'Add a simple checklist before delivery.'],
    system30Day: ['Standard delivery workflow', 'Quality checklist + spot audits', 'Daily 10-min ops standup'],
    owner: 'Ops Lead', targets: 'On-time +20pts, complaints down 30%'
  },
  {
    pillar: 'Engine', band: 'Weak', tilt: 'B-Lean',
    strength: 'You are trying to build order and structure.',
    hiddenCost: 'Work still slips because ownership is unclear.',
    profitConsequence: ['Time: rework is stealing productive hours.', 'Cash: missed deadlines = missed payments.', 'Customers: trust starts dropping.'],
    fix7Day: ['Clarify "Who owns the outcome" for the top 3 deliverables.', 'Assign ONE owner for delivery quality.', 'Add a simple checklist.'],
    system30Day: ['Standard delivery workflow', 'Quality checklist + spot audits', 'Daily 10-min ops standup'],
    owner: 'Ops Lead', targets: 'On-time +20pts, complaints down 30%'
  },
  // Silent Killer
  {
    pillar: 'Engine', band: 'Silent Killer', tilt: 'A-Lean',
    strength: 'Customers trust you because you personally ensure things work.',
    hiddenCost: 'If you are absent, revenue drops hard. That’s a fragile business.',
    profitConsequence: ['Time: you’re trapped in the business daily.', 'Cash: growth is limited by your energy.', 'Customers: delays + inconsistency create churn.'],
    fix7Day: ['Delegate 2 decisions today (set clear limits).', 'Document the top 5 recurring processes.', 'Assign owners for: compilation → delivery → invoicing.'],
    system30Day: ['"7 days without founder" plan', 'SOP + onboarding + quality checklist', 'Ops scoreboard reviewed weekly'],
    owner: 'Founder + Ops Supervisor', targets: 'Founder dependency down, on-time >80%'
  },
  {
    pillar: 'Engine', band: 'Silent Killer', tilt: 'B-Lean',
    strength: 'You care about structure, but execution isn’t following the structure.',
    hiddenCost: '"Ownerless work" is killing you: tasks exist, but nobody owns the outcome.',
    profitConsequence: ['Time: you’re trapped in the business daily.', 'Cash: growth is limited by your energy.', 'Customers: delays + inconsistency create churn.'],
    fix7Day: ['Assign explicit owners to every open project today.', 'Document the top 5 recurring processes.', 'Assign owners for: compilation → delivery → invoicing.'],
    system30Day: ['"7 days without founder" plan', 'SOP + onboarding + quality checklist', 'Ops scoreboard reviewed weekly'],
    owner: 'Founder + Ops Supervisor', targets: 'Founder dependency down, on-time >80%'
  },

  // ==================== PILLAR: FUEL (Finance) ====================
  // Stable
  {
    pillar: 'Fuel', band: 'Stable', tilt: 'A-Lean',
    strength: 'You can sell and create revenue momentum.',
    hiddenCost: 'Sales can hide margin leaks if you don’t watch profit.',
    profitConsequence: ['Cash: stable, watch late payments.', 'Profit: generally healthy.', 'Stress: manageable.'],
    fix7Day: ['List your top 3 offers and estimate margin.', 'Stop discounting "to close" for one week.', 'Do a simple weekly cash check.'],
    system30Day: ['Monthly profit review (simple P&L)', 'Payment policy (deposit + due dates)', 'Expense audit'],
    owner: 'Finance Lead / Founder', targets: 'Cash buffer started, discount rate down'
  },
  {
    pillar: 'Fuel', band: 'Stable', tilt: 'B-Lean',
    strength: 'You protect cash and avoid waste.',
    hiddenCost: 'Over-caution can slow growth.',
    profitConsequence: ['Cash: stable, watch late payments.', 'Profit: generally healthy.', 'Stress: manageable.'],
    fix7Day: ['Identify one growth investment you have delayed.', 'Stop discounting "to close" for one week.', 'Do a simple weekly cash check.'],
    system30Day: ['Monthly profit review', 'Payment policy', 'Expense audit'],
    owner: 'Finance Lead / Founder', targets: 'Cash buffer started, discount rate down'
  },
  // Watchlist
  {
    pillar: 'Fuel', band: 'Watchlist', tilt: 'A-Lean',
    strength: 'You keep cash moving by closing deals.',
    hiddenCost: 'Flexible terms + discounts weaken cashflow quietly.',
    profitConsequence: ['Cash: "we’re busy but broke" starts appearing.', 'Profit: margin pressure begins.', 'Stress: increases at month-end.'],
    fix7Day: ['Deposits on new jobs immediately.', 'Late invoice rule: pause work after 7 days overdue.', 'Price rule: no discount without upfront payment.'],
    system30Day: ['Weekly receivables list', 'Pricing floor per offer', 'Monthly profit review'],
    owner: 'Founder + Finance Admin', targets: 'Overdue invoices down 30%'
  },
  {
    pillar: 'Fuel', band: 'Watchlist', tilt: 'B-Lean',
    strength: 'You keep spending controlled.',
    hiddenCost: 'You may reject profitable opportunities because rules are too rigid.',
    profitConsequence: ['Cash: "we’re busy but broke" starts appearing.', 'Profit: margin pressure begins.', 'Stress: increases at month-end.'],
    fix7Day: ['Review rejected deals for lost profit potential.', 'Late invoice rule: pause work after 7 days overdue.', 'Price rule: no discount without upfront payment.'],
    system30Day: ['Weekly receivables list', 'Pricing floor per offer', 'Monthly profit review'],
    owner: 'Founder + Finance Admin', targets: 'Overdue invoices down 30%'
  },
  // Weak
  {
    pillar: 'Fuel', band: 'Weak', tilt: 'A-Lean',
    strength: 'You’re fighting hard to keep revenue alive.',
    hiddenCost: 'You’re leaking profit through discounts + late payments + unclear margins.',
    profitConsequence: ['Cash: frequent shortages force bad decisions.', 'Profit: margins shrink slowly.', 'Growth: unpredictable.'],
    fix7Day: ['Identify the #1 cash leak (late invoices OR discounting).', 'Fix that leak first.', 'Set aside a tax buffer.'],
    system30Day: ['Receivables policy', 'Offer margin sheet', 'Expense audit'],
    owner: 'Founder + Finance Lead', targets: 'Positive cash weeks, margin stabilized'
  },
  {
    pillar: 'Fuel', band: 'Weak', tilt: 'B-Lean',
    strength: 'You care about discipline, but the numbers aren’t stable.',
    hiddenCost: 'You may have controls, but they aren’t enforced consistently.',
    profitConsequence: ['Cash: frequent shortages force bad decisions.', 'Profit: margins shrink slowly.', 'Growth: unpredictable.'],
    fix7Day: ['Enforce payment terms on the next 3 deals.', 'Fix the #1 leak.', 'Set aside a tax buffer.'],
    system30Day: ['Receivables policy', 'Offer margin sheet', 'Expense audit'],
    owner: 'Founder + Finance Lead', targets: 'Positive cash weeks, margin stabilized'
  },
  // Silent Killer
  {
    pillar: 'Fuel', band: 'Silent Killer', tilt: 'A-Lean',
    strength: 'You’re pushing sales hard to survive.',
    hiddenCost: 'The cash cycle is broken. That kills businesses faster than anything.',
    profitConsequence: ['Cash: one shock can shut you down.', 'Profit: you can work all month for nothing.', 'Stress: constant firefighting.'],
    fix7Day: ['Collect money now: call top 10 debtors.', 'Stop work for overdue clients.', 'Switch to deposits/upfront for new work.'],
    system30Day: ['Weekly cash meeting', 'Monthly profit review + action list', 'Pricing standardization'],
    owner: 'Founder + Finance Admin', targets: 'Overdue invoices cut by half, 2–4 week buffer'
  },
  {
    pillar: 'Fuel', band: 'Silent Killer', tilt: 'B-Lean',
    strength: 'You want discipline, but execution is failing.',
    hiddenCost: 'False security: "we think we’re fine" but the numbers are wrong/late.',
    profitConsequence: ['Cash: one shock can shut you down.', 'Profit: you can work all month for nothing.', 'Stress: constant firefighting.'],
    fix7Day: ['Reconcile accounts immediately to see real cash position.', 'Stop work for overdue clients.', 'Switch to deposits/upfront for new work.'],
    system30Day: ['Weekly cash meeting', 'Monthly profit review + action list', 'Pricing standardization'],
    owner: 'Founder + Finance Admin', targets: 'Overdue invoices cut by half, 2–4 week buffer'
  },

  // ==================== PILLAR: VOICE (Marketing) ====================
  // Stable
  {
    pillar: 'Voice', band: 'Stable', tilt: 'A-Lean',
    strength: 'Your brand feels authentic and human.',
    hiddenCost: 'If marketing depends on mood, pipeline becomes unstable.',
    profitConsequence: ['Leads: stable.', 'Conversion: decent.', 'Retention: okay.'],
    fix7Day: ['Lock 2 marketing blocks weekly.', 'Create 5 follow-up scripts.', 'Add a simple onboarding check-in.'],
    system30Day: ['Content calendar', 'Lead tracker (simple CRM)', 'Referral ask process'],
    owner: 'Sales/Marketing Lead', targets: 'Leads/week stable, response time <2h'
  },
  {
    pillar: 'Voice', band: 'Stable', tilt: 'B-Lean',
    strength: 'You run consistent marketing and follow-up.',
    hiddenCost: 'If it becomes too automated, it can feel cold.',
    profitConsequence: ['Leads: stable.', 'Conversion: decent.', 'Retention: okay.'],
    fix7Day: ['Add a personal touch step to the automation.', 'Lock 2 marketing blocks weekly.', 'Add a simple onboarding check-in.'],
    system30Day: ['Content calendar', 'Lead tracker (simple CRM)', 'Referral ask process'],
    owner: 'Sales/Marketing Lead', targets: 'Leads/week stable, response time <2h'
  },
  // Watchlist
  {
    pillar: 'Voice', band: 'Watchlist', tilt: 'A-Lean',
    strength: 'You can sell when you engage directly.',
    hiddenCost: 'Leads die because follow-up is inconsistent.',
    profitConsequence: ['Leads: inconsistent.', 'Sales: "we lose prospects quietly."', 'CAC: rising.'],
    fix7Day: ['Follow-up within 2 hours.', 'Track every lead source.', 'Choose 2 channels only.'],
    system30Day: ['CRM + follow-up sequence', 'Weekly KPI review', 'Offer clarity'],
    owner: 'Sales Lead', targets: 'Conversion +10–20%, faster response'
  },
  {
    pillar: 'Voice', band: 'Watchlist', tilt: 'B-Lean',
    strength: 'You have a process.',
    hiddenCost: 'Too many channels dilute effort.',
    profitConsequence: ['Leads: inconsistent.', 'Sales: "we lose prospects quietly."', 'CAC: rising.'],
    fix7Day: ['Cut weak channels and double down on the top 2.', 'Follow-up within 2 hours.', 'Track every lead source.'],
    system30Day: ['CRM + follow-up sequence', 'Weekly KPI review', 'Offer clarity'],
    owner: 'Sales Lead', targets: 'Conversion +10–20%, faster response'
  },
  // Weak
  {
    pillar: 'Voice', band: 'Weak', tilt: 'A-Lean',
    strength: 'You rely on relationships and talent.',
    hiddenCost: 'Pipeline stops when you get busy → feast/famine.',
    profitConsequence: ['Cash: unstable months.', 'Customers: churn risk grows.', 'Reputation: inconsistent.'],
    fix7Day: ['Create one lead magnet (WhatsApp keyword, form).', 'Fix onboarding (clear steps).', 'Add retention check-in.'],
    system30Day: ['One reliable lead channel', 'Referral system', 'Customer success playbook'],
    owner: 'Sales + Ops', targets: 'Churn down, repeat purchase up'
  },
  {
    pillar: 'Voice', band: 'Weak', tilt: 'B-Lean',
    strength: 'You push process and conversion.',
    hiddenCost: 'Delivery/retention may suffer if growth outruns operations.',
    profitConsequence: ['Cash: unstable months.', 'Customers: churn risk grows.', 'Reputation: inconsistent.'],
    fix7Day: ['Audit onboarding: does it deliver the promise?', 'Fix onboarding (clear steps).', 'Add retention check-in.'],
    system30Day: ['One reliable lead channel', 'Referral system', 'Customer success playbook'],
    owner: 'Sales + Ops', targets: 'Churn down, repeat purchase up'
  },
  // Silent Killer
  {
    pillar: 'Voice', band: 'Silent Killer', tilt: 'A-Lean',
    strength: 'People buy because you personally sell well.',
    hiddenCost: 'Distribution is weak: if you stop pushing, sales die.',
    profitConsequence: ['Sales: unstable, unpredictable.', 'Customers: churn increases.', 'Margin: pressure from refunds/discounts.'],
    fix7Day: ['Build one consistent channel + daily follow-up.', 'Fix onboarding to reduce churn.', 'Track leads → conversion.'],
    system30Day: ['CRM + follow-up cadence', 'Retention dashboard', 'Offer proof pack'],
    owner: 'Sales Lead + Success', targets: 'Stable leads, churn reduced'
  },
  {
    pillar: 'Voice', band: 'Silent Killer', tilt: 'B-Lean',
    strength: 'You have systems, but trust or delivery is breaking.',
    hiddenCost: 'You’re scaling the wrong thing: churn/refunds erase growth.',
    profitConsequence: ['Sales: unstable, unpredictable.', 'Customers: churn increases.', 'Margin: pressure from refunds/discounts.'],
    fix7Day: ['Pause ads until retention is fixed.', 'Fix onboarding to reduce churn.', 'Track leads → conversion.'],
    system30Day: ['CRM + follow-up cadence', 'Retention dashboard', 'Offer proof pack'],
    owner: 'Sales Lead + Success', targets: 'Stable leads, churn reduced'
  },

  // ==================== PILLAR: BRAIN (Leadership) ====================
  // Stable
  {
    pillar: 'Brain', band: 'Stable', tilt: 'A-Lean',
    strength: 'Loyalty and relationships are strong.',
    hiddenCost: 'Avoiding tough talks can allow small problems to grow.',
    profitConsequence: ['Productivity: good.', 'Cash: stable.', 'Culture: strong.'],
    fix7Day: ['Clarify top 3 priorities.', 'One performance check-in with clear standard.', 'Weekly team update.'],
    system30Day: ['Role scorecards + weekly check-ins', 'Performance review cadence', 'Values refresh'],
    owner: 'Founder', targets: 'Clarity up'
  },
  {
    pillar: 'Brain', band: 'Stable', tilt: 'B-Lean',
    strength: 'Accountability and clarity are strong.',
    hiddenCost: 'If tone is too strict, people stop telling you the truth.',
    profitConsequence: ['Productivity: good.', 'Cash: stable.', 'Culture: strong.'],
    fix7Day: ['Ask the team: "What’s one thing blocking you?"', 'Clarify top 3 priorities.', 'One performance check-in.'],
    system30Day: ['Role scorecards + weekly check-ins', 'Performance review cadence', 'Values refresh'],
    owner: 'Founder', targets: 'Clarity up'
  },
  // Watchlist
  {
    pillar: 'Brain', band: 'Watchlist', tilt: 'A-Lean',
    strength: 'You protect harmony.',
    hiddenCost: 'Unclear roles and weak feedback reduce performance.',
    profitConsequence: ['Productivity: slow.', 'Errors: avoidable.', 'Morale: confusion.'],
    fix7Day: ['Write role expectations.', 'Address one behavior issue early.', 'Set weekly goals.'],
    system30Day: ['Hiring scorecard', 'Feedback cadence', 'Weekly goal review'],
    owner: 'Founder + Supervisor', targets: 'Rework down'
  },
  {
    pillar: 'Brain', band: 'Watchlist', tilt: 'B-Lean',
    strength: 'You drive output.',
    hiddenCost: 'Toxic behavior can hide under "results."',
    profitConsequence: ['Productivity: slow.', 'Errors: avoidable.', 'Morale: confusion.'],
    fix7Day: ['Check for toxicity in high performers.', 'Write role expectations.', 'Address one behavior issue.'],
    system30Day: ['Hiring scorecard', 'Feedback cadence', 'Weekly goal review'],
    owner: 'Founder + Supervisor', targets: 'Rework down'
  },
  // Weak
  {
    pillar: 'Brain', band: 'Weak', tilt: 'A-Lean',
    strength: 'People feel safe with you.',
    hiddenCost: 'Mis-hires and weak standards become expensive.',
    profitConsequence: ['Productivity: low due to rework.', 'Cash: payroll high for output.', 'Culture: high performers leave.'],
    fix7Day: ['Add a skills test for hiring.', 'Create a "mistake → learning" review without blame.', 'Review roles vs outcomes.'],
    system30Day: ['Scorecards + onboarding', 'Values enforcement', 'Quarterly reviews'],
    owner: 'Founder', targets: 'Hiring accuracy up, mistake rate down'
  },
  {
    pillar: 'Brain', band: 'Weak', tilt: 'B-Lean',
    strength: 'You want performance.',
    hiddenCost: 'Fear culture hides mistakes until they become costly.',
    profitConsequence: ['Productivity: low due to rework.', 'Cash: payroll high for output.', 'Culture: high performers leave.'],
    fix7Day: ['Encourage "bad news first" to break fear.', 'Create a "mistake → learning" review.', 'Review roles vs outcomes.'],
    system30Day: ['Scorecards + onboarding', 'Values enforcement', 'Quarterly reviews'],
    owner: 'Founder', targets: 'Hiring accuracy up, mistake rate down'
  },
  // Silent Killer
  {
    pillar: 'Brain', band: 'Silent Killer', tilt: 'A-Lean',
    strength: 'You carry the team emotionally and operationally.',
    hiddenCost: 'You are protecting underperformance and paying for it monthly.',
    profitConsequence: ['Productivity: collapse under stress.', 'Cash: paying for underperformance.', 'Culture: innovation dies.'],
    fix7Day: ['Define non-negotiable standards.', 'Remove or correct toxic behavior.', 'Clarify roles + outcomes.'],
    system30Day: ['Weekly performance rhythm', 'Coaching + consequences', 'Hiring freeze until standards fixed'],
    owner: 'Founder + Team Lead', targets: 'Turnover stabilized, standards met'
  },
  {
    pillar: 'Brain', band: 'Silent Killer', tilt: 'B-Lean',
    strength: 'You demand performance, but trust is low.',
    hiddenCost: 'People obey, but they don’t think. Innovation dies.',
    profitConsequence: ['Productivity: collapse under stress.', 'Cash: paying for underperformance.', 'Culture: innovation dies.'],
    fix7Day: ['Reset trust: admit one mistake to the team.', 'Define non-negotiable standards.', 'Remove or correct toxic behavior.'],
    system30Day: ['Weekly performance rhythm', 'Coaching + consequences', 'Trust building actions'],
    owner: 'Founder + Team Lead', targets: 'Turnover stabilized, standards met'
  },

  // ==================== PILLAR: PULSE (Product) ====================
  // Stable
  {
    pillar: 'Pulse', band: 'Stable', tilt: 'A-Lean',
    strength: 'You protect quality and you’re proud of what you sell.',
    hiddenCost: 'You can delay improvements because you want it "perfect."',
    profitConsequence: ['Cash: steady.', 'Customers: satisfied.', 'Growth: stable.'],
    fix7Day: ['Ask 5 customers: "What should we improve first?"', 'Pick 1 improvement.', 'Make that improvement visible.'],
    system30Day: ['Monthly feedback pulse', 'Quarterly mini-launch rhythm', 'Quality checklist'],
    owner: 'Product/Ops Lead', targets: '1 improvement shipped, complaints down'
  },
  {
    pillar: 'Pulse', band: 'Stable', tilt: 'B-Lean',
    strength: 'You test, learn, and improve steadily.',
    hiddenCost: 'You can change too much too often, and customers struggle to keep up.',
    profitConsequence: ['Cash: steady.', 'Customers: satisfied.', 'Growth: stable.'],
    fix7Day: ['Slow down updates to a quarterly rhythm.', 'Ask 5 customers for feedback.', 'Make one improvement visible.'],
    system30Day: ['Monthly feedback pulse', 'Quarterly mini-launch rhythm', 'Quality checklist'],
    owner: 'Product/Ops Lead', targets: '1 improvement shipped, complaints down'
  },
  // Watchlist
  {
    pillar: 'Pulse', band: 'Watchlist', tilt: 'A-Lean',
    strength: 'Your product is stable and consistent.',
    hiddenCost: '"Stable" can slowly become "stale" (customers don’t complain… they just leave).',
    profitConsequence: ['Cash: sales soften.', 'Customers: lose repeat buyers.', 'Margin: price pressure.'],
    fix7Day: ['List top 3 customer complaints.', 'Fix the easiest one immediately.', 'Write one clear improvement message.'],
    system30Day: ['"Top 5 complaints" tracker', 'Simple product roadmap', 'Competitor scan monthly'],
    owner: 'Founder + Product Lead', targets: '1 visible improvement, repeat up'
  },
  {
    pillar: 'Pulse', band: 'Watchlist', tilt: 'B-Lean',
    strength: 'You actively look for new offers and market shifts.',
    hiddenCost: 'Experiments can dilute focus, increase costs, and confuse the message.',
    profitConsequence: ['Cash: sales soften.', 'Customers: lose repeat buyers.', 'Margin: price pressure.'],
    fix7Day: ['Kill one weak experiment to focus resources.', 'List top 3 complaints.', 'Fix easiest one.'],
    system30Day: ['"Top 5 complaints" tracker', 'Simple product roadmap', 'Competitor scan monthly'],
    owner: 'Founder + Product Lead', targets: '1 visible improvement, repeat up'
  },
  // Weak
  {
    pillar: 'Pulse', band: 'Weak', tilt: 'A-Lean',
    strength: 'You care deeply about your product.',
    hiddenCost: 'You may be building what you like, not what the customer is paying for.',
    profitConsequence: ['Cash: refunds/rework.', 'Customers: trust drops.', 'Growth: referrals stall.'],
    fix7Day: ['Interview 5 customers (why they buy/leave).', 'Identify one missing feature.', 'Update offer message.'],
    system30Day: ['Customer feedback → roadmap rule', 'Weekly quality review', 'Release gate (test before launch)'],
    owner: 'Product Lead + Ops', targets: 'Refunds down 30%, complaints down'
  },
  {
    pillar: 'Pulse', band: 'Weak', tilt: 'B-Lean',
    strength: 'You’re willing to experiment and move quickly.',
    hiddenCost: 'Speed is creating "quality debt" (bugs, complaints, refunds).',
    profitConsequence: ['Cash: refunds/rework.', 'Customers: trust drops.', 'Growth: referrals stall.'],
    fix7Day: ['Find top 3 quality issues causing complaints.', 'Fix them immediately.', 'Add "do-not-ship" checklist.'],
    system30Day: ['Customer feedback → roadmap rule', 'Weekly quality review', 'Release gate (test before launch)'],
    owner: 'Product Lead + Ops', targets: 'Refunds down 30%, complaints down'
  },
  // Silent Killer
  {
    pillar: 'Pulse', band: 'Silent Killer', tilt: 'A-Lean',
    strength: 'You have strong belief and persistence.',
    hiddenCost: 'The market is rejecting parts of your offer, but the business keeps pushing.',
    profitConsequence: ['Cash: sales decay.', 'Customers: churn spikes.', 'Margin: forced discounts.'],
    fix7Day: ['Stop guessing. Collect feedback data this week.', 'Identify "deal-breaker" problem.', 'Fix it first.'],
    system30Day: ['Roadmap with core vs experiments', 'Portfolio rules (kill/pivot)', 'Quality control plan'],
    owner: 'Founder + Product Lead', targets: 'Stabilize offer, stop discounting'
  },
  {
    pillar: 'Pulse', band: 'Silent Killer', tilt: 'B-Lean',
    strength: 'You are adaptable and willing to pivot.',
    hiddenCost: 'You’re changing too often. Customers don’t know what you stand for.',
    profitConsequence: ['Cash: sales decay.', 'Customers: churn spikes.', 'Margin: forced discounts.'],
    fix7Day: ['Define core offer in one sentence.', 'Freeze core for 90 days.', 'Keep experiments small.'],
    system30Day: ['Roadmap with core vs experiments', 'Portfolio rules (kill/pivot)', 'Quality control plan'],
    owner: 'Founder + Product Lead', targets: 'Stabilize offer, stop discounting'
  },

  // ==================== PILLAR: SHIELD (Risk) ====================
  // Stable
  {
    pillar: 'Shield', band: 'Stable', tilt: 'A-Lean',
    strength: 'You move fast and trust people.',
    hiddenCost: 'Small gaps (contracts, passwords) can become a big disaster later.',
    profitConsequence: ['Cash: protected.', 'Risk: low.', 'Stress: low.'],
    fix7Day: ['Turn on 2FA for email/banking.', 'Create basic contract template.', 'Set automatic backups.'],
    system30Day: ['Contract library', 'Password manager + access roles', 'Monthly risk checklist'],
    owner: 'Founder / Admin Lead', targets: '2FA 100%, backups tested'
  },
  {
    pillar: 'Shield', band: 'Stable', tilt: 'B-Lean',
    strength: 'You protect the business with good controls.',
    hiddenCost: 'Too much formality can slow deals if you don’t have simple templates.',
    profitConsequence: ['Cash: protected.', 'Risk: low.', 'Stress: low.'],
    fix7Day: ['Simplify one contract template for speed.', 'Turn on 2FA.', 'Set automatic backups.'],
    system30Day: ['Contract library', 'Password manager', 'Monthly risk checklist'],
    owner: 'Founder / Admin Lead', targets: '2FA 100%, backups tested'
  },
  // Watchlist
  {
    pillar: 'Shield', band: 'Watchlist', tilt: 'A-Lean',
    strength: 'You rely on relationships and trust.',
    hiddenCost: '"Handshake deals" create scope disputes and unpaid work.',
    profitConsequence: ['Cash: unpaid work/disputes.', 'Customers: difficult clients.', 'Stress: fighting avoidable problems.'],
    fix7Day: ['"No signed scope, no work." (start now)', 'Add deposit requirement.', 'Store passwords in vault.'],
    system30Day: ['Standard scope + payment terms', 'Contractor agreements', 'Quarterly security review'],
    owner: 'Founder + Admin Lead', targets: 'Disputes down, late payment reduced'
  },
  {
    pillar: 'Shield', band: 'Watchlist', tilt: 'B-Lean',
    strength: 'You’re building safety.',
    hiddenCost: 'Security rules can reduce productivity if poorly set up.',
    profitConsequence: ['Cash: unpaid work/disputes.', 'Customers: difficult clients.', 'Stress: fighting avoidable problems.'],
    fix7Day: ['Review security friction points.', 'Add deposit requirement.', 'Store passwords in vault.'],
    system30Day: ['Standard scope + payment terms', 'Contractor agreements', 'Quarterly security review'],
    owner: 'Founder + Admin Lead', targets: 'Disputes down, late payment reduced'
  },
  // Weak
  {
    pillar: 'Shield', band: 'Weak', tilt: 'A-Lean',
    strength: 'You move fast and trust your network.',
    hiddenCost: 'You are exposed: cyber/legal/tax issues can wipe out years.',
    profitConsequence: ['Cash: disaster risk.', 'Customers: trust collapse risk.', 'Time: legal distractions.'],
    fix7Day: ['2FA everywhere.', 'Backups + test restore.', 'Signed contracts for paid work.'],
    system30Day: ['Access control', 'Legal templates', 'Disaster recovery plan'],
    owner: 'Founder + IT/Admin Lead', targets: 'Triad complete, contracts standard'
  },
  {
    pillar: 'Shield', band: 'Weak', tilt: 'B-Lean',
    strength: 'You want strong controls, but they may not be followed.',
    hiddenCost: 'False safety: policies exist but behavior doesn’t follow them.',
    profitConsequence: ['Cash: disaster risk.', 'Customers: trust collapse risk.', 'Time: legal distractions.'],
    fix7Day: ['Audit: is 2FA actually on?', 'Backups + test restore.', 'Signed contracts for paid work.'],
    system30Day: ['Access control', 'Legal templates', 'Disaster recovery plan'],
    owner: 'Founder + IT/Admin Lead', targets: 'Triad complete, contracts standard'
  },
  // Silent Killer
  {
    pillar: 'Shield', band: 'Silent Killer', tilt: 'A-Lean',
    strength: 'You move fast, close deals, and trust people.',
    hiddenCost: 'You are operating with disaster-level risk. One incident away from collapse.',
    profitConsequence: ['Cash: bankruptcy risk.', 'Customers: breach destroys trust.', 'Stress: fear/firefighting.'],
    fix7Day: ['Secure access today (2FA + resets).', 'Backups today: set + test.', 'Contract rule today.'],
    system30Day: ['Compliance baseline', 'Financial access controls', 'Continuity plan'],
    owner: 'Founder + Admin/IT Lead', targets: 'Basics locked, access audit clean'
  },
  {
    pillar: 'Shield', band: 'Silent Killer', tilt: 'B-Lean',
    strength: 'You want safety, but you’re still exposed.',
    hiddenCost: 'You’re spending effort, but not fixing the basics—so you have "false security."',
    profitConsequence: ['Cash: bankruptcy risk.', 'Customers: breach destroys trust.', 'Stress: fear/firefighting.'],
    fix7Day: ['Verify basics: 2FA, backups, contracts.', 'Secure access today.', 'Contract rule today.'],
    system30Day: ['Compliance baseline', 'Financial access controls', 'Continuity plan'],
    owner: 'Founder + Admin/IT Lead', targets: 'Basics locked, access audit clean'
  },

  // ==================== PILLAR: TRIBE (Team) ====================
  // Stable
  {
    pillar: 'Tribe', band: 'Stable', tilt: 'A-Lean',
    strength: 'People have freedom and move fast.',
    hiddenCost: 'Freedom can create silos if you don’t keep visibility.',
    profitConsequence: ['Time: good pace.', 'Customers: consistent.', 'People: stable.'],
    fix7Day: ['Weekly team update (15 mins).', 'Cancel one unnecessary meeting.', 'Assign owners for top 5 tasks.'],
    system30Day: ['Ownership map', 'Simple decision rule', 'Work visibility system'],
    owner: 'Team Lead', targets: 'Fewer missed handoffs'
  },
  {
    pillar: 'Tribe', band: 'Stable', tilt: 'B-Lean',
    strength: 'Teamwork and visibility are strong.',
    hiddenCost: 'Too much teamwork can become too many meetings.',
    profitConsequence: ['Time: good pace.', 'Customers: consistent.', 'People: stable.'],
    fix7Day: ['Audit meetings: remove 20%.', 'Cancel one unnecessary meeting.', 'Assign owners for top 5 tasks.'],
    system30Day: ['Ownership map', 'Simple decision rule', 'Work visibility system'],
    owner: 'Team Lead', targets: 'Fewer missed handoffs'
  },
  // Watchlist
  {
    pillar: 'Tribe', band: 'Watchlist', tilt: 'A-Lean',
    strength: 'People can work independently.',
    hiddenCost: '"Nobody owned it" failures begin to appear.',
    profitConsequence: ['Time: rework increases.', 'Customers: small mistakes.', 'People: frustration.'],
    fix7Day: ['Create an "owner rule" for every task.', 'Create a decision rule.', 'Run handoff checklist.'],
    system30Day: ['Weekly accountability review', 'Clear escalation paths', 'Team communication rules'],
    owner: 'Founder + Team Lead', targets: 'Nobody owned it reduced'
  },
  {
    pillar: 'Tribe', band: 'Watchlist', tilt: 'B-Lean',
    strength: 'Collaboration is strong.',
    hiddenCost: 'Decisions can slow because everyone must agree.',
    profitConsequence: ['Time: rework increases.', 'Customers: small mistakes.', 'People: frustration.'],
    fix7Day: ['Assign single decision makers.', 'Create a decision rule.', 'Run handoff checklist.'],
    system30Day: ['Weekly accountability review', 'Clear escalation paths', 'Team communication rules'],
    owner: 'Founder + Team Lead', targets: 'Nobody owned it reduced'
  },
  // Weak
  {
    pillar: 'Tribe', band: 'Weak', tilt: 'A-Lean',
    strength: 'You rely on heroes to save the day.',
    hiddenCost: 'Hero dependence + burnout is causing quality to vary.',
    profitConsequence: ['Time: firefighting.', 'Customers: inconsistent.', 'People: exhaustion/turnover.'],
    fix7Day: ['Identify top 2 heroes.', 'Remove one task from each (SOP).', 'Reduce after-hours work.'],
    system30Day: ['Cross-training plan', 'Feedback rhythm', 'Sustainable pace policy'],
    owner: 'Founder + Team Lead', targets: 'Burnout reduced, quality stable'
  },
  {
    pillar: 'Tribe', band: 'Weak', tilt: 'B-Lean',
    strength: 'You try to structure teamwork.',
    hiddenCost: 'High control can create silence—people stop telling you bad news.',
    profitConsequence: ['Time: firefighting.', 'Customers: inconsistent.', 'People: exhaustion/turnover.'],
    fix7Day: ['Run "what’s broken" session (no blame).', 'Reward early reporting.', 'Support-not-punishment rule.'],
    system30Day: ['Cross-training plan', 'Feedback rhythm', 'Sustainable pace policy'],
    owner: 'Founder + Team Lead', targets: 'Burnout reduced, quality stable'
  },
  // Silent Killer
  {
    pillar: 'Tribe', band: 'Silent Killer', tilt: 'A-Lean',
    strength: 'Independence and speed exist when calm.',
    hiddenCost: 'Silos + conflict avoidance + burnout are breaking execution.',
    profitConsequence: ['Time: productivity collapse.', 'Customers: churn rises.', 'People: high turnover.'],
    fix7Day: ['Assign owners for delivery/cash.', 'Fix biggest conflict source.', 'Reduce overload.'],
    system30Day: ['Clear roles + scorecards', 'Psychological safety rules', 'Work visibility'],
    owner: 'Founder + Team Lead', targets: 'Missed deadlines reduced, turnover stabilized'
  },
  {
    pillar: 'Tribe', band: 'Silent Killer', tilt: 'B-Lean',
    strength: 'Structure exists on paper.',
    hiddenCost: 'High control with low trust creates politics, silence, and slow delivery.',
    profitConsequence: ['Time: productivity collapse.', 'Customers: churn rises.', 'People: high turnover.'],
    fix7Day: ['Relax control on low-risk tasks.', 'Fix biggest conflict source.', 'Reduce overload.'],
    system30Day: ['Clear roles + scorecards', 'Psychological safety rules', 'Work visibility'],
    owner: 'Founder + Team Lead', targets: 'Missed deadlines reduced, turnover stabilized'
  }
];

export const getFallbackSnippet = (pillar: string, band: string, tilt: string): TruthSnippet => {
  return {
    pillar, band: band as any, tilt: tilt as any,
    strength: `You have foundational strengths in ${pillar}.`,
    hiddenCost: `However, hidden inefficiencies in ${pillar} are leaking value.`,
    profitConsequence: ['Efficiency loss.', 'Potential revenue stagnation.', 'Increased operational friction.'],
    fix7Day: [`Audit your current ${pillar} process.`, 'Identify the top bottleneck.', 'Discuss with key team members.'],
    system30Day: [`Implement a metric for ${pillar}.`, 'Set a monthly review cadence.', 'Document the core standard.'],
    owner: 'Department Lead', targets: 'Stability and clarity'
  };
};
