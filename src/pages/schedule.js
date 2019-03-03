import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import { SectionContainer } from '../styles/Containers'
import TextHeader from '../components/Shared/TextHeader'
import ScheduleRow from '../components/Schedule/ScheduleRow'
import ScheduleDots from '../components/Schedule/ScheduleDots'
import ClassKeyCard from '../components/Schedule/ClassKeyCard'
import ScrollIcon from '../svgs/ScrollIcon'
import SEO from '../components/seo'
import { siteConfig } from '../helpers/siteConfig'

class Schedule extends Component {
  state = {
    screenWidth: 0,
  }

  componentDidMount() {
    const screenWidth = window.innerWidth

    this.setState({ screenWidth })
  }

  renderScheduleDots = () => {
    let scheduleDots

    if (this.state.screenWidth <= 1024) {
      scheduleDots = (
        <ScheduleDotsWrapper>
          <ScheduleDots drawerWidth={this.state.screenWidth} />
        </ScheduleDotsWrapper>
      )
    } else {
      scheduleDots = null
    }

    return scheduleDots
  }

  render() {
    return (
      <Layout>
        <SEO
          title={siteConfig.schedule.title}
          description={siteConfig.schedule.description}
          url={siteConfig.schedule.url}
          lang={siteConfig.schedule.lang}
        />
        <TextHeader
          word={'Schedule'}
          tagLine={'Build Your Habit'}
          fontSize={'42px'}
          letterSpacing={'1.4'}
        />
        <SectionContainer
          mobilePadding={'0px 0px 80px 0px'}
          tabletPadding={'20px 0px 120px 0px'}
          desktopPadding={'20px 0px 120px 0px'}
          tabletWidth={'100%'}
          desktopWidth={'100%'}
        >
          {this.renderScheduleDots()}
          <ScrollIconWrapper />
          <ScheduleRow bounds={this.state.screenWidth} />
          <ClassKeyWrapper>
            <ClassKeyCard classType="body_burn" />
            <ClassKeyCard classType="yoga" />
            <ClassKeyCard classType="running" />
          </ClassKeyWrapper>
        </SectionContainer>
      </Layout>
    )
  }
}

export default Schedule

const ScheduleDotsWrapper = styled.div`
  padding: 20px 0%;
  width: 100%;
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
