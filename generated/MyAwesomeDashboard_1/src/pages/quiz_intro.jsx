import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function QuizIntro() {
  return (
    <Box sx={{ maxWidth: 520, mx: "auto", py: 5 }}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href="/quiz_selection"
        sx={{ mb: 2 }}
      >
        Back to Quizzes
      </Button>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Stack alignItems="center" spacing={2}>
            <Avatar sx={{ bgcolor: "primary.main", width: 64, height: 64 }}>
              <QuizIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Financial Literacy Basics
            </Typography>
            <Chip
              label="+100 Points"
              color="success"
              icon={<EmojiEventsIcon fontSize="small" />}
              sx={{ fontWeight: 600 }}
            />
            <Typography variant="body1" color="text.secondary" align="center" my={1}>
              Welcome! This quiz covers basic concepts of money, savings, and budgeting. Score at least 70% to earn bonus points!
            </Typography>
            <Button
              href="/quiz_question"
              variant="contained"
              size="large"
              color="primary"
            >
              Start Quiz
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
