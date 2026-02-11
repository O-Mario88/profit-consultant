import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [
    {
        action_id: 'DAIRY_ACT_1',
        title: 'Adulteration Shield',
        text: "Standard intake testing (density/lactometer, alcohol test, acidity/pH, temperature, organoleptic checks). Clear reject protocol + documentation (no 'negotiation at the gate'). Farmer education: clean milking, no water addition, container hygiene. 'Test visible' culture: testing done in front of suppliers where appropriate. Repeat-offender rules + escalation ladder.",
        pillar: 'Risk',
        signal_tags: ['ADULTERATION_RISK', 'TESTING_GAP', 'REJECT_POLICY'],
        industry: 'agriculture',
        line_type: ['dairy'],
        days: 30, // Default assume 30 for packs
        effort: 'M'
    },
    {
        action_id: 'DAIRY_ACT_2',
        title: 'Temperature Lock',
        text: "Immediate pre-chill temperature check at arrival. Batch tagging + time stamp. 'Time-to-chill' KPI tracked daily. Generator readiness: fuel, startup drill, weekly test. Insulated transport rules + max holding time SOP.",
        pillar: 'Innovation',
        signal_tags: ['TEMP_DISCIPLINE', 'EARLY_CHILL', 'GENERATOR_READINESS'],
        industry: 'agriculture',
        line_type: ['dairy'],
        days: 30,
        effort: 'M'
    },
    {
        action_id: 'DAIRY_ACT_3',
        title: 'Spoilage & Shrink Zeroing',
        text: "Daily reconciliation: liters in vs liters out vs liters spoiled. Identify loss points: transfer, filtration, valves, measurement methods, leaks. Calibrate measuring devices weekly (or per manufacturer). Clean-in-place (CIP) schedule + verification checklist.",
        pillar: 'Innovation',
        signal_tags: ['SPOILAGE_RISK', 'SHRINK_RATE', 'CLEANING_PROTOCOL'],
        industry: 'agriculture',
        line_type: ['dairy'],
        days: 30,
        effort: 'M'
    },
    {
        action_id: 'DAIRY_ACT_4',
        title: 'Route Profit Engine',
        text: "Route redesign: fewer dead-kilometers, cluster stops, fixed pickup windows. Simple dispatch board: planned liters vs actual liters per stop. Driver accountability: fuel logs + GPS where available. 'Late pickup = quality loss' enforcement.",
        pillar: 'Operations',
        signal_tags: ['ROUTE_INEFFICIENCY', 'FUEL_EFFICIENCY', 'ROUTE_DENSITY'],
        industry: 'agriculture',
        line_type: ['dairy'],
        days: 30,
        effort: 'M'
    },
    {
        action_id: 'DAIRY_ACT_5',
        title: 'Farmer Loyalty Engine',
        text: "Predictable payment calendar + transparent pricing. Two-way communication: quality feedback per farmer. Micro-incentives: quality bonus, loyalty bonus, container cleanliness rewards. Handling complaints fast (payment, rejections, grading disputes).",
        pillar: 'Leadership',
        signal_tags: ['FARMER_CHURN', 'PAYMENT_TIMELINESS', 'COMPLAINT_RESOLUTION'],
        industry: 'agriculture',
        line_type: ['dairy'],
        days: 30,
        effort: 'M'
    },
    {
        action_id: 'DAIRY_ACT_6',
        title: 'Buyer Power Upgrade',
        text: "Quality proof pack: daily test reports + traceability. Diversify buyers (2–4 channels): processor, hotel/retail, institutional, export where legal. Contract basics: volumes, quality specs, penalties, payment terms. Positioning: 'consistent cold chain + verified quality' sells at premium.",
        pillar: 'Market',
        signal_tags: ['BUYER_POWER', 'PREMIUM_CAPTURE', 'CONTRACT_COMPLIANCE'],
        industry: 'agriculture',
        line_type: ['dairy'],
        days: 30,
        effort: 'M'
    },
    {
        action_id: 'DAIRY_ACT_7',
        title: 'Cash Discipline Wall',
        text: "Separate cash roles: receiving, recording, approving, paying. Daily cash + mobile money reconciliation. Farmer statement system (simple weekly SMS/printouts). Float buffer rule (e.g., hold X days operating expense).",
        pillar: 'Money',
        signal_tags: ['FRAUD_CONTROL', 'PAYMENT_AUDIT', 'CASH_RESILIENCE'],
        industry: 'agriculture',
        line_type: ['dairy'],
        days: 30,
        effort: 'M'
    },
    {
        action_id: 'DAIRY_ACT_8',
        title: 'Uptime & Maintenance Discipline',
        text: "Preventive maintenance calendar (chiller, generator, pumps). Spare parts kit: seals, valves, hoses, filters, fuses. Downtime log + root cause + recurrence prevention. Vendor SLAs (service response time).",
        pillar: 'People',
        signal_tags: ['MAINTENANCE_DELAY', 'ASSET_CALIBRATION', 'VEHICLE_UPTIME'],
        industry: 'agriculture',
        line_type: ['dairy'],
        days: 30,
        effort: 'M'
    }
];
