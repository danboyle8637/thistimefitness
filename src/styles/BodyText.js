import styled, { css } from 'styled-components'
import { above } from '../styles/Theme'

const alignLeft = css`
  align-items: flex-start;
`

const alignCenter = css`
  align-items: center;
`

const alignRight = css`
  align-items: flex-end;
`

const BodyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${props => {
    if (props.left) return alignLeft
    if (props.right) return alignRight
    return alignCenter
  }}
  margin-top: ${props => props.size || '80px'};
  padding: 0 20px;
  width: 100%;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
  `}
`

const BodyText = styled.p`
  margin-top: ${props => props.marginTop || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  padding: ${props => props.padding || '0'};
  font-size: 16px;
  color: #d7daff;
  ${props =>
    props.note &&
    `
    color: #5c5c5c;
  `}
`

export { BodyText, BodyTextContainer }
