import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { findRelevantContent } from "@/lib/ai/embedding";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, model: modelId } = await req.json();

  const model = getModelFromId(modelId || "openai:gpt-4o");

  const userMessage = messages[messages.length - 1];
  const userQuestion = userMessage?.content ?? "";

  const contextChunks = await findRelevantContent(userQuestion);

  const MAX_CHARS = 1500;
  let totalLength = 0;

  const trimmedChunks = contextChunks.filter((c) => {
    totalLength += c.name.length;
    return totalLength <= MAX_CHARS;
  });

  const contextString =
    trimmedChunks.length > 0
      ? `You are DevDoc, an AI-powered developer assistant built into the VS Code IDE. You help developers by answering questions based on real project documentation, codebase content, and package dependencies embedded into your vector database.

Use only the following retrieved context to answer accurately and avoid hallucination. If the answer is not in the context, say so.

Context:
${trimmedChunks.map((c) => `- ${c.name}`).join("\n")}`
      : `You are DevDoc, an AI-powered developer assistant inside VS Code. No relevant context was found in the embedded knowledge base. Ask the user to clarify or rephrase their question.`;

  const contextMessage = {
    role: "system" as const,
    content: contextString,
  };

  const result = await streamText({
    model,
    messages: [contextMessage, ...messages],
  });

  return result.toDataStreamResponse();
}

export async function GET(_req: Request) {
  return new Response("Hello from DevDoc!", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}

function getModelFromId(modelId: string) {
  const [provider, modelName] = modelId.split(":");

  switch (provider) {
    case "openai":
      return openai(modelName);
    case "anthropic":
      return anthropic(modelName);
    case "google":
      return google(modelName);
    default:
      throw new Error(
        `No such provider: ${provider}. Valid providers are: openai, anthropic, google.`
      );
  }
}
