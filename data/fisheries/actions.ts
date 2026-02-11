import { ActionDefinition } from '../../types';

export const ACTIONS: ActionDefinition[] = [
    // PACK A: Fingerling/Seed Quality Gate
    {
        action_id: 'fish_seed_quality',
        title: 'Fingerling/Seed Quality Gate',
        pillar: 'Leadership', // Stocking & Production Planning -> Leadership
        description: 'Stop "bad fish" at the gate.',
        objective: 'Prevent stocking weak or diseased stock that kills profit for 6 months.',
        steps: [
            'Supplier scoring + quarantine/observation protocol',
            'Random sampling: size uniformity, deformities, vigor, mortality in first 48–72 hrs',
            'Stocking log: date, batch, source, counts, expected survival',
            '"Reject rules" for weak batches + replacement terms'
        ],
        outcome: 'Only viable stock enters the system.',
        signal_tags: ['QUARANTINE_SKIPPED', 'NO_ARRIVAL_COUNTS', 'SUPPLIER_SWITCHING', 'TRANSPORT_IGNORED', 'SUPPLIER_DRIVEN_STOCKING', 'HEALTH_ASSUMED', 'NO_STOCKING_CHECKLIST'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'M'
    },
    // PACK B: FCR Control System
    {
        action_id: 'fish_fcr_control',
        title: 'FCR Control System',
        pillar: 'Money', // FCR -> Money
        description: 'Stop feeding profit to the water.',
        objective: 'Lower feed cost per kg by matching ration to biomass and appetite.',
        steps: [
            'Feeding schedule by biomass estimate + water temp',
            'Weekly sample weighing + biomass calculation',
            'Feed log: kg issued, kg fed, feeding times, leftover check',
            'Trigger rules: if FCR worsens → adjust ration, check water, check health'
        ],
        outcome: 'Lower FCR, reduced waste, better water quality.',
        signal_tags: ['FEEDING_BY_HABIT', 'REACTIVE_FEED_CHANGE', 'LEFTOVERS_IGNORED', 'OCCASIONAL_WEIGHING', 'RATION_CONSTANT', 'FEED_LOG_DAILY_ONLY', 'FEEDING_TIMES_FLEXIBLE', 'DUMP_FEEDING', 'FCR_UNKNOWN', 'DRIFT_IGNORED', 'FEEDING_MEMORY', 'SPEED_FEEDING', 'REACTIVE_FEED_BUYING'], // Removed WASTE_IGNORED if invalid
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'L' // High -> L? Wait. High effort -> L? Yes.
    },
    // PACK C: Water Quality Lock
    {
        action_id: 'fish_water_lock',
        title: 'Water Quality Lock',
        pillar: 'Risk', // Water -> Risk/Health
        description: 'Prevent silent losses from bad water.',
        objective: 'Maintain optimal growth conditions and prevent stress-induced disease.',
        steps: [
            'Minimum test cadence (daily DO/temp; 2–3x/week pH; weekly ammonia/nitrite; more for RAS)',
            'Aeration plan + backup power',
            '"Red zone" thresholds + immediate response checklist',
            'Pond/tank cleaning routines; sludge management; exchange/recirculation plan'
        ],
        outcome: 'Consistent growth, lower mortality risk.',
        signal_tags: ['REACTIVE_WATER_CHECKS', 'MIDDAY_DO_CHECKS', 'LOGS_IGNORED', 'AERATION_FIXED', 'REACTIVE_SLUDGE_MGMT', 'REACTIVE_WATER_CHANGE', 'OVERFEEDING_RISK', 'FEED_DURING_LOW_DO'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'L'
    },
    // PACK D: Biosecurity Shield
    {
        action_id: 'fish_biosecurity',
        title: 'Biosecurity Shield',
        pillar: 'Risk', // Bio -> Risk
        description: 'Keep disease out.',
        objective: 'Prevent pathogen entry and spread between units.',
        steps: [
            'Visitor control + footbaths + tool separation',
            'Stock movement rules (no mixing unknown batches)',
            'Dead fish removal protocol + disposal log',
            'Health observation checklist + escalation to vet/tech'
        ],
        outcome: 'Reduced disease outbreaks and treatment costs.',
        signal_tags: ['VISITOR_CONVENIENCE', 'DISPOSAL_INFORMAL', 'SHARED_TOOLS', 'HYGIENE_OPTIONAL', 'BATCH_MIXING', 'SIGNS_MISSED', 'NORMAL_OPS_SICK', 'SHARED_TOOLS_ACROSS_UNITS'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'M'
    },
    // PACK E: Mortality Spike Response
    {
        action_id: 'fish_mortality_response',
        title: 'Mortality Spike Response',
        pillar: 'Risk', // Health -> Risk
        description: 'Stop the bleeding fast.',
        objective: 'Diagnose and contain outbreaks before they wipe out the crop.',
        steps: [
            '30-minute drill: isolate, measure DO/temp/pH, inspect gills/behavior, check feed, check toxins',
            'Sample capture for diagnosis',
            'Stop feeding rule when critical parameters off',
            'Post-mortem review: root cause + prevention'
        ],
        outcome: 'Minimised losses during health events.',
        signal_tags: ['REACTIVE_MORTALITY_RESPONSE', 'REACTIVE_TREATMENT', 'MORTALITY_LEFT_IN', 'BLIND_TREATMENT', 'NO_TREATMENT_RECORDS', 'OUTCOMES_IGNORED', 'FORGOTTEN_OUTBREAKS', 'EMERGENCY_HEALTH_SPEND', 'INFORMAL_VET_ADVICE', 'MORTALITY_TRACKING_WEAK'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 7,
        effort: 'L'
    },
    // PACK F: Harvest Timing & Grading Engine
    {
        action_id: 'fish_harvest_grading',
        title: 'Harvest Timing & Grading Engine',
        pillar: 'Operations', // Growth/Harvest -> Operations
        description: 'Maximize the value of every fish.',
        objective: 'Sell at the right size and uniformity for premium prices.',
        steps: [
            'Size-based harvest plan (avoid "too early/too late")',
            'On-farm grading to protect premium price',
            'Harvest loss controls: nets, crowding time limits, bruising reduction',
            'Yield forecast by week for buyer commitments'
        ],
        outcome: 'Higher average price per kg and better buyer satisfaction.',
        signal_tags: ['VISUAL_SIZE_GUESS', 'CASH_DRIVEN_HARVEST', 'REACTIVE_GRADING', 'HARVEST_ALL_AT_ONCE', 'AD_HOC_GRADING', 'GRADE_MIX_ASSUMED', 'HARVEST_EXPERIENCE_BASED', 'NO_SIZE_TARGETS', 'SELL_WHEN_READY', 'HARVEST_REACTIVE', 'HARVEST_THEN_SELL'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'M'
    },
    // PACK G: Post-Harvest Cold Chain Discipline
    {
        action_id: 'fish_cold_chain',
        title: 'Post-Harvest Cold Chain Discipline',
        pillar: 'Operations', // Cold Chain -> Operations (Logistics)
        description: 'Lock in freshness and weight.',
        objective: 'Prevent spoilage and rejections by maintaining temperature.',
        steps: [
            'Time-to-ice rule + ice ratio standard (e.g., 1:1 in hot climates)',
            'Clean crates, clean water, clean surfaces (HACCP-style basics)',
            'Temperature log at dispatch + receiving',
            'Reject analysis: why buyers downgrade/reject'
        ],
        outcome: 'Reduced spoilage, fewer claims, better reputation.',
        signal_tags: ['DELAYED_ICING', 'RARE_TEMP_RECORDS', 'ICING_WORKLOAD_DEPENDENT', 'DIRTY_CRATES', 'WATER_QUALITY_IGNORED', 'NO_TEMP_LOGS', 'FIX_ON_FAILURE', 'LAST_MINUTE_ICE', 'SUN_EXPOSURE', 'ROUGH_HANDLING', 'REJECT_REASONS_ASSUMED', 'WEIGHT_LOSS_IGNORED', 'COLD_STORAGE_TRUSTED', 'CHEAP_PACKAGING', 'COLD_CHAIN_UNREADY'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'M'
    },
    // PACK H: Capture Fishery Landing-Site Handling
    {
        action_id: 'fish_capture_handling',
        title: 'Capture Fishery Landing-Site Handling',
        pillar: 'Operations', // Handling -> Operations
        description: 'For capture fisheries: preserve catch value.',
        objective: 'Ensure catch from boats retains value through proper landing procedures.',
        steps: [
            'Simple landing SOP: shade, quick sort, wash policy, immediate icing',
            'Lot tagging by boat/crew/time',
            'Weight verification process (reduce disputes)',
            'Quality-based payment incentives'
        ],
        outcome: 'Higher value catch, less waste.',
        signal_tags: ['UNTAGGED_LOTS', 'HANDLING_LOSSES_ACCEPTED'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'M'
    },
    // PACK I: Channel Power Upgrade
    {
        action_id: 'fish_channel_power',
        title: 'Channel Power Upgrade',
        pillar: 'Market', // Sales/Channel -> Market
        description: 'Stop being a price taker.',
        objective: 'Diversify buyers and sell on value/grade.',
        steps: [
            'Grade-based pricing table (visible to team)',
            'Diversify channels: processors, retailers, restaurants, intermediaries',
            'Simple contracts: volumes, grades, payment terms, claims rules',
            'Proof pack: temp logs, handling SOPs, traceability'
        ],
        outcome: 'Better margins, reduced buyer risk.',
        signal_tags: ['PRICE_ACCEPTANCE', 'MIXED_GRADES_SELLING', 'DAY_PRICE_TAKER', 'SINGLE_BUYER_DEPENDENCY', 'DISCOUNT_NEGOTIATION', 'VALUE_ADD_DUMP', 'MIXED_GRADE_SALES', 'REVENUE_ONLY_TRACKING', 'ASSUMED_MARGIN', 'BUYER_DEPENDENCY', 'AD_HOC_CLAIMS', 'VERBAL_PROOF', 'SPOT_DEALS', 'URGENCY_NEGOTIATION', 'PAYMENT_DELAYS_ACCEPTED', 'ONE_TIME_SALES', 'EQUAL_BUYER_TREATMENT', 'RANDOM_PRICING', 'DOWNGRADES_NORMAL', 'UNCONTROLLED_DISCOUNTS', 'BRAND_AFTERTHOUGHT', 'CRISIS_CHANNEL_SWITCH', 'NO_YIELD_TRACKING'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'L'
    },
    // PACK J: Cost-Per-Kg Master Model
    {
        action_id: 'fish_cost_model',
        title: 'Cost-Per-Kg Master Model',
        pillar: 'Money', // Finance -> Money
        description: 'Know your true score.',
        objective: 'Calculate fully loaded cost per kg to drive pricing and efficiency.',
        steps: [
            'Fully loaded cost: feed + seed + labor + energy + health + depreciation + transport + ice',
            'Weekly "expected margin vs actual margin"',
            'Identify top 3 drivers and set weekly targets'
        ],
        outcome: 'Data-driven decisions on pricing and cost control.',
        signal_tags: ['BANK_BALANCE_FEELING', 'COST_RARELY_CALCULATED', 'NO_CYCLE_BUDGET', 'INFORMAL_REVIEW', 'COMPETITOR_PRICING', 'MONTHLY_FINANCE_REVIEW'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'L'
    },
    // PACK K: Cash Discipline Wall
    {
        action_id: 'fish_cash_discipline',
        title: 'Cash Discipline Wall',
        pillar: 'Money', // Finance -> Money
        description: 'Protect the cash.',
        objective: 'Prevent leakage and ensure liquidity.',
        steps: [
            'Role separation: purchase, store, approve, pay',
            'Feed/ice/fuel reconciliations weekly',
            'Buyer receivables tracker + follow-up cadence',
            'Farmer/supplier payment calendar to protect supply'
        ],
        outcome: 'Reduced fraud, improved cashflow.',
        signal_tags: ['REACTIVE_STOCK_CHECKS', 'REACTIVE_RECEIVABLES', 'RELATIONSHIP_BASED_APPROVALS', 'OVERLAPPING_ROLES', 'OCCASIONAL_COUNTS', 'VARIANCES_ACCEPTED', 'MEMORY_TRACKING', 'FLEXIBLE_CREDIT', 'HAND_TO_MOUTH', 'UNAUTHORIZED_PURCHASES', 'TRUST_BASED_PAYMENTS', 'TOTAL_FUEL_TRACKING', 'FEED_SHRINK_IGNORED', 'CLAIMS_NORMALIZED', 'LATE_TAX', 'IMPULSE_CAPEX', 'INFORMAL_INCENTIVES', 'EXCEPTIONS_IGNORED'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'M'
    },
    // PACK L: Uptime & Maintenance Discipline
    {
        action_id: 'fish_uptime_maintenance',
        title: 'Uptime & Maintenance Discipline',
        pillar: 'People', // Maintenance -> People (Assets)
        description: 'Keep the system running.',
        objective: 'Prevent disastrous failure of aeration, power, or cold chain.',
        steps: [
            'Preventive maintenance schedule (aerators, pumps, generators, chillers, nets)',
            'Critical spares kit + downtime log',
            'Power backup drills + response time KPI',
            'Compliance calendar (permits, lab tests, audits)'
        ],
        outcome: 'High uptime, reduced emergency costs, safety compliance.',
        signal_tags: ['BREAKDOWN_MAINTENANCE', 'ASSUMED_BACKUP', 'TRUSTED_SOP', 'LAST_MINUTE_COMPLIANCE', 'NO_MAINTENANCE_CALENDAR', 'OPTIONAL_CHECKLISTS', 'BAD_LUCK_DOWNTIME', 'REACTIVE_SPARES', 'GENERATOR_OUTAGE_ONLY', 'REACTIVE_INSPECTIONS', 'REACTIVE_SAFETY', 'INFORMAL_ROLES', 'ASSUMED_TRAINING', 'ATTENDANCE_ONLY', 'REACTIVE_COMPLIANCE', 'INFORMAL_TRACEABILITY', 'VISUAL_SANITATION_AUDIT', 'RELATIONSHIP_AUTHORITY', 'VERBAL_HANDOVER', 'FORGOTTEN_INCIDENTS', 'INFORMAL_VENDORS', 'REPLACE_WHEN_DEAD'],
        industry: 'agriculture',
        line_type: ['fisheries'],
        days: 30,
        effort: 'M'
    }
];
