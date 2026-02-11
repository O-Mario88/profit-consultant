import { QuestionDefinition } from '../../types';

export const FARM_MACHINERY_QUESTIONS: QuestionDefinition[] = [
    // --- QUICK SCAN ---
    // 1. Market & Offer -> Market
    {
        qid: 'QS_FM_MARKET_1',
        pillar: 'Market',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Most work comes from repeat customers and referrals.",
        textB: "Most work comes from new inquiries and one-off jobs.",
        line_type: ['Service'],
        signal_tags: ['market_offer_positioning']
    },
    {
        qid: 'QS_FM_MARKET_2',
        pillar: 'Market',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We focus on 2–3 core services and turn down the rest.",
        textB: "We do a wide mix of jobs depending on who calls.",
        line_type: ['Service'],
        signal_tags: ['market_offer_positioning']
    },
    {
        qid: 'QS_FM_MARKET_3',
        pillar: 'Market',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Customers choose us for response reliability.",
        textB: "Customers choose us mostly on price.",
        line_type: ['Service'],
        signal_tags: ['market_offer_positioning']
    },
    {
        qid: 'QS_FM_MARKET_4',
        pillar: 'Market',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We sell service plans/seasonal checks.",
        textB: "We mainly sell repairs when something breaks.",
        line_type: ['Service'],
        signal_tags: ['market_offer_positioning']
    },

    // 2. Pricing & Profit -> Money
    {
        qid: 'QS_FM_MONEY_1',
        pillar: 'Money',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We have a written rate card we follow.",
        textB: "We 'adjust' pricing case-by-case.",
        line_type: ['Service'],
        signal_tags: ['pricing_profit_model']
    },
    {
        qid: 'QS_FM_MONEY_2',
        pillar: 'Money',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Travel and callout are billed separately.",
        textB: "Travel is usually 'absorbed'.",
        line_type: ['Service'],
        signal_tags: ['pricing_profit_model']
    },
    {
        qid: 'QS_FM_MONEY_3',
        pillar: 'Money',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We charge for diagnosis before repairs.",
        textB: "We diagnose for free then quote.",
        line_type: ['Service'],
        signal_tags: ['pricing_profit_model']
    },
    {
        qid: 'QS_FM_MONEY_4',
        pillar: 'Money',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Changes in scope are billed via variation.",
        textB: "We usually 'just finish it'.",
        line_type: ['Service'],
        signal_tags: ['pricing_profit_model']
    },

    // 3. Service Operations -> Operations
    {
        qid: 'QS_FM_OPS_1',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Jobs are scheduled based on capacity and routing.",
        textB: "Jobs are scheduled based on who shouts loudest.",
        line_type: ['Service'],
        signal_tags: ['service_operations_dispatch']
    },
    {
        qid: 'QS_FM_OPS_2',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Work orders are written and signed.",
        textB: "Most work is agreed verbally.",
        line_type: ['Service'],
        signal_tags: ['service_operations_dispatch']
    },
    {
        qid: 'QS_FM_OPS_3',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We confirm parts availability before promising dates.",
        textB: "We promise first, then search for parts.",
        line_type: ['Service'],
        signal_tags: ['service_operations_dispatch']
    },
    {
        qid: 'QS_FM_OPS_4',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We send ETA and closeout proof.",
        textB: "Customers mostly 'wait and hope'.",
        line_type: ['Service'],
        signal_tags: ['service_operations_dispatch']
    },

    // 4. Fleet Reliability -> Operations
    {
        qid: 'QS_FM_FLEET_1',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Preventive maintenance is planned and tracked.",
        textB: "Maintenance happens after breakdowns.",
        line_type: ['Service'],
        signal_tags: ['fleet_reliability_maintenance']
    },
    {
        qid: 'QS_FM_FLEET_2',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Machine hours are logged consistently.",
        textB: "Machine hours are estimated when needed.",
        line_type: ['Service'],
        signal_tags: ['fleet_reliability_maintenance']
    },
    {
        qid: 'QS_FM_FLEET_3',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "The same faults are getting less frequent.",
        textB: "The same faults keep coming back.",
        line_type: ['Service'],
        signal_tags: ['fleet_reliability_maintenance']
    },
    {
        qid: 'QS_FM_FLEET_4',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Workshop tools/spares are organized and controlled.",
        textB: "Tools/spares are 'wherever'.",
        line_type: ['Service'],
        signal_tags: ['fleet_reliability_maintenance']
    },

    // 5. Parts & Inventory -> Operations
    {
        qid: 'QS_FM_PARTS_1',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Parts are issued only with job numbers.",
        textB: "Parts are issued when someone asks.",
        line_type: ['Service'],
        signal_tags: ['parts_inventory_control']
    },
    {
        qid: 'QS_FM_PARTS_2',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We know our top 20 critical spares.",
        textB: "We discover critical spares during emergencies.",
        line_type: ['Service'],
        signal_tags: ['parts_inventory_control']
    },
    {
        qid: 'QS_FM_PARTS_3',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We do regular cycle counts.",
        textB: "We count stock only when there's a crisis.",
        line_type: ['Service'],
        signal_tags: ['parts_inventory_control']
    },
    {
        qid: 'QS_FM_PARTS_4',
        pillar: 'Operations',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Supplier lead times are tracked.",
        textB: "Supplier lead times are 'assumed'.",
        line_type: ['Service'],
        signal_tags: ['parts_inventory_control']
    },

    // 6. People & Safety -> People
    {
        qid: 'QS_FM_PEOPLE_1',
        pillar: 'People',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Training happens on a schedule.",
        textB: "Training happens when mistakes happen.",
        line_type: ['Service'],
        signal_tags: ['people_safety_compliance']
    },
    {
        qid: 'QS_FM_PEOPLE_2',
        pillar: 'People',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Safety rules are enforced consistently.",
        textB: "Safety depends on who is supervising.",
        line_type: ['Service'],
        signal_tags: ['people_safety_compliance']
    },
    {
        qid: 'QS_FM_PEOPLE_3',
        pillar: 'People',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Work has checklists most teams follow.",
        textB: "Work depends on technician preference.",
        line_type: ['Service'],
        signal_tags: ['people_safety_compliance']
    },
    {
        qid: 'QS_FM_PEOPLE_4',
        pillar: 'People',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Near misses are reported and discussed.",
        textB: "Near misses are rarely mentioned.",
        line_type: ['Service'],
        signal_tags: ['people_safety_compliance']
    },

    // 7. Finance & Cash -> Money
    {
        qid: 'QS_FM_CASH_1',
        pillar: 'Money',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Deposits and milestones are standard.",
        textB: "We often finish work before full payment.",
        line_type: ['Service'],
        signal_tags: ['finance_working_capital']
    },
    {
        qid: 'QS_FM_CASH_2',
        pillar: 'Money',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Invoices go out within 24–48 hours.",
        textB: "Invoices go out 'when we remember'.",
        line_type: ['Service'],
        signal_tags: ['finance_working_capital']
    },
    {
        qid: 'QS_FM_CASH_3',
        pillar: 'Money',
        industry: 'farm_machinery',
        weight: 1,
        textA: "AR follow-ups happen weekly.",
        textB: "AR follow-ups happen when cash is tight.",
        line_type: ['Service'],
        signal_tags: ['finance_working_capital']
    },
    {
        qid: 'QS_FM_CASH_4',
        pillar: 'Money',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Fuel/consumables are tracked per machine.",
        textB: "Fuel/consumables are bought as needed.",
        line_type: ['Service'],
        signal_tags: ['finance_working_capital']
    },

    // 8. Data & Quality -> Innovation
    {
        qid: 'QS_FM_DATA_1',
        pillar: 'Innovation',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Job photos/tests are saved as proof.",
        textB: "Proof is usually verbal.",
        line_type: ['Service'],
        signal_tags: ['data_quality_ci']
    },
    {
        qid: 'QS_FM_DATA_2',
        pillar: 'Innovation',
        industry: 'farm_machinery',
        weight: 1,
        textA: "We review KPIs monthly.",
        textB: "We review performance when there's trouble.",
        line_type: ['Service'],
        signal_tags: ['data_quality_ci']
    },
    {
        qid: 'QS_FM_DATA_3',
        pillar: 'Innovation',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Repeat failures get root-cause notes.",
        textB: "Repeat failures get another repair.",
        line_type: ['Service'],
        signal_tags: ['data_quality_ci']
    },
    {
        qid: 'QS_FM_DATA_4',
        pillar: 'Innovation',
        industry: 'farm_machinery',
        weight: 1,
        textA: "Customer feedback triggers process changes.",
        textB: "Customer feedback is mostly 'handled'.",
        line_type: ['Service'],
        signal_tags: ['data_quality_ci']
    }
];
