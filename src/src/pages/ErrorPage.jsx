import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Paper,
  Typography,
  Alert,
  Button,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery } = location.state ?? {};

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ width: '100%', padding: 4 }}>
        <Box textAlign="center">
          <ErrorOutlineIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Hiba oldal
          </Typography>
          <Alert severity="error" sx={{ mb: 2 }}>
            Order not found for: <strong>{searchQuery}</strong>
          </Alert>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Please check your order number and try again.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/')}
          >
            Vissza a főoldalra
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ErrorPage;
