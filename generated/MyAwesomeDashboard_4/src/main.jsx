import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from './components/AppBar';
import HomeDashboardWidget from './pages/HomeDashboardWidget';
import OnboardingLearn from './pages/OnboardingLearn';
import OnboardingEarn from './pages/OnboardingEarn';
import OnboardingRedeem from './pages/OnboardingRedeem';
import BankSSOLink from './pages/BankSSOLink';
import EnlightDashboard from './pages/EnlightDashboard';
import MissionsList from './pages/missions-list';
import MissionDetail from './pages/mission-detail';
import MissionProgress from './pages/mission-progress';
import MissionComplete from './pages/mission-complete';
import QuizzesList from './pages/quizzes-list';
import QuizIntro from './pages/quiz-intro';
import QuizQuestion from './pages/quiz-question';
import QuizComplete from './pages/quiz-complete';
import RewardsCatalog from './pages/rewards-catalog';
import Notifications from './pages/Notifications';
import ProfileBadges from './pages/profile-badges';
import Settings from './pages/Settings';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#FFB400" },
    background: { default: "#f6f8fa" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Navigate to="/widget" />} />
          <Route path="/widget" element={<HomeDashboardWidget />} />
          <Route path="/onboarding-learn" element={<OnboardingLearn />} />
          <Route path="/onboarding-earn" element={<OnboardingEarn />} />
          <Route path="/onboarding-redeem" element={<OnboardingRedeem />} />
          <Route path="/bank-sso-link" element={<BankSSOLink />} />
          <Route path="/dashboard" element={<EnlightDashboard />} />
          <Route path="/missions-list" element={<MissionsList />} />
          <Route path="/mission-detail" element={<MissionDetail />} />
          <Route path="/mission-progress" element={<MissionProgress />} />
          <Route path="/mission-complete" element={<MissionComplete />} />
          <Route path="/quizzes-list" element={<QuizzesList />} />
          <Route path="/quiz-intro" element={<QuizIntro />} />
          <Route path="/quiz-question" element={<QuizQuestion />} />
          <Route path="/quiz-complete" element={<QuizComplete />} />
          <Route path="/rewards-catalog" element={<RewardsCatalog />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile-badges" element={<ProfileBadges />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/widget" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
