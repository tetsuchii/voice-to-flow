import React from "react";
import { Container, Typography, Button, Card, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate } from "react-router-dom";

export default function OnboardingEarn() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ p: 4 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <EmojiEventsIcon color="secondary" sx={{ fontSize: 48 }} />
          <Typography variant="h5" fontWeight={600}>
            Earn
          </Typography>
        </Box>
        <Typography mt={2} color="text.secondary">
          Complete missions and quizzes to earn Enlight points. Progress through challenges to level up your rewards.
        </Typography>
        <Box mt={4} textAlign="right">
          <Button
            variant="contained"
            onClick={() => navigate("/onboarding/redeem")}
          >
            Next
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
