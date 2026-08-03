import { siteConfig } from "@/data/content";
import { CONTACT_FALLBACK } from "@/data/knowledgeBase";
import { buildSystemPrompt } from "@/lib/chat/systemPrompt";

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

/**
 * Tried sequentially. Explicit model IDs keep these on four distinct
 * per-model free-tier quotas rather than aliases that may resolve to the same
 * underlying model.
 */
const MODELS = [
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-3-flash-preview",
  "gemini-flash-latest",
] as const;

const MAX_HISTORY = 8;
const MAX_INPUT_CHARS = 500;

const ALL_MODELS_UNAVAILABLE_MESSAGE = `The AI assistant has reached its temporary usage limits, so I can't generate a tailored answer right now.

Ashish is a Senior Software Engineer with about 6 years of backend and platform experience across ABCFitness, Highspot, and Oracle. His work spans Java, Python, Spring, Kafka, AWS, APIs, data pipelines, and AI-powered features.

You can also reach him directly:

Email: ${siteConfig.email}
LinkedIn: ${siteConfig.social.linkedin}`;

const TRANSIENT_MESSAGE = `I'm having trouble reaching the assistant service right now. Please try again in a moment, or reach Ashish directly:

Email: ${siteConfig.email}
LinkedIn: ${siteConfig.social.linkedin}`;

const NOT_CONFIGURED_MESSAGE = `The assistant is not configured yet. You can reach Ashish directly:

Email: ${siteConfig.email}
LinkedIn: ${siteConfig.social.linkedin}`;

interface GeminiPart {
  text?: string;
}

interface GeminiResponse {
  candidates?: Array<{
    content?: { parts?: GeminiPart[] };
    finishReason?: string;
  }>;
  promptFeedback?: { blockReason?: string };
  error?: { code?: number; message?: string; status?: string };
}

type Outcome =
  | { status: "ok"; text: string }
  | { status: "empty" }
  | { status: "quota" }
  | { status: "transient" };

function getApiKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  return key && key.trim().length > 0 ? key.trim() : undefined;
}

export function isChatConfigured(): boolean {
  return Boolean(getApiKey());
}

function buildRequestBody(history: ChatMessage[], userMessage: string) {
  return {
    system_instruction: { parts: [{ text: buildSystemPrompt() }] },
    contents: [
      ...history.slice(-MAX_HISTORY).map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      { role: "user", parts: [{ text: userMessage }] },
    ],
    generationConfig: {
      temperature: 0.35,
      topP: 0.9,
      topK: 40,
      // These models spend part of the budget on internal reasoning, so keep
      // enough headroom for a complete visible answer.
      maxOutputTokens: 4096,
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
    ],
  };
}

async function callModel(
  model: string,
  apiKey: string,
  body: unknown
): Promise<Outcome> {
  let res: Response;
  try {
    res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  } catch {
    return { status: "transient" };
  }

  if (res.status === 429) return { status: "quota" };
  if (!res.ok) return { status: "transient" };

  let data: GeminiResponse;
  try {
    data = (await res.json()) as GeminiResponse;
  } catch {
    return { status: "transient" };
  }

  if (data.error) {
    return data.error.code === 429
      ? { status: "quota" }
      : { status: "transient" };
  }

  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const text = parts
    .map((p) => p.text ?? "")
    .join("")
    .trim();

  return text ? { status: "ok", text } : { status: "empty" };
}

export async function askAshish(
  history: ChatMessage[],
  userMessage: string
): Promise<string> {
  const trimmed = userMessage.trim().slice(0, MAX_INPUT_CHARS);
  if (!trimmed) return CONTACT_FALLBACK;

  const apiKey = getApiKey();
  if (!apiKey) return NOT_CONFIGURED_MESSAGE;

  const body = buildRequestBody(history, trimmed);
  let sawQuota = false;

  for (const model of MODELS) {
    const outcome = await callModel(model, apiKey, body);

    if (outcome.status === "ok") return outcome.text;
    // A blocked or empty candidate is a content decision, not an outage —
    // retrying other models would give the same result.
    if (outcome.status === "empty") return CONTACT_FALLBACK;
    if (outcome.status === "quota") sawQuota = true;
  }

  return sawQuota ? ALL_MODELS_UNAVAILABLE_MESSAGE : TRANSIENT_MESSAGE;
}
