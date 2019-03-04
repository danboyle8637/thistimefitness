import React from 'react'
import styled from 'styled-components'

import TransformationCard from './TransformationCard'
import { SectionContainer } from '../../styles/Containers'
import TextHeader from '../Shared/TextHeader'
import TransformationCTA from './TransformationCTA'
import ReviewsLink from '../Reviews/ReviewsLink'
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
        <ReviewsLink />
        <TransformationCTA />
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
