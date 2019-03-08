import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import TweenMax, { Power3 } from 'gsap/TweenMax'

import FaqArrow from '../../svgs/FaqArrow'

class BlogPagination extends Component {
  constructor(props) {
    super(props)

    this.prevArrow = null
    this.nextArrow = null

    this.setPrevArrowRef = element => {
      this.prevArrow = element
    }

    this.setNextArrowRef = element => {
      this.nextArrow = element
    }
  }

  componentDidMount() {
    const { hasNextPage, hasPrevPage } = this.props

    if (hasNextPage) {
      TweenMax.to(this.nextArrow, 1, {
        startAt: { rotation: '-90deg', x: '0' },
        x: '10px',
        ease: Power3.easeInOut,
        display: 'block',
        opacity: 1,
        yoyo: true,
        repeat: -1,
      })
    }

    if (hasPrevPage) {
      TweenMax.to(this.prevArrow, 1, {
        startAt: { rotation: '90deg', x: '0' },
        x: '-10px',
        ease: Power3.easeInOut,
        display: 'block',
        opacity: 1,
        yoyo: true,
        repeat: -1,
      })
    }

    TweenMax.to(this.prevArrow, 1, {
      startAt: { rotation: '90deg', display: 'none', opacity: 0 },
    })
    TweenMax.to(this.nextArrow, 1, {
      startAt: { rotation: '-90deg', display: 'none', opacity: 0 },
    })
  }

  render() {
    const {
      hasNextPage,
      hasPrevPage,
      nextPageLink,
      prevPageLink,
      pageNumber,
    } = this.props

    return (
      <BlogPaginationContainer>
        <BlogPageNavButton to={`${prevPageLink}`} color={hasPrevPage}>
          <ArrowWrapper ref={this.setPrevArrowRef}>
            <FaqArrow width={'16px'} strokeWidth={'14px'} />
          </ArrowWrapper>
          Prev
        </BlogPageNavButton>
        <BlogCurrentPage>{pageNumber}</BlogCurrentPage>
        <BlogPageNavButton to={`${nextPageLink}`} color={hasNextPage}>
          Next
          <ArrowWrapper ref={this.setNextArrowRef}>
            <FaqArrow width={'16px'} strokeWidth={'14px'} />
          </ArrowWrapper>
        </BlogPageNavButton>
      </BlogPaginationContainer>
    )
  }
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
  border: 1px solid
    ${props =>
      props.color ? props.theme.textColor : props.theme.specialBackground};
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: ${props =>
    props.color ? props.theme.textColor : props.theme.specialBackground};
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: ${props => (props.color ? 'pointer' : 'not-allowed')};
  transition: border-color, color, 150ms ease-in-out;
  &:hover {
    border-color: ${props =>
      props.color ? props.theme.primaryColor : props.theme.specialBackground};
    color: ${props =>
      props.color ? props.theme.primaryColor : props.theme.specialBackground};
  }
`

const BlogCurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.textColor};
  border-radius: 4px;
  width: 100%;
  padding: 8px;
  color: ${props => props.theme.textColor};
`

const ArrowWrapper = styled.div`
  margin: 0 8px;
`
