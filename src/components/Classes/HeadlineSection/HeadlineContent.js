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
      body: `Our main class designed with pure strength training at it's core and laced with heart pumping cardio. Are you ready for Charleston's most effective workout?`,
      path: '/body-burn',
    },
    {
      icon: 'need_for_speed',
      title: 'Running Training',
      body: `Our running class where you will learn to run longer, more efficiently, with less injury, and much faster.`,
      path: '/need-for-speed',
    },
    {
      icon: 'weekend_recovery',
      title: 'Strength, Mobility & Yoga',
      body: `Our special weekend schedule that includes Body Burn Classes and restoritive yoga classes. This is the perfect time to let your body recovery.`,
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
