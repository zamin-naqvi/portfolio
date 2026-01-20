import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PORTFOLIO_OWNER, PROJECTS, EXPERIENCE, SKILLS, ABOUT_TEXT, EMAIL } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Construct a system prompt based on the portfolio data
const systemPrompt = `
You are an AI assistant for ${PORTFOLIO_OWNER}'s portfolio.
CRITICAL INSTRUCTION: ${PORTFOLIO_OWNER} is an ANDROID DEVELOPER and UX DESIGNER.
Do NOT mention React, Frontend web development, HTML, CSS, or Web Tech unless explicitly clarifying that ${PORTFOLIO_OWNER} does NOT do them.
If asked about web dev, politely redirect to his expertise in Native Android (Kotlin/Compose) and Design.

Profile:
${ABOUT_TEXT}

Contact: ${EMAIL}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description} [Tech: ${p.technologies.join(', ')}]`).join('\n')}

Tone: Minimalist, professional, direct, slightly artistic.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat | null => {
  try {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
     return "System error: Could not initialize chat session.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection error. Please try again.";
  }
};