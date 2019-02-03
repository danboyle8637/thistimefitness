import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import Footer from './Footer/Footer'
import Global from '../styles/Global'
import { ScreenWidthStore } from '../context/ScreenWidthContext'
import { FaqStore } from '../context/FaqContext'

const Layout = ({ children }) => (
  <>
    <FaqStore>
      <ScreenWidthStore>
        <TTFLayout>{children}</TTFLayout>
        <Footer />
        <Global />
      </ScreenWidthStore>
    </FaqStore>
  </>
)

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
