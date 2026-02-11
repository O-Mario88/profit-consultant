import { PillarDriver, BusinessProfile } from "../types";
import { PillarStatus } from "../data/missionBriefLibrary";
import { PILLAR_FIX_PLANS } from "../data/fixPlans";
import { INDUSTRY_LEXICONS, IndustryKey } from "../data/industryContext";
import { generateQuickScanAnalysis, generateDeepScanChapter } from "./textGen";
import { SignalTag } from "../types";
import { SparePartsTone } from "../data/spareParts/toneVariants";

export const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export const injectLexicon = (text: string, industry: string): string => {
    const keyMap: Record<string, IndustryKey> = {
        'retail': 'retail', 'tech': 'tech', 'agriculture': 'agriculture',
        'hospitality': 'hospitality', 'transport': 'transport',
        'services': 'services', 'manufacturing': 'manufacturing',
        'construction': 'construction', 'mining': 'mining', 'oil_gas_services': 'oil_gas_services', 'finance': 'services',
        'education': 'services', 'health': 'services', 'media': 'services', 'ngo': 'services'
    };
    const lexKey = keyMap[industry] || 'other';
    const lexicon = INDUSTRY_LEXICONS[lexKey] || INDUSTRY_LEXICONS['other'];

    let res = text;
    Object.entries(lexicon).forEach(([token, value]) => {
        const regex = new RegExp(`{${token}}`, 'gi');
        res = res.replace(regex, value);
    });
    return res;
};

export const generateDrivers = (pillarName: string, mainScore: number): PillarDriver[] => {
    const plan = PILLAR_FIX_PLANS[pillarName];
    const driverNames = plan?.drivers || ['Execution', 'Strategy', 'People'];

    return driverNames.map(name => {
        const variance = Math.floor(Math.random() * 30) - 15;
        let score = Math.max(5, Math.min(95, mainScore + variance));

        let status: 'Critical' | 'Weak' | 'Strong' = 'Strong';
        if (score < 40) status = 'Critical';
        else if (score < 70) status = 'Weak';

        return { name, score, status };
    });
};

export const mapEffort = (effort?: 'S' | 'M' | 'L'): 'Low' | 'Med' | 'High' | undefined => {
    switch (effort) {
        case 'S': return 'Low';
        case 'M': return 'Med';
        case 'L': return 'High';
        default: return undefined;
    }
};

export const getConsultantPriorityLine = (pillar: string, band: PillarStatus): string => {
    switch (band) {
        case 'Profit Leak':
            return `Priority action: start a 7-day containment sprint in ${pillar} and assign one owner for closure.`;
        case 'Bottleneck Forming':
            return `Priority action: harden the current ${pillar} controls before scale increases variance.`;
        case 'Controlled':
            return `Priority action: optimize ${pillar} for speed and remove remaining manual friction.`;
        case 'Profit Lever':
            return `Priority action: codify this ${pillar} playbook and transfer it into weaker pillars.`;
        default:
            return `Priority action: review ${pillar} controls weekly with KPI ownership.`;
    }
};

export const extractQuickScanText = (rawQuickScan: unknown): string => {
    if (typeof rawQuickScan === 'string') return rawQuickScan;
    if (!rawQuickScan || typeof rawQuickScan !== 'object') return '';
    const maybeInsight = (rawQuickScan as any).insight;
    if (typeof maybeInsight === 'string') return maybeInsight;
    return '';
};

export const normalizeQuickScanTone = (
    rawQuickScan: unknown,
    pillar: string,
    band: PillarStatus,
    industry: string
): string => {
    const fallback = generateQuickScanAnalysis(pillar, band, industry);
    const candidate = extractQuickScanText(rawQuickScan).trim();
    const merged = (candidate || fallback).replace(/\s+/g, ' ').trim();
    if (/priority action:/i.test(merged)) return merged;
    return `${merged} ${getConsultantPriorityLine(pillar, band)}`;
};

export const normalizeDeepScanSection = (
    section: 'theory' | 'diagnosis' | 'psychology' | 'financials',
    text: string,
    pillar: string,
    score: number
): string => {
    const clean = text.trim();
    if (!clean) return '';
    if (/^\s*###/m.test(clean)) return clean;

    const headings = {
        theory: `### Consultant Lens`,
        diagnosis: `### Diagnostic View (${score}/100)`,
        psychology: `### Execution Behavior Pattern`,
        financials: `### Commercial Impact And Priority Actions`
    } as const;

    return `${headings[section]}\n${clean}`;
};

export const normalizeDeepScanTone = (
    rawDeepDive: unknown,
    pillar: string,
    score: number,
    industry: string
) => {
    const fallback = generateDeepScanChapter(pillar, score, industry);
    const source = rawDeepDive && typeof rawDeepDive === 'object'
        ? rawDeepDive as Record<string, unknown>
        : {};

    const getText = (key: string, fallbackText: string): string => {
        const value = source[key];
        return typeof value === 'string' && value.trim() ? value.trim() : fallbackText;
    };

    const rawTheory = getText('theory', fallback.theory);
    const rawDiagnosis = getText('diagnosis', fallback.diagnosis);
    const rawPsychology = getText('psychology', fallback.psychology);
    const rawFinancials = getText('financials', fallback.financials);
    const rawPrescription = typeof source['prescription'] === 'string' ? source['prescription'].trim() : '';
    const mergedFinancials = [rawFinancials, rawPrescription].filter(Boolean).join('\n\n');

    return {
        theory: normalizeDeepScanSection('theory', rawTheory, pillar, score),
        diagnosis: normalizeDeepScanSection('diagnosis', rawDiagnosis, pillar, score),
        psychology: normalizeDeepScanSection('psychology', rawPsychology, pillar, score),
        financials: normalizeDeepScanSection('financials', mergedFinancials || fallback.financials, pillar, score),
        prescription: rawPrescription
    };
};

export const getSparePartsTone = (profile: BusinessProfile): SparePartsTone => {
    if (profile.reportTone === 'street') return 'street';
    if (profile.reportTone === 'executive') return 'executive';

    if (typeof window !== 'undefined') {
        const stored = window.localStorage.getItem('spare_parts_report_tone');
        if (stored === 'street' || stored === 'executive') return stored;
    }

    return 'executive';
};

export const hashSeed = (input: string): number => {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
    }
    return hash;
};

export const pickBySeed = <T,>(arr: readonly T[], seed: number): T =>
    arr[Math.abs(seed) % arr.length];

export const humanizeSignalTag = (tag: SignalTag): string =>
    tag.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// Re-export PillarStatus for convenience
export type { PillarStatus };
