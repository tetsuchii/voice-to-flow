import React, { useEffect } from "react";
import { Box, Card, CardContent, Typography, CircularProgress, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import QuizIcon from "@mui/icons-material/Quiz";

export default function Activity_choice() {
  const [processing, setProcessing] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate processing for demo
    const timer = setTimeout(() => setProcessing(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (processing) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={250}>
        <Card sx={{ p: 4, maxWidth: 420 }}>
          <Stack spacing={2} alignItems="center">
            <CircularProgress color="primary" />
            <Typography sx={{ color: "info.main" }} fontWeight={500}>
              Processing your request...
            </Typography>
          </Stack>
        </Card>
      </Box>
    );
  }

  // After processing, show activity choices
  return (
    <Box maxWidth={420} mx="auto" mt={7}>
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={700} align="center" mb={2}>
            Choose an Activity
          </Typography>
          <Stack spacing={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<LocalActivityIcon />}
              onClick={() => navigate("/mission_list")}
            >
              Explore Missions
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              startIcon={<QuizIcon />}
              onClick={() => navigate("/quiz_selection")}
            >
              Take a Quiz
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
