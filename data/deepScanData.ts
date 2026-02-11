
export interface DeepScanItem {
    id: string;
    pillar: 'Operations' | 'Money' | 'Market' | 'Leadership' | 'Innovation' | 'Risk' | 'People';
    a: string; // The "Reactive/Intuitive/Ad-hoc" option
    b: string; // The "Proactive/Systematic/Data-driven" option
    industry_group?: string;
}

export const DEEP_SCAN_DATA: DeepScanItem[] = [
    // --- OPERATIONS ---
    {
        id: 'DS-OPS-01',
        pillar: 'Operations',
        a: "We track daily work through verbal updates and mental checklists.",
        b: "We track daily work through a visual dashboard or digital log."
    },
    {
        id: 'DS-OPS-02',
        pillar: 'Operations',
        a: "When a mistake happens, we fix it and move on quickly.",
        b: "When a mistake happens, we update the process so it can't repeat."
    },
    {
        id: 'DS-OPS-03',
        pillar: 'Operations',
        a: "Our processes rely heavily on specific key people being present.",
        b: "Our processes range from documented to automated, independent of specific people."
    },

    // --- MONEY ---
    {
        id: 'DS-MON-01',
        pillar: 'Money',
        a: "We make spending decisions based on current bank balance.",
        b: "We make spending decisions based on a forward-looking cash flow forecast."
    },
    {
        id: 'DS-MON-02',
        pillar: 'Money',
        a: "We look at profit and loss statements when tax time comes (or rarely).",
        b: "We review profit margins by product/service line monthly."
    },
    {
        id: 'DS-MON-03',
        pillar: 'Money',
        a: "We accept late payments to maintain good client relationships.",
        b: "We enforce strict payment terms to protect our working capital."
    },

    // --- MARKET ---
    {
        id: 'DS-MKT-01',
        pillar: 'Market',
        a: "We rely mainly on referrals and word-of-mouth for new business.",
        b: "We have a predictable system that generates leads every week."
    },
    {
        id: 'DS-MKT-02',
        pillar: 'Market',
        a: "We compete primarily on price and availability.",
        b: "We compete primarily on a unique value proposition and brand promise."
    },
    {
        id: 'DS-MKT-03',
        pillar: 'Market',
        a: "We assume we know why customers buy from us.",
        b: "We regularly interview customers to understand their buying triggers."
    },

    // --- LEADERSHIP ---
    {
        id: 'DS-LDR-01',
        pillar: 'Leadership',
        a: "I (the owner) make almost all significant decisions.",
        b: "My team makes most operational decisions within clear guidelines."
    },
    {
        id: 'DS-LDR-02',
        pillar: 'Leadership',
        a: "Our priorities shift frequently to handle urgent issues.",
        b: "We stick to our quarterly priorities even when urgent issues arise."
    },
    {
        id: 'DS-LDR-03',
        pillar: 'Leadership',
        a: "Team meetings are mostly for status updates and reporting.",
        b: "Team meetings are mostly for solving problems and making decisions."
    },

    // --- INNOVATION ---
    {
        id: 'DS-INN-01',
        pillar: 'Innovation',
        a: "We improve our products/services when customers complain.",
        b: "We systematically test new improvements before issues arise."
    },
    {
        id: 'DS-INN-02',
        pillar: 'Innovation',
        a: "We launch new ideas based on gut feeling and excitement.",
        b: "We validate new ideas with small, low-cost experiments first."
    },
    {
        id: 'DS-INN-03',
        pillar: 'Innovation',
        a: "We see technology as a cost to be minimized.",
        b: "We see technology as a multiplier for efficiency and speed."
    },

    // --- RISK ---
    {
        id: 'DS-RSK-01',
        pillar: 'Risk',
        a: "Our critical business knowledge lives in people's heads.",
        b: "Our critical knowledge is captured in a central knowledge base."
    },
    {
        id: 'DS-RSK-02',
        pillar: 'Risk',
        a: "Agreements and contracts are often verbal or informal.",
        b: "All agreements are written, signed, and stored securely."
    },
    {
        id: 'DS-RSK-03',
        pillar: 'Risk',
        a: "We deal with compliance and regulatory issues if they come up.",
        b: "We have a calendar for compliance to stay ahead of regulations."
    },

    // --- PEOPLE ---
    {
        id: 'DS-PPL-01',
        pillar: 'People',
        a: "Roles and responsibilities are fluid and overlap often.",
        b: "Everyone has a clear scorecard defining success in their role."
    },
    {
        id: 'DS-PPL-02',
        pillar: 'People',
        a: "Feedback happens only when something goes wrong.",
        b: "Feedback is a scheduled, two-way weekly habit."
    },
    {
        id: 'DS-PPL-03',
        pillar: 'People',
        a: "We hire based on who is available and affordable.",
        b: "We hire based on a defined fit for culture and skill."
    },
];
