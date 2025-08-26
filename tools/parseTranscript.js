import fs from "node:fs";
import { Flow } from "../schemas/flowSchema.js";

/**
 * Super-naive parser for demo purposes.
 * Rules:
 * - lines mentioning "login" => login page
 * - "wrong/incorrect" => error page
 * - "dashboard" => dashboard page
 * - "reset password" => reset page
 */
export function parseTranscriptToFlow(txt) {
  const lower = txt.toLowerCase();
  const nodes = [];
  const edges = [];

  // Detect pages
  if (lower.includes("login"))
    nodes.push({ id: "login", kind: "page", title: "Login" });
  if (lower.includes("dashboard"))
    nodes.push({ id: "dashboard", kind: "page", title: "Dashboard" });
  if (lower.includes("reset password"))
    nodes.push({ id: "reset", kind: "page", title: "Reset Password" });
  if (lower.match(/\b(wrong|incorrect|error)\b/))
    nodes.push({ id: "error", kind: "page", title: "Error" });

  // Minimal edges
  if (
    nodes.find((n) => n.id === "login") &&
    nodes.find((n) => n.id === "dashboard")
  )
    edges.push({ from: "login", to: "dashboard", when: "success" });

  if (
    nodes.find((n) => n.id === "login") &&
    nodes.find((n) => n.id === "error")
  )
    edges.push({ from: "login", to: "error", when: "failure" });

  if (
    nodes.find((n) => n.id === "error") &&
    nodes.find((n) => n.id === "login")
  )
    edges.push({ from: "error", to: "login", when: "retry" });

  const start = nodes[0]?.id ?? "login";
  const flow = { start, nodes, edges };
  // Validate
  Flow.parse(flow);
  return flow;
}

if (process.argv[1].includes("parseTranscript.js")) {
  const txt = fs.readFileSync("./data/login_scenario.txt", "utf8");
  const flow = parseTranscriptToFlow(txt);
  fs.writeFileSync("./data/flow.json", JSON.stringify(flow, null, 2));
  console.log("Flow written to ./data/flow.json");
  console.log("Flow content:", flow);
}
console.log("Flow parser module loaded");
