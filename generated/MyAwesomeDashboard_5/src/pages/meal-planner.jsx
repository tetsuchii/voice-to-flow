import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Stack,
  IconButton,
  Divider
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNavigate } from 'react-router-dom';

const weekPlan = [
  { day: 'Monday', recipe: 'Veggie Stir-Fry', tags: ['Vegan', '30 min'] },
  { day: 'Tuesday', recipe: 'Spaghetti Carbonara', tags: ['Classic', 'Pasta'] },
  { day: 'Wednesday', recipe: '', tags: [] },
  { day: 'Thursday', recipe: 'Chickpea Salad', tags: ['Healthy', 'Gluten Free'] },
  { day: 'Friday', recipe: '', tags: [] },
  { day: 'Saturday', recipe: 'Mushroom Risotto', tags: ['Italian', 'Dinner'] },
  { day: 'Sunday', recipe: '', tags: [] }
];

export default function MealPlanner() {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 1050, mx: 'auto', mt: 6, px: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        <CalendarMonthIcon fontSize="large" color="secondary" />
        <Typography variant="h4" fontWeight={700}>Meal Planner Calendar</Typography>
      </Box>
      <Typography sx={{ mb: 3 }} color="text.secondary">
        Drag and drop new meals or click add to schedule your week.
      </Typography>
      <Grid container spacing={3}>
        {weekPlan.map((slot, idx) => (
          <Grid item xs={12} sm={6} md={4} key={slot.day}>
            <Card sx={{ borderRadius: 3, minHeight: 144, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={600}>
                  {slot.day}
                </Typography>
                {slot.recipe ? (
                  <>
                    <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>{slot.recipe}</Typography>
                    <Stack direction="row" spacing={1}>
                      {slot.tags.map((t, i) => (
                        <Chip key={i} label={t} size="small" color="secondary" />
                      ))}
                    </Stack>
                  </>
                ) : (
                  <Typography variant="body2" color="text.disabled" sx={{ mt: 1 }}>
                    No meal planned
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  startIcon={<AddIcon />}
                  size="small"
                  color="primary"
                  onClick={() => alert('Add meal feature coming soon!')}
                >
                  {slot.recipe ? 'Edit' : 'Add'}
                </Button>
                <IconButton color="secondary" onClick={() => navigate('/shopping-list')}>
                  <ListAltIcon />
                </IconButton>
                <IconButton color="primary" onClick={() => navigate('/reminder-action')}>
                  <NotificationsActiveIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mt: 5, mb: 2 }} />
      <Box sx={{ mt: 0, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button
          color="secondary"
          variant="outlined"
          startIcon={<ListAltIcon />}
          onClick={() => navigate('/shopping-list')}
        >
          Generate Shopping List
        </Button>
        <Button
          color="primary"
          variant="outlined"
          startIcon={<NotificationsActiveIcon />}
          onClick={() => navigate('/reminder-action')}
        >
          Set Ingredient Reminders
        </Button>
      </Box>
    </Box>
  );
}
