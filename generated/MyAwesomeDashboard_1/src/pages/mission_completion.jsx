import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Avatar,
  Chip,
  Fade,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Confetti from "react-confetti";

export default function MissionCompletion() {
  // Confetti disables after 3s
  const [showConfetti, setShowConfetti] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ maxWidth: 480, mx: "auto", py: 8, position: "relative" }}>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
      )}
      <Fade in>
        <Card sx={{ borderRadius: 3, boxShadow: 4, overflow: "visible" }}>
          <CardContent>
            <Stack alignItems="center" spacing={2}>
              <Avatar
                sx={{
                  bgcolor: "success.main",
                  width: 72,
                  height: 72,
                  boxShadow: 3,
                  mb: 1,
                }}
              >
                <EmojiEventsIcon fontSize="large" />
              </Avatar>
              <Typography variant="h4" fontWeight={700} color="success.dark" gutterBottom>
                Mission Completed!
              </Typography>
              <Chip
                label="You earned 50 points"
                color="success"
                icon={<EmojiEventsIcon />}
                sx={{ mb: 2, fontWeight: 600, fontSize: 16 }}
              />
              <Typography variant="body1" color="text.secondary" align="center">
                Congratulations! <br />You have successfully completed the <b>Complete Profile</b> mission and earned reward points.<br />
                <br />
                Keep going to unlock more benefits and missions!
              </Typography>
              <Button
                href="/mission_list"
                variant="outlined"
                size="large"
                sx={{ mt: 3 }}
              >
                Back To Missions
              </Button>
              <Button
                href="/rewards_catalog"
                variant="contained"
                size="large"
                color="primary"
                sx={{ mt: 1 }}
              >
                View Rewards Catalog
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
}
