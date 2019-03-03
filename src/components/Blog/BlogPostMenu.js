import React, { Component } from 'react'
import styled from 'styled-components'

import BlogMenuPortal from '../Portals/BlogMenuPortal'
import TweenMax, { TimelineLite, Power2 } from 'gsap/TweenMax'
import { Transition } from 'react-transition-group'
import MenuOpenContext from '../../context/MenuOpenContext'
import BlogPostMenuOptions from './BlogPostMenuOptions'

class BlogPostMenu extends Component {
  static contextType = MenuOpenContext

  constructor(props) {
    super(props)

    this.blogMenu = null

    this.setBlogMenuRef = element => {
      this.blogMenu = element
    }

    this.tl = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.tl.add(
      TweenMax.fromTo(
        this.blogMenu,
        0.3,
        {
          padding: '4px',
          right: '88%',
          ease: Power2.easeIn,
        },
        {
          right: `${this.context.rightPosition}`,
          ease: Power2.easeOut,
        }
      )
    )
    this.tl.add(
      TweenMax.to(this.blogMenu, 0.3, {
        bottom: '100px',
        ease: Power2.easeOut,
      })
    )
  }

  handleMenuClick = () => {
    this.context.handleCloseMenu()
    this.context.handleCloseSchedule()
    this.context.handleToggleBlogMenu()
  }

  render() {
    console.log(this.context.blogMenuOpen)

    return (
      <BlogMenuPortal>
        <Transition
          in={this.context.blogMenuOpen}
          timeout={5000}
          addEndListener={() => {
            if (this.context.blogMenuOpen) {
              this.tl.play()
            } else {
              this.tl.reverse()
            }
          }}
        >
          <BlogMenuContainer
            ref={this.setBlogMenuRef}
            onClick={this.handleMenuClick}
          >
            <BlogPostMenuOptions />
          </BlogMenuContainer>
        </Transition>
      </BlogMenuPortal>
    )
  }
}

export default BlogPostMenu

const BlogMenuContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 70%;
  left: 0;
  background: ${props => props.theme.secondaryBackground};
  padding: 4px;
  border-radius: 0 4px 4px 0;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 999;
`
