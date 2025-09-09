import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setError('Please enter an order number.');
      return;
    }
    // Simulate delay/request
    navigate('/search-order', { state: { searchQuery } });
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ width: '100%', padding: 4 }}>
        <Box textAlign="center" mb={3}>
          <img
            src="https://cdn.pixabay.com/photo/2017/01/31/13/14/ecommerce-2026083_1280.png"
            alt="Order Search"
            style={{ width: 80, marginBottom: 16 }}
          />
          <Typography variant="h4" fontWeight="bold">
            Főoldal
          </Typography>
          <Typography color="text.secondary" mt={1} mb={1}>
            Search for your order with your order number below.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Search"
            placeholder="Enter search term..."
            name="searchQuery"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setError('');
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            error={!!error}
            helperText={error}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            id="searchBtn"
          >
            Search
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Home;
