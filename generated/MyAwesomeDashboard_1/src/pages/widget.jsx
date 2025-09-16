import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export default function Widget() {
  const navigate = useNavigate();
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 8 }}>
      <Card elevation={4} sx={{ borderRadius: 4 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <EmojiObjectsIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Enlight Widget in Banking App
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Start your Enlight journey.<br />
            Learn, earn rewards, and redeem for exclusive offers within your banking app.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/onboarding_learn")}
          >
            Tap to Start
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
