import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Button,
  Box,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

export default function MissionProgress() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(60);

  const handleMarkComplete = () => {
    setTimeout(() => {
      navigate(`/missions/${id}/completion`);
    }, 1000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" fontWeight={600}>
            Mission Progress Screen
          </Typography>
          <Typography mt={2} color="text.secondary">
            You're almost done! Complete the last step to finish your mission.
          </Typography>
          <Box my={3}>
            <Typography variant="body2" color="text.secondary">
              Progress
            </Typography>
            <LinearProgress
              value={progress}
              variant="determinate"
              color="primary"
              sx={{ height: 10, borderRadius: 5 }}
            />
            <Typography
              align="right"
              variant="caption"
              color="secondary"
              mt={1}
            >
              {progress}%
            </Typography>
          </Box>
          <Box textAlign="right">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleMarkComplete}
            >
              Mark as Complete
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
