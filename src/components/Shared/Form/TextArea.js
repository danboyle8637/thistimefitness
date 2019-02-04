import React from 'react'
import styled from 'styled-components'

import {
  InputContainer,
  FormTextAreaInput,
  ErrorMessage,
  InstructionMessage,
} from '../../../styles/Form'

const TextArea = props => {
  return <FormTextAreaInput {...props} />
}

export default TextArea
