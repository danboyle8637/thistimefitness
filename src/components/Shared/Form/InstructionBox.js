import React from 'react'
import styled from 'styled-components'

const InstructionBox = ({ message }) => {
  return <InstructionMessage>{message}</InstructionMessage>
}

export default InstructionBox

const InstructionMessage = styled.div`
  margin-top: 6px;
  padding: 3px 15px;
  background: rgba(179, 182, 225, 0.18);
  border-radius: 50px;
  color: #f8f8f8;
  font-size: 13px;
  font-weight: lighter;
`
