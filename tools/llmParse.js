// tools/llmParse.js
import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";
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
const root = process.cwd(); // project root
const transcriptPath = path.join(root, "data", "message.txt");
const flowPath = path.join(root, "data", "flow.json");

// ---------- 3️⃣ Check transcript ----------
console.log("🔍 Checking environment...");
console.log("API Key present:", !!process.env.ANTHROPIC_API_KEY);
console.log(
  "API Key prefix:",
  process.env.ANTHROPIC_API_KEY?.substring(0, 10) + "..."
);
console.log("Current working directory:", root);
console.log("Looking for transcript at:", transcriptPath);

if (!fs.existsSync(transcriptPath)) {
  console.error("❌ Transcript not found:", transcriptPath);
  console.log("📁 Files in data directory:");
  const dataDir = path.join(root, "data");
  if (fs.existsSync(dataDir)) {
    fs.readdirSync(dataDir).forEach((file) => {
      console.log("  -", file);
    });
  } else {
    console.log("❌ Data directory doesn't exist:", dataDir);
  }
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
        required: ["id", "kind"], // ✅ align with Zod (title/data optional)
        properties: {
          id: { type: "string" },
          kind: { type: "string", enum: ["page", "decision", "action"] },
          title: { type: "string" },
          data: {
            type: "object",
            additionalProperties: true,
          },
        },
      },
    },
    edges: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["from", "to"], // ✅ align with Zod (when optional)
        properties: {
          from: { type: "string" },
          to: { type: "string" },
          when: { type: "string" },
        },
      },
    },
  },
};

// ---------- 5️⃣ Anthropic client ----------
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ---------- 6️⃣ Helper function to extract JSON from markdown ----------
function extractJsonFromResponse(text) {
  // Try to find JSON within markdown code blocks
  const jsonBlockRegex = /```(?:json)?\s*([\s\S]*?)\s*```/i;
  const match = text.match(jsonBlockRegex);

  if (match) {
    return match[1].trim();
  }

  // If no code blocks, try to find JSON-like content
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");

  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    return text.substring(jsonStart, jsonEnd + 1);
  }

  // Return original text if no patterns found
  return text.trim();
}

// ---------- 7️⃣ LLM prompt ----------
const system = `You are a product designer assistant.
Convert user transcripts to a structured app flow in JSON.

CRITICAL: Return ONLY valid JSON that matches this schema. Do not wrap in markdown code blocks or add any explanatory text.

JSON Schema:
${JSON.stringify(flowJsonSchema, null, 2)}

Examples of node types:
- "page": A screen/view (login page, dashboard, etc.)
- "decision": A user choice point (success/error, yes/no)  
- "action": A system action (validate, save, redirect)

Return only the JSON object, nothing else.`;

const user = `Transcript:
"""
${transcript}
"""

Convert this to JSON following the exact schema provided. Return only the JSON object.`;

// ---------- 8️⃣ Call Claude ----------
async function main() {
  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514", // Fixed model name
      max_tokens: 1500,
      system: system,
      messages: [{ role: "user", content: user }],
    });

    const raw = response.content[0].text;
    console.log("Raw LLM output:\n", raw);
    console.log("\n" + "=".repeat(50) + "\n");

    // ---------- 9️⃣ Extract and parse JSON ----------
    const extractedJson = extractJsonFromResponse(raw);
    console.log("Extracted JSON:\n", extractedJson);
    console.log("\n" + "=".repeat(50) + "\n");

    let flow;
    try {
      flow = JSON.parse(extractedJson);
    } catch (err) {
      console.warn("⚠️ JSON.parse failed, trying jsonrepair...");
      try {
        const repaired = jsonrepair(extractedJson);
        flow = JSON.parse(repaired);
        console.log("🛠️ JSON successfully repaired with jsonrepair");
      } catch (repairErr) {
        console.error("❌ Failed to repair JSON with jsonrepair:", repairErr);
        console.error("Original invalid JSON:\n", extractedJson);
        process.exit(1);
      }
    }

    // ---------- 10️⃣ Validate with Zod ----------
    const parsed = flowSchema.parse(flow);

    // ---------- 11️⃣ Write to flow.json ----------
    fs.writeFileSync(flowPath, JSON.stringify(parsed, null, 2), "utf8");
    console.log("✅ flow.json written:", flowPath);

    // ---------- 12️⃣ Show summary ----------
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
      console.error("Error calling Anthropic API:", err);
    }
    process.exit(1);
  }
}

main();
