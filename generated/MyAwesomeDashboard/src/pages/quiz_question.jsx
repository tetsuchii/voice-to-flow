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
  Stack
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const mockQuestion = {
  question: "What is the purpose of a savings account?",
  options: [
    "To earn interest while keeping your money safe.",
    "To pay for purchases directly.",
    "To invest in the stock market.",
    "To get a loan instantly."
  ],
  correct: 0
};

const QuizQuestion = () => {
  const [selected, setSelected] = useState("");
  const [progress] = useState(20); // Let's say 1/5 questions
  const navigate = useNavigate();

  const handleNext = () => {
    // Normally, you would save the answer and go to next question
    navigate("/quiz_completion");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 8, px: 2 }}>
      <Stack spacing={2}>
        <Typography variant="subtitle2" color="text.secondary">
          Question 1 of 5
        </Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 2 }} />
        <Card>
          <CardContent>
            <Typography variant="h6" mb={1}>{mockQuestion.question}</Typography>
            <RadioGroup
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {mockQuestion.options.map((opt, idx) => (
                <FormControlLabel
                  key={idx}
                  value={String(idx)}
                  control={<Radio color="primary" />}
                  label={opt}
                  disabled={false}
                />
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            disabled={selected === ""}
            onClick={handleNext}
          >
            Submit &amp; Next
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default QuizQuestion;
