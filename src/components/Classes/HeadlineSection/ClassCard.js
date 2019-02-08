import React from 'react'
import styled from 'styled-components'

import {
  BodyTextContainer,
  HeadlineContainer,
  ButtonContainer,
} from '../../../styles/Containers'
import { BodyText } from '../../../styles/BodyText'
import { MainButton } from '../../../styles/Buttons'
import ScrollIcon from '../../../svgs/ScrollIcon'

const ClassCard = ({ icon, title, body, path }) => {
  return (
    <ClassCardContainer>
      <ClassCardWrapper>
        <HeadlineContainer mMarginTop={'20px'}>
          {icon}
          <DescriptionText spacing={'1.8px'}>{title}</DescriptionText>
        </HeadlineContainer>
        <ScrollIconWrapper />
        <div>
          <BodyTextContainer mMarginTop={'80px'}>
            <BodyText>{body}</BodyText>
          </BodyTextContainer>
          <ButtonContainer mMarginTop={'20px'}>
            <MainButton to={path}>Learn More</MainButton>
          </ButtonContainer>
        </div>
      </ClassCardWrapper>
    </ClassCardContainer>
  )
}

export default ClassCard

const ClassCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`

const ClassCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  background: transparent;
`

const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  color: #d7daff;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: ${props => props.spacing};
`

const ScrollIconWrapper = styled(ScrollIcon)`
  width: 30px;
`
