
import { LibraryItem } from "../../types/report";

export const PRODUCE_AGGREGATION_LIBRARY: LibraryItem[] = [
    // --- P1: Sourcing & Supplier Control (Operations) ---
    {
        id: 'PA_LIB_STR_OPS',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['sourcing_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Sourcing Strength: We have approved supplier lists with clear specs. We do season planning and volume commitments rather than daily panic buying. We use supplier scorecards and pay based on verified weights.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_OPS',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['sourcing_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Sourcing Leak: Buying is reactive; we chase trucks, not plans. Supplier quality varies wildly with no enforcement. Hidden middlemen commissions distort true cost. We overbuy then dump.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_OPS',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['sourcing_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Sourcing KPIs: % volume from approved suppliers, Supplier quality pass rate at intake (%), Supplier usable yield after grading (%), Cost variance vs target.",
        type: 'kpi'
    },

    // --- P2: Quality (Innovation) ---
    {
        id: 'PA_LIB_STR_INN',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Innovation',
        signal_tags: ['quality_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Quality Strength: We have written grade standards with photos/examples. We sample every load using a consistent method. We separate grades physically and label clearly.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_INN',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Innovation',
        signal_tags: ['quality_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Quality Leak: Grading is 'eyeballing' and varies by who is on duty. No clear reject rules. Mixed grades stored together collapse price. Claims are emotional, not evidence-based.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_INN',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Innovation',
        signal_tags: ['quality_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Quality KPIs: Intake pass rate (%), Rejection rate (% loads rejected), Downgrade rate (% volume downgraded), Claims cost (as % sales).",
        type: 'kpi'
    },

    // --- P3: Logistics (Operations) ---
    {
        id: 'PA_LIB_STR_LOG',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['logistics_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Logistics Strength: We plan dispatch and consolidate loads efficiently. We measure and reduce dwell time. Storage follows FIFO/FEFO rules. Cold chain is maintained where needed.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_LOG',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['logistics_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Logistics Leak: Trucks wait too long; quality degrades. No temperature discipline. Storage is disorganized. No real FIFO; old stock hides. Transport damage isn't tracked.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_LOG',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['logistics_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Logistics KPIs: Dwell time (hours), On-time dispatch (%), Storage loss (%), Transport damage rate (%), Cold chain compliance.",
        type: 'kpi'
    },

    // --- P4: Sales (Market) ---
    {
        id: 'PA_LIB_STR_MKT',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Market',
        signal_tags: ['sales_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Sales Strength: We sell into multiple channels. We maintain buyer service levels (fill rate, on-time). We document specs and meet them reliably.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_MKT',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Market',
        signal_tags: ['sales_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Sales Leak: We sell to whoever calls. Pricing is inconsistent. We miss buyer specs and lose accounts. Low fill rates. No sales pipeline or contracts.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_MKT',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Market',
        signal_tags: ['sales_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Sales KPIs: Gross margin by channel, Fill rate (%), On-time delivery (%), Repeat buyer rate (%), Sales concentration risk.",
        type: 'kpi'
    },

    // --- P5: Pricing (Money) ---
    {
        id: 'PA_LIB_STR_MON',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['pricing_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Pricing Strength: We know our true landed cost per grade. We set a margin rule by channel. Discounts require approval. We price confidently using market signals.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_MON',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['pricing_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Pricing Leak: We don't know real cost; we price blind. We chase volume with discounts. Shrink isn't priced into deals. Freight surprises erase margin.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_MON',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['pricing_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Pricing KPIs: Gross margin %, Contribution margin, Discount rate (%), Deal approval compliance, Price realization.",
        type: 'kpi'
    },

    // --- P6: Cashflow (Money) ---
    {
        id: 'PA_LIB_STR_CASH',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['cash_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Cash Strength: We match payment terms. We invoice fast and reconcile daily. We have credit limits and enforce them. We track cash conversion cycle.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_CASH',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['cash_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Cash Leak: We advance suppliers but give buyers long credit. Invoices are late. Credit is informal. No cash forecasting. Cash leakages at buying points.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_CASH',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Money',
        signal_tags: ['cash_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Cash KPIs: DSO (days sales outstanding), Cash conversion cycle, Collection rate (%), Dispute rate (%), Bad debt %.",
        type: 'kpi'
    },

    // --- P7: Inventory (Operations) ---
    {
        id: 'PA_LIB_STR_INV',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['inventory_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Inventory Strength: We run cycle counts and reconcile regularly. We measure shrink by stage. We enforce labeling discipline and control access.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_INV',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['inventory_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Inventory Leak: No inventory truth; numbers are guesses. Shrink is blamed on 'market'. Rework and rejects disappear. Missing weigh tickets create fraud space.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_INV',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Operations',
        signal_tags: ['inventory_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Inventory KPIs: Shrink % (weight + value), Stock accuracy %, Cycle count variance, Write-off %, Rework yield %.",
        type: 'kpi'
    },

    // --- P8: People (People) ---
    {
        id: 'PA_LIB_STR_PPL',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'People',
        signal_tags: ['people_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "People Strength: Roles are clear. KPIs are visible and reviewed weekly. Incentives reward margin + compliance. Training exists for grading/hygiene.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_PPL',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'People',
        signal_tags: ['people_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "People Leak: One person holds too many controls (fraud risk). KPIs not defined. Incentives push volume over quality. Conflict between buying and sales.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_PPL',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'People',
        signal_tags: ['people_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "People KPIs: Output per labor hour, Error rate, Training completion %, Staff turnover, Incentive payout vs margin alignment.",
        type: 'kpi'
    },

    // --- P9: Compliance (Risk) ---
    {
        id: 'PA_LIB_STR_RISK',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Risk',
        signal_tags: ['compliance_strength'],
        severity_fit: ['Strong'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Compliance Strength: We have lot codes and records. We follow hygiene codes. We understand trade terms (Incoterms). Contracts and COAs are managed.",
        type: 'strength'
    },
    {
        id: 'PA_LIB_LEAK_RISK',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Risk',
        signal_tags: ['compliance_weakness'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Compliance Leak: No lot code. Records are missing. Chemical storage/hygiene create safety risk. Contracts are vague.",
        type: 'leak'
    },
    {
        id: 'PA_LIB_KPI_RISK',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Risk',
        signal_tags: ['compliance_kpis'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Compliance KPIs: Traceability completeness %, Mock recall time, Audit pass rate, Nonconformance incidents, Claims resolved within SLA %.",
        type: 'kpi'
    },

    // --- HOOKS ---
    {
        id: 'PA_LIB_HOOK_01',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Leadership',
        signal_tags: ['pa_hooks'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "Margin gets murdered in the middle. Shrink is invisible theft. Moisture is profit's silent enemy.",
        type: 'hook'
    },
    {
        id: 'PA_LIB_HOOK_02',
        industry: 'agriculture',
        line_type: ['Produce aggregation'],
        pillar: 'Leadership',
        signal_tags: ['pa_hooks'],
        severity_fit: ['Critical', 'Watch'],
        business_size_fit: ['small', 'medium', 'large'],
        text: "You don't have a supply chain—you have a surprise chain. Cash is bleeding in slow motion.",
        type: 'hook'
    }
];
