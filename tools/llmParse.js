// tools/llmParse.js
import fs from "fs";
import path from "path";
import OpenAI from "openai"; // ⬅️ use OpenAI SDK
import { z } from "zod";
import "dotenv/config";
import { jsonrepair } from "jsonrepair";

// ---------- 1️⃣ Zod schema for validation ----------
const nodeSchema = z.object({
  id: z.string(),
  kind: z.enum(["page", "decision", "action"]),
  title: z.string().optional(),
  data: z.record(z.any()).optional(),
});

const edgeSchema = z.object({
  from: z.string(),
  to: z.string(),
  when: z.string().optional(),
});

const flowSchema = z.object({
  start: z.string(),
  nodes: z.array(nodeSchema).min(1),
  edges: z.array(edgeSchema),
});

// ---------- 2️⃣ Paths ----------
const root = process.cwd();
const transcriptPath = path.join(root, "data", "functional_specification.txt");
const flowPath = path.join(root, "data", "flow.json");

// ---------- 3️⃣ Check transcript ----------
console.log("🔍 Checking environment...");
console.log("API Key present:", !!process.env.OPENAI_API_KEY2);
console.log(
  "API Key prefix:",
  process.env.OPENAI_API_KEY2?.substring(0, 10) + "..."
);
console.log("Current working directory:", root);
console.log("Looking for transcript at:", transcriptPath);

if (!fs.existsSync(transcriptPath)) {
  console.error("❌ Transcript not found:", transcriptPath);
  process.exit(1);
}

const transcript = fs.readFileSync(transcriptPath, "utf8").trim();
if (!transcript) {
  console.error("❌ Transcript is empty:", transcriptPath);
  process.exit(1);
}

console.log("✅ Transcript loaded, length:", transcript.length, "characters");

// ---------- 4️⃣ JSON Schema for LLM ----------
const flowJsonSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  additionalProperties: false,
  required: ["start", "nodes", "edges"],
  properties: {
    start: { type: "string" },
    nodes: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["id", "kind"],
        properties: {
          id: { type: "string" },
          kind: { type: "string", enum: ["page", "decision", "action"] },
          title: { type: "string" },
          data: { type: "object", additionalProperties: true },
        },
      },
    },
    edges: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["from", "to"],
        properties: {
          from: { type: "string" },
          to: { type: "string" },
          when: { type: "string" },
        },
      },
    },
  },
};

// ---------- 5️⃣ OpenAI client ----------
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });

// ---------- 6️⃣ Helper to extract JSON ----------
function extractJsonFromResponse(text) {
  const jsonBlockRegex = /```(?:json)?\s*([\s\S]*?)\s*```/i;
  const match = text.match(jsonBlockRegex);
  if (match) return match[1].trim();

  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    return text.substring(jsonStart, jsonEnd + 1);
  }
  return text.trim();
}

// ---------- 7️⃣ Prompt ----------
const system = `You are a product designer assistant.
Convert user transcripts to a structured app flow in JSON.

CRITICAL: Return ONLY valid JSON that matches this schema. Do not wrap in markdown code blocks or add any explanatory text.

JSON Schema:
${JSON.stringify(flowJsonSchema, null, 2)}
`;

const user = `Transcript:
"""
${transcript}
"""
Convert this to JSON following the exact schema provided. Return only the JSON object.`;

// ---------- 8️⃣ Call OpenAI ----------
async function main() {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4.1", // choose any GPT-4/4.1 model you prefer
      max_tokens: 1500,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    });

    const raw = response.choices[0].message.content;
    console.log("Raw LLM output:\n", raw);
    console.log("\n" + "=".repeat(50) + "\n");

    const extractedJson = extractJsonFromResponse(raw);
    console.log("Extracted JSON:\n", extractedJson);
    console.log("\n" + "=".repeat(50) + "\n");

    let flow;
    try {
      flow = JSON.parse(extractedJson);
    } catch {
      console.warn("⚠️ JSON.parse failed, trying jsonrepair...");
      const repaired = jsonrepair(extractedJson);
      flow = JSON.parse(repaired);
      console.log("🛠️ JSON successfully repaired with jsonrepair");
    }

    const parsed = flowSchema.parse(flow);

    fs.writeFileSync(flowPath, JSON.stringify(parsed, null, 2), "utf8");
    console.log("✅ flow.json written:", flowPath);

    console.log(`\n📊 Flow Summary:`);
    console.log(`- Start node: ${parsed.start}`);
    console.log(`- Total nodes: ${parsed.nodes.length}`);
    console.log(`- Total edges: ${parsed.edges.length}`);
    console.log(
      `- Node types: ${[...new Set(parsed.nodes.map((n) => n.kind))].join(
        ", "
      )}`
    );
  } catch (err) {
    if (err.name === "ZodError") {
      console.error("❌ Validation failed:");
      err.errors.forEach((e) =>
        console.error(`  - ${e.path.join(".")}: ${e.message}`)
      );
    } else {
      console.error("Error calling OpenAI API:", err);
    }
    process.exit(1);
  }
}

main();
