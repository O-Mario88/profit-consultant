
export interface ExportActionSnippet {
    id: string;
    text: string;
    pillarId: string;
    type: 'quick_win' | 'routine' | 'strategic' | 'process';
}

export interface ExportFixPlanDay {
    day: number;
    title: string;
    action: string;
}

export interface ExportFixPlan {
    id: string;
    title: string;
    description: string;
    pillars: string[];
    days: ExportFixPlanDay[];
}

export const EXPORT_PRODUCE_ACTIONS: ExportActionSnippet[] = [
    // --- A) Buyer / Contract Control → Market ---
    { id: 'ex_action_spec_sheet', text: 'Buyer Spec Sheet Lock (1-pager): product, grade, size, defects, residues, packaging, labeling, temp, shelf-life, inspection method, claim window.', pillarId: 'Market', type: 'quick_win' },
    { id: 'ex_action_incoterms_map', text: 'Incoterms + Risk Map per route: risk transfer point, who books carrier, who insures, who clears customs.', pillarId: 'Market', type: 'strategic' },
    { id: 'ex_action_claims_clause', text: 'Claims Prevention Clause Set: photo evidence rules, sampling method, timelines, independent survey option.', pillarId: 'Market', type: 'quick_win' },
    { id: 'ex_action_price_formula', text: 'Price Formula Guardrail: base price + quality premium/penalty + FX reference rate + revision triggers.', pillarId: 'Market', type: 'strategic' },

    // --- B) Supply & Procurement Control → Operations ---
    { id: 'ex_action_asl', text: 'Approved Supplier List (ASL) with scoring: reliability, compliance, defect rate, traceability, on-time fill.', pillarId: 'Operations', type: 'routine' },
    { id: 'ex_action_harvest_calendar', text: 'Harvest-to-Dispatch Calendar: weekly volume forecast, buffer %, alternate suppliers.', pillarId: 'Operations', type: 'strategic' },
    { id: 'ex_action_side_selling', text: 'Side-Selling Prevention: partial prepayments tied to delivery + transparent grade rules + fast payouts for compliance.', pillarId: 'Operations', type: 'strategic' },

    // --- C) Quality / Food Safety / Traceability → Innovation ---
    { id: 'ex_action_inbound_gate', text: 'Inbound Inspection Gate: accept / downgrade / reject rules; quarantine area for "hold & test".', pillarId: 'Innovation', type: 'quick_win' },
    { id: 'ex_action_lot_coding', text: 'Lot Coding Standard: supplier-date-field-batch code; printed on cartons; logged digitally.', pillarId: 'Innovation', type: 'routine' },
    { id: 'ex_action_temp_hygiene', text: 'Temperature & Hygiene Log: packing room temp, pre-cool temp, truck temp, container set-point, seal number.', pillarId: 'Innovation', type: 'routine' },
    { id: 'ex_action_capa_loop', text: 'Corrective Action Loop: top 3 defects weekly → root cause → supplier coaching → re-test.', pillarId: 'Innovation', type: 'routine' },

    // --- D) Packaging / Labeling → People ---
    { id: 'ex_action_pkg_dashboard', text: 'Packaging Cost-per-Kg Dashboard (carton, liner, label, tape) with target thresholds.', pillarId: 'People', type: 'routine' },
    { id: 'ex_action_label_checklist', text: 'Label Compliance Checklist: origin, variety, pack date, lot code, handling marks, importer info (market-specific).', pillarId: 'People', type: 'quick_win' },
    { id: 'ex_action_packhouse_flow', text: 'Packhouse Flow Layout: dirty→clean zoning, minimize bruising, reduce re-handling.', pillarId: 'People', type: 'strategic' },

    // --- E) Logistics / Cold Chain → Leadership ---
    { id: 'ex_action_3pl_scorecard', text: '3PL Scorecard: on-time pickup, temp compliance, damage claims, documentation reliability.', pillarId: 'Leadership', type: 'routine' },
    { id: 'ex_action_precool_sop', text: 'Pre-cool SOP: time-to-pre-cool target; pallets staged; airflow gaps; "no hot loading."', pillarId: 'Leadership', type: 'quick_win' },
    { id: 'ex_action_container_plan', text: 'Container Load Plan: pallet pattern, ventilation spacing, humidity control notes, dunnage.', pillarId: 'Leadership', type: 'strategic' },

    // --- F) Customs / Docs / Compliance → Risk ---
    { id: 'ex_action_doc_template', text: 'Document Pack Template: invoice, packing list, transport doc, origin docs, permits/certs, insurance cert.', pillarId: 'Risk', type: 'quick_win' },
    { id: 'ex_action_phyto_workflow', text: 'Phytosanitary Workflow: inspection booking → treatment if needed → certificate issuance → attach to doc pack.', pillarId: 'Risk', type: 'routine' },
    { id: 'ex_action_discrepancy_proof', text: 'Discrepancy Proofing (LC-ready): names, dates, weights, HS codes, ports, Incoterms, signatures match exactly.', pillarId: 'Risk', type: 'quick_win' },

    // --- G) Finance / FX / Cashflow → Money ---
    { id: 'ex_action_margin_waterfall', text: 'Margin Waterfall per shipment: farmgate → pack → inland logistics → docs → freight → finance cost → FX → net.', pillarId: 'Money', type: 'routine' },
    { id: 'ex_action_payment_ladder', text: 'Payment Term Ladder: new buyer = partial prepay / CAD; trusted = net terms; high volume = LC/guarantees.', pillarId: 'Money', type: 'strategic' },
    { id: 'ex_action_fx_rule', text: 'FX Rule: set pricing currency; define hedge/hold policy; use "rate buffer" for quotes.', pillarId: 'Money', type: 'strategic' }
];

export const EXPORT_PRODUCE_FIX_PLANS: ExportFixPlan[] = [
    {
        id: 'ex_7_day_stabilize',
        title: '7-Day "Stabilize Profit" Plan',
        description: 'Stop the bleeding: claim risk, doc errors, freight surprises, grade slippage.',
        pillars: ['Market', 'Money', 'Risk', 'Innovation'],
        days: [
            { day: 1, title: 'Day 1 — Margin Reality Check', action: 'Build a 1-page margin waterfall for last 10 shipments. Identify top 3 leak lines (often freight, grade downgrades, wastage, doc penalties).' },
            { day: 2, title: 'Day 2 — Spec & Contract Lock', action: 'Create/refresh buyer spec sheet + "no spec change without written confirmation." Add a simple claims evidence protocol (photos + timestamp + sampling method).' },
            { day: 3, title: 'Day 3 — Quality Gate', action: 'Implement inbound inspection gate: accept/downgrade/reject + quarantine. Start defect tracker: bruising, rot, size variance, contamination, moisture.' },
            { day: 4, title: 'Day 4 — Cold Chain Minimum Standard', action: 'Enforce no hot loading + basic temperature logs (truck + staging + container set-point). Define max minutes from harvest/receipt to pre-cool (by crop).' },
            { day: 5, title: 'Day 5 — Document Pack Standard', action: 'Use a single document pack template; one owner; one final "discrepancy proofing" step. Build a "common errors" list (names, weights, HS code, port codes, dates).' },
            { day: 6, title: 'Day 6 — Incoterms Clarity', action: 'For each buyer route, write: Incoterm, who pays freight, who insures, who clears. Stop selling on Incoterms you can\'t operationally execute.' },
            { day: 7, title: 'Day 7 — Supplier Reliability', action: 'Create a mini Approved Supplier List with 3 scores: on-time fill, defect %, traceability completeness. Drop/limit the worst offender for 2 weeks; shift volume to reliable sources.' }
        ]
    },
    {
        id: 'ex_30_day_build_control',
        title: '30-Day "Build Control" Plan',
        description: 'System wins for process, measurement, contracts, and cash.',
        pillars: ['Operations', 'Money', 'Risk', 'People', 'Leadership'],
        days: [
            { day: 1, title: 'Week 1 — Standardize the Core', action: 'ASL + supplier contracts + traceability lot coding. Buyer spec sheets for top 5 buyers + unified claim rules.' },
            { day: 8, title: 'Week 2 — Process & Training', action: 'Packhouse SOPs: handling, grading, hygiene zoning. QC sampling plan + corrective actions (weekly).' },
            { day: 15, title: 'Week 3 — Logistics Excellence', action: '3PL scorecard + cold chain SOP + container load plan. Route playbooks (airport/port-specific timing, cutoffs, typical delays).' },
            { day: 22, title: 'Week 4 — Finance & Scale', action: 'Shipment P&L template + cashflow forecast (30/60/90 days). Payment term ladder + LC document discipline. Launch monthly KPI review: defects, claims, on-time, net margin, cash conversion.' }
        ]
    }
];
