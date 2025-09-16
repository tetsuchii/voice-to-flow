import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';

const Mission_detail = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 3 }}>
      <Box sx={{ maxWidth: 540, mx: 'auto', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Mission Detail Screen
        </Typography>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <InfoOutlinedIcon color="primary" sx={{ mr: 1, fontSize: 36 }} />
              <Typography variant="h6">Information</Typography>
            </Box>
            <Typography variant="body1">
              Detailed information will be displayed here.
            </Typography>
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/mission_progress')}
            fullWidth
          >
            Start Mission
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/mission_list')}
            fullWidth
          >
            Back to Missions
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Mission_detail;
