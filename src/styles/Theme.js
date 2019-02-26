import { css } from 'styled-components'

const sizes = {
  mobile: 600,
  tablet: 960,
  laptop: 1440,
}

// The only thing that will change above tablet will be the spacing
const above = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = (...args) => css`
    @media (min-width: ${sizes[size]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const tealTheme = {
  primaryBackground: '#2B2C3A',
  secondaryBackground: '#26243E',
  footerBackground: '#19191f',
  specialBackground: '#363358',
  primaryColor: '#2AD2E2',
  secondaryColor: '#B44CFF',
  primaryButtonColor: '#B44CFF',
  textColor: '#b3b6e1',
  pricingColor: '#1e1d2c',
  fillerColor: '#f8f8f8',
  accentColor: '#5afdf2',
  errorColor: '#e23e44',
  hover: {
    buttonColor: '#09A9B7',
    textColor: '#2ad2e2',
  },
  active: {
    buttonColor: '#dc45c7',
  },
  footer: {
    base: '#f8f8f8',
    hover: '#2ad2e2',
    active: '#dc45c7',
    addressText: '#7e7e7e',
  },
  mapButton: {
    primaryColor: '#2ad2e2',
    secondaryColor: '#b44cff',
    iconFill: '#2ad2e2',
  },
}

const purpleTheme = {
  primaryBackground: '#2B2C3A',
  secondaryBackground: '#26243E',
  primaryColor: '#B44CFF',
  secondaryColor: '#2AD2E2',
  textColor: '#D7DAFF',
}

export { tealTheme, purpleTheme, above }
