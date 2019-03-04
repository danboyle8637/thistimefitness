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
    const { bounds } = this.props

    Draggable.create(this.dragSchedule, {
      type: 'x',
      edgeResistance: 0.75,
      lockAxis: true,
      allowNativeTouchScrolling: false,
      dragResistance: 0.2,
      throwProps: true,
      snap: this.snapX,
      zIndexBoost: false,
      dragClickables: true,
      bounds: { left: -10, right: -10, width: `${bounds}` },
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
