import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, LinearProgress, Chip, Divider, Tabs, Tab } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from 'react-router-dom';

export default function EnlightDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(0);

  function handleTabChange(e, value) {
    setActiveTab(value);
    if(value === 0) navigate('/missions-list');
    if(value === 1) navigate('/quizzes-list');
    if(value === 2) navigate('/rewards-catalog');
  }

  return (
    <Box sx={{ px: { xs: 1, md: 3 }, pt: 4, maxWidth: 1000, mx: 'auto' }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
        Enlight Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar
                src="https://randomuser.me/api/portraits/men/11.jpg"
                sx={{ width: 72, height: 72, mb: 1 }}
              />
              <Typography variant="h6" fontWeight={600}>Avery Brooks</Typography>
              <Chip color="primary" icon={<EmojiEventsIcon />} label="Level 5" sx={{ mt: 1 }}/>
              <Divider sx={{ my: 2, width: "100%" }}/>
              <Typography color="text.secondary" fontSize={14}>
                Total Points: <b>1,800</b>
              </Typography>
              <LinearProgress
                variant="determinate"
                value={75}
                sx={{ width: "100%", mt: 1, height: 8, borderRadius: 4 }}
                color="secondary"
              />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                75% to next reward
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card elevation={2} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                Quick Stats
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Chip
                    icon={<AssignmentTurnedInIcon />}
                    label="10 Missions"
                    color="success"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Chip
                    icon={<QuizIcon />}
                    label="8 Quizzes"
                    color="info"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Chip
                    icon={<PaidIcon />}
                    label="5 Rewards"
                    color="secondary"
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{ mb: 1 }}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
          >
            <Tab label="Missions" />
            <Tab label="Quizzes" />
            <Tab label="Rewards" />
          </Tabs>
          <Box>
            <Typography color="text.secondary" sx={{ mb: 1 }}>
              Select a section above to view your missions, quizzes, or rewards in detail.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function QuizIcon() {
  return <span role="img" aria-label="quiz" style={{ fontSize: '1.2em', verticalAlign: 'middle' }}>📝</span>
}
