import React, { Component } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import ScreenWidthContext from '../../context/ScreenWidthContext'
import {
  TopDarkBlueGradient,
  TopDarkPurpleGradient,
  BottomDarkBlueGradient,
  BottomDarkPurpleGradient,
} from '../../svgs/ImageGradient'

class Image extends Component {
  static contextType = ScreenWidthContext

  render() {
    const { image, top, bottom, marginTop, imageTitle, imageAlt } = this.props
    const { stopMidOpacity } = this.context

    const gradientArray = [
      {
        name: 'topBlue',
        gradient: <TopDarkBlueGradient stopMidOpacity={stopMidOpacity} />,
      },
      {
        name: 'topPurple',
        gradient: <TopDarkPurpleGradient stopMidOpacity={stopMidOpacity} />,
      },
      {
        name: 'bottomBlue',
        gradient: <BottomDarkBlueGradient stopMidOpacity={stopMidOpacity} />,
      },
      {
        name: 'bottomPurple',
        gradient: <BottomDarkPurpleGradient stopMidOpacity={stopMidOpacity} />,
      },
    ]

    const gradientTop = gradientArray.find(gradient => gradient.name === top)

    const gradientBottom = gradientArray.find(
      gradient => gradient.name === bottom
    )

    return (
      <ImageWrapper marginTop={marginTop}>
        <GatsbyImageWrapper fluid={image} title={imageTitle} alt={imageAlt} />
        <TopGradientWrapper>{gradientTop.gradient}</TopGradientWrapper>
        <BottomGradientWrapper>{gradientBottom.gradient}</BottomGradientWrapper>
      </ImageWrapper>
    )
  }
}

export default Image

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin-top: ${props => props.marginTop || 0};
`

const GatsbyImageWrapper = styled(Img)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const TopGradientWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`

const BottomGradientWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: end;
  z-index: 1;
  transform: translateY(10px);
`
