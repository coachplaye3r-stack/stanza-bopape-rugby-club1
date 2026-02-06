
import { GoogleGenAI, Type } from "@google/genai";
import { Transaction } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async analyzeFinances(transactions: Transaction[]) {
    const prompt = `Analyze the following rugby club financial transactions and provide a summary report:
    ${JSON.stringify(transactions)}
    Include:
    1. Total Income vs Total Expense
    2. Top 3 spending categories
    3. A short forecast/recommendation for next month.`;

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              totalIncome: { type: Type.NUMBER },
              totalExpense: { type: Type.NUMBER },
              topCategories: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    amount: { type: Type.NUMBER }
                  }
                }
              },
              forecast: { type: Type.STRING },
              summary: { type: Type.STRING }
            },
            required: ["totalIncome", "totalExpense", "topCategories", "forecast", "summary"]
          }
        }
      });

      return JSON.parse(response.text || '{}');
    } catch (error) {
      console.error("Gemini Analysis Error:", error);
      return null;
    }
  }

  async generateChatBotResponse(query: string, context: string) {
    const response = await this.ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the AI assistant for Stanza Bopape Rugby Club. User asks: "${query}". Context: ${context}`,
      config: {
        systemInstruction: "Be helpful, encouraging, and informative about rugby and the club.",
      }
    });
    return response.text;
  }
}

export const geminiService = new GeminiService();
