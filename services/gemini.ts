
import { GoogleGenAI, Type } from "@google/genai";
import { ActionPlan, ActionStep, Quiz, QuizQuestion, BusinessProfile, PillarScores, Archetype } from "../types";

// Initialize Gemini
// NOTE: In a production app, never expose keys on client. 
// This is for the demo requirement where process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateReportAnalysis = async (
  profile: BusinessProfile,
  scores: PillarScores,
  archetype: Archetype
) => {
  try {
    const prompt = `
      Act as an expert elite business consultant. Analyze this business profile and diagnostic scores.
      
      Business: ${profile.businessName || 'Unnamed'}
      Industry: ${profile.industry} (${profile.subIndustry})
      Size: ${profile.size}
      Archetype: ${archetype}
      
      Scores (0-100):
      ${JSON.stringify(scores)}
      
      Generate a strategic analysis report in JSON format.
      1. Executive Summary: A high-impact, brutal but encouraging 3-4 sentence summary of their current state, identifying the critical bottleneck.
      2. For each of the 7 pillars (Engine, Fuel, Voice, Brain, Pulse, Shield, Tribe), provide:
         - quickScan: A ~50 word punchy analysis of their score in this area.
         - deepDive: An object containing detailed sections (approx 100-200 words each):
           - theory: What this pillar represents in their specific industry (${profile.industry}).
           - diagnosis: Why they scored this way based on the score value.
           - psychology: The mindset block likely causing this.
           - financials: The estimated cost of this inefficiency (speculate based on industry).
           - prescription: A strategic fix path (immediate and long term).
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
                Engine: { type: Type.OBJECT, properties: { quickScan: {type: Type.STRING}, deepDive: { type: Type.OBJECT, properties: { theory: {type: Type.STRING}, diagnosis: {type: Type.STRING}, psychology: {type: Type.STRING}, financials: {type: Type.STRING}, prescription: {type: Type.STRING} } } } },
                Fuel: { type: Type.OBJECT, properties: { quickScan: {type: Type.STRING}, deepDive: { type: Type.OBJECT, properties: { theory: {type: Type.STRING}, diagnosis: {type: Type.STRING}, psychology: {type: Type.STRING}, financials: {type: Type.STRING}, prescription: {type: Type.STRING} } } } },
                Voice: { type: Type.OBJECT, properties: { quickScan: {type: Type.STRING}, deepDive: { type: Type.OBJECT, properties: { theory: {type: Type.STRING}, diagnosis: {type: Type.STRING}, psychology: {type: Type.STRING}, financials: {type: Type.STRING}, prescription: {type: Type.STRING} } } } },
                Brain: { type: Type.OBJECT, properties: { quickScan: {type: Type.STRING}, deepDive: { type: Type.OBJECT, properties: { theory: {type: Type.STRING}, diagnosis: {type: Type.STRING}, psychology: {type: Type.STRING}, financials: {type: Type.STRING}, prescription: {type: Type.STRING} } } } },
                Pulse: { type: Type.OBJECT, properties: { quickScan: {type: Type.STRING}, deepDive: { type: Type.OBJECT, properties: { theory: {type: Type.STRING}, diagnosis: {type: Type.STRING}, psychology: {type: Type.STRING}, financials: {type: Type.STRING}, prescription: {type: Type.STRING} } } } },
                Shield: { type: Type.OBJECT, properties: { quickScan: {type: Type.STRING}, deepDive: { type: Type.OBJECT, properties: { theory: {type: Type.STRING}, diagnosis: {type: Type.STRING}, psychology: {type: Type.STRING}, financials: {type: Type.STRING}, prescription: {type: Type.STRING} } } } },
                Tribe: { type: Type.OBJECT, properties: { quickScan: {type: Type.STRING}, deepDive: { type: Type.OBJECT, properties: { theory: {type: Type.STRING}, diagnosis: {type: Type.STRING}, psychology: {type: Type.STRING}, financials: {type: Type.STRING}, prescription: {type: Type.STRING} } } } }
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
    // Re-init for key freshness if needed, though module-level 'ai' handles env key.
    const aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await aiInstance.models.generateContent({
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
    const aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `
      Write 3 variations of ad copy for: "${product}".
      Goal: ${goal}.
      Format: JSON with 'headline' (max 40 chars) and 'body' (max 90 chars).
    `;
    
    const response = await aiInstance.models.generateContent({
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
    // Note: Veo requires a paid key selected via the window.aistudio flow if standard key fails
    const aiInstance = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    let operation = await aiInstance.models.generateVideos({
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
      operation = await aiInstance.operations.getVideosOperation({operation: operation});
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (downloadLink) {
        // Appending key is required for Veo download links usually
        return `${downloadLink}&key=${process.env.API_KEY}`;
    }
    return null;
  } catch (e) {
    console.error("Ad Video Gen Error:", e);
    return null;
  }
};
