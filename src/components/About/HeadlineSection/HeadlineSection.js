import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import { above } from '../../../styles/Theme'
import HeadlineContent from './HeadlineContent'

class HeadlineSection extends Component {
  state = {
    backgroundImage: {},
  }

  componentDidMount() {
    const {
      aboutMobileBackground,
      aboutTabletBackground,
      aboutDesktopBackground,
    } = this.props.images
    const screenWidth = window.innerWidth

    if (screenWidth >= 1240) {
      this.setState({
        backgroundImage: aboutDesktopBackground.childImageSharp.fluid,
      })
    }

    if (screenWidth > 600 && screenWidth < 1240) {
      this.setState({
        backgroundImage: aboutTabletBackground.childImageSharp.fluid,
      })
    }

    if (screenWidth <= 600) {
      this.setState({
        backgroundImage: aboutMobileBackground.childImageSharp.fluid,
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
  padding-top: 14%;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
  ${above.mobile`
    padding-top: 8%;
  `}
  ${above.tablet`
    padding-top: 5%;
  `}
`
