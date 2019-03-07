import React, { Component } from 'react'
import styled from 'styled-components'
import TweenMax from 'gsap/TweenMax'
import { Draggable } from 'gsap/Draggable'
import ThrowPropsPlugin from '../../greensockplugins/ThrowPropsPlugin'

import { above } from '../../styles/Theme'
import ActiveSlideContext from '../../context/ActiveSlideContext'

class DraggableRow extends Component {
  static contextType = ActiveSlideContext

  constructor(props) {
    super(props)

    const throwPropsPlugin = ThrowPropsPlugin

    this.state = {
      screenWidth: 0,
    }

    this.card = null

    this.setCardRef = element => {
      this.card = element
    }
  }

  componentDidMount() {
    const { page } = this.props
    const screenWidth = window.innerWidth
    this.setState({ screenWidth })

    if (screenWidth < 1024 && page === 'classes') {
      TweenMax.set(this.card, { x: screenWidth })
      this.context.handleChangeActiveSlide(1)
    }

    if (page === 'schedule') {
      TweenMax.set(this.card, { x: screenWidth * 3 })
      this.context.handleChangeActiveSlide(3)
    }

    if (screenWidth <= 1024) {
      Draggable.create(this.card, {
        type: 'x',
        edgeResistance: 0.75,
        lockAxis: true,
        allowNativeTouchScrolling: true,
        dragResistance: 0.2,
        throwProps: true,
        snap: this.snapX,
        zIndexBoost: false,
        bounds: window,
      })
    }

    if (screenWidth > 1024 && page === 'schedule') {
      Draggable.create(this.card, {
        type: 'x',
        edgeResistance: 0.75,
        lockAxis: true,
        allowNativeTouchScrolling: false,
        dragResistance: 0.3,
        throwProps: true,
        zIndexBoost: false,
        bounds: window,
      })
    }
  }

  snapX = value => {
    const snapValue =
      Math.round(value / this.state.screenWidth) * this.state.screenWidth
    const activeSlide = snapValue / this.state.screenWidth
    this.context.handleChangeActiveSlide(activeSlide)
    return snapValue
  }

  render() {
    return (
      <DraggableContainer ref={this.setCardRef}>
        {this.props.children}
      </DraggableContainer>
    )
  }
}

export default DraggableRow

const DraggableContainer = styled.div`
  display: flex;
  ${above.tablet`
    justify-content: center;
    margin-top: 40px;
  `}
`
