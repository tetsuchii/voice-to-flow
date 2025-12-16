import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';

const defaultInventory = [
  { name: 'Eggs', quantity: '12', icon: '🍳' },
  { name: 'Tomato', quantity: '4', icon: '🍅' },
  { name: 'Spinach', quantity: '1 bag', icon: '🥬' },
  { name: 'Oats', quantity: '400g', icon: '🌾' },
];

export default function IngredientInventory() {
  const [inventory, setInventory] = useState(defaultInventory);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', quantity: '' });

  const handleOpen = () => { setForm({ name: '', quantity: '' }); setOpen(true); };
  const handleClose = () => setOpen(false);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleAdd = () => {
    if (form.name.trim() && form.quantity.trim()) {
      setInventory(arr => [...arr, { ...form, icon: '🧂' }]);
      handleClose();
    }
  };
  const handleDelete = idx => setInventory(arr => arr.filter((_, i) => i !== idx));

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 6, px: 2 }}>
      <Typography variant="h4" fontWeight={700}>Ingredient Inventory</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Track what’s stocked in your kitchen.</Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ mb: 3 }}
      >
        Add Ingredient
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <List>
            {inventory.map((item, idx) => (
              <ListItem
                key={idx}
                secondaryAction={
                  <>
                    <IconButton edge="end" color="inherit" onClick={() => alert('Edit feature coming soon!')}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" color="error" onClick={() => handleDelete(idx)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'primary.light', fontSize: 23 }}>
                    {item.icon || <KitchenIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={`Qty: ${item.quantity}`} />
              </ListItem>
            ))}
            {inventory.length === 0 && (
              <ListItem>
                <ListItemText primary="No ingredients yet. Add your first one!" />
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Ingredient</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            label="Quantity"
            name="quantity"
            fullWidth
            margin="normal"
            value={form.quantity}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">Cancel</Button>
          <Button onClick={handleAdd} variant="contained" color="primary" disabled={!form.name || !form.quantity}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
