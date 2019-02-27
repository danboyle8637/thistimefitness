import React from 'react'
import styled from 'styled-components'

import TransformationCard from './TransformationCard'
import ResultsDisclaimer from './ResultsDisclaimer'
import {
  SectionContainer,
  HeadlineContainer,
  BodyTextContainer,
  ButtonContainer,
} from '../../styles/Containers'
import TextHeader from '../Shared/TextHeader'
import { BaseSubhead } from '../../styles/Headlines'
import { BodyText } from '../../styles/BodyText'
import { MainButton } from '../../styles/Buttons'
import { above } from '../../styles/Theme'

const TransformationSection = ({ images }) => {
  const transformations = images.edges.map(image => {
    const id = image.node.id
    const fluid = image.node.childImageSharp.fluid

    return <TransformationCard key={id} image={fluid} />
  })

  return (
    <>
      <TextHeader
        word={'Transformations'}
        tagLine={'Hardwork | Persistance'}
        fontSize={'30px'}
        letterSpacing={'1.8'}
      />
      <SectionContainer desktopWidth={'70%'}>
        <TransformationGrid>{transformations}</TransformationGrid>
        <HeadlineContainer
          mMarginTop={'60px'}
          tMarginTop={'80px'}
          dMarginTop={'100px'}
        >
          <BaseSubhead>Ready for Your Change?</BaseSubhead>
        </HeadlineContainer>
        <BodyTextContainer
          mMarginTop={'14px'}
          tMarginTop={'20px'}
          dMarginTop={'26px'}
        >
          <BodyText>
            You too can accomplish your goals. But you have to start now... stay
            persistant... work hard... and have fun. Let's do this together.
          </BodyText>
          <ButtonContainer
            mMarginTop={'30px'}
            tMarginTop={'40px'}
            dMarginTop={'50px'}
            tabletWidth={'100%'}
            desktopWidth={'100%'}
          >
            <MainButton to={'/specials'}>See Specials</MainButton>
          </ButtonContainer>
        </BodyTextContainer>
        <ResultsDisclaimer />
      </SectionContainer>
    </>
  )
}

export default TransformationSection

const TransformationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  justify-items: center;
  align-items: center;
  width: 100%;
  ${above.tablet`
    grid-template-columns: repeat(4, 1fr);
  `}
`
