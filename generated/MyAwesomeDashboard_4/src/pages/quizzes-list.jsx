import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const quizzes = [
  {
    id: 1,
    title: "Financial Basics Quiz",
    subtitle: "5 questions, Beginner Level",
    completed: false,
  },
  {
    id: 2,
    title: "Smart Savings Challenge",
    subtitle: "7 questions, Intermediate",
    completed: true,
  },
  {
    id: 3,
    title: "Investment Fundamentals",
    subtitle: "6 questions, Advanced",
    completed: false,
  },
];

export default function QuizzesList() {
  return (
    <Box maxWidth={540} mx="auto" mt={6}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Quiz Selection
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Choose a quiz to test your knowledge and earn rewards.
      </Typography>
      <List disablePadding>
        {quizzes.map((quiz) => (
          <Card
            key={quiz.id}
            variant="outlined"
            sx={{
              mb: 2,
              "&:hover": { boxShadow: 3 },
              transition: "box-shadow .2s",
            }}
          >
            <CardContent sx={{ py: 2 }}>
              <ListItem
                disableGutters
                secondaryAction={
                  <Button
                    endIcon={<ArrowForwardIosIcon />}
                    variant="contained"
                    color="primary"
                    size="small"
                    href={`/quiz-intro?id=${quiz.id}`}
                    disabled={quiz.completed}
                  >
                    {quiz.completed ? "Completed" : "Start"}
                  </Button>
                }
              >
                <ListItemAvatar>
                  <Avatar color="primary">
                    <QuizIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box display="flex" alignItems="center" gap={1}>
                      {quiz.title}
                      {quiz.completed && (
                        <Chip
                          label="Completed"
                          size="small"
                          color="success"
                          sx={{ ml: 1 }}
                        />
                      )}
                    </Box>
                  }
                  secondary={quiz.subtitle}
                  primaryTypographyProps={{
                    fontWeight: 600,
                  }}
                />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
}
