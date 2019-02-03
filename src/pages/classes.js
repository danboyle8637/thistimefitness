import React from 'react'
import { graphql } from 'gatsby'

import HeadlineSection from '../components/Classes/HeadlineSection/HeadlineSection'
import Layout from '../components/layout'

const Classes = ({ data }) => {
  return (
    <Layout>
      <HeadlineSection images={data} />
    </Layout>
  )
}

export default Classes

export const query = graphql`
  query {
    classesMobileBackground: file(
      relativePath: { eq: "class-background-800x1500.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1500
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    classesTabletBackground: file(
      relativePath: { eq: "class-background-834x1112.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 834
          maxHeight: 1112
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
    classesDesktopBackground: file(
      relativePath: { eq: "class-background-1440x1024.jpg" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          maxHeight: 1024
          jpegProgressive: true
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
          aspectRatio
        }
      }
    }
  }
`
