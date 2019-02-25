import React, { Component } from 'react'
import TweenMax, { Power2 } from 'gsap/TweenMax'

class AnimatedInstagram extends Component {
  constructor(props) {
    super(props)

    this.instagramIcon = null
    this.cameraBody = null
    this.cameraLens = null
    this.cameraFlash = null

    this.setInstagramIcon = element => {
      this.instagramIcon = element
    }

    this.setCameraBody = element => {
      this.cameraBody = element
    }

    this.setCameraLens = element => {
      this.cameraLens = element
    }

    this.setCameraFlash = element => {
      this.cameraFlash = element
    }
  }

  handleMouseEnter = () => {
    TweenMax.to(this.instagramIcon, 0.3, {
      scale: '1.08',
      rotation: '8deg',
      ease: Power2.easeOut,
    })
    TweenMax.to([this.cameraBody, this.cameraLens], 0.3, {
      stroke: '#B44CFF',
    })
    TweenMax.to(this.cameraFlash, 0.3, {
      fill: '#B44CFF',
    })
  }

  handleMouseLeave = () => {
    TweenMax.to(this.instagramIcon, 0.3, {
      scale: '1',
      rotation: '0',
      ease: Power2.easeIn,
    })
    TweenMax.to([this.cameraBody, this.cameraLens], 0.3, {
      stroke: '#5afdf2',
    })
    TweenMax.to(this.cameraFlash, 0.3, {
      fill: '#5afdf2',
    })
  }

  render() {
    const { width, height, className } = this.props

    return (
      <svg
        ref={this.setInstagramIcon}
        id="instagram"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 221.44 221.44"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <path
          ref={this.setCameraBody}
          d="M163.65 215.72H57.79a52.07 52.07 0 0 1-52.07-52.07V57.79A52.07 52.07 0 0 1 57.79 5.72h105.86a52.07 52.07 0 0 1 52.07 52.07v105.86a52.07 52.07 0 0 1-52.07 52.07z"
          fill="none"
          stroke="#5afdf2"
          strokeMiterlimit="10"
          strokeWidth="11.44"
        />
        <circle
          ref={this.setCameraLens}
          id="camera-center"
          cx="111.24"
          cy="111.24"
          r="48.34"
          fill="none"
          stroke="#5afdf2"
          strokeMiterlimit="10"
          strokeWidth="11.44"
        />
        <circle
          ref={this.setCameraFlash}
          id="camera-flash"
          cx="170.75"
          cy="50.16"
          r="14.29"
          fill="#5afdf2"
        />
      </svg>
    )
  }
}

export default AnimatedInstagram
