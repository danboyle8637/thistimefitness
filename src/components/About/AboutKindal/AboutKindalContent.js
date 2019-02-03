import React from 'react'
import styled from 'styled-components'

import { SpecialSubhead } from '../../../styles/Headlines'
import { InnerBodyText } from '../../../styles/BodyText'
import { above } from '../../../styles/Theme'

const AboutKindalContent = ({ copy }) => {
  const aboutKindal = copy.edges.find(piece => {
    const id = piece.node.childMarkdownRemark.frontmatter.id
    return id === 'about_kindal_1'
  })

  const body = aboutKindal.node.childMarkdownRemark.html

  return (
    <CopyContainer>
      <SpecialSubhead
        big
        moveMobileX={'20px'}
        moveTabletX={'20px'}
        moveDesktopX={'20px'}
      >
        Hi
      </SpecialSubhead>
      <SpecialSubhead
        med
        mobileLineHeight={'1.3'}
        tabletLineHeight={'1.4'}
        desktopLineHeight={'1.6'}
      >
        I'm Kindal
      </SpecialSubhead>
      <TextWrapper>
        <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
      </TextWrapper>
    </CopyContainer>
  )
}

export default AboutKindalContent

const CopyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  ${above.mobile`
    padding-left: 60px;
  `}
  ${above.tablet`
    padding-left: 100px;
  `}
`

const TextWrapper = styled.div`
  width: 65%;
  margin-top: 30px;
  ${above.mobile`
    width: 50%;
  `}
  ${above.tablet`
    width: 40%;
  `}
`
