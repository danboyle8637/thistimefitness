import React from 'react'

const QuoteBubble4 = ({ width, height }) => (
  <svg
    id="quote-bubble"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 408 166.68"
  >
    <defs>
      <linearGradient
        id="gradientQuote4"
        x1="11.6"
        y1="112.76"
        x2="411.53"
        y2="41.04"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".53" stopColor="#2AD2E2" stopOpacity="0" />
        <stop offset=".56" stopColor="#2AD2E2" stopOpacity=".01" />
        <stop offset="1" stopColor="#2AD2E2" stopOpacity=".15" />
      </linearGradient>
    </defs>
    <path
      id="bubble"
      d="M396.49 11h-371A15.5 15.5 0 0 0 10 26.51v101A15.5 15.5 0 0 0 25.51 143h50.62L76 168.25a3.41 3.41 0 0 0 5.7 2.53L112.25 143h284.24A15.5 15.5 0 0 0 412 127.49v-101A15.5 15.5 0 0 0 396.49 11z"
      transform="translate(-7 -8)"
      stroke="#2AD2E2"
      strokeMiterlimit="10"
      strokeWidth="5"
      fill="url(#gradientQuote4)"
    />
    <text
      id="quote"
      transform="translate(66.08 59.44)"
      fontSize="25"
      fill="#2AD2E2"
      fontFamily="Avenir-Medium, Avenir"
      fontWeight="500"
    >
      I’m want workouts that
      <tspan x="0" y="36">
        a
      </tspan>
      <tspan x="15.57" y="36" letterSpacing="-.02em">
        r
      </tspan>
      <tspan x="26.13" y="36">
        e fun and different!
      </tspan>
    </text>
  </svg>
)

export default QuoteBubble4
