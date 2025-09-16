import React from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useNavigate } from 'react-router-dom';

const Onboarding_learn = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p:2 }}>
      <Card sx={{ maxWidth: 440, width: 1, textAlign: 'center', p:2 }}>
        <CardContent>
          <SchoolOutlinedIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Learn Financial Skills
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Enhance your banking knowledge through engaging lessons and curated content tailored just for you.
          </Typography>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => navigate('/onboarding_earn')}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Onboarding_learn;
