import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  Divider,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const sampleMissions = [
  {
    id: 1,
    title: "Complete Profile",
    desc: "Fill out your personal information to strengthen your profile.",
    points: 50,
    status: "Available",
    icon: <StarOutlineIcon />,
    category: "Onboarding",
  },
  {
    id: 2,
    title: "First Transaction",
    desc: "Make your first banking transaction.",
    points: 100,
    status: "In Progress",
    icon: <EmojiEventsIcon />,
    category: "Action",
  },
  {
    id: 3,
    title: "Refer a Friend",
    desc: "Invite a friend to join and earn bonus points!",
    points: 150,
    status: "Available",
    icon: <EmojiEventsIcon />,
    category: "Referral",
  },
];

export default function MissionList() {
  const [search, setSearch] = React.useState("");
  const filteredMissions = sampleMissions.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ maxWidth: 680, mx: "auto", py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Mission List
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search missions"
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      <List sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}>
        {filteredMissions.map(mission => (
          <React.Fragment key={mission.id}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="view mission"
                  href={`/mission_detail/${mission.id}`}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              }
              button
              sx={{ "&:hover": { bgcolor: "action.hover" } }}
              component="a"
              href={`/mission_detail/${mission.id}`}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.light" }}>
                  {mission.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {mission.title}
                    </Typography>
                    <Chip label={mission.category} size="small" color="secondary" />
                  </Box>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    {mission.desc}
                  </Typography>
                }
              />
              <Stack direction="column" alignItems="end" spacing={0.5}>
                <Typography variant="caption" color="text.secondary">
                  Points
                </Typography>
                <Typography variant="body1" fontWeight={700} color="primary">
                  {mission.points}
                </Typography>
                <Chip label={mission.status} size="small" />
              </Stack>
            </ListItem>
            <Divider variant="inset" component="li" sx={{ ml: 9 }} />
          </React.Fragment>
        ))}
        {filteredMissions.length === 0 && (
          <Box sx={{ py: 6 }}>
            <Typography align="center" color="text.secondary">
              No missions found. Try a different search.
            </Typography>
          </Box>
        )}
      </List>
    </Box>
  );
}
