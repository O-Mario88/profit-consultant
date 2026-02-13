
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // PILLAR 1: Risk (Legality)
    {
        qid: 'ASM_RISK_QS_1',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "Our access and boundary rules are documented and easy to show",
        textB: "Access is mostly relationship-based and explained verbally",
        line_type: ['Artisanal Mining'],
        signal_tags: ['permission_fog']
    },
    {
        qid: 'ASM_RISK_QS_2',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "We track community concerns with a simple log and owners",
        textB: "We handle concerns mostly through informal conversations",
        line_type: ['Artisanal Mining'],
        signal_tags: ['social_license_debt']
    },
    {
        qid: 'ASM_RISK_QS_3',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "Buyers/inspectors can review our basic documentation quickly",
        textB: "Documentation is assembled when someone asks",
        line_type: ['Artisanal Mining'],
        signal_tags: ['paperwork_ambush']
    },
    {
        qid: 'ASM_RISK_QS_4',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "We have clear “no-go” rules for high-risk behavior",
        textB: "Rules exist but aren’t written or consistent",
        line_type: ['Artisanal Mining'],
        signal_tags: ['compliance_premium_lost']
    },
    // Deep Scan Risk
    {
        qid: 'ASM_RISK_DS_1',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "Our boundary and working zones are mapped and communicated",
        textB: "Zones shift as opportunities appear",
        line_type: ['Artisanal Mining'],
        signal_tags: ['boundary_chaos']
    },
    {
        qid: 'ASM_RISK_DS_2',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "Site entry and worker identity is controlled",
        textB: "Workers come and go with minimal tracking",
        line_type: ['Artisanal Mining'],
        signal_tags: ['security_gap']
    },
    {
        qid: 'ASM_RISK_DS_3',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "We can show proof of right-to-mine on request",
        textB: "Proof is partial or spread across people",
        line_type: ['Artisanal Mining'],
        signal_tags: ['permission_fog']
    },
    {
        qid: 'ASM_RISK_DS_4',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "Grievances have owners + due dates",
        textB: "Grievances are handled when pressure rises",
        line_type: ['Artisanal Mining'],
        signal_tags: ['social_license_debt']
    },
    {
        qid: 'ASM_RISK_DS_5',
        pillar: 'Risk',
        industry: 'mining',
        weight: 1,
        textA: "We run monthly community touchpoints",
        textB: "Community engagement happens when conflict starts",
        line_type: ['Artisanal Mining'],
        signal_tags: ['community_backlash_curve']
    },

    // PILLAR 2: Innovation (Offer & Value)
    {
        qid: 'ASM_INNOV_QS_1',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "Every batch has an ID and basic notes",
        textB: "Batches are mostly tracked by memory and conversations",
        line_type: ['Artisanal Mining'],
        signal_tags: ['traceability_breakage']
    },
    {
        qid: 'ASM_INNOV_QS_2',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "We define our product quality clearly before pricing",
        textB: "We price first and clarify quality later",
        line_type: ['Artisanal Mining'],
        signal_tags: ['grade_drift']
    },
    {
        qid: 'ASM_INNOV_QS_3',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "Quality is consistent across teams",
        textB: "Quality depends on who is working",
        line_type: ['Artisanal Mining'],
        signal_tags: ['quality_roulette']
    },
    {
        qid: 'ASM_INNOV_QS_4',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "We can explain our traceability controls simply",
        textB: "Traceability is informal",
        line_type: ['Artisanal Mining'],
        signal_tags: ['traceability_breakage']
    },
    // Deep Scan Innovation
    {
        qid: 'ASM_INNOV_DS_1',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "We avoid mixing lots once tagged for sale",
        textB: "Lots are mixed for convenience",
        line_type: ['Artisanal Mining'],
        signal_tags: ['mixed_lot_penalty']
    },
    {
        qid: 'ASM_INNOV_DS_2',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "We keep a traceability ledger that connects production to sales",
        textB: "Records exist but don’t connect",
        line_type: ['Artisanal Mining'],
        signal_tags: ['traceability_breakage']
    },
    {
        qid: 'ASM_INNOV_DS_3',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "Our pricing changes with grade and cleanliness consistently",
        textB: "Pricing changes mainly by negotiation pressure",
        line_type: ['Artisanal Mining'],
        signal_tags: ['spec_ambiguity_tax']
    },
    {
        qid: 'ASM_INNOV_DS_4',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "We have standard packaging/handling rules",
        textB: "Handling rules vary by urgency",
        line_type: ['Artisanal Mining'],
        signal_tags: ['quality_roulette']
    },
    {
        qid: 'ASM_INNOV_DS_5',
        pillar: 'Innovation',
        industry: 'mining',
        weight: 1,
        textA: "We track grade variance and react to trends",
        textB: "Grade variance is noticed only when a buyer complains",
        line_type: ['Artisanal Mining'],
        signal_tags: ['grade_drift']
    },

    // PILLAR 3: Market
    {
        qid: 'ASM_MARKET_QS_1',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We maintain multiple active buyers at once",
        textB: "We mainly sell to whoever is buying now",
        line_type: ['Artisanal Mining'],
        signal_tags: ['pipeline_hostage']
    },
    {
        qid: 'ASM_MARKET_QS_2',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We send consistent availability updates",
        textB: "Buyers usually ask when they need material",
        line_type: ['Artisanal Mining'],
        signal_tags: ['inquiry_bleed']
    },
    {
        qid: 'ASM_MARKET_QS_3',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We can answer due diligence questions quickly",
        textB: "Documentation is assembled when requested",
        line_type: ['Artisanal Mining'],
        signal_tags: ['paperwork_stall']
    },
    {
        qid: 'ASM_MARKET_QS_4',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We track leads and follow-ups in one place",
        textB: "Leads live across chats/calls",
        line_type: ['Artisanal Mining'],
        signal_tags: ['pipeline_hostage']
    },
    // Deep Scan Market
    {
        qid: 'ASM_MARKET_DS_1',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We track buyer concentration monthly",
        textB: "We notice concentration only when a buyer disappears",
        line_type: ['Artisanal Mining'],
        signal_tags: ['buyer_power_trap']
    },
    {
        qid: 'ASM_MARKET_DS_2',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We segment buyers by needs (speed, compliance, price)",
        textB: "We use one approach for most buyers",
        line_type: ['Artisanal Mining'],
        signal_tags: ['pricing_positioning_gap']
    },
    {
        qid: 'ASM_MARKET_DS_3',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We publish proof assets (process, packaging, records)",
        textB: "We assume trust will come from relationships",
        line_type: ['Artisanal Mining'],
        signal_tags: ['weak_proof_pack']
    },
    {
        qid: 'ASM_MARKET_DS_4',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We measure channel margin differences",
        textB: "We focus on volume first",
        line_type: ['Artisanal Mining'],
        signal_tags: ['margin_blindness']
    },
    {
        qid: 'ASM_MARKET_DS_5',
        pillar: 'Market',
        industry: 'mining',
        weight: 1,
        textA: "We have a response SLA for inquiries",
        textB: "Response depends on availability",
        line_type: ['Artisanal Mining'],
        signal_tags: ['inquiry_bleed']
    },


    // PILLAR 4: Leadership (Sales & Governance)
    {
        qid: 'ASM_LEAD_QS_1',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "We use a pricing ladder consistently",
        textB: "Pricing is mostly negotiation-based",
        line_type: ['Artisanal Mining'],
        signal_tags: ['negotiation_bleed']
    },
    {
        qid: 'ASM_LEAD_QS_2',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "New buyers follow deposit/term rules",
        textB: "Terms depend on relationships",
        line_type: ['Artisanal Mining'],
        signal_tags: ['credit_creep']
    },
    {
        qid: 'ASM_LEAD_QS_3',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "Every sale is documented with batch ID",
        textB: "Some sales are informal",
        line_type: ['Artisanal Mining'],
        signal_tags: ['side_sell_leak']
    },
    {
        qid: 'ASM_LEAD_QS_4',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "Disputes follow a written process",
        textB: "Disputes are handled case-by-case",
        line_type: ['Artisanal Mining'],
        signal_tags: ['re_test_ambush']
    },
    // Deep Scan Leadership
    {
        qid: 'ASM_LEAD_DS_1',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "Discounts require reason + approval",
        textB: "Discounts are flexible",
        line_type: ['Artisanal Mining'],
        signal_tags: ['discount_culture']
    },
    {
        qid: 'ASM_LEAD_DS_2',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "We track price realized vs target",
        textB: "We focus on total cash received",
        line_type: ['Artisanal Mining'],
        signal_tags: ['pricing_profit_model']
    },
    {
        qid: 'ASM_LEAD_DS_3',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "We link every payment to a batch record",
        textB: "Payments are tracked separately from batches",
        line_type: ['Artisanal Mining'],
        signal_tags: ['cash_cycle_choke']
    },
    {
        qid: 'ASM_LEAD_DS_4',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "We enforce stop-supply for overdue buyers",
        textB: "We keep supplying to maintain relationship",
        line_type: ['Artisanal Mining'],
        signal_tags: ['credit_creep']
    },
    {
        qid: 'ASM_LEAD_DS_5',
        pillar: 'Leadership',
        industry: 'mining',
        weight: 1,
        textA: "We maintain a buyer risk tier list",
        textB: "Buyer risk is assumed",
        line_type: ['Artisanal Mining'],
        signal_tags: ['incident_wipeout']
    },

    // PILLAR 5: Operations
    {
        qid: 'ASM_OPS_QS_1',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "We log output and downtime daily",
        textB: "We know output generally but don’t log consistently",
        line_type: ['Artisanal Mining'],
        signal_tags: ['measurement_blindspot']
    },
    {
        qid: 'ASM_OPS_QS_2',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "We reconcile production, storage, and sales",
        textB: "We rely on trust and memory",
        line_type: ['Artisanal Mining'],
        signal_tags: ['inventory_blindspot']
    },
    {
        qid: 'ASM_OPS_QS_3',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "Downtime causes have owners and fixes",
        textB: "Downtime is accepted as normal",
        line_type: ['Artisanal Mining'],
        signal_tags: ['downtime_tax']
    },
    {
        qid: 'ASM_OPS_QS_4',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "We schedule basic maintenance",
        textB: "Maintenance is mostly reactive",
        line_type: ['Artisanal Mining'],
        signal_tags: ['reactive_maintenance']
    },
    // Deep Scan Operations
    {
        qid: 'ASM_OPS_DS_1',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "We have daily targets by team",
        textB: "Targets are implied",
        line_type: ['Artisanal Mining'],
        signal_tags: ['no_standard_work']
    },
    {
        qid: 'ASM_OPS_DS_2',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "We tag downtime by cause",
        textB: "Downtime is not categorized",
        line_type: ['Artisanal Mining'],
        signal_tags: ['measurement_blindspot']
    },
    {
        qid: 'ASM_OPS_DS_3',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "We keep controlled storage zones",
        textB: "Storage is flexible",
        line_type: ['Artisanal Mining'],
        signal_tags: ['inventory_accuracy_gap']
    },
    {
        qid: 'ASM_OPS_DS_4',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "Batch movement is tracked",
        textB: "Batch movement is informal",
        line_type: ['Artisanal Mining'],
        signal_tags: ['traceability_breakage']
    },
    {
        qid: 'ASM_OPS_DS_5',
        pillar: 'Operations',
        industry: 'mining',
        weight: 1,
        textA: "Unexplained variance triggers investigation",
        textB: "Variance is tolerated",
        line_type: ['Artisanal Mining'],
        signal_tags: ['variance_blindness']
    },

    // PILLAR 6: Money
    {
        qid: 'ASM_MONEY_QS_1',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "We know margin per lot/batch",
        textB: "We judge profit by cash left at the end",
        line_type: ['Artisanal Mining'],
        signal_tags: ['cashflow_illusion']
    },
    {
        qid: 'ASM_MONEY_QS_2',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "Spending is categorized and reviewed weekly",
        textB: "Spending is mostly informal",
        line_type: ['Artisanal Mining'],
        signal_tags: ['small_spend_monster']
    },
    {
        qid: 'ASM_MONEY_QS_3',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "Receivables follow a cadence with rules",
        textB: "Receivables are chased when cash runs low",
        line_type: ['Artisanal Mining'],
        signal_tags: ['receivables_trap']
    },
    {
        qid: 'ASM_MONEY_QS_4',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "Variance triggers investigation",
        textB: "Variance is assumed inevitable",
        line_type: ['Artisanal Mining'],
        signal_tags: ['variance_blindness']
    },
    // Deep Scan Money
    {
        qid: 'ASM_MONEY_DS_1',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "We can state our top 5 cost drivers clearly",
        textB: "Costs are blended",
        line_type: ['Artisanal Mining'],
        signal_tags: ['costing_gap']
    },
    {
        qid: 'ASM_MONEY_DS_2',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "We track margin per batch",
        textB: "We track monthly totals only",
        line_type: ['Artisanal Mining'],
        signal_tags: ['margin_blindness']
    },
    {
        qid: 'ASM_MONEY_DS_3',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "We enforce spending approvals",
        textB: "Anyone can spend when urgent",
        line_type: ['Artisanal Mining'],
        signal_tags: ['costing_gap']
    },
    {
        qid: 'ASM_MONEY_DS_4',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "We keep proof of transactions",
        textB: "Many transactions are cash-only with no record",
        line_type: ['Artisanal Mining'],
        signal_tags: ['money_fog']
    },
    {
        qid: 'ASM_MONEY_DS_5',
        pillar: 'Money',
        industry: 'mining',
        weight: 1,
        textA: "We reconcile physical output to sales records",
        textB: "Reconciliation is occasional",
        line_type: ['Artisanal Mining'],
        signal_tags: ['cash_recon_gap']
    },

    // PILLAR 7: People
    {
        qid: 'ASM_PEOPLE_QS_1',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "We track incidents/near-misses and act on them",
        textB: "We mostly move on after incidents",
        line_type: ['Artisanal Mining'],
        signal_tags: ['injury_tax']
    },
    {
        qid: 'ASM_PEOPLE_QS_2',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "Roles are clear with handoff routines",
        textB: "Roles overlap and shift daily",
        line_type: ['Artisanal Mining'],
        signal_tags: ['role_clarity_gap']
    },
    {
        qid: 'ASM_PEOPLE_QS_3',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "Training is recorded for critical tasks",
        textB: "Training is informal",
        line_type: ['Artisanal Mining'],
        signal_tags: ['training_gap']
    },
    {
        qid: 'ASM_PEOPLE_QS_4',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "We run daily standups with assigned actions",
        textB: "Coordination is mostly ad hoc",
        line_type: ['Artisanal Mining'],
        signal_tags: ['culture_debt']
    },
    // Deep Scan People
    {
        qid: 'ASM_PEOPLE_DS_1',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "We use a safety checklist consistently",
        textB: "Safety checks are occasional",
        line_type: ['Artisanal Mining'],
        signal_tags: ['injury_tax']
    },
    {
        qid: 'ASM_PEOPLE_DS_2',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "Near-misses are logged and reviewed",
        textB: "Near-misses are rarely captured",
        line_type: ['Artisanal Mining'],
        signal_tags: ['silent_harm_backlog']
    },
    {
        qid: 'ASM_PEOPLE_DS_3',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "We have a competency matrix",
        textB: "Skills are known informally",
        line_type: ['Artisanal Mining'],
        signal_tags: ['training_gap']
    },
    {
        qid: 'ASM_PEOPLE_DS_4',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "Supervisors follow a routine",
        textB: "Supervisors improvise daily",
        line_type: ['Artisanal Mining'],
        signal_tags: ['standardless_work']
    },
    {
        qid: 'ASM_PEOPLE_DS_5',
        pillar: 'People',
        industry: 'mining',
        weight: 1,
        textA: "We investigate incidents for root causes",
        textB: "We focus on blame and speed",
        line_type: ['Artisanal Mining'],
        signal_tags: ['blame_culture']
    }
];
