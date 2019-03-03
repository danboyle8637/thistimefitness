import React from 'react'

const QuoteBubble3 = ({ width, height }) => (
  <svg
    id="quote-bubble"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 388 154.53"
  >
    <defs>
      <linearGradient
        id="gradientQuote3"
        x1="27.29"
        y1="143.87"
        x2="381.3"
        y2=".33"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#2AD2E2" stopOpacity=".15" />
        <stop offset=".04" stopColor="#2AD2E2" stopOpacity=".14" />
        <stop offset=".54" stopColor="#2AD2E2" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      id="bubble"
      d="M374.83 8H25.17A16.17 16.17 0 0 0 9 24.17v83.66A16.17 16.17 0 0 0 25.17 124H298.6l34.06 31.36a4.37 4.37 0 0 0 7.34-3.21V124h34.83A16.17 16.17 0 0 0 391 107.83V24.17A16.17 16.17 0 0 0 374.83 8z"
      transform="translate(-6 -5)"
      stroke="#2AD2E2"
      strokeMiterlimit="10"
      strokeWidth="4"
      fill="url(#gradientQuote3)"
    />
    <text
      id="quote"
      transform="translate(55.08 49.67)"
      fontSize="22"
      fill="#2AD2E2"
      fontFamily="Avenir-Medium, Avenir"
      fontWeight="500"
    >
      I’m looking for workouts
      <tspan x="0" y="36">
        that will challenge me!
      </tspan>
    </text>
  </svg>
)

export default QuoteBubble3
