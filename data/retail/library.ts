import { PillarId } from "../../types/core";

export const RETAIL_PILLARS = [
    {
        id: "Operations" as PillarId,
        strengths: [
            "Receiving, stocking, and checkout run like a routine—not a crisis.",
            "Staff know the 'non-negotiables': scanning rules, returns rules, cash rules.",
            "Backroom workflow prevents damage and misplacement.",
            "Front-end speed protects peak sales windows.",
            "Store layout makes shopping fast."
        ],
        shortcomings: [
            "Receiving is rushed, allowing supplier errors and hidden shortages.",
            "Staff coverage doesn't match peaks, causing queues and lost sales.",
            "SOPs exist but aren't lived.",
            "Stockouts happen because backroom 'has it' but shelf doesn’t.",
            "Backroom chaos becomes shelf emptiness."
        ],
        kpis: [
            "Queue time (avg + peak)",
            "Shelf replenishment completion rate",
            "Receiving discrepancy rate",
            "Stockout incidents per week",
            "In-stock rate (Top 50 / Top 200)"
        ],
        actions: [
            "P5_AS03 'Receiving SOP + Checkpoints' — quantity, condition, expiry, invoice match.",
            "P5_AS05 'Peak Staffing Map' — align labor to rush windows.",
            "P4_AS02 'Shelf-to-Backroom Flow Rule' — restock schedule + ownership.",
            "P1_AS05 'Queue Trigger Rule' — Open new till when queue hits X people."
        ]
    },
    {
        id: "Money" as PillarId,
        strengths: [
            "You know your real margins, not just sales volume.",
            "Cash handling is disciplined (counts, sign-offs, variance logs).",
            "Supplier invoices are verified, preventing silent overpayment.",
            "You track working capital through turns and stock levels."
        ],
        shortcomings: [
            "Cash variances are frequent but tolerated.",
            "Supplier invoice errors aren't caught early.",
            "You don't see margin by category—only at month end.",
            "Shrink is eating your margin in silence."
        ],
        kpis: [
            "Gross margin % (overall + category)",
            "Cash over/short per day",
            "Shrink % of sales",
            "Waste/markdown % of sales",
            "GMROI by category"
        ],
        actions: [
            "P6_AS01 'Daily Cash Reconciliation Pack' — open count + close count + variance log.",
            "P6_AS02 'Invoice Match Rule' — PO/price list + receiving + invoice = pay.",
            "P6_AS03 'Margin by Category Mini-P&L' — weekly visibility.",
            "P6_AS06 'Working Capital Drill' — reduce dead stock + improve turns."
        ]
    },
    {
        id: "Market" as PillarId,
        strengths: [
            "Your store feels clean, safe, and predictable.",
            "Prices on shelf match POS often enough that customers trust you.",
            "You know which items drive trips vs which items drive profit.",
            "You grow basket size through smart bundles and cross-merch."
        ],
        shortcomings: [
            "Customers hesitate because the store looks inconsistent.",
            "Shelf price and POS price mismatch creates silent distrust.",
            "Assortment is driven by 'what we always stock'.",
            "Stockouts are invisible customer churn."
        ],
        kpis: [
            "Customer complaints per 1,000 transactions",
            "Average basket value",
            "Units per transaction (UPT)",
            "Price accuracy rate (shelf vs POS)",
            "Sales per square meter"
        ],
        actions: [
            "P1_AS02 'Price Trust Audit' — Daily/weekly POS vs shelf check.",
            "P3_AS04 'Bundle Builder' — 10 bundles that lift basket size weekly.",
            "P2_AS01 'Top 200 SKU Focus List' — Identify A-items.",
            "P1_AS01 '30-Minute Front Zone Reset' — Trigger: store looks tired."
        ]
    },
    {
        id: "Leadership" as PillarId,
        strengths: [
            "Roles are clear; staff know what 'great' looks like.",
            "Loss prevention is treated as a profit strategy, not just security.",
            "You build a culture that prevents problems instead of celebrating firefighting."
        ],
        shortcomings: [
            "Performance depends on 'good people', not reliable systems.",
            "Improvement is reactive, triggered by pain.",
            "Shrink is treated as 'part of business', not a preventable issue."
        ],
        kpis: [
            "SOP audit score",
            "Store audit score",
            "Shrink % trend",
            "Improvement actions closed per month"
        ],
        actions: [
            "P7_AS03 'Weekly Store Audit Walk' — cleanliness, pricing, expiry, cash.",
            "P7_AS04 'Root Cause Ritual' — any repeat issue gets a prevention fix.",
            "P5_AS06 'SOP Audit Rhythm' — weekly audits + coaching."
        ]
    },
    {
        id: "Innovation" as PillarId,
        strengths: [
            "You run seasonal selections intentionally.",
            "Promotions are simple, visible, and correctly executed.",
            "You use data (barcodes/GTIN) to keep data clean."
        ],
        shortcomings: [
            "New items are added but never removed.",
            "Promotions run without measuring sell-through or margin impact.",
            "Private label or high-margin alternatives aren't developed."
        ],
        kpis: [
            "New item success rate",
            "Promo ROI",
            "Private label share",
            "Dead stock %"
        ],
        actions: [
            "P2_AS02 'Dead Stock Tribunal' — Weekly decision: markdown, bundle, return.",
            "P3_AS02 'Promo Scorecard' — Plan → execute → measure → learn.",
            "P2_AS06 'GTIN Discipline' — One barcode = one item identity."
        ]
    },
    {
        id: "Risk" as PillarId,
        strengths: [
            "Shrink is taken seriously and measured.",
            "Payment processes follow good security hygiene (PCI baseline).",
            "Cold chain discipline protects product integrity."
        ],
        shortcomings: [
            "A 'trust me' cash process is a cash leak.",
            "Cold chain breaks become customer trust breaks.",
            "Payment controls are weak, increasing fraud exposure."
        ],
        kpis: [
            "Shrink %",
            "Temp compliance %",
            "Void/Return rate",
            "Supplier fill rate"
        ],
        actions: [
            "P1_AS03 'Cold Chain Discipline' — Temp log + corrective action.",
            "P6_AS05 'Payment Hygiene Checklist' — PCI DSS baseline.",
            "P5_AS01 'Exception Report Review' — daily review of refunds/voids."
        ]
    },
    {
        id: "People" as PillarId,
        strengths: [
            "Staff greet, guide, and resolve issues without drama.",
            "Roles are clear; staff know the non-negotiables.",
            "Basic compliance habits are consistent (hygiene, safety)."
        ],
        shortcomings: [
            "Staff avoid customers when the store is busy.",
            "Cleanliness is not owned—everyone assumes someone else will handle it.",
            "Training is shadowing without standards."
        ],
        kpis: [
            "Staff turnover rate",
            "Training completion rate",
            "Customer service score",
            "Labor % of sales"
        ],
        actions: [
            "P7_AS01 'Skills Matrix + Coverage Plan'.",
            "P7_AS02 'Daily Standards Coaching' — 10-min shift start huddle.",
            "P7_AS05 'Role Cards' — one-page responsibilities per role."
        ]
    }
];
