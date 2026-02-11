
export const STRENGTH_COPY = {
    Market: [
        "We know our best selling seasons (school fees, festivals, dry-season demand).",
        "We grade sheep by category (rams/ewes/lambs/culls) before selling.",
        "We sell based on target condition/weight, not panic.",
        "We compare multiple buyers and track price ranges weekly.",
        "We understand what buyers pay for (size, condition, breed type, health).",
        "We avoid selling productive breeding ewes without a plan.",
        "We negotiate using facts (weight estimate, grade, health status).",
        "If wool applies: we sell wool/skins strategically and keep quality clean."
    ],
    Leadership: [
        "Clear purpose (meat fattening, breeding stock, wool, mixed).",
        "Ideal flock structure defined (breeding ewes %, replacements %, rams %, fatteners %).",
        "Culling rules exist (age, fertility, chronic disease, poor growth).",
        "Replacement policy is intentional (best ewe lambs from best mothers).",
        "Controlled ram management (avoid inbreeding; planned mating windows).",
        "Stocking matches pasture capacity."
    ],
    Operations: [
        "Grazing plan exists (rotation, rest periods, avoid overgrazing).",
        "Dry-season strategy (hay/forage reserves + supplements).",
        "Priority feeding for high-need groups (late pregnancy, lactation, lambs).",
        "Consistent clean water access.",
        "Minerals/salt are consistent.",
        "Pasture quality is monitored (not just 'green = enough').",
        "Feed waste is controlled (storage, rationing)."
    ],
    Risk: [
        "Prevention calendar (vaccines where used, parasite strategy, ectoparasite control).",
        "Quarantine new sheep; isolate sick animals.",
        "Early detection routine (appetite, diarrhea, coughing, limping, anemia signs).",
        "Correct dosing (weight-based estimation, full course, record treatment).",
        "Foot care routine (hoof checks, footbath where needed, dry floors).",
        "Hygiene reduces flystrike risk (clean bedding, timely shearing/crutching).",
        "Mortality and treatment logs exist.",
        "Sheep identified (tags/marks) + regular counts.",
        "Secure night enclosure; controlled access.",
        "Predator/theft prevention routine (fencing, lighting, guarding).",
        "Drought plan exists (destock rules, reserves, water strategy)."
    ],
    Innovation: [
        "Controlled mating window (or at least controlled rams).",
        "Records: mating dates, lambing dates, ewe performance.",
        "Late pregnancy nutrition is prioritized.",
        "Clean lambing area and early lamb checks.",
        "Strong lamb survival routine (warmth, hygiene, early feeding discipline).",
        "Planned weaning (nutrition + health support).",
        "Replacement ewes selected from top-performing mothers."
    ],
    People: [
        "Shelter is dry, ventilated, and easy to clean.",
        "Categories separated (rams, pregnant ewes, ewes with lambs, weaners).",
        "Daily routine checklist exists (water, feed, lamb checks, health scan).",
        "Handling is calm; injuries minimized.",
        "Equipment ready (feeders, waterers, foot care tools).",
        "If wool: shearing/crutching schedule and cleanliness controls exist."
    ],
    Money: [
        "Know cost per ewe/month and margin per category.",
        "Separate farm money from home money.",
        "Budget for dry season (feed + health).",
        "Track losses (death/theft) as financial events.",
        "Avoid selling productive ewes unless planned.",
        "Monthly review of KPIs and cash."
    ]
};

export const WEAKNESS_COPY = {
    Market: [
        "We sell when cash pressure hits, not when sheep are ready.",
        "Pricing is set by the buyer; we rarely compare.",
        "We sell mixed categories together and lose value.",
        "We don’t track weight/condition; we guess.",
        "We don’t know which category makes the best margin.",
        "We accept 'risk discounts' because we lack proof (health/weight).",
        "We accidentally sell good breeding ewes during emergencies.",
        "Wool (if applicable) is wasted/contaminated and earns little."
    ],
    Leadership: [
        "Flock grows randomly with no structure.",
        "Unproductive ewes are kept too long.",
        "Too many rams or uncontrolled mating.",
        "Inbreeding increases quietly over time.",
        "Overstocking → thin sheep, disease, slow growth.",
        "Buying sheep without screening or quarantine."
    ],
    Operations: [
        "Dry season causes major weight loss and mortality spikes.",
        "No pasture rotation; grazing pressure stays high.",
        "Lambs compete with adults; growth stalls.",
        "Water inconsistent; performance quietly drops.",
        "Minerals inconsistent; fertility and growth suffer.",
        "Feed spoils or is wasted through poor storage."
    ],
    Risk: [
        "Worm burden is normalized; sheep stay thin.",
        "Wrong dosing wastes money and increases resistance.",
        "Footrot spreads because housing/grazing hygiene is weak.",
        "Pneumonia spikes during cold/wet periods due to poor shelter/ventilation.",
        "Flystrike occurs due to hygiene delays and late detection.",
        "No records → outbreaks repeat.",
        "Losses discovered late; counts rare.",
        "No movement log; numbers don’t reconcile.",
        "Predators/theft are 'normal' and unmanaged.",
        "Drought triggers panic selling and flock damage."
    ],
    Innovation: [
        "Uncontrolled mating → unpredictable lambing → chaos.",
        "Barren ewes remain too long.",
        "Lambing areas unprepared; infection and losses rise.",
        "Lamb growth stalls due to parasites and competition.",
        "Weak lambs are kept without a growth plan.",
        "Inbreeding increases due to long-term single ram use."
    ],
    People: [
        "Damp shelter → pneumonia + foot problems.",
        "Mixed groups → lambs lose out; growth slows.",
        "Routines depend on mood/time.",
        "Cleaning irregular → parasite pressure stays high.",
        "Fence/gates fail → escapes, theft, predators.",
        "Wool (if applicable) is contaminated by poor housing/hygiene."
    ],
    Money: [
        "True costs unknown; profit assumed.",
        "Small withdrawals silently drain farm cash.",
        "Sell breeding ewes during emergencies.",
        "Expand flock without proving profit per ewe.",
        "Losses not measured; repeats continue."
    ]
};

export const KPI_COPY = {
    Market: [
        "Avg selling price per head by category",
        "% sold at target condition/weight",
        "Distress sale rate %",
        "Buyer concentration (top buyer share)",
        "Price variance vs local reference",
        "Days from sale to cash received",
        "Wool/skin income per head/year"
    ],
    Leadership: [
        "Flock composition % (ewes/rams/lambs/replacements/fatteners)",
        "Culling rate % + reasons",
        "Replacement rate %",
        "Ewe productivity (lambs weaned per ewe/year)",
        "Stocking pressure index (sheep vs grazing capacity)",
        "Inbreeding risk indicator (ram tenure/rotation)"
    ],
    Operations: [
        "Feed cost per ewe per month",
        "Body condition score (BCS) distribution",
        "Lamb growth rate / weaning weight",
        "Dry-season weight loss %",
        "Water uptime (days/week consistent)",
        "Pasture recovery time / rotation compliance"
    ],
    Risk: [
        "Lamb mortality % (0-30d; 0-6mo)",
        "Morbidity rate % (sick cases/month)",
        "Worm pressure proxy (diarrhea/anemia events)",
        "Treatment success rate",
        "Footrot incidence %",
        "Vet/med cost per head",
        "Count variance (expected vs actual)",
        "Theft/predator incidents per quarter"
    ],
    Innovation: [
        "Lambing rate % (ewes lambing / ewes exposed)",
        "Lambs weaned per ewe per year",
        "Weaning weight + weaning age",
        "Barren ewe rate %",
        "Lambing interval",
        "Age at first lambing"
    ],
    People: [
        "Shelter hygiene score (cleaning frequency, bedding dryness)",
        "Routine compliance %",
        "Injury/handling incidents",
        "Escape incidents per month",
        "Labor time per key tasks",
        "Shearing schedule compliance"
    ],
    Money: [
        "Cost per ewe per month",
        "Gross margin per head by category",
        "Loss value (UGX) per month/season",
        "Distress sale rate %",
        "Budget variance %",
        "Working cash buffer (weeks)"
    ]
};
