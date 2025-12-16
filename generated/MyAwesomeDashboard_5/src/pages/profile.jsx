import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  TextField,
  Grid,
  Divider,
  Chip,
  AppBar,
  Toolbar
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import KitchenIcon from '@mui/icons-material/Kitchen';

const demoProfile = {
  name: 'Alex Doe',
  email: 'alex.doe@email.com',
  avatar: '',
  preferences: [
    { title: 'Vegetarian', color: 'success' },
    { title: 'Lactose Free', color: 'warning' }
  ],
  equipment: ['Oven', 'Air Fryer', 'Blender']
};

export default function Profile() {
  const [editing, setEditing] = React.useState(false);
  const [profile, setProfile] = React.useState(demoProfile);

  const [form, setForm] = React.useState({
    name: profile.name,
    email: profile.email
  });

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    setProfile({ ...profile, ...form });
    setEditing(false);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <PersonIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6" color="inherit">
            User Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Box maxWidth={520} mx="auto" mt={4}>
        <Card elevation={3} sx={{ p: 2 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar sx={{ width: 96, height: 96, mb: 2, bgcolor: 'primary.main' }} src={profile.avatar}>
              {profile.name[0]}
            </Avatar>
            {!editing ? (
              <>
                <Typography gutterBottom variant="h5">{profile.name}</Typography>
                <Typography variant="body1" color="text.secondary">{profile.email}</Typography>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  onClick={handleEdit}
                  sx={{ mt: 2 }}
                >
                  Edit Profile
                </Button>
              </>
            ) : (
              <Box component="form" width="100%" mt={1}>
                <TextField
                  fullWidth
                  margin="normal"
                  size="small"
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  margin="normal"
                  size="small"
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="button"
                  color="success"
                  variant="contained"
                  startIcon={<SaveIcon />}
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={handleSave}
                >
                  Save Changes
                </Button>
              </Box>
            )}
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Cooking Preferences
            </Typography>
            <Box mb={2}>
              {profile.preferences.map(pref => (
                <Chip
                  key={pref.title}
                  label={pref.title}
                  color={pref.color}
                  size="small"
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              Favorite Equipment
            </Typography>
            <Grid container spacing={1}>
              {profile.equipment.map(eq => (
                <Grid item key={eq}>
                  <Chip
                    icon={<KitchenIcon fontSize="small" />}
                    label={eq}
                    color="info"
                    size="small"
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
}
