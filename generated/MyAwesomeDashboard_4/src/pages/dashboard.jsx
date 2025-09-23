import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Badge
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import QuizIcon from "@mui/icons-material/Quiz";
import RedeemIcon from "@mui/icons-material/Redeem";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const EnlightDashboard = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("missions");

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    switch (newValue) {
      case "missions":
        navigate("/missions-list");
        break;
      case "quizzes":
        navigate("/quizzes-list");
        break;
      case "rewards":
        navigate("/rewards-catalog");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar>
          <EmojiEventsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Enlight Dashboard
          </Typography>
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <PersonIcon />
          </Avatar>
        </Toolbar>
      </AppBar>
      <Paper square>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          sx={{ mt: 1 }}
        >
          <Tab icon={<EmojiEventsIcon />} label="Missions" value="missions" />
          <Tab icon={<QuizIcon />} label="Quizzes" value="quizzes" />
          <Tab icon={<RedeemIcon />} label="Rewards" value="rewards" />
        </Tabs>
      </Paper>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* Main dashboard overview */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Latest Mission
                </Typography>
                <Typography>
                  "Complete 3 lessons this week" <Badge badgeContent="Active" color="success" />
                </Typography>
                <Box sx={{ mt: 2, width: "100%" }}>
                  <Box
                    sx={{
                      height: 12,
                      borderRadius: 6,
                      background: "#e0e0e0",
                      overflow: "hidden"
                    }}
                  >
                    <Box
                      sx={{
                        width: "60%",
                        height: "100%",
                        bgcolor: "primary.main",
                        transition: "width 0.5s"
                      }}
                    />
                  </Box>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
                    60% Completed
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Your Points
                </Typography>
                <Typography variant="h4" component="div" sx={{ mb: 1 }}>
                  1,250
                </Typography>
                <Typography color="text.secondary">
                  Redeem points for rewards!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  Recent Activity
                </Typography>
                <ul style={{ paddingLeft: 20, margin: 0 }}>
                  <li>Quiz "JavaScript Basics" completed - <strong>85%</strong> score!</li>
                  <li>Badge "Learning Streak" earned</li>
                  <li>Mission "Join Community" started</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EnlightDashboard;
