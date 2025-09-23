import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Divider,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BoltIcon from "@mui/icons-material/Bolt";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";

const mockMissions = [
  { title: "Budgeting 101", progress: 80, points: 30, status: "In Progress" },
  { title: "Digital Safety Basics", progress: 100, points: 40, status: "Completed" },
  { title: "Smart Savings", progress: 30, points: 24, status: "In Progress" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} mb={2}>
        Enlight Dashboard
      </Typography>
      <Grid container spacing={3} mb={3}>
        {/* User profile card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderLeft: "6px solid #1976d2" }}>
            <CardHeader
              avatar={<Avatar src="/avatar.png" />}
              title="Welcome, Sarah!"
              subheader="sarah.smart@email.com"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Member since 2024
              </Typography>
              <Button variant="text" onClick={() => navigate("/rewards_catalog")}>
                View Rewards
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Points & badges card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderLeft: "6px solid #fbc02d" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#fdd835" }}>
                  <EmojiEventsIcon />
                </Avatar>
              }
              title="Points Balance"
            />
            <CardContent>
              <Typography variant="h5" fontWeight={700}>
                270<span style={{ fontSize: 18 }}> pts</span>
              </Typography>
              <Chip color="success" icon={<BoltIcon />} label="Silver status" sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>
        {/* Missions summary card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderLeft: "6px solid #43a047" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#66bb6a" }}>
                  <SchoolIcon />
                </Avatar>
              }
              title="Your Missions"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                2 in progress, 1 completed.
              </Typography>
              <Button variant="outlined" size="small" sx={{ mt: 1 }} onClick={() => navigate("/mission_list")}>
                View Missions
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Quick Mission Progress
      </Typography>
      <List>
        {mockMissions.map((mission, i) => (
          <ListItem
            key={mission.title}
            secondaryAction={
              <Chip
                color={mission.status === "Completed" ? "success" : "info"}
                label={mission.status}
                size="small"
              />
            }
            button={true}
            onClick={() => navigate("/mission_detail")}
          >
            <ListItemAvatar>
              <Avatar>
                <SchoolIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={mission.title}
              secondary={
                <Box>
                  <LinearProgress
                    variant="determinate"
                    value={mission.progress}
                    sx={{ width: "80%", height: 8, mt: 1 }}
                  />
                  <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                    {mission.points} pts &bull; {mission.progress}%
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
      <Box display="flex" justifyContent="center" py={3}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => navigate("/activity_choice")}
        >
          New Activity
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
