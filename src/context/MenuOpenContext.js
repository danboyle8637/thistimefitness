import React, { Component, createContext } from 'react'

const MenuOpenContext = createContext()

class MenuOpenStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leftPosition: '20%',
      rightPosition: '20%',
      menuOpen: false,
      scheduleOpen: false,
      blogMenuOpen: false,
      drawerMaxWidth: 0,
      handleToggleMenu: this.handleToggleMenu,
      handleCloseMenu: this.handleCloseMenu,
      handleToggleSchedule: this.handleToggleSchedule,
      handleCloseSchedule: this.handleCloseSchedule,
      handleToggleBlogMenu: this.handleToggleBlogMenu,
      handleCloseBlogMenu: this.handleCloseBlogMenu,
      setMenuState: this.setMenuState,
      setBlogMenuState: this.setBlogMenuState,
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

  handleToggleBlogMenu = () => {
    const toggle = !this.state.blogMenuOpen
    this.setState({ blogMenuOpen: toggle })
  }

  handleCloseMenu = () => {
    this.setState({ menuOpen: false })
  }

  handleCloseSchedule = () => {
    this.setState({ scheduleOpen: false })
  }

  handleCloseBlogMenu = () => {
    this.setState({ blogMenuOpen: false })
  }

  setMenuState = (maxWidth, leftPosition) => {
    this.setState({ leftPosition, drawerMaxWidth: maxWidth })
  }

  setBlogMenuState = (maxWidth, rightPosition) => {
    this.setState({ rightPosition, drawerMaxWidth: maxWidth })
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
