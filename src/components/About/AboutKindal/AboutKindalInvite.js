import React from 'react'
import styled from 'styled-components'

import { above } from '../../../styles/Theme'
import { BaseSubhead, SpecialSubhead } from '../../../styles/Headlines'
import { BodyTextContainer, ButtonContainer } from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import { MainButton } from '../../../styles/Buttons'
import KindalSig from '../../../svgs/KindalSig'

const AboutKindalInvite = ({ copy }) => {
  const partOne = copy.edges.find(el => {
    const id = el.node.childMarkdownRemark.frontmatter.id
    return id === 'about_kindal_2'
  })

  const partTwo = copy.edges.find(el => {
    const id = el.node.childMarkdownRemark.frontmatter.id
    return id === 'about_kindal_3'
  })

  const body1 = partOne.node.childMarkdownRemark.html
  const body2 = partTwo.node.childMarkdownRemark.html

  return (
    <LetterContainer>
      <BaseSubhead
        moveMobileX={'-40px'}
        moveTabletX={'-40px'}
        moveDesktopX={'-40px'}
      >
        If you want to
      </BaseSubhead>
      <SpecialSubhead
        moveMobileX={'30px'}
        moveTabletX={'30px'}
        moveDesktopX={'30px'}
        mobileLineHeight={'1.5'}
        tabletLineHeight={'1.6'}
        desktopLineHeight={'1.7'}
      >
        melt body fat...
      </SpecialSubhead>
      <BodyTextContainer mMarginTop={'0px'} desktopWidth={'40%'}>
        <InnerBodyText
          marginTop={'40px'}
          dangerouslySetInnerHTML={{ __html: body1 }}
        />
      </BodyTextContainer>
      <SpecialSubhead upper big center marginTop={'40px'}>
        Strength
      </SpecialSubhead>
      <BaseSubhead
        center
        mobileLineHeight={'1.5'}
        tabletLineHeight={'1.6'}
        desktopLineHeight={'1.7'}
      >
        Is the answer!
      </BaseSubhead>
      <BodyTextContainer mMarginTop={'0px'} desktopWidth={'40%'}>
        <InnerBodyText
          marginTop={'40px'}
          dangerouslySetInnerHTML={{ __html: body2 }}
        />
        <MovableKindalSig fill="#2AD2E2" />
      </BodyTextContainer>
      <ButtonContainer
        mMarginTop={'40px'}
        tMarginTop={'40px'}
        dMarginTop={'60px'}
      >
        <MainButton purple>See Our Specials</MainButton>
      </ButtonContainer>
    </LetterContainer>
  )
}

export default AboutKindalInvite

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px 20px;
  padding-bottom: 80px;
  ${above.mobile`
    padding-bottom: 120px;
  `}
`

const MovableKindalSig = styled(KindalSig)`
  width: 140px;
  align-self: flex-end;
`
