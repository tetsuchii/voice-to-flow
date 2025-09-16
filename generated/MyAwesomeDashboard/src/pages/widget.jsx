import React from 'react';
import { Box, Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const Widget = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Card elevation={6} sx={{ maxWidth: 400, width: 1, textAlign: 'center' }}>
        <CardContent>
          <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', width: 64, height: 64, mb: 2 }}>
            <EmojiObjectsIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h5" gutterBottom>
            Enlight Widget in Banking App
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Discover how you can earn rewards while learning about finance in your banking app!
          </Typography>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="primary"
            onClick={() => navigate('/onboarding_learn')}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Widget;
