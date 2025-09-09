import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import SearchOrder from './pages/SearchOrder';
import OrderFound from './pages/OrderFound';
import OrderStatus from './pages/OrderStatus';
import ErrorPage from './pages/ErrorPage';
import AdminUpload from './pages/AdminUpload';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#607d8b',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-order" element={<SearchOrder />} />
          <Route path="/order-found" element={<OrderFound />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/admin-upload" element={<AdminUpload />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
