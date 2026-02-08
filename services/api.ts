
import {
  CurrencyCode,
  LanguageCode,
  PricingTier,
  PillarScores,
  Archetype
} from "../types";

// --- TYPES (Spec 1.1) ---

export interface ApiResponse<T> {
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
    request_id: string;
  };
}

export interface PaginationResponse<T> {
  items: T[];
  next_cursor: string | null;
}

// --- 1.2 GEO & LOCALE ---

export interface GeoResolveResponse {
  effective_country: string;
  effective_city: string;
  purchase_tier: PricingTier;
  recommended_locale: LanguageCode;
  recommended_currency: CurrencyCode;
  signals: {
    geoip_country: string;
    profile_country: string | null;
    payment_country: string | null;
    accept_language: string;
  };
}

export const resolveGeo = async (): Promise<ApiResponse<GeoResolveResponse>> => {
  // Mock Implementation
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    data: {
      effective_country: "UG",
      effective_city: "Kampala",
      purchase_tier: 3,
      recommended_locale: "en",
      recommended_currency: "UGX",
      signals: {
        geoip_country: "UG",
        profile_country: null,
        payment_country: null,
        accept_language: "en-US"
      }
    }
  };
};

// --- 1.3 PRICING ---

export interface PricingQuoteResponse {
  product: string;
  tier: PricingTier;
  currency: CurrencyCode;
  amount: number;
  compare_at: number;
  reason: string;
  valid_for_seconds: number;
}

export const getPricingQuote = async (product: string): Promise<ApiResponse<PricingQuoteResponse>> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return {
    data: {
      product,
      tier: 3,
      currency: "UGX",
      amount: 40000,
      compare_at: 97000,
      reason: "PPP tier pricing",
      valid_for_seconds: 900
    }
  };
};

export const createOrder = async (product: string, quoteId: string) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    data: {
      order_id: `ord_${Date.now()}`,
      status: "pending",
      amount: 40000,
      currency: "UGX",
      payment: {
        provider: "momo_x",
        checkout_url: "https://pay.example/checkout"
      }
    }
  };
};

// --- 1.4 ASSESSMENTS ---

export interface AssessmentSession {
  session_id: string;
  status: 'in_progress' | 'completed';
  template_id: string;
  locale: LanguageCode;
  currency: CurrencyCode;
}

export const startAssessmentSession = async (templateId: string): Promise<ApiResponse<AssessmentSession>> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    data: {
      session_id: `sess_${Date.now()}`,
      status: "in_progress",
      template_id: templateId,
      locale: "en",
      currency: "UGX"
    }
  };
};

export const getQuestions = async (sessionId: string) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return {
    data: {
      session_id: sessionId,
      questions: [
        {
          question_id: "q_engine_01",
          pillar: "operations",
          type: "paired",
          prompt: "When problems happen, what usually occurs?",
          options: {
            A: "I step in personally to make sure it's done right.",
            B: "I improve the system so it doesn't happen again."
          }
        }
        // ... more questions
      ]
    }
  };
};

export const submitAnswers = async (sessionId: string, answers: { question_id: string; value: string }[]) => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    data: {
      saved: answers.length,
      progress: { answered: 5, total: 20 }
    }
  };
};

export const completeAssessment = async (sessionId: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    data: {
      session_id: sessionId,
      status: "processing",
      jobs: ["score_compute", "tags_compute", "archetype_assign"]
    }
  };
};

export const getResults = async (sessionId: string) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return {
    data: {
      session_id: sessionId,
      archetype: { id: "The Uncrowned King", name: "The Uncrowned King" },
      pillar_scores: {
        leadership: 61, market: 48, operations: 55, money: 32,
        innovation: 44, risk: 58, people: 47
      },
      cliffhanger: "Your vision is strong, but Money is critical. You're likely losing ~30% revenue.",
      top_drivers: [
        { tag: "overdue_invoices", strength: 0.82 },
        { tag: "discounting_pressure", strength: 0.66 }
      ]
    }
  };
};

// --- 1.6 MARKETPLACE ---

export const getMarketplaceRecommendations = async (criticalPillar: string) => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return {
    data: {
      basis: { critical_pillar: criticalPillar, matched_tags: ["cashflow", "pricing"] },
      items: [
        {
          consultant_id: "c_22",
          name: "Jane A.",
          headline: "Fractional CFO | Cash Flow",
          verified_level: "verified_plus",
          rating_avg: 4.7,
          success_score: 82,
          location: { country: "UG", city: "Kampala" },
          expertise_tags: ["cashflow_controls", "pricing"]
        }
      ]
    }
  };
};

export const requestIntro = async (consultantId: string, reportId: string) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    data: {
      request_id: `req_${Date.now()}`,
      status: "sent",
      shared: { contact: true, report: true }
    }
  };
};

// --- 1.7 CONSULTANT LEADS ---

export const getLeadsFeed = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    data: {
      items: [
        {
          lead_id: "lead_77",
          title: "SME needs help fixing cash flow",
          country: "UG",
          critical_pillar: "money",
          severity: "critical",
          lead_size: "M",
          credit_cost: 5,
          matched_tags: ["collections"],
          anon_summary: "Overdue invoices high; no stop-work rule."
        }
      ],
      next_cursor: null
    }
  };
};

export const unlockLead = async (leadId: string) => {
  await new Promise(resolve => setTimeout(resolve, 600));
  return {
    data: {
      unlock_id: `un_${Date.now()}`,
      lead_id: leadId,
      credit_cost: 5,
      contact: {
        phone: "+2567xxxxxxx",
        email: "owner@business.com",
        whatsapp_link: "https://wa.me/2567xxxxxxx"
      },
      report_access: { report_id: "rep_900", web_url: "..." },
      suggested_openers: [
        { channel: "whatsapp", text: "Hi... I reviewed your Money bottleneck..." }
      ]
    }
  };
};

// --- 1.8 PARTNER LINKS ---

export const createPartnerLink = async (clientEmail: string) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return {
    data: {
      link_id: `pl_${Date.now()}`,
      credit_cost: 6,
      share_url: `https://app.example/r/pl_${Date.now()}`
    }
  };
};

export const getPartnerDashboard = async () => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return {
    data: {
      portfolio: { clients_total: 50 },
      top_alerts: [
        {
          alert_id: "pa_901",
          severity: "critical",
          title: "Client X is at risk of bankruptcy",
          detail: "Money score: 10%. Primary leak: overdue invoices.",
          cta: { type: "open_client", client_user_id: "u_999" }
        }
      ],
      health_map: {
        items: [
          { client_user_id: "u_999", name: "Client X", overall: 34, critical_pillar: "money", money: 10 }
        ]
      }
    }
  };
};
