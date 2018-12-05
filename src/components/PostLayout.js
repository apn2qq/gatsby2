import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

// StaticQuery
// Used anyware, doesn't accept vars, can't use context

// Page Query
// Must be used on pages

class PostLayout extends Component {
  render() {
    return (
      <Layout>
        <h1>Privet</h1>
      </Layout>
    )
  }
}

export default PostLayout

export const query = graphql`
  query PostLayout {
    markdownRemark(frontmatter: { slug: { eq: "/second-post" } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`
