import fs from "fs";
import path from "path";
import OpenAI from "openai";
import "dotenv/config";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });

// ---------- 1️⃣ Paths ----------
const appDir = path.resolve("./src");
const specPath = path.resolve("./data/uiSpec.json");

// ---------- 2️⃣ Check JSON ----------
if (!fs.existsSync(specPath)) {
  console.error("❌ uiSpec.json not found at:", specPath);
  process.exit(1);
}
const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));

// ---------- 3️⃣ Prompt OpenAI ----------
const systemPrompt = `
You are a professional React developer.
Generate a full React app based on this flow JSON:
${JSON.stringify(spec)}

Requirements:
- React 18, React Router, Material UI
- main.jsx with routing
- Each page as a separate component (inside src/pages/)
- Add placeholder text, images, cards, lists, dashboards where appropriate
- Make it visually appealing and realistic
- Ready to run in Vite or CRA
- Return ONLY code blocks in this format:
  ### \`relative/path/to/file.jsx\`
  \`\`\`jsx
  // file content
  \`\`\`
- Do not include explanations or prose outside the code blocks.
`;

async function generateReactWithOpenAI() {
  try {
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

    // ---------- 4️⃣ Split and save files ----------
    splitAndSaveFiles(rawCode, appDir);

    console.log("✅ React app generated in:", appDir);
  } catch (err) {
    console.error("❌ Error calling OpenAI API:", err);
  }
}

function splitAndSaveFiles(rawContent, baseDir) {
  // Regex to capture blocks like:
  // ### `pages/Home.jsx`
  // ```jsx
  // ...code...
  // ```
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
    // Optionally: save whole raw output for debugging
    fs.writeFileSync(path.join(baseDir, "GeneratedReact_raw.txt"), rawContent);
  }
}

generateReactWithOpenAI();
