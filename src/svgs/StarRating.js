import React, { Component } from 'react'
import TweenMax, { Power1 } from 'gsap/TweenMax'

class StarRating extends Component {
  constructor(props) {
    super(props)

    this.star1Bg = null
    this.star2Bg = null
    this.star3Bg = null
    this.star4Bg = null
    this.star5Bg = null

    this.setStar1BgRef = element => {
      this.star1Bg = element
    }
    this.setStar2BgRef = element => {
      this.star2Bg = element
    }
    this.setStar3BgRef = element => {
      this.star3Bg = element
    }
    this.setStar4BgRef = element => {
      this.star4Bg = element
    }
    this.setStar5BgRef = element => {
      this.star5Bg = element
    }
  }

  componentDidMount() {
    TweenMax.to(
      [this.star1Bg, this.star2Bg, this.star3Bg, this.star4Bg, this.star5Bg],
      1,
      {
        transformOrigin: '50% 50%',
        scale: 1.2,
        ease: Power1.easeInOut,
        yoyo: true,
        repeat: -1,
        opacity: '0.4',
      }
    )
  }

  render() {
    const { width, height, className } = this.props

    return (
      <svg
        id="star-rating"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox="0 0 196.27 34.86"
      >
        <title>Review Star Rating</title>
        <path
          ref={this.setStar1BgRef}
          fill="#dc45c7"
          d="M18.33 0l5.66 11.48 12.67 1.84-9.17 8.93 2.17 12.61-11.33-5.95L7 34.86l2.16-12.61L0 13.32l12.66-1.84L18.33 0z"
          id="star-1-bg"
        />
        <path
          fill="#b44cff"
          d="M18.33 0l5.66 11.48 12.67 1.84-9.17 8.93 2.17 12.61-11.33-5.95L7 34.86l2.16-12.61L0 13.32l12.66-1.84L18.33 0z"
          id="star-1"
        />
        <path
          ref={this.setStar2BgRef}
          fill="#dc45c7"
          d="M58.23 0l5.66 11.48 12.67 1.84-9.17 8.93 2.17 12.61-11.33-5.95-11.33 5.95 2.17-12.61-9.17-8.93 12.67-1.84L58.23 0z"
          id="star-2-bg"
        />
        <path
          fill="#b44cff"
          d="M58.23 0l5.66 11.48 12.67 1.84-9.17 8.93 2.17 12.61-11.33-5.95-11.33 5.95 2.17-12.61-9.17-8.93 12.67-1.84L58.23 0z"
          id="star-2"
        />
        <path
          ref={this.setStar3BgRef}
          fill="#dc45c7"
          d="M98.13 0l5.67 11.48 12.66 1.84-9.16 8.93 2.16 12.61-11.33-5.95-11.32 5.95 2.16-12.61-9.16-8.93 12.66-1.84L98.13 0z"
          id="star-3-bg"
        />
        <path
          fill="#b44cff"
          d="M98.13 0l5.67 11.48 12.66 1.84-9.16 8.93 2.16 12.61-11.33-5.95-11.32 5.95 2.16-12.61-9.16-8.93 12.66-1.84L98.13 0z"
          id="star-3"
        />
        <path
          ref={this.setStar4BgRef}
          fill="#dc45c7"
          d="M138.03 0l5.67 11.48 12.66 1.84-9.16 8.93 2.16 12.61-11.33-5.95-11.32 5.95 2.16-12.61-9.16-8.93 12.66-1.84L138.03 0z"
          id="star-4-bg"
        />
        <path
          fill="#b44cff"
          d="M138.03 0l5.67 11.48 12.66 1.84-9.16 8.93 2.16 12.61-11.33-5.95-11.32 5.95 2.16-12.61-9.16-8.93 12.66-1.84L138.03 0z"
          id="star-4"
        />
        <path
          ref={this.setStar5BgRef}
          fill="#dc45c7"
          d="M177.94 0l5.66 11.48 12.67 1.84-9.17 8.93 2.16 12.61-11.32-5.95-11.33 5.95 2.16-12.61-9.16-8.93 12.66-1.84L177.94 0z"
          id="star-5-bg"
        />
        <path
          fill="#b44cff"
          d="M177.94 0l5.66 11.48 12.67 1.84-9.17 8.93 2.16 12.61-11.32-5.95-11.33 5.95 2.16-12.61-9.16-8.93 12.66-1.84L177.94 0z"
          id="star-5"
        />
      </svg>
    )
  }
}

export default StarRating
