import React from 'react'

const FacebookIcon = ({ width, height, strokeColor }) => {
  return (
    <svg
      id="facebook-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 220.09 220.09"
    >
      <path
        id="icon"
        d="M176.24 5.04H43.84a38.8 38.8 0 0 0-38.8 38.8v132.4a38.8 38.8 0 0 0 38.8 38.8h71.14v-91.7h-12.73V95.83h12.79v-22c0-9.17 4.66-17.92 14.68-22.93 9.17-4.58 42.18 1.84 42.18 1.84v22h-19.22a7.13 7.13 0 0 0-4.58 1.84c-1.84 1.83-1.84 3-1.84 5.5v13.75h25.68l-4.59 27.51h-21.48v91.7h30.37a38.8 38.8 0 0 0 38.8-38.8V43.84a38.8 38.8 0 0 0-38.8-38.8z"
        fill="none"
        stroke={strokeColor}
        stroke-miterlimit="10"
        stroke-width="11.44"
      />
    </svg>
  )
}

export default FacebookIcon
