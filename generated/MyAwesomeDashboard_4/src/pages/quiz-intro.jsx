import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";

export default function QuizIntro() {
  return (
    <Box maxWidth={440} mx="auto" mt={6}>
      <Card elevation={3}>
        <CardContent sx={{ textAlign: "center" }}>
          <Avatar sx={{ bgcolor: "primary.main", mx: "auto", mb: 2, width: 60, height: 60 }}>
            <QuizIcon sx={{ fontSize: 36 }} />
          </Avatar>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Quiz Intro
          </Typography>
          <Typography variant="h6" color="text.secondary" mb={2}>
            Financial Basics Quiz
          </Typography>
          <Typography variant="body1" mb={3}>
            Test your understanding of financial basics with this short quiz.
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            <b>5 Questions</b> &middot; Earn <b>+100 Points</b>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 1 }}
            href="#/quiz-question"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
