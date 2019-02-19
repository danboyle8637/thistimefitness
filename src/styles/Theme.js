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
  footerBackground: '#2b2c3a',
  primaryColor: '#2AD2E2',
  secondaryColor: '#B44CFF',
  primaryButtonColor: '#B44CFF',
  textColor: '#D7DAFF',
  fillerColor: '#f8f8f8',
  hover: {
    buttonColor: '#09A9B7',
    textColor: '#2ad2e2',
  },
  active: {
    buttonColor: '#dc45c7',
  },
  footer: {
    base: '#d4d4d4',
    hover: '#2ad2e2',
    active: '#b44cff',
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
