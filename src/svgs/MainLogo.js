import React from 'react'

import PropTypes from 'prop-types'

const MainLogo = ({ width, height, thisFill, fitnessFill, className }) => (
  <svg
    id="Logo"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 648.78 207.6"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="202.21"
        y1="326.9"
        x2="650.13"
        y2="326.9"
        gradientTransform="translate(2 -257)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".38" stopColor="#2ad2e2" />
        <stop offset=".58" stopColor="#5aa3ec" />
        <stop offset=".87" stopColor="#9b65fa" />
        <stop offset="1" stopColor="#b44cff" />
      </linearGradient>
    </defs>
    <g id="This" fill={thisFill}>
      <path
        id="t-letter"
        d="M34.51 62.58H8.22v-9.53h63.41v9.53H45.35v67.12H34.51z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="h-letter"
        d="M137.11 96.3v33.4H126.6V97.51c0-11.39-5.69-17-15.66-17-11.17 0-18.39 6.68-18.39 19.28v29.91H82V48.45h10.55v31.43c4.38-5.59 11.6-8.76 20.47-8.76 14.13 0 24.09 8.1 24.09 25.18z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="i-letter"
        d="M154.75 53.71a6.91 6.91 0 0 1 7.12-6.9 6.8 6.8 0 0 1 7.13 6.68 7.12 7.12 0 0 1-14.23.22zm1.86 17.95h10.51v58h-10.51z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="s-letter"
        d="M179.83 123.57l4.38-8.32c4.92 3.5 12.81 6 20.36 6 9.75 0 13.8-3 13.8-7.88 0-13-36.68-1.76-36.68-24.86 0-10.4 9.3-17.41 24.2-17.41 7.55 0 16.1 2 21.13 5.25l-4.49 8.33a30.25 30.25 0 0 0-16.75-4.6c-9.2 0-13.69 3.39-13.69 8 0 13.69 36.79 2.52 36.79 25.08 0 10.51-9.63 17.19-25.07 17.19-9.64.01-19.17-2.95-23.98-6.78z"
        transform="translate(-8.22 -9.44)"
      />
    </g>
    <g id="Fitness" fill={fitnessFill}>
      <path
        id="f-letter"
        d="M48.1 153.36v22.57h35.82v11.65H48.1V216H34.33v-74.19h54.15v11.55z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="i-letter-2"
        data-name="i-letter"
        d="M132 141.81h13.77V216H132z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="t-letter-2"
        data-name="t-letter"
        d="M211.05 153.46h-24.58v-11.65h62.94v11.65h-24.58V216h-13.78z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="n-letter"
        d="M355.89 141.81V216h-11.34l-40.9-50.22V216H290v-74.19h11.34L342.22 192v-50.19z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="e-letter"
        d="M461.63 204.43V216H406v-74.19h54.15v11.55h-40.37v19.28h35.81V184h-35.81v20.45z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="s1-letter"
        d="M500.93 208.14l4.77-10.7c5.93 4.77 15.36 8.16 24.47 8.16 11.55 0 16.43-4.14 16.43-9.65 0-16-44.08-5.51-44.08-33.06 0-12 9.54-22.14 29.88-22.14 8.9 0 18.23 2.33 24.69 6.57L552.75 158a41.26 41.26 0 0 0-20.46-5.83c-11.44 0-16.1 4.45-16.1 10.07 0 15.79 44 5.51 44 32.74 0 11.87-9.64 22-30 22-11.56.02-23.11-3.54-29.26-8.84z"
        transform="translate(-8.22 -9.44)"
      />
      <path
        id="s2-letter"
        d="M597.77 208.14l4.77-10.7c5.93 4.77 15.36 8.16 24.47 8.16 11.55 0 16.43-4.14 16.43-9.65 0-16-44.08-5.51-44.08-33.06 0-12 9.54-22.14 29.88-22.14 8.9 0 18.22 2.33 24.69 6.57L649.58 158a41.19 41.19 0 0 0-20.45-5.83c-11.44 0-16.1 4.45-16.1 10.07 0 15.79 44 5.51 44 32.74 0 11.87-9.64 22-30 22-11.57.02-23.12-3.54-29.26-8.84z"
        transform="translate(-8.22 -9.44)"
      />
    </g>
    <g id="Time" fill="url(#linear-gradient)">
      <path
        d="M239.63 41.05h-35.42V9.44h111.6v31.61h-35.42v89.31h-40.76zM326.34 9.44h40.77v120.92h-40.77zM494.76 130.36l-.34-55.11-26.26 44.23h-18l-26.22-42.33v53.21H386.8V9.44h33.51l39.39 64.43 38.35-64.43h33.51l.34 120.92zM652.13 99.61v30.75H551.59V9.44h98.29v30.75h-58.21v14.16h51.13v29.37h-51.13v15.89z"
        transform="translate(-8.22 -9.44)"
      />
    </g>
  </svg>
)

MainLogo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  thisFill: PropTypes.string,
  fitnessFill: PropTypes.string,
  className: PropTypes.string,
}

export default MainLogo
