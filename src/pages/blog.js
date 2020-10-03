/** @jsx jsx */

/***************************************************************************\
  modules
\***************************************************************************/
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'

/***************************************************************************\
  components 
\***************************************************************************/
import { Divider } from '../components/divider'
import { FeaturedBlog } from '../components/featured-blog'
import SEO from '../components/seo'
import Layout from '../components/main-layout'

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <FeaturedBlog />
      <Divider />
    </Layout>
  )
}

let sx = {
  container: {},
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
