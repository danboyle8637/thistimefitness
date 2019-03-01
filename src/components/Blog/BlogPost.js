import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../layout'
import { SectionContainer } from '../../styles/Containers'
import './blog-post.css'

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <SectionContainer>
        <div>Blog Post</div>
      </SectionContainer>
    </Layout>
  )
}

export default BlogPost

// export const query = graphql`
//   query {
//     gcms {
//       blogPosts {
//         id
//         slug
//         title
//         postTags
//         author {
//           name
//           avatar {
//             url
//           }
//         }
//         featureImage {
//           url
//         }
//         blogText {
//           html
//         }
//       }
//     }
//   }
// `
