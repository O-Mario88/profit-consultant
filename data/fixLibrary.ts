
import { FixTask } from "../types";

export interface TaskDefinition {
  id: string;
  pillar: string;
  title: string;
  desc: string;
  effort: 'Low' | 'Med' | 'High';
  owner: string;
  metric: string;
  driverTags: string[];
  proofType: 'text' | 'file' | 'link';
  delta: string; // Score impact +2-4
}

export const MASTER_TASKS: TaskDefinition[] = [
  // --- ENGINE ---
  { id: 'ENG_01', pillar: 'Engine', title: 'Install a single work board', desc: 'Centralize all open tasks in one place (Trello/ClickUp/Whiteboard).', effort: 'Low', owner: 'Ops', metric: '% work visible', driverTags: ['WORK_VISIBILITY_GAP'], proofType: 'link', delta: '+3' },
  { id: 'ENG_02', pillar: 'Engine', title: 'Write 3 one-page SOPs', desc: 'Document the top 3 recurring workflows to stop reinventing the wheel.', effort: 'Med', owner: 'Ops/CEO', metric: 'Questions/day', driverTags: ['SOP_GAP'], proofType: 'file', delta: '+5' },
  { id: 'ENG_03', pillar: 'Engine', title: 'Set approval limits', desc: 'Define what staff can decide without you (e.g. <$100, refund <$50).', effort: 'Med', owner: 'CEO', metric: 'Approvals/day', driverTags: ['OWNER_BOTTLENECK'], proofType: 'file', delta: '+5' },
  { id: 'ENG_04', pillar: 'Engine', title: 'Build onboarding mini-pack', desc: 'Checklist + 3 videos for new hires.', effort: 'Med', owner: 'HR', metric: 'Ramp time', driverTags: ['NO_ONBOARDING'], proofType: 'file', delta: '+4' },
  { id: 'ENG_05', pillar: 'Engine', title: 'Standardize packages', desc: 'Turn custom services into fixed-scope products.', effort: 'High', owner: 'Sales', metric: '% standard sales', driverTags: ['CUSTOM_WORK_TAX'], proofType: 'file', delta: '+6' },
  { id: 'ENG_06', pillar: 'Engine', title: 'Replace 1 meeting with dashboard', desc: 'Cancel a status meeting; use a shared sheet/board.', effort: 'Low', owner: 'Ops', metric: 'Meeting hours', driverTags: ['MEETING_THEATER'], proofType: 'file', delta: '+3' },
  { id: 'ENG_07', pillar: 'Engine', title: 'Create handoff checklist', desc: 'List exact criteria for work to move from Sales -> Ops.', effort: 'Low', owner: 'Ops', metric: 'Rework rate', driverTags: ['HANDOFF_CONFUSION'], proofType: 'file', delta: '+3' },
  { id: 'ENG_08', pillar: 'Engine', title: 'Automate invoicing', desc: 'Set up auto-send or recurring invoices.', effort: 'Med', owner: 'Finance', metric: 'Admin hours', driverTags: ['MANUAL_ADMIN_DRAG'], proofType: 'file', delta: '+4' },
  { id: 'ENG_09', pillar: 'Engine', title: 'Define quality standard', desc: 'One-page "What Good Looks Like" guide.', effort: 'Low', owner: 'Ops', metric: 'QC pass rate', driverTags: ['QUALITY_VARIANCE'], proofType: 'file', delta: '+3' },
  { id: 'ENG_10', pillar: 'Engine', title: 'Weekly blocker review', desc: '15-min standup: "What is stuck?"', effort: 'Low', owner: 'Team', metric: 'Blocked tasks', driverTags: ['FIRE_FIGHTING_LOOP'], proofType: 'text', delta: '+2' },

  // --- FUEL ---
  { id: 'FUEL_01', pillar: 'Fuel', title: 'Stop-Work Rule', desc: 'Policy: No new work if invoice is >7 days overdue.', effort: 'Low', owner: 'Finance', metric: 'Overdue count', driverTags: ['SOFT_COLLECTIONS'], proofType: 'file', delta: '+4' },
  { id: 'FUEL_02', pillar: 'Fuel', title: 'Collections cadence', desc: 'Scripts for Day 1, 3, 7 overdue.', effort: 'Med', owner: 'Finance', metric: 'Collection speed', driverTags: ['WEAK_COLLECTIONS_PROCESS'], proofType: 'file', delta: '+5' },
  { id: 'FUEL_03', pillar: 'Fuel', title: 'Separate accounts', desc: 'Business money in business bank only.', effort: 'Med', owner: 'CEO', metric: 'Audit ready', driverTags: ['MIXED_FINANCES'], proofType: 'file', delta: '+5' },
  { id: 'FUEL_04', pillar: 'Fuel', title: '4-week cash forecast', desc: 'Simple sheet: Cash in vs Cash out.', effort: 'Med', owner: 'Finance', metric: 'Forecast accuracy', driverTags: ['NO_FORECAST'], proofType: 'link', delta: '+4' },
  { id: 'FUEL_05', pillar: 'Fuel', title: 'Offer profitability check', desc: 'Calculate margin for top 3 products.', effort: 'Med', owner: 'CEO', metric: 'Margin %', driverTags: ['MARGIN_FOG'], proofType: 'file', delta: '+5' },
  { id: 'FUEL_06', pillar: 'Fuel', title: 'Discount policy', desc: 'Rules for when/who can give discounts.', effort: 'Low', owner: 'Sales', metric: 'Discount rate', driverTags: ['DISCOUNT_LEAK'], proofType: 'file', delta: '+3' },
  { id: 'FUEL_07', pillar: 'Fuel', title: 'Zombie cost audit', desc: 'Review bank statement; cut unused subs.', effort: 'Low', owner: 'Finance', metric: 'Saved $', driverTags: ['ZOMBIE_COSTS'], proofType: 'file', delta: '+2' },
  { id: 'FUEL_08', pillar: 'Fuel', title: 'Monthly P&L ritual', desc: '30-min review of Profit & Loss.', effort: 'Low', owner: 'CEO', metric: 'Review done', driverTags: ['NO_MONTHLY_REVIEW'], proofType: 'text', delta: '+3' },
  { id: 'FUEL_09', pillar: 'Fuel', title: 'Payment terms upgrade', desc: 'Shift new clients to 50% upfront.', effort: 'Med', owner: 'Sales', metric: 'Upfront %', driverTags: ['WEAK_TERMS'], proofType: 'file', delta: '+4' },
  { id: 'FUEL_10', pillar: 'Fuel', title: 'Tax set-aside', desc: 'Auto-transfer tax % to separate account.', effort: 'Low', owner: 'Finance', metric: 'Tax readiness', driverTags: ['TAX_SURPRISE_RISK'], proofType: 'file', delta: '+2' },

  // --- VOICE ---
  { id: 'VOICE_01', pillar: 'Voice', title: '10-day follow-up', desc: 'Sequence for nurturing leads.', effort: 'Med', owner: 'Sales', metric: 'Conversion %', driverTags: ['WEAK_FOLLOWUP'], proofType: 'file', delta: '+4' },
  { id: 'VOICE_02', pillar: 'Voice', title: 'Response time rule', desc: 'Reply to leads within 1 hour.', effort: 'Low', owner: 'Sales', metric: 'Response time', driverTags: ['SLOW_RESPONSE'], proofType: 'file', delta: '+3' },
  { id: 'VOICE_03', pillar: 'Voice', title: 'Lead tracker', desc: 'Central sheet for all potential deals.', effort: 'Low', owner: 'Sales', metric: 'Leads logged', driverTags: ['NO_TRACKING'], proofType: 'link', delta: '+3' },
  { id: 'VOICE_04', pillar: 'Voice', title: 'Clarity sentence', desc: 'We help X do Y by Z.', effort: 'Low', owner: 'Marketing', metric: 'Bounce rate', driverTags: ['UNCLEAR_MESSAGE'], proofType: 'text', delta: '+2' },
  { id: 'VOICE_05', pillar: 'Voice', title: 'Proof asset', desc: 'One case study or testimonial PDF.', effort: 'Med', owner: 'Marketing', metric: 'Asset count', driverTags: ['LOW_TRUST_PROOF'], proofType: 'file', delta: '+4' },
  { id: 'VOICE_06', pillar: 'Voice', title: 'Referral ask', desc: 'Script to ask happy clients for intro.', effort: 'Low', owner: 'Sales', metric: 'Referrals', driverTags: ['NO_REFERRAL_SYSTEM'], proofType: 'text', delta: '+3' },
  { id: 'VOICE_07', pillar: 'Voice', title: 'Offer page template', desc: 'Standard PDF/Link for quotes.', effort: 'Med', owner: 'Sales', metric: 'Close rate', driverTags: ['WEAK_OFFER_PRESENTATION'], proofType: 'file', delta: '+3' },
  { id: 'VOICE_08', pillar: 'Voice', title: 'Retention check-in', desc: 'Script for post-purchase check.', effort: 'Low', owner: 'Success', metric: 'Churn rate', driverTags: ['NO_ONBOARDING_EXPERIENCE'], proofType: 'text', delta: '+2' },
  { id: 'VOICE_09', pillar: 'Voice', title: 'Channel diversif.', desc: 'Test one new lead source.', effort: 'Med', owner: 'Marketing', metric: 'New leads', driverTags: ['SINGLE_CHANNEL_RISK'], proofType: 'file', delta: '+3' },
  { id: 'VOICE_10', pillar: 'Voice', title: 'Exit interview', desc: 'Ask lost leads why they said no.', effort: 'Low', owner: 'Sales', metric: 'Insight count', driverTags: ['UNKNOWN_CHURN_CAUSE'], proofType: 'file', delta: '+2' },

  // --- BRAIN ---
  { id: 'BRAIN_01', pillar: 'Brain', title: '3 Priorities Board', desc: 'Weekly top 3 goals visible to all.', effort: 'Med', owner: 'CEO', metric: 'Goal completion', driverTags: ['PRIORITY_CHAOS'], proofType: 'file', delta: '+4' },
  { id: 'BRAIN_02', pillar: 'Brain', title: 'Role scorecards', desc: 'Define winning for top 3 roles.', effort: 'Med', owner: 'HR', metric: 'Clarity score', driverTags: ['NO_KPI_CLARITY'], proofType: 'file', delta: '+4' },
  { id: 'BRAIN_03', pillar: 'Brain', title: 'Weekly review', desc: '30-min leadership sync.', effort: 'Low', owner: 'CEO', metric: 'Sync done', driverTags: ['NO_CADENCE'], proofType: 'text', delta: '+2' },
  { id: 'BRAIN_04', pillar: 'Brain', title: 'Feedback script', desc: 'Template for hard conversations.', effort: 'Low', owner: 'Managers', metric: 'Feedback count', driverTags: ['FEEDBACK_AVOIDANCE'], proofType: 'file', delta: '+2' },
  { id: 'BRAIN_05', pillar: 'Brain', title: 'Hiring skills test', desc: 'Practical task before offer.', effort: 'Med', owner: 'HR', metric: 'Hire quality', driverTags: ['WEAK_HIRING'], proofType: 'file', delta: '+3' },
  { id: 'BRAIN_06', pillar: 'Brain', title: 'Outcome delegation', desc: 'Assign results, not tasks.', effort: 'Med', owner: 'CEO', metric: 'Owner count', driverTags: ['TASK_DELEGATION_ONLY'], proofType: 'text', delta: '+3' },
  { id: 'BRAIN_07', pillar: 'Brain', title: 'JD Cleanup', desc: 'Update Job Descriptions to reality.', effort: 'Med', owner: 'HR', metric: 'JD accuracy', driverTags: ['ROLE_AMBIGUITY'], proofType: 'file', delta: '+3' },
  { id: 'BRAIN_08', pillar: 'Brain', title: 'Mentor check-in', desc: 'Monthly external accountability.', effort: 'Low', owner: 'CEO', metric: 'Meeting done', driverTags: ['NO_ACCOUNTABILITY'], proofType: 'text', delta: '+2' },
  { id: 'BRAIN_09', pillar: 'Brain', title: 'Decision log', desc: 'Track major decisions made.', effort: 'Low', owner: 'CEO', metric: 'Decisions tracked', driverTags: ['ERRATIC_DECISIONS'], proofType: 'link', delta: '+2' },
  { id: 'BRAIN_10', pillar: 'Brain', title: 'Recognition rule', desc: 'Reward output, not just hours.', effort: 'Low', owner: 'HR', metric: 'Rewards given', driverTags: ['UNFAIR_INCENTIVES'], proofType: 'text', delta: '+2' },

  // --- PULSE ---
  { id: 'PULSE_01', pillar: 'Pulse', title: '10 Customer Calls', desc: 'Ask: Why did you buy?', effort: 'Med', owner: 'CEO', metric: 'Interviews', driverTags: ['NO_FEEDBACK_LOOP'], proofType: 'file', delta: '+4' },
  { id: 'PULSE_02', pillar: 'Pulse', title: 'QC Checklist', desc: 'Check before shipping.', effort: 'Low', owner: 'Ops', metric: 'Defect rate', driverTags: ['REACTIVE_QC'], proofType: 'file', delta: '+3' },
  { id: 'PULSE_03', pillar: 'Pulse', title: 'Experiment calendar', desc: 'Plan 1 test per month.', effort: 'Med', owner: 'Product', metric: 'Tests run', driverTags: ['NO_TESTING_RHYTHM'], proofType: 'link', delta: '+3' },
  { id: 'PULSE_04', pillar: 'Pulse', title: 'Competitor review', desc: 'Check pricing/offers of top 3.', effort: 'Low', owner: 'Marketing', metric: 'Review done', driverTags: ['COMPETITOR_BLINDNESS'], proofType: 'file', delta: '+2' },
  { id: 'PULSE_05', pillar: 'Pulse', title: 'Kill weak offer', desc: 'Remove low-margin distraction.', effort: 'Med', owner: 'CEO', metric: 'Simplicity', driverTags: ['OFFER_DRAG'], proofType: 'text', delta: '+3' },
  { id: 'PULSE_06', pillar: 'Pulse', title: 'Value Ladder', desc: 'Entry -> Core -> Premium.', effort: 'Med', owner: 'Sales', metric: 'LTV', driverTags: ['WEAK_POSITIONING'], proofType: 'file', delta: '+4' },
  { id: 'PULSE_07', pillar: 'Pulse', title: 'Diversify product', desc: 'Reduce dependency on one item.', effort: 'High', owner: 'Product', metric: 'Rev mix', driverTags: ['PRODUCT_CONCENTRATION_RISK'], proofType: 'file', delta: '+4' },
  { id: 'PULSE_08', pillar: 'Pulse', title: 'First impression', desc: 'Audit the "unboxing" experience.', effort: 'Med', owner: 'Ops', metric: 'Satisfaction', driverTags: ['WEAK_FIRST_IMPRESSION'], proofType: 'file', delta: '+3' },
  { id: 'PULSE_09', pillar: 'Pulse', title: 'Bug SLA', desc: 'Fix critical issues in 24h.', effort: 'Low', owner: 'Tech', metric: 'Fix time', driverTags: ['SLOW_FIX_CYCLE'], proofType: 'file', delta: '+2' },
  { id: 'PULSE_10', pillar: 'Pulse', title: 'Customer Quality', desc: 'Define specs based on client need.', effort: 'Low', owner: 'Ops', metric: 'Spec sheet', driverTags: ['INTERNAL_QC_ONLY'], proofType: 'file', delta: '+2' },

  // --- SHIELD ---
  { id: 'SHIELD_01', pillar: 'Shield', title: 'Enable 2FA', desc: 'Secure email, bank, and social.', effort: 'Low', owner: 'IT', metric: 'Coverage %', driverTags: ['NO_2FA'], proofType: 'file', delta: '+6' },
  { id: 'SHIELD_02', pillar: 'Shield', title: 'Password vault', desc: 'Move shared passwords to manager.', effort: 'Low', owner: 'Ops', metric: 'Vault usage', driverTags: ['WEAK_PASSWORD_PRACTICE'], proofType: 'file', delta: '+3' },
  { id: 'SHIELD_03', pillar: 'Shield', title: 'Backup test', desc: 'Verify you can restore data.', effort: 'Low', owner: 'IT', metric: 'Restore success', driverTags: ['BACKUP_NOT_VERIFIED'], proofType: 'file', delta: '+5' },
  { id: 'SHIELD_04', pillar: 'Shield', title: 'Contract standard', desc: 'Scope + Terms signed every time.', effort: 'Med', owner: 'Admin', metric: 'Signed %', driverTags: ['WEAK_CONTRACTS'], proofType: 'file', delta: '+5' },
  { id: 'SHIELD_05', pillar: 'Shield', title: 'Access control', desc: 'Remove old staff access.', effort: 'Med', owner: 'Ops', metric: 'Access list', driverTags: ['ACCESS_CONTROL_GAP'], proofType: 'file', delta: '+3' },
  { id: 'SHIELD_06', pillar: 'Shield', title: 'License check', desc: 'Ensure software is legal.', effort: 'Low', owner: 'IT', metric: 'Compliance', driverTags: ['PIRATED_SOFTWARE_RISK'], proofType: 'file', delta: '+2' },
  { id: 'SHIELD_07', pillar: 'Shield', title: 'Tax rhythm', desc: 'Monthly filing check.', effort: 'Med', owner: 'Finance', metric: 'Compliance', driverTags: ['TAX_COMPLIANCE_RISK'], proofType: 'file', delta: '+3' },
  { id: 'SHIELD_08', pillar: 'Shield', title: 'Incident plan', desc: 'Who to call if hacked/sued.', effort: 'Low', owner: 'CEO', metric: 'Plan ready', driverTags: ['NO_INCIDENT_PLAN'], proofType: 'file', delta: '+3' },
  { id: 'SHIELD_09', pillar: 'Shield', title: 'Data policy', desc: 'How customer data is stored.', effort: 'Med', owner: 'Ops', metric: 'Policy doc', driverTags: ['DATA_PRIVACY_RISK'], proofType: 'file', delta: '+3' },
  { id: 'SHIELD_10', pillar: 'Shield', title: 'Succession note', desc: 'Key passwords/info for emergency.', effort: 'Low', owner: 'CEO', metric: 'Note stored', driverTags: ['KEY_PERSON_RISK'], proofType: 'text', delta: '+2' },

  // --- TRIBE ---
  { id: 'TRIBE_01', pillar: 'Tribe', title: 'Decision rights', desc: 'Who decides what?', effort: 'Med', owner: 'CEO', metric: 'Clarity', driverTags: ['APPROVAL_DRAG'], proofType: 'file', delta: '+5' },
  { id: 'TRIBE_02', pillar: 'Tribe', title: 'Meeting discipline', desc: 'Agenda required for all meetings.', effort: 'Low', owner: 'Ops', metric: 'Meeting time', driverTags: ['MEETING_THEATER'], proofType: 'file', delta: '+3' },
  { id: 'TRIBE_03', pillar: 'Tribe', title: 'No-blame ritual', desc: 'Fix system, not person.', effort: 'Low', owner: 'Managers', metric: 'Retros held', driverTags: ['FEAR_OF_BLAME'], proofType: 'text', delta: '+2' },
  { id: 'TRIBE_04', pillar: 'Tribe', title: 'Manager mirror', desc: 'Weekly self-check on micro-mgmt.', effort: 'Low', owner: 'Managers', metric: 'Check-in', driverTags: ['MICROMANAGEMENT_SIGNAL'], proofType: 'text', delta: '+2' },
  { id: 'TRIBE_05', pillar: 'Tribe', title: 'Safe mode survey', desc: 'Anon feedback on culture.', effort: 'Med', owner: 'HR', metric: 'Safety score', driverTags: ['LOW_PSYCH_SAFETY'], proofType: 'file', delta: '+3' },
  { id: 'TRIBE_06', pillar: 'Tribe', title: 'Relationship map', desc: 'Who works with whom?', effort: 'Low', owner: 'HR', metric: 'Map done', driverTags: ['SILO_DRIFT'], proofType: 'file', delta: '+2' },
  { id: 'TRIBE_07', pillar: 'Tribe', title: 'Recognition rule', desc: 'Public praise for outcomes.', effort: 'Low', owner: 'CEO', metric: 'Praise count', driverTags: ['UNFAIR_INCENTIVES'], proofType: 'text', delta: '+2' },
  { id: 'TRIBE_08', pillar: 'Tribe', title: 'Escalation ladder', desc: 'When to ask for help.', effort: 'Low', owner: 'Ops', metric: 'Escalations', driverTags: ['ESCALATE_EVERYTHING'], proofType: 'file', delta: '+3' },
  { id: 'TRIBE_09', pillar: 'Tribe', title: '1:1 Cadence', desc: 'Weekly short check-ins.', effort: 'Low', owner: 'Managers', metric: '1:1s held', driverTags: ['LOW_FEEDBACK_RHYTHM'], proofType: 'file', delta: '+2' },
  { id: 'TRIBE_10', pillar: 'Tribe', title: 'Conflict script', desc: 'How to disagree productively.', effort: 'Med', owner: 'HR', metric: 'Resolutions', driverTags: ['CONFLICT_AVOIDANCE'], proofType: 'file', delta: '+2' },
];
