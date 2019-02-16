import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'gsap/Draggable'
import ThrowPropsPlugin from '../../greensockplugins/ThrowPropsPlugin'

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
    Draggable.create(this.card, {
      type: 'x',
      edgeResistance: 0.75,
      lockAxis: true,
      allowNativeTouchScrolling: false,
      dragResistance: 0.3,
      throwProps: true,
      snap: function(value) {
        return Math.round(value / 380) * 380
      },
      zIndexBoost: false,
      bounds: window,
    })
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
`
