// ═══════════════════════════════════════════════════════
// CliftonStrengths Scoring Engine
//
// Scores the 40-item proxy assessment and produces a
// StrengthsProfile + department/leakage analysis.
// ═══════════════════════════════════════════════════════

import {
    StrengthsProfile, DomainDistribution, ThemePrevalence,
    DepartmentStrengthsProfile, LeaderStrengthsProfile,
    StrengthsEngagement, StrengthsLeakageEntry, HiringPriority,
    ReportStrengthsData, StrengthsDomain, StrengthsTheme
} from '../types/strengths';
import { STRENGTHS_PROXY_QUESTIONS } from '../data/strengths/proxyQuestions';
import { CLIFTON_THEMES, STRENGTHS_LEAK_MAP, DOMAIN_BUSINESS_MAP } from '../data/strengths/themes';
import { DepartmentId } from '../types/department';
import { PillarScores } from '../types/core.ts';

// ─── Constants ───

const DOMAIN_ORDER: StrengthsDomain[] = ['Executing', 'Influencing', 'Relationship Building', 'Strategic Thinking'];

const INDUSTRY_BENCHMARKS: DomainDistribution = {
    executing: 30,
    influencing: 20,
    relationship: 25,
    strategic: 25
};

// ─── 1. Score the 40-question assessment ───
// answers[i] = 1..5, where 1–2 = lean A, 4–5 = lean B, 3 = neutral

export function scoreStrengthsAssessment(answers: number[]): StrengthsProfile {
    // Tally domain points
    const domainPoints: Record<StrengthsDomain, number> = {
        'Executing': 0, 'Influencing': 0, 'Relationship Building': 0, 'Strategic Thinking': 0
    };
    const themePoints: Partial<Record<StrengthsTheme, number>> = {};

    for (let i = 0; i < Math.min(answers.length, STRENGTHS_PROXY_QUESTIONS.length); i++) {
        const q = STRENGTHS_PROXY_QUESTIONS[i];
        const a = answers[i];

        if (a <= 2) {
            // Lean A
            domainPoints[q.domainA] += (a === 1 ? 2 : 1);
            if (q.themeA) themePoints[q.themeA] = (themePoints[q.themeA] || 0) + (a === 1 ? 2 : 1);
        } else if (a >= 4) {
            // Lean B
            domainPoints[q.domainB] += (a === 5 ? 2 : 1);
            if (q.themeB) themePoints[q.themeB] = (themePoints[q.themeB] || 0) + (a === 5 ? 2 : 1);
        } else {
            // Neutral — half point to both
            domainPoints[q.domainA] += 0.5;
            domainPoints[q.domainB] += 0.5;
        }
    }

    // Normalise to percentages
    const totalPoints = Object.values(domainPoints).reduce((s, v) => s + v, 0) || 1;
    const distribution: DomainDistribution = {
        executing: Math.round((domainPoints['Executing'] / totalPoints) * 100),
        influencing: Math.round((domainPoints['Influencing'] / totalPoints) * 100),
        relationship: Math.round((domainPoints['Relationship Building'] / totalPoints) * 100),
        strategic: Math.round((domainPoints['Strategic Thinking'] / totalPoints) * 100)
    };

    // Normalise so they sum to 100
    const sum = distribution.executing + distribution.influencing + distribution.relationship + distribution.strategic;
    if (sum !== 100) {
        distribution.executing += (100 - sum);
    }

    // Rank themes
    const allThemes = CLIFTON_THEMES.map(t => ({
        theme: t.theme,
        count: themePoints[t.theme] || 0,
        percentage: Math.round(((themePoints[t.theme] || 0) / (totalPoints || 1)) * 100)
    }));
    allThemes.sort((a, b) => b.count - a.count);

    const topThemes: ThemePrevalence[] = allThemes.slice(0, 10);
    const bottomThemes: ThemePrevalence[] = allThemes.slice(-5);

    // Determine dominant domain
    const domArr = Object.entries(domainPoints).sort((a, b) => b[1] - a[1]);
    const dominantDomain = domArr[0][0] as StrengthsDomain;
    const weakestDomain = domArr[domArr.length - 1][0] as StrengthsDomain;

    // Key insight
    const keyInsight = generateKeyInsight(distribution, dominantDomain, weakestDomain);

    return {
        domainDistribution: distribution,
        topThemes,
        bottomThemes,
        assessmentRate: 100,   // single-user = 100%
        totalAssessed: 1,
        totalEmployees: 1,
        alignmentScore: 0,   // calculated later by context
        keyInsight,
        strengthsMaturity: 'Awareness'
    };
}

// ─── 2. Generate Key Insight ───

function generateKeyInsight(dist: DomainDistribution, dominant: StrengthsDomain, weakest: StrengthsDomain): string {
    const domMap = DOMAIN_BUSINESS_MAP.find(d => d.domain === dominant);
    const weakMap = DOMAIN_BUSINESS_MAP.find(d => d.domain === weakest);

    const domPct = getDomainPct(dist, dominant);
    const weakPct = getDomainPct(dist, weakest);

    return `The organisation's concentration in ${dominant} themes (${domPct}%) drives strength in ${domMap?.keyImpact.split(',')[0] || 'core output'}, but the deficit in ${weakest} (${weakPct}%) indicates vulnerability: ${weakMap?.riskOfDeficit.split(',')[0] || 'structural gaps'}.`;
}

function getDomainPct(d: DomainDistribution, domain: StrengthsDomain): number {
    switch (domain) {
        case 'Executing': return d.executing;
        case 'Influencing': return d.influencing;
        case 'Relationship Building': return d.relationship;
        case 'Strategic Thinking': return d.strategic;
    }
}

// ─── 3. Alignment Score ───

export function calculateAlignmentScore(
    profile: StrengthsProfile,
    industry: string,
    _department?: string
): number {
    // Compare domain distribution to industry benchmarks
    const diffs = [
        Math.abs(profile.domainDistribution.executing - INDUSTRY_BENCHMARKS.executing),
        Math.abs(profile.domainDistribution.influencing - INDUSTRY_BENCHMARKS.influencing),
        Math.abs(profile.domainDistribution.relationship - INDUSTRY_BENCHMARKS.relationship),
        Math.abs(profile.domainDistribution.strategic - INDUSTRY_BENCHMARKS.strategic)
    ];
    const avgDiff = diffs.reduce((s, v) => s + v, 0) / 4;

    // Score: 10 = perfect alignment, 1 = wildly off
    // avgDiff of 0 → 10, avgDiff of 25+ → 1
    let score = Math.round(10 - (avgDiff / 2.5));
    score = Math.max(1, Math.min(10, score));

    // Bonus for industry-relevant themes
    if (industry === 'agriculture') {
        const hasExecuting = profile.domainDistribution.executing >= 25;
        if (hasExecuting) score = Math.min(10, score + 1);
    }

    return score;
}

// ─── 4. Map Strengths to Leakage ───

export function mapStrengthsToLeakage(
    profile: StrengthsProfile,
    pillarScores: PillarScores
): StrengthsLeakageEntry[] {
    const entries: StrengthsLeakageEntry[] = [];
    const topThemeNames = profile.topThemes.map(t => t.theme);

    for (const leak of STRENGTHS_LEAK_MAP) {
        // Check if the needed themes are missing from top themes
        const missingThemes = leak.themesNeeded.filter(t => !topThemeNames.includes(t));
        if (missingThemes.length >= 2) {
            entries.push({
                leakageSource: leak.leakageCategory,
                estimatedLoss: 'To be calculated',
                traditionalCause: `Operational gap in ${leak.leakageCategory.toLowerCase()}`,
                strengthsCause: `Missing ${missingThemes.join(', ')} themes — ${leak.mechanism}`,
                strengthsFix: `Recruit or redeploy talent with ${missingThemes.slice(0, 2).join(' + ')} in Top 5`,
                themesNeeded: leak.themesNeeded
            });
        }
    }

    return entries;
}

// ─── 5. Generate Pillar Strengths Factors ───

const PILLAR_DOMAIN_NEEDS: Record<string, StrengthsDomain[]> = {
    'Market': ['Influencing', 'Strategic Thinking'],
    'Operations': ['Executing'],
    'Money': ['Strategic Thinking', 'Executing'],
    'Innovation': ['Strategic Thinking', 'Influencing'],
    'Risk': ['Executing', 'Strategic Thinking'],
    'Leadership': ['Influencing', 'Relationship Building'],
    'People': ['Relationship Building']
};

const PILLAR_THEME_NEEDS: Record<string, StrengthsTheme[]> = {
    'Market': ['Woo', 'Communication', 'Competition', 'Strategic'],
    'Operations': ['Achiever', 'Discipline', 'Consistency', 'Restorative'],
    'Money': ['Analytical', 'Deliberative', 'Focus', 'Responsibility'],
    'Innovation': ['Ideation', 'Futuristic', 'Learner', 'Strategic'],
    'Risk': ['Deliberative', 'Consistency', 'Analytical', 'Restorative'],
    'Leadership': ['Command', 'Communication', 'Self-Assurance', 'Developer'],
    'People': ['Developer', 'Empathy', 'Individualization', 'Positivity']
};

export function generatePillarStrengthsFactor(
    pillar: string,
    score: number,
    profile: StrengthsProfile
): { factor: string; fix: string } {
    const needed = PILLAR_THEME_NEEDS[pillar] || ['Achiever'];
    const topThemeNames = profile.topThemes.map(t => t.theme);
    const present = needed.filter(t => topThemeNames.includes(t));
    const missing = needed.filter(t => !topThemeNames.includes(t));

    if (score >= 75) {
        // Strength — credit alignment
        return {
            factor: present.length >= 2
                ? `Strong ${pillar} performance correlates with ${present.join(' + ')} themes in the talent profile.`
                : `Solid ${pillar} performance despite limited theme alignment — operational habits compensate.`,
            fix: `Sustain by deploying ${present[0] || needed[0]}-dominant talent in key ${pillar.toLowerCase()} roles.`
        };
    }

    // Weakness — identify gap
    return {
        factor: missing.length >= 2
            ? `${pillar} underperformance links to absence of ${missing.slice(0, 3).join(', ')} themes — critical for ${PILLAR_DOMAIN_NEEDS[pillar]?.[0] || 'execution'}.`
            : `${pillar} has partial theme coverage but lacks depth in ${missing[0] || needed[0]}.`,
        fix: missing.length >= 2
            ? `Recruit or redeploy 1–2 people with ${missing[0]} + ${missing[1]} in their Top 5 to the ${pillar.toLowerCase()} function.`
            : `Develop existing talent in ${missing[0] || needed[0]} behaviours through targeted coaching.`
    };
}

// ─── 6. Generate Department-Level Profiles (simulated from org profile) ───

export function generateDepartmentProfiles(
    orgProfile: StrengthsProfile,
    departments: DepartmentId[]
): DepartmentStrengthsProfile[] {
    // Department archetype distributions (realistic simulation)
    const deptArchetypes: Record<string, DomainDistribution> = {
        operations: { executing: 45, influencing: 10, relationship: 20, strategic: 25 },
        supply_chain: { executing: 40, influencing: 15, relationship: 15, strategic: 30 },
        finance: { executing: 30, influencing: 10, relationship: 15, strategic: 45 },
        sales: { executing: 15, influencing: 45, relationship: 25, strategic: 15 },
        marketing: { executing: 10, influencing: 40, relationship: 20, strategic: 30 },
        hr: { executing: 15, influencing: 15, relationship: 50, strategic: 20 },
        it: { executing: 25, influencing: 10, relationship: 15, strategic: 50 },
        qa: { executing: 45, influencing: 5, relationship: 15, strategic: 35 },
        maintenance: { executing: 55, influencing: 5, relationship: 20, strategic: 20 },
        r_and_d: { executing: 15, influencing: 15, relationship: 15, strategic: 55 },
        ehs: { executing: 40, influencing: 10, relationship: 25, strategic: 25 },
        legal: { executing: 30, influencing: 15, relationship: 15, strategic: 40 },
        admin: { executing: 35, influencing: 10, relationship: 35, strategic: 20 },
        customer_success: { executing: 20, influencing: 25, relationship: 40, strategic: 15 }
    };

    const deptThemes: Record<string, StrengthsTheme[]> = {
        operations: ['Achiever', 'Discipline', 'Consistency', 'Responsibility', 'Focus'],
        supply_chain: ['Arranger', 'Analytical', 'Deliberative', 'Focus', 'Strategic'],
        finance: ['Analytical', 'Deliberative', 'Discipline', 'Focus', 'Consistency'],
        sales: ['Woo', 'Communication', 'Competition', 'Activator', 'Self-Assurance'],
        marketing: ['Communication', 'Ideation', 'Strategic', 'Woo', 'Futuristic'],
        hr: ['Developer', 'Empathy', 'Individualization', 'Harmony', 'Includer'],
        it: ['Analytical', 'Learner', 'Strategic', 'Input', 'Intellection'],
        qa: ['Consistency', 'Analytical', 'Deliberative', 'Discipline', 'Restorative'],
        maintenance: ['Restorative', 'Discipline', 'Achiever', 'Focus', 'Responsibility'],
        r_and_d: ['Ideation', 'Futuristic', 'Learner', 'Analytical', 'Strategic'],
        ehs: ['Deliberative', 'Consistency', 'Responsibility', 'Discipline', 'Analytical'],
        legal: ['Analytical', 'Deliberative', 'Context', 'Consistency', 'Intellection'],
        admin: ['Arranger', 'Harmony', 'Responsibility', 'Consistency', 'Discipline'],
        customer_success: ['Empathy', 'Relator', 'Positivity', 'Communication', 'Adaptability']
    };

    return departments.map(deptId => {
        const dist = deptArchetypes[deptId] || orgProfile.domainDistribution;
        const themes = deptThemes[deptId] || [];

        // Identify domain gaps
        const entries = Object.entries(dist) as [string, number][];
        const weakest = entries.sort((a, b) => a[1] - b[1])[0];
        const weakDomainLabel =
            weakest[0] === 'executing' ? 'Executing' :
                weakest[0] === 'influencing' ? 'Influencing' :
                    weakest[0] === 'relationship' ? 'Relationship Building' : 'Strategic Thinking';

        return {
            departmentName: deptId.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
            headcount: 0, // filled by caller if real data exists
            assessmentRate: orgProfile.assessmentRate,
            domainDistribution: dist,
            topThemes: themes.map((t, idx) => ({ theme: t, count: 10 - idx * 2, percentage: 30 - idx * 5 })),
            notableGaps: `Only ${weakest[1]}% ${weakDomainLabel} — limited ${DOMAIN_BUSINESS_MAP.find(d => d.domain === weakDomainLabel)?.keyImpact.split(',')[0] || 'capacity'}`,
            alignmentScore: Math.min(10, Math.max(5, 8 - Math.abs(dist.executing - 30) / 10))
        };
    });
}

// ─── 7. Generate Hiring Priorities ───

export function generateHiringPriorities(profile: StrengthsProfile): HiringPriority[] {
    const topThemeNames = profile.topThemes.map(t => t.theme);
    const priorities: HiringPriority[] = [];

    const criticalGaps: Array<{ role: string; dept: string; themes: StrengthsTheme[]; domain: StrengthsDomain; rationale: string }> = [
        { role: 'Pricing Analyst', dept: 'Finance', themes: ['Analytical', 'Command'], domain: 'Strategic Thinking', rationale: 'Recover margin leakage from ad-hoc discounting' },
        { role: 'Innovation Lead', dept: 'R&D / Strategy', themes: ['Ideation', 'Futuristic', 'Strategic'], domain: 'Strategic Thinking', rationale: 'Build pipeline for future revenue streams' },
        { role: 'Talent Coach', dept: 'HR', themes: ['Developer', 'Individualization', 'Empathy'], domain: 'Relationship Building', rationale: 'Reduce turnover through strengths-based coaching' },
        { role: 'Maintenance Diagnostician', dept: 'Operations', themes: ['Restorative', 'Analytical'], domain: 'Executing', rationale: 'Reduce equipment downtime through root-cause diagnosis' },
        { role: 'Business Development Manager', dept: 'Sales', themes: ['Woo', 'Communication', 'Competition'], domain: 'Influencing', rationale: 'Open new markets and distribution channels' }
    ];

    for (const gap of criticalGaps) {
        const missing = gap.themes.filter(t => !topThemeNames.includes(t));
        if (missing.length >= 2) {
            priorities.push({
                role: gap.role,
                department: gap.dept,
                idealThemes: gap.themes,
                domainNeeded: gap.domain,
                rationale: gap.rationale
            });
        }
    }

    return priorities;
}

// ─── 8. Generate Simulated Engagement Data ───

function generateEngagement(profile: StrengthsProfile): StrengthsEngagement {
    const maturity = profile.strengthsMaturity;
    const base = maturity === 'Awareness' ? 0.3 :
        maturity === 'Application' ? 0.5 :
            maturity === 'Integration' ? 0.7 : 0.9;

    return {
        strengthsDaily: Math.round(base * 40),
        strengthsAware: Math.round(base * 55),
        mgrTrained: Math.round(base * 25),
        teamsAligned: Math.round(base * 20),
        turnoverAligned: Math.round(8 - base * 5),
        turnoverNonAligned: Math.round(18 - base * 3),
        productivityAligned: +(1.0 + base * 0.2).toFixed(1),
        productivityNonAligned: +(0.8 + base * 0.1).toFixed(1),
        absenteeismAligned: +(3.5 - base * 2).toFixed(1) as unknown as number,
        absenteeismNonAligned: +(7.2 - base * 1).toFixed(1) as unknown as number
    };
}

// ─── 9. Generate Simulated Leader Profiles ───

function generateLeaderProfiles(): LeaderStrengthsProfile[] {
    return [
        { name: 'CEO / Managing Director', title: 'Chief Executive', top5: ['Strategic', 'Command', 'Achiever', 'Self-Assurance', 'Futuristic'], dominantDomain: 'Influencing' },
        { name: 'COO / Operations Director', title: 'Chief Operations', top5: ['Achiever', 'Arranger', 'Discipline', 'Responsibility', 'Focus'], dominantDomain: 'Executing' },
        { name: 'CFO / Finance Director', title: 'Chief Finance', top5: ['Analytical', 'Deliberative', 'Consistency', 'Focus', 'Responsibility'], dominantDomain: 'Strategic Thinking' },
        { name: 'Sales Director', title: 'Head of Sales', top5: ['Woo', 'Competition', 'Communication', 'Activator', 'Maximizer'], dominantDomain: 'Influencing' },
        { name: 'HR Director', title: 'Head of People', top5: ['Developer', 'Empathy', 'Individualization', 'Harmony', 'Relator'], dominantDomain: 'Relationship Building' }
    ];
}

// ═══════════════════════════════════════════════════════
// MAIN ENTRY: Build complete ReportStrengthsData
// ═══════════════════════════════════════════════════════

export function buildStrengthsData(
    answers: number[],
    industry: string,
    pillarScores: PillarScores,
    departments: DepartmentId[] = ['operations', 'finance', 'sales', 'hr']
): ReportStrengthsData {
    const profile = scoreStrengthsAssessment(answers);
    profile.alignmentScore = calculateAlignmentScore(profile, industry);

    return {
        profile,
        departmentProfiles: generateDepartmentProfiles(profile, departments),
        leaderProfiles: generateLeaderProfiles(),
        engagement: generateEngagement(profile),
        leakageMappings: mapStrengthsToLeakage(profile, pillarScores),
        hiringPriorities: generateHiringPriorities(profile)
    };
}
