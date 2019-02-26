import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import MenuOpenContext from '../../context/MenuOpenContext'

const scheduleDrawerRoot =
  typeof document !== 'undefined'
    ? document.getElementById('schedule_portal')
    : null

class SchedulePortal extends Component {
  static contextType = MenuOpenContext

  constructor(props) {
    super(props)

    this.el =
      typeof document !== 'undefined' ? document.createElement('div') : null
  }

  componentDidMount() {
    scheduleDrawerRoot.appendChild(this.el)
    const screenWidth = window.innerWidth

    if (screenWidth <= 600) {
      const leftPosition = '20%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(leftPosition)) / 100
      this.context.setMenuState(maxWidth, leftPosition)
    }

    if (screenWidth > 600 && screenWidth <= 960) {
      const leftPosition = '60%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(leftPosition)) / 100
      this.context.setMenuState(maxWidth, leftPosition)
    }

    if (screenWidth > 960) {
      const leftPosition = '70%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(leftPosition)) / 100
      this.context.setMenuState(maxWidth, leftPosition)
    }
  }

  componentWillUnmount() {
    scheduleDrawerRoot.removeChild(this.el)
  }

  render() {
    if (this.el) {
      return ReactDOM.createPortal(this.props.children, this.el)
    } else {
      return null
    }
  }
}

export default SchedulePortal
