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
  border: 2px solid;
  border-color: ${props =>
    !props.valid && !props.touched && !props.initial
      ? props.theme.errorColor
      : props.theme.primaryColor};
  border-radius: 50px;
  background: transparent;
  height: 48px;
  padding: 0 20px;
  color: ${props => props.theme.textColor};
  outline: none;
  width: 80%;
  transition: all 200ms ease-out;
  &:focus {
    border: 2px solid;
    border-color: ${props => props.theme.secondaryColor};
    width: 100%;
  }
`

const HiddenRadioInput = styled.input.attrs({ type: 'radio' })`
  visibility: hidden;
  margin: 0;
  width: 0;
`

const FormRadioInput = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props =>
    props.checked ? props.theme.primaryColor : 'rgba(179, 182, 225, 0.3)'};
  border-radius: 50%;
`

const FormTextAreaInput = styled.textarea`
  border: 2px solid;
  border-color: ${props => props.theme.primaryColor};
  border-radius: 20px;
  background: transparent;
  padding: 8px 20px;
  min-height: 120px;
  color: ${props => props.theme.textColor};
  width: 80%;
  outline: none;
  transition: all 200ms ease-out;
  &:focus {
    border: 2px solid;
    border-color: ${props => props.theme.secondaryColor};
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
