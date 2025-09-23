import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  Chip,
  Divider,
  Tooltip,
  Stack,
  Badge,
  Button,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const badges = [
  {
    label: 'Quiz Master',
    description: 'Completed 10 quizzes with a score above 80%.',
    icon: <EmojiEventsIcon color="primary" />,
    color: 'primary',
    achieved: true,
  },
  {
    label: 'Mission Pro',
    description: 'Finished all missions in one month.',
    icon: <StarIcon color="secondary" />,
    color: 'secondary',
    achieved: false,
  },
  {
    label: 'Early Bird',
    description: 'Logged in before 8AM for 5 days straight.',
    icon: <VerifiedIcon color="success" />,
    color: 'success',
    achieved: true,
  },
];

export default function ProfileBadges() {
  return (
    <Box sx={{ maxWidth: 620, mx: 'auto', mt: 4, p: 3 }}>
      <Card sx={{ mb: 4, display: 'flex', alignItems: 'center', p: 2 }}>
        <Avatar sx={{ width: 72, height: 72, mr: 2 }} src="https://randomuser.me/api/portraits/men/32.jpg">
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={600}>
            Alex Johnson
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 1 }}>
            Level 7 Explorer
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Streak: 12d" color="success" size="small" />
            <Chip label="Points: 1450" color="primary" size="small" />
          </Stack>
        </CardContent>
      </Card>

      <Typography variant="h6" gutterBottom>
        Badges Unlocked
      </Typography>
      <Grid container spacing={2}>
        {badges.map((badge, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Tooltip title={badge.description} arrow>
              <Card
                variant="outlined"
                sx={{
                  borderColor: badge.achieved ? 'primary.main' : 'grey.300',
                  opacity: badge.achieved ? 1 : 0.55,
                  background:
                    badge.achieved
                      ? 'linear-gradient(135deg,#f2f8ff 50%,#e3eafe 100%)'
                      : undefined,
                }}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                  <Badge
                    badgeContent={badge.achieved && <VerifiedIcon color={badge.color} fontSize="small" />}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                  >
                    <Avatar sx={{ bgcolor: `${badge.color}.main`, mr: 2 }}>
                      {badge.icon}
                    </Avatar>
                  </Badge>
                  <Box>
                    <Typography fontWeight={600}>{badge.label}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {badge.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Tooltip>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom>
        My Achievements
      </Typography>
      <Stack direction="row" spacing={2}>
        <Card variant="outlined" sx={{ p: 2, minWidth: 120, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700} color="primary">
            12
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Consecutive days active
          </Typography>
        </Card>
        <Card variant="outlined" sx={{ p: 2, minWidth: 120, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700} color="secondary">
            1450
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Points collected
          </Typography>
        </Card>
      </Stack>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="contained" color="primary">
          Share My Badges
        </Button>
      </Box>
    </Box>
  );
}
