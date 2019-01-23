import styled from 'styled-components'
import { above } from './Theme'

const Desktop900 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${above.tablet`
    width: 70%;
  `}
`

export { Desktop900 }
