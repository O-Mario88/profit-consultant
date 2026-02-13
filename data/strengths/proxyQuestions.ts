import { StrengthsProxyQuestion } from '../../types/strengths';

// ═══════════════════════════════════════════════════════
// CliftonStrengths Self-Assessment Proxy Questions
// 40 paired-statement items (A/B) that approximate the
// CliftonStrengths methodology and map to 4 domains.
//
// Scoring: response 1–2 = leans A, 4–5 = leans B, 3 = neutral
// Tally by domain. 7+ of 10 = dominant, 4–6 = secondary, 0–3 = deficit.
// ═══════════════════════════════════════════════════════

export const STRENGTHS_PROXY_QUESTIONS: StrengthsProxyQuestion[] = [

    // ═══════════════════════════════════════
    // EXECUTING INDICATORS (1–5)
    // ═══════════════════════════════════════
    {
        id: 1, category: 'executing',
        statementA: "I feel most satisfied when I complete my to-do list each day.",
        statementB: "I feel most satisfied when I come up with a new idea.",
        domainA: 'Executing', domainB: 'Strategic Thinking',
        themeA: 'Achiever', themeB: 'Ideation'
    },
    {
        id: 2, category: 'executing',
        statementA: "I prefer to follow a proven process step by step.",
        statementB: "I prefer to find creative shortcuts to get things done.",
        domainA: 'Executing', domainB: 'Strategic Thinking',
        themeA: 'Discipline', themeB: 'Strategic'
    },
    {
        id: 3, category: 'executing',
        statementA: "I take personal responsibility when something goes wrong on my watch.",
        statementB: "I prefer to analyse why it went wrong before assigning responsibility.",
        domainA: 'Executing', domainB: 'Strategic Thinking',
        themeA: 'Responsibility', themeB: 'Analytical'
    },
    {
        id: 4, category: 'executing',
        statementA: "I am energised by organising resources and timelines.",
        statementB: "I am energised by brainstorming future possibilities.",
        domainA: 'Executing', domainB: 'Strategic Thinking',
        themeA: 'Arranger', themeB: 'Futuristic'
    },
    {
        id: 5, category: 'executing',
        statementA: "I naturally focus on one task until it's done before moving on.",
        statementB: "I naturally juggle multiple things and adapt as priorities shift.",
        domainA: 'Executing', domainB: 'Relationship Building',
        themeA: 'Focus', themeB: 'Adaptability'
    },

    // ═══════════════════════════════════════
    // INFLUENCING INDICATORS (6–10)
    // ═══════════════════════════════════════
    {
        id: 6, category: 'influencing',
        statementA: "I enjoy persuading others to see things my way.",
        statementB: "I prefer to reach consensus before moving forward.",
        domainA: 'Influencing', domainB: 'Relationship Building',
        themeA: 'Command', themeB: 'Harmony'
    },
    {
        id: 7, category: 'influencing',
        statementA: "I am energised by competition and being the best.",
        statementB: "I am energised by collaboration and shared success.",
        domainA: 'Influencing', domainB: 'Relationship Building',
        themeA: 'Competition', themeB: 'Includer'
    },
    {
        id: 8, category: 'influencing',
        statementA: "I am comfortable making tough decisions even if they're unpopular.",
        statementB: "I prefer decisions that keep everyone happy.",
        domainA: 'Influencing', domainB: 'Relationship Building',
        themeA: 'Command', themeB: 'Harmony'
    },
    {
        id: 9, category: 'influencing',
        statementA: "I love presenting ideas to groups and winning people over.",
        statementB: "I prefer to work behind the scenes and let results speak.",
        domainA: 'Influencing', domainB: 'Executing',
        themeA: 'Communication', themeB: 'Achiever'
    },
    {
        id: 10, category: 'influencing',
        statementA: "I am driven by recognition and making a significant impact.",
        statementB: "I am driven by steady, reliable contribution regardless of recognition.",
        domainA: 'Influencing', domainB: 'Executing',
        themeA: 'Significance', themeB: 'Responsibility'
    },

    // ═══════════════════════════════════════
    // RELATIONSHIP BUILDING INDICATORS (11–15)
    // ═══════════════════════════════════════
    {
        id: 11, category: 'relationship',
        statementA: "I naturally notice when a colleague is struggling — even if they haven't said anything.",
        statementB: "I tend to focus on facts and tasks more than on how people are feeling.",
        domainA: 'Relationship Building', domainB: 'Executing',
        themeA: 'Empathy', themeB: 'Focus'
    },
    {
        id: 12, category: 'relationship',
        statementA: "I prefer deep relationships with a few trusted people.",
        statementB: "I enjoy meeting new people and expanding my network.",
        domainA: 'Relationship Building', domainB: 'Influencing',
        themeA: 'Relator', themeB: 'Woo'
    },
    {
        id: 13, category: 'relationship',
        statementA: "I invest energy in helping others develop their potential.",
        statementB: "I invest energy in developing my own skills and knowledge.",
        domainA: 'Relationship Building', domainB: 'Strategic Thinking',
        themeA: 'Developer', themeB: 'Learner'
    },
    {
        id: 14, category: 'relationship',
        statementA: "I instinctively look for common ground when there's a disagreement.",
        statementB: "I instinctively look for the root cause of the disagreement.",
        domainA: 'Relationship Building', domainB: 'Strategic Thinking',
        themeA: 'Harmony', themeB: 'Analytical'
    },
    {
        id: 15, category: 'relationship',
        statementA: "I believe everyone should be included and given equal opportunity.",
        statementB: "I believe roles should be given based strictly on merit and capability.",
        domainA: 'Relationship Building', domainB: 'Influencing',
        themeA: 'Includer', themeB: 'Maximizer'
    },

    // ═══════════════════════════════════════
    // STRATEGIC THINKING INDICATORS (16–20)
    // ═══════════════════════════════════════
    {
        id: 16, category: 'strategic',
        statementA: "I enjoy analysing data to find patterns and insights.",
        statementB: "I enjoy taking action and seeing immediate results.",
        domainA: 'Strategic Thinking', domainB: 'Executing',
        themeA: 'Analytical', themeB: 'Achiever'
    },
    {
        id: 17, category: 'strategic',
        statementA: "I often think about what the future could look like for our company.",
        statementB: "I prefer to focus on what needs to happen today and this week.",
        domainA: 'Strategic Thinking', domainB: 'Executing',
        themeA: 'Futuristic', themeB: 'Focus'
    },
    {
        id: 18, category: 'strategic',
        statementA: "I am fascinated by ideas, even if they're not immediately practical.",
        statementB: "I prefer ideas that can be implemented quickly and simply.",
        domainA: 'Strategic Thinking', domainB: 'Executing',
        themeA: 'Ideation', themeB: 'Activator'
    },
    {
        id: 19, category: 'strategic',
        statementA: "I love learning new things, even outside my area of work.",
        statementB: "I prefer to deepen expertise in my specific area.",
        domainA: 'Strategic Thinking', domainB: 'Executing',
        themeA: 'Learner', themeB: 'Focus'
    },
    {
        id: 20, category: 'strategic',
        statementA: "When facing a problem, I quickly see multiple possible solutions and their trade-offs.",
        statementB: "When facing a problem, I dig into the details to find the single best answer.",
        domainA: 'Strategic Thinking', domainB: 'Executing',
        themeA: 'Strategic', themeB: 'Deliberative'
    },

    // ═══════════════════════════════════════
    // MIXED / DEPTH INDICATORS (21–40)
    // Cross-reference themes within and
    // across domains for finer-grained data.
    // ═══════════════════════════════════════
    {
        id: 21, category: 'mixed',
        statementA: "I need to finish tasks on my list before I sleep.",
        statementB: "I can leave tasks unfinished if a bigger vision excites me.",
        domainA: 'Executing', domainB: 'Strategic Thinking',
        themeA: 'Achiever', themeB: 'Futuristic'
    },
    {
        id: 22, category: 'mixed',
        statementA: "I love breaking the ice and can talk to anyone at an event.",
        statementB: "I prefer meaningful one-on-one conversations over networking.",
        domainA: 'Influencing', domainB: 'Relationship Building',
        themeA: 'Woo', themeB: 'Relator'
    },
    {
        id: 23, category: 'mixed',
        statementA: "I believe things happen for a bigger reason — there's a thread connecting events.",
        statementB: "I believe outcomes are caused by identifiable, measurable factors.",
        domainA: 'Relationship Building', domainB: 'Strategic Thinking',
        themeA: 'Connectedness', themeB: 'Analytical'
    },
    {
        id: 24, category: 'mixed',
        statementA: "When I see something broken, I feel a pull to fix it immediately.",
        statementB: "When I see something broken, I first want to understand the pattern behind it.",
        domainA: 'Executing', domainB: 'Strategic Thinking',
        themeA: 'Restorative', themeB: 'Intellection'
    },
    {
        id: 25, category: 'mixed',
        statementA: "I am at my best when I can optimise something already good into something great.",
        statementB: "I am at my best when I am building something from nothing.",
        domainA: 'Influencing', domainB: 'Strategic Thinking',
        themeA: 'Maximizer', themeB: 'Ideation'
    },
    {
        id: 26, category: 'mixed',
        statementA: "I feel alive when people look to me for direction and decisive action.",
        statementB: "I feel alive when my team is operating in perfect harmony.",
        domainA: 'Influencing', domainB: 'Relationship Building',
        themeA: 'Self-Assurance', themeB: 'Harmony'
    },
    {
        id: 27, category: 'mixed',
        statementA: "I collect articles, books, and resources constantly — I might need them someday.",
        statementB: "I focus on mastering a few disciplines deeply rather than collecting broadly.",
        domainA: 'Strategic Thinking', domainB: 'Executing',
        themeA: 'Input', themeB: 'Focus'
    },
    {
        id: 28, category: 'mixed',
        statementA: "I believe rules should apply to everyone equally, no exceptions.",
        statementB: "I believe each person is unique and should be managed differently.",
        domainA: 'Executing', domainB: 'Relationship Building',
        themeA: 'Consistency', themeB: 'Individualization'
    },
    {
        id: 29, category: 'mixed',
        statementA: "I make things happen — waiting around when things are decided frustrates me.",
        statementB: "I think carefully before acting — rushing leads to avoidable mistakes.",
        domainA: 'Influencing', domainB: 'Executing',
        themeA: 'Activator', themeB: 'Deliberative'
    },
    {
        id: 30, category: 'mixed',
        statementA: "I am drawn to people's stories and want to understand what motivates them.",
        statementB: "I am drawn to systems and data more than individual stories.",
        domainA: 'Relationship Building', domainB: 'Strategic Thinking',
        themeA: 'Empathy', themeB: 'Analytical'
    },
    {
        id: 31, category: 'mixed',
        statementA: "I think about the lessons of the past before making a decision.",
        statementB: "I think about where we could be in 5 years before making a decision.",
        domainA: 'Strategic Thinking', domainB: 'Strategic Thinking',
        themeA: 'Context', themeB: 'Futuristic'
    },
    {
        id: 32, category: 'mixed',
        statementA: "I create energy and optimism in my team even during tough times.",
        statementB: "I provide calm, measured analysis during tough times.",
        domainA: 'Relationship Building', domainB: 'Strategic Thinking',
        themeA: 'Positivity', themeB: 'Intellection'
    },
    {
        id: 33, category: 'mixed',
        statementA: "My core values guide every decision I make at work.",
        statementB: "I adapt my approach based on what the data and situation require.",
        domainA: 'Executing', domainB: 'Strategic Thinking',
        themeA: 'Belief', themeB: 'Strategic'
    },
    {
        id: 34, category: 'mixed',
        statementA: "I naturally see what each person does best and assign tasks accordingly.",
        statementB: "I naturally see what the team needs and recruit to fill gaps.",
        domainA: 'Relationship Building', domainB: 'Influencing',
        themeA: 'Individualization', themeB: 'Maximizer'
    },
    {
        id: 35, category: 'mixed',
        statementA: "I need time alone to think deeply about problems before discussing them.",
        statementB: "I need to talk through problems with others to figure them out.",
        domainA: 'Strategic Thinking', domainB: 'Relationship Building',
        themeA: 'Intellection', themeB: 'Connectedness'
    },
    {
        id: 36, category: 'mixed',
        statementA: "I prefer environments with clear expectations, routines, and structure.",
        statementB: "I prefer environments where I can improvise and respond as things unfold.",
        domainA: 'Executing', domainB: 'Relationship Building',
        themeA: 'Discipline', themeB: 'Adaptability'
    },
    {
        id: 37, category: 'mixed',
        statementA: "Winning matters to me — second place isn't really an option.",
        statementB: "Contribution matters to me — winning is less important than impact.",
        domainA: 'Influencing', domainB: 'Executing',
        themeA: 'Competition', themeB: 'Belief'
    },
    {
        id: 38, category: 'mixed',
        statementA: "I keep learning because the world keeps changing — you can't stand still.",
        statementB: "I keep perfecting what I already know — mastery matters more than breadth.",
        domainA: 'Strategic Thinking', domainB: 'Executing',
        themeA: 'Learner', themeB: 'Discipline'
    },
    {
        id: 39, category: 'mixed',
        statementA: "When someone is underperforming, I see potential and want to coach them up.",
        statementB: "When someone is underperforming, I want to understand what's wrong with the system.",
        domainA: 'Relationship Building', domainB: 'Executing',
        themeA: 'Developer', themeB: 'Restorative'
    },
    {
        id: 40, category: 'mixed',
        statementA: "I communicate best through stories and vivid narratives.",
        statementB: "I communicate best through clear data, charts, and evidence.",
        domainA: 'Influencing', domainB: 'Strategic Thinking',
        themeA: 'Communication', themeB: 'Analytical'
    }
];
