import React from 'react';
import { Box, Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomeDashboardWidget() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: 'auto', mt: 6 }}>
      <Card elevation={3} sx={{ mb: 4 }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/26.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Box>
            <Typography variant="h5" fontWeight={600}>Welcome back!</Typography>
            <Typography color="text.secondary">Your personalized dashboard is ready.</Typography>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700}>Get Started</Typography>
          <Typography color="text.secondary" sx={{ mb: 1 }}>Follow the guided onboarding to discover opportunities to learn, earn, and redeem rewards.</Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/onboarding-learn')}
            fullWidth
          >
            Start Onboarding
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
