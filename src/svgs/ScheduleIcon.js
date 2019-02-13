import React, { Component } from 'react'

class ScheduleIcon extends Component {
  render() {
    const { width, height, className } = this.props

    return (
      <svg
        id="calendar-icon"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 279.27 257.88"
      >
        <path
          id="calendar"
          d="M266.37 39.36h-19.59v16.71A17.94 17.94 0 0 1 228.84 74a17.94 17.94 0 0 1-17.94-17.93V39.36H89.18v16.71a17.94 17.94 0 0 1-35.88 0V39.36H33.62a23.26 23.26 0 0 0-23.25 23.26V248a23.26 23.26 0 0 0 23.25 23.26h232.75A23.26 23.26 0 0 0 289.63 248V62.62a23.26 23.26 0 0 0-23.26-23.26zm6.25 207.94a6.56 6.56 0 0 1-6.56 6.56H34.26a6.56 6.56 0 0 1-6.55-6.56V98.49a6.56 6.56 0 0 1 6.55-6.56h231.8a6.56 6.56 0 0 1 6.56 6.56z"
          transform="translate(-10.37 -13.38)"
          fill="#d7daff"
        />
        <rect
          id="notch-1"
          x="52.21"
          width="17.32"
          height="51.97"
          rx="7"
          fill="#d7daff"
        />
        <rect
          id="notch-2"
          x="209.81"
          width="17.32"
          height="51.97"
          rx="7"
          fill="#d7daff"
        />
        <g id="day-grid">
          <rect
            id="day-block"
            x="91.78"
            y="95.89"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
          <rect
            id="day-block-2"
            dataName="day-block"
            x="148.64"
            y="95.89"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
          <rect
            id="day-block-3"
            dataName="day-block"
            x="205.51"
            y="95.89"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
          <rect
            id="day-block-4"
            dataName="day-block"
            x="34.42"
            y="144.08"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
          <rect
            id="day-block-5"
            dataName="day-block"
            x="91.45"
            y="144.08"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
          <rect
            id="day-block-6"
            dataName="day-block"
            x="148.48"
            y="144.08"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#b44cff"
          />
          <rect
            id="day-block-7"
            dataName="day-block"
            x="205.51"
            y="144.08"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
          <rect
            id="day-block-8"
            dataName="day-block"
            x="34.42"
            y="192.57"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
          <rect
            id="day-block-9"
            dataName="day-block"
            x="91.45"
            y="192.57"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
          <rect
            id="day-block-10"
            dataName="day-block"
            x="148.48"
            y="192.57"
            width="39.24"
            height="30.65"
            rx="4.23"
            fill="#d7daff"
          />
        </g>
      </svg>
    )
  }
}

export default ScheduleIcon
