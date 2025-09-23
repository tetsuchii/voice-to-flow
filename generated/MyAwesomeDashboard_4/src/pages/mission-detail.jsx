import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Box
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, useLocation } from "react-router-dom";

const MissionDetail = () => {
  const navigate = useNavigate();
  // Get the missionId from the query params for demo purposes
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const missionId = searchParams.get("id") || "Unknown";

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <InfoIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Mission Detail
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Card elevation={4}>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <InfoIcon color="info" sx={{ fontSize: 40, mr: 1 }} />
              <Typography variant="h5">Information</Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              Detailed information will be displayed here.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              (e.g., requirements, steps, tips, status, etc. for Mission ID: <strong>{missionId}</strong>)
            </Typography>
            <Button variant="contained" onClick={() => navigate("/missions-list")}>
              Back to Missions
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default MissionDetail;
