import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Blogs from '../components/BlogLatest'
import Layout from '../components/layout'

export class BlogsPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Blogs" />
        <Blogs />
      </Layout>
    )
  }
}

export default BlogsPage
