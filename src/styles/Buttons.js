import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { above } from '../styles/Theme'

// Create a single a-tag button to use and do if checks to render the button you want
const FooterButton = styled.a`
  position: relative;
  margin: 0;
  margin-top: ${props => props.marginTop || '0'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #f8f8f8;
  background: ${props => props.theme.primaryColor};
  width: 210px;
  height: 48px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 200ms ease-out;
  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #09a9b7;
    border-radius: 4px;
    transform: translateX(-100%);
    transition: transform 200ms ease-out;
  }
  &:hover::before {
    transform: translateX(0);
  }
`

const SiteButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  background: ${props => props.theme.primaryButtonColor};
  border-radius: 4px;
  color: ${props => props.theme.fillerColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  letter-spacing: 4px;
  cursor: pointer;
  width: 270px;
  ${above.mobile`
    width: 380px;
  `}
  ${above.tablet`
    width: 420px;
    padding: 16px 10px;
  `}
`

const MainButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  background: ${props => props.theme.primaryButtonColor};
  border-radius: 4px;
  color: ${props => props.theme.fillerColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
  letter-spacing: 4px;
  cursor: pointer;
  width: 270px;
  ${above.mobile`
    width: 380px;
  `}
  ${above.tablet`
    width: 100%;
    padding: 16px 10px;
  `}
`

const PurchaseButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  background: ${props => props.theme.primaryButtonColor};
  border-radius: 4px;
  color: ${props => props.theme.fillerColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  letter-spacing: 2px;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  width: 200px;
  ${above.mobile`
    width: 380px;
  `}
  ${above.tablet`
    width: 420px;
  `}
`

const GhostButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  background: transparent;
  box-shadow: 0 0 0 2px ${props => props.theme.mapButton.primaryColor};
  border-radius: 4px;
  color: ${props => props.theme.mapButton.primaryColor};
  text-decoration: none;
  width: 100%;
  cursor: pointer;
  margin-top: ${props => props.margintop || 0};
  transition: box-shadow, color, 150ms ease-out;
  &:active {
    box-shadow: 0 0 0 2px ${props => props.theme.mapButton.secondaryColor};
    color: ${props => props.theme.mapButton.secondaryColor};
  }
  ${above.mobile`
    padding: 10px 20px;
    font-size: 16px;
  `}
  ${above.tablet`
    padding: 8px 20px;
  `}
`

export { FooterButton, SiteButton, GhostButton, MainButton, PurchaseButton }
