import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import RedeemIcon from "@mui/icons-material/Redeem";

export default function OnboardingRedeem() {
  const navigate = useNavigate();
  return (
    <Box sx={{ maxWidth: 460, mx: "auto", mt: 5 }}>
      <Card elevation={2} sx={{ borderRadius: 3 }}>
        <CardContent sx={{ textAlign: "center", pb: 4 }}>
          <RedeemIcon color="primary" sx={{ fontSize: 48, mt: 1 }} />
          <Typography variant="h5" fontWeight={700} sx={{ mt: 2, mb: 1 }}>
            Redeem Your Rewards
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Redeem your hard-earned points for exclusive offers, discounts, and products within your app.
            It pays to learn!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
            onClick={() => navigate("/sso_link")}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
