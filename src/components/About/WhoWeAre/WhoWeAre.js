import React, { useState, useEffect, useContext } from 'react'
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
  const width = useContext(ScreenWidthContext)
  const [svgWidth, setSVGWidth] = useState('0px')

  useEffect(() => {
    if (width.screenWidth <= 600) {
      setSVGWidth('300px')
    }

    if (width.screenWidth > 600 && width.screenWidth <= 900) {
      setSVGWidth('460px')
    }

    if (width.screenWidth > 900) {
      setSVGWidth('500px')
    }
  }, [width])

  const whoWeAreCopy = copy.edges.find(copyChunk => {
    const id = copyChunk.node.childMarkdownRemark.frontmatter.id
    if (id !== 'who_we_are') {
      return
    }
    return copyChunk
  })

  const body = whoWeAreCopy.node.childMarkdownRemark.html

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
        <TTFYourTime fill1={'#f8f8f8'} fill2={'#D7DAFF'} width={svgWidth} />
      </YourTimeWrapper>
    </SectionContainer>
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
