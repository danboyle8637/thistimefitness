import styled from 'styled-components'

const BodyText = styled.p`
  margin: 0;
  padding: 0;
  margin-top: ${props => props.marginTop || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  padding: ${props => props.padding || '0'};
  font-size: 16px;
  color: ${props => props.theme.textColor};
`

const InnerBodyText = styled.div`
  color: ${props =>
    props.note ? props.theme.blogTextColor : props.theme.textColor};
  & p {
    margin-top: ${props => props.marginTop || '0'};
    margin-left: ${props => props.marginLeft || '0'};
    padding: ${props => props.padding || '0'};
    font-size: 16px;
    color: ${props =>
      props.note ? props.theme.blogTextColor : props.theme.textColor};
  }
  & strong {
    font-weight: 600;
    color: #a1fff9;
  }
  & ol {
    color: ${props => props.theme.secondaryColor};
  }
  & ul {
    color: ${props => props.theme.textColor};
    list-style: none;
    & li {
      position: relative;
      &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${props => props.theme.secondaryColor};
        transform: translate(-180%, 80%);
      }
    }
  }
  & a {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
  }
  & th {
    color: ${props => props.theme.primaryColor};
    padding: 6px 0;
  }
  & td {
    background: #393b4f;
    padding: 6px 0;
    border-radius: 4px;
    border-bottom: none;
    &:last-child {
      padding-left: 10px;
    }
  }
`

export { BodyText, InnerBodyText }
