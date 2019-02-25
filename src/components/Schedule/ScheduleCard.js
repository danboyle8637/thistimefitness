import React from 'react'
import styled from 'styled-components'

import ClassTimeCard from './ClassTimeCard'

const ScheduleCard = ({ day, classTimes }) => {
  const times = classTimes.map(time => {
    const id = time.id
    const classType = time.icon
    const classTime = time.time

    return (
      <ClassTimeCard key={id} classType={classType} classTime={classTime} />
    )
  })

  return (
    <ScheduleCardContainer>
      <ScheduleDay>{day}</ScheduleDay>
      <TimeWrapper>{times}</TimeWrapper>
    </ScheduleCardContainer>
  )
}

export default ScheduleCard

const ScheduleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 20px 40px;
`

const ScheduleDay = styled.h3`
  margin: 0;
  padding: 0;
  align-self: center;
  color: #b3b6e1;
  font-size: 28px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.24em;
`

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
