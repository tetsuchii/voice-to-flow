import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { execSync } from "child_process";
import "dotenv/config";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });

// ---------- 1️⃣ Paths ----------
const specPath = path.resolve("./data/uiSpec.json");
const promptPath = path.resolve("./data/openaiRequirements.txt");

// ---------- 2️⃣ Expected dependencies ----------
const REQUIRED_DEPS = [
  "react",
  "react-dom",
  "react-router-dom",
  "@mui/material",
  "@mui/icons-material",
];

// ---------- 3️⃣ Check & install dependencies ----------
function checkAndInstallDependencies(cwd) {
  console.log("🔍 Checking/installing dependencies...");

  try {
    execSync(`npm install`, { stdio: "inherit", cwd });
  } catch (err) {
    console.error("❌ Failed to install dependencies:", err);
    process.exit(1);
  }
}

// ---------- 4️⃣ Load spec ----------
if (!fs.existsSync(specPath) || !fs.existsSync(promptPath)) {
  console.error("❌ Missing uiSpec.json or openaiRequirements.txt");
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
let systemPrompt = fs.readFileSync(promptPath, "utf8");
systemPrompt = systemPrompt.replace("{{SPEC_JSON}}", JSON.stringify(spec));

// ---------- 5️⃣ Extract project name ----------
const nameMatch = systemPrompt.match(/^PROJECT_NAME:\s*(.+)$/m);
if (!nameMatch) {
  console.error("❌ PROJECT_NAME not found in openaiRequirements.txt");
  process.exit(1);
}
let projectName = nameMatch[1].trim().replace(/[^a-z0-9-_]/gi, "_");

// ---------- 6️⃣ Create unique project folder ----------
const generatedRoot = path.resolve("./generated");
if (!fs.existsSync(generatedRoot)) fs.mkdirSync(generatedRoot);

let finalName = projectName;
let counter = 1;
while (fs.existsSync(path.join(generatedRoot, finalName))) {
  finalName = `${projectName}_${counter++}`;
}

const projectDir = path.join(generatedRoot, finalName);
const srcDir = path.join(projectDir, "src");
const publicDir = path.join(projectDir, "public");
fs.mkdirSync(srcDir, { recursive: true });
fs.mkdirSync(publicDir, { recursive: true });

console.log("📂 Project folder:", projectDir);

// ---------- 7️⃣ Create index.html ----------
fs.writeFileSync(
  path.join(publicDir, "index.html"),
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`
);

// ---------- 8️⃣ Create package.json ----------
fs.writeFileSync(
  path.join(projectDir, "package.json"),
  JSON.stringify(
    {
      name: finalName.toLowerCase(),
      version: "0.1.0",
      private: true,
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
      },
      dependencies: REQUIRED_DEPS.reduce((acc, dep) => {
        acc[dep] = "latest";
        return acc;
      }, {}),
      devDependencies: {
        vite: "^5.0.0",
        "@vitejs/plugin-react": "^4.0.0",
      },
    },
    null,
    2
  )
);

// ---------- 9️⃣ Create vite.config.js ----------
fs.writeFileSync(
  path.join(projectDir, "vite.config.js"),
  `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
});`
);

// ---------- 🔹 Save AI-generated files ----------
function splitAndSaveFiles(rawContent, baseDir) {
  const regex = /### `([^`]+)`\n```[a-z]*\n([\s\S]*?)```/g;
  let match;
  let fileCount = 0;

  while ((match = regex.exec(rawContent)) !== null) {
    let relPath = match[1];

    // ✅ Remove a leading "src/" if it exists
    relPath = relPath.replace(/^src[\\/]/, "");

    // (Optional) Also strip "public/" if you ever want to keep those in publicDir separately
    // relPath = relPath.replace(/^public[\\/]/, "");

    const filePath = path.join(baseDir, relPath);
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, match[2], "utf8");
    console.log("📄 Saved:", filePath);
    fileCount++;
  }

  if (fileCount === 0) {
    console.warn("⚠️ No files detected. Saving raw output.");
    fs.writeFileSync(path.join(baseDir, "GeneratedReact_raw.txt"), rawContent);
  }
}

// ---------- 🔹 Verify pages ----------
function verifyPages(spec, srcDir) {
  const missingPages = [];
  spec.pages.forEach((page) => {
    const fileName = `${page.id}.jsx`;
    const filePath = path.join(srcDir, "pages", fileName);
    if (!fs.existsSync(filePath)) missingPages.push(page.id);
  });

  if (missingPages.length > 0) {
    console.warn("⚠️ Missing page components:", missingPages.join(", "));
  } else {
    console.log("✅ All pages exist.");
  }

  return missingPages;
}

// ---------- 🔹 Generate React app ----------
async function generateReact() {
  try {
    console.log("🤖 Sending initial prompt to OpenAI...");
    let prompt = systemPrompt;

    // First, generate the whole app
    const response = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: "Generate the React app code now." },
      ],
      max_tokens: 5000,
    });

    const rawCode = response.choices[0].message.content;
    splitAndSaveFiles(rawCode, srcDir);

    // ✅ Keep regenerating until no pages are missing
    let missingPages = verifyPages(spec, srcDir);
    while (missingPages.length > 0) {
      console.log(`🔄 Missing pages detected: ${missingPages.join(", ")}`);
      console.log("🤖 Asking OpenAI to generate only the missing pages...");

      const followUp = await client.chat.completions.create({
        model: "gpt-4.1",
        messages: [
          {
            role: "system",
            content:
              systemPrompt +
              `\n\nGenerate ONLY the following pages: ${missingPages.join(
                ", "
              )}. Do not regenerate existing files.`,
          },
          {
            role: "user",
            content: "Provide only the missing page components.",
          },
        ],
        max_tokens: 5000,
      });

      const followUpCode = followUp.choices[0].message.content;
      splitAndSaveFiles(followUpCode, srcDir);

      // Re-check after saving
      missingPages = verifyPages(spec, srcDir);
    }

    console.log("✅ React app fully generated!");
    console.log(`📌 Run:\ncd generated/${finalName}\nnpm install\nnpm run dev`);

    // Install dependencies only once, after all pages exist
    checkAndInstallDependencies(projectDir);
  } catch (err) {
    console.error("❌ Error generating React app:", err);
  }
}

// ---------- 10️⃣ Update root index.html (optional if needed) ----------
const rootHtmlPath = path.resolve("./index.html");
if (fs.existsSync(rootHtmlPath)) {
  let html = fs.readFileSync(rootHtmlPath, "utf8");
  html = html.replace(
    /src="\/generated\/[^"]+\/src\/main\.jsx"/,
    `src="/generated/${finalName}/src/main.jsx"`
  );
  fs.writeFileSync(rootHtmlPath, html);
}

// ---------- 11️⃣ Start generation ----------
generateReact();
