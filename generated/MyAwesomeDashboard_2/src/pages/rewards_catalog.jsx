import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
  Stack,
  TextField,
  InputAdornment,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const rewards = [
  {
    id: 1,
    name: 'Starbucks Gift Card',
    points: 150,
    img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
    description: 'Enjoy your favorite coffee.',
    tag: 'Gift Card',
  },
  {
    id: 2,
    name: 'Amazon Voucher',
    points: 200,
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Shop anything you love.',
    tag: 'Voucher',
  },
  {
    id: 3,
    name: 'Premium Banking Support',
    points: 120,
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'Priority customer service access.',
    tag: 'Service',
  },
  {
    id: 4,
    name: 'Spotify Subscription',
    points: 180,
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: '3 months Spotify Premium.',
    tag: 'Music',
  },
];

export default function RewardsCatalog() {
  const [search, setSearch] = React.useState('');

  const filteredRewards = rewards.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box py={4} px={{ xs: 1, sm: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} textAlign="center">
        <RedeemIcon sx={{ mr: 1, verticalAlign: 'middle' }} /> Rewards Catalog
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" mb={3}>
        Browse and redeem exclusive rewards with your points!
      </Typography>

      <Paper sx={{ maxWidth: 400, mx: 'auto', mb: 4, p: 1.5 }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Search rewards, tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Grid container spacing={3}>
        {filteredRewards.length === 0 && (
          <Grid item xs={12}>
            <Typography align="center" color="text.secondary" py={4}>
              No rewards found...
            </Typography>
          </Grid>
        )}

        {filteredRewards.map((reward) => (
          <Grid item xs={12} sm={6} md={3} key={reward.id}>
            <Card elevation={2} sx={{ transition: '0.2s', '&:hover': { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="130"
                image={reward.img}
                alt={reward.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                  <Typography variant="h6" fontWeight="bold" flexGrow={1}>
                    {reward.name}
                  </Typography>
                  <Chip
                    size="small"
                    color="primary"
                    label={reward.tag}
                    icon={<StarOutlineIcon fontSize="small" />}
                  />
                </Stack>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {reward.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  fontWeight="bold"
                  sx={{ mt: 1, display: 'flex', alignItems: 'center' }}
                >
                  {reward.points} Points
                  <StarOutlineIcon color="warning" sx={{ ml: 0.5 }} />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  disableElevation
                  disabled
                  aria-label="Redeem reward"
                >
                  Redeem
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
