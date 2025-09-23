import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import BankingIcon from "@mui/icons-material/AccountBalance";
import { useLocation, useNavigate } from "react-router-dom";

const navigationLinks = [
  { label: "Widget", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Missions", to: "/mission_list" },
  { label: "Quizzes", to: "/quiz_selection" },
  { label: "Rewards", to: "/rewards_catalog" },
];

function AppLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f6f8fc" }}>
      <AppBar position="sticky" elevation={1} color="primary">
        <Toolbar>
          <BankingIcon sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            MyAwesomeDashboard
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navigationLinks.map((item) => (
              <Typography
                key={item.label}
                onClick={() => navigate(item.to)}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  bgcolor: location.pathname === item.to ? "secondary.main" : "transparent",
                  color: location.pathname === item.to ? "#fff" : "inherit",
                  cursor: "pointer",
                  fontWeight: location.pathname === item.to ? 600 : 400,
                  transition: "background 0.1s"
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
          <IconButton sx={{ ml: 2 }} onClick={handleAvatarClick}>
            <Avatar alt="User" src="/avatar.png" />
          </IconButton>
          <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <MenuItem onClick={() => { handleMenuClose(); navigate('/dashboard'); }}>Profile</MenuItem>
            <MenuItem onClick={() => { handleMenuClose(); /* Add logout logic */ }}>Log out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flex: 1, p: { xs: 2, md: 4 }, maxWidth: 900, width: "100%", mx: "auto" }}>
        {children}
      </Box>
    </Box>
  );
}

export default AppLayout;
