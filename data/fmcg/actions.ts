export const FMCG_ACTIONS = {
  fix_plans: [
    {
      id: 'fmcg_7_day_stabilize',
      title: '7-Day Stabilize Profit',
      description: 'Fast wins to stop the bleeding in Service, Inventory, and Cash.',
      days: [
        { day: 1, title: 'Service Truth Baseline', task: 'Start OTIF + In-Full tracking. Create a top-20 "service-critical" customer list.' },
        { day: 2, title: 'Stop the Big Leaks', task: 'Freeze uncontrolled discounts (reason codes only). Lock claims to root causes. Launch "No Blind Loading".' },
        { day: 3, title: 'Inventory & Expiry', task: 'Tag Top 200 SKUs (A-items). List aged/slow SKUs. Begin FEFO for sensitive categories.' },
        { day: 4, title: 'Warehouse Reset', task: 'Implement pick verification for high-value SKUs. Create "damage zones". Measure pick accuracy.' },
        { day: 5, title: 'Route Efficiency', task: 'Rebuild routes: reduce empty km, protect priority customers. Enforce POD discipline.' },
        { day: 6, title: 'Cash & Credit', task: 'AR triage: list top 30 overdue. Start DSO tracking. Enforce "no new credit if over limit".' },
        { day: 7, title: 'One-Page Control', task: 'Setup daily dashboard: OTIF, Perfect Order, Claims, Pick Accuracy, DSO.' }
      ]
    },
    {
      id: 'fmcg_30_day_control',
      title: '30-Day Build Control',
      description: 'Systemize the wins and build a resilient operation.',
      weeks: [
        {
          week: 1,
          title: 'Standards & Ownership',
          tasks: [
            'Assign one owner per pillar.',
            'Define SOPs for order capture, picking, loading.',
            'Define customer tiers with service rules.'
          ]
        },
        {
          week: 2,
          title: 'Planning Rhythm',
          tasks: [
            'Implement weekly S&OP-lite.',
            'Setup reorder points for A-items.',
            'Stop bulk buying that creates aged stock.'
          ]
        },
        {
          week: 3,
          title: 'Claims-Proof Ops',
          tasks: [
            'Build claims database (SKU/Route/Reason).',
            'Improve Perfect Order performance using the composite logic.'
          ]
        },
        {
          week: 4,
          title: 'Financial Control',
          tasks: [
            'Trade terms control (rebates/discounts/returns).',
            'Master data cleanup (GTIN/GLN).',
            'AR maturity: aging review, dispute workflow.'
          ]
        }
      ]
    }
  ]
};
