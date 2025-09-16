import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const MissionCompletion = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: 450,
        mx: "auto",
        mt: 8,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80, mb: 3 }} />
      <Typography variant="h4" fontWeight={600} mb={2}>Mission Complete!</Typography>
      <Card sx={{ mb: 3, width: "100%", bgcolor: "#f8fff7" }}>
        <CardContent>
          <Typography variant="h6" color="success.main">Congratulations!</Typography>
          <Typography variant="body1" color="text.secondary" mt={1}>
            You've successfully completed this mission and earned 50 Enlight Points!
          </Typography>
        </CardContent>
      </Card>
      <Stack direction="row" spacing={2} mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/mission_list")}
        >
          See More Missions
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </Button>
      </Stack>
    </Box>
  );
};

export default MissionCompletion;
