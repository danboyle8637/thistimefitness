import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import {
  BodyTextContainer,
  HeadlineContainer,
} from '../../../styles/Containers'
import { BaseSubhead, MagazineSubhead } from '../../../styles/Headlines'
import { InnerBodyText } from '../../../styles/BodyText'

const TeamCard = ({ name, certs, body, pic }) => {
  return (
    <TeamCardContainer>
      <TeamCardWrapper>
        <PictureWrapper fluid={pic} />
        <TeamContentWrapper>
          <HeadlineContainer mMarginTop={'20px'}>
            <BaseSubhead color={'#B44CFF'} marginTop={'20px'}>
              {name}
            </BaseSubhead>
            <MagazineSubhead
              marginTop={'20px'}
              mobileFontSize={'13px'}
              tabletFontSize={'15px'}
              mobileLineHeight={'1.5'}
              tabletLineHeight={'1.6'}
              thin
            >
              {certs}
            </MagazineSubhead>
          </HeadlineContainer>
          <BodyTextContainer mMarginTop={'20px'}>
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
`

const TeamCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  background: #363358;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.3);
`

const PictureWrapper = styled(Img)`
  border-radius: 50%;
  width: 150px;
`

const TeamContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
