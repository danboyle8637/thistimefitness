import React from 'react'

const WorkoutIcon = ({ width, height, className, kbFill, dbFill }) => (
  <svg
    id="workout-icon"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 194.08 142.24"
  >
    <title>Workout Icon</title>
    <path
      id="kettlebell"
      d="M132.22 130.66c1.71.17 3.44.25 5.19.25a52.41 52.41 0 0 0 5.42-104.55 42 42 0 1 0-57.64 56.39 52.6 52.6 0 0 0 .85 6.06m19.79-67.73a25 25 0 0 1 17.34 7 52.51 52.51 0 0 0-35.9 35.09 25.11 25.11 0 0 1 18.56-42.09z"
      fill="none"
      stroke={kbFill}
      strokeMiterlimit="10"
      strokeWidth="8.5"
    />
    <path
      id="dumbbell"
      d="M144.5 77.21h-12.75v-11a5.66 5.66 0 0 0-5.67-5.66h-19.83a5.66 5.66 0 0 0-5.67 5.66v22.22H52.41V66.19a5.65 5.65 0 0 0-5.66-5.66H26.91a5.65 5.65 0 0 0-5.66 5.66v11H8.5a5.67 5.67 0 0 0-5.67 5.69v35.28a5.67 5.67 0 0 0 5.67 5.67h12.75v9.92a5.65 5.65 0 0 0 5.66 5.66h19.84a5.65 5.65 0 0 0 5.66-5.66V112.5h48.17v21.25a5.66 5.66 0 0 0 5.67 5.66h19.83a5.66 5.66 0 0 0 5.67-5.66v-9.92h12.75a5.66 5.66 0 0 0 5.66-5.67V82.88a5.66 5.66 0 0 0-5.66-5.67z"
      fill="none"
      stroke={dbFill}
      strokeMiterlimit="10"
      strokeWidth="5.67"
    />
  </svg>
)

export default WorkoutIcon
