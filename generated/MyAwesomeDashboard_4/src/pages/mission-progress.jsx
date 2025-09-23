import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const mockProgress = 60; // percent

const steps = [
  { label: "Step 1: Get Started", done: true },
  { label: "Step 2: Complete Lesson", done: true },
  { label: "Step 3: Take Quiz", done: false },
  { label: "Step 4: Claim Reward", done: false },
];

export default function MissionProgress() {
  return (
    <Box maxWidth={500} mx="auto" mt={6}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Mission Progress
      </Typography>
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Keep going! You're almost done.
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <LinearProgress
              variant="determinate"
              value={mockProgress}
              sx={{ flexGrow: 1, mr: 2, height: 10, borderRadius: 5 }}
              color={mockProgress === 100 ? "success" : "primary"}
            />
            <Typography variant="body2" fontWeight={600}>
              {mockProgress}%
            </Typography>
          </Box>
          <List dense disablePadding>
            {steps.map((step, idx) => (
              <ListItem key={step.label}>
                <ListItemIcon>
                  {step.done ? (
                    <CheckCircleIcon color="success" />
                  ) : (
                    <AccessTimeIcon color="disabled" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={step.label}
                  primaryTypographyProps={{
                    color: step.done ? "text.primary" : "text.secondary",
                    fontWeight: step.done ? 600 : 400,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <Box textAlign="center" mt={4}>
        <Avatar
          sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
          src="https://source.unsplash.com/random/100x100?goal"
          alt="Mission"
          variant="circular"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={mockProgress < 100}
        >
          {mockProgress < 100 ? "Complete steps to finish" : "Complete Mission"}
        </Button>
      </Box>
    </Box>
  );
}
