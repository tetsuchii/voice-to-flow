import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import { useNavigate } from "react-router-dom";

const quizzes = [
  {
    id: 1,
    title: "Banking Basics",
    description: "Test your knowledge of essential banking terms and concepts.",
  },
  {
    id: 2,
    title: "Fraud Prevention",
    description: "Learn how to recognize and prevent financial fraud.",
  },
  {
    id: 3,
    title: "Saving & Budgeting",
    description: "Tips and strategies for managing your money effectively.",
  },
];

const QuizSelection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 8, px: 2 }}>
      <Typography variant="h4" mb={3}>
        Choose a Quiz
      </Typography>
      <Grid container spacing={3}>
        {quizzes.map((quiz) => (
          <Grid item xs={12} md={4} key={quiz.id}>
            <Card sx={{ minHeight: 205, display: "flex", flexDirection: "column" }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <QuizIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">{quiz.title}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {quiz.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: "auto" }}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => navigate("/quiz_intro")}
                >
                  Start Quiz
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default QuizSelection;
