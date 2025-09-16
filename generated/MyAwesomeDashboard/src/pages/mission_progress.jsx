import React from 'react';
import { Box, Typography, Card, CardContent, LinearProgress, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

const Mission_progress = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(65);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor:'background.default', py: 8 }}>
      <Box sx={{ maxWidth: 480, mx: 'auto', px: 2 }}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <DirectionsWalkIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Mission Progress
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              "Budgeting Bootcamp"
            </Typography>
            <Box sx={{ width: '100%', mb: 2 }}>
              <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 5 }} />
              <Typography sx={{ mt: 1 }}>{progress}% completed</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr:1 }}
              onClick={() => setProgress(Math.min(progress + 15, 100))}
              disabled={progress === 100}
            >
              Continue Mission
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ mt: { xs: 1, sm: 0 } }}
              onClick={() => navigate('/mission_completion')}
              disabled={progress < 100}
            >
              Complete Mission
            </Button>
          </CardContent>
        </Card>
        <Button
          sx={{ mt: 3 }}
          variant="text"
          color="primary"
          fullWidth
          onClick={() => navigate('/mission_list')}
        >
          Back to Mission List
        </Button>
      </Box>
    </Box>
  );
};

export default Mission_progress;
