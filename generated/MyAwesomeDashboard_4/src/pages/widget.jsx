import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import QuizIcon from "@mui/icons-material/Quiz";
import RedeemIcon from "@mui/icons-material/Redeem";
import { useNavigate } from "react-router-dom";

const Widget = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/onboarding-learn");
  };

  return (
    <>
      <AppBar position="static" color="primary" sx={{ mb: 4 }}>
        <Toolbar>
          <DashboardIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" sx={{ flex: 1 }}>
            MyAwesomeDashboard
          </Typography>
          <Button color="inherit" onClick={handleGetStarted} variant="outlined">
            Get Started
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Welcome to Your Home Dashboard Widget!
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
            Gain insights, earn rewards, complete missions, and learn new things—all in one place.
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardMedia>
                  <QuizIcon color="primary" sx={{ fontSize: 60, p: 2 }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Interactive Quizzes
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary">
                    Test your knowledge & earn points.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardMedia>
                  <EmojiEventsIcon color="warning" sx={{ fontSize: 60, p: 2 }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Complete Missions
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary">
                    Boost engagement as you achieve new milestones.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardMedia>
                  <RedeemIcon color="success" sx={{ fontSize: 60, p: 2 }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Redeem Rewards
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary">
                    Exchange points for exciting prizes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardMedia>
                  <DashboardIcon color="secondary" sx={{ fontSize: 60, p: 2 }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Track Progress
                  </Typography>
                  <Typography variant="body2" align="center" color="text.secondary">
                    Visualize your learning and earning journey.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Widget;
