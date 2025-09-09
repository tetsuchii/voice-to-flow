import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, LinearProgress, Box, Paper } from '@mui/material';

const DUMMY_FOUND_IDS = ['12345', 'ABCDE', '77777'];

const SearchOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchQuery) {
        // No search query passed, redirect home
        navigate('/', { replace: true });
        return;
      }
      // Simulate order found or not found
      if (DUMMY_FOUND_IDS.includes(searchQuery.trim())) {
        navigate('/order-found', { state: { status: 'found', searchQuery } });
      } else {
        navigate('/order-found', { state: { status: 'not_found', searchQuery } });
      }
    }, 1400);

    return () => clearTimeout(timer);
  }, [searchQuery, navigate]);

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={2} sx={{ width: '100%', padding: 4 }}>
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="medium" mb={2}>
            Rendelés keresése
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Keresés folyamatban: <strong>{searchQuery}</strong>
          </Typography>
          <LinearProgress color="primary" sx={{ width: '70%', mx: 'auto', height: 10, borderRadius: 5 }} />
        </Box>
      </Paper>
    </Container>
  );
};

export default SearchOrder;
