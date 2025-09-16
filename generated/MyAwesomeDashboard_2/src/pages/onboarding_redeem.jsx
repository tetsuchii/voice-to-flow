import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import { useNavigate } from "react-router-dom";

export default function Onboarding_redeem() {
  const navigate = useNavigate();

  return (
    <Box maxWidth={520} mx="auto" mt={5}>
      <Card sx={{ p: 3, borderRadius: 3 }}>
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <RedeemIcon color="primary" sx={{ fontSize: 54 }} />
            <Typography variant="h5" fontWeight={700} align="center">
              Redeem Exciting Rewards
            </Typography>
            <Typography color="text.secondary" align="center">
              Exchange your Enlight Points for amazing rewards, voucher codes, and exclusive perks. Learning pays off!
            </Typography>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => navigate("/sso_link")}
              sx={{ mt: 2 }}
            >
              Get Started
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
