import * as React from 'react';
import styled from 'styled-components';
import {decodeHtmlEntity} from '../../utils'

const RadioButton = styled.label`
  margin: .5em 0;
  display: block;
`
export function RadioButtonGroup({options, userAnswer, onChange}: any) {

  return options.map((option: any, i: number) => (
    <RadioButton key={i}>
      <input 
        type="radio"
        name="answers"
        value={option}
        key={i}
        checked={userAnswer === option}
        onChange={onChange} 
        style={{marginRight: "1em"}}
        />
      {decodeHtmlEntity(option)}
    </RadioButton>
  ))
}