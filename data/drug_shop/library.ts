import { PillarId } from '../../types/core';

export const DRUG_SHOP_PILLARS = [
    {
        id: "Market" as PillarId, // P1 Safe Advice, Triage & Referral
        title: "Safe Advice, Triage & Referral",
        strengths: [
            "You protect customers by staying inside scope—and confidentially explaining that boundary.",
            "You spot red flags early and refer fast, which builds serious trust.",
            "Privacy is respected; customers feel safe discussing sensitive issues.",
            "You don't just sell; you close the loop on repeat issues or failed treatments.",
            "Your referral network is active, so you’re a bridge to care, not a dead end."
        ],
        shortcomings: [
            "Staff sometimes guess instead of referring—risk rises quietly.",
            "Advice changes by person; customers hear conflicting guidance.",
            "Privacy is accidental; queue pressure kills confidentiality.",
            "Referrals are loose ('go to the clinic') instead of specific and tracked.",
            "Red flags are missed because speed is prioritized over safety."
        ],
        kpis: [
            "Complaint rate per 1,000 transactions",
            "% staff adherence to referral protocol",
            "Referrals made count (weekly)",
            "Repeat customer rate (trust proxy)",
            "Mystery shopper safety score"
        ],
        actions: [
            "P1_AS01 'Red-Flag Triage Card' — when to refer immediately.",
            "P1_AS02 'Scope Boundary Script' — confident refusal/referral.",
            "P1_AS03 'Privacy Queue Marker' — simple tape line for distance.",
            "P1_AS04 'Referral Slip' — professionalizing the hand-off.",
            "P1_AS05 'Complaint Log' — turning errors into training."
        ]
    },
    {
        id: "Innovation" as PillarId, // P2 Assortment & Legitimate Sourcing
        title: "Assortment & Legitimate Sourcing",
        strengths: [
            "You protect a tight 'essentials list' so top requests are rarely missing.",
            "You buy with a plan, not with excitement—deals don't trap your cash.",
            "Your shelf mix fits your local demand patterns (season, income, common needs).",
            "You keep supplier reliability in mind, not just price.",
            "You actively reduce duplicates (too many similar brands/pack sizes).",
            "You rotate categories intentionally: hygiene, pain/fever, cough/cold, first-aid.",
            "You quarantine questionable stock instead of 'hoping it’s fine.'",
            "You listen to repeated customer requests and adjust stock accordingly.",
            "You delist slow movers before they become expiry losses.",
            "You can explain why each major category exists in your shop."
        ],
        shortcomings: [
            "Assortment grows endlessly; nothing leaves the shelf.",
            "Essentials stock out while slow movers sit untouched.",
            "Buying is supplier-led ('whatever is available') instead of demand-led.",
            "Too many similar items cannibalize sales and trap cash.",
            "Deal buying creates expiry risk and backroom congestion.",
            "Customer requests are heard but not captured, so patterns are missed.",
            "Supplier inconsistency causes frequent substitutions and complaints.",
            "Quarantine is informal; questionable items mix with good stock.",
            "Seasonal spikes surprise you every year.",
            "Procurement lacks a 'preferred supplier' discipline."
        ],
        kpis: [
            "Essential availability % (Top 50/100 in-stock rate)",
            "Stockout frequency (Top items stockout count/week)",
            "Dead stock % (no movement 60/90 days)",
            "SKU productivity (sales per SKU or per shelf section)",
            "Supplier fill rate % (ordered vs delivered)",
            "Supplier lead time reliability (on-time rate)",
            "Assortment duplication index (# of near-identical alternatives)",
            "Seasonal readiness score (planned vs surprise purchases)",
            "Quarantine incidents/month (suspect stock held)",
            "Delist/clearance actions/month"
        ],
        actions: [
            "P2_AS01 'Top 100 Essentials List + Min/Max' (simple reorder points)",
            "P2_AS02 'Supplier Scorecard Lite' (fill rate, lead time, invoice accuracy)",
            "P2_AS03 'Dead Stock Tribunal' (Weekly 15 min) (delist/markdown/return)",
            "P2_AS04 'Duplication Cleanup Rule' (max 2–3 options per need tier)",
            "P2_AS05 'Seasonal Mini-Playbook' (cold/flu, school season, rains, allergies)",
            "P2_AS06 'Quarantine Shelf + Verification Steps' (hold → verify → return)"
        ]
    },
    {
        id: "Money" as PillarId, // P3 Pricing Discipline
        title: "Pricing Discipline & Ethical Basket Growth",
        strengths: [
            "Prices feel consistent; customers don't suspect randomness.",
            "Discounts have rules; generosity doesn't become leakage.",
            "Staff can explain options clearly (value tier vs premium tier).",
            "You build 'care bundles' that actually help (not pushy upsells).",
            "You protect margin on fast movers while staying fair.",
            "You correct pricing errors quickly (shelf vs POS vs memory).",
            "You control refunds/returns so 'nice service' doesn't become fraud.",
            "You understand which items are price-sensitive and which are margin builders.",
            "You don't let staff negotiate prices differently per customer.",
            "You review promo outcomes instead of repeating mistakes."
        ],
        shortcomings: [
            "Discounts happen daily and aren't tracked.",
            "Different staff quote different prices, causing conflict.",
            "'Price overrides' are common and invisible in reporting.",
            "Promotions create leftovers and expiry risk.",
            "Refunds/returns are too easy; abuse grows.",
            "You don't know which categories drive margin vs volume.",
            "Price changes surprise customers; trust drops.",
            "Bundles feel pushy, so customers resist.",
            "Cost changes aren't reflected quickly; some items sell at loss.",
            "The shop celebrates sales volume while profit quietly falls."
        ],
        kpis: [
            "Gross margin estimate % (overall + key categories)",
            "Discount rate % (discount value / sales)",
            "Price override count/value",
            "Average basket value",
            "Items per transaction",
            "Promo sell-through %",
            "Refund/return rate % + reasons",
            "Price integrity score (shelf vs POS match checks)",
            "Cost-to-price lag (days) where trackable",
            "Care bundle adoption rate"
        ],
        actions: [
            "P3_AS01 'Discount Guardrails' (max %, approvals, reason codes)",
            "P3_AS02 'Price Integrity Audit' (Top 30 items weekly)",
            "P3_AS03 'Care Bundle Menu' (3–5 standard bundles with clear value)",
            "P3_AS04 'Override Log + Weekly Review' (who/why/how much)",
            "P3_AS05 'Refund Ladder' (receipt/reason/approval threshold)",
            "P3_AS06 'Category Margin Map Lite' (traffic vs profit items)"
        ]
    },
    {
        id: "Operations" as PillarId, // P4 Inventory & Expiry
        title: "Inventory, Expiry & Storage Control",
        strengths: [
            "FEFO rotation is real; near-expiry stock gets action early.",
            "You track expiries 30/60/90 days and act, not panic.",
            "Receiving checks prevent short deliveries and damaged packs.",
            "Stock records are trustworthy enough to reorder confidently.",
            "Essentials are protected with reorder levels, reducing stockouts.",
            "Storage is organized; items are easy to find.",
            "Returns are quarantined and processed fast.",
            "Temperature-sensitive items (if any) are monitored consistently.",
            "Cycle counts happen on a schedule (A/B/C).",
            "You know what cash is tied up in slow movers."
        ],
        shortcomings: [
            "Expiry write-offs repeat; FEFO is inconsistent.",
            "Overstock from deals creates dead cash and chaos.",
            "Stockouts happen because reorder points are missing.",
            "Inventory accuracy is unknown; ordering becomes guessing.",
            "Backroom is memory-based; items get 'lost'.",
            "Returns mix into normal stock; truth becomes polluted.",
            "Receiving is rushed; discrepancies are discovered late.",
            "Near-expiry stock is ignored until it becomes unsellable.",
            "Temperature checks (if needed) are 'paperwork,' not control.",
            "Space layout makes FEFO hard to execute."
        ],
        kpis: [
            "Expiry write-off value (monthly)",
            "Near-expiry value (30/60/90)",
            "Inventory accuracy % (count vs record)",
            "Stockout rate (Top 50/100)",
            "Days of stock on hand (overall + essentials)",
            "Dead stock % (60/90 days no movement)",
            "Receiving discrepancy rate (short/damaged/mismatch)",
            "Cycle count compliance %",
            "Returns resolution time (days)",
            "Temp excursion count (if applicable)"
        ],
        actions: [
            "P4_AS01 'Expiry Radar 30/60/90' (weekly review)",
            "P4_AS02 'FEFO Shelf Rules' (front earliest expiry; label near-expiry)",
            "P4_AS03 'Receiving Gate Checklist' (qty, condition, expiry, invoice match)",
            "P4_AS04 'ABC Cycle Count Rhythm' (A weekly, B monthly, C quarterly)",
            "P4_AS05 'Returns Quarantine Zone' (hold → decide → log)",
            "P4_AS06 'Essentials Min/Max Reorder Board'"
        ]
    },
    {
        id: "Leadership" as PillarId, // P5 Service Workflow & Structure (Mapped to Leadership)
        title: "Service Workflow & Error-Proof Operations",
        strengths: [
            "Staff use a simple accuracy routine (right item, right strength, right instructions).",
            "Look-alike products are separated to reduce wrong picks.",
            "Rush-hour roles are clear (cash vs selection vs packing).",
            "Instructions are consistent and simple; fewer misunderstandings.",
            "The counter area is organized; errors drop when things are tidy.",
            "Complaints and 'wrong sale' incidents are logged and reduced.",
            "Staff know when to pause and refer instead of guessing.",
            "Labels/signage reduce repeated questions and confusion.",
            "Handover between shifts includes key notes (stockouts, issues).",
            "The shop flow feels calm even when busy."
        ],
        shortcomings: [
            "Wrong picks happen because similar packs sit together.",
            "Instructions vary by staff; customers misuse products.",
            "Rush-hour service becomes chaos; errors multiply.",
            "No simple check routine; speed beats accuracy.",
            "Complaints are handled, but patterns aren't fixed.",
            "Counter is cluttered; staff lose time searching.",
            "Staff get interrupted constantly, increasing mistakes.",
            "Handover is casual; key issues repeat.",
            "Service depends on one strong staff member.",
            "Layout causes bottlenecks and confusion."
        ],
        kpis: [
            "Wrong-product incidents/month",
            "Instruction/confusion complaints/month",
            "Average service time (peak vs off-peak)",
            "Queue abandonment estimate (busy periods)",
            "Refunds due to wrong sale %",
            "Shift consistency score (manager observation)",
            "Handover compliance (notes captured)",
            "Shelf/label clarity score (spot audit)",
            "Rush-hour role clarity score",
            "Repeat customer rate"
        ],
        actions: [
            "P5_AS01 '3-Point Check' (product → strength/pack → instructions)",
            "P5_AS02 'Look-Alike Separation Labels' (simple shelf rules)",
            "P5_AS03 'Rush Hour Roles Script' (who does what, when to open second till)",
            "P5_AS04 'Counter 5S Reset' (daily 10-minute organization)",
            "P5_AS05 'Complaint Pattern Log → Weekly Fix'",
            "P5_AS06 'Shift Handover Note Card' (stockouts, expiries, incidents)"
        ]
    },
    {
        id: "Risk" as PillarId, // P6 Cash, Compliance & Controls
        title: "Cash, Compliance & Risk Controls",
        strengths: [
            "Daily cash reconciliation is routine; variances don't hide.",
            "Refunds/returns require verification; fraud is discouraged.",
            "High-risk items have tighter access control.",
            "Supplier invoices are checked against receiving.",
            "Documentation is organized enough for inspections/audits.",
            "Restricted items (where applicable) follow stricter handling rules.",
            "Incident logging exists (theft, temp issues, suspect stock).",
            "Exceptions require approval; staff know boundaries.",
            "Shrink is treated as a system issue, not just 'bad staff.'",
            "You can explain profit truth beyond daily sales."
        ],
        shortcomings: [
            "Cash variances are frequent and normalized.",
            "Refunds happen 'to keep peace,' attracting abuse.",
            "Invoice mismatches cause overpayment or missing stock.",
            "Restricted categories (where applicable) are handled casually.",
            "Documents are scattered; inspections create panic.",
            "High-value items are accessible without accountability.",
            "Shrink is blamed, not measured.",
            "Exceptions become routine; controls decay.",
            "Suspect stock incidents aren't documented.",
            "Losses hide inside 'miscellaneous.'"
        ],
        kpis: [
            "Daily cash variance (count + value)",
            "Refund/return rate + reasons",
            "Shrink estimate % (damage, theft, admin errors)",
            "Invoice mismatch rate (qty/price discrepancies)",
            "Exception approvals count (discounts/refunds)",
            "Restricted-item discrepancies (where applicable)",
            "Audit readiness checklist score",
            "Incident log closure rate",
            "Suspect stock occurrences",
            "Net profit after adjustments (simple estimate)"
        ],
        actions: [
            "P6_AS01 'Daily Cash Pack' (open/close counts + variance log + signoff)",
            "P6_AS02 'Refund/Return Ladder' (verify → reason → approval threshold)",
            "P6_AS03 'Receive–Match–Pay Rule' (don't pay what wasn't verified)",
            "P6_AS04 'High-Value Item Access Log' (keys, shelf control, weekly counts)",
            "P6_AS05 'Audit Binder Lite' (licenses, SOP cards, logs, supplier docs)",
            "P6_AS06 'Incident Log' (theft, suspect stock, excursions, complaints)"
        ]
    },
    {
        id: "People" as PillarId, // P7 Training & Improvement
        title: "People, Training & Continuous Improvement",
        strengths: [
            "Roles are clear; staff know 'what good looks like.'",
            "Training is practical and verified (observe + sign-off).",
            "SOP cards are visible and actually used.",
            "You cross-train so the shop doesn't collapse when one person is absent.",
            "Weekly mini-audits catch small problems early.",
            "Issues become actions with owners and deadlines.",
            "Staff are coached, not just corrected.",
            "Data is clean enough to support decisions (pricing, stock, refunds).",
            "You run a steady improvement rhythm (small fixes that compound).",
            "Culture feels respectful; customers sense stability."
        ],
        shortcomings: [
            "The shop depends on 'one strong person.'",
            "Training is shadowing only; bad habits spread.",
            "SOPs exist but aren't enforced, so drift happens.",
            "No skills coverage plan; absenteeism creates chaos.",
            "Problems repeat because nobody owns fixes.",
            "Audits happen only when someone is coming.",
            "Data is messy; decisions become feelings.",
            "Turnover resets capability often.",
            "Feedback is event-based, not routine.",
            "Standards collapse during rush hour."
        ],
        kpis: [
            "Training sign-off completion %",
            "SOP compliance score (spot audits)",
            "Skills coverage % (critical roles covered per shift)",
            "Action closure rate (actions closed / actions created)",
            "Repeat-issue rate (same issue recurring)",
            "Turnover rate",
            "Attendance reliability",
            "Weekly KPI review adherence",
            "Data error count (pricing/stock/refunds)",
            "Customer service consistency score"
        ],
        actions: [
            "P7_AS01 'Skills Mini-Matrix' (who can do what safely)",
            "P7_AS02 'SOP Cards at Stations' (cash, receiving, FEFO, refunds, service check)",
            "P7_AS03 'Weekly Mini-Audit Walk' (10 checks)",
            "P7_AS04 'Fix Loop Template' (issue → owner → deadline → verify)",
            "P7_AS05 'New Staff Onboarding Pack' (standards from day 1)",
            "P7_AS06 'Weekly Coaching Huddle (15 min)'"
        ]
    }
];

export const DRUG_SHOP_MISSION_BRIEFS = [
    {
        id: "trust_safety",
        title: "Mission: Trust & Safety",
        description: "Build a reputation for safe advice, not just sales.",
        pillar: "Market",
        leaks_fixed: ["referral_gap", "boundary_drift", "red_flag_miss"]
    },
    {
        id: "availability_control",
        title: "Mission: Availability Control",
        description: "Ensure top essentials are always in stock and easy to find.",
        pillar: "Innovation",
        leaks_fixed: ["essential_stockout", "cash_trap_slow_movers", "dead_stock_trap"]
    },
    {
        id: "profit_discipline",
        title: "Mission: Profit Discipline",
        description: "Stop discount drift and build ethical baskets.",
        pillar: "Money",
        leaks_fixed: ["discount_drift_smile", "pricing_confusion", "ethical_basket_void"]
    }
];
