import { LibraryItem } from '../../types';

export const FARM_MACHINERY_LIBRARY: LibraryItem[] = [
    // 1. Market & Offer -> Market
    {
        id: 'strength_niche_focus',
        industry: 'farm_machinery',
        business_size_fit: ['solo', 'micro', 'small', 'medium'],
        pillar: 'Market',
        type: 'strength',
        text: "We win on a clear niche (e.g. specialized irrigation, harvesting) rather than chasing every job.",
        signal_tags: ['market_offer_positioning'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_territory_promise',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'strength',
        text: "We have defined service territories and response-time promises we actually hit.",
        signal_tags: ['market_offer_positioning'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_uptime_sales',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Market',
        type: 'strength',
        text: "We sell uptime (service plans, seasonal checks), not just emergency repairs.",
        signal_tags: ['market_offer_positioning'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_chase_any_job',
        industry: 'farm_machinery',
        business_size_fit: ['solo', 'micro', 'small'],
        pillar: 'Market',
        type: 'leak',
        text: "We chase 'any job' to stay busy, attracting price shoppers and late payers.",
        signal_tags: ['market_offer_positioning'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_seasonal_crash',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'leak',
        text: "Seasonal peaks crush us, but the off-season is silent due to zero pipeline planning.",
        signal_tags: ['market_offer_positioning'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_single_client_risk',
        industry: 'farm_machinery',
        business_size_fit: ['micro', 'small'],
        pillar: 'Market',
        type: 'leak',
        text: "We rely on one big client; losing them would collapse our cash flow.",
        signal_tags: ['market_offer_positioning'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_win_rate',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Market',
        type: 'kpi',
        text: "Win rate by segment (% quotes won: installs vs repairs).",
        signal_tags: ['market_offer_positioning'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_recurring_mix',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Market',
        type: 'kpi',
        text: "Revenue mix: % recurring service plans vs one-off jobs.",
        signal_tags: ['market_offer_positioning'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },

    // 2. Pricing & Profit -> Money
    {
        id: 'strength_rate_card',
        industry: 'farm_machinery',
        business_size_fit: ['micro', 'small', 'medium'],
        pillar: 'Money',
        type: 'strength',
        text: "We price with a clear rate card (labor, travel, machine hours, overtime).",
        signal_tags: ['pricing_profit_model'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_diagnostic_fee',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'strength',
        text: "We separate diagnostic fees from repair/install quotes.",
        signal_tags: ['pricing_profit_model'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_mobilization_charge',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'strength',
        text: "We charge for mobilization and minimum hours on every callout.",
        signal_tags: ['pricing_profit_model'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_quote_memory',
        industry: 'farm_machinery',
        business_size_fit: ['solo', 'micro', 'small'],
        pillar: 'Money',
        type: 'leak',
        text: "We quote from memory, making every job a new negotiation.",
        signal_tags: ['pricing_profit_model'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_travel_underpriced',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "We underprice travel and setup time, eating into our margins.",
        signal_tags: ['pricing_profit_model'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_emotional_discount',
        industry: 'farm_machinery',
        business_size_fit: ['solo', 'micro', 'small'],
        pillar: 'Money',
        type: 'leak',
        text: "Discounts are emotional ('the client insisted') rather than rule-based.",
        signal_tags: ['pricing_profit_model'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_gross_margin_job',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'kpi',
        text: "Gross margin % per job type (install / repair / hire).",
        signal_tags: ['pricing_profit_model'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_quote_accuracy',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'kpi',
        text: "Quote accuracy (% jobs within ±10% estimated hours).",
        signal_tags: ['pricing_profit_model'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },

    // 3. Service Operations -> Operations
    {
        id: 'strength_triage_rules',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "We book jobs with triage rules (crop-at-risk, severity) to prioritize correctly.",
        signal_tags: ['service_operations_dispatch'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_parts_confirm',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "We confirm parts availability before promising dates to customers.",
        signal_tags: ['service_operations_dispatch'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_urgent_chaos',
        industry: 'farm_machinery',
        business_size_fit: ['micro', 'small'],
        pillar: 'Operations',
        type: 'leak',
        text: "Everything is urgent; technicians choose jobs randomly or based on who shouts loudest.",
        signal_tags: ['service_operations_dispatch'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_route_waste',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "No route planning leads to daily fuel and time leaks.",
        signal_tags: ['service_operations_dispatch'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_first_time_fix',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "First-time fix rate %.",
        signal_tags: ['service_operations_dispatch'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_sla_response',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'kpi',
        text: "SLA hit rate (% calls responded within target window).",
        signal_tags: ['service_operations_dispatch'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },

    // 4. Fleet Reliability -> Operations (Assets)
    {
        id: 'strength_pm_schedule',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium', 'large'],
        pillar: 'Operations',
        type: 'strength',
        text: "We run preventive maintenance (PM) schedules based on machine/engine hours.",
        signal_tags: ['fleet_reliability_maintenance'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_workshop_standard',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "We have a workshop standard: tools controlled, cleanliness, and calibration.",
        signal_tags: ['fleet_reliability_maintenance'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_breakdown_maintenance',
        industry: 'farm_machinery',
        business_size_fit: ['micro', 'small'],
        pillar: 'Operations',
        type: 'leak',
        text: "Maintenance happens only after breakdown; we operate an emergency-only fleet.",
        signal_tags: ['fleet_reliability_maintenance'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_tool_chaos',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "'Borrowed tools' culture leads to lost time searching for equipment.",
        signal_tags: ['fleet_reliability_maintenance'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_uptime',
        industry: 'farm_machinery',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Uptime % (available hours / planned hours).",
        signal_tags: ['fleet_reliability_maintenance'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_mttr',
        industry: 'farm_machinery',
        business_size_fit: ['medium', 'large'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Mean Time To Repair (MTTR).",
        signal_tags: ['fleet_reliability_maintenance'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },

    // 5. Parts & Inventory -> Operations (Inventory)
    {
        id: 'strength_parts_control',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "Parts are controlled with bin locations, reorder points, and cycle counts.",
        signal_tags: ['parts_inventory_control'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_critical_spares',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'strength',
        text: "We stock critical spares for the top 20 failure points to prevent downtime.",
        signal_tags: ['parts_inventory_control'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_parts_pockets',
        industry: 'farm_machinery',
        business_size_fit: ['micro', 'small'],
        pillar: 'Operations',
        type: 'leak',
        text: "'Parts in pockets' culture means shrinkage is treated as normal.",
        signal_tags: ['parts_inventory_control'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_stockout_promises',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'leak',
        text: "Stockouts cause idle crews and broken promises to customers.",
        signal_tags: ['parts_inventory_control'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_inventory_accuracy',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Inventory accuracy (%).",
        signal_tags: ['parts_inventory_control'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_fill_rate',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Operations',
        type: 'kpi',
        text: "Fill rate (% jobs completed without parts delay).",
        signal_tags: ['parts_inventory_control'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },

    // 6. People & Safety -> People
    {
        id: 'strength_training_cadence',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'People',
        type: 'strength',
        text: "We have a defined skills matrix and training cadence for technicians.",
        signal_tags: ['people_safety_compliance'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_safety_culture',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'People',
        type: 'strength',
        text: "We enforce LOTO, guarding, and PPE; safety is a system, not a poster.",
        signal_tags: ['people_safety_compliance'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_hero_tech',
        industry: 'farm_machinery',
        business_size_fit: ['micro', 'small'],
        pillar: 'People',
        type: 'leak',
        text: "We depend on one 'hero technician' while everyone else is weak.",
        signal_tags: ['people_safety_compliance'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_safety_shortcuts',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'People',
        type: 'leak',
        text: "Safety shortcuts are tolerated, creating injury risk and legal liability.",
        signal_tags: ['people_safety_compliance'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_technician_productivity',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'People',
        type: 'kpi',
        text: "Technician productivity (billable hours / paid hours).",
        signal_tags: ['people_safety_compliance'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_safety_incidents',
        industry: 'farm_machinery',
        business_size_fit: ['medium', 'large'],
        pillar: 'People',
        type: 'kpi',
        text: "Safety incident rate (TRIR / near-miss reporting).",
        signal_tags: ['people_safety_compliance'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },

    // 7. Finance -> Money
    {
        id: 'strength_payment_terms',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'strength',
        text: "We enforce clear payment terms: deposit, milestones, and completion sign-off.",
        signal_tags: ['finance_working_capital'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_fuel_tracking',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'strength',
        text: "Fuel, lubricants, and consumables are tracked and reconciled per job.",
        signal_tags: ['finance_working_capital'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_bank_of_net30',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'leak',
        text: "We finish work before deposits are paid, effectively funding our customers.",
        signal_tags: ['finance_working_capital'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_no_cost_tracking',
        industry: 'farm_machinery',
        business_size_fit: ['micro', 'small'],
        pillar: 'Money',
        type: 'leak',
        text: "No cost center tracking means job profitability is pure guesswork.",
        signal_tags: ['finance_working_capital'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_dso',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Money',
        type: 'kpi',
        text: "Days Sales Outstanding (DSO).",
        signal_tags: ['finance_working_capital'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_utilization',
        industry: 'farm_machinery',
        business_size_fit: ['medium', 'large'],
        pillar: 'Money',
        type: 'kpi',
        text: "Asset utilization rate (%).",
        signal_tags: ['finance_working_capital'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },

    // 8. Data & Quality -> Innovation
    {
        id: 'strength_standard_checklists',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'strength',
        text: "We use standard checklists for installs, commissionings, and closeouts.",
        signal_tags: ['data_quality_ci'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'strength_feedback_loop',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'strength',
        text: "Customer feedback triggers specific process fixes, not just apologies.",
        signal_tags: ['data_quality_ci'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'leak_whatsapp_data',
        industry: 'farm_machinery',
        business_size_fit: ['micro', 'small'],
        pillar: 'Innovation',
        type: 'leak',
        text: "Critical data exists only in WhatsApp chats, making analysis impossible.",
        signal_tags: ['data_quality_ci'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'leak_repeat_failures',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'leak',
        text: "Repeat failures aren't analyzed, so we keep suffering the same costs.",
        signal_tags: ['data_quality_ci'],
        line_type: ['Service'],
        severity_fit: ['Critical']
    },
    {
        id: 'kpi_checklist_compliance',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'kpi',
        text: "Checklist compliance rate %.",
        signal_tags: ['data_quality_ci'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    },
    {
        id: 'kpi_repeat_failure_rate',
        industry: 'farm_machinery',
        business_size_fit: ['small', 'medium'],
        pillar: 'Innovation',
        type: 'kpi',
        text: "Repeat failure rate (top 10 faults).",
        signal_tags: ['data_quality_ci'],
        line_type: ['Service'],
        severity_fit: ['Strong']
    }
];
