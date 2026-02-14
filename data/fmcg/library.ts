import { PillarId } from "../../types/core";

export const FMCG_PILLARS = [
  {
    id: "Operations" as PillarId, // P5 in prompt (Warehouse, Transport & Ops) is mapped to standard 'Operations'
    strengths: [
      "Pick accuracy is high; errors don’t reach customers.",
      "Warehouse productivity is measured (lines/hour, cases/hour).",
      "Loading checks prevent short shipments.",
      "Damage is minimized via handling standards.",
      "Routes are optimized; trucks aren’t burning margin.",
      "Dispatch cutoffs are respected; chaos is reduced."
    ],
    shortcomings: [
      "Pick errors create claims, returns, and re-delivery costs.",
      "Loading is rushed; short shipments are common.",
      "Damage happens in storage/handling and is under-reported.",
      "Route planning is manual and inconsistent.",
      "Fleet utilization is unknown; trucks run half-full.",
      "Warehouse congestion slows dispatch and causes late deliveries."
    ],
    kpis: [
      "Pick accuracy %",
      "Orders shipped complete %",
      "Warehouse productivity (lines/hour)",
      "Dock-to-stock time",
      "Damage rate %",
      "Transport cost per drop",
      "Vehicle utilization %"
    ],
    actions: [
      "P5_AS01 'Pick Accuracy Gate' — double-check high-risk SKUs.",
      "P5_AS02 'Load Verification' — scan/count before seal.",
      "P5_AS03 'Damage Heatmap' — identify damage zones and fix handling.",
      "P5_AS04 'Route Standard' — delivery windows + stop density targets.",
      "P5_AS05 'Fleet Control Pack' — fuel, maintenance schedule, utilization report."
    ]
  },
  {
    id: "Money" as PillarId, // P2 (Commercial) and P6 (Cash/Credit) overlap here. Mapping P6 to Money mostly.
    strengths: [
      "DSO is controlled; cash arrives predictably.",
      "Credit limits are enforced by policy, not sales pressure.",
      "Cash reconciliation is disciplined (cash-heavy operations).",
      "Deductions and disputes are managed so they don’t block cash.",
      "Margin is visible by customer/channel (net margin truth)."
    ],
    shortcomings: [
      "Collections are reactive; DSO drifts upward.",
      "Sales overrides credit controls; bad debts grow.",
      "Cash handling is 'trusted,' creating leakage.",
      "Disputes block collections for weeks/months.",
      "Net margin is unknown due to rebates/deductions haze."
    ],
    kpis: [
      "DSO (days sales outstanding)",
      "AR aging buckets (% current, 30/60/90+)",
      "Bad debt % of sales",
      "Credit limit breach rate",
      "Dispute cycle time",
      "Net margin after deductions/rebates"
    ],
    actions: [
      "P6_AS01 'AR Triage Ladder' — segment by risk + value + age.",
      "P6_AS02 'Credit Policy Pack' — limits, terms, approvals, stop rules.",
      "P6_AS03 'Dispute Fast Lane' — resolve in 72 hours or escalate.",
      "P6_AS06 'Net Margin Truth' — rebates/deductions tracked to customer."
    ]
  },
  {
    id: "Market" as PillarId, // P1 (Service) and P2 (Commercial) overlap. P1 is heavily OTIF (Market/Service). P2 is Commercial.
    // Mapping P1 (Service Reliability) to Market (Customer Success/Service side) and P2 (Commercial) to Market (Strategy side)
    // Actually, P1 is often mapped to Operations/Market hybrid. Let's map P1+P2 to Market+Innovation or split.
    // Standard mapping: P1(Service) -> Market/Ops hybrid. P2(Commercial) -> Market.
    // Let's use P2 (Commercial Engine) for Market pillar as it fits 'Commercial'.
    strengths: [
      "Pricing is disciplined; margin is protected by rules, not moods.",
      "Trade terms are documented and enforced (discounts, rebates, returns).",
      "Promotions are measured for sell-through and margin impact.",
      "You know which customers grow profit vs consume service.",
      "Deductions/chargebacks are tracked and challenged."
    ],
    shortcomings: [
      "Discounts drift; every rep negotiates a new reality.",
      "Rebates/credit notes are messy; you can’t see net margin truth.",
      "Promotions create leftover stock and future write-offs.",
      "Price lists differ by version; disputes become routine.",
      "Trade spend is not audited; 'leakage' is accepted."
    ],
    kpis: [
      "Gross margin % by channel",
      "Trade spend % of sales + ROI",
      "Discount rate % + override frequency",
      "Promo sell-through %",
      "Price compliance %",
      "Customer contribution margin"
    ],
    actions: [
      "P2_AS01 'Price Corridor Rules' — min margin floors + approval levels.",
      "P2_AS02 'Trade Terms Library' — standardized terms by channel.",
      "P2_AS04 'Customer Profit Tiering' — A/B/C customers based on contribution.",
      "P2_AS05 'Promo Exit Plan' — define leftover plan before promo starts."
    ]
  },
  {
    id: "Leadership" as PillarId, // P7 is People/Compliance, P1 is Service (Leadership often owns Service Promise).
    // Let's map P1 (Service Reliability) here as 'Leadership Promise' or stick to standard Leadership.
    // The prompt P7 is "People, Compliance, Data".
    // The prompt P3 is "Demand & Sales Execution".
    // Let's use P3 (Demand/Sales Exec) elements for Leadership (S&OP is a leadership ritual) or Innovation (Planning).
    // Let's map standard Leadership concepts from P7/P3.
    strengths: [
      "SOPs are lived daily; standards don’t collapse under pressure.",
      "Data is clean: products, locations, customers, prices.",
      "Continuous improvement is weekly (small wins, compounding).",
      "Accountability is role-based; everyone knows what 'done' means."
    ],
    shortcomings: [
      "Performance depends on a few heroes; systems don’t carry the load.",
      "SOPs exist but aren't enforced.",
      "Data is messy; decisions are based on feelings.",
      "Improvement happens only after losses.",
      "KPI ownership is unclear; problems bounce around."
    ],
    kpis: [
      "SOP audit score",
      "Data quality score (duplicates, mismatches)",
      "Improvement actions closed per month",
      "KPI review cadence adherence"
    ],
    actions: [
      "P7_AS04 'Weekly Kaizen Rhythm' — 3 issues, 3 fixes, 3 owners.",
      "P7_AS06 'KPI Ownership Map' — each KPI has one accountable owner.",
      "P7_AS03 'Master Data Cleanup Sprint' — GTIN/GLN alignment.",
      "P3_AS01 'Weekly Forecast Huddle' — top SKUs + exceptions only."
    ]
  },
  {
    id: "Innovation" as PillarId, // P3 (Demand & Sales Exec) fits Innovation/Growth Engine.
    strengths: [
      "Forecasting is practical and reviewed weekly, not 'annual theater'.",
      "New SKUs have launch plans and visibility execution.",
      "You run an S&OP-lite rhythm (sales-plan ↔ supply-plan alignment).",
      "Stock allocation follows demand and service priority.",
      "You track activation: outlets buying this month vs dormant."
    ],
    shortcomings: [
      "Forecast is a number, not a process.",
      "Sales coverage is inconsistent; best routes get attention, others starve.",
      "New SKUs are launched but not supported on route/shelf.",
      "Planning ignores service constraints (fleet, warehouse capacity).",
      "Outlets go dormant without reactivation strategy."
    ],
    kpis: [
      "Forecast accuracy % (top SKUs)",
      "Active outlets % / dormancy rate",
      "New SKU distribution %",
      "Stockout rate for A-items",
      "Plan adherence (S&OP actions closed)"
    ],
    actions: [
      "P3_AS03 'Dormant Outlet Reactivation' — offer + visit + credit rule.",
      "P3_AS04 'Launch Playbook' — training + samples + visibility + reorder plan.",
      "P3_AS05 'Demand Shaping' — smooth promo spikes with prebuild plans.",
      "P3_AS06 'Constraint Planning' — fleet/warehouse capacity gates."
    ]
  },
  {
    id: "Risk" as PillarId, // P4 (Inventory & Freshness) is a huge Risk in FMCG (Expiry).
    strengths: [
      "Inventory turns are healthy; cash isn’t trapped.",
      "FEFO is enforced for expiry-sensitive FMCG.",
      "Lot/batch trace is clean; recalls/returns are manageable.",
      "Stock accuracy is trusted due to cycle counts.",
      "Obsolescence is forecasted, not discovered."
    ],
    shortcomings: [
      "Aged stock piles up; working capital bleeds.",
      "FEFO breaks; expiry write-offs become 'normal'.",
      "Stock accuracy is weak; reordering becomes guessing.",
      "Batch/expiry data is incomplete, causing disputes.",
      "Warehouse location control is weak (lost stock)."
    ],
    kpis: [
      "Inventory turnover ratio",
      "Inventory accuracy %",
      "Aged stock % (30/60/90+)",
      "Expiry write-off % of sales",
      "FEFO compliance %"
    ],
    actions: [
      "P4_AS01 'ABC Cycle Count Rhythm' — A weekly, B monthly, C quarterly.",
      "P4_AS02 'FEFO Controls' — expiry capture + pick rules + audits.",
      "P4_AS03 'Aged Stock Tribunal' — markdown, bundle, return, liquidate, delist.",
      "P4_AS05 'Minimum Shelf-Life Policy' — customer delivery standards."
    ]
  },
  {
    id: "People" as PillarId, // P7 (People) + P1 (Service Reliability - Customer Success aspect)
    strengths: [
      "You consistently deliver on time and in full (OTIF), so customers trust you.",
      "Claims are rare because you prevent root causes.",
      "Customer issues have a resolution clock (who owns it, by when).",
      "Training is verified on the floor (not just induction).",
      "Safety culture prevents incidents and downtime."
    ],
    shortcomings: [
      "OTIF looks okay, but 'Perfect Order' collapses due to damages/paperwork.",
      "Claims repeat because the same causes repeat.",
      "Delivery communication is reactive; customers chase you for ETAs.",
      "Training is shadowing without standards; bad habits spread.",
      "High turnover resets capability repeatedly."
    ],
    kpis: [
      "OTIF / DIFOT %",
      "Perfect Order Performance %",
      "Claims rate (count + value)",
      "Training completion + verification rate",
      "Staff turnover rate"
    ],
    actions: [
      "P1_AS01 'Perfect Order Gate' — verify time, quantity, damage-free, documentation.",
      "P1_AS02 'Claims Kill List' — weekly top 10 claim causes; assign fixes.",
      "P7_AS01 'Skills Matrix' — coverage plan for each critical role.",
      "P7_AS02 'SOP Visual Cards' — 1-page standards per station."
    ]
  }
];

export const FMCG_MISSION_BRIEFS = [
  {
    id: "mb_fmcg_01",
    title: "Close the 'Evaporation' Gap",
    objective: "Stop the silent bleed from shrink, damages, and expiry.",
    leaks_addressed: ["shrinkage_leak", "expiry_write_off_burn", "waste_creep_tax"]
  },
  {
    id: "mb_fmcg_02",
    title: "Kill the Rebate Fog",
    objective: "Move from 'gross margin guessing' to 'net margin truth' by gaining control of deductions and trade spend.",
    leaks_addressed: ["rebate_fog", "deduction_blindness", "trade_spend_bleed"]
  },
  {
    id: "mb_fmcg_03",
    title: "The Perfect Order Engine",
    objective: "Shift from 'shipping stuff' to 'delivering promise' (OTIF + Doc Accuracy) to lock in key accounts.",
    leaks_addressed: ["perfect_order_gap", "otif_drift", "claims_chaos"]
  }
];
