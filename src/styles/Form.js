import styled, { css } from 'styled-components'

const FormFieldSet = styled.fieldset`
  border: none;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0;
  width: 100%;
`

const FormTextInput = styled.input`
  border: 2px solid #2ad2e2;
  border-radius: 50px;
  background: transparent;
  height: 48px;
  padding: 0 20px;
  color: #b3b6e1;
  outline: none;
  width: 80%;
  transition: all 200ms ease-out;
  &:focus {
    border: 2px solid #b44cff;
  }
`

const FormTextAreaInput = styled.textarea`
  border: 2px solid #2ad2e2;
  border-radius: 20px;
  background: transparent;
  padding: 8px 20px;
  min-height: 120px;
  color: #b3b6e1;
  outline: none;
  transition: all 200ms ease-out;
  &:focus {
    border: 2px solid #b44cff;
  }
`

export { InputContainer, FormTextInput, FormTextAreaInput, FormFieldSet }
