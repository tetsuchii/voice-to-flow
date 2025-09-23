import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';

export default function OnboardingLearn() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, maxWidth: 550, mx: 'auto', mt: 6 }}>
      <Card elevation={2} sx={{ mb: 4, textAlign: 'center' }}>
        <CardContent>
          <SchoolIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Learn & Grow
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Discover engaging missions and quizzes crafted to enhance your knowledge and skills.
            Track your learning progress and reach new milestones.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/onboarding-earn')}
          >
            Next: Earn
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
