import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'gsap/Draggable'

class DraggableRow extends Component {
  constructor(props) {
    super(props)

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
      allowNativeTouchScrolling: true,
      dragResistance: 0,
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
