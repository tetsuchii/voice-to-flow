import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import StarsIcon from "@mui/icons-material/Stars";

export default function OnboardingEarn() {
  const navigate = useNavigate();
  return (
    <Box sx={{ maxWidth: 460, mx: "auto", mt: 5 }}>
      <Card elevation={2} sx={{ borderRadius: 3 }}>
        <CardContent sx={{ textAlign: "center", pb: 4 }}>
          <StarsIcon color="secondary" sx={{ fontSize: 50, mt: 1 }} />
          <Typography variant="h5" fontWeight={600} sx={{ mt: 2, mb: 1 }}>
            Earn Points
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            <b>Earn rewards</b> for completing missions and quizzes. The more you engage, the more points you collect!
            Stay motivated as you unlock badges, achievements, and more.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            size="large"
            onClick={() => navigate("/onboarding_redeem")}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
