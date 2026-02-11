
import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [
    // --- PACK A: Weight & Grade Control (Market) ---
    {
        action_id: 'WEIGHT_GRADE_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['blind_pricing', 'reactive_selling'],
        title: 'Weight & Grade Control (7 Days)',
        days: 7,
        effort: 'S',
        text: "Stop selling blind. 1) Create weight bands. 2) Weigh/tape 5 animals to calibrate. 3) Assign grades to sale stock.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Sales', sme: 'Sales Mgr' },
        kpi_links: ['avg_selling_price', 'price_variance'],
        impact_score: 5
    },
    {
        action_id: 'WEIGHT_GRADE_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Market',
        signal_tags: ['blind_pricing', 'reactive_selling'],
        title: 'Weight & Grade Control (30 Days)',
        days: 30,
        effort: 'M',
        text: "Systematize. Weigh monthly. Assign target sell dates. Create a 'Sell Queue' visible to team.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Sales', sme: 'Sales Mgr' },
        kpi_links: ['avg_selling_price', 'distress_sale_pct'],
        impact_score: 5
    },

    // --- PACK B: Feed Gap Plan (Operations/Money) ---
    {
        action_id: 'FEED_GAP_PLAN_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['drought_panic', 'feed_waste'],
        title: 'Feed Gap Plan (7 Days)',
        days: 7,
        effort: 'S',
        text: "Prevent crash. Forecast dry season length. Calculate feed needs. Locate hay/silage source NOW.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Ops Lead', sme: 'Farm Mgr' },
        kpi_links: ['dry_season_loss_pct', 'feed_cost_head'],
        impact_score: 5
    },
    {
        action_id: 'FEED_GAP_PLAN_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Operations',
        signal_tags: ['drought_panic', 'feed_waste'],
        title: 'Feed Gap Plan (30 Days)',
        days: 30,
        effort: 'M',
        text: "Build reserves. Secure 30 days of fodder. Set ration rules. Train staff on waste reduction.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Ops Lead', sme: 'Farm Mgr' },
        kpi_links: ['drought_feed_days', 'body_condition_score'],
        impact_score: 5
    },

    // --- PACK C: Health Calendar (Risk) ---
    {
        action_id: 'HEALTH_CALENDAR_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['disease_blindspot', 'mortality_blindness'],
        title: 'Health Calendar (7 Days)',
        days: 7,
        effort: 'S',
        text: "Stop repeats. Create vaccination/deworming schedule. Isolate sick animals immediately. Start treatment log.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Vet/Tech', sme: 'Vet Officer' },
        kpi_links: ['morbidity_rate', 'outbreak_response_time'],
        impact_score: 5
    },
    {
        action_id: 'HEALTH_CALENDAR_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['disease_blindspot', 'mortality_blindness'],
        title: 'Health Calendar (30 Days)',
        days: 30,
        effort: 'M',
        text: "Embed routine. Execute first cycle of schedule. Review treatment success. Establish quarantine SOP.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Vet/Tech', sme: 'Vet Officer' },
        kpi_links: ['mortality_rate', 'treatment_success_rate'],
        impact_score: 5
    },

    // --- PACK D: Calving Survival Protocol (Innovation) ---
    {
        action_id: 'CALVING_SURVIVAL_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['calf_mortality_risk', 'future_profit_leak'],
        title: 'Calving Survival (7 Days)',
        days: 7,
        effort: 'S',
        text: "Save calves. Identify pregnant cows. Prepare clean calving area. Buy colostrum/iodine kit.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Herdsman', sme: 'Breeding Mgr' },
        kpi_links: ['calf_mortality_pct', 'conception_rate'],
        impact_score: 5
    },
    {
        action_id: 'CALVING_SURVIVAL_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Innovation',
        signal_tags: ['calf_mortality_risk', 'future_profit_leak'],
        title: 'Calving Survival (30 Days)',
        days: 30,
        effort: 'M',
        text: "Grow strong. Monitor calf growth weekly. Ensure colostrum within 6 hours rule. Plan weaning.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Herdsman', sme: 'Breeding Mgr' },
        kpi_links: ['weaning_weight', 'calving_interval'],
        impact_score: 5
    },

    // --- PACK E: Theft & Movement Control (Risk/People) ---
    {
        action_id: 'THEFT_MOVEMENT_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['loss_incidents', 'record_completeness'],
        title: 'Theft/Movement Control (7 Days)',
        days: 7,
        effort: 'S',
        text: "Lock it down. Tag/paint all animals. Count physically. Start 'Movement Log' - no exit without record.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Security', sme: 'Security Lead' },
        kpi_links: ['loss_incidents', 'record_completeness'],
        impact_score: 4
    },
    {
        action_id: 'THEFT_MOVEMENT_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Risk',
        signal_tags: ['loss_incidents', 'record_completeness'],
        title: 'Theft/Movement Control (30 Days)',
        days: 30,
        effort: 'M',
        text: "Secure perimeter. Fix fences/gates. Monthly reconciliation of Count vs Log. Enforce access rules.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Security', sme: 'Security Lead' },
        kpi_links: ['stocking_rate', 'asset_uptime'],
        impact_score: 4
    },

    // --- PACK F: Routine Discipline Board (Operations/People) ---
    {
        action_id: 'ROUTINE_DISCIPLINE_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['routine_drift', 'reactive_maintenance'],
        title: 'Routine Discipline (7 Days)',
        days: 7,
        effort: 'S',
        text: "Set the rhythm. List daily critical tasks. Assign specific owners. Inspect at 10am daily.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Supervisor', sme: 'Ops Mgr' },
        kpi_links: ['routine_compliance', 'labor_productivity'],
        impact_score: 4
    },
    {
        action_id: 'ROUTINE_DISCIPLINE_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'People',
        signal_tags: ['routine_drift', 'reactive_maintenance'],
        title: 'Routine Discipline (30 Days)',
        days: 30,
        effort: 'M',
        text: "Culture of consistency. Whiteboard tracker visible to all. Reward high compliance. Review weekly.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Supervisor', sme: 'Ops Mgr' },
        kpi_links: ['routine_compliance', 'injury_rate'],
        impact_score: 4
    }
];

// Reusing STABILIZE PROFIT and BUILD CONTROL as general placeholders if needed,
// but mapped specifically in the questions.ts. Creating specific definitions here
// if they don't map to the Packs A-F directly.
// The user request maps 'STABILIZE_PROFIT_7D' to P2 and P7. Let's create a generic one.

export const extraActions: ActionDefinition[] = [
    {
        action_id: 'STABILIZE_PROFIT_7D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['blind_spend', 'cashflow_crunch'],
        title: 'Stabilize Profit (7 Days)',
        days: 7,
        effort: 'M',
        text: "Baseline the herd. Count by category. Separate farm cash from home cash. List debts.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Admin', sme: 'Finance' },
        kpi_links: ['gross_margin_animal', 'cost_per_head'],
        impact_score: 5
    },
    {
        action_id: 'BUILD_CONTROL_30D',
        industry: 'livestock',
        line_type: ['all'],
        pillar: 'Money',
        signal_tags: ['blind_spend', 'cashflow_crunch'],
        title: 'Build Control (30 Days)',
        days: 30,
        effort: 'M',
        text: "Financial review. Track costs per head. Set 'Profit per Head' targets. Build Dry Season buffer.",
        default_owner_by_size: { solo: 'Owner', small_team: 'Admin', sme: 'Finance' },
        kpi_links: ['gross_margin_animal', 'budget_variance'],
        impact_score: 5
    }
];

// Append extraActions to actions array
actions.push(...extraActions);
