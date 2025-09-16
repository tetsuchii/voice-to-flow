import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";

const QuizIntro = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: 520,
        mx: "auto",
        mt: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <QuizIcon color="primary" sx={{ fontSize: 70, mb: 2 }} />
      <Typography variant="h4" fontWeight={600} mb={2}>
        Quiz: Banking Basics
      </Typography>
      <Card sx={{ mb: 2, width: "100%", bgcolor: "#f0f7fa" }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={1}>
            <InfoOutlinedIcon color="info" sx={{ mr: 1 }} />
            <Typography variant="h6">Before you begin:</Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            This quiz will test your knowledge about basic banking concepts. You'll be awarded 30 Enlight Points for completing the quiz.
          </Typography>
          <Typography variant="body2" mt={1} color="text.secondary">
            <b>Number of Questions:</b> 5<br />
            <b>Time to Complete:</b> ~3 minutes
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/quiz_question")}
      >
        Start Quiz
      </Button>
    </Box>
  );
};

export default QuizIntro;
