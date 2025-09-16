import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Placeholder mission detail data
const missionDetails = {
  id: 1,
  title: "Complete Profile",
  desc:
    "Provide detailed information in your user profile to boost your account completion status. This helps us tailor services and improve your experience.",
  points: 50,
  status: "Available",
  icon: <EmojiEventsIcon />,
  category: "Onboarding",
  steps: [
    "Upload your profile photo.",
    "Enter your address and phone number.",
    "Verify your email address.",
  ],
  rewards: ["Earn 50 points", "Unlock badge", "Faster onboarding"],
};

export default function MissionDetail() {
  // Simulating param
  // In real app, use useParams() from react-router
  const mission = missionDetails;

  return (
    <Box sx={{ maxWidth: 640, mx: "auto", py: 4 }}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href="/mission_list"
        sx={{ mb: 2 }}
      >
        Back to Missions
      </Button>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            mb={2}
          >
            <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
              {mission.icon}
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={700}>
                {mission.title}
              </Typography>
              <Stack direction="row" spacing={1} mt={0.5}>
                <Chip label={mission.category} size="small" color="secondary" />
                <Chip label={mission.status} size="small" />
                <Chip
                  icon={<EmojiEventsIcon fontSize="small" />}
                  label={`${mission.points} pts`}
                  size="small"
                  color="success"
                />
              </Stack>
            </Box>
          </Stack>
          <Typography variant="body1" mb={2}>
            {mission.desc}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Steps to Complete:
          </Typography>
          <ol style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            {mission.steps.map((step, i) => (
              <li key={i}>
                <Typography variant="body2">{step}</Typography>
              </li>
            ))}
          </ol>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Rewards:
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {mission.rewards.map((reward, i) => (
              <Chip key={i} label={reward} color="primary" variant="outlined" />
            ))}
          </Stack>
        </CardContent>
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href="/mission_progress"
          >
            Start Mission
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
