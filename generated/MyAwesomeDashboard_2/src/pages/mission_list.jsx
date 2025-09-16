import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  Divider,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";

const missions = [
  {
    id: 1,
    title: "Complete Your Profile",
    description: "Fill out your profile information to earn your first reward.",
    status: "Available",
    points: 50,
  },
  {
    id: 2,
    title: "Make Your First Transfer",
    description: "Try making a small bank transfer. Experience made easy!",
    status: "In Progress",
    points: 100,
  },
  {
    id: 3,
    title: "Refer a Friend",
    description: "Invite a friend and both of you get rewarded.",
    status: "Completed",
    points: 200,
  },
];

const statusColor = (status) => {
  switch (status) {
    case "Available":
      return "primary";
    case "In Progress":
      return "warning";
    case "Completed":
      return "success";
    default:
      return "default";
  }
};

export default function MissionList() {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate("/mission_detail?id=" + id);
  };

  return (
    <Box sx={{ px: { xs: 1, sm: 3 }, maxWidth: 700, mx: "auto", mt: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Mission List
      </Typography>
      <Typography variant="subtitle1" mb={3} color="text.secondary">
        Boost your banking experience — complete missions and collect points!
      </Typography>
      <Card variant="outlined" sx={{ mb: 3, p: 2, bgcolor: "#f9fafb" }}>
        <Typography variant="h6" mb={1}>
          How it works
        </Typography>
        <Typography fontSize={15}>
          Choose a mission below, track your progress, and earn rewards as you complete activities in your Banking App.
        </Typography>
      </Card>
      <List>
        {missions.map((mission, idx) => (
          <React.Fragment key={mission.id}>
            <ListItem
              alignItems="flex-start"
              sx={{ borderRadius: 2, "&:hover": { bgcolor: "#f5f7fa", boxShadow: 1 }, mb: 2 }}
              secondaryAction={
                <Button variant="contained" size="small" onClick={() => handleDetails(mission.id)}>
                  {mission.status === "Completed" ? "View" : "Start"}
                </Button>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.light" }}>
                  <AssignmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h6" component="span">
                    {mission.title}
                  </Typography>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" component="span" color="text.secondary">
                      {mission.description}
                    </Typography>
                    <Box sx={{ mt: 1, display: "flex", gap: 1 }}>
                      <Chip
                        label={mission.status}
                        size="small"
                        color={statusColor(mission.status)}
                        sx={{ fontWeight: 600 }}
                      />
                      <Chip
                        label={`+${mission.points} pts`}
                        size="small"
                        color="secondary"
                        icon={<AssignmentIcon fontSize="small" />}
                      />
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            {idx !== missions.length - 1 && <Divider variant="inset" component="li" sx={{ ml: 7 }} />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
