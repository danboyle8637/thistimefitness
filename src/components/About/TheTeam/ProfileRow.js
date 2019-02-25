import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import TeamCard from './TeamCard'
import DraggableRow from '../../Shared/DraggableRow'

const ProfileRow = () => (
  <StaticQuery
    query={graphql`
      query {
        team: allFile(
          filter: {
            sourceInstanceName: { eq: "AboutCopy" }
            name: { regex: "/Team/" }
          }
          sort: { fields: name, order: ASC }
        ) {
          edges {
            node {
              childMarkdownRemark {
                html
                frontmatter {
                  id
                  name
                  certs
                  pic {
                    childImageSharp {
                      fluid(
                        maxWidth: 150
                        maxHeight: 150
                        jpegProgressive: true
                        quality: 90
                      ) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const teamCard = data.team.edges.map(person => {
        const id = person.node.childMarkdownRemark.frontmatter.id
        const pic =
          person.node.childMarkdownRemark.frontmatter.pic.childImageSharp.fluid
        const name = person.node.childMarkdownRemark.frontmatter.name
        const certs = person.node.childMarkdownRemark.frontmatter.certs
        const body = person.node.childMarkdownRemark.html

        return (
          <TeamCard key={id} pic={pic} name={name} certs={certs} body={body} />
        )
      })

      return <DraggableRow>{teamCard}</DraggableRow>
    }}
  />
)

export default ProfileRow
