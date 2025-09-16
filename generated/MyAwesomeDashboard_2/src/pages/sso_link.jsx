import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button, CircularProgress, Stack, Avatar, TextField } from "@mui/material";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useNavigate } from "react-router-dom";

export default function Sso_link() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLink = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <Box maxWidth={420} mx="auto" mt={7}>
      <Card sx={{ p: 3, borderRadius: 3 }}>
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <Avatar sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}>
              <LockPersonIcon fontSize="large" />
            </Avatar>
            <Typography variant="h6" fontWeight={600}>
              Link User Profile via SSO
            </Typography>
            <Typography color="text.secondary" align="center">
              Securely link your Enlight profile to your banking account for a personalized experience.
            </Typography>
            <TextField
              fullWidth
              label="Email Address"
              placeholder="your@email.com"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              sx={{ mt: 1 }}
            />
            <Button
              size="large"
              variant="contained"
              color="secondary"
              sx={{ width: "100%" }}
              disabled={loading || !email}
              onClick={handleLink}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Link Profile"}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
