import styled from 'styled-components'

const BlogPageContainer = styled.section`
  margin: 100px 0 80px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const BlogFeatureImageContainer = styled.div`
  width: 100%;
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
`

const BlogPostTitle = styled.h3`
  padding: 20px;
  margin: 0;
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 800;
  color: #494b64;
  line-height: 1.2em;
`

const BlogAuthorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  padding: 0 20px 0 20px;
  width: 80%;
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
  margin: 0;
  & p {
    color: #444779;
  }
  & .blog-p-tag {
    padding: 20px;
  }
  & h1 {
    color: #494b64;
    font-size: 32px;
  }
  & h2 {
    color: #3940a1;
    font-size: 26px;
  }
  & img {
    margin: 0;
    margin-bottom: -8px;
    padding: 0;
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
