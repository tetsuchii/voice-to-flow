import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme';
import AppBarLayout from './components/AppBarLayout';

// Import all pages
import Widget from './pages/widget';
import OnboardingLearn from './pages/onboarding_learn';
import OnboardingEarn from './pages/onboarding_earn';
import OnboardingRedeem from './pages/onboarding_redeem';
import SsoLink from './pages/sso_link';
import Dashboard from './pages/dashboard';
import ActivityChoice from './pages/activity_choice';
import MissionList from './pages/mission_list';
import MissionDetail from './pages/mission_detail';
import MissionProgress from './pages/mission_progress';
import MissionCompletion from './pages/mission_completion';
import QuizSelection from './pages/quiz_selection';
import QuizIntro from './pages/quiz_intro';
import QuizQuestion from './pages/quiz_question';
import QuizCompletion from './pages/quiz_completion';
import RewardsCatalog from './pages/rewards_catalog';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBarLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/widget" />} />
            <Route path="/widget" element={<Widget />} />
            <Route path="/onboarding_learn" element={<OnboardingLearn />} />
            <Route path="/onboarding_earn" element={<OnboardingEarn />} />
            <Route path="/onboarding_redeem" element={<OnboardingRedeem />} />
            <Route path="/sso_link" element={<SsoLink />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activity_choice" element={<ActivityChoice />} />
            <Route path="/mission_list" element={<MissionList />} />
            <Route path="/mission_detail" element={<MissionDetail />} />
            <Route path="/mission_progress" element={<MissionProgress />} />
            <Route path="/mission_completion" element={<MissionCompletion />} />
            <Route path="/quiz_selection" element={<QuizSelection />} />
            <Route path="/quiz_intro" element={<QuizIntro />} />
            <Route path="/quiz_question" element={<QuizQuestion />} />
            <Route path="/quiz_completion" element={<QuizCompletion />} />
            <Route path="/rewards_catalog" element={<RewardsCatalog />} />
            <Route path="*" element={<Navigate to="/widget" />} />
          </Routes>
        </AppBarLayout>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
