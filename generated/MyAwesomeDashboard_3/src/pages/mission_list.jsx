import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Card,
  CardContent,
  IconButton,
  Divider,
  Toolbar,
  AppBar,
  InputBase,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const missions = [
  {
    id: 1,
    title: "Save Your First $100",
    desc: "Complete this mission by saving $100 into your account.",
    status: "In Progress",
    category: "Saving",
    img: "/assets/save_100.png",
  },
  {
    id: 2,
    title: "Learn About Credit Scores",
    desc: "Watch the video to learn how credit scores work.",
    status: "Locked",
    category: "Education",
    img: "/assets/credit_score.png",
  },
  {
    id: 3,
    title: "First Card Usage",
    desc: "Make your first transaction using Enlight Credit Card.",
    status: "Available",
    category: "Spending",
    img: "/assets/card_usage.png",
  },
];

export default function MissionList() {
  return (
    <Box>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Missions
          </Typography>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          m: 2,
          p: 0.5,
          borderRadius: 2,
          boxShadow: 0,
          background: "#f5f5f7",
        }}
      >
        <SearchIcon sx={{ ml: 1, color: "grey.500" }} />
        <InputBase
          placeholder="Search Missions..."
          sx={{ ml: 2, flex: 1 }}
          inputProps={{ "aria-label": "search missions" }}
        />
      </Paper>
      <Box sx={{ px: 2 }}>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          Explore missions to unlock rewards, learn smart money habits, and earn points!
        </Typography>
        <List>
          {missions.map((mission, idx) => (
            <React.Fragment key={mission.id}>
              <Card
                variant="outlined"
                sx={{
                  mb: 2,
                  cursor: "pointer",
                  transition: "box-shadow 0.2s",
                  "&:hover": { boxShadow: 2, borderColor: "primary.light" },
                }}
              >
                <CardContent sx={{ py: 1.5, px: 2 }}>
                  <ListItem disableGutters secondaryAction={
                    <IconButton edge="end" aria-label="details" color="primary">
                      <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                  }>
                    <ListItemAvatar>
                      <Avatar src={mission.img} alt={mission.title} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={mission.title}
                      secondary={mission.desc}
                      primaryTypographyProps={{ fontWeight: "bold" }}
                    />
                    <Chip
                      label={mission.status}
                      color={
                        mission.status === "Available"
                          ? "success"
                          : mission.status === "In Progress"
                          ? "primary"
                          : "default"
                      }
                      size="small"
                      sx={{ ml: 2 }}
                    />
                  </ListItem>
                  <Box sx={{ mt: 0.5, ml: 7 }}>
                    <Chip
                      label={mission.category}
                      size="small"
                      variant="outlined"
                      color="secondary"
                    />
                  </Box>
                </CardContent>
              </Card>
              {idx < missions.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
}
