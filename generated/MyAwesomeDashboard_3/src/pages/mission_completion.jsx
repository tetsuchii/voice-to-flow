import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Stack,
  Tooltip,
  AppBar,
  Toolbar,
  Alert,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ReplayIcon from "@mui/icons-material/Replay";

export default function MissionCompletion() {
  return (
    <Box>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mission Complete!
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center", mt: { xs: 8, sm: 12 } }}>
        <Card
          elevation={5}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 4,
            minWidth: 350,
            maxWidth: "90vw",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "warning.main",
              width: 72,
              height: 72,
              mb: 2,
              boxShadow: 2,
            }}
          >
            <CelebrationIcon sx={{ fontSize: 48 }} />
          </Avatar>
          <Typography variant="h4" fontWeight="bold" align="center">
            Congratulations!
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            align="center"
            sx={{ mt: 1, mb: 3 }}
          >
            You've successfully completed the mission:<br />
            <b>Save Your First $100</b>
          </Typography>
          <Alert
            severity="success"
            variant="outlined"
            icon={<EmojiEventsIcon />}
            sx={{ mb: 2, width: "100%" }}
          >
            Reward Unlocked: <b>500 Enlight Points</b> + Exclusive Badge
          </Alert>
          <Stack direction="row" spacing={2} sx={{ mt: 2, mb: 1 }}>
            <Tooltip title="See more missions">
              <Button variant="contained" color="primary" size="large">
                Back to Missions
              </Button>
            </Tooltip>
            <Tooltip title="Try again or share your success">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ReplayIcon />}
                size="large"
              >
                Repeat
              </Button>
            </Tooltip>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}
