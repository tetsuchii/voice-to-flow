import fs from "node:fs";
import path from "node:path";

const appDir = "./src";

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function pageTemplate(page) {
  const { id, ui } = page;
  if (ui.type === "form") {
    const fields = ui.fields
      .map((f) => {
        const type =
          f.type === "password"
            ? 'type="password"'
            : f.type === "email"
            ? 'type="email"'
            : "";
        return `<TextField label="${f.label}" name="${f.name}" fullWidth margin="normal" ${type} />`;
      })
      .join("\n        ");
    const action = ui.actions?.[0];
    const nav = action?.routeOn === "success" ? `navigate("/dashboard");` : "";
    return `
import { Card, CardContent, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ${id[0].toUpperCase() + id.slice(1)}Page(){
  const navigate = useNavigate();
  return (
    <Card className="p-6" style={{maxWidth:420, margin:"64px auto"}}>
      <CardContent>
        <Typography variant="h5" gutterBottom>${id.toUpperCase()}</Typography>
        <form onSubmit={(e)=>{e.preventDefault(); ${nav}}}>
          ${fields}
          <Button variant="contained" type="submit" fullWidth>${
            action?.label ?? "Submit"
          }</Button>
        </form>
      </CardContent>
    </Card>
  )
}
`.trim();
  }

  if (ui.type === "dashboard") {
    return `
import { AppBar, Toolbar, Typography, Container, Card, CardContent } from "@mui/material";
export default function DashboardPage(){
  return (
    <>
      <AppBar position="static"><Toolbar><Typography variant="h6">Dashboard</Typography></Toolbar></AppBar>
      <Container style={{marginTop:24}}>
        <Card><CardContent><Typography variant="h5">Welcome</Typography></CardContent></Card>
      </Container>
    </>
  )
}
`.trim();
  }

  if (ui.type === "message") {
    return `
import { Alert, Container } from "@mui/material";
export default function ${id[0].toUpperCase() + id.slice(1)}Page(){
  return (
    <Container style={{marginTop:48}}>
      <Alert severity="${ui.severity ?? "info"}">${ui.text ?? ""}</Alert>
    </Container>
  )
}
`.trim();
  }

  return `
export default function ${id[0].toUpperCase() + id.slice(1)}Page(){
  return <div style={{padding:24}}>${id}</div>
}
`.trim();
}

function main() {
  const spec = JSON.parse(fs.readFileSync("./data/uiSpec.json", "utf8"));

  ensureDir(appDir + "/pages");
  // Generate pages
  for (const p of spec.pages) {
    const file = path.join(appDir, "pages", `${p.id}.jsx`);
    fs.writeFileSync(file, pageTemplate(p));
  }

  // Generate router
  const imports = spec.pages
    .map(
      (p) =>
        `import ${p.id[0].toUpperCase() + p.id.slice(1)}Page from "./pages/${
          p.id
        }.jsx";`
    )
    .join("\n");

  const routes = spec.pages
    .map(
      (p) =>
        `<Route path="/${p.id === spec.start ? "" : p.id}" element={<${
          p.id[0].toUpperCase() + p.id.slice(1)
        }Page/>} />`
    )
    .join("\n          ");

  const main = `
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
${imports}

function App(){
  return (
    <BrowserRouter>
      <Routes>
        ${routes}
        <Route path="*" element={<Navigate to="/${
          spec.start === "login" ? "" : spec.start
        }" replace/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")).render(<App/>);
`.trim();

  fs.writeFileSync("./src/main.jsx", main);
  console.log("React app generated in ./src");
}

main();
