import React from "react";
import { Typography, Card, CardContent, CardMedia, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OnboardingLearn = () => {
  const navigate = useNavigate();

  return (
    <Box maxWidth={520} mx="auto" pt={6}>
      <Card>
        <CardMedia
          component="img"
          height="120"
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
          alt="Learn Onboarding"
        />
        <CardContent>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Learn with Enlight
          </Typography>
          <Typography mb={2}>
            Enlight gives you quick, rewarding learning moments right in your banking app. 
            Dive into topics like financial wellness, digital safety, and money management.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => navigate("/onboarding_earn")}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OnboardingLearn;
