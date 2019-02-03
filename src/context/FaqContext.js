import React, { Component, createContext } from 'react'

const FaqContext = createContext()

class FaqStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      handleToggleFaq: this.handleToggleFaq,
    }
  }

  handleToggleFaq = () => {
    const toggle = !this.state.open
    this.setState({ open: toggle })
  }

  render() {
    return (
      <FaqContext.Provider value={this.state}>
        {this.props.children}
      </FaqContext.Provider>
    )
  }
}

export { FaqStore, FaqContext as default }
