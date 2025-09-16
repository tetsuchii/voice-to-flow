import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  Divider,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

const quizzes = [
  {
    id: 1,
    title: "Banking Basics Quiz",
    questions: 7,
    difficulty: "Easy",
    points: 60,
  },
  {
    id: 2,
    title: "Security Awareness Quiz",
    questions: 8,
    difficulty: "Medium",
    points: 100,
  },
  {
    id: 3,
    title: "Rewards & Benefits Quiz",
    questions: 5,
    difficulty: "Easy",
    points: 45,
  },
];

const diffColor = {
  Easy: "primary",
  Medium: "warning",
  Hard: "error",
};

export default function QuizSelection() {
  const navigate = useNavigate();

  return (
    <Box sx={{ px: { xs: 1, sm: 3 }, maxWidth: 700, mx: "auto", mt: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Quizzes
      </Typography>
      <Typography variant="subtitle1" mb={4} color="text.secondary">
        Test and expand your knowledge. Choose a quiz, answer questions, and earn points!
      </Typography>
      <Card variant="outlined" sx={{ mb: 3, bgcolor: "#f4fafd" }}>
        <CardContent>
          <Typography variant="h6" mb={1}>
            How Quizzes Work
          </Typography>
          <Typography fontSize={15}>
            Pick a quiz, answer all the questions, and submit to get your score and reward.
          </Typography>
        </CardContent>
      </Card>
      <List>
        {quizzes.map((quiz, idx) => (
          <React.Fragment key={quiz.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                borderRadius: 2,
                "&:hover": { bgcolor: "#f5f7fa", boxShadow: 1 },
                mb: 2,
              }}
              secondaryAction={
                <Button variant="contained" onClick={() => navigate("/quiz_intro?id=" + quiz.id)}>
                  Start
                </Button>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "secondary.main" }}>
                  <QuizIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h6" fontWeight="bold">
                    {quiz.title}
                  </Typography>
                }
                secondary={
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 0.5 }}>
                    <Chip color={diffColor[quiz.difficulty]} label={quiz.difficulty} size="small" />
                    <Chip
                      color="info"
                      label={`${quiz.questions} questions`}
                      size="small"
                    />
                    <Chip
                      color="secondary"
                      icon={<EmojiEventsIcon />}
                      label={`Up to ${quiz.points} pts`}
                      size="small"
                    />
                  </Box>
                }
              />
            </ListItem>
            {idx !== quizzes.length - 1 && (
              <Divider variant="inset" component="li" sx={{ ml: 7 }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
