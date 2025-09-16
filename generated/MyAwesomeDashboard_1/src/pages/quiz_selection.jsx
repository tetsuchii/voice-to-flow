import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Avatar,
  Stack,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import GavelIcon from "@mui/icons-material/Gavel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const quizzes = [
  {
    id: 1,
    title: "Financial Literacy Basics",
    desc: "Test your knowledge about saving and budgeting.",
    icon: <QuizIcon />,
    rewards: ["+100 pts", "Exclusive badge"],
  },
  {
    id: 2,
    title: "Banking Regulations",
    desc: "Check your understanding on modern banking and compliance.",
    icon: <GavelIcon />,
    rewards: ["+80 pts"],
  },
  {
    id: 3,
    title: "Investing 101",
    desc: "Learn simple investment concepts and earn points.",
    icon: <EmojiEventsIcon />,
    rewards: ["+120 pts", "Investment Guru Badge"],
  },
];

export default function QuizSelection() {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Choose a Quiz
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Select a quiz to challenge your knowledge and earn points. New quizzes unlock every week!
      </Typography>
      <Grid container spacing={3}>
        {quizzes.map(qz => (
          <Grid item xs={12} sm={6} md={4} key={qz.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={2} mb={1.5}>
                  <Avatar sx={{ bgcolor: "primary.main", width: 48, height: 48 }}>
                    {qz.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight={700}>
                    {qz.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {qz.desc}
                </Typography>
                <Stack direction="row" spacing={1} mb={1}>
                  {qz.rewards.map((rw, i) => (
                    <Chip key={i} label={rw} color="success" size="small" />
                  ))}
                </Stack>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  href="/quiz_intro"
                  endIcon={<ArrowForwardIosIcon />}
                >
                  Start
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
