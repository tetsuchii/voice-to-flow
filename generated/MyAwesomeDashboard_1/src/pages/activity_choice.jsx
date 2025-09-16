import React from 'react';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert';

export default function ActivityChoice() {
  // Simulate process/loading feedback
  React.useEffect(() => {
    // Could use for redirect/further UX
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 12 }}>
      <Alert
        icon={<InfoIcon fontSize="inherit" />}
        severity="info"
        sx={{ maxWidth: 400, width: "100%" }}
      >
        <Typography variant="h6" fontWeight={500} sx={{ mb: 0.5 }}>
          Processing
        </Typography>
        <Typography variant="body1">
          Processing your request...
        </Typography>
      </Alert>
      <CircularProgress color="primary" sx={{ mt: 5 }} size={48} />
    </Box>
  );
}
