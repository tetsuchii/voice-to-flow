import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  Skeleton
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

const dummyRecipes = [
  {
    id: '1',
    title: 'Quinoa & Veggie Bowl',
    description: 'A healthy bowl packed with protein and veggies.',
    image: 'https://source.unsplash.com/featured/?bowl,healthy,food',
    tags: ['Healthy', 'Vegetarian', '30 min']
  },
  {
    id: '2',
    title: 'Creamy Pesto Pasta',
    description: 'Rich, creamy pesto with fresh basil and pine nuts.',
    image: 'https://source.unsplash.com/featured/?pasta,food',
    tags: ['Italian', 'Pasta', 'Comfort']
  },
  {
    id: '3',
    title: 'Jackfruit BBQ Sandwiches',
    description: 'Pulled jackfruit + tangy BBQ sauce = vegan BBQ heaven.',
    image: 'https://source.unsplash.com/featured/?sandwich,vegan,food',
    tags: ['Vegan', 'Sandwich', 'BBQ']
  }
];

export default function GetRecipe() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Simulate loading
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 5, px: 2 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Recipe Suggestions
      </Typography>
      <Grid container spacing={4}>
        {loading
          ? [1, 2, 3].map((n) => (
              <Grid item xs={12} sm={6} md={4} key={n}>
                <Card sx={{ minHeight: 350, borderRadius: 3 }}>
                  <Skeleton variant="rectangular" height={180} />
                  <CardContent>
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={32} height={32} sx={{ mt: 1 }} />
                  </CardContent>
                  <CardActions>
                    <Skeleton variant="rounded" width={80} height={32} />
                  </CardActions>
                </Card>
              </Grid>
            ))
          : dummyRecipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <Card sx={{ minHeight: 350, display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={recipe.image}
                    alt={recipe.title}
                    sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {recipe.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                      {recipe.description}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      {recipe.tags.map(tag => (
                        <Chip key={tag} label={tag} size="small" color="secondary" variant="outlined" />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      startIcon={<AddCircleOutlineIcon />}
                      color="primary"
                      variant="contained"
                      onClick={() => navigate('/recipe-details/' + recipe.id)}
                    >
                      Details
                    </Button>
                    <Button
                      startIcon={<BookmarkAddOutlinedIcon />}
                      color="secondary"
                      variant="text"
                      onClick={() => navigate('/saved-recipes')}
                    >
                      Save
                    </Button>
                    <Button
                      startIcon={<FavoriteBorderIcon />}
                      color="inherit"
                      variant="text"
                      onClick={() => navigate('/ingredient-inventory')}
                    >
                      Add Ingredient
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}
