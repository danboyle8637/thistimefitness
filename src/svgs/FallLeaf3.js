import React from 'react'

const FallLeaf3 = ({ width, height, className }) => {
  return (
    <svg
      id="fall-leaf-3"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 173.74 193"
    >
      <defs>
        <linearGradient
          id="fallLeafSolo3Gradient"
          x1="42.91"
          y1="107.29"
          x2="211.64"
          y2="107.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d63200" />
          <stop offset=".12" stopColor="#d63d01" />
          <stop offset=".32" stopColor="#d75a04" />
          <stop offset=".59" stopColor="#d8890a" />
          <stop offset=".61" stopColor="#d88d0a" />
          <stop offset=".73" stopColor="#d78a0b" />
          <stop offset=".82" stopColor="#d3800e" />
          <stop offset=".9" stopColor="#cd7013" />
          <stop offset=".97" stopColor="#c55a1b" />
          <stop offset=".99" stopColor="#c1501e" />
        </linearGradient>
      </defs>
      <path
        id="leaf"
        d="M92.71 56C80.79 66 68.76 76 59.27 88.37s-16.34 27.24-16.36 42.79a54.58 54.58 0 0 0 28.38 47.24c17 9 41.24 6.92 57.21-3.92 8.4 7.78 17.84 12.58 29.29 12.57a53.93 53.93 0 0 0 53.27-62c-2.38-15.8-11.6-29.68-21.59-42.15a296.52 296.52 0 0 0-34.16-36C149 41.36 130.5 27.5 128.5 27.5c-1 0-8.58 5.78-11.54 8.25z"
        transform="translate(-40.41 -25)"
        stroke="#6f2812"
        strokeMiterlimit="10"
        strokeWidth="5"
        fill="url(#fallLeafSolo3Gradient)"
      />
      <path
        id="stem"
        d="M63.09 190.5l25-41s10-13.87 11-26c2-25-11-54-11-54"
        fill="none"
        stroke="#6f2812"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        id="top-cross-stem"
        fill="none"
        stroke="#6f2812"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M70.09 95.5l29 13 19-17"
      />
      <path
        id="bottom-cross-stem"
        fill="none"
        stroke="#6f2812"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
        d="M76.09 124.5l19 12 26-12"
      />
    </svg>
  )
}

export default FallLeaf3
