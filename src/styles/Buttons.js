import styled from 'styled-components'

const FooterButton = styled.a`
  margin: 0;
  margin-top: ${props => props.marginTop};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5afdf2;
  width: 200px;
  height: 48px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #34716d;
  cursor: pointer;
  transition: background-color, color, transform, box-shadow, 150ms ease-out;
  &:hover {
    background-color: #2ad2e2;
    color: #f8f8f8;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.6);
  }
  &:active {
    transform: translateY(1.5px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
`

export { FooterButton }
