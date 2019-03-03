import { Component } from 'react'

class RenderBackgroundImage extends Component {
  state = {
    backgroundImage: {},
  }

  componentDidMount() {
    const {
      desktopBackground,
      tabletBackground,
      mobileBackground,
      mobileXBackground,
      path,
    } = this.props
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    if (screenWidth >= 1240) {
      this.setState({
        backgroundImage: desktopBackground.childImageSharp.fluid,
      })
    }

    if (screenWidth > 600 && screenWidth < 1240) {
      this.setState({
        backgroundImage: tabletBackground.childImageSharp.fluid,
      })
    }

    if (screenWidth <= 600) {
      console.log('Non-iphoneX background set.')
      this.setState({
        backgroundImage: mobileBackground.childImageSharp.fluid,
      })
    }

    if (path === '/classes/' && screenWidth <= 600 && screenHeight >= 812) {
      this.setState({
        backgroundImage: mobileXBackground.childImageSharp.fluid,
      })
    }
  }

  render() {
    return this.props.children({ backgroundImage: this.state.backgroundImage })
  }
}

export default RenderBackgroundImage
