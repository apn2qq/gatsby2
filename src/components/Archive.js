import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  a {
    text-decoration: none;
    color: rebeccapurple;
  }
`

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostsArchive {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h2>Archive</h2>
          <ArchiveList>
            {allMarkdownRemark.edges.map(
              ({
                node: {
                  frontmatter: { title, slug },
                },
              }) => (
                <li key={slug}>
                  <Link to={`/posts${slug}`}>{title}</Link>
                </li>
              )
            )}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive
