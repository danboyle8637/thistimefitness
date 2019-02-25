import React, { Component } from 'react'
import styled from 'styled-components'

import DraggableLocationDot from '../../svgs/DraggableLocationDot'
import ActiveSlideContext from '../../context/ActiveSlideContext'
import { above } from '../../styles/Theme'

class DraggableDots extends Component {
  static contextType = ActiveSlideContext

  render() {
    const { activeSlide } = this.context

    return (
      <DotContainer>
        <Dot active={activeSlide === 1 ? true : false} />
        <Dot active={activeSlide === 0 ? true : false} />
        <Dot active={activeSlide === -1 ? true : false} />
      </DotContainer>
    )
  }
}

export default DraggableDots

const DotContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  ${above.mobile`
    padding: 10px 0 30px 0;
  `}
`

const Dot = styled(DraggableLocationDot)`
  width: 12px;
`
