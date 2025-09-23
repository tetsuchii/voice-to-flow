import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Chip,
  Grid,
} from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import StarRateIcon from "@mui/icons-material/StarRate";
import RedeemIcon from "@mui/icons-material/Redeem";

export default function MissionComplete() {
  return (
    <Box maxWidth={480} mx="auto" mt={6} textAlign="center">
      <Avatar
        sx={{
          bgcolor: "success.light",
          width: 96,
          height: 96,
          mx: "auto",
        }}
      >
        <CelebrationIcon sx={{ fontSize: 60, color: "success.main" }} />
      </Avatar>
      <Typography variant="h4" fontWeight={700} mt={2}>
        Mission Complete!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mt={1} mb={3}>
        Congratulations on finishing your mission.
      </Typography>
      <Card elevation={2} sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Your Rewards
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Chip
                icon={<StarRateIcon color="warning" />}
                label="+500 Points"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Chip
                icon={<RedeemIcon color="secondary" />}
                label="Bronze Badge"
                color="secondary"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mb: 1 }}
        href="/dashboard"
      >
        Go to Dashboard
      </Button>
      <Button color="inherit" href="/missions-list" sx={{ ml: 2 }}>
        View More Missions
      </Button>
    </Box>
  );
}
