import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import { MainButton } from '../../styles/Buttons'
import { SectionContainer, ButtonContainer } from '../../styles/Containers'
import { above } from '../../styles/Theme'

const SpecialCard = ({ images }) => {
  const fourteenDayImage = images.fourteenSpecial.childImageSharp.fluid
  const IgniteImage = images.igniteSpecial.childImageSharp.fluid

  return (
    <SectionContainer desktopWidth={'100%'}>
      <SpecialsGrid>
        <SpecialCardContainer>
          <FeatureImageWrapper fluid={fourteenDayImage} />
          <SpecialContentWrapper>
            <SpecialTitle>14 Days for $14</SpecialTitle>
            <HorizontalLine />
            <SpecialDescription>
              Get unlimited classes for 14 days for only $14. This includes our
              running class and yoga. There's no better way to get to know our
              studio.
            </SpecialDescription>
            <ButtonContainer
              mMarginTop={'20px'}
              tMarginTop={'20px'}
              dMarginTop={'28px'}
              tabletWidth={'100%'}
              desktopWidth={'100%'}
            >
              <MainButton to={'/14-for-14-new-member-special'}>
                Learn More
              </MainButton>
            </ButtonContainer>
          </SpecialContentWrapper>
        </SpecialCardContainer>
        <SpecialCardContainer>
          <FeatureImageWrapper fluid={IgniteImage} />
          <SpecialContentWrapper>
            <SpecialTitle>Ignite</SpecialTitle>
            <HorizontalLine />
            <SpecialDescription>
              Ignite is built for women who are beginners. If you are just
              getting back into exercise, this is a 6 week program you don't
              want to miss.
            </SpecialDescription>
            <ButtonContainer
              mMarginTop={'20px'}
              tMarginTop={'20px'}
              dMarginTop={'28px'}
              tabletWidth={'100%'}
              desktopWidth={'100%'}
            >
              <MainButton to={'/ignite'}>Learn More</MainButton>
            </ButtonContainer>
          </SpecialContentWrapper>
        </SpecialCardContainer>
      </SpecialsGrid>
    </SectionContainer>
  )
}

export default SpecialCard

const SpecialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
    justify-self: center;
    width: 70%;
  `}
`

const SpecialCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${props => props.theme.fillerColor};
  border-radius: 0 0 4px 4px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  &:not(:first-child) {
    margin-top: 76px;
  }
  ${above.tablet`
    &:not(:first-child) {
      margin-top: 0;
    }
  `}
`

const SpecialContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`

const FeatureImageWrapper = styled(Image)`
  padding: 0;
  margin: 0;
  width: 100%;
`

const SpecialTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 800;
  color: #494b64;
  line-height: 1.4em;
`

const HorizontalLine = styled.div`
  margin: 12px 0;
  width: 100%;
  border-top: 1px solid #e1e1e1;
`

const SpecialDescription = styled.p`
  margin: 0;
  padding: 0;
  color: #494b64;
  font-size: 16px;
`
