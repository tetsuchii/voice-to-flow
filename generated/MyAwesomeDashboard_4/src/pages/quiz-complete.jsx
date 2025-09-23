import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  Grid,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export default function QuizComplete() {
  return (
    <Box maxWidth={460} mx="auto" mt={6} textAlign="center">
      <Avatar
        sx={{
          bgcolor: "primary.light",
          width: 100,
          height: 100,
          mx: "auto",
        }}
      >
        <EmojiEventsIcon sx={{ fontSize: 60, color: "primary.main" }} />
      </Avatar>
      <Typography variant="h4" fontWeight={700} mt={2} gutterBottom>
        Quiz Completed!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={2}>
        Great job finishing the quiz. Check out your results and claim your rewards!
      </Typography>
      <Card elevation={3} sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Your Results
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Chip
                icon={<StarIcon color="warning" />}
                label="Score: 4/5"
                variant="outlined"
                size="medium"
                color="warning"
              />
            </Grid>
            <Grid item>
              <Chip
                icon={<TrendingUpIcon color="success" />}
                label="+100 Points"
                color="success"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        size="large"
        href="/dashboard"
        sx={{ mb: 1 }}
      >
        Back to Dashboard
      </Button>
      <Button color="inherit" href="/#/quizzes-list" sx={{ ml: 2 }}>
        More Quizzes
      </Button>
    </Box>
  );
}
