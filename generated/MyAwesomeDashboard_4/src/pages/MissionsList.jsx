import React from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Chip, Button, Avatar, LinearProgress
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from 'react-router-dom';

const missions = [
  {
    id: 1,
    title: 'Complete Financial Literacy Basics',
    progress: 85,
    points: 100,
    status: "In Progress",
    img: "https://source.unsplash.com/100x100/?money,business",
  },
  {
    id: 2,
    title: 'Investing 101',
    progress: 100,
    points: 200,
    status: "Complete",
    img: "https://source.unsplash.com/100x100/?investing,finance",
  },
  {
    id: 3,
    title: 'Budget Smartly',
    progress: 50,
    points: 90,
    status: "In Progress",
    img: "https://source.unsplash.com/100x100/?budget,calculator",
  }
];

export default function MissionsList() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, maxWidth: 900, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
        Missions
      </Typography>

      <Grid container spacing={2}>
        {missions.map(m => (
          <Grid item xs={12} md={4} key={m.id}>
            <Card
              sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                height: 210, cursor: "pointer", ':hover': { boxShadow: 6, background: "#f4fefd" }
              }}
              onClick={() => navigate('/mission-detail')}
              elevation={2}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Avatar src={m.img} alt="Mission" sx={{ mr: 1, width: 48, height: 48 }} />
                  <Typography fontWeight={600}>{m.title}</Typography>
                </Box>
                <Typography color="text.secondary" fontSize={14} sx={{ mb: 2 }}>
                  {m.points} Points&nbsp; <EmojiEventsIcon fontSize="small" color="action" />
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={m.progress}
                  color={m.progress === 100 ? "secondary" : "primary"}
                  sx={{ height: 7, borderRadius: 4, mb: 1 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Chip
                    label={m.status}
                    color={m.status === "Complete" ? "success" : "primary"}
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
