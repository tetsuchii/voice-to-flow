import React, { useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  List,
  ListItem,
  Checkbox,
  ListItemText,
  Card,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const STEPS = [
  "Step 1: Start the mission",
  "Step 2: Complete the main activity",
  "Step 3: Finalize and claim your reward",
];

export default function MissionProgress() {
  const query = useQuery();
  const [checked, setChecked] = useState([true, false, false]);
  const navigate = useNavigate();

  const completed = checked.filter(Boolean).length;
  const total = checked.length;
  const progress = (completed / total) * 100;

  const handleToggle = (idx) => {
    setChecked((prev) =>
      prev.map((val, i) => (i <= idx ? true : false))
    );
  };

  const missionId = query.get("id") || 1;

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", px: { xs: 1, sm: 3 }, mt: 4 }}>
      <Typography variant="h4" fontWeight={600} mb={2}>
        Mission Progress
      </Typography>
      <Card
        sx={{
          p: { xs: 2, sm: 3 },
          borderRadius: 3,
          bgcolor: "#f9fafb",
          mb: 3,
        }}
        variant="outlined"
      >
        <Stack direction="row" alignItems="center" gap={2} mb={1}>
          <PendingActionsIcon color="primary" fontSize="large" />
          <Typography variant="h5" component="span">
            Progress Tracker
          </Typography>
        </Stack>
        <Typography sx={{ mb: 2 }} color="text.secondary">
          Follow each step to complete your mission and earn points!
        </Typography>
        <LinearProgress value={progress} variant="determinate" sx={{ height: 12, borderRadius: 2, mb: 2 }} />
        <Typography fontWeight={600} mb={2}>
          {completed} of {total} steps complete ({Math.round(progress)}%)
        </Typography>

        <List>
          {STEPS.map((label, idx) => (
            <ListItem
              key={label}
              disablePadding
              secondaryAction={
                checked[idx] && <CheckCircleIcon color="success" />
              }
              sx={{ bgcolor: idx === completed ? "#e3f2fd" : "inherit", borderRadius: 2, mb: 1 }}
            >
              <Checkbox
                checked={checked[idx]}
                onClick={() => handleToggle(idx)}
                disabled={!(idx === 0 || checked[idx - 1])}
                color="primary"
                sx={{ ml: 1 }}
              />
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 1 }}>
          <Button onClick={() => navigate("/mission_detail?id=" + missionId)} color="secondary" variant="outlined">
            Back to Details
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={progress < 100}
            onClick={() => navigate("/mission_completion")}
          >
            Complete Mission
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
