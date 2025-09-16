import React from 'react';
import { Box, Card, CardContent, Typography, Button, CircularProgress } from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate } from 'react-router-dom';

const Sso_link = () => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLink = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <Box sx={{ minHeight:'100vh', display: 'flex', alignItems:'center', justifyContent:'center', p:2 }}>
      <Card sx={{ maxWidth:440, width:1, textAlign:'center', p:3 }}>
        <CardContent>
          <PersonOutlinedIcon sx={{ fontSize:48, color:'primary.main', mb:2 }}/>
          <Typography variant="h5" gutterBottom>
            Link User Profile via SSO
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            To proceed, link your banking profile securely with Enlight using Single Sign-On.
          </Typography>
          <Button
            variant="contained"
            size="large"
            fullWidth
            disabled={loading}
            onClick={handleLink}
            startIcon={
              loading ? <CircularProgress size={20} color="inherit" /> : null
            }
          >
            {loading ? 'Linking Profile...' : 'Link with Bank Account'}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Sso_link;
