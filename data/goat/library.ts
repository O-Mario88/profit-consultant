
export const STRENGTH_COPY = {
    // Pillar 1: Market
    'market_pricing_power': "You know your best selling seasons and sort goats by age/sex/condition.",
    'market_negotiation': "You track local price ranges weekly and negotiate using weight/facts.",
    'market_customer': "You avoid distress selling and have repeat customers who trust your quality.",

    // Pillar 2: Herd Strategy
    'leadership_purpose': "You have a clear purpose (meat/breeding) and ideal herd structure.",
    'leadership_culling': "You set culling rules and keep replacements from best mothers.",
    'leadership_breeding': "You avoid inbreeding through controlled buck rotation.",

    // Pillar 3: Feeding
    'operations_dry_season': "You plan feed/browse reserves and supplement strategically.",
    'operations_water': "Consistent clean water and minerals drive your herd's growth.",
    'operations_bcs': "You monitor Body Condition Score (BCS) routine and adjust feed by group.",

    // Pillar 4: Health
    'risk_prevention': "You follow a health calendar including deworming and vaccination.",
    'risk_quarantine': "New goats are quarantined; illness is detected early (appetite/stool).",
    'risk_housing': "Dry, ventilated housing reduces pneumonia and foot rot risks.",

    // Pillar 5: Breeding (Innovation)
    'innovation_breeding': "You control mating seasons and track kidding/doe performance.",
    'innovation_kids': "Kids are protected early (warmth/hygiene), reducing mortality.",
    'innovation_weaning': "Weaning is planned with feed and health support; replacements are chosen wisely.",

    // Pillar 6: Operations (People)
    'people_housing': "Housing is clean and ventilated; separate categories prevent competition.",
    'people_routines': "Daily routines (feed/water/checks) are consistent; tasks are not forgotten.",
    'people_handling': "Goats are handled calmly, reducing stress and injury.",

    // Pillar 7: Finance
    'money_economics': "You know costs per doe per month and margins by category.",
    'money_distress': "You separate farm cash from home cash and budget for dry seasons.",
    'money_tracking': "Losses (deaths/theft) are tracked as financial leaks, not just bad luck.",

    // Pillar 8: Risk
    'risk_security': "Goats are tagged/marked and counted regularly; security is tight.",
    'risk_drought': "You have a drought response plan and reconcile herd numbers frequently.",
    'risk_records': "Records are kept and used to learn from mistakes; outbreaks are isolated quickly."
};

export const WEAKNESS_COPY = {
    // Pillar 1: Market
    'market_reactive': "You sell when you need money, not when goats are ready.",
    'market_blind': "Pricing is set by the buyer; you don't compare or weigh.",
    'market_desperation': "You sell mixed groups and lose premiums; distress sales are common.",

    // Pillar 2: Herd Strategy
    'leadership_drift': "Herd grows randomly; unproductive does stay too long.",
    'leadership_overstock': "Overstocking causes thin goats; buck management is weak.",
    'leadership_inbreeding': "Inbreeding reduces growth; replacements are chosen randomly.",

    // Pillar 3: Feeding
    'operations_starvation': "Dry season deletes profit; you rely on 'finding grass'.",
    'operations_competition': "Kids compete with adults; water/minerals are inconsistent.",
    'operations_waste': "Feed is wasted; weight loss is accepted as normal.",

    // Pillar 4: Health
    'risk_parasites': "Parasites keep goats thin; treatment is reactive and late.",
    'risk_outbreak': "New goats mix immediately; disease spreads through the herd.",
    'risk_mortality': "Kid deaths are 'normal'; dosing is done by guesswork.",

    // Pillar 5: Breeding (Innovation)
    'innovation_chaos': "Breeding is uncontrolled; kidding happens unpredictably.",
    'innovation_kid_loss': "Kidding areas are dirty; kids die from cold or infection.",
    'innovation_barren': "Barren does eat profit; buck management is weak.",

    // Pillar 6: Operations (People)
    'people_damp': "Damp housing causes pneumonia/foot rot; cleaning is irregular.",
    'people_mixed': "Mixed groups cause injury/competition; routines depend on mood.",
    'people_drift': "Infrastructure breaks often; escapes and theft are risks.",

    // Pillar 7: Finance
    'money_blindness': "You don't know true costs; 'profit' is just a guess.",
    'money_leak': "Small daily withdrawals drain cash; emergencies force doe sales.",
    'money_no_track': "Kid losses and theft are not valued as financial leaks.",

    // Pillar 8: Risk
    'risk_theft': "Theft happens and you find out late; no regular counting.",
    'risk_panic': "Drought triggers panic selling; disease spreads before isolation.",
    'risk_no_data': "No records mean repeated mistakes and hidden losses."
};

export const KPI_COPY = {
    'avg_selling_price': { label: "Avg Selling Price", unit: "UGX" },
    'percent_sold_target': { label: "% Sold at Target", unit: "%" },
    'buyer_concentration': { label: "Top Buyer Share", unit: "%" },
    'distress_sale_pct': { label: "Distress Sale Rate", unit: "%" },
    'days_harvest_to_cash': { label: "Days to Cash", unit: "Days" },
    'herd_composition': { label: "Herd Composition", unit: "%" },
    'culling_rate': { label: "Culling Rate", unit: "%" },
    'replacement_rate': { label: "Replacement Rate", unit: "%" },
    'stocking_pressure_index': { label: "Stocking Pressure", unit: "Goats/Acre" },
    'feed_cost_head': { label: "Feed Cost per Head", unit: "UGX" },
    'dry_season_loss_pct': { label: "Dry Season Weight Loss", unit: "%" },
    'kid_creep_feed': { label: "Kid Creep Feed", unit: "Yes/No" },
    'water_uptime': { label: "Water Uptime", unit: "Days/Wk" },
    'kid_mortality_pct': { label: "Kid Mortality", unit: "%" },
    'morbidity_rate': { label: "Sickness Rate", unit: "%/mth" },
    'treatment_success_rate': { label: "Treatment Success", unit: "%" },
    'kidding_rate': { label: "Kidding Rate", unit: "%" },
    'kids_weaned_doe': { label: "Kids Weaned/Doe", unit: "#" },
    'weaning_weight': { label: "Weaning Weight", unit: "kg" },
    'housing_hygiene_score': { label: "Housing Hygiene", unit: "1-10" },
    'routine_compliance': { label: "Routine Compliance", unit: "%" },
    'escape_incidents': { label: "Escape Incidents", unit: "#" },
    'cost_per_doe': { label: "Cost per Doe", unit: "UGX/mth" },
    'gross_margin_category': { label: "Gross Margin", unit: "%" },
    'count_variance': { label: "Count Variance", unit: "#" },
    'loss_incidents': { label: "Theft/Loss Count", unit: "#" },
    'outbreak_response_time': { label: "Outbreak Response", unit: "Hours" }
};

export const library = {
    STRENGTH_COPY,
    WEAKNESS_COPY,
    KPI_COPY
};
