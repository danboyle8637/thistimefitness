import React from 'react'

const ImageGradient = ({ width, height }) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1440 600"
  >
    <defs>
      <linearGradient
        id="image-gradient"
        x1="720"
        x2="720"
        y2="600"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#2b2c3a" />
        <stop offset=".52" stopColor="#2b2c3a" stopOpacity=".64" />
        <stop offset="1" stopColor="#2b2c3a" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path fill="url(#image-gradient)" d="M0 0h1440v600H0z" />
  </svg>
)

export default ImageGradient
