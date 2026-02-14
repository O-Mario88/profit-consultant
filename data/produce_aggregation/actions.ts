

// Local definition for this pack's specific format
interface ActionSnippet {
    id: string;
    text: string;
    pillarId: string;
    type: string;
}

export const PRODUCE_AGGREGATION_ACTIONS: ActionSnippet[] = [
    // --- P1: Sourcing & Supplier Control (Mapped to Operations) ---
    {
        id: 'pa_action_approved_supplier',
        text: 'Approved Supplier + Spec Sheet per commodity (1 page).',
        pillarId: 'Operations',
        type: 'quick_win'
    },
    {
        id: 'pa_action_intake_gate',
        text: 'Intake gate rule: no weigh + no sample = no unloading.',
        pillarId: 'Operations',
        type: 'quick_win'
    },
    {
        id: 'pa_action_supplier_scorecard',
        text: 'Supplier scorecard updated weekly (5 metrics only).',
        pillarId: 'Operations',
        type: 'routine'
    },
    {
        id: 'pa_action_payment_control',
        text: 'Two-person payment control (buyer requests, finance releases).',
        pillarId: 'Operations',
        type: 'quick_win'
    },
    {
        id: 'pa_action_mix_lot_penalty',
        text: '"Mix-lot penalty" pricing to discourage mixed grades.',
        pillarId: 'Operations',
        type: 'strategic'
    },
    {
        id: 'pa_action_season_map',
        text: 'Season supply map (who supplies what, when, expected volume).',
        pillarId: 'Operations',
        type: 'strategic'
    },
    {
        id: 'pa_action_supplier_coaching',
        text: 'Supplier quality coaching (top 10 suppliers get 30-min feedback call).',
        pillarId: 'Operations',
        type: 'routine'
    },
    {
        id: 'pa_action_blacklist',
        text: 'Blacklist rules (repeat fraud, repeated contaminants, repeat short-weights).',
        pillarId: 'Operations',
        type: 'quick_win'
    },

    // --- P2: Quality, Grading & Claims Control (Mapped to Innovation/Standardization) ---
    {
        id: 'pa_action_grade_cards',
        text: 'Grade cards at intake (laminated).',
        pillarId: 'Innovation',
        type: 'quick_win'
    },
    {
        id: 'pa_action_sampling_sop',
        text: 'Sampling SOP (where/how many points per load).',
        pillarId: 'Innovation',
        type: 'routine'
    },
    {
        id: 'pa_action_test_logbook',
        text: 'Test logbook (date, lot, result, decision).',
        pillarId: 'Innovation',
        type: 'routine'
    },
    {
        id: 'pa_action_lot_labels',
        text: 'Lot labels (commodity, grade, supplier, date, location).',
        pillarId: 'Innovation',
        type: 'routine'
    },
    {
        id: 'pa_action_claims_kit',
        text: 'Claims kit: photos, temp logs, weigh tickets, lot code evidence.',
        pillarId: 'Innovation',
        type: 'quick_win'
    },
    {
        id: 'pa_action_rework_sep',
        text: 'Rework zone separate from premium zone.',
        pillarId: 'Innovation',
        type: 'quick_win'
    },
    {
        id: 'pa_action_cleaning_checklist',
        text: 'Daily cleaning checklist (zones + frequency).',
        pillarId: 'Innovation',
        type: 'routine'
    },

    // --- P3: Logistics, Storage & Cold Chain (Mapped to Operations) ---
    {
        id: 'pa_action_no_idle',
        text: '"No idle produce" rule: clock starts at receiving.',
        pillarId: 'Operations',
        type: 'quick_win'
    },
    {
        id: 'pa_action_temp_logs',
        text: 'Temp/humidity logs (simple, daily).',
        pillarId: 'Operations',
        type: 'routine'
    },
    {
        id: 'pa_action_dock_schedule',
        text: 'Dock schedule to reduce queues.',
        pillarId: 'Operations',
        type: 'routine'
    },
    {
        id: 'pa_action_carrier_scorecard',
        text: 'Carrier scorecard (damage + on-time).',
        pillarId: 'Operations',
        type: 'routine'
    },
    {
        id: 'pa_action_pkg_specs',
        text: 'Standard packaging specs (stack height, liners, ventilation).',
        pillarId: 'Operations',
        type: 'strategic'
    },
    {
        id: 'pa_action_emerg_cold',
        text: 'Emergency cold-chain protocol (generator, ice packs, rerouting).',
        pillarId: 'Operations',
        type: 'strategic'
    },

    // --- P4: Sales Execution & Market Access (Mapped to Market) ---
    {
        id: 'pa_action_buyer_specs',
        text: 'Buyer spec sheet (must-have, nice-to-have, reject triggers).',
        pillarId: 'Market',
        type: 'quick_win'
    },
    {
        id: 'pa_action_price_lists',
        text: 'Two price lists: floor price + target price by grade/channel.',
        pillarId: 'Market',
        type: 'quick_win'
    },
    {
        id: 'pa_action_weekly_demand',
        text: 'Weekly demand call routine with top buyers.',
        pillarId: 'Market',
        type: 'routine'
    },
    {
        id: 'pa_action_service_score',
        text: 'Service-level scoreboard visible to team.',
        pillarId: 'Market',
        type: 'routine'
    },
    {
        id: 'pa_action_simple_crm',
        text: 'Simple CRM (even spreadsheet) with next action dates.',
        pillarId: 'Market',
        type: 'strategic'
    },

    // --- P5: Pricing, Margin & Deal Discipline (Mapped to Money) ---
    {
        id: 'pa_action_deal_calc',
        text: '1-page deal calculator (inputs: cost, shrink, freight, margin).',
        pillarId: 'Money',
        type: 'quick_win'
    },
    {
        id: 'pa_action_margin_floor',
        text: 'Minimum margin floor per grade/channel.',
        pillarId: 'Money',
        type: 'strategic'
    },
    {
        id: 'pa_action_discount_codes',
        text: 'Discount reason codes (damage, volume, loyalty, clearance).',
        pillarId: 'Money',
        type: 'routine'
    },
    {
        id: 'pa_action_stop_loss',
        text: 'Stop-loss rule: if market drops X%, reprice within 24 hours.',
        pillarId: 'Money',
        type: 'quick_win'
    },

    // --- P6: Cashflow & Working Capital (Mapped to Money) ---
    {
        id: 'pa_action_cash_war_room',
        text: 'Daily cash war-room (15 minutes).',
        pillarId: 'Money',
        type: 'routine'
    },
    {
        id: 'pa_action_inv_speed',
        text: 'Invoice within 2 hours of dispatch.',
        pillarId: 'Money',
        type: 'quick_win'
    },
    {
        id: 'pa_action_credit_file',
        text: 'Credit limit file per buyer (simple).',
        pillarId: 'Money',
        type: 'routine'
    },
    {
        id: 'pa_action_collections_script',
        text: 'Collections script + escalation ladder.',
        pillarId: 'Money',
        type: 'quick_win'
    },
    {
        id: 'pa_action_dispute_pack',
        text: 'Dispute evidence pack (weigh tickets, lot code, temp log).',
        pillarId: 'Money',
        type: 'strategic'
    },

    // --- P7: Inventory, Shrink & Loss Control (Mapped to Operations) ---
    {
        id: 'pa_action_lot_map',
        text: 'Lot-location map in warehouse.',
        pillarId: 'Operations',
        type: 'quick_win'
    },
    {
        id: 'pa_action_3_point_weight',
        text: '3-point weight control: entry, post-grading, dispatch.',
        pillarId: 'Operations',
        type: 'process'
    },
    {
        id: 'pa_action_shrink_board',
        text: 'Daily "shrink board" (yesterday’s loss in kg + $).',
        pillarId: 'Operations',
        type: 'routine'
    },
    {
        id: 'pa_action_exception_approval',
        text: 'Exception approvals for any manual adjustment.',
        pillarId: 'Operations',
        type: 'routine'
    },

    // --- P8: People, Roles, Productivity & Incentives (Mapped to People) ---
    {
        id: 'pa_action_raci',
        text: 'RACI chart for core processes.',
        pillarId: 'People',
        type: 'strategic'
    },
    {
        id: 'pa_action_dual_control',
        text: 'Two-person controls on weights + payments.',
        pillarId: 'People',
        type: 'quick_win'
    },
    {
        id: 'pa_action_kpi_huddle',
        text: 'Weekly KPI huddle (30 minutes).',
        pillarId: 'People',
        type: 'routine'
    },
    {
        id: 'pa_action_micro_train',
        text: 'Micro-training (10 minutes/day: grading, hygiene, handling).',
        pillarId: 'People',
        type: 'routine'
    },

    // --- P9: Compliance, Traceability & Risk (Mapped to Risk) ---
    {
        id: 'pa_action_lot_sop',
        text: 'Lot coding SOP + minimum required fields.',
        pillarId: 'Risk',
        type: 'quick_win'
    },
    {
        id: 'pa_action_record_retention',
        text: 'Record retention folder structure (physical + digital).',
        pillarId: 'Risk',
        type: 'routine'
    },
    {
        id: 'pa_action_mock_recall',
        text: 'Mock recall drill monthly.',
        pillarId: 'Risk',
        type: 'strategic'
    },
    {
        id: 'pa_action_incoterms',
        text: 'Incoterms checklist per trade lane (who pays/owns risk when).',
        pillarId: 'Risk',
        type: 'quick_win'
    }
];

export const PRODUCE_AGGREGATION_FIX_PLANS = [
    {
        id: 'pa_7_day_stabilize',
        title: '7-Day "Stabilize Profit" Plan',
        description: 'Goal: stop bleeding from shrink, bad deals, slow cash, and uncontrolled intake.',
        pillars: ['Operations', 'Money'],
        days: [
            { day: 1, title: 'Day 1 — Put a "Profit Gate" at Receiving', action: 'Enforce: no weigh + no sample + no decision = no unload. Start 3 logs (paper or phone): Weight ticket, Quality test, Supplier. Output: one-page receiving SOP + log template.' },
            { day: 2, title: 'Day 2 — Build a Simple Grade Standard + Price Ladder', action: 'Define 3–5 grades max per commodity (photo examples). Set floor price + target price per grade. Output: grade card + price ladder posted at buying point.' },
            { day: 3, title: 'Day 3 — Start Shrink Measurement', action: 'Track weight at: intake → post-sort → dispatch. Categorize loss: damage, decay, spillage, theft, rework, moisture change. Output: "Shrink Board" showing kg + $ lost yesterday.' },
            { day: 4, title: 'Day 4 — Stop Bad Deals with a Deal Calculator', action: 'Create a 1-page calculator: cost + shrink + freight + margin floor. Require approval for discounts below floor. Output: deal rule + approval flow (even WhatsApp screenshots count).' },
            { day: 5, title: 'Day 5 — Cash War-Room', action: 'Invoice within same day (ideally within hours). Call top 10 overdue buyers with a script + payment dates. Output: AR list with promised dates + escalation ladder.' },
            { day: 6, title: 'Day 6 — Logistics Discipline', action: 'Schedule receiving/dispatch windows. Score carriers (damage + on-time). Output: dock schedule + carrier scorecard v1.' },
            { day: 7, title: 'Day 7 — Supplier Cleanup & Control', action: 'Rank suppliers by usable yield and dispute rate. Remove or penalize bottom performers. Output: approved supplier list + scorecard + penalty rules.' }
        ]
    },
    {
        id: 'pa_30_day_build_control',
        title: '30-Day "Build Control" Plan',
        description: 'System wins for process, measurement, contracts, and cash.',
        pillars: ['Operations', 'Money', 'Risk', 'People'],
        days: [
            { day: 1, title: 'Week 1 — Process + Measurement Foundation', action: 'SOPs: receiving, grading, storage, dispatch, claims. Dashboards: margin by grade/channel, shrink %, DSO, rejection rate. Assign owners for each KPI.' },
            { day: 8, title: 'Week 2 — Contracts + Compliance Upgrade', action: 'Supplier agreements: specs, penalties, payment terms, fraud triggers. Buyer agreements: specs, acceptance windows, claims rules, Incoterms clarity. Traceability minimum: lot code + one-step back/forward records.' },
            { day: 15, title: 'Week 3 — Inventory + Cash System', action: 'Cycle count routine + reconciliation. Credit limits + collections cadence. Cash forecast (weekly rolling 4 weeks).' },
            { day: 22, title: 'Week 4 — Optimize + Scale', action: 'Reduce dwell time (queue redesign, staffing, equipment). Cold chain improvements where needed (pre-cool, temp logs, handling discipline). Training & incentive alignment (reward margin + compliance).' }
        ]
    }
];
