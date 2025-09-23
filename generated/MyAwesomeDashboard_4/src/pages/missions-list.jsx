import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Box,
  Card,
  CardContent,
  Button
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const missions = [
  {
    id: 1,
    title: "Learn JavaScript Basics",
    status: "In Progress",
    points: 100,
  },
  {
    id: 2,
    title: "Complete First Quiz",
    status: "Completed",
    points: 200,
  },
  {
    id: 3,
    title: "Invite a Friend",
    status: "Available",
    points: 150,
  },
];

const MissionsList = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <EmojiEventsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit">
            Mission List
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Missions
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Complete missions to earn points and unlock rewards!
        </Typography>
        <List>
          {missions.map((mission) => (
            <Card key={mission.id} variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <ListItem
                  button
                  onClick={() => navigate(`/mission-detail?id=${mission.id}`)}
                  alignItems="flex-start"
                >
                  <ListItemIcon>
                    <EmojiEventsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={mission.title}
                    secondary={`Points: ${mission.points}`}
                  />
                  <Chip
                    label={mission.status}
                    color={
                      mission.status === "Completed"
                        ? "success"
                        : mission.status === "In Progress"
                        ? "warning"
                        : "default"
                    }
                    sx={{ mr: 2 }}
                  />
                  <ListItemSecondaryAction>
                    <Button
                      endIcon={<ArrowForwardIosIcon />}
                      size="small"
                      onClick={() => navigate(`/mission-detail?id=${mission.id}`)}
                    >
                      Details
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
              </CardContent>
            </Card>
          ))}
        </List>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default MissionsList;
