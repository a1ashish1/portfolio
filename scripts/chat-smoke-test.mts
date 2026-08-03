/**
 * Manual smoke test for the Ask Ashish assistant.
 * Usage: npx tsx scripts/chat-smoke-test.mts
 * Requires NEXT_PUBLIC_GEMINI_API_KEY in .env.local
 */
import { readFileSync } from "node:fs";
import { buildSystemPrompt } from "../src/lib/chat/systemPrompt.js";

const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
const apiKey = env.match(/NEXT_PUBLIC_GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!apiKey) throw new Error("Missing NEXT_PUBLIC_GEMINI_API_KEY in .env.local");

const MODELS = [
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-3-flash-preview",
  "gemini-flash-latest",
];

const questions = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      "How can I get in touch?",
      "check current location in resume",
      "explain about him in 100 words",
      "What is his current salary?",
    ];

const systemPrompt = buildSystemPrompt();
console.log(`system prompt: ${systemPrompt.length} chars\n`);

for (const q of questions) {
  let printed = false;
  for (const model of MODELS) {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: "user", parts: [{ text: q }] }],
          generationConfig: {
            temperature: 0.35,
            topP: 0.9,
            topK: 40,
            maxOutputTokens: 4096,
          },
        }),
      }
    );

    const data = await res.json();
    if (data.error) {
      console.log(`[${model}] error ${data.error.code}: ${data.error.status}`);
      continue;
    }

    const text: string = (data.candidates?.[0]?.content?.parts ?? [])
      .map((p: { text?: string }) => p.text ?? "")
      .join("")
      .trim();

    console.log(`Q: ${q}`);
    console.log(`[${model}] finish=${data.candidates?.[0]?.finishReason} words=${text.split(/\s+/).length}`);
    console.log(text || "(empty)");
    console.log("-".repeat(70));
    printed = true;
    break;
  }
  if (!printed) console.log(`Q: ${q}\nAll models failed\n${"-".repeat(70)}`);
}
