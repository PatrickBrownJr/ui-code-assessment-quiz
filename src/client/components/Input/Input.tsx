import * as React from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
  font-size: medium;
  border: 1px solid black;
  width: 40%;
  padding: .5em;
`
export function Input({onChange, userAnswer}: any) {
  const handleSubmit = (e: any) => {
    if(e.key === 'Enter') {
      e.preventDefault()
      alert('Click Next to Continue Quiz')
    }
  }
  return (
    <div>
      <label>
      <CustomInput type="text" value={userAnswer} onChange={onChange} onKeyPress={(e) => { handleSubmit(e)}}/>
      </label>
    </div>
  )
};