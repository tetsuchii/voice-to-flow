import React from 'react';
import { Box, Card, CardContent, Typography, CircularProgress, Alert } from '@mui/material';

const Activity_choice = () => (
  <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default' }}>
    <Card sx={{ minWidth: 320, p: 4 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <CircularProgress color="primary" sx={{ mb: 2 }} />
        <Alert severity="info" sx={{ mb: 2 }}>
          Processing your request...
        </Alert>
        <Typography variant="body2" color="text.secondary">
          Please wait while we fetch your activities.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Activity_choice;
