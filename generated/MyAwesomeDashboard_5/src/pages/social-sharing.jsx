import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  TextField,
  Divider,
  Avatar,
  Snackbar,
  Tooltip,
  IconButton,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const recipe = {
  title: "Creamy Avocado Pasta",
  description:
    "A fresh, herby, and quick weeknight dinner. Rich in healthy fats and plant-based protein.",
  image:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  url: window.location.origin + "/recipe-details/creamy-avocado-pasta",
};

function getShareUrl(platform, recipe) {
  switch (platform) {
    case "twitter":
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        recipe.url
      )}&text=${encodeURIComponent("Check out this recipe: " + recipe.title)}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        recipe.url
      )}`;
    case "instagram":
      // Instagram doesn't support direct sharing via URL; show disabled/help tooltip
      return "#";
    default:
      return "#";
  }
}

export default function SocialSharing() {
  const [snackbar, setSnackbar] = React.useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(recipe.url);
    setSnackbar(true);
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Social Sharing
      </Typography>
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          boxShadow: 3,
          borderRadius: 3,
          mb: 3,
        }}
      >
        <Box
          component="img"
          src={recipe.image}
          alt={recipe.title}
          sx={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {recipe.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1.5 }}
          >
            {recipe.description}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              background: "#f9f9f9",
              borderRadius: 2,
              p: 1,
              mt: 1,
              mb: 0.5,
            }}
          >
            <TextField
              value={recipe.url}
              size="small"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              sx={{ flex: 1, background: "#fff" }}
            />
            <Tooltip title="Copy link">
              <IconButton color="primary" onClick={handleCopyLink}>
                <LinkIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </CardContent>
      </Card>

      <Typography
        sx={{ mb: 1, color: "text.secondary", fontSize: "0.95rem" }}
        align="center"
      >
        Share this recipe on
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Tooltip title="Share on Twitter">
          <Button
            startIcon={<TwitterIcon />}
            color="primary"
            variant="contained"
            sx={{ textTransform: "none" }}
            href={getShareUrl("twitter", recipe)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Button>
        </Tooltip>
        <Tooltip title="Share on Facebook">
          <Button
            startIcon={<FacebookIcon />}
            color="info"
            variant="contained"
            sx={{ textTransform: "none" }}
            href={getShareUrl("facebook", recipe)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Button>
        </Tooltip>
        <Tooltip title="Instagram Share not directly supported" arrow>
          <span>
            <Button
              startIcon={<InstagramIcon />}
              color="secondary"
              variant="contained"
              sx={{ textTransform: "none" }}
              disabled
            >
              Instagram
            </Button>
          </span>
        </Tooltip>
      </Stack>

      <Divider sx={{ width: "100%", my: 2 }} />

      <Box sx={{ mt: 2, width: "100%" }}>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Invite a friend by email
        </Typography>
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
          <TextField
            size="small"
            label="Friend's Email"
            placeholder="e.g. friend@email.com"
            sx={{ flex: 2, background: "#fff" }}
            type="email"
          />
          <Button variant="outlined" color="primary" disabled>
            Send
          </Button>
        </Stack>
        <Typography
          variant="caption"
          align="center"
          sx={{ display: "block", mt: 1, color: "text.secondary" }}
        >
          (Email invitation coming soon!)
        </Typography>
      </Box>

      <Snackbar
        open={snackbar}
        autoHideDuration={2500}
        onClose={() => setSnackbar(false)}
        message={
          <span style={{ display: "flex", alignItems: "center" }}>
            <CheckCircleOutlineIcon
              color="success"
              sx={{ mr: 0.5, verticalAlign: "middle" }}
            />
            Link copied!
          </span>
        }
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
}
