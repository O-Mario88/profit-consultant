
import { CurrencyCode, LanguageCode, LocaleProfile, PricingTier, RegionCode } from "../types";

// 1. Translation Dictionary
const TRANSLATIONS: Record<LanguageCode, any> = {
  en: {
    hero: {
      title_prefix: "Is your Business",
      title_highlight: "Leaking Profit?",
      title_suffix: "We Know Where.",
      subtitle: "Most founders have vision (Heart) but lack the engine (Wallet). Take the 7-Minute Forensic Scan.",
      cta_scan: "Start Free Quick Scan",
      cta_partners: "For Accountants & Coaches",
      trust_tier1: "Trusted by New York Agencies",
      trust_tier3: "Trusted by Top African SMEs",
      critical_warning: "Critical Warning"
    },
    nav: {
      courses: "Courses",
      live: "Live Sessions",
      experts: "Find Experts",
      pricing: "Pricing",
      login: "Sign In",
      get_started: "Get Started"
    },
    pricing: {
      tier1_name: "Standard",
      tier3_name: "Emerging Market",
      ppp_notice: "Your region qualifies for discounted local pricing."
    },
    hud: {
      title: "Command Center",
      subtitle: "{businessName} • {industryLabel} • {countryName}",
      lastUpdated: "Last updated: {date}",
      refresh: "Re-scan",
      primaryCta: "Fix My Critical Pillar",
      primaryCta_helper: "Start with the bottleneck that’s limiting profit right now.",
      viewReport: "View Full Report",
      downloadReport: "Download PDF",
      resumeAssessment: "Resume Deep Scan"
    },
    radar: {
      title: "Your 7-Pillar Health Map",
      subtitle: "This is your current business “shape.” The smallest pillar usually limits growth.",
      critical_label: "Critical Pillar",
      critical_helper: "This is the bottleneck. Improving it lifts the whole system fastest.",
      strength_label: "Top Strength",
      strength_helper: "Protect this. Your strongest pillar is often the engine of your advantage.",
      cta_focusPillar: "Open {pillarName} Fix Plan",
      cta_viewDrivers: "See what drove this score"
    },
    pillar: {
      brain: "Brain",
      voice: "Voice",
      engine: "Engine",
      fuel: "Fuel",
      pulse: "Pulse",
      shield: "Shield",
      tribe: "Tribe"
    },
    tooltip: {
      brain: { meaning: "Leadership clarity, hiring quality, accountability.", weakLeak: "Profit leaks through confusion.", weekFix: "Define 3 priorities + 3 KPIs." },
      voice: { meaning: "Lead flow, conversion, messaging.", weakLeak: "Profit leaks through weak distribution.", weekFix: "Install follow-up cadence." },
      engine: { meaning: "Execution speed, SOPs, delegation.", weakLeak: "Profit leaks through rework.", weekFix: "Document top 10 SOPs." },
      fuel: { meaning: "Cash flow control, margins.", weakLeak: "Profit leaks quietly through underpricing.", weekFix: "List top 5 costs + top 5 revenue lines." },
      pulse: { meaning: "Market fit, product evolution.", weakLeak: "Profit leaks through obsolete offers.", weekFix: "Survey 10 customers." },
      shield: { meaning: "Contracts, compliance, risk.", weakLeak: "Profit wiped out by one shock.", weekFix: "Standardize contracts + 2FA." },
      tribe: { meaning: "Trust, autonomy, feedback safety.", weakLeak: "Profit leaks through politics.", weekFix: "Reduce approvals." }
    },
    benchmark: {
      headline_high: "You’re in the Top {topPercent}% of {industryLabel} in {countryName}.",
      headline_mid: "You’re ahead of {percentAhead}% of {industryLabel} in {countryName}.",
      headline_early: "Early benchmark: your position is estimated for {industryLabel} in {countryName}.",
      subhead: "Based on businesses with similar size and category. Cohort: {cohortSize}.",
      confidence_high: "High confidence",
      downloadBadge: "Download Industry Leader Badge",
      howCalculated: "How this is calculated",
      modal: {
        title: "Benchmark Method",
        cohortTitle: "Who you’re compared to",
        cohortBody: "We compare you to businesses in {countryName} within {industryLabel} and a similar size band ({sizeBand}).",
        metricTitle: "What we rank",
        metricBody: "Your benchmark is based on a Health Index calculated from your 7 pillar scores.",
        confidenceTitle: "Confidence level",
        confidenceBody: "Confidence rises as cohort size grows.",
        updateTitle: "When it updates",
        updateBody: "Benchmarks update as new assessments enter the dataset.",
        footer: "This benchmark shows relative position—not guaranteed outcomes."
      }
    },
    sim: {
      title: "Profit Simulator",
      subtitle: "Move the levers. Watch the profit impact. Then generate a fix plan from your best scenario.",
      baseline: { revenue: "Revenue: {amount}", margin: "Margin: {percent}%" },
      slider: {
        price: "Price", price_helper: "Raise pricing power.",
        conversion: "Conversion", conversion_helper: "Turn more leads into customers.",
        retention: "Retention", retention_helper: "Keep customers longer.",
        efficiency: "Efficiency", efficiency_helper: "Reduce rework.",
        costControl: "Cost Control", costControl_helper: "Cut zombie costs.",
        quality: "Quality", quality_helper: "Reduce churn.",
        riskReduction: "Risk", riskReduction_helper: "Reduce shock risk.",
        teamSpeed: "Speed", teamSpeed_helper: "Faster execution."
      },
      output: {
        title: "Projected Impact",
        delta: "Change: {deltaAmount}",
        bestLever: "Biggest lever: {leverName}",
        why: "Why: Your {pillarName} score suggests {mechanism}."
      },
      cta: { saveScenario: "Sauvegarder", generatePlan: "Générer le Plan" },
      mechanism: {
        fuel: "your cash flow is constrained by pricing and collections",
        engine: "rework is absorbing productive time",
        voice: "lead conversion is limiting revenue",
        pulse: "product relevance is affecting purchases",
        shield: "risk exposure creates volatility",
        brain: "priority noise reduces speed",
        tribe: "approval friction slows decisions"
      }
    },
    trust: {
      benchmarkNote: "Benchmarks are directional.",
      simulatorNote: "Simulator outputs are estimates.",
      tribePrivacy: "Results are aggregated."
    }
  },
  fr: {
    hero: {
      title_prefix: "Votre entreprise",
      title_highlight: "Perd-elle du Profit ?",
      title_suffix: "Nous Savons Où.",
      subtitle: "La plupart des fondateurs ont la vision (Cœur) mais manquent de moteur (Portefeuille). Faites le scan de 7 minutes.",
      cta_scan: "Scan Rapide Gratuit",
      cta_partners: "Pour Comptables & Coachs",
      trust_tier1: "Approuvé par les agences de Paris",
      trust_tier3: "Approuvé par les PME d'Afrique de l'Ouest",
      critical_warning: "Alerte Critique"
    },
    nav: {
      courses: "Formations",
      live: "En Direct",
      experts: "Experts",
      pricing: "Tarifs",
      login: "Connexion",
      get_started: "Commencer"
    },
    pricing: {
      tier1_name: "Standard",
      tier3_name: "Marché Émergent",
      ppp_notice: "Votre région bénéficie d'une tarification locale réduite."
    },
    hud: {
      title: "Centre de Commande",
      subtitle: "{businessName} • {industryLabel} • {countryName}",
      lastUpdated: "Mis à jour: {date}",
      refresh: "Re-scanner",
      primaryCta: "Réparer le Pilier Critique",
      primaryCta_helper: "Commencez par le goulot d'étranglement qui limite vos profits.",
      viewReport: "Voir Rapport Complet",
      downloadReport: "Télécharger PDF",
      resumeAssessment: "Reprendre l'Audit"
    },
    radar: {
      title: "Votre Carte de Santé (7 Piliers)",
      subtitle: "Ceci est la « forme » actuelle de votre entreprise. Le plus petit pilier limite la croissance.",
      critical_label: "Pilier Critique",
      critical_helper: "C'est le goulot d'étranglement.",
      strength_label: "Force Principale",
      strength_helper: "Protégez ceci. C'est votre moteur.",
      cta_focusPillar: "Ouvrir le Plan {pillarName}",
      cta_viewDrivers: "Voir les causes"
    },
    pillar: {
      brain: "Cerveau",
      voice: "Voix",
      engine: "Moteur",
      fuel: "Carburant",
      pulse: "Pouls",
      shield: "Bouclier",
      tribe: "Tribu"
    },
    tooltip: {
      brain: { meaning: "Clarté du leadership, recrutement.", weakLeak: "Fuites par confusion.", weekFix: "Définir 3 priorités." },
      voice: { meaning: "Flux de leads, conversion.", weakLeak: "Fuites par faible distribution.", weekFix: "Suivi des leads." },
      engine: { meaning: "Vitesse d'exécution, SOPs.", weakLeak: "Fuites par retravail.", weekFix: "Documenter 10 SOPs." },
      fuel: { meaning: "Contrôle du cash, marges.", weakLeak: "Fuites par sous-tarification.", weekFix: "Lister top 5 coûts." },
      pulse: { meaning: "Adéquation marché, produit.", weakLeak: "Fuites par offres obsolètes.", weekFix: "Sonder 10 clients." },
      shield: { meaning: "Contrats, conformité.", weakLeak: "Profit anéanti par un choc.", weekFix: "Contrats standards + 2FA." },
      tribe: { meaning: "Confiance, autonomie.", weakLeak: "Fuites par politique interne.", weekFix: "Réduire les approbations." }
    },
    sim: {
      title: "Simulateur de Profit",
      subtitle: "Bougez les leviers. Voyez l'impact. Générez un plan.",
      baseline: { revenue: "Revenu: {amount}", margin: "Marge: {percent}%" },
      slider: {
        price: "Prix", price_helper: "Augmenter le pouvoir de prix.",
        conversion: "Conversion", conversion_helper: "Convertir plus de leads.",
        retention: "Rétention", retention_helper: "Garder les clients.",
        efficiency: "Efficacité", efficiency_helper: "Réduire le retravail.",
        costControl: "Contrôle Coûts", costControl_helper: "Couper les coûts zombies.",
        quality: "Qualité", quality_helper: "Réduire l'attrition.",
        riskReduction: "Risque", riskReduction_helper: "Réduire les chocs.",
        teamSpeed: "Vitesse", teamSpeed_helper: "Exécution plus rapide."
      },
      output: {
        title: "Impact Projeté",
        delta: "Changement: {deltaAmount}",
        bestLever: "Meilleur levier: {leverName}",
        why: "Pourquoi: Votre score {pillarName} suggère {mechanism}."
      },
      cta: { saveScenario: "Sauvegarder", generatePlan: "Générer le Plan" },
      mechanism: {
        fuel: "votre cash flow est contraint",
        engine: "le retravail absorbe du temps",
        voice: "la conversion limite les revenus",
        pulse: "la pertinence produit affecte les achats",
        shield: "l'exposition aux risques crée de la volatilité",
        brain: "le bruit prioritaire réduit la vitesse",
        tribe: "la friction d'approbation ralentit tout"
      }
    }
  },
  sw: {
    hero: {
      title_prefix: "Je, Biashara Yako",
      title_highlight: "Inapoteza Faida?",
      title_suffix: "Tunajua Wapi.",
      subtitle: "Waanzilishi wengi wana maono (Moyo) lakini wanakosa injini (Pochi). Fanya uchunguzi wa dakika 7.",
      cta_scan: "Anza Uchunguzi wa Bure",
      cta_partners: "Kwa Wahasibu na Makocha",
      trust_tier1: "Inaaminika na Mashirika ya Global",
      trust_tier3: "Inaaminika na SMEs za Juu Afrika",
      critical_warning: "Onyo Muhimu"
    },
    nav: {
      courses: "Mafunzo",
      live: "Moja kwa Moja",
      experts: "Wataalamu",
      pricing: "Bei",
      login: "Ingia",
      get_started: "Anza Sasa"
    },
    pricing: {
      tier1_name: "Kawaida",
      tier3_name: "Soko Linalokua",
      ppp_notice: "Eneo lako linastahiki punguzo la bei la ndani."
    },
    hud: {
      title: "Kituo cha Amri",
      subtitle: "{businessName} • {industryLabel} • {countryName}",
      lastUpdated: "Ilisasishwa: {date}",
      refresh: "Chunguza Tena",
      primaryCta: "Rekebisha Nguzo Muhimu",
      primaryCta_helper: "Anza na kikwazo kinachopunguza faida sasa.",
      viewReport: "Tazama Ripoti Kamili",
      downloadReport: "Pakua PDF",
      resumeAssessment: "Endelea na Uchunguzi"
    },
    radar: {
      title: "Ramani Yako ya Afya (Nguzo 7)",
      subtitle: "Hii ndiyo 'umbo' la biashara yako sasa. Nguzo ndogo zaidi huzuia ukuaji.",
      critical_label: "Nguzo Muhimu",
      critical_helper: "Hiki ndicho kikwazo. Kukiboresha kunainua mfumo mzima.",
      strength_label: "Nguvu Kubwa",
      strength_helper: "Linda hii. Hii ndiyo injini ya faida yako.",
      cta_focusPillar: "Fungua Mpango wa {pillarName}",
      cta_viewDrivers: "Ona sababu za alama hii"
    },
    pillar: {
      brain: "Ubongo",
      voice: "Sauti",
      engine: "Injini",
      fuel: "Mafuta",
      pulse: "Mapigo",
      shield: "Ngao",
      tribe: "Kabila"
    },
    tooltip: {
      brain: { meaning: "Uongozi na uwazi.", weakLeak: "Faida inapotea kwa kuchanganyikiwa.", weekFix: "Weka vipaumbele 3." },
      voice: { meaning: "Mauzo na ujumbe.", weakLeak: "Faida inapotea kwa usambazaji dhaifu.", weekFix: "Fuatilia wateja." },
      engine: { meaning: "Kasi ya utekelezaji.", weakLeak: "Faida inapotea kwa kurudia kazi.", weekFix: "Andika taratibu (SOPs)." },
      fuel: { meaning: "Udhibiti wa pesa.", weakLeak: "Faida inapotea kwa bei ndogo.", weekFix: "Orodhesha gharama na mapato." },
      pulse: { meaning: "Ubora wa bidhaa.", weakLeak: "Faida inapotea kwa bidhaa za zamani.", weekFix: "Uliza wateja 10." },
      shield: { meaning: "Mikataba na usalama.", weakLeak: "Faida inafutwa na mshtuko mmoja.", weekFix: "Mikataba na usalama wa data." },
      tribe: { meaning: "Ushirikiano na kuaminiana.", weakLeak: "Faida inapotea kwa siasa za ofisi.", weekFix: "Punguza idhini zisizo lazima." }
    },
    sim: {
      title: "Kielelezo cha Faida",
      subtitle: "Sogeza vichocheo. Ona athari kwa faida. Tengeneza mpango.",
      baseline: { revenue: "Mapato: {amount}", margin: "Faida Ghafi: {percent}%" },
      slider: {
        price: "Bei", price_helper: "Ongeza nguvu ya bei.",
        conversion: "Ubadilishaji", conversion_helper: "Badilisha wateja zaidi.",
        retention: "Uhifadhi", retention_helper: "Weka wateja muda mrefu.",
        efficiency: "Ufanisi", efficiency_helper: "Punguza kurudia kazi.",
        costControl: "Udhibiti Gharama", costControl_helper: "Kata gharama zisizo na faida.",
        quality: "Ubora", quality_helper: "Punguza malalamiko.",
        riskReduction: "Hatari", riskReduction_helper: "Punguza hatari.",
        teamSpeed: "Kasi", teamSpeed_helper: "Utekelezaji wa haraka."
      },
      output: {
        title: "Athari Iliyokadiriwa",
        delta: "Mabadiliko: {deltaAmount}",
        bestLever: "Kichocheo kikubwa: {leverName}",
        why: "Kwa nini: Alama yako ya {pillarName} inaonyesha {mechanism}."
      },
      cta: { saveScenario: "Hifadhi", generatePlan: "Tengeneza Mpango" },
      mechanism: {
        fuel: "mtiririko wako wa pesa umebanwa",
        engine: "kurudia kazi kunapoteza muda",
        voice: "uongofu wa wateja unazuia mapato",
        pulse: "uhusiano wa bidhaa unaathiri manunuzi",
        shield: "hatari inatengeneza kutokuwa na uhakika",
        brain: "kelele za vipaumbele zinapunguza kasi",
        tribe: "msuguano wa idhini unapunguza maamuzi"
      }
    }
  }
};

// 2. Pricing & Currency Logic
const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  UGX: 3750,
  KES: 130, 
  NGN: 1500,
  INR: 83
};

const PPP_DISCOUNTS: Record<PricingTier, number> = {
  1: 1.0, 
  2: 0.6, 
  3: 0.5  
};

// 3. Helper Functions

export const getTranslation = (lang: LanguageCode, keyPath: string): string => {
  const keys = keyPath.split('.');
  // Check strict match first
  let current: any = TRANSLATIONS[lang];
  
  // If language dictionary missing completely, fall back to EN
  if (!current) current = TRANSLATIONS['en'];

  for (const k of keys) {
    if (current && current[k] !== undefined) {
      current = current[k];
    } else {
      // Key not found in target lang, fallback to EN
      let fallback: any = TRANSLATIONS['en'];
      for (const subK of keys) {
        if (fallback[subK] === undefined) return keyPath; // Key missing in EN too
        fallback = fallback[subK];
      }
      return typeof fallback === 'string' ? fallback : keyPath;
    }
  }
  return typeof current === 'string' ? current : keyPath;
};

export const formatCurrency = (amountUSD: number, currency: CurrencyCode): string => {
  const rate = EXCHANGE_RATES[currency] || 1;
  const converted = amountUSD * rate;

  if (['UGX', 'KES', 'NGN', 'INR'].includes(currency)) {
    const rounded = Math.ceil(converted / 100) * 100;
    return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(rounded);
  }
  
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(converted);
};

export const calculatePPPPrice = (basePriceUSD: number, tier: PricingTier, currency: CurrencyCode): string => {
  const discountFactor = PPP_DISCOUNTS[tier];
  const discountedUSD = basePriceUSD * discountFactor;
  return formatCurrency(discountedUSD, currency);
};

export const detectRegionProfile = (mockRegion?: RegionCode): LocaleProfile => {
  const region = mockRegion || 'US'; 

  const map: Record<RegionCode, LocaleProfile> = {
    US: { country: 'US', currency: 'USD', language: 'en', pricingTier: 1, contentRegion: 'US_UK_AGENCY', regionGroup: 'NAFTA' },
    GB: { country: 'GB', currency: 'GBP', language: 'en', pricingTier: 1, contentRegion: 'US_UK_AGENCY', regionGroup: 'EU' },
    FR: { country: 'FR', currency: 'EUR', language: 'fr', pricingTier: 1, contentRegion: 'US_UK_AGENCY', regionGroup: 'EU' },
    UG: { country: 'UG', currency: 'UGX', language: 'en', pricingTier: 3, contentRegion: 'AFRICA_SME', regionGroup: 'EAC' },
    KE: { country: 'KE', currency: 'KES', language: 'sw', pricingTier: 3, contentRegion: 'AFRICA_SME', regionGroup: 'EAC' },
    NG: { country: 'NG', currency: 'NGN', language: 'en', pricingTier: 3, contentRegion: 'AFRICA_SME', regionGroup: 'ECOWAS' },
    IN: { country: 'IN', currency: 'INR', language: 'en', pricingTier: 2, contentRegion: 'GLOBAL', regionGroup: 'APAC' },
    GLOBAL: { country: 'GLOBAL', currency: 'USD', language: 'en', pricingTier: 1, contentRegion: 'GLOBAL', regionGroup: 'GLOBAL' }
  };

  return map[region] || map['US'];
};
