import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Widget from './pages/widget.jsx';
import Onboarding_learn from './pages/onboarding_learn.jsx';
import Onboarding_earn from './pages/onboarding_earn.jsx';
import Onboarding_redeem from './pages/onboarding_redeem.jsx';
import Sso_link from './pages/sso_link.jsx';
import Dashboard from './pages/dashboard.jsx';
import Activity_choice from './pages/activity_choice.jsx';
import Mission_list from './pages/mission_list.jsx';
import Mission_detail from './pages/mission_detail.jsx';
import Mission_progress from './pages/mission_progress.jsx';
import Mission_completion from './pages/mission_completion.jsx';
import Quiz_selection from './pages/quiz_selection.jsx';
import Quiz_intro from './pages/quiz_intro.jsx';
import Quiz_question from './pages/quiz_question.jsx';
import Quiz_completion from './pages/quiz_completion.jsx';
import Rewards_catalog from './pages/rewards_catalog.jsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2a3eb1',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f4f7fa',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/widget" />} />
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
