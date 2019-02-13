import styled from 'styled-components'

const FormFieldSet = styled.fieldset`
  margin-top: 40px;
  border: none;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;
  margin-top: ${props => props.marginTop};
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
    width: 100%;
  }
`

const HiddenRadioInput = styled.input.attrs({ type: 'radio' })`
  visibility: none;
  margin: 0;
  width: 0;
`

const FormRadioInput = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? '#2ad2e2' : '#f8f8f8')};
  border-radius: 50%;
`

const FormTextAreaInput = styled.textarea`
  border: 2px solid #2ad2e2;
  border-radius: 20px;
  background: transparent;
  padding: 8px 20px;
  min-height: 120px;
  color: #b3b6e1;
  width: 80%;
  outline: none;
  transition: all 200ms ease-out;
  &:focus {
    border: 2px solid #b44cff;
    width: 100%;
  }
`

export {
  InputContainer,
  FormTextInput,
  FormTextAreaInput,
  FormFieldSet,
  HiddenRadioInput,
  FormRadioInput,
}
