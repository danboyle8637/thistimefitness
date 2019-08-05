import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const BackgroundImageLoader = () => {
  const [width, setWidth] = useState(null)
  const [height, setHeight] = useState(null)

  useEffect(() => {
    if (typeof window !== undefined) {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      setWidth(screenWidth)
      setHeight(screenHeight)
    }
  }, [])

  return <LoadingBackground width={width} height={height} />
}

export default BackgroundImageLoader

const LoadingBackground = styled.div`
  background: ${props => props.theme.primaryBackground};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`
