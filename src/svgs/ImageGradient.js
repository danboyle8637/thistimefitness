import React from 'react'

const TopDarkBlueGradient = ({ width, height, stopMidOpacity }) => (
  <svg
    id="top-darkblue-gradient"
    data-name="Top Dark Blue Gradient"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1440 600"
  >
    <defs>
      <linearGradient
        id="topDarkBlueGradient"
        x1="720"
        x2="720"
        y2="600"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#2b2c3a" />
        <stop offset=".52" stopColor="#2b2c3a" stopOpacity={stopMidOpacity} />
        <stop offset="1" stopColor="#2b2c3a" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path fill="url(#topDarkBlueGradient)" d="M0 0h1440v600H0z" />
  </svg>
)

const TopDarkPurpleGradient = ({ width, height, stopMidOpacity }) => (
  <svg
    id="top-darkpurple-gradient"
    data-name="Top Dark Purple Gradient"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1440 600"
  >
    <defs>
      <linearGradient
        id="topDarkPurpleGradient"
        x1="720"
        y1="600"
        x2="720"
        gradientTransform="matrix(1 0 0 -1 0 600)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#26243e" />
        <stop offset=".52" stopColor="#26243e" stopOpacity={stopMidOpacity} />
        <stop offset="1" stopColor="#26243e" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path fill="url(#topDarkPurpleGradient)" d="M0 0h1440v600H0z" />
  </svg>
)

const BottomDarkBlueGradient = ({ width, height, stopMidOpacity }) => (
  <svg
    id="bottom-darkblue-gradient"
    data-name="Bottom Dark Blue Gradient"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1440 600"
  >
    <defs>
      <linearGradient
        id="bottomDarkBlueGradient"
        x1="720"
        y1="600"
        x2="720"
        gradientTransform="matrix(1 0 0 -1 0 600)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#2b2c3a" stopOpacity="0" />
        <stop offset=".52" stopColor="#2b2c3a" stopOpacity={stopMidOpacity} />
        <stop offset="1" stopColor="#2b2c3a" />
      </linearGradient>
    </defs>
    <path fill="url(#bottomDarkBlueGradient)" d="M0 0h1440v600H0z" />
  </svg>
)

const BottomDarkPurpleGradient = ({ width, height, stopMidOpacity }) => (
  <svg
    id="bottom-darkpurple-gradient"
    data-name="Bottom Dark Purple Gradient"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 1440 600"
  >
    <defs>
      <linearGradient
        id="bottomDarkPurpleGradient"
        x1="720"
        y1="600"
        x2="720"
        gradientTransform="matrix(1 0 0 -1 0 600)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#26243e" stopOpacity="0" />
        <stop offset=".52" stopColor="#26243e" stopOpacity={stopMidOpacity} />
        <stop offset="1" stopColor="#26243e" />
      </linearGradient>
    </defs>
    <path fill="url(#bottomDarkPurpleGradient)" d="M0 0h1440v600H0" />
  </svg>
)

export {
  TopDarkBlueGradient,
  TopDarkPurpleGradient,
  BottomDarkBlueGradient,
  BottomDarkPurpleGradient,
}
