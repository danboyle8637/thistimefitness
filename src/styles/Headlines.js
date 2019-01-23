import styled, { css } from 'styled-components'
import { tealTheme, purpleTheme, above } from './Theme'

// Mobile Headline Sizes and Uses
// 60px - Big, main headline words
// 55px - Big subheadline words
// 46px - Big subheadline words
// 35px - Smaller subheadline words
// 26px - Base subheadline words
// 24px - Small, accent words in main headlines

// Desktop Headlines
// 150px - Big main headline words
// 75px - Big subhead
// 55px - Emphasis subhead
// 35px - Base subhead words and accent words in main headlines

const alignLeft = css`
  align-items: flex-start;
`

const alignCenter = css`
  align-items: center;
`

const alignRight = css`
  align-items: flex-end;
`

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${props => {
    if (props.left) return alignLeft
    if (props.right) return alignRight
    return alignCenter
  }}
  margin-top: ${props => props.marginTop || '80px'};
  padding: 0 20px;
  width: 100%;
  ${above.mobile`
    width: 60%;
  `}
`

const moveHeadline = (x, y) => `translate(${x}, ${y})`

const sharedSetup = css`
  margin: 0;
  padding: 0;
  color: ${tealTheme.primaryColor};
  font-weight: 800;
`

const mobileSetup = css`
  ${sharedSetup}
line-height: ${props => props.mobileLineHeight || 0.95};
  transform: ${props =>
    moveHeadline(props.moveMobileX || '0', props.moveMobileY || '0')};
`

const tabletSetup = css`
  ${sharedSetup}
  line-height: ${props => props.tabletLineHeight || 0.85};
  transform: ${props =>
    moveHeadline(props.moveTabletX || '0', props.moveTabletY || '0')};
`

const desktopSetup = css`
  ${sharedSetup}
  line-height: ${props => props.desktopLineHeight || 0.85};
  transform: ${props =>
    moveHeadline(props.moveDesktopX || '0', props.moveDesktopY || '0')};
`

// ********************** Headline Setup ********************** //

const Heading1 = styled.h1`
  font-size: 60px;
  ${mobileSetup};
  ${above.mobile`
    font-size: 150px;
    ${tabletSetup}
  `}
  ${above.tablet`
    ${desktopSetup}
  `}
`

const Heading2Big = styled.h2`
  font-size: 55px;
  ${mobileSetup}
  ${above.mobile`
    font-size: 75px;
    ${tabletSetup}
  `}
  ${above.tablet`
    ${desktopSetup}
  `}
`

const Heading2Small = styled.h2`
  font-size: 46px;
  ${mobileSetup}
  ${above.mobile`
    font-size: 55px;
    ${tabletSetup}
  `}
  ${above.tablet`
    ${desktopSetup}
  `}
`

const Heading3 = styled.h3`
  font-size: 26px;
  ${mobileSetup}
  ${above.mobile`
    font-size: 35px;
    ${tabletSetup}
  `}
  ${above.tablet`
    ${desktopSetup}
  `}
`

const Heading4 = styled.h4`
  font-size: 24px;

  ${mobileSetup}
  ${above.mobile`
    font-size: 60px;
    ${tabletSetup}
  `}
  ${above.tablet`
    ${desktopSetup}
  `}
`

export {
  HeadlineContainer,
  Heading1,
  Heading2Big,
  Heading2Small,
  Heading3,
  Heading4,
}
