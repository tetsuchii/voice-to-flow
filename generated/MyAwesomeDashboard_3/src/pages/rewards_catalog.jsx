import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RedeemIcon from "@mui/icons-material/Redeem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StarIcon from "@mui/icons-material/Star";

const rewards = [
  {
    id: 1,
    title: "Amazon Gift Card",
    description: "Get a digital Amazon gift card to spend as you wish.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=300&q=80",
    points: 500,
    category: "Gift Cards",
    icon: <ShoppingBagIcon color="primary" />,
    available: true,
  },
  {
    id: 2,
    title: "Free Coffee",
    description: "Enjoy a free coffee at participating stores.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=300&q=80",
    points: 200,
    category: "Food & Drinks",
    icon: <LocalCafeIcon color="brown" />,
    available: false,
  },
  {
    id: 3,
    title: "Premium Enlight Badge",
    description: "Show off your Enlight achievements with a digital badge.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=300&q=80",
    points: 100,
    category: "Badges",
    icon: <StarIcon color="gold" />,
    available: true,
  },
];

export default function RewardsCatalog() {
  return (
    <Box
      bgcolor="#F5F6FA"
      minHeight="100vh"
      py={4}
      px={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h3" fontWeight={700} mb={1} textAlign="center">
        Rewards Catalog
      </Typography>
      <Typography color="text.secondary" mb={4} textAlign="center">
        Browse and redeem rewards using your Enlight points.
      </Typography>
      <Box mb={4} width="100%" maxWidth={480}>
        <Paper sx={{ p: 1.5 }}>
          <TextField
            fullWidth
            placeholder="Search rewards..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Paper>
      </Box>
      <Grid container spacing={4} maxWidth={900} justifyContent="center">
        {rewards.map((reward) => (
          <Grid item xs={12} sm={6} md={4} key={reward.id}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                position: "relative",
                border:
                  reward.available !== false ? "2px solid #1976D2" : "2px solid #e0e0e0",
                overflow: "visible",
              }}
            >
              <CardMedia
                component="img"
                alt={reward.title}
                height="160"
                image={reward.img}
                sx={{
                  objectFit: "cover",
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />
              <CardContent>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  {reward.icon}
                  <Typography variant="h6" fontWeight={600}>
                    {reward.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {reward.description}
                </Typography>
                <Chip
                  color={reward.available ? "primary" : "default"}
                  label={
                    reward.available
                      ? `${reward.points} pts`
                      : "Out of Stock"
                  }
                  icon={<RedeemIcon />}
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                />
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                {reward.available ? (
                  <Button
                    variant="contained"
                    startIcon={<RedeemIcon />}
                    fullWidth
                    sx={{ borderRadius: 2 }}
                  >
                    Redeem
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    startIcon={<CheckCircleIcon />}
                    fullWidth
                    sx={{ borderRadius: 2 }}
                    disabled
                  >
                    Not Available
                  </Button>
                )}
              </CardActions>
              <Chip
                label={reward.category}
                variant="outlined"
                size="small"
                sx={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  bgcolor: "white",
                  fontWeight: 500,
                  zIndex: 2,
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
