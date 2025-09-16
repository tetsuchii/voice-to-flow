import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import { useNavigate } from 'react-router-dom';

const Onboarding_redeem = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight:'100vh', display: 'flex', alignItems:'center', justifyContent:'center', p:2 }}>
      <Card sx={{ maxWidth:440, width:1, textAlign:'center', p:2 }}>
        <CardContent>
          <RedeemOutlinedIcon sx={{ fontSize:48, color:'primary.main', mb:2 }}/>
          <Typography variant="h5" gutterBottom>
            Redeem Amazing Prizes
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Exchange your earned points for vouchers, cashback, and more exciting rewards in our catalog.
          </Typography>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => navigate('/sso_link')}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Onboarding_redeem;
