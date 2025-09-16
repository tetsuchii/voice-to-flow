import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip
} from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const rewards = [
  {
    id: 1,
    icon: <LocalCafeIcon color="primary" fontSize="large" />,
    title: "Free Coffee",
    description: "Enjoy a free coffee at any partner café.",
    points: 50,
  },
  {
    id: 2,
    icon: <CardGiftcardIcon color="secondary" fontSize="large" />,
    title: "Gift Card",
    description: "$10 Gift card redeemable at select stores.",
    points: 100,
  },
  {
    id: 3,
    icon: <ShoppingBagIcon color="success" fontSize="large" />,
    title: "Shopping Discount",
    description: "5% discount voucher for various online shops.",
    points: 75,
  }
];

const RewardsCatalog = () => {
  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 8, px: 2 }}>
      <Typography variant="h4" mb={2}>Rewards Catalog</Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Redeem your Enlight Points for fantastic rewards!
      </Typography>
      <Grid container spacing={3}>
        {rewards.map((reward) => (
          <Grid item xs={12} md={4} key={reward.id}>
            <Card sx={{ minHeight: 230, display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {reward.icon}
                <Typography variant="h6" mt={2}>{reward.title}</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ mt: 1, minHeight: 38 }}
                >
                  {reward.description}
                </Typography>
                <Chip
                  label={`${reward.points} Points`}
                  color="primary"
                  sx={{ mt: 2, fontWeight: 500 }}
                />
              </CardContent>
              <CardActions sx={{ mt: "auto", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled
                  startIcon={<RedeemIcon />}
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
};

export default RewardsCatalog;
