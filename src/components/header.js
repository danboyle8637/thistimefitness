import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import TTFLogoShort from '../svgs/TTFLogoShort'
import MenuSection from '../components/Nav/MenuSection'

const Header = () => {
  return (
    <HeaderContainer>
      <HeadlineWrapper>
        <AniLink swipe direction="down" duration={0.8} to={'/'}>
          <TTFLogoShort width={'50px'} />
        </AniLink>
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
