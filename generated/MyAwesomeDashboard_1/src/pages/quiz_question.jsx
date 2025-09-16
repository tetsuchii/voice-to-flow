import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  LinearProgress,
  Alert,
} from "@mui/material";

const mockQuestion = {
  question: "What is the recommended percentage of your monthly income to save?",
  options: ["5-10%", "10-15%", "15-20%", "20-30%"],
  correct: 2
};

export default function QuizQuestion() {
  const [value, setValue] = React.useState("");
  const [answered, setAnswered] = React.useState(false);
  const [showCorrect, setShowCorrect] = React.useState(false);

  const handleSubmit = () => {
    setAnswered(true);
    setTimeout(() => {
      setShowCorrect(true);
    }, 500);
  };

  return (
    <Box sx={{ maxWidth: 540, mx: "auto", py: 5 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <LinearProgress variant="determinate" value={35} sx={{ height: 7, mb: 2 }} color="primary" />
        <CardContent>
          <Stack spacing={3}>
            <Typography variant="h6" fontWeight={700}>
              Question 1 of 5
            </Typography>
            <Typography variant="body1" fontWeight={600}>
              {mockQuestion.question}
            </Typography>
            <RadioGroup
              value={value}
              onChange={e => setValue(e.target.value)}
            >
              {mockQuestion.options.map((opt, i) => (
                <FormControlLabel
                  key={i}
                  value={String(i)}
                  control={<Radio />}
                  label={opt}
                  disabled={answered}
                />
              ))}
            </RadioGroup>
            {!answered && (
              <Button
                variant="contained"
                color="primary"
                disabled={value === ""}
                onClick={handleSubmit}
                size="large"
              >
                Submit Answer
              </Button>
            )}

            {answered && (
              <>
                <Alert
                  severity={value === String(mockQuestion.correct) ? "success" : "error"}
                  variant="filled"
                >
                  {value === String(mockQuestion.correct)
                    ? "Correct! Great job."
                    : `Incorrect. The correct answer is: "${mockQuestion.options[mockQuestion.correct]}".`}
                </Alert>
                <Button
                  variant="contained"
                  color="success"
                  href="/quiz_completion"
                  sx={{ mt: 2 }}
                  size="large"
                >
                  Next Question
                </Button>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
