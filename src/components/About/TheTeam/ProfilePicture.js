import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const ProfilePicture = ({ picture }) => {
  return (
    <PictureContainer>
      <PictureWrapper fluid={picture} />
    </PictureContainer>
  )
}

export default ProfilePicture

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const PictureWrapper = styled(Image)`
  border-radius: 50%;
  width: 60px;
`
