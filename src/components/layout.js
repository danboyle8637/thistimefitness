import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import Footer from './Footer/Footer'
import Header from './header'
import Global from '../styles/Global'
import { ScreenWidthStore } from '../context/ScreenWidthContext'
import { MenuOpenStore } from '../context/MenuOpenContext'
import { tealTheme } from '../styles/Theme'

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={tealTheme}>
        <MenuOpenStore>
          <ScreenWidthStore>
            <Header />
            <TTFLayout>{children}</TTFLayout>
            <Footer />
            <Global />
          </ScreenWidthStore>
        </MenuOpenStore>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const TTFLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #2b2c3a;
  overflow: hidden;
`
