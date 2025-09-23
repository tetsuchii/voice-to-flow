import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SsoLink = () => {
  const [loading, setLoading] = useState(false);
  const [email,setEmail] = useState("");
  const navigate = useNavigate();

  const handleLinkProfile = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1400);
  };

  return (
    <Box maxWidth={420} mx="auto" pt={8}>
      <Card>
        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Avatar sx={{ width: 56, height: 56, mb: 1, bgcolor: "primary.light" }} />
          <Typography variant="h5" fontWeight={600} mb={1}>
            Link Your Profile
          </Typography>
          <Typography color="text.secondary" textAlign="center">
            Link your user profile via Single Sign-On for a personalized experience.
          </Typography>
          <TextField
            label="Email Address"
            placeholder="you@email.com"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
            sx={{ my: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading || !email}
            onClick={handleLinkProfile}
          >
            {loading ? (
              <CircularProgress color="inherit" size={22} />
            ) : (
              "Link Profile"
            )}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SsoLink;
