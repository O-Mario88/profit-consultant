
import type { PillarId } from '../types/core.ts';

export type RoleFamily =
    | 'Executive/GM/Owner'
    | 'Finance/Accounting'
    | 'HR/People/Admin'
    | 'Operations/Production/Plant'
    | 'Quality/Compliance/EHS'
    | 'Procurement/Supply Chain/Logistics'
    | 'Sales/Commercial/Customer'
    | 'Engineering/Product/Technical'
    | 'Project/Program/PMO'
    | 'IT/Data/Systems';

export const ROLE_FAMILIES: Record<string, RoleFamily> = {
    // Executive
    'ceo': 'Executive/GM/Owner', 'founder': 'Executive/GM/Owner', 'owner': 'Executive/GM/Owner',
    'gm': 'Executive/GM/Owner', 'managing director': 'Executive/GM/Owner', 'business unit head': 'Executive/GM/Owner',
    'president': 'Executive/GM/Owner', 'director': 'Executive/GM/Owner',

    // Finance
    'cfo': 'Finance/Accounting', 'controller': 'Finance/Accounting', 'accountant': 'Finance/Accounting',
    'finance manager': 'Finance/Accounting', 'fp&a': 'Finance/Accounting', 'treasury': 'Finance/Accounting', 'credit': 'Finance/Accounting',

    // HR
    'hr manager': 'HR/People/Admin', 'people ops': 'HR/People/Admin', 'human resources': 'HR/People/Admin',
    'admin manager': 'HR/People/Admin', 'office manager': 'HR/People/Admin', 'l&d': 'HR/People/Admin',

    // Operations
    'coo': 'Operations/Production/Plant', 'plant manager': 'Operations/Production/Plant',
    'production manager': 'Operations/Production/Plant', 'operations manager': 'Operations/Production/Plant',
    'shift lead': 'Operations/Production/Plant', 'factory manager': 'Operations/Production/Plant',
    'farm manager': 'Operations/Production/Plant',

    // Quality
    'quality manager': 'Quality/Compliance/EHS', 'qa': 'Quality/Compliance/EHS', 'qc': 'Quality/Compliance/EHS',
    'regulatory': 'Quality/Compliance/EHS', 'compliance': 'Quality/Compliance/EHS', 'safety officer': 'Quality/Compliance/EHS',
    'ehs': 'Quality/Compliance/EHS',

    // Procurement / Supply Chain
    'supply chain': 'Procurement/Supply Chain/Logistics', 'logistics': 'Procurement/Supply Chain/Logistics',
    'procurement': 'Procurement/Supply Chain/Logistics', 'buyer': 'Procurement/Supply Chain/Logistics',
    'planner': 'Procurement/Supply Chain/Logistics', 'warehouse': 'Procurement/Supply Chain/Logistics',
    'inventory': 'Procurement/Supply Chain/Logistics',

    // Sales
    'sales director': 'Sales/Commercial/Customer', 'sales manager': 'Sales/Commercial/Customer',
    'account manager': 'Sales/Commercial/Customer', 'business development': 'Sales/Commercial/Customer',
    'customer success': 'Sales/Commercial/Customer', 'marketing': 'Sales/Commercial/Customer',

    // Engineering
    'engineering manager': 'Engineering/Product/Technical', 'process engineer': 'Engineering/Product/Technical',
    'technical director': 'Engineering/Product/Technical', 'r&d': 'Engineering/Product/Technical',
    'product manager': 'Engineering/Product/Technical', 'maintenance manager': 'Engineering/Product/Technical',

    // Project
    'project manager': 'Project/Program/PMO', 'program manager': 'Project/Program/PMO', 'pmo': 'Project/Program/PMO',

    // IT
    'cio': 'IT/Data/Systems', 'cto': 'IT/Data/Systems', 'it manager': 'IT/Data/Systems', 'data analyst': 'IT/Data/Systems',

    // RETAIL / SUPERMARKET ROLES
    // Executive/Management
    'store manager': 'Operations/Production/Plant', 'branch manager': 'Executive/GM/Owner', 'duty manager': 'Operations/Production/Plant',
    'shift supervisor': 'Operations/Production/Plant', 'floor manager': 'Operations/Production/Plant',

    // Commercial / Merchandising
    'category manager': 'Sales/Commercial/Customer', 'merchandiser': 'Sales/Commercial/Customer',
    'planogram specialist': 'Sales/Commercial/Customer', 'promotions coordinator': 'Sales/Commercial/Customer',
    'pricing coordinator': 'Finance/Accounting',

    // Supply / Inventory
    'inventory controller': 'Procurement/Supply Chain/Logistics', 'stock controller': 'Procurement/Supply Chain/Logistics',
    'receiving clerk': 'Procurement/Supply Chain/Logistics', 'goods-in officer': 'Procurement/Supply Chain/Logistics',
    'backroom lead': 'Procurement/Supply Chain/Logistics', 'driver': 'Procurement/Supply Chain/Logistics',

    // Front End / Service
    'head cashier': 'Finance/Accounting', 'cashier': 'Finance/Accounting', 'teller': 'Finance/Accounting',
    'customer service manager': 'Sales/Commercial/Customer', 'service desk': 'Sales/Commercial/Customer',
    'returns clerk': 'Finance/Accounting',

    // Fresh Departments
    'produce lead': 'Operations/Production/Plant', 'produce clerk': 'Operations/Production/Plant',
    'butchery supervisor': 'Operations/Production/Plant', 'meat lead': 'Operations/Production/Plant',
    'bakery lead': 'Operations/Production/Plant', 'deli lead': 'Operations/Production/Plant',
    'dairy lead': 'Operations/Production/Plant',

    // Safety / Loss Prevention
    'loss prevention officer': 'Quality/Compliance/EHS', 'security guard': 'Quality/Compliance/EHS',
    'cctv operator': 'Quality/Compliance/EHS', 'food safety lead': 'Quality/Compliance/EHS',
    'hygiene supervisor': 'Quality/Compliance/EHS',

    // FMCG WHOLESALE & DISTRIBUTION ROLES
    // Sales / RTM
    'van sales rep': 'Sales/Commercial/Customer', 'route sales rep': 'Sales/Commercial/Customer',
    'territory sales rep': 'Sales/Commercial/Customer', 'key account manager': 'Sales/Commercial/Customer',
    'modern trade manager': 'Sales/Commercial/Customer', 'trade marketing manager': 'Sales/Commercial/Customer',
    'promotions lead': 'Sales/Commercial/Customer', 'tender lead': 'Sales/Commercial/Customer',
    'institutional sales': 'Sales/Commercial/Customer', 'visibility officer': 'Sales/Commercial/Customer',

    // Planning / Supply
    'demand planner': 'Procurement/Supply Chain/Logistics', 'supply planner': 'Procurement/Supply Chain/Logistics',
    'replenishment planner': 'Procurement/Supply Chain/Logistics', 's&op coordinator': 'Procurement/Supply Chain/Logistics',
    'supplier relationship manager': 'Procurement/Supply Chain/Logistics',

    // Warehouse / Logistics
    'warehouse manager': 'Procurement/Supply Chain/Logistics', 'dc manager': 'Procurement/Supply Chain/Logistics',
    'dispatch coordinator': 'Procurement/Supply Chain/Logistics', 'load planner': 'Procurement/Supply Chain/Logistics',
    'fleet manager': 'Procurement/Supply Chain/Logistics', 'transport manager': 'Procurement/Supply Chain/Logistics',
    'route planner': 'Procurement/Supply Chain/Logistics', 'returns coordinator': 'Procurement/Supply Chain/Logistics',
    'reverse logistics': 'Procurement/Supply Chain/Logistics', 'picking supervisor': 'Procurement/Supply Chain/Logistics',

    // Finance / Admin
    'credit controller': 'Finance/Accounting', 'collections officer': 'Finance/Accounting',
    'claims analyst': 'Finance/Accounting', 'deductions analyst': 'Finance/Accounting',
    'master data controller': 'IT/Data/Systems',

    // PHARMACY (MODE A) ROLES
    // Leadership / Legal
    'pharmacist-in-charge': 'Executive/GM/Owner', 'superintendent pharmacist': 'Executive/GM/Owner',
    'responsible pharmacist': 'Executive/GM/Owner', 'pharmacy manager': 'Executive/GM/Owner',

    // Clinical / Dispensing
    'staff pharmacist': 'Operations/Production/Plant', 'clinical pharmacist': 'Operations/Production/Plant',
    'pharmacy technician': 'Operations/Production/Plant', 'dispensing technician': 'Operations/Production/Plant',
    'pharmacy assistant': 'Operations/Production/Plant', 'intern pharmacist': 'Operations/Production/Plant',
    'compounding pharmacist': 'Operations/Production/Plant', 'immunization pharmacist': 'Operations/Production/Plant',

    // Revenue / Supply
    'pharmacy buyer': 'Procurement/Supply Chain/Logistics', 'procurement officer': 'Procurement/Supply Chain/Logistics',
    'inventory controller': 'Procurement/Supply Chain/Logistics', 'claims specialist': 'Finance/Accounting',
    'billing officer': 'Finance/Accounting', 'compliance officer': 'Quality/Compliance/EHS',

    // DRUG SHOP (MODE B) ROLES
    // Management / Owner
    'shop manager': 'Executive/GM/Owner', 'outlet supervisor': 'Executive/GM/Owner',
    'managing partner': 'Executive/GM/Owner', 'proprietor': 'Executive/GM/Owner',

    // Counter / Service
    'medicine seller': 'Sales/Commercial/Customer', 'counter attendant': 'Sales/Commercial/Customer',
    'sales associate': 'Sales/Commercial/Customer', 'senior attendant': 'Sales/Commercial/Customer',

    // Supply / Support
    'stock controller': 'Procurement/Supply Chain/Logistics', 'storekeeper': 'Procurement/Supply Chain/Logistics',
    'purchasing clerk': 'Procurement/Supply Chain/Logistics', 'delivery rider': 'Procurement/Supply Chain/Logistics',
    'compliance focal person': 'Quality/Compliance/EHS'
};

export const BASE_ROLE_WEIGHTS: Record<RoleFamily, Record<PillarId, number>> = {
    'Executive/GM/Owner': {
        Operations: 3, Money: 3, Market: 3, Leadership: 3, Innovation: 3, Risk: 3, People: 3
    },
    'Finance/Accounting': {
        Money: 5, Risk: 4, Market: 3, Operations: 3, People: 2, Leadership: 2, Innovation: 2
    },
    'HR/People/Admin': {
        People: 5, Operations: 4, Leadership: 3, Innovation: 3, Money: 2, Market: 2, Risk: 2
    },
    'Operations/Production/Plant': {
        Operations: 5, Risk: 4, Leadership: 4, Innovation: 3, People: 3, Market: 2, Money: 2
    },
    'Quality/Compliance/EHS': {
        Leadership: 5, Innovation: 4, Operations: 4, People: 3, Risk: 3, Market: 2, Money: 2
    },
    'Procurement/Supply Chain/Logistics': {
        Risk: 5, Money: 4, Operations: 3, Leadership: 3, Innovation: 2, Market: 2, People: 2
    },
    'Sales/Commercial/Customer': {
        Market: 5, Money: 4, Leadership: 3, Operations: 2, Risk: 2, Innovation: 2, People: 2
    },
    'Engineering/Product/Technical': {
        Innovation: 5, Leadership: 4, Operations: 3, Risk: 3, People: 2, Market: 2, Money: 2
    },
    'Project/Program/PMO': {
        Market: 4, Operations: 4, Innovation: 3, Leadership: 3, Risk: 3, Money: 3, People: 3
    },
    'IT/Data/Systems': {
        Operations: 4, Risk: 3, Money: 3, People: 3, Market: 2, Innovation: 2, Leadership: 2
    }
};

export const normalizeRole = (title: string): RoleFamily => {
    const lowerTitle = title.toLowerCase();

    // Exact or contains match
    for (const [key, family] of Object.entries(ROLE_FAMILIES)) {
        if (lowerTitle.includes(key)) return family;
    }

    // Default fallback
    return 'Executive/GM/Owner';
};
