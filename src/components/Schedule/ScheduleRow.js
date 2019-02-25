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
            allSchedule {
              edges {
                node {
                  id
                  classTimes {
                    day
                    times {
                      id
                      icon
                      time
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const scheduleCard = data.allSchedule.edges.map(classDay => {
            const id = classDay.node.id
            const dayName = classDay.node.classTimes.day
            const classTimes = classDay.node.classTimes.times

            return (
              <ScheduleCard key={id} day={dayName} classTimes={classTimes} />
            )
          })

          return <DraggableRow>{scheduleCard}</DraggableRow>
        }}
      />
    )
  }
}

export default ScheduleRow
