import { PartnerClient } from "../types";

export interface AlertRule {
  id: string;
  trigger: (c: PartnerClient) => boolean;
  severity: 'critical' | 'serious' | 'watch';
  titleTemplate: string;
  action: string;
}

export const PARTNER_ALERT_RULES: AlertRule[] = [
  // --- UNIVERSAL ---
  {
    id: 'G-ABS-01',
    trigger: (c) => {
      const scores = Object.values(c.pillarScores).filter(val => typeof val === 'number') as number[];
      return Math.min(...scores) <= 29;
    },
    severity: 'critical',
    titleTemplate: 'Urgent: {Client} is in the red on {CriticalPillar}',
    action: 'Call within 48 hours'
  },
  {
    id: 'G-MIX-01',
    trigger: (c) => {
      const scores = Object.values(c.pillarScores).filter(val => typeof val === 'number') as number[];
      return scores.filter(s => s <= 29).length >= 2;
    },
    severity: 'critical',
    titleTemplate: 'Multi-system failure risk (2+ red pillars)',
    action: 'Escalate: urgent intervention'
  },

  // --- PILLAR 2: MONEY (Finance) ---
  {
    id: 'MONEY-01',
    trigger: (c) => c.pillarScores.money <= 15,
    severity: 'critical',
    titleTemplate: 'Bankruptcy risk: Money extremely low',
    action: 'Call today'
  },
  {
    id: 'MONEY-DRV-01',
    trigger: (c) => c.drivers?.overdue_invoices === 'high' && c.pillarScores.money <= 44,
    severity: 'critical',
    titleTemplate: 'Receivables choking cash flow',
    action: 'Install stop-work + reminders'
  },
  {
    id: 'MONEY-DRV-05',
    trigger: (c) => c.drivers?.no_cash_buffer === true && c.pillarScores.money <= 44,
    severity: 'critical',
    titleTemplate: 'Zero buffer shock risk',
    action: 'Build 1-month buffer plan'
  },

  // --- PILLAR 4: OPERATIONS (Operations) ---
  {
    id: 'OPS-01',
    trigger: (c) => c.pillarScores.operations <= 29,
    severity: 'critical',
    titleTemplate: 'Founder bottleneck risk',
    action: 'SOP + delegation sprint'
  },
  {
    id: 'OPS-DRV-01',
    trigger: (c) => c.drivers?.no_sops === true && c.pillarScores.operations <= 44,
    severity: 'critical',
    titleTemplate: 'Chaos scaling risk',
    action: 'Build top 10 SOPs'
  },

  // --- PILLAR 6: RISK (Risk) ---
  {
    id: 'RISK-01',
    trigger: (c) => c.pillarScores.risk <= 29,
    severity: 'critical',
    titleTemplate: 'Business is legally/cyber exposed',
    action: 'Immediate protection'
  },
  {
    id: 'RISK-DRV-01',
    trigger: (c) => c.drivers?.no_contracts === true && c.pillarScores.risk <= 44,
    severity: 'critical',
    titleTemplate: 'Handshake deal risk',
    action: 'Standard contract pack'
  },

  // --- PILLAR 3: MARKET (Marketing) ---
  {
    id: 'MARKET-01',
    trigger: (c) => c.pillarScores.market <= 29,
    severity: 'critical',
    titleTemplate: 'Lead flow unstable—revenue volatility risk',
    action: 'Build follow-up + offer'
  },
  {
    id: 'MARKET-DRV-01',
    trigger: (c) => c.drivers?.no_followup_system === true && c.pillarScores.market <= 44,
    severity: 'critical',
    titleTemplate: 'Money dying in follow-up',
    action: 'Install 10-day cadence'
  },

  // --- PILLAR 1: LEADERSHIP (Leadership) ---
  {
    id: 'LEAD-01',
    trigger: (c) => c.pillarScores.leadership <= 29,
    severity: 'critical',
    titleTemplate: 'Leadership system failing',
    action: 'Define 3 priorities this month'
  },

  // --- PILLAR 7: PEOPLE (Culture) ---
  {
    id: 'PEOPLE-01',
    trigger: (c) => c.pillarScores.people <= 29,
    severity: 'critical',
    titleTemplate: 'Culture is blocking execution',
    action: 'Leadership coaching required'
  }
];
