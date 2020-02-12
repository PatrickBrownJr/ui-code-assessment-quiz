import * as React from 'react';
import styled from 'styled-components';

const RestartButton = styled.button`
  margin-top: 2em;
  background-color: #07e;
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 15px;
  display: inline-block;
  cursor: pointer;
`
export function Summary({
  restartQuiz,
  incorrectCount,
  correctCount
}
  :
{
  restartQuiz: any,
  incorrectCount: number,
  correctCount: number,
}) {
  const finalScore = (correctCount / (incorrectCount + correctCount)) * 100;
  return (
      <div>
        <h2>Summary</h2>
        <p>Correct: <b>{correctCount}</b></p>
        <p>Wrong: <b>{incorrectCount}</b></p>
        <p>Questions Answered: <b>{incorrectCount + correctCount}</b></p>
        <p>Final Score: <b>{`${finalScore.toFixed(0)}%`}</b></p>
        <RestartButton onClick={restartQuiz}>Restart Quiz</RestartButton>

      </div>
  )
};