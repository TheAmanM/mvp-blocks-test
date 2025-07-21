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
      ? `You are DevDoc, an AI-powered developer assistant inside VS Code. IF CONTEXT ISN'T IN THE EMBEDDED CONTEXT, JUST MAKE A GOOD GUESS. Use the following context from the user's codebase and documentation to help answer their question. Prefer using the context when it's relevant, but you're allowed to reason, infer, or generate helpful code when context is missing.

If you're unsure, say you're making an educated guess, DONT SAY STUFF LIKE "It seems that the context provided does not include specific information about". Always be useful and developer-oriented.

Context:
${trimmedChunks.map((c) => `- ${c.name}`).join("\n")}`
      : `You are DevDoc, an AI-powered developer assistant inside VS Code. No relevant context was found in the user's embedded documentation or code. Do your best to help based on general programming knowledge, and clearly indicate when you're making assumptions or guesses.`;

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
