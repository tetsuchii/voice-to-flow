import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SchoolIcon from "@mui/icons-material/School";

export default function OnboardingLearn() {
  const navigate = useNavigate();
  return (
    <Box sx={{ maxWidth: 460, mx: "auto", mt: 5 }}>
      <Card elevation={2} sx={{ borderRadius: 3 }}>
        <CardContent sx={{ textAlign: "center", pb: 4 }}>
          <SchoolIcon color="primary" sx={{ fontSize: 50, mt: 1 }} />
          <Typography variant="h5" fontWeight={600} sx={{ mt: 2, mb: 1 }}>
            Welcome to Enlight
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            <b>Learn</b> about finances, money management, and unlock useful knowledge at your own pace.
            Start by exploring bite-sized lessons curated for your banking needs.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            size="large"
            onClick={() => navigate("/onboarding_earn")}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
