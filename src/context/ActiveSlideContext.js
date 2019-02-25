import React, { Component, createContext } from 'react'

const ActiveSlideContext = createContext()

class ActiveSlideStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSlide: 0,
      handleChangeActiveSlide: this.handleChangeActiveSlide,
    }
  }

  handleChangeActiveSlide = index => {
    this.setState({ activeSlide: index })
  }

  render() {
    return (
      <ActiveSlideContext.Provider value={this.state}>
        {this.props.children}
      </ActiveSlideContext.Provider>
    )
  }
}

export { ActiveSlideStore, ActiveSlideContext as default }
