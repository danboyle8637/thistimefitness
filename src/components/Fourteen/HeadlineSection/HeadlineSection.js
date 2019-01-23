import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import HeadlineContent from './HeadlineContent'
import { above } from '../../../styles/Theme'

class HeadlineSection extends Component {
  state = {
    backgroundImage: {},
    screenWidth: 0,
  }

  componentDidMount() {
    const {
      desktopBackground,
      tabletBackground,
      mobileBackground2,
    } = this.props.images
    const screenWidth = window.innerWidth

    if (screenWidth >= 1240) {
      this.setState({
        backgroundImage: desktopBackground.childImageSharp.fluid,
        screenWidth: screenWidth,
      })
    }

    if (screenWidth > 600 && screenWidth < 1240) {
      this.setState({
        backgroundImage: tabletBackground.childImageSharp.fluid,
        screenWidth: screenWidth,
      })
    }

    if (screenWidth <= 600) {
      this.setState({
        backgroundImage: mobileBackground2.childImageSharp.fluid,
        screenWidth: screenWidth,
      })
    }
  }

  render() {
    const fluid = this.state.backgroundImage
    return (
      <HeadlineGrid>
        <ImageWrapper fluid={fluid} />
        <ContentWrapper>
          <HeadlineContent />
        </ContentWrapper>
      </HeadlineGrid>
    )
  }
}

export default HeadlineSection

const HeadlineGrid = styled.div`
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
  margin-top: 20%;
  margin-left: 10px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  z-index: 1;
  ${above.mobile`
    margin-top: 10%;
  `}
  ${above.tablet`
    margin-top: 2%;
    margin-left: 20%;
  `}
`
