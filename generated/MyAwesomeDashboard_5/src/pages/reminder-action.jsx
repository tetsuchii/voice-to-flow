import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  Chip,
  Divider,
  AppBar,
  Toolbar
} from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DoneIcon from '@mui/icons-material/Done';

const reminders = [
  {
    id: 1,
    ingredient: 'Yogurt',
    expires: 'in 2 days',
    actionLabel: 'Use Now',
    color: 'warning'
  },
  {
    id: 2,
    ingredient: 'Spinach',
    expires: 'Tomorrow',
    actionLabel: 'Add to Meal',
    color: 'error'
  }
];

export default function ReminderAction() {
  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <AccessAlarmIcon sx={{ mr: 1 }} color="warning" />
          <Typography variant="h6" color="inherit">
            Ingredient Reminder
          </Typography>
        </Toolbar>
      </AppBar>
      <Box maxWidth={600} mx="auto" mt={4}>
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Expiring Ingredients
            </Typography>
            <Divider sx={{ my: 2 }} />
            {reminders.length === 0 ? (
              <Typography color="text.secondary" align="center">
                All your ingredients are fresh!
              </Typography>
            ) : (
              <Stack spacing={2}>
                {reminders.map(rem => (
                  <Box
                    key={rem.id}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      bgcolor: `${rem.color}.50`,
                      borderRadius: 1,
                      p: 2,
                      border: theme => `1px solid ${theme.palette[rem.color].main}`
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Chip
                        label={rem.ingredient}
                        color={rem.color}
                        icon={<AccessAlarmIcon />}
                        size="medium"
                      />
                      <Typography variant="body2" color="text.secondary">
                        {rem.expires}
                      </Typography>
                    </Stack>
                    <Button variant="contained" color={rem.color} endIcon={<DoneIcon />}>
                      {rem.actionLabel}
                    </Button>
                  </Box>
                ))}
              </Stack>
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
