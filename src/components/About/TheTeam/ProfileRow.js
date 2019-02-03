import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import ProfilePicture from './ProfilePicture'

const ProfileRow = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: { sourceInstanceName: { eq: "AboutImages" } }
          sort: { fields: name, order: DESC }
        ) {
          edges {
            node {
              name
              childImageSharp {
                fluid(
                  maxWidth: 150
                  maxHeight: 150
                  jpegProgressive: true
                  quality: 90
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const images = data.allFile.edges
        .filter(image => {
          const name = image.node.name
          return name.includes('team')
        })
        .map((person, index) => {
          return (
            <ProfilePicture
              key={index}
              picture={person.node.childImageSharp.fluid}
            />
          )
        })

      return <ProfileWrapper>{images}</ProfileWrapper>
    }}
  />
)

export default ProfileRow

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
