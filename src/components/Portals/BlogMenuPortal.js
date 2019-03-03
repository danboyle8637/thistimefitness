import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import MenuOpenContext from '../../context/MenuOpenContext'

const blogMenuPortal =
  typeof document !== 'undefined'
    ? document.getElementById('blog_menu_portal')
    : null

class BlogMenuPortal extends Component {
  static contextType = MenuOpenContext

  constructor(props) {
    super(props)

    this.el =
      typeof document !== 'undefined' ? document.createElement('div') : null
  }

  componentDidMount() {
    blogMenuPortal.appendChild(this.el)
    const screenWidth = window.innerWidth

    if (screenWidth <= 600) {
      const rightPosition = '20%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(rightPosition)) / 100
      this.context.setBlogMenuState(maxWidth, rightPosition)
    }

    if (screenWidth > 600 && screenWidth <= 960) {
      const rightPosition = '60%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(rightPosition)) / 100
      this.context.setBlogMenuState(maxWidth, rightPosition)
    }

    if (screenWidth > 960) {
      const rightPosition = '70%'
      const maxWidth =
        this.el.clientWidth -
        (this.el.clientWidth * parseInt(rightPosition)) / 100
      this.context.setBlogMenuState(maxWidth, rightPosition)
    }
  }

  componentWillUnmount() {
    blogMenuPortal.removeChild(this.el)
  }

  render() {
    if (this.el) {
      return ReactDOM.createPortal(this.props.children, this.el)
    } else {
      return null
    }
  }
}

export default BlogMenuPortal
