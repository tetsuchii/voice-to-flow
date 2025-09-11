import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  Chip,
} from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { useNavigate } from "react-router-dom";

const missions = [
  {
    id: "1",
    title: "Budgeting Basics",
    description: "Learn how to manage and categorize your expenses.",
    points: 75,
    status: "Active",
  },
  {
    id: "2",
    title: "Understanding Credit",
    description: "Explore how credit works and why your score matters.",
    points: 100,
    status: "In Progress",
  },
  {
    id: "3",
    title: "Savings Challenge",
    description: "Complete a savings plan for two weeks.",
    points: 150,
    status: "Completed",
  },
];

export default function MissionList() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Mission List
      </Typography>
      <Grid container spacing={3}>
        {missions.map((mission) => (
          <Grid item xs={12} md={4} key={mission.id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" mb={1}>
                  <EmojiObjectsIcon color="primary" />
                  <Typography variant="h6" ml={1}>
                    {mission.title}
                  </Typography>
                  <Chip
                    size="small"
                    label={mission.status}
                    color={
                      mission.status === "Completed"
                        ? "success"
                        : mission.status === "Active"
                        ? "info"
                        : "warning"
                    }
                    sx={{ ml: 1 }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {mission.description}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <Typography variant="caption" color="secondary">
                    {mission.points} pts
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => navigate(`/missions/${mission.id}`)}
                  >
                    Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
