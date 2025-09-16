import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function MissionProgress() {
  // For demonstration, simulate progress state
  const [progress, setProgress] = React.useState(60);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(old => (old < 100 ? old + 10 : 100));
    }, 900);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ maxWidth: 480, mx: "auto", py: 6 }}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href="/mission_detail"
        sx={{ mb: 2 }}
      >
        Back to Details
      </Button>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Stack direction="row" alignItems="center" gap={2} mb={2}>
            <EmojiEventsIcon fontSize="large" color="warning" />
            <Typography variant="h5" fontWeight="700">
              Completing: Complete Profile
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary" mb={3}>
            You're currently working on this mission. Complete all steps to earn rewards!
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mb: 1 }}
            color={progress === 100 ? "success.main" : "text.primary"}
            fontWeight={600}
          >
            Progress: {progress}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 12,
              borderRadius: 2,
              mb: 2,
              bgcolor: "grey.200",
              "& .MuiLinearProgress-bar": { borderRadius: 2 },
            }}
            color={progress === 100 ? "success" : "primary"}
          />
          <Typography variant="subtitle2" fontWeight={600} mb={1}>
            Steps:
          </Typography>
          <ol style={{ marginLeft: "1.2em" }}>
            <li>
              <Typography variant="body2" color="success.main">
                Upload profile photo <CheckCircleOutlineIcon fontSize="inherit" color="success" />
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color={progress >= 70 ? "success.main" : "text.primary"}>
                Enter address and phone number {progress >= 70 && <CheckCircleOutlineIcon fontSize="inherit" color="success" />}
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color={progress === 100 ? "success.main" : "text.primary"}>
                Verify email address {progress === 100 && <CheckCircleOutlineIcon fontSize="inherit" color="success" />}
              </Typography>
            </li>
          </ol>
        </CardContent>
        <Box sx={{ p: 2, textAlign: "right" }}>
          <Button
            variant="contained"
            size="large"
            color="success"
            disabled={progress < 100}
            href="/mission_completion"
          >
            {progress === 100 ? "Complete Mission" : "Finish Steps"}
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
