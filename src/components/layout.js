import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Archive from './Archive'
import Header from './header'
import './layout.css'

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            desc
          }
          host
        }

        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt(pruneLength: 20)
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          <div>{children}</div>
          <Archive />
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
