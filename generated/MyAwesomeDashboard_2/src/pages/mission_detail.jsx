import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Chip,
  Stack,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useNavigate, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function MissionDetail() {
  const query = useQuery();
  const missionId = query.get("id") || 1;
  const navigate = useNavigate();

  // Placeholder mission data per id
  const data = {
    1: {
      title: "Complete Your Profile",
      description:
        "Set up your full profile details to unlock features and earn your first reward. Your information stays private and safe.",
      points: 50,
      steps: ["Add profile photo", "Enter your address", "Verify email address"],
      status: "Available",
      reward: "Bonus Points",
    },
    2: {
      title: "Make Your First Transfer",
      description:
        "Try your first money transfer. Pick any amount, any recipient. Once done, you'll earn points and a badge!",
      points: 100,
      steps: [
        "Choose recipient",
        "Enter amount",
        "Complete transfer",
        "Transaction confirmation",
      ],
      status: "In Progress",
      reward: "Transfer Hero Badge",
    },
    3: {
      title: "Refer a Friend",
      description:
        "Invite a friend to the Banking App. When they join, both of you get bonus points and exclusive offers.",
      points: 200,
      steps: ["Send invite link", "Friend joins", "Both receive rewards"],
      status: "Completed",
      reward: "Exclusive Voucher",
    },
  };

  const mission = data[missionId] || data[1];

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", px: { xs: 1, sm: 3 }, mt: 4 }}>
      <Typography variant="h4" mb={2} fontWeight={600}>
        Mission Detail
      </Typography>
      <Card variant="outlined" sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
        <Stack direction="row" alignItems="center" gap={2} mb={1}>
          <InfoOutlinedIcon color="primary" fontSize="large" />
          <Typography variant="h5" component="span">
            {mission.title}
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" mb={2}>
          {mission.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", pb: 2 }}>
          <Chip
            color="success"
            label={`Status: ${mission.status}`}
            icon={<TrendingUpIcon />}
          />
          <Chip
            label={`Reward: ${mission.reward}`}
            color="secondary"
            icon={<EmojiEventsIcon />}
          />
          <Chip label={`+${mission.points} pts`} />
        </Box>
        <Typography variant="subtitle1" fontWeight={600} mb={1}>
          What you need to do:
        </Typography>
        <ol style={{ margin: 0, paddingLeft: '1.2em', color: "#374151" }}>
          {mission.steps.map((step, idx) => (
            <li key={idx} style={{ fontSize: 16, marginBottom: 6 }}>
              {step}
            </li>
          ))}
        </ol>
        <CardActions sx={{ justifyContent: "flex-end", mt: 2 }}>
          {mission.status !== "Completed" && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/mission_progress?id=" + missionId)}
            >
              Track Progress
            </Button>
          )}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/mission_list")}
          >
            Back to Missions
          </Button>
        </CardActions>
      </Card>
      <Card variant="outlined" sx={{ p: 2, bgcolor: "#f9fafb" }}>
        <Typography variant="h6">Information</Typography>
        <Typography fontSize={15}>
          Detailed information will be displayed here.
        </Typography>
      </Card>
    </Box>
  );
}
