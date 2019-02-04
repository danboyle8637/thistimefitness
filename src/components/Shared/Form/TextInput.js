import React from 'react'
import styled, { css } from 'styled-components'

import {
  InputContainer,
  FormTextInput,
  ErrorMessage,
  InstructionMessage,
} from '../../../styles/Form'

const TextInput = props => {
  let error, instruction

  if (!props.valid) {
    error = (
      <ErrorMessage>
        Custom error message based on what's happening.
      </ErrorMessage>
    )
  }

  if (props.touched) {
    instruction = (
      <InstructionMessage>
        Custom instructions based on the field being edited.
      </InstructionMessage>
    )

    error = null
  }

  return (
    <InputContainer>
      {error}
      {instruction}
      <FormTextInput type="text" {...props} />
    </InputContainer>
  )
}

export default TextInput
