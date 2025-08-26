import fs from "node:fs";

/**
 * Map flow nodes to UI screens/components for Material UI.
 * You can expand this table to cover more patterns.
 */
const library = {
  login: {
    type: "form",
    fields: [
      { name: "email", label: "Email", type: "email" },
      { name: "password", label: "Password", type: "password" },
    ],
    actions: [
      { id: "loginBtn", label: "Log in", routeOn: "success" },
      { id: "forgot", label: "Forgot Password?" },
    ],
  },
  dashboard: {
    type: "dashboard",
    widgets: [
      { kind: "stat", title: "Welcome" },
      { kind: "list", title: "Recent Items" },
    ],
  },
  error: {
    type: "message",
    severity: "error",
    text: "Incorrect credentials. Try again.",
  },
  reset: {
    type: "form",
    fields: [{ name: "email", label: "Email", type: "email" }],
    actions: [{ id: "resetBtn", label: "Send reset link", routeOn: "success" }],
  },
};

export function mapFlowToUISpec(flow) {
  return {
    start: flow.start,
    pages: flow.nodes.map((n) => ({
      id: n.id,
      ui: library[n.id] ?? { type: "blank", title: n.title ?? n.id },
    })),
    routes: flow.edges,
  };
}

if (process.argv[1].includes("mapToUISpec.js")) {
  const flow = JSON.parse(fs.readFileSync("./data/flow.json", "utf8"));
  const spec = mapFlowToUISpec(flow);
  fs.writeFileSync("./data/uiSpec.json", JSON.stringify(spec, null, 2));
  console.log("UI spec written to ./data/uiSpec.json");
  console.log("UI Spec content:", spec);
}
