import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Snackbar,
} from '@mui/material';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [language, setLanguage] = useState('en');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  function handleSave() {
    setOpenSnackbar(true);
  }

  function handleCloseSnackbar(_, reason) {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  }

  return (
    <Box sx={{ maxWidth: 540, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Settings & Preferences
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={500} gutterBottom>
            Display Preferences
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(val => !val)}
                color="primary"
              />
            }
            label="Dark Mode"
            sx={{ mb: 2 }}
          />

          <Typography variant="h6" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
            Notifications
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <FormControlLabel
            control={
              <Switch
                checked={notifyEmail}
                onChange={() => setNotifyEmail(val => !val)}
                color="primary"
              />
            }
            label="Email notifications"
            sx={{ mb: 2 }}
          />

          <Typography variant="h6" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
            Language
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="language-select-label">Preferred Language</InputLabel>
            <Select
              labelId="language-select-label"
              value={language}
              label="Preferred Language"
              onChange={e => setLanguage(e.target.value)}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Spanish</MenuItem>
              <MenuItem value="fr">French</MenuItem>
            </Select>
          </FormControl>

          <Typography variant="h6" fontWeight={500} gutterBottom sx={{ mt: 3 }}>
            Account Security
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={2} sx={{ mb: 2, maxWidth: 360 }}>
            <TextField
              label="Change Password"
              type="password"
              placeholder="Enter new password"
              fullWidth
              size="small"
            />
            <Button variant="outlined" color="secondary">
              Reset Password
            </Button>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Box textAlign="right">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3500}
        onClose={handleCloseSnackbar}
        message="Settings updated!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}
