import React, { Component } from 'react'

class ClassKeyDot extends Component {
  render() {
    const {
      width,
      height,
      className,
      startColor,
      middleColor,
      endColor,
      classType,
    } = this.props

    return (
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 85 85"
      >
        <defs>
          <linearGradient
            id={`${classType}-gradient`}
            x1="15.61"
            y1="7.73"
            x2="67.61"
            y2="74.97"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor={startColor} />
            <stop offset=".36" stopColor={middleColor} />
            <stop offset="1" stopColor={endColor} />
          </linearGradient>
        </defs>
        <circle
          cx="42.5"
          cy="42.5"
          r="42.5"
          fill={`url(#${classType}-gradient)`}
        />
      </svg>
    )
  }
}

export default ClassKeyDot
