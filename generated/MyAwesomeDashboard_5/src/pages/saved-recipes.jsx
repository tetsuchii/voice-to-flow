import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  Chip
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarIcon from '@mui/icons-material/Star';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShareIcon from '@mui/icons-material/Share';

const demoRecipes = [
  {
    id: 1,
    title: 'Spicy Chickpea Bowl',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    rating: 4.7,
    tags: ['Vegetarian', '30 min']
  },
  {
    id: 2,
    title: 'Classic Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    tags: ['Pizza', 'Italian', '1 hr']
  },
  {
    id: 3,
    title: 'Summer Berry Salad',
    image: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    tags: ['Salad', 'Healthy', '15 min']
  }
];

export default function SavedRecipes() {
  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <BookmarkIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6" color="inherit">
            Saved Recipes
          </Typography>
        </Toolbar>
      </AppBar>
      <Box maxWidth={1100} mx="auto" mt={3} px={2}>
        <Grid container spacing={3}>
          {demoRecipes.map(recipe => (
            <Grid item xs={12} md={4} key={recipe.id}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  image={recipe.image}
                  title={recipe.title}
                  sx={{ height: 150 }}
                />
                <CardContent>
                  <Typography variant="h6">{recipe.title}</Typography>
                  <Box mt={1} mb={1}>
                    {recipe.tags.map(tag => (
                      <Chip key={tag} label={tag} color="secondary" size="small" sx={{ mr: 0.5 }} />
                    ))}
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <StarIcon fontSize="small" sx={{ color: '#FACD36', mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">{recipe.rating}</Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ mt: 'auto' }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<RestaurantMenuIcon />}
                  >
                    View
                  </Button>
                  <IconButton color="primary">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {demoRecipes.length === 0 && (
          <Box mt={6} textAlign="center">
            <Typography variant="body1" color="text.secondary">
              No recipes saved yet. Explore and save your favorites!
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
