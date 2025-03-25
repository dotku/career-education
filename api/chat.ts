import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import { promises as fs } from 'fs';
import path from 'path';

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = request.body;
    const webMdPath = path.join(process.cwd(), 'api/data/web.md');
    const content = await fs.readFile(webMdPath, 'utf-8');
    
    const completion = await client.chat.completions.create({
      model: "grok-2-latest",
      messages: [
        {
          role: "system",
          content: `
              ${content}
              你是一位专业的职业规划顾问，帮助用户解答职业发展相关的问题。请用简洁专业的语言回答，并给出实用的建议。
              如果要咨询费用问题，让他们添加微信：
              电话：17318011997
              微信：HELENLAN998
          `,
        },
        ...messages,
      ],
    });

    return response.status(200).json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    return response.status(500).json({
      error: "An error occurred while processing your request",
    });
  }
}
