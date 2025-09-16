import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

const QuizCompletion = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: 470,
        mx: "auto",
        mt: 8,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <EmojiEventsIcon color="warning" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h4" fontWeight={600} mb={2}>Quiz Completed!</Typography>
      <Card sx={{ mb: 3, width: "100%", bgcolor: "#fffbe7" }}>
        <CardContent>
          <Typography variant="h6" color="warning.main">Well done!</Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            You've completed the quiz and earned <b>30 Enlight Points</b>!
          </Typography>
          <Typography variant="body2" mt={1} color="text.secondary">
            Score: <span style={{ fontWeight: 600, color: "#c57d00" }}>4/5</span>
          </Typography>
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/quiz_selection")}
        >
          Take Another Quiz
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </Button>
      </Stack>
    </Box>
  );
};

export default QuizCompletion;
