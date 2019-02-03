import styled from 'styled-components'

const BodyText = styled.p`
  margin: 0;
  padding: 0;
  margin-top: ${props => props.marginTop || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  padding: ${props => props.padding || '0'};
  font-size: 16px;
  color: #d7daff;
`

const InnerBodyText = styled.div`
  & p {
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
  }
  & ol {
    color: #b44cff;
  }
`

export { BodyText, InnerBodyText }
