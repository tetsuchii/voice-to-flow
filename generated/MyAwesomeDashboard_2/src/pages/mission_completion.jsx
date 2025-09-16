import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

export default function MissionCompletion() {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 450, mx: "auto", mt: 6, textAlign: "center" }}>
      <Confetti numberOfPieces={120} recycle={false} width={window.innerWidth} height={window.innerHeight / 1.1} />
      <Card sx={{ px: 3, pt: 4, pb: 5, borderRadius: 4, boxShadow: 2 }}>
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 62, mb: 1 }} />
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Mission Completed!
        </Typography>
        <Typography mb={2} color="text.secondary">
          Congratulations! You've completed your mission and earned:
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
          <Chip color="primary" size="medium" label="+100 Points" />
          <Chip
            icon={<CheckCircleOutlineIcon />}
            label="Transfer Hero Badge"
            color="secondary"
            size="medium"
          />
        </Stack>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb: 1 }}
          onClick={() => navigate("/rewards_catalog")}
        >
          View Rewards Catalog
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </Button>
      </Card>
    </Box>
  );
}
