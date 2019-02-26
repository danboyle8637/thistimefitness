import React from 'react'
import styled from 'styled-components'

import {
  InputContainer,
  FormRadioInput,
  HiddenRadioInput,
} from '../../../styles/Form'
import { BodyText } from '../../../styles/BodyText.js'

const RadioInput = props => {
  const { options, handleFormChange, name } = props

  const radios = options.map(option => {
    return (
      <RadioLabel key={option.value}>
        <HiddenRadioInput
          type="radio"
          name={name}
          value={option.value}
          onChange={event => handleFormChange(event, option.value)}
        />
        <FormRadioInput checked={option.checked} />
        <LabelText>{option.displayValue}</LabelText>
      </RadioLabel>
    )
  })

  return (
    <>
      <BodyText>What is your #1 goals right now?</BodyText>
      <InputContainer marginTop={'10px'}>{radios}</InputContainer>
    </>
  )
}

export default RadioInput

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.textColor};
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 400;
  padding: 3px;
  z-index: 5;
`

const LabelText = styled.span`
  margin-left: 8px;
`
