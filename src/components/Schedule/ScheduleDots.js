import React, { Component } from 'react'
import styled from 'styled-components'

import ScheduleMonday from '../../svgs/ScheduleMonday'
import ScheduleTuesday from '../../svgs/ScheduleTuesday'
import ScheduleWed from '../../svgs/ScheduleWed'
import ScheduleThursday from '../../svgs/ScheduleThursday'
import ScheduleFriday from '../../svgs/ScheduleFriday'
import ScheduleSaturday from '../../svgs/ScheduleSaturday'
import ScheduleSunday from '../../svgs/ScheduleSunday'
import ActiveSlideContext from '../../context/ActiveSlideContext'
import { above } from '../../styles/Theme'

class ScheduleDots extends Component {
  static contextType = ActiveSlideContext

  render() {
    const { drawerWidth } = this.props
    const { activeSlide } = this.context

    return (
      <DotContainer minWidth={`${drawerWidth}px`}>
        <MondayDot active={activeSlide === 3 ? true : false} />
        <TuesdayDot active={activeSlide === 2 ? true : false} />
        <WednesdayDot active={activeSlide === 1 ? true : false} />
        <ThursdayDot active={activeSlide === 0 ? true : false} />
        <FridayDot active={activeSlide === -1 ? true : false} />
        <SaturdayDot active={activeSlide === -2 ? true : false} />
        <SundayDot active={activeSlide === -3 ? true : false} />
      </DotContainer>
    )
  }
}

export default ScheduleDots

const DotContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 0 14px;
  width: ${props => props.minWidth};
  ${above.mobile`
    padding: 10px 0 30px 0;
  `};
`

const MondayDot = styled(ScheduleMonday)`
  width: 30px;
`
const TuesdayDot = styled(ScheduleTuesday)`
  width: 30px;
`
const WednesdayDot = styled(ScheduleWed)`
  width: 30px;
`
const ThursdayDot = styled(ScheduleThursday)`
  width: 30px;
`
const FridayDot = styled(ScheduleFriday)`
  width: 30px;
`
const SaturdayDot = styled(ScheduleSaturday)`
  width: 30px;
`
const SundayDot = styled(ScheduleSunday)`
  width: 30px;
`
