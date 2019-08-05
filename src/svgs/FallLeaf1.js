import React from 'react'

const FallLeaf1 = ({ width, height, className }) => {
  return (
    <svg
      id="fall-leaf-1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 184.56 185.13"
    >
      <defs>
        <linearGradient
          id="fallLeafSolo1Gradient"
          x1="41.89"
          y1="118.82"
          x2="222.45"
          y2="118.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ea642c" />
          <stop offset=".17" stopColor="#ea6128" />
          <stop offset=".34" stopColor="#e9581c" />
          <stop offset=".51" stopColor="#e84a08" />
          <stop offset=".57" stopColor="#e74400" />
          <stop offset=".62" stopColor="#e24402" />
          <stop offset=".81" stopColor="#d54306" />
          <stop offset=".99" stopColor="#d14308" />
        </linearGradient>
      </defs>
      <path
        id="leaf"
        d="M76.92 176.55C60.08 166.53 46.16 151 43 132c-2-12-1.14-32.24 1.28-34.6 1.61-1.58 5.84 5.76 9.72 2.6 3-2.44-2.13-10.48-2.13-21.48 0-6.09.45-15 2.87-17.23S67.45 72.52 70 70.75c1.78-1.23 2.93-19.71 8-29.83 2-4 8.51-12.66 10.12-12.66 1.25 0 7.88 9 9.31 13.87 1.15 4 2.47 8.84 3.6 12.87 1.57 5.63 6.58 12.68 8.51 12.12s6.6-8.78 8.48-12.41c5.33-10.27 14.19-23.12 25.89-19.9a29 29 0 0 0-1 9.69c.19 3.43 2.43 11 4.58 12.27 1.51.89 7-3.18 10-5s6-3.83 8.91-5.78c7.9-5.35 17-7.4 26.43-8.79 6.22-.92 19.48.31 20.36 1.36s1.59 15.3.33 21.8A72.77 72.77 0 0 1 203 87.05c-1.87 3-4.95 6.8-6.05 8.86-1.65 3.09-4.17 6.78-1.54 9.08 3.14 2.75 20.48-.86 21 3.09.17 1.32-2.53 8.12-3.74 10.51-1.71 3.36-5.13 6.47-7.21 8.53-4.19 4.13-8.59 7-11.51 8.15-3.32 1.25-9.72 3.19-10.07 6.71-.38 3.74 7.38 5.52 11 6.66s9.92 3.43 13.43 4.74c6.22 2.31 12.94 6 14.21 9.41.61 1.65-5.67 6.5-10.19 9.14-6.87 4-10.46 5.41-18.6 7.48-5.18 1.33-9 .29-10.68 2.21-3.09 3.41 9 11.89 7.48 13.87-3.77 4.85-19.41 2.37-25.12 1.47-4.71-.73-14.11-2.42-14.51-.15-.77 4.4 2.64 5.39 3.08 8.92.18 1.42-7.06 3.4-11.27 3.57-27.91 1.12-52.36-8.53-65.79-32.75z"
        transform="translate(-39.89 -26.26)"
        stroke="#a44118"
        strokeMiterlimit="10"
        strokeWidth="4"
        fill="url(#fallLeafSolo1Gradient)"
      />
      <path
        id="stem"
        fill="none"
        stroke="#582815"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
        d="M7.64 176.5L150.65 34.48"
      />
      <path
        id="stem-bottom"
        d="M46.61 51.98s-3.59 49.59 15.93 70 72.25 15.55 72.25 15.55"
        fill="none"
        stroke="#582815"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <path
        id="stem-top"
        d="M90.57 39.74s-8.37 33.56 2.86 47.8c11.53 14.62 51.27 6.59 51.27 6.59"
        fill="none"
        stroke="#582815"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
    </svg>
  )
}

export default FallLeaf1
