import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Chip, Stack, AppBar, Toolbar } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";

export default function QuizIntro() {
  return (
    <Box>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Quiz Intro
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ px: 2, py: 3, maxWidth: 500, mx: "auto" }}>
        <Card elevation={2}>
          <CardMedia
            component="img"
            height="160"
            image="/assets/quiz_budgeting.png"
            alt="Budgeting Basics Quiz"
            sx={{ objectFit: "contain", background: "#f4f4f4" }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Budgeting Basics
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Chip icon={<QuizIcon />} label="Quiz" color="primary" size="small" />
              <Chip label="Earn 200 pts" color="success" size="small" />
            </Stack>
            <Typography color="text.secondary" sx={{ mb: 2 }}>
              Test your knowledge about creating and maintaining a personal budget.
              Answer all the questions correctly and earn points towards your Enlight Rewards!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 1 }}
            >
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
