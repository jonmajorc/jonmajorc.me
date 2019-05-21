import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Blog from '../components/Blog'
import Layout from '../components/layout'

export class BlogsPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title="Blogs" />
        <Blog />
      </Layout>
    )
  }
}

export default BlogsPage
