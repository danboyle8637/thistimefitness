import React from 'react'
import styled from 'styled-components'
import VimeoPlayer from 'react-player/lib/players/Vimeo'

import Headline1 from './Headlines/Headline1'
import { above } from '../../../styles/Theme'

const VideoSection = () => {
  return (
    <VideoContainer>
      <Headline1 />
      <VideoWrapper>
        <VimeoPlayer
          url={'https://vimeo.com/335634671'}
          playsInline={true}
          width={'100%'}
          height={'100%'}
          config={{
            vimeo: {
              preload: true,
              playerOptions: {
                responsive: true,
              },
            },
          }}
        />
      </VideoWrapper>
    </VideoContainer>
  )
}

export default VideoSection

const VideoContainer = styled.div`
  width: 100%;
  ${above.mobile`
    width: 90%;
  `}
  ${above.tablet`
    width: 70%;
  `}
`

const VideoWrapper = styled.div`
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  ${above.tablet`
    margin-top: 40px;
  `}
`
