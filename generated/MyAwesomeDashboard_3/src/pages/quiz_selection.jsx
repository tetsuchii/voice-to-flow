import React from "react";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Card,
  CardContent,
  Divider,
  Stack,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const quizzes = [
  {
    id: 1,
    title: "Budgeting Basics",
    description: "Test your knowledge on budgeting for daily expenses.",
    status: "Available",
    points: 200,
    img: "/assets/quiz_budgeting.png",
  },
  {
    id: 2,
    title: "Understanding Credit",
    description: "Challenge yourself on credit scores and usage.",
    status: "Completed",
    points: 150,
    img: "/assets/quiz_credit.png",
  },
  {
    id: 3,
    title: "Smart Savings",
    description: "Quizzes on saving techniques and goals.",
    status: "Locked",
    points: 180,
    img: "/assets/quiz_saving.png",
  },
];

export default function QuizSelection() {
  return (
    <Box>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Quiz Selection
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ px: 2, py: 3 }}>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          Choose a quiz to earn Enlight Points and test your financial smarts!
        </Typography>
        <List>
          {quizzes.map((quiz, idx) => (
            <React.Fragment key={quiz.id}>
              <Card
                variant="outlined"
                sx={{
                  mb: 2,
                  transition: "box-shadow .2s",
                  cursor: "pointer",
                  "&:hover": { boxShadow: 2, borderColor: "primary.light" },
                }}
              >
                <CardContent sx={{ py: 1.5, px: 2 }}>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar src={quiz.img} alt={quiz.title}>
                        <QuizIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={quiz.title}
                      secondary={quiz.description}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                    <Stack spacing={1} sx={{ alignItems: "flex-end" }}>
                      <Chip
                        avatar={<EmojiEventsIcon fontSize="small" />}
                        label={`${quiz.points} pts`}
                        color="success"
                        size="small"
                        sx={{ mb: 1 }}
                      />
                      <Chip
                        label={quiz.status}
                        color={
                          quiz.status === "Available"
                            ? "primary"
                            : quiz.status === "Completed"
                            ? "success"
                            : "default"
                        }
                        size="small"
                        variant={quiz.status === "Available" ? "filled" : "outlined"}
                      />
                    </Stack>
                  </ListItemButton>
                </CardContent>
              </Card>
              {idx < quizzes.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
}
