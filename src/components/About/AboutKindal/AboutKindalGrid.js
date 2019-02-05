import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import AboutKindalContent from './AboutKindalContent'

class AboutKindal extends Component {
  state = {
    backgroundImage: {},
  }

  componentDidMount() {
    const {
      kindalMobileBackground,
      kindalTabletBackground,
      kindalDesktopBackground,
    } = this.props.images
    const screenWidth = window.innerWidth

    if (screenWidth >= 1240) {
      this.setState({
        backgroundImage: kindalDesktopBackground.childImageSharp.fluid,
      })
    }

    if (screenWidth > 600 && screenWidth < 1240) {
      this.setState({
        backgroundImage: kindalTabletBackground.childImageSharp.fluid,
      })
    }

    if (screenWidth <= 600) {
      this.setState({
        backgroundImage: kindalMobileBackground.childImageSharp.fluid,
      })
    }
  }

  render() {
    const fluid = this.state.backgroundImage
    return (
      <SectionGrid>
        <ImageWrapper fluid={fluid} />
        <ContentWrapper>
          <AboutKindalContent copy={this.props.copy} />
        </ContentWrapper>
      </SectionGrid>
    )
  }
}

export default AboutKindal

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
`

const ImageWrapper = styled(Image)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: center;
  z-index: 1;
`
