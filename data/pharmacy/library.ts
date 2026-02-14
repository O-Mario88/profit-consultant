import { PillarId } from '../../types/core';

export const PHARMACY_PILLARS = [
    {
        id: "Market" as PillarId, // P1 Clinical Care (Customer Interface)
        title: "Clinical Care & Patient Outcomes",
        strengths: [
            "You don’t just sell medicines—you translate them into safe daily routines.",
            "Your counseling is consistent across shifts, not personality-based.",
            "You document meaningful interventions, creating continuity.",
            "Patients trust you with sensitive questions because privacy is protected.",
            "You proactively spot therapy risks and act within scope.",
            "You keep referrals clear—patients know when escalation is needed.",
            "You’re calm under pressure; safety doesn’t disappear during rush hour.",
            "You reduce repeat confusion by using simple, standard language.",
            "You build adherence habits with refill reminders and regimen prompts.",
            "You handle complaints as learning loops, not blame events.",
            "Your team knows the 'why,' not just the 'what' of care.",
            "Your brand is trust—patients return even when competitors discount."
        ],
        shortcomings: [
            "Counseling quality depends on who is on duty.",
            "Privacy is 'best effort,' not designed into workflow.",
            "Clinical interventions happen, but aren’t captured—value disappears.",
            "Rush hours become shortcut hours.",
            "Patients leave with instructions but not understanding.",
            "Follow-up is inconsistent; chronic patients drift away.",
            "Complaints repeat because root causes aren’t fixed.",
            "Staff avoid hard questions instead of escalating appropriately.",
            "Documentation is too thin to defend decisions.",
            "Trust is fragile because pricing changes aren’t explained.",
            "Service feels transactional, not clinical.",
            "The pharmacy relies on one 'hero pharmacist' for all care."
        ],
        kpis: [
            "Counseling compliance score",
            "Repeat/refill rate",
            "Patient satisfaction",
            "Complaint resolution time",
            "Documented clinical interventions/week",
            "Adherence-support enrollments"
        ],
        actions: [
            "P1_AS01 'Counseling Micro-Scripts' — standard top 30 therapy points.",
            "P1_AS02 'Privacy-by-Design' — queue cue and corner setup.",
            "P1_AS03 'Adherence Ladder' — refill reminder workflow.",
            "P1_AS04 'Clinical Intervention Log' — capture value of safety catches."
        ]
    },
    {
        id: "Innovation" as PillarId, // P2 Formulary & Sourcing
        title: "Formulary, Sourcing & Product Integrity",
        strengths: [
            "Essential medicines are protected; continuity is intentional.",
            "Supplier reliability is measured, not guessed.",
            "You have substitution rules that preserve outcomes and trust.",
            "Suspect stock is quarantined—integrity is non-negotiable.",
            "Your assortment fits your community’s real demand.",
            "You delist slow movers before they become expiry losses.",
            "Your receiving gate catches short deliveries and damaged packs.",
            "You maintain clean item master data.",
            "You manage seasonal demand proactively.",
            "You avoid 'deal buying' without a sell-through plan.",
            "You prioritize reputable sourcing pathways.",
            "You know which categories drive traffic vs profit."
        ],
        shortcomings: [
            "Assortment is historical; shelves keep growing.",
            "Deal buying drives overstock and expiry.",
            "Essentials stock out while slow movers sit.",
            "Substitution is inconsistent; patients get confused.",
            "Supplier issues repeat because they aren’t scored.",
            "Receiving is rushed; problems enter the system.",
            "Quarantine shelf is missing; suspect stock mixes with good stock.",
            "Too many similar SKUs trap cash.",
            "Seasonal peaks surprise you each year.",
            "Item master data is messy; pricing and ordering drift.",
            "Procurement becomes 'whatever is available.'",
            "Product integrity checks are informal."
        ],
        kpis: [
            "Essential availability %",
            "Supplier fill rate",
            "Lead time reliability",
            "Suspect stock incidents",
            "SKU productivity",
            "Category contribution margin"
        ],
        actions: [
            "P2_AS01 'Essential List' — Top 100 never-out listing.",
            "P2_AS02 'Supplier Scorecard' — track fill rate and errors.",
            "P2_AS03 'Quarantine Protocol' — isolate suspect stock immediately.",
            "P2_AS04 'Substitution Rules' — standard generic switching logic."
        ]
    },
    {
        id: "Money" as PillarId, // P3 Revenue Engine
        title: "Revenue Engine & Basket Ethics",
        strengths: [
            "Prices are stable and transparent—trust is protected.",
            "Discounting follows rules and reason codes.",
            "Claims/reimbursement workflows are clean and disciplined.",
            "Denials are analyzed and reduced, not tolerated.",
            "Basket growth is ethical—aligned with patient needs.",
            "Category margins are known, not guessed.",
            "Cost changes are updated quickly to prevent selling at a loss.",
            "Refunds/credits are controlled and audited.",
            "Services revenue is developed where allowed.",
            "Promotions are measured for sell-through.",
            "Staff can explain value options confidently.",
            "Net profit truth is visible after adjustments."
        ],
        shortcomings: [
            "Discounts are frequent and invisible in reporting.",
            "Price overrides are common; margin bleeds.",
            "Denials repeat due to avoidable errors.",
            "Basket add-ons feel pushy, reducing trust.",
            "Margin by category is unknown.",
            "Cost updates lag; losses hide in plain sight.",
            "Refunds are too easy; fraud risk rises.",
            "Promotions create leftovers and expiry.",
            "Service revenue is ignored.",
            "Pricing varies by staff member.",
            "Credit notes aren’t reconciled.",
            "Sales volume is celebrated while profit falls."
        ],
        kpis: [
            "Gross margin % by category",
            "Discount override rate",
            "Average basket value",
            "Items/transaction",
            "Claims acceptance rate",
            "Rejection reasons distribution"
        ],
        actions: [
            "P3_AS01 'Price Corridor Rules' — margin floors and approvals.",
            "P3_AS02 'Claims Denial Playbook' — fix top 10 reasons.",
            "P3_AS03 'Ethical Basket Builders' — care kits, not pushy sales.",
            "P3_AS04 'Professional Services Menu' — clinical fee-for-service."
        ]
    },
    {
        id: "Operations" as PillarId, // P4 Inventory & Cold Chain (Logistics)
        title: "Inventory, Cold Chain & Traceability",
        strengths: [
            "Traceability is tight—you know where every batch is.",
            "Cold chain is unbroken; excursions are documented.",
            "FEFO is the rule; expiry is minimized.",
            "Inventory accuracy is high; what the system says is on the shelf.",
            "Dead stock is purged regularly.",
            "Stock counts are routine, not annual panic events.",
            "Storage conditions (temp/humidity) are monitored 24/7.",
            "Returns are processed quickly to unlock cash.",
            "Stock rotation is disciplined.",
            "High-value items have extra controls.",
            "Ordering parameters are data-driven, not guessed.",
            "Waste is costed and tracked."
        ],
        shortcomings: [
            "Expiry is a surprise; profits die on the shelf.",
            "Cold chain gaps are ignored; potency is compromised.",
            "System stock vs physical stock never matches (ghost inventory).",
            "Ordering is reactive; panic buying standard.",
            "Dead stock eats cash and space.",
            "Batch tracking is missing; recalls would be a nightmare.",
            "Storage temps drift without action.",
            "Returns pile up in the back room.",
            "Rotation is forgotten during rush.",
            "High-value theft is hidden by 'shrink' normalization.",
            "Stockouts of essentials drive customers away.",
            "Waste is hidden or unrecorded."
        ],
        kpis: [
            "Expiry write-off value",
            "FEFO audit score",
            "Inventory accuracy %",
            "Stockout rate (Top 100)",
            "Cold chain excursion count",
            "Dead stock %"
        ],
        actions: [
            "P4_AS01 'Expiry Radar' — 30/60/90 day visibility.",
            "P4_AS02 'FEFO Picking Rules' — fronting discipline.",
            "P4_AS03 'Temp Excursion SOP' — detect, isolate, document.",
            "P4_AS04 'Cycle Count Rhythm' — weekly A-item checks."
        ]
    },
    {
        id: "Risk" as PillarId, // P5 Dispensing Accuracy
        title: "Dispensing Accuracy & Workflow Excellence",
        strengths: [
            "Dispensing is error-proofed with standard checks.",
            "LASA (Look-Alike, Sound-Alike) risks are marked and managed.",
            "Near-misses are shared as learning, not hidden.",
            "Final verification happens even in rush hour.",
            "Workflow separation prevents cross-contamination and errors.",
            "Labelling is clear, legally compliant, and patient-friendly.",
            "Documentation of the dispensing process is traceable.",
            "Staff are authorized only for tasks they are competent in.",
            "Distractions are minimized during critical checking.",
            "Robotic/automated aids are verified regularily (if used).",
            "Error reporting is blame-free and root-cause focused.",
            "Speed never compromises safety."
        ],
        shortcomings: [
            "Dispensing errors happen and are hushed up.",
            "LASA drugs are mixed on shelves.",
            "Near-misses are ignored; 'no harm, no foul' culture.",
            "Final checks are skipped when busy.",
            "Workflow is chaotic; steps are skipped.",
            "Labels are slapped on crooked or missing warnings.",
            "Traceability of 'who dispensed this' is missing.",
            "Unqualified staff perform critical checks.",
            "Mobile phones and chatter distract during dispensing.",
            "Automation is trusted blindly without checks.",
            "Mistakes lead to shouting, not fixing systems.",
            "Speed is valued over accuracy."
        ],
        kpis: [
            "Dispensing error rate",
            "Near-miss capture rate",
            "Final check compliance",
            "LASA audit score",
            "Avg Rx turnaround time",
            "Label accuracy audit"
        ],
        actions: [
            "P5_AS01 '7-Step Dispensing Checklist' — standard flow.",
            "P5_AS02 'LASA Controls' — separation and alerts.",
            "P5_AS03 'Near-Miss Log' — weekly learning review.",
            "P5_AS04 'Final Verify' — mandatory independent check."
        ]
    },
    {
        id: "Leadership" as PillarId, // P6 Governance & Compliance
        title: "Governance, Compliance & Risk Controls",
        strengths: [
            "Controlled medicines are governed with strict accuracy.",
            "Audits are routine—you are always 'inspection ready'.",
            "Fraud prevention is active (script verification).",
            "Incident logs are kept and reviewed honestly.",
            "Pharmacovigilance pathways are clear and used.",
            "Licenses and regulatory filings are proactive.",
            "SOPs are live documents, not dusty binders.",
            "Risk assessments cover new services or flows.",
            "Data privacy governance is strict.",
            "Ethics are clear—no 'grey market' sourcing.",
            "Discrepancies are escalated immediately.",
            "Compliance is part of the culture, not a fear."
        ],
        shortcomings: [
            "Controlled meds counts drift; discrepancy is normal.",
            "Audits are panic clean-up events.",
            "Fraud checks are weak; fake scripts slip through.",
            "Incidents are hidden to avoid trouble.",
            "Adverse events are never reported (PV silence).",
            "Licenses expire; regulatory fines happen.",
            "SOPs don't exist or don't match reality.",
            "New risks (e.g., delivery) are ignored.",
            "Patient data is left exposed.",
            "Sourcing cuts ethical corners.",
            "Discrepancies are buried.",
            "Compliance is seen as a nuisance."
        ],
        kpis: [
            "Refund/returns rate",
            "Controlled meds discrepancy count",
            "Audit readiness score",
            "Incident log closure rate",
            "Invoice mismatch rate"
        ],
        actions: [
            "P6_AS01 'Controlled Meds Pack' — logs and escalation.",
            "P6_AS02 'Audit Binder Lite' — ready for inspection.",
            "P6_AS03 'Returns Approval Ladder' — fraud control.",
            "P6_AS04 'PV Pathway' — adverse event reporting."
        ]
    },
    {
        id: "People" as PillarId, // P7 People & QMS
        title: "People, Quality System & CI",
        strengths: [
            "Competency is verified—staff only do what they know.",
            "SOPs are trained, signed off, and followed.",
            "KPIs are reviewed weekly to drive improvement.",
            "Continuous improvement (CI) is a team habit.",
            "Onboarding is structured and safety-focused.",
            "Roles are clear; everyone knows their station.",
            "Feedback is frequent and constructive.",
            "Quality System (QMS) is light but effective.",
            "Staff retention is high; culture is professional.",
            "Training is continuous, not just one-off.",
            "Meetings lead to decisions and actions.",
            "The team owns the quality results."
        ],
        shortcomings: [
            "Staff do tasks they aren't trained for (risk).",
            "SOPs are ignored; everyone does it their way.",
            "KPIs are unknown or ignored.",
            "Mistakes repeat; nothing improves.",
            "Onboarding is 'sink or swim'.",
            "Role confusion; 'that's not my job'.",
            "Feedback is only for errors.",
            "No Quality System; fires are fought daily.",
            "Turnover is high; knowledge leaves.",
            "Training is non-existent.",
            "Meetings are talk-fests with no action.",
            "Quality is the 'manager's problem'."
        ],
        kpis: [
            "Training sign-off completion",
            "SOP audit score",
            "Skills matrix coverage",
            "Action closure rate",
            "Turnover rate",
            "Weekly KPI review adherence"
        ],
        actions: [
            "P7_AS01 'Skills Matrix' — who can do what safely.",
            "P7_AS02 'Station SOP Cards' — visual aids at work.",
            "P7_AS03 'Weekly Mini-Audit' — 10-check random sample.",
            "P7_AS04 'Weekly KPI Review' — 45-min team pulse."
        ]
    }
];

export const PHARMACY_MISSION_BRIEFS = [
    {
        id: "clinical_trust",
        title: "Mission: Clinical Trust Engine",
        description: "Move from 'selling pills' to 'selling outcomes'.",
        pillar: "Market",
        leaks_fixed: ["counseling_gap", "trust_erosion", "refill_leakage"]
    },
    {
        id: "cold_chain_integrity",
        title: "Mission: Cold Chain Integrity",
        description: "Ensure 100% potency protection from fridge to patient.",
        pillar: "Operations",
        leaks_fixed: ["cold_chain_drift", "waste_not_costed", "margin_mirage"]
    },
    {
        id: "revenue_defense",
        title: "Mission: Revenue Defense",
        description: "Plug the leaks in claims, pricing, and expirations.",
        pillar: "Money",
        leaks_fixed: ["claim_rejection_waterfall", "expiry_profit_leak", "discount_drift_theft"]
    }
];
