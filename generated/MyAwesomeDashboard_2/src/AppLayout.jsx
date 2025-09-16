import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Avatar, Tooltip, Menu, MenuItem } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: 'Widget', icon: <WidgetsIcon />, path: '/widget' },
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { label: 'Missions', icon: <LocalActivityIcon />, path: '/mission_list' },
  { label: 'Rewards', icon: <EmojiEventsIcon />, path: '/rewards_catalog' }
];

export default function AppLayout({ children }) {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography
              component={Link}
              to="/dashboard"
              variant="h6"
              color="inherit"
              sx={{
                textDecoration: "none",
                fontWeight: 700,
                mr: 4,
                display: "flex",
                alignItems: "center"
              }}
            >
              <img src="/logo192.png" alt="logo" width={34} height={34} style={{ marginRight: 8 }} />
              MyAwesomeDashboard
            </Typography>
            {navLinks.map(nav => (
              <Box
                component={Link}
                to={nav.path}
                key={nav.label}
                sx={{
                  display: 'flex',
                  color: location.pathname === nav.path ? "secondary.main" : "white",
                  alignItems: 'center',
                  mx: 1.5,
                  px: 1.5,
                  py: 0.5,
                  borderBottom: location.pathname === nav.path ? "3px solid #ffca28" : "3px solid transparent",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: 16,
                  transition: "border-color 0.2s"
                }}
              >
                <span style={{ marginRight: 6 }}>{nav.icon}</span>
                {nav.label}
              </Box>
            ))}
          </Box>
          <Tooltip title="Open user menu">
            <IconButton onClick={e => setAnchorEl(e.currentTarget)} size="large" color="inherit">
              <Avatar sx={{ bgcolor: "#3949ab" }} alt="User">A</Avatar>
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
            <MenuItem disabled>Profile (demo)</MenuItem>
            <MenuItem component={Link} to="/dashboard" onClick={() => setAnchorEl(null)}>Dashboard</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box sx={{ maxWidth: 1080, mx: "auto", p: 3 /* body padding */ }}>
        {children}
      </Box>
    </Box>
  );
}
