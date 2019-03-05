import React, { Component } from 'react'
import styled from 'styled-components'

import ClassKeyDot from '../../svgs/ClassKeyDot'
import { above } from '../../styles/Theme'

class ClassKeyCard extends Component {
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

  setTitle = () => {
    const { classType } = this.props
    let title

    switch (classType) {
      case 'body_burn':
        title = 'Body Burn'
        return title
      case 'yoga':
        title = 'Yoga'
        return title
      case 'running':
        title = 'Need for Speed'
        return title
      default:
        break
    }
  }

  render() {
    const { classType } = this.props

    return (
      <ClassKeyContainer>
        <ClassWrapper>
          <ClassDot
            startColor={this.setStartColor()}
            middleColor={this.setMiddleColor()}
            endColor={this.setEndColor()}
            classType={classType}
          />
          <ClassName>{this.setTitle()}</ClassName>
        </ClassWrapper>
      </ClassKeyContainer>
    )
  }
}

export default ClassKeyCard

const ClassKeyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`

const ClassWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const ClassName = styled.p`
  margin: 0;
  margin-left: 10px;
  padding: 0;
  color: ${props => props.theme.textColor};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`

const ClassDot = styled(ClassKeyDot)`
  width: 20px;
  height: 20px;
`
