import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  LinearProgress,
  Paper,
  Chip,
} from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";

const questionData = {
  question: "What is the primary benefit of Enlight missions?",
  options: [
    "Enjoy new banking features",
    "Earn points for rewards",
    "Get free banking services forever",
    "Meet new friends online",
  ],
  correct: 1,
  hint: "Missions help you earn points, which are redeemable for rewards.",
};

export default function QuizQuestion() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#F5F6FA"
      pt={5}
    >
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          maxWidth: 600,
          mb: 3,
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <QuizIcon color="primary" sx={{ fontSize: 36 }} />
        <Typography variant="h5">Quiz: Enlight Engagement</Typography>
        <Chip color="primary" size="small" label="1/6" sx={{ ml: "auto" }} />
      </Paper>

      <Card sx={{ width: "100%", maxWidth: 600 }}>
        <CardContent>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
              {questionData.question}
            </FormLabel>
            <RadioGroup
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {questionData.options.map((opt, idx) => (
                <FormControlLabel
                  sx={{
                    bgcolor:
                      submitted && idx === questionData.correct
                        ? "success.light"
                        : submitted && selected === `${idx}` && selected !== `${questionData.correct}`
                        ? "error.light"
                        : "",
                    borderRadius: 1,
                    mb: 1,
                    pl: 2,
                  }}
                  key={opt}
                  value={`${idx}`}
                  control={<Radio />}
                  label={opt}
                  disabled={submitted}
                />
              ))}
            </RadioGroup>
            {!submitted ? (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                disabled={selected === ""}
                onClick={() => setSubmitted(true)}
              >
                Submit Answer
              </Button>
            ) : (
              <>
                {selected === `${questionData.correct}` ? (
                  <Typography mt={2} color="success.main" fontWeight={600}>
                    Correct! You earn points for rewards by doing missions.
                  </Typography>
                ) : (
                  <Box>
                    <Typography mt={2} color="error.main" fontWeight={600}>
                      Incorrect. Try to remember: {questionData.hint}
                    </Typography>
                  </Box>
                )}
                <Button
                  variant="outlined"
                  sx={{ mt: 2 }}
                  href="/quiz_completion"
                >
                  Continue
                </Button>
              </>
            )}
          </FormControl>
        </CardContent>
      </Card>
      <Box width="100%" maxWidth={600} mt={4}>
        <LinearProgress
          variant="determinate"
          value={17}
          sx={{ borderRadius: 1, height: 8 }}
        />
        <Typography variant="caption" color="text.secondary" textAlign="right">
          Progress: 1/6
        </Typography>
      </Box>
    </Box>
  );
}
