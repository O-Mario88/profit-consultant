export const RETAIL_ACTIONS = {
    stabilize: [
        {
            day: 1,
            title: "Freeze the leaks (Cash + Shrink baseline)",
            steps: [
                "Do a cash office reset: cash count at open/close, reconciliation rule, variance log, supervisor sign-off.",
                "Start a Shrink Notebook: record every loss type (damage, expiry, theft suspicion, supplier shortage, POS variance).",
                "Pick Top 20 'high-risk items' (small, expensive, fast-moving): razor blades, infant formula, spirits. Apply tighter handling rules."
            ]
        },
        {
            day: 2,
            title: "Fix shelf reality (Availability + Facing discipline)",
            steps: [
                "Run a Top 50 sellers check: are they on shelf, priced, and faced?",
                "Create a 2-times daily shelf scan (morning + late afternoon): stockouts, wrong price tags, empty hooks.",
                "Set 'No backroom treasure' rule: fast movers must live on shelf, not hidden."
            ]
        },
        {
            day: 3,
            title: "Pricing integrity sprint",
            steps: [
                "Audit Top 100 SKUs: shelf label vs POS price.",
                "Lock a daily rule: price changes only through one owner (pricing coordinator or manager).",
                "For promotions: ensure promo sign, promo POS price, and end date are aligned."
            ]
        },
        {
            day: 4,
            title: "Expiry & cold chain control",
            steps: [
                "Start FEFO rotation (First Expired, First Out) for dairy, chilled, frozen, near-expiry dry goods.",
                "Begin temperature logs (2–3 checks/day) for fridges/freezers (0–5°C chilled, ~-18°C frozen).",
                "Introduce a simple '7-Day to Expiry' markdown corner."
            ]
        },
        {
            day: 5,
            title: "Receiving discipline",
            steps: [
                "Require receiving to verify: quantity, condition, expiry date, invoice match.",
                "For 10 most important suppliers: track fill rate and invoice accuracy.",
                "Introduce 'No blind receiving' rule: nothing enters stock without a receiving record."
            ]
        },
        {
            day: 6,
            title: "Labor & queue control",
            steps: [
                "Measure peak queue times (30-minute windows). Set a rule: 'open another till when queue hits X people.'",
                "Schedule staff to peaks (not evenly). Queue reduction is immediate revenue protection."
            ]
        },
        {
            day: 7,
            title: "One-page dashboard + weekly cadence",
            steps: [
                "Put 7 KPIs on one page: Sales, Gross Margin, Shrink log count, Waste/Expiry, Stockouts (Top 20), Cash variance, Queue peak time.",
                "Hold a 30-minute weekly review: 'What improved? What repeated? What gets owned next week?'"
            ]
        }
    ],
    build: [
        {
            week: 1,
            title: "Build discipline + ownership",
            steps: [
                "Define owners per pillar (one accountable person each).",
                "Set SOPs for: Receiving, Pricing changes, Returns, Markdown, Cash handling, Temp logs, Daily shelf scan.",
                "Implement a cycle count rhythm: start with Top 200 SKUs (A-items) weekly."
            ]
        },
        {
            week: 2,
            title: "Inventory accuracy + replenishment system",
            steps: [
                "Create min/max or reorder points for top sellers.",
                "Build a simple 'Sales velocity' order method (last 7/14 days average × lead time).",
                "Start dead-stock tagging: any item with no sale in 30 days goes to a decision list."
            ]
        },
        {
            week: 3,
            title: "Merchandising & promo discipline",
            steps: [
                "Set basic planograms for: beverages, snacks, detergents, baby, cosmetics.",
                "Create a promo scorecard: uplift, margin impact, sell-through, leftover stock.",
                "Introduce basket builders: bundles (breakfast combo, school snacks combo), cross-merch."
            ]
        },
        {
            week: 4,
            title: "Loss prevention + finance maturity",
            steps: [
                "Formalize shrink categories (theft, admin error, damage, expiry).",
                "Implement exception reporting: refunds, voids, discounts, no-sale opens, price overrides.",
                "Payment hygiene: ensure systems handling card payments follow PCI baseline.",
                "Build a monthly 'Category Profit Review' using GMROI."
            ]
        }
    ]
};
