
import { QuestionDefinition } from '../../types';

export const SMALL_RUMINANTS_QUESTIONS: QuestionDefinition[] = [
    // --- QUICK SCAN (16 Questions) ---

    // P1 Market & Pricing Power (Market)
    {
        qid: 'sr_market_qs_selling_week',
        pillar: 'Market',
        industry: 'small_ruminants',
        weight: 1,
        textA: "We decide selling week mainly based on cash needs + who is buying now.",
        textB: "We decide selling week mainly based on animal readiness + demand periods (holidays/market peaks).",
        line_type: ['Farming'],
        signal_tags: ['market_readiness']
    },
    {
        qid: 'sr_market_qs_negotiation',
        pillar: 'Market',
        industry: 'small_ruminants',
        weight: 1,
        textA: "We negotiate mostly using “price per head” and appearance.",
        textB: "We negotiate mostly using a weight/condition estimate (tape/scale/score) and a minimum acceptable price.",
        line_type: ['Farming'],
        signal_tags: ['pricing_power']
    },

    // P2 Breeding, Genetics & Herd/Flock Strategy (Operations)
    {
        qid: 'sr_ops_qs_breeding_timing',
        pillar: 'Operations',
        industry: 'small_ruminants',
        weight: 1,
        textA: "Breeding happens as animals mix; we separate only when necessary.",
        textB: "Breeding happens in planned windows; we separate to control timing and outcomes.",
        line_type: ['Farming'],
        signal_tags: ['breeding_strategy']
    },
    {
        qid: 'sr_ops_qs_replacement',
        pillar: 'Operations',
        industry: 'small_ruminants',
        weight: 1,
        textA: "We keep replacement females mainly by size/looks + “she’s from a good mother.”",
        textB: "We keep replacement females mainly by survival + mothering + weaning success history.",
        line_type: ['Farming'],
        signal_tags: ['genetics_selection']
    },

    // P3 Nutrition, Grazing & Feed System (Operations)
    {
        qid: 'sr_ops_qs_supplement',
        pillar: 'Operations',
        industry: 'small_ruminants',
        weight: 1,
        textA: "Supplement is added when pasture looks low or animals start dropping condition.",
        textB: "Supplement is planned by season and stage (late pregnancy, lactation, weaners, finishers).",
        line_type: ['Farming'],
        signal_tags: ['nutrition_planning']
    },
    {
        qid: 'sr_ops_qs_feeding_groups',
        pillar: 'Operations',
        industry: 'small_ruminants',
        weight: 1,
        textA: "All animals feed in one system most days (same ration/access).",
        textB: "We split at least one group (weaners / late pregnant / lactating) for targeted feeding.",
        line_type: ['Farming'],
        signal_tags: ['feed_efficiency']
    },

    // P4 Health, Parasites, Welfare & Biosecurity (Risk)
    {
        qid: 'sr_risk_qs_parasites',
        pillar: 'Risk',
        industry: 'small_ruminants',
        weight: 1,
        textA: "Deworming/tick control is done when signs show or when we “feel it’s time.”",
        textB: "Deworming/tick control follows a routine trigger (season plan, body condition, pasture risk, vet guidance).",
        line_type: ['Farming'],
        signal_tags: ['parasite_control']
    },
    {
        qid: 'sr_risk_qs_new_animals',
        pillar: 'Risk',
        industry: 'small_ruminants',
        weight: 1,
        textA: "New animals join the herd quickly after observation.",
        textB: "New animals follow a short separation routine (even if basic) before joining.",
        line_type: ['Farming'],
        signal_tags: ['biosecurity_quarantine']
    },

    // P5 Operations, Infrastructure & Security (Leadership)
    {
        qid: 'sr_lead_qs_maintenance',
        pillar: 'Leadership',
        industry: 'small_ruminants',
        weight: 1,
        textA: "Fence/shelter repairs happen when something fails or animals escape.",
        textB: "Fence/shelter checks happen on a routine (weekly route) to prevent escapes/theft/predation.",
        line_type: ['Farming'],
        signal_tags: ['maintenance_routine']
    },
    {
        qid: 'sr_lead_qs_handling',
        pillar: 'Leadership',
        industry: 'small_ruminants',
        weight: 1,
        textA: "We handle animals using whatever space is available.",
        textB: "We use a consistent handling setup/process (even simple) to reduce stress, injury, and losses.",
        line_type: ['Farming'],
        signal_tags: ['animal_handling']
    },

    // P6 People, Roles & Daily Execution (People)
    {
        qid: 'sr_people_qs_roles',
        pillar: 'People',
        industry: 'small_ruminants',
        weight: 1,
        textA: "Work is shared informally; whoever is around handles the urgent tasks.",
        textB: "Key tasks have clear ownership (feed/water checks, health checks, records, security).",
        line_type: ['Farming'],
        signal_tags: ['role_clarity']
    },
    {
        qid: 'sr_people_qs_problem_solving',
        pillar: 'People',
        industry: 'small_ruminants',
        weight: 1,
        textA: "Problems are solved as they arise; routine changes are rare.",
        textB: "Problems trigger a small routine change/checklist update so they don’t repeat.",
        line_type: ['Farming'],
        signal_tags: ['continuous_improvement']
    },

    // P7 Finance, Cashflow & Cost Control (Money)
    {
        qid: 'sr_money_qs_cash_separation',
        pillar: 'Money',
        industry: 'small_ruminants',
        weight: 1,
        textA: "Farm money and personal money sometimes mix, but we still “know what’s happening.”",
        textB: "Farm money and personal money are separated so we can see true profit and cash needs.",
        line_type: ['Farming'],
        signal_tags: ['financial_discipline']
    },
    {
        qid: 'sr_money_qs_performance',
        pillar: 'Money',
        industry: 'small_ruminants',
        weight: 1,
        textA: "We judge performance mainly by herd growth and sales moments.",
        textB: "We judge performance mainly by cost vs output (survival rate, weaned per female, margin per animal/batch).",
        line_type: ['Farming'],
        signal_tags: ['unit_economics']
    },

    // P8 Records, Data, Traceability & Compliance (Innovation)
    {
        qid: 'sr_innov_qs_records',
        pillar: 'Innovation',
        industry: 'small_ruminants',
        weight: 1,
        textA: "Records are mostly memory + a few notes when something important happens.",
        textB: "Records are a routine (births, deaths, treatments, sales) even if very simple.",
        line_type: ['Farming'],
        signal_tags: ['record_keeping']
    },
    {
        qid: 'sr_innov_qs_review',
        pillar: 'Innovation',
        industry: 'small_ruminants',
        weight: 1,
        textA: "We review performance only when there’s a problem or big loss.",
        textB: "We review a few numbers monthly and pick 1–2 fixes for the next month.",
        line_type: ['Farming'],
        signal_tags: ['data_review']
    },

    // --- DEEP SCAN QUESTIONS (160 Questions) ---

    // P1 Market & Pricing Power (20 pairs)
    { qid: 'sr_market_ds_1', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We sell when animals “look ready.”", textB: "We sell when they hit a known weight/condition target.", line_type: ['Farming'], signal_tags: ['market_readiness'] },
    { qid: 'sr_market_ds_2', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We price mainly per head.", textB: "We price mainly by liveweight estimate (scale/tape/standard method).", line_type: ['Farming'], signal_tags: ['pricing_method'] },
    { qid: 'sr_market_ds_3', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We use one main buyer most months.", textB: "We keep at least 2–3 buyer options active.", line_type: ['Farming'], signal_tags: ['buyer_diversification'] },
    { qid: 'sr_market_ds_4', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We choose selling time based on urgent needs.", textB: "We choose selling time based on buyer demand seasons + cash plan.", line_type: ['Farming'], signal_tags: ['market_timing'] },
    { qid: 'sr_market_ds_5', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We sell mixed sizes together for speed.", textB: "We sort into more uniform lots when possible.", line_type: ['Farming'], signal_tags: ['product_consistency'] },
    { qid: 'sr_market_ds_6', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We accept buyer deductions as normal.", textB: "We record deductions to learn patterns and reduce them.", line_type: ['Farming'], signal_tags: ['quality_feedback'] },
    { qid: 'sr_market_ds_7', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We rely on market rumors for price.", textB: "We check prices from at least two sources before selling.", line_type: ['Farming'], signal_tags: ['market_intelligence'] },
    { qid: 'sr_market_ds_8', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We market animals after they’re fully ready.", textB: "We start talking to buyers 1–2 weeks before they’re ready.", line_type: ['Farming'], signal_tags: ['sales_planning'] },
    { qid: 'sr_market_ds_9', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We don’t track which buyer pays fastest.", textB: "We track payment speed and prefer consistent payers.", line_type: ['Farming'], signal_tags: ['cash_cycle'] },
    { qid: 'sr_market_ds_10', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We discount quickly to move animals.", textB: "We negotiate with a minimum margin floor in mind.", line_type: ['Farming'], signal_tags: ['margin_protection'] },
    { qid: 'sr_market_ds_11', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We sell mostly live animals.", textB: "We sometimes add value (cleaning, sorting, basic documentation, consistent batch).", line_type: ['Farming'], signal_tags: ['value_addition'] },
    { qid: 'sr_market_ds_12', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "Buyers define the quality spec.", textB: "We define the spec (age, condition, health, weight band) before negotiation.", line_type: ['Farming'], signal_tags: ['quality_standards'] },
    { qid: 'sr_market_ds_13', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We sell “whatever is available.”", textB: "We plan which animals will be sold this month.", line_type: ['Farming'], signal_tags: ['sales_forecasting'] },
    { qid: 'sr_market_ds_14', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We don’t keep a buyer contact list.", textB: "We maintain a buyer list with last price and notes.", line_type: ['Farming'], signal_tags: ['customer_relationship'] },
    { qid: 'sr_market_ds_15', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We rarely follow up after sale.", textB: "We follow up to learn what buyers liked/disliked.", line_type: ['Farming'], signal_tags: ['customer_feedback'] },
    { qid: 'sr_market_ds_16', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We price based on competitor farms.", textB: "We price based on our cost + target margin + market reality.", line_type: ['Farming'], signal_tags: ['pricing_strategy'] },
    { qid: 'sr_market_ds_17', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We accept delayed payment if buyer is familiar.", textB: "We set clear payment expectations (date/method) upfront.", line_type: ['Farming'], signal_tags: ['payment_terms'] },
    { qid: 'sr_market_ds_18', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We don’t track transport/shrink impact much.", textB: "We try to note weight/condition change after transport/sale.", line_type: ['Farming'], signal_tags: ['transport_efficiency'] },
    { qid: 'sr_market_ds_19', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We avoid selling during low-demand months only if possible.", textB: "We actively plan feed/finishing to avoid low-demand months.", line_type: ['Farming'], signal_tags: ['seasonal_planning'] },
    { qid: 'sr_market_ds_20', pillar: 'Market', industry: 'small_ruminants', weight: 1, textA: "We sell when buyers come to the farm.", textB: "We sometimes go to a different market/channel if it pays better.", line_type: ['Farming'], signal_tags: ['channel_optimization'] },

    // P2 Breeding, Genetics & Herd/Flock Strategy (Operations) (20 pairs)
    { qid: 'sr_ops_ds_1', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We breed when males and females are together.", textB: "We manage breeding seasons/windows.", line_type: ['Farming'], signal_tags: ['breeding_control'] },
    { qid: 'sr_ops_ds_2', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We keep females that “usually reproduce.”", textB: "We keep females based on kidding/lambing history + mothering.", line_type: ['Farming'], signal_tags: ['culling_strategy'] },
    { qid: 'sr_ops_ds_3', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We keep a male as long as he’s healthy.", textB: "We rotate/upgrade males to improve performance and avoid inbreeding.", line_type: ['Farming'], signal_tags: ['genetics_improvement'] },
    { qid: 'sr_ops_ds_4', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We select replacements mainly by size/look.", textB: "We select replacements mainly by growth + survival + dam performance.", line_type: ['Farming'], signal_tags: ['selection_criteria'] },
    { qid: 'sr_ops_ds_5', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We rarely record birth outcomes.", textB: "We note births, losses, and difficult deliveries for learning.", line_type: ['Farming'], signal_tags: ['birth_records'] },
    { qid: 'sr_ops_ds_6', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We keep problem mothers if they’re big.", textB: "We cull repeat problem mothers (poor milk, abandons young, repeats losses).", line_type: ['Farming'], signal_tags: ['mothering_ability'] },
    { qid: 'sr_ops_ds_7', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We buy breeding stock when there’s a deal.", textB: "We buy breeding stock when it fits our planned improvement goal.", line_type: ['Farming'], signal_tags: ['stock_acquisition'] },
    { qid: 'sr_ops_ds_8', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We aim for “more animals” as success.", textB: "We aim for “more weaned kids/lambs per female” as success.", line_type: ['Farming'], signal_tags: ['productivity_metric'] },
    { qid: 'sr_ops_ds_9', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We castrate whenever convenient.", textB: "We castrate at a planned time to support growth/market and reduce fighting.", line_type: ['Farming'], signal_tags: ['management_timing'] },
    { qid: 'sr_ops_ds_10', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We wean when mothers look tired.", textB: "We wean at a planned age/weight and manage post-wean nutrition.", line_type: ['Farming'], signal_tags: ['weaning_practice'] },
    { qid: 'sr_ops_ds_11', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We don’t separate first-time mothers much.", textB: "We give first-time mothers extra support/monitoring.", line_type: ['Farming'], signal_tags: ['special_care'] },
    { qid: 'sr_ops_ds_12', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We breed females as soon as they can.", textB: "We breed females when they meet a readiness standard (body size/condition).", line_type: ['Farming'], signal_tags: ['breeding_readiness'] },
    { qid: 'sr_ops_ds_13', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We don’t plan kidding/lambing space early.", textB: "We plan a kidding/lambing area and supplies before season.", line_type: ['Farming'], signal_tags: ['birth_preparation'] },
    { qid: 'sr_ops_ds_14', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We keep many breeds mixed without a plan.", textB: "We keep breeds/types aligned with the market + environment.", line_type: ['Farming'], signal_tags: ['breed_focus'] },
    { qid: 'sr_ops_ds_15', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We keep aggressive males if productive.", textB: "We avoid aggressive males for safety and reduced stress losses.", line_type: ['Farming'], signal_tags: ['temperament_selection'] },
    { qid: 'sr_ops_ds_16', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We rarely do pregnancy checks.", textB: "We at least identify likely pregnant females by observation/behavior + schedule.", line_type: ['Farming'], signal_tags: ['pregnancy_diagnosis'] },
    { qid: 'sr_ops_ds_17', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We replace losses by buying more animals.", textB: "We replace losses by fixing survival first, then expanding.", line_type: ['Farming'], signal_tags: ['sustainability'] },
    { qid: 'sr_ops_ds_18', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We don’t manage male:female ratio intentionally.", textB: "We manage male:female ratio to avoid missed breeding and stress.", line_type: ['Farming'], signal_tags: ['breeding_ratio'] },
    { qid: 'sr_ops_ds_19', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We keep older animals until they decline badly.", textB: "We cull older animals earlier to protect feed and productivity.", line_type: ['Farming'], signal_tags: ['age_structure'] },
    { qid: 'sr_ops_ds_20', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "Our breeding goal is “bigger animals.”", textB: "Our breeding goal includes survival, fertility, and feed efficiency.", line_type: ['Farming'], signal_tags: ['breeding_objectives'] },


    // P3 Nutrition, Grazing & Feed System (Operations) (20 pairs)
    { qid: 'sr_feed_ds_1', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "Animals graze wherever they find grass.", textB: "Grazing follows a rough rotation/rest plan.", line_type: ['Farming'], signal_tags: ['grazing_management'] },
    { qid: 'sr_feed_ds_2', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We supplement only when animals look thin.", textB: "We supplement based on season risk (dry season, lactation, growth stage).", line_type: ['Farming'], signal_tags: ['supplementation_strategy'] },
    { qid: 'sr_feed_ds_3', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We give minerals sometimes.", textB: "We give minerals consistently (especially in growth/reproduction phases).", line_type: ['Farming'], signal_tags: ['mineral_nutrition'] },
    { qid: 'sr_feed_ds_4', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We mix all groups at feeding time.", textB: "We separate at least “youngstock vs adults” or “pregnant/lactating vs others.”", line_type: ['Farming'], signal_tags: ['feed_grouping'] },
    { qid: 'sr_feed_ds_5', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We rely on natural pasture only.", textB: "We plan at least one feed reserve strategy (hay, fodder, purchased feed, browse).", line_type: ['Farming'], signal_tags: ['feed_security'] },
    { qid: 'sr_feed_ds_6', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We don’t measure feed waste much.", textB: "We watch for waste points (spillage, rain, trampling) and correct them.", line_type: ['Farming'], signal_tags: ['waste_reduction'] },
    { qid: 'sr_feed_ds_7', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "Water is assumed to be fine.", textB: "Water access is checked daily (cleanliness + availability).", line_type: ['Farming'], signal_tags: ['water_quality'] },
    { qid: 'sr_feed_ds_8', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We buy feed when it’s finished.", textB: "We buy feed before it’s finished with a buffer.", line_type: ['Farming'], signal_tags: ['inventory_management'] },
    { qid: 'sr_feed_ds_9', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We use the same feed for all ages.", textB: "We adjust feed for stage (weaners, pregnant, lactating, finishers).", line_type: ['Farming'], signal_tags: ['phase_feeding'] },
    { qid: 'sr_feed_ds_10', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We don’t track body condition formally.", textB: "We do a quick condition check weekly and adjust earlier.", line_type: ['Farming'], signal_tags: ['condition_scoring'] },
    { qid: 'sr_feed_ds_11', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We allow animals to graze wet/dewy pasture anytime.", textB: "We consider timing to reduce bloat/wet pasture issues where relevant.", line_type: ['Farming'], signal_tags: ['grazing_timing'] },
    { qid: 'sr_feed_ds_12', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We change feed suddenly when supply changes.", textB: "We transition feeds gradually when possible.", line_type: ['Farming'], signal_tags: ['feed_transition'] },
    { qid: 'sr_feed_ds_13', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We don’t plan for drought until it hits.", textB: "We plan drought actions early (stock reduction, fodder, contracts).", line_type: ['Farming'], signal_tags: ['drought_planning'] },
    { qid: 'sr_feed_ds_14', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We let animals browse risky areas freely.", textB: "We manage browsing access (poisonous plants, thorn injury, crop damage risk).", line_type: ['Farming'], signal_tags: ['browse_management'] },
    { qid: 'sr_feed_ds_15', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "Feed is stored wherever there’s space.", textB: "Feed is stored where it stays dry and losses are visible.", line_type: ['Farming'], signal_tags: ['feed_storage'] },
    { qid: 'sr_feed_ds_16', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We rely on “average feeding.”", textB: "We target higher feed to high-return groups (young, lactating, finishers).", line_type: ['Farming'], signal_tags: ['targeted_nutrition'] },
    { qid: 'sr_feed_ds_17', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We don’t estimate growth rates.", textB: "We estimate growth consistently (tape/scale/standard visual scoring).", line_type: ['Farming'], signal_tags: ['growth_tracking'] },
    { qid: 'sr_feed_ds_18', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We keep stocking level constant.", textB: "We adjust stocking level based on pasture and season.", line_type: ['Farming'], signal_tags: ['stocking_rate'] },
    { qid: 'sr_feed_ds_19', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We use leftovers for animals to avoid waste.", textB: "We avoid feeding spoiled/contaminated leftovers even if it “saves money.”", line_type: ['Farming'], signal_tags: ['feed_quality'] },
    { qid: 'sr_feed_ds_20', pillar: 'Operations', industry: 'small_ruminants', weight: 1, textA: "We think nutrition is “grass + water.”", textB: "We treat nutrition as a system (energy, protein, minerals, clean water).", line_type: ['Farming'], signal_tags: ['nutrition_mindset'] },

    // P4 Health, Parasites, Welfare & Biosecurity (Risk) (20 pairs)
    { qid: 'sr_risk_ds_1', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "New animals join the group after a quick look.", textB: "New animals follow a short separation/quarantine routine.", line_type: ['Farming'], signal_tags: ['quarantine'] },
    { qid: 'sr_risk_ds_2', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We treat when illness becomes obvious.", textB: "We do daily quick checks and act on early signs.", line_type: ['Farming'], signal_tags: ['early_detection'] },
    { qid: 'sr_risk_ds_3', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "Parasite control happens when we see worms/ticks.", textB: "Parasite control follows a planned schedule or trigger (season/condition).", line_type: ['Farming'], signal_tags: ['parasite_control_plan'] },
    { qid: 'sr_risk_ds_4', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We use the same dewormer repeatedly.", textB: "We rotate strategy or check effectiveness if performance drops.", line_type: ['Farming'], signal_tags: ['resistance_management'] },
    { qid: 'sr_risk_ds_5', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "Sick animals stay with the group.", textB: "Sick animals are separated when feasible.", line_type: ['Farming'], signal_tags: ['disease_control'] },
    { qid: 'sr_risk_ds_6', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We rarely track treatments.", textB: "We log treatments and outcomes (even brief notes).", line_type: ['Farming'], signal_tags: ['health_records'] },
    { qid: 'sr_risk_ds_7', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We only call a vet when losses are serious.", textB: "We consult earlier when patterns appear.", line_type: ['Farming'], signal_tags: ['vet_usage'] },
    { qid: 'sr_risk_ds_8', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "Foot problems are handled when severe.", textB: "Foot problems are managed early (cleaning, trimming, dry area).", line_type: ['Farming'], signal_tags: ['hoof_care'] },
    { qid: 'sr_risk_ds_9', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "Housing is cleaned when it smells bad.", textB: "Housing is cleaned on a routine to prevent buildup.", line_type: ['Farming'], signal_tags: ['hygiene_routine'] },
    { qid: 'sr_risk_ds_10', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We handle animals quickly and forcefully.", textB: "We handle animals calmly to reduce injury/stress.", line_type: ['Farming'], signal_tags: ['animal_welfare'] },
    { qid: 'sr_risk_ds_11', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We accept some deaths as normal.", textB: "We investigate deaths and capture the likely cause + prevention step.", line_type: ['Farming'], signal_tags: ['mortality_investigation'] },
    { qid: 'sr_risk_ds_12', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We let visitors enter animal areas freely.", textB: "We control visitor access and movement around animals.", line_type: ['Farming'], signal_tags: ['visitor_control'] },
    { qid: 'sr_risk_ds_13', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "Equipment is shared between groups without thought.", textB: "We reduce cross-contamination (basic cleaning / dedicated tools if possible).", line_type: ['Farming'], signal_tags: ['fomite_control'] },
    { qid: 'sr_risk_ds_14', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We vaccinate only when advised in crisis.", textB: "We vaccinate as part of a preventive plan where relevant.", line_type: ['Farming'], signal_tags: ['vaccination'] },
    { qid: 'sr_risk_ds_15', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We mix ages frequently.", textB: "We manage mixing to reduce disease transfer to youngstock.", line_type: ['Farming'], signal_tags: ['age_segregation'] },
    { qid: 'sr_risk_ds_16', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We transport animals whenever needed.", textB: "We transport with stress control (spacing, timing, water/rest planning).", line_type: ['Farming'], signal_tags: ['transport_welfare'] },
    { qid: 'sr_risk_ds_17', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We treat based on memory.", textB: "We treat with a standard protocol (dose, timing, follow-up).", line_type: ['Farming'], signal_tags: ['treatment_protocol'] },
    { qid: 'sr_risk_ds_18', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We keep animals in damp/muddy areas when unavoidable.", textB: "We actively create dry resting spots even in rainy periods.", line_type: ['Farming'], signal_tags: ['housing_conditions'] },
    { qid: 'sr_risk_ds_19', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "We don’t monitor heat/cold stress much.", textB: "We adjust shade/shelter/water access in extreme weather.", line_type: ['Farming'], signal_tags: ['climate_management'] },
    { qid: 'sr_risk_ds_20', pillar: 'Risk', industry: 'small_ruminants', weight: 1, textA: "Biosecurity is “common sense.”", textB: "Biosecurity is a simple written routine everyone follows.", line_type: ['Farming'], signal_tags: ['biosecurity_awareness'] },

    // P5 Operations, Infrastructure & Security (Leadership) (20 pairs)
    { qid: 'sr_lead_ds_1', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Fences are fixed after animals escape.", textB: "Fences are checked on a weekly route.", line_type: ['Farming'], signal_tags: ['proactive_maintenance'] },
    { qid: 'sr_lead_ds_2', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Night shelter is used only in bad weather.", textB: "Night shelter is part of routine to reduce predation/theft risks.", line_type: ['Farming'], signal_tags: ['security_routine'] },
    { qid: 'sr_lead_ds_3', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We don’t have a dedicated sick/kidding area.", textB: "We have a designated area (even temporary) for sick and births.", line_type: ['Farming'], signal_tags: ['facility_zonation'] },
    { qid: 'sr_lead_ds_4', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Water points are far but manageable.", textB: "Water points are designed to reduce daily labor and stress.", line_type: ['Farming'], signal_tags: ['infrastructure_design'] },
    { qid: 'sr_lead_ds_5', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Feeding areas are wherever animals gather.", textB: "Feeding areas are planned to reduce trampling and waste.", line_type: ['Farming'], signal_tags: ['feeding_infrastructure'] },
    { qid: 'sr_lead_ds_6', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We store medicines with general supplies.", textB: "We store medicines in a controlled, safe spot.", line_type: ['Farming'], signal_tags: ['medicine_storage'] },
    { qid: 'sr_lead_ds_7', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We count animals when we remember.", textB: "We count animals on a routine schedule.", line_type: ['Farming'], signal_tags: ['inventory_count'] },
    { qid: 'sr_lead_ds_8', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Losses are noticed days later.", textB: "Losses are noticed same day due to routine checks.", line_type: ['Farming'], signal_tags: ['loss_awareness'] },
    { qid: 'sr_lead_ds_9', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Predator control is reactive.", textB: "Predator control is planned (secure housing, timing, deterrents).", line_type: ['Farming'], signal_tags: ['predator_control'] },
    { qid: 'sr_lead_ds_10', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We mix animals during handling for speed.", textB: "We handle by group to reduce stress and confusion.", line_type: ['Farming'], signal_tags: ['handling_efficiency'] },
    { qid: 'sr_lead_ds_11', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We buy equipment when there’s a crisis.", textB: "We buy/maintain basics to prevent crisis (troughs, gates, ropes).", line_type: ['Farming'], signal_tags: ['equipment_maintenance'] },
    { qid: 'sr_lead_ds_12', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We handle loading/transport without routine.", textB: "We use a consistent routine to reduce escapes/injury.", line_type: ['Farming'], signal_tags: ['transport_safety'] },
    { qid: 'sr_lead_ds_13', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Cleaning happens when there’s time.", textB: "Cleaning happens as a scheduled task.", line_type: ['Farming'], signal_tags: ['cleaning_schedule'] },
    { qid: 'sr_lead_ds_14', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We use the same space for all functions.", textB: "We create simple zones (feed storage, animal area, sick area).", line_type: ['Farming'], signal_tags: ['spatial_planning'] },
    { qid: 'sr_lead_ds_15', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Farm security is mostly trust-based.", textB: "Farm security includes routine controls (locks, lighting, access rules).", line_type: ['Farming'], signal_tags: ['security_measures'] },
    { qid: 'sr_lead_ds_16', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We rely on memory for inventory.", textB: "We maintain a simple stock list (feed, meds, tools).", line_type: ['Farming'], signal_tags: ['inventory_records'] },
    { qid: 'sr_lead_ds_17', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Repairs are done when they fail.", textB: "Repairs are done when they start showing signs of failure.", line_type: ['Farming'], signal_tags: ['preventive_maintenance'] },
    { qid: 'sr_lead_ds_18', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We let animals roam widely daily.", textB: "We manage grazing range to reduce crop damage/theft risk.", line_type: ['Farming'], signal_tags: ['range_management'] },
    { qid: 'sr_lead_ds_19', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "Worker tools are shared without tracking.", textB: "We track key tools to reduce losses and downtime.", line_type: ['Farming'], signal_tags: ['tool_control'] },
    { qid: 'sr_lead_ds_20', pillar: 'Leadership', industry: 'small_ruminants', weight: 1, textA: "We accept operational mess as normal.", textB: "We aim for predictable routines so losses become visible.", line_type: ['Farming'], signal_tags: ['operational_discipline'] },

    // P6 People, Roles & Daily Execution (People) (20 pairs)
    { qid: 'sr_people_ds_1', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Everyone does everything.", textB: "Each person owns a key outcome (feed, health check, records, security).", line_type: ['Farming'], signal_tags: ['role_definition'] },
    { qid: 'sr_people_ds_2', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Instructions are mostly verbal.", textB: "Instructions are backed by a checklist/SOP (even simple).", line_type: ['Farming'], signal_tags: ['instruction_clarity'] },
    { qid: 'sr_people_ds_3', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Staff learn by watching.", textB: "Staff learn by demonstration + quick check for correct practice.", line_type: ['Farming'], signal_tags: ['training_method'] },
    { qid: 'sr_people_ds_4', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Problems are discussed later.", textB: "Problems are recorded and assigned immediately.", line_type: ['Farming'], signal_tags: ['issue_resolution'] },
    { qid: 'sr_people_ds_5', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Routine depends on who is on duty.", textB: "Routine stays the same regardless of who is on duty.", line_type: ['Farming'], signal_tags: ['process_consistency'] },
    { qid: 'sr_people_ds_6', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Workers are judged by hours.", textB: "Workers are judged by outputs (survival, weight gain, cleanliness, compliance).", line_type: ['Farming'], signal_tags: ['performance_metrics'] },
    { qid: 'sr_people_ds_7', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Mistakes lead to blame.", textB: "Mistakes lead to system fixes (update the routine).", line_type: ['Farming'], signal_tags: ['learning_culture'] },
    { qid: 'sr_people_ds_8', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "No one owns records consistently.", textB: "One person owns records with a backup.", line_type: ['Farming'], signal_tags: ['record_ownership'] },
    { qid: 'sr_people_ds_9', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "The owner approves everything.", textB: "The owner approves only high-impact decisions.", line_type: ['Farming'], signal_tags: ['delegation'] },
    { qid: 'sr_people_ds_10', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "We hold meetings when something goes wrong.", textB: "We do short check-ins regularly.", line_type: ['Farming'], signal_tags: ['communication_rhythm'] },
    { qid: 'sr_people_ds_11', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Staff notice sick animals sometimes.", textB: "Staff are trained to spot early signs consistently.", line_type: ['Farming'], signal_tags: ['observation_skills'] },
    { qid: 'sr_people_ds_12', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Hygiene rules vary.", textB: "Hygiene rules are enforced consistently.", line_type: ['Farming'], signal_tags: ['compliance'] },
    { qid: 'sr_people_ds_13', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Staff handle animals differently.", textB: "Staff follow a standard handling method.", line_type: ['Farming'], signal_tags: ['handling_consistency'] },
    { qid: 'sr_people_ds_14', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Everyone buys supplies when they see need.", textB: "Purchasing is controlled (authorized list + reorder points).", line_type: ['Farming'], signal_tags: ['purchasing_control'] },
    { qid: 'sr_people_ds_15', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Staff are replaced often.", textB: "Staff retention is managed because routine stability matters.", line_type: ['Farming'], signal_tags: ['staff_retention'] },
    { qid: 'sr_people_ds_16', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Tasks are done “when free.”", textB: "Tasks are done by priority schedule (must-do first).", line_type: ['Farming'], signal_tags: ['prioritization'] },
    { qid: 'sr_people_ds_17', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Accountability is informal.", textB: "Accountability is tracked (who, what, by when).", line_type: ['Farming'], signal_tags: ['accountability'] },
    { qid: 'sr_people_ds_18', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Owners solve most technical problems.", textB: "Owners build capability so staff solve routine problems.", line_type: ['Farming'], signal_tags: ['capacity_building'] },
    { qid: 'sr_people_ds_19', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Discipline is handled case-by-case.", textB: "Discipline is tied to clear standards and routines.", line_type: ['Farming'], signal_tags: ['discipline_fairness'] },
    { qid: 'sr_people_ds_20', pillar: 'People', industry: 'small_ruminants', weight: 1, textA: "Training is occasional.", textB: "Training is continuous (one SOP improvement per week).", line_type: ['Farming'], signal_tags: ['continuous_training'] },


    // P7 Finance, Cashflow & Cost Control (Money) (20 pairs)
    { qid: 'sr_money_ds_1', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We track money when it’s low.", textB: "We track money weekly even when it’s okay.", line_type: ['Farming'], signal_tags: ['financial_monitoring'] },
    { qid: 'sr_money_ds_2', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We know total sales.", textB: "We know sales + the top 3 loss leaks (deaths, theft, discounts, feed waste).", line_type: ['Farming'], signal_tags: ['loss_visibility'] },
    { qid: 'sr_money_ds_3', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "Personal spending and farm spending mix sometimes.", textB: "Personal spending is separated from farm funds.", line_type: ['Farming'], signal_tags: ['financial_separation'] },
    { qid: 'sr_money_ds_4', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We buy feed based on urgency.", textB: "We buy feed based on plan + price timing.", line_type: ['Farming'], signal_tags: ['purchasing_strategy'] },
    { qid: 'sr_money_ds_5', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We don’t cost by group.", textB: "We cost by group (breeders, youngstock, finishers) even roughly.", line_type: ['Farming'], signal_tags: ['cost_allocation'] },
    { qid: 'sr_money_ds_6', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "Vet expenses are surprises.", textB: "Vet expenses are forecast with a reserve plan.", line_type: ['Farming'], signal_tags: ['expense_forecasting'] },
    { qid: 'sr_money_ds_7', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We borrow when stuck.", textB: "We anticipate cash gaps and plan before borrowing.", line_type: ['Farming'], signal_tags: ['cash_planning'] },
    { qid: 'sr_money_ds_8', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We don’t track losses in money terms.", textB: "We assign a money value to losses (death, theft, waste).", line_type: ['Farming'], signal_tags: ['loss_valuation'] },
    { qid: 'sr_money_ds_9', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We price animals based on what buyers say.", textB: "We price animals based on cost + target margin + market.", line_type: ['Farming'], signal_tags: ['pricing_logic'] },
    { qid: 'sr_money_ds_10', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We buy supplies from the closest shop.", textB: "We compare suppliers for price and reliability.", line_type: ['Farming'], signal_tags: ['supplier_selection'] },
    { qid: 'sr_money_ds_11', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We keep unproductive animals because selling feels like losing.", textB: "We sell/cull when numbers show they drain cash.", line_type: ['Farming'], signal_tags: ['asset_performance'] },
    { qid: 'sr_money_ds_12', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We sell to pay urgent bills.", textB: "We plan bill timing so sales are not forced.", line_type: ['Farming'], signal_tags: ['bill_management'] },
    { qid: 'sr_money_ds_13', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We rarely keep a cash buffer.", textB: "We keep a small buffer for predictable shocks.", line_type: ['Farming'], signal_tags: ['reserves'] },
    { qid: 'sr_money_ds_14', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We don’t track feed waste cost.", textB: "We estimate feed waste cost and attack the biggest leak.", line_type: ['Farming'], signal_tags: ['waste_costing'] },
    { qid: 'sr_money_ds_15', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We focus on herd size as wealth.", textB: "We focus on profitable output per animal as wealth.", line_type: ['Farming'], signal_tags: ['wealth_definition'] },
    { qid: 'sr_money_ds_16', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We don’t track buyer payment delays.", textB: "We track buyer payment delays and price the risk.", line_type: ['Farming'], signal_tags: ['receivables_management'] },
    { qid: 'sr_money_ds_17', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We keep costs low even if performance drops.", textB: "We invest in high-return costs (health, feed quality, survival).", line_type: ['Farming'], signal_tags: ['investment_mentality'] },
    { qid: 'sr_money_ds_18', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We don’t budget.", textB: "We budget the few biggest categories (feed, vet, labor, security).", line_type: ['Farming'], signal_tags: ['budgeting'] },
    { qid: 'sr_money_ds_19', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We don’t measure cost per weaned kid/lamb.", textB: "We estimate cost per weaned kid/lamb to guide decisions.", line_type: ['Farming'], signal_tags: ['unit_costing'] },
    { qid: 'sr_money_ds_20', pillar: 'Money', industry: 'small_ruminants', weight: 1, textA: "We think “profit = money left.”", textB: "We treat profit as measurable margin after all costs and losses.", line_type: ['Farming'], signal_tags: ['profit_understanding'] },

    // P8 Records, Data, Traceability & Compliance (Innovation) (20 pairs)
    { qid: 'sr_innov_ds_1', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "Records are kept sometimes.", textB: "Records are part of daily routine.", line_type: ['Farming'], signal_tags: ['record_habit'] },
    { qid: 'sr_innov_ds_2', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We remember births and deaths mentally.", textB: "We log births and deaths in a notebook/app.", line_type: ['Farming'], signal_tags: ['basic_logging'] },
    { qid: 'sr_innov_ds_3', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t track mother performance.", textB: "We track mother performance (kids/lambs weaned, problems, milk ability).", line_type: ['Farming'], signal_tags: ['productivity_tracking'] },
    { qid: 'sr_innov_ds_4', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "Treatment info lives in someone’s head.", textB: "Treatment info is written (date, animal/group, drug, dose).", line_type: ['Farming'], signal_tags: ['treatment_records'] },
    { qid: 'sr_innov_ds_5', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We can’t quickly tell current herd structure.", textB: "We can quickly tell how many are breeders/young/finishers.", line_type: ['Farming'], signal_tags: ['herd_demographics'] },
    { qid: 'sr_innov_ds_6', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t label groups.", textB: "We label groups/batches to track performance.", line_type: ['Farming'], signal_tags: ['group_identification'] },
    { qid: 'sr_innov_ds_7', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t review numbers monthly.", textB: "We review key numbers monthly and pick 1–2 actions.", line_type: ['Farming'], signal_tags: ['performance_review'] },
    { qid: 'sr_innov_ds_8', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t track theft risk signals.", textB: "We track losses/incidents and tighten controls based on patterns.", line_type: ['Farming'], signal_tags: ['risk_monitoring'] },
    { qid: 'sr_innov_ds_9', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t track buyer feedback.", textB: "We track buyer feedback to improve batch quality.", line_type: ['Farming'], signal_tags: ['feedback_loop'] },
    { qid: 'sr_innov_ds_10', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t track weights.", textB: "We track weights or a consistent proxy (tape/score) by batch.", line_type: ['Farming'], signal_tags: ['weight_tracking'] },
    { qid: 'sr_innov_ds_11', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t track kidding/lambing difficulties.", textB: "We track difficulty and outcomes to improve selection.", line_type: ['Farming'], signal_tags: ['genetic_tracking'] },
    { qid: 'sr_innov_ds_12', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t track mortality by age group.", textB: "We track mortality by age group to find weak points.", line_type: ['Farming'], signal_tags: ['mortality_analysis'] },
    { qid: 'sr_innov_ds_13', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t track feed purchases systematically.", textB: "We record feed purchases with dates and amounts.", line_type: ['Farming'], signal_tags: ['input_tracking'] },
    { qid: 'sr_innov_ds_14', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t keep supplier invoices.", textB: "We keep supplier invoices to verify costs and negotiate.", line_type: ['Farming'], signal_tags: ['document_retention'] },
    { qid: 'sr_innov_ds_15', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t track pasture use.", textB: "We track grazing/rest roughly to avoid overgrazing.", line_type: ['Farming'], signal_tags: ['resource_monitoring'] },
    { qid: 'sr_innov_ds_16', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t document movement/sales details.", textB: "We document movement/sales details for traceability.", line_type: ['Farming'], signal_tags: ['traceability'] },
    { qid: 'sr_innov_ds_17', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "Compliance is handled when needed.", textB: "Compliance is maintained to prevent surprises (movement rules, health rules).", line_type: ['Farming'], signal_tags: ['regulatory_compliance'] },
    { qid: 'sr_innov_ds_18', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "We don’t compare performance seasons.", textB: "We compare performance season-to-season to learn trends.", line_type: ['Farming'], signal_tags: ['trend_analysis'] },
    { qid: 'sr_innov_ds_19', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "Data is collected but not used.", textB: "Data triggers decisions (cull, feed change, health plan update).", line_type: ['Farming'], signal_tags: ['data_driven_action'] },
    { qid: 'sr_innov_ds_20', pillar: 'Innovation', industry: 'small_ruminants', weight: 1, textA: "“I know my animals” is enough.", textB: "“I know my animals + I record the basics” is our standard.", line_type: ['Farming'], signal_tags: ['professional_mindset'] }

];
