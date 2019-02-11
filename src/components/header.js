import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import TTFLogoShort from '../svgs/TTFLogoShort'

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <TTFLogoShort width={'50px'} />
      </div>
      <MenuWrapper />
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

const MenuWrapper = styled.div`
  background: #000;
  border-radius: 4px;
  width: 100px;
  height: 48px;
`
