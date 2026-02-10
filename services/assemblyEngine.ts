import { PillarId, SignalTag } from "../types";

export type AssemblySeverityStatus = 'Stable' | 'Watch' | 'Critical';

export const getAssemblySeverityStatus = (score: number): AssemblySeverityStatus => {
    if (score >= 70) return 'Stable';
    if (score >= 40) return 'Watch';
    return 'Critical';
};

export const ASSEMBLY_SIGNAL_SYMPTOMS: Partial<Record<SignalTag, string>> = {
    yield_bleed: 'good units are being lost to rework and scrap before shipment',
    quality_built_late: 'defects are being discovered after value has already been added',
    planning_gap: 'stations pause because kits, parts, or priorities arrive late',
    changeover_black_hole: 'variant switches are consuming hours and destabilizing flow',
    wip_pileup: 'too much WIP is hiding defects and slowing completion',
    bottleneck_bounce: 'one station is throttling overall throughput',
    measurement_blindspot: 'calibration drift is creating inconsistent test outcomes',
    traceability_gap: 'failures cannot be quickly linked to lot, station, and operator',
    purchase_panic: 'expedites are replacing planning as a normal operating habit',
    pricing_margin_blindspot: 'shipments are growing faster than contribution margin',
    costing_gap: 'true SKU-level economics are unclear at quote and scheduling time',
    payment_delay_chokehold: 'cash conversion is lagging despite ongoing output',
    spec_drift_discount: 'requirements are shifting mid-build and creating avoidable rework',
    complaint_handling_gap: 'customer escalations are recurring instead of closing permanently',
    channel_dependency: 'dependency on a few accounts is increasing negotiation pressure',
    decision_bottleneck: 'critical approvals are delaying execution and closure',
    no_kpi_ownership: 'teams are operating without clear daily performance visibility',
    no_variance_review: 'issues are getting patched but not prevented',
    cross_function_breakdown: 'engineering, quality, and production are solving problems in silos',
    sku_complexity_tax: 'variant load is rising faster than process control',
    no_product_testing_rhythm: 'NPI and test strategy are not gated tightly enough',
    slow_bug_fix: 'improvements are arriving slower than defect recurrence',
    supplier_variance_risk: 'incoming lot variation is destabilizing yield',
    compliance_blocker_risk: 'audit and compliance readiness is reactive, not controlled',
    data_security_gap: 'firmware/version governance is vulnerable to mismatch risk',
    training_gap: 'critical station skills are inconsistent across operators',
    weak_shift_handover: 'shift changes are leaking context and defect history',
    hero_operator_dependence: 'line stability depends on a few key people',
    role_clarity_gap: 'ownership of FPY, escapes, and downtime is unclear',
    low_psych_safety: 'issues are raised late because teams fear blame',
    blame_culture: 'the same errors repeat because learning is suppressed',
    hygiene_drift: 'ESD and discipline checks are inconsistent across shifts',
    contract_gap: 'acceptance and return boundaries are unclear in execution',
    disaster_recovery_gap: 'containment and recall readiness is not drill-tested'
};

export const getAssemblySymptom = (topSignals: SignalTag[]): string => {
    const symptoms = topSignals
        .map((tag) => ASSEMBLY_SIGNAL_SYMPTOMS[tag])
        .filter(Boolean) as string[];
    if (symptoms.length === 0) {
        return 'execution remains busy, but performance feels unpredictable and recovery-heavy';
    }
    if (symptoms.length === 1) return symptoms[0];
    return `${symptoms[0]} and ${symptoms[1]}`;
};

export const buildAssemblyNextStep = (
    status: AssemblySeverityStatus,
    pillar: PillarId,
    kpi: string,
    fallbackCliffhanger?: string
): string => {
    const ctaByStatus: Record<AssemblySeverityStatus, string> = {
        Stable: `Unlock Optimization Pack and start Fix Plan (Lite) to lift ${kpi}.`,
        Watch: `Unlock ${pillar} Deep Module and generate a 7-day stabilization sprint tied to ${kpi}.`,
        Critical: `Start Fix Mode now: run a 7-day containment sprint and build a 30-day control system tied to ${kpi}.`
    };
    const base = ctaByStatus[status];
    if (!fallbackCliffhanger) return base;
    return `${base} ${fallbackCliffhanger}`;
};

export const ASSEMBLY_SEVERITY_VARIANTS: Record<PillarId, Record<AssemblySeverityStatus, string>> = {
    Operations: {
        Stable: 'Operations is stable for a {SPECIES} environment. Signals {SIGNAL_1} and {SIGNAL_2} are currently controlled, so output is less dependent on hero recovery. Day-to-day it looks like predictable flow instead of constant firefighting. Cost profile: {COST}. Next: {NEXT_STEP}',
        Watch: 'Operations is productive but showing early execution drag. We detected {SIGNAL_1} with traces of {SIGNAL_2}; this usually appears as {SYMPTOM}. Cost profile: {COST}. Next: {NEXT_STEP}',
        Critical: 'Operations is now a primary profit leak. Signals {SIGNAL_1} and {SIGNAL_2} indicate unstable flow and repeat recovery loops. Day-to-day this looks like {SYMPTOM}. Cost profile: {COST}. Next: {NEXT_STEP}'
    },
    Money: {
        Stable: 'Money controls are structurally sound for {SPECIES}. Signals {SIGNAL_1} and {SIGNAL_2} are contained, so margin is less dependent on luck cycles. Day-to-day this looks like better cash conversion and fewer emergency spend spikes. Cost profile: {COST}. Next: {NEXT_STEP}',
        Watch: 'Money looks healthy on the surface but leak patterns are forming. Signals {SIGNAL_1} and {SIGNAL_2} usually mean hidden losses in rework, expedites, or weak unit economics. Day-to-day this appears as month-end margin surprises. Cost profile: {COST}. Next: {NEXT_STEP}',
        Critical: 'Money is in high-risk leak mode. Signals {SIGNAL_1} and {SIGNAL_2} indicate revenue is not translating into cash or protected margin. Day-to-day this feels like tight cash and constant emergency spending. Cost profile: {COST}. Next: {NEXT_STEP}'
    },
    Market: {
        Stable: 'Market execution is healthy for {SPECIES}. Signals {SIGNAL_1} and {SIGNAL_2} look controlled, and trust is being protected through delivery and proof consistency. Day-to-day this means fewer escalations and stronger repeat behavior. Cost profile: {COST}. Next: {NEXT_STEP}',
        Watch: 'Market trust friction is forming. We detected {SIGNAL_1} with {SIGNAL_2}, which usually appears as {SYMPTOM}. Cost profile: {COST}. Next: {NEXT_STEP}',
        Critical: 'Market risk is elevated. Signals {SIGNAL_1} and {SIGNAL_2} indicate confidence is being damaged through delivery, spec, or escalation failures. Day-to-day this looks like constant customer recovery work. Cost profile: {COST}. Next: {NEXT_STEP}'
    },
    Leadership: {
        Stable: 'Leadership execution is structured: {SIGNAL_1} remains controlled and teams are closing issues before they recur. Day-to-day this means cadence over chaos. Cost profile: {COST}. Next: {NEXT_STEP}',
        Watch: 'Leadership is functional but inconsistent. Signals {SIGNAL_1} and {SIGNAL_2} often show up as shifting priorities and action drift. Cost profile: {COST}. Next: {NEXT_STEP}',
        Critical: 'Leadership is amplifying operational instability. Signals {SIGNAL_1} and {SIGNAL_2} indicate bottlenecks, silo conflict, or firefighting culture. Day-to-day this appears as repeating failures and execution variance by shift. Cost profile: {COST}. Next: {NEXT_STEP}'
    },
    Innovation: {
        Stable: 'Innovation activity appears intentional and controlled for {SPECIES}. Signals {SIGNAL_1} and {SIGNAL_2} are contained, so improvements are landing without destabilizing flow. Cost profile: {COST}. Next: {NEXT_STEP}',
        Watch: 'Innovation is active, but process stability is under pressure. Signals {SIGNAL_1} and {SIGNAL_2} usually indicate variant load or weak NPI gates. Day-to-day this appears as avoidable changeover and quality drag. Cost profile: {COST}. Next: {NEXT_STEP}',
        Critical: 'Innovation is currently creating instability. Signals {SIGNAL_1} and {SIGNAL_2} show change velocity outpacing process control. Day-to-day this looks like scrap, rework, and missed commitments after changes. Cost profile: {COST}. Next: {NEXT_STEP}'
    },
    Risk: {
        Stable: 'Risk posture is disciplined for {SPECIES}. Signals {SIGNAL_1} and {SIGNAL_2} suggest issues can be contained quickly with traceable evidence. Cost profile: {COST}. Next: {NEXT_STEP}',
        Watch: 'Risk posture has survivable gaps, but exposure is rising. Signals {SIGNAL_1} and {SIGNAL_2} often indicate traceability or supplier control weaknesses. Day-to-day this appears as slow containment during incidents. Cost profile: {COST}. Next: {NEXT_STEP}',
        Critical: 'Risk exposure is high. Signals {SIGNAL_1} and {SIGNAL_2} suggest one failure could trigger recall pressure, chargebacks, or contract loss. Day-to-day this feels like uncertainty under every incident. Cost profile: {COST}. Next: {NEXT_STEP}'
    },
    People: {
        Stable: 'People systems look reliable. Signals {SIGNAL_1} and {SIGNAL_2} are controlled, and shift consistency is supporting quality. Cost profile: {COST}. Next: {NEXT_STEP}',
        Watch: 'People systems are working, but strain is visible. Signals {SIGNAL_1} and {SIGNAL_2} usually indicate training gaps or role ambiguity. Day-to-day this appears as uneven execution across teams. Cost profile: {COST}. Next: {NEXT_STEP}',
        Critical: 'People is actively feeding the leak. Signals {SIGNAL_1} and {SIGNAL_2} indicate shift variance, burnout defects, or accountability fog. Day-to-day this appears as recurring rework and rising error volatility. Cost profile: {COST}. Next: {NEXT_STEP}'
    }
};

export const renderAssemblySeverityVariant = (params: {
    pillar: PillarId;
    status: AssemblySeverityStatus;
    species: string;
    signal1: string;
    signal2: string;
    signal3: string;
    symptom: string;
    cost: string;
    kpi: string;
    nextStep: string;
}): string => {
    const template = ASSEMBLY_SEVERITY_VARIANTS[params.pillar]?.[params.status];
    if (!template) return '';
    return template
        .replace(/{SPECIES}/g, params.species)
        .replace(/{SIGNAL_1}/g, params.signal1)
        .replace(/{SIGNAL_2}/g, params.signal2)
        .replace(/{SIGNAL_3}/g, params.signal3)
        .replace(/{SYMPTOM}/g, params.symptom)
        .replace(/{COST}/g, params.cost)
        .replace(/{KPI}/g, params.kpi)
        .replace(/{NEXT_STEP}/g, params.nextStep);
};
