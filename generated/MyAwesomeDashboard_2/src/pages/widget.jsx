import React from "react";
import { Box, Typography, Card, CardContent, Button, Avatar, useTheme, Stack } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useNavigate } from "react-router-dom";

const placeholderImg = "https://source.unsplash.com/collection/190727/600x300";

export default function Widget() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      <Card elevation={4} sx={{ maxWidth: 480, mx: "auto", mt: 6, mb: 3, borderRadius: 3 }}>
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <Avatar sx={{ bgcolor: theme.palette.secondary.main, width: 56, height: 56 }}>
              <WidgetsIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" fontWeight={700} align="center">
              Enlight Widget in Banking App
            </Typography>
            <img
              src={placeholderImg}
              alt="Widget introduction"
              style={{ width: "100%", maxHeight: 150, borderRadius: 12 }}
            />
            <Typography color="text.secondary" align="center">
              Get started on your financial learning journey with gamified missions, quizzes, and exclusive rewards. Tap below to continue!
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={() => navigate("/onboarding_learn")}
            >
              Let's Begin
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
