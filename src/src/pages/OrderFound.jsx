import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Alert, Box, Container, Typography, Paper, CircularProgress, Button } from '@mui/material';

const OrderFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, searchQuery } = location.state ?? {};

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'found') {
        navigate('/order-status', { state: { searchQuery } });
      } else if (status === 'not_found') {
        navigate('/error', { state: { searchQuery } });
      } else {
        navigate('/');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [status, searchQuery, navigate]);

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ width: '100%', padding: 4 }}>
        <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
          <CircularProgress color="info" size={48} sx={{ mb: 2 }} />
          <Alert severity="info" sx={{ mb: 2 }}>
            Processing your request...
          </Alert>
          <Typography variant="body1">
            Checking order: <strong>{searchQuery}</strong>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default OrderFound;
