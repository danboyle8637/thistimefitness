import React, { Component } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

class HeadlineSection extends Component {
  state = {
    backgroundImage: {},
  }

  componentDidMount() {
    const {
      desktopBackground,
      tabletBackground,
      mobileBackground,
    } = this.props.images
    const screenWidth = window.innerWidth

    if (screenWidth >= 1280) {
      this.setState({
        backgroundImage: desktopBackground.childImageSharp.fluid,
      })
    }

    if (screenWidth > 600 && screenWidth < 1280) {
      this.setState({ backgroundImage: tabletBackground.childImageSharp.fluid })
    }

    if (screenWidth <= 600) {
      this.setState({ backgroundImage: mobileBackground.childImageSharp.fluid })
    }
  }

  render() {
    const fluid = this.state.backgroundImage
    return (
      <HeadlineGrid>
        <Image fluid={fluid} />
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
