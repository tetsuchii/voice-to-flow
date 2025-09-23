import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  LinearProgress,
  Stack,
} from "@mui/material";

const question = {
  text: "What is the primary purpose of a savings account?",
  options: [
    "To earn rewards on credit card purchases",
    "To safely store money and earn interest",
    "To pay monthly utility bills automatically",
    "To buy and sell stocks regularly",
  ],
  correct: 1,
};

export default function QuizQuestion() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // For placeholder purposes
  const questionNumber = 1;
  const totalQuestions = 5;

  const handleSubmit = () => setSubmitted(true);

  return (
    <Box maxWidth={480} mx="auto" mt={6}>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="overline" color="text.secondary">
                Question {questionNumber} of {totalQuestions}
              </Typography>
              <Typography variant="body2" color="primary">
                +20 pts
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={(questionNumber / totalQuestions) * 100}
              sx={{ height: 8, borderRadius: 5, mb: 1 }}
              color="primary"
            />
            <Typography variant="h6" fontWeight={600} mb={2}>
              {question.text}
            </Typography>
            <RadioGroup
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {question.options.map((option, idx) => (
                <FormControlLabel
                  key={option}
                  value={String(idx)}
                  control={<Radio />}
                  label={option}
                  disabled={submitted}
                  sx={{
                    ".MuiFormControlLabel-label": {
                      // Visual feedback for correct/incorrect
                      color:
                        submitted && String(idx) === String(question.correct)
                          ? "success.main"
                          : undefined,
                      fontWeight:
                        submitted && String(idx) === String(question.correct)
                          ? 700
                          : undefined,
                    },
                  }}
                />
              ))}
            </RadioGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={submitted || selected === ""}
              sx={{ mt: 1 }}
            >
              {submitted ? "Submitted" : "Submit Answer"}
            </Button>
            {submitted && (
              <Box>
                {selected === String(question.correct) ? (
                  <Typography color="success.main" mt={1}>
                    Correct!
                  </Typography>
                ) : (
                  <Typography color="error.main" mt={1}>
                    Incorrect. The correct answer is: <b>{question.options[question.correct]}</b>
                  </Typography>
                )}
                <Button
                  variant="outlined"
                  color="primary"
                  href="/#/quiz-complete"
                  sx={{ mt: 2 }}
                >
                  Continue
                </Button>
              </Box>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
