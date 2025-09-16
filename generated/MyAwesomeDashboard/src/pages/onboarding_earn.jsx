import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useNavigate } from 'react-router-dom';

const Onboarding_earn = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight:'100vh', display: 'flex', alignItems:'center', justifyContent:'center', p:2 }}>
      <Card sx={{ maxWidth:440, width:1, textAlign:'center', p:2 }}>
        <CardContent>
          <MonetizationOnOutlinedIcon sx={{ fontSize:48, color:'secondary.main', mb:2 }}/>
          <Typography variant="h5" gutterBottom>
            Earn Rewards
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Get rewarded for your banking knowledge! Complete missions, quizzes, and unlock achievements.
          </Typography>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => navigate('/onboarding_redeem')}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Onboarding_earn;
