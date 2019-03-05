import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import FaqArrow from '../../svgs/FaqArrow'

const BlogPagination = ({
  hasNextPage,
  hasPrevPage,
  nextPageLink,
  pageNumber,
}) => {
  return (
    <BlogPaginationContainer>
      <BlogPageNavButton>
        <FaqArrow width={'16px'} strokeWidth={'14px'} /> Prev
      </BlogPageNavButton>
      <BlogCurrentPage>{pageNumber}</BlogCurrentPage>
      <BlogPageNavButton>
        Next <FaqArrow width={'16px'} strokeWidth={'14px'} />
      </BlogPageNavButton>
    </BlogPaginationContainer>
  )
}

export default BlogPagination

const BlogPaginationContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 14px;
  justify-items: center;
  align-items: center;
  width: 100%;
`

const BlogPageNavButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
  text-transform: uppercase;
  letter-spacing: 1.8px;
`

const BlogCurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  color: ${props => props.theme.primaryColor};
`
