import { LibraryItem, PillarId, SignalTag } from '../../types';

const butcheryRows = [
    {
        pillar: 'Risk' as PillarId,
        leak: 'Temperature control is assumed—gaps occur during busy transfers and display restocking. "Cleaning happens," but the effectiveness isn\'t proven.',
        strength: 'Cold chain is managed as a system (receive → store → prep → display) with actions when off-range. Raw handling is structured: clean tools, clean surfaces, clean hands.',
        hook: 'Cold Chain Drift',
        kpi: 'Temp excursion count + minutes, Cleaning verification pass rate, Zone breach incidents',
        signal_tags: ['cold_chain_drift', 'cross_contamination_creep', 'knife_borne_spread', 'label_roulette', 'traceability_fog', 'display_case_spoilage_tax', 'silent_recall_risk', 'rework_spiral'] as SignalTag[],
        cost: 'One cold chain failure or pathogen outbreak ends the business...',
        cliffhanger: 'Deep Scan will build a "safety firewall" compliant with Codex...'
    },
    {
        pillar: 'Innovation' as PillarId, // P2: Offer & Merchandising
        leak: 'Too many SKUs create slow movers → markdowns → waste. Premium cuts are priced like commodities; margin is left on the table.',
        strength: 'Your mix matches your local demand peaks. You use "quality tiers" (economy/standard/premium) to widen margin options. Display is designed for turnover.',
        hook: 'SKU Sprawl',
        kpi: 'SKU count vs SKU contribution, Slow-mover %, Average basket value, Premium mix %',
        signal_tags: ['sku_sprawl', 'slow_mover_trap', 'full_counter_illusion', 'premium_margin_left_behind', 'bundle_blindness', 'portion_inconsistency_tax', 'markdown_addiction'] as SignalTag[],
        cost: 'Variety overload is deleting your margin through shrink and labor drag...',
        cliffhanger: 'Deep Scan will optimize your counter for profit...'
    },
    {
        pillar: 'Market' as PillarId, // P3: Demand & Local Growth
        leak: 'Marketing is random and reactive. Promotions are frequent but not profitable. You don\'t track where customers come from.',
        strength: 'You have a reputation loop: consistency drives repeat buyers. You show trust signals (cleanliness, clarity, professionalism).',
        hook: 'Reactive Marketing',
        kpi: 'Weekly footfall, Repeat rate proxy, Promo ROI, Review rating trend',
        signal_tags: ['marketing_noise', 'unpriced_risk', 'customer_trust_discount'] as SignalTag[],
        cost: 'Empty counters spoil faster—volume is your best preservative...',
        cliffhanger: 'Deep Scan will build a habit-forming demand engine...'
    },
    {
        pillar: 'Leadership' as PillarId, // P4: Pricing & Sales System
        leak: 'Pricing is guesswork; margin is inconsistent. Discounts become the default growth strategy. B2B pricing ignores shrink and labor.',
        strength: 'You have margin rules by category. You price premium differently from commodity. You use bundles and add-ons to lift margin.',
        hook: 'Pricing Guesswork',
        kpi: 'Gross margin % by category, Discount rate %, Bundle attach rate, Price compliance',
        signal_tags: ['unpriced_risk', 'margin_dilution', 'promo_profit_trap'] as SignalTag[],
        cost: 'Bargaining and inconsistent pricing are leaking margin at the register...',
        cliffhanger: 'Deep Scan will lock in your margin rules...'
    },
    {
        pillar: 'Operations' as PillarId, // P5: Operations & Yield
        leak: 'Trim loss is invisible—profit bleeds quietly. Overweight packing is common "to avoid complaints." Shrink is treated as normal.',
        strength: 'Yield is measured by cut/category, not guessed. Give-away (overweight packs) is controlled with action limits. Shrink is coded by reason.',
        hook: 'Trim Tax',
        kpi: 'Yield % by cut/category, Giveaway cost/day, Shrink %, Labor productivity',
        signal_tags: ['trim_tax', 'overweight_bleed', 'markdown_spiral', 'rehandling_drag', 'leaker_returns', 'display_case_graveyard', 'cut_too_early_penalty', 'workflow_friction'] as SignalTag[],
        cost: 'Yield loss and giveaway are the silent killers of butchery profit...',
        cliffhanger: 'Deep Scan will stop the "invisible bleed"...'
    },
    {
        pillar: 'Money' as PillarId, // P6: Finance & Control
        leak: 'You track revenue but not margin. Shrink/giveaway isn\'t monetized, so it never feels urgent. Cash leaks through overbuying.',
        strength: 'You know yesterday\'s profit drivers. Costs are tracked by category and reviewed weekly. Losses are priced and visible.',
        hook: 'Cash Blindness',
        kpi: 'Margin weekly, Inventory aging, Cash flow',
        signal_tags: ['cash_choke', 'wip_illusion', 'unpriced_risk'] as SignalTag[],
        cost: 'Revenue hides the truth—profit is what you keep...',
        cliffhanger: 'Deep Scan will put a price tag on your losses...'
    },
    {
        pillar: 'People' as PillarId, // P7: People & Culture
        leak: 'Knowledge lives in "hero staff." Hygiene enforcement is inconsistent. Customer service depends on who is on duty.',
        strength: 'Standards are trained, coached, and audited. Hygiene and professionalism are identity, not compliance. Roles are clear.',
        hook: 'Hero Dependency',
        kpi: 'Standards audit score, Onboarding completion, Coaching frequency',
        signal_tags: ['hero_dependency', 'standards_drift'] as SignalTag[],
        cost: 'Inconsistent staff means inconsistent product—and lost trust...',
        cliffhanger: 'Deep Scan will build a team that runs on standards...'
    }
];

const expandRows = (rows: typeof butcheryRows, prefix: string): LibraryItem[] => {
    return rows.flatMap(row => {
        const idBase = `${prefix}_${row.pillar.toUpperCase()}`;
        return [
            {
                id: `${idBase}_LEAK`,
                industry: 'butchery',
                line_type: ['Meat processing'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                severity_fit: ['Critical', 'Watch', 'Emergency'],
                business_size_fit: ['all'] as any,
                text: row.leak,
                type: 'leak',
                hook_text: row.hook,
                cost_text: row.cost,
                cliffhanger_text: row.cliffhanger,
                kpi_text: row.kpi
            },
            {
                id: `${idBase}_STR`,
                industry: 'butchery',
                line_type: ['Meat processing'],
                pillar: row.pillar,
                signal_tags: row.signal_tags,
                severity_fit: ['Stable', 'Strong'],
                business_size_fit: ['all'] as any,
                text: row.strength,
                type: 'strength',
                hook_text: row.hook,
                kpi_text: row.kpi
            },
            {
                id: `${idBase}_HOOK`,
                industry: 'butchery',
                line_type: ['Meat processing'],
                pillar: row.pillar,
                signal_tags: [],
                severity_fit: ['all'] as any,
                business_size_fit: ['all'] as any,
                text: row.hook,
                type: 'hook',
                hook_text: row.hook,
                kpi_text: row.kpi
            },
            {
                id: `${idBase}_KPI`,
                industry: 'butchery',
                line_type: ['Meat processing'],
                pillar: row.pillar,
                signal_tags: [],
                severity_fit: ['all'] as any,
                business_size_fit: ['all'] as any,
                text: row.kpi,
                type: 'kpi',
                kpi_text: row.kpi
            }
        ] as LibraryItem[];
    });
};

const butcheryItems = expandRows(butcheryRows, 'LIB_BUTCHERY');

const missionBriefs: LibraryItem[] = [
    {
        id: 'MB_BUTCHERY_RISK',
        industry: 'butchery',
        line_type: ['Meat processing'],
        pillar: 'Risk',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'Risk - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically pointing to Cold Chain Drift or Cross-Contamination Creep. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode locks the cold chain and sanitation checks to verify safety.',
        type: 'mission_brief'
    },
    {
        id: 'MB_BUTCHERY_OPS',
        industry: 'butchery',
        line_type: ['Meat processing'],
        pillar: 'Operations',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'Operations - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Trim Tax and Overweight Bleed. Cost: {COST_IMPACT} in lost yield. Cliffhanger: Fix Mode installs cut-tests and yield logs to capture every gram of profit.',
        type: 'mission_brief'
    },
    // Add brief placeholders for other pillars if needed, or rely on generics (but Butchery is Master Pack, so should have them)
    {
        id: 'MB_BUTCHERY_INNOVATION',
        industry: 'butchery',
        line_type: ['Meat processing'],
        pillar: 'Innovation',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'Innovation - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - usually SKU Sprawl. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode optimizes the counter for profit per linear meter.',
        type: 'mission_brief'
    },
    {
        id: 'MB_BUTCHERY_MARKET',
        industry: 'butchery',
        line_type: ['Meat processing'],
        pillar: 'Market',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'Market - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Reactive Marketing. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode drives repeat footfall with trusted quality signals.',
        type: 'mission_brief'
    },
    {
        id: 'MB_BUTCHERY_LEADERSHIP',
        industry: 'butchery',
        line_type: ['Meat processing'],
        pillar: 'Leadership',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'Leadership - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often Pricing Guesswork. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode standardizes margin rules aimed at profitability.',
        type: 'mission_brief'
    },
    {
        id: 'MB_BUTCHERY_MONEY',
        industry: 'butchery',
        line_type: ['Meat processing'],
        pillar: 'Money',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'Money - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - typically Cash Blindness/Shrink. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode puts a price tag on waste and yield loss.',
        type: 'mission_brief'
    },
    {
        id: 'MB_BUTCHERY_PEOPLE',
        industry: 'butchery',
        line_type: ['Meat processing'],
        pillar: 'People',
        signal_tags: [],
        severity_fit: ['all'] as any,
        business_size_fit: ['all'] as any,
        text: 'People - {STATUS}: Signals show {LEAK_1} and {LEAK_2} - often Hero Dependency. Cost: {COST_IMPACT}. Cliffhanger: Fix Mode builds standards that do not depend on who is on shift.',
        type: 'mission_brief'
    }
];

export const library: LibraryItem[] = [
    ...butcheryItems,
    ...missionBriefs
];
