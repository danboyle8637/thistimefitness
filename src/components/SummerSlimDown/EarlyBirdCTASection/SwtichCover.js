import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const SwitchCover = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "SummerSlimDownImages" }
        name: { eq: "switch-book-cover" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 600, maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  const image = useStaticQuery(query)
  const fluid = image.file.childImageSharp.fluid

  return <Image fluid={fluid} />
}

export default SwitchCover
