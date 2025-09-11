import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  Box,
  CircularProgress,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function SSOLink() {
  const navigate = useNavigate();
  const [linking, setLinking] = useState(false);

  const handleLinkProfile = () => {
    setLinking(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ p: 4, textAlign: "center" }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <AccountCircleIcon color="primary" sx={{ fontSize: 52, mb: 1 }} />
          <Typography variant="h5" fontWeight={600}>
            Link User Profile via SSO
          </Typography>
          <Typography mt={1} color="text.secondary">
            Securely connect your profile to track your progress and redeem rewards.
          </Typography>
        </Box>
        <Box mt={4}>
          <Button
            variant="contained"
            onClick={handleLinkProfile}
            disabled={linking}
            size="large"
            sx={{ px: 6, py: 1 }}
          >
            {linking ? <CircularProgress size={24} color="inherit" /> : "Link My Profile"}
          </Button>
        </Box>
      </Card>
    </Container>
  );
}
