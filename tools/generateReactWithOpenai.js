import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { execSync } from "child_process";
import "dotenv/config";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });

// ---------- 1️⃣ Paths ----------
const appDir = path.resolve("./src");
const specPath = path.resolve("./data/uiSpec.json");
const promptPath = path.resolve("./data/openaiRequirements.txt");

// ---------- 2️⃣ Dependencies you expect ----------
const REQUIRED_DEPS = [
  "react",
  "react-dom",
  "react-router-dom",
  "@mui/material",
  "@mui/icons-material",
];

// Helper: check & install
function checkAndInstallDependencies() {
  console.log("🔍 Checking required dependencies...");

  const missing = REQUIRED_DEPS.filter((dep) => {
    try {
      require.resolve(dep);
      return false;
    } catch {
      return true;
    }
  });

  if (missing.length === 0) {
    console.log("✅ All dependencies already installed.");
    return;
  }

  console.log(`📦 Missing: ${missing.join(", ")}`);
  console.log("⬇️  Installing...");

  try {
    execSync(`npm install ${missing.join(" ")}`, { stdio: "inherit" });
    console.log("✅ Dependencies installed.");
  } catch (err) {
    console.error("❌ Failed to install dependencies:", err);
    process.exit(1);
  }
}

// ---------- 3️⃣ Check JSON ----------
if (!fs.existsSync(specPath)) {
  console.error("❌ uiSpec.json not found at:", specPath);
  process.exit(1);
}
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

// ---------- 4️⃣ Prompt OpenAI ----------
let systemPrompt = fs.readFileSync(promptPath, "utf8");
systemPrompt = systemPrompt.replace("{{SPEC_JSON}}", JSON.stringify(spec));

async function generateReactWithOpenAI() {
  try {
    // Check dependencies first
    checkAndInstallDependencies();

    console.log("🤖 Sending prompt to OpenAI...");

    const response = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Generate the React app code now." },
      ],
      max_tokens: 5000,
    });

    const rawCode = response.choices[0].message.content;

    // ---------- 5️⃣ Split and save files ----------
    splitAndSaveFiles(rawCode, appDir);

    console.log("✅ React app generated in:", appDir);
  } catch (err) {
    console.error("❌ Error calling OpenAI API:", err);
  }
}

function splitAndSaveFiles(rawContent, baseDir) {
  const fileRegex = /### `([^`]+)`\n```[a-z]*\n([\s\S]*?)```/g;
  let match;
  let fileCount = 0;

  while ((match = fileRegex.exec(rawContent)) !== null) {
    const relativePath = match[1];
    const code = match[2];

    const filePath = path.join(baseDir, relativePath);
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, code, "utf8");
    console.log("📄 Saved:", filePath);
    fileCount++;
  }

  if (fileCount === 0) {
    console.warn(
      "⚠️ No files were detected in the output. Check model formatting."
    );
    fs.writeFileSync(path.join(baseDir, "GeneratedReact_raw.txt"), rawContent);
  }
}

generateReactWithOpenAI();
