import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import TTFLogoShort from '../svgs/TTFLogoShort'
import MenuSection from '../components/Nav/MenuSection'

const Header = () => {
  return (
    <HeaderContainer>
      <HeadlineWrapper>
        <Link to={'/'}>
          <TTFLogoShort width={'50px'} gradientId={'ttf-short-header'} />
        </Link>
        <MenuSection />
      </HeadlineWrapper>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 6px 12px;
  background: transparent;
  width: 100vw;
  z-index: 9999;
`

const HeadlineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
`
