import React from 'react'
import { graphql } from 'gatsby'

import BlogPost from '../components/Blog/BlogPost'
import BlogPostCard from '../components/Blog/BlogPost'

const Blog = ({ data }) => {
  console.log(data)

  return <BlogPost data={data} />
}

export default Blog

export const query = graphql`
  query {
    allBlogPost {
      edges {
        node {
          title
          author {
            name
          }
          slug
          published(formatString: "MMMM DD, YYYY")
          blogContent
          imagePicker {
            url
          }
        }
      }
    }
  }
`
