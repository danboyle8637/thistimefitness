import React from 'react'
import styled from 'styled-components'

import { HeadlineContainer } from '../../../styles/Containers'
import { SpecialSubhead, BaseSubhead } from '../../../styles/Headlines'
import { above } from '../../../styles/Theme'

const LetterHeadline = () => {
  return (
    <SpecialHeadline>
      <HeadlineContainer left desktopWidth={'100%'}>
        <BaseSubhead
          moveMobileX={'3px'}
          moveTabletX={'3px'}
          moveDesktopX={'2px'}
        >
          Ready to
        </BaseSubhead>
        <SpecialSubhead
          big
          upper
          mobileLineHeight={'1.3'}
          tabletLineHeight={'1.3'}
          desktopLineHeight={'1.3'}
        >
          Take Back
        </SpecialSubhead>
        <BaseSubhead
          moveMobileX={'3px'}
          moveTabletX={'3px'}
          moveDesktopX={'2px'}
        >
          Control of your body?
        </BaseSubhead>
      </HeadlineContainer>
    </SpecialHeadline>
  )
}

export default LetterHeadline

const SpecialHeadline = styled.div`
  width: 100%;
  padding: 20px;
  ${above.mobile`
    width: 70%;
  `}
  ${above.tablet`
    width: 40%;
  `}
`
