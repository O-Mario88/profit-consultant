import { StrengthsTheme, StrengthsDomain } from '../../types/strengths';

// ═══════════════════════════════════════════════════════
// 34 CliftonStrengths Theme Definitions
// ═══════════════════════════════════════════════════════

export interface ThemeDefinition {
    theme: StrengthsTheme;
    domain: StrengthsDomain;
    definition: string;
    businessApplication: string;
}

export const CLIFTON_THEMES: ThemeDefinition[] = [
    // ─── EXECUTING DOMAIN (9) ───
    { theme: 'Achiever', domain: 'Executing', definition: 'Driven by a constant need for accomplishment; works hard and has stamina.', businessApplication: 'Sustains high output, meets deadlines consistently, drives production volume.' },
    { theme: 'Arranger', domain: 'Executing', definition: 'Organises and coordinates people and resources for maximum efficiency.', businessApplication: 'Optimises shift scheduling, resource allocation, and multi-project coordination.' },
    { theme: 'Belief', domain: 'Executing', definition: 'Has strong core values that provide a clear sense of purpose.', businessApplication: 'Anchors culture and mission; drives ethical business practices and value-driven decisions.' },
    { theme: 'Consistency', domain: 'Executing', definition: 'Treats everyone fairly by creating clear rules and procedures.', businessApplication: 'Enforces SOPs, standardises quality, ensures compliance and fair governance.' },
    { theme: 'Deliberative', domain: 'Executing', definition: 'Takes serious care in making decisions; anticipates obstacles.', businessApplication: 'Mitigates risk, prevents costly errors, strengthens contract and compliance review.' },
    { theme: 'Discipline', domain: 'Executing', definition: 'Enjoys routine and structure; creates order and predictability.', businessApplication: 'Builds reliable systems, maintains preventive maintenance schedules, ensures process adherence.' },
    { theme: 'Focus', domain: 'Executing', definition: 'Takes direction, follows through, makes corrections to stay on course.', businessApplication: 'Drives project completion, reduces scope creep, sustains KPI tracking discipline.' },
    { theme: 'Responsibility', domain: 'Executing', definition: 'Takes psychological ownership; committed to stable values like honesty and loyalty.', businessApplication: 'Ensures follow-through on commitments, builds trust with clients, owns outcomes.' },
    { theme: 'Restorative', domain: 'Executing', definition: 'Adept at figuring out what is wrong and resolving it.', businessApplication: 'Diagnoses root causes of equipment failure, process breakdowns, and quality issues.' },

    // ─── INFLUENCING DOMAIN (8) ───
    { theme: 'Activator', domain: 'Influencing', definition: 'Makes things happen by turning thoughts into action.', businessApplication: 'Launches initiatives quickly, breaks organisational inertia, accelerates go-to-market.' },
    { theme: 'Command', domain: 'Influencing', definition: 'Has presence; takes control and makes decisions readily.', businessApplication: 'Holds price discipline, leads crisis response, drives accountability in underperforming teams.' },
    { theme: 'Communication', domain: 'Influencing', definition: 'Finds it easy to put thoughts into words; good presenter and storyteller.', businessApplication: 'Wins pitches, crafts compelling brand narratives, translates complex data for stakeholders.' },
    { theme: 'Competition', domain: 'Influencing', definition: 'Measures performance against others; strives to win.', businessApplication: 'Drives sales targets, benchmarks against competitors, refuses to lose market share.' },
    { theme: 'Maximizer', domain: 'Influencing', definition: 'Focuses on strengths to stimulate personal and group excellence.', businessApplication: 'Optimises high-performers, refines best-in-class products, elevates team capability.' },
    { theme: 'Self-Assurance', domain: 'Influencing', definition: 'Confident in ability to manage own life and decisions.', businessApplication: 'Makes bold strategic bets, leads through ambiguity, inspires confidence in uncertain markets.' },
    { theme: 'Significance', domain: 'Influencing', definition: 'Wants to make a big impact; driven by being seen as significant.', businessApplication: 'Drives brand building, thought leadership, ambitious targets, and legacy projects.' },
    { theme: 'Woo', domain: 'Influencing', definition: 'Loves the challenge of meeting new people and winning them over.', businessApplication: 'Opens new accounts, builds distribution networks, excels at trade shows and cold outreach.' },

    // ─── RELATIONSHIP BUILDING DOMAIN (9) ───
    { theme: 'Adaptability', domain: 'Relationship Building', definition: 'Goes with the flow; lives in the moment.', businessApplication: 'Thrives in fast-changing environments, handles supply disruptions, manages seasonal chaos.' },
    { theme: 'Connectedness', domain: 'Relationship Building', definition: 'Has faith in the links among all things; everything happens for a reason.', businessApplication: 'Builds cross-functional bridges, sees systemic connections others miss, promotes whole-company thinking.' },
    { theme: 'Developer', domain: 'Relationship Building', definition: 'Recognises and cultivates the potential in others.', businessApplication: 'Reduces turnover through coaching, builds bench strength, transforms underperformers.' },
    { theme: 'Empathy', domain: 'Relationship Building', definition: 'Senses other people\'s feelings by imagining themselves in their situation.', businessApplication: 'Reads customer needs, navigates difficult negotiations, detects employee disengagement early.' },
    { theme: 'Harmony', domain: 'Relationship Building', definition: 'Looks for consensus and areas of agreement.', businessApplication: 'Resolves supplier disputes, builds collaborative teams, smooths change management.' },
    { theme: 'Includer', domain: 'Relationship Building', definition: 'Shows awareness of those who feel left out and makes effort to include them.', businessApplication: 'Builds diverse teams, expands customer base, ensures no stakeholder is overlooked.' },
    { theme: 'Individualization', domain: 'Relationship Building', definition: 'Intrigued by the unique qualities of each person.', businessApplication: 'Custom-fits roles to talent, personalises customer experiences, assigns right person to right task.' },
    { theme: 'Positivity', domain: 'Relationship Building', definition: 'Has contagious enthusiasm that gets others excited and engaged.', businessApplication: 'Boosts morale, sustains energy through tough periods, creates positive customer experiences.' },
    { theme: 'Relator', domain: 'Relationship Building', definition: 'Enjoys close relationships; finds deep satisfaction in working hard with friends.', businessApplication: 'Deepens key accounts, builds long-term partnerships, retains high-value clients through trust.' },

    // ─── STRATEGIC THINKING DOMAIN (8) ───
    { theme: 'Analytical', domain: 'Strategic Thinking', definition: 'Searches for reasons and causes; thinks about variables that might affect a situation.', businessApplication: 'Drives data-based decisions, detects cost leakage patterns, validates supplier contracts.' },
    { theme: 'Context', domain: 'Strategic Thinking', definition: 'Enjoys thinking about the past; understands the present by researching its history.', businessApplication: 'Learns from past failures, preserves institutional knowledge, informs strategy with historical data.' },
    { theme: 'Futuristic', domain: 'Strategic Thinking', definition: 'Inspired by the future and what could be; energises others with visions.', businessApplication: 'Drives long-range planning, identifies emerging markets, invests ahead of demand curves.' },
    { theme: 'Ideation', domain: 'Strategic Thinking', definition: 'Fascinated by ideas; finds connections between seemingly disparate phenomena.', businessApplication: 'Generates new products, creates novel solutions to persistent problems, drives R&D.' },
    { theme: 'Input', domain: 'Strategic Thinking', definition: 'Has a craving to know more; collects and archives all kinds of information.', businessApplication: 'Builds market intelligence, maintains competitive databases, enriches decision-making context.' },
    { theme: 'Intellection', domain: 'Strategic Thinking', definition: 'Characterised by intellectual activity; introspective and appreciates discussion.', businessApplication: 'Provides thoughtful analysis, develops deep expertise, solves complex strategic problems.' },
    { theme: 'Learner', domain: 'Strategic Thinking', definition: 'Has a great desire to learn and continuously improve.', businessApplication: 'Drives continuous improvement culture, adopts new tech quickly, keeps skills current.' },
    { theme: 'Strategic', domain: 'Strategic Thinking', definition: 'Creates alternative ways to proceed; sees patterns and issues quickly.', businessApplication: 'Navigates complex market dynamics, designs contingency plans, finds optimal paths forward.' }
];

// ═══════════════════════════════════════════════════════
// Domain → Business Function Mapping
// ═══════════════════════════════════════════════════════

export interface DomainBusinessMapping {
    domain: StrengthsDomain;
    businessFunctions: string[];
    keyImpact: string;
    riskOfExcess: string;
    riskOfDeficit: string;
}

export const DOMAIN_BUSINESS_MAP: DomainBusinessMapping[] = [
    {
        domain: 'Executing',
        businessFunctions: ['Operations', 'Production', 'Quality', 'Compliance', 'Project Delivery'],
        keyImpact: 'Output volume, consistency, reliability, on-time delivery, process adherence',
        riskOfExcess: 'Burnout, resistance to change, tactical tunnel vision, overwork culture',
        riskOfDeficit: 'Poor execution, missed deadlines, inconsistent quality, lack of follow-through'
    },
    {
        domain: 'Influencing',
        businessFunctions: ['Sales', 'Marketing', 'Business Development', 'Leadership Communication', 'Change Management'],
        keyImpact: 'Revenue generation, customer acquisition, brand presence, stakeholder buy-in',
        riskOfExcess: 'Over-promising, internal politics, ego-driven decisions, neglect of detail',
        riskOfDeficit: 'Weak sales, poor market positioning, inability to drive change, low external visibility'
    },
    {
        domain: 'Relationship Building',
        businessFunctions: ['HR', 'Customer Service', 'Team Cohesion', 'Culture', 'Staff Welfare', 'Retention'],
        keyImpact: 'Employee engagement, retention, collaboration, customer loyalty, conflict resolution',
        riskOfExcess: 'Conflict avoidance, slow decision-making, over-accommodation, groupthink',
        riskOfDeficit: 'High turnover, toxic culture, siloed teams, poor customer relationships, low morale'
    },
    {
        domain: 'Strategic Thinking',
        businessFunctions: ['Strategy', 'R&D', 'Innovation', 'Finance/Analytics', 'Long-range Planning', 'Market Intelligence'],
        keyImpact: 'Product innovation, market adaptation, data-driven decisions, competitive positioning',
        riskOfExcess: 'Analysis paralysis, impractical ideas, ivory tower thinking, slow to act',
        riskOfDeficit: 'No innovation pipeline, reactive strategy, poor decisions, missed market shifts'
    }
];

// ═══════════════════════════════════════════════════════
// Strengths → Profit Leakage Mapping
// ═══════════════════════════════════════════════════════

export interface StrengthsLeakMap {
    leakageCategory: string;
    themesNeeded: StrengthsTheme[];
    mechanism: string;
}

export const STRENGTHS_LEAK_MAP: StrengthsLeakMap[] = [
    { leakageCategory: 'Spoilage / Waste', themesNeeded: ['Restorative', 'Analytical', 'Deliberative'], mechanism: 'Restorative diagnoses root causes, Analytical detects patterns in waste data, Deliberative anticipates risk before loss occurs.' },
    { leakageCategory: 'Theft / Fraud', themesNeeded: ['Deliberative', 'Consistency', 'Responsibility'], mechanism: 'Deliberative builds caution into systems, Consistency enforces standards uniformly, Responsibility creates ownership culture that deters theft.' },
    { leakageCategory: 'Underpricing', themesNeeded: ['Analytical', 'Command', 'Competition'], mechanism: 'Analytical calculates true cost-to-serve, Command holds price discipline under pressure, Competition refuses to lose margin.' },
    { leakageCategory: 'Turnover Costs', themesNeeded: ['Developer', 'Individualization', 'Empathy'], mechanism: 'Developer invests in growth, Individualization sees unique needs, Empathy detects disengagement before resignation.' },
    { leakageCategory: 'Capacity Underuse', themesNeeded: ['Maximizer', 'Strategic', 'Arranger'], mechanism: 'Maximizer optimises existing resources, Strategic sees utilisation opportunities, Arranger configures resources efficiently.' },
    { leakageCategory: 'Equipment Downtime', themesNeeded: ['Restorative', 'Focus', 'Discipline'], mechanism: 'Restorative diagnoses failures fast, Focus sustains attention on maintenance, Discipline ensures preventive routines are followed.' },
    { leakageCategory: 'Energy Waste', themesNeeded: ['Analytical', 'Discipline', 'Futuristic'], mechanism: 'Analytical measures consumption patterns, Discipline maintains energy routines, Futuristic invests in long-term efficiency.' },
    { leakageCategory: 'Customer Churn', themesNeeded: ['Relator', 'Empathy', 'Positivity'], mechanism: 'Relator deepens client relationships, Empathy understands unspoken needs, Positivity creates experiences worth returning to.' }
];

// ═══════════════════════════════════════════════════════
// Helper: Get theme domain
// ═══════════════════════════════════════════════════════

export const getThemeDomain = (theme: StrengthsTheme): StrengthsDomain => {
    const entry = CLIFTON_THEMES.find(t => t.theme === theme);
    return entry?.domain || 'Executing';
};

// ═══════════════════════════════════════════════════════
// Domain colour system
// ═══════════════════════════════════════════════════════

export const DOMAIN_COLORS: Record<StrengthsDomain, { bg: string; text: string; border: string; light: string; hex: string }> = {
    'Executing': { bg: 'bg-purple-600', text: 'text-purple-700', border: 'border-purple-300', light: 'bg-purple-50', hex: '#7c3aed' },
    'Influencing': { bg: 'bg-orange-500', text: 'text-orange-700', border: 'border-orange-300', light: 'bg-orange-50', hex: '#f97316' },
    'Relationship Building': { bg: 'bg-blue-500', text: 'text-blue-700', border: 'border-blue-300', light: 'bg-blue-50', hex: '#3b82f6' },
    'Strategic Thinking': { bg: 'bg-emerald-500', text: 'text-emerald-700', border: 'border-emerald-300', light: 'bg-emerald-50', hex: '#10b981' }
};
