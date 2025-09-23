import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  Chip,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from "react-router-dom";

const OnboardingEarn = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <MonetizationOnIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit">
            Onboarding: Earn
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <MonetizationOnIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h4" component="h1" align="center" gutterBottom>
                Earn While You Learn
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Complete modules and missions to earn points, badges, and even monetary rewards. Track your growth and keep motivated!
              </Typography>
              <Chip label="Points" color="primary" sx={{ m: 0.5 }} />
              <Chip label="Badges" color="secondary" sx={{ m: 0.5 }} />
              <Chip label="Achievements" color="success" sx={{ m: 0.5 }} />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
                onClick={() => navigate("/onboarding-redeem")}
              >
                Next: Redeem
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default OnboardingEarn;
