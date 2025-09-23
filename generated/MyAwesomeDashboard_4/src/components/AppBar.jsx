import React from 'react';
import { AppBar as MUIAppBar, Toolbar, Typography, Box, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuizIcon from '@mui/icons-material/Quiz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate, useLocation } from 'react-router-dom';

const mainTabs = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { label: "Missions", icon: <EmojiEventsIcon />, path: "/missions-list" },
  { label: "Quizzes", icon: <QuizIcon />, path: "/quizzes-list" },
  { label: "Rewards", icon: <EmojiEventsIcon />, path: "/rewards-catalog" },
];

export default function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setAnchorEl(null);

  return (
    <MUIAppBar position="sticky" elevation={1} color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src="https://mui.com/static/logo.png" alt="Logo" style={{ height: 32, marginRight: 8}} />
          <Typography variant="h6" noWrap fontWeight={700} letterSpacing={1}>
            MyAwesomeDashboard
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', gap: 1, justifyContent: "center" }}>
          {mainTabs.map(tab => (
            <Box
              key={tab.label}
              onClick={() => navigate(tab.path)}
              sx={{
                display: 'flex', alignItems: 'center', px: 2, py: 1, borderRadius: 1,
                background: location.pathname.startsWith(tab.path) ? "rgba(255,255,255,0.12)" : "none",
                cursor: "pointer",
                transition: "background 0.2s",
                color: location.pathname.startsWith(tab.path) ? "secondary.main" : "inherit",
                fontWeight: location.pathname.startsWith(tab.path) ? 700 : 400,
                '&:hover': { background: "rgba(255,255,255,0.14)" }
              }}
            >
              {tab.icon}
              <Typography sx={{ ml: 1 }}>{tab.label}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton
            color="inherit"
            onClick={() => navigate('/notifications')}
            aria-label="Notifications"
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton onClick={handleProfileMenuClick} size="small">
            <Avatar alt="Profile" src="https://randomuser.me/api/portraits/men/85.jpg" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
            onClick={handleProfileMenuClose}
          >
            <MenuItem onClick={() => navigate('/profile-badges')}>Profile & Badges</MenuItem>
            <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </MUIAppBar>
  );
}
