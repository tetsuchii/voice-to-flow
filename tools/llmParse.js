// tools/llmParse.js
import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";

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
const transcriptPath = path.join(root, "data", "login_scenario.txt");
const flowPath = path.join(root, "data", "flow.json");

// ---------- 3️⃣ Check transcript ----------
if (!fs.existsSync(transcriptPath)) {
  console.error("Transcript not found:", transcriptPath);
  process.exit(1);
}

const transcript = fs.readFileSync(transcriptPath, "utf8").trim();
if (!transcript) {
  console.error("Transcript is empty:", transcriptPath);
  process.exit(1);
}

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

// ---------- 6️⃣ LLM prompt ----------
const system = `
You are a product designer assistant.
Convert user transcripts to a structured app flow in JSON.
Output ONLY JSON that strictly matches the provided JSON Schema:
${JSON.stringify(flowJsonSchema, null, 2)}
`;

const user = `Transcript:
"""
${transcript}
"""`;

// ---------- 7️⃣ Call Claude ----------
async function main() {
  try {
    const response = await client.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1000,
      system: system,
      messages: [{ role: "user", content: user }],
    });

    const raw = response.content[0].text;
    console.log("Raw LLM output:\n", raw);

    // ---------- 8️⃣ Parse + validate ----------
    let flow;
    try {
      flow = JSON.parse(raw);
    } catch (err) {
      console.error("Failed to parse JSON from LLM output:", err);
      process.exit(1);
    }

    const parsed = flowSchema.parse(flow);

    // ---------- 9️⃣ Write to flow.json ----------
    fs.writeFileSync(flowPath, JSON.stringify(parsed, null, 2), "utf8");
    console.log("✅ flow.json written:", flowPath);
  } catch (err) {
    console.error("Error calling Anthropic API:", err);
  }
}

main();
