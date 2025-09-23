import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import BankIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router-dom";

const BankSSOLink = () => {
  const navigate = useNavigate();

  const handleConnect = () => {
    // Simulate SSO connection
    navigate("/dashboard");
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <BankIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit">
            Bank SSO Link
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Card elevation={3}>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <Avatar sx={{ bgcolor: "primary.main", width: 60, height: 60 }}>
                <LockIcon sx={{ fontSize: 34 }} />
              </Avatar>
              <Typography variant="h5" component="h1" align="center">
                Connect Your Bank Securely
              </Typography>
              <Typography align="center" color="text.secondary" sx={{ mb: 2 }}>
                For the best experience, securely link your bank account via Single Sign-On (SSO). We never store your credentials.
              </Typography>
              <Divider sx={{ width: "100%", mb: 3 }} />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleConnect}
              >
                Connect with Bank SSO
              </Button>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
                Your security is our priority.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default BankSSOLink;
