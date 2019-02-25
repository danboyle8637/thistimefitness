import React from 'react'
import styled from 'styled-components'

import { SpecialSubhead, MagazineSubhead } from '../../../styles/Headlines'
import {
  BodyTextContainer,
  HeadlineContainer,
  SectionContainer,
} from '../../../styles/Containers'
import { InnerBodyText } from '../../../styles/BodyText'
import { above } from '../../../styles/Theme'
import TTFYourTime from '../../../svgs/TTFYouTime'
import ScreenWidthContext from '../../../context/ScreenWidthContext'

const WhoWeAre = ({ copy }) => {
  const whoWeAreCopy = copy.edges.find(copyChunk => {
    const id = copyChunk.node.childMarkdownRemark.frontmatter.id
    if (id !== 'who_we_are') {
      return
    }
    return copyChunk
  })

  const body = whoWeAreCopy.node.childMarkdownRemark.html

  return (
    <ScreenWidthContext.Consumer>
      {({ screenWidth }) => {
        let svgWidth

        if (screenWidth <= 600) {
          svgWidth = '300px'
        }

        if (screenWidth > 600 && screenWidth <= 900) {
          svgWidth = '460px'
        }

        if (screenWidth > 900) {
          svgWidth = '500px'
        }

        return (
          <SectionContainer>
            <BodyTextContainer>
              <InnerBodyText dangerouslySetInnerHTML={{ __html: body }} />
            </BodyTextContainer>
            <HeadlineContainer
              mMarginTop={'14px'}
              tMarginTop={'28px'}
              dMarginTop={'30px'}
              right
            >
              <SpecialSubhead big upper>
                Strong
              </SpecialSubhead>
              <SpecialSubhead
                big
                upper
                secondary
                mobileLineHeight={'1.2'}
                tabletLineHeight={'1.2'}
                desktopLineHeight={'1.2'}
              >
                Lean
              </SpecialSubhead>
              <MagazineSubhead
                thin
                upper
                moveMobileX={'-92px'}
                moveTabletX={'-104px'}
                moveDesktopX={'-106px'}
              >
                And
              </MagazineSubhead>
              <SpecialSubhead
                big
                upper
                secondary
                mobileLineHeight={'1.2'}
                tabletLineHeight={'1.2'}
                desktopLineHeight={'1.2'}
              >
                In Control
              </SpecialSubhead>
            </HeadlineContainer>
            <YourTimeWrapper>
              <TTFYourTime
                fill1={'#f8f8f8'}
                fill2={'#D7DAFF'}
                width={svgWidth}
              />
            </YourTimeWrapper>
          </SectionContainer>
        )
      }}
    </ScreenWidthContext.Consumer>
  )
}

export default WhoWeAre

const YourTimeWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  width: 100%;
  ${above.mobile`
    margin-top: 80px;
  `}
  ${above.tablet`
    margin-top: 120px;
  `}
`
