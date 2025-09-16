import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const quizzes = {
  1: {
    title: "Banking Basics Quiz",
    description:
      "Test your understanding of essential banking principles. Great for new users!",
    difficulty: "Easy",
    questions: 7,
    points: 60,
  },
  2: {
    title: "Security Awareness Quiz",
    description:
      "Check your knowledge of security best practices. Stay safe and informed.",
    difficulty: "Medium",
    questions: 8,
    points: 100,
  },
  3: {
    title: "Rewards & Benefits Quiz",
    description:
      "How much do you know about rewards in our app? Find out and earn extra!",
    difficulty: "Easy",
    questions: 5,
    points: 45,
  },
};

const diffColor = {
  Easy: "primary",
  Medium: "warning",
  Hard: "error",
};

export default function QuizIntro() {
  const query = useQuery();
  const quizId = query.get("id") || 1;
  const quiz = quizzes[quizId] || quizzes[1];
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", px: 2, mt: 6 }}>
      <Card sx={{ p: 4, borderRadius: 5, boxShadow: 1 }}>
        <Stack alignItems="center" spacing={2} mb={2}>
          <QuizIcon fontSize="large" color="secondary" />
          <Typography variant="h4" fontWeight={700}>
            {quiz.title}
          </Typography>
          <Chip color={diffColor[quiz.difficulty]} label={quiz.difficulty} size="medium" />
        </Stack>
        <Typography textAlign="center" variant="subtitle1" mb={2} color="text.secondary">
          {quiz.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" justifyContent="center" gap={2} mb={2}>
          <Chip label={`${quiz.questions} Questions`} color="info" />
          <Chip
            color="success"
            icon={<EmojiEventsIcon />}
            label={`Up to ${quiz.points} Points`}
          />
        </Stack>
        <CardActions sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/quiz_selection")}
          >
            Back to Quizzes
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/quiz_question?id=" + quizId)}
          >
            Start Quiz
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
