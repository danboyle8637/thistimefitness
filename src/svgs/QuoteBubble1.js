import React from 'react'

const QuoteBubble1 = ({ width, height }) => (
  <svg
    id="text-bubble"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 472 204.11"
  >
    <defs>
      <linearGradient
        id="gradientQuote1"
        x1="54.61"
        y1="-14.73"
        x2="467.48"
        y2="201.36"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#09a9b7" stopOpacity=".14" />
        <stop offset=".24" stopColor="#09a9b7" stopOpacity=".07" />
        <stop offset=".47" stopColor="#09a9b7" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      id="bubble"
      d="M468.24 8.89H19.76A8.76 8.76 0 0 0 11 17.65v133.49a8.76 8.76 0 0 0 8.76 8.75h328.92l49.68 45.92a4.44 4.44 0 0 0 7.45-3.26v-42.66h62.43a8.76 8.76 0 0 0 8.76-8.75V17.65a8.76 8.76 0 0 0-8.76-8.76z"
      transform="translate(-8 -5.89)"
      stroke="#09a9b7"
      strokeMiterlimit="10"
      strokeWidth="5"
      fill="url(#gradientQuote1)"
    />
    <text
      id="quote"
      transform="translate(47.89 69.31)"
      fontSize="27"
      fill="#09a9b7"
      fontFamily="Avenir-Medium, Avenir"
      fontWeight="500"
    >
      It
      <tspan x="19.44" y="0" letterSpacing="-.07em">
        ’
      </tspan>
      <tspan x="25.56" y="0" letterSpacing="0em">
        s been a while since I last{' '}
      </tspan>
      <tspan x="0" y="36">
        worked out... Can I keep up?
      </tspan>
    </text>
  </svg>
)

export default QuoteBubble1
