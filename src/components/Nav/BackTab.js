import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import TweenMax, { Power2 } from 'gsap/TweenMax'

import FaqArrow from '../../svgs/FaqArrow'
import { BodyText } from '../../styles/BodyText'

class BackTab extends Component {
  constructor(props) {
    super(props)

    this.backTab = null

    this.setBackTabRef = element => {
      this.backTab = element
    }
  }

  componentDidMount() {
    TweenMax.from(this.backTab, 0.8, {
      x: '-100%',
      ease: Power2.easeOut,
      delay: 1,
    })
  }

  render() {
    return (
      <BackTabContainer ref={this.setBackTabRef}>
        <BackLink to={'/classes'}>
          <BackArrow width={'12px'} strokeWidth={'16px'} />
          <BodyText marginLeft={'8px'}>Back</BodyText>
        </BackLink>
      </BackTabContainer>
    )
  }
}

export default BackTab

const BackTabContainer = styled.div`
  position: fixed;
  left: 0;
  top: 60px;
  background: #545885;
  border-radius: 0 4px 4px 0;
  padding: 0 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 20;
`

const BackLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  z-index: 23;
`

const BackArrow = styled(FaqArrow)`
  transform: rotate(90deg);
`
