import React, { Component } from 'react'
import styled from 'styled-components'
import TweenMax from 'gsap/TweenMax'
import { Draggable } from 'gsap/Draggable'
import ThrowPropsPlugin from '../../greensockplugins/ThrowPropsPlugin'

import ActiveSlideContext from '../../context/ActiveSlideContext'

class DraggableSchedule extends Component {
  static contextType = ActiveSlideContext

  constructor(props) {
    super(props)

    const throwPropsPlugin = ThrowPropsPlugin

    this.dragSchedule = null

    this.setDragScheduleRef = element => {
      this.dragSchedule = element
    }
  }

  componentDidMount() {
    const { bounds } = this.props

    const today = new Date().getDay()
    const daysOfWeek = [-3, 2, 0, -2, -4, -6, -8]
    const activeDay = today + daysOfWeek[today]

    TweenMax.set(this.dragSchedule, { x: bounds * activeDay })
    this.context.handleChangeActiveSlide(activeDay)

    Draggable.create(this.dragSchedule, {
      type: 'x',
      edgeResistance: 0.75,
      lockAxis: true,
      allowNativeTouchScrolling: false,
      dragResistance: 0.2,
      throwProps: true,
      snap: this.snapX,
      zIndexBoost: true,
      dragClickables: true,
      bounds: bounds,
    })
  }

  snapX = value => {
    const { bounds } = this.props
    const snapValue = Math.round(value / bounds) * bounds
    const activeSlide = snapValue / bounds
    this.context.handleChangeActiveSlide(activeSlide)
    return snapValue
  }

  render() {
    return (
      <DraggableContainer ref={this.setDragScheduleRef}>
        {this.props.children}
      </DraggableContainer>
    )
  }
}

export default DraggableSchedule

const DraggableContainer = styled.div`
  display: flex;
`
