import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import TextHeader from '../components/Shared/TextHeader'
import ScheduleRow from '../components/Schedule/ScheduleRow'
import ScheduleDots from '../components/Schedule/ScheduleDots'
import ClassKeyCard from '../components/Schedule/ClassKeyCard'
import ScrollIcon from '../svgs/ScrollIcon'

class Schedule extends Component {
  state = {
    screenWidth: 0,
  }

  componentDidMount() {
    const screenWidth = window.innerWidth

    this.setState({ screenWidth })
  }

  render() {
    return (
      <Layout>
        <TextHeader
          word={'Schedule'}
          tagLine={'Build Your Habit'}
          fontSize={'42px'}
          letterSpacing={'1.4'}
        />
        <ScheduleDotsWrapper>
          <ScheduleDots drawerWidth={this.state.screenWidth} />
        </ScheduleDotsWrapper>
        <ScrollIconWrapper />
        <ScheduleRow bounds={this.state.screenWidth} />
        <ClassKeyWrapper>
          <ClassKeyCard classType="body_burn" />
          <ClassKeyCard classType="yoga" />
          <ClassKeyCard classType="running" />
        </ClassKeyWrapper>
      </Layout>
    )
  }
}

export default Schedule

const ScheduleDotsWrapper = styled.div`
  padding: 20px 0%;
`

const ClassKeyWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding: 30px;
`

const ScrollIconWrapper = styled(ScrollIcon)`
  width: 30px;
  padding: 20px 0;
`
