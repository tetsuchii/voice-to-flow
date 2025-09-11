import React, { useState } from "react";
import {
  Container,
  Card,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ListIcon from "@mui/icons-material/List";
import QuizIcon from "@mui/icons-material/Quiz";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";

export default function ActivityChoice() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(null);

  const handleSelect = (choice) => {
    setProcessing(true);
    setTimeout(() => {
      if (choice === "missions") navigate("/missions");
      else if (choice === "quizzes") navigate("/quiz-selection");
      setProcessing(false);
    }, 1200);
  };

  if (processing) {
    return (
      <Container maxWidth="xs" sx={{ mt: 16 }}>
        <MuiAlert severity="info" variant="filled" sx={{ mb: 2 }}>
          Processing your request...
        </MuiAlert>
        <Box display="flex" justifyContent="center">
          <CircularProgress size={48} color="primary" />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xs" sx={{ mt: 12 }}>
      <Card sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6" mb={2}>
          What would you like to do?
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          <Button
            variant="contained"
            startIcon={<ListIcon />}
            size="large"
            onClick={() => handleSelect("missions")}
          >
            Explore Missions
          </Button>
          <Button
            variant="outlined"
            startIcon={<QuizIcon />}
            size="large"
            onClick={() => handleSelect("quizzes")}
          >
            Try a Quiz
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
