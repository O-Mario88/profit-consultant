import type { PillarId } from '../types/core.ts';

export const PRIORITY_WEIGHTS: Record<string, Record<PillarId, number>> = {
    // 1) Reduce costs / cut operating expenses
    'Reduce costs / cut operating expenses': {
        Operations: 1.2,
        Money: 1.2,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.2, // P2 if process redesign is needed
        Risk: 1.2,
        People: 1.0
    },
    // 2) Reduce waste / scrap / rework
    'Reduce waste / scrap / rework': {
        Operations: 1.2,
        Money: 1.2, // P2 if process redesign
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.2,
        Risk: 1.1, // P6 if materials/spec issues drive scrap
        People: 1.0
    },
    // 3) Improve on-time delivery (OTIF) / shorten lead time
    'Improve on-time delivery (OTIF) / shorten lead time': {
        Operations: 1.2,
        Money: 1.0,
        Market: 1.2,
        Leadership: 1.0,
        Innovation: 1.1, // P2 if changeovers/engineering delays
        Risk: 1.2,
        People: 1.0
    },
    // 4) Improve customer retention / repeat purchase / churn reduction
    'Improve customer retention / repeat purchase / churn reduction': {
        Operations: 1.2, // P1 if reliability/lead time
        Money: 1.0,
        Market: 1.2,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.0,
        People: 1.0
    },
    // 5) Improve customer satisfaction / NPS / complaints reduction
    'Improve customer satisfaction / NPS / complaints reduction': {
        Operations: 1.2,
        Money: 1.0,
        Market: 1.2,
        Leadership: 1.0,
        Innovation: 1.2,
        Risk: 1.0,
        People: 1.1 // P7 if behavior/service culture is root
    },
    // 6) Launch a new product / new line / new service (NPI / NPD)
    'Launch a new product / new line / new service (NPI / NPD)': {
        Operations: 1.2,
        Money: 1.0,
        Market: 1.1, // P3 for go-to-market readiness
        Leadership: 1.0,
        Innovation: 1.2,
        Risk: 1.2,
        People: 1.0
    },
    // 7) Scale operations / open new branches / expand capacity
    'Scale operations / open new branches / expand capacity': {
        Operations: 1.2,
        Money: 1.2,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.1, // P2 if standardization is weak
        Risk: 1.2,
        People: 1.2
    },
    // 8) Improve working capital / reduce cash tied in stock
    'Improve working capital / reduce cash tied in stock': {
        Operations: 1.2,
        Money: 1.2,
        Market: 1.1, // P3 if demand planning/order patterns drive inventory
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.2,
        People: 1.0
    },
    // 9) Reduce stockouts / improve availability / service level
    'Reduce stockouts / improve availability / service level': {
        Operations: 1.2,
        Money: 1.1, // P4 if purchasing strategy/terms are constraint
        Market: 1.2,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.2,
        People: 1.0
    },
    // 10) Improve forecasting / planning accuracy
    'Improve forecasting / planning accuracy': {
        Operations: 1.2,
        Money: 1.1, // P4 when planning is cash-driven
        Market: 1.2,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.2,
        People: 1.0
    },
    // 11) Improve pricing power / stop discounting / win better customers
    'Improve pricing power / stop discounting / win better customers': {
        Operations: 1.2,
        Money: 1.2,
        Market: 1.2,
        Leadership: 1.0,
        Innovation: 1.1, // P2 if differentiation requires upgrades
        Risk: 1.0,
        People: 1.0
    },
    // 12) Increase conversion rate / close more deals
    'Increase conversion rate / close more deals': {
        Operations: 1.1, // P1 if trust/quality proof is bottleneck
        Money: 1.2,
        Market: 1.2,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.0,
        People: 1.0
    },
    // 13) Improve market share / growth acceleration
    'Improve market share / growth acceleration': {
        Operations: 1.2, // P5 + P1 if reputation/quality limiting
        Money: 1.2,
        Market: 1.2,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.0,
        People: 1.0
    },
    // 14) Improve product/service reliability (field failure reduction)
    'Improve product/service reliability (field failure reduction)': {
        Operations: 1.2, // P5 + P1
        Money: 1.0,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.2, // P2
        Risk: 1.2, // P6
        People: 1.0
    },
    // 15) Improve safety performance / reduce incidents
    'Improve safety performance / reduce incidents': {
        Operations: 1.2, // P5
        Money: 1.0,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.1, // P2 if hazards are process-designed
        Risk: 1.0,
        People: 1.2 // P7
    },
    // 16) Reduce turnover / improve retention (employees)
    'Reduce turnover / improve retention (employees)': {
        Operations: 1.2, // P5
        Money: 1.1, // P4 if pay/benefits are driver
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.0,
        People: 1.2 // P7
    },
    // 17) Improve hiring speed / staffing stability
    'Improve hiring speed / staffing stability': {
        Operations: 1.2, // P5
        Money: 1.0,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.0,
        People: 1.2 // P7
    },
    // 18) Improve training effectiveness / skill coverage
    'Improve training effectiveness / skill coverage': {
        Operations: 1.2, // P5
        Money: 1.0,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.2, // P2 (skills link to standard work)
        Risk: 1.0,
        People: 1.2 // P7
    },
    // 19) Digitize operations / implement ERP / improve data visibility
    'Digitize operations / implement ERP / improve data visibility': {
        Operations: 1.2, // P5
        Money: 1.2, // P4
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.1, // P2 if processes not standardized
        Risk: 1.2, // P6
        People: 1.2 // P7
    },
    // 20) Reduce fraud / leakage / theft / shrinkage
    'Reduce fraud / leakage / theft / shrinkage': {
        Operations: 1.1, // P5 if leakage on floor
        Money: 1.2, // P4
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.2, // P6
        People: 1.2 // P7
    },
    // 21) Improve audit readiness / “always ready” documentation
    'Improve audit readiness / “always ready” documentation': {
        Operations: 1.2, // P1
        Money: 1.0,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.2, // P2
        Risk: 1.2, // P6
        People: 1.2 // P7
    },
    // 22) Improve supplier performance / reduce supplier defects/late deliveries
    'Improve supplier performance / reduce supplier defects/late deliveries': {
        Operations: 1.2, // P1 + P5 if incoming affects flow
        Money: 1.0,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.2, // P2
        Risk: 1.2, // P6
        People: 1.0
    },
    // 23) Improve equipment uptime / reduce breakdowns
    'Improve equipment uptime / reduce breakdowns': {
        Operations: 1.2, // P5
        Money: 1.0,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.2, // P2
        Risk: 1.0,
        People: 1.2 // P7
    },
    // 24) Reduce energy costs / utilities efficiency
    'Reduce energy costs / utilities efficiency': {
        Operations: 1.2, // P5
        Money: 1.2, // P4
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.1, // P2 if process redesign needed
        Risk: 1.0,
        People: 1.0
    },
    // 25) Improve sustainability / ESG compliance (where applicable)
    'Improve sustainability / ESG compliance (where applicable)': {
        Operations: 1.2, // P5 + P1 if product claims/traceability matter
        Money: 1.0,
        Market: 1.0,
        Leadership: 1.0,
        Innovation: 1.0,
        Risk: 1.2, // P6
        People: 1.2 // P7
    },
    // 26) Improve brand trust / reputation management
    'Improve brand trust / reputation management': {
        Operations: 1.2, // P1
        Money: 1.0,
        Market: 1.2, // P3
        Leadership: 1.0,
        Innovation: 1.1, // P2 if product/process design causing failures
        Risk: 1.0,
        People: 1.2 // P7
    },
    // 27) Enter a new market / export readiness
    'Enter a new market / export readiness': {
        Operations: 1.2, // P1
        Money: 1.2, // P4
        Market: 1.2, // P3
        Leadership: 1.0,
        Innovation: 1.2, // P2
        Risk: 1.2, // P6
        People: 1.0
    },
    // 28) Reduce returns / refunds
    'Reduce returns / refunds': {
        Operations: 1.2, // P1 + P5
        Money: 1.0,
        Market: 1.2, // P3
        Leadership: 1.0,
        Innovation: 1.2, // P2
        Risk: 1.0,
        People: 1.0
    }
};

export const PRIORITY_BOOSTS: Record<string, Record<PillarId, number>> = {
    // Core priorities
    'Increase capital / cashflow': { Money: 3, Risk: 2, Market: 2, Operations: 1, Leadership: 0, Innovation: 0, People: 0 },
    'Increase sales / revenue': { Market: 3, Money: 2, Operations: 1, Leadership: 0, Innovation: 0, Risk: 0, People: 0 }, // Reduced Operations from +1 to 0 if P1 in original list was Quality? Or just follow custom boosts. 
    // Wait, original list said: "Increase sales / revenue: +3 P3 (Market), +2 P4 (Money), +1 P1 (Risk? No P1 is Quality/Trust)"
    // Let's stick to the prompt's mapping: P1=Quality, P2=Eng, P3=Sales, P4=Finance, P5=Ops, P6=Supply, P7=People.

    'Increase profit margin': { Money: 3, Operations: 2, Risk: 2, Quality: 1, Leadership: 0, Innovation: 0, People: 0 } as any, // Need to handle P1 vs Quality key mapping carefully. 
    // Actually, I'll use PillarId keys directly: Operations, Money, Market, Leadership, Innovation, Risk, People.
    // P1=Quality -> ??? My PillarId doesn't have "Quality". 
    // Looking at types/core.ts: PillarId = 'Operations' | 'Money' | 'Market' | 'Leadership' | 'Innovation' | 'Risk' | 'People'.
    // The prompt says: "P1 Quality & Customer Trust".
    // "P2 Engineering". "P3 Sales". "P4 Finance". "P5 Operations". "P6 Supply". "P7 People".
    // MAPPING:
    // P1 Quality -> I need to map this to "Risk" or "Innovation"? 
    // In `missionBriefLibrary.ts`: 
    // Operations = Engine (P5)
    // Money = Fuel (P4)
    // Market = Voice (P3)
    // Leadership = Brain 
    // Innovation = Pulse
    // Risk = Shield
    // People = Tribe (P7)

    // WAIT. The Master Prompt v3 defines NEW Pillars P1-P7.
    // P1 Quality & Customer Trust
    // P2 Engineering 
    // P3 Sales
    // P4 Finance
    // P5 Operations
    // P6 Supply Chain
    // P7 People

    // My existing system has:
    // Operations, Money, Market, Leadership, Innovation, Risk, People.

    // I need to MAP the v3 Pillars to my EXISTING System Pillars to avoid breaking everything.
    // v3 P1 (Quality) -> ??? Maybe 'Innovation' (Pulse includes quality/testing)? Or 'Risk' (Shield)?
    // v3 P2 (Engineering) -> 'Innovation' (Pulse)?
    // v3 P3 (Sales) -> 'Market' (Voice). MATCH.
    // v3 P4 (Finance) -> 'Money' (Fuel). MATCH.
    // v3 P5 (Operations) -> 'Operations' (Engine). MATCH.
    // v3 P6 (Supply Chain) -> 'Risk' (Shield)? Or maybe I need a new mapping.
    // v3 P7 (People) -> 'People' (Tribe). MATCH.

    // Let's use the closest existing match for now to generate the PROMPT instructions, 
    // but the LLM will generate content using the v3 names. 
    // I just need to determine "Weight" for the "Topics".

    // Actually, the prompt says "Use the 7 Pillars (fixed): P1 Quality... P7 People".
    // If I change the system prompts, the LLM will output P1..P7.
    // But my frontend expects specific JSON keys? 
    // `textGen.ts` parses the output. 
    // If I change the definitions, I might break the parser.

    // PLAN: 
    // The "Pillar" keys in `PRIORITY_BOOSTS` should correspond to the USER'S existing `PillarId` types so I can utilize the existing `PillarId` throughout the code.
    // BUT the text generation will use the PROMPT'S P1-P7 defs.
    // I need a translation layer.

    // Existing: Operations, Money, Market, Leadership, Innovation, Risk, People.
    // Master v3: Quality, Engineering, Sales, Finance, Operations, SupplyChain, People.

    // Mapping:
    // Quality (v3 P1) -> Innovation (Closest? "Product/Quality") OR Risk ("Compliance")? -> Let's map P1 -> Innovation (as "Quality/Innovation")
    // Engineering (v3 P2) -> Leadership (Brain? No). -> Maybe maps to Operations (Process Design)? Or Innovation.
    // Sales (v3 P3) -> Market.
    // Finance (v3 P4) -> Money.
    // Operations (v3 P5) -> Operations.
    // Supply Chain (v3 P6) -> Risk (Shield? Supply assurance).
    // People (v3 P7) -> People.

    // This is messy. The "Role Families" use P1..P7.
    // "Quality/Compliance" -> P1=5.

    // I will define `PRIORITY_BOOSTS` using the V3 PILLAR NAMES (P1..P7) for clarity in this file,
    // and then map them to the System Pillars in `textGen.ts` or just pass them raw if I update the prompt to strictly use P1..P7.

    // Let's use keys 'P1'...'P7' in `PRIORITY_BOOSTS` to perfectly match the v3 prompt instructions.

    // 1) Reduce costs / cut operating expenses
    'Reduce costs / cut operating expenses': { P5: 3, P6: 2, P4: 2, P2: 1 },

    // 2) Reduce waste / scrap / rework
    'Reduce waste / scrap / rework': { P1: 3, P2: 2, P5: 2, P6: 1 },

    // 3) Improve on-time delivery (OTIF) / shorten lead time
    'Improve on-time delivery (OTIF) / shorten lead time': { P5: 3, P6: 2, P3: 2, P2: 1 },

    // 4) Improve customer retention / repeat purchase / churn reduction
    'Improve customer retention / repeat purchase / churn reduction': { P3: 3, P1: 2, P5: 1 },

    // 5) Improve customer satisfaction / NPS / complaints reduction
    'Improve customer satisfaction / NPS / complaints reduction': { P3: 3, P1: 2, P2: 1, P7: 1 },

    // 6) Launch a new product / new line / new service (NPI / NPD)
    'Launch a new product / new line / new service (NPI / NPD)': { P2: 3, P1: 2, P5: 2, P6: 2, P3: 1 },

    // 7) Scale operations / open new branches / expand capacity
    'Scale operations / open new branches / expand capacity': { P5: 3, P6: 2, P7: 2, P4: 2, P2: 1 },

    // 8) Improve working capital / reduce cash tied in stock
    'Improve working capital / reduce cash tied in stock': { P6: 3, P4: 2, P5: 2, P3: 1 },

    // 9) Reduce stockouts / improve availability / service level
    'Reduce stockouts / improve availability / service level': { P6: 3, P5: 2, P3: 2, P4: 1 },

    // 10) Improve forecasting / planning accuracy
    'Improve forecasting / planning accuracy': { P3: 3, P6: 2, P5: 2, P4: 1 },

    // 11) Improve pricing power / stop discounting / win better customers
    'Improve pricing power / stop discounting / win better customers': { P4: 3, P3: 2, P1: 2, P2: 1 },

    // 12) Increase conversion rate / close more deals
    'Increase conversion rate / close more deals': { P3: 3, P4: 2, P1: 1 },

    // 13) Improve market share / growth acceleration
    'Improve market share / growth acceleration': { P3: 3, P4: 2, P5: 2, P1: 1 },

    // 14) Improve product/service reliability (field failure reduction)
    'Improve product/service reliability (field failure reduction)': { P1: 3, P2: 2, P6: 2, P5: 1 },

    // 15) Improve safety performance / reduce incidents
    'Improve safety performance / reduce incidents': { P7: 3, P5: 2, P2: 1 },

    // 16) Reduce turnover / improve retention (employees)
    'Reduce turnover / improve retention (employees)': { P7: 3, P5: 2, P4: 1 },

    // 17) Improve hiring speed / staffing stability
    'Improve hiring speed / staffing stability': { P7: 3, P5: 2 },

    // 18) Improve training effectiveness / skill coverage
    'Improve training effectiveness / skill coverage': { P7: 3, P5: 2, P2: 1 },

    // 19) Digitize operations / implement ERP / improve data visibility
    'Digitize operations / implement ERP / improve data visibility': { P5: 3, P6: 2, P4: 2, P7: 2, P2: 1 },

    // 20) Reduce fraud / leakage / theft / shrinkage
    'Reduce fraud / leakage / theft / shrinkage': { P4: 3, P6: 2, P7: 2, P5: 1 },

    // 21) Improve audit readiness / “always ready” documentation
    'Improve audit readiness / “always ready” documentation': { P1: 3, P2: 2, P7: 2, P6: 2 },

    // 22) Improve supplier performance / reduce supplier defects/late deliveries
    'Improve supplier performance / reduce supplier defects/late deliveries': { P6: 3, P1: 2, P2: 1, P5: 1 },

    // 23) Improve equipment uptime / reduce breakdowns
    'Improve equipment uptime / reduce breakdowns': { P5: 3, P2: 2, P7: 2 },

    // 24) Reduce energy costs / utilities efficiency
    'Reduce energy costs / utilities efficiency': { P5: 3, P4: 2, P2: 1 },

    // 25) Improve sustainability / ESG compliance (where applicable)
    'Improve sustainability / ESG compliance (where applicable)': { P7: 3, P5: 2, P6: 2, P1: 1 },

    // 26) Improve brand trust / reputation management
    'Improve brand trust / reputation management': { P1: 3, P3: 2, P7: 2 },

    // 27) Enter a new market / export readiness
    'Enter a new market / export readiness': { P3: 3, P1: 2, P2: 2, P6: 2, P4: 1 },

    // 28) Reduce returns / refunds
    'Reduce returns / refunds': { P1: 3, P3: 2, P2: 2, P5: 1 }
};
