
import { KPI } from "../types";

export type IndustryKey = 'retail' | 'tech' | 'agriculture' | 'hospitality' | 'services' | 'transport' | 'manufacturing' | 'construction' | 'livestock' | 'aquaculture' | 'agro_processing' | 'produce' | 'other';

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
    lexiconKey: 'construction',
    subIndustries: [
      'Artisanal mining', 'Mining services & supplies', 'Quarry / aggregates / stone',
      'Sand mining', 'Oil & gas services'
    ]
  },
  {
    id: 'manufacturing',
    label: 'Manufacturing & Industrial Production',
    iconName: 'Factory',
    lexiconKey: 'manufacturing',
    subIndustries: [
      'Food & beverage manufacturing', 'Textile & garment manufacturing', 'Furniture & carpentry production',
      'Metal works / fabrication', 'Plastics & packaging manufacturing', 'Soap / detergents / cosmetics production',
      'Bricks / blocks / cement products', 'Bottled water / ice production', 'Pharmaceuticals / medical supplies manufacturing',
      'Chemical/light industrial production', 'Assembly / OEM'
    ]
  },
  {
    id: 'retail',
    label: 'Retail, Wholesale & Trade',
    iconName: 'ShoppingBag',
    lexiconKey: 'retail',
    subIndustries: [
      'Supermarket / mini-mart', 'Kiosk / market vendor', 'FMCG wholesale & distribution',
      'Pharmacy / drug shop', 'Electronics & phone shop', 'Hardware & building materials shop',
      'Fashion & boutique', 'Cosmetics / beauty supplies', 'Stationery & bookstore',
      'Spare parts & accessories shop', 'Import/export trading', 'E-commerce store / online retail'
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
    pillar: 'Shield',
    variants: {
      agro_processing: { a: "Compliance paperwork is handled when needed for buyers.", b: "Compliance readiness is maintained continuously to unlock bigger buyers." }
    }
  },
  // Tribe
  {
    pillar: 'Tribe',
    variants: {
      agro_processing: { a: "People prefer approvals to avoid mistakes and blame.", b: "People work within clear limits so speed and accountability improve." }
    }
  },
  {
    pillar: 'Tribe',
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
