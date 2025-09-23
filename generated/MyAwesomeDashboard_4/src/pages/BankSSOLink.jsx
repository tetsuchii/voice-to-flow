import React from 'react';
import { Box, Typography, Card, CardContent, Button, Divider, TextField } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from 'react-router-dom';

export default function BankSSOLink() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, maxWidth: 440, mx: 'auto', mt: 6 }}>
      <Card elevation={2} sx={{ mb: 4 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <AccountBalanceIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Link Your Bank Account (SSO)
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            For a seamless experience, connect your bank to enable secure points redemption.
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <TextField
            label="Bank Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            placeholder="your@email.com"
            type="email"
            autoComplete="email"
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={() => navigate('/dashboard')}
            sx={{ mb: 1 }}
          >
            Connect via SSO
          </Button>
          <Button variant="text" size="small" color="secondary" onClick={() => navigate('/dashboard')}>
            Skip for now
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
