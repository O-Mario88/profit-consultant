import { LibraryItem, PillarId, SignalTag } from '../../types';

const allSizes = ['all' as any];
const allSeverity = ['Critical', 'Watch', 'Stable', 'Strong', 'Emergency'] as Array<'Critical' | 'Watch' | 'Stable' | 'Strong' | 'Emergency'>;

const baseRows: Array<{
  pillar: PillarId;
  leak: string;
  strength: string;
  hook: string;
  kpi: string;
  signal_tags: SignalTag[];
  cost: string;
  cliffhanger: string;
}> = [
  {
    pillar: 'Operations',
    leak: 'Yield Leak, Rework Tax, Downtime Bleed, and Changeover Chaos are reducing sellable output and forcing expensive recovery work.',
    strength: 'Operations run on measured control: OEE, yield, scrap, downtime, and changeover performance are visible and acted on daily.',
    hook: 'Yield Leak',
    kpi: 'OEE %, Yield %, Scrap %, Rework %, Downtime hours, Changeover minutes',
    signal_tags: ['yield_bleed', 'downtime_drain', 'changeover_black_hole'],
    cost: 'Raw materials are converted into waste, capacity is lost to stoppages, and quality failures trigger avoidable rework.',
    cliffhanger: 'Fix Mode installs loss mapping, changeover standards, and first-pass quality controls so capacity rises without new equipment.'
  },
  {
    pillar: 'Money',
    leak: 'COGS Blindness, Shrinkage Tax, and Discount Addiction are creating Margin Mirage even when volume looks strong.',
    strength: 'Money control is SKU-level: true COGS, margin, working capital, and cash conversion are managed intentionally.',
    hook: 'COGS Blindness',
    kpi: 'COGS per unit, Gross margin % by SKU, Inventory turns, DSO, Shrinkage cost, Overtime cost %',
    signal_tags: ['costing_gap', 'shrinkage_leak', 'discounting_leak'],
    cost: 'Volume moves but cash and margin are trapped in hidden unit costs, expiry loss, and weak pricing discipline.',
    cliffhanger: 'Fix Mode builds a cost-per-unit engine linked to wastage and promo controls so growth stops eroding profit.'
  },
  {
    pillar: 'Market',
    leak: 'Shelf-Trust Risk and Out-of-Stock Penalty are weakening repeat orders while distribution dependence increases pricing pressure.',
    strength: 'Market performance is predictable: service levels are stable, complaints close quickly, and repeat buying is protected by quality consistency.',
    hook: 'Shelf-Trust Risk',
    kpi: 'OTIF %, Fill rate %, Repeat purchase %, Complaint rate, Return rate, Promo margin impact',
    signal_tags: ['order_fulfillment_instability', 'complaint_handling_gap', 'channel_dependency'],
    cost: 'Lost shelf presence, reduced reorder confidence, and weaker negotiating power with distributors and retailers.',
    cliffhanger: 'Fix Mode installs service-level control and complaint-to-correction loops that rebuild trust and repeat demand.'
  },
  {
    pillar: 'Leadership',
    leak: 'Firefighting Factory and KPI Theater are allowing recurring losses to survive because ownership and closure are weak.',
    strength: 'Leadership runs with daily control boards, clear line ownership, and root-cause closure discipline.',
    hook: 'Firefighting Factory',
    kpi: 'Action closure %, KPI review compliance %, Root-cause completion %, Repeat-issue recurrence %, Ownership completeness %',
    signal_tags: ['no_kpi_ownership', 'no_meeting_to_action', 'no_accountability_loop'],
    cost: 'The same defects and delays recur, creating unstable weeks, extra overtime, and decision lag.',
    cliffhanger: 'Fix Mode assigns owners and enforces weekly closure on the top recurring loss drivers.'
  },
  {
    pillar: 'Innovation',
    leak: 'Product Stagnation Risk and Process Innovation Freeze are compressing margin while competitors evolve product/pack mix.',
    strength: 'Innovation is disciplined: trials are validated, SKU mix is optimized, and process improvements are measured for ROI.',
    hook: 'Value-Add Blindspot',
    kpi: 'Trial success %, Time-to-launch, SKU margin mix %, Process improvements/month, Savings captured',
    signal_tags: ['no_product_testing_rhythm', 'sku_complexity_tax', 'pack_size_profit_blindspot'],
    cost: 'Low-margin SKUs consume capacity and premium opportunities are missed in packaging, formulation, and mix design.',
    cliffhanger: 'Fix Mode creates a 30-day product and process sprint tied to margin, sell-through, and repeat demand.'
  },
  {
    pillar: 'Risk',
    leak: 'Food Safety Time Bomb and Recall Nightmare exposure rise when traceability, hygiene discipline, and supplier controls are inconsistent.',
    strength: 'Risk systems are audit-ready: traceability is fast, hygiene is controlled, and supplier quality gates protect output.',
    hook: 'Recall Nightmare',
    kpi: 'Traceability pass %, Audit nonconformities #, Supplier defect %, Hygiene compliance %, Recall drill score',
    signal_tags: ['traceability_gap', 'hygiene_drift', 'supplier_variance_risk'],
    cost: 'A single incident can trigger recalls, distribution loss, and long-term brand damage.',
    cliffhanger: 'Fix Mode installs batch discipline, supplier controls, and recall drills so safety is provable under pressure.'
  },
  {
    pillar: 'People',
    leak: 'Operator Skill Gap, Shift Handover Failure, and Fatigue Defect Tax are creating quality swings and hidden rework costs.',
    strength: 'People systems are stable: training, competency checks, handover standards, and coaching keep output consistent across shifts.',
    hook: 'Shift Handover Failure',
    kpi: 'Training hours/operator, Certification coverage %, Handover compliance %, Absenteeism %, Turnover %',
    signal_tags: ['training_gap', 'weak_shift_handover', 'cross_function_breakdown'],
    cost: 'Quality depends on who is on shift, defects are repeated, and overtime fatigue multiplies mistakes.',
    cliffhanger: 'Fix Mode installs competency and handover discipline so performance is system-led, not person-led.'
  }
];

const species1 = 'Bakery / Flour / Grain-based processing';
const species2 = 'Dairy processing (milk, yoghurt, cheese)';
const species3 = 'Beverages (juice, soda, water)';
const species4 = 'Meat processing';
const species5 = 'Snacks & packaged foods';
const species6 = 'Edible oils (sunflower, palm, groundnut, etc.)';

const missionRowsForSpecies = (
  speciesCode: string,
  lineType: string[],
  texts: Record<PillarId, string>
): LibraryItem[] => {
  const pillars: PillarId[] = ['Operations', 'Money', 'Market', 'Leadership', 'Innovation', 'Risk', 'People'];
  return pillars.map((pillar) => ({
    id: `MB_FNB_${speciesCode}_${pillar.toUpperCase()}`,
    industry: 'manufacturing',
    line_type: lineType,
    pillar,
    signal_tags: [],
    severity_fit: allSeverity,
    business_size_fit: allSizes,
    text: texts[pillar],
    type: 'mission_brief'
  }));
};

const missionBriefRows: LibraryItem[] = [
  // Species 1 (default F&B segment)
  ...missionRowsForSpecies('S1', ['Food & beverage manufacturing', species1], {
    Operations: 'Operations - {STATUS}: We detected {LEAK_1} and {LEAK_2}, a pattern that usually points to a Yield Leak and Changeover Chaos - raw inputs are being converted into sellable product with avoidable waste, and setup time is quietly stealing production hours. Cost: {COST_IMPACT} through scrap, rework, and lost capacity. Cliffhanger: Fix Mode will generate a 7-day yield baseline + changeover standard that immediately increases output without buying a new machine.',
    Money: 'Money - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically COGS Blindness + Shrinkage Tax (expiry and loss). Cost: {COST_IMPACT} because pricing and profit are not protected at SKU level. Cliffhanger: Fix Mode builds your COGS-per-unit model so you stop selling busy and start selling profit.',
    Market: 'Market - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often Out-of-Stock Penalty + Shelf-Trust Risk. Cost: {COST_IMPACT} because stockouts and inconsistent quality lose repeat buying. Cliffhanger: Fix Mode installs a simple service-level system to protect shelf trust and repeat orders.',
    Leadership: 'Leadership - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning the plant may be in firefighting mode with weak ownership and slow action closure. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode assigns line owners and forces weekly closure of the top waste drivers.',
    Innovation: 'Innovation & Creativity - {STATUS}: We detected {LEAK_1} and {LEAK_2} - a sign the product and packaging strategy may be stagnating while competitors evolve. Cost: {COST_IMPACT} in margin pressure. Cliffhanger: Fix Mode generates a 30-day product/pack test plan tied to margin and repeat purchase.',
    Risk: 'Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - traceability and hygiene gaps can become a Food Safety Time Bomb. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds batch discipline + recall readiness so one incident does not destroy the brand.',
    People: 'People - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - skill variance and fatigue are often behind defect spikes and waste. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs training + shift handover standards so output stays consistent regardless of who is on shift.'
  }),

  // Species 2: Dairy
  ...missionRowsForSpecies('S2', [species2], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, a pattern that usually points to a Cold Chain Friction + Batch Variability problem. In dairy, minutes matter: temperature drift, slow processing, and inconsistent batching quietly create spoilage, rework, and acceptable loss that is actually a Yield Leak. Cost: {COST_IMPACT} through spoilage, product inconsistency, and production stops when quality fails. Cliffhanger: Fix Mode will generate a 7-day yield + cold chain baseline and lock in process checks so spoilage drops without expanding capacity.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically COGS Blindness plus Shrinkage Tax (expiry/spoilage, returns, leakage). Many dairy businesses think the profit problem is sales, when it is actually cost-per-litre and wastage per batch. Cost: {COST_IMPACT} because you are selling volume but bleeding margin. Cliffhanger: Fix Mode builds a unit-cost model (per litre / per cup / per kg) and ties it directly to wastage drivers so you can protect margin immediately.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often Shelf-Trust Risk + Out-of-Stock Penalty. In dairy, trust is everything: one inconsistent batch can lose a customer for months, and one stockout can lose a retailer shelf slot. Cost: {COST_IMPACT} through lost repeat buying, reduced shelf space, and distributor pressure. Cliffhanger: Fix Mode installs a service-level routine + complaint closure system so retailers trust your consistency again.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning production discipline may depend on who is on shift, and recurring issues do not get owned to closure. Dairy requires tight control, not mood-based management. Cost: {COST_IMPACT} via repeated spoilage events, inconsistent quality, and wasted labor time. Cliffhanger: Fix Mode assigns line/shift owners and forces weekly closure of the top 3 spoilage and defect causes.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - a sign you may be stuck in commodity selling while margin opportunities (value-add) are being ignored. Dairy margins often come from product mix: flavoured yoghurt, premium packs, fortified products, and better packaging that protects shelf trust. Cost: {COST_IMPACT} in missed premium pricing and weak differentiation. Cliffhanger: Fix Mode generates a 30-day product mix upgrade plan tied to margin per SKU and repeat purchase.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - in dairy this often means Food Safety Time Bomb + Recall Nightmare risk if traceability, hygiene, or supplier controls are weak. One contamination incident can destroy the brand permanently. Cost: {COST_IMPACT} in catastrophic downside risk. Cliffhanger: Fix Mode builds batch/lot traceability discipline and a recall drill so you can prove safety, not just claim it.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - often a training and handover weakness that creates shift quality swings. Operators may be doing their best, but without consistent SOPs, quality depends on individuals. Cost: {COST_IMPACT} through rework, spoilage, and inconsistent output. Cliffhanger: Fix Mode installs operator checklists + shift handover standards so quality is stable across shifts.'
  }),

  // Species 3: Beverages
  ...missionRowsForSpecies('S3', [species3], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which often points to Downtime Bleed + Changeover Chaos on filling/packaging lines. In beverages, every minute of downtime is lost volume, and every sloppy changeover creates waste and defects. Cost: {COST_IMPACT} through lost capacity, overtime, and scrap (caps, labels, bottles, seal issues). Cliffhanger: Fix Mode generates a 7-day downtime loss map and changeover standard that increases throughput without buying a new line.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically COGS Blindness + Promotion Profit Leak. Beverage businesses often sell lots of units but lose money on packaging costs, logistics costs, and promos that destroy margin. Cost: {COST_IMPACT} because cost-per-unit is not controlled and discounting becomes a habit. Cliffhanger: Fix Mode builds cost-per-unit control (bottle/cap/label/carton) and promo margin guardrails so volume stops eating profit.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - usually Distribution Dependence + Out-of-Stock Penalty. When distribution is weak, your product disappears from shelves and customers forget you. When stockouts happen, competitors replace you instantly. Cost: {COST_IMPACT} in lost shelf presence and weak negotiating power. Cliffhanger: Fix Mode installs a simple fill-rate + route-level sales visibility system to protect shelf space and repeat orders.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning the plant may run on urgent fixes and supervisors may lack a consistent daily management rhythm. Cost: {COST_IMPACT} via repeat breakdowns, recurring defects (seals, leakage, labeling), and firefighting overtime. Cliffhanger: Fix Mode sets daily huddles + KPI boards + action closure so problems stop repeating.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - a sign your product/packaging may be losing attention in the market. In beverages, innovation is not always new flavour; it is packaging, sizing, bundling, and brand promise consistency. Cost: {COST_IMPACT} in weak differentiation and margin compression. Cliffhanger: Fix Mode generates a 30-day packaging and SKU strategy test plan tied to sell-through and margin.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often compliance gaps (labeling, standards, hygiene) and traceability weakness. One standards issue can trigger product removal and reputation damage. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds audit-ready documentation and batch traceability that protects distribution contracts.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - often operator skill variance and fatigue. Beverage lines punish inconsistency: one weak shift can create massive scrap. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs training certification + shift handover discipline to keep output consistent.'
  }),

  // Species 4: Meat processing
  ...missionRowsForSpecies('S4', [species4], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, which often points to a Yield Leak (trim loss, spoilage loss) plus Cold Chain Friction. In meat processing, profit is lost in grams: yield control, hygiene discipline, and temperature control decide your margin. Cost: {COST_IMPACT} through spoilage, product downgrades, and rework due to contamination risk. Cliffhanger: Fix Mode generates a 7-day yield baseline + cold chain compliance checks to reduce loss immediately.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - commonly COGS Blindness + Shrinkage Tax. If you do not know cost per kg by cut/product, you can sell best sellers that are actually profit destroyers. Cost: {COST_IMPACT} because product mix is not margin-optimized. Cliffhanger: Fix Mode builds a cost-per-cut model and ties it to yield loss so pricing and product mix become profit-driven.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often trust and consistency risk. In meat, reputation spreads fast; one quality incident can collapse demand overnight. Cost: {COST_IMPACT} through lost customers and distributor distrust. Cliffhanger: Fix Mode installs complaint-to-correction loops and quality proof packs to protect trust.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning hygiene and quality discipline may break during pressure periods. If leaders tolerate shortcuts, risk grows. Cost: {COST_IMPACT} through rework, waste, and incident exposure. Cliffhanger: Fix Mode sets standards enforcement and daily controls so hygiene and yield do not collapse when busy.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - a sign you may be selling commodity cuts while ignoring value-add opportunities: portioning, packaging, ready-to-cook products, and premium branding. Cost: {COST_IMPACT} in missed margin. Cliffhanger: Fix Mode generates a 30-day product mix upgrade plan tied to margin and shelf life.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - for meat processing this is the highest-stakes zone: contamination control, traceability, and audit readiness. Cost: {COST_IMPACT} plus catastrophic downside. Cliffhanger: Fix Mode builds traceability discipline + recall drill readiness to prevent a business-ending event.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - often training gaps and fatigue. Meat processing is repetitive and physically demanding; fatigue drives mistakes and hygiene failures. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs competency checks + fatigue-aware scheduling + shift handovers to stabilize output.'
  }),

  // Species 5: Snacks
  ...missionRowsForSpecies('S5', [species5], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, usually pointing to Scrap Sinkhole + Batch Variability. In snacks, consistency is king: weight accuracy, seasoning control, packaging seal integrity, and process repeatability decide your unit economics. Cost: {COST_IMPACT} via giveaway (overfill), rejects (underfill), and packaging failures. Cliffhanger: Fix Mode generates a 7-day weight and defect baseline and installs in-process checks to reduce waste fast.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often COGS Blindness + Promotion Profit Leak. Snacks die by packaging and promo mistakes: if packaging costs rise or promos are mispriced, profit disappears. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds SKU-level margin control and promo guardrails so growth stops eating profit.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - often Brand Promise Break (inconsistent taste/quality) plus Distribution Dependence. Snack buyers are loyal until disappointed; then they switch permanently. Cost: {COST_IMPACT} in repeat purchase collapse. Cliffhanger: Fix Mode installs a shelf-trust system: taste consistency checks + complaint closure within 72 hours.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning production discipline may depend on supervisors rather than standard work. This creates good weeks and bad weeks with no explanation. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode creates line ownership and daily controls so performance becomes predictable.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - a sign the SKU pipeline may be weak. In snacks, innovation is not always new products; it is new pack sizes, flavours, bundles, and shelf strategy to capture margin. Cost: {COST_IMPACT} in missed premiumization. Cliffhanger: Fix Mode generates a 30-day SKU innovation sprint tied to margin and sell-through.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - packaging and hygiene compliance issues create recalls and retailer rejection. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds traceability + audit-ready packaging and hygiene logs.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - often training gaps around quality checks and line discipline. One careless shift can create a truckload of rejects. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs training + shift handover discipline so quality does not depend on luck.'
  }),

  // Species 6: Edible oils
  ...missionRowsForSpecies('S6', [species6], {
    Operations: 'OPERATIONS - {STATUS}: We detected {LEAK_1} and {LEAK_2}, usually pointing to Yield Leak + Downtime Bleed. Oil businesses live and die by extraction efficiency, filtration control, and equipment reliability. If yield is not measured tightly, you are throwing profit away in every batch. Cost: {COST_IMPACT} via low extraction rates, waste, and machine downtime. Cliffhanger: Fix Mode creates a 7-day yield and downtime baseline and installs process checks that raise output using the same inputs.',
    Money: 'MONEY - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often COGS Blindness plus Cash Conversion Trap (inventory ties up cash). Inputs can be expensive and seasonal; if cash planning is weak, you lose buying power and pay higher prices later. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds cost-per-litre + working capital control so you buy inputs strategically and protect margin.',
    Market: 'MARKET - {STATUS}: We detected {LEAK_1} and {LEAK_2} - typically Brand Promise Break (quality consistency) plus Channel Conflict (pricing wars across wholesale/retail). Oil buyers notice clarity, smell, packaging quality, and trust. Cost: {COST_IMPACT} through lost loyalty and price pressure. Cliffhanger: Fix Mode installs quality proof + channel pricing discipline to protect trust and margin.',
    Leadership: 'LEADERSHIP - {STATUS}: Leadership signals indicate {LEAK_1} and {LEAK_2} - meaning process discipline may drift, and recurring waste is tolerated as normal. This is where profitable plants separate themselves from struggling plants. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode assigns owners, weekly controls, and action closure to eliminate recurring waste drivers.',
    Innovation: 'INNOVATION & CREATIVITY - {STATUS}: We detected {LEAK_1} and {LEAK_2} - a sign you may be selling a commodity without value-add layers: better packaging, fortified variants, small packs for affordability, or premium positioning. Cost: {COST_IMPACT} in weak differentiation. Cliffhanger: Fix Mode generates a 30-day product/pack strategy sprint tied to margin and repeat buying.',
    Risk: 'RISK - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - risk here often means contamination, labeling compliance, and supplier integrity. One quality issue can destroy distributor relationships. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds supplier controls, batch traceability, and audit-ready documentation to protect distribution contracts.',
    People: 'PEOPLE - {STATUS}: People signals show {LEAK_1} and {LEAK_2} - often skill variance and discipline drift around filtration, quality checks, and hygiene routines. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode installs training and shift handovers so quality is stable and defects stop repeating.'
  })
];

const generatedRows: LibraryItem[] = baseRows.flatMap((row) => {
  const idBase = row.pillar.toUpperCase();
  return [
    {
      id: `LIB_FNB_${idBase}_LEAK`,
      industry: 'manufacturing',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: row.signal_tags,
      severity_fit: ['Critical', 'Watch', 'Emergency'],
      business_size_fit: allSizes,
      text: row.leak,
      type: 'leak',
      hook_text: row.hook,
      cost_text: row.cost,
      cliffhanger_text: row.cliffhanger,
      kpi_text: row.kpi
    },
    {
      id: `LIB_FNB_${idBase}_STR`,
      industry: 'manufacturing',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: row.signal_tags,
      severity_fit: ['Stable', 'Strong'],
      business_size_fit: allSizes,
      text: row.strength,
      type: 'strength',
      hook_text: row.hook,
      kpi_text: row.kpi
    },
    {
      id: `LIB_FNB_${idBase}_HOOK`,
      industry: 'manufacturing',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: [],
      severity_fit: allSeverity,
      business_size_fit: allSizes,
      text: row.hook,
      type: 'hook',
      hook_text: row.hook,
      kpi_text: row.kpi
    },
    {
      id: `LIB_FNB_${idBase}_KPI`,
      industry: 'manufacturing',
      line_type: ['all'],
      pillar: row.pillar,
      signal_tags: [],
      severity_fit: allSeverity,
      business_size_fit: allSizes,
      text: row.kpi,
      type: 'kpi',
      kpi_text: row.kpi
    }
  ];
});

export const library: LibraryItem[] = [...generatedRows, ...missionBriefRows];
