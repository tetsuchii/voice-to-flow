import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Logic to handle "first time user or settings reset" can be inserted here
      navigate('/get-recipe');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 9 }}>
      <Paper elevation={3} sx={{ px: 5, py: 5, borderRadius: 3, bgcolor: '#fff', minWidth: 350, maxWidth: '92vw' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom align="center" sx={{ mb: 2 }}>
          Welcome to MyAwesomeDashboard
        </Typography>
        <Typography variant="body1" gutterBottom align="center" color="text.secondary">
          Find new recipes, manage your kitchen, and plan delicious meals.
        </Typography>
        <form onSubmit={handleSearch}>
          <TextField
            fullWidth
            label="Search"
            placeholder="Enter search term..."
            variant="outlined"
            value={query}
            onChange={e => setQuery(e.target.value)}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              )
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
            disabled={!query.trim()}
          >
            Search
          </Button>
        </form>
      </Paper>
      <Box sx={{ display: 'flex', gap: 3, mt: 6 }}>
        <Button size="large" color="secondary" variant="outlined" onClick={() => navigate('/meal-planner')}>
          Meal Planner
        </Button>
        <Button size="large" color="primary" variant="outlined" onClick={() => navigate('/ingredient-inventory')}>
          My Inventory
        </Button>
        <Button size="large" color="secondary" variant="text" onClick={() => navigate('/saved-recipes')}>
          Saved Recipes
        </Button>
      </Box>
    </Box>
  );
}
