import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

export default function SsoLink() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  function handleSSO() {
    setLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1400);
  }

  return (
    <Box sx={{ maxWidth: 420, mx: "auto", mt: 5 }}>
      <Card elevation={3} sx={{ borderRadius: 3 }}>
        <CardContent sx={{ textAlign: "center", pb: 4 }}>
          <AccountCircleIcon color="primary" sx={{ fontSize: 52, mb: 1 }} />
          <Typography variant="h5" fontWeight={600} sx={{ mb: 0.5 }}>
            Link User Profile
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Link your banking profile using secure SSO (Single Sign-On) to continue.
          </Typography>
          {!loading ? (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSSO}
              sx={{ minWidth: 180 }}
            >
              Link via SSO
            </Button>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 56 }}>
              <CircularProgress size={32} color="primary" />
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
