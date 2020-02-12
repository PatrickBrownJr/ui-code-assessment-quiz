import React from 'react';
import styled from 'styled-components';
import RadioButtonGroup from '../RadioButtonGroup';
import Input from '../Input'
import {decodeHtmlEntity} from '../../utils'

const Card = styled.div`
  padding: 2em;
  width: 45em;
`

export const QuestionCard = ({question, setUserAnswer, userAnswer}: any) => {

  const handleOnChange = (e: any) => {
    setUserAnswer(e.target.value)
  }

  return (
    <Card>
      <h3>{decodeHtmlEntity(question.question)}</h3>
      <form>
        {question.type === 'text' ? 
          <Input onChange={handleOnChange} userAnswer={userAnswer}/>
          :
          <RadioButtonGroup options={question.possibleAnswers} onChange={handleOnChange} userAnswer={userAnswer}></RadioButtonGroup>
        }
      </form>
    </Card>
  )
};