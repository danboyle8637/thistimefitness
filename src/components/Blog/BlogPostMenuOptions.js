import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import BlogMenuDot from '../../svgs/BlogMenuDot'
import FaqArrow from '../../svgs/FaqArrow'
import MenuOpenContext from '../../context/MenuOpenContext'

const BlogPostMenuOptions = () => {
  return (
    <MenuOpenContext.Consumer>
      {({ blogMenuOpen }) => {
        const dot = <BlogMenuDotWrapper />

        const menu = (
          <BlogMenuOptionsContainer>
            <BlogMenuButton>
              <BlogMenuButtonArrow strokeWidth={'14px'} />
              Back
            </BlogMenuButton>
          </BlogMenuOptionsContainer>
        )

        return <>{blogMenuOpen ? menu : dot}</>
      }}
    </MenuOpenContext.Consumer>
  )
}

export default BlogPostMenuOptions

const BlogMenuDotWrapper = styled(BlogMenuDot)`
  width: 40px;
  height: 40px;
`

const BlogMenuOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

const BlogShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const BlogMenuButtonArrow = styled(FaqArrow)`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
`

const BlogMenuButton = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  color: ${props => props.theme.textColor};
  text-decoration: none;
  padding: 4px;
  width: 30%;
  border: 1px solid ${props => props.theme.textColor};
  border-radius: 4px;
`
