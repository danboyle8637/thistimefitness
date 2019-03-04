import React from 'react'

const TTFLogoShort = ({ width, height }) => {
  const stopColor1 = '#2ad2e2'
  const stopColor2 = '#5aa3ec'
  const stopColor3 = '#9b65fa'
  const stopColor4 = '#b44cff'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 664 259"
      preserveAspectRatio="xMidYMid meet"
    >
      <title>Small This Time Fitness Logo</title>
      <defs>
        <linearGradient
          id="short_ttf_gradient"
          x1="244.66"
          y1="9.12"
          x2="692.15"
          y2="234.55"
          // gradientUnits="userSpaceOnUse"
        >
          <stop
            offset=".38"
            style={{ stopColor: '#2ad2e2' }}
            // stopColor={stopColor1}
          />
          <stop
            offset=".58"
            style={{ stopColor: '#5aa3ec' }}
            // stopColor={stopColor2}
          />
          <stop
            offset=".86"
            style={{ stopColor: '#9b65fa' }}
            // stopColor={stopColor3}
          />
          <stop
            offset="1"
            style={{ stopColor: '#b44cff' }}
            // stopColor={stopColor4}
          />
        </linearGradient>
      </defs>
      <path
        d="M79.77 72H9.69V9.43h220.82V72h-70.07v176.71H79.77z"
        fill="#b44cff"
      />
      <path
        fill="url(#short_ttf_gradient)"
        d="M654.25 70.27V9.43H241.2v62.55h70.07v176.73h80.67V71.98h67.81v176.73h80.67v-76.57h99.81v-60.85h-99.81V70.27h113.83z"
      />
    </svg>
  )
}

export default TTFLogoShort
