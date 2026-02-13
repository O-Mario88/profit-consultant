import { ActionDefinition } from '../../types';

export const actions: ActionDefinition[] = [

    // ═══════════════════════════════════════
    // PILLAR 1: COMMERCIAL CONTROL — Market
    // ═══════════════════════════════════════
    {
        action_id: 'AC_SW_Market_1', industry: 'agriculture', pillar: 'Market',
        title: "Build Cost-to-Serve Pricing Sheet",
        days: 7, effort: 'M',
        signal_tags: ['COST_TO_SERVE', 'PRICING_LOGIC'],
        line_type: ['all'],
        kpi_links: ['Revenue/pallet', 'Gross margin by customer']
    },
    {
        action_id: 'AC_SW_Market_2', industry: 'agriculture', pillar: 'Market',
        title: "Draft 1-Page SLA Template (Cold Chain + Silo variants)",
        days: 7, effort: 'M',
        signal_tags: ['SLA_DISCIPLINE', 'CONTRACT_STANDARD'],
        line_type: ['all'],
        kpi_links: ['SLA compliance rate', 'Claims rate']
    },
    {
        action_id: 'AC_SW_Market_3', industry: 'agriculture', pillar: 'Market',
        title: "Implement Slow-Mover / Demurrage Rule",
        days: 14, effort: 'M',
        signal_tags: ['SLOW_MOVER_CONTROL', 'DWELL_MANAGEMENT'],
        line_type: ['all'],
        kpi_links: ['Avg dwell days', 'Capacity utilization %']
    },
    {
        action_id: 'AC_SW_Market_4', industry: 'agriculture', pillar: 'Market',
        title: "Create Claims Evidence Pack Template",
        days: 7, effort: 'S',
        signal_tags: ['CLAIMS_PROTOCOL', 'DISPUTE_READINESS'],
        line_type: ['all'],
        kpi_links: ['Claims rate', 'Dispute resolution time']
    },

    // ═══════════════════════════════════════
    // PILLAR 2: RECEIVING + QA — Operations
    // ═══════════════════════════════════════
    {
        action_id: 'AC_SW_Ops_1', industry: 'agriculture', pillar: 'Operations',
        title: "Launch Inbound Receiving Checklist + Photo Rule",
        days: 7, effort: 'S',
        signal_tags: ['RECEIVING_DISCIPLINE', 'EVIDENCE_CAPTURE'],
        line_type: ['all'],
        kpi_links: ['% loads with complete checklist', 'Documentation error rate']
    },
    {
        action_id: 'AC_SW_Ops_2', industry: 'agriculture', pillar: 'Operations',
        title: "Enforce Lot/Batch ID + Location ID from Day One",
        days: 7, effort: 'M',
        signal_tags: ['LOT_CONTROL', 'TRACEABILITY'],
        line_type: ['all'],
        kpi_links: ['Lot/batch capture rate', 'Traceability test pass']
    },
    {
        action_id: 'AC_SW_Ops_3', industry: 'agriculture', pillar: 'Operations',
        title: "Set Up Quarantine / Hold Zone SOP",
        days: 7, effort: 'S',
        signal_tags: ['QUARANTINE_PROTOCOL', 'QUALITY_GATE'],
        line_type: ['all'],
        kpi_links: ['Quarantine rate', 'Release time']
    },
    {
        action_id: 'AC_SW_Ops_4', industry: 'agriculture', pillar: 'Operations',
        title: "Standardize Document Pack (Packing List, GRN, CoA, Temp Log)",
        days: 14, effort: 'M',
        signal_tags: ['DOCUMENT_CONTROL', 'EVIDENCE_CAPTURE'],
        line_type: ['all'],
        kpi_links: ['Documentation error rate', 'Document completeness %']
    },

    // ═══════════════════════════════════════
    // PILLAR 3: STORAGE INTEGRITY — Risk
    // ═══════════════════════════════════════
    {
        action_id: 'AC_SW_Risk_1', industry: 'agriculture', pillar: 'Risk',
        title: "Map Temperature Sensors + Set Alarm Thresholds + Escalation Contacts",
        days: 7, effort: 'M',
        signal_tags: ['TEMP_MONITORING', 'ALARM_SYSTEM'],
        line_type: ['all'],
        kpi_links: ['Excursion count', 'Alarm response time']
    },
    {
        action_id: 'AC_SW_Risk_2', industry: 'agriculture', pillar: 'Risk',
        title: "Implement Door Discipline Play (Strip Curtains, Door-Time Targets)",
        days: 7, effort: 'S',
        signal_tags: ['DOOR_DISCIPLINE', 'ENERGY_CONTROL'],
        line_type: ['all'],
        kpi_links: ['Energy kWh per pallet', 'Temperature excursion count']
    },
    {
        action_id: 'AC_SW_Risk_3', industry: 'agriculture', pillar: 'Risk',
        title: "Create Excursion Response Script (Isolate → Verify → Document → Notify)",
        days: 7, effort: 'S',
        signal_tags: ['EXCURSION_RESPONSE', 'EVIDENCE_CAPTURE'],
        line_type: ['all'],
        kpi_links: ['Alarm response time', 'Customer notification SLA']
    },
    {
        action_id: 'AC_SW_Risk_4', industry: 'agriculture', pillar: 'Risk',
        title: "Launch Weekly Moisture & Temperature Check Plan (Silos)",
        days: 7, effort: 'M',
        signal_tags: ['MOISTURE_CONTROL', 'GRAIN_MANAGEMENT'],
        line_type: ['all'],
        kpi_links: ['Moisture drift %', 'Grain temp trend']
    },
    {
        action_id: 'AC_SW_Risk_5', industry: 'agriculture', pillar: 'Risk',
        title: "Build Pest Control Calendar (Inspection, Cleaning, Baiting, Treatment)",
        days: 14, effort: 'M',
        signal_tags: ['PEST_MANAGEMENT', 'PREVENTIVE_CONTROL'],
        line_type: ['all'],
        kpi_links: ['Pest sighting count', 'Infestation incidents']
    },
    {
        action_id: 'AC_SW_Risk_6', industry: 'agriculture', pillar: 'Risk',
        title: "Document Fumigation / Controlled Atmosphere Protocol",
        days: 14, effort: 'L',
        signal_tags: ['FUMIGATION_CONTROL', 'TREATMENT_PROTOCOL'],
        line_type: ['all'],
        kpi_links: ['Fumigation success rate', 'Post-treatment check compliance']
    },

    // ═══════════════════════════════════════
    // PILLAR 4: INVENTORY + THROUGHPUT — Innovation
    // ═══════════════════════════════════════
    {
        action_id: 'AC_SW_Innov_1', industry: 'agriculture', pillar: 'Innovation',
        title: "Set Up Dock Scheduling Board (Time Slots, Priorities)",
        days: 7, effort: 'S',
        signal_tags: ['DOCK_SCHEDULING', 'CONGESTION_CONTROL'],
        line_type: ['all'],
        kpi_links: ['Truck turnaround time', 'Demurrage cost']
    },
    {
        action_id: 'AC_SW_Innov_2', industry: 'agriculture', pillar: 'Innovation',
        title: "Define Slotting Rules (Fast Movers Near Dispatch, Fragile by Handling)",
        days: 14, effort: 'M',
        signal_tags: ['SLOTTING_DISCIPLINE', 'LAYOUT_OPTIMIZATION'],
        line_type: ['all'],
        kpi_links: ['Pick accuracy %', 'Handling damage %']
    },
    {
        action_id: 'AC_SW_Innov_3', industry: 'agriculture', pillar: 'Innovation',
        title: "Launch Cycle Count Rhythm (A-Weekly, B-Biweekly, C-Monthly)",
        days: 14, effort: 'M',
        signal_tags: ['CYCLE_COUNT', 'INVENTORY_ACCURACY'],
        line_type: ['all'],
        kpi_links: ['Cycle count accuracy %', 'Shrink %']
    },
    {
        action_id: 'AC_SW_Innov_4', industry: 'agriculture', pillar: 'Innovation',
        title: "Implement Dispatch Accuracy Gate (Scan/Verify Before Loading)",
        days: 7, effort: 'S',
        signal_tags: ['DISPATCH_ACCURACY', 'QUALITY_GATE'],
        line_type: ['all'],
        kpi_links: ['Dispatch OTIF', 'Wrong-pick rate']
    },

    // ═══════════════════════════════════════
    // PILLAR 5: ASSET/RISK/FINANCE — Leadership + Money + People
    // ═══════════════════════════════════════
    {
        action_id: 'AC_SW_Lead_1', industry: 'agriculture', pillar: 'Leadership',
        title: "Build Preventive Maintenance Calendar (Refrigeration, Generators, Fans, Forklifts)",
        days: 14, effort: 'M',
        signal_tags: ['PREVENTIVE_MAINTENANCE', 'ASSET_DISCIPLINE'],
        line_type: ['all'],
        kpi_links: ['PM completion %', 'Breakdown hours']
    },
    {
        action_id: 'AC_SW_Lead_2', industry: 'agriculture', pillar: 'Leadership',
        title: "Create Calibration Register (Device, Frequency, Last Date, Certificate)",
        days: 7, effort: 'S',
        signal_tags: ['CALIBRATION_DISCIPLINE', 'DISPUTE_READINESS'],
        line_type: ['all'],
        kpi_links: ['Calibration compliance %']
    },
    {
        action_id: 'AC_SW_Money_1', industry: 'agriculture', pillar: 'Money',
        title: "Implement Energy Control Moves (Night Curtains, Defrost Tuning, Demand Tracking)",
        days: 30, effort: 'L',
        signal_tags: ['ENERGY_MANAGEMENT', 'ENERGY_KPI'],
        line_type: ['all'],
        kpi_links: ['Energy kWh per pallet', 'Monthly energy cost']
    },
    {
        action_id: 'AC_SW_People_1', industry: 'agriculture', pillar: 'People',
        title: "Build Incident-to-SOP Loop (Every Incident → Rule Change, Not Just Report)",
        days: 14, effort: 'M',
        signal_tags: ['INCIDENT_LEARNING', 'SOP_CONVERSION'],
        line_type: ['all'],
        kpi_links: ['Incident repeat rate', 'SOP update frequency']
    }
];
