import { QuestionDefinition } from '../../types';

export const FORESTRY_QUESTIONS: QuestionDefinition[] = [
    // PILLAR 1 — Strategy & Positioning -> LEADERSHIP
    {
        qid: 'forestry_leadership_qs_plan',
        pillar: 'Leadership',
        industry: 'forestry',
        weight: 1,
        textA: "We plan harvest by blocks/plots and customer demand windows.",
        textB: "We plan harvest mainly by cash needs and available crews.",
        line_type: ['Forestry'],
        signal_tags: ['strategy_positioning']
    },
    {
        qid: 'forestry_leadership_qs_customer',
        pillar: 'Leadership',
        industry: 'forestry',
        weight: 1,
        textA: "We choose customers based on reliable grade/spec payment.",
        textB: "We choose customers based on who takes volume fastest.",
        line_type: ['Forestry'],
        signal_tags: ['strategy_positioning']
    },
    {
        qid: 'forestry_leadership_ds_change_control',
        pillar: 'Leadership',
        industry: 'forestry',
        weight: 1,
        textA: "Our harvest plan has a weekly lock + change-control rule.",
        textB: "Our harvest plan is flexible and changes often.",
        line_type: ['Forestry'],
        signal_tags: ['strategy_positioning']
    },
    {
        qid: 'forestry_leadership_ds_mix_strategy',
        pillar: 'Leadership',
        industry: 'forestry',
        weight: 1,
        textA: "We deliberately sell into 2–3 product classes per species.",
        textB: "We sell whatever the market asks that week.",
        line_type: ['Forestry'],
        signal_tags: ['strategy_positioning']
    },

    // PILLAR 2 — Offer & Pricing Power -> MARKET (Offer)
    {
        qid: 'forestry_market_qs_price_method',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "We price by grade + MC + dimensions.",
        textB: "We price mainly by volume and negotiation.",
        line_type: ['Forestry'],
        signal_tags: ['offer_pricing_power']
    },
    {
        qid: 'forestry_market_qs_custom_limit',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "We limit custom sizes to protect recovery and speed.",
        textB: "We accept most custom requests to win deals.",
        line_type: ['Forestry'],
        signal_tags: ['offer_pricing_power']
    },
    {
        qid: 'forestry_market_ds_margin_floor',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "Our top products each have a defined margin floor.",
        textB: "Margin floors aren’t used—market decides.",
        line_type: ['Forestry'],
        signal_tags: ['offer_pricing_power']
    },
    {
        qid: 'forestry_market_ds_kd_channel',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "We separate 'green' vs 'KD' channels clearly.",
        textB: "We mix green and KD depending on orders.",
        line_type: ['Forestry'],
        signal_tags: ['offer_pricing_power']
    },

    // PILLAR 3 — Marketing & Demand -> MARKET (Marketing)
    {
        qid: 'forestry_marketing_qs_availability',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "We send availability updates proactively.",
        textB: "Buyers usually check in when they need stock.",
        line_type: ['Forestry'],
        signal_tags: ['marketing_demand']
    },
    {
        qid: 'forestry_marketing_qs_value_prop',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "Our marketing highlights quality, reliability, and documentation readiness.",
        textB: "Our marketing mostly highlights price and volume.",
        line_type: ['Forestry'],
        signal_tags: ['marketing_demand']
    },
    {
        qid: 'forestry_marketing_ds_segmentation',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "We segment buyers and tailor offers by segment.",
        textB: "We use one offer style for most buyers.",
        line_type: ['Forestry'],
        signal_tags: ['marketing_demand']
    },

    // PILLAR 4 — Sales & Conversion -> MARKET (Sales)
    {
        qid: 'forestry_sales_qs_template',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "We use one quote template with standard terms.",
        textB: "Quotes vary depending on customer and situation.",
        line_type: ['Forestry'],
        signal_tags: ['sales_conversion']
    },
    {
        qid: 'forestry_sales_qs_qualification',
        pillar: 'Market',
        industry: 'forestry',
        weight: 1,
        textA: "We qualify buyer requirements before committing stock.",
        textB: "We secure the deal first, then clarify details.",
        line_type: ['Forestry'],
        signal_tags: ['sales_conversion']
    },

    // PILLAR 5 — Operations & Delivery -> OPERATIONS
    {
        qid: 'forestry_ops_qs_sorting',
        pillar: 'Operations',
        industry: 'forestry',
        weight: 1,
        textA: "Logs are sorted into clear zones at receiving.",
        textB: "Sorting happens later depending on workload.",
        line_type: ['Forestry'],
        signal_tags: ['operations_delivery']
    },
    {
        qid: 'forestry_ops_qs_recovery',
        pillar: 'Operations',
        industry: 'forestry',
        weight: 1,
        textA: "We track recovery daily/weekly.",
        textB: "Recovery is understood generally but not measured.",
        line_type: ['Forestry'],
        signal_tags: ['operations_delivery']
    },
    {
        qid: 'forestry_ops_qs_moisture',
        pillar: 'Operations',
        industry: 'forestry',
        weight: 1,
        textA: "Moisture is checked consistently before dispatch.",
        textB: "Moisture is checked when buyers request it.",
        line_type: ['Forestry'],
        signal_tags: ['operations_delivery']
    },
    {
        qid: 'forestry_ops_ds_harvest_plan',
        pillar: 'Operations',
        industry: 'forestry',
        weight: 1,
        textA: "We plan roads/landings/skid trails before harvest.",
        textB: "We adapt harvest logistics as we go.",
        line_type: ['Forestry'],
        signal_tags: ['operations_delivery']
    },
    {
        qid: 'forestry_ops_ds_saw_patterns',
        pillar: 'Operations',
        industry: 'forestry',
        weight: 1,
        textA: "We tune saw patterns to match product mix and log size.",
        textB: "We run standard patterns most of the time.",
        line_type: ['Forestry'],
        signal_tags: ['operations_delivery']
    },

    // PILLAR 6 — Finance & Profit Control -> MONEY
    {
        qid: 'forestry_money_qs_margin_track',
        pillar: 'Money',
        industry: 'forestry',
        weight: 1,
        textA: "We track margins by product class.",
        textB: "We track profit mainly at total business level.",
        line_type: ['Forestry'],
        signal_tags: ['finance_profit_control']
    },
    {
        qid: 'forestry_money_qs_receivables',
        pillar: 'Money',
        industry: 'forestry',
        weight: 1,
        textA: "We review receivables weekly with rules.",
        textB: "We follow up receivables as issues arise.",
        line_type: ['Forestry'],
        signal_tags: ['finance_profit_control']
    },
    {
        qid: 'forestry_money_ds_unit_economics',
        pillar: 'Money',
        industry: 'forestry',
        weight: 1,
        textA: "We can explain unit economics per product quickly.",
        textB: "Unit economics require estimates and discussion.",
        line_type: ['Forestry'],
        signal_tags: ['finance_profit_control']
    },
    {
        qid: 'forestry_money_ds_fuel_track',
        pillar: 'Money',
        industry: 'forestry',
        weight: 1,
        textA: "We track fuel cost per delivered unit.",
        textB: "We track fuel as a total monthly cost.",
        line_type: ['Forestry'],
        signal_tags: ['finance_profit_control']
    },

    // PILLAR 7 — People, Culture & Execution -> PEOPLE
    {
        qid: 'forestry_people_qs_standups',
        pillar: 'People',
        industry: 'forestry',
        weight: 1,
        textA: "We run daily standups with clear assignments.",
        textB: "We coordinate mainly through informal updates.",
        line_type: ['Forestry'],
        signal_tags: ['people_culture_execution']
    },
    {
        qid: 'forestry_people_qs_sops',
        pillar: 'People',
        industry: 'forestry',
        weight: 1,
        textA: "Work is done using SOPs/checklists at key steps.",
        textB: "Work is guided mostly by experience and habit.",
        line_type: ['Forestry'],
        signal_tags: ['people_culture_execution']
    },
    {
        qid: 'forestry_people_ds_ownership',
        pillar: 'People',
        industry: 'forestry',
        weight: 1,
        textA: "Each station has clear ownership and KPIs.",
        textB: "Ownership is shared depending on the shift.",
        line_type: ['Forestry'],
        signal_tags: ['people_culture_execution']
    },
    {
        qid: 'forestry_people_ds_training',
        pillar: 'People',
        industry: 'forestry',
        weight: 1,
        textA: "Training is documented for critical tasks.",
        textB: "Training is mostly on-the-job observation.",
        line_type: ['Forestry'],
        signal_tags: ['people_culture_execution']
    },

    // Mapped "Risk" Items -> RISK
    {
        qid: 'forestry_risk_ds_safety',
        pillar: 'Risk',
        industry: 'forestry',
        weight: 1,
        textA: "Safety is managed with leading indicators (near misses, audits).",
        textB: "Safety is managed mainly when incidents happen.",
        line_type: ['Forestry'],
        signal_tags: ['risk_compliance']
    },
    {
        qid: 'forestry_risk_ds_compliance_cost',
        pillar: 'Risk',
        industry: 'forestry',
        weight: 1,
        textA: "Export compliance costs are priced into deals.",
        textB: "Export compliance costs are handled as overhead.",
        line_type: ['Forestry'],
        signal_tags: ['risk_compliance']
    },
    {
        qid: 'forestry_risk_ds_risk_pricing',
        pillar: 'Risk',
        industry: 'forestry',
        weight: 1,
        textA: "We price risk explicitly (delivery risk, claims risk).",
        textB: "Risk is absorbed to keep deals moving.",
        line_type: ['Forestry'],
        signal_tags: ['risk_compliance']
    },

    // Mapped "Innovation" Items -> INNOVATION (Systems/Data)
    {
        qid: 'forestry_innov_qs_traceability',
        pillar: 'Innovation',
        industry: 'forestry',
        weight: 1,
        textA: "We can trace each batch from origin to invoice confidently.",
        textB: "Traceability is possible, but depends on who was on shift.",
        line_type: ['Forestry'],
        signal_tags: ['innovation_systems_data']
    },
    {
        qid: 'forestry_innov_ds_inventory_recon',
        pillar: 'Innovation',
        industry: 'forestry',
        weight: 1,
        textA: "We reconcile inventory regularly.",
        textB: "We reconcile inventory occasionally.",
        line_type: ['Forestry'],
        signal_tags: ['innovation_systems_data']
    },
    {
        qid: 'forestry_innov_ds_waste_monetization',
        pillar: 'Innovation',
        industry: 'forestry',
        weight: 1,
        textA: "Waste is measured and monetized.",
        textB: "Waste is minimized but not monetized.",
        line_type: ['Forestry'],
        signal_tags: ['innovation_systems_data']
    },
    {
        qid: 'forestry_innov_ds_batch_id',
        pillar: 'Innovation',
        industry: 'forestry',
        weight: 1,
        textA: "We reconcile batch IDs from forest to bundles.",
        textB: "We rely on paperwork matching without reconciliation.",
        line_type: ['Forestry'],
        signal_tags: ['innovation_systems_data']
    }
];
