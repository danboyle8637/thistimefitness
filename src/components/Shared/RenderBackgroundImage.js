import { Component } from 'react'

class RenderBackgroundImage extends Component {
  state = {
    backgroundImage: {},
  }

  componentDidMount() {
    const { desktopBackground, tabletBackground, mobileBackground } = this.props
    const screenWidth = window.innerWidth

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
      this.setState({
        backgroundImage: mobileBackground.childImageSharp.fluid,
      })
    }
  }

  render() {
    return this.props.children({ backgroundImage: this.state.backgroundImage })
  }
}

export default RenderBackgroundImage
