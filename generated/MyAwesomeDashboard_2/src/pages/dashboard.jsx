import React from "react";
import {
  Box, Typography, Card, CardContent, Stack, Grid, Avatar, Button, Chip, Divider, LinearProgress
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import QuizIcon from "@mui/icons-material/Quiz";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Enlight Dashboard
      </Typography>
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
              <AccountBalanceIcon />
            </Avatar>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Account Level
              </Typography>
              <Typography variant="h6">Explorer</Typography>
              <LinearProgress value={54} variant="determinate" sx={{ maxWidth: 120, mt: 1 }} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: "secondary.main", mr: 2 }}>
              <EmojiEventsIcon />
            </Avatar>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Enlight Points
              </Typography>
              <Typography variant="h6">3,250</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ p: 2, display: "flex", alignItems: "center" }}>
            <Avatar sx={{ bgcolor: "info.main", mr: 2 }}>
              <QuizIcon />
            </Avatar>
            <Box>
              <Typography variant="body2" color="text.secondary">
                Quizzes Completed
              </Typography>
              <Typography variant="h6">8</Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Typography mb={2} variant="h6">Get Started:</Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={3} alignItems="stretch">
        <Card sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Avatar sx={{ bgcolor: "success.main", mb: 1 }}>
              <LocalActivityIcon />
            </Avatar>
            <Typography variant="h6" fontWeight={700}>
              Missions
            </Typography>
            <Typography color="text.secondary" mb={2}>
              Explore new financial missions. Earn points for each completed activity!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate("/activity_choice", { state: { from: "dashboard" } })}
              startIcon={<LocalActivityIcon />}
            >
              Choose an Activity
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <CardContent>
            <Avatar sx={{ bgcolor: "warning.main", mb: 1 }}>
              <QuizIcon />
            </Avatar>
            <Typography variant="h6" fontWeight={700}>
              Practice Quizzes
            </Typography>
            <Typography color="text.secondary" mb={2}>
              Test your financial knowledge. Win points & level up!
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={() => navigate("/activity_choice", { state: { from: "dashboard" } })}
              startIcon={<QuizIcon />}
            >
              Start Quiz
            </Button>
          </CardContent>
        </Card>
      </Stack>
      <Divider sx={{ my: 4 }} />
      <Box mt={4} color="text.disabled" fontSize={14} textAlign="center">
        Tip: Check “Rewards” to redeem your points for cool stuff.
      </Box>
    </Box>
  );
}
