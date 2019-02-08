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

const justifyLeft = css`
  justify-content: flex-start;
`

const justifyRight = css`
  justify-content: flex-end;
`

const justifyCenter = css`
  justify-content: center;
`

const marginTop = css`
  margin-top: ${props => props.mMarginTop || '0'};
  ${above.mobile`
    margin-top: ${props => props.tMarginTop || '0'};
  `}
  ${above.tablet`
    margin-top: ${props => props.dMarginTop || '0'};
  `}
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
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
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
  overflow: hidden;
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
  ${({ left, right }) => {
    if (left) return justifyLeft
    if (right) return justifyRight
    return justifyCenter
  }}
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
