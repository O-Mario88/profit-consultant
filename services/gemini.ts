import {
  Archetype,
  BusinessProfile,
  DeepScanChapter,
  GeneratedReport,
  PillarScores
} from '../types';
import { generateDeepScanChapter } from './textGen';

type JsonRecord = Record<string, unknown>;

interface ChatCompletionResponse {
  choices: Array<{ message: { content: string | null } }>;
}

interface ImageGenerationResponse {
  data?: Array<{ url?: string; b64_json?: string }>;
}

interface ModelGenerationResponse {
  text?: string;
}

interface PremiumQuickReportResponse {
  executiveSummary?: string;
  pillars?: Record<string, unknown>;
}

interface PremiumDeepScanResponse {
  chapters?: Record<string, DeepScanChapter>;
  executiveSummary?: string;
}

interface SecureAIClient {
  chat: {
    completions: {
      create: (payload: JsonRecord) => Promise<ChatCompletionResponse>;
    };
  };
  images: {
    generate: (payload: JsonRecord) => Promise<ImageGenerationResponse>;
  };
  models: {
    generateContent: (payload: JsonRecord) => Promise<ModelGenerationResponse>;
  };
  report: {
    generate: (payload: JsonRecord) => Promise<PremiumQuickReportResponse>;
    deepScan: (payload: JsonRecord) => Promise<PremiumDeepScanResponse>;
  };
}

const AI_PROXY_BASE =
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_AI_PROXY_BASE_URL) || '/api/ai';

const requestProxy = async <T>(path: string, body: JsonRecord): Promise<T> => {
  const response = await fetch(`${AI_PROXY_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `AI proxy request failed (${response.status})`);
  }

  return (await response.json()) as T;
};

const createSecureClient = (): SecureAIClient => ({
  chat: {
    completions: {
      create: (payload) => requestProxy<ChatCompletionResponse>('/chat/completions', payload)
    }
  },
  images: {
    generate: (payload) => requestProxy<ImageGenerationResponse>('/images/generate', payload)
  },
  models: {
    generateContent: (payload) => requestProxy<ModelGenerationResponse>('/models/generate-content', payload)
  },
  report: {
    generate: (payload) => requestProxy<PremiumQuickReportResponse>('/report/generate', payload),
    deepScan: (payload) => requestProxy<PremiumDeepScanResponse>('/report/deep-scan', payload)
  }
});

let cachedClient: SecureAIClient | null = null;

export const getOpenAIClient = async (
  _opts: { promptForKey?: boolean } = {}
): Promise<SecureAIClient | null> => {
  if (typeof fetch !== 'function') return null;
  if (!cachedClient) cachedClient = createSecureClient();
  return cachedClient;
};

// Backward-compatible alias used across components.
export const getGeminiClient = getOpenAIClient;

const ensureObject = (value: unknown): Record<string, unknown> => {
  if (!value || typeof value !== 'object') return {};
  return value as Record<string, unknown>;
};

export const generateReportAnalysis = async (
  profile: BusinessProfile,
  scores: PillarScores,
  archetype: Archetype,
  quickScanAnswers?: Record<string, string>
): Promise<any> => {
  try {
    const client = await getOpenAIClient();
    if (!client) return null;

    const payload = await client.report.generate({
      profile,
      scores,
      archetype,
      quickScanAnswers: quickScanAnswers || {}
    });

    if (!payload || typeof payload !== 'object') return null;
    return {
      executiveSummary: payload.executiveSummary || '',
      pillars: ensureObject(payload.pillars)
    };
  } catch (error) {
    console.error('AI Report Generation Error:', error);
    return null;
  }
};

export interface DeepScanAssessmentAnswer {
  pillar: string;
  question: string;
  answer: string;
}

const PILLAR_ALIASES: Record<string, string> = {
  Engine: 'Operations',
  Fuel: 'Money',
  Voice: 'Market',
  Brain: 'Leadership',
  Pulse: 'Innovation',
  Shield: 'Risk',
  Tribe: 'People'
};

const hydrateDeepScanFallback = (quickScanReport: GeneratedReport) => {
  const fallback: Record<string, DeepScanChapter> = {};
  for (const pillar of quickScanReport.pillars) {
    const mapped = PILLAR_ALIASES[pillar.name] || pillar.name;
    const industry = quickScanReport.profileContext?.industry || 'general';
    fallback[pillar.name] = generateDeepScanChapter(mapped, pillar.score, industry);
  }
  return fallback;
};

export const generateDeepScanReport = async (
  quickScanReport: GeneratedReport,
  deepScanAnswers: DeepScanAssessmentAnswer[]
): Promise<{ chapters: Record<string, DeepScanChapter>; executiveSummary: string } | null> => {
  const fallbackChapters = hydrateDeepScanFallback(quickScanReport);
  const fallbackSummary = quickScanReport.executiveSummary || 'Analysis unavailable.';

  try {
    const client = await getOpenAIClient({ promptForKey: true });
    if (!client) {
      return { chapters: fallbackChapters, executiveSummary: fallbackSummary };
    }

    const payload = await client.report.deepScan({
      quickScanReport,
      deepScanAnswers
    });

    if (!payload || !payload.chapters || typeof payload.chapters !== 'object') {
      return { chapters: fallbackChapters, executiveSummary: fallbackSummary };
    }

    const mergedChapters: Record<string, DeepScanChapter> = { ...fallbackChapters };
    for (const pillar of Object.keys(mergedChapters)) {
      const canonical = PILLAR_ALIASES[pillar] || pillar;
      const incoming = payload.chapters[pillar] || payload.chapters[canonical];
      if (incoming && typeof incoming === 'object') {
        mergedChapters[pillar] = incoming;
      }
    }

    return {
      chapters: mergedChapters,
      executiveSummary: payload.executiveSummary || fallbackSummary
    };
  } catch (error) {
    console.error('Deep Scan AI Generation Error:', error);
    return { chapters: fallbackChapters, executiveSummary: fallbackSummary };
  }
};

