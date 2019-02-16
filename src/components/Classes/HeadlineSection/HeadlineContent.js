import React from 'react'
import styled from 'styled-components'

import BodyBurnLogo from '../../../svgs/BodyBurnLogo'
import Need4SpeedLogo from '../../../svgs/Need4SpeedLogo'
import WeekendRecoveryLogo from '../../../svgs/WeekendRecoveryLogo'
import DraggableRow from '../../Shared/DraggableRow'

import ClassCard from './ClassCard'

const HeadlineContent = () => {
  const classArray = [
    {
      icon: 'body_burn',
      title: 'Metabolic Strength Training',
      body:
        'Our main program designed to get you in the best shape of your life.',
      path: '/body-burn',
    },
    {
      icon: 'need_for_speed',
      title: 'Running Training',
      body: 'Learn to run efficiently, with less injury, and much faster.',
      path: '/need-for-speed',
    },
    {
      icon: 'weekend_recovery',
      title: 'Strength, Mobility & Yoga',
      body:
        'Special Body Burn classes focused on mobility and some yoga classes too!',
      path: '/weekend-recovery',
    },
  ]

  const classCard = classArray.map(card => {
    const iconObj = {
      body_burn: <BodyBurnLogo />,
      need_for_speed: <Need4SpeedLogo />,
      weekend_recovery: <WeekendRecoveryLogo />,
    }

    const icon = iconObj[card.icon]
    const title = card.title
    const body = card.body
    const path = card.path

    return (
      <ClassCard
        key={title}
        icon={icon}
        title={title}
        body={body}
        path={path}
      />
    )
  })

  return <DraggableRow>{classCard}</DraggableRow>
}

export default HeadlineContent

const ClassWrapper = styled.div`
  display: flex;
`

const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  color: #d7daff;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: ${props => props.spacing};
`

const BodyBurn = styled(BodyBurnLogo)`
  width: 260px;
`

const Need4Speed = styled(Need4SpeedLogo)`
  width: 300px;
`

const WeekendRecovery = styled(WeekendRecoveryLogo)`
  width: 300px;
`
