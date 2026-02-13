import {
    PillarId,
    SignalTag,
    ImpactBand,
    Archetype,
    LeakIndices,
    DeepScanScores,
    DeepScanChapter,
    PillarScores
} from './core';
import { BusinessProfile } from './business';
import { ReportStrengthsData } from './strengths';

// Forward reference to BusinessProfile is tricky if we want Strict separation.
// But core shouldn't depend on business. Report depends on BusinessProfile?
// GeneratedReport has `profileContext?: BusinessProfile`.
// We might need to import BusinessProfile from './business' later, but avoiding circular for now
// or standardizing imports.
// Let's use `any` for BusinessProfile in GeneratedReport for now or import it if we create business.ts first?
// Or import { BusinessProfile } from './business'; (which doesn't exist yet but will).
// Actually, I should create business.ts first if report depends on it.
// Let's create business.ts first.

// Wait, I am writing report.ts. I will just reference BusinessProfile as a type reference
// and import it. Since I haven't created business.ts yet, I'll create it next and fix imports
// or just create business.ts NOW.

// I'll switch to creating business.ts first.
export interface ActionStep {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'completed';
    requiredProofType: 'text' | 'file' | 'link';
}

export interface ActionPlan {
    id: string;
    title: string;
    progress: number;
    steps: ActionStep[];
}

export interface QuizQuestion {
    id: string;
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export type Quiz = QuizQuestion[];

export interface ActionItem {
    id: string;
    text: string;
    description?: string;
    type: 'today' | 'week' | 'month';
    owner: string;
    effort?: 'Low' | 'Med' | 'High';
    metric?: string;
    signalTag?: SignalTag;
    costType?: string;
    evidencePrompt?: string;
    verificationCriteria?: string;
    optionalEvidence?: string;
    autoTags?: string[];
    // CliftonStrengths fields
    strengthsLever?: string;    // e.g. "Analytical + Command"
    talentAction?: string;      // e.g. "Hire externally" | "Redeploy internally" | "Develop managers"
}

export interface PillarDriver {
    name: string;
    score: number;
    status: 'Critical' | 'Weak' | 'Strong';
}

export interface QuickScanAnalysis {
    insight: string;
    benefits: string[];
    costAnalysis?: string;
    impact?: string;
}

export interface PillarReport {
    name: string;
    score: number;
    riskScore: number;
    band: 'Profit Leak' | 'Bottleneck Forming' | 'Controlled' | 'Profit Lever';
    tilt: string;
    strength: string;
    hiddenCost: string;
    profitConsequence: string[];
    actions: ActionItem[];
    owner: string;
    kpi: string;
    evidenceFlags: string[];
    deepInsight: string;
    whyItMatters: string;
    drivers: PillarDriver[];
    costBands: { time: ImpactBand; cash: ImpactBand; risk: ImpactBand };
    confidence: string;
    evidenceSnapshots: { observation: string; whyItMatters: string }[];
    fixLever: { action: string; metric: string; owner: string; effort: string; timeline: string };
    quickScanAnalysis?: QuickScanAnalysis;
    deepScanChapter?: DeepScanChapter;
    // CliftonStrengths fields
    strengthsFactor?: string;   // Root-cause from strengths lens
    strengthsFix?: string;      // Strengths-based remediation
}

export interface InspectionItem {
    item: string;
    desc?: string;
}

export interface ProofItem {
    item: string;
    desc?: string;
}

export interface AgroIndex {
    id: string;
    title: string;
    meaning: string;
    silentCost: string;
    signals: string[];
    mirrorQuestions: string[];
    inspectionItems: InspectionItem[];
    proofItems: ProofItem[];
    pillar: string;
}

export interface KPI {
    id: string;
    name: string;
    pillar: string[];
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'term';
}

export interface FixTask {
    id: string;
    pillar: string;
    title: string;
    desc: string;
    status: 'backlog' | 'in_progress' | 'done';
    effort: 'Low' | 'Med' | 'High';
    owner: string;
    metric: string;
    deadline: string;
    impactScore: number;
    evidence?: { type: 'text' | 'file' | 'link'; value: string; timestamp: string };
    signalTag?: SignalTag;
    costType?: string;
    evidencePrompt?: string;
    verificationCriteria?: string;
    optionalEvidence?: string;
    autoTags?: string[];
    _sortScore?: number;
}

export interface FixPlan {
    id: string;
    reportId: string;
    startedAt: string;
    tasks: FixTask[];
    overallProgress: number;
    kpis: KPI[];
    focusArea: string;
}

export interface GeneratedReport {
    id: string;
    date: string;
    archetype: Archetype;
    executiveSummary: string;
    pillars: PillarReport[];
    unlocks: string[];
    indices: LeakIndices;
    recommendedKPIs: any[];
    agroIndices?: AgroIndex[];
    deepScanScores?: DeepScanScores;
    // profileContext: BusinessProfile; // Referenced linearly, will import in types.ts barrel
    profileContext?: BusinessProfile;
    // CliftonStrengths data block
    strengthsData?: ReportStrengthsData;
}

export interface LibraryItem {
    id: string;
    industry: string;
    line_type: string[];
    pillar: PillarId;
    signal_tags: SignalTag[];
    severity_fit: Array<'Watch' | 'Critical' | 'Stable' | 'Strong' | 'Emergency'>;
    business_size_fit: Array<'solo' | 'small_team' | 'sme' | 'enterprise' | 'micro' | 'small' | 'medium' | 'large'>;
    text: string;
    type: 'strength' | 'leak' | 'kpi' | 'hook' | 'mission_brief';
    kpi_links?: string[];
    action_links?: string[];
    proof_templates?: string[];
    hook_text?: string;
    cost_text?: string;
    cliffhanger_text?: string;
    kpi_text?: string;
    fix_task_ids?: string[];
}

export interface QuestionDefinition {
    qid: string;
    industry: string;
    line_type: string[];
    pillar: PillarId;
    signal_tags: SignalTag[];
    weight: number;
    textA: string;
    textB: string;
    species_notes?: Record<string, string>;
    kpi_links?: string[];
    actions_7d?: string[];
    actions_30d?: string[];
}

export interface ActionDefinition {
    action_id: string;
    industry: string;
    line_type: string[];
    pillar: PillarId;
    signal_tags: SignalTag[];
    title: string;
    days: 7 | 30;
    effort: 'S' | 'M' | 'L';
    type?: string;
    text?: string;
    default_owner_by_size?: Record<string, string>;
    kpi_links?: string[];
    proof_required?: string[];
    impact_score?: number;
    description?: string;
    steps?: string[];
    objective?: string;
    outcome?: string;
}

export interface FixPlanAction {
    title: string;
    desc: string;
    owner: string;
    effort: 'S' | 'M' | 'L';
    metric?: string;
}

export interface FixPlanTemplate {
    focus: string;
    profitLeak: string;
    diagnosis: string;
    whatItControls?: string;
    deepInsight?: string;
    drivers: string[];
    evidenceSnapshots: { observation: string; whyItMatters: string }[];
    fixLever: { action: string; metric: string; owner: string; effort: string; timeline: string };
    quickWins: FixPlanAction[];
    winCondition: string;
    system30: FixPlanAction[];
    build60: string[];
    institutionalize90: string[];
    kpi: { name: string; def: string };
    traps: string[];
}

export interface IndustryPack {
    id: string;
    name: string;
    description?: string;
    library: LibraryItem[];
    questions: QuestionDefinition[];
    actions: any; // { snippets: ActionDefinition[], fixPlans7Day: any[], fixPlans30Day: any[] }
}
