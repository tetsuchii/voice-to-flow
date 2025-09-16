import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import QuizIcon from "@mui/icons-material/Quiz";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export default function Dashboard() {
  // Simulated user state
  const user = {
    name: 'Alex Morgan',
    avatar: '/avatar_placeholder.png',
    points: 730,
    badge: 'Money Rookie'
  };

  const stats = [
    {
      label: "Points",
      icon: <EmojiEventsIcon color="primary" />,
      value: user.points
    },
    {
      label: "Badges",
      icon: <AssignmentTurnedInIcon color="secondary" />,
      value: user.badge
    },
    {
      label: "Missions Completed",
      icon: <ShowChartIcon color="info" />,
      value: 12
    },
    {
      label: "Quizzes Taken",
      icon: <QuizIcon color="secondary" />,
      value: 7
    }
  ];

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 2 }}>
      <Typography variant="h5" fontWeight={600} sx={{ mb: 1.5 }}>
        Hello, {user.name} 👋
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Welcome back to your Enlight dashboard.<br />
        Keep learning and earning points!
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {stats.map((item) => (
          <Grid item xs={6} sm={3} key={item.label}>
            <Card elevation={1} sx={{ borderRadius: 3, textAlign: "center" }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight={700}>{item.value}</Typography>
                <Typography variant="body2" color="text.secondary">{item.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick actions */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/activity_choice"
          sx={{ minWidth: 170, fontWeight: 600 }}
          startIcon={<AssignmentTurnedInIcon />}
        >
          Start a Mission
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="/quiz_selection"
          sx={{ minWidth: 170, fontWeight: 600 }}
          startIcon={<QuizIcon />}
        >
          Take a Quiz
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          href="/rewards_catalog"
          sx={{ minWidth: 170, fontWeight: 600 }}
          startIcon={<EmojiEventsIcon />}
        >
          View Rewards
        </Button>
      </Box>
    </Box>
  );
}
