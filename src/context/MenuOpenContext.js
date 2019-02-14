import React, { Component, createContext } from 'react'

const MenuOpenContext = createContext()

class MenuOpenStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
      handleToggleMenu: this.handleToggleMenu,
      handleCloseMenu: this.handleCloseMenu,
    }
  }

  handleToggleMenu = () => {
    const toggle = !this.state.menuOpen
    this.setState({ menuOpen: toggle })
  }

  handleCloseMenu = () => {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <MenuOpenContext.Provider value={this.state}>
        {this.props.children}
      </MenuOpenContext.Provider>
    )
  }
}

export { MenuOpenStore, MenuOpenContext as default }
