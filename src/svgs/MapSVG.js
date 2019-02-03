import React from 'react'

const MapSVG = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 800 800"
  >
    <g id="side-streets" fill="none">
      <path
        id="parking-lot"
        d="M614.22 286c-1.19-10.91-2.25-25.62-6.49-35.74s-12-19.34-22.43-22.7c-11.87-3.82-24.73.42-36.22 5.27a334.52 334.52 0 0 0-103.25 68.5c-7.45 7.26-14.81 15.29-17.58 25.32-4.93 17.81 6.69 40.61 16.91 56l-47.5 34.16c15.2-10.65 31.27-22.79 47.5-34.16 35.53-24.89 73.18-50.38 113.66-78.73 9-6.34 18.22-12.75 28.54-16.72 8.21-3.16 18.08-3.41 26.86-1.21 2.25.56 4.17 1.73 6.28 2.53 13.27 5 21.2 14.85 29 26.7l76.43 115.86"
        stroke="#b44cff"
        strokeMiterlimit="10"
        strokeWidth="7"
      />
      <path
        id="top-side-street"
        strokeWidth="13"
        stroke="#36325f"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M386.5 140.5l-117 80"
      />
      <path
        id="bottom-side-street"
        strokeWidth="13"
        stroke="#36325f"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M807.5 593.5l-205 130"
      />
    </g>
    <g id="dog-wood-road">
      <path
        id="dog-wood"
        d="M121 819c233.66-142 485.37-302.24 712.48-454.5"
        fill="none"
        stroke="#36325f"
        strokeMiterlimit="10"
        strokeWidth="15"
      />
    </g>
    <path
      d="M649.52 836.33c-119.41-178.9-293.85-443.46-446.77-687.85C171.2 98.06 110 0 110 0h35s51.66 82.19 83.19 132.57c152.72 244.08 327 508.37 446.29 687.1z"
      fill="#b44cff"
      id="ashley-river-road"
    />
    <g id="main-building">
      <path
        id="building"
        fill="#b44cff"
        stroke="#b44cff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M582 166.5l-18 13 3 6.5-159.75 100.75-25.75-37.25 197-122 31 5 132 210-38 22-109.25-171.75 4.25-3.75-16.5-22.5z"
      />
    </g>
    <g id="circle-k">
      <circle id="outer-circle" cx="376.25" cy="561.25" r="42" fill="#3a375f" />
      <circle
        id="inner-circle"
        cx="376.25"
        cy="561.25"
        r="34.5"
        fill="#484381"
      />
    </g>
    <g id="three-matadors">
      <circle
        id="outer-circle-2"
        data-name="outer-circle"
        cx="95.25"
        cy="105.25"
        r="42"
        fill="#3a375f"
      />
      <circle
        id="inner-circle-2"
        data-name="inner-circle"
        cx="95.25"
        cy="105.25"
        r="34.5"
        fill="#484381"
      />
    </g>
    <g id="esterbys">
      <circle
        id="outer-circle-3"
        data-name="outer-circle"
        cx="704.25"
        cy="739.25"
        r="42"
        fill="#3a375f"
      />
      <circle
        id="inner-circle-3"
        data-name="inner-circle"
        cx="704.25"
        cy="739.25"
        r="34.5"
        fill="#484381"
      />
    </g>
    <g id="this-time-fitness">
      <circle
        id="outer-circle-4"
        data-name="outer-circle"
        cx="477.25"
        cy="211.25"
        r="42"
        fill="#09a9b7"
        opacity=".4"
      />
      <circle
        id="inner-circle-4"
        data-name="inner-circle"
        cx="477.25"
        cy="211.25"
        r="34.5"
        fill="#3fefff"
        opacity=".53"
      />
    </g>
    <g
      id="road-labels"
      fontFamily="Montserrat-SemiBold, Montserrat"
      fontWeight="600"
      letterSpacing=".16em"
    >
      <text
        id="ashley-river-rd"
        transform="rotate(57.19 -86.654 287.66)"
        fontSize="24"
        fill="#9c33e8"
      >
        ASHL
        <tspan x="82.25" y="0" letterSpacing=".15em">
          E
        </tspan>
        <tspan x="101.98" y="0">
          Y R
        </tspan>
        <tspan x="153.53" y="0">
          I
        </tspan>
        <tspan x="164.9" y="0" letterSpacing=".14em">
          V
        </tspan>
        <tspan x="185.88" y="0">
          ER R
        </tspan>
        <tspan x="259.03" y="0" letterSpacing=".15em">
          O
        </tspan>
        <tspan x="282.84" y="0">
          AD
        </tspan>
      </text>
      <text
        id="dog-wood-rd-right"
        transform="rotate(-33.27 1237.878 -681.745)"
        fontSize="18"
        fill="#9c33e8"
      >
        DOG{' '}
        <tspan x="60.41" y="0" letterSpacing=".14em">
          W
        </tspan>
        <tspan x="83.48" y="0">
          OOD RD
        </tspan>
      </text>
      <text
        id="dog-wood-rd-left"
        transform="rotate(-32.9 1419.177 -125.083)"
        fontSize="18"
        fill="#9c33e8"
      >
        DOG{' '}
        <tspan x="60.41" y="0" letterSpacing=".14em">
          W
        </tspan>
        <tspan x="83.48" y="0">
          OOD RD
        </tspan>
      </text>
      <text
        id="circle-k-2"
        data-name="circle-k"
        transform="rotate(-.02 1609222.238 -566574.944)"
        fontSize="20"
        fill="#5a5592"
      >
        CIRCLE K
      </text>
      <text
        id="three-matadors-2"
        data-name="three-matadors"
        transform="rotate(-.02 506195.994 -94077.268)"
        fontSize="20"
        fill="#5a5592"
      >
        THREE{' '}
        <tspan x="0" y="24">
          M
        </tspan>
        <tspan x="22.3" y="24" letterSpacing=".13em">
          AT
        </tspan>
        <tspan x="54.32" y="24">
          ADORS
        </tspan>
      </text>
      <text
        id="esterbys-2"
        data-name="esterbys"
        transform="rotate(-.02 1938882.467 -1766864.012)"
        fontSize="20"
        fill="#5a5592"
      >
        EA
        <tspan x="34.78" y="0" letterSpacing=".15em">
          S
        </tspan>
        <tspan x="50.36" y="0">
          TER
        </tspan>
        <tspan x="100.02" y="0" letterSpacing=".14em">
          BY
        </tspan>
        <tspan x="134.26" y="0">
          S
        </tspan>
      </text>
      <text
        id="this-time-fitness-2"
        data-name="this-time-fitness"
        transform="matrix(.85 -.52 .52 .85 358.75 217.37)"
        fontSize="22"
        fill="#3fefff"
      >
        THIS TIME FITNESS
      </text>
    </g>
  </svg>
)

export default MapSVG
