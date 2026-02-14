import { QuestionDefinition } from "../../types";

export const RETAIL_QUESTIONS: QuestionDefinition[] = [
    {
        qid: "retail_obs_01",
        industry: "retail",
        pillar: "Market",
        line_type: ["Store"],
        signal_tags: ["staff_avoidance", "service_inconsistency"],
        weight: 1.0,
        textA: "Service depends on who is on shift; it varies.",
        textB: "Service is standardized across all shifts (greeting, help, close)."
    },
    {
        qid: "retail_obs_02",
        industry: "retail",
        pillar: "Market",
        line_type: ["Store"],
        signal_tags: ["stockout_ghost", "inventory_blindness"],
        weight: 1.0,
        textA: "We react to stockouts when the shelf is empty.",
        textB: "We rarely stock out because we use auto-reorder or safety stock."
    },
    {
        qid: "retail_obs_03",
        industry: "retail",
        pillar: "Money",
        line_type: ["Store"],
        signal_tags: ["shelf_price_mismatch", "trust_leak"],
        weight: 1.0,
        textA: "We fix price mismatches only when customers complain.",
        textB: "We verify shelf prices against the till weekly (or use ESL)."
    },
    {
        qid: "retail_obs_04",
        industry: "retail",
        pillar: "Money",
        line_type: ["Store"],
        signal_tags: ["shrink_normalization", "margin_blindness"],
        weight: 1.0,
        textA: "We know total loss but not the details (theft vs damage vs expiry).",
        textB: "We track shrink separately by category (theft, damage, expiry)."
    },
    {
        qid: "retail_obs_05",
        industry: "retail",
        pillar: "Operations",
        line_type: ["Store"],
        signal_tags: ["receiving_blindness", "receiving_error_gap"],
        weight: 1.0,
        textA: "We spot check receiving or trust the delivery note.",
        textB: "We check receiving 100% against PO (blind count) before signing."
    },
    {
        qid: "retail_obs_06",
        industry: "retail",
        pillar: "Operations",
        line_type: ["Store"],
        signal_tags: ["queue_churn"],
        weight: 1.0,
        textA: "Staff react slowly to queues or the manager has to call for help.",
        textB: "We have an automatic trigger to open new registers (e.g. '3 in line')."
    },
    {
        qid: "retail_obs_07",
        industry: "retail",
        pillar: "People",
        line_type: ["Store"],
        signal_tags: ["cleanliness_unowned", "role_clarity_gap", "hero_dependency"],
        weight: 1.0,
        textA: "Roles are loose; everyone does everything.",
        textB: "Every aisle and shelf has a specific owner."
    },
    {
        qid: "retail_obs_08",
        industry: "retail",
        pillar: "People",
        line_type: ["Store"],
        signal_tags: ["shrink_normalization", "culture_of_excuses"],
        weight: 1.0,
        textA: "We suspect internal theft but usually can't prove it.",
        textB: "We have a strict culture with anonymous reporting and clear consequences."
    },
    {
        qid: "retail_ds_ops_1",
        industry: "retail",
        pillar: "Operations",
        line_type: ["Store"],
        signal_tags: ["stockout_ghost", "inventory_blindness"],
        weight: 1.0,
        textA: "Backroom is messy; we rely on staff memory to find things.",
        textB: "Backroom is mapped, labeled, and matches planogram logic."
    },
    {
        qid: "retail_ds_ops_2",
        industry: "retail",
        pillar: "Operations",
        line_type: ["Store"],
        signal_tags: ["stockout_ghost"],
        weight: 1.0,
        textA: "We restock ad-hoc when gaps appear.",
        textB: "We run scheduled replenishment based on sales velocity."
    },
    {
        qid: "retail_ds_mon_1",
        industry: "retail",
        pillar: "Money",
        line_type: ["Store"],
        signal_tags: ["cash_variance_tolerance"],
        weight: 1.0,
        textA: "We only do a total cash count at the end of the day.",
        textB: "We do blind counts per cashier per shift and track variance."
    },
    {
        qid: "retail_ds_mon_2",
        industry: "retail",
        pillar: "Money",
        line_type: ["Store"],
        signal_tags: ["expiry_waste", "margin_blindness"],
        weight: 1.0,
        textA: "We throw away expired goods strictly when we find them.",
        textB: "We do daily short-date checks and have an automated markdown cadence."
    },
    {
        qid: "retail_ds_mkt_1",
        industry: "retail",
        pillar: "Market",
        line_type: ["Store"],
        signal_tags: ["discount_addiction", "margin_mix_blindness"],
        weight: 1.0,
        textA: "We run promos to match competitors or move stock blindly.",
        textB: "We measure lift vs. margin cost for every promo."
    },
    {
        qid: "retail_ds_mkt_2",
        industry: "retail",
        pillar: "Market",
        line_type: ["Store"],
        signal_tags: ["layout_confusion", "staff_avoidance"],
        weight: 1.0,
        textA: "Some tags are missing; customers often ask where things are.",
        textB: "Every item has a price tag and category markers are clear."
    },
    {
        qid: "retail_ds_led_1",
        industry: "retail",
        pillar: "Leadership",
        line_type: ["Store"],
        signal_tags: ["management_by_whatsapp", "accountability_fog"],
        weight: 1.0,
        textA: "The manager is mostly in the back office.",
        textB: "The manager is on the floor 80% of peak time."
    },
    {
        qid: "retail_ds_led_2",
        industry: "retail",
        pillar: "Leadership",
        line_type: ["Store"],
        signal_tags: ["sop_drift"],
        weight: 1.0,
        textA: "The opening routine is often skipped or rushed.",
        textB: "We use a standard opening checklist signed off daily."
    },
    {
        qid: "retail_ds_inn_1",
        industry: "retail",
        pillar: "Innovation",
        line_type: ["Store"],
        signal_tags: ["supplier_driven_range", "assortment_stagnation"],
        weight: 1.0,
        textA: "We buy new products whenever the supplier suggests them.",
        textB: "We have a formal trial process (small batch -> verify -> expand)."
    },
    {
        qid: "retail_ds_inn_2",
        industry: "retail",
        pillar: "Innovation",
        line_type: ["Store"],
        signal_tags: ["feedback_void"],
        weight: 1.0,
        textA: "Staff mention complaints sometimes, but it's informal.",
        textB: "We review structured feedback (suggestion box/digital) weekly."
    },
    {
        qid: "retail_ds_rsk_1",
        industry: "retail",
        pillar: "Risk",
        line_type: ["Store"],
        signal_tags: ["cold_chain_break", "hygiene_drift"],
        weight: 1.0,
        textA: "We use manual temperature logs (or none).",
        textB: "We use automated temp logs and strict cleaning schedules."
    },
    {
        qid: "retail_ds_rsk_2",
        industry: "retail",
        pillar: "Risk",
        line_type: ["Store"],
        signal_tags: ["supplier_dependence"],
        weight: 1.0,
        textA: "We rely on single sources for critical items (e.g. Milk/Bread).",
        textB: "We have multiple suppliers for key categories to avoid outages."
    },
    {
        qid: "retail_ds_ppl_1",
        industry: "retail",
        pillar: "People",
        line_type: ["Store"],
        signal_tags: ["brand_erosion"],
        weight: 1.0,
        textA: "Uniforms are messy, incomplete, or not worn.",
        textB: "Staff wear clean, branded uniforms with name tags."
    },
    {
        qid: "retail_ds_ppl_2",
        industry: "retail",
        pillar: "People",
        line_type: ["Store"],
        signal_tags: ["queue_churn", "labor_waste"],
        weight: 1.0,
        textA: "We run standard shifts regardless of traffic.",
        textB: "We schedule staff to match measured footfall (e.g. lunch/evening peaks)."
    }
];
