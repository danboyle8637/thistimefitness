import React, { Component } from 'react'

class Toggle extends Component {
  state = {
    open: false,
  }

  handleToggle = () => {
    const toggle = !this.state.open
    this.setState({ open: toggle })
  }

  render() {
    return this.props.children({
      open: this.state.open,
      handleToggle: this.handleToggle,
    })
  }
}

export default Toggle
