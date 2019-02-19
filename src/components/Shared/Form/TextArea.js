import React from 'react'
import styled from 'styled-components'

import {
  InputContainer,
  FormTextAreaInput,
  ErrorMessage,
  InstructionMessage,
} from '../../../styles/Form'
import { BodyText } from '../../../styles/BodyText.js'

const TextArea = props => {
  return (
    <InputContainer marginTop={'30px'}>
      <BodyText htmlFor="why" padding={'0 0 10px 0'}>
        Why is getting healthy and fit a priority for you at this moment?
      </BodyText>
      <FormTextAreaInput {...props} />
    </InputContainer>
  )
}

export default TextArea
