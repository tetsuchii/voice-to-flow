import Anthropic from "@anthropic-ai/sdk";
import "dotenv/config"; // if you use a .env file

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function test() {
  try {
    const response = await client.messages.create({
      model: "claude-opus-4-20250514",
      max_tokens: 200,
      system: "You are a helpful assistant.",
      messages: [{ role: "user", content: "Say hello in a friendly way." }],
    });

    console.log("Claude response:\n", response.content[0].text);
  } catch (err) {
    console.error("Error calling Claude API:", err);
  }
}

test();
