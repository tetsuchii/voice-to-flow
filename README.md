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

