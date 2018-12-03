import React, { Component } from 'react'
import Layout from './layout'

class PostLayout extends Component {
  render() {
    return (
      <Layout>
        {console.log(this.props)}
        <h1>Privet</h1>
      </Layout>
    )
  }
}

export default PostLayout
