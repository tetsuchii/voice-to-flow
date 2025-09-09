import fs from "node:fs";
import path from "path";
import OpenAI from "openai";
import { z } from "zod";
import "dotenv/config";
import { jsonrepair } from "jsonrepair";

// ---------- 1️⃣ Zod schemas for UI validation ----------
const fieldSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: z.string(),
  required: z.boolean().optional(),
  options: z.array(z.string()).optional(),
  placeholder: z.string().optional(),
});

const actionSchema = z.object({
  id: z.string(),
  label: z.string(),
  variant: z.enum(["contained", "outlined", "text"]).optional(),
  color: z
    .enum(["primary", "secondary", "success", "error", "warning", "info"])
    .optional(),
  routeOn: z.string().optional(),
  action: z.string().optional(),
});

const componentSchema = z.object({
  kind: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
  items: z.array(z.string()).optional(),
  columns: z
    .array(
      z.object({
        field: z.string(),
        headerName: z.string(),
        width: z.number().optional(),
      })
    )
    .optional(),
});

const uiNodeSchema = z.object({
  type: z.enum([
    "form",
    "dashboard",
    "message",
    "search",
    "detail",
    "list",
    "upload",
    "blank",
  ]),
  title: z.string(),
  description: z.string().optional(),
  fields: z.array(fieldSchema).optional(),
  actions: z.array(actionSchema).optional(),
  components: z.array(componentSchema).optional(),
  severity: z.enum(["success", "info", "warning", "error"]).optional(),
  text: z.string().optional(),
  layout: z
    .enum(["single-column", "two-column", "grid", "centered"])
    .optional(),
});

const pageSchema = z.object({
  id: z.string(),
  ui: uiNodeSchema,
});

const uiSpecSchema = z.object({
  start: z.string(),
  pages: z.array(pageSchema),
  routes: z.array(
    z.object({
      from: z.string(),
      to: z.string(),
      when: z.string().optional(),
    })
  ),
});

// ---------- 2️⃣ Anthropic client ----------
console.log(
  "OPENAI_API_KEY starts with:",
  process.env.OPENAI_API_KEY2?.slice(0, 10)
);

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });

// ---------- 3️⃣ System prompt (unchanged) ----------
const systemPrompt = `You are a UI/UX designer specializing in Material UI web applications.

Your task: Convert app flow nodes into detailed Material UI component specifications.

CRITICAL INSTRUCTIONS:
1. Always include essential website elements: AppBar (header), navigation, main content area, and footer
2. Use Material UI component names and properties accurately
3. Make every page feel like a complete, professional web application
4. Be creative and detailed - don't just create basic forms
5. Return ONLY valid JSON that matches the provided schema
...`;

// ---------- 4️⃣ Helper to extract JSON (unchanged) ----------
function extractJsonFromResponse(text) {
  const jsonBlockRegex = /```(?:json)?\s*([\s\S]*?)\s*```/i;
  const match = text.match(jsonBlockRegex);

  if (match) {
    return match[1].trim();
  }

  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");

  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    return text.substring(jsonStart, jsonEnd + 1);
  }

  return text.trim();
}

// ---------- 5️⃣ LLM-powered UI mapping ----------
export async function mapFlowToUISpec(flow) {
  console.log("🎨 Starting LLM-powered UI mapping...");

  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ OPENAI_API_KEY not found in environment");
    throw new Error("Missing API key");
  }

  const userPrompt = `Flow to convert to Material UI specification:

${JSON.stringify(flow, null, 2)}

Requirements:
1. Create a complete, professional web application UI spec
2. Every page should have proper navigation, header, and footer
3. Use Material UI components appropriately for each page type
4. Make the UI feel cohesive and user-friendly
5. Add realistic content and proper layouts

Return a JSON object with this exact structure:
{
  "start": "node_id",
  "pages": [...],
  "routes": ${JSON.stringify(flow.edges, null, 2)}
}`;

  try {
    console.log("📡 Calling OpenAI for UI generation...");

    const response = await client.chat.completions.create({
      model: "gpt-4.1", // or "gpt-4.1-mini" / "gpt-4o" depending on your needs
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 3000,
    });

    console.log("✅ API call successful");

    const raw = response.choices[0].message.content;
    console.log("📝 Raw response length:", raw.length);
    console.log("📝 Raw response preview:", raw.substring(0, 300) + "...");

    console.log("🔍 Extracting JSON from response...");
    const extractedJson = extractJsonFromResponse(raw);

    let uiSpec;
    try {
      // Try normal parse first
      uiSpec = JSON.parse(extractedJson);
      console.log("✅ JSON parsed successfully");
    } catch (err) {
      console.warn("⚠️ Raw JSON parse failed, attempting repair:", err.message);

      try {
        const repaired = jsonrepair(extractedJson);
        uiSpec = JSON.parse(repaired);
        console.log("✅ JSON repaired and parsed successfully");
      } catch (repairErr) {
        console.error("❌ Still failed after repair:", repairErr.message);
        throw repairErr;
      }
    }

    console.log("🔧 Validating UI specification...");
    const validatedSpec = uiSpecSchema.parse(uiSpec);
    console.log("✅ UI specification validated");

    return validatedSpec;
  } catch (err) {
    console.error("💥 Error in LLM UI mapping:", err.message);
    return createFallbackUISpec(flow);
  }
}

// ---------- 6️⃣ Fallback UI generator ----------
function createFallbackUISpec(flow) {
  console.log("🛠️ Creating fallback UI spec...");

  const pages = flow.nodes.map((node) => {
    let uiConfig = {
      type: "blank",
      title:
        node.title ||
        node.id.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      layout: "single-column",
    };

    // Basic type detection
    if (node.kind === "page") {
      if (node.id.includes("login") || node.id.includes("auth")) {
        uiConfig = {
          type: "form",
          title: "Login",
          layout: "centered",
          fields: [
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "password",
              label: "Password",
              type: "password",
              required: true,
            },
          ],
          actions: [
            {
              id: "loginBtn",
              label: "Log In",
              variant: "contained",
              color: "primary",
              action: "submit",
            },
          ],
        };
      } else if (node.id.includes("search") || node.id.includes("home")) {
        uiConfig = {
          type: "search",
          title: node.title || "Search",
          layout: "centered",
          fields: [
            {
              name: "searchQuery",
              label: "Search",
              type: "text",
              placeholder: "Enter search term...",
            },
          ],
          actions: [
            {
              id: "searchBtn",
              label: "Search",
              variant: "contained",
              color: "primary",
              action: "submit",
            },
          ],
        };
      } else if (node.id.includes("status") || node.id.includes("detail")) {
        uiConfig = {
          type: "detail",
          title: node.title || "Details",
          layout: "single-column",
          components: [
            {
              kind: "card",
              title: "Information",
              content: "Detailed information will be displayed here.",
            },
          ],
        };
      }
    } else if (node.kind === "decision") {
      uiConfig = {
        type: "message",
        title: "Processing",
        text: "Processing your request...",
        severity: "info",
        layout: "centered",
      };
    }

    return { id: node.id, ui: uiConfig };
  });

  return {
    start: flow.start,
    pages,
    routes: flow.edges,
  };
}

// ---------- 7️⃣ Main execution ----------
async function main() {
  try {
    console.log("🚀 Starting UI mapping process...");

    const flowPath = "./data/flow.json";
    const uiSpecPath = "./data/uiSpec.json";

    if (!fs.existsSync(flowPath)) {
      console.error("❌ Flow file not found:", flowPath);
      process.exit(1);
    }

    const flow = JSON.parse(fs.readFileSync(flowPath, "utf8"));
    console.log("📖 Loaded flow with", flow.nodes.length, "nodes");

    const spec = await mapFlowToUISpec(flow);

    // Ensure data directory exists
    const dataDir = path.dirname(uiSpecPath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(uiSpecPath, JSON.stringify(spec, null, 2));
    console.log("✅ UI spec written to", uiSpecPath);

    // Summary
    console.log("\n📊 UI Spec Summary:");
    console.log(`- Start page: ${spec.start}`);
    console.log(`- Total pages: ${spec.pages.length}`);
    console.log(
      `- Page types: ${[...new Set(spec.pages.map((p) => p.ui.type))].join(
        ", "
      )}`
    );
    console.log(`- Total routes: ${spec.routes.length}`);
  } catch (err) {
    console.error("💥 Error in main execution:", err);
    process.exit(1);
  }
}

main();
