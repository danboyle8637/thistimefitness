import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {
  BodyTextContainer,
  HeadlineContainer,
} from '../../../styles/Containers'
import { BaseSubhead, MagazineSubhead } from '../../../styles/Headlines'
import { InnerBodyText } from '../../../styles/BodyText'
import { above } from '../../../styles/Theme'

const TeamCard = ({ name, certs, body, pic }) => {
  return (
    <TeamCardContainer>
      <TeamCardWrapper>
        <PictureWrapper
          fluid={pic}
          title={`Picture of ${name}`}
          alt={`Picture of ${name}`}
        />
        <TeamContentWrapper>
          <HeadlineContainer
            left
            mMarginTop={'20px'}
            dMarginTop={'20px'}
            tabletWidth={'100%'}
            desktopWidth={'100%'}
          >
            <BaseSubhead>{name}</BaseSubhead>
            <MagazineSubhead
              marginTop={'20px'}
              mobileFontSize={'13px'}
              tabletFontSize={'15px'}
              desktopFontSize={'15px'}
              mobileLineHeight={'1.5'}
              tabletLineHeight={'1.6'}
              desktopLineHeight={'1.6'}
              thin
            >
              {certs}
            </MagazineSubhead>
          </HeadlineContainer>
          <BodyTextContainer
            mMarginTop={'20px'}
            tMarginTop={'20px'}
            dMarginTop={'20px'}
            tabletWidth={'100%'}
            desktopWidth={'100%'}
          >
            <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
          </BodyTextContainer>
        </TeamContentWrapper>
      </TeamCardWrapper>
    </TeamCardContainer>
  )
}

export default TeamCard

const TeamCardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 30px;
  ${above.tablet`
    width: 30%;
  `}
`

const TeamCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  background: ${props => props.theme.specialBackground};
  padding: 40px 20px 0px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.3);
  ${above.mobile`
    flex-direction: row;
    align-items: flex-start;
    width: 80%;
  `}
  ${above.tablet`
    flex-direction: column;
    align-items: center;
    width: 90%;
  `}
`

const PictureWrapper = styled(Img)`
  border-radius: 50%;
  width: 150px;
  ${above.mobile`
    width: 220px;
  `}
  ${above.tablet`
    width: 140px;
  `}
`

const TeamContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  ${above.mobile`
    margin-left: 30px;
  `}
`
