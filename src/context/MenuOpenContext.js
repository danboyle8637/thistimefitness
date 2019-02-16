import React, { Component, createContext } from 'react'

const MenuOpenContext = createContext()

class MenuOpenStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
      scheduleOpen: false,
      handleToggleMenu: this.handleToggleMenu,
      handleCloseMenu: this.handleCloseMenu,
      handleToggleSchedule: this.handleToggleSchedule,
      handleCloseSchedule: this.handleCloseSchedule,
    }
  }

  handleToggleMenu = () => {
    const toggle = !this.state.menuOpen
    this.setState({ menuOpen: toggle })
  }

  handleToggleSchedule = () => {
    const toggle = !this.state.scheduleOpen
    this.setState({ scheduleOpen: toggle })
  }

  handleCloseMenu = () => {
    this.setState({ menuOpen: false })
  }

  handleCloseSchedule = () => {
    this.setState({ scheduleOpen: false })
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
