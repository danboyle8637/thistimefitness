import React from 'react'

import {
  BlogAuthorWrapper,
  BlogAuthorImage,
  BlogAuthorName,
} from '../../styles/BlogStyles'

const BlogByLine = ({ url, name }) => {
  return (
    <BlogAuthorWrapper>
      <BlogAuthorImage src={url} />
      <BlogAuthorName>by {name}</BlogAuthorName>
    </BlogAuthorWrapper>
  )
}

export default BlogByLine
