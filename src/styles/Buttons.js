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
  background: ${props => (props.purple ? '#B44CFF' : '#2ad2e2')};
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
  position: relative;
  margin: 0;
  margin-top: ${props => props.marginTop || 0};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  color: #f8f8f8;
  background: ${props => (props.purple ? '#B44CFF' : '#2ad2e2')};
  width: 210px;
  height: 48px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  transition: color 200ms ease-out;
  transform: translate(0, 30px);
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #09a9b7;
    border: none;
    border-radius: 4px;
    transform: translateX(-100%);
    transition: transform 150ms ease-out;
  }
  &:hover::before {
    transform: translateX(0);
  }
  ${above.mobile`
    width: 450px;
    height: 55px;
  `}
`

export { FooterButton, SiteButton }
