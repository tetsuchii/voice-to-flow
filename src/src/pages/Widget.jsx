import React from "react";
import { Container, Card, Typography, Button, Box, Avatar } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useNavigate } from "react-router-dom";

export default function Widget() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ p: 4, textAlign: "center" }}>
        <Avatar sx={{ bgcolor: "primary.main", mx: "auto", width: 56, height: 56 }}>
          <WidgetsIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5" fontWeight={600} mt={2} gutterBottom>
          Enlight Widget in Banking App
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Level up your banking experience! Earn points while you learn and unlock exclusive rewards.
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/onboarding/learn")}
            sx={{ px: 4, py: 1 }}
          >
            Get Started
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
