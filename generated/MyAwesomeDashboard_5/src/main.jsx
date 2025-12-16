import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/home.jsx';
import Onboarding from './pages/onboarding.jsx';
import GetRecipe from './pages/get-recipe.jsx';
import IngredientInventory from './pages/ingredient-inventory.jsx';
import MealPlanner from './pages/meal-planner.jsx';
import ShoppingList from './pages/shopping-list.jsx';
import SavedRecipes from './pages/saved-recipes.jsx';
import RecipeDetails from './pages/recipe-details.jsx';
import Profile from './pages/profile.jsx';
import ReminderAction from './pages/reminder-action.jsx';
import SocialSharing from './pages/social-sharing.jsx';
import Navbar from './components/Navbar.jsx';

const theme = createTheme({
  palette: {
    primary: { main: '#8BC34A' },
    secondary: { main: '#FF7043' },
    background: { default: '#f8fafc' }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/get-recipe" element={<GetRecipe />} />
          <Route path="/ingredient-inventory" element={<IngredientInventory />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/saved-recipes" element={<SavedRecipes />} />
          <Route path="/recipe-details/:id?" element={<RecipeDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reminder-action" element={<ReminderAction />} />
          <Route path="/social-sharing" element={<SocialSharing />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
