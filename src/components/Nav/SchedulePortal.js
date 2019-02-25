import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const scheduleDrawerRoot =
  typeof document !== 'undefined'
    ? document.getElementById('schedule_portal')
    : null

class SchedulePortal extends Component {
  constructor(props) {
    super(props)

    this.el =
      typeof document !== 'undefined' ? document.createElement('div') : null
  }

  componentDidMount() {
    scheduleDrawerRoot.appendChild(this.el)
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
