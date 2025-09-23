import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';

export default function OnboardingEarn() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, maxWidth: 550, mx: 'auto', mt: 6 }}>
      <Card elevation={2} sx={{ mb: 4, textAlign: 'center' }}>
        <CardContent>
          <EmojiEventsIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Earn Rewards
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Complete missions and quizzes to earn points, digital badges, and exclusive recognition for your achievements.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/onboarding-redeem')}
          >
            Next: Redeem
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
