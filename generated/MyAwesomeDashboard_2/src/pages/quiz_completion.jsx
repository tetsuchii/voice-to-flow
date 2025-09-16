import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';

export default function QuizCompletion() {
  return (
    <Box py={6} display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
      <Paper elevation={4} sx={{ maxWidth: 480, width: '100%', p: 4, textAlign: 'center' }}>
        <CheckCircleIcon color="success" sx={{ fontSize: 64, mb: 2 }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Congratulations!
        </Typography>
        <Typography variant="body1">
          You've completed the quiz and earned
        </Typography>
        <Chip
          color="success"
          label="+10 Reward Points"
          sx={{ my: 2, fontWeight: 'bold', fontSize: 16 }}
        />

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Your knowledge is growing – keep it going! Browse the rewards catalog or try more missions for extra points.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/rewards_catalog"
          sx={{ mb: 1 }}
          aria-label="Go to Rewards Catalog"
        >
          View Rewards Catalog
        </Button>
        <br />
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          href="/dashboard"
          aria-label="Return to Dashboard"
        >
          Return to Dashboard
        </Button>
      </Paper>
    </Box>
  );
}
