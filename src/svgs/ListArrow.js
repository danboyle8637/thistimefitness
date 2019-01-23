import React from 'react'

const ListArrow = ({ width, height }) => (
  <svg
    id="line-arrow"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 92.9 38.35"
  >
    <path
      id="arrow-body"
      fill="none"
      stroke="#b44cff"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="6"
      d="M4.5 19.18h80.44"
    />
    <path
      id="pointer"
      fill="none"
      stroke="#b44cff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="6"
      d="M76.44 33.85L88.4 19.18 76.44 4.5"
    />
  </svg>
)

export default ListArrow
