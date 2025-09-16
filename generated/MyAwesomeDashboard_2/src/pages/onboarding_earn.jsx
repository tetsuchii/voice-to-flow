import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack, Chip } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import { useNavigate } from "react-router-dom";

export default function Onboarding_earn() {
  const navigate = useNavigate();

  return (
    <Box maxWidth={520} mx="auto" mt={5}>
      <Card sx={{ p: 3, borderRadius: 3 }}>
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <StarsIcon color="secondary" sx={{ fontSize: 50 }} />
            <Typography variant="h5" fontWeight={700}>
              Earn as You Learn!
            </Typography>
            <Typography color="text.secondary" align="center">
              Complete fun quizzes, missions, and educational tasks to earn <Chip label="Enlight Points" color="secondary" size="small" />.
            </Typography>
            <Typography align="center">
              The more you learn, the more you earn!
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={() => navigate("/onboarding_redeem")}
              sx={{ mt: 2 }}
            >
              Next
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
