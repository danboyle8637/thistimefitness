import React from 'react'
import styled from 'styled-components'

import FooterNav from './FooterNav'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav />
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1d1d1d;
  width: 100vw;
  padding: 60px;
`
