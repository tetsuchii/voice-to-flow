import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Toolbar,
  AppBar,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function MissionDetail() {
  return (
    <Box>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Button color="inherit" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
          <Typography variant="h6" sx={{ ml: 2, flexGrow: 1 }}>
            Mission Details
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ px: { xs: 1, md: 8 }, py: 3 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
          <MuiLink underline="hover" color="inherit" href="/mission_list">
            Missions
          </MuiLink>
          <Typography color="text.primary">Save Your First $100</Typography>
        </Breadcrumbs>
        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardMedia
            component="img"
            alt="Mission Banner"
            height="160"
            image="/assets/save_100_banner.jpg"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Save Your First $100
                </Typography>
                <Chip
                  label="Saving"
                  size="small"
                  color="secondary"
                  sx={{ mb: 1, mr: 1 }}
                />
                <Chip
                  avatar={<InfoOutlinedIcon />}
                  label="In Progress"
                  color="primary"
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
                  Detailed information will be displayed here. Complete this mission by depositing $100 into your Enlight savings account. Track your progress and earn exclusive rewards!
                </Typography>
              </Box>
              <Box
                component="img"
                alt="Save Icon"
                src="/assets/save_100.png"
                sx={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: "#f5f5f5",
                  boxShadow: 1,
                  p: 1,
                  border: "2px solid #e0e0e0",
                }}
              />
            </Stack>
          </CardContent>
        </Card>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            Mission Steps
          </Typography>
          <ol style={{ margin: 0, paddingLeft: 24, color: "#555" }}>
            <li>Deposit at least $100 into your Enlight savings account.</li>
            <li>
              Maintain the balance for 7 days (you’ll get bonus points for holding longer!).
            </li>
            <li>
              Get notified when you’ve completed the mission and claim your reward.
            </li>
          </ol>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            Rewards
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <EmojiEventsIcon color="warning" />
            <Typography variant="body2" color="text.secondary">
              Earn <b>500 Enlight Points</b> and unlock a <b>special badge</b> after completion!
            </Typography>
          </Stack>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2, width: { xs: "100%", sm: "auto" } }}
        >
          Start Mission
        </Button>
      </Box>
    </Box>
  );
}
