import React from 'react'

const FallLeaf2 = ({ width, height, className }) => {
  return (
    <svg
      id="fall-leaf-2"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 217.62 226.98"
    >
      <defs>
        <linearGradient
          id="fallLeafSolo2Gradient"
          x1="19.83"
          y1="104.54"
          x2="234.45"
          y2="104.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffc703" />
          <stop offset=".32" stopColor="#f4ad06" />
          <stop offset=".75" stopColor="#e8900a" />
          <stop offset=".99" stopColor="#e3850b" />
        </linearGradient>
      </defs>
      <path
        id="leaf"
        d="M81.25 199.5c-17.46-1-33.64-9-49.26-16.91 7.83-9.93 17.68-18.16 25.51-28.09-25.53-23-41-60.42-37-94.56C44.16 58 69.33 65.4 88.5 79.5c2.69-26.93 16.81-53.17 38-70 19.64 18.4 33.1 42.41 40.2 68.37a196 196 0 0 1 66.61-18.42c5.3 34.88-8.2 72.06-34.65 95.41 10.81 6.42 18.71 17.16 23.84 28.64-13.85 11.67-31.4 16.89-49.48 15.84-14.79-.86-29.47-4.79-40.52-15.84-1-1-5-7-6-7-.85 0-4 4.46-4.59 5.28a32.67 32.67 0 0 1-2.9 3.73 41.15 41.15 0 0 1-15.79 10.57 52.61 52.61 0 0 1-21.97 3.42z"
        transform="translate(-18.33 -7.52)"
        stroke="#572e0c"
        strokeMiterlimit="10"
        strokeWidth="3"
        fill="url(#fallLeafSolo2Gradient)"
      />
      <path
        id="stem"
        fill="none"
        stroke="#572e0c"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M108.17 223.98v-140"
      />
      <path
        id="stem-left"
        fill="none"
        stroke="#572e0c"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M127.67 144.48l-19-7-36-30"
      />
      <path
        id="stem-right"
        fill="none"
        stroke="#572e0c"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="6"
        d="M90.67 143.48l18-6 35-29"
      />
    </svg>
  )
}

export default FallLeaf2
