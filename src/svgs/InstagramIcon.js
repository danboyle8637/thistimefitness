import React from 'react'

const InstagramIcon = ({ width, height, strokeColor }) => {
  return (
    <svg
      id="instagram-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 221.44 221.44"
    >
      <rect
        id="camera-outline"
        x="5.72"
        y="5.72"
        width="210"
        height="210"
        rx="52.07"
        fill="none"
        stroke={strokeColor}
        strokeMiterlimit="10"
        strokeWidth="11.44"
      />
      <circle
        id="camera-center"
        cx="111.24"
        cy="111.24"
        r="48.34"
        fill="none"
        stroke={strokeColor}
        strokeMiterlimit="10"
        strokeWidth="11.44"
      />
      <circle
        id="camera-flash"
        cx="170.75"
        cy="50.16"
        r="14.29"
        fill="#5afdf2"
      />
    </svg>
  )
}

export default InstagramIcon
