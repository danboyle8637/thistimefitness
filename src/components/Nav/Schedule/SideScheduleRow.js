import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SideScheduleCard from './SideScheduleCard'
import DraggableSchedule from '../../Schedule/DraggableSchedule'

class SideScheduleRow extends Component {
  render() {
    const { maxWidth } = this.props
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
              <SideScheduleCard
                key={id}
                day={dayName}
                classTimes={classTimes}
                maxWidth={maxWidth}
              />
            )
          })

          return (
            <DraggableSchedule
              scheduleOpen={this.props.scheduleOpen}
              bounds={maxWidth}
            >
              {scheduleCard}
            </DraggableSchedule>
          )
        }}
      />
    )
  }
}

export default SideScheduleRow
