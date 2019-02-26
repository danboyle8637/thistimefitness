import React from 'react'
import styled from 'styled-components'

import { InputContainer, FormTextInput } from '../../../styles/Form'
import ErrorMessageBox from '../../Shared/Form/ErrorMessageBox'
import InstructionBox from '../../Shared/Form/InstructionBox'

const TextInput = props => {
  const {
    initial,
    valid,
    showInstruction,
    touched,
    name,
    labelName,
    labelFor,
  } = props

  let instructionVisible = false
  let errorVisible = false
  let boxHeight = '0px'
  let message

  if (name === 'firstName' && showInstruction) {
    message = 'Enter only your first name.'
  }

  if (name === 'firstName' && !valid && !touched) {
    message = 'Your name must be at least 2 characters long.'
  }

  // if (name === 'firstName' && valid && !touched) {
  //   message = 'Your name must be at least 2 characters long.'
  // }

  if (name === 'email' && showInstruction) {
    message = 'What email can I send you a special bonus?'
  }

  if (name === 'email' && !valid && !touched) {
    message = 'Please enter a good email address.'
  }

  if (showInstruction) {
    instructionVisible = !instructionVisible
    boxHeight = '35px'
  }

  if (!valid && !initial && !touched && !showInstruction) {
    errorVisible = !errorVisible
    boxHeight = '35px'
  }

  return (
    <InputContainer marginTop={'30px'}>
      <TextLabel htmlFor={labelFor}>{labelName}</TextLabel>
      <FormTextInput type="text" {...props} />
      <MessageWrapper boxHeight={boxHeight}>
        <InstructionBox message={message} in={instructionVisible} />
        <ErrorMessageBox message={message} in={errorVisible} />
      </MessageWrapper>
    </InputContainer>
  )
}

export default TextInput

const MessageWrapper = styled.div`
  position: relative;
  height: ${props => props.boxHeight};
  width: 100%;
`

const TextLabel = styled.label`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.textColor};
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 400;
  background-color: ${props => props.theme.primaryBackground};
  padding: 3px;
  z-index: 5;
`
