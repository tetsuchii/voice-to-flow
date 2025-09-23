import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OnboardingEarn = () => {
  const navigate = useNavigate();

  return (
    <Box maxWidth={520} mx="auto" pt={6}>
      <Card>
        <CardMedia
          component="img"
          height="120"
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Earn Rewards"
        />
        <CardContent>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Earn Rewards
          </Typography>
          <Typography mb={2}>
            Complete short, fun missions or quizzes to earn points and unlock exclusive perks and rewards.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => navigate("/onboarding_redeem")}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OnboardingEarn;
