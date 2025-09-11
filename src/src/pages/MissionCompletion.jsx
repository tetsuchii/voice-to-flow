import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Alert,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

export default function MissionCompletion() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card>
        <CardContent sx={{ textAlign: "center" }}>
          <CheckCircleIcon color="success" sx={{ fontSize: 58 }} />
          <Typography variant="h5" fontWeight={600} mt={2}>
            Congratulations!
          </Typography>
          <Alert severity="success" sx={{ mt: 2 }}>
            Mission completed. You've earned 100 Enlight Points!
          </Alert>
          <Typography mt={2} color="text.secondary">
            Keep the momentum going – try another mission or redeem your points!
          </Typography>
          <Box mt={4} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="outlined"
              onClick={() => navigate("/missions")}
            >
              More Missions
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate("/rewards-catalog")}
            >
              Go to Rewards
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
