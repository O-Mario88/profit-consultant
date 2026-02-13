
import { QuestionDefinition } from '../../types';

export const questions: QuestionDefinition[] = [
    // PILLAR 1: Risk (Client Trust, Compliance & Prequalification)
    // Quick Scan
    {
        qid: 'MS_RISK_QS_1',
        pillar: 'Risk',
        industry: 'mining_services',
        weight: 1,
        textA: "We keep a ready-to-send prequal pack updated monthly",
        textB: "We assemble prequal docs when a tender appears",
        line_type: ['Mining Services'],
        signal_tags: ['prequal_panic']
    },
    {
        qid: 'MS_RISK_QS_2',
        pillar: 'Risk',
        industry: 'mining_services',
        weight: 1,
        textA: "We screen subcontractors before they work under our name",
        textB: "We mostly rely on referrals and speed",
        line_type: ['Mining Services'],
        signal_tags: ['subcontractor_shadow_risk']
    },
    {
        qid: 'MS_RISK_QS_3',
        pillar: 'Risk',
        industry: 'mining_services',
        weight: 1,
        textA: "We can explain our anti-bribery/sanctions stance clearly to clients",
        textB: "We keep it informal to avoid 'slowing business'",
        line_type: ['Mining Services'],
        signal_tags: ['facilitation_tax']
    },
    {
        qid: 'MS_RISK_QS_4',
        pillar: 'Risk',
        industry: 'mining_services',
        weight: 1,
        textA: "We verify critical controls in the field, not just on paper",
        textB: "We focus mainly on sign-offs",
        line_type: ['Mining Services'],
        signal_tags: ['paper_shield_safety']
    },
    // Deep Scan Risk
    { qid: 'MS_RISK_DS_1', pillar: 'Risk', industry: 'mining_services', weight: 1, textA: "Our compliance owner maintains a live evidence archive", textB: "Evidence sits across personal devices", line_type: ['Mining Services'], signal_tags: ['prequal_panic'] },
    { qid: 'MS_RISK_DS_2', pillar: 'Risk', industry: 'mining_services', weight: 1, textA: "We maintain a subcontractor register with status", textB: "Subcontractors are managed case-by-case", line_type: ['Mining Services'], signal_tags: ['subcontractor_shadow_risk'] },
    { qid: 'MS_RISK_DS_3', pillar: 'Risk', industry: 'mining_services', weight: 1, textA: "We track audit findings to closure with evidence", textB: "We close findings informally", line_type: ['Mining Services'], signal_tags: ['audit_ambush'] },
    { qid: 'MS_RISK_DS_4', pillar: 'Risk', industry: 'mining_services', weight: 1, textA: "We can show sanctions/trade screening records when asked", textB: "Screening is assumed", line_type: ['Mining Services'], signal_tags: ['sanctions_surprise'] },
    { qid: 'MS_RISK_DS_5', pillar: 'Risk', industry: 'mining_services', weight: 1, textA: "We have a clear rule for gifts/hospitality", textB: "It depends on relationships", line_type: ['Mining Services'], signal_tags: ['reputation_drag'] },

    // PILLAR 2: Innovation (Offer Design & Differentiation)
    // Quick Scan
    {
        qid: 'MS_INNOV_QS_1',
        pillar: 'Innovation',
        industry: 'mining_services',
        weight: 1,
        textA: "Our offers are packaged with clear boundaries and deliverables",
        textB: "Our offers are mostly custom per client",
        line_type: ['Mining Services'],
        signal_tags: ['commodity_trap']
    },
    {
        qid: 'MS_INNOV_QS_2',
        pillar: 'Innovation',
        industry: 'mining_services',
        weight: 1,
        textA: "We sell outcomes (SLAs/uptime/turnaround), not just hours",
        textB: "We mostly sell hours and materials",
        line_type: ['Mining Services'],
        signal_tags: ['value_promise_fog']
    },
    {
        qid: 'MS_INNOV_QS_3',
        pillar: 'Innovation',
        industry: 'mining_services',
        weight: 1,
        textA: "We have a clear warranty/returns policy enforced consistently",
        textB: "Warranty decisions are negotiated per case",
        line_type: ['Mining Services'],
        signal_tags: ['warranty_bleed']
    },
    {
        qid: 'MS_INNOV_QS_4',
        pillar: 'Innovation',
        industry: 'mining_services',
        weight: 1,
        textA: "We can show proof metrics for our top service lines",
        textB: "Proof is mainly verbal",
        line_type: ['Mining Services'],
        signal_tags: ['value_promise_fog']
    },
    // Deep Scan Innovation
    { qid: 'MS_INNOV_DS_1', pillar: 'Innovation', industry: 'mining_services', weight: 1, textA: "Each offer has clear inclusions/exclusions", textB: "Exclusions are implied", line_type: ['Mining Services'], signal_tags: ['scope_creep_tax'] },
    { qid: 'MS_INNOV_DS_2', pillar: 'Innovation', industry: 'mining_services', weight: 1, textA: "We track margin by offer type", textB: "We track overall margin only", line_type: ['Mining Services'], signal_tags: ['marginless_growth'] },
    { qid: 'MS_INNOV_DS_3', pillar: 'Innovation', industry: 'mining_services', weight: 1, textA: "We have a premium tier designed for enterprise compliance", textB: "We rely on 'we can do anything'", line_type: ['Mining Services'], signal_tags: ['commodity_trap'] },
    { qid: 'MS_INNOV_DS_4', pillar: 'Innovation', industry: 'mining_services', weight: 1, textA: "We use data to justify price (downtime avoided)", textB: "We price mainly by competitor comparison", line_type: ['Mining Services'], signal_tags: ['value_promise_fog'] },
    { qid: 'MS_INNOV_DS_5', pillar: 'Innovation', industry: 'mining_services', weight: 1, textA: "We package mobilization costs explicitly", textB: "Mobilization is hidden inside pricing", line_type: ['Mining Services'], signal_tags: ['unpriced_complexity'] },

    // PILLAR 3: Market (Marketing & Demand)
    // Quick Scan
    {
        qid: 'MS_MARKET_QS_1',
        pillar: 'Market',
        industry: 'mining_services',
        weight: 1,
        textA: "We track tenders/shutdown schedules and plan bids early",
        textB: "We hear about work mostly through referrals",
        line_type: ['Mining Services'],
        signal_tags: ['late_to_bid_syndrome']
    },
    {
        qid: 'MS_MARKET_QS_2',
        pillar: 'Market',
        industry: 'mining_services',
        weight: 1,
        textA: "We use bid/no-bid rules to protect effort and margins",
        textB: "We bid whenever we can, to stay visible",
        line_type: ['Mining Services'],
        signal_tags: ['tender_chasing_addiction']
    },
    {
        qid: 'MS_MARKET_QS_3',
        pillar: 'Market',
        industry: 'mining_services',
        weight: 1,
        textA: "We have capability assets aligned to mining buyer expectations",
        textB: "We mainly pitch through conversations",
        line_type: ['Mining Services'],
        signal_tags: ['brand_invisibility_tax']
    },
    {
        qid: 'MS_MARKET_QS_4',
        pillar: 'Market',
        industry: 'mining_services',
        weight: 1,
        textA: "We can forecast pipeline for 90 days confidently",
        textB: "Pipeline visibility is uncertain",
        line_type: ['Mining Services'],
        signal_tags: ['pipeline_drought']
    },
    // Deep Scan Market
    { qid: 'MS_MARKET_DS_1', pillar: 'Market', industry: 'mining_services', weight: 1, textA: "We map decision-makers and influencers for key accounts", textB: "We rely on one contact per account", line_type: ['Mining Services'], signal_tags: ['unqualified_lead_drain'] },
    { qid: 'MS_MARKET_DS_2', pillar: 'Market', industry: 'mining_services', weight: 1, textA: "We keep reusable proposal modules (HSE, QA)", textB: "Proposals are rewritten each time", line_type: ['Mining Services'], signal_tags: ['proposal_graveyard'] },
    { qid: 'MS_MARKET_DS_3', pillar: 'Market', industry: 'mining_services', weight: 1, textA: "We track why we lose bids", textB: "We assume price is the only reason", line_type: ['Mining Services'], signal_tags: ['tender_chasing_addiction'] },
    { qid: 'MS_MARKET_DS_4', pillar: 'Market', industry: 'mining_services', weight: 1, textA: "We publish credibility signals (certifications, safety)", textB: "We avoid sharing metrics", line_type: ['Mining Services'], signal_tags: ['brand_invisibility_tax'] },
    { qid: 'MS_MARKET_DS_5', pillar: 'Market', industry: 'mining_services', weight: 1, textA: "We know seasonal/commodity cycle impacts on demand", textB: "Demand swings surprise us", line_type: ['Mining Services'], signal_tags: ['pipeline_drought'] },

    // PILLAR 4: Leadership (Sales, Contracts & Commercial Discipline)
    // Quick Scan
    {
        qid: 'MS_LEAD_QS_1',
        pillar: 'Leadership',
        industry: 'mining_services',
        weight: 1,
        textA: "We use change orders for extras consistently",
        textB: "Extras are often done 'to keep the relationship'",
        line_type: ['Mining Services'],
        signal_tags: ['unbilled_extras']
    },
    {
        qid: 'MS_LEAD_QS_2',
        pillar: 'Leadership',
        industry: 'mining_services',
        weight: 1,
        textA: "We document acceptance before invoicing",
        textB: "We invoice based on completion only",
        line_type: ['Mining Services'],
        signal_tags: ['acceptance_gap']
    },
    {
        qid: 'MS_LEAD_QS_3',
        pillar: 'Leadership',
        industry: 'mining_services',
        weight: 1,
        textA: "We have clear margin floors and discount approvals",
        textB: "Discounts are flexible to close",
        line_type: ['Mining Services'],
        signal_tags: ['discount_addiction']
    },
    {
        qid: 'MS_LEAD_QS_4',
        pillar: 'Leadership',
        industry: 'mining_services',
        weight: 1,
        textA: "Ops reviews contracts before signing",
        textB: "Sales signs and ops figures it out later",
        line_type: ['Mining Services'],
        signal_tags: ['contract_blindspot']
    },
    // Deep Scan Leadership
    { qid: 'MS_LEAD_DS_1', pillar: 'Leadership', industry: 'mining_services', weight: 1, textA: "Quotes contain explicit assumptions and exclusions", textB: "Assumptions are implied", line_type: ['Mining Services'], signal_tags: ['contract_blindspot'] },
    { qid: 'MS_LEAD_DS_2', pillar: 'Leadership', industry: 'mining_services', weight: 1, textA: "We track change order value monthly", textB: "Change order value is not measured", line_type: ['Mining Services'], signal_tags: ['unbilled_extras'] },
    { qid: 'MS_LEAD_DS_3', pillar: 'Leadership', industry: 'mining_services', weight: 1, textA: "We have a documented collections cadence", textB: "Collections are reactive", line_type: ['Mining Services'], signal_tags: ['payment_drag'] },
    { qid: 'MS_LEAD_DS_4', pillar: 'Leadership', industry: 'mining_services', weight: 1, textA: "We enforce credit limits for customers", textB: "We extend credit for relationship value", line_type: ['Mining Services'], signal_tags: ['payment_drag'] },
    { qid: 'MS_LEAD_DS_5', pillar: 'Leadership', industry: 'mining_services', weight: 1, textA: "We run a contract kickoff to align expectations", textB: "The team starts work immediately", line_type: ['Mining Services'], signal_tags: ['handover_failure'] },

    // PILLAR 5: Operations (Delivery Operations)
    // Quick Scan
    {
        qid: 'MS_OPS_QS_1',
        pillar: 'Operations',
        industry: 'mining_services',
        weight: 1,
        textA: "Every job ends with a standard report and evidence pack",
        textB: "Reports depend on who did the job",
        line_type: ['Mining Services'],
        signal_tags: ['handover_failure']
    },
    {
        qid: 'MS_OPS_QS_2',
        pillar: 'Operations',
        industry: 'mining_services',
        weight: 1,
        textA: "We track stockouts and protect critical spares",
        textB: "Spares are managed reactively",
        line_type: ['Mining Services'],
        signal_tags: ['inventory_fog']
    },
    {
        qid: 'MS_OPS_QS_3',
        pillar: 'Operations',
        industry: 'mining_services',
        weight: 1,
        textA: "We measure rework and fix root causes",
        textB: "Rework is treated as normal",
        line_type: ['Mining Services'],
        signal_tags: ['rework_bleed']
    },
    {
        qid: 'MS_OPS_QS_4',
        pillar: 'Operations',
        industry: 'mining_services',
        weight: 1,
        textA: "Emergency freight is controlled and analyzed",
        textB: "Emergency freight is accepted as 'part of mining'",
        line_type: ['Mining Services'],
        signal_tags: ['emergency_freight_tax']
    },
    // Deep Scan Operations
    { qid: 'MS_OPS_DS_1', pillar: 'Operations', industry: 'mining_services', weight: 1, textA: "We can see capacity (people/tools) 2–4 weeks ahead", textB: "Capacity is managed day-by-day", line_type: ['Mining Services'], signal_tags: ['mobilization_leakage'] },
    { qid: 'MS_OPS_DS_2', pillar: 'Operations', industry: 'mining_services', weight: 1, textA: "We separate client-caused delays from internal delays", textB: "Delays are blended", line_type: ['Mining Services'], signal_tags: ['downtime_penalty'] },
    { qid: 'MS_OPS_DS_3', pillar: 'Operations', industry: 'mining_services', weight: 1, textA: "We track job profitability at job level", textB: "We track monthly totals", line_type: ['Mining Services'], signal_tags: ['profit_fog'] },
    { qid: 'MS_OPS_DS_4', pillar: 'Operations', industry: 'mining_services', weight: 1, textA: "We maintain critical spares lists per client/site", textB: "Spares lists are generic", line_type: ['Mining Services'], signal_tags: ['inventory_fog'] },
    { qid: 'MS_OPS_DS_5', pillar: 'Operations', industry: 'mining_services', weight: 1, textA: "We track response time and repair time separately", textB: "We track 'completion time' only", line_type: ['Mining Services'], signal_tags: ['downtime_penalty'] },

    // PILLAR 6: Money (Finance & Profit Control)
    // Quick Scan
    {
        qid: 'MS_MONEY_QS_1',
        pillar: 'Money',
        industry: 'mining_services',
        weight: 1,
        textA: "We can see margin by job/service line weekly",
        textB: "We mainly see total cash in the bank",
        line_type: ['Mining Services'],
        signal_tags: ['profit_fog']
    },
    {
        qid: 'MS_MONEY_QS_2',
        pillar: 'Money',
        industry: 'mining_services',
        weight: 1,
        textA: "We invoice quickly with evidence packs",
        textB: "Invoicing is delayed by missing documentation",
        line_type: ['Mining Services'],
        signal_tags: ['invoice_lag']
    },
    {
        qid: 'MS_MONEY_QS_3',
        pillar: 'Money',
        industry: 'mining_services',
        weight: 1,
        textA: "Spend approvals are enforced consistently",
        textB: "Spending is flexible when urgent",
        line_type: ['Mining Services'],
        signal_tags: ['leak_by_a_thousand_cuts']
    },
    {
        qid: 'MS_MONEY_QS_4',
        pillar: 'Money',
        industry: 'mining_services',
        weight: 1,
        textA: "Inventory variance is measured and acted on",
        textB: "Variance is assumed",
        line_type: ['Mining Services'],
        signal_tags: ['inventory_shrink_shadow']
    },
    // Deep Scan Money
    { qid: 'MS_MONEY_DS_1', pillar: 'Money', industry: 'mining_services', weight: 1, textA: "We track estimate vs actual per job", textB: "We review variance quarterly", line_type: ['Mining Services'], signal_tags: ['variance_blindness'] },
    { qid: 'MS_MONEY_DS_2', pillar: 'Money', industry: 'mining_services', weight: 1, textA: "We can identify top 10 profit drivers", textB: "Profit drivers are unclear", line_type: ['Mining Services'], signal_tags: ['profit_fog'] },
    { qid: 'MS_MONEY_DS_3', pillar: 'Money', industry: 'mining_services', weight: 1, textA: "We price mobilization and standby explicitly", textB: "We absorb them", line_type: ['Mining Services'], signal_tags: ['unpriced_mobilization'] },
    { qid: 'MS_MONEY_DS_4', pillar: 'Money', industry: 'mining_services', weight: 1, textA: "We reconcile inventory movements regularly", textB: "Inventory is trusted", line_type: ['Mining Services'], signal_tags: ['inventory_shrink_shadow'] },
    { qid: 'MS_MONEY_DS_5', pillar: 'Money', industry: 'mining_services', weight: 1, textA: "We track utilization vs idle cost", textB: "We track revenue only", line_type: ['Mining Services'], signal_tags: ['standby_bleed'] },

    // PILLAR 7: People (People, Safety, Quality & Execution Culture)
    // Quick Scan
    {
        qid: 'MS_PEOPLE_QS_1',
        pillar: 'People',
        industry: 'mining_services',
        weight: 1,
        textA: "We verify critical controls in the field routinely",
        textB: "We mainly rely on training and sign-offs",
        line_type: ['Mining Services'],
        signal_tags: ['hse_theater']
    },
    {
        qid: 'MS_PEOPLE_QS_2',
        pillar: 'People',
        industry: 'mining_services',
        weight: 1,
        textA: "Quality checks are standardized for key services/SKUs",
        textB: "Quality checks vary by supervisor",
        line_type: ['Mining Services'],
        signal_tags: ['procedure_drift']
    },
    {
        qid: 'MS_PEOPLE_QS_3',
        pillar: 'People',
        industry: 'mining_services',
        weight: 1,
        textA: "We track near-misses and learn from them",
        textB: "We mostly track major incidents",
        line_type: ['Mining Services'],
        signal_tags: ['incident_wipeout']
    },
    {
        qid: 'MS_PEOPLE_QS_4',
        pillar: 'People',
        industry: 'mining_services',
        weight: 1,
        textA: "Workers have a trusted grievance channel and see action",
        textB: "Concerns are mostly handled informally",
        line_type: ['Mining Services'],
        signal_tags: ['culture_debt']
    },
    // Deep Scan People
    { qid: 'MS_PEOPLE_DS_1', pillar: 'People', industry: 'mining_services', weight: 1, textA: "We use a critical controls register with owners", textB: "Critical risks are discussed informally", line_type: ['Mining Services'], signal_tags: ['hse_theater'] },
    { qid: 'MS_PEOPLE_DS_2', pillar: 'People', industry: 'mining_services', weight: 1, textA: "We maintain respectful workplace expectations with consequences", textB: "Culture issues are handled privately", line_type: ['Mining Services'], signal_tags: ['respect_gap_risk'] },
    { qid: 'MS_PEOPLE_DS_3', pillar: 'People', industry: 'mining_services', weight: 1, textA: "We track rework causes and eliminate patterns", textB: "Rework is accepted", line_type: ['Mining Services'], signal_tags: ['rework_tax'] },
    { qid: 'MS_PEOPLE_DS_4', pillar: 'People', industry: 'mining_services', weight: 1, textA: "We protect whistleblowers and reporters", textB: "Reporting is socially risky", line_type: ['Mining Services'], signal_tags: ['culture_debt'] },
    { qid: 'MS_PEOPLE_DS_5', pillar: 'People', industry: 'mining_services', weight: 1, textA: "We track critical control failures as KPIs", textB: "Failures are discussed informally", line_type: ['Mining Services'], signal_tags: ['incident_wipeout'] }
];
