import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  IconButton,
  Button,
  Divider,
  Chip,
  AppBar,
  Toolbar
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';

const demoItems = [
  { id: 1, name: 'Eggs', checked: false, category: 'Dairy' },
  { id: 2, name: 'Tomatoes', checked: false, category: 'Produce' },
  { id: 3, name: 'Bread', checked: true, category: 'Bakery' },
  { id: 4, name: 'Chicken Breast', checked: false, category: 'Meat' },
  { id: 5, name: 'Cheddar Cheese', checked: false, category: 'Dairy' }
];

export default function ShoppingList() {
  const [items, setItems] = React.useState(demoItems);

  const handleToggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAdd = () => {
    // Demo add: Adds a placeholder item
    setItems([
      ...items,
      {
        id: Date.now(),
        name: 'New ingredient',
        checked: false,
        category: 'Other'
      }
    ]);
  };

  return (
    <>
      <AppBar position="static" color="default" elevation={1} sx={{ mb: 2 }}>
        <Toolbar>
          <ShoppingCartIcon sx={{ mr: 1 }} color="primary" />
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            Shopping List
          </Typography>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            color="primary"
            size="small"
            onClick={handleAdd}
          >
            Add
          </Button>
        </Toolbar>
      </AppBar>
      <Box maxWidth={520} mx="auto" mt={2}>
        <Card elevation={2}>
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Ingredients to Buy
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List dense>
              {items.map(item => (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete" size="small" onClick={() => handleDelete(item.id)}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  }
                  disablePadding
                  sx={{
                    opacity: item.checked ? 0.5 : 1,
                    transition: 'opacity 0.2s'
                  }}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={item.checked}
                      tabIndex={-1}
                      onChange={() => handleToggle(item.id)}
                      color="primary"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        sx={{
                          textDecoration: item.checked ? 'line-through' : 'none'
                        }}
                      >
                        {item.name}
                        <Chip
                          label={item.category}
                          size="small"
                          color="secondary"
                          sx={{ ml: 1, verticalAlign: 'middle' }}
                        />
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
              {items.length === 0 && (
                <Typography sx={{ mt: 2, textAlign: 'center' }} color="text.secondary">
                  Your shopping list is empty!
                </Typography>
              )}
            </List>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ mt: 3 }}
        >
          Update Inventory After Shopping
        </Button>
      </Box>
    </>
  );
}
