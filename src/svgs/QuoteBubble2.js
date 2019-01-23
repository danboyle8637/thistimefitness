import React from 'react'

const QuoteBubble2 = ({ width, height }) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 541 177.01"
  >
    <defs>
      <linearGradient
        id="gradientQuote2"
        x1="15.57"
        y1="124.08"
        x2="542.17"
        y2="29.65"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".53" stopColor="#09a9b7" stopOpacity="0" />
        <stop offset=".56" stopColor="#09a9b7" stopOpacity=".01" />
        <stop offset="1" stopColor="#09a9b7" stopOpacity=".15" />
      </linearGradient>
    </defs>
    <path
      d="M530.79 11H25.46a14.83 14.83 0 0 0-14.84 14.83v102.34A14.83 14.83 0 0 0 25.46 143H73v33.82a5.18 5.18 0 0 0 8.78 3.73l39-37.55h410a14.83 14.83 0 0 0 14.83-14.83V25.83A14.83 14.83 0 0 0 530.79 11z"
      transform="translate(-7.62 -8)"
      stroke="#09a9b7"
      strokeMiterlimit="10"
      strokeWidth="6"
      fill="url(#gradientQuote2)"
    />
    <text
      id="quote"
      transform="translate(64.65 59.44)"
      fontSize="26"
      fill="#09a9b7"
      fontFamily="Avenir-Medium, Avenir"
      fontWeight="500"
    >
      I’m a beginner. Will I get the help
      <tspan x="0" y="36">
        I need to see results?
      </tspan>
    </text>
  </svg>
)

export default QuoteBubble2
