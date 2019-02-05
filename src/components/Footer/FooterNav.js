import React from 'react'
import styled from 'styled-components'

import FooterAddress from './FooterAddress'
import TTFLogoShort from '../../svgs/TTFLogoShort'
import { above } from '../../styles/Theme'

const FooterNav = () => {
  return (
    <NavContainer>
      <FooterLogo>
        <TTFLogoShort width={'60'} height={'30'} />
      </FooterLogo>
      <FooterContentWrapper>
        <FooterSiteLinks>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Classes</NavLink>
          <NavLink>Case Studies</NavLink>
          <NavLink>Schedule</NavLink>
        </FooterSiteLinks>
        <FooterSiteLinks>
          <NavLink>Privacy</NavLink>
          <NavLink>Disclaimer</NavLink>
          <NavLink>Login</NavLink>
        </FooterSiteLinks>
        <FooterAddressWrapper>
          <FooterAddress />
        </FooterAddressWrapper>
      </FooterContentWrapper>
    </NavContainer>
  )
}

export default FooterNav

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
`

const FooterContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
  width: 100%;
  margin-top: 30px;
  ${above.mobile`
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  `}
`

const FooterAddressWrapper = styled.div`
  grid-column: span 2;
  margin-top: 30px;
  ${above.tablet`
    margin-top: 0px;
  `}
`

const FooterSiteLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavLink = styled.a`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.footer.base};
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: color 120ms ease-out;
  &:nth-child(n + 1) {
    margin-top: 10px;
  }
  &:hover {
    color: ${props => props.theme.footer.hover};
  }
  &:active {
    color: ${props => props.theme.footer.active};
  }
`
