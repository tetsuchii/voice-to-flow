# Voice-to-Flow: Automated Process Recognition Pipeline

A prototype tool that converts **spoken or written process descriptions** into a structured **flow** and eventually into **UI/code**.  
Think of it as going from **user transcript → flow diagram → UI → code**, powered by **Anthropic’s Claude AI**.

---

## 🛠 Features

- Converts plain-language transcripts into a **structured JSON flow**.
- Generates **nodes** (pages, decisions, actions) and **edges** between them.
- Validates output against a **strict JSON schema** using Zod.
- Ready to be extended to **UI prototyping** or **code generation**.

---

## ⚡ Demo Pipeline

1. **Input:** User transcript describing an app scenario.
2. **LLM processing:** Claude AI converts it to structured JSON matching the schema.
3. **Validation:** JSON is validated using Zod.
4. **Output:** `flow.json` file representing the app flow.
5. **Next step (future):** Convert JSON flow to UI components and code.

---

## 🗂 Project Structure

voice-to-flow/
├─ data/
│ ├─ login_scenario.txt # Example transcript
│ └─ flow.json # Generated JSON flow
├─ tools/
│ └─ llmParse.js # Main processing script
├─ .gitignore
├─ package.json
└─ README.md

---

## ⚙️ Getting Started

1. Clone the repo:

```bash
git clone https://github.com/YOUR-USERNAME/voice-to-flow.git
cd voice-to-flow 
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file

```bash
ANTHROPIC_API_KEY=your-key-here
```

4. Run the processing script

```bash
node tools/llmParse.js
```

5. Check the generated JSON

After running the script, you can find the generated app flow here:

```bash
data/flow.json
```

## 🔮 Future Work

- Convert JSON flow into **interactive UI prototypes**.
- Generate **front-end code** automatically.
- Add **voice input support** via microphone.
- Improve **error handling** and cleanup of AI output if extra text appears.

---

## 💡 Tech Stack

- **Node.js**
- **Anthropic Claude API**
- **Zod** for schema validation
- **JSON Schema** for structured flow output

---