import React from 'react'

const MapIcon = ({ width, height, fillColor }) => {
  return (
    <svg
      id="map-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 189.46 281.83"
    >
      <path
        id="icon"
        d="M154 8.74A94.75 94.75 0 0 0 72.16 151.2l65.71 129.21a18.59 18.59 0 0 0 33.19-.1l64.38-128.43A94.76 94.76 0 0 0 154 8.74zM97.05 104a57 57 0 1 1 25.34 47.37A56.95 56.95 0 0 1 97.05 104z"
        transform="translate(-59.27 -8.74)"
        fill={fillColor}
      />
    </svg>
  )
}

export default MapIcon
