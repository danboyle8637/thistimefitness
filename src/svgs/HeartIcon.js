import React from 'react'

const HeartIcon = ({ width, height, className, fill }) => (
  <svg
    id="hand-two"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 188.75 180.49"
  >
    <path
      d="M93.62 171.92l-71.49-71.49a53.64 53.64 0 0 1 0-75.83 48.16 48.16 0 0 1 68.17-.21"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="12.87"
    />
    <path
      d="M90.3 24.39a53.46 53.46 0 0 1 75.7-.21 48.3 48.3 0 0 1 0 68.32l-72.4 79.42"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="17.16"
    />
  </svg>
)

export default HeartIcon
