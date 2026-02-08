
export interface HRIndexDefinition {
  id: string;
  title: string;
  questions: string[];
  description: string;
  profitLeak: string;
  timeDragFactor: number; // Hours lost per employee per week if High Risk
  bands: {
    healthy: { 
      executive: string; 
      operator: string;
      actions: string[]; // "Next actions (keep strong)"
      measure: string;
    };
    watch: { 
      executive: string; 
      operator: string;
      fix7: string[]; 
      fix30: string[]; 
      fix90: string[]; 
      measure: string;
    };
    highRisk: { 
      executive: string; 
      operator: string;
      fix7: string[]; 
      fix30: string[]; 
      fix90: string[]; 
      measure: string;
      owner?: string;
    };
  };
}

export const HR_INDICES: HRIndexDefinition[] = [
  {
    id: 'approval_friction',
    title: 'Approval Friction',
    questions: ['TD-01', 'TD-06', 'TD-07', 'TD-10', 'TD-26', 'TD-30'],
    description: 'Measures approval dependence and unclear decision rights.',
    profitLeak: 'Slow execution, bottlenecks, manager overload, missed opportunities.',
    timeDragFactor: 5,
    bands: {
      healthy: {
        executive: '{DEPARTMENT} shows low approval friction. Most staff feel trusted to make decisions within clear boundaries, which supports speed and ownership. Maintain this by keeping decision rights visible and consistent.',
        operator: 'Decision rights appear clear and consistently applied. Escalation is used for true risk, not as a safety blanket. This is the pattern you want for scalability.',
        actions: ['Publish "Decide vs Escalate" examples (5 scenarios by role).', 'Review one approval rule that still causes delay.', 'Add delegation health to manager coaching.'],
        measure: 'Time-to-decision, # escalations/week, manager time spent approving.'
      },
      watch: {
        executive: 'Approval friction is mixed in {DEPARTMENT}. Some teams move fast; others wait for approval more often. This usually signals inconsistent decision rules or uneven manager behavior.',
        operator: 'Some staff treat approval as risk insurance. That slows work and makes managers human routers. Root causes typically include unclear thresholds, fear of blame, or managers overriding decisions after the fact.',
        fix7: ['Create a 1-page "decision thresholds" guide (what staff can decide alone).'],
        fix30: ['Replace ad-hoc approvals with a simple template: context -> options -> risk -> recommendation -> decision.'],
        fix90: ['Remove the biggest structural bottleneck (single approver / single gatekeeper).'],
        measure: 'Approval wait time, rework from late approvals, cycle time per workflow.'
      },
      highRisk: {
        executive: '{DEPARTMENT} has high approval friction ({SCORE}). A large share of staff prefer to wait for approval before acting. This strongly suggests that speed is being traded for safety, creating bottlenecks and slowing output.',
        operator: 'This pattern is consistent with approval-dependency culture: people escalate to protect themselves. Managers become the bottleneck, initiative drops, and performance becomes fragile. If {AGREEMENT} is high, this is systemic.',
        fix7: ['Publish decision rights + escalation ladder (decide / decide+FYI / escalate).', 'Leader message: "Good-faith decisions won’t be punished."', 'Remove one approval-heavy meeting; replace with async updates.'],
        fix30: ['Define "what good looks like" for top workflows (reduces fear).', 'Introduce blameless post-mortems (system > person).', 'Manager training: coach decisions instead of taking over.'],
        fix90: ['Delegated approval limits; SLAs for approvals.', 'Manager KPIs include delegation health and cycle time improvements.'],
        measure: 'Cycle time, escalations, manager approval load, employee ownership score.',
        owner: 'Department Head + HRBP'
      }
    }
  },
  {
    id: 'blame_cover',
    title: 'Blame & Cover',
    questions: ['TD-02', 'TD-06', 'TD-16', 'TD-36', 'TD-40'],
    description: 'Measures fear of blame, CYA behavior (CCs, written proof, silence).',
    profitLeak: 'Slow decisions, hidden issues, reduced innovation.',
    timeDragFactor: 3,
    bands: {
      healthy: {
        executive: 'Low blame-and-cover signals healthy trust. People communicate for clarity rather than self-protection, which supports speed and openness.',
        operator: 'Staff feel safe reporting problems early. Mistakes are treated as learning inputs, not punishable events.',
        actions: ['Keep weekly "what we learned" ritual.', 'Reward early issue surfacing.'],
        measure: 'Incident reporting speed, idea submissions, near-miss reporting.'
      },
      watch: {
        executive: 'Mixed signals: some staff prefer extra visibility and documentation as protection. This often comes from inconsistent reactions to mistakes.',
        operator: 'Caution is used as insurance. You may have uneven manager behavior: some reward transparency, others punish it.',
        fix7: ['Agree one rule: "We fix the system first." Leaders model it once publicly.'],
        fix30: ['Implement a "mistake protocol" (report -> contain -> learn -> improve).'],
        fix90: ['Adjust reviews to reward detection + correction, not perfection theater.'],
        measure: 'Late surprises, escalation frequency, staff silence indicators.'
      },
      highRisk: {
        executive: 'High blame-and-cover ({SCORE}) suggests staff optimize for safety over performance. This creates slow communication and prevents early risk detection.',
        operator: 'This is survival-mode behavior. If people can’t be wrong safely, they will hide issues until they explode.',
        fix7: ['Anonymous issue capture + leader commitment to no retaliation.'],
        fix30: ['Monthly learning reviews with action tracking.'],
        fix90: ['Audit manager behaviors; remove retaliatory patterns; promote transparency.'],
        measure: 'Defects found late vs early, feedback participation, psychological safety pulse.'
      }
    }
  },
  {
    id: 'bureaucracy',
    title: 'Bureaucracy Drag',
    questions: ['TD-04', 'TD-05', 'TD-29', 'TD-30'],
    description: 'Measures process rigidity and meeting dependency.',
    profitLeak: 'Payroll spent on rituals; slow delivery.',
    timeDragFactor: 6,
    bands: {
      healthy: {
        executive: 'Process supports quality without blocking speed. Meetings are used for decisions, not reporting.',
        operator: 'SOPs are flexible where appropriate; exceptions exist for customer impact.',
        actions: ['Maintain dashboard-first updates.', 'Keep decision meetings only.'],
        measure: 'Meeting hours/person, time from request->delivery.'
      },
      watch: {
        executive: 'Process helps, but some steps may slow execution. Meeting load may be higher than needed.',
        operator: 'Teams may be using meetings to compensate for unclear priorities or weak dashboards.',
        fix7: ['Identify top 2 slowest steps; simplify one immediately.'],
        fix30: ['Replace 1 recurring meeting with async dashboard updates.'],
        fix90: ['Rewrite SOPs into "minimum effective steps" + quality checkpoints.'],
        measure: 'Meeting hours, queue time, rework.'
      },
      highRisk: {
        executive: 'High bureaucracy drag ({SCORE}) indicates process and meetings may be replacing execution. This is a direct payroll-to-output inefficiency.',
        operator: 'People choose safety via procedure over results. This slows customers, demoralizes high performers, and hides accountability.',
        fix7: ['Meeting reset: cancel/reporting meetings; keep decision-only.'],
        fix30: ['Create exception rules where outcome > procedure (with safeguards).'],
        fix90: ['Re-architect workflows with frontline input; track cycle time reductions.'],
        measure: 'Meeting load, cycle time, customer complaint rate, throughput.'
      }
    }
  },
  {
    id: 'tool_friction',
    title: 'Tool Friction',
    questions: ['TD-11', 'TD-16', 'TD-19'],
    description: 'Measures productivity loss from outdated tools, workarounds, and interruptions.',
    profitLeak: 'Hours lost, errors, rework.',
    timeDragFactor: 4,
    bands: {
      healthy: {
        executive: 'Tools support speed and quality. Staff don’t rely heavily on personal workarounds.',
        operator: 'Low shadow-systems. One source of truth is used consistently.',
        actions: ['Quarterly tool hygiene.', 'Remove duplicates.'],
        measure: 'Tool adoption, task completion time, error rate.'
      },
      watch: {
        executive: 'Some friction exists—likely a few recurring tool or access pain points.',
        operator: 'Workarounds are forming. That signals reliability gaps in the official system.',
        fix7: ['Fix 1 high-pain tool issue (fast win).'],
        fix30: ['Standardize tool usage + train.'],
        fix90: ['Tool ROI plan: invest in one upgrade with measured time saved.'],
        measure: 'Time saved per workflow, ticket volume, rework.'
      },
      highRisk: {
        executive: 'High tool friction ({SCORE}) suggests the system is slowing staff down, pushing them into workarounds. This is a measurable productivity tax.',
        operator: 'Shadow systems are likely. Risk rises (lost data, inconsistent quality) and speed drops.',
        fix7: ['Declare one official system for tasks/files; reduce duplication.'],
        fix30: ['Access permissions + structure + reliability improvements.'],
        fix90: ['Enforce adoption; retire legacy tools; measure cycle time improvement.'],
        measure: 'Throughput, defect rates, tool compliance, time-to-find information.'
      }
    }
  },
  {
    id: 'onboarding_debt',
    title: 'Onboarding Debt',
    questions: ['TD-12', 'TD-18', 'TD-09'],
    description: 'Measures how much learning depends on luck, people, and tribal knowledge.',
    profitLeak: 'Slow ramp, inconsistent delivery, rework.',
    timeDragFactor: 3,
    bands: {
      healthy: {
        executive: 'Onboarding is supported by clear resources. New staff can reach productivity without overloading seniors.',
        operator: 'Docs are trusted and used; escalation rules exist; standards are visible.',
        actions: ['Keep "Start Here" current.', 'Quarterly doc refresh.'],
        measure: 'Time-to-productivity, new hire error rate.'
      },
      watch: {
        executive: 'Some learning depends on asking colleagues rather than reliable documentation.',
        operator: 'Tribal knowledge is creeping in. Quality becomes person-dependent.',
        fix7: ['Create "Top 10 questions" doc.'],
        fix30: ['Role checklists + 30/60/90 plans.'],
        fix90: ['Onboarding library (videos + SOPs + certification).'],
        measure: 'New hire confidence, rework, dependency on top performers.'
      },
      highRisk: {
        executive: 'High onboarding debt ({SCORE}) indicates growth may break quality. The business is relying on memory and heroes.',
        operator: 'Senior staff are the documentation. That becomes expensive and fragile.',
        fix7: ['Capture repeat questions into SOPs.'],
        fix30: ['Implement buddy + weekly learning checkpoints.'],
        fix90: ['Certification for key roles before independent work.'],
        measure: 'Ramp time, error rate, mentor load.'
      }
    }
  },
  {
    id: 'burnout_risk',
    title: 'Burnout Risk',
    questions: ['TD-13', 'TD-20', 'TD-19'],
    description: 'Measures survival pacing (skipping breaks, overtime, constant interruption).',
    profitLeak: 'Churn, errors, customer issues.',
    timeDragFactor: 2,
    bands: {
      healthy: {
        executive: 'Work pace appears sustainable. This supports consistency and retention.',
        operator: 'Breaks and focus time are normal; overtime is exception-based.',
        actions: ['Keep staffing + planning stable.'],
        measure: 'Overtime, sick days, error rate.'
      },
      watch: {
        executive: 'Intermittent overload exists. If unmanaged, it becomes a retention and quality risk.',
        operator: 'Teams may be running hot during predictable peaks without a plan.',
        fix7: ['Protect focus time; reduce interrupts.'],
        fix30: ['Workload audit; remove low-value tasks.'],
        fix90: ['Redesign staffing/scope to reduce recurring crunch.'],
        measure: 'Overtime trend, defects, resignations.'
      },
      highRisk: {
        executive: 'Burnout risk is high ({SCORE}). This pattern commonly precedes turnover and quality incidents.',
        operator: 'This is endurance mode, not high performance. People will either quit or start making expensive mistakes.',
        fix7: ['Stop the bleeding: freeze noncritical work; reduce after-hours.'],
        fix30: ['Capacity plan + staffing/scope correction.'],
        fix90: ['Manager accountability: sustainable pace metrics.'],
        measure: 'Attrition intent, error spikes, customer complaints.'
      }
    }
  },
  {
    id: 'priority_noise',
    title: 'Priority Noise',
    questions: ['TD-23', 'TD-25', 'TD-28', 'TD-29'],
    description: 'Measures scream-based prioritization and context switching.',
    profitLeak: 'Salary spent on low-impact tasks; missed delivery.',
    timeDragFactor: 4,
    bands: {
      healthy: {
        executive: 'Priorities are aligned and stable; teams focus on impact.',
        operator: 'Work intake and prioritization rules are clear and followed.',
        actions: ['Maintain weekly priorities.', 'Intake discipline.'],
        measure: 'WIP count, missed deadlines.'
      },
      watch: {
        executive: 'Urgency sometimes overrides impact. Alignment needs tightening.',
        operator: 'Conflicting requests are pulling staff off high-value work.',
        fix7: ['Publish weekly top 3 priorities + owners.'],
        fix30: ['Intake rule: new requests go through one channel.'],
        fix90: ['Leadership alignment routine (same goals across managers).'],
        measure: 'WIP, rework, abandoned projects.'
      },
      highRisk: {
        executive: 'High priority noise ({SCORE}) suggests teams prioritize based on who asks rather than agreed goals. This is a direct efficiency and morale risk.',
        operator: 'Leadership alignment is broken. Staff are being pulled apart.',
        fix7: ['Freeze priorities except true emergencies.'],
        fix30: ['Define goal hierarchy (company->dept->team).'],
        fix90: ['Unify leadership planning and resolve conflicts explicitly.'],
        measure: 'Switching cost, missed deadlines, throughput.'
      }
    }
  },
  {
    id: 'kpi_fog',
    title: 'KPI Fog',
    questions: ['TD-24', 'TD-27', 'TD-14'],
    description: 'Measures unclear success metrics and busyness over outcomes.',
    profitLeak: 'Effort without returns.',
    timeDragFactor: 3,
    bands: {
      healthy: {
        executive: 'Success is measurable and understood; teams know what "good" looks like.',
        operator: 'Role scorecards exist and are used consistently.',
        actions: ['Keep scoreboards visible.', 'Stable metrics.'],
        measure: 'KPI clarity pulse, variance in performance.'
      },
      watch: {
        executive: 'Some roles lack clear measurement. This can lead to misaligned work.',
        operator: 'People may be optimizing for activity rather than results.',
        fix7: ['Define 1-3 KPIs per role.'],
        fix30: ['Weekly scoreboard review.'],
        fix90: ['Connect KPIs to business outcomes and development plans.'],
        measure: 'Output quality, delivery predictability.'
      },
      highRisk: {
        executive: 'KPI fog is high ({SCORE}). People likely work hard without clear direction on what drives results.',
        operator: 'Busyness is being rewarded. That’s how profit leaks hide.',
        fix7: ['Publish "this month’s scoreboard".'],
        fix30: ['Implement role scorecards + coaching.'],
        fix90: ['Redesign performance system to reward outcomes + standards.'],
        measure: 'KPI adoption, delivery predictability, productivity.'
      }
    }
  },
  {
    id: 'fairness_merit',
    title: 'Fairness & Merit',
    questions: ['TD-32', 'TD-35', 'TD-37', 'TD-39'],
    description: 'Measures belief that advancement is political vs performance-based.',
    profitLeak: 'Top performers disengage or leave.',
    timeDragFactor: 1,
    bands: {
      healthy: {
        executive: 'People believe performance and impact drive growth. This supports retention.',
        operator: 'Promotion criteria and rewards are understood and consistent.',
        actions: ['Keep transparency.', 'Calibration across managers.'],
        measure: 'Retention of top performers, internal mobility.'
      },
      watch: {
        executive: 'Some employees feel visibility or relationships influence growth more than results.',
        operator: 'Perceived inconsistency is emerging. Fix now before it hardens into cynicism.',
        fix7: ['Publish promotion criteria simply.'],
        fix30: ['Calibrate reviews across managers.'],
        fix90: ['Audit pay/promotion patterns for risk signals.'],
        measure: 'Engagement, internal promotion fairness pulse.'
      },
      highRisk: {
        executive: 'Fairness risk is high ({SCORE}). People may believe the system rewards proximity over performance, which increases turnover risk among high performers.',
        operator: 'This creates politics, silence, and output suppression. Your best people will exit first.',
        fix7: ['Publish criteria + examples of "what earns growth".'],
        fix30: ['Implement evidence-based evaluations.'],
        fix90: ['Rebuild incentives: reward impact, not loyalty theater.'],
        measure: 'Regrettable attrition, performance distribution, complaint signals.'
      }
    }
  },
  {
    id: 'feedback_safety',
    title: 'Feedback Safety',
    questions: ['TD-34', 'TD-40', 'TD-36'],
    description: 'Measures whether people can speak truth and share ideas early.',
    profitLeak: 'Defects persist, innovation stalls, risk hidden.',
    timeDragFactor: 2,
    bands: {
      healthy: {
        executive: 'Feedback flows early and constructively. This supports learning speed.',
        operator: 'People can challenge ideas without fear; issues surface quickly.',
        actions: ['Leader modeling.', 'Retros with action tracking.'],
        measure: 'Idea submissions, defect detection speed.'
      },
      watch: {
        executive: 'Feedback is careful and inconsistent. This can slow improvement.',
        operator: 'Some fear exists; feedback may be happening privately instead of productively.',
        fix7: ['Leaders invite one critique publicly and respond well.'],
        fix30: ['Structured retros + safe channels.'],
        fix90: ['Embed upward feedback into manager KPIs.'],
        measure: 'Participation, speed of issue surfacing, quality improvement rate.'
      },
      highRisk: {
        executive: 'Feedback safety is high risk ({SCORE}). People likely filter themselves and delay sharing concerns. This increases the cost of problems because they’re discovered late.',
        operator: 'Truth suppression is operational risk. The business will learn too late.',
        fix7: ['Explicit non-retaliation + reward early reporting.'],
        fix30: ['Monthly retros with tracked actions.'],
        fix90: ['Leadership accountability: feedback health affects evaluation.'],
        measure: 'Near-miss reporting, churn risk, defect rates.'
      }
    }
  }
];
