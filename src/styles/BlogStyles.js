import styled from 'styled-components'
import { above } from '../styles/Theme'

const BlogPageContainer = styled.section`
  margin: 100px 0 80px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const BlogFeatureImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 48%;
  `}
`

const BlogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  padding: 0;
  width: 94%;
  background: #f8f8f8;
  border-radius: 4px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 48%;
  `}
`

const BlogPostTitle = styled.h3`
  padding: 20px;
  margin: 0;
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 800;
  color: #494b64;
  line-height: 1.2em;
  ${above.mobile`
    font-size: 40px;
  `}
  ${above.tablet`
    font-size: 44px;
  `}
`

const BlogAuthorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  padding: 0 20px 60px 20px;
  width: 80%;
  ${above.tablet`
    width: 100%;
    justify-content: flex-start;
  `}
`

const BlogAuthorImage = styled.img`
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const BlogAuthorName = styled.p`
  margin: 0;
  padding: 0;
  padding-left: 10px;
  color: #80829f;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.8px;
`

const BlogHTMLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  & p {
    color: #444779;
  }
  & .blog-p-tag {
    padding: 0 20px 0 20px;
  }
  & h1 {
    color: #494b64;
    font-size: 32px;
    padding: 40px 12px 40px 12px;
    margin-bottom: 0%;
    ${above.mobile`
      font-size: 40px;
    `}
    ${above.tablet`
      font-size: 44px;
    `}
  }
  & h2 {
    color: #b44cff;
    font-size: 26px;
    padding: 0 12px 0 12px;
    margin-bottom: 0;
    ${above.mobile`
      font-size: 32px;
    `}
    ${above.tablet`
      font-size: 32px;
    `}
  }
  & .blog-list-subhead {
    padding-top: 60px;
  }
  & .blog-picture-group {
    margin: 0;
    padding: 0;
  }
  & img {
    margin: 0;
    margin-bottom: -8px;
    padding: 0;
  }
  & blockquote {
    position: relative;
    color: #8589ce;
    width: 80%;
    align-self: flex-end;
    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
      background: ${props => props.theme.secondaryColor};
      border-radius: 50px;
      transform: translateX(-16px);
    }
    ${above.mobile`
      width: 86%
    `}
    ${above.tablet`
      width: 86%;
    `}
  }
`

export {
  BlogPageContainer,
  BlogFeatureImageContainer,
  BlogContentWrapper,
  BlogPostTitle,
  BlogAuthorWrapper,
  BlogAuthorImage,
  BlogAuthorName,
  BlogHTMLWrapper,
}
