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
import ScreenWidthContext from '../../../context/ScreenWidthContext'
import { above } from '../../../styles/Theme'

const ClassCard = ({ icon, title, body, path }) => {
  return (
    <ScreenWidthContext.Consumer>
      {({ screenWidth }) => {
        let showScrollIcon

        if (screenWidth >= 1024) {
          showScrollIcon = null
        }

        if (screenWidth < 1024) {
          showScrollIcon = <ScrollIconWrapper />
        }

        return (
          <ClassCardContainer>
            <ClassCardWrapper>
              <HeadlineContainer
                mMarginTop={'20px'}
                tMarginTop={'20px'}
                tabletWidth={'100%'}
                desktopWidth={'100%'}
              >
                {icon}
                <DescriptionText>{title}</DescriptionText>
              </HeadlineContainer>
              {showScrollIcon}
              <div>
                <BodyTextContainer
                  tabletWidth={'100%'}
                  desktopWidth={'100%'}
                  dMarginTop={'80px'}
                >
                  <BodyText>{body}</BodyText>
                </BodyTextContainer>
                <ButtonContainer
                  mMarginTop={'20px'}
                  tMarginTop={'30px'}
                  dMarginTop={'30px'}
                >
                  <MainButton to={path}>Learn More</MainButton>
                </ButtonContainer>
              </div>
            </ClassCardWrapper>
          </ClassCardContainer>
        )
      }}
    </ScreenWidthContext.Consumer>
  )
}

export default ClassCard

const ClassCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  ${above.tablet`
    width: 30%;
  `}
`

const ClassCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  background: transparent;
  ${above.mobile`
    width: 80%;
  `}
`

const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  color: #d7daff;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 4px;
  ${above.mobile`
    letter-spacing: 13px;
  `}
  ${above.tablet`
    letter-spacing: 11px;
  `}
`

const ScrollIconWrapper = styled(ScrollIcon)`
  width: 30px;
  padding: 60px 0;
`