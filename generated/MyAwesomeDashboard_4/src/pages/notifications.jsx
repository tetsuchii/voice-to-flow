import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Stack,
  IconButton,
  Badge,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloseIcon from "@mui/icons-material/Close";

const notifications = [
  {
    id: 1,
    icon: <NotificationsActiveIcon color="primary" />,
    title: "New Mission Available!",
    desc: "Try the new Smart Savings Challenge.",
    date: "Today",
    unread: true,
    type: "action",
  },
  {
    id: 2,
    icon: <EmojiEventsIcon color="success" />,
    title: "Quiz Completed",
    desc: "You earned +100 pts for Financial Basics.",
    date: "Yesterday",
    unread: false,
    type: "reward",
  },
  {
    id: 3,
    icon: <ErrorIcon color="warning" />,
    title: "Reminder",
    desc: "Complete your onboarding for extra points.",
    date: "2 days ago",
    unread: true,
    type: "reminder",
  },
];

export default function Notifications() {
  return (
    <Box maxWidth={600} mx="auto" mt={6}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Notifications / Engagement
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Stay up to date with the latest missions, quizzes, and reward alerts.
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <List dense>
            {notifications.length === 0 && (
              <Typography color="text.secondary" textAlign="center" py={4}>
                No notifications right now.
              </Typography>
            )}
            {notifications.map((notif) => (
              <ListItem
                key={notif.id}
                alignItems="flex-start"
                sx={{
                  bgcolor: notif.unread ? "action.selected" : undefined,
                  borderRadius: 2,
                  mb: 1,
                }}
                secondaryAction={
                  <IconButton aria-label="dismiss">
                    <CloseIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Badge
                    color="primary"
                    variant="dot"
                    invisible={!notif.unread}
                  >
                    <Avatar sx={{ bgcolor: "background.paper" }}>
                      {notif.icon}
                    </Avatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={notif.unread ? 700 : 500}
                      >
                        {notif.title}
                      </Typography>
                      {notif.type === "reward" && (
                        <Chip size="small" color="success" label="Reward" />
                      )}
                      {notif.type === "reminder" && (
                        <Chip size="small" color="warning" label="Reminder" />
                      )}
                    </Stack>
                  }
                  secondary={
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        noWrap
                        sx={{ flexShrink: 0 }}
                      >
                        {notif.desc}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.disabled"
                        sx={{ ml: 1 }}
                      >
                        {notif.date}
                      </Typography>
                    </Stack>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
