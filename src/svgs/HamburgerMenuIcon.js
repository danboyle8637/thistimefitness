import React, { Component } from 'react'

class HamburgerMenuIcon extends Component {
  render() {
    const { width, height, className } = this.props

    return (
      <svg
        id="hamburger-menu"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 284 188.15"
      >
        <rect
          width="284"
          height="30.12"
          rx="15.06"
          fill="#d7daff"
          id="long-icon"
        />
        <rect
          x="80.68"
          y="79.02"
          width="203.32"
          height="30.12"
          rx="15.06"
          fill="#d7daff"
          id="short-icon"
        />
        <rect
          x="32.27"
          y="158.03"
          width="251.73"
          height="30.12"
          rx="15.06"
          fill="#d7daff"
          id="med-icon"
        />
      </svg>
    )
  }
}

export default HamburgerMenuIcon
