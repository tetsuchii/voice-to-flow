import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Widget from "./pages/Widget";
import OnboardingLearn from "./pages/OnboardingLearn";
import OnboardingEarn from "./pages/OnboardingEarn";
import OnboardingRedeem from "./pages/OnboardingRedeem";
import SSOLink from "./pages/SSOLink";
import Dashboard from "./pages/Dashboard";
import ActivityChoice from "./pages/ActivityChoice";
import MissionList from "./pages/MissionList";
import MissionDetail from "./pages/MissionDetail";
import MissionProgress from "./pages/MissionProgress";
import MissionCompletion from "./pages/MissionCompletion";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#0ab59a" },
    background: {
      default: "#f4f8fb",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: "0 2px 10px rgba(60,60,100,0.1)",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/widget" replace />} />
          <Route path="/widget" element={<Widget />} />
          <Route path="/onboarding/learn" element={<OnboardingLearn />} />
          <Route path="/onboarding/earn" element={<OnboardingEarn />} />
          <Route path="/onboarding/redeem" element={<OnboardingRedeem />} />
          <Route path="/sso-link" element={<SSOLink />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity-choice" element={<ActivityChoice />} />
          <Route path="/missions" element={<MissionList />} />
          <Route path="/missions/:id" element={<MissionDetail />} />
          <Route path="/missions/:id/progress" element={<MissionProgress />} />
          <Route path="/missions/:id/completion" element={<MissionCompletion />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
