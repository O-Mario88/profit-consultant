import { QuestionDefinition } from '../../types';

export const CATTLE_QUESTIONS: QuestionDefinition[] = [
    // 1. Market & Pricing Power -> Market
    {
        qid: 'cattle_market_qs_alert',
        pillar: 'Market',
        industry: 'cattle',
        weight: 1,
        textA: "We alert buyers when animals are 'nearly ready'.",
        textB: "We alert buyers when animals hit a defined spec.",
        line_type: ['Farming'],
        signal_tags: ['market_pricing_power']
    },
    {
        qid: 'cattle_market_qs_channels',
        pillar: 'Market',
        industry: 'cattle',
        weight: 1,
        textA: "We sell mostly to familiar buyers.",
        textB: "We sell to familiar buyers plus 1–2 backups when pricing shifts.",
        line_type: ['Farming'],
        signal_tags: ['market_pricing_power']
    },
    {
        qid: 'cattle_market_ds_buyer',
        pillar: 'Market',
        industry: 'cattle',
        weight: 1,
        textA: "Our best buyer is the one who calls often.",
        textB: "Our best buyer is the one who pays fastest and disputes least.",
        line_type: ['Farming'],
        signal_tags: ['market_pricing_power']
    },
    {
        qid: 'cattle_market_ds_readiness',
        pillar: 'Market',
        industry: 'cattle',
        weight: 1,
        textA: "We judge readiness by look.",
        textB: "We judge readiness by look plus a consistent weight estimate method.",
        line_type: ['Farming'],
        signal_tags: ['market_pricing_power']
    },

    // 2. Herd Strategy & Genetics -> Operations (Production)
    {
        qid: 'cattle_herd_qs_culling',
        pillar: 'Operations',
        industry: 'cattle',
        weight: 1,
        textA: "We keep females that 'usually calve'.",
        textB: "We keep females based on a simple calving performance note.",
        line_type: ['Farming'],
        signal_tags: ['herd_strategy_genetics']
    },
    {
        qid: 'cattle_herd_qs_buying',
        pillar: 'Operations',
        industry: 'cattle',
        weight: 1,
        textA: "We buy breeding stock when a deal appears.",
        textB: "We buy breeding stock when it fits our planned herd target.",
        line_type: ['Farming'],
        signal_tags: ['herd_strategy_genetics']
    },
    {
        qid: 'cattle_herd_ds_bulls',
        pillar: 'Operations',
        industry: 'cattle',
        weight: 1,
        textA: "Bulls are chosen for appearance.",
        textB: "Bulls are chosen for appearance plus practical performance notes.",
        line_type: ['Farming'],
        signal_tags: ['herd_strategy_genetics']
    },
    {
        qid: 'cattle_herd_ds_growth',
        pillar: 'Operations',
        industry: 'cattle',
        weight: 1,
        textA: "We grow herd size when cash allows.",
        textB: "We grow herd size when feed capacity allows.",
        line_type: ['Farming'],
        signal_tags: ['herd_strategy_genetics']
    },

    // 3. Nutrition & Feed System -> Operations (Inputs)
    {
        qid: 'cattle_feed_qs_adjust',
        pillar: 'Operations',
        industry: 'cattle',
        weight: 1,
        textA: "We adjust feed when animals look thin.",
        textB: "We adjust feed when a weekly check shows trend changes.",
        line_type: ['Farming'],
        signal_tags: ['nutrition_feed_system']
    },
    {
        qid: 'cattle_feed_qs_storage',
        pillar: 'Operations',
        industry: 'cattle',
        weight: 1,
        textA: "We store feed where space is available.",
        textB: "We store feed where it stays dry and losses are easiest to spot.",
        line_type: ['Farming'],
        signal_tags: ['nutrition_feed_system']
    },
    {
        qid: 'cattle_feed_ds_buying',
        pillar: 'Operations',
        industry: 'cattle',
        weight: 1,
        textA: "We buy feed when it finishes.",
        textB: "We buy feed before it finishes with a buffer.",
        line_type: ['Farming'],
        signal_tags: ['nutrition_feed_system']
    },
    {
        qid: 'cattle_feed_ds_water',
        pillar: 'Operations',
        industry: 'cattle',
        weight: 1,
        textA: "Water is assumed.",
        textB: "Water is checked daily.",
        line_type: ['Farming'],
        signal_tags: ['nutrition_feed_system']
    },

    // 4. Health, Welfare & Biosecurity -> Risk
    {
        qid: 'cattle_risk_qs_new_animals',
        pillar: 'Risk',
        industry: 'cattle',
        weight: 1,
        textA: "New animals join after observation.",
        textB: "New animals join after a short separation routine.",
        line_type: ['Farming'],
        signal_tags: ['health_welfare_biosecurity']
    },
    {
        qid: 'cattle_risk_qs_treatment',
        pillar: 'Risk',
        industry: 'cattle',
        weight: 1,
        textA: "We treat when symptoms become obvious.",
        textB: "We treat when daily checks show early warning.",
        line_type: ['Farming'],
        signal_tags: ['health_welfare_biosecurity']
    },
    {
        qid: 'cattle_risk_ds_visitors',
        pillar: 'Risk',
        industry: 'cattle',
        weight: 1,
        textA: "Visitors can enter freely.",
        textB: "Visitors follow simple entry rules.",
        line_type: ['Farming'],
        signal_tags: ['health_welfare_biosecurity']
    },
    {
        qid: 'cattle_risk_ds_mortality',
        pillar: 'Risk',
        industry: 'cattle',
        weight: 1,
        textA: "We don’t log deaths.",
        textB: "We log deaths and likely cause to prevent repeats.",
        line_type: ['Farming'],
        signal_tags: ['health_welfare_biosecurity']
    },

    // 5. Operations & Infrastructure -> Leadership (Backbone)
    {
        qid: 'cattle_infra_qs_repairs',
        pillar: 'Leadership',
        industry: 'cattle',
        weight: 1,
        textA: "Repairs happen when something breaks.",
        textB: "Repairs happen on a simple weekly checklist.",
        line_type: ['Farming'],
        signal_tags: ['operations_infrastructure']
    },
    {
        qid: 'cattle_infra_qs_loading',
        pillar: 'Leadership',
        industry: 'cattle',
        weight: 1,
        textA: "Loading is handled by whoever is around.",
        textB: "Loading follows a consistent routine to reduce stress losses.",
        line_type: ['Farming'],
        signal_tags: ['operations_infrastructure']
    },
    {
        qid: 'cattle_infra_ds_security',
        pillar: 'Leadership',
        industry: 'cattle',
        weight: 1,
        textA: "Security is trust-based.",
        textB: "Security includes routine controls (access + counting + logs).",
        line_type: ['Farming'],
        signal_tags: ['operations_infrastructure']
    },
    {
        qid: 'cattle_infra_ds_water_fail',
        pillar: 'Leadership',
        industry: 'cattle',
        weight: 1,
        textA: "Water system failures happen sometimes.",
        textB: "Water system failures trigger a same-day response.",
        line_type: ['Farming'],
        signal_tags: ['operations_infrastructure']
    },

    // 6. People & Daily Execution -> People
    {
        qid: 'cattle_people_qs_roles',
        pillar: 'People',
        industry: 'cattle',
        weight: 1,
        textA: "Everyone helps with everything.",
        textB: "Everyone has a main responsibility plus backup coverage.",
        line_type: ['Farming'],
        signal_tags: ['people_daily_execution']
    },
    {
        qid: 'cattle_people_qs_mistakes',
        pillar: 'People',
        industry: 'cattle',
        weight: 1,
        textA: "We correct mistakes as they happen.",
        textB: "We correct mistakes and update the routine so it won’t repeat.",
        line_type: ['Farming'],
        signal_tags: ['people_daily_execution']
    },
    {
        qid: 'cattle_people_ds_training',
        pillar: 'People',
        industry: 'cattle',
        weight: 1,
        textA: "Training is verbal.",
        textB: "Training is demonstrated and checked.",
        line_type: ['Farming'],
        signal_tags: ['people_daily_execution']
    },
    {
        qid: 'cattle_people_ds_incentives',
        pillar: 'People',
        industry: 'cattle',
        weight: 1,
        textA: "Incentives reward attendance.",
        textB: "Incentives reward survival + output + low waste.",
        line_type: ['Farming'],
        signal_tags: ['people_daily_execution']
    },

    // 7. Finance & Cash Control -> Money
    {
        qid: 'cattle_money_qs_feed_spend',
        pillar: 'Money',
        industry: 'cattle',
        weight: 1,
        textA: "We know roughly what we spend on feed.",
        textB: "We track feed spend by group/batch.",
        line_type: ['Farming'],
        signal_tags: ['finance_cash_control']
    },
    {
        qid: 'cattle_money_qs_selling',
        pillar: 'Money',
        industry: 'cattle',
        weight: 1,
        textA: "We sell when cash is tight.",
        textB: "We sell when cash is tight and the batch is within a planned window.",
        line_type: ['Farming'],
        signal_tags: ['finance_cash_control']
    },
    {
        qid: 'cattle_money_ds_profit',
        pillar: 'Money',
        industry: 'cattle',
        weight: 1,
        textA: "We know revenue.",
        textB: "We know revenue and loss leaks.",
        line_type: ['Farming'],
        signal_tags: ['finance_cash_control']
    },
    {
        qid: 'cattle_money_ds_reserves',
        pillar: 'Money',
        industry: 'cattle',
        weight: 1,
        textA: "We don’t plan reserves.",
        textB: "We keep a small reserve for predictable shocks.",
        line_type: ['Farming'],
        signal_tags: ['finance_cash_control']
    },

    // 8. Records, Data & Compliance -> Innovation
    {
        qid: 'cattle_innov_qs_routine',
        pillar: 'Innovation',
        industry: 'cattle',
        weight: 1,
        textA: "We keep records when we remember.",
        textB: "We keep records as part of a daily routine.",
        line_type: ['Farming'],
        signal_tags: ['records_data_compliance']
    },
    {
        qid: 'cattle_innov_qs_review',
        pillar: 'Innovation',
        industry: 'cattle',
        weight: 1,
        textA: "We review performance when there’s a problem.",
        textB: "We review performance at month-end even when fine.",
        line_type: ['Farming'],
        signal_tags: ['records_data_compliance']
    },
    {
        qid: 'cattle_innov_ds_health_log',
        pillar: 'Innovation',
        industry: 'cattle',
        weight: 1,
        textA: "We remember health events.",
        textB: "We log health events briefly.",
        line_type: ['Farming'],
        signal_tags: ['records_data_compliance']
    },
    {
        qid: 'cattle_innov_ds_action',
        pillar: 'Innovation',
        industry: 'cattle',
        weight: 1,
        textA: "Data is collected but unused.",
        textB: "Data triggers 1–2 action decisions monthly.",
        line_type: ['Farming'],
        signal_tags: ['records_data_compliance']
    }
];
