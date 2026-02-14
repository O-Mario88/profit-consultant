export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiRequestOptions {
  method?: HttpMethod;
  body?: Record<string, unknown>;
  timeoutMs?: number;
  headers?: Record<string, string>;
}

export interface ApiErrorPayload {
  error?: {
    code?: string;
    message?: string;
    details?: unknown;
  };
}

export class ApiError extends Error {
  status: number;
  code: string;
  details?: unknown;

  constructor(message: string, status: number, code = 'API_ERROR', details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

const DEFAULT_TIMEOUT_MS =
  (typeof import.meta !== 'undefined' && Number((import.meta as any).env?.VITE_API_TIMEOUT_MS)) || 45_000;

export const AI_PROXY_BASE =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_AI_PROXY_BASE_URL) || '/api/ai';

export const ASSESSMENT_PROXY_BASE =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_ASSESSMENT_PROXY_BASE_URL) || '/api/assessment';

export const API_ROOT_BASE =
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_API_ROOT_BASE_URL) || '/api';

const normalizeBase = (value: string): string => {
  const trimmed = String(value || '').trim();
  if (!trimmed) return '';
  return trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
};

const normalizePath = (path: string): string => {
  const normalized = String(path || '').trim();
  if (!normalized) return '';
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
};

const buildUrl = (basePath: string, path: string): string => {
  return `${normalizeBase(basePath)}${normalizePath(path)}`;
};

const parseErrorPayload = async (response: Response): Promise<ApiErrorPayload | null> => {
  const contentType = response.headers.get('content-type') || '';
  try {
    if (contentType.includes('application/json')) {
      return (await response.json()) as ApiErrorPayload;
    }

    const text = await response.text();
    if (!text) return null;
    try {
      return JSON.parse(text) as ApiErrorPayload;
    } catch {
      return { error: { message: text } };
    }
  } catch {
    return null;
  }
};

export const requestJson = async <T>(
  basePath: string,
  path: string,
  options: ApiRequestOptions = {}
): Promise<T> => {
  const method = options.method || 'POST';
  const timeoutMs = Math.max(2000, Number(options.timeoutMs || DEFAULT_TIMEOUT_MS));
  const controller = new AbortController();

  const timeoutHandle = setTimeout(() => {
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetch(buildUrl(basePath, path), {
      method,
      headers: {
        ...(method !== 'GET' ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {})
      },
      body: method === 'GET' ? undefined : JSON.stringify(options.body || {}),
      signal: controller.signal
    });

    if (!response.ok) {
      const payload = await parseErrorPayload(response);
      const message =
        payload?.error?.message ||
        `Request failed (${response.status}) for ${buildUrl(basePath, path)}`;
      const code = payload?.error?.code || `HTTP_${response.status}`;
      throw new ApiError(message, response.status, code, payload?.error?.details);
    }

    if (response.status === 204) {
      return {} as T;
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const text = await response.text();
      return ({ text } as unknown) as T;
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiError(
        `Request timed out after ${Math.round(timeoutMs / 1000)}s for ${buildUrl(basePath, path)}`,
        408,
        'REQUEST_TIMEOUT'
      );
    }
    throw new ApiError(
      error instanceof Error ? error.message : 'Unknown API request error',
      500,
      'REQUEST_FAILED'
    );
  } finally {
    clearTimeout(timeoutHandle);
  }
};

export interface BackendHealthResponse {
  ok?: boolean;
  env?: string;
  aiConfigured?: boolean;
  knowledgeBase?: {
    loaded?: boolean;
    size?: number;
    datasetUpdatedAt?: string;
    error?: string;
  };
  reportConfig?: {
    quickModel?: string;
    deepScanModel?: string;
    vectorStoreConfigured?: boolean;
    vectorStoreId?: string;
  };
  rateLimit?: {
    windowMs?: number;
    maxRequests?: number;
  };
}

export const fetchBackendHealth = async (): Promise<BackendHealthResponse> => {
  return requestJson<BackendHealthResponse>(API_ROOT_BASE, '/health', { method: 'GET' });
};
