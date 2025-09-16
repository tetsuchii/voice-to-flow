import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack, Divider } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useNavigate } from "react-router-dom";

export default function Onboarding_learn() {
  const navigate = useNavigate();

  return (
    <Box maxWidth={520} mx="auto" mt={6}>
      <Card sx={{ p: 3, borderRadius: 3 }}>
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <AutoStoriesIcon color="primary" sx={{ fontSize: 56 }} />
            <Typography variant="h5" fontWeight={700}>
              Welcome to Enlight!
            </Typography>
            <Typography color="text.secondary" align="center">
              Learn smarter, not harder. Enlight helps you understand banking, savings, and finance through engaging, bite-sized lessons.
            </Typography>
            <Divider flexItem />
            <Typography variant="subtitle1" align="center" color="primary">
              Unlock your first lesson and earn points!
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => navigate("/onboarding_earn")}
              sx={{ mt: 2 }}
            >
              Next &rarr;
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
