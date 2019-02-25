import React, { Component } from 'react'
import styled from 'styled-components'
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
    const { bounds, scheduleOpen } = this.props

    if (scheduleOpen) {
      Draggable.create(this.dragSchedule, {
        type: 'x',
        edgeResistance: 0.75,
        lockAxis: true,
        allowNativeTouchScrolling: false,
        dragResistance: 0.3,
        throwProps: true,
        snap: this.snapX,
        onClick: this.wasClicked,
        zIndexBoost: true,
        autoScroll: 1.5,
        bounds: bounds,
      })
    }
  }

  wasClicked = () => {
    console.log('CLICKED!!!!!!!')
  }

  snapX = value => {
    const { bounds } = this.props
    const snapValue =
      Math.round(value / bounds.offSetWidth) * bounds.offSetWidth
    const activeSlide = snapValue / bounds.offSetWidth
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
