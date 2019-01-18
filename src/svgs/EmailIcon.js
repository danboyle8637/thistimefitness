import React from 'react'

const EmailIcon = ({ width, height, strokeColor }) => {
  return (
    <svg
      id="email-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 220.95 143.32"
    >
      <path
        d="M215.47 22.99v97.33a17.53 17.53 0 0 1-17.52 17.52h-175a17.55 17.55 0 0 1-17.48-17.52V22.99a17.43 17.43 0 0 1 6.18-13.34l65.91 63.92 28.17 27.33a6.81 6.81 0 0 0 9.48 0l28.33-27.43L209.29 9.7a17.43 17.43 0 0 1 6.18 13.29z"
        fill="none"
        stroke={strokeColor}
        stroke-linejoin="bevel"
        stroke-width="11.44"
      />
      <path
        d="M209.29 9.65a17.37 17.37 0 0 0-11.34-4.18h-175a17.37 17.37 0 0 0-11.34 4.18M143.55 73.42l63.96 61.44M14.43 134.86l63.13-61.29"
        fill="none"
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="11.44"
      />
    </svg>
  )
}

export default EmailIcon
