import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Stack,
  Chip,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FlagIcon from "@mui/icons-material/Flag";
import AccessTimeIcon from "@mui/icons-material/AccessTimeOutlined";

export default function MissionProgress() {
  const progressValue = 70;
  return (
    <Box>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Button color="inherit" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
          <Typography variant="h6" sx={{ ml: 2, flexGrow: 1 }}>
            Mission Progress
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ maxWidth: 550, mx: "auto", p: { xs: 2, md: 4 } }}>
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Save Your First $100
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
              <Chip
                icon={<FlagIcon />}
                label="In Progress"
                color="primary"
                size="small"
              />
              <Chip
                icon={<AccessTimeIcon />}
                label="6 days left"
                color="default"
                size="small"
              />
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Deposit $100 into your Enlight savings account. Maintain the balance for 7 days to complete.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Progress
              </Typography>
              <LinearProgress
                color="primary"
                variant="determinate"
                value={progressValue}
                sx={{ height: 10, borderRadius: 5 }}
              />
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", mt: 0.5, float: "right" }}
              >
                {progressValue}% Complete
              </Typography>
            </Box>
            <Stack spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" disabled={progressValue < 100}>
                Complete Mission
              </Button>
              <Button variant="outlined" color="secondary">
                View Details
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
