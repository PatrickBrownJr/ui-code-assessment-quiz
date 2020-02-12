import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import QuestionCard from '../QuestionCard';
import Summary from '../Summary'

const QuestionContainer = styled.div`
  margin: 3em;
`

const NextButton = styled.button`
  margin-left: 2em;
  background-color: #07e;
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 15px;
  display: inline-block;
  cursor: pointer;

  ${({disabled}) => disabled && `
    background-color: darkgrey;
    cursor: not-allowed;
  `}
`

export const Container = ({getRandomQuestion, question}: any) => {
  const [count, setCount] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0)

  const restartQuiz = () => {
    setCount(0)
    setIncorrectAnswerCount(0)
    setCorrectAnswerCount(0)
    setUserAnswer('')
  }

  const getNextQuestion = () => {
    setCount(count + 1)
    userAnswer.toLowerCase() === question.correct_answer.toLowerCase() ?
      setCorrectAnswerCount(correctAnswerCount + 1) : setIncorrectAnswerCount(incorrectAnswerCount + 1)
    setUserAnswer('')
  }

  useEffect(() => {
    getRandomQuestion()
  }, [count]);
  return (
    <QuestionContainer>
      {count === 3 ? 
        (
          <Summary
            restartQuiz={restartQuiz}
            incorrectCount={incorrectAnswerCount}
            correctCount={correctAnswerCount}
          />
        )
        : question ?
          (
            <>
            <QuestionCard question={question} setUserAnswer={setUserAnswer} userAnswer={userAnswer}></QuestionCard>
            <NextButton onClick={getNextQuestion} disabled={userAnswer === ''}>Next</NextButton>
            </>
          )
          :
          <div>Error Getting Question</div>
      }
    </QuestionContainer>
  )
};