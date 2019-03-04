import React from 'react'

const TTFLogoShort = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 664 259"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient
          id="short-ttf-gradient"
          x1="244.66"
          y1="9.12"
          x2="692.15"
          y2="234.55"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="38%" stopColor="#2ad2e2" />
          <stop offset="58%" stopColor="#5aa3ec" />
          <stop offset="86%" stopColor="#9b65fa" />
          <stop offset="100%" stopColor="#b44cff" />
        </linearGradient>
      </defs>
      <path
        d="M79.77 72H9.69V9.43h220.82V72h-70.07v176.71H79.77z"
        fill="#b44cff"
      />
      <path
        fill="url(#short-ttf-gradient)"
        d="M654.25 70.27V9.43H241.2v62.55h70.07v176.73h80.67V71.98h67.81v176.73h80.67v-76.57h99.81v-60.85h-99.81V70.27h113.83z"
      />
    </svg>
  )
}

export default TTFLogoShort
