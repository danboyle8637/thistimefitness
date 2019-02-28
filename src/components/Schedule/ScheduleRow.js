import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ScheduleCard from './ScheduleCard'
import DraggableRow from '../Shared/DraggableRow'

class ScheduleRow extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            gcms {
              schedules {
                id
                classTimes
              }
            }
          }
        `}
        render={data => {
          const scheduleCard = data.gcms.schedules.map(classDay => {
            const id = classDay.id
            const dayName = classDay.classTimes.day
            const classTimes = classDay.classTimes.times

            return (
              <ScheduleCard key={id} day={dayName} classTimes={classTimes} />
            )
          })

          return <DraggableRow page={'schedule'}>{scheduleCard}</DraggableRow>
        }}
      />
    )
  }
}

export default ScheduleRow
