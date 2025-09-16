import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Widget from "./pages/widget";
import Onboarding_learn from "./pages/onboarding_learn";
import Onboarding_earn from "./pages/onboarding_earn";
import Onboarding_redeem from "./pages/onboarding_redeem";
import Sso_link from "./pages/sso_link";
import Dashboard from "./pages/dashboard";
import Activity_choice from "./pages/activity_choice";
import Mission_list from "./pages/mission_list";
import Mission_detail from "./pages/mission_detail";
import Mission_progress from "./pages/mission_progress";
import Mission_completion from "./pages/mission_completion";
import Quiz_selection from "./pages/quiz_selection";
import Quiz_intro from "./pages/quiz_intro";
import Quiz_question from "./pages/quiz_question";
import Quiz_completion from "./pages/quiz_completion";
import Rewards_catalog from "./pages/rewards_catalog";
import AppLayout from "./AppLayout";

const theme = createTheme({
  palette: {
    primary: { main: "#283593" },
    secondary: { main: "#ffca28" },
    background: {
      default: "#f6f8fb",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/widget" replace />} />
            <Route path="/widget" element={<Widget />} />
            <Route path="/onboarding_learn" element={<Onboarding_learn />} />
            <Route path="/onboarding_earn" element={<Onboarding_earn />} />
            <Route path="/onboarding_redeem" element={<Onboarding_redeem />} />
            <Route path="/sso_link" element={<Sso_link />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activity_choice" element={<Activity_choice />} />
            <Route path="/mission_list" element={<Mission_list />} />
            <Route path="/mission_detail" element={<Mission_detail />} />
            <Route path="/mission_progress" element={<Mission_progress />} />
            <Route path="/mission_completion" element={<Mission_completion />} />
            <Route path="/quiz_selection" element={<Quiz_selection />} />
            <Route path="/quiz_intro" element={<Quiz_intro />} />
            <Route path="/quiz_question" element={<Quiz_question />} />
            <Route path="/quiz_completion" element={<Quiz_completion />} />
            <Route path="/rewards_catalog" element={<Rewards_catalog />} />
            <Route path="*" element={<Navigate to="/widget" replace />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
