import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Paper,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';

const DUMMY_ORDER_DETAILS = {
  id: '12345',
  status: 'Shipped',
  date: '2024-06-16',
  items: [
    { name: 'Bluetooth Headphones', qty: 1 },
    { name: 'Wireless Mouse', qty: 2 },
  ],
  shipping: 'Express',
  address: '123 Budapest Road, Hungary, 1011',
  customer: 'John Appleseed',
  expectedDelivery: '2024-06-20',
  trackingId: 'SHIPTRACK123456',
  price: '38 990 Ft',
};

const OrderStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchQuery } = location.state ?? {};

  // In real app, fetch actual order details by searchQuery/id

  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box mb={4} textAlign="center">
          <Typography variant="h4" color="primary" gutterBottom>
            Rendelés állapota
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Order number: <strong>{searchQuery || DUMMY_ORDER_DETAILS.id}</strong>
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Card elevation={2} sx={{ mb: 3 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <InfoIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6">Information</Typography>
                </Box>
                <Typography variant="body1" gutterBottom>
                  Detailed information will be displayed here.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Order Status"
                      secondary={
                        <Chip
                          label={DUMMY_ORDER_DETAILS.status}
                          color={DUMMY_ORDER_DETAILS.status === 'Shipped' ? 'primary' : 'secondary'}
                        />
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ScheduleIcon color="action" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Order Date"
                      secondary={DUMMY_ORDER_DETAILS.date}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Shipping Method"
                      secondary={DUMMY_ORDER_DETAILS.shipping}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Customer"
                      secondary={DUMMY_ORDER_DETAILS.customer}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Shipping Address"
                      secondary={DUMMY_ORDER_DETAILS.address}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Tracking ID"
                      secondary={DUMMY_ORDER_DETAILS.trackingId}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Expected Delivery"
                      secondary={DUMMY_ORDER_DETAILS.expectedDelivery}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Total Price"
                      secondary={DUMMY_ORDER_DETAILS.price}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card elevation={1}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Products
                </Typography>
                <List>
                  {DUMMY_ORDER_DETAILS.items.map((item, idx) => (
                    <ListItem key={idx} divider={idx !== DUMMY_ORDER_DETAILS.items.length - 1}>
                      <ListItemText
                        primary={item.name}
                        secondary={`Quantity: ${item.qty}`}
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ my: 2 }} />
                <Typography variant="caption" color="text.secondary">
                  For support, contact us at info@yourstore.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/')}
            size="large"
          >
            Új keresés
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default OrderStatus;
