import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

// StaticQuery
// Used anyware, doesn't accept vars, can't use context

// Page Query
// Must be used on pages

class PostLayout extends Component {
  render() {
    const {
      data: { markdownRemark },
      location,
    } = this.props
    return (
      <Layout location={location}>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Layout>
    )
  }
}

export default PostLayout

export const query = graphql`
  query PostLayout($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date
      }
    }
  }
`
