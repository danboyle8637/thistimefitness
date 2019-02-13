import React, { Component } from 'react'
import styled from 'styled-components'

import ScreenWidthContext from '../../../context/ScreenWidthContext'

class CountdownTimer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  componentDidMount() {
    this.calculateTime()
    this.updateTime()
  }

  calculateTime = () => {
    const endDate = new Date(this.props.date).getTime()

    const startDate = new Date().getTime()

    let timeRemaining = parseInt((endDate - startDate) / 1000)

    if (timeRemaining >= 0) {
      const days = parseInt(timeRemaining / 86400)
      timeRemaining = timeRemaining % 86400

      const hours = parseInt(timeRemaining / 3600)
      timeRemaining = timeRemaining % 3600

      const minutes = parseInt(timeRemaining / 60)
      timeRemaining = timeRemaining % 60

      const seconds = parseInt(timeRemaining)

      this.setState({
        days,
        hours,
        minutes,
        seconds,
      })
    } else {
      timeRemaining = 0
    }
  }

  updateTime = () => {
    setInterval(this.calculateTime, 1000)
  }

  render() {
    return (
      <ScreenWidthContext>
        {({ screenWidth }) => {
          const numWrapperWidth = screenWidth / 4

          return (
            <NumberContainer>
              <NumberWrapper width={`${numWrapperWidth}px`}>
                <Num>{parseInt(this.state.days, 10)}</Num>
                <NumberLabel>Days</NumberLabel>
              </NumberWrapper>
              <NumberWrapper width={`${numWrapperWidth}px`}>
                <Num>{('0' + this.state.hours).slice(-2)}</Num>
                <NumberLabel>Hours</NumberLabel>
              </NumberWrapper>
              <NumberWrapper width={`${numWrapperWidth}px`}>
                <Num>{('0' + this.state.minutes).slice(-2)}</Num>
                <NumberLabel>Minutes</NumberLabel>
              </NumberWrapper>
              <NumberWrapper width={`${numWrapperWidth}px`}>
                <Num>{('0' + this.state.seconds).slice(-2)}</Num>
                <NumberLabel>Seconds</NumberLabel>
              </NumberWrapper>
            </NumberContainer>
          )
        }}
      </ScreenWidthContext>
    )
  }
}

export default CountdownTimer

const NumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 2px;
  background: #393b4f;
  padding: 3px 6px 17px 6px;
  border-radius: 4px;
  width: ${props => props.width};
`

const Num = styled.p`
  margin: -5px;
  padding: 0;
  font-family: Montserrat;
  font-weight: 800;
  font-size: 32px;
  color: #b44cff;
`

const NumberLabel = styled.p`
  margin: -8px;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-size: 12px;
  color: #f8f8f8;
`
