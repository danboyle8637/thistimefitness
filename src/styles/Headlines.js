import styled, { css } from 'styled-components'
import { above } from './Theme'

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

const moveHeadline = (x, y) => `translate(${x}, ${y})`

const sharedSetup = css`
  margin: 0;
  margin-top: ${props => props.marginTop || '0px'};
  padding: 0;
  color: ${props => props.color || '#2AD2E2'};
  font-weight: ${props => (props.thin ? 400 : 800)};
  letter-spacing: ${props => props.letterSpacing || 0};
  text-align: ${props => props.center && 'center'};
  text-transform: ${props => props.upper && 'uppercase'};
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

// *********** Magazine Style Main Headlines *********** //

// *********** What is Customizable? *********** //

// ***** Line Height, Translate ***** //

const MagazineH1 = styled.h1`
  font-size: 60px;
  ${mobileSetup};
  ${above.mobile`
    font-size: 150px;
    ${tabletSetup}
  `}
  ${above.tablet`
    font-size: 150px;
    ${desktopSetup}
  `}
`

const MagazineH1Filler = styled.h5`
  font-size: ${props => props.fontSize || '24px'};
  ${mobileSetup};
  ${above.mobile`
    font-size: 60px;
    ${tabletSetup}
  `}
  ${above.tablet`
    font-size: 60px;
    ${desktopSetup}
  `}
`

const MagazineSubhead = styled.h3`
  font-size: ${props => props.mobileFontSize || '20px'};
  ${mobileSetup};
  color: #f8f8f8;
  ${above.mobile`
    font-size: ${props => props.tabletFontSize || '26px'};
    ${tabletSetup}
    color: #f8f8f8;
  `}
  ${above.tablet`
    font-size: 26px;
    ${desktopSetup}
    color: #f8f8f8;
  `}
`

// *********** Inner Page Level Sub-Headlines *********** //

const BaseSubhead = styled.h3`
  font-size: 26px;
  ${mobileSetup};
  ${above.mobile`
    ${tabletSetup}
  `}
  ${above.tablet`
    ${desktopSetup}
  `}
`

const SpecialSubhead = styled.h3`
  font-size: ${props => (props.big ? '50px' : '35px')};
  ${mobileSetup};
  ${above.mobile`
    font-size: ${props => (props.big ? '60px' : props.med ? '55px' : '35px')};
    ${tabletSetup}
  `}
  ${above.tablet`
    font-size: ${props => (props.big ? '60px' : props.med ? '55px' : '35px')};
    ${desktopSetup}
  `}
`

const StatsHeadline = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #b44cff;
  margin-top: ${props => props.marginTop || 0};
`

const Price = styled.h4`
  font-size: 40px;
  ${mobileSetup};
  ${above.mobile`
    ${tabletSetup}
  `}
  ${above.tablet`
    ${desktopSetup}
  `}
`

export {
  MagazineH1,
  MagazineH1Filler,
  MagazineSubhead,
  BaseSubhead,
  SpecialSubhead,
  StatsHeadline,
  Price,
}
