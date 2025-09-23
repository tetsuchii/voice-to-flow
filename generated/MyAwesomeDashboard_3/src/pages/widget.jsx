import React from "react";
import { Card, CardContent, Typography, Box, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Widget = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ minHeight: 400, mt: 6 }}>
      <Card sx={{ maxWidth: 420, p: 2, boxShadow: 4 }}>
        <CardMedia
          component="img"
          height="130"
          image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
          alt="Banking Widget"
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={700}>
            Enlight Widget
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Discover how Enlight can help you learn and earn rewards directly in your banking app.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => navigate("/onboarding_learn")}
          >
            Get started
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Widget;
