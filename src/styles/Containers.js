import styled, { css } from 'styled-components'
import { above } from './Theme'

// ********** Alignment Helpers ********** //

const alignLeft = css`
  align-items: flex-start;
`

const alignCenter = css`
  align-items: center;
`

const alignRight = css`
  align-items: flex-end;
`

const marginTop = css`
  margin-top: ${({ mobile, tablet, desktop }) => {
    if (mobile) return mobile
    if (tablet) return tablet
    if (desktop) return desktop
    return '0px'
  }};
`

const sectionPadding = css`
  padding: 80px 20px;
  ${above.mobile`
    padding: 120px 20px;
  `}
  ${above.tablet`
    padding: 120px 20px;
  `}
`

const containerWidth = css`
  width: 100%;
  ${above.mobile`
    width: 70%;
  `}
  ${above.tablet`
    width: 50%;
  `}
`

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${containerWidth}
  ${sectionPadding}
  background: ${props => props.color || 'transparent'};
`

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ left, right }) => {
    if (left) return alignLeft
    if (right) return alignRight
    return alignCenter
  }}
  ${containerWidth}
  ${marginTop}
`

const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ center }) => {
    if (center) return alignCenter
    return alignLeft
  }}
  ${marginTop}
  ${containerWidth}
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ center }) => {
    if (center) return alignCenter
    return alignLeft
  }}
  ${marginTop}
  ${containerWidth}
`

const ListGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${marginTop}
  ${containerWidth}
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${marginTop}
`

const BenefitCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  grid-gap: 20px;
  padding: 0 20px;
  ${marginTop}
  ${containerWidth}
  ${above.tablet`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 400px));
    grid-template-rows: 1fr;
  `}
`

export {
  SectionContainer,
  HeadlineContainer,
  BodyTextContainer,
  ListContainer,
  ButtonContainer,
  BenefitCardsContainer,
  ListGridContainer,
}
