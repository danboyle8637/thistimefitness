import React, { Component, createContext } from 'react'

const ScreenWidthContext = createContext()

// I use screen width to help select the right images... gradient heights...
// Plus some styling options like sizes and alignment.

class ScreenWidthStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      screenWidth: 0,
      stopMidOpacity: 0.64,
    }
  }

  componentDidMount() {
    const screenWidth = window.innerWidth

    if (screenWidth >= 1240) {
      this.setState({ screenWidth, stopMidOpacity: 0.1 })
    }

    if (screenWidth > 600 && screenWidth < 1240) {
      this.setState({ screenWidth, stopMidOpacity: 0.3 })
    }

    if (screenWidth <= 600) {
      this.setState({
        screenWidth,
      })
    }
  }

  render() {
    return (
      <ScreenWidthContext.Provider value={this.state}>
        {this.props.children}
      </ScreenWidthContext.Provider>
    )
  }
}

export { ScreenWidthStore, ScreenWidthContext as default }
