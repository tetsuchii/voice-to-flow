import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#085ff7' },
    secondary: { main: '#ffb300' },
    info: { main: '#1976d2' },
    background: {
      default: '#f6f9fc',
      paper: '#fff'
    }
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: { fontWeight: 600 },
    h2: { fontWeight: 500 },
    button: { fontWeight: 500, textTransform: 'none' }
  }
});

export default theme;
