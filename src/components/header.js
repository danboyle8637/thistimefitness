import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import TTFLogoShort from '../svgs/TTFLogoShort'
import MenuSection from '../components/Nav/MenuSection'

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <TTFLogoShort width={'50px'} />
      </Link>
      <MenuSection />
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  background: transparent;
  width: 100vw;
  z-index: 9999;
`
