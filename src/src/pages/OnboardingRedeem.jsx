import React from "react";
import { Container, Typography, Button, Card, Box } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import { useNavigate } from "react-router-dom";

export default function OnboardingRedeem() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ p: 4 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <RedeemIcon color="primary" sx={{ fontSize: 48 }} />
          <Typography variant="h5" fontWeight={600}>
            Redeem
          </Typography>
        </Box>
        <Typography mt={2} color="text.secondary">
          Use your points to unlock awesome perks, gift cards, and exclusive offers in the rewards catalog.
        </Typography>
        <Box mt={4} textAlign="right">
          <Button
            variant="contained"
            onClick={() => navigate("/sso-link")}
          >
            Get Started
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
