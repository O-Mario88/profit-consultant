
import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [
    // --- PACK A: Kid Survival Lock (Breeding + Health) ---
    {
        action_id: 'KID_SURVIVAL_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['kid_mortality_risk', 'future_profit_leak'],
        title: 'Kid Survival Lock (7 Days)',
        days: 7,
        effort: 'S',
        text: "Create kidding watchlist. Clean kidding pen. Start early kid checks (warmth + hygiene).",
        default_owner_by_size: { solo: 'Owner', small_team: 'Herdsman', sme: 'Breeding Mgr' },
        kpi_links: ['kid_mortality_pct', 'kids_weaned_doe'],
        impact_score: 5
    },
    {
        action_id: 'KID_SURVIVAL_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['kid_mortality_risk', 'future_profit_leak'],
        title: 'Kid Survival Lock (30 Days)',
        days: 30,
        effort: 'M',
        text: "Maintain kidding register. Execute kid survival checklist. Track weaning weights.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Herdsman', sme: 'Breeding Mgr' },
        kpi_links: ['weaning_weight', 'kidding_rate'],
        impact_score: 5
    },

    // --- PACK B: Parasite Pressure Breaker (Health + Feeding) ---
    {
        action_id: 'PARASITE_BREAKER_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['disease_spread_risk', 'quarantine_gap'],
        title: 'Parasite Breaker (7 Days)',
        days: 7,
        effort: 'S',
        text: "Set monitoring routine. Check for anemia/diarrhea. Isolate sick goats immediately.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Vet/Tech', sme: 'Vet Officer' },
        kpi_links: ['morbidity_rate', 'treatment_success_rate'],
        impact_score: 5
    },
    {
        action_id: 'PARASITE_BREAKER_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['disease_spread_risk', 'quarantine_gap'],
        title: 'Parasite Breaker (30 Days)',
        days: 30,
        effort: 'M',
        text: "Strategic deworming. Improve housing hygiene to reduce reinfection. Log treatment outcomes.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Vet/Tech', sme: 'Vet Officer' },
        kpi_links: ['morbidity_rate', 'treatment_success_rate'],
        impact_score: 5
    },

    // --- PACK C: Dry Season Feed Gap Shield (Feeding) ---
    {
        action_id: 'FEED_GAP_SHIELD_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['drought_panic', 'feed_waste'],
        title: 'Feed Gap Shield (7 Days)',
        days: 7,
        effort: 'S',
        text: "Forecast dry season. Plan reserves now. Locate hay/silage source. Reduce feed waste.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Ops Lead', sme: 'Farm Mgr' },
        kpi_links: ['dry_season_loss_pct', 'feed_cost_head'],
        impact_score: 5
    },
    {
        action_id: 'FEED_GAP_SHIELD_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['drought_panic', 'feed_waste'],
        title: 'Feed Gap Shield (30 Days)',
        days: 30,
        effort: 'M',
        text: "Build 30-day reserve. Supplement pregnant/lactating does/kids first. Track BCS stability.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Ops Lead', sme: 'Farm Mgr' },
        kpi_links: ['morbidity_rate', 'weaning_weight'],
        impact_score: 5
    },

    // --- PACK D: Herd Structure + Culling Rules (Strategy + Finance) ---
    {
        action_id: 'HERD_CULL_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['herd_structure_gap', 'overstocking_risk'],
        title: 'Herd Structure & Cull (7 Days)',
        days: 7,
        effort: 'S',
        text: "Categorize herd. Identify 'sell' candidates (old, sick, barren). Protect best does.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Supervisor', sme: 'Farm Mgr' },
        kpi_links: ['culling_rate', 'gross_margin_category'],
        impact_score: 4
    },
    {
        action_id: 'HERD_CULL_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Leadership',
        signal_tags: ['herd_structure_gap', 'overstocking_risk'],
        title: 'Herd Structure & Cull (30 Days)',
        days: 30,
        effort: 'M',
        text: "Execute cull list. Select replacements from best mothers. Map herd structure against feed capacity.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Supervisor', sme: 'Farm Mgr' },
        kpi_links: ['kidding_rate', 'stocking_pressure_index'],
        impact_score: 4
    },

    // --- PACK E: Theft & Escape Control (Risk) ---
    {
        action_id: 'THEFT_CONTROL_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['loss_denial', 'theft_risk'],
        title: 'Theft & Escape Control (7 Days)',
        days: 7,
        effort: 'S',
        text: "Tag/mark all goats. Do a physical count. Fix weak fence points. Start movement log.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Security', sme: 'Security Lead' },
        kpi_links: ['loss_incidents', 'count_variance'],
        impact_score: 5
    },
    {
        action_id: 'THEFT_CONTROL_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['loss_denial', 'theft_risk'],
        title: 'Theft & Escape Control (30 Days)',
        days: 30,
        effort: 'M',
        text: "Monthly reconciliation count. Enforce night security. Log all exits/entries.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Security', sme: 'Security Lead' },
        kpi_links: ['loss_incidents', 'escape_incidents'],
        impact_score: 5
    },

    // --- PACK F: Market Grade Ladder (Market) ---
    {
        action_id: 'MARKET_GRADE_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['blind_pricing', 'reactive_selling'],
        title: 'Market Grade Ladder (7 Days)',
        days: 7,
        effort: 'S',
        text: "Define 3 grades (Premium, Standard, Cull). Check local prices. Sort sale goats by grade.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Sales', sme: 'Sales Mgr' },
        kpi_links: ['avg_selling_price', 'distress_sale_pct'],
        impact_score: 4
    },
    {
        action_id: 'MARKET_GRADE_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['blind_pricing', 'reactive_selling'],
        title: 'Market Grade Ladder (30 Days)',
        days: 30,
        effort: 'M',
        text: "Build sell queue. Schedule sales for premium seasons (festivals). Track price per head.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Sales', sme: 'Sales Mgr' },
        kpi_links: ['avg_selling_price', 'days_harvest_to_cash'],
        impact_score: 4
    },

    // --- GENERIC 7D/30D PLANS (placeholders if queried directly) ---
    {
        action_id: 'PROFIT_STABILIZE_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['cashflow_crunch', 'blind_spend'],
        title: 'Profit Stabilize (7 Days)',
        days: 7,
        effort: 'M',
        text: "Reinvest in bottleleck (feed/health). Separate farm cash. Prepare budget.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Admin', sme: 'Finance' },
        kpi_links: ['cost_per_doe', 'budget_variance'],
        impact_score: 5
    },
    {
        action_id: 'PROFIT_CONTROL_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['cashflow_crunch', 'blind_spend'],
        title: 'Profit Control (30 Days)',
        days: 30,
        effort: 'M',
        text: "Monthly financial review. Track costs per doe. Prove margin before expansion.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Admin', sme: 'Finance' },
        kpi_links: ['gross_margin_category', 'debt_service_ratio'],
        impact_score: 5
    },

    // --- Routine Uptime (Pack G equivalent from user flow) ---
    {
        action_id: 'ROUTINE_UPTIME_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['routine_drift', 'people_drift'],
        title: 'Routine Uptime (7 Days)',
        days: 7,
        effort: 'S',
        text: "Protect critical tasks. Fix damp housing immediately. Assign roles.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Supervisor', sme: 'Ops Mgr' },
        kpi_links: ['routine_compliance', 'housing_hygiene_score'],
        impact_score: 4
    },
    {
        action_id: 'ROUTINE_UPTIME_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['routine_drift', 'people_drift'],
        title: 'Routine Uptime (30 Days)',
        days: 30,
        effort: 'M',
        text: "Checklist for daily tasks. Maintain fences proactively. Regular feed/water checks.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Supervisor', sme: 'Ops Mgr' },
        kpi_links: ['routine_compliance', 'housing_hygiene_score'],
        impact_score: 4
    }
];
