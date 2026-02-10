
import { GoogleGenAI, Type } from "@google/genai";
import { ActionPlan, ActionStep, Quiz, QuizQuestion, BusinessProfile, PillarScores, Archetype } from "../types";

const RUNTIME_GEMINI_KEY = 'gemini_api_key';

const readServerEnvKey = (): string | undefined => {
  if (typeof process === 'undefined' || !process.env) return undefined;
  return process.env.GEMINI_API_KEY || process.env.API_KEY;
};

const readBrowserKey = (): string | null => {
  if (typeof window === 'undefined') return null;
  return window.sessionStorage.getItem(RUNTIME_GEMINI_KEY) || window.localStorage.getItem(RUNTIME_GEMINI_KEY);
};

export const getGeminiClient = async ({ promptForKey = false }: { promptForKey?: boolean } = {}): Promise<GoogleGenAI | null> => {
  const serverKey = readServerEnvKey();
  if (serverKey) return new GoogleGenAI({ apiKey: serverKey });

  const browserKey = readBrowserKey();
  if (browserKey) return new GoogleGenAI({ apiKey: browserKey });

  if (typeof window !== 'undefined') {
    const aistudio = (window as any).aistudio;
    if (aistudio?.hasSelectedApiKey) {
      let hasSelectedKey = await aistudio.hasSelectedApiKey();
      if (!hasSelectedKey && promptForKey && aistudio.openSelectKey) {
        await aistudio.openSelectKey();
        hasSelectedKey = await aistudio.hasSelectedApiKey();
      }
      if (hasSelectedKey) {
        return new GoogleGenAI({});
      }
    }

    if (promptForKey && typeof window.prompt === 'function') {
      const enteredKey = window.prompt('Enter your Gemini API key. It will be stored for this browser session only.');
      if (enteredKey && enteredKey.trim()) {
        window.sessionStorage.setItem(RUNTIME_GEMINI_KEY, enteredKey.trim());
        return new GoogleGenAI({ apiKey: enteredKey.trim() });
      }
    }
  }

  return null;
};

export const generateReportAnalysis = async (
  profile: BusinessProfile,
  scores: PillarScores,
  archetype: Archetype
) => {
  try {
    const ai = await getGeminiClient();
    if (!ai) return null;

    const prompt = `
      You are a senior management consultant writing an executive diagnostic memo.
      Tone requirements:
      - Direct, evidence-led, no hype language.
      - Use consultant phrasing: diagnosis, impact, and priority action.
      - Do not use motivational filler, buzzwords, or vague reassurance.
      - Keep each paragraph decision-oriented and commercially grounded.

      Analyze this business profile and diagnostic scores.
      
      Business: ${profile.businessName || 'Unnamed'}
      Industry: ${profile.industry} (${profile.subIndustry})
      Size: ${profile.size}
      Archetype: ${archetype}
      
      Scores (0-100):
      ${JSON.stringify(scores)}
      
      Generate a strategic analysis report in JSON format.
      1. Executive Summary: 3-4 sentences, executive tone, identifying the primary bottleneck and immediate decision priority.
      2. For each of the 7 pillars (Operations, Money, Market, Leadership, Innovation, Risk, People), provide:
         - quickScan: ~50-80 words in consultant tone with:
           (a) concise diagnosis,
           (b) likely business impact,
           (c) priority next move.
         - deepDive: An object containing detailed sections (approx 100-200 words each):
           - theory: What this pillar represents in their specific industry (${profile.industry}).
           - diagnosis: Why they scored this way based on the score value.
           - psychology: The operating behavior or leadership pattern sustaining the issue.
           - financials: Estimated commercial impact (margin, cash, risk, or throughput).
           - prescription: A practical remediation path (7-day containment + 30-day control build).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            executiveSummary: { type: Type.STRING },
            pillars: {
              type: Type.OBJECT,
              properties: {
                properties: {
                  Operations: { type: Type.OBJECT, properties: { quickScan: { type: Type.STRING }, deepDive: { type: Type.OBJECT, properties: { theory: { type: Type.STRING }, diagnosis: { type: Type.STRING }, psychology: { type: Type.STRING }, financials: { type: Type.STRING }, prescription: { type: Type.STRING } } } } },
                  Money: { type: Type.OBJECT, properties: { quickScan: { type: Type.STRING }, deepDive: { type: Type.OBJECT, properties: { theory: { type: Type.STRING }, diagnosis: { type: Type.STRING }, psychology: { type: Type.STRING }, financials: { type: Type.STRING }, prescription: { type: Type.STRING } } } } },
                  Market: { type: Type.OBJECT, properties: { quickScan: { type: Type.STRING }, deepDive: { type: Type.OBJECT, properties: { theory: { type: Type.STRING }, diagnosis: { type: Type.STRING }, psychology: { type: Type.STRING }, financials: { type: Type.STRING }, prescription: { type: Type.STRING } } } } },
                  Leadership: { type: Type.OBJECT, properties: { quickScan: { type: Type.STRING }, deepDive: { type: Type.OBJECT, properties: { theory: { type: Type.STRING }, diagnosis: { type: Type.STRING }, psychology: { type: Type.STRING }, financials: { type: Type.STRING }, prescription: { type: Type.STRING } } } } },
                  Innovation: { type: Type.OBJECT, properties: { quickScan: { type: Type.STRING }, deepDive: { type: Type.OBJECT, properties: { theory: { type: Type.STRING }, diagnosis: { type: Type.STRING }, psychology: { type: Type.STRING }, financials: { type: Type.STRING }, prescription: { type: Type.STRING } } } } },
                  Risk: { type: Type.OBJECT, properties: { quickScan: { type: Type.STRING }, deepDive: { type: Type.OBJECT, properties: { theory: { type: Type.STRING }, diagnosis: { type: Type.STRING }, psychology: { type: Type.STRING }, financials: { type: Type.STRING }, prescription: { type: Type.STRING } } } } },
                  People: { type: Type.OBJECT, properties: { quickScan: { type: Type.STRING }, deepDive: { type: Type.OBJECT, properties: { theory: { type: Type.STRING }, diagnosis: { type: Type.STRING }, psychology: { type: Type.STRING }, financials: { type: Type.STRING }, prescription: { type: Type.STRING } } } } }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    return null;
  } catch (error) {
    console.error("AI Report Gen Error:", error);
    return null;
  }
};

export const generateActionPlan = async (topic: string, context: string = ""): Promise<ActionPlan | null> => {
  try {
    const ai = await getGeminiClient({ promptForKey: true });
    if (!ai) return null;

    const prompt = `
      You are an elite executive coach and operations architect. 
      Create a rigorous, high-level action plan for the following topic/goal: "${topic}".
      Context: ${context}
      
      The plan must be execution-focused, not theory. 
      Create 5 distinct steps.
      For each step, specify the "requiredProofType" as either "text", "file", or "link" depending on what would best prove completion.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy, professional title for the action plan" },
            steps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  requiredProofType: { type: Type.STRING, enum: ["text", "file", "link"] }
                },
                required: ["title", "description", "requiredProofType"]
              }
            }
          },
          required: ["title", "steps"]
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text);

      // Transform into our app's internal type
      const newPlan: ActionPlan = {
        id: crypto.randomUUID(),
        title: data.title,
        progress: 0,
        steps: data.steps.map((step: any) => ({
          id: crypto.randomUUID(),
          title: step.title,
          description: step.description,
          status: 'pending',
          requiredProofType: step.requiredProofType
        }))
      };

      return newPlan;
    }
    return null;
  } catch (error) {
    console.error("Failed to generate action plan:", error);
    return null;
  }
};

export const generateQuiz = async (topic: string, difficulty: string = "mixed"): Promise<QuizQuestion[] | null> => {
  try {
    const ai = await getGeminiClient({ promptForKey: true });
    if (!ai) return null;

    const prompt = `
      Create 5 multiple choice quiz questions for a professional training sprint about: "${topic}".
      Difficulty level: ${difficulty}.
      For each question, provide 4 options, the index of the correct option (0-3), and a short explanation.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              prompt: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctIndex: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ["prompt", "options", "correctIndex", "explanation"]
          }
        }
      }
    });

    if (response.text) {
      const questions = JSON.parse(response.text);
      return questions.map((q: any) => ({
        ...q,
        id: crypto.randomUUID()
      }));
    }
    return null;
  } catch (error) {
    console.error("Quiz Gen Error:", error);
    return null;
  }
};

export interface SecondBrainResult {
  videoTitle: string;
  timestamp: string;
  answer: string;
  actionItems: string[];
}

export const askSecondBrain = async (query: string): Promise<SecondBrainResult | null> => {
  try {
    const ai = await getGeminiClient({ promptForKey: true });
    if (!ai) return null;

    const prompt = `
      You are the "Second Brain" of an execution-focused learning platform.
      The user is asking: "${query}".
      
      1. Provide a direct, actionable answer (max 2 sentences).
      2. Invent a plausible title of a Masterclass video that would contain this answer.
      3. Invent a specific timestamp (e.g., "04:23") where this is discussed.
      4. List 3 specific "Do This Now" immediate actions.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            videoTitle: { type: Type.STRING },
            timestamp: { type: Type.STRING },
            answer: { type: Type.STRING },
            actionItems: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as SecondBrainResult;
    }
    return null;
  } catch (error) {
    console.error("Second Brain Error:", error);
    return null;
  }
};

// -- AD STUDIO GENERATORS --

export const generateAdImage = async (prompt: string, style: string = 'photorealistic'): Promise<string | null> => {
  try {
    const ai = await getGeminiClient({ promptForKey: true });
    if (!ai) return null;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{
          text: `Generate a high-quality professional advertisement image. 
          Style: ${style}. 
          Prompt: ${prompt}. 
          Ensure it looks like a premium stock photo or high-end illustration suitable for a business website.`
        }]
      }
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (e) {
    console.error("Ad Image Gen Error:", e);
    return null;
  }
};

export const generateAdCopy = async (product: string, goal: string): Promise<any | null> => {
  try {
    const ai = await getGeminiClient({ promptForKey: true });
    if (!ai) return null;

    const prompt = `
      Write 3 variations of ad copy for: "${product}".
      Goal: ${goal}.
      Format: JSON with 'headline' (max 40 chars) and 'body' (max 90 chars).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              headline: { type: Type.STRING },
              body: { type: Type.STRING }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    return null;
  } catch (e) {
    console.error("Ad Copy Gen Error:", e);
    return null;
  }
};

export const generateAdVideo = async (prompt: string): Promise<string | null> => {
  try {
    const ai = await getGeminiClient({ promptForKey: true });
    if (!ai) return null;

    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (downloadLink) {
      const explicitKey = readServerEnvKey() || readBrowserKey();
      if (explicitKey) {
        const separator = downloadLink.includes('?') ? '&' : '?';
        return `${downloadLink}${separator}key=${encodeURIComponent(explicitKey)}`;
      }
      return downloadLink;
    }
    return null;
  } catch (e) {
    console.error("Ad Video Gen Error:", e);
    return null;
  }
};
