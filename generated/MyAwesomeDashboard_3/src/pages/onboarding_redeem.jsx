import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OnboardingRedeem = () => {
  const navigate = useNavigate();

  return (
    <Box maxWidth={520} mx="auto" pt={6}>
      <Card>
        <CardMedia
          component="img"
          height="120"
          image="https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80"
          alt="Redeem Rewards"
        />
        <CardContent>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Redeem Your Points
          </Typography>
          <Typography mb={2}>
            Exchange your points for banking rewards, gifts, or donations. Your learning pays off!
          </Typography>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => navigate("/sso_link")}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OnboardingRedeem;
