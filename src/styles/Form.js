import styled, { css } from 'styled-components'

const active = css`
  width: 100%;
`

const notValid = css`
  border-color: #ed1c24;
`

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
`

const FormTextInput = styled.input`
  border: 2px solid #2ad2e2;
  border-radius: 50px;
  background: transparent;
  height: 48px;
  padding: 0 20px;
  color: #b3b6e1;
  outline: none;
  transition: all 200ms ease-out;
  ${props => (props.touched ? active : null)}
  ${props => (!props.valid ? active : null)}
  z-index: 3;
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
  ${props => (props.touched ? active : null)}
  ${props => (!props.valid ? active : null)}
  z-index: 3;
  &:focus {
    border: 2px solid #b44cff;
  }
`

const ErrorMessage = styled.div`
  margin: 0;
  padding: 12px;
  background: rgba(237, 28, 36, 0.18);
  border: 2px solid #ed1c24;
  border-radius: 8px 8px 0 0;
  color: #f8f8f8;
  font-size: 14px;
  width: 80%;
  align-self: center;
  transform: translateY(2px);
  z-index: -1;
`

const InstructionMessage = styled.div`
  margin: 0;
  padding: 12px;
  background: rgba(179, 182, 225, 0.18);
  border: 2px solid #b3b6e1;
  border-radius: 8px 8px 0 0;
  color: #f8f8f8;
  font-size: 14px;
  width: 80%;
  align-self: center;
  transform: translateY(2px);
  z-index: -1;
`

export {
  InputContainer,
  FormTextInput,
  FormTextAreaInput,
  ErrorMessage,
  InstructionMessage,
}
