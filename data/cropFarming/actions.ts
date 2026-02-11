import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [
    // --- ACTION PACK A: Price Intelligence Loop ---
    {
        action_id: 'PRICE_INTEL_LOOP_7D',
        industry: 'agriculture',
        title: 'Price Intelligence Loop (7 Days)',
        type: 'checklist',
        description: 'Stop selling blind. Establish a routine to track market prices.',
        pillar: 'Market',
        days: 7,
        effort: 'S',
        line_type: ['all'],
        signal_tags: ['blind_pricing'],
        steps: [
            'Identify 3 reference markets (e.g., local hub, district center, processor gate).',
            'Collect prices 2x/week for your specific crop and grade.',
            'Record prices in a simple logbook or Excel sheet.',
            'Set a "Minimum Selling Price" threshold based on your costs.'
        ],
        kpi_links: ['avg_selling_price', 'price_variance']
    },
    {
        action_id: 'PRICE_INTEL_LOOP_30D',
        industry: 'agriculture',
        title: 'Price Intelligence Loop (30 Days)',
        type: 'checklist',
        description: 'Embed price tracking into your sales strategy.',
        pillar: 'Market',
        days: 30,
        effort: 'M',
        line_type: ['all'],
        signal_tags: ['blind_pricing'],
        steps: [
            'Maintain the 2x/week price collection routine.',
            'Visualize price trends on a wall chart or dashboard.',
            'Use price data to negotiate confidence with buyers.',
            'Review sales performance against market averages monthly.'
        ],
        kpi_links: ['avg_selling_price', 'distress_sale_pct']
    },

    // --- ACTION PACK B: Crop Profit Calculator ---
    {
        action_id: 'CROP_PROFIT_CALC_7D',
        industry: 'agriculture',
        title: 'Crop Profit Calculator (7 Days)',
        type: 'checklist',
        description: 'Know your break-even to stop losing money on every acre.',
        pillar: 'Money',
        days: 7,
        effort: 'S',
        line_type: ['all'],
        signal_tags: ['blind_spend'],
        steps: [
            'List all inputs per acre (Seed, Fertilizer, Chemicals, Labor).',
            'Assign current unit costs to every input.',
            'Estimate yield bands (Low, Medium, High) based on history.',
            'Calculate Break-Even Price and Gross Margin per acre.'
        ],
        kpi_links: ['break_even_yield', 'gross_margin_crop']
    },
    {
        action_id: 'CROP_PROFIT_CALC_30D',
        industry: 'agriculture',
        title: 'Crop Profit Calculator (30 Days)',
        type: 'checklist',
        description: 'Refine your financial model with actuals.',
        pillar: 'Money',
        days: 30,
        effort: 'M',
        line_type: ['all'],
        signal_tags: ['costing_gap'],
        steps: [
            'Update the calculator with actual spend as the season progresses.',
            'Compare "Budget vs Actual" for key cost lines.',
            'Adjust sales targets if costs rise significantly.',
            'Produce a 1-page P&L for your top 2 crops.'
        ],
        kpi_links: ['budget_variance', 'cost_per_unit']
    },

    // --- ACTION PACK C: Season Task Calendar ---
    {
        action_id: 'SEASON_TASK_CAL_7D',
        industry: 'agriculture',
        title: 'Season Task Calendar (7 Days)',
        type: 'checklist',
        description: 'Kill delays. Map out critical operations to avoid "firefighting".',
        pillar: 'Leadership',
        days: 7,
        effort: 'S',
        line_type: ['all'],
        signal_tags: ['reactive_planting'],
        steps: [
            'Map planting dates for all plots.',
            'Mark critical windows: Weeding 1, Weeding 2, Fertilizer Application.',
            'Identify spray windows based on crop stage.',
            'Assign a specific owner to each task block.'
        ],
        kpi_links: ['on_time_completion_rate', 'labor_productivity']
    },
    {
        action_id: 'SEASON_TASK_CAL_30D',
        industry: 'agriculture',
        title: 'Season Task Calendar (30 Days)',
        type: 'checklist',
        description: 'Execute the plan and track adherence.',
        pillar: 'Leadership',
        days: 30,
        effort: 'M',
        line_type: ['all'],
        signal_tags: ['schedule_drift'],
        steps: [
            'Post the calendar where the team can see it.',
            'Hold a Weekly Start-of-Week meeting to review upcoming tasks.',
            'Track "Planned vs Actual" completion dates.',
            'Adjust the calendar for weather events immediately.'
        ],
        kpi_links: ['on_time_completion_rate', 'rework_rate']
    },

    // --- ACTION PACK D: Input Authenticity & Stock Control ---
    {
        action_id: 'INPUT_CONTROL_7D',
        industry: 'agriculture',
        title: 'Input Control (7 Days)',
        type: 'checklist',
        description: 'Stop fake inputs and stockouts.',
        pillar: 'Operations',
        days: 7,
        effort: 'S',
        line_type: ['all'],
        signal_tags: ['stockout_tax'],
        steps: [
            'Create an "Approved Supplier List" with verified vendors.',
            'Start a "Receipt & Batch Log" for every input purchase.',
            'Designate a locked storage area for chemicals and seeds.',
            'Implement an "Issue Log" to track what goes to which plot.'
        ],
        kpi_links: ['stockout_days', 'defect_rate']
    },
    {
        action_id: 'INPUT_CONTROL_30D',
        industry: 'agriculture',
        title: 'Input Control (30 Days)',
        type: 'checklist',
        description: 'Systematize inventory management.',
        pillar: 'Operations',
        days: 30,
        effort: 'M',
        line_type: ['all'],
        signal_tags: ['inventory_blindspot'],
        steps: [
            'Conduct a weekly stock take of all inputs.',
            'Reconcile "Issued" vs "Remaining" stock.',
            'Establish re-order points to avoid emergency trips.',
            'Review supplier performance on quality and delivery.'
        ],
        kpi_links: ['inventory_variance', 'emergency_purchase_count']
    },

    // --- ACTION PACK E: Field Quality Checks ---
    {
        action_id: 'FIELD_QC_7D',
        industry: 'agriculture',
        title: 'Field Quality Checks (7 Days)',
        type: 'checklist',
        description: 'Stop spacing and mixing mistakes in the field.',
        pillar: 'Operations',
        days: 7,
        effort: 'S',
        line_type: ['all'],
        signal_tags: ['quality_built_late'],
        steps: [
            'Define "Standard of Work" for Spacing, Weeding, and Spraying.',
            'Create a simple "Daily Spot Check" checklist.',
            'Assign a supervisor to check work *during* execution, not after.',
            'Require photo evidence of good/bad examples.'
        ],
        kpi_links: ['rework_rate', 'labor_productivity']
    },
    {
        action_id: 'FIELD_QC_30D',
        industry: 'agriculture',
        title: 'Field Quality Checks (30 Days)',
        type: 'checklist',
        description: 'Build a culture of "Right First Time".',
        pillar: 'Operations',
        days: 30,
        effort: 'M',
        line_type: ['all'],
        signal_tags: ['no_standard_work'],
        steps: [
            'Track Rework Rate weekly.',
            'Retrain workers who consistently miss standards.',
            'Reward teams with the lowest rework/error rate.',
            'Maintain an "Exception Log" for all field issues.'
        ],
        kpi_links: ['yield_per_acre', 'labor_cost_per_acre']
    },

    // --- ACTION PACK F: Post-Harvest Loss Kill Switch ---
    {
        action_id: 'PH_LOSS_KILL_7D',
        industry: 'agriculture',
        title: 'Post-Harvest Loss Kill Switch (7 Days)',
        type: 'checklist',
        description: 'Cut losses fast. Protect your harvest value.',
        pillar: 'Operations',
        days: 7,
        effort: 'S',
        line_type: ['all'],
        signal_tags: ['bulk_loss'],
        steps: [
            'Set strict moisture/maturity standards for harvesting.',
            'Define sorting rules (Grade A, B, Rejects).',
            'Establish a "Post-Harvest Handling SOP" (shade, crates, tarps).',
            'Inspect storage areas for pests/leaks and fix immediately.'
        ],
        kpi_links: ['post_harvest_loss', 'moisture_compliance']
    },
    {
        action_id: 'PH_LOSS_KILL_30D',
        industry: 'agriculture',
        title: 'Post-Harvest Loss Kill Switch (30 Days)',
        type: 'checklist',
        description: 'Institutionalize quality control.',
        pillar: 'Operations',
        days: 30,
        effort: 'M',
        line_type: ['all'],
        signal_tags: ['moisture_rot_risk'],
        steps: [
            'Record all losses in a "Loss Log" (Spillage, Spoilage, Theft).',
            'Monitor storage conditions (temp/moisture) weekly.',
            'Train all handlers on the new SOPs.',
            'Track "Grade Distribution" for every harvest batch.'
        ],
        kpi_links: ['rejection_rate', 'grade_distribution']
    },

    // --- ACTION PACK G: Transport & Payment Protection ---
    {
        action_id: 'TRANSPORT_PAY_7D',
        industry: 'agriculture',
        title: 'Transport & Payment Protection (7 Days)',
        type: 'checklist',
        description: 'Stop weight and payment games.',
        pillar: 'Risk',
        days: 7,
        effort: 'S',
        line_type: ['all'],
        signal_tags: ['transport_panic'],
        steps: [
            'Draft a simple agreement for Transport (Cost, Timing, Liability).',
            'Verify and record weights *at the farm* before loading.',
            'Require a signed "Proof of Delivery" for every shipment.',
            'Create a "Buyer Ledger" to track what is owed vs paid.'
        ],
        kpi_links: ['dispute_rate', 'weight_variance']
    },
    {
        action_id: 'TRANSPORT_PAY_30D',
        industry: 'agriculture',
        title: 'Transport & Payment Protection (30 Days)',
        type: 'checklist',
        description: 'Secure your revenue stream.',
        pillar: 'Risk',
        days: 30,
        effort: 'M',
        line_type: ['all'],
        signal_tags: ['payment_delay_chokehold'],
        steps: [
            'Review all open invoices weekly.',
            'Implement a script for following up on late payments.',
            'Evaluate transporter performance (Damage, Delays).',
            'Resolve any "Short Payment" disputes immediately with data.'
        ],
        kpi_links: ['days_sales_outstanding', 'transport_cost_unit']
    },

    // --- ACTION PACK H: Risk Playbook ---
    {
        action_id: 'RISK_PLAYBOOK_7D',
        industry: 'agriculture',
        title: 'Risk Playbook (7 Days)',
        type: 'checklist',
        description: 'Reduce shock damage with preparation.',
        pillar: 'Risk',
        days: 7,
        effort: 'S',
        line_type: ['all'],
        signal_tags: ['late_response_risk'],
        steps: [
            'Start a "Weekly Scouting" routine for pests/disease.',
            'Define "Action Thresholds" (e.g., if >10% plants affected, spray).',
            'Prepare a "Response Kit" (chemicals/tools) for common threats.',
            'Check drainage/irrigation readiness for weather shocks.'
        ],
        kpi_links: ['scouting_frequency', 'response_time']
    },
    {
        action_id: 'RISK_PLAYBOOK_30D',
        industry: 'agriculture',
        title: 'Risk Playbook (30 Days)',
        type: 'checklist',
        description: 'Build long-term farm resilience.',
        pillar: 'Risk',
        days: 30,
        effort: 'M',
        line_type: ['all'],
        signal_tags: ['weather_blindness'],
        steps: [
            'Maintain the scouting log and review trends.',
            'Update the playbook based on what you see in the field.',
            'Build a small "Shock Buffer" (cash or savings) for emergencies.',
            'Ensure compliance with any chemical handling/safety rules.'
        ],
        kpi_links: ['weather_loss_impact', 'incident_count']
    }
];
