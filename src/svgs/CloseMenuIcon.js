import React, { Component } from 'react'

class CloseMenuIcon extends Component {
  render() {
    const { width, height, className } = this.props

    return (
      <svg
        id="close-menu-icon"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 174.51 174.51"
      >
        <title>Close Menu Icon</title>
        <rect
          x="134.27"
          y="-17.17"
          width="31.7"
          height="233.66"
          rx="15.85"
          transform="rotate(-45 103.705 169.344)"
          fill="#d7daff"
          id="left-line"
        />
        <rect
          x="33.29"
          y="83.81"
          width="233.66"
          height="31.7"
          rx="15.85"
          transform="rotate(-45 103.705 169.344)"
          fill="#d7daff"
          id="right-line"
        />
      </svg>
    )
  }
}

export default CloseMenuIcon
