import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Footer from './Footer/Footer'

const Layout = ({ children }) => (
  <>
    <TTFLayout>{children}</TTFLayout>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const TTFLayout = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #2b2c3a;
`
