import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/ListAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import QuizIcon from '@mui/icons-material/Quiz';

const navItems = [
  {
    label: 'Home',
    path: '/dashboard',
    icon: <HomeIcon />,
  },
  {
    label: 'Missions',
    path: '/mission_list',
    icon: <ListIcon />,
  },
  {
    label: 'Quizzes',
    path: '/quiz_selection',
    icon: <QuizIcon />,
  },
  {
    label: 'Rewards',
    path: '/rewards_catalog',
    icon: <EmojiEventsIcon />,
  },
];

export default function AppBarLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Simulate user
  const user = {
    name: 'Alex Morgan',
    avatar: '/avatar_placeholder.png'
  };

  const handleAvatarClick = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
            onClick={() => navigate('/dashboard')}
          >
            <img src="/logo.svg" alt="Enlight" style={{ height: 32, marginRight: 8 }} />
            Enlight Banking
          </Typography>
          {navItems.map((item) => (
            <IconButton
              key={item.label}
              aria-label={item.label}
              color={location.pathname.startsWith(item.path) ? 'secondary' : 'inherit'}
              onClick={() => navigate(item.path)}
              sx={location.pathname.startsWith(item.path) ? {
                bgcolor: 'rgba(255,179,0,0.08)',
                borderRadius: 2
              } : {}}
            >
              {item.icon}
            </IconButton>
          ))}
          <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
            <Avatar src={user.avatar} alt={user.name} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{ sx: { minWidth: 160 } }}
          >
            <MenuItem disabled>
              <Avatar sx={{ width: 32, height: 32, mr: 1 }} src={user.avatar} />
              <Typography variant="body1">{user.name}</Typography>
            </MenuItem>
            <MenuItem onClick={() => {navigate('/dashboard'); handleMenuClose();}}>
              My Dashboard
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              Settings
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, width: '100%', p: { xs: 1, sm: 3 } }}>
        {children}
      </Box>
    </Box>
  );
}
