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
import RedeemIcon from "@mui/icons-material/Redeem";
import { useNavigate } from "react-router-dom";

const OnboardingRedeem = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <RedeemIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit">
            Onboarding: Redeem
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <RedeemIcon color="secondary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h4" component="h1" align="center" gutterBottom>
                Redeem Your Rewards
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Exchange your earned points for exciting rewards from our catalog! Treat yourself for every achievement unlocked.
              </Typography>
              <Chip label="Gift Cards" color="primary" sx={{ m: 0.5 }} />
              <Chip label="Exclusive Content" color="secondary" sx={{ m: 0.5 }} />
              <Chip label="Discounts" color="success" sx={{ m: 0.5 }} />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 3 }}
                onClick={() => navigate("/bank-sso-link")}
              >
                Next: Secure Link
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default OnboardingRedeem;
