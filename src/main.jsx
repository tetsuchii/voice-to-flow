import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import DashboardPage from "./pages/dashboard.jsx";
import ResetPage from "./pages/reset.jsx";
import ErrorPage from "./pages/error.jsx";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/reset" element={<ResetPage/>} />
          <Route path="/error" element={<ErrorPage/>} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")).render(<App/>);