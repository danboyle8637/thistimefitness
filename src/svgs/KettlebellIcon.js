import React from 'react'

const KettlebellIcon = ({ width, height, className, fill, stroke }) => (
  <svg
    id="kettlebell-icon"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 129.85 181.06"
  >
    <path
      id="kettlebell"
      d="M110.97 71.43c2.92-5.83 8-13.62 9.39-26.76 1.92-18.34-15.13-35.11-30.63-40.88-11.68-4.35-54-7.29-72.95 14.59s1.36 53.8 1.36 53.8a64.2 64.2 0 1 0 92.81-.75zm-73.9-41.86c15-12.83 47.35-8.92 56.61 2.76 5.82 7.33 5 18.77-1.38 25.73a64.24 64.24 0 0 0-55.89.56c-1.61-1.92-13.44-17 .66-29.05z"
      fill={fill || '#b44cff'}
      stroke={stroke || '#b44cff'}
      strokeMiterlimit="10"
      strokeWidth="1.46"
    />
  </svg>
)

export default KettlebellIcon
