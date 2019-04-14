import React from 'react'
import styled from 'styled-components'

import SideClassTimeCard from './SideClassTimeCard'

const SideScheduleCard = ({ day, classTimes, maxWidth }) => {
  const times = classTimes.map(time => {
    const id = time.id
    const classType = time.icon
    const classTime = time.time

    return (
      <SideClassTimeCard key={id} classType={classType} classTime={classTime} />
    )
  })

  return (
    <ScheduleCardContainer width={`${maxWidth}px`}>
      <ScheduleDay>{day}</ScheduleDay>
      <TimeWrapper>{times}</TimeWrapper>
    </ScheduleCardContainer>
  )
}

export default SideScheduleCard

const ScheduleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${props => props.width};
`

const ScheduleDay = styled.h3`
  margin: 0;
  padding: 0;
  align-self: center;
  color: ${props => props.theme.textColor};
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.24em;
`

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
