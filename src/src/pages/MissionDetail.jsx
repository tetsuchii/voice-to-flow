import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const DUMMY_DETAILS = {
  1: {
    title: "Budgeting Basics",
    content:
      "Track your weekly income and expenses using the budgeting tool, and finish a 2-minute lesson about the importance of budgeting.",
    points: 75,
  },
  2: {
    title: "Understanding Credit",
    content:
      "Complete the learning module on credit, then answer 3 quick questions to test your knowledge.",
    points: 100,
  },
  3: {
    title: "Savings Challenge",
    content:
      "Automate savings transfers for 2 consecutive weeks to complete this mission and earn bonus points.",
    points: 150,
  },
};

export default function MissionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mission = DUMMY_DETAILS[id] || {};

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" fontWeight={700}>
            Mission Detail Screen
          </Typography>
          <Box mt={2} mb={2}>
            <Card variant="outlined" sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Information
              </Typography>
              <Typography variant="body2">
                {mission.content ||
                  "Detailed information will be displayed here."}
              </Typography>
            </Card>
          </Box>
          <Typography color="secondary" gutterBottom>
            Reward: {mission.points || "N/A"} Enlight Points
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              variant="contained"
              onClick={() => navigate(`/missions/${id}/progress`)}
            >
              Start Mission
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
