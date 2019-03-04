import React from 'react'

const PhoneIcon = ({ width, height, strokeColor, className }) => (
  <svg
    id="PhoneIcon"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 143.81 230.5"
  >
    <title>Phone Icon</title>
    <path
      id="signal-outer"
      d="M140.81 45.5v-.25A42.26 42.26 0 0 0 98.56 3h-.75"
      fill="none"
      stroke={strokeColor}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="7"
    />
    <path
      id="signal-inner"
      d="M128.3 45.5V45a30 30 0 0 0-30-30"
      fill="none"
      stroke={strokeColor}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="7"
    />
    <path
      id="phone"
      d="M100.6 36H29.77A23.58 23.58 0 0 0 6.19 59.58v157.84A23.58 23.58 0 0 0 29.77 241h70.83a23.59 23.59 0 0 0 23.59-23.58V59.58A23.59 23.59 0 0 0 100.6 36zM48.19 47h34a2.5 2.5 0 0 1 0 5h-34a2.5 2.5 0 0 1 0-5zm17 188a5.5 5.5 0 1 1 5.5-5.5 5.5 5.5 0 0 1-5.5 5.5zm54.5-15h-109V60h109z"
      transform="translate(-6.19 -10.5)"
      fill={strokeColor}
    />
  </svg>
)

export default PhoneIcon
