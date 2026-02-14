import { ActionDefinition } from '../../types/report';

export const CHEMICAL_ACTIONS = {
    snippets: [
        {
            action_id: 'chem_gold_sample',
            title: "Create 'Golden Sample' Bank",
            type: 'standardization',
            industry: 'chemical',
            line_type: ['Chemical / Light Industrial'],
            text: "Keep a 100ml retained sample of every batch. Label it with Batch ID. If a client claims 'bad quality', test the sample.",
            days: 7,
            effort: 'L',
            pillar: 'Market',
            signal_tags: ['claims_leakage', 'channel_trust_leak']
        },
        {
            action_id: 'chem_mass_balance',
            title: "Daily Mass Balance Check",
            type: 'financial',
            industry: 'chemical',
            line_type: ['Chemical / Light Industrial'],
            text: "Compare Total Input Kg vs. Total Output Kg (Finished + Waste) for one week. Find the missing %. ",
            days: 7,
            effort: 'M',
            pillar: 'Money',
            signal_tags: ['hidden_yield_loss', 'yield_illusion']
        },
        {
            action_id: 'chem_batch_record',
            title: "Lock the Batch Record",
            type: 'process',
            industry: 'chemical',
            line_type: ['Chemical / Light Industrial'],
            text: "Print the recipe. Operators must sign off each step (Order of Addition) as they do it. No sign, no next step.",
            days: 7,
            effort: 'M',
            pillar: 'Operations',
            signal_tags: ['operator_process_drift']
        }
    ],
    fixPlans7Day: [
        {
            id: 'chem_7day_stabilize',
            title: '7-Day Stability & Yield Protocol',
            description: 'Stop the bleeding from inconsistent batches and unknown yield loss.',
            pillar: 'Operations',
            steps: [
                { day: 1, action: "Mass Balance Setup: Measure exactly what enters the mixer vs. what goes into pails." },
                { day: 2, action: "Recipe Lock: Print physical batch sheets. Explicit 'Order of Addition' steps." },
                { day: 3, action: "Retain Bank: Start keeping one jar from every batch for liability protection." },
                { day: 4, action: "Label Audit: Check your top 3 sellers against GHS/Local compliance rules." },
                { day: 5, action: "Waste Bin Check: Weigh the waste. If you don't weigh it, you can't reduce it." },
                { day: 6, action: "Operator Brief: Explain that 'creative cooking' is over. Follow the sheet." },
                { day: 7, action: "Yield Review: Calculate the variance for the week. Set the new baseline." }
            ],
            time_to_value: 7,
            signal_tag: 'hidden_yield_loss'
        }
    ],
    fixPlans30Day: [
        {
            id: 'chem_30day_sku_rationalize',
            title: '30-Day Formulation & SKU Cleanup',
            description: 'Remove complexity that does not pay rent. Focus on high-margin volume.',
            pillar: 'Innovation',
            steps: [
                { week: 1, action: "Tail Analysis: List all products by Volume and Margin. Identify the bottom 20%." },
                { week: 2, action: "Kill Candidate Review: Can we migrate customers to a standard product? If yes, plan it." },
                { week: 3, action: "Formula Standardization: Merge similar recipes. Reduce raw material variety." },
                { week: 4, action: "The Cut: Inform sales/customers of discontinuation. Free up the warehouse." }
            ],
            time_to_value: 30,
            signal_tag: 'sku_complexity_tax'
        }
    ]
};
