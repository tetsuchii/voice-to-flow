import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  Grid,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import { useNavigate } from "react-router-dom";

const ActivityChoice = () => {
  const [processing, setProcessing] = React.useState(false);
  const navigate = useNavigate();

  const handleSelect = (type) => {
    setProcessing(true);
    setTimeout(() => {
      if (type === "missions") {
        navigate("/mission_list");
      } else if (type === "quizzes") {
        navigate("/quiz_selection");
      }
    }, 1100);
  };

  if (processing) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight={250}>
        <CircularProgress />
        <Typography mt={2} color="text.secondary">
          Processing your request...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={6}
      gap={3}
    >
      <Typography variant="h5" fontWeight={700} mb={1}>
        Choose Activity
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Select what you’d like to do next.
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 480 }}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              p: 3,
              textAlign: "center",
              cursor: "pointer",
              "&:hover": { boxShadow: 6 },
            }}
          >
            <AssignmentIcon sx={{ fontSize: 40, color: "#1565c0", mb: 1 }} />
            <Typography fontWeight={600} gutterBottom>
              Missions
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Educational journeys and learning challenges.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => handleSelect("missions")}
            >
              Select
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 2,
              p: 3,
              textAlign: "center",
              cursor: "pointer",
              "&:hover": { boxShadow: 6 },
            }}
          >
            <QuizIcon sx={{ fontSize: 40, color: "#ab1446", mb: 1 }} />
            <Typography fontWeight={600} gutterBottom>
              Quizzes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Test your knowledge and earn points instantly.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={() => handleSelect("quizzes")}
            >
              Select
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActivityChoice;
