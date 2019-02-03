import React from 'react'
import styled from 'styled-components'

import { HeadlineContainer, SectionContainer } from '../../../styles/Containers'
import { SpecialSubhead, BaseSubhead } from '../../../styles/Headlines'
import BenefitCopy from './BenefitCopy'

const BenefitSection = ({ copy }) => {
  const benefits = copy.edges.filter(benefit => {
    const id = benefit.node.childMarkdownRemark.frontmatter.id
    return id.substring(7, 14) === 'benefit'
  })

  return (
    <SectionContainer>
      <HeadlineContainer left>
        <BaseSubhead>Here's what you</BaseSubhead>
        <SpecialSubhead big upper mobileLineHeight={'1.4'}>
          get
        </SpecialSubhead>
      </HeadlineContainer>
      <BenefitCopy benefitArray={benefits} />
    </SectionContainer>
  )
}

export default BenefitSection

const BenefitContainer = styled.div`
  width: 100%;
`
