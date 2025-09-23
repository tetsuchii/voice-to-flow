import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Button,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router-dom";

const OnboardingLearn = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <MenuBookIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit">
            Onboarding: Learn
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <MenuBookIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h4" component="h1" align="center" gutterBottom>
                Learn New Things
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Unlock knowledge modules, improve your skills, and engage with interactive content. 
                Our platform is designed to help you grow and achieve your learning goals at your own pace.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
                onClick={() => navigate("/onboarding-earn")}
              >
                Next: Earn
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default OnboardingLearn;
