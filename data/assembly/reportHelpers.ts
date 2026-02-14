import { SignalTag, PillarId, AssemblySeverityStatus } from '../../types';
import { ASSEMBLY_LIBRARY } from './library';

export const ASSEMBLY_CLIFFHANGER_STARTERS = [
    "We need to", "The priority is to", "The immediate fix is to", "Stop the bleeding and"
];

export const ASSEMBLY_COST_FRAMING_STYLES = [
    "Direct Margin Erosion", "Hidden Opportunity Cost", "Cash Flow Drag", "Risk Exposure"
];

export interface AssemblySignalIntel {
    symptom_short: string;
    cost_short: string;
    kpi_primary: string;
    kpi_secondary?: string;
    cost_type: 'Cash' | 'Time' | 'Risk' | 'Opportunity';
    evidence_request: string;
    verification_criteria: string;
    optional_evidence?: string;
}

const SIGNAL_INTEL_MAP: Partial<Record<SignalTag, AssemblySignalIntel>> = {
    // P1
    inspection_lottery: {
        symptom_short: "Quality depends on the inspector",
        cost_short: "Escapes and re-inspection costs",
        kpi_primary: "Escape Rate",
        cost_type: "Risk",
        evidence_request: "Show me your visual defect standards (Golden/Limit samples).",
        verification_criteria: "Are photos visible at the station?"
    },
    escape_tax: {
        symptom_short: "Customers find defects we missed",
        cost_short: "RMA processing and reputation damage",
        kpi_primary: "DPPM",
        cost_type: "Cash",
        evidence_request: "Show me the RMA log for last month.",
        verification_criteria: "Is there a root cause for each?"
    },
    // P2
    revision_roulette: {
        symptom_short: "Wrong version built or tested",
        cost_short: "Scrap and rework of finished units",
        kpi_primary: "ECO Accuracy",
        cost_type: "Cash",
        evidence_request: "Show me the traveler/router for this job.",
        verification_criteria: "Does it match the current BOM rev?"
    },
    tribal_wi_drift: {
        symptom_short: "Operators build from memory",
        cost_short: "Inconsistent assembly and training gaps",
        kpi_primary: "Training Matrix %",
        cost_type: "Risk",
        evidence_request: "Show me the WI for this station.",
        verification_criteria: "Is it open and being followed?"
    },
    // P3
    expedite_burn: {
        symptom_short: "Paying premium to fix delays",
        cost_short: "Shipping profit margin to logistics companies",
        kpi_primary: "Expedite Cost",
        cost_type: "Cash",
        evidence_request: "Show me the freight bill for last week.",
        verification_criteria: "How much was premium/air?"
    },
    status_fog: {
        symptom_short: "Customer asks for status before we know it",
        cost_short: "PM time lost chasing answers",
        kpi_primary: "OTIF",
        cost_type: "Time",
        evidence_request: "Show me the open order report.",
        verification_criteria: "Is the 'Expected Ship Date' current?"
    },
    // P4
    yield_blindspot: {
        symptom_short: "Quote assumes 100% yield",
        cost_short: "Paying for rework out of margin",
        kpi_primary: "First Pass Yield",
        cost_type: "Cash",
        evidence_request: "Show me the quote vs. actual cost for a recent job.",
        verification_criteria: "Is scrap/yield variance included?"
    },
    quote_illusion: {
        symptom_short: "Winning work that loses money",
        cost_short: "NRE and test time absorbed",
        kpi_primary: "Program Margin",
        cost_type: "Cash",
        evidence_request: "Show me the NRE billing for this project.",
        verification_criteria: "Did we charge for all fixtures?"
    },
    // P5
    wip_swamp: {
        symptom_short: "Floor is full, nothing is moving",
        cost_short: "Cash tied up in half-finished goods",
        kpi_primary: "WIP Value",
        cost_type: "Cash",
        evidence_request: "Count the open jobs on the floor.",
        verification_criteria: "Is it higher than the daily output?"
    },
    bottleneck_choke: {
        symptom_short: "One station limits the whole factory",
        cost_short: "Lost throughput capacity",
        kpi_primary: "Line Efficiency",
        cost_type: "Time",
        evidence_request: "Show me the daily output log.",
        verification_criteria: "Is the constraint identified?"
    },
    // P6
    shortage_spiral: {
        symptom_short: "Lines stop for missing C-class parts",
        cost_short: "Downtime and schedule chaos",
        kpi_primary: "Shortage Count",
        cost_type: "Time",
        evidence_request: "Show me the shortage report.",
        verification_criteria: "Are these parts on order?"
    },
    inventory_fiction: {
        symptom_short: "System says we have it, shelf is empty",
        cost_short: "Surprise stockouts and rush buys",
        kpi_primary: "Inventory Accuracy",
        cost_type: "Cash",
        evidence_request: "Let's cycle count 5 random parts.",
        verification_criteria: "Do they match the system?"
    },
    // P7
    esd_drift_risk: {
        symptom_short: "Invisible damage to components",
        cost_short: "Latent field failures and returns",
        kpi_primary: "ESD Audit Score",
        cost_type: "Risk",
        evidence_request: "Show me the ESD daily check log.",
        verification_criteria: "Are wrists straps tested today?"
    },
    training_gap_bleed: {
        symptom_short: "Uncertified staff on critical steps",
        cost_short: "Quality variation and errors",
        kpi_primary: "Training Certification %",
        cost_type: "Risk",
        evidence_request: "Show me the training matrix.",
        verification_criteria: "Is the operator signed off for this station?"
    }
};

export const getAssemblySignalIntel = (tag: SignalTag): AssemblySignalIntel | undefined => {
    return SIGNAL_INTEL_MAP[tag];
};

export const buildAssemblySymptom = (tags: SignalTag[]): string => {
    const intel = tags.map(t => getAssemblySignalIntel(t)).filter(Boolean);
    if (intel.length === 0) return "workflow friction and unpredictable output";
    return intel.map(i => i!.symptom_short).join(', and ');
};

export const buildAssemblyCostNarrative = (tags: SignalTag[], framing: string, status: AssemblySeverityStatus): string => {
    const intel = tags.map(t => getAssemblySignalIntel(t)).filter(Boolean);
    if (intel.length === 0) return "This is eroding margins through hidden inefficiencies.";

    const primaryCost = intel[0]?.cost_short || "efficiency loss";
    return `This pattern drives ${primaryCost}. In ${status} mode, this typically manifests as ${framing.toLowerCase()}.`;
};

export const buildAssemblyEvidencePrompt = (tags: SignalTag[]): string => {
    const intel = getAssemblySignalIntel(tags[0]);
    if (!intel) return "Verify current process standards.";
    return `${intel.evidence_request} (${intel.verification_criteria})`;
};

export const deriveAssemblyAutoTags = (scores: any): any[] => {
    // Placeholder logic - returning empty array as no specific logic was provided
    return [];
};
