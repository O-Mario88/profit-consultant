
import { DepartmentId, DepartmentStack, Department } from '../types/department';
import { PillarId } from '../types/core.ts';

export const DEPARTMENT_DEFINITIONS: Record<DepartmentId, Department> = {
    'operations': { id: 'operations', name: 'Operations / Service Delivery', ownedPillars: ['Operations', 'People'] },
    'supply_chain': { id: 'supply_chain', name: 'Supply Chain & Procurement', ownedPillars: ['Money'] }, // Inputs
    'finance': { id: 'finance', name: 'Finance & Accounting', ownedPillars: ['Money'] },
    'sales': { id: 'sales', name: 'Sales & Business Development', ownedPillars: ['Market'] },
    'marketing': { id: 'marketing', name: 'Marketing & Brand', ownedPillars: ['Market'] },
    'hr': { id: 'hr', name: 'Human Resources', ownedPillars: ['People'] },
    'it': { id: 'it', name: 'IT / Data & Systems', ownedPillars: ['Innovation'] },
    'legal': { id: 'legal', name: 'Legal & Compliance', ownedPillars: ['Risk'] },
    'qa': { id: 'qa', name: 'Quality Assurance / QC', ownedPillars: ['Innovation', 'Risk'] },
    'ehs': { id: 'ehs', name: 'EHS (Environment, Health, Safety)', ownedPillars: ['Risk'] },
    'r_and_d': { id: 'r_and_d', name: 'R&D / Product Evolution', ownedPillars: ['Innovation'] },
    'maintenance': { id: 'maintenance', name: 'Maintenance & Engineering', ownedPillars: ['Operations'] },
    'customer_success': { id: 'customer_success', name: 'Customer Success', ownedPillars: ['Market'] },
    'admin': { id: 'admin', name: 'Administration', ownedPillars: ['Leadership'] }
};

export const DEFAULT_PILLAR_OWNERSHIP: Record<PillarId, DepartmentId[]> = {
    'Market': ['sales', 'marketing'],
    'Operations': ['operations'],
    'Money': ['finance', 'supply_chain'],
    'People': ['hr', 'operations'],
    'Risk': ['legal', 'ehs', 'qa'],
    'Leadership': ['admin', 'operations'],
    'Innovation': ['r_and_d', 'it']
};

const EMPTY_MAPS = {
    subUnits: {} as Record<DepartmentId, string[]>,
    kpis: {
        'Market': [], 'Operations': [], 'Money': [], 'People': [],
        'Risk': [], 'Leadership': [], 'Innovation': []
    } as Record<PillarId, string[]>,
    questionToggles: {
        'Market': [], 'Operations': [], 'Money': [], 'People': [],
        'Risk': [], 'Leadership': [], 'Innovation': []
    } as Record<PillarId, string[]>
};

export const INDUSTRY_DEPARTMENT_STACKS: Record<string, DepartmentStack> = {
    // --- AGRICULTURE GROUP ---
    'crop_farming': {
        core: ['operations', 'supply_chain', 'finance', 'sales'],
        specialized: ['qa', 'ehs', 'r_and_d'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Market': ['sales'], 'Money': ['finance', 'supply_chain'], 'Innovation': ['it'] },
        subUnits: { 'operations': ['Field Production', 'Harvesting'], 'supply_chain': ['Inputs', 'Warehousing'], 'qa': ['Grading'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Yield/Acre', 'Cost/Acre'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['crop_farming'] }
    },
    'cattle': {
        core: ['operations', 'finance', 'supply_chain', 'sales'],
        specialized: ['ehs', 'qa', 'admin'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations'], 'Risk': ['operations', 'ehs'], 'Market': ['sales'] },
        subUnits: { 'operations': ['Herd Mgmt', 'Grazing'], 'sales': ['Livestock Sales'], 'ehs': ['Biosecurity'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Daily Gain', 'Mortality'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['cattle'] }
    },
    'small_ruminants': {
        core: ['operations', 'finance', 'supply_chain', 'sales'],
        specialized: ['ehs', 'qa', 'admin'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Risk': ['operations', 'ehs'] },
        subUnits: { 'operations': ['Flock Mgmt', 'Breeding'], 'ehs': ['Health'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Lamb Survival', 'Weaning Rate'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['small_ruminants'] }
    },
    'piggery': {
        core: ['operations', 'supply_chain', 'finance', 'sales'],
        specialized: ['ehs', 'qa', 'admin'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Risk': ['ehs', 'qa'], 'Innovation': ['qa'] },
        subUnits: { 'operations': ['Breeding', 'Farrowing'], 'ehs': ['Waste Mgmt'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['FCR', 'Weaned/Sow'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['piggery'] }
    },
    'poultry_broilers': {
        core: ['operations', 'supply_chain', 'sales', 'finance'],
        specialized: ['qa', 'ehs', 'it'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Risk': ['ehs', 'qa'], 'Innovation': ['it'] },
        subUnits: { 'operations': ['Brooding', 'Grow-out'], 'qa': ['Processing Specs'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['FCR', 'Mortality'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['poultry_broilers'] }
    },
    'poultry_layers': {
        core: ['operations', 'finance', 'supply_chain', 'sales'],
        specialized: ['qa', 'supply_chain', 'customer_success'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Market': ['sales', 'customer_success'], 'Innovation': ['qa'] },
        subUnits: { 'operations': ['Rearing', 'Laying'], 'qa': ['Egg Grading'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Lay %', 'Feed/Egg'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['poultry_layers'] }
    },
    'dairy': {
        core: ['operations', 'qa', 'finance', 'supply_chain', 'sales'],
        specialized: ['legal', 'it', 'customer_success'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'supply_chain'], 'Risk': ['qa', 'legal'] },
        subUnits: { 'operations': ['Collection', 'Chilling'], 'qa': ['Lab Testing'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Risk': ['Rejection Rate', 'SCC'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['dairy'] }
    },
    'fisheries': {
        core: ['operations', 'supply_chain', 'finance', 'sales'],
        specialized: ['qa', 'ehs', 'supply_chain'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Risk': ['ehs', 'qa'] },
        subUnits: { 'operations': ['Pond Mgmt', 'Feeding'], 'qa': ['Water Quality'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Survival', 'FCR'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['fisheries'] }
    },
    'beekeeping': {
        core: ['operations', 'sales', 'finance'],
        specialized: ['qa', 'legal', 'r_and_d'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Market': ['marketing', 'sales'], 'Innovation': ['r_and_d'] },
        subUnits: { 'operations': ['Apiary Mgmt', 'Extraction'], 'qa': ['Moisture Control'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Yield/Hive', 'Colony Loss'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['beekeeping'] }
    },
    'agro_processing': {
        core: ['operations', 'supply_chain', 'qa', 'finance', 'sales'],
        specialized: ['ehs', 'maintenance', 'r_and_d', 'legal'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'maintenance'], 'Risk': ['qa', 'ehs'] },
        subUnits: { 'operations': ['Production Line', 'Pkg'], 'qa': ['HACCP', 'Batch Testing'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['OEE', 'Yield Loss'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['agro_processing'] }
    },
    'input_supplier': {
        core: ['supply_chain', 'sales', 'finance', 'legal'],
        specialized: ['marketing', 'customer_success', 'it'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Market': ['sales', 'marketing'], 'Innovation': ['it'] },
        subUnits: { 'supply_chain': ['Procurement', 'Inventory'], 'sales': ['Counter Sales'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Money': ['Inv Turnover', 'Dead Stock'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Market': ['input_supplier'] }
    },
    'farm_machinery': {
        core: ['operations', 'maintenance', 'sales', 'supply_chain', 'finance'],
        specialized: ['ehs', 'admin', 'it'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'maintenance'] },
        subUnits: { 'operations': ['Dispatch', 'Job Scheduling'], 'maintenance': ['Fleet Workshop'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Fleet Uptime', 'Job Margin'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['farm_machinery'] }
    },
    'produce_aggregation': {
        core: ['operations', 'supply_chain', 'finance', 'sales'],
        specialized: ['qa', 'legal'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'supply_chain'], 'Risk': ['qa'] },
        subUnits: { 'operations': ['Collection Centers', 'Sorting'], 'supply_chain': ['Logistics'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Money': ['Rejection Rate', 'Shrinkage'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['produce_aggregation'] }
    },
    'export_produce': {
        core: ['operations', 'supply_chain', 'finance', 'sales'],
        specialized: ['qa', 'legal'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'supply_chain'], 'Risk': ['qa', 'legal'], 'Leadership': ['supply_chain'] },
        subUnits: { 'operations': ['Procurement', 'Packhouse'], 'supply_chain': ['Cold Chain', 'Freight'], 'qa': ['Food Safety', 'Certification'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Money': ['Net Margin per Shipment', 'Cash Conversion Cycle'], 'Risk': ['Doc Discrepancy Rate', 'Border Holds %'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Market': ['export_produce'] }
    },

    // --- OTHER SECTORS ---
    'mining': {
        core: ['operations', 'ehs', 'supply_chain', 'finance', 'legal'],
        specialized: ['maintenance', 'qa', 'admin'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'maintenance'], 'Risk': ['ehs', 'legal'] },
        subUnits: { 'operations': ['Extraction', 'Processing'], 'ehs': ['Safety', 'Enviro Compliance'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Recovery Rate', 'Cost/Ton'], 'Risk': ['LTIFR'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['mining'] }
    },
    'manufacturing': {
        core: ['operations', 'supply_chain', 'qa', 'finance', 'sales'],
        specialized: ['maintenance', 'ehs', 'r_and_d'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'maintenance'], 'Innovation': ['r_and_d', 'qa'] },
        subUnits: { 'operations': ['Production', 'Assembly'], 'qa': ['QC Lab'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['OEE', 'Scrap %'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['manufacturing'] }
    },
    'retail': {
        core: ['operations', 'marketing', 'supply_chain', 'finance', 'sales'],
        specialized: ['hr', 'it', 'customer_success'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Market': ['marketing', 'sales'], 'Operations': ['operations', 'supply_chain'] },
        subUnits: { 'operations': ['Store Mgmt', 'Merchandising'], 'supply_chain': ['Purchasing'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Money': ['GMROI', 'Shrink %'], 'Market': ['Basket Size'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Market': ['retail'] }
    },
    'construction': {
        core: ['operations', 'finance', 'supply_chain', 'legal'],
        specialized: ['ehs', 'qa', 'sales'], // Sales = Bidding/Estimating
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'supply_chain'], 'Risk': ['ehs', 'legal'] },
        subUnits: { 'operations': ['Project Mgmt', 'Site Supervision'], 'sales': ['Estimating/Tendering'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Schedule Variance', 'Cost Variance'], 'Risk': ['Safety Incidents'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['construction'] }
    },
    'transport': {
        core: ['operations', 'maintenance', 'finance', 'admin'],
        specialized: ['ehs', 'sales', 'legal'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'maintenance'] },
        subUnits: { 'operations': ['Dispatch', 'Driver Mgmt'], 'maintenance': ['Fleet Service'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Cost/KM', 'Fleet Uptime'], 'Money': ['Fuel Efficiency'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['transport'] }
    },
    'hospitality': {
        core: ['operations', 'marketing', 'finance', 'hr'],
        specialized: ['supply_chain', 'maintenance', 'customer_success'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'hr'], 'Market': ['marketing', 'customer_success'] },
        subUnits: { 'operations': ['Front of House', 'Kitchen/Housekeeping'], 'marketing': ['Guest Relations'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Market': ['Occupancy', 'RevPAR'], 'Money': ['Food Cost %'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['hospitality'] }
    },
    'health': {
        core: ['operations', 'qa', 'finance', 'hr'],
        specialized: ['supply_chain', 'legal', 'it'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'qa'], 'Risk': ['qa', 'legal'] },
        subUnits: { 'operations': ['Clinical Services', 'Patient Care'], 'qa': ['Clinical Governance'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Patient Wait Time', 'Treatment Outcomes'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Risk': ['health'] }
    },
    'education': {
        core: ['operations', 'finance', 'hr', 'admin'],
        specialized: ['marketing', 'it', 'legal'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'hr'], 'Market': ['marketing', 'admin'] },
        subUnits: { 'operations': ['Academic Delivery', 'Student Welfare'], 'admin': ['Admissions'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Student Performance', 'Teacher Retention'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'People': ['education'] }
    },
    'tech': {
        core: ['operations', 'sales', 'it', 'customer_success'],
        specialized: ['finance', 'marketing', 'hr'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'it'], 'Innovation': ['operations', 'r_and_d'] },
        subUnits: { 'operations': ['Development', 'Product Mgmt'], 'customer_success': ['Support', 'Onboarding'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Velocity', 'Uptime'], 'Market': ['Churn', 'NPS'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Innovation': ['tech'] }
    },
    'finance_services': {
        core: ['finance', 'operations', 'sales', 'legal'],
        specialized: ['it', 'marketing', 'hr'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'finance'], 'Risk': ['legal', 'finance'] },
        subUnits: { 'operations': ['Credit/Underwriting', 'Processing'], 'sales': ['Relationship Mgmt'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Money': ['PAR 30', 'Cost of Funds'], 'Operations': ['Turnaround Time'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Money': ['finance'] }
    },
    'consulting': {
        core: ['operations', 'sales', 'finance'],
        specialized: ['marketing', 'hr', 'legal'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations'], 'Market': ['sales', 'marketing'] },
        subUnits: { 'operations': ['Delivery Teams', 'Knowledge Mgmt'], 'sales': ['Business Development'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Utilization', 'Billable Rates'], 'Market': ['Pipeline Coverage'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['consulting'] }
    },
    'media': {
        core: ['operations', 'sales', 'marketing'],
        specialized: ['finance', 'legal', 'it'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'marketing'] },
        subUnits: { 'operations': ['Content Production', 'Distribution'], 'sales': ['Ad Sales'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Market': ['Audience Reach', 'Engagement'], 'Operations': ['Production Cost'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Market': ['media'] }
    },
    'ngo': {
        core: ['operations', 'finance', 'hr', 'marketing'],
        specialized: ['legal', 'it', 'supply_chain'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Money': ['finance', 'marketing'], 'Operations': ['operations'] },
        subUnits: { 'operations': ['Program Delivery', 'M&E'], 'marketing': ['Fundraising/Grants'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Beneficiaries Reached', 'Cost/Outcome'], 'Money': ['Grant Utilization'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Leadership': ['ngo'] }
    },
    'utilities': {
        core: ['operations', 'maintenance', 'finance', 'customer_success'],
        specialized: ['ehs', 'supply_chain', 'it'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'maintenance'], 'Risk': ['ehs'] },
        subUnits: { 'operations': ['Grid/Network Ops', 'Installations'], 'customer_success': ['Billing/Collections'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Uptime/Reliability', 'Loss %'], 'Money': ['Collection Rate'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['utilities'] }
    },
    'automotive': {
        core: ['operations', 'supply_chain', 'sales', 'finance'],
        specialized: ['maintenance', 'marketing', 'admin'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations', 'maintenance'] },
        subUnits: { 'operations': ['Workshop', 'Service Writers'], 'supply_chain': ['Parts Dept'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Operations': ['Efficiency', 'Comeback Rate'], 'Money': ['Parts Margin'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'Operations': ['automotive'] }
    },
    'household': {
        core: ['operations', 'marketing', 'finance'],
        specialized: ['hr', 'customer_success'],
        pillarOwnership: { ...DEFAULT_PILLAR_OWNERSHIP, 'Operations': ['operations'] },
        subUnits: { 'operations': ['Service Delivery', 'Scheduling'] },
        kpis: { ...EMPTY_MAPS.kpis, 'Market': ['Client Retention'], 'Operations': ['Job Completion'] },
        questionToggles: { ...EMPTY_MAPS.questionToggles, 'people': ['household'] }
    }
};

export const getDepartmentStack = (subIndustry: string | undefined): DepartmentStack => {
    // Default fallback
    const fallback: DepartmentStack = {
        core: ['operations', 'sales', 'finance'],
        specialized: [],
        pillarOwnership: DEFAULT_PILLAR_OWNERSHIP,
        ...EMPTY_MAPS
    };

    if (!subIndustry) return fallback;

    // Normalization to match keys
    let key = '';
    const lower = subIndustry.toLowerCase();

    // Agri & Food
    if (lower.includes('crop')) key = 'crop_farming';
    else if (lower.includes('cattle')) key = 'cattle';
    else if (lower.includes('goat') || lower.includes('sheep')) key = 'small_ruminants';
    else if (lower.includes('pig')) key = 'piggery';
    else if (lower.includes('poultry') && lower.includes('layer')) key = 'poultry_layers';
    else if (lower.includes('poultry')) key = 'poultry_broilers';
    else if (lower.includes('dairy') || lower.includes('milk')) key = 'dairy';
    else if (lower.includes('fisheries') || lower.includes('aquaculture')) key = 'fisheries';
    else if (lower.includes('bee') || lower.includes('apiculture')) key = 'beekeeping';
    else if (lower.includes('processing') || lower.includes('milling')) key = 'agro_processing';
    else if (lower.includes('input') || lower.includes('supplier')) key = 'input_supplier';
    else if (lower.includes('machinery') || lower.includes('irrigation')) key = 'farm_machinery';
    else if (lower.includes('aggregation') || lower.includes('trading')) key = 'produce_aggregation';

    // Other Sectors
    else if (lower.includes('mining') || lower.includes('quarry') || lower.includes('oil')) key = 'mining';
    else if (lower.includes('manufacturing') || lower.includes('factory') || lower.includes('production')) key = 'manufacturing';
    else if (lower.includes('retail') || lower.includes('shop') || lower.includes('store') || lower.includes('boutique') || lower.includes('wholesale')) key = 'retail';
    else if (lower.includes('construction') || lower.includes('real estate') || lower.includes('civil') || lower.includes('contracting') || lower.includes('design')) key = 'construction';
    else if (lower.includes('transport') || lower.includes('logistics') || lower.includes('delivery') || lower.includes('fleet')) key = 'transport';
    else if (lower.includes('hospitality') || lower.includes('hotel') || lower.includes('restaurant') || lower.includes('tourism') || lower.includes('event')) key = 'hospitality';
    else if (lower.includes('health') || lower.includes('clinic') || lower.includes('medical') || lower.includes('wellness')) key = 'health';
    else if (lower.includes('education') || lower.includes('school') || lower.includes('training') || lower.includes('college')) key = 'education';
    else if (lower.includes('tech') || lower.includes('software') || lower.includes('digital') || lower.includes('it support')) key = 'tech';
    else if (lower.includes('finance') || lower.includes('banking') || lower.includes('insurance') || lower.includes('lending')) key = 'finance_services';
    else if (lower.includes('consulting') || lower.includes('advisory')) key = 'consulting';
    else if (lower.includes('media') || lower.includes('creative') || lower.includes('entertainment') || lower.includes('marketing')) key = 'media';
    else if (lower.includes('ngo') || lower.includes('non-profit') || lower.includes('charity') || lower.includes('social')) key = 'ngo';
    else if (lower.includes('utilities') || lower.includes('energy') || lower.includes('water') || lower.includes('waste')) key = 'utilities';
    else if (lower.includes('automotive') || lower.includes('garage') || lower.includes('mechanic')) key = 'automotive';
    else if (lower.includes('household') || lower.includes('lifestyle')) key = 'household';
    else if (lower.includes('legal') || lower.includes('recruitment')) key = 'consulting'; // Fallback for prof services

    return INDUSTRY_DEPARTMENT_STACKS[key] || fallback;
};
