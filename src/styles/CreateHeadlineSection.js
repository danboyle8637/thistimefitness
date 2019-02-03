import styled from 'styled-components'

const HeadlineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
`

const BackgroundWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`

export { HeadlineGrid, BackgroundWrapper, ContentWrapper }
