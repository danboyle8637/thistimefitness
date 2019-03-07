import React from 'react'

const TTFLogoShort = ({ width, height, className }) => {
  return (
    <svg
      id="ttf-logo-short"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 644.56 239.28"
    >
      <linearGradient
        id="ttf-short-logo-gradient"
        x1="234.97"
        y1="-.31"
        x2="682.46"
        y2="225.13"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".26" stopColor="#2ad2e2" stopOpacity="1" />
        <stop offset=".5" stopColor="#5aa3ec" stopOpacity="1" />
        <stop offset=".84" stopColor="#9b65fa" stopOpacity="1" />
        <stop offset="1" stopColor="#b44cff" stopOpacity="1" />
      </linearGradient>
      <g id="t">
        <path
          id="t-letter"
          d="M79.77 72H9.69V9.43h220.82V72h-70.07v176.71H79.77z"
          transform="translate(-9.69 -9.43)"
          fill="#b44cff"
        />
      </g>
      <path
        id="ttf-gradient"
        fill="url(#ttf-short-logo-gradient)"
        d="M644.56 60.84V0H231.51v62.55h70.07v176.73h80.67V62.55h67.81v176.73h80.67v-76.57h99.81v-60.85h-99.81V60.84h113.83z"
      />
    </svg>
  )
}

export default TTFLogoShort
