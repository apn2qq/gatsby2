import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const Article = styled.article``

const Listing = () => (
  <StaticQuery
    query={graphql`
      query ListingQuery {
        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                slug
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              frontmatter: { slug, title, date },
              excerpt,
            },
          }) => (
            <Article key={slug}>
              <Link to={`/posts${slug}`}>
                <h1>{title}</h1>
              </Link>
              <p>{date}</p>
              <p>{excerpt}</p>
              <Link to={`/posts${slug}`}>Read more</Link>
            </Article>
          )
        )}
      </div>
    )}
  />
)

export default Listing
