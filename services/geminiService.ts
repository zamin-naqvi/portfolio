import { PORTFOLIO_OWNER, EMAIL } from '../constants';

// Initialize chat is now a no-op since we aren't using a real AI service
export const initializeChat = () => {
  return null;
};

// Simple auto-responder logic to replace the AI
export const sendMessageToGemini = async (message: string): Promise<string> => {
  // Simulate a small network delay for a natural feel
  await new Promise(resolve => setTimeout(resolve, 600));

  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    return `Hello! I'm ${PORTFOLIO_OWNER}'s automated assistant. Feel free to check out the projects above or ask for contact info.`;
  }
  
  if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('hire') || lowerMsg.includes('reach')) {
    return `You can reach ${PORTFOLIO_OWNER} directly via email at: ${EMAIL}`;
  }

  if (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('app')) {
    return `Please scroll up to the "Deployments" section to see the latest Native Android and UX work.`;
  }

  if (lowerMsg.includes('skill') || lowerMsg.includes('stack') || lowerMsg.includes('tech')) {
    return `${PORTFOLIO_OWNER} specializes in Native Android (Kotlin, Jetpack Compose) and High-Fidelity UX Design.`;
  }

  // Default fallback response
  return `Thanks for reaching out! Since I'm a simple bot, I suggest emailing ${PORTFOLIO_OWNER} at ${EMAIL} for detailed inquiries.`;
};