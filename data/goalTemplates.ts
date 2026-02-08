
import { PillarScores, KPI } from "../types";

export interface GoalTemplate {
  id: string;
  name: string;
  pillarWeights: PillarScores; // Relative weights 0-100
  starterTaskIds: string[];
  defaultKPIs: KPI[];
  matchKeywords: string[]; // Goals that map to this template
}

export const GOAL_TEMPLATES: Record<string, GoalTemplate> = {
  G1: {
    id: 'G1',
    name: 'Cash Flow Stabilizer',
    pillarWeights: { fuel: 30, engine: 15, shield: 15, voice: 12, brain: 10, pulse: 8, tribe: 10 },
    starterTaskIds: ['FUEL_04', 'FUEL_01', 'FUEL_02', 'FUEL_03', 'FUEL_05', 'FUEL_07', 'FUEL_06', 'FUEL_09', 'ENG_08', 'SHIELD_05'],
    defaultKPIs: [
      { id: 'days_cash', name: 'Days cash on hand', pillar: ['fuel'], frequency: 'weekly' },
      { id: 'overdue', name: 'Overdue invoices amount', pillar: ['fuel'], frequency: 'weekly' },
      { id: 'collection', name: 'Collection rate %', pillar: ['fuel'], frequency: 'monthly' }
    ],
    matchKeywords: ['Cash Flow', 'Monthly Income', 'Debt', 'Collections']
  },
  G2: {
    id: 'G2',
    name: 'Profit & Margin Builder',
    pillarWeights: { fuel: 26, pulse: 16, voice: 14, engine: 14, shield: 10, brain: 10, tribe: 10 },
    starterTaskIds: ['FUEL_05', 'FUEL_06', 'PULSE_06', 'VOICE_07', 'ENG_05', 'FUEL_07', 'PULSE_05', 'VOICE_06', 'ENG_09', 'FUEL_08'],
    defaultKPIs: [
      { id: 'gross_margin', name: 'Gross Margin %', pillar: ['fuel'], frequency: 'monthly' },
      { id: 'net_profit', name: 'Net Profit %', pillar: ['fuel'], frequency: 'monthly' },
      { id: 'discount_rate', name: 'Avg Discount %', pillar: ['fuel'], frequency: 'weekly' }
    ],
    matchKeywords: ['Profit', 'Margin', 'Prices', 'Cost']
  },
  G3: {
    id: 'G3',
    name: 'Sales Pipeline Growth',
    pillarWeights: { voice: 30, pulse: 16, engine: 14, fuel: 12, brain: 10, tribe: 10, shield: 8 },
    starterTaskIds: ['VOICE_02', 'VOICE_03', 'VOICE_01', 'VOICE_04', 'VOICE_05', 'VOICE_07', 'VOICE_06', 'VOICE_09', 'PULSE_06', 'ENG_01'],
    defaultKPIs: [
      { id: 'leads', name: 'New Leads / Week', pillar: ['voice'], frequency: 'weekly' },
      { id: 'conversion', name: 'Lead-to-Deal %', pillar: ['voice'], frequency: 'monthly' },
      { id: 'response', name: 'Avg Response Time', pillar: ['voice'], frequency: 'weekly' }
    ],
    matchKeywords: ['Revenue', 'Customers', 'Leads', 'Sales', 'Growth']
  },
  G4: {
    id: 'G4',
    name: 'Operations Speed & Consistency',
    pillarWeights: { engine: 30, tribe: 18, brain: 14, shield: 12, fuel: 10, pulse: 8, voice: 8 },
    starterTaskIds: ['ENG_01', 'ENG_02', 'ENG_07', 'ENG_03', 'TRIBE_01', 'TRIBE_02', 'ENG_06', 'ENG_04', 'BRAIN_03', 'ENG_09'],
    defaultKPIs: [
      { id: 'ontime', name: 'On-Time Delivery %', pillar: ['engine'], frequency: 'weekly' },
      { id: 'cycle_time', name: 'Avg Cycle Time', pillar: ['engine'], frequency: 'weekly' },
      { id: 'rework', name: 'Rework Count', pillar: ['engine'], frequency: 'weekly' }
    ],
    matchKeywords: ['Operations', 'Speed', 'Consistency', 'Delays', 'SOPs']
  },
  G5: {
    id: 'G5',
    name: 'Product Quality & Upgrade',
    pillarWeights: { pulse: 30, voice: 18, engine: 14, fuel: 12, brain: 10, tribe: 10, shield: 6 },
    starterTaskIds: ['PULSE_01', 'PULSE_02', 'PULSE_03', 'PULSE_06', 'PULSE_10', 'VOICE_10', 'VOICE_08', 'PULSE_05', 'PULSE_09', 'VOICE_05'],
    defaultKPIs: [
      { id: 'nps', name: 'NPS / Satisfaction', pillar: ['pulse'], frequency: 'monthly' },
      { id: 'returns', name: 'Return / Refund Rate', pillar: ['pulse', 'fuel'], frequency: 'weekly' },
      { id: 'churn', name: 'Churn Rate', pillar: ['pulse'], frequency: 'monthly' }
    ],
    matchKeywords: ['Quality', 'Product', 'Service', 'Innovation', 'Feedback']
  },
  G6: {
    id: 'G6',
    name: 'Risk & Compliance Fortress',
    pillarWeights: { shield: 32, fuel: 14, brain: 14, engine: 12, tribe: 10, voice: 10, pulse: 8 },
    starterTaskIds: ['SHIELD_01', 'SHIELD_03', 'SHIELD_04', 'SHIELD_05', 'SHIELD_09', 'SHIELD_08', 'FUEL_08', 'SHIELD_07', 'ENG_01', 'BRAIN_02'],
    defaultKPIs: [
      { id: 'risk_score', name: 'Risk Exposure Score', pillar: ['shield'], frequency: 'monthly' },
      { id: 'compliance', name: 'Compliance Check %', pillar: ['shield'], frequency: 'monthly' },
      { id: 'incidents', name: 'Security Incidents', pillar: ['shield'], frequency: 'weekly' }
    ],
    matchKeywords: ['Risk', 'Compliance', 'Legal', 'Security', 'Fraud']
  },
  G7: {
    id: 'G7',
    name: 'Team Performance System',
    pillarWeights: { brain: 24, tribe: 22, engine: 16, voice: 10, fuel: 10, shield: 10, pulse: 8 },
    starterTaskIds: ['BRAIN_01', 'BRAIN_02', 'TRIBE_09', 'TRIBE_01', 'BRAIN_06', 'TRIBE_03', 'TRIBE_05', 'BRAIN_04', 'ENG_02', 'TRIBE_07'],
    defaultKPIs: [
      { id: 'kpi_clarity', name: 'Roles with Clear KPIs %', pillar: ['brain'], frequency: 'monthly' },
      { id: 'meeting_load', name: 'Meeting Hours / Week', pillar: ['tribe'], frequency: 'weekly' },
      { id: 'turnover', name: 'Staff Turnover Rate', pillar: ['tribe'], frequency: 'quarterly' }
    ],
    matchKeywords: ['Team', 'Performance', 'Accountability', 'Culture', 'Leadership']
  },
  G8: {
    id: 'G8',
    name: 'Hiring & Onboarding',
    pillarWeights: { brain: 28, tribe: 18, engine: 18, shield: 12, fuel: 10, voice: 8, pulse: 6 },
    starterTaskIds: ['BRAIN_05', 'BRAIN_07', 'ENG_04', 'BRAIN_02', 'TRIBE_09', 'ENG_02', 'SHIELD_04', 'TRIBE_03', 'BRAIN_03', 'VOICE_10'],
    defaultKPIs: [
      { id: 'ramp_time', name: 'New Hire Ramp Time', pillar: ['engine', 'brain'], frequency: 'monthly' },
      { id: 'hiring_quality', name: '90-Day Retention %', pillar: ['brain'], frequency: 'quarterly' },
      { id: 'applications', name: 'Qualified Candidates', pillar: ['brain'], frequency: 'weekly' }
    ],
    matchKeywords: ['Hiring', 'Recruiting', 'Onboarding', 'Staffing']
  },
  G9: {
    id: 'G9',
    name: 'Waste & Leakage Crusher',
    pillarWeights: { fuel: 22, engine: 20, pulse: 18, shield: 14, brain: 10, tribe: 10, voice: 6 },
    starterTaskIds: ['FUEL_07', 'ENG_09', 'PULSE_02', 'ENG_07', 'FUEL_05', 'ENG_06', 'SHIELD_05', 'PULSE_05', 'ENG_01', 'FUEL_08'],
    defaultKPIs: [
      { id: 'waste_cost', name: 'Waste/Shrinkage Cost', pillar: ['fuel'], frequency: 'weekly' },
      { id: 'rework_rate', name: 'Rework Rate %', pillar: ['engine'], frequency: 'weekly' },
      { id: 'zombie_spend', name: 'Recurring Costs Cut', pillar: ['fuel'], frequency: 'monthly' }
    ],
    matchKeywords: ['Waste', 'Leakage', 'Efficiency', 'Cost Cutting']
  },
  G10: {
    id: 'G10',
    name: 'Investment Readiness',
    pillarWeights: { fuel: 22, shield: 20, brain: 16, engine: 14, voice: 10, tribe: 10, pulse: 8 },
    starterTaskIds: ['FUEL_03', 'FUEL_08', 'FUEL_04', 'SHIELD_07', 'SHIELD_04', 'SHIELD_05', 'ENG_08', 'BRAIN_02', 'ENG_01', 'VOICE_05'],
    defaultKPIs: [
      { id: 'close_speed', name: 'Monthly Close (Days)', pillar: ['fuel'], frequency: 'monthly' },
      { id: 'burn_rate', name: 'Monthly Burn Rate', pillar: ['fuel'], frequency: 'monthly' },
      { id: 'compliance_score', name: 'Compliance Score', pillar: ['shield'], frequency: 'quarterly' }
    ],
    matchKeywords: ['Investment', 'Loan', 'Funding', 'Audit', 'Reporting']
  },
  G11: {
    id: 'G11',
    name: 'Market Expansion',
    pillarWeights: { voice: 22, engine: 20, brain: 14, fuel: 14, pulse: 14, shield: 10, tribe: 6 },
    starterTaskIds: ['VOICE_04', 'VOICE_07', 'VOICE_03', 'VOICE_09', 'PULSE_03', 'ENG_05', 'ENG_01', 'FUEL_04', 'SHIELD_04', 'BRAIN_01'],
    defaultKPIs: [
      { id: 'new_market_leads', name: 'New Market Leads', pillar: ['voice'], frequency: 'weekly' },
      { id: 'cac', name: 'CAC (New Market)', pillar: ['voice', 'fuel'], frequency: 'monthly' },
      { id: 'capacity', name: 'Capacity Utilization', pillar: ['engine'], frequency: 'weekly' }
    ],
    matchKeywords: ['Expansion', 'New Market', 'Launch', 'Scale']
  }
};

export const resolveGoalTemplate = (goals: string[]): GoalTemplate => {
  if (!goals || goals.length === 0) return GOAL_TEMPLATES.G1; // Default

  // Simple keyword matching
  const goalStr = goals.join(' ').toLowerCase();
  
  for (const key in GOAL_TEMPLATES) {
    const template = GOAL_TEMPLATES[key];
    if (template.matchKeywords.some(kw => goalStr.includes(kw.toLowerCase()))) {
      return template;
    }
  }
  
  return GOAL_TEMPLATES.G1; // Fallback
};
