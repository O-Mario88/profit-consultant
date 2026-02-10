
import { KPI } from "../types";
import { ELECTRONICS_SHOP_SUB_INDUSTRIES, FASHION_SUB_INDUSTRIES, FMCG_SUB_INDUSTRIES, HARDWARE_SUB_INDUSTRIES, SPARE_PARTS_SUB_INDUSTRIES, STATIONERY_SUB_INDUSTRIES } from "./retailSubIndustries";

export type IndustryKey = 'retail' | 'tech' | 'agriculture' | 'hospitality' | 'services' | 'transport' | 'manufacturing' | 'construction' | 'livestock' | 'aquaculture' | 'agro_processing' | 'mining' | 'oil_gas_services' | 'produce' | 'other';

export interface Lexicon {
  customer: string;
  order: string;
  delivery: string;
  stock: string;
  lead: string;
  quality: string;
  cash_risk: string;
  staff: string;
}

// Map industry ID to specific leak symptoms for Mission Brief
export const INDUSTRY_LEAK_TOKENS: Record<string, string[]> = {
  retail: ['stock-outs', 'shrinkage', 'expiry loss', 'supplier terms'],
  construction: ['variations', 'milestone payments', 'rework', 'disputes'],
  tech: ['scope creep', 'delivery SLAs', 'backlog', 'rework bugs'],
  hospitality: ['reviews', 'cancellations', 'waste', 'service time'],
  health: ['waiting time', 'incidents', 'compliance', 'records'],
  education: ['fee collection', 'teacher coaching', 'learning outcomes'],
  finance: ['PAR', 'fraud controls', 'reconciliation', 'audit trails'],
  agriculture: ['post-harvest loss', 'buyer contracts', 'logistics delays'],
  livestock: ['mortality', 'feed conversion', 'disease outbreaks', 'growth stunting'],
  aquaculture: ['oxygen debt', 'feed black hole', 'density overdraft', 'silent mortality'],
  agro_processing: ['yield bleed', 'downtime drain', 'moisture drift', 'rework loop'],
  mining: ['recovery leak', 'pit-to-scale blindspot', 'buyer price trap', 'chain-of-custody hole'],
  oil_gas_services: ['rig-time bleed', 'permit-to-work delay', 'variation order leakage', 'hse shutdown risk'],
  transport: ['breakdowns', 'fuel theft', 'idle fleet', 'delivery delays'],
  manufacturing: ['scrap rate', 'downtime', 'batch defects', 'supply delays'],
  services: ['unbilled hours', 'scope creep', 'client churn', 'proposal delays'],
  other: ['waste', 'delays', 'inconsistency', 'rework']
};

export const INDUSTRY_LEXICONS: Record<string, Lexicon> = {
  retail: {
    customer: 'customer',
    order: 'sale',
    delivery: 'delivery/pickup',
    stock: 'inventory',
    lead: 'WhatsApp DM/call',
    quality: 'packaging/condition',
    cash_risk: 'dead stock',
    staff: 'staff'
  },
  tech: {
    customer: 'client',
    order: 'project/sprint',
    delivery: 'handover/milestone',
    stock: 'backlog/tickets',
    lead: 'proposal/discovery call',
    quality: 'bugs/QA',
    cash_risk: 'scope creep',
    staff: 'developers'
  },
  agriculture: {
    customer: 'buyer/aggregator',
    order: 'harvest lot/supply deal',
    delivery: 'collection/transport',
    stock: 'produce/inputs',
    lead: 'buyer lead/contract',
    quality: 'grading/moisture',
    cash_risk: 'spoilage',
    staff: 'workers'
  },
  livestock: {
    customer: 'buyer/trader',
    order: 'sale/batch',
    delivery: 'transport',
    stock: 'herd/flock',
    lead: 'buyer inquiry',
    quality: 'weight/health',
    cash_risk: 'mortality/theft',
    staff: 'caretakers'
  },
  aquaculture: {
    customer: 'buyer',
    order: 'harvest/batch',
    delivery: 'delivery',
    stock: 'biomass/stock',
    lead: 'market inquiry',
    quality: 'grade/size',
    cash_risk: 'disease/crash',
    staff: 'farm team'
  },
  agro_processing: {
    customer: 'buyer/distributor',
    order: 'batch/order',
    delivery: 'delivery',
    stock: 'raw/finished goods',
    lead: 'contract/tender',
    quality: 'spec compliance',
    cash_risk: 'spoilage/rejects',
    staff: 'operators'
  },
  mining: {
    customer: 'buyer/offtaker',
    order: 'shipment/lot',
    delivery: 'dispatch/hand-off',
    stock: 'ore stockpile/lot',
    lead: 'buyer channel',
    quality: 'grade/recovery',
    cash_risk: 'theft/deductions',
    staff: 'crew'
  },
  oil_gas_services: {
    customer: 'client/operator',
    order: 'job/work order',
    delivery: 'site execution/close-out',
    stock: 'tools/spares/rentals',
    lead: 'tender/prequal opportunity',
    quality: 'SLA/QA evidence',
    cash_risk: 'backcharge/penalty',
    staff: 'field crew'
  },
  hospitality: {
    customer: 'guest/diner',
    order: 'booking/order',
    delivery: 'service experience',
    stock: 'supplies',
    lead: 'booking inquiry',
    quality: 'reviews/cleanliness',
    cash_risk: 'no-shows',
    staff: 'crew'
  },
  services: {
    customer: 'client',
    order: 'retainer',
    delivery: 'deliverable',
    stock: 'capacity',
    lead: 'consultation',
    quality: 'accuracy',
    cash_risk: 'unbilled hours',
    staff: 'consultants'
  },
  transport: {
    customer: 'shipper',
    order: 'load',
    delivery: 'trip',
    stock: 'fleet',
    lead: 'quote request',
    quality: 'safety/timeliness',
    cash_risk: 'breakdowns',
    staff: 'drivers'
  },
  manufacturing: {
    customer: 'distributor',
    order: 'batch',
    delivery: 'shipping',
    stock: 'raw materials',
    lead: 'purchase order',
    quality: 'defect rate',
    cash_risk: 'scrap',
    staff: 'operators'
  },
  construction: {
    customer: 'property owner',
    order: 'job',
    delivery: 'milestone',
    stock: 'materials',
    lead: 'bid/tender',
    quality: 'finish',
    cash_risk: 'delays',
    staff: 'crew'
  },
  other: {
    customer: 'customer',
    order: 'order',
    delivery: 'delivery',
    stock: 'resources',
    lead: 'lead',
    quality: 'quality',
    cash_risk: 'waste',
    staff: 'team'
  }
};

export interface IndustryCategory {
  id: string;
  label: string;
  iconName: string;
  lexiconKey: IndustryKey;
  subIndustries: string[];
}

export const INDUSTRY_TAXONOMY: IndustryCategory[] = [
  {
    id: 'aquaculture',
    label: 'Fisheries & Aquaculture',
    iconName: 'CloudRain',
    lexiconKey: 'aquaculture',
    subIndustries: [
      'Tilapia Farming',
      'Catfish Farming',
      'Shrimp Farming',
      'Salmon & Trout Farming'
    ]
  },
  {
    id: 'agro_processing',
    label: 'Agro-Processing & Value Addition',
    iconName: 'Factory',
    lexiconKey: 'agro_processing',
    subIndustries: [
      'Milling (maize, wheat, rice, animal feed)',
      'Drying & Storage (grains, coffee, fruits)',
      'Packaging (foods, grains, consumer goods)',
      'Juices & Beverages',
      'Oils (sunflower, sesame, groundnut, palm)'
    ]
  },
  {
    id: 'agri_input',
    label: 'Agri-Input Supplier',
    iconName: 'Sprout',
    lexiconKey: 'agriculture',
    subIndustries: [
      'Mechanization Hire',
      'Irrigation Supply & Install',
      'Repair & Maintenance Services',
      'Equipment Sales & Spares',
      'Operator Training & Advisory'
    ]
  },
  {
    id: 'produce_aggregation',
    label: 'Produce Aggregation & Trading',
    iconName: 'Store', // Using Store icon as it fits trading/markets
    lexiconKey: 'produce',
    subIndustries: [
      'Farmgate Aggregator (Local)',
      'Wholesale Market Trader',
      'Institutional Supplier',
      'Exporter / Cross-border Trader',
      'Digital Broker / Agent',
      'Warehouse + Bulking Hub'
    ]
  },

  {
    id: 'livestock',
    label: 'Livestock & Animal Husbandry',
    iconName: 'Sprout',
    lexiconKey: 'livestock',
    subIndustries: [
      'Dairy Cattle',
      'Beef Cattle',
      'Goats & Sheep',
      'Piggery',
      'Poultry (Broilers)',
      'Poultry (Layers)'
    ]
  },
  {
    id: 'agriculture',
    label: 'Agriculture, Livestock & Agribusiness',
    iconName: 'Sprout',
    lexiconKey: 'agriculture',
    subIndustries: [
      'Crop farming', 'Livestock', 'Dairy & milk collection', 'Fisheries & aquaculture',
      'Beekeeping & apiculture', 'Agro-processing', 'Input supplier', 'Farm machinery & services',
      'Produce aggregation & trading', 'Export / cross-border produce trade', 'Storage & warehousing',
      'Forestry & timber production'
    ]
  },
  {
    id: 'mining',
    label: 'Mining, Quarrying & Natural Resources',
    iconName: 'Pickaxe',
    lexiconKey: 'mining',
    subIndustries: [
      'Artisanal Gold',
      'Gemstones',
      '3Ts (Tin/Tantalum/Coltan)',
      'Quarrying (stone/sand/aggregates)'
    ]
  },
  {
    id: 'oil_gas_services',
    label: 'Oil & Gas Services',
    iconName: 'Wrench',
    lexiconKey: 'oil_gas_services',
    subIndustries: [
      'Maintenance & Shutdown Services',
      'Logistics & Transport Services',
      'Inspection, Testing & QA Services',
      'Civil Works / Fabrication / Welding Services'
    ]
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing & Industrial Production',
    iconName: 'Factory',
    lexiconKey: 'manufacturing',
    subIndustries: [
      'Food & beverage manufacturing', 'Bakery / Flour / Grain-based processing', 'Dairy processing (milk, yoghurt, cheese)',
      'Beverages (juice, soda, water)', 'Meat processing', 'Snacks & packaged foods',
      'Edible oils (sunflower, palm, groundnut, etc.)', 'Textile & garment manufacturing',
      'CMT Factory (Cut-Make-Trim for buyers)', 'Uniforms & Workwear Manufacturing',
      'Fashion / Retail Brand (own brand)', 'Knitwear / T-shirts / Casualwear (high volume)',
      'Tailoring / Bespoke / Small Batch (custom)', 'Furniture & carpentry production',
      'Custom Residential Furniture (beds, wardrobes, kitchens)', 'Commercial Fit-Out & Office Furniture',
      'Doors, Windows & Building Joinery', 'Mass/Batch Production (standard designs)',
      'Upholstered Furniture (sofas, chairs)',
      'Metal works / fabrication', 'Structural Steel & Construction Fabrication (frames, beams, gates, stairs)',
      'Doors, Windows, Grills & Security Products', 'Industrial Fabrication (tanks, platforms, racks, hoppers)',
      'Automotive Fabrication (trailers, bodies, repairs/mods)', 'Aluminum Fabrication (doors, partitions, glazing frames)',
      'Stainless Steel Works (kitchen, hospital, food-grade)',
      'Plastics & packaging manufacturing', 'Film & Bag Manufacturing (poly bags, shrink film, liners)',
      'Rigid Packaging (bottles, jerrycans, containers)', 'Injection Molding (caps, parts, household items)',
      'Printing & Lamination (labels, flexible packs, pouches)', 'Recycled Plastics (regrind, washing, pelletizing)',
      'Industrial Packaging (drums, crates, bulk packaging accessories)', 'Soap / detergents / cosmetics production',
      'Laundry Detergent & Multipurpose Cleaners (powder/liquid)', 'Bar Soap & Bath Soap (beauty/medicated)',
      'Personal Care & Cosmetics (lotions, creams, oils, hair products)', 'Institutional / Bulk Supply (hotels, hospitals, schools)',
      'Natural/Organic & Sensitive-Skin Brands', 'Distributors / Private Label Manufacturing',
      'Bricks / blocks / cement products', 'Manual Yard Bricks (small-scale clay bricks / hand-mold)',
      'Concrete Blocks (hollow/solid blocks, machine-vibro)', 'Pavers / Kerbs / Precast (high mix + high QC demand)',
      'Cement Tiles / Terrazzo / Floor Tiles', 'Roofing Tiles (concrete tiles, decorative roofing pieces)',
      'Multi-Product Yard (blocks + pavers + tiles + custom orders)',
      'Bottled water / ice production', 'Small Plant Bottled Water (manual/semi-automatic)',
      'Automated Bottling Line (higher volume)', 'Sachet Water (high volume, price-sensitive)',
      'Ice Blocks / Ice Cubes (standalone)', 'Bottled Water + Ice (combined plant)',
      'Institutional Supply (schools, hospitals, offices, events)', 'Distributor / Private Label Bottling',
      'Pharmaceuticals / medical supplies manufacturing',
      'Chemical/light industrial production', 'Assembly / OEM', 'Assembly / OEM (electronics, components)',
      'EMS Contract Manufacturer (PCBA + Box Build)',
      'PCBA-Only (SMT + Reflow + AOI + Test)',
      'Cable / Harness / Connector Assembly',
      'High-Mix Low-Volume Custom Builds (Industrial, Lab, Prototypes)',
      'White-Label / Multi-Variant OEM (Many clients, similar products)',
      'Repair / Refurb / Rework Center (Reverse Logistics)',
      'Precision Electronics / Medical / High-Compliance Assembly'
    ]
  },
  {
    id: 'retail',
    label: 'Retail, Wholesale & Trade',
    iconName: 'ShoppingBag',
    lexiconKey: 'retail',
    subIndustries: [
      'Supermarket / mini-mart', 'Kiosk / market vendor',
      ...ELECTRONICS_SHOP_SUB_INDUSTRIES,
      ...FMCG_SUB_INDUSTRIES,
      'Pharmacy / drug shop',
      ...HARDWARE_SUB_INDUSTRIES,
      ...FASHION_SUB_INDUSTRIES,
      ...STATIONERY_SUB_INDUSTRIES,
      ...SPARE_PARTS_SUB_INDUSTRIES,
      'Cosmetics / beauty supplies',
      'Import/export trading', 'E-commerce store / online retail'
    ]
  },
  {
    id: 'construction',
    label: 'Construction, Real Estate & Built Environment',
    iconName: 'HardHat',
    lexiconKey: 'construction',
    subIndustries: [
      'General contracting', 'Civil works', 'Architecture & design',
      'Quantity surveying & estimating', 'Land surveying & mapping', 'Plumbing / electrical / HVAC services',
      'Interior design & fit-out', 'Real estate brokerage/agency', 'Property management',
      'Facilities management', 'Real estate development', 'Building materials supply'
    ]
  },
  {
    id: 'transport',
    label: 'Transport, Logistics & Mobility',
    iconName: 'Truck',
    lexiconKey: 'transport',
    subIndustries: [
      'Boda / ride services / taxi operations', 'Bus & coach services', 'Trucking / haulage',
      'Courier / last-mile delivery', 'Warehousing & fulfillment', 'Freight forwarding / clearing & customs',
      'Fleet leasing & management', 'Shipping/logistics coordination', 'Automotive towing & recovery',
      'Fuel station / energy retail'
    ]
  },
  {
    id: 'hospitality',
    label: 'Hospitality, Food, Beverage & Tourism',
    iconName: 'Utensils',
    lexiconKey: 'hospitality',
    subIndustries: [
      'Restaurant / café / fast food', 'Hotel / lodge / Airbnb host', 'Catering services',
      'Bar / nightlife venue', 'Bakery / confectionery', 'Butchery / meat supply',
      'Travel agency / tour operator', 'Events & conference services', 'Recreation / leisure business'
    ]
  },
  {
    id: 'health',
    label: 'Health, Medical & Wellness',
    iconName: 'HeartPulse',
    lexiconKey: 'services',
    subIndustries: [
      'Clinic / hospital', 'Dental clinic', 'Laboratory & diagnostics',
      'Medical outreach / community health', 'Nursing / home care services',
      'Mental health / counseling', 'Gym / fitness center', 'Salon / spa',
      'Wellness products/services'
    ]
  },
  {
    id: 'education',
    label: 'Education, Training & Skills Development',
    iconName: 'BookOpen',
    lexiconKey: 'services',
    subIndustries: [
      'Nursery / primary / secondary school', 'Tertiary college / institute', 'Vocational training (TVET)',
      'Tutoring / coaching / exam prep', 'Corporate training provider', 'EdTech / e-learning platform',
      'School support services'
    ]
  },
  {
    id: 'tech',
    label: 'Technology, IT & Digital Services',
    iconName: 'Monitor',
    lexiconKey: 'tech',
    subIndustries: [
      'Software company / SaaS product', 'IT support & maintenance', 'Device repair',
      'Web design & development', 'Mobile app development', 'Digital marketing agency',
      'Cybersecurity services', 'Data analytics / BI / AI services', 'Network installation & ISP/telecom reseller',
      'Cloud services / managed services', 'POS/ERP implementation'
    ]
  },
  {
    id: 'finance',
    label: 'Financial Services & Business Support',
    iconName: 'Wallet',
    lexiconKey: 'services',
    subIndustries: [
      'SACCO / cooperative finance', 'Microfinance / lending', 'Insurance agent/broker',
      'Accounting & bookkeeping', 'Audit & tax advisory', 'Payroll services',
      'Investment advisory', 'Payments/fintech services', 'Business registration & compliance services'
    ]
  },
  {
    id: 'professional',
    label: 'Professional Services',
    iconName: 'Briefcase',
    lexiconKey: 'services',
    subIndustries: [
      'Legal services / law firm', 'Consulting', 'Recruitment / staffing agency',
      'Engineering consulting', 'Research & evaluation (M&E)', 'Translation & interpretation'
    ]
  },
  {
    id: 'media',
    label: 'Media, Creative & Entertainment',
    iconName: 'Video',
    lexiconKey: 'services',
    subIndustries: [
      'Photography / videography', 'Graphic design & branding', 'Printing & publishing',
      'Advertising/PR agency', 'Content creation / influencer', 'Radio/TV/media production',
      'Music/events entertainment services'
    ]
  },
  {
    id: 'public_sector',
    label: 'Public Sector & Government Contractors',
    iconName: 'Building2',
    lexiconKey: 'services',
    subIndustries: [
      'Government services provider', 'Government contractors', 'Public-private partnership operators'
    ]
  },
  {
    id: 'ngo',
    label: 'NGO, Non-Profit & Social Enterprise',
    iconName: 'Globe',
    lexiconKey: 'services',
    subIndustries: [
      'NGO / foundation / charity', 'CBO (community-based org)', 'Faith-based organization programs',
      'Social enterprise', 'Donor-funded project implementer'
    ]
  },
  {
    id: 'utilities',
    label: 'Utilities, Energy & Environment',
    iconName: 'Zap',
    lexiconKey: 'other',
    subIndustries: [
      'Solar/renewable installation', 'Electrical services', 'Water supply services',
      'Waste management & sanitation', 'Recycling / circular economy', 'Environmental services / consultancy',
      'Security services (guards, CCTV, alarms)'
    ]
  },
  {
    id: 'automotive',
    label: 'Automotive, Machinery & Engineering Services',
    iconName: 'Wrench',
    lexiconKey: 'services',
    subIndustries: [
      'Garage / mechanic', 'Car wash', 'Tyres & battery shop', 'Spare parts dealer',
      'Motorcycle repair', 'Heavy machinery repair & hire', 'Welding/fabrication services'
    ]
  },
  {
    id: 'household',
    label: 'Household, Personal & Lifestyle Services',
    iconName: 'Home',
    lexiconKey: 'services',
    subIndustries: [
      'Laundry services', 'Cleaning services', 'Tailoring & fashion services',
      'Event decoration & planning', 'Domestic staffing services', 'Hairdressing/barbering',
      'Childcare/daycare services'
    ]
  },
  {
    id: 'telecom',
    label: 'Telecommunications & Connectivity',
    iconName: 'Wifi',
    lexiconKey: 'tech',
    subIndustries: [
      'Mobile money agency network', 'Airtime/data distribution',
      'ISP services (local)', 'Tower/field service contractors'
    ]
  },
  {
    id: 'security',
    label: 'Security, Defense & Risk Services',
    iconName: 'Shield',
    lexiconKey: 'services',
    subIndustries: [
      'Private security company', 'Risk management consultancy', 'Investigations'
    ]
  },
  {
    id: 'religion',
    label: 'Religion & Community Institutions',
    iconName: 'Users',
    lexiconKey: 'other',
    subIndustries: [
      'Church/ministry operations', 'Religious education programs', 'Community development programs'
    ]
  },
  {
    id: 'other_multi',
    label: 'Other / Multi-Industry',
    iconName: 'LayoutGrid',
    lexiconKey: 'other',
    subIndustries: [
      'Holding company / multi-business operator', 'Marketplace / platform business', '“Not sure yet”'
    ]
  }
];

export interface QuickScanVariant {
  pillar: string;
  variants: Record<string, { a: string, b: string }>; // Keyed by industry ID, fallback to 'default'
}

export const AQUACULTURE_HOOKS = {
  Money: "Feed Black Hole",
  Operations: "Oxygen Debt",
  Risk: "Silent Mortality Tax",
  Market: "Harvest Panic Discount",
  Innovation: "Growth Curve Collapse",
  Leadership: "Management-by-Memory Trap",
  People: "Approval Bottleneck"
};

export const AQUACULTURE_QUIZ_COPY = {
  Leadership: { detection: "management-by-memory + weak batch targets", cost: "late decisions, repeat mistakes, and unpredictable cycles", cliffhanger: "Deep Scan will build a weekly farm dashboard and show which metric is drifting first." },
  Market: { detection: "price-taker position + weak grading/proof", cost: "forced discounts, delayed payments, and low bargaining power", cliffhanger: "Deep Scan will map your buyer strategy + grade-mix pricing to recover margin." },
  Operations: { detection: "feeding + water routines not fully standardized", cost: "slow growth, uneven sizes, and hidden stress loss", cliffhanger: "Deep Scan will pinpoint whether your leak is oxygen windows, feeding rhythm, or stocking pressure." },
  Money: { detection: "conversion blind spot (FCR drift) + unclear cost/kg", cost: "feed black hole + profit disappearing even when sales look good", cliffhanger: "Deep Scan calculates your cost/kg gain and identifies the exact wastage point." },
  Innovation: { detection: "growth curve drift + time-to-market slippage", cost: "extra feeding days, stunting, and delayed harvest cash", cliffhanger: "Deep Scan will identify the fastest lever to shorten cycle time." },
  Risk: { detection: "biosecurity gaps + weak outage resilience", cost: "outbreak roulette + one event can erase months of profit", cliffhanger: "Deep Scan generates your biosecurity map + outage survival plan." },
  People: { detection: "approval-first culture + inconsistent routines", cost: "slow response to water/health issues, quality drift across shifts", cliffhanger: "Deep Scan defines decision boundaries + SOP ownership so your farm runs without bottlenecks." }
};

export const AGRO_PROCESSING_HOOKS = {
  Money: "Yield Bleed",
  Operations: "Downtime Drain",
  Risk: "Intake Quality Roulette",
  Market: "Spec Drift Discount",
  Innovation: "SKU Complexity Tax",
  Leadership: "Batch-to-Batch Chaos",
  People: "Hero Operator Dependence"
};

export const AGRO_PROCESSING_QUIZ_COPY = {
  Leadership: { detection: "reactive scheduling + firefighting", cost: "expensive changeovers and overtime to fix plan gaps", cliffhanger: "Deep Scan will build a Fixed Repeating Schedule." },
  Market: { detection: "spec drift + buyer rejections/deductions", cost: "selling premium product at discount prices due to variance", cliffhanger: "Deep Scan will build a Spec Shield to lock in your margin." },
  Operations: { detection: "frequent downtime + undefined changeover protocols", cost: "capacity tax (paying for 100% time, getting 60% output)", cliffhanger: "Deep Scan will reveal your OEE gap and pinpoint micro-stops." },
  Money: { detection: "yield bleed + mass balance unknown", cost: "invisible profit loss (buying bulk, selling unit, losing the difference)", cliffhanger: "Deep Scan will perform a Mass Balance audit to find the leak." },
  Innovation: { detection: "stagnant SKU list + slow innovation", cost: "market share loss to faster competitors", cliffhanger: "Deep Scan will identify Tail SKUs to cut and new winners to launch." },
  Risk: { detection: "food safety via 'carefulness' instead of systems", cost: "recall risk that could bankrupt the brand", cliffhanger: "Deep Scan will install the Compliance Lock." },
  People: { detection: "hero dependence + undefined roles", cost: "factory stops/slows when you aren't there", cliffhanger: "Deep Scan will build Role Cards to decentralize execution." }
};

export const MINING_HOOKS = {
  Operations: 'Recovery Leak',
  Money: 'Cash-Leak Culture',
  Market: 'Middleman Margin Capture',
  Leadership: 'Firefighting Management',
  Innovation: 'Low-Tech Trap',
  Risk: 'Safety Time Bomb',
  People: 'Skill Gap Drag'
};

export const MINING_QUIZ_COPY = {
  Operations: {
    detection: 'pit-to-scale blindspot + grade drift',
    cost: 'you are mining volume but not recovering full value',
    cliffhanger: 'Deep Scan will map your pit-to-stockpile flow and reveal the exact recovery leak.'
  },
  Money: {
    detection: 'ghost costs + buyer-controlled deductions',
    cost: 'margin collapse hidden behind strong cash movement',
    cliffhanger: 'Deep Scan will build cost-per-ton controls and isolate where cash leakage starts.'
  },
  Market: {
    detection: 'single-buyer danger + weak shipment proof',
    cost: 'pricing power shifts to middlemen and disputes increase',
    cliffhanger: 'Deep Scan will install your trust premium system (proof packs + terms discipline).'
  },
  Leadership: {
    detection: 'no owner syndrome + decision by shouting',
    cost: 'repeat mistakes, unstable output, and firefighting management',
    cliffhanger: 'Deep Scan will assign owners and install weekly KPI control cadence.'
  },
  Innovation: {
    detection: 'processing gap + low-tech trap',
    cost: 'more digging without higher value per ton',
    cliffhanger: 'Deep Scan will prioritize one recovery upgrade with measurable 30-day ROI.'
  },
  Risk: {
    detection: 'compliance trap + chain-of-custody hole',
    cost: 'one incident or dispute can shut operations and destroy trust',
    cliffhanger: 'Deep Scan will set safety routines and custody traceability that survive audits.'
  },
  People: {
    detection: 'incentive misfire + silent error problem',
    cost: 'speed is rewarded while recovery quality and discipline decay',
    cliffhanger: 'Deep Scan will redesign training and incentives around recovery and loss prevention.'
  }
};

export const OIL_GAS_QUIZ_COPY = {
  Operations: {
    detection: 'PTW bottlenecks + work pack chaos',
    cost: 'paid crews waiting instead of producing',
    cliffhanger: 'Deep Scan will map your readiness and dispatch flow to cut idle-time leakage.'
  },
  Money: {
    detection: 'variation order leakage + unbilled work drift',
    cost: 'high workload with thin or disappearing margin',
    cliffhanger: 'Deep Scan will enforce VO and invoice triggers that convert delivery into collected cash.'
  },
  Market: {
    detection: 'single-client dependency + weak performance proof',
    cost: 'pricing pressure, renewal risk, and tender vulnerability',
    cliffhanger: 'Deep Scan will build your trust-premium proof system for stronger repeat work.'
  },
  Leadership: {
    detection: 'supervisor lottery + weak action closure',
    cost: 'inconsistent site execution and recurring delay causes',
    cliffhanger: 'Deep Scan will install owner accountability and weekly control rhythms.'
  },
  Innovation: {
    detection: 'template void + field data blindspot',
    cost: 'manual planning overhead and repeated rework loops',
    cliffhanger: 'Deep Scan will standardize templates and convert field lessons into process upgrades.'
  },
  Risk: {
    detection: 'HSE/PTW inconsistency + contract exposure',
    cost: 'incident shutdown risk, penalties, and vendor-status damage',
    cliffhanger: 'Deep Scan will harden compliance, audit trails, and subcontractor controls.'
  },
  People: {
    detection: 'fatigue drift + competency gaps',
    cost: 'quality erosion, incidents, and avoidable turnover',
    cliffhanger: 'Deep Scan will align incentives to first-time-right quality and safety discipline.'
  }
};

export const FNB_QUIZ_COPY = {
  Operations: {
    detection: 'yield leak + downtime/changeover loss',
    cost: 'raw material waste and lost line capacity are silently compressing output',
    cliffhanger: 'Deep Scan will map your top loss drivers and lock in first-pass controls.'
  },
  Money: {
    detection: 'COGS blindness + shrinkage/promo leakage',
    cost: 'volume is moving while SKU-level margin is being diluted',
    cliffhanger: 'Deep Scan will build unit-cost and margin guardrails tied to waste drivers.'
  },
  Market: {
    detection: 'shelf-trust drift + stockout pressure',
    cost: 'repeat buying and shelf space decline when consistency and fill-rate slip',
    cliffhanger: 'Deep Scan will install service-level and complaint-closure routines to protect demand.'
  },
  Leadership: {
    detection: 'firefighting cadence + weak ownership closure',
    cost: 'the same production issues recur and consume labor and management time',
    cliffhanger: 'Deep Scan will assign line owners and enforce weekly closure on repeat losses.'
  },
  Innovation: {
    detection: 'product/process stagnation + weak testing rhythm',
    cost: 'low-margin mix persists while value-add opportunities are missed',
    cliffhanger: 'Deep Scan will prioritize a 30-day product/pack/process sprint tied to margin ROI.'
  },
  Risk: {
    detection: 'traceability and hygiene control gaps',
    cost: 'one incident can trigger recalls, contract loss, and brand damage',
    cliffhanger: 'Deep Scan will harden traceability, supplier controls, and recall readiness.'
  },
  People: {
    detection: 'skill variance + weak handover discipline',
    cost: 'quality swings by shift, creating rework and avoidable waste',
    cliffhanger: 'Deep Scan will set competency and handover standards for consistent output.'
  }
};

export const TEXTILE_QUIZ_COPY = {
  Operations: {
    detection: 'late defect capture + line flow bottlenecks',
    cost: 'rework, idle capacity, and missed output targets are bleeding payroll value',
    cliffhanger: 'Deep Scan will map line bottlenecks and lock in in-line quality controls.'
  },
  Money: {
    detection: 'style-level costing fog + overtime leakage',
    cost: 'orders look busy but margin is diluted by hidden style costs and rush behavior',
    cliffhanger: 'Deep Scan will build style-cost and overtime controls to protect margin per order.'
  },
  Market: {
    detection: 'buyer dependency + spec confusion risk',
    cost: 'chargebacks, disputes, and low pricing leverage reduce repeat profitability',
    cliffhanger: 'Deep Scan will install spec-lock and delivery-proof systems to strengthen buyer trust.'
  },
  Leadership: {
    detection: 'supervisor dependency + weak closure cadence',
    cost: 'daily firefighting keeps recurring defects and delays alive',
    cliffhanger: 'Deep Scan will enforce ownership and weekly root-cause closure on repeat issues.'
  },
  Innovation: {
    detection: 'pattern/SMV optimization gaps + slow process evolution',
    cost: 'capacity and cost-down gains are left on the table while faster competitors compound',
    cliffhanger: 'Deep Scan will launch a measurable 30-day productivity and method improvement sprint.'
  },
  Risk: {
    detection: 'audit compliance fragility + supplier and contract exposure',
    cost: 'penalties, nonconformities, and contract loss risk can erase hard-won margin quickly',
    cliffhanger: 'Deep Scan will harden compliance, supplier quality gates, and penalty prevention controls.'
  },
  People: {
    detection: 'skill variance + fatigue and absenteeism shocks',
    cost: 'quality swings by shift and output stability depends on a few operators',
    cliffhanger: 'Deep Scan will install training ladders, backup staffing, and handover discipline.'
  }
};

export const FURNITURE_QUIZ_COPY = {
  Operations: {
    detection: 'measurement and finishing flow breakdown',
    cost: 'rework, material waste, and late-stage bottlenecks are stretching cycle time and delivery promises',
    cliffhanger: 'Deep Scan will lock measurement discipline and finishing flow to stop deadline collapse.'
  },
  Money: {
    detection: 'underpricing + hidden scope/cost leakage',
    cost: 'good-looking jobs are losing margin through unpaid extras and weak cost visibility',
    cliffhanger: 'Deep Scan will install job costing and change-order pricing so extra work becomes paid margin.'
  },
  Market: {
    detection: 'spec confusion + weak referral reliability',
    cost: 'trust declines when expectations drift and delivery communication is inconsistent',
    cliffhanger: 'Deep Scan will deploy spec-pack and customer update routines to recover referrals and repeat demand.'
  },
  Leadership: {
    detection: 'founder bottleneck + weak ownership cadence',
    cost: 'approval drag and recurring mistakes are slowing workshop throughput',
    cliffhanger: 'Deep Scan will assign stage owners and enforce root-cause closure on repeat failures.'
  },
  Innovation: {
    detection: 'from-scratch dependency + weak modular design leverage',
    cost: 'speed, consistency, and scalable margin are lost when standard components are absent',
    cliffhanger: 'Deep Scan will create a modular core + premium upgrade model to raise speed and margin.'
  },
  Risk: {
    detection: 'contract/documentation gaps + delivery damage exposure',
    cost: 'disputes, remakes, and delayed payments are creating preventable cash shocks',
    cliffhanger: 'Deep Scan will harden contract/change-order controls and delivery sign-off standards.'
  },
  People: {
    detection: 'skill variance + informal apprenticeship handovers',
    cost: 'quality depends on a few individuals and errors multiply during busy periods',
    cliffhanger: 'Deep Scan will install training ladders, checklists, and handover discipline for stable output.'
  }
};

export const METAL_QUIZ_COPY = {
  Operations: {
    detection: 'drawing/fit-up instability + late defect capture',
    cost: 'scrap, refabrication, and schedule slippage are consuming paid labor and steel',
    cliffhanger: 'Deep Scan will enforce drawing lock, fit-up standards, and stage QC to cut rework fast.'
  },
  Money: {
    detection: 'underquote pressure + hidden consumables leakage',
    cost: 'jobs are won but margin is diluted by unpriced hours, consumables, and scope changes',
    cliffhanger: 'Deep Scan will install job-costing and change-order controls so delivery stays profitable.'
  },
  Market: {
    detection: 'spec drift + weak proof portfolio',
    cost: 'disputes and trust erosion are reducing repeat contracts and pricing leverage',
    cliffhanger: 'Deep Scan will build a proof-driven client communication and spec-signoff system.'
  },
  Leadership: {
    detection: 'founder bottleneck + weak action closure',
    cost: 'reactive planning and unclear ownership keep recurring delays and defects alive',
    cliffhanger: 'Deep Scan will assign stage owners and enforce closure on repeat failure patterns.'
  },
  Innovation: {
    detection: 'jig/template gap + low process improvement cadence',
    cost: 'repeat work is rebuilt from scratch, driving avoidable cycle-time and scrap losses',
    cliffhanger: 'Deep Scan will launch a 30-day jigs, layout, and method-improvement sprint.'
  },
  Risk: {
    detection: 'safety/control fragility + contract exposure',
    cost: 'incidents, penalties, and disputes can wipe out monthly profit quickly',
    cliffhanger: 'Deep Scan will harden safety audits, scope controls, and documentation discipline.'
  },
  People: {
    detection: 'skill variance + informal onboarding',
    cost: 'quality depends on a few operators while apprentices create repeat defects',
    cliffhanger: 'Deep Scan will set skill certification and training ladders for consistent output.'
  }
};

export const PLASTICS_QUIZ_COPY = {
  Operations: {
    detection: 'scrap/changeover instability + weak in-process control',
    cost: 'usable output is leaking through rejects, reruns, and avoidable downtime',
    cliffhanger: 'Deep Scan will map loss drivers and lock standard settings plus first-pass QC gates.'
  },
  Money: {
    detection: 'yield/costing blindness + resin and energy volatility exposure',
    cost: 'volume is moving while SKU margins are being silently compressed',
    cliffhanger: 'Deep Scan will build true unit-cost controls and pricing buffers tied to yield behavior.'
  },
  Market: {
    detection: 'spec-lock weakness + commodity pricing pressure',
    cost: 'disputes and weak proof reduce repeat orders and force discounting',
    cliffhanger: 'Deep Scan will install signed-spec and proof-pack routines to strengthen buyer trust.'
  },
  Leadership: {
    detection: 'firefighting cadence + cross-functional blame loops',
    cost: 'recurring defects survive because planning and closure discipline are inconsistent',
    cliffhanger: 'Deep Scan will enforce ownership cadence, structured handovers, and root-cause closure.'
  },
  Innovation: {
    detection: 'SKU complexity sprawl + delayed tooling/process upgrades',
    cost: 'setup friction rises while high-margin product evolution stalls',
    cliffhanger: 'Deep Scan will prioritize SKU rationalization and targeted tooling upgrades with ROI tracking.'
  },
  Risk: {
    detection: 'traceability/compliance fragility + contamination/safety exposure',
    cost: 'one incident can trigger recalls, penalties, and account loss',
    cliffhanger: 'Deep Scan will harden traceability, safety routines, and audit-ready compliance evidence.'
  },
  People: {
    detection: 'shift variance + training discipline gaps',
    cost: 'quality depends on operator memory, causing bad-batch recurrence and wasted capacity',
    cliffhanger: 'Deep Scan will install operator certification and shift-level accountability for yield and quality.'
  }
};

export const SOAP_QUIZ_COPY = {
  Operations: {
    detection: 'batch consistency drift + late QC detection',
    cost: 're-runs, rejects, and fill-weight leakage are reducing usable output and margin',
    cliffhanger: 'Deep Scan will lock recipes, critical controls, and first-run QC gates to stabilize batch quality.'
  },
  Money: {
    detection: 'COGS/yield blindness + ingredient volatility exposure',
    cost: 'sales are growing while true SKU-level profitability is being diluted',
    cliffhanger: 'Deep Scan will build true SKU costing, yield tracking, and pricing guardrails tied to volatility.'
  },
  Market: {
    detection: 'trust inconsistency + weak differentiation',
    cost: 'complaints, reviews, and discount pressure are weakening repeat purchase behavior',
    cliffhanger: 'Deep Scan will install consistency proof and positioning controls that protect brand trust.'
  },
  Leadership: {
    detection: 'firefighting cadence + weak ownership closure',
    cost: 'recurring defects and planning surprises persist because issues are not closed to root cause',
    cliffhanger: 'Deep Scan will enforce KPI rhythm, cross-functional ownership, and action closure discipline.'
  },
  Innovation: {
    detection: 'SKU complexity sprawl + low trial discipline',
    cost: 'setup drag increases while premium, trend-aligned growth opportunities are missed',
    cliffhanger: 'Deep Scan will prioritize SKU rationalization and controlled innovation sprints tied to margin.'
  },
  Risk: {
    detection: 'label/claim compliance fragility + traceability gaps',
    cost: 'one complaint can escalate into recall, legal exposure, and long-term trust damage',
    cliffhanger: 'Deep Scan will harden compliance gates, batch traceability, and safety documentation.'
  },
  People: {
    detection: 'training variance + weak shift accountability',
    cost: 'quality swings by shift and defects repeat when critical controls depend on individual memory',
    cliffhanger: 'Deep Scan will install operator certification, handover standards, and role-level quality ownership.'
  }
};

export const BRICKS_QUIZ_COPY = {
  Operations: {
    detection: 'mix/curing inconsistency + late defect detection',
    cost: 'rejects, breakage, and site failures are consuming capacity and replacement margin',
    cliffhanger: 'Deep Scan will lock ratio, curing, and stage QC controls so strength and size consistency hold.'
  },
  Money: {
    detection: 'costing blindness + transport and credit leakage',
    cost: 'sales volume appears healthy while per-line profitability and cash conversion degrade',
    cliffhanger: 'Deep Scan will install unit-cost, delivery-pricing, and collections rules that protect margin.'
  },
  Market: {
    detection: 'spec drift + contractor trust instability',
    cost: 'site rejections, complaints, and rumor-driven churn weaken repeat demand and pricing power',
    cliffhanger: 'Deep Scan will implement spec-lock and proof-pack routines that reduce disputes and improve trust.'
  },
  Leadership: {
    detection: 'firefighting cadence + weak ownership closure',
    cost: 'urgent planning and delayed decisions keep recurring delays and quality failures alive',
    cliffhanger: 'Deep Scan will enforce KPI cadence, delegated limits, and root-cause closure discipline.'
  },
  Innovation: {
    detection: 'SKU/tooling inefficiency + weak premium mix',
    cost: 'commodity pressure persists while high-margin variants and bundle value remain underleveraged',
    cliffhanger: 'Deep Scan will prioritize SKU rationalization, tooling upgrades, and premium-line experiments.'
  },
  Risk: {
    detection: 'traceability/compliance fragility + strength and safety exposure',
    cost: 'one failure, incident, or undocumented dispute can trigger major financial and legal downside',
    cliffhanger: 'Deep Scan will harden traceability, acceptance terms, and safety control routines.'
  },
  People: {
    detection: 'shift variance + training and accountability gaps',
    cost: 'quality becomes person-dependent and defects repeat under load pressure',
    cliffhanger: 'Deep Scan will install certification, handover structure, and shift-level ownership of quality.'
  }
};

export const WATER_QUIZ_COPY = {
  Operations: {
    detection: 'fill/seal drift + sanitation inconsistency',
    cost: 'small quality losses are accumulating as rework, leak returns, and unstable output',
    cliffhanger: 'Deep Scan will lock fill, seal, filter, and CIP controls so quality stabilizes by shift.'
  },
  Money: {
    detection: 'unit-cost blindness + route and power leakage',
    cost: 'volume activity is masking weak per-SKU margin and slow cash conversion',
    cliffhanger: 'Deep Scan will build true unit economics and route-level controls that protect cash and margin.'
  },
  Market: {
    detection: 'trust volatility + route/shelf control gaps',
    cost: 'repeat demand and price realization are weakening where service and rotation are inconsistent',
    cliffhanger: 'Deep Scan will install route profitability and shelf-discipline routines to improve retention.'
  },
  Leadership: {
    detection: 'firefighting cadence + centralized approvals',
    cost: 'delays and recurring defects persist because actions are not closed to root cause',
    cliffhanger: 'Deep Scan will enforce delegation limits, KPI rhythm, and closure discipline across teams.'
  },
  Innovation: {
    detection: 'SKU sprawl + weak differentiation strategy',
    cost: 'operational complexity rises while premium pricing and channel growth remain limited',
    cliffhanger: 'Deep Scan will prioritize SKU focus, packaging upgrades, and service bundle experiments.'
  },
  Risk: {
    detection: 'testing/traceability fragility + hygiene exposure',
    cost: 'one contamination incident can trigger recall pressure and long-term trust damage',
    cliffhanger: 'Deep Scan will harden testing cadence, batch coding, and compliance evidence routines.'
  },
  People: {
    detection: 'shift variance + training accountability gaps',
    cost: 'quality swings by operator and avoidable defects repeat under pressure',
    cliffhanger: 'Deep Scan will install role certification, handover standards, and clear KPI ownership.'
  }
};

export const FASHION_QUIZ_COPY = {
  Operations: {
    detection: 'size chaos + weak arrival-to-floor discipline',
    cost: 'stock mismatch, tagging delays, and catalog gaps are reducing conversion and speed',
    cliffhanger: 'Deep Scan will lock SKU-size truth, no-tag-no-floor control, and fast catalogue flow.'
  },
  Money: {
    detection: 'margin mirage + markdown and return leakage',
    cost: 'sales movement is not translating into protected category margin and clean cash',
    cliffhanger: 'Deep Scan will build category margin controls and enforce markdown, discount, and return guardrails.'
  },
  Market: {
    detection: 'one-time buyer pattern + trust/content inconsistency',
    cost: 'repeat demand and pricing power are leaking through weak follow-up and proof',
    cliffhanger: 'Deep Scan will install VIP retention, social proof rhythm, and response SLAs.'
  },
  Leadership: {
    detection: 'KPI darkness + approval bottlenecks',
    cost: 'the same leaks are repeating because closure discipline and delegation are weak',
    cliffhanger: 'Deep Scan will enforce KPI cadence, decision limits, and no-repeat action closure.'
  },
  Innovation: {
    detection: 'drop stagnation + bundle engine gaps',
    cost: 'newness and AOV growth are relying on instinct instead of measured experiments',
    cliffhanger: 'Deep Scan will launch micro-test drops, outfit bundles, and conversion-focused experiments.'
  },
  Risk: {
    detection: 'shrink and return-fraud exposure + authenticity risk',
    cost: 'small daily losses and policy disputes are quietly compounding into margin and trust damage',
    cliffhanger: 'Deep Scan will harden shrink controls, returns firewall, and supplier authenticity checks.'
  },
  People: {
    detection: 'incentive misalignment + scriptless selling',
    cost: 'discount-first behavior and inconsistent service are increasing returns and lowering profit quality',
    cliffhanger: 'Deep Scan will align incentives, scripts, and onboarding for consistent profitable execution.'
  }
};

export const HARDWARE_QUIZ_COPY = {
  Operations: {
    detection: 'phantom stock + dispatch and handling drift',
    cost: 'search time, wrong deliveries, and breakage are quietly reducing throughput and trust',
    cliffhanger: 'Deep Scan will lock stock truth, fast-mover protection, and dispatch proof discipline.'
  },
  Money: {
    detection: 'margin mirage + discount and credit leakage',
    cost: 'sales movement is not converting cleanly into protected margin and restock cash',
    cliffhanger: 'Deep Scan will map category margin, tighten discount rules, and enforce collections cadence.'
  },
  Market: {
    detection: 'quote leakage + weak repeat-order system',
    cost: 'project opportunities are being lost through slow follow-up and inconsistent reliability signals',
    cliffhanger: 'Deep Scan will install contractor conversion and repeat-demand control routines.'
  },
  Leadership: {
    detection: 'KPI darkness + approval bottlenecks',
    cost: 'the same leaks are repeating because action closure and delegation are too weak',
    cliffhanger: 'Deep Scan will enforce KPI cadence, decision limits, and no-repeat closure rules.'
  },
  Innovation: {
    detection: 'bundle and process testing is inconsistent',
    cost: 'growth and efficiency are relying on instinct instead of measured improvement',
    cliffhanger: 'Deep Scan will launch project-kit experiments and lightweight workflow automation.'
  },
  Risk: {
    detection: 'supplier verification gaps + dispute and shrinkage exposure',
    cost: 'one counterfeit or evidence-poor dispute can trigger outsized cash and reputation damage',
    cliffhanger: 'Deep Scan will harden supplier firewall, POD defense, and shrinkage controls.'
  },
  People: {
    detection: 'incentive and training misalignment',
    cost: 'shortcut behavior and role variance are increasing errors, returns, and avoidable margin loss',
    cliffhanger: 'Deep Scan will align incentives, onboarding, and ownership for stable execution.'
  }
};

export const ELECTRONICS_QUIZ_COPY = {
  Operations: {
    detection: 'inventory ghosting + repair workflow drift',
    cost: 'search time, comebacks, and stock errors are quietly reducing throughput and trust',
    cliffhanger: 'Deep Scan will lock stock truth, repair stage controls, and Top-SKU execution discipline.'
  },
  Money: {
    detection: 'margin visibility gaps + discount and warranty leakage',
    cost: 'sales activity is not translating into protected cash and predictable margin',
    cliffhanger: 'Deep Scan will build category margin controls and stop discount, recon, and warranty bleed.'
  },
  Market: {
    detection: 'lead and follow-up inconsistency + weak attach behavior',
    cost: 'repeat demand and basket value are leaking through avoidable trust and response gaps',
    cliffhanger: 'Deep Scan will install lead response cadence, trust proof, and attach scripts that compound revenue.'
  },
  Leadership: {
    detection: 'KPI cadence weakness + approval bottlenecks',
    cost: 'issues repeat because action closure and delegated control are too slow',
    cliffhanger: 'Deep Scan will enforce KPI visibility, decision limits, and closure discipline by owner.'
  },
  Innovation: {
    detection: 'offer testing is irregular + service productization is weak',
    cost: 'growth depends on luck instead of a repeatable experiment system',
    cliffhanger: 'Deep Scan will launch monthly test loops, bundle optimization, and lightweight automation.'
  },
  Risk: {
    detection: 'IMEI/parts verification exposure + policy ambiguity',
    cost: 'a single dispute or authenticity incident can trigger outsized cash and reputation damage',
    cliffhanger: 'Deep Scan will harden verification, dispute evidence, and shrinkage controls before failure events.'
  },
  People: {
    detection: 'incentive and training misalignment across sales and technicians',
    cost: 'returns, comebacks, and service variance rise when behavior is not aligned to quality outcomes',
    cliffhanger: 'Deep Scan will align incentives, certification, and ownership for stable execution.'
  }
};

export const FMCG_QUIZ_COPY = {
  Operations: {
    detection: 'stockout pressure + dispatch accuracy and route instability',
    cost: 'availability gaps and execution errors are converting delivery activity into silent margin leakage',
    cliffhanger: 'Deep Scan will lock fast-mover replenishment, stock truth, and route/POD discipline.'
  },
  Money: {
    detection: 'margin leak stack (discounts, AR drag, promo and route economics)',
    cost: 'sales momentum is not translating into protected margin and clean cash conversion',
    cliffhanger: 'Deep Scan will build a margin bridge and enforce pricing, credit, and reconciliation controls.'
  },
  Market: {
    detection: 'repeat-order friction + service inconsistency and weak shelf discipline',
    cost: 'silent churn and weaker price power are reducing compounding growth',
    cliffhanger: 'Deep Scan will install repeat-order protection, segmentation cadence, and complaint closure loops.'
  },
  Leadership: {
    detection: 'KPI cadence gaps + approval and action-closure bottlenecks',
    cost: 'the same leaks are being paid repeatedly because prevention is weaker than urgency',
    cliffhanger: 'Deep Scan will enforce ownership cadence, delegated limits, and no-repeat closure routines.'
  },
  Innovation: {
    detection: 'low test discipline + SKU and data complexity drift',
    cost: 'improvement effort is high but measurable gains are inconsistent and slow to compound',
    cliffhanger: 'Deep Scan will prioritize test-and-learn execution, structured order capture, and margin-first assortment.'
  },
  Risk: {
    detection: 'shrinkage/AR/dispute exposure with weak compliance and continuity controls',
    cost: 'one avoidable incident can trigger cash loss, trust damage, and contract friction',
    cliffhanger: 'Deep Scan will harden control points across POD, cash handling, supplier verification, and incident response.'
  },
  People: {
    detection: 'behavior variance in reps/drivers/warehouse plus weak scorecard accountability',
    cost: 'quality and collections drift by person and shift, increasing disputes and avoidable rework',
    cliffhanger: 'Deep Scan will align incentives, training certification, and ownership so execution becomes predictable.'
  }
};

export const STATIONERY_QUIZ_COPY = {
  Operations: {
    detection: 'stockout pressure + SKU and queue-control drift',
    cost: 'core-item misses, slower service, and avoidable rework are reducing conversion and throughput',
    cliffhanger: 'Deep Scan will lock Top-50 stock control, SKU truth, and queue SOP discipline.'
  },
  Money: {
    detection: 'margin visibility gaps + discount and credit leakage',
    cost: 'sales activity is not translating into protected category margin and stable cash',
    cliffhanger: 'Deep Scan will enforce pricing guardrails, print-cost truth, and collections cadence.'
  },
  Market: {
    detection: 'repeat-demand weakness + slow response routines',
    cost: 'one-time buying and lost inquiries are reducing predictable revenue',
    cliffhanger: 'Deep Scan will install VIP retention, contract outreach, and response SLA discipline.'
  },
  Leadership: {
    detection: 'KPI cadence weakness + approval bottlenecks',
    cost: 'the same leaks recur because closure and delegation are too weak',
    cliffhanger: 'Deep Scan will enforce KPI visibility, decision limits, and no-repeat closure routines.'
  },
  Innovation: {
    detection: 'seasonality reactivity + low bundle/service experimentation',
    cost: 'AOV and peak-period capture are underperforming despite demand',
    cliffhanger: 'Deep Scan will launch seasonal campaign controls and measured kit/service experiments.'
  },
  Risk: {
    detection: 'supplier/shrink/dispute controls are informal',
    cost: 'counterfeit, short-delivery, and refund disputes can trigger outsized trust and margin loss',
    cliffhanger: 'Deep Scan will harden supplier verification, shrink controls, and dispute-proof evidence flows.'
  },
  People: {
    detection: 'training and script variance across shifts',
    cost: 'service quality and pricing discipline drift by person, increasing errors and leakage',
    cliffhanger: 'Deep Scan will align incentives, scripts, and onboarding for consistent execution.'
  }
};

export const SPARE_PARTS_QUIZ_COPY = {
  Operations: {
    detection: 'fitment inconsistency + stock and bin visibility drift',
    cost: 'wrong-part returns, slow quoting, and avoidable walkaways are reducing conversion and trust',
    cliffhanger: 'Deep Scan will lock fitment checks, fast-mover control, and SKU-bin truth routines.'
  },
  Money: {
    detection: 'margin visibility gaps + discount and credit leakage',
    cost: 'sales activity is not translating into protected margin and reliable restock cash',
    cliffhanger: 'Deep Scan will enforce category margin, discount bands, and collections discipline.'
  },
  Market: {
    detection: 'response speed and trust proof inconsistency',
    cost: 'urgent buyers and repeat mechanics are leaking to faster, safer-feeling competitors',
    cliffhanger: 'Deep Scan will install SLA quoting, garage account routines, and proof-based selling.'
  },
  Leadership: {
    detection: 'KPI cadence weakness + approval bottlenecks',
    cost: 'the same wrong-fit, discount, and dispute leaks repeat without closure',
    cliffhanger: 'Deep Scan will enforce KPI visibility, delegated limits, and no-repeat control loops.'
  },
  Innovation: {
    detection: 'bundle and catalog system gaps',
    cost: 'AOV and quote speed remain below potential despite recurring demand patterns',
    cliffhanger: 'Deep Scan will launch job-kit, model-catalog, and pre-order experiments tied to ROI.'
  },
  Risk: {
    detection: 'supplier authenticity and dispute controls are informal',
    cost: 'one counterfeit or warranty conflict can trigger outsized trust and cash damage',
    cliffhanger: 'Deep Scan will harden supplier firewall, warranty SOPs, and dispute-proof evidence flow.'
  },
  People: {
    detection: 'fitment script variance + incentive misalignment',
    cost: 'staff behavior drifts toward discount-first selling and avoidable wrong-part incidents',
    cliffhanger: 'Deep Scan will align scripts, certification, and incentives to margin-safe execution.'
  }
};

export const ASSEMBLY_QUIZ_COPY = {
  Operations: {
    detection: 'rework/yield instability + bottleneck flow loss',
    cost: 'busy stations are masking rework, retest, and throughput leakage',
    cliffhanger: 'Deep Scan will lock defect containment, bottleneck flow, and traceable station controls.'
  },
  Money: {
    detection: 'costing and expedite leakage + warranty drag',
    cost: 'margin is being diluted by hidden rework, premium freight, and complexity mispricing',
    cliffhanger: 'Deep Scan will build SKU margin guardrails and cash-protection controls tied to complexity.'
  },
  Market: {
    detection: 'OTIF/spec drift pressure + escalation loops',
    cost: 'customer trust and repeat demand are weakening through avoidable delivery and requirement failures',
    cliffhanger: 'Deep Scan will enforce requirement lock, RFQ speed, and proof-pack discipline.'
  },
  Leadership: {
    detection: 'firefighting cadence + decision bottlenecks',
    cost: 'recurring defects and delays persist because ownership and closure rhythm are weak',
    cliffhanger: 'Deep Scan will install KPI visibility, delegated limits, and root-cause closure systems.'
  },
  Innovation: {
    detection: 'variant/NPI complexity without control',
    cost: 'changeover tax and launch friction are rising faster than throughput and margin',
    cliffhanger: 'Deep Scan will prioritize variant governance, DFM gates, and test strategy upgrades.'
  },
  Risk: {
    detection: 'traceability/compliance fragility + supplier/firmware exposure',
    cost: 'one lot or field failure can escalate into recall, chargeback, and reputation shock',
    cliffhanger: 'Deep Scan will harden traceability, supplier controls, and compliance-ready evidence flows.'
  },
  People: {
    detection: 'skill/shift variance + weak quality ownership',
    cost: 'defect volatility increases when execution depends on hero operators and informal handovers',
    cliffhanger: 'Deep Scan will install station certification, handover discipline, and role-based accountability.'
  }
};

export const QUICK_SCAN_QUESTIONS: QuickScanVariant[] = [
  {
    pillar: 'Operations',
    variants: {
      retail: { a: "I personally handle issues at the counter to keep things moving.", b: "We have a simple routine so issues don't repeat." },
      tech: { a: "I jump in to fix delivery problems myself to meet deadlines.", b: "We improve the workflow tickets so the same issues don't return." },
      agriculture: { a: "We mostly run the farm by reacting to what’s urgent that day.", b: "We run the farm with a weekly plan so timing is protected." },
      hospitality: { a: "I personally step in when service goes wrong to protect the guest experience.", b: "We tighten the service process so the same failure doesn't repeat." },
      default: { a: "When something breaks, I jump in fast so we don't lose the client.", b: "When something breaks, I fix the process so we stop paying the 'mistake tax'." },
      livestock: { a: "We adjust routines (feeding/milking) based on the day.", b: "We follow strict routines for predictability." },

    }
  },
  {
    pillar: 'Money',
    variants: {
      retail: { a: "I judge a good month by sales volume and stock movement.", b: "I judge a good month by profit margin + cash left after expenses." },
      tech: { a: "I feel successful when we sign projects and get work coming in.", b: "I feel successful when projects leave profit after delivery costs." },
      agriculture: { a: "I mainly track harvest/sales volume to judge performance.", b: "I track costs and margin so I know what I truly made." },
      hospitality: { a: "A good month means high bookings/orders.", b: "A good month means healthy profit after refunds, waste, and staffing." },
      default: { a: "I watch total sales because momentum keeps the business alive.", b: "I watch net profit because sales without margin is 'busy broke'." },
      livestock: { a: "Feed spend is accepted as a cost.", b: "Feed spend is tracked against weight gain/output." },

    }
  },
  {
    pillar: 'Market',
    variants: {
      retail: { a: "We rely mostly on walk-ins and referrals.", b: "We consistently run a lead system (ads/offers) even when busy." },
      tech: { a: "We rely on referrals and 'who knows us'.", b: "We run a consistent pipeline (content, outreach, proposals)." },
      agriculture: { a: "Buyers are usually found after harvest when produce is ready.", b: "Buyers are lined up early so price and terms are stronger." },
      hospitality: { a: "We depend on location and repeat guests naturally.", b: "We actively drive bookings with offers, reviews, and follow-up." },
      default: { a: "We post when inspired because authenticity sells.", b: "We post on schedule because consistency compounds attention." },
      livestock: { a: "We negotiate price based on market noise.", b: "We negotiate price based on quality proof." },

    }
  },
  {
    pillar: 'Leadership',
    variants: {
      retail: { a: "People do whatever is urgent that day.", b: "People know their responsibilities and what 'good performance' looks like." },
      tech: { a: "Work priorities change based on the loudest client message.", b: "We use clear priorities, owners, and weekly targets." },
      agriculture: { a: "Planning is mostly in my head so I can adjust quickly.", b: "Planning is written so the farm stays stable under pressure." },
      hospitality: { a: "Staff react to the rush and solve problems as they come.", b: "Staff follow clear standards and targets (service time, quality)." },
      default: { a: "I carry the vision because founders should be the compass.", b: "We write the vision because clarity reduces confusion." },
      livestock: { a: "We manage the herd by memory.", b: "We manage using simple logs and records." },

    }
  },
  {
    pillar: 'Innovation',
    variants: {
      retail: { a: "We sell what has always sold; we adjust slowly.", b: "We regularly improve offers/stock based on demand data." },
      tech: { a: "We deliver the same service package; improvements are occasional.", b: "We upgrade our offers quarterly based on results + feedback." },
      agriculture: { a: "We stick to familiar practices and change only when things go wrong.", b: "We test small improvements each season and keep what works." },
      hospitality: { a: "Our experience is stable; we change only when complaints force it.", b: "We actively improve the experience to increase reviews." },
      default: { a: "We build what excites us because passion creates great work.", b: "We build what evidence demands because relevance creates revenue." },
      livestock: { a: "We accept variation in growth.", b: "We chase consistency to compound profit." },

    }
  },
  {
    pillar: 'Risk',
    variants: {
      retail: { a: "We run mostly on trust and common sense.", b: "We enforce protections (contracts, access control, 2FA)." },
      tech: { a: "We start work fast and trust the relationship.", b: "We protect delivery with scope, change requests, and 2FA." },
      agriculture: { a: "Most deals are informal because relationships matter.", b: "We use simple written terms to avoid disputes and delays." },
      hospitality: { a: "We handle issues when they come up.", b: "We prevent damage with clear policies and access discipline." },
      default: { a: "We move fast on trust because speed wins deals.", b: "We formalize terms because one dispute can erase profit." },
      livestock: { a: "New animals join the herd immediately.", b: "New animals are quarantined to reduce risk." },

    }
  },
  {
    pillar: 'People',
    variants: {
      retail: { a: "Staff wait for approval to avoid making mistakes.", b: "Staff solve common issues confidently using guidelines." },
      tech: { a: "People ask for approval before acting to stay safe.", b: "People act within decision rights and report outcomes." },
      agriculture: { a: "I work best when I confirm before acting so I don’t get blamed.", b: "I work best when boundaries are clear so I can act fast." },
      hospitality: { a: "Staff escalate everything to avoid blame.", b: "Staff handle routine guest issues confidently." },
      default: { a: "I prefer to confirm with my manager before I start.", b: "I prefer to start with my best judgment, then update." },
      livestock: { a: "We rely on experienced caretakers.", b: "We use simple SOPs anyone can follow." },

    }
  },
  // --- SECOND SET (Agriculture Specific) ---
  {
    pillar: 'Operations',
    variants: {
      agriculture: { a: "Harvest usually starts before drying/storage/logistics are fully ready.", b: "Harvest starts only when drying/storage/logistics are ready." }
    }
  },
  {
    pillar: 'Money',
    variants: {
      agriculture: { a: "We sell quickly after harvest because cash needs are urgent.", b: "We sell with a plan (and buffer) so we don’t accept the worst price." }
    }
  },
  {
    pillar: 'Market',
    variants: {
      agriculture: { a: "I accept deductions/grades from buyers because that’s “market reality.”", b: "I verify quality/moisture/grades so deductions are fair." }
    }
  },
  {
    pillar: 'Leadership',
    variants: {
      agriculture: { a: "When I’m away, operations slow down noticeably.", b: "The farm keeps moving because roles and routines are clear." }
    }
  },
  {
    pillar: 'Innovation',
    variants: {
      agriculture: { a: "Post-harvest loss and downgrade feels unavoidable.", b: "We treat loss and downgrade as controllable money leaks." }
    }
  },
  {
    pillar: 'Risk',
    variants: {
      agriculture: { a: "If a major shock happens (rain delays, pests, transport issues), we improvise.", b: "We have backup options for predictable shocks." }
    }
  },
  {
    pillar: 'People',
    variants: {
      agriculture: { a: "Instructions are mostly verbal and flexible.", b: "Instructions are clear enough that people don’t have to guess." }
    }
  }
];

// Append new aquaculture questions (14 pairs)
QUICK_SCAN_QUESTIONS.push(
  // Brain
  {
    pillar: 'Leadership',
    variants: {
      aquaculture: { a: "We run the farm mostly from experience and memory.", b: "We run the farm using simple targets and records that guide decisions." }
    }
  },
  {
    pillar: 'Leadership',
    variants: {
      aquaculture: { a: "We review performance only when something goes wrong.", b: "We review performance weekly to catch drift early (before it becomes expensive)." }
    }
  },
  // Market
  {
    pillar: 'Market',
    variants: {
      aquaculture: { a: "We sell mainly to whoever buys fast and nearest.", b: "We sell through planned buyer channels that reward consistency and quality." }
    }
  },
  {
    pillar: 'Market',
    variants: {
      aquaculture: { a: "Price is mostly “market price,” we take what’s offered.", b: "Price improves because we bring proof (size/grade, reliability, handling discipline)." }
    }
  },
  // Operations
  {
    pillar: 'Operations',
    variants: {
      aquaculture: { a: "Feeding is adjusted by feel depending on the day.", b: "Feeding follows a measured plan tied to biomass and growth targets." }
    }
  },
  {
    pillar: 'Operations',
    variants: {
      aquaculture: { a: "Water quality checks happen mainly when fish look stressed.", b: "Water quality checks happen on a routine schedule, with clear action thresholds." }
    }
  },
  // Money
  {
    pillar: 'Money',
    variants: {
      aquaculture: { a: "A good cycle means we sold many fish.", b: "A good cycle means we sold profitably after feed, mortality, and time costs." }
    }
  },
  {
    pillar: 'Money',
    variants: {
      aquaculture: { a: "We don’t calculate feed cost per kg gain (we just manage expenses).", b: "We track conversion (FCR / cost per kg gain) because it decides profit." }
    }
  },
  // Innovation
  {
    pillar: 'Innovation',
    variants: {
      aquaculture: { a: "Growth differences and slow cycles are normal in this business.", b: "Growth curve and time-to-market are measurable and improvable." }
    }
  },
  {
    pillar: 'Innovation',
    variants: {
      aquaculture: { a: "We rarely test changes—we stick to what we know.", b: "We run small controlled improvements each cycle and keep what works." }
    }
  },
  // Risk
  {
    pillar: 'Risk',
    variants: {
      aquaculture: { a: "New stock is introduced quickly to keep operations moving.", b: "New stock follows a quarantine/observation routine to protect the whole system." }
    }
  },
  {
    pillar: 'Risk',
    variants: {
      aquaculture: { a: "Backup plans (oxygen/aeration/power) are “nice-to-have.”", b: "Backup plans are mandatory because one outage can erase months of profit." }
    }
  },
  // People
  {
    pillar: 'People',
    variants: {
      aquaculture: { a: "Staff prefer to wait for approval to avoid mistakes.", b: "Staff act confidently within clear boundaries to protect speed and outcomes." }
    }
  },
  {
    pillar: 'People',
    variants: {
      aquaculture: { a: "Problems are reported when they become serious.", b: "Problems are reported early because it’s safe and expected to speak up." }
    }
  }
);

QUICK_SCAN_QUESTIONS.push(
  // Brain
  {
    pillar: 'Leadership',
    variants: {
      agro_processing: { a: "We run the plant mostly from experience and quick decisions.", b: "We run the plant using targets and weekly KPI reviews." }
    }
  },
  {
    pillar: 'Leadership',
    variants: {
      agro_processing: { a: "Problems are discussed when they become painful.", b: "Problems are tracked early so drift is caught before money leaks." }
    }
  },
  // Market
  {
    pillar: 'Market',
    variants: {
      agro_processing: { a: "We sell mainly at market price and accept buyer terms.", b: "We sell using specs + reliability to protect margin and terms." }
    }
  },
  {
    pillar: 'Market',
    variants: {
      agro_processing: { a: "A good month means high sales volume.", b: "A good month means protected margin and predictable cash collection." }
    }
  },
  // Operations
  {
    pillar: 'Operations',
    variants: {
      agro_processing: { a: "Downtime and changeovers are “part of production.”", b: "Downtime and changeovers are measured and reduced deliberately." }
    }
  },
  {
    pillar: 'Operations',
    variants: {
      agro_processing: { a: "Quality is checked mainly at the end.", b: "Quality is controlled during processing, not only at the end." }
    }
  },
  // Money
  {
    pillar: 'Money',
    variants: {
      agro_processing: { a: "We focus on costs generally (expenses) more than unit economics.", b: "We track cost per unit and yield % to protect profit." }
    }
  },
  {
    pillar: 'Money',
    variants: {
      agro_processing: { a: "Shrinkage (spillage/underweight/scrap) is hard to measure precisely.", b: "Shrinkage is measured enough to control and reduce." }
    }
  },
  // Innovation
  {
    pillar: 'Innovation',
    variants: {
      agro_processing: { a: "We keep products stable and avoid changing the line often.", b: "We improve products/processes through small controlled tests." }
    }
  },
  {
    pillar: 'Innovation',
    variants: {
      agro_processing: { a: "We respond to customer complaints case-by-case.", b: "We convert complaints into process/product improvements." }
    }
  },
  // Risk
  {
    pillar: 'Risk',
    variants: {
      agro_processing: { a: "Food safety is handled by “being careful” and common sense.", b: "Food safety is handled with checklists, traceability, and verification." }
    }
  },
  {
    pillar: 'Risk',
    variants: {
      agro_processing: { a: "Compliance paperwork is handled when needed for buyers.", b: "Compliance readiness is maintained continuously to unlock bigger buyers." }
    }
  },
  // People
  {
    pillar: 'People',
    variants: {
      agro_processing: { a: "People prefer approvals to avoid mistakes and blame.", b: "People work within clear limits so speed and accountability improve." }
    }
  },
  {
    pillar: 'People',
    variants: {
      agro_processing: { a: "Shift handover is informal; the next shift figures it out.", b: "Shift handover is standardized so quality doesn’t drift." }
    }
  }
);

export interface PillarWeights {
  brain: number;
  voice: number;
  engine: number;
  fuel: number;
  pulse: number;
  shield: number;
  tribe: number;
}

export interface IndustryData {
  weights: PillarWeights;
  kpis: KPI[];
  overrides?: Record<string, Partial<PillarWeights>>; // Key is subIndustry (lowercase)
}

export const INDUSTRY_DATA: Record<string, IndustryData> = {
  agriculture: {
    weights: { engine: 18, fuel: 18, pulse: 16, shield: 14, voice: 14, brain: 10, tribe: 10 },
    kpis: []
  },
  retail: {
    weights: { voice: 18, fuel: 18, engine: 16, pulse: 14, shield: 12, brain: 11, tribe: 11 },
    kpis: []
  },
  manufacturing: {
    weights: { engine: 20, pulse: 16, fuel: 16, shield: 14, tribe: 12, brain: 12, voice: 10 },
    kpis: []
  },
  construction: {
    weights: { shield: 18, engine: 17, fuel: 17, brain: 13, tribe: 13, voice: 12, pulse: 10 },
    kpis: []
  },
  transport: {
    weights: { engine: 18, shield: 16, fuel: 16, tribe: 14, brain: 12, voice: 12, pulse: 12 },
    kpis: []
  },
  hospitality: {
    weights: { voice: 18, pulse: 17, engine: 15, tribe: 15, fuel: 14, shield: 11, brain: 10 },
    kpis: []
  },
  health: {
    weights: { shield: 20, engine: 16, tribe: 15, voice: 13, fuel: 13, brain: 12, pulse: 11 },
    kpis: []
  },
  education: {
    weights: { brain: 18, tribe: 18, engine: 14, voice: 12, fuel: 12, shield: 13, pulse: 13 },
    kpis: []
  },
  finance: {
    weights: { shield: 22, fuel: 18, brain: 15, engine: 13, voice: 12, tribe: 10, pulse: 10 },
    kpis: []
  },
  tech: {
    weights: { engine: 18, voice: 16, pulse: 16, shield: 14, brain: 14, tribe: 12, fuel: 10 },
    kpis: []
  },
  media: {
    weights: { voice: 18, brain: 15, engine: 14, pulse: 14, fuel: 14, tribe: 13, shield: 12 },
    kpis: []
  },
  ngo: {
    weights: { brain: 18, shield: 16, engine: 14, tribe: 14, fuel: 13, voice: 13, pulse: 12 },
    kpis: []
  },
  utilities: {
    weights: { shield: 18, engine: 18, tribe: 14, fuel: 14, brain: 12, pulse: 12, voice: 12 },
    kpis: []
  },
  automotive: {
    weights: { engine: 18, pulse: 16, shield: 15, fuel: 15, tribe: 13, voice: 12, brain: 11 },
    kpis: []
  },
  household: {
    weights: { voice: 18, tribe: 16, engine: 14, fuel: 14, pulse: 13, shield: 13, brain: 12 },
    kpis: []
  },
  mining: {
    weights: { shield: 20, engine: 18, fuel: 15, tribe: 13, brain: 12, voice: 12, pulse: 10 },
    kpis: []
  },
  oil_gas_services: {
    weights: { shield: 20, engine: 17, fuel: 17, brain: 14, tribe: 12, voice: 11, pulse: 9 },
    kpis: []
  },
  professional: {
    weights: { brain: 18, voice: 16, tribe: 14, engine: 14, fuel: 14, shield: 12, pulse: 12 },
    kpis: []
  },
  public_sector: {
    weights: { shield: 20, engine: 16, brain: 14, tribe: 14, fuel: 12, voice: 12, pulse: 12 },
    kpis: []
  },
  telecom: {
    weights: { engine: 18, tech: 18, voice: 14, shield: 14, fuel: 12, brain: 12, pulse: 12, tribe: 10 } as any, // Mapped to tech-ish
    kpis: []
  },
  security: {
    weights: { shield: 22, tribe: 16, engine: 14, brain: 12, fuel: 12, voice: 12, pulse: 12 },
    kpis: []
  },
  religion: {
    weights: { tribe: 22, brain: 16, voice: 16, engine: 12, fuel: 12, shield: 10, pulse: 12 },
    kpis: []
  },
  other_multi: {
    weights: { engine: 15, fuel: 15, voice: 15, brain: 14, tribe: 14, shield: 14, pulse: 13 },
    kpis: []
  },
  agro_processing: {
    weights: { engine: 20, fuel: 18, shield: 16, tribe: 12, voice: 12, brain: 12, pulse: 10 },
    kpis: []
  }
};
