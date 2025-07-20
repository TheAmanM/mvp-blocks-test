import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import { google } from "@ai-sdk/google";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, model: modelId } = await req.json();
  console.log(messages, modelId);

  const model = getModelFromId(modelId);

  const result = streamText({
    model,
    messages,
  });

  return result.toDataStreamResponse();
}

export async function GET(_req: Request) {
  return new Response("Hello, world!", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}

// Utility to map modelId strings to actual model instances
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
