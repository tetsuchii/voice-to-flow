import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Chip,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const rewards = [
  {
    id: 1,
    title: "Amazon Gift Card",
    pts: 1000,
    image: <CardGiftcardIcon fontSize="large" color="primary" />,
    available: true,
    tag: "Popular",
  },
  {
    id: 2,
    title: "Starbucks Coupon",
    pts: 750,
    image: <LocalOfferIcon fontSize="large" color="secondary" />,
    available: false,
    tag: "Coming Soon",
  },
  {
    id: 3,
    title: "Enlight Badge",
    pts: 250,
    image: <EmojiEventsIcon fontSize="large" color="success" />,
    available: true,
    tag: "New",
  },
];

export default function RewardsCatalog() {
  return (
    <Box maxWidth={900} mx="auto" mt={6}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Rewards Catalog
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Earn points through missions and quizzes, then redeem them for awesome rewards!
      </Typography>
      <Grid container spacing={3}>
        {rewards.map((reward) => (
          <Grid item xs={12} sm={6} md={4} key={reward.id}>
            <Card
              sx={{
                transition: "box-shadow .2s",
                "&:hover": { boxShadow: 4 },
                opacity: reward.available ? 1 : 0.7,
              }}
              variant="outlined"
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    mx: "auto",
                    mb: 2,
                    bgcolor: "background.paper",
                  }}
                  variant="rounded"
                >
                  {reward.image}
                </Avatar>
                <Typography gutterBottom variant="h6" fontWeight={700}>
                  {reward.title}
                </Typography>
                <Chip
                  label={reward.tag}
                  size="small"
                  color={reward.tag === "Coming Soon" ? "default" : "success"}
                  sx={{ mb: 1 }}
                />
                <Typography color="text.secondary" mb={2}>
                  {reward.pts} pts
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  disabled={!reward.available}
                >
                  {reward.available ? "Redeem" : "Unavailable"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
