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
    margin-top: 60px;
    margin-bottom: 30px;
  }
  & .blog-picture-group {
    margin: 0;
    padding: 0;
  }
  & .blog-info-box {
    box-sizing: border-box;
    padding: 20px 20px;
    margin: 0 10px;
    background: #ededed;
    border-radius: 4px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.4);
    border-left: 3px solid ${props => props.theme.secondaryColor};
    & p {
      color: #5c5c5c;
      margin: 0;
      padding: 0;
    }
  }
  & .blog-recipe-directions {
    box-sizing: border-box;
    padding: 20px 20px;
    margin: 0 10px;
    background: #ededed;
    border-radius: 4px;
    border: 1px solid #e1e1e1;
    & ul,
    ol,
    li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    & li {
      position: relative;
      padding: 8px 0 8px 12px;
      border-bottom: 1px dashed #d7d7d7;
      &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.secondaryColor};
        transform: translate(-80%, 134%);
      }
    }
    ${above.mobile`
      width: 60%;
      align-self: center;
    `}
  }

  & img {
    margin: 0;
    margin-bottom: 16px;
    padding: 0;
    width: 100%;
    height: auto;
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
