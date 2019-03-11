import React, { Component } from 'react'

class MobilePhone extends Component {
  render() {
    const { width, height, className } = this.props

    return (
      <svg
        id="phone"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 88.05 178.05"
      >
        <rect
          id="phone-2"
          data-name="phone"
          x="1.03"
          y="1.03"
          width="86"
          height="176"
          rx="11.79"
          fill="none"
          stroke="#f8f8f8"
          strokeMiterlimit="10"
          strokeWidth="2.05"
        />
        <rect
          id="screen"
          x="5.03"
          y="19.03"
          width="78"
          height="141"
          rx="2.07"
          fill="none"
          stroke="#f8f8f8"
          strokeMiterlimit="10"
          strokeWidth="2.38"
        />
        <rect
          id="home-button"
          x="34.28"
          y="165.03"
          width="19.5"
          height="7.5"
          rx="3.75"
          fill="none"
          stroke="#f8f8f8"
          strokeMiterlimit="10"
          strokeWidth="2.85"
        />
        <circle id="camera" cx="64.36" cy="8.05" r="3" fill="#f8f8f8" />
        <rect
          id="ear-phone"
          x="34.73"
          y="6.52"
          width="18.6"
          height="3.06"
          rx="1.53"
          fill="#f8f8f8"
        />
        <circle id="sensor1" cx="27.1" cy="8.04" r="1.53" fill="#f8f8f8" />
        <circle id="sensor2" cx="31.07" cy="8.05" r="1.53" fill="#f8f8f8" />
      </svg>
    )
  }
}

export default MobilePhone
