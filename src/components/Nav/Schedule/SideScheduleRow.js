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
