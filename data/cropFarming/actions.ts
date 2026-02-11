
import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [
    // --- ACTION PACK A: Price Intelligence Loop ---
    {
        id: 'PRICE_INTEL_LOOP_7D',
        title: 'Price Intelligence Loop (7 Days)',
        type: 'checklist',
        description: 'Stop selling blind. Establish a routine to track market prices.',
        steps: [
            'Identify 3 reference markets (e.g., local hub, district center, processor gate).',
            'Collect prices 2x/week for your specific crop and grade.',
            'Record prices in a simple logbook or Excel sheet.',
            'Set a "Minimum Selling Price" threshold based on your costs.'
        ],
        kpis: ['avg_selling_price', 'price_variance']
    },
    {
        id: 'PRICE_INTEL_LOOP_30D',
        title: 'Price Intelligence Loop (30 Days)',
        type: 'checklist',
        description: 'Embed price tracking into your sales strategy.',
        steps: [
            'Maintain the 2x/week price collection routine.',
            'Visualize price trends on a wall chart or dashboard.',
            'Use price data to negotiate confidence with buyers.',
            'Review sales performance against market averages monthly.'
        ],
        kpis: ['avg_selling_price', 'distress_sale_pct']
    },

    // --- ACTION PACK B: Crop Profit Calculator ---
    {
        id: 'CROP_PROFIT_CALC_7D',
        title: 'Crop Profit Calculator (7 Days)',
        type: 'checklist',
        description: 'Know your break-even to stop losing money on every acre.',
        steps: [
            'List all inputs per acre (Seed, Fertilizer, Chemicals, Labor).',
            'Assign current unit costs to every input.',
            'Estimate yield bands (Low, Medium, High) based on history.',
            'Calculate Break-Even Price and Gross Margin per acre.'
        ],
        kpis: ['break_even_yield', 'gross_margin_crop']
    },
    {
        id: 'CROP_PROFIT_CALC_30D',
        title: 'Crop Profit Calculator (30 Days)',
        type: 'checklist',
        description: 'Refine your financial model with actuals.',
        steps: [
            'Update the calculator with actual spend as the season progresses.',
            'Compare "Budget vs Actual" for key cost lines.',
            'Adjust sales targets if costs rise significantly.',
            'Produce a 1-page P&L for your top 2 crops.'
        ],
        kpis: ['budget_variance', 'cost_per_unit']
    },

    // --- ACTION PACK C: Season Task Calendar ---
    {
        id: 'SEASON_TASK_CAL_7D',
        title: 'Season Task Calendar (7 Days)',
        type: 'checklist',
        description: 'Kill delays. Map out critical operations to avoid "firefighting".',
        steps: [
            'Map planting dates for all plots.',
            'Mark critical windows: Weeding 1, Weeding 2, Fertilizer Application.',
            'Identify spray windows based on crop stage.',
            'Assign a specific owner to each task block.'
        ],
        kpis: ['on_time_completion_rate', 'labor_productivity']
    },
    {
        id: 'SEASON_TASK_CAL_30D',
        title: 'Season Task Calendar (30 Days)',
        type: 'checklist',
        description: 'Execute the plan and track adherence.',
        steps: [
            'Post the calendar where the team can see it.',
            'Hold a Weekly Start-of-Week meeting to review upcoming tasks.',
            'Track "Planned vs Actual" completion dates.',
            'Adjust the calendar for weather events immediately.'
        ],
        kpis: ['on_time_completion_rate', 'rework_rate']
    },

    // --- ACTION PACK D: Input Authenticity & Stock Control ---
    {
        id: 'INPUT_CONTROL_7D',
        title: 'Input Control (7 Days)',
        type: 'checklist',
        description: 'Stop fake inputs and stockouts.',
        steps: [
            'Create an "Approved Supplier List" with verified vendors.',
            'Start a "Receipt & Batch Log" for every input purchase.',
            'Designate a locked storage area for chemicals and seeds.',
            'Implement an "Issue Log" to track what goes to which plot.'
        ],
        kpis: ['stockout_days', 'defect_rate']
    },
    {
        id: 'INPUT_CONTROL_30D',
        title: 'Input Control (30 Days)',
        type: 'checklist',
        description: 'Systematize inventory management.',
        steps: [
            'Conduct a weekly stock take of all inputs.',
            'Reconcile "Issued" vs "Remaining" stock.',
            'Establish re-order points to avoid emergency trips.',
            'Review supplier performance on quality and delivery.'
        ],
        kpis: ['inventory_variance', 'emergency_purchase_count']
    },

    // --- ACTION PACK E: Field Quality Checks ---
    {
        id: 'FIELD_QC_7D',
        title: 'Field Quality Checks (7 Days)',
        type: 'checklist',
        description: 'Stop spacing and mixing mistakes in the field.',
        steps: [
            'Define "Standard of Work" for Spacing, Weeding, and Spraying.',
            'Create a simple "Daily Spot Check" checklist.',
            'Assign a supervisor to check work *during* execution, not after.',
            'Require photo evidence of good/bad examples.'
        ],
        kpis: ['rework_rate', 'labor_productivity']
    },
    {
        id: 'FIELD_QC_30D',
        title: 'Field Quality Checks (30 Days)',
        type: 'checklist',
        description: 'Build a culture of "Right First Time".',
        steps: [
            'Track Rework Rate weekly.',
            'Retrain workers who consistently miss standards.',
            'Reward teams with the lowest rework/error rate.',
            'Maintain an "Exception Log" for all field issues.'
        ],
        kpis: ['yield_per_acre', 'labor_cost_per_acre']
    },

    // --- ACTION PACK F: Post-Harvest Loss Kill Switch ---
    {
        id: 'PH_LOSS_KILL_7D',
        title: 'Post-Harvest Loss Kill Switch (7 Days)',
        type: 'checklist',
        description: 'Cut losses fast. Protect your harvest value.',
        steps: [
            'Set strict moisture/maturity standards for harvesting.',
            'Define sorting rules (Grade A, B, Rejects).',
            'Establish a "Post-Harvest Handling SOP" (shade, crates, tarps).',
            'Inspect storage areas for pests/leaks and fix immediately.'
        ],
        kpis: ['post_harvest_loss', 'moisture_compliance']
    },
    {
        id: 'PH_LOSS_KILL_30D',
        title: 'Post-Harvest Loss Kill Switch (30 Days)',
        type: 'checklist',
        description: 'Institutionalize quality control.',
        steps: [
            'Record all losses in a "Loss Log" (Spillage, Spoilage, Theft).',
            'Monitor storage conditions (temp/moisture) weekly.',
            'Train all handlers on the new SOPs.',
            'Track "Grade Distribution" for every harvest batch.'
        ],
        kpis: ['rejection_rate', 'grade_distribution']
    },

    // --- ACTION PACK G: Transport & Payment Protection ---
    {
        id: 'TRANSPORT_PAY_7D',
        title: 'Transport & Payment Protection (7 Days)',
        type: 'checklist',
        description: 'Stop weight and payment games.',
        steps: [
            'Draft a simple agreement for Transport (Cost, Timing, Liability).',
            'Verify and record weights *at the farm* before loading.',
            'Require a signed "Proof of Delivery" for every shipment.',
            'Create a "Buyer Ledger" to track what is owed vs paid.'
        ],
        kpis: ['dispute_rate', 'weight_variance']
    },
    {
        id: 'TRANSPORT_PAY_30D',
        title: 'Transport & Payment Protection (30 Days)',
        type: 'checklist',
        description: 'Secure your revenue stream.',
        steps: [
            'Review all open invoices weekly.',
            'Implement a script for following up on late payments.',
            'Evaluate transporter performance (Damage, Delays).',
            'Resolve any "Short Payment" disputes immediately with data.'
        ],
        kpis: ['days_sales_outstanding', 'transport_cost_unit']
    },

    // --- ACTION PACK H: Risk Playbook ---
    {
        id: 'RISK_PLAYBOOK_7D',
        title: 'Risk Playbook (7 Days)',
        type: 'checklist',
        description: 'Reduce shock damage with preparation.',
        steps: [
            'Start a "Weekly Scouting" routine for pests/disease.',
            'Define "Action Thresholds" (e.g., if >10% plants affected, spray).',
            'Prepare a "Response Kit" (chemicals/tools) for common threats.',
            'Check drainage/irrigation readiness for weather shocks.'
        ],
        kpis: ['scouting_frequency', 'response_time']
    },
    {
        id: 'RISK_PLAYBOOK_30D',
        title: 'Risk Playbook (30 Days)',
        type: 'checklist',
        description: 'Build long-term farm resilience.',
        steps: [
            'Maintain the scouting log and review trends.',
            'Update the playbook based on what you see in the field.',
            'Build a small "Shock Buffer" (cash or savings) for emergencies.',
            'Ensure compliance with any chemical handling/safety rules.'
        ],
        kpis: ['weather_loss_impact', 'incident_count']
    }
];
