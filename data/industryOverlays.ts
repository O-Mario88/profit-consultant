
import { KPI } from "../types";

export interface IndustryOverlay {
  kpis: KPI[];
  taskSwaps: Record<string, { title: string; metric?: string }>; // TaskID -> New Data
}

export const INDUSTRY_OVERLAYS: Record<string, IndustryOverlay> = {
  agriculture: {
    kpis: [
      { id: 'post_harvest', name: 'Post-Harvest Loss %', pillar: ['engine'], frequency: 'weekly' },
      { id: 'yield', name: 'Yield per Acre/Unit', pillar: ['pulse'], frequency: 'term' },
      { id: 'buyer_pay', name: 'Buyer Payment Delay', pillar: ['fuel'], frequency: 'weekly' }
    ],
    taskSwaps: {
      'ENG_09': { title: 'Grading & Handling Checklist', metric: 'Rejection rate' },
      'RET_SHIELD_01': { title: 'Buyer Contract Standards' }, // Mapping concept
      'PULSE_02': { title: 'Produce Quality Check' },
      'FUEL_07': { title: 'Input Cost Audit' }
    }
  },
  retail: {
    kpis: [
      { id: 'stockouts', name: 'Top 20 Stock-outs', pillar: ['engine'], frequency: 'weekly' },
      { id: 'shrinkage', name: 'Shrinkage / Theft %', pillar: ['shield'], frequency: 'monthly' },
      { id: 'basket', name: 'Avg Basket Size', pillar: ['voice'], frequency: 'daily' }
    ],
    taskSwaps: {
      'ENG_09': { title: 'Shelf Stocking Standard' },
      'PULSE_02': { title: 'Expiry Date Check' },
      'ENG_01': { title: 'Inventory Reorder Board' }
    }
  },
  hospitality: {
    kpis: [
      { id: 'revpar', name: 'Occupancy / RevPAR', pillar: ['voice'], frequency: 'daily' },
      { id: 'food_waste', name: 'Food Waste Cost', pillar: ['fuel'], frequency: 'weekly' },
      { id: 'reviews', name: 'TripAdvisor Rating', pillar: ['pulse'], frequency: 'weekly' }
    ],
    taskSwaps: {
      'PULSE_02': { title: 'Guest Room Checklist' },
      'ENG_01': { title: 'Shift Handover Log' },
      'VOICE_01': { title: 'Booking Inquiry Response' }
    }
  },
  health: {
    kpis: [
      { id: 'wait_time', name: 'Patient Wait Time', pillar: ['engine'], frequency: 'weekly' },
      { id: 'stock_meds', name: 'Essential Meds Stock', pillar: ['engine'], frequency: 'weekly' },
      { id: 'return_rate', name: 'Patient Return Rate', pillar: ['pulse'], frequency: 'monthly' }
    ],
    taskSwaps: {
      'VOICE_05': { title: 'Patient Trust Proof (Badges)' },
      'ENG_01': { title: 'Patient Flow Tracker' },
      'SHIELD_08': { title: 'Clinical Incident Log' }
    }
  },
  construction: {
    kpis: [
      { id: 'delay_days', name: 'Days Behind Schedule', pillar: ['engine'], frequency: 'weekly' },
      { id: 'rework_cost', name: 'Rework Material Cost', pillar: ['fuel'], frequency: 'weekly' },
      { id: 'milestones', name: 'Milestones Billed', pillar: ['fuel'], frequency: 'monthly' }
    ],
    taskSwaps: {
      'VOICE_07': { title: 'Standard Proposal Template' },
      'ENG_01': { title: 'Site Progress Board' },
      'ENG_07': { title: 'Trade Handoff Checklist' }
    }
  },
  finance: {
    kpis: [
      { id: 'par', name: 'Portfolio at Risk (PAR)', pillar: ['shield'], frequency: 'weekly' },
      { id: 'tat', name: 'Loan Turnaround Time', pillar: ['engine'], frequency: 'weekly' },
      { id: 'audit_score', name: 'Compliance Score', pillar: ['shield'], frequency: 'monthly' }
    ],
    taskSwaps: {
      'SHIELD_04': { title: 'KYC / AML Checklist' },
      'ENG_01': { title: 'Application Tracker' },
      'PULSE_01': { title: 'Client exit interviews' }
    }
  },
  tech: {
    kpis: [
      { id: 'sla', name: 'SLA Breach Rate', pillar: ['engine'], frequency: 'weekly' },
      { id: 'churn', name: 'Churn / Downgrades', pillar: ['voice'], frequency: 'monthly' },
      { id: 'velocity', name: 'Ship Velocity', pillar: ['pulse'], frequency: 'weekly' }
    ],
    taskSwaps: {
      'ENG_01': { title: 'Sprint Board (Jira/Linear)' },
      'ENG_07': { title: 'Deployment Checklist' },
      'SHIELD_03': { title: 'Disaster Recovery Drill' }
    }
  }
};
