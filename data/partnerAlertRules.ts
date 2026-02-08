
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

  // --- PILLAR 2: FUEL (Finance) ---
  {
    id: 'FUEL-01',
    trigger: (c) => c.pillarScores.fuel <= 15,
    severity: 'critical',
    titleTemplate: 'Bankruptcy risk: Fuel extremely low',
    action: 'Call today'
  },
  {
    id: 'FUEL-DRV-01',
    trigger: (c) => c.drivers?.overdue_invoices === 'high' && c.pillarScores.fuel <= 44,
    severity: 'critical',
    titleTemplate: 'Receivables choking cash flow',
    action: 'Install stop-work + reminders'
  },
  {
    id: 'FUEL-DRV-05',
    trigger: (c) => c.drivers?.no_cash_buffer === true && c.pillarScores.fuel <= 44,
    severity: 'critical',
    titleTemplate: 'Zero buffer shock risk',
    action: 'Build 1-month buffer plan'
  },

  // --- PILLAR 4: ENGINE (Operations) ---
  {
    id: 'ENGINE-01',
    trigger: (c) => c.pillarScores.engine <= 29,
    severity: 'critical',
    titleTemplate: 'Founder bottleneck risk',
    action: 'SOP + delegation sprint'
  },
  {
    id: 'ENGINE-DRV-01',
    trigger: (c) => c.drivers?.no_sops === true && c.pillarScores.engine <= 44,
    severity: 'critical',
    titleTemplate: 'Chaos scaling risk',
    action: 'Build top 10 SOPs'
  },

  // --- PILLAR 6: SHIELD (Risk) ---
  {
    id: 'SHIELD-01',
    trigger: (c) => c.pillarScores.shield <= 29,
    severity: 'critical',
    titleTemplate: 'Business is legally/cyber exposed',
    action: 'Immediate protection'
  },
  {
    id: 'SHIELD-DRV-01',
    trigger: (c) => c.drivers?.no_contracts === true && c.pillarScores.shield <= 44,
    severity: 'critical',
    titleTemplate: 'Handshake deal risk',
    action: 'Standard contract pack'
  },

  // --- PILLAR 3: VOICE (Marketing) ---
  {
    id: 'VOICE-01',
    trigger: (c) => c.pillarScores.voice <= 29,
    severity: 'critical',
    titleTemplate: 'Lead flow unstable—revenue volatility risk',
    action: 'Build follow-up + offer'
  },
  {
    id: 'VOICE-DRV-01',
    trigger: (c) => c.drivers?.no_followup_system === true && c.pillarScores.voice <= 44,
    severity: 'critical',
    titleTemplate: 'Money dying in follow-up',
    action: 'Install 10-day cadence'
  },

  // --- PILLAR 1: BRAIN (Leadership) ---
  {
    id: 'BRAIN-01',
    trigger: (c) => c.pillarScores.brain <= 29,
    severity: 'critical',
    titleTemplate: 'Leadership system failing',
    action: 'Define 3 priorities this month'
  },

  // --- PILLAR 7: TRIBE (Culture) ---
  {
    id: 'TRIBE-01',
    trigger: (c) => c.pillarScores.tribe <= 29,
    severity: 'critical',
    titleTemplate: 'Culture is blocking execution',
    action: 'Leadership coaching required'
  }
];
