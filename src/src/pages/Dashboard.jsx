import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  Avatar,
  Chip,
} from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StarsIcon from "@mui/icons-material/Stars";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Enlight Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 62,
                  height: 62,
                  m: "auto",
                }}
              >
                <StarsIcon fontSize="large" />
              </Avatar>
              <Typography variant="h6" mt={2}>
                Enlight Points
              </Typography>
              <Typography variant="h3" color="secondary.main" fontWeight={700}>
                1,580
              </Typography>
              <Chip label="Level 5" color="secondary" sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <AssessmentIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Missions Completed
                      </Typography>
                      <Typography variant="h6" fontWeight={700}>
                        12
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/activity-choice")}
                  >
                    Start Activity
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <LibraryBooksIcon color="secondary" />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Quizzes Passed
                      </Typography>
                      <Typography variant="h6" fontWeight={700}>
                        8
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/rewards-catalog")}
                  >
                    View Rewards
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{ mt: 4 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography color="text.secondary">
            Keep learning to unlock new rewards and missions!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
