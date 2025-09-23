import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  Divider,
  Stack,
  Paper,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function QuizCompletion() {
  return (
    <Box
      minHeight="100vh"
      bgcolor="#f5f6fa"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={2}
    >
      <Card sx={{ maxWidth: 440, width: "100%", mb: 2, borderRadius: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              sx={{
                bgcolor: "success.main",
                height: 56,
                width: 56,
                fontSize: 32,
              }}
            >
              <CheckCircleIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h4" fontWeight={700}>
                Quiz Completed!
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Congratulations on finishing this quiz!
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Stack direction="row" spacing={2} alignItems="center">
            <Paper
              sx={{
                p: 1,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderRadius: 2,
                minWidth: 90,
              }}
              elevation={0}
            >
              <EmojiEventsIcon />
              <Typography fontWeight={600}>+30pts</Typography>
            </Paper>

            <Chip
              label="New Badge: Enlight Novice"
              color="success"
              variant="outlined"
              icon={<EmojiEventsIcon />}
              sx={{ fontWeight: 600 }}
            />
          </Stack>

          <Typography sx={{ mt: 4 }} color="text.secondary">
            Your score: <b>5/6 correct</b> <br />
            Keep going to unlock more rewards!
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button
              variant="contained"
              href="/dashboard"
              size="large"
              sx={{ borderRadius: 3, minWidth: 120 }}
            >
              Back to Dashboard
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="/rewards_catalog"
              size="large"
              sx={{ borderRadius: 3, minWidth: 120 }}
            >
              View Rewards
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
