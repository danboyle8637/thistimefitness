import React from 'react'
import styled from 'styled-components'

const ErrorMessageBox = ({ message }) => {
  return <ErrorMessage>{message}</ErrorMessage>
}

export default ErrorMessageBox

const ErrorMessage = styled.div`
  margin-top: 6px;
  padding: 4px 12px;
  background: rgba(237, 28, 36, 0.18);
  border: 1px solid #ed1c24;
  border-radius: 50px;
  color: #ffdfe0;
  font-size: 14px;
`
