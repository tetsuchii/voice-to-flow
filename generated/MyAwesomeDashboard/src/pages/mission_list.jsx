import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AssignmentNatureIcon from '@mui/icons-material/Assignment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const missions = [
  {
    title: "Intro to Banking",
    description: "Get started with the basics of banking",
    status: "Unlocked",
  },
  {
    title: "Budgeting Bootcamp",
    description: "Learn how to manage your expenses",
    status: "In Progress",
  },
  {
    title: "Credit Score Hero",
    description: "Understand how credit works",
    status: "Locked",
  },
];

const Mission_list = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Mission List
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          Complete missions to earn points and rewards!
        </Typography>
        <Card>
          <CardContent>
            <List>
              {missions.map((m, idx) => (
                <ListItem
                  key={idx}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="details"
                      onClick={() => navigate('/mission_detail')}
                      disabled={m.status === "Locked"}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>
                      <AssignmentNatureIcon color="primary" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={m.title}
                    secondary={`${m.description} (${m.status})`}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
        <Button
          sx={{ mt: 3 }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate('/dashboard')}
        >
          Back to Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default Mission_list;
