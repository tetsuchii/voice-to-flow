import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import QuizIcon from '@mui/icons-material/Quiz';
import RedeemIcon from '@mui/icons-material/Redeem';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const recentMissions = [
    {
      title: 'Save More Every Month',
      status: 'Completed',
      points: 50,
    },
    {
      title: 'Understanding Credit',
      status: 'In Progress',
      points: 30,
    },
    {
      title: 'Smart Investments',
      status: 'Available',
      points: 40,
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', p: 0, bgcolor: 'background.default' }}>
      <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: 4, textAlign: 'center', mb: 2 }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            m: 'auto',
            mb: 1,
            bgcolor: 'secondary.main',
            boxShadow: 2,
          }}
        >
          <EmojiEventsOutlinedIcon sx={{ fontSize: 50 }} />
        </Avatar>
        <Typography variant="h4">Welcome Back!</Typography>
        <Typography>Your Enlight Dashboard</Typography>
      </Box>

      <Box sx={{ maxWidth: 900, mx: 'auto', p: 2 }}>
        <Grid container spacing={3} sx={{ mb: 1 }}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ bgcolor: '#dee2f6' }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Points Balance
                </Typography>
                <Typography variant="h5" color="primary">
                  1,200
                </Typography>
                <Chip label="Gold Tier" color="secondary" sx={{ mt: 1 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Completed Missions
                </Typography>
                <Typography variant="h5">
                  8
                </Typography>
                <AssignmentTurnedInIcon color="primary" sx={{ mt: 1 }} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Claimed Rewards
                </Typography>
                <Typography variant="h5">
                  3
                </Typography>
                <RedeemIcon color="secondary" sx={{ mt: 1 }} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Recent Missions
            </Typography>
            <List>
              {recentMissions.map((m, idx) => (
                <ListItem key={idx}>
                  <ListItemAvatar>
                    <Avatar>
                      <AssignmentTurnedInIcon color="primary" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={m.title}
                    secondary={`Status: ${m.status} | +${m.points} pts`}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              startIcon={<AssignmentTurnedInIcon />}
              onClick={() => navigate('/activity_choice')}
            >
              Missions & Quizzes
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              size="large"
              startIcon={<RedeemIcon />}
              onClick={() => navigate('/rewards_catalog')}
            >
              Rewards Catalog
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
