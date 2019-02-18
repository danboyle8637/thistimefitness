import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'gsap/Draggable'
import ThrowPropsPlugin from '../../greensockplugins/ThrowPropsPlugin'

import { above } from '../../styles/Theme'

class DraggableRow extends Component {
  constructor(props) {
    super(props)

    const throwPropsPlugin = ThrowPropsPlugin

    this.card = null

    this.setCardRef = element => {
      this.card = element
    }
  }

  componentDidMount() {
    const screenWidth = window.innerWidth

    if (screenWidth <= 1024) {
      Draggable.create(this.card, {
        type: 'x',
        edgeResistance: 0.75,
        lockAxis: true,
        allowNativeTouchScrolling: false,
        dragResistance: 0.3,
        throwProps: true,
        snap: function(value) {
          return Math.round(value / screenWidth) * screenWidth
        },
        zIndexBoost: false,
        bounds: window,
      })
    }
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
