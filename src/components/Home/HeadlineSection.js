import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import MainLogo from '../../svgs/MainLogo'
import HeadlineMenu from './HeadlineMenu'
import { above } from '../../styles/Theme'

class HeadlineSection extends Component {
  state = {
    backgroundImage: {},
    logoWidth: 0,
    logoHeight: 0,
  }

  componentDidMount() {
    const {
      desktopBackground,
      tabletBackground,
      mobileBackground,
    } = this.props.images
    const screenWidth = window.innerWidth

    if (screenWidth >= 1240) {
      this.setState({
        backgroundImage: desktopBackground.childImageSharp.fluid,
        logoWidth: 450,
        logoHeight: 140,
      })
    }

    if (screenWidth > 600 && screenWidth < 1240) {
      this.setState({
        backgroundImage: tabletBackground.childImageSharp.fluid,
        logoWidth: 450,
        logoHeight: 140,
      })
    }

    if (screenWidth <= 600) {
      this.setState({
        backgroundImage: mobileBackground.childImageSharp.fluid,
        logoWidth: 250,
        logoHeight: 80,
      })
    }
  }

  render() {
    const fluid = this.state.backgroundImage
    return (
      <HeadlineGrid>
        <BackgroundWrapper>
          <Image fluid={fluid} />
        </BackgroundWrapper>
        <ContentWrapper>
          <MainLogo
            width={`${this.state.logoWidth}`}
            height={`${this.state.logoHeight}`}
            thisFill={'#f8f8f8'}
            fitnessFill={'#D7DAFF'}
          />
          <HeadlineMenu />
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

const BackgroundWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const ContentWrapper = styled.div`
  margin-top: 30%;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  z-index: 1;
  ${above.mobile`
    margin-top: 10%;
  `}
`
