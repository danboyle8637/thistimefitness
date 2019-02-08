import React from 'react'
import styled from 'styled-components'

import { above } from '../../../styles/Theme'
import MapSVG from '../../../svgs/MapSVG'
import LocationContent from './LocationContent'

const LocationMap = () => {
  return (
    <SectionContainer>
      <MapGrid>
        <LocationContent />
        <MapWrapper>
          <MapSVG width={'100%'} />
        </MapWrapper>
      </MapGrid>
    </SectionContainer>
  )
}

export default LocationMap

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  background: #26243e;
  width: 100%;
  ${above.tablet`
    padding: 120px 80px;
    background: #2b2947;
  `}
`

const MapGrid = styled.div`
  display: flex;
  flex-direction: column;
  ${above.tablet`
    flex-direction: row;
    width: 86%;
    box-shadow: 2px 6px 20px rgba(0,0,0,0.4);
    border-radius: 4px;
    background: #363358;
  `}
`

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${above.tablet`
    order: 0;
    background: #26243e;
  `}
`
