import React from "react";
import { Container, Typography, Button, Card, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";

export default function OnboardingLearn() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ p: 4 }}>
        <Box display="flex" alignItems="center" gap={2}>
          <SchoolIcon color="primary" sx={{ fontSize: 48 }} />
          <Typography variant="h5" fontWeight={600}>
            Learn
          </Typography>
        </Box>
        <Typography mt={2} color="text.secondary">
          Explore bite-sized financial lessons tailored for you. Grow your knowledge and become money-wise in minutes!
        </Typography>
        <Box mt={4} textAlign="right">
          <Button
            variant="contained"
            onClick={() => navigate("/onboarding/earn")}
          >
            Next
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
