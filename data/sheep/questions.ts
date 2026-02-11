
import { QuestionDefinition } from '../../types/report';

export const QUESTIONS: QuestionDefinition[] = [
    // --- PILLAR 1: Market & Pricing Power ---
    {
        qid: 'QS_Market_1',
        pillar: 'Market',
        textA: "We check which sheep meet our sell rule before calling a buyer",
        textB: "We sell whichever sheep are easiest to catch",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'QS_Market_2',
        pillar: 'Market',
        textA: "When prices are low, we hold those still gaining weight",
        textB: "We sell anyway because cash is urgent",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_1',
        pillar: 'Market',
        textA: "We sell by grade/category (rams, ewes, lambs)",
        textB: "We sell mixed groups",
        weight: 1,
        signal_tags: ['selling_blind'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_2',
        pillar: 'Market',
        textA: "We track prices weekly",
        textB: "We hear prices randomly",
        weight: 1,
        signal_tags: ['blind_pricing'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_3',
        pillar: 'Market',
        textA: "We protect breeding ewes from sale",
        textB: "We sell ewes when cash is tight",
        weight: 1,
        signal_tags: ['distress_sale_pct'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_4',
        pillar: 'Market',
        textA: "We estimate weight consistently",
        textB: "We guess weight by look",
        weight: 1,
        signal_tags: ['blind_pricing'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_5',
        pillar: 'Market',
        textA: "We have multiple buyer channels",
        textB: "We depend on one buyer",
        weight: 1,
        signal_tags: ['single_buyer_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_6',
        pillar: 'Market',
        textA: "We plan sales dates",
        textB: "We sell reactively",
        weight: 1,
        signal_tags: ['panic_selling'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_7',
        pillar: 'Market',
        textA: "We negotiate with facts (weight/grade)",
        textB: "We negotiate with emotion",
        weight: 1,
        signal_tags: ['weak_negotiation'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_8',
        pillar: 'Market',
        textA: "We track which category profits most",
        textB: "We only track total cash",
        weight: 1,
        signal_tags: ['grade_blindness'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_9',
        pillar: 'Market',
        textA: "We manage a 'sell queue'",
        textB: "We decide at the last minute",
        weight: 1,
        signal_tags: ['reactive_selling'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Market_10',
        pillar: 'Market',
        textA: "We know premium seasons",
        textB: "We sell anytime",
        weight: 1,
        signal_tags: ['seasonality_miss'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },

    // --- PILLAR 2: Flock Strategy & Production Plan ---
    {
        qid: 'QS_Leadership_1',
        pillar: 'Leadership',
        textA: "We add sheep based on feed capacity and structure",
        textB: "We add sheep based on cheap price or availability",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'QS_Leadership_2',
        pillar: 'Leadership',
        textA: "When an ewe underperforms, we have a fix-or-cull deadline",
        textB: "We keep hoping she improves",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_1',
        pillar: 'Leadership',
        textA: "A flock target exists",
        textB: "Flock is 'whatever happens'",
        weight: 1,
        signal_tags: ['no_flock_plan'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_2',
        pillar: 'Leadership',
        textA: "We have planned ram control",
        textB: "Any ram mates anytime",
        weight: 1,
        signal_tags: ['uncontrolled_mating'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_3',
        pillar: 'Leadership',
        textA: "Replacement selection strategy used",
        textB: "Random replacements",
        weight: 1,
        signal_tags: ['replacement_drift'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_4',
        pillar: 'Leadership',
        textA: "Culling rules used consistently",
        textB: "Culling is emotional or rare",
        weight: 1,
        signal_tags: ['culling_drift'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_5',
        pillar: 'Leadership',
        textA: "Purchase screening and quarantine used",
        textB: "We mix buy-ins immediately",
        weight: 1,
        signal_tags: ['biosecurity_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_6',
        pillar: 'Leadership',
        textA: "We expand after profit proof",
        textB: "We expand after cash comes",
        weight: 1,
        signal_tags: ['premature_scale'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_7',
        pillar: 'Leadership',
        textA: "We avoid inbreeding",
        textB: "Inbreeding not considered",
        weight: 1,
        signal_tags: ['inbreeding_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_8',
        pillar: 'Leadership',
        textA: "We know output goals (lambs/yr)",
        textB: "We only count heads",
        weight: 1,
        signal_tags: ['output_blindness'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_9',
        pillar: 'Leadership',
        textA: "We separate breeders vs sellers",
        textB: "Everything can be sold",
        weight: 1,
        signal_tags: ['herd_structure_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Leadership_10',
        pillar: 'Leadership',
        textA: "We manage flock by categories",
        textB: "We manage as one group",
        weight: 1,
        signal_tags: ['management_by_guessing'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },

    // --- PILLAR 3: Grazing, Feeding & Water Economics ---
    {
        qid: 'QS_Operations_1',
        pillar: 'Operations',
        textA: "In dry season we rely on reserves + planned supplements",
        textB: "We buy feed when things get bad",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'QS_Operations_2',
        pillar: 'Operations',
        textA: "When sheep lose condition, we prioritize key groups",
        textB: "We increase feed generally",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_1',
        pillar: 'Operations',
        textA: "Grazing rotation exists",
        textB: "Continuous grazing",
        weight: 1,
        signal_tags: ['pasture_mismanagement'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_2',
        pillar: 'Operations',
        textA: "Dry-season plan exists",
        textB: "We improvise in dry season",
        weight: 1,
        signal_tags: ['drought_panic'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_3',
        pillar: 'Operations',
        textA: "Group feeding by need",
        textB: "Mixed feeding",
        weight: 1,
        signal_tags: ['feed_waste'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_4',
        pillar: 'Operations',
        textA: "Minerals always available",
        textB: "Occasional minerals",
        weight: 1,
        signal_tags: ['mineral_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_5',
        pillar: 'Operations',
        textA: "Water checked daily",
        textB: "Checked when a problem shows",
        weight: 1,
        signal_tags: ['water_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_6',
        pillar: 'Operations',
        textA: "Lamb priority feeding (creep)",
        textB: "Lambs compete fully",
        weight: 1,
        signal_tags: ['lamb_stunting'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_7',
        pillar: 'Operations',
        textA: "We track feed waste",
        textB: "Waste is normal",
        weight: 1,
        signal_tags: ['feed_waste'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_8',
        pillar: 'Operations',
        textA: "BCS (Body Condition) scored monthly",
        textB: "Judged by sight",
        weight: 1,
        signal_tags: ['condition_loss_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_9',
        pillar: 'Operations',
        textA: "We store forage properly",
        textB: "Spoilage common",
        weight: 1,
        signal_tags: ['storage_loss'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Operations_10',
        pillar: 'Operations',
        textA: "Feed decisions ROI-based",
        textB: "Feed decisions cash-based",
        weight: 1,
        signal_tags: ['blind_feeding'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },

    // --- PILLAR 4: Health & Biosecurity ---
    {
        qid: 'QS_Risk_1',
        pillar: 'Risk',
        textA: "New sheep arrival: isolate and observe first",
        textB: "Mix immediately",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'QS_Risk_2',
        pillar: 'Risk',
        textA: "Slight weakness: act early (isolate/observe)",
        textB: "Wait and see",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_1',
        pillar: 'Risk',
        textA: "Prevention calendar exists",
        textB: "Treat only when sick",
        weight: 1,
        signal_tags: ['reactive_health'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_2',
        pillar: 'Risk',
        textA: "Quarantine is normal practice",
        textB: "Quarantine is rare",
        weight: 1,
        signal_tags: ['biosecurity_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_3',
        pillar: 'Risk',
        textA: "Dose by weight estimate",
        textB: "Dose by guess",
        weight: 1,
        signal_tags: ['drug_resistance_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_4',
        pillar: 'Risk',
        textA: "We track treatments",
        textB: "Rely on memory",
        weight: 1,
        signal_tags: ['no_records'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_5',
        pillar: 'Risk',
        textA: "Foot care routine used",
        textB: "Foot care only when severe",
        weight: 1,
        signal_tags: ['footrot_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_6',
        pillar: 'Risk',
        textA: "Isolate diarrhea/cough cases",
        textB: "Keep flock together",
        weight: 1,
        signal_tags: ['disease_spread_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_7',
        pillar: 'Risk',
        textA: "Manage worms as system issue",
        textB: "Deworm randomly",
        weight: 1,
        signal_tags: ['parasite_load'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_8',
        pillar: 'Risk',
        textA: "Lamb health checks routine",
        textB: "Check when weak",
        weight: 1,
        signal_tags: ['lamb_mortality_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_9',
        pillar: 'Risk',
        textA: "Reduce flystrike risk proactively",
        textB: "Notice when too late",
        weight: 1,
        signal_tags: ['flystrike_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_10',
        pillar: 'Risk',
        textA: "Learn from outbreaks",
        textB: "Accept outbreaks as normal",
        weight: 1,
        signal_tags: ['loss_denial'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },

    // --- PILLAR 5: Breeding, Lambing & Lamb Growth ---
    {
        qid: 'QS_Innovation_1',
        pillar: 'Innovation',
        textA: "Ewe fails to conceive: investigate + decision deadline",
        textB: "Keep trying indefinitely",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'QS_Innovation_2',
        pillar: 'Innovation',
        textA: "Newborns: routine checks + clean lambing setup",
        textB: "Mostly leave to nature",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_1',
        pillar: 'Innovation',
        textA: "Rams controlled",
        textB: "Rams run freely",
        weight: 1,
        signal_tags: ['uncontrolled_breeding'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_2',
        pillar: 'Innovation',
        textA: "Breeding/lambing recorded",
        textB: "Records rare",
        weight: 1,
        signal_tags: ['data_blindspot'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_3',
        pillar: 'Innovation',
        textA: "Lambing space prepared",
        textB: "Lambing anywhere",
        weight: 1,
        signal_tags: ['lamb_mortality_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_4',
        pillar: 'Innovation',
        textA: "Late pregnancy feeding planned",
        textB: "General feeding only",
        weight: 1,
        signal_tags: ['lamb_survival_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_5',
        pillar: 'Innovation',
        textA: "Lamb checks routine",
        textB: "Check when weak",
        weight: 1,
        signal_tags: ['late_reaction'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_6',
        pillar: 'Innovation',
        textA: "Weaning planned",
        textB: "Weaning late/random",
        weight: 1,
        signal_tags: ['weaning_drift'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_7',
        pillar: 'Innovation',
        textA: "Replacements selected strategically",
        textB: "Random replacements",
        weight: 1,
        signal_tags: ['quality_drift'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_8',
        pillar: 'Innovation',
        textA: "Barren ewes handled quickly",
        textB: "Kept long",
        weight: 1,
        signal_tags: ['unproductive_stock'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_9',
        pillar: 'Innovation',
        textA: "Ram rotation prevents inbreeding",
        textB: "Same ram forever",
        weight: 1,
        signal_tags: ['inbreeding_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Innovation_10',
        pillar: 'Innovation',
        textA: "Lamb growth targets exist",
        textB: "Growth is 'as it goes'",
        weight: 1,
        signal_tags: ['no_growth_targets'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },

    // --- PILLAR 6: Operations, Housing & Labor Uptime ---
    {
        qid: 'QS_People_1',
        pillar: 'People',
        textA: "Routine disruption: protect critical tasks first",
        textB: "Catch up later",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'QS_People_2',
        pillar: 'People',
        textA: "Damp shelter: fix drainage/bedding quickly",
        textB: "Treat as normal",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_1',
        pillar: 'People',
        textA: "Categories separated",
        textB: "Flock mixed",
        weight: 1,
        signal_tags: ['mixed_flock_inefficiency'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_2',
        pillar: 'People',
        textA: "Cleaning schedule exists",
        textB: "Clean when dirty",
        weight: 1,
        signal_tags: ['hygiene_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_3',
        pillar: 'People',
        textA: "Bedding kept dry",
        textB: "Damp bedding common",
        weight: 1,
        signal_tags: ['pneumonia_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_4',
        pillar: 'People',
        textA: "Fences maintained proactively",
        textB: "Repair after escape",
        weight: 1,
        signal_tags: ['theft_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_5',
        pillar: 'People',
        textA: "Lamb pens/protected areas",
        textB: "Lambs fully mixed",
        weight: 1,
        signal_tags: ['lamb_safety_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_6',
        pillar: 'People',
        textA: "Daily checks standard",
        textB: "Checks occasional",
        weight: 1,
        signal_tags: ['routine_drift'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_7',
        pillar: 'People',
        textA: "Low-stress handling",
        textB: "Rough handling",
        weight: 1,
        signal_tags: ['stress_loss'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_8',
        pillar: 'People',
        textA: "Tools ready",
        textB: "Tools missing",
        weight: 1,
        signal_tags: ['operational_drag'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_9',
        pillar: 'People',
        textA: "Task list used",
        textB: "Tasks remembered",
        weight: 1,
        signal_tags: ['management_by_memory'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_People_10',
        pillar: 'People',
        textA: "Labor roles assigned",
        textB: "Anyone does anything",
        weight: 1,
        signal_tags: ['role_confusion'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },

    // --- PILLAR 7: Finance, Cashflow & Unit Economics ---
    {
        qid: 'QS_Money_1',
        pillar: 'Money',
        textA: "Cash short: protect feed/health/lamb survival",
        textB: "Cut everything evenly",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'QS_Money_2',
        pillar: 'Money',
        textA: "Profit comes: reinvest in bottleneck",
        textB: "Spread spending everywhere",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_1',
        pillar: 'Money',
        textA: "Track costs by category",
        textB: "Totals only",
        weight: 1,
        signal_tags: ['cost_blindness'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_2',
        pillar: 'Money',
        textA: "Measure profit/ewe",
        textB: "Focus on flock size",
        weight: 1,
        signal_tags: ['vanity_metrics'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_3',
        pillar: 'Money',
        textA: "Separate cash system",
        textB: "One cash pot",
        weight: 1,
        signal_tags: ['commingled_cash'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_4',
        pillar: 'Money',
        textA: "Plan dry season budget",
        textB: "Borrow later",
        weight: 1,
        signal_tags: ['cashflow_crunch'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_5',
        pillar: 'Money',
        textA: "Value losses financially",
        textB: "Treat as bad luck",
        weight: 1,
        signal_tags: ['loss_acceptance'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_6',
        pillar: 'Money',
        textA: "Prevent distress selling",
        textB: "Distress selling normal",
        weight: 1,
        signal_tags: ['distress_sale_pct'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_7',
        pillar: 'Money',
        textA: "Expand after profit proof",
        textB: "Expand after cash comes",
        weight: 1,
        signal_tags: ['premature_scale'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_8',
        pillar: 'Money',
        textA: "Monthly review",
        textB: "Seasonal guess",
        weight: 1,
        signal_tags: ['review_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_9',
        pillar: 'Money',
        textA: "Debt planned",
        textB: "Debt reactive",
        weight: 1,
        signal_tags: ['bad_debt'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Money_10',
        pillar: 'Money',
        textA: "Reinvest into bottlenecks",
        textB: "Reinvest into 'many small needs'",
        weight: 1,
        signal_tags: ['priority_whiplash'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },

    // --- PILLAR 8: Risk (mapped from Risk, Predators/Theft & Management Systems) ---
    // Using 'Risk' as the Pillar but some might fit 'Operations' or 'Leadership'.
    // QID 'DS_Risk_' continues from Pillar 4 (ending at 10), so we start at 11 or reuse?
    // The system uses QID to map locally. Let's stick to unique QIDs.
    // Actually, the user's Pillar 8 is "Risk, Predators...".
    // The earlier Pillar 4 was "Health & Biosecurity".
    // Both map to 'Risk' in our 7-pillar system essentially.
    // Wait, our system has 7 pillars: Operations, Money, Market, Leadership, Innovation, Risk, People.
    // The User provided 8 pillars.
    // Pillar 4 (Health) -> Risk
    // Pillar 8 (Risk/Theft) -> Risk
    // I will append these to Risk, or map some to Leadership/Operations?
    // Let's Append to Risk, but ensure unique QIDs.
    // Actually, Pillar 4: Health & Biosecurity -> Risk
    // Pillar 8: Risk/Predators -> Risk
    // The User gave 8 pillars.
    // Pillar 1: Market -> Market
    // Pillar 2: Flock Strategy -> Leadership
    // Pillar 3: Grazing -> Operations
    // Pillar 4: Health -> Risk
    // Pillar 5: Breeding -> Innovation
    // Pillar 6: Operations/Housing -> People (Wait, housing is Operations, Labor is People)
    // Let's look at the mapping:
    // "Operations, Housing & Labor Uptime" -> People? Or Operations?
    // In `Diagnostic.tsx` logic:
    // Market, Leadership, Operations, Money, Risk, Innovation, People.
    // Let's map User Pillar 6 "Operations..." to 'People' as it mentions "Labor Uptime" and "Routine".
    // User Pillar 8 "Risk..." -> Risk (Wait, I already used Risk for Health).
    // This means I have TWO sources for Risk.
    // I will add them as additional DS questions for Risk.
    // Current 'Risk' questions (QS_Risk_1-2, DS_Risk_1-10) cover Health.
    // I'll add the new ones as DS_Risk_11...

    {
        qid: 'QS_Risk_3', // Extra QS for Risk (Theft/Drought)
        pillar: 'Risk',
        textA: "Suspected loss: reconcile immediately",
        textB: "Assume they'll appear later",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'QS_Risk_4',
        pillar: 'Risk',
        textA: "Drought signs: destock early + protect breeders",
        textB: "Wait until pasture finishes",
        weight: 1,
        signal_tags: [],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_11',
        pillar: 'Risk',
        textA: "Tagged/marked sheep",
        textB: "Known by appearance",
        weight: 1,
        signal_tags: ['identification_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_12',
        pillar: 'Risk',
        textA: "Regular counts",
        textB: "Counts rare",
        weight: 1,
        signal_tags: ['theft_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_13',
        pillar: 'Risk',
        textA: "Movement log exists",
        textB: "Movement informal",
        weight: 1,
        signal_tags: ['tracking_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_14',
        pillar: 'Risk',
        textA: "Secure night enclosure",
        textB: "Open access at night",
        weight: 1,
        signal_tags: ['security_gap'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_15',
        pillar: 'Risk',
        textA: "Predator/theft controls exist",
        textB: "Rely on luck",
        weight: 1,
        signal_tags: ['predator_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_16',
        pillar: 'Risk',
        textA: "Drought plan exists",
        textB: "Improvise later",
        weight: 1,
        signal_tags: ['climate_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_17',
        pillar: 'Risk',
        textA: "Isolate sick quickly",
        textB: "Keep flock together",
        weight: 1,
        signal_tags: ['biosecurity_gap'],
        industry: 'livestock',
        // Duplicate concept but distinct question
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_18',
        pillar: 'Risk',
        textA: "Records updated consistently",
        textB: "Records sometimes",
        weight: 1,
        signal_tags: ['record_completeness'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_19',
        pillar: 'Risk',
        textA: "Losses valued financially",
        textB: "Losses ignored",
        weight: 1,
        signal_tags: ['financial_blindness'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    },
    {
        qid: 'DS_Risk_20',
        pillar: 'Risk',
        textA: "Learn from incidents",
        textB: "Accept incidents as normal",
        weight: 1,
        signal_tags: ['complacency_risk'],
        industry: 'livestock',
        line_type: ['Sheep farming']
    }
];
