import React, { Component } from 'react'
import styled from 'styled-components'

import ClassKeyDot from '../../../svgs/ClassKeyDot'
import { above } from '../../../styles/Theme'

class SideClassTimeCard extends Component {
  setStartColor = () => {
    const { classType } = this.props

    switch (classType) {
      case 'body_burn':
        return '#8991ff'
      case 'yoga':
        return '#dc45c7'
      case 'running':
        return '#5afdf2'
      default:
        break
    }
  }

  setMiddleColor = () => {
    const { classType } = this.props

    switch (classType) {
      case 'body_burn':
        return '#757ef4'
      case 'yoga':
        return '#ce48db'
      case 'running':
        return '#47e9e4'
      default:
        break
    }
  }

  setEndColor = () => {
    const { classType } = this.props

    switch (classType) {
      case 'body_burn':
        return '#4852dc'
      case 'yoga':
        return '#b44cff'
      case 'running':
        return '#09A9B7'
      default:
        break
    }
  }

  render() {
    const { classTime, classType } = this.props

    return (
      <ClassTimeContainer>
        <ClassDot
          startColor={this.setStartColor()}
          middleColor={this.setMiddleColor()}
          endColor={this.setEndColor()}
          classType={classType}
        />
        <ClassTime>{classTime}</ClassTime>
      </ClassTimeContainer>
    )
  }
}

export default SideClassTimeCard

const ClassTimeContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${above.tablet`
    margin-top: 20px;
  `}
`

const ClassTime = styled.div`
  margin: 0;
  margin-left: 8px;
  padding: 0;
  color: #b3b6e1;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  ${above.tablet`
    font-size: 16px;
  `}
`

const ClassDot = styled(ClassKeyDot)`
  width: 30px;
  height: 30px;
  ${above.tablet`
    width: 20px;
    height: 20px;
  `}
`
