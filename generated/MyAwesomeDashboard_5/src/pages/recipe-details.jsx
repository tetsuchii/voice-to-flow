import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Button,
  Stack,
  Divider,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const demoRecipe = {
  title: 'Spicy Chickpea Bowl',
  image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
  tags: ['Vegetarian', 'High Protein', '30 min'],
  rating: 4.7,
  servings: 2,
  calories: 450,
  ingredients: [
    '1 can chickpeas, drained & rinsed',
    '1 tbsp olive oil',
    '1 tsp paprika',
    '4 cups spinach',
    '2 tbsp tahini',
    '1 lemon',
    'Salt & pepper'
  ],
  steps: [
    'Toss chickpeas with oil, paprika, salt & pepper. Roast 20 min.',
    'Sauté spinach until wilted.',
    'Whisk tahini with lemon juice and a splash of water for dressing.',
    'Assemble: spinach, chickpeas, top with tahini dressing.',
    'Serve immediately.'
  ],
  nutrition: {
    Protein: '18g',
    Carbs: '54g',
    Fat: '14g'
  }
};

export default function RecipeDetails() {
  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="back" sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Recipe Details
          </Typography>
        </Toolbar>
      </AppBar>

      <Box maxWidth={820} mx="auto" mt={3} px={2}>
        <Card elevation={3}>
          <CardMedia
            component="img"
            height="300"
            image={demoRecipe.image}
            alt="Spicy Chickpea Bowl"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">{demoRecipe.title}</Typography>
            <Stack direction="row" spacing={1} mb={2}>
              {demoRecipe.tags.map(tag => (
                <Chip key={tag} label={tag} size="small" color="secondary" />
              ))}
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Typography variant="body2" color="text.secondary">⭐ {demoRecipe.rating}</Typography>
              <Typography variant="body2">{demoRecipe.servings} servings</Typography>
              <Typography variant="body2">{demoRecipe.calories} kcal</Typography>
            </Stack>

            <Divider sx={{ my: 2 }}>Ingredients</Divider>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <ul style={{ paddingLeft: '1.1em', margin: 0 }}>
                  {demoRecipe.ingredients.map((ing, i) => (
                    <li key={i}>
                      <Typography variant="body1">{ing}</Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card variant="outlined" sx={{ mb: 1 }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Nutrition (per serving)
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      {Object.entries(demoRecipe.nutrition).map(([k, v]) => (
                        <Chip key={k} label={`${k}: ${v}`} color="primary" size="small" />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }}>Steps</Divider>
            <ol style={{ paddingLeft: '1.2em', margin: 0 }}>
              {demoRecipe.steps.map((step, i) => (
                <li key={i}>
                  <Typography variant="body1" sx={{ mb: 1 }}>{step}</Typography>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Info Card (from flow spec) */}
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Information</Typography>
            <Typography variant="body2" color="text.secondary">
              Detailed information will be displayed here.
            </Typography>
          </CardContent>
        </Card>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={4} mb={2} justifyContent="flex-end">
          <Button startIcon={<CalendarTodayIcon />} color="primary" variant="contained">
            Add to Calendar
          </Button>
          <Button startIcon={<FavoriteBorderIcon />} color="secondary" variant="outlined">
            Save to Favorites
          </Button>
          <Button startIcon={<RestaurantMenuIcon />} color="info" variant="outlined">
            Deduct Ingredients
          </Button>
          <Button startIcon={<ShareIcon />} color="primary" variant="text">
            Share
          </Button>
        </Stack>
      </Box>
    </>
  );
}
