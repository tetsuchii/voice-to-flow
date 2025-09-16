import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from '@mui/material';

const quizMock = {
  question: "What is the primary benefit of using the Enlight Widget in your banking app?",
  options: [
    "Earn rewards with every transaction.",
    "Faster money transfers.",
    "Reduce bank fees.",
    "Access to stock trading.",
  ],
  correctIndex: 0,
};

export default function QuizQuestion() {
  // For demo: manage simple answer selection and "submit"
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box py={4} display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ maxWidth: 480, width: '100%', p: 3 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Quiz Question
        </Typography>

        <LinearProgress
          variant="determinate"
          value={33}
          sx={{ mb: 2 }}
          aria-label="Progress"
        />

        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="body1" fontWeight="bold">
              {quizMock.question}
            </Typography>
          </CardContent>
        </Card>

        <RadioGroup
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          aria-label="quiz options"
        >
          {quizMock.options.map((opt, idx) => (
            <FormControlLabel
              key={opt}
              value={String(idx)}
              control={<Radio disabled={submitted} />}
              label={opt}
            />
          ))}
        </RadioGroup>

        {!submitted ? (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={selected === ''}
            sx={{ mt: 2 }}
            onClick={() => setSubmitted(true)}
            aria-label="Submit answer"
          >
            Submit
          </Button>
        ) : (
          <Box mt={2}>
            {selected === String(quizMock.correctIndex) ? (
              <Typography color="success.main" fontWeight="medium">
                Correct! 🎉 You've earned 10 points.
              </Typography>
            ) : (
              <Typography color="error.main" fontWeight="medium">
                Not quite. The correct answer is: <b>{quizMock.options[quizMock.correctIndex]}</b>
              </Typography>
            )}
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ mt: 2 }}
              href="/quiz_completion"
              aria-label="Next question"
            >
              Next
            </Button>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
