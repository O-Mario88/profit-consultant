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

interface PremiumFullAssessmentResponse {
  quickScan?: PremiumQuickReportResponse;
  deepScan?: PremiumDeepScanResponse;
  quickScanReport?: Record<string, unknown>;
}

export interface AdaptiveAssessmentPayload {
  industry?: string;
  subIndustry?: string;
  responderTitle?: string;
  department?: string;
  primaryPriority?: string;
  secondaryPriorities?: string[] | string;
  variant?: string;
  complianceMode?: string;
  size?: string;
  region?: string;
  vocabularyList?: string[] | string;
  forceDs20All?: boolean;
}

export interface AdaptiveAssessmentResponse {
  ok?: boolean;
  assessmentText?: string;
  model?: string;
  input?: Record<string, unknown>;
  roleFamily?: Record<string, unknown>;
  baseWeights?: Record<string, number>;
  finalWeights?: Record<string, number>;
  rankedPillars?: Array<Record<string, unknown>>;
  depthPlan?: Record<string, unknown>;
  appliedPriorityKeys?: Record<string, unknown>;
}

export interface AdaptiveQuestionPair {
  id: string;
  textA: string;
  textB: string;
  metadataTag?: string;
}

export interface AdaptiveQuestionPillar {
  id: string;
  name: string;
  legacyPillar?: string;
  whyItMatters?: string;
  qs4: AdaptiveQuestionPair[];
  deepScan: AdaptiveQuestionPair[];
}

export interface AdaptiveQuestionBankResponse {
  ok?: boolean;
  model?: string;
  input?: Record<string, unknown>;
  roleFamily?: Record<string, unknown>;
  baseWeights?: Record<string, number>;
  finalWeights?: Record<string, number>;
  rankedPillars?: Array<Record<string, unknown>>;
  depthPlan?: Record<string, unknown>;
  appliedPriorityKeys?: Record<string, unknown>;
  questionBank?: {
    pillars?: AdaptiveQuestionPillar[];
  };
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
    fullAssessment: (payload: JsonRecord) => Promise<PremiumFullAssessmentResponse>;
    adaptive: (payload: JsonRecord) => Promise<AdaptiveAssessmentResponse>;
    adaptiveQuestions: (payload: JsonRecord) => Promise<AdaptiveQuestionBankResponse>;
  };
}

const AI_PROXY_BASE =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_AI_PROXY_BASE_URL) || '/api/ai';
const ASSESSMENT_PROXY_BASE =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_ASSESSMENT_PROXY_BASE_URL) || '/api/assessment';

const requestJson = async <T>(basePath: string, path: string, body: JsonRecord): Promise<T> => {
  const response = await fetch(`${basePath}${path}`, {
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

const requestProxy = async <T>(path: string, body: JsonRecord): Promise<T> =>
  requestJson<T>(AI_PROXY_BASE, path, body);

const requestAssessmentProxy = async <T>(path: string, body: JsonRecord): Promise<T> =>
  requestJson<T>(ASSESSMENT_PROXY_BASE, path, body);

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
    deepScan: (payload) => requestProxy<PremiumDeepScanResponse>('/report/deep-scan', payload),
    fullAssessment: (payload) => requestAssessmentProxy<PremiumFullAssessmentResponse>('/full-report', payload),
    adaptive: (payload) => requestAssessmentProxy<AdaptiveAssessmentResponse>('/adaptive', payload),
    adaptiveQuestions: (payload) => requestAssessmentProxy<AdaptiveQuestionBankResponse>('/adaptive/questions', payload)
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

const emptyScores = (): PillarScores => ({
  operations: 50,
  money: 50,
  market: 50,
  leadership: 50,
  innovation: 50,
  risk: 50,
  people: 50
});

const clampScore = (value: number): number => {
  if (!Number.isFinite(value)) return 50;
  return Math.max(0, Math.min(100, Math.round(value)));
};

const pillarToScoreKey = (pillarName: string): keyof PillarScores | null => {
  const canonical = PILLAR_ALIASES[pillarName] || pillarName;
  const lower = canonical.toLowerCase();
  if (lower === 'operations') return 'operations';
  if (lower === 'money') return 'money';
  if (lower === 'market') return 'market';
  if (lower === 'leadership') return 'leadership';
  if (lower === 'innovation' || lower === 'innovation & creativity') return 'innovation';
  if (lower === 'risk') return 'risk';
  if (lower === 'people') return 'people';
  return null;
};

const toCanonicalScoresFromReport = (report: GeneratedReport): PillarScores => {
  const scores = emptyScores();
  for (const pillar of report.pillars || []) {
    const key = pillarToScoreKey(String(pillar.name || ''));
    if (!key) continue;
    scores[key] = clampScore(Number(pillar.score));
  }
  return scores;
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

const pickChapterField = (
  incomingValue: unknown,
  fallbackValue: string,
  defaultValue: string
): string => {
  if (typeof incomingValue === 'string' && incomingValue.trim()) {
    return incomingValue.trim();
  }
  if (typeof fallbackValue === 'string' && fallbackValue.trim()) {
    return fallbackValue.trim();
  }
  return defaultValue;
};

const mergeDeepScanWithFallback = (
  payload: PremiumDeepScanResponse | null | undefined,
  fallbackChapters: Record<string, DeepScanChapter>,
  fallbackSummary: string
): { chapters: Record<string, DeepScanChapter>; executiveSummary: string } | null => {
  if (!payload || !payload.chapters || typeof payload.chapters !== 'object') return null;

  const mergedChapters: Record<string, DeepScanChapter> = { ...fallbackChapters };
  for (const pillar of Object.keys(mergedChapters)) {
    const canonical = PILLAR_ALIASES[pillar] || pillar;
    const fallback = mergedChapters[pillar];
    const incoming = payload.chapters[pillar] || payload.chapters[canonical];

    if (incoming && typeof incoming === 'object') {
      const incomingChapter = incoming as Partial<DeepScanChapter>;
      mergedChapters[pillar] = {
        theory: pickChapterField(
          incomingChapter.theory,
          fallback?.theory || '',
          `${pillar}: theory unavailable in model output.`
        ),
        diagnosis: pickChapterField(
          incomingChapter.diagnosis,
          fallback?.diagnosis || '',
          `${pillar}: diagnosis unavailable in model output.`
        ),
        psychology: pickChapterField(
          incomingChapter.psychology,
          fallback?.psychology || '',
          `${pillar}: behavioral pattern unavailable in model output.`
        ),
        financials: pickChapterField(
          incomingChapter.financials,
          fallback?.financials || '',
          `${pillar}: financial impact unavailable in model output.`
        ),
        prescription: pickChapterField(
          incomingChapter.prescription,
          fallback?.prescription || '',
          `${pillar}: prescription unavailable in model output.`
        )
      };
      continue;
    }

    if (!fallback) {
      mergedChapters[pillar] = {
        theory: `${pillar}: theory unavailable in model output.`,
        diagnosis: `${pillar}: diagnosis unavailable in model output.`,
        psychology: `${pillar}: behavioral pattern unavailable in model output.`,
        financials: `${pillar}: financial impact unavailable in model output.`,
        prescription: `${pillar}: prescription unavailable in model output.`
      };
    }
  }

  return {
    chapters: mergedChapters,
    executiveSummary:
      (typeof payload.executiveSummary === 'string' && payload.executiveSummary.trim())
        ? payload.executiveSummary
        : fallbackSummary
  };
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

    const fullAssessmentPayload = await client.report.fullAssessment({
      profile: quickScanReport.profileContext || {},
      scores: toCanonicalScoresFromReport(quickScanReport),
      archetype: quickScanReport.archetype || 'Unknown',
      quickScanAnswers: quickScanReport.quickScanResponses || {},
      deepScanAnswers
    });

    const fullAssessmentMerged = mergeDeepScanWithFallback(
      fullAssessmentPayload?.deepScan,
      fallbackChapters,
      fallbackSummary
    );
    if (fullAssessmentMerged) {
      return fullAssessmentMerged;
    }

    const deepScanPayload = await client.report.deepScan({
      quickScanReport,
      deepScanAnswers
    });

    const deepScanMerged = mergeDeepScanWithFallback(
      deepScanPayload,
      fallbackChapters,
      fallbackSummary
    );
    if (deepScanMerged) {
      return deepScanMerged;
    }

    return { chapters: fallbackChapters, executiveSummary: fallbackSummary };
  } catch (error) {
    console.error('Deep Scan AI Generation Error:', error);
    return { chapters: fallbackChapters, executiveSummary: fallbackSummary };
  }
};

export const generateAdaptiveAssessment = async (
  payload: AdaptiveAssessmentPayload
): Promise<AdaptiveAssessmentResponse | null> => {
  try {
    const client = await getOpenAIClient({ promptForKey: true });
    if (!client) return null;
    return await client.report.adaptive(payload as JsonRecord);
  } catch (error) {
    console.error('Adaptive Assessment Generation Error:', error);
    return null;
  }
};

export const generateAdaptiveQuestionBank = async (
  payload: AdaptiveAssessmentPayload
): Promise<AdaptiveQuestionBankResponse | null> => {
  try {
    const client = await getOpenAIClient({ promptForKey: true });
    if (!client) return null;
    return await client.report.adaptiveQuestions(payload as JsonRecord);
  } catch (error) {
    console.error('Adaptive Question Bank Generation Error:', error);
    return null;
  }
};
