import React from 'react';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';

export default function Onboarding() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 14 }}>
      <Alert severity="info" sx={{ mb: 4, minWidth: 300 }}>
        <Typography variant="h5" fontWeight={600}>Processing your request...</Typography>
      </Alert>
      <CircularProgress size={64} color="primary" />
      <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
        Setting up your personalized cooking dashboard...
      </Typography>
    </Box>
  );
}
