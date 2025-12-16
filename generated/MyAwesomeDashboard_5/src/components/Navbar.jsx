import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Button, Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/', icon: <RestaurantMenuIcon /> },
  { label: 'Recipes', path: '/get-recipe' },
  { label: 'Meal Planner', path: '/meal-planner' },
  { label: 'Inventory', path: '/ingredient-inventory' },
  { label: 'Saved', path: '/saved-recipes' },
  { label: 'Shopping List', path: '/shopping-list' }
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="sticky" color="primary" elevation={1}>
      <Toolbar>
        <IconButton size="large" color="inherit" edge="start" sx={{ mr: 2 }} component={Link} to="/" aria-label="dashboard">
          <RestaurantMenuIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: '0.5px' }}>
          MyAwesomeDashboard
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              color={location.pathname === item.path ? 'secondary' : 'inherit'}
              startIcon={item.icon}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 0, ml: 2 }}>
          <Tooltip title="Account settings">
            <IconButton onClick={handleProfileMenu} color="inherit">
              <Avatar alt="User" src="https://i.pravatar.cc/40?img=60" />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => { handleClose(); navigate('/profile'); }}>Profile</MenuItem>
            <MenuItem onClick={() => { handleClose(); navigate('/onboarding'); }}>Preferences</MenuItem>
            <MenuItem onClick={() => { handleClose(); alert('Signed out!'); }}>Sign Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
