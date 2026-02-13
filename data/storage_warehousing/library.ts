import { LibraryItem } from '../../types';

const ALL_SIZES = ['solo', 'micro', 'small', 'medium', 'large', 'enterprise'] as const;
const sz = [...ALL_SIZES];

export const library: LibraryItem[] = [

    // ═══════════════════════════════════════════════
    // STRENGTH STATEMENTS
    // ═══════════════════════════════════════════════

    // --- Market (Commercial Control) ---
    { id: 'LI_SW_S_1', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'strength', text: "We price by cost-to-serve, not vibes (handling, dwell time, temp bands, special services).", signal_tags: ['COST_TO_SERVE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_2', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'strength', text: "We run SLAs that are measurable (temp range, response times, loading windows, documentation).", signal_tags: ['SLA_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_3', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'strength', text: "We actively manage capacity utilization (not just 'space available').", signal_tags: ['CAPACITY_UTILIZATION'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_4', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'strength', text: "We segment customers by risk profile (claims history, compliance, payment behavior).", signal_tags: ['CLIENT_SEGMENTATION'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_5', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'strength', text: "We use minimum storage days / demurrage rules to prevent slow-moving stock from killing space.", signal_tags: ['SLOW_MOVER_CONTROL'], line_type: ['all'], severity_fit: ['Stable'] },

    // --- Operations (Receiving + QA + Traceability) ---
    { id: 'LI_SW_S_6', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'strength', text: "Every inbound load has documented checks (temp, condition, seals, count/weight).", signal_tags: ['RECEIVING_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_7', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'strength', text: "We enforce lot/batch identification from day one (no 'mystery pallets').", signal_tags: ['LOT_CONTROL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_8', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'strength', text: "We maintain traceability from inbound → storage location → outbound.", signal_tags: ['TRACEABILITY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_9', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'strength', text: "We apply quarantine/hold zones for questionable loads.", signal_tags: ['QUARANTINE_PROTOCOL'], line_type: ['all'], severity_fit: ['Stable'] },

    // --- Risk (Storage Integrity) ---
    { id: 'LI_SW_S_10', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'strength', text: "Continuous temperature monitoring + alarms + records (no 'we checked yesterday').", signal_tags: ['TEMP_MONITORING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_11', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'strength', text: "Grain stored at safe moisture and actively managed (not 'we dried once').", signal_tags: ['MOISTURE_CONTROL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_12', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'strength', text: "Aeration / temperature monitoring to suppress insects/mold (prevention > treatment).", signal_tags: ['AERATION_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_13', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'strength', text: "Pest control program + hygiene + inspection routine.", signal_tags: ['PEST_MANAGEMENT'], line_type: ['all'], severity_fit: ['Stable'] },

    // --- Innovation (Inventory + Throughput) ---
    { id: 'LI_SW_S_14', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'strength', text: "Dock scheduling prevents congestion and claims ('queue = damage').", signal_tags: ['DOCK_SCHEDULING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_15', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'strength', text: "WMS or structured inventory system prevents 'inventory mirage.'", signal_tags: ['WMS_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_16', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'strength', text: "FEFO/FIFO discipline is enforced.", signal_tags: ['FEFO_FIFO'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_17', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'strength', text: "Cycle counts happen weekly; we don't wait for year-end shocks.", signal_tags: ['CYCLE_COUNT'], line_type: ['all'], severity_fit: ['Stable'] },

    // --- Money (Financial Control) ---
    { id: 'LI_SW_S_18', industry: 'agriculture', business_size_fit: sz, pillar: 'Money', type: 'strength', text: "Energy KPIs are tracked (cold storage can bleed profit silently).", signal_tags: ['ENERGY_KPI'], line_type: ['all'], severity_fit: ['Stable'] },

    // --- Leadership (Asset Reliability) ---
    { id: 'LI_SW_S_19', industry: 'agriculture', business_size_fit: sz, pillar: 'Leadership', type: 'strength', text: "Preventive maintenance calendar for refrigeration / generators / aeration fans / conveyors.", signal_tags: ['PREVENTIVE_MAINTENANCE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_S_20', industry: 'agriculture', business_size_fit: sz, pillar: 'Leadership', type: 'strength', text: "Calibration schedule for thermometers, moisture meters, weigh scales.", signal_tags: ['CALIBRATION_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },

    // --- People ---
    { id: 'LI_SW_S_21', industry: 'agriculture', business_size_fit: sz, pillar: 'People', type: 'strength', text: "Incident reporting and corrective actions reduce repeat losses.", signal_tags: ['INCIDENT_LEARNING'], line_type: ['all'], severity_fit: ['Stable'] },

    // ═══════════════════════════════════════════════
    // SHORTCOMING / LEAK STATEMENTS
    // ═══════════════════════════════════════════════

    // --- Market ---
    { id: 'LI_SW_L_1', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'leak', text: "Pricing is 'per pallet/per bag' with no cost-to-serve logic → margin disappears.", signal_tags: ['UNPRICED_COMPLEXITY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_2', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'leak', text: "No clear SLA → every dispute becomes emotional.", signal_tags: ['SLA_DISCIPLINE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_3', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'leak', text: "Too many risky customers (late payers / high claims) because 'cash today.'", signal_tags: ['CLIENT_SEGMENTATION'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_4', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'leak', text: "No rules for slow movers → space gets hijacked.", signal_tags: ['SLOW_MOVER_CONTROL'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- Operations ---
    { id: 'LI_SW_L_5', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'leak', text: "Loads are accepted without evidence → you 'own' the problem later.", signal_tags: ['RECEIVING_DISCIPLINE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_6', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'leak', text: "Lots/batches get mixed → traceability collapses.", signal_tags: ['LOT_CONTROL'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_7', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'leak', text: "No quarantine/hold zone → contaminated/poor stock infects everything.", signal_tags: ['QUARANTINE_PROTOCOL'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_8', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'leak', text: "Paperwork is inconsistent → export customers reject documentation later.", signal_tags: ['DOCUMENT_CONTROL'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- Risk ---
    { id: 'LI_SW_L_9', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'leak', text: "No continuous logging/alarms → excursions go undetected.", signal_tags: ['ALARM_SYSTEM'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_10', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'leak', text: "Door discipline is weak → 'temperature tax' hits energy + product quality.", signal_tags: ['DOOR_DISCIPLINE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_11', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'leak', text: "Moisture isn't actively controlled → mold/mycotoxin risk climbs.", signal_tags: ['MOISTURE_CONTROL'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_12', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'leak', text: "Pest control is reactive → infestations become expensive rescues.", signal_tags: ['PEST_MANAGEMENT'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- Innovation ---
    { id: 'LI_SW_L_13', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'leak', text: "'We think we have it' inventory → stock-outs and overstock at the same time.", signal_tags: ['INVENTORY_ACCURACY'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_14', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'leak', text: "Congested docks → damage, delays, demurrage.", signal_tags: ['DOCK_SCHEDULING'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- Leadership ---
    { id: 'LI_SW_L_15', industry: 'agriculture', business_size_fit: sz, pillar: 'Leadership', type: 'leak', text: "Maintenance is reactive → breakdowns create catastrophic losses.", signal_tags: ['PREVENTIVE_MAINTENANCE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },
    { id: 'LI_SW_L_16', industry: 'agriculture', business_size_fit: sz, pillar: 'Leadership', type: 'leak', text: "No calibration → disputes you cannot win.", signal_tags: ['CALIBRATION_DISCIPLINE'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- Money ---
    { id: 'LI_SW_L_17', industry: 'agriculture', business_size_fit: sz, pillar: 'Money', type: 'leak', text: "Energy is unmanaged → profit evaporates quietly.", signal_tags: ['ENERGY_MANAGEMENT'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // --- People ---
    { id: 'LI_SW_L_18', industry: 'agriculture', business_size_fit: sz, pillar: 'People', type: 'leak', text: "Claims repeat because lessons aren't converted into SOPs.", signal_tags: ['SOP_CONVERSION'], line_type: ['all'], severity_fit: ['Critical', 'Stable'] },

    // ═══════════════════════════════════════════════
    // KPI STATEMENTS
    // ═══════════════════════════════════════════════
    { id: 'LI_SW_K_1', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'kpi', text: "Capacity utilization % (by zone: chilled/frozen/ambient/silo).", signal_tags: ['CAPACITY_UTILIZATION'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_2', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'kpi', text: "Revenue per cubic meter / pallet position / ton stored.", signal_tags: ['COST_TO_SERVE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_3', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'kpi', text: "SLA compliance rate (measurable clauses).", signal_tags: ['SLA_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_4', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'kpi', text: "% inbound loads with complete receiving checklist + photos.", signal_tags: ['RECEIVING_DISCIPLINE'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_5', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'kpi', text: "Lot/batch capture rate (should be ~100%).", signal_tags: ['LOT_CONTROL'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_6', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'kpi', text: "Temperature excursion count + minutes outside range.", signal_tags: ['TEMP_MONITORING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_7', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'kpi', text: "Grain temperature trend per bin.", signal_tags: ['GRAIN_TEMP_TRENDING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_8', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'kpi', text: "Dock-to-stock time.", signal_tags: ['DOCK_TO_STOCK'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_9', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'kpi', text: "Pick accuracy %.", signal_tags: ['PICK_ACCURACY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_10', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'kpi', text: "Dispatch on-time-in-full (OTIF).", signal_tags: ['DISPATCH_ACCURACY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_11', industry: 'agriculture', business_size_fit: sz, pillar: 'Leadership', type: 'kpi', text: "Preventive maintenance completion %.", signal_tags: ['PM_TRACKING'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_12', industry: 'agriculture', business_size_fit: sz, pillar: 'Money', type: 'kpi', text: "Net operating margin.", signal_tags: ['PROFIT_GRANULARITY'], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_K_13', industry: 'agriculture', business_size_fit: sz, pillar: 'People', type: 'kpi', text: "Recordable incidents (safety).", signal_tags: ['INCIDENT_LOGGING'], line_type: ['all'], severity_fit: ['Stable'] },

    // ═══════════════════════════════════════════════
    // HOOKS (Profit-Leak Vocabulary)
    // ═══════════════════════════════════════════════
    { id: 'LI_SW_H_1', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'hook', text: "Ghost pallets — you're invoicing what you think you have, not what's really there.", signal_tags: ['INVENTORY_ACCURACY'], line_type: ['all'], severity_fit: ['Critical'] },
    { id: 'LI_SW_H_2', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'hook', text: "Traceability blackout — one recall and your documentation can't keep up.", signal_tags: ['TRACEABILITY'], line_type: ['all'], severity_fit: ['Critical'] },
    { id: 'LI_SW_H_3', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'hook', text: "Temperature tax — every lazy door-open is money leaving your cold room.", signal_tags: ['DOOR_DISCIPLINE'], line_type: ['all'], severity_fit: ['Critical'] },
    { id: 'LI_SW_H_4', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'hook', text: "Dock-to-stock drag — if it takes hours to put away, you're creating damage before storage even begins.", signal_tags: ['DOCK_TO_STOCK'], line_type: ['all'], severity_fit: ['Critical'] },
    { id: 'LI_SW_H_5', industry: 'agriculture', business_size_fit: sz, pillar: 'Money', type: 'hook', text: "Energy vampire — your compressor runs 24/7 but nobody knows the kWh per pallet.", signal_tags: ['ENERGY_KPI'], line_type: ['all'], severity_fit: ['Critical'] },
    { id: 'LI_SW_H_6', industry: 'agriculture', business_size_fit: sz, pillar: 'Leadership', type: 'hook', text: "Breakdown cliff — one compressor failure and you lose a warehouse floor overnight.", signal_tags: ['PREVENTIVE_MAINTENANCE'], line_type: ['all'], severity_fit: ['Critical'] },
    { id: 'LI_SW_H_7', industry: 'agriculture', business_size_fit: sz, pillar: 'People', type: 'hook', text: "Alarm fatigue — alarms ring, nobody responds, product dies.", signal_tags: ['ALARM_SYSTEM'], line_type: ['all'], severity_fit: ['Critical'] },

    // ═══════════════════════════════════════════════
    // MISSION BRIEFS
    // ═══════════════════════════════════════════════
    { id: 'LI_SW_MB_1', industry: 'agriculture', business_size_fit: sz, pillar: 'Market', type: 'mission_brief', text: "Commercial Shield: Price by cost-to-serve, enforce SLAs, and segment clients by risk.", signal_tags: [], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_MB_2', industry: 'agriculture', business_size_fit: sz, pillar: 'Operations', type: 'mission_brief', text: "Receiving Discipline: Evidence at the gate, lot control from day one, dispute-proof documentation.", signal_tags: [], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_MB_3', industry: 'agriculture', business_size_fit: sz, pillar: 'Risk', type: 'mission_brief', text: "Condition Fortress: Continuous monitoring, alarm response, pest prevention, moisture vigilance.", signal_tags: [], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_MB_4', industry: 'agriculture', business_size_fit: sz, pillar: 'Innovation', type: 'mission_brief', text: "Throughput Engine: Dock scheduling, slotting rules, cycle counts, accuracy gates.", signal_tags: [], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_MB_5', industry: 'agriculture', business_size_fit: sz, pillar: 'Money', type: 'mission_brief', text: "Profit Lock: Track energy KPIs, invoice by service line, manage cash weekly.", signal_tags: [], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_MB_6', industry: 'agriculture', business_size_fit: sz, pillar: 'Leadership', type: 'mission_brief', text: "Asset Shield: PM calendar, calibration register, generator testing, root-cause discipline.", signal_tags: [], line_type: ['all'], severity_fit: ['Stable'] },
    { id: 'LI_SW_MB_7', industry: 'agriculture', business_size_fit: sz, pillar: 'People', type: 'mission_brief', text: "Learning Loop: Every incident becomes a rule change, not just a report.", signal_tags: [], line_type: ['all'], severity_fit: ['Stable'] }
];
