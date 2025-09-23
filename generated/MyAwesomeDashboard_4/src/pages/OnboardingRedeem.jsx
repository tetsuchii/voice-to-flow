import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import RedeemIcon from '@mui/icons-material/Redeem';
import { useNavigate } from 'react-router-dom';

export default function OnboardingRedeem() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, maxWidth: 550, mx: 'auto', mt: 6 }}>
      <Card elevation={2} sx={{ mb: 4, textAlign: 'center' }}>
        <CardContent>
          <RedeemIcon sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Redeem Your Success
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Use your earned points for exciting rewards, vouchers, or charitable donations. Check your rewards catalog anytime!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/bank-sso-link')}
          >
            Next: Link Bank
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
