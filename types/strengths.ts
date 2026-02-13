// ═══════════════════════════════════════════════════════
// CliftonStrengths Types
// ═══════════════════════════════════════════════════════

// --- Domains & Themes ---

export type StrengthsDomain = 'Executing' | 'Influencing' | 'Relationship Building' | 'Strategic Thinking';

export type StrengthsTheme =
    // Executing (9)
    | 'Achiever' | 'Arranger' | 'Belief' | 'Consistency' | 'Deliberative'
    | 'Discipline' | 'Focus' | 'Responsibility' | 'Restorative'
    // Influencing (8)
    | 'Activator' | 'Command' | 'Communication' | 'Competition'
    | 'Maximizer' | 'Self-Assurance' | 'Significance' | 'Woo'
    // Relationship Building (9)
    | 'Adaptability' | 'Connectedness' | 'Developer' | 'Empathy' | 'Harmony'
    | 'Includer' | 'Individualization' | 'Positivity' | 'Relator'
    // Strategic Thinking (8)
    | 'Analytical' | 'Context' | 'Futuristic' | 'Ideation' | 'Input'
    | 'Intellection' | 'Learner' | 'Strategic';

export interface DomainDistribution {
    executing: number;       // percentage
    influencing: number;
    relationship: number;
    strategic: number;
}

// --- Theme Prevalence ---

export interface ThemePrevalence {
    theme: StrengthsTheme;
    count: number;
    percentage: number;
}

// --- Org-Level Profile ---

export interface StrengthsProfile {
    domainDistribution: DomainDistribution;
    topThemes: ThemePrevalence[];       // Top 10
    bottomThemes: ThemePrevalence[];    // Bottom 5 (blind spots)
    assessmentRate: number;             // 0–100
    totalAssessed: number;
    totalEmployees: number;
    alignmentScore: number;             // 1–10
    keyInsight: string;                 // One powerful sentence
    strengthsMaturity: 'Awareness' | 'Application' | 'Integration' | 'Transformation';
}

// --- Department-Level Profile ---

export interface DepartmentStrengthsProfile {
    departmentName: string;
    headcount: number;
    assessmentRate: number;
    domainDistribution: DomainDistribution;
    topThemes: ThemePrevalence[];       // Top 5
    notableGaps: string;
    alignmentScore: number;             // 1–10
}

// --- Leader Profile ---

export interface LeaderStrengthsProfile {
    name: string;
    title: string;
    top5: StrengthsTheme[];
    dominantDomain: StrengthsDomain;
}

// --- Engagement Indicators ---

export interface StrengthsEngagement {
    strengthsDaily: number;             // % using strengths daily
    strengthsAware: number;             // % can name Top 5
    mgrTrained: number;                 // % managers trained
    teamsAligned: number;               // % teams with formal assignment
    turnoverAligned: number;            // turnover rate aligned teams
    turnoverNonAligned: number;
    productivityAligned: number;        // index
    productivityNonAligned: number;
    absenteeismAligned: number;         // %
    absenteeismNonAligned: number;
}

// --- Strengths-Leakage Mapping ---

export interface StrengthsLeakageEntry {
    leakageSource: string;
    estimatedLoss: string;
    traditionalCause: string;
    strengthsCause: string;
    strengthsFix: string;
    themesNeeded: StrengthsTheme[];
}

// --- Hiring Priority ---

export interface HiringPriority {
    role: string;
    department: string;
    idealThemes: StrengthsTheme[];
    domainNeeded: StrengthsDomain;
    rationale: string;
}

// --- Proxy Assessment Item ---

export interface StrengthsProxyQuestion {
    id: number;
    statementA: string;
    statementB: string;
    domainA: StrengthsDomain;
    domainB: StrengthsDomain;
    themeA?: StrengthsTheme;
    themeB?: StrengthsTheme;
    category: 'executing' | 'influencing' | 'relationship' | 'strategic' | 'mixed';
}

// --- Complete Strengths Data Block (attached to report) ---

export interface ReportStrengthsData {
    profile: StrengthsProfile;
    departmentProfiles: DepartmentStrengthsProfile[];
    leaderProfiles: LeaderStrengthsProfile[];
    engagement: StrengthsEngagement;
    leakageMappings: StrengthsLeakageEntry[];
    hiringPriorities: HiringPriority[];
}
